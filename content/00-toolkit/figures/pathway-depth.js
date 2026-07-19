// Synapses from receptor to cortex, and to action, across all modalities.
//
// The course argues repeatedly that depth tracks the deadline of the fastest
// dependent behaviour, and how much must be computed before the signal is
// useful — not evolutionary age. Laying the pathways side by side is the
// clearest way to see whether that holds.

export const controls = [
  { id: 'sort', label: 'Order by', type: 'select', value: 'cortex',
    options: [{value:'cortex',label:'Synapses to cortex'},
              {value:'action',label:'Synapses to fastest motor output'},
              {value:'deadline',label:'Deadline of the fastest behaviour'}] },
];

const M=[
 {n:'Olfaction',      cortex:2, action:5, deadline:200, relay:'none',        cls:'series-3'},
 {n:'Vestibular',     cortex:4, action:3, deadline:10,  relay:'thalamus',    cls:'series-1'},
 {n:'Gustation',      cortex:4, action:3, deadline:500, relay:'thalamus',    cls:'series-5'},
 {n:'Vision',         cortex:4, action:4, deadline:150, relay:'LGN',         cls:'series-2'},
 {n:'Touch',          cortex:4, action:2, deadline:70,  relay:'VPL',         cls:'series-4'},
 {n:'Proprioception', cortex:4, action:1, deadline:30,  relay:'VPL / none',  cls:'series-2'},
 {n:'Audition',       cortex:6, action:4, deadline:50,  relay:'IC + MGB',    cls:'series-1'},
];

export function draw(root, values, { createPlot }) {
  const k=values.sort??'cortex';
  const rows=[...M].sort((a,b)=> k==='deadline' ? a.deadline-b.deadline : a[k]-b[k]);
  const xmax = k==='deadline' ? 600 : 7;
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:34,bottom:52,left:150},
    x: k==='deadline'
        ? {domain:[5,700],scale:'log',label:'deadline of the fastest dependent behaviour (ms)'}
        : {domain:[0,xmax],label:k==='cortex'?'synapses from receptor to cortex':'synapses from receptor to motor output',ticks:[0,1,2,3,4,5,6,7]},
    y:{domain:[-0.6,rows.length-0.4],label:'',
       ticks:rows.map((_,i)=>i),tickFormat:v=>rows[rows.length-1-Math.round(v)].n},
    title:'Pathway depth across the modalities'});
  rows.forEach((m,i)=>{
    const y=rows.length-1-i;
    const v = k==='deadline'? m.deadline : m[k];
    plot.line([[k==='deadline'?5:0,y],[v,y]],{className:m.cls,width:9});
    plot.points([[v,y]],{className:m.cls,radius:4});
  });

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = k==='cortex'
    ? `Depth to cortex, shortest at the top. <strong>Olfaction is shallowest at two synapses, audition deepest at ` +
      `six.</strong> The tempting explanation is evolutionary age. A better one: depth tracks <em>how much has to be ` +
      `computed before the signal is useful</em>. Audition must build location from scratch — it is nowhere in the ` +
      `cochlear array — and that takes binaural comparison, then integration with spectral cues. Vision and touch ` +
      `inherit location from the array. Olfaction computes nothing geometric early and goes almost straight to an ` +
      `associative structure. <strong>Switch to synapses-to-action</strong> and the ordering changes completely.`
    : k==='action'
    ? `Synapses to the fastest motor output. Now <strong>proprioception is shortest</strong> — the monosynaptic ` +
      `stretch reflex — and olfaction is <em>longest</em>. That inversion matters: olfaction is shallow to cortex ` +
      `but has no fast reflex arc at all, which argues its shallowness is not about reflex speed. It supports the ` +
      `§3.6 reading that there is simply no geometric re-mapping for a relay to perform.`
    : `Deadlines, log scale. The VOR at 10 ms and the grip-slip correction at 70 ms are why those pathways are ` +
      `three and two synapses. <strong>Compare with the synapses-to-action view and the correlation is strong.</strong> ` +
      `Note that vestibular — arguably the most essential sense, since losing it is catastrophic — has the thinnest ` +
      `cortical representation in this course. Distance to cortex does not measure importance.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Compiled from the per-module datasheets; figure generated for this course.';
  root.appendChild(c);
}
