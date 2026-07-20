// The ordering, in biology and in engineering.
//
// Serves §12.2. The claim is not that datasets and results co-occur — that
// would be a correlation and §12.4 has to fight about it. The claim is that
// the dataset came FIRST, assembled by people who were not chasing the result
// it later enabled. Ordering is the only part of this argument that a
// third-variable explanation cannot reproduce for free, so it is what the
// figure shows.

export const controls = [
  { id: 'domain', label: 'Show', type: 'select', value: 'all',
    options: [{value:'all', label:'Biology and engineering together'},
              {value:'bio', label:'Biological theory only'},
              {value:'eng', label:'Engineered systems only'}] },
];

// [domain, modality, the input characterisation, what followed, ok?]
const ROWS = [
 ['bio','Vision',    'natural image statistics measured',      'retinal filter derived, confirmed', true],
 ['bio','Vision',    'natural cone responses measured',        'opponent colour axes derived',      true],
 ['bio','Audition',  'natural sound ensemble measured',        'cochlear filterbank derived',       true],
 ['bio','Vestibular','natural head motion measured',           'optimal cue combination, confirmed',true],
 ['bio','Olfaction', 'chemical ensemble NOT measured',         'no derivation of receptor tuning',  false],
 ['bio','Olfaction', 'plume ensemble measured',                'the one tractable normative strand',true],
 ['eng','Vision',    'large labelled image corpus',            'recognition, then everything after',true],
 ['eng','Speech',    'large transcribed speech corpora',       'recognition at usable error rates', true],
 ['eng','Olfaction', 'no comparable odour corpus exists',      'no comparable result',              false],
];

export function draw(root, values, { createDiagram }) {
  const f = values.domain ?? 'all';
  const rows = ROWS.filter(r => f === 'all' || r[0] === f);
  const d = createDiagram(root, { width: 760, height: 70 + rows.length * 34,
    title: 'What was characterised first, and what followed' });

  rows.forEach((r, i) => {
    const y = 50 + i * 34;
    const cls = r[4] ? 'series-1' : 'series-3';
    d.text(14, y, (f === 'all' ? (r[0] === 'bio' ? 'theory · ' : 'machine · ') : '') + r[1],
      { anchor: 'start', className: 'head' });
    d.blob(190, y - 4, 6, { className: r[4] ? 'active' : 'dim' });
    d.text(206, y, r[2], { anchor: 'start', className: r[4] ? null : 'dim' });
    d.connect({ x: 486, y: y - 4 }, { x: 512, y: y - 4 }, { sign: 'excite', className: cls });
    d.text(524, y, r[3], { anchor: 'start', className: cls });
  });

  const n = document.createElement('p'); n.className = 'x-figure-note';
  n.innerHTML = f === 'all'
    ? `<strong>The same table twice, in two substrates that share almost nothing.</strong> Read the left column as ` +
      `"was the input characterised?" and the right as "did anything follow?". The rows agree across the divide, ` +
      `and olfaction is the only entry that is faded on both sides of it.` +
      `<br><br>What makes this more than a correlation is the <em>ordering</em>, which is a matter of historical ` +
      `record rather than reconstruction. Natural image and sound statistics were characterised largely by people ` +
      `not thinking about coding theory; the large labelled corpora were assembled before the architectures that ` +
      `exploited them existed and by people who did not know what would exploit them. In neither case was the ` +
      `dataset built to confirm the result it enabled.` +
      `<br><br>Note the one biological row that breaks olfaction's uniform failure: the <strong>plume</strong> ` +
      `ensemble <em>is</em> measured, and it is the one place olfactory normative work has traction. That is the ` +
      `course's claim reproducing itself <em>within</em> a single modality, which no third-variable story about ` +
      `olfaction being hard predicts.`
    : f === 'bio'
    ? `Four modalities, four measured ensembles, four derivations — and one modality split down the middle by ` +
      `whether the relevant ensemble happens to have been measured. Olfaction's temporal statistics are ` +
      `characterised and support quantitative work; its chemical statistics are not and do not. <strong>The ` +
      `within-modality contrast is the strongest form of this argument available inside biology</strong>, because ` +
      `it holds the receptor array, the anatomy, the deadline and the animal fixed.`
    : `Three engineered domains. Two had corpora large enough to train against before the methods that would use ` +
      `them matured; one has nothing comparable, and there is no engineered odour system of similar standing. ` +
      `<br><br>The engineering case adds something biology cannot: these systems have no metabolism, no evolution, ` +
      `no development and no anatomy, so none of those can explain why the third row is faded. What it does ` +
      `<em>not</em> control for is sensor physics, ground-truth cost, or how much money was pointed at each row — ` +
      `which is §12.4's entire business.`;
  root.appendChild(n);
  const c = document.createElement('p'); c.className = 'x-figure-credit';
  c.textContent = 'Compiled for this course from the module datasheets and the public history of the engineering fields. Deliberately names no specific systems or dates.';
  root.appendChild(c);
}
