// The comparative datasheet, as a live heatmap.
//
// Serves the §12 synthesis section of every module and the capstone. Each
// module fills in its own row in prose; this pivots the whole thing so the
// columns can be compared, which is the move the synthesis modules exist to
// make.

export const controls = [
  { id: 'highlight', label: 'Highlight modality', type: 'select', value: 'Olfaction',
    options: ['none','Vision','Audition','Olfaction','Touch','Gustation','Vestibular','Proprioception','Nociception']
      .map(v=>({value:v,label:v==='none'?'None — show all equally':v})) },
  { id: 'sortBy', label: 'Sort rows by', type: 'select', value: 'spread',
    options: [{value:'spread',label:'How much modalities differ'},
              {value:'listed',label:'Datasheet order'}] },
];

// score 0–10; label shown on hover-free readout below
const PROPS=[
 {k:'Ensemble measured',        v:{Vision:10,Audition:10,Olfaction:3, Touch:5, Gustation:6, Vestibular:9, Proprioception:6, Nociception:2}},
 {k:'Statistics stationary',    v:{Vision:10,Audition:9, Olfaction:1, Touch:6, Gustation:7, Vestibular:9, Proprioception:8, Nociception:6}},
 {k:'Receptor array ordered',   v:{Vision:10,Audition:10,Olfaction:0, Touch:9, Gustation:0, Vestibular:9, Proprioception:4, Nociception:8}},
 {k:'Metric on stimulus space', v:{Vision:10,Audition:10,Olfaction:1, Touch:8, Gustation:2, Vestibular:10,Proprioception:6, Nociception:4}},
 {k:'Low dimensionality',       v:{Vision:7, Audition:9, Olfaction:0, Touch:6, Gustation:10,Vestibular:10,Proprioception:7, Nociception:8}},
 {k:'Sensor faster than signal',v:{Vision:5, Audition:10,Olfaction:1, Touch:9, Gustation:6, Vestibular:8, Proprioception:8, Nociception:7}},
 {k:'Active control of stimulus',v:{Vision:4,Audition:2, Olfaction:6, Touch:8, Gustation:5, Vestibular:1, Proprioception:10, Nociception:5}},
 {k:'Forward model available',  v:{Vision:3, Audition:2, Olfaction:1, Touch:6, Gustation:2, Vestibular:10,Proprioception:9, Nociception:4}},
 {k:'Normative theory maturity',v:{Vision:8, Audition:8, Olfaction:2, Touch:5, Gustation:5, Vestibular:10,Proprioception:6, Nociception:3}},
];
const MODS=['Vision','Audition','Olfaction','Touch','Gustation','Vestibular','Proprioception','Nociception'];

export function draw(root, values, { createDiagram }) {
  const hi=values.highlight??'Olfaction';
  let rows=[...PROPS];
  if((values.sortBy??'spread')==='spread'){
    const spread=p=>{const a=MODS.map(m=>p.v[m]); return Math.max(...a)-Math.min(...a);};
    rows.sort((a,b)=>spread(b)-spread(a));
  }
  const W=720, left=210, cellW=(W-left-24)/MODS.length, cellH=26;
  const d=createDiagram(root,{width:W,height:64+rows.length*cellH,
    title:'The comparative datasheet'});

  // column headers
  MODS.forEach((m,j)=>{
    d.text(left+cellW*(j+0.5), 26, m.length>9?m.slice(0,9)+'.':m,
      {anchor:'middle', className: m===hi?'head':''});
  });

  rows.forEach((p,i)=>{
    const y=46+i*cellH;
    d.text(left-10, y+5, p.k, {anchor:'end'});
    MODS.forEach((m,j)=>{
      const s=p.v[m];
      const cx=left+cellW*(j+0.5);
      // radius encodes score; dim everything but the highlighted column
      const r=3+ (s/10)*8;
      const dim = hi!=='none' && m!==hi;
      d.blob(cx, y, r, {className: dim?'dim':(s>=7?'active':'')});
    });
  });
  d.note(left-10, 60+rows.length*cellH-8, ['larger = more of the property'], {anchor:'end'});

  const n=document.createElement('p'); n.className='x-figure-note';
  const olf=PROPS.filter(p=>p.v.Olfaction<=2).map(p=>p.k);
  n.innerHTML = hi==='Olfaction'
    ? `Sorted by how much the modalities differ, the top rows are where olfaction separates. It scores lowest or ` +
      `near-lowest on <strong>${olf.slice(0,4).join(', ')}</strong> — and those are not independent. ` +
      `<br><br>The one that <em>causes</em> the others is dimensionality. High dimensionality is why no metric ` +
      `emerged, why the ensemble has not been characterised, and why the normative programme stalled. ` +
      `<strong>Gustation is the control:</strong> also unordered, also non-metric, but low-dimensional — and it has ` +
      `none of olfaction's difficulties. Switch the highlight to Gustation and compare the two columns directly.` +
      `<br><br>Note the two rows where olfaction is <em>not</em> the outlier: active control of the stimulus, where ` +
      `it sits mid-range with touch, and forward model available, where proprioception and vestibular lead. Those ` +
      `are the rows §14 argues olfaction should be borrowing from.`
    : hi==='none'
    ? `The whole course in one grid. Rows are sorted by how much the modalities disagree, so the top rows are the ` +
      `axes that actually separate them. Highlight a column to read one modality's profile.`
    : `Highlighting <strong>${hi}</strong>. Compare its profile with olfaction's — the rows where they agree tell ` +
      `you which of olfaction's properties are shared and therefore cannot be what makes it hard; the rows where ` +
      `they differ are the candidate causes. Gustation is the most instructive comparison, since it shares ` +
      `olfaction's disorder without sharing its difficulty.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Pivoted from the per-module datasheets. Scores are ordinal and deliberately coarse — for comparing columns, not for precision.';
  root.appendChild(c);
}
