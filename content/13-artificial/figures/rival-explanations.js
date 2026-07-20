// Five explanations of the same asymmetry, and what separates them.
//
// Serves §13.4. The dataset account is not the only story that predicts
// machine olfaction stalling while machine vision flies. Four rivals do too,
// and at least three of them are good. This figure holds each one up against
// the two things it must explain — the ENGINEERING gap and the BIOLOGICAL
// theory gap — because that is where they come apart. A story that explains
// only one of the two is doing half the work of one that explains both.

export const controls = [
  { id: 'view', label: 'Examine', type: 'select', value: 'all',
    options: [{ value: 'all',      label: 'All five, scored side by side' },
              { value: 'dataset',  label: 'The dataset account' },
              { value: 'hardware', label: 'Rival — sensor hardware' },
              { value: 'harder',   label: 'Rival — the problem is intrinsically harder' },
              { value: 'pull',     label: 'Rival — commercial pull' },
              { value: 'truth',    label: 'Rival — ground truth is expensive' }] },
];

// key, name, explains engineering gap?, explains biological theory gap?, verdict
const E = [
  ['dataset',  'No dataset / no measured ensemble', 'yes', 'yes', 'the only one that covers both with one cause'],
  ['hardware', 'Sensor hardware — drift, cross-sensitivity, no standard', 'yes', 'no', 'strong on engineering, silent on biology'],
  ['harder',   'The problem is intrinsically harder', 'partly', 'yes', 'true of the metric, false of dimensionality'],
  ['pull',     'Commercial pull, hence effort, differs', 'yes', 'no', 'strong, and partly endogenous — pull follows success'],
  ['truth',    'Ground truth costs an instrument, not a second', 'yes', 'yes', 'not a rival — it explains why the dataset is missing'],
];

const DETAIL = {
  dataset: {
    claim: 'Vision and audition had characterised inputs before their results; olfaction never has. The gap is the missing input characterisation, in both substrates.',
    for: ['covers the engineering gap and the biological theory gap with one cause',
          'predicts the stall’s location — the input representation — and that is where it is',
          'reproduces WITHIN olfaction: the plume ensemble is measured and that strand works'],
    against: ['the engineering evidence is about labelled pairs, the biological evidence about unlabelled statistics — different objects',
              'cannot be separated from ground-truth cost, which is its own mechanism',
              'a corpus might buy a working device and no theory at all'],
    isolate: 'Build a composition-labelled corpus on today’s imperfect hardware. If performance follows, the dataset was binding despite the sensors.',
  },
  hardware: {
    claim: 'Cameras and microphones are cheap, linear, stable and standardised. Chemical sensors drift, cross-react, poison, and have no interchange format.',
    for: ['sufficient on its own to explain the engineering gap',
          'explains why no odour corpus TRANSFERS between devices, which is worse than it being expensive',
          'nothing in vision or audition corresponds to calibration transfer being a subfield'],
    against: ['silent on biology: animals have superb chemical sensors and the theory gap exists anyway',
              'a drift-free array would still lack composition-to-identity examples',
              'GC-MS shows the information is obtainable — so hardware bounds the nose, not the problem'],
    isolate: 'A stable, standardised, device-independent chemical sensor array with no new corpus. If the field moves, hardware was binding.',
  },
  harder: {
    claim: 'High dimensionality, no metric on the stimulus space, and mixtures that do not superpose at the sensor.',
    for: ['no metric means no convolutional prior — a real, specific engineering handicap',
          'non-superposition at the sensor is genuine and has no analogue in vision or audition',
          'covers both substrates, since neither can exploit structure that is absent'],
    against: ['dimensionality alone cannot be it — images are far higher-dimensional and yield',
              'engineered systems face none of biology’s constraints and stall in the same place',
              'gustation is unordered and not stuck (§12.1), so disorder alone is not sufficient'],
    isolate: 'Give a learner the composition vector directly, bypassing sensors and superposition. If it still fails, difficulty is intrinsic.',
  },
  pull: {
    claim: 'Vision and speech had enormous markets; smell has a thin one. Effort differed by orders of magnitude, so tractability need not have.',
    for: ['effort really did differ enormously, and nobody disputes it',
          'where pull existed — industrial QC, spoilage, leak detection — effort went and delivered',
          'requires no claim about the problem at all, which makes it hard to beat'],
    against: ['silent on biology: academic olfactory neuroscience is not a small field',
              'partly endogenous — pull is low BECAUSE the thing does not work, so this is a loop',
              'the successes it explains are all closed-world, which is the dataset prediction too'],
    isolate: 'Nothing observational. This one needs an intervention: fund the corpus at vision-scale and watch.',
  },
  truth: {
    claim: 'Labelling an image is seconds of human time. Ground-truthing an air sample needs GC-MS, and the stimulus cannot be stored or replayed.',
    for: ['explains why the corpus does not exist without anyone being at fault',
          'the non-storability point is structural, not merely a cost — no odour JPEG exists',
          'predicts corpora will be small, local, and non-reusable, which they are'],
    against: ['it is a MECHANISM for the dataset account, not an alternative to it',
              'if true and unfixable, the dataset account is correct and useless',
              'composition as an interchange format is a route around it — §13.5'],
    isolate: 'Not a rival. Test it by whether composition-as-interchange makes corpora reusable across labs.',
  },
};

