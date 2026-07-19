// The retinal circuit, with the computation annotated onto the anatomy.
//
// The point of drawing this rather than describing it: the centre–surround
// receptive field is not an abstraction imposed on the retina, it is a direct
// consequence of a specific wiring motif. Horizontal cells pool laterally and
// feed back negatively onto photoreceptor-to-bipolar transmission. Seeing the
// lateral spread makes "the surround is a prediction from the neighbourhood"
// concrete rather than metaphorical.
//
// The pathway toggle lets the reader isolate the direct (centre) route from
// the lateral (surround) route.

export const controls = [
  {
    id: 'highlight',
    label: 'Highlight',
    type: 'select',
    value: 'all',
    options: [
      { value: 'all', label: 'Whole circuit' },
      { value: 'centre', label: 'Centre pathway only' },
      { value: 'surround', label: 'Surround pathway only' },
    ],
  },
];

export function draw(root, values, { createDiagram }) {
  const hi = values.highlight ?? 'all';
  const dim = (want) => (hi === 'all' || hi === want ? '' : 'dim');

  const d = createDiagram(root, {
    width: 760, height: 470,
    title: 'Retinal circuit and the origin of centre–surround',
  });

  const Y = { photo: 92, horiz: 152, bip: 212, amac: 282, gang: 336, out: 412 };
  const W = 430;   // anatomy occupies x < W; annotations live to the right

  d.layer(66, 62, 'photoreceptors', { className: 'alt', extent: W });
  d.layer(134, 46, 'outer plexiform', { extent: W });
  d.layer(188, 48, 'bipolar cells', { className: 'alt', extent: W });
  d.layer(262, 44, 'inner plexiform', { extent: W });
  d.layer(312, 48, 'ganglion cells', { className: 'alt', extent: W });

  const xs = [120, 168, 216, 264, 312, 360, 396];
  const centreX = 264;

  // Photoreceptors. The one over the ganglion cell drives the centre.
  const photo = xs.map((x) => {
    const isCentre = x === centreX;
    return d.cell(x, Y.photo, {
      r: 7,
      className: isCentre ? `receptor ${dim('centre')}` : `receptor ${dim('surround')}`,
      dendrites: { width: 16, height: 16, up: true },
    });
  });
  d.text(120, 56, 'light', { anchor: 'middle', className: 'head' });

  // Horizontal cell: one soma, wide lateral spread. This IS the surround.
  const hcClass = `inhibit ${dim('surround')}`;
  d.cell(centreX, Y.horiz, { r: 8, className: hcClass, label: 'horizontal cell', labelDy: 22 });
  for (const p of photo) {
    d.connect({ x: p.x, y: Y.photo + 8 }, { x: centreX, y: Y.horiz - 8 },
      { sign: 'excite', className: dim('surround') });
  }
  // …and feeds back negatively onto the centre's output synapse.
  d.connect({ x: centreX - 10, y: Y.horiz - 4 }, { x: centreX - 4, y: Y.photo + 12 },
    { sign: 'inhibit', className: dim('surround') });

  // Bipolar cell: direct vertical route from the centre photoreceptor.
  const bip = d.cell(centreX, Y.bip, {
    r: 8, className: `excite ${dim('centre')}`, label: 'bipolar', labelDy: -16,
    dendrites: { width: 26, height: 18, up: true },
  });
  d.connect({ x: centreX, y: Y.photo + 10 }, { x: centreX, y: Y.bip - 16 },
    { sign: 'excite', className: `strong ${dim('centre')}` });

  // Amacrine cell: temporal/lateral processing in the inner retina.
  d.cell(330, Y.amac, { r: 7, className: `inhibit ${dim('surround')}`, label: 'amacrine', labelDy: -13 });
  d.connect({ x: centreX + 8, y: Y.bip + 6 }, { x: 322, y: Y.amac - 5 },
    { sign: 'excite', className: dim('surround') });
  d.connect({ x: 324, y: Y.amac + 6 }, { x: centreX + 6, y: Y.gang - 9 },
    { sign: 'inhibit', className: dim('surround') });

  // Ganglion cell → optic nerve.
  d.cell(centreX, Y.gang, {
    r: 10, className: 'output', label: 'ganglion cell', labelDy: 26,
    axon: { to: Y.out, terminal: true },
  });
  d.connect({ x: centreX, y: Y.bip + 8 }, { x: centreX, y: Y.gang - 11 },
    { sign: 'excite', className: `strong ${dim('centre')}` });
  d.text(centreX, Y.out + 20, 'to optic nerve → LGN', { anchor: 'middle' });

  // The computation, called out beside the anatomy.
  d.note(460, 96, [
    'CENTRE',
    'direct photoreceptor → bipolar',
    '→ ganglion. Narrow, fast,',
    'sign-preserving.',
  ]);
  d.note(460, 186, [
    'SURROUND',
    'horizontal cells pool over a',
    'wide lateral extent and feed',
    'back negatively. This pooled',
    'average is the prediction that',
    'gets subtracted.',
  ]);
  d.note(460, 306, [
    'RESULT',
    'output ≈ centre − ⟨neighbourhood⟩',
    'i.e. the residual left after',
    'removing what was predictable.',
  ]);

  d.bracket(W - 6, 140, 178, 'lateral spread', { side: 'left' });

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML = hi === 'centre'
    ? 'The <strong>centre pathway</strong> alone: a short, direct, sign-preserving vertical route. On its own ' +
      'this cell would report raw local intensity — and would spend its entire dynamic range on the ' +
      'slow, high-power components that its neighbours could have predicted.'
    : hi === 'surround'
      ? 'The <strong>surround pathway</strong> alone. Note the geometry: the horizontal cell samples <em>many</em> ' +
        'photoreceptors across a wide extent and feeds back <em>negatively</em>. This is the anatomical ' +
        'substrate of "subtract a prediction formed from the neighbourhood" — and it works only because ' +
        'neighbouring photoreceptors view correlated parts of the world.'
      : 'Anatomy on the left, computation on the right. The centre–surround receptive field is not an ' +
        'abstraction laid over the retina; it is what this wiring does. <strong>Note where the lateral ' +
        'spread lives</strong> — in the horizontal and amacrine cells — because §3.5 asks what a circuit ' +
        'does when "lateral" has no meaning, which is the situation in the olfactory bulb.';
  root.appendChild(note);
}
