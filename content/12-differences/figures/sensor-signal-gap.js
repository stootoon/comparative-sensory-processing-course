// The sensor-signal ratio.
//
// For each modality: the bandwidth the sensor can follow, against the bandwidth
// of the stimulus structure the animal demonstrably uses. The ratio is the
// quantity that matters, and it is above one everywhere except olfaction and
// electroreception. Those two are therefore the comparison the course needs.

export const controls = [
  { id: 'view', label: 'Show', type: 'select', value: 'ratio',
    options: [{value:'ratio', label:'Ratio: sensor bandwidth / signal bandwidth'},
              {value:'bands', label:'The two bandwidths separately'}] },
  { id: 'exotic', label: 'Include exotic senses', type: 'select', value: 'yes',
    options: [{value:'yes',label:'Yes — electroreception and echolocation'},
              {value:'no', label:'Classical senses only'}] },
];

// [name, sensor bandwidth Hz, behaviourally-used signal bandwidth Hz, exotic?, confidence]
const M=[
 ['Audition',        3000, 1000, false, 'well measured',   'series-2'],
 ['Touch (PC)',      1000,  700, false, 'well measured',   'series-4'],
 ['Proprioception',   300,   10, false, 'well measured',   'series-2'],
 ['Vestibular',       200,   20, false, 'well measured',   'series-1'],
 ['Vision',            50,   40, false, 'well measured',   'series-1'],
 ['Gustation',          5,    7, false, 'POORLY measured', 'series-5'],
 ['Olfaction',          5,   40, false, 'well measured',   'series-3'],
 ['Echolocation',   80000,10000, true,  'well measured',   'series-4'],
 ['Electroreception',1000,1000000,true, 'well measured',   'series-1'],
];

export function draw(root, values, { createPlot }) {
  const view=values.view??'ratio';
  const rows=M.filter(m=>(values.exotic??'yes')==='yes'||!m[3])
              .slice().sort((a,b)=>(a[1]/a[2])-(b[1]/b[2]));

  const plot=createPlot(root,{width:700,height:340,
    margin:{top:22,right:36,bottom:56,left:150},
    x: view==='ratio'
        ? {domain:[0.0005,200],scale:'log',label:'sensor bandwidth ÷ bandwidth of structure the animal uses'}
        : {domain:[1,2e6],scale:'log',label:'bandwidth (Hz)'},
    y:{domain:[-0.6,rows.length-0.4],label:'',
       ticks:rows.map((_,i)=>i),tickFormat:v=>rows[rows.length-1-Math.round(v)][0]},
    title: view==='ratio'?'Is the sensor fast enough?':'Sensor bandwidth against signal bandwidth'});

  rows.forEach((m,i)=>{
    const y=rows.length-1-i;
    if(view==='ratio'){
      const r=m[1]/m[2];
      plot.line([[Math.min(1,r),y],[Math.max(1,r),y]],{className:m[5],width:9});
      plot.points([[r,y]],{className:m[5],radius:4});
    } else {
      plot.line([[Math.min(m[1],m[2]),y],[Math.max(m[1],m[2]),y]],{className:'dim',width:3});
      plot.points([[m[1],y]],{className:m[5],radius:5});
      plot.points([[m[2],y]],{className:'marker',radius:4});
    }
  });
  if(view==='ratio') plot.vline(1,{label:'sensor exactly keeps up'});
  else plot.legend([{label:'sensor bandwidth',className:'series-1'},
                    {label:'bandwidth the animal uses',className:'marker'}]);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = view==='ratio'
    ? `Everything to the right of the line has a sensor that keeps up. <strong>Two modalities sit to the left: ` +
      `olfaction and electroreception.</strong> That pairing is the argument of this section. Olfactory receptor ` +
      `neurons follow roughly 5 Hz while mice use plume structure up to about 40 Hz (Ackels et al. 2021), a shortfall near ` +
      `an order of magnitude. Electric fish are worse off by three orders and solve it anyway, by pooling across ` +
      `many afferents — so a sub-unity ratio is a solvable problem with a known solution, not a barrier. ` +
      `<br><br>Note gustation, plotted near unity and flagged POORLY measured: the bandwidth of taste structure ` +
      `animals actually use during a lick bout has not been characterised the way plume structure has. That cell is ` +
      `unmeasured, not zero, and it is the one place this axis could still surprise.`
    : `The two bandwidths separately, log scale. The gaps are what matter. Audition, touch, proprioception and ` +
      `vestibular all have headroom. Vision is the marginal classical case — photoreceptor kinetics and the flicker ` +
      `rates animals use sit close together, which is why vision is scored "comparable" rather than "faster" on ` +
      `the datasheet. Olfaction and electroreception have the gap running the wrong way.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Order-of-magnitude figures compiled from the per-module sections. The gustation row is an estimate flagged as unmeasured; do not read it as data.';
  root.appendChild(c);
}
