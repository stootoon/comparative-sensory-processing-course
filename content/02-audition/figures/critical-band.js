// The critical band, and the olfactory question it poses.
//
// §12.6 proposes an olfactory masking experiment by analogy with the auditory
// critical band. That analogy needs the auditory version shown first: masking
// is a psychophysical measurement of a peripheral filter width.

export const controls = [
  { id: 'maskerHz', label: 'Masker centre frequency (Hz)', min: 200, max: 4000, step: 50, value: 1000,
    format: v=>v>=1000?`${(v/1000).toFixed(1)}k`:`${Math.round(v)}` },
  { id: 'bwFrac', label: 'Masker bandwidth (fraction of centre freq)', min: 0.02, max: 1.0, step: 0.02, value: 0.16,
    format: v=>v.toFixed(2) },
];

// Cochlear filter width: roughly constant-Q above ~500 Hz. ERB approximation.
const erb=f=>24.7*(4.37*f/1000+1);

export function draw(root, values, { createPlot, sample }) {
  const fc=values.maskerHz, bw=values.bwFrac*fc, cb=erb(fc);
  const inBand=Math.min(bw,cb);
  const threshold=10*Math.log10(Math.max(inBand,1));   // masked threshold ∝ in-band energy

  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:28,bottom:52,left:74},
    x:{domain:[100,8000],scale:'log',label:'frequency (Hz)'},
    y:{domain:[0,1.1],label:'relative level / filter gain'},
    title:'Masking: only energy inside the auditory filter matters'});
  // the cochlear filter centred on the target
  plot.line(sample(2,3.95,220,l=>{const f=Math.pow(10,l);
    return Math.exp(-Math.pow((f-fc)/(cb*0.9),2));}).map(([l,y])=>[Math.pow(10,l),y]),
    {className:'series-1'});
  // the masker band
  const lo=fc-bw/2, hi=fc+bw/2;
  plot.area([[Math.max(120,lo),0.75],[Math.min(7800,hi),0.75]],{className:'series-2',baseline:0});
  plot.line([[Math.max(120,lo),0.75],[Math.min(7800,hi),0.75]],{className:'series-2'});
  plot.vline(fc,{className:'marker',label:'target tone'});
  plot.legend([{label:'auditory filter at the target frequency',className:'series-1'},
               {label:'masker band',className:'series-2'}]);

  const wider = bw>cb;
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Auditory filter width at ${fc>=1000?(fc/1000).toFixed(1)+' kHz':Math.round(fc)+' Hz'} is about ` +
    `<strong>${cb.toFixed(0)} Hz</strong>; the masker is <strong>${bw.toFixed(0)} Hz</strong> wide. ` +
    (wider
      ? `The masker is now <em>wider than the filter</em>, so widening it further adds energy the filter rejects ` +
        `and <strong>masking stops increasing</strong>. That plateau is how the critical band is measured — a ` +
        `purely behavioural experiment that reads out a peripheral filter width.`
      : `The masker still fits <em>inside</em> the filter, so all its energy contributes and widening it makes ` +
        `masking worse. <strong>Keep widening</strong> until the curve flattens: the width at which it stops is ` +
        `the critical band.`) +
    `<br><br><strong>The olfactory version (§12.6):</strong> is there a masking bandwidth in chemical space? ` +
    `The sharp prediction is that masking should track <em>receptor-activation overlap</em>, not perceptual ` +
    `similarity — and those two dissociate, since molecules can smell alike while activating different receptors. ` +
    `Where they come apart is the crucial test, and it distinguishes a peripheral account of olfactory masking ` +
    `from a central one.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='ERB filter widths from the standard approximation; figure generated for this course.';
  root.appendChild(c);
}
