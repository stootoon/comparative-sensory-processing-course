// The 4-12 Hz club.
//
// Four self-generated sampling rhythms in four modalities converge on one
// frequency band. The course flags this repeatedly; this figure puts them on
// one axis so the convergence is visible rather than asserted.

export const controls = [
  { id: 'mass', label: 'Body mass (g, log scale)', min: 1, max: 5, step: 0.1, value: 1.5,
    format: v=>`10^${v.toFixed(1)} g` },
];

const R=[
 {n:'Saccades (human)',      lo:2, hi:4,  cls:'series-1', mod:'Vision'},
 {n:'Sniffing (rodent)',     lo:2, hi:10, cls:'series-3', mod:'Olfaction'},
 {n:'Whisking (rodent)',     lo:5, hi:15, cls:'series-4', mod:'Touch'},
 {n:'Licking (rodent)',      lo:6, hi:7,  cls:'series-5', mod:'Gustation'},
 {n:'Speech syllables',      lo:4, hi:8,  cls:'series-2', mod:'Audition'},
 {n:'Hippocampal theta',     lo:4, hi:12, cls:'marker',   mod:'—'},
];

export function draw(root, values, { createPlot, sample }) {
  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:30,bottom:52,left:170},
    x:{domain:[1,30],scale:'log',label:'frequency (Hz)'},
    y:{domain:[-0.6,R.length-0.4],label:'',
       ticks:R.map((_,i)=>i),tickFormat:v=>R[R.length-1-Math.round(v)].n},
    title:'Self-generated sampling rhythms, all modalities'});
  R.forEach((r,i)=>{
    const y=R.length-1-i;
    plot.line([[r.lo,y],[r.hi,y]],{className:r.cls,width:9});
    plot.points([[r.lo,y],[r.hi,y]],{className:r.cls,radius:3});
  });
  // The band they all overlap.
  plot.vline(4,{className:'marker',label:'4 Hz'});
  plot.vline(12,{className:'marker',label:'12 Hz'});

  // Biomechanical prediction: resonance scales roughly as mass^(-1/6..-1/4)
  const m=Math.pow(10,values.mass);
  const predicted=8*Math.pow(m/30,-0.2);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Six rhythms, five modalities, one band. That convergence demands an explanation and does not have an ` +
    `agreed one. Three candidates, each with a distinguishing prediction:` +
    `<br><br><strong>Biomechanical</strong> — moving a sensor has a natural resonance. Predicts the band should ` +
    `scale with body size; at <strong>${m<1000?m.toFixed(0)+' g':(m/1000).toFixed(1)+' kg'}</strong> this would ` +
    `predict roughly <strong>${predicted.toFixed(1)} Hz</strong>. Testable across species.` +
    `<br><strong>Integration time</strong> — downstream circuits integrate over ~100 ms, so faster sampling wastes ` +
    `samples and slower wastes time. Predicts the band tracks neural time constants, <em>not</em> body size.` +
    `<br><strong>Shared clock</strong> — a common rhythm keeps multiple sampling systems in register, which matters ` +
    `when sniffing and whisking at the same object. Predicts phase coupling between them, which is observed.` +
    `<br><br>The first two make opposite predictions about body-size scaling, which makes this a rare comparative ` +
    `question with a clean discriminating measurement.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Ranges compiled from the literature; figure generated for this course.';
  root.appendChild(c);
}
