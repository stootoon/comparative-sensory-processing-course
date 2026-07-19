// The whole course on two axes.
//
// This is the figure §0.0 needs: a map of where the modalities sit, so the
// reader knows what they are accumulating. Pick any two axes and watch
// olfaction separate from the modalities with mature theories.

export const controls = [
  { id: 'xAxis', label: 'Horizontal axis', type: 'select', value: 'dim',
    options: [{value:'dim',label:'Stimulus dimensionality'},
              {value:'synapses',label:'Synapses to cortex'},
              {value:'active',label:'Active control of stimulus'},
              {value:'speed',label:'Sensor speed vs signal speed'}] },
  { id: 'yAxis', label: 'Vertical axis', type: 'select', value: 'theory',
    options: [{value:'theory',label:'Maturity of normative theory'},
              {value:'ensemble',label:'Is the natural ensemble measured?'},
              {value:'ordered',label:'Is the receptor array ordered?'},
              {value:'dim',label:'Stimulus dimensionality'}] },
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
 {n:'Electroreception',dim:2,synapses:3,active:10,speed:8, theory:7, ensemble:8,  ordered:8,  cls:'series-4'},
 {n:'Echolocation',  dim:3, synapses:6, active:10,speed:9, theory:6, ensemble:6,  ordered:9,  cls:'series-5'},
];
const LAB={dim:'stimulus dimensionality →',synapses:'synapses to cortex →',
 active:'active control of the stimulus →',speed:'sensor fast relative to signal →',
 theory:'maturity of normative theory →',ensemble:'natural ensemble measured →',
 ordered:'receptor array ordered →'};

export function draw(root, values, { createPlot }) {
  const xa=values.xAxis??'dim', ya=values.yAxis??'theory';
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
  const o=M.find(m=>m.n==='Olfaction');
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Olfaction is drawn larger. <strong>Try dimensionality against theory maturity</strong> — the two clump ` +
    `apart, and olfaction sits alone in the high-dimensional, low-theory corner. Then try <strong>ensemble ` +
    `measured against theory maturity</strong>: the correlation is close to perfect, which is this course's ` +
    `central empirical claim. Modalities whose input statistics someone measured have theories; the one whose ` +
    `statistics nobody measured does not. ` +
    `<br><br>Then try axes that <em>don't</em> separate it. Ordered-array against theory puts gustation with ` +
    `olfaction, yet gustation has no theoretical difficulty — which is the §5.4 argument that <strong>the problem ` +
    `is dimensionality, not disorder</strong>. Scores are ordinal and deliberately coarse; they are for locating ` +
    `modalities relative to each other, not for pretending to precision.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Summary figure generated for this course from the per-module datasheets.';
  root.appendChild(c);
}
