// Why sensory systems split into parallel streams — three distinct reasons.
//
// Serves the §8 section of every module. The course establishes three
// separate arguments and they transfer differently, so keeping them apart
// matters. This lays every instance on one grid.

export const controls = [
  { id: 'reason', label: 'Show splits driven by', type: 'select', value: 'all',
    options: [{value:'all',label:'All three reasons'},
              {value:'invariance',label:'Conflicting invariance requirements'},
              {value:'loss',label:'Conflicting loss functions'},
              {value:'deadline',label:'Conflicting deadlines'}] },
];

// [modality, split, reason, note]
const S=[
 ['Vision','ventral / dorsal','invariance','identity needs position-invariance; location needs the opposite'],
 ['Audition','anterior / posterior','invariance','same split, from an array with NO spatial dimension'],
 ['Touch','S2 / parietal','invariance','third independent instance'],
 ['Olfaction','?? / ??','invariance','PREDICTED, not located — §3.8'],
 ['Touch','discriminative / affective','loss','metric detail vs fast categorical withdrawal'],
 ['Gustation','identity / hedonic','loss','the purest case: one decision, asymmetric loss'],
 ['Olfaction','piriform / cortical amygdala','loss','learned identity vs innate valence — CONFIRMED'],
 ['Vestibular','reflex / postural / cortical','deadline','10 ms vs 100 ms vs seconds, same content'],
 ['Proprioception','spinal / cerebellar / cortical','deadline','30 ms reflex through to conscious sense'],
 ['Gustation','gape reflex / cortical','deadline','2–3 synapses vs full thalamocortical route'],
 ['Olfaction','mitral / tufted','deadline','PROPOSED — speed–accuracy, §6.8'],
];
const COL={invariance:'series-1',loss:'series-2',deadline:'series-3'};
const LBL={invariance:'conflicting invariance requirements',
           loss:'conflicting loss functions',deadline:'conflicting deadlines'};

export function draw(root, values, { createDiagram }) {
  const f=values.reason??'all';
  const rows=S.filter(r=>f==='all'||r[2]===f);
  const d=createDiagram(root,{width:720,height:60+rows.length*34,
    title:'Parallel streams, grouped by why the split exists'});
  rows.forEach((r,i)=>{
    const y=44+i*34;
    const predicted=/\?\?|PREDICTED|PROPOSED/.test(r[1]+r[3]);
    d.text(14,y,r[0],{anchor:'start',className:'head'});
    d.blob(150,y-4,7,{className:predicted?'dim':'active'});
    d.text(168,y,r[1],{anchor:'start'});
    d.connect({x:352,y:y-4},{x:376,y:y-4},{sign:'excite',className:COL[r[2]]});
    d.text(388,y,r[3],{anchor:'start',className:COL[r[2]]});
  });
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = f==='all'
    ? `<strong>Three different arguments, often conflated.</strong> Invariance splits happen because identity and ` +
      `location make incompatible demands on a representation. Loss-function splits happen because one consumer ` +
      `wants metric detail and another wants a fast categorical decision. Deadline splits carry the <em>same</em> ` +
      `content to consumers that need it at different latencies.` +
      `<br><br>They transfer differently, which is why keeping them apart matters. Filter by each in turn and note ` +
      `where olfaction sits: its <strong>loss-function split is confirmed</strong> (piriform vs cortical amygdala), ` +
      `its <strong>deadline split is proposed</strong> (mitral vs tufted), and its <strong>invariance split is ` +
      `predicted by three independent instances and has not been located</strong>. That last gap is §13's most ` +
      `actionable item.`
    : f==='invariance'
    ? `Three independent instances — and vision, audition and touch have completely different receptor geometries. ` +
      `Audition's array has <em>no spatial dimension at all</em>, and it splits anyway. That is what makes this a ` +
      `consequence of the task rather than of the sensor, and it is why the missing olfactory instance is a gap ` +
      `rather than an absence.`
    : f==='loss'
    ? `Where one consumer wants distinctions preserved and another wants them collapsed, build both. Gustation is ` +
      `the purest case (§5.1). The olfactory instance is the course's clearest <strong>confirmed import</strong>: ` +
      `a prediction derived from taste's loss-function argument, holding in the lateral horn / mushroom body ` +
      `dissociation that nobody had connected to it.`
    : `The same content, delivered to consumers with deadlines orders of magnitude apart. You cannot serve a 10 ms ` +
      `reflex and a deliberative percept with one pathway, so build a short arc and a long one. ` +
      `<strong>This is the reading of mitral/tufted that fits best</strong> — earlier, more reliable tufted ` +
      `responses for fast coarse inference; later, sparser mitral responses for slower inference integrating ` +
      `cortical feedback — and it has been less explored than the other two framings.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Compiled from the §8 sections across the course. Faded markers are predicted or proposed rather than established.';
  root.appendChild(c);
}
