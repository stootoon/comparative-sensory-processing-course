// The whole course on two axes.
//
// This is the figure §0.0 needs: a map of where the modalities sit, so the
// reader knows what they are accumulating. Pick any two axes and watch
// olfaction separate from the modalities with mature theories.

// Both dropdowns offer every axis. They used to offer disjoint subsets, which
// made two of the three comparisons this figure's own caption recommends —
// ensemble against theory, and ordered against theory — impossible to select.
const AXES = [
  {value:'dim',      label:'Stimulus dimensionality'},
  {value:'ensemble', label:'Is the natural ensemble measured?'},
  {value:'theory',   label:'Maturity of normative theory'},
  {value:'ordered',  label:'Is the receptor array ordered?'},
  {value:'synapses', label:'Synapses to cortex'},
  {value:'active',   label:'Active control of stimulus'},
  {value:'speed',    label:'Sensor speed vs signal speed'},
];

export const controls = [
  { id: 'xAxis', label: 'Horizontal axis', type: 'select', value: 'ensemble', options: AXES },
  { id: 'yAxis', label: 'Vertical axis',   type: 'select', value: 'theory',   options: AXES },
];

// Ordinal scores, 0–10. Deliberately coarse — the figure is for locating
// modalities relative to one another, not for pretending to precision.
const M=[
 {n:'Vision',        dim:5, synapses:4, active:4, speed:5, theory:8, ensemble:10, ordered:10, cls:'series-1'},
 {n:'Audition',      dim:2, synapses:6, active:2, speed:9, theory:8, ensemble:10, ordered:10, cls:'series-2'},
 {n:'Olfaction',     dim:10,synapses:2, active:6, speed:1, theory:2, ensemble:3,  ordered:0,  cls:'series-3'},
 {n:'Touch',         dim:4, synapses:4, active:7, speed:8, theory:5, ensemble:5,  ordered:8,  cls:'series-4'},
 {n:'Gustation',     dim:1, synapses:4, active:5, speed:6, theory:5, ensemble:6,  ordered:0,  cls:'series-5'},
 {n:'Vestibular',    dim:1, synapses:3, active:1, speed:8, theory:10,ensemble:9,  ordered:9,  cls:'series-1'},
 {n:'Proprioception',dim:3, synapses:4, active:10,speed:8, theory:6, ensemble:6,  ordered:4,  cls:'series-2'},
 {n:'Nociception',   dim:2, synapses:3, active:5, speed:7, theory:3, ensemble:2,  ordered:8,  cls:'series-3'},
 {n:'Electroreception',dim:2,synapses:3,active:10,speed:8, theory:7, ensemble:8,  ordered:8,  cls:'series-4'},
 {n:'Echolocation',  dim:3, synapses:6, active:10,speed:9, theory:6, ensemble:6,  ordered:9,  cls:'series-5'},
];
const LAB={dim:'stimulus dimensionality →',synapses:'synapses to cortex →',
 active:'active control of the stimulus →',speed:'sensor fast relative to signal →',
 theory:'maturity of normative theory →',ensemble:'natural ensemble measured →',
 ordered:'receptor array ordered →'};

// Pearson r across the ten modalities, for whichever pair is on screen. The
// caption used to assert "the correlation is close to perfect"; showing the
// number lets the reader check the claim instead of taking it.
function corr(a, b) {
  const n=M.length;
  const xs=M.map(m=>m[a]), ys=M.map(m=>m[b]);
  const mx=xs.reduce((s,v)=>s+v,0)/n, my=ys.reduce((s,v)=>s+v,0)/n;
  let sxy=0, sxx=0, syy=0;
  for(let i=0;i<n;i++){
    const dx=xs[i]-mx, dy=ys[i]-my;
    sxy+=dx*dy; sxx+=dx*dx; syy+=dy*dy;
  }
  if(sxx===0||syy===0) return null;   // a constant axis has no correlation
  return sxy/Math.sqrt(sxx*syy);
}

