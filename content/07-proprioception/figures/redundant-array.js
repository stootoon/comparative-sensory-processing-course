// More sensors than degrees of freedom, non-orthogonal, confounded — and it
// works. §7.4 introduces "ordered by something that is not the variable of
// interest" as a third state on the ordering axis.
export const controls = [
  { id: 'nMuscles', label: 'Muscles (sensors)', min: 2, max: 12, step: 1, value: 6, format:v=>`${Math.round(v)}` },
  { id: 'noise', label: 'Per-sensor noise', min: 0.01, max: 0.4, step: 0.01, value: 0.12, format:v=>v.toFixed(2) },
];
export function draw(root, values, { createPlot, sample }) {
  const N=Math.round(values.nMuscles), s=values.noise;
  // Two joint angles estimated from N muscle lengths with random, correlated
  // (non-orthogonal) sensitivity vectors. Error ~ s/sqrt(N) but capped by
  // the conditioning of the sensitivity matrix.
  const err=n=>{
    const cond=1+2.2*Math.exp(-(n-2)/3);      // poorly conditioned when few sensors
    return s*cond/Math.sqrt(n);
  };
  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:30,bottom:52,left:78},
    x:{domain:[2,12],label:'number of muscles reporting on the joint pair',ticks:[2,4,6,8,10,12]},
    y:{domain:[0,0.5],label:'joint-angle estimation error'},
    title:'Redundancy is what makes a badly-conditioned array usable'});
  plot.line(sample(2,12,120,err),{className:'series-1'});
  plot.points([[N,err(N)]],{className:'series-1',radius:6});
  plot.line(sample(2,12,120,n=>s/Math.sqrt(n)),{className:'series-3',dashed:true});
  plot.vline(2,{className:'marker',label:'2 DOF to estimate'});
  plot.legend([{label:'actual error (non-orthogonal sensors)',className:'series-1'},
               {label:'ideal √n improvement',className:'series-3',dashed:true}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `With <strong>${N} muscles</strong> reporting on two joint angles the estimate is over-determined, and the ` +
    `redundancy averages away independent sensor noise. But note the gap from the ideal √n line at small ` +
    `<em>N</em>: because muscles act together, their sensitivity vectors are <strong>non-orthogonal</strong>, and ` +
    `a poorly-conditioned array wastes much of the information it collects.` +
    `<br><br>This is the same structure as glomerular convergence (§3.5) and the same caveat: pooling helps only ` +
    `for the independent part of the noise. Spindles in synergistic muscles see correlated fluctuations, exactly ` +
    `as receptor neurons of one type sample the same air.` +
    `<br><br>The wider point for the course's ordering axis: proprioception's array is <strong>ordered by body ` +
    `location, which is not the variable of interest</strong>. That is a third state, distinct from both vision's ` +
    `useful ordering and olfaction's absence of one — and arguably harder, since a misleading arrangement must be ` +
    `actively transformed out of.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Estimation-error model generated for this course.'; root.appendChild(c);
}
