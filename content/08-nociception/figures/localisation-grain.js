// Ordered array, poor localisation — and the within-modality control.
//
// §12.1 asks which early motifs actually need a metric on the receptor array.
// Nociception is the informative control case: the array IS somatotopic and
// ordered, yet localisation is coarse, and visceral nociception is coarser
// still. That varies spatial precision by two orders of magnitude while
// holding the loss function roughly fixed — which is the comparison the
// cross-modality version can never make.

export const controls = [
  { id: 'axis', label: 'Plot', type: 'select', value: 'error',
    options: [
      { value: 'error',  label: 'Localisation error by channel' },
      { value: 'tiling', label: 'Receptive-field size against innervation density' },
    ] },
  { id: 'show', label: 'Include', type: 'select', value: 'all',
    options: [
      { value: 'all',   label: 'Touch and nociception together' },
      { value: 'noci',  label: 'Nociceptive channels only' },
    ] },
];

// [label, localisation error (cm, order of magnitude), RF diameter (cm),
//  innervation density (arbitrary, log units), class, is-nociceptive]
const CH = [
  ['Aβ touch, fingertip',      0.1,  0.2,  3.0, 'series-4', false],
  ['Aβ touch, back',           2.0,  4.0,  1.4, 'series-4', false],
  ['Aδ nociceptor, hand',      1.5,  2.0,  1.8, 'series-1', true],
  ['C nociceptor, hand',       5.0,  6.0,  1.2, 'series-2', true],
  ['C nociceptor, deep muscle',12.0, 15.0, 0.6, 'series-3', true],
  ['Visceral nociceptor',      30.0, 40.0, 0.0, 'series-5', true],
];

export function draw(root, values, { createPlot }) {
  const axis = values.axis ?? 'error';
  const rows = CH.filter((r) => (values.show ?? 'all') === 'all' || r[5]);

  if (axis === 'error') {
    const plot = createPlot(root, {
      width: 700, height: 340,
      margin: { top: 20, right: 30, bottom: 54, left: 190 },
      x: { domain: [0.05, 60], scale: 'log', label: 'typical localisation error (cm)' },
      y: { domain: [-0.6, rows.length - 0.4], label: '',
           ticks: rows.map((_, i) => i),
           tickFormat: (v) => rows[rows.length - 1 - Math.round(v)][0] },
      title: 'The array is ordered. Localisation is not good.',
    });
    rows.forEach((r, i) => {
      const y = rows.length - 1 - i;
      plot.line([[0.05, y], [r[1], y]], { className: r[4], width: 9 });
      plot.points([[r[1], y]], { className: r[4], radius: 4 });
    });
    plot.vline(1, { className: 'marker', label: '1 cm' });
  } else {
    const plot = createPlot(root, {
      width: 700, height: 340,
      margin: { top: 20, right: 30, bottom: 54, left: 76 },
      x: { domain: [-0.4, 3.4], label: 'innervation density (log, arbitrary units)' },
      y: { domain: [0.1, 60], scale: 'log', label: 'receptive-field diameter (cm)' },
      title: 'Receptive-field size tracks innervation density, as it should',
    });
    rows.forEach((r) => {
      plot.points([[r[3], r[2]]], { className: r[4], radius: 6 });
      plot.annotate(r[3] + 0.06, r[2], r[0], { anchor: 'start', className: r[4] });
    });
  }

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML = (values.show ?? 'all') === 'all'
    ? 'Touch and nociception share a body surface, a somatotopic ordering and a spinal entry point. They do ' +
      'not share spatial precision. <strong>Ordering is necessary for localisation and nowhere near ' +
      'sufficient</strong> — what sets the grain is innervation density and the convergence ratio onto ' +
      'projection neurons, and nociception spends far less on both. The comparison licenses a negative ' +
      'claim about maps and nothing more: a metric on the array buys you the <em>possibility</em> of ' +
      'localising, not the resolution.'
    : 'Within nociception alone, spatial precision varies by roughly two orders of magnitude from Aδ ' +
      'cutaneous to visceral, while the loss function stays approximately fixed — a miss is catastrophic ' +
      'everywhere. <strong>That is the within-modality control §12.1 needs.</strong> It shows that ' +
      'precision is set by what the downstream action requires (withdraw <em>this</em> hand versus feel ' +
      'unwell and stop moving) rather than by the cost of being wrong. Referred pain is the visceral end ' +
      'of this axis failing in the way the convergence predicts.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Orders of magnitude only, compiled from the psychophysical and anatomical ranges quoted in Kandel, ' +
    'Principles of Neural Science 6th ed., chs. 19–20. The figure is for locating the channels relative to ' +
    'one another, not for the numbers.';
  root.appendChild(c);
}
