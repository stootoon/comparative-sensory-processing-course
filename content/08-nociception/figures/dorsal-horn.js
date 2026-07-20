// The dorsal horn as a circuit, not a relay.
//
// Three computations are drawn beside the anatomy, because the anatomy alone
// is the picture any textbook supplies:
//
//   1. LAMINAR SORTING by afferent class — the array's ordering is preserved
//      in depth, not just in body position.
//   2. WIDE-DYNAMIC-RANGE CONVERGENCE — one neuron pools innocuous and
//      noxious, cutaneous and visceral. That pooling is what makes referred
//      pain a prediction rather than a curiosity.
//   3. THE GATE — inhibitory interneurons driven by Aβ input, the circuit
//      Melzack and Wall proposed. Drawn with the descending input that the
//      1965 version did not have, because that is where it was wrong.

export const controls = [
  { id: 'show', label: 'Highlight', type: 'select', value: 'all',
    options: [
      { value: 'all',   label: 'Whole circuit' },
      { value: 'wdr',   label: 'Wide-dynamic-range convergence' },
      { value: 'gate',  label: 'The gate, and what it got wrong' },
    ] },
];

export function draw(root, values, { createDiagram }) {
  const show = values.show ?? 'all';
  const d = createDiagram(root, {
    width: 770, height: 470,
    title: 'The dorsal horn: sorting, convergence, and a gate',
  });

  const W = 430;
  const Y = { in: 76, l1: 150, l2: 214, l5: 316, out: 408 };

  d.layer(52, 46, 'primary afferents', { className: 'alt', extent: W });
  d.layer(124, 52, 'lamina I — nociceptive-specific', { extent: W });
  d.layer(190, 50, 'lamina II — interneuron dense', { className: 'alt', extent: W });
  d.layer(288, 56, 'lamina V — wide dynamic range', { extent: W });
  d.layer(384, 48, 'ascending tracts', { className: 'accent', extent: W });

  const dim = (k) => (show === 'all' || show === k ? '' : 'dim');

  // Afferents.
  const aff = [
    { x: 96,  cls: 'excite',   name: 'Aβ  touch' },
    { x: 196, cls: 'receptor', name: 'Aδ  fast' },
    { x: 296, cls: 'receptor', name: 'C  slow' },
    { x: 392, cls: 'output',   name: 'C  visceral' },
  ];
  aff.forEach((a) => d.cell(a.x, Y.in, { r: 8, className: a.cls, label: a.name, labelDy: -18 }));

  // Lamina I: nociceptive-specific projection neuron, driven by Aδ and C.
  const l1 = d.cell(232, Y.l1, { r: 10, className: 'output' });
  d.text(258, Y.l1 + 4, 'NS projection', { anchor: 'start' });
  d.connect({ x: 196, y: Y.in + 9 }, { x: 226, y: Y.l1 - 11 }, { sign: 'excite' });
  d.connect({ x: 296, y: Y.in + 9 }, { x: 240, y: Y.l1 - 11 }, { sign: 'excite' });

  // Lamina II: the inhibitory interneuron — the gate.
  const gate = d.cell(128, Y.l2, { r: 9, className: `inhibit ${dim('gate')}` });
  d.text(96, Y.l2 + 26, 'GABA / enkephalin', { anchor: 'start', className: dim('gate') });
  d.connect({ x: 96, y: Y.in + 9 }, { x: 122, y: Y.l2 - 10 },
    { sign: 'excite', className: dim('gate') });

  // Lamina V: wide dynamic range, pooling everything.
  const wdr = d.cell(300, Y.l5, { r: 13, className: `output ${dim('wdr')}` });
  d.text(330, Y.l5 + 4, 'WDR neuron', { anchor: 'start', className: dim('wdr') });
  aff.forEach((a) => d.connect({ x: a.x, y: Y.in + 10 }, { x: 300, y: Y.l5 - 14 },
    { sign: 'excite', className: `${a.cls} ${dim('wdr')}` }));

  // The gate acts on both output neurons.
  d.connect({ x: gate.x + 9, y: Y.l2 }, { x: l1.x - 11, y: Y.l1 + 6 },
    { sign: 'inhibit', className: dim('gate') });
  d.connect({ x: gate.x + 6, y: Y.l2 + 9 }, { x: wdr.x - 14, y: Y.l5 - 4 },
    { sign: 'inhibit', className: dim('gate') });

  // Descending control onto the gate — the part gate-control theory lacked.
  d.text(60, 388, 'from PAG / RVM', { anchor: 'start', className: `head ${dim('gate')}` });
  d.connect({ x: 96, y: 378 }, { x: gate.x - 4, y: Y.l2 + 11 },
    { sign: 'excite', className: `strong ${dim('gate')}` });

  d.connect({ x: l1.x, y: Y.l1 + 11 }, { x: l1.x, y: Y.out - 6 }, { sign: 'excite' });
  d.connect({ x: wdr.x, y: Y.l5 + 14 }, { x: wdr.x, y: Y.out - 6 }, { sign: 'excite' });
  d.text(266, Y.out + 8, 'to thalamus, parabrachial nucleus, reticular formation', { anchor: 'middle' });

  d.note(462, 72, [
    'SORTING BY CLASS',
    'Afferents terminate in',
    'different laminae by fibre',
    'type. The array\'s ordering',
    'survives into the circuit as',
    'depth as well as position.',
  ]);
  d.note(462, 190, [
    'WDR = DELIBERATE',
    'POOLING',
    'One neuron sees innocuous',
    'and noxious, skin and gut.',
    'Referred pain follows: the',
    'output cannot say which',
    'input drove it, so the brain',
    'attributes it to the skin.',
  ]);
  d.note(462, 336, [
    'THE GATE, CORRECTED',
    'Melzack and Wall put the',
    'interaction here and were',
    'right that it exists. The',
    'weight of it is set from',
    'above — which the 1965',
    'circuit did not contain.',
  ]);

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML = show === 'wdr'
    ? 'The wide-dynamic-range neuron is the design decision worth arguing about. It <strong>throws away the ' +
      'distinction between a touch and a burn, and between a gut and a forearm</strong>, in a system whose ' +
      'entire justification is that misses are catastrophic. That is defensible only if the pooled channels ' +
      'rarely need distinguishing and if a second, nociceptive-specific line preserves what does. Lamina I ' +
      'supplies exactly that second line — which is why the pair, not either alone, is the answer.'
    : show === 'gate'
    ? 'Gate control was influential and is not correct as originally stated. What survives: convergence of ' +
      'large- and small-fibre input onto shared inhibitory machinery in the superficial dorsal horn, which ' +
      'is why rubbing a knock helps and why TENS works. What does not: the specific wiring, the claim that ' +
      'the interaction is confined to this one site, and the implication that the gate is set by afferent ' +
      'balance alone. <strong>The dominant input to the gate is descending</strong>, and §8.9 argues that ' +
      'this is the point rather than a detail.'
    : 'The house rule for this course is that a first circuit is a circuit and not a relay, and the dorsal ' +
      'horn passes easily. It sorts by afferent class, it builds two output channels with deliberately ' +
      'different pooling, and it contains a gain stage whose setting comes from the brain. ' +
      '<strong>Compare it with the retina (§1.5) and the bulb (§3.5):</strong> all three take a receptor ' +
      'array and produce parallel output streams under centrifugal control, and only the dorsal horn does ' +
      'so for a variable that is not a physical quantity.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Schematic. Laminar organisation, WDR convergence and the gate circuit after Kandel, Principles of ' +
    'Neural Science 6th ed., ch. 20 and Melzack & Wall (1965); the reading of the gate is this course\'s.';
  root.appendChild(c);
}
