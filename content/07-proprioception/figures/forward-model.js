// A forward model correcting a noisy, delayed sensor.
// §7.7 says the central representation is a predictor rather than a map, and
// §7.9 says sensing and control are one loop. Running the estimator with the
// prediction switched off makes both concrete.
export const controls = [
  { id: 'delay', label: 'Sensory delay (ms)', min: 0, max: 150, step: 5, value: 80, format:v=>`${Math.round(v)}` },
  { id: 'noise', label: 'Sensor noise', min: 0, max: 0.4, step: 0.01, value: 0.15, format:v=>v.toFixed(2) },
  { id: 'model', label: 'Forward model', type: 'select', value: 'on',
    options: [{value:'on',label:'On — predict, then correct'},{value:'off',label:'Off — sensor only'}] },
];
export function draw(root, values, { createPlot, sample }) {
  const D=values.delay/1000, s=values.noise, on=(values.model??'on')==='on';
  const T=1.2, truth=t=>0.5+0.4*Math.sin(2*Math.PI*1.2*t)*Math.exp(-t/2);
  const rnd=i=>{const v=Math.sin(i*12.9898)*43758.5453; return (v-Math.floor(v))-0.5;};
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:30,bottom:52,left:78},
    x:{domain:[0,T],label:'time (s)'},y:{domain:[0,1.05],label:'limb position'},
    title: on?'State estimate: prediction corrected by delayed sensory feedback'
              :'State estimate from the sensor alone'});
  plot.line(sample(0,T,240,truth),{className:'series-1'});
  plot.line(sample(0,T,240,t=>{const x=Math.max(0,t-D); return truth(x)+s*rnd(Math.round(t*400));}),
    {className:'series-2',dashed:true,width:1.2});
  // estimate: forward model predicts forward by D, sensor corrects slowly
  plot.line(sample(0,T,240,t=>{
      const meas=truth(Math.max(0,t-D))+s*rnd(Math.round(t*400));
      return on ? 0.82*truth(t)+0.18*meas : meas;
    }),{className:'series-3'});
  plot.legend([{label:'true limb position',className:'series-1'},
               {label:'raw sensory signal (delayed, noisy)',className:'series-2',dashed:true},
               {label: on?'estimate (model + correction)':'estimate (sensor only)',className:'series-3'}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = on
    ? `With the forward model on, the estimate tracks the true position despite a <strong>${values.delay} ms ` +
      `delay</strong> and noisy feedback. The model predicts where the limb should be given the motor command; the ` +
      `delayed sensor corrects the prediction rather than being read directly.` +
      `<br><br><strong>Switch the model off</strong> and the estimate inherits both the lag and the noise — which ` +
      `is fatal for control, because a controller acting on a ${values.delay} ms-old estimate oscillates. ` +
      `<br><br>This is why §7.7 calls the central representation a <em>predictor</em> rather than a map, and why ` +
      `the cerebellum rather than area 3a is the answer to "where is proprioception's central representation". ` +
      `It is also the object §14 argues olfaction needs for plume transport — with the crucial difference that ` +
      `body dynamics are stationary and turbulence is not.`
    : `Without a forward model the estimate is just the sensor: lagging by <strong>${values.delay} ms</strong> and ` +
      `carrying its full noise. Compare the true trace — the estimate is consistently behind, and a controller ` +
      `using it would act on stale information. <strong>Switch the model back on</strong> to see the prediction ` +
      `recover both the timing and the smoothness.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='State-estimation schematic following Wolpert, Ghahramani & Jordan (1995); generated for this course.';
  root.appendChild(c);
}
