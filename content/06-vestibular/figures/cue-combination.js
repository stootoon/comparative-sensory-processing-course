// Reliability-weighted cue combination, the course's one complete normative
// success. §6.7 asserts the prediction; this lets the reader watch the weights
// shift as reliability changes, and see the combined estimate beat both cues.

export const controls = [
  { id: 'visRel', label: 'Visual reliability', min: 0.05, max: 1, step: 0.01, value: 0.7, format:v=>v.toFixed(2) },
  { id: 'vestRel', label: 'Vestibular reliability', min: 0.05, max: 1, step: 0.01, value: 0.5, format:v=>v.toFixed(2) },
  { id: 'conflict', label: 'Cue conflict (degrees)', min: 0, max: 20, step: 0.5, value: 0, format:v=>v.toFixed(1) },
];
const g=(x,mu,sd)=>Math.exp(-0.5*((x-mu)/sd)**2)/(sd*Math.sqrt(2*Math.PI));

export function draw(root, values, { createPlot, sample }) {
  const sv=1/values.visRel, sk=1/values.vestRel, c=values.conflict;
  const muV=-c/2, muK=c/2;
  // Inverse-variance weighting
  const wV=(1/sv**2)/((1/sv**2)+(1/sk**2)), wK=1-wV;
  const muC=wV*muV+wK*muK, sc=Math.sqrt(1/((1/sv**2)+(1/sk**2)));

  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:28,bottom:52,left:74},
    x:{domain:[-25,25],label:'estimated heading (degrees)'},
    y:{domain:[0,Math.max(0.6,1.05/(sc*Math.sqrt(2*Math.PI)))],label:'probability density'},
    title:'Reliability-weighted combination of visual and vestibular heading cues'});
  plot.line(sample(-25,25,240,x=>g(x,muV,sv)),{className:'series-1',dashed:true});
  plot.line(sample(-25,25,240,x=>g(x,muK,sk)),{className:'series-2',dashed:true});
  plot.area(sample(-25,25,240,x=>g(x,muC,sc)),{className:'series-3'});
  plot.line(sample(-25,25,240,x=>g(x,muC,sc)),{className:'series-3'});
  plot.vline(muC,{className:'marker',label:`combined ${muC.toFixed(1)}°`});
  plot.legend([{label:'visual (optic flow)',className:'series-1',dashed:true},
               {label:'vestibular',className:'series-2',dashed:true},
               {label:'optimal combination',className:'series-3'}]);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Weights: <strong>visual ${(wV*100).toFixed(0)}%, vestibular ${(wK*100).toFixed(0)}%</strong>. The combined ` +
    `estimate is narrower than either single cue — its standard deviation is ${sc.toFixed(2)}, against ` +
    `${sv.toFixed(2)} and ${sk.toFixed(2)}. <strong>Combining always beats either alone</strong>, and the ` +
    `improvement is quantitative, not just directional.` +
    `<br><br><strong>Drag visual reliability down</strong> — as happens when the optic flow stimulus is degraded — ` +
    `and the combined estimate slides toward the vestibular cue. MSTd neurons and behaviour both do this, by the ` +
    `predicted amount. That is the course's one complete normative success (§6.7).` +
    `<br><br><strong>Now add conflict.</strong> At large disagreement, averaging is the wrong answer — the cues ` +
    `probably do not share a common cause, and the system should segregate rather than fuse. That is causal ` +
    `inference rather than cue combination, and it is where this clean story stops being clean.`;
  root.appendChild(n);
  const c2=document.createElement('p'); c2.className='x-figure-credit';
  c2.textContent='Standard cue-combination calculation; illustrates the result of Angelaki and colleagues. Generated for this course.';
  root.appendChild(c2);
}
