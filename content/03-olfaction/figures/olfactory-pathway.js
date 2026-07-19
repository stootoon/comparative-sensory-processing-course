// The olfactory pathway, drawn to be compared with the retinal circuit.
//
// Three things this diagram exists to make visible, none of which survive
// being stated in prose:
//
//   1. CONVERGENCE BY IDENTITY, NOT POSITION. Receptor neurons expressing the
//      same receptor are scattered across the epithelium and converge on one
//      glomerulus. The sorting is chemical, not spatial — the opposite of the
//      retina, where position IS the organising variable.
//   2. NO OBLIGATORY THALAMUS. Two synapses from the sensory surface to
//      cortex. Drawing the vision pathway alongside makes the asymmetry
//      impossible to miss.
//   3. LATERAL INHIBITION WITH NO NEIGHBOURHOOD. Granule cells connect
//      mitral cells that are adjacent on the bulb — but adjacency there means
//      nothing in chemical space.

export const controls = [
  {
    id: 'view',
    label: 'Show',
    type: 'select',
    value: 'pathway',
    options: [
      { value: 'pathway', label: 'Olfactory pathway' },
      { value: 'compare', label: 'Synapses to cortex: vision vs olfaction' },
    ],
  },
];

export function draw(root, values, { createDiagram }) {
  if ((values.view ?? 'pathway') === 'compare') return drawComparison(root, createDiagram);

  const d = createDiagram(root, {
    width: 760, height: 470,
    title: 'The olfactory pathway from epithelium to cortex',
  });

  const Y = { epi: 84, glom: 192, mt: 264, gran: 322, ctx: 414 };
  const W = 430;   // anatomy occupies x < W; annotations live to the right

  d.layer(58, 58, 'olfactory epithelium', { className: 'alt', extent: W });
  d.layer(162, 60, 'glomerular layer', { extent: W });
  d.layer(230, 50, 'mitral / tufted cells', { className: 'alt', extent: W });
  d.layer(296, 50, 'granule cell layer', { extent: W });
  d.layer(386, 50, 'piriform cortex', { className: 'accent', extent: W });

  // Receptor neurons: three types, INTERLEAVED in the epithelium.
  // The interleaving is the point — spatial position carries no information.
  const types = [
    { cls: 'receptor', glomX: 130 },
    { cls: 'excite',   glomX: 244 },
    { cls: 'output',   glomX: 358 },
  ];
  const order = [0, 2, 1, 0, 1, 2, 1, 0, 2, 0, 2, 1];
  const orns = order.map((t, i) => {
    const x = 96 + i * 28;
    return { x, y: Y.epi, type: t, cls: types[t].cls };
  });
  for (const o of orns) {
    d.cell(o.x, o.y, { r: 6, className: o.cls, dendrites: { width: 12, height: 13, up: true } });
  }
  d.text(96, 50, 'odorant molecules', { anchor: 'start', className: 'head' });

  // Convergence: every neuron of one type onto one glomerulus.
  for (const o of orns) {
    d.connect({ x: o.x, y: o.y + 7 }, { x: types[o.type].glomX, y: Y.glom - 17 },
      { sign: 'excite', className: o.cls });
  }
  types.forEach((t, i) => {
    d.blob(t.glomX, Y.glom, 17, { label: `G${i + 1}`, className: '' });
  });

  // Mitral/tufted cells: the output neurons.
  const mt = types.map((t) =>
    d.cell(t.glomX, Y.mt, { r: 9, className: 'output', dendrites: { width: 22, height: 16, up: true } })
  );
  types.forEach((t) => {
    d.connect({ x: t.glomX, y: Y.glom + 17 }, { x: t.glomX, y: Y.mt - 14 }, { sign: 'excite' });
  });
  d.text(404, Y.mt - 4, 'mitral /', { anchor: 'start' });
  d.text(404, Y.mt + 9, 'tufted', { anchor: 'start' });

  // Granule cells: reciprocal dendrodendritic inhibition between mitral cells.
  const g1 = d.cell(187, Y.gran, { r: 7, className: 'inhibit' });
  const g2 = d.cell(301, Y.gran, { r: 7, className: 'inhibit' });
  d.text(404, Y.gran + 4, 'granule', { anchor: 'start' });
  for (const [g, a, b] of [[g1, mt[0], mt[1]], [g2, mt[1], mt[2]]]) {
    d.connect({ x: a.x + 8, y: Y.mt + 6 }, { x: g.x - 6, y: Y.gran - 5 }, { sign: 'excite' });
    d.connect({ x: g.x - 6, y: Y.gran - 2 }, { x: a.x + 6, y: Y.mt + 9 }, { sign: 'inhibit' });
    d.connect({ x: b.x - 8, y: Y.mt + 6 }, { x: g.x + 6, y: Y.gran - 5 }, { sign: 'excite' });
    d.connect({ x: g.x + 6, y: Y.gran - 2 }, { x: b.x - 6, y: Y.mt + 9 }, { sign: 'inhibit' });
  }

  // Straight to cortex. No relay.
  for (const t of types) {
    d.connect({ x: t.glomX, y: Y.mt + 10 }, { x: t.glomX, y: Y.ctx - 8 },
      { sign: 'excite', className: 'strong' });
  }
  d.text(215, Y.ctx + 6, 'piriform — distributed, non-topographic ensembles', { anchor: 'middle' });
  d.text(215, Y.ctx - 24, 'lateral olfactory tract  ·  NO THALAMIC RELAY', {
    anchor: 'middle', className: 'head',
  });

  d.note(460, 92, [
    'SORTED BY CHEMISTRY',
    'Same-receptor neurons are',
    'scattered, then converge on',
    'one glomerulus. Position in',
    'the epithelium carries no',
    'information at all.',
  ]);
  d.note(460, 202, [
    '~1000:1 CONVERGENCE',
    'Buys √n SNR against',
    'molecular shot noise —',
    'and costs no acuity, since',
    'the pooled neurons are',
    'already identical.',
  ]);
  d.note(460, 318, [
    'INHIBITION WITHOUT',
    'A NEIGHBOURHOOD',
    'Granule cells link adjacent',
    'mitral cells — but adjacent',
    'on the bulb means nothing',
    'in chemical space. See §3.5.',
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'Compare this with the retinal circuit in §1.5. The parts list is strikingly similar — receptors, ' +
    'massive convergence, lateral inhibition, parallel output neurons — but every part is doing a ' +
    'different job because the array underneath has no metric. ' +
    '<strong>The three receptor types are deliberately drawn interleaved in the epithelium</strong>: ' +
    'their spatial arrangement is arbitrary, and only their chemical identity determines where they project. ' +
    'A retina wired that way would not work at all.';
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Schematic. Convergence ratios follow mouse anatomy; cortical projection pattern after Haberly (2001).';
  root.appendChild(credit);
}

function drawComparison(root, createDiagram) {
  const d = createDiagram(root, {
    width: 660, height: 330,
    title: 'Synapses from receptor to cortex: vision against olfaction',
  });

  const stage = (x, y, label, cls) => {
    d.cell(x, y, { r: 11, className: cls, label, labelDy: -20 });
    return { x, y };
  };

  // Vision: receptor → bipolar → ganglion → LGN → V1.
  d.text(40, 58, 'VISION', { anchor: 'start', className: 'head' });
  const vY = 96;
  const vis = [
    stage(120, vY, 'photoreceptor', 'receptor'),
    stage(230, vY, 'bipolar', 'excite'),
    stage(340, vY, 'ganglion', 'output'),
    stage(450, vY, 'LGN', 'inhibit'),
    stage(560, vY, 'V1', 'output'),
  ];
  for (let i = 0; i < vis.length - 1; i += 1) {
    d.connect({ x: vis[i].x + 11, y: vY }, { x: vis[i + 1].x - 13, y: vY }, { sign: 'excite' });
  }
  d.bracket(560, 78, 114, '4 synapses', { side: 'right' });
  d.text(450, vY + 34, 'obligatory thalamic relay', { anchor: 'middle' });

  // Olfaction: ORN → mitral → piriform.
  d.text(40, 208, 'OLFACTION', { anchor: 'start', className: 'head' });
  const oY = 246;
  const olf = [
    stage(120, oY, 'receptor neuron', 'receptor'),
    stage(230, oY, 'mitral / tufted', 'output'),
    stage(340, oY, 'piriform', 'output'),
  ];
  for (let i = 0; i < olf.length - 1; i += 1) {
    d.connect({ x: olf[i].x + 11, y: oY }, { x: olf[i + 1].x - 13, y: oY },
      { sign: 'excite', className: 'strong' });
  }
  d.bracket(340, 228, 264, '2 synapses', { side: 'right' });

  // The thalamic loop exists — but late, and off the main line.
  d.cell(450, oY + 52, { r: 9, className: 'inhibit dim', label: 'mediodorsal thalamus', labelDy: 24 });
  d.connect({ x: 348, y: oY + 8 }, { x: 442, y: oY + 46 }, { sign: 'excite', className: 'dim' });
  d.connect({ x: 450, y: oY + 43 }, { x: 350, y: oY + 10 }, { sign: 'excite', className: 'dim' });
  d.text(560, oY + 52, 'late, non-obligatory', { anchor: 'middle' });

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'Olfaction reaches cortex in <strong>two synapses</strong>; vision takes four, through an obligatory ' +
    'thalamic relay. Olfaction has a thalamic loop, but it is late, non-obligatory, and carries ' +
    'attention and value rather than the sensory signal itself. ' +
    'So the question the full course spends a module on is not "why is olfaction weird?" but ' +
    '<strong>"what does thalamus DO for the other senses, and where does olfaction do it instead?"</strong> ' +
    'Candidate answer: bulbar granule-cell gating under massive cortical feedback — a thalamus-like ' +
    'gain and attention mechanism placed <em>before</em> cortex rather than between stages of it.';
  root.appendChild(note);
}
