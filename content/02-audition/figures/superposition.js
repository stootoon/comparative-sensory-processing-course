// Why audition's mixture problem is harder than vision's.
//
// §2.1 argues occlusion loses information but leaves the remaining evidence
// clean, while superposition contaminates every sample. Showing two waveforms
// summing — and the sum being genuinely unreadable — makes that immediate.

export const controls = [
  { id: 'f1', label: 'Source A frequency (Hz)', min: 80, max: 400, step: 5, value: 140, format:v=>`${Math.round(v)}` },
  { id: 'f2', label: 'Source B frequency (Hz)', min: 80, max: 400, step: 5, value: 220, format:v=>`${Math.round(v)}` },
  { id: 'amp2', label: 'Source B level', min: 0, max: 1.5, step: 0.05, value: 0.8, format:v=>v.toFixed(2) },
];

const harm=(t,f0,n)=>{let s=0;for(let k=1;k<=n;k++)s+=Math.sin(2*Math.PI*k*f0*t)/Math.pow(k,0.8);return s/2.2;};

export function draw(root, values, { createPlot, sample }) {
  const {f1,f2,amp2}=values, T=0.04;
  const mk=(title,fn,cls,h)=>{
    const p=createPlot(root,{width:700,height:h,margin:{top:18,right:24,bottom:h>150?46:26,left:70},
      x:{domain:[0,T],label:h>150?'time (s)':'',tickFormat:v=>v.toFixed(3)},
      y:{domain:[-2.2,2.2],label:title},title:title});
    p.line(sample(0,T,600,fn),{className:cls});
    return p;
  };
  mk('source A alone',t=>harm(t,f1,8),'series-1',110);
  mk('source B alone',t=>amp2*harm(t,f2,8),'series-2',110);
  mk('what the eardrum receives',t=>harm(t,f1,8)+amp2*harm(t,f2,8),'series-3',180);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `The third trace is the <strong>only</strong> thing the ear gets. There is no separate channel per source — ` +
    `every sample is a sum, and the two components are inseparably entangled in a single scalar at each instant.` +
    `<br><br><strong>Contrast vision.</strong> Two objects at different depths project to <em>different</em> ` +
    `photoreceptors: the nearer occludes the further, so information is lost, but the pixels you do receive are ` +
    `uncontaminated. Segmentation is about grouping clean evidence. Audition has no occlusion and no clean ` +
    `evidence — nothing is hidden, and nothing is pure.` +
    `<br><br>What makes it soluble is that the components are not arbitrary. Set the two fundamentals to a simple ` +
    `ratio and watch the sum become periodic and fuse; set them to an awkward ratio and it becomes rough and ` +
    `separable. <strong>Harmonicity is the structure that rescues the problem</strong> — and §12.5 argues ` +
    `temporal correlation occupies exactly that slot in olfaction, since chemistry offers no lawful relation ` +
    `between components of one source.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Synthesised waveforms; figure generated for this course.'; root.appendChild(c);
}
