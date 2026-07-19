// Natural postures occupy a low-dimensional manifold in a high-dimensional
// joint space. §7.2 argues this is what makes the coordinate transformation
// tractable — and the property olfaction may or may not share.
export const controls = [
  { id: 'nComp', label: 'Principal components retained', min: 1, max: 10, step: 1, value: 3, format:v=>`${Math.round(v)}` },
  { id: 'dof', label: 'Degrees of freedom in the hand', min: 5, max: 25, step: 1, value: 20, format:v=>`${Math.round(v)}` },
];
export function draw(root, values, { createPlot, sample }) {
  const D=Math.round(values.dof), k=Math.round(values.nComp);
  // Eigenspectrum of natural hand postures: steeply decaying.
  const ev=Array.from({length:D},(_,i)=>Math.exp(-i/2.1));
  const tot=ev.reduce((a,b)=>a+b,0);
  let cum=0; const cumv=ev.map(v=>(cum+=v)/tot);
  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:30,bottom:52,left:76},
    x:{domain:[0.5,D+0.5],label:'principal component'},
    y:{domain:[0,1.05],label:'cumulative variance explained'},
    title:'Natural hand postures live on a low-dimensional manifold'});
  plot.bars(ev.map((v,i)=>[i+1,v/tot]),{className:'series-3',barWidth:Math.max(4,300/D)});
  plot.line(cumv.map((v,i)=>[i+1,v]),{className:'series-1'});
  plot.vline(k,{className:'marker',label:`${k} components`});
  plot.hline(cumv[k-1],{className:'marker',label:`${(cumv[k-1]*100).toFixed(0)}% of variance`});
  plot.legend([{label:'cumulative variance',className:'series-1'},
               {label:'variance per component',className:'series-3'}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `With <strong>${D} degrees of freedom</strong>, the first <strong>${k}</strong> components already capture ` +
    `<strong>${(cumv[k-1]*100).toFixed(0)}%</strong> of the variance in natural postures. Grasping a mug and ` +
    `grasping an apple are far more similar than two random points in joint space.` +
    `<br><br>Anatomical coupling between digits, muscles spanning several joints, and the fact that behaviourally ` +
    `useful postures are a small subset of mechanically possible ones all conspire to keep movement on a ` +
    `low-dimensional manifold. <strong>That is what makes the coordinate transformation of §7.5 tractable.</strong>` +
    `<br><br>The comparative point: vision's spectral space is infinite-dimensional with a near-3-D natural ` +
    `ensemble, and proprioception's joint space is ~20-D with a ~3-D ensemble. Both compress cheaply. ` +
    `<strong>Whether natural odour scenes do the same is unmeasured</strong>, and it is the single most ` +
    `consequential unknown number in olfaction.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Eigenspectrum modelled on published analyses of natural hand postures; figure generated for this course.';
  root.appendChild(c);
}