export function draw(root, values, { createPlot }) {
  const xa=values.xAxis??'ensemble', ya=values.yAxis??'theory';
  const plot=createPlot(root,{width:700,height:400,
    margin:{top:20,right:30,bottom:54,left:80},
    x:{domain:[-0.6,11],label:LAB[xa],ticks:[0,2,4,6,8,10]},
    y:{domain:[-0.6,11.4],label:LAB[ya],ticks:[0,2,4,6,8,10]},
    title:'Where the modalities sit'});
  // jitter identical points apart so labels stay legible
  const used=[];
  for(const m of M){
    let x=m[xa], y=m[ya];
    while(used.some(([a,b])=>Math.abs(a-x)<0.5&&Math.abs(b-y)<0.5)) y+=0.62;
    used.push([x,y]);
    plot.points([[x,y]],{className:m.cls,radius:m.n==='Olfaction'?7:5});
    plot.annotate(x+0.28,y+0.1,m.n,{anchor:'start',className:m.cls});
  }
  const r=xa===ya?null:corr(xa,ya);
  const rTxt=r===null?null:(r<0?'−':'')+Math.abs(r).toFixed(2);

  const n=document.createElement('p'); n.className='x-figure-note';
  let body;
  if(xa===ya){
    body = `Both axes are showing the same property, so every modality necessarily lies on the diagonal. ` +
      `Change one of them to compare two different properties.`;
  } else if(xa==='ensemble'&&ya==='theory'||xa==='theory'&&ya==='ensemble'){
    body = `<strong>This is the course's central empirical claim, and the opening view.</strong> Measured ensemble ` +
      `against theoretical maturity, <strong>r = ${rTxt}</strong> across ten modalities. Every modality whose input ` +
      `statistics someone characterised has a normative theory; the one whose statistics nobody characterised does ` +
      `not, and olfaction sits alone in the bottom-left corner. ` +
      `<br><br>The correlation is not evidence of the causal direction, and the honest alternative is that both ` +
      `track a third variable — tractability, or how long a field has had good tools. The reason to prefer the ` +
      `causal reading is historical rather than statistical: in vision and audition the ensemble was measured ` +
      `<em>first</em>, largely by people not thinking about coding theory, and the theory followed. ` +
      `<br><br>Now try the two rival explanations of <em>why</em> olfaction lacks a theory, and note that the ` +
      `numbers do not go the way the course's slogan implies. Ordered array against theory gives r = 0.62; ` +
      `dimensionality against theory gives r = −0.54. <strong>Disorder correlates with poor theory slightly ` +
      `better than dimensionality does.</strong> ` +
      `<br><br>The case for blaming dimensionality anyway does not rest on the correlation — it rests on ` +
      `gustation being an <em>outlier</em> on the disorder axis. Taste is maximally disordered and has a perfectly ` +
      `serviceable theory, which is a counterexample the correlation coefficient averages away. Highlight it and ` +
      `see. This is why §12.1 settles on a <strong>disorder × dimensionality interaction</strong> rather than ` +
      `pinning it on either alone, and it is a good demonstration that a scatter of nine points can mislead you ` +
      `if you read only the summary statistic.`;
  } else {
    body = `Olfaction is drawn larger. <strong>r = ${rTxt}</strong> across the ten modalities on these two axes. ` +
      `<br><br>For reference, the strongest pair in the whole datasheet is <strong>ensemble measured against ` +
      `theory maturity, r = 0.92</strong> — this course's central empirical claim, and the view this figure opens ` +
      `on. Next come dimensionality against sensor speed (−0.82) and ordered array against theory (0.62). ` +
      `Dimensionality against theory maturity, which the course leans on most heavily in prose, is only ` +
      `−0.54 — still weaker than the disorder axis it is usually contrasted with, though both rivals weakened when nociception was added. §12.1 takes that seriously rather ` +
      `than explaining it away.`;
  }
  n.innerHTML = body + `<br><br>Scores are ordinal and deliberately coarse — they are for locating modalities ` +
    `relative to one another, not for pretending to precision, and <em>r</em> on ten hand-assigned ordinal ` +
    `scores is an illustration rather than a statistical result.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Summary figure generated for this course from the per-module datasheets.';
  root.appendChild(c);
}
