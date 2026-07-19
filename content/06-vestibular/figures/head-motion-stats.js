// Natural head-motion statistics, and the canal's mechanical band.
//
// §6.2 claims the canal's transfer function is matched to the frequency
// content of natural head movement. Overlaying the two is the whole argument.

export const controls = [
  { id: 'behaviour', label: 'Behaviour', type: 'select', value: 'walking',
    options: [{value:'quiet',label:'Quiet standing'},{value:'walking',label:'Walking'},
              {value:'running',label:'Running'},{value:'grooming',label:'Active head movement'}] },
];
const B={quiet:{pk:0.6,w:0.5,amp:0.15},walking:{pk:2.0,w:0.55,amp:1.0},
         running:{pk:4.0,w:0.5,amp:1.6},grooming:{pk:6.0,w:0.65,amp:1.2}};

export function draw(root, values, { createPlot, sample }) {
  const b=B[values.behaviour??'walking'];
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:28,bottom:52,left:74},
    x:{domain:[0.02,50],scale:'log',label:'frequency (Hz)'},
    y:{domain:[1e-3,2],scale:'log',label:'normalised power / gain'},
    title:'Natural head motion against the canal transfer function'});
  // head-motion spectrum: 1/f-ish with a gait peak
  plot.line(sample(-1.7,1.7,220,l=>{const f=Math.pow(10,l);
    return 0.35*Math.pow(f,-1)+b.amp*Math.exp(-Math.pow(Math.log10(f/b.pk)/b.w,2));})
    .map(([l,y])=>[Math.pow(10,l),y]),{className:'series-1'});
  // canal: band-pass, velocity-proportional between ~0.1 and ~10 Hz
  plot.line(sample(-1.7,1.7,220,l=>{const f=Math.pow(10,l);
    return 1/Math.sqrt((1+Math.pow(0.1/f,2))*(1+Math.pow(f/12,2)));})
    .map(([l,y])=>[Math.pow(10,l),y]),{className:'series-3',dashed:true});
  plot.vline(b.pk,{className:'marker',label:'peak of motion'});
  plot.legend([{label:'natural head-motion spectrum',className:'series-1'},
               {label:'semicircular canal gain (velocity)',className:'series-3',dashed:true}]);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `The canal's mechanical band — set by fluid inertia and cupula elasticity, with no neural computation at all — ` +
    `sits right on top of where natural head motion has its power. <strong>Change behaviour and the motion peak ` +
    `moves, but stays inside the band.</strong>` +
    `<br><br>That is a sensor matched to its ensemble, and the matching is done by the accessory structure rather ` +
    `than by a neuron (§6.3). Where the match fails — at very low frequencies, where the cupula returns to rest and ` +
    `the canal signal decays — the brainstem patches it with <strong>velocity storage</strong> (§6.5): a neural ` +
    `integrator extending the response exactly over the range the mechanics cannot cover.` +
    `<br><br>A prior about the world, implemented as a circuit, compensating for a known deficiency in the ` +
    `transducer. Nothing in olfaction is anywhere near this well characterised — which is what a measured ensemble ` +
    `buys you.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Schematic spectra following published head-motion measurements; figure generated for this course.';
  root.appendChild(c);
}
