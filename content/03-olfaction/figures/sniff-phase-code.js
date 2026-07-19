// The sniff as a clock, and latency-relative-to-sniff as a code.
//
// §3.9 argues the sniff supplies its own phase reference, which is what makes
// a latency code well-defined. §3.7 shows piriform using earliest-responders
// to achieve concentration invariance. This figure puts the two together:
// raise concentration and watch response AMPLITUDES change a lot while the
// ORDER of first spikes barely changes.

export const controls = [
  { id: 'logConc', label: 'Concentration', min: -1, max: 2, step: 0.05, value: 0,
    format: v=>`10^${v.toFixed(2)}` },
  { id: 'sniffHz', label: 'Sniff frequency (Hz)', min: 2, max: 10, step: 0.5, value: 5, format: v=>v.toFixed(1) },
];

// Six glomeruli with fixed affinities. Latency falls with drive; rank order
// is far more stable than amplitude — that is the point of the figure.
const AFF=[1.00,0.62,0.40,0.26,0.15,0.08];

export function draw(root, values, { createPlot, sample }) {
  const c=Math.pow(10,values.logConc), T=1000/values.sniffHz;
  const drive=AFF.map(a=>a*c);
  const lat=drive.map(dv=>25+95/(1+Math.pow(dv,0.85)));
  const amp=drive.map(dv=>dv/(1+dv));

  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:24,bottom:52,left:78},
    x:{domain:[0,T],label:'time within the sniff cycle (ms)'},
    y:{domain:[-0.5,6.2],label:'glomerulus',
       ticks:[0,1,2,3,4,5],tickFormat:v=>`G${6-Math.round(v)}`},
    title:'Response latency, referenced to sniff onset'});
  // sniff envelope
  plot.area(sample(0,T,120,t=>0.5+0.45*Math.sin(2*Math.PI*t/T-Math.PI/2)).map(([t,v])=>[t,v*0.7-0.45]),
    {className:'series-5',baseline:-0.5});
  plot.vline(0,{className:'marker',label:'sniff onset',dashed:false});
  lat.forEach((L,i)=>{
    if(L>T) return;
    const y=5-i;
    plot.line([[L,y-0.28],[L,y+0.28]],{className:'series-1',width:2+6*amp[i]});
    plot.points([[L,y]],{className:'series-1',radius:2+4*amp[i]});
  });
  plot.legend([{label:'first spike (thickness = amplitude)',className:'series-1'},
               {label:'sniff (inhalation)',className:'series-5'}]);

  const order=lat.map((L,i)=>[L,i]).sort((a,b)=>a[0]-b[0]).map(([,i])=>`G${i+1}`).join(' → ');
  const spread=(Math.max(...amp)/Math.min(...amp.filter(a=>a>0))).toFixed(1);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Rank order of first spikes: <strong>${order}</strong>. Amplitude ratio across glomeruli: ` +
    `<strong>${spread}×</strong>. <br><br><strong>Drag concentration across three decades.</strong> The amplitudes ` +
    `change enormously and latencies all shorten — but the <em>order</em> is almost unchanged, because it is set ` +
    `by receptor affinity rather than by concentration. ` +
    `<br><br>That is the basis of the primacy account, and it explains how piriform achieves concentration ` +
    `invariance without normalising amplitude: listen to the earliest responders and shut the door (§3.7). ` +
    `<strong>None of this is definable without a phase reference</strong> — and the sniff, being self-generated, ` +
    `supplies its own. It is the clearest thing olfaction gets from being an active sense.`;
  root.appendChild(n);
  const c2=document.createElement('p'); c2.className='x-figure-credit';
  c2.textContent='Schematic generated for this course; illustrates primacy coding and the concentration-invariance mechanism of Bolding & Franks (2018).';
  root.appendChild(c2);
}
