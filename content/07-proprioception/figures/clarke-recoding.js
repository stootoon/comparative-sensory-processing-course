// Muscle basis -> limb basis, by the second synapse.
// §7.5 is the course's clearest demonstration that the consumer determines
// the code. This shows the two bases side by side on the same movement.
export const controls = [
  { id: 'phase', label: 'Point in the step cycle', min: 0, max: 100, step: 1, value: 30, format:v=>`${Math.round(v)}%` },
  { id: 'basis', label: 'Show', type: 'select', value: 'both',
    options: [{value:'both',label:'Both bases over a step cycle'},
              {value:'scatter',label:'Muscle basis vs limb basis'}] },
];
const cyc=p=>{const t=2*Math.PI*p/100;
  return {hip:0.5+0.35*Math.sin(t), knee:0.5+0.3*Math.sin(t+1.9), ankle:0.5+0.25*Math.sin(t+3.4)};};
const limb=j=>({length:0.35+0.45*(1-Math.abs(j.knee-0.5)), orient:0.5+0.4*(j.hip-0.5)});

export function draw(root, values, { createPlot, sample }) {
  if((values.basis??'both')==='scatter') return scatter(root,createPlot,sample);
  const p=values.phase;
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:30,bottom:52,left:78},
    x:{domain:[0,100],label:'step cycle (%)'},
    y:{domain:[0,1.05],label:'normalised value'},
    title:'Muscle lengths and limb variables over one step cycle'});
  for(const [k,cls] of [['hip','series-3'],['knee','series-4'],['ankle','series-5']])
    plot.line(sample(0,100,200,x=>cyc(x)[k]),{className:cls,dashed:true,width:1.3});
  plot.line(sample(0,100,200,x=>limb(cyc(x)).length),{className:'series-1'});
  plot.line(sample(0,100,200,x=>limb(cyc(x)).orient),{className:'series-2'});
  plot.vline(p,{className:'marker'});
  plot.legend([{label:'limb axis LENGTH (what Clarke\'s nucleus reports)',className:'series-1'},
               {label:'limb axis ORIENTATION',className:'series-2'},
               {label:'individual muscle lengths',className:'series-3',dashed:true}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Dashed traces are individual muscle lengths — three signals with different phases, no one of which describes ` +
    `the limb. Solid traces are the <strong>global limb variables</strong>: the length and orientation of the ` +
    `hip-to-foot axis.` +
    `<br><br>Neurons in Clarke's nucleus are better predicted by the solid traces than by the dashed ones. ` +
    `<strong>The recoding has happened by the second synapse</strong>, before the signal reaches the cerebellum — ` +
    `because the cerebellum runs a forward model, and forward models operate on task variables rather than on ` +
    `muscle lengths.` +
    `<br><br>This is the course's clearest evidence that the consumer determines the code, and it raises a ` +
    `question for the bulb that has not been much pursued: the olfactory debate has assumed the first circuit ` +
    `decorrelates. <strong>What if its job is coordinate transformation instead</strong> — toward bearing and ` +
    `distance, if the dominant consumer is navigation?`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Schematic of the recoding reported by Bosco & Poppele; figure generated for this course.';
  root.appendChild(c);
}
function scatter(root,createPlot,sample){
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:30,bottom:52,left:78},
    x:{domain:[0,1],label:'limb axis length'},y:{domain:[0,1],label:'limb axis orientation'},
    title:'The step cycle, drawn in the limb basis'});
  plot.line(sample(0,100,200,x=>0).map((_,i)=>{const j=cyc(i*100/199),L=limb(j);return [L.length,L.orient];}),
    {className:'series-1'});
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `The same step cycle plotted in the limb basis traces a simple closed loop. In the muscle basis it is a ` +
    `tangle of phase-shifted signals with no obvious structure. <strong>The transformation does not add ` +
    `information — it makes the structure that was always there legible to the consumer.</strong> That is what a ` +
    `good change of coordinates does, and it is what §7.5 argues the first circuit is for.`;
  root.appendChild(n);
}
