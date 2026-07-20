// Why one afferent carries three transduction mechanisms.
//
// Every other sensor in this course transduces ONE physical quantity. The
// nociceptor transduces heat, pressure and chemistry onto a single line,
// because the latent variable it reports — tissue damage — has no single
// physical signature. This diagram exists to make that inference structure
// visible: three channels, one estimate, one action.
//
// The alternative architecture (three labelled lines, damage inferred
// centrally) is drawable too, and the second view draws it, so the reader can
// see what is being given up and what is being bought.

export const controls = [
  { id: 'view', label: 'Show', type: 'select', value: 'converge',
    options: [
      { value: 'converge', label: 'Polymodal: convergence at the sensor' },
      { value: 'split',    label: 'Counterfactual: three labelled lines' },
    ] },
];

export function draw(root, values, { createDiagram }) {
  return (values.view ?? 'converge') === 'converge'
    ? drawConverge(root, createDiagram)
    : drawSplit(root, createDiagram);
}

function drawConverge(root, createDiagram) {
  const d = createDiagram(root, {
    width: 760, height: 430,
    title: 'The polymodal nociceptor: three transducers, one estimate',
  });

  const W = 430;
  d.layer(56, 58, 'the peripheral chemical and physical milieu', { className: 'alt', extent: W });
  d.layer(196, 54, 'free nerve ending (C fibre)', { extent: W });
  d.layer(320, 56, 'dorsal horn — the estimate arrives already pooled', { className: 'accent', extent: W });

  // Three transduction families, drawn as three receptors on ONE ending.
  const chans = [
    { x: 116, cls: 'receptor', name: 'TRPV1', cue: 'heat > ~43 °C' },
    { x: 232, cls: 'excite',   name: 'Piezo2', cue: 'intense pressure' },
    { x: 348, cls: 'output',   name: 'ASIC / P2X / TRPA1', cue: 'H⁺, ATP, irritants' },
  ];
  chans.forEach((c) => {
    d.cell(c.x, 88, { r: 8, className: c.cls, label: c.name, labelDy: -18 });
    d.text(c.x, 118, c.cue, { anchor: 'middle' });
  });

  // All three onto the same ending.
  const endX = 232, endY = 218;
  chans.forEach((c) => {
    d.connect({ x: c.x, y: 128 }, { x: endX, y: endY - 14 }, { sign: 'excite', className: c.cls });
  });
  d.cell(endX, endY, { r: 12, className: 'receptor', dendrites: { width: 28, height: 16, up: true } });
  d.text(endX, endY + 30, 'one spike train — the modality of the insult is already lost', { anchor: 'middle' });

  d.connect({ x: endX, y: endY + 40 }, { x: endX, y: 344 }, { sign: 'excite', className: 'strong' });
  d.cell(endX, 358, { r: 10, className: 'output', label: 'projection neuron', labelDy: 24 });

  d.bracket(400, 80, 60, 'thermal', { side: 'right' });
  d.bracket(400, 152, 70, 'mechanical + chemical', { side: 'right' });

  d.note(462, 84, [
    'THE LATENT VARIABLE',
    'is "tissue is being damaged",',
    'which is not a form of energy',
    'and has no single physical',
    'signature. Damage can arrive',
    'by heat, by force, or by',
    'chemistry — so the sensor',
    'must watch all three.',
  ]);
  d.note(462, 216, [
    'OR, NOT AND',
    'Any channel opening is',
    'sufficient. That is the right',
    'combination rule when the',
    'causes are alternatives, and',
    'it is what makes the sensor',
    'so hard to fool with a miss.',
  ]);
  d.note(462, 330, [
    'THE PRICE',
    'Convergence at the sensor',
    'discards the cause. Downstream',
    'cannot recover whether the',
    'insult was hot or sharp — and',
    'for withdrawal it does not',
    'need to.',
  ]);

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML =
    'Compare this with every other §3 in the course. The photoreceptor transduces photons; the hair cell ' +
    'transduces displacement; the otolith transduces linear acceleration. Each is a device for measuring ' +
    '<em>one physical quantity</em>, and its noise floor and bandwidth are quoted in the units of that ' +
    'quantity. <strong>The nociceptor has no such units</strong>, because the quantity it reports is a ' +
    'consequence rather than an energy. Polymodality is not sloppy engineering — it is the correct sensor ' +
    'design when the target is defined by what it does to you rather than by what it is made of.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Schematic. Channel families and their approximate activating conditions after Kandel, Principles of ' +
    'Neural Science 6th ed., ch. 20; the convergence argument is this course\'s.';
  root.appendChild(c);
}

function drawSplit(root, createDiagram) {
  const d = createDiagram(root, {
    width: 760, height: 380,
    title: 'The architecture nociception did NOT adopt',
  });

  const W = 430;
  d.layer(60, 54, 'three independent labelled lines', { className: 'alt', extent: W });
  d.layer(250, 60, 'central inference: is this damage?', { className: 'accent', extent: W });

  const lines = [
    { x: 116, cls: 'receptor', name: 'heat' },
    { x: 232, cls: 'excite',   name: 'force' },
    { x: 348, cls: 'output',   name: 'chemistry' },
  ];
  lines.forEach((l) => {
    d.cell(l.x, 88, { r: 9, className: l.cls, label: l.name, labelDy: -18 });
    d.connect({ x: l.x, y: 100 }, { x: l.x, y: 268 }, { sign: 'excite', className: l.cls });
    d.cell(l.x, 282, { r: 8, className: l.cls });
  });
  d.blob(232, 336, 20, { label: 'damage?' });
  lines.forEach((l) => d.connect({ x: l.x, y: 292 }, { x: 232, y: 318 }, { sign: 'excite', className: 'dim' }));

  d.note(462, 84, [
    'WHAT IT WOULD BUY',
    'The cause is preserved, so',
    'the animal could in principle',
    'act differently for a burn',
    'and a cut, and could learn',
    'which insults matter.',
  ]);
  d.note(462, 210, [
    'WHAT IT WOULD COST',
    'Latency, and a decision rule',
    'that has to be right. Under',
    'the loss of §8.1 the extra',
    'stage buys resolution nobody',
    'needs and adds delay and a',
    'new place to make a miss.',
  ]);

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML =
    'Nociception has this architecture too — <strong>partly</strong>. Aδ mechanical and thermal nociceptors are ' +
    'relatively specific, and the discriminative stream does support judgements of quality and location. ' +
    'So the real system is a mixture, and the interesting question is why the <em>fast withdrawal</em> arm is ' +
    'the polymodal one and the <em>slow deliberative</em> arm is the specific one. §8.8 argues that is the ' +
    'loss-function split appearing again, with the same sign as in touch and taste.';
  root.appendChild(n);
}
