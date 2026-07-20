// Four ascending tracts, four different consumers — and only one of them
// goes through thalamus in the way §6 of every other module means.
//
// The routing question this course asks is functional: what plays thalamus's
// role, and for whom. Nociception answers unusually well because it visibly
// runs four routes in parallel to four consumers with different jobs, and the
// thalamic one is not the dominant one.

export const controls = [
  { id: 'sort', label: 'Order by', type: 'select', value: 'listed',
    options: [
      { value: 'listed',  label: 'Tract' },
      { value: 'rf',      label: 'Receptive-field size (spatial precision)' },
      { value: 'relay',   label: 'Whether it passes through thalamus' },
    ] },
];

// [tract, target, consumer/job, RF score (0 fine – 10 coarse), thalamic?]
const T = [
  ['spinothalamic',    'VPL / VPM → S1',        'where and how much — the discriminative estimate', 2, true],
  ['spinoparabrachial','parabrachial → amygdala','how bad — valence, threat, aversive learning',     7, false],
  ['spinoreticular',   'reticular formation',    'arousal and the diffuse, unlocalised background',  9, false],
  ['spinohypothalamic','hypothalamus',           'autonomic and neuroendocrine response to injury', 10, false],
];

export function draw(root, values, { createDiagram }) {
  const k = values.sort ?? 'listed';
  const rows = [...T];
  if (k === 'rf') rows.sort((a, b) => a[3] - b[3]);
  if (k === 'relay') rows.sort((a, b) => Number(b[4]) - Number(a[4]));

  const d = createDiagram(root, {
    width: 760, height: 96 + rows.length * 84,
    title: 'Four routes out of the dorsal horn, four consumers',
  });

  const CLS = ['series-1', 'series-2', 'series-3', 'series-5'];
  rows.forEach((r, i) => {
    const y = 66 + i * 84;
    d.text(14, y, r[0], { anchor: 'start', className: 'head' });
    d.cell(196, y - 4, { r: 9, className: r[4] ? 'output' : 'excite' });
    d.connect({ x: 208, y: y - 4 }, { x: 268, y: y - 4 }, { sign: 'excite', className: CLS[i % 4] });
    d.text(278, y, r[1], { anchor: 'start' });
    d.text(278, y + 20, r[2], { anchor: 'start', className: CLS[i % 4] });
    d.text(196, y + 22, r[4] ? 'thalamus' : 'no relay', { anchor: 'middle', className: r[4] ? 'head' : 'dim' });
    d.blob(120, y - 4, 4 + r[3], { className: r[3] > 6 ? 'dim' : 'active' });
  });
  d.text(120, 34, 'RF size', { anchor: 'middle', className: 'head' });
  d.text(196, 34, 'relay', { anchor: 'middle', className: 'head' });

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML = k === 'relay'
    ? 'One of four routes passes through the thalamic relay this course means by §6, and it is the one ' +
      'serving the <em>discriminative</em> consumer. The other three go to brainstem, limbic and ' +
      'hypothalamic targets directly. <strong>So nociception sits between vision and olfaction on the ' +
      'routing axis:</strong> it has an obligatory relay for one stream and none for the rest, which is ' +
      'exactly what the service decomposition of §1.6 predicts if the services thalamus provides are the ' +
      'ones a fine spatial estimate needs and not the ones a valence signal needs.'
    : k === 'rf'
    ? 'Receptive-field size grows monotonically as you move from the discriminative route to the autonomic ' +
      'one, and the ordering is not accidental. <strong>Precision is bought only where the consumer spends ' +
      'it.</strong> A withdrawal aimed at a hand needs the hand; a stress response to injury needs no ' +
      'location at all, and paying for one would be waste. This is the same argument §8.4 makes about ' +
      'visceral afferents, run on the central side.'
    : 'The four tracts are usually taught as a list. Read as a design, they are four consumers with ' +
      'different loss functions being served by four differently-specified estimates of the same event: ' +
      '<strong>where it is, how bad it is, whether to wake up, and what the body should do about it.</strong> ' +
      'No single representation serves all four, which is the parallel-streams argument of §8.8 arriving ' +
      'one section early.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Tracts and targets after Kandel, Principles of Neural Science 6th ed., ch. 20. Receptive-field scores ' +
    'are ordinal, for ranking only. The consumer-by-consumer reading is this course\'s.';
  root.appendChild(c);
}