export function draw(root, values, { createDiagram }) {
  const v = values.view ?? 'all';
  const t = DETAIL[v];

  if (v === 'all') {
    const d = createDiagram(root, { width: 760, height: 96 + E.length * 38,
      title: 'Five explanations, against the two gaps each must cover' });
    d.text(300, 26, 'engineering gap', { anchor: 'middle', className: 'head' });
    d.text(414, 26, 'theory gap', { anchor: 'middle', className: 'head' });
    E.forEach((r, i) => {
      const y = 62 + i * 38;
      const cl = (a) => a === 'yes' ? 'series-1' : a === 'partly' ? 'series-2' : 'series-3';
      d.text(14, y, r[1], { anchor: 'start', className: r[0] === 'dataset' ? 'head' : null });
      d.blob(300, y - 4, r[2] === 'yes' ? 8 : 5, { className: r[2] === 'no' ? 'dim' : 'active' });
      d.text(300, y + 20, r[2], { anchor: 'middle', className: cl(r[2]) });
      d.blob(414, y - 4, r[3] === 'yes' ? 8 : 5, { className: r[3] === 'no' ? 'dim' : 'active' });
      d.text(414, y + 20, r[3], { anchor: 'middle', className: cl(r[3]) });
      d.text(474, y, r[4], { anchor: 'start', className: 'series-4' });
    });
  } else {
    const name = E.find(r => r[0] === v)[1];
    const d = createDiagram(root, { width: 760, height: 150 + 22 * (t.for.length + t.against.length),
      title: name });
    d.note(14, 34, ['THE CLAIM'].concat(wrap(t.claim, 78)));
    d.note(14, 34 + 22 * (1 + wrap(t.claim, 78).length) + 8,
      ['WHAT IT HAS GOING FOR IT'].concat(t.for.map(s => '• ' + s)));
    d.note(400, 34, ['WHAT IT DOES NOT COVER'].concat(t.against.map(s => '• ' + s)));
  }

  const n = document.createElement('p'); n.className = 'x-figure-note';
  if (v === 'all') {
    n.innerHTML = `<strong>Read the two middle columns before the row labels.</strong> Four of the five explain the ` +
      `engineering gap perfectly well, which is exactly why the engineering gap on its own settles nothing. What ` +
      `separates them is the second column: hardware and commercial pull have nothing whatever to say about why ` +
      `olfactory <em>theory</em> lagged in animals that have excellent chemical sensors and a field of their own.` +
      `<br><br>That is the dataset account's real advantage, and it is parsimony rather than proof — one cause ` +
      `covering two independent asymmetries, where the rivals need a separate story for each. ` +
      `<strong>It is not decisive, and the bottom row shows why:</strong> ground-truth cost is not competing with ` +
      `the dataset account, it is the reason the dataset does not exist. These five are not five hypotheses in a ` +
      `race. They are a loop — unstable sensors prevent a transferable corpus, which prevents a benchmark, which ` +
      `prevents adjudication, which prevents success, which prevents pull, which prevents anyone funding sensors. ` +
      `Select each in turn for what would break it.`;
  } else {
    n.innerHTML = `<strong>What would isolate it:</strong> ${t.isolate}` +
      `<br><br>Each rival is stated at full strength deliberately. The honest position at the end of §13.4 is that ` +
      `the dataset account is <em>supported but not isolated</em>, and a reader who finishes this figure convinced ` +
      `by the hardware story has understood the section rather than missed it.`;
  }
  root.appendChild(n);
  const c = document.createElement('p'); c.className = 'x-figure-credit';
  c.textContent = 'Constructed for this course. The scoring is an argument, and §13.4 defends it in prose.';
  root.appendChild(c);
}

function wrap(s, n) {
  const out = []; let line = '';
  for (const w of s.split(' ')) {
    if ((line + ' ' + w).trim().length > n) { out.push(line.trim()); line = w; } else line += ' ' + w;
  }
  if (line.trim()) out.push(line.trim());
  return out;
}
