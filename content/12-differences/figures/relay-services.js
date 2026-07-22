// Thalamus decomposed into services, and where each one is implemented.
//
// "Olfaction has no thalamus" is a single mysterious fact only while thalamus
// is treated as a single thing. §1.6 broke it into services. This figure asks,
// for each service, which structure provides it in each modality — so the
// olfactory column reads as a set of relocations rather than as an absence.

export const controls = [
  { id: 'col', label: 'Compare olfaction with', type: 'select', value: 'Vision',
    options: ['Vision','Audition','Touch','Proprioception'].map(v=>({value:v,label:v})) },
];

// service -> {modality: where it is implemented}
const S=[
 ['Gain control / normalisation', {
   Vision:'LGN + retina', Audition:'IC, olivocochlear', Touch:'dorsal horn, cuneate',
   Proprioception:'gamma drive, at the sensor', Olfaction:'antennal lobe / bulb, glomerular layer'}],
 ['Attentional gating', {
   Vision:'LGN, TRN-mediated', Audition:'MGB, TRN-mediated', Touch:'VPL, TRN-mediated',
   Proprioception:'absent on cerebellar route', Olfaction:'granule-cell feedback (proposed)'}],
 ['Burst / tonic state switching', {
   Vision:'LGN', Audition:'MGB', Touch:'VPL',
   Proprioception:'absent on cerebellar route', Olfaction:'UNMEASURED in bulb'}],
 ['Topographic re-mapping', {
   Vision:'LGN preserves retinotopy', Audition:'IC builds a space map', Touch:'VPL preserves somatotopy',
   Proprioception:'Clarke\'s nucleus — to limb variables', Olfaction:'no geometry to re-map'}],
 ['Temporal decorrelation', {
   Vision:'LGN (Dan et al. 1996)', Audition:'cochlear nucleus', Touch:'cuneate',
   Proprioception:'not described', Olfaction:'bulbar slow patterning (Friedrich & Laurent 2001)'}],
 ['Cortico-thalamic comparison loop', {
   Vision:'layer 6 → LGN', Audition:'layer 6 → MGB', Touch:'layer 6 → VPL',
   Proprioception:'cerebellar forward model', Olfaction:'piriform → granule cells'}],
 ['Cross-modal registration', {
   Vision:'pulvinar, SC', Audition:'IC, SC', Touch:'VPL/VPM, SC',
   Proprioception:'cerebellum', Olfaction:'UNMEASURED'}],
];

export function draw(root, values, { createDiagram }) {
  const other=values.col??'Vision';
  const W=780, cellH=34, left=210;
  const d=createDiagram(root,{width:W,height:84+S.length*cellH,
    title:'Thalamic services, and who provides them'});

  d.text(left-10, 26, 'service', {anchor:'end', className:'head'});
  d.text(left+16, 26, other, {className:'head'});
  d.text(left+286, 26, 'Olfaction', {className:'head'});

  S.forEach(([k,v],i)=>{
    const y=58+i*cellH;
    const olf=v.Olfaction;
    const missing=/UNMEASURED|no geometry/.test(olf);
    d.text(left-10, y+4, k, {anchor:'end'});
    d.blob(left+4, y, 6, {className:'dim'});
    d.text(left+16, y+4, v[other]);
    d.blob(left+274, y, 7, {className: missing?'':'active'});
    d.text(left+286, y+4, olf);
  });

  d.note(left-10, 74+S.length*cellH-10, ['filled = a structure is known to provide it'], {anchor:'end'});

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Decomposed this way, olfaction implements <strong>five of seven services</strong> — it simply implements them ` +
    `in the bulb and in cortical feedback rather than in a dedicated interposed nucleus. One service, topographic ` +
    `re-mapping, is genuinely inapplicable: there is no geometry to re-map, which is the §12.1 claim doing real ` +
    `explanatory work. <br><br>Two cells read <strong>UNMEASURED</strong> and should not be read as absences. ` +
    `Burst–tonic state switching in the bulb and cross-modal registration for odour have not been looked for with ` +
    `anything like the effort spent on their thalamic counterparts. The difference between "this system does not do ` +
    `it" and "nobody has run the experiment" is the difference between a finding and a gap, and the figure keeps ` +
    `them apart deliberately. <br><br>Switch to Proprioception and note that its cerebellar route also drops the ` +
    `gating and state-switching services — the same two that olfaction is missing or unmeasured on. That pairing ` +
    `is the section's test of the antiquity hypothesis.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Service decomposition follows §1.6; assignments compiled from the per-module §6 sections.';
  root.appendChild(c);
}
