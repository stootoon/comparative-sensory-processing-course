// The four tactile afferent classes as a filterbank in TIME.
//
// §4.4's claim is that SA1/RA1/PC/SA2 do not sample different parts of the
// skin — they overlap almost completely — but apply different temporal
// filters to the same input. Plotting their frequency responses together
// makes that immediate, and lets the reader see the coverage of the band.

export const controls = [
  { id: 'freq', label: 'Stimulus vibration frequency (Hz)', min: 0.5, max: 500, step: 0.5, value: 40,
    format: v=>v<10?v.toFixed(1):`${Math.round(v)}` },
  { id: 'view', label: 'Show', type: 'select', value: 'filters',
    options: [{value:'filters',label:'Frequency response of the four classes'},
              {value:'compare',label:'Compare with the cochlear filterbank'}] },
];

// Rough sensitivity functions matched to published threshold curves.
const bank=[
 {name:'SA1 (Merkel)',   peak:2,   width:1.4, cls:'series-1', role:'form, fine spatial detail'},
 {name:'RA1 (Meissner)', peak:30,  width:1.1, cls:'series-3', role:'slip, flutter'},
 {name:'PC (Pacinian)',  peak:250, width:1.0, cls:'series-2', role:'vibration, tool-transmitted'},
 {name:'SA2 (Ruffini)',  peak:1,   width:1.8, cls:'series-4', role:'skin stretch, hand conformation'},
];
const resp=(f,b)=>Math.exp(-Math.pow(Math.log10(f/b.peak)/b.width,2));

export function draw(root, values, { createPlot, sample }) {
  if((values.view??'filters')==='compare') return drawCompare(root,createPlot,sample);
  const f=values.freq;
  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:24,bottom:52,left:70},
    x:{domain:[0.3,600],scale:'log',label:'temporal frequency (Hz)'},
    y:{domain:[0,1.08],label:'relative sensitivity'},
    title:'Four afferent classes, four temporal filters, one patch of skin'});
  for(const b of bank)
    plot.line(sample(-0.5,2.8,200,l=>resp(Math.pow(10,l),b)).map(([l,y])=>[Math.pow(10,l),y]),{className:b.cls});
  plot.vline(f,{className:'marker',label:`${f<10?f.toFixed(1):Math.round(f)} Hz`});
  plot.legend(bank.map(b=>({label:b.name,className:b.cls})));

  const active=bank.map(b=>({...b,r:resp(f,b)})).sort((a,b)=>b.r-a.r);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `At <strong>${f<10?f.toFixed(1):Math.round(f)} Hz</strong> the dominant class is <strong>${active[0].name}</strong> ` +
    `(${active[0].role}), with ${active[1].name} contributing ${(100*active[1].r/active[0].r).toFixed(0)}% as much. ` +
    `<br><br><strong>These four overlap almost completely in space</strong> — they are not sampling different parts ` +
    `of the skin. They are four different temporal filters on the same mechanical input, and together they tile ` +
    `roughly three decades of frequency. Audition builds a filterbank in frequency <em>across</em> a spatial array; ` +
    `touch builds one in temporal frequency <em>at every point of</em> a spatial array. ` +
    `<br><br>Note also how few they are. Four channels covering three decades means each is broad — which by the ` +
    `§1.4 argument is the right choice when you cannot afford to tile finely, and is why natural stimuli excite ` +
    `all of them at once (§4.4).`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Sensitivity functions approximated from published threshold curves; generated for this course.';
  root.appendChild(c);
}

function drawCompare(root,createPlot,sample){
  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:24,bottom:52,left:70},
    x:{domain:[0.3,600],scale:'log',label:'frequency (Hz)'},
    y:{domain:[0,1.08],label:'relative sensitivity'},
    title:'Four tactile channels against a cochlear-style filterbank'});
  for(const b of bank)
    plot.line(sample(-0.5,2.8,160,l=>resp(Math.pow(10,l),b)).map(([l,y])=>[Math.pow(10,l),y]),{className:b.cls});
  // A dense narrow bank, cochlear style, over the same span.
  for(let i=0;i<22;i++){
    const pk=Math.pow(10,-0.4+ (3.1*i/21));
    plot.line(sample(-0.5,2.8,120,l=>Math.exp(-Math.pow(Math.log10(Math.pow(10,l)/pk)/0.09,2)))
      .map(([l,y])=>[Math.pow(10,l),y]),{className:'series-5',dashed:true,width:0.8});
  }
  plot.legend([{label:'four tactile afferent classes',className:'series-1'},
               {label:'cochlear-style narrow bank',className:'series-5',dashed:true}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `The same frequency span, tiled two ways. <strong>Audition spends ~3,500 narrow channels</strong> because ` +
    `frequency <em>is</em> its stimulus dimension and resolving it finely is the whole job. <strong>Touch spends ` +
    `four broad ones</strong>, because temporal frequency is a secondary cue to texture and the primary spatial ` +
    `code carries the rest. <br><br>Same §1.4 principle, opposite answers, because the dimensionality and the ` +
    `importance of the axis differ. Channel count is allocated to what the modality most needs resolved.`;
  root.appendChild(n);
}
