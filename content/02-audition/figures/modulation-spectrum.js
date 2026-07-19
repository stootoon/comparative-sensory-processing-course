// Natural sound statistics: modulation spectrum and harmonicity.
//
// Two things this figure has to land. First, that the informative structure in
// natural sound is in the MODULATION domain, not the long-term spectrum —
// which is why audition's ensemble description looks nothing like vision's.
// Second, that harmonicity is a lawful relation between components of one
// source, which is exactly what makes demixing tractable and exactly what
// olfaction does not have.

export const controls = [
  {
    id: 'f0a', label: 'Source A fundamental (Hz)',
    min: 80, max: 400, step: 5, value: 120,
    format: (v) => `${Math.round(v)}`,
  },
  {
    id: 'f0b', label: 'Source B fundamental (Hz)',
    min: 80, max: 400, step: 5, value: 190,
    format: (v) => `${Math.round(v)}`,
  },
  {
    id: 'view', label: 'Show', type: 'select', value: 'modulation',
    options: [
      { value: 'modulation', label: 'Modulation spectrum vs power spectrum' },
      { value: 'harmonic', label: 'Two harmonic sources, superposed' },
    ],
  },
];

export function draw(root, values, { createPlot, sample }) {
  if ((values.view ?? 'modulation') === 'harmonic') {
    return drawHarmonic(root, values.f0a, values.f0b, createPlot);
  }

  const plot = createPlot(root, {
    width: 660, height: 320,
    margin: { top: 20, right: 24, bottom: 50, left: 68 },
    x: { domain: [0.2, 200], scale: 'log', label: 'frequency (Hz)' },
    y: { domain: [1e-3, 3], scale: 'log', label: 'normalised power' },
    title: 'Where the structure is: modulation rate, not carrier frequency',
  });

  // Long-term power spectrum: ~1/f, and nearly the same for every source
  // class — which is precisely why it is a poor ensemble description.
  const power = sample(-0.7, 2.3, 200, (lf) => Math.pow(Math.pow(10, lf), -1) * 0.5)
    .map(([lf, p]) => [Math.pow(10, lf), p]);
  plot.line(power, { className: 'series-3', dashed: true });

  // Modulation spectrum: ~1/f with a speech bump at the syllable rate.
  const modulation = sample(-0.7, 2.3, 220, (lf) => {
    const f = Math.pow(10, lf);
    const base = Math.pow(f, -1) * 0.5;
    const speechBump = 1.6 * Math.exp(-Math.pow(Math.log10(f / 5), 2) / 0.08);
    const rolloff = 1 / (1 + Math.pow(f / 30, 3));
    return (base + speechBump) * rolloff;
  }).map(([lf, p]) => [Math.pow(10, lf), p]);
  plot.line(modulation, { className: 'series-1' });

  plot.vline(5, { className: 'marker', label: 'syllable rate ~4–8 Hz' });

  plot.legend([
    { label: 'modulation spectrum (envelope fluctuations)', className: 'series-1' },
    { label: 'long-term power spectrum (~1/f)', className: 'series-3', dashed: true },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'The dashed line is the long-term power spectrum, and it is <strong>nearly the same for speech, music ' +
    'and rain</strong> — averaging over time destroys almost everything that distinguishes sources. ' +
    'The solid line is the modulation spectrum: how the energy in each frequency band fluctuates. ' +
    'The bump at the syllable rate is structure that the power spectrum cannot see. ' +
    '<strong>This is why audition\'s ensemble description is two-stage</strong> — decompose into channels, ' +
    'then characterise the envelope statistics of each and the correlations between them. ' +
    'Choosing the right statistic is a scientific result, not a formality, and olfaction has not yet had it.';
  root.appendChild(note);
}

function drawHarmonic(root, f0a, f0b, createPlot) {
  const plot = createPlot(root, {
    width: 660, height: 320,
    margin: { top: 20, right: 24, bottom: 50, left: 68 },
    x: { domain: [0, 1600], label: 'frequency (Hz)' },
    y: { domain: [0, 1.1], label: 'amplitude' },
    title: 'Two harmonic sources, superposed at the ear',
  });

  const series = (f0, cls, w) => {
    const pts = [];
    for (let n = 1; n * f0 < 1600; n += 1) {
      pts.push([n * f0, 1 / Math.pow(n, 0.7)]);
    }
    plot.bars(pts, { className: cls, barWidth: w });
    return pts;
  };
  const A = series(f0a, 'series-1', 7);
  const B = series(f0b, 'series-2', 4);

  // How close does any B partial come to an A partial? Near-coincidences are
  // where grouping by harmonicity gets hard.
  let minGap = Infinity;
  for (const [fa] of A) for (const [fb] of B) minGap = Math.min(minGap, Math.abs(fa - fb));
  const ratio = f0b / f0a;
  const nearSimple = [1, 1.5, 2, 4 / 3, 5 / 4, 3].some((r) => Math.abs(ratio - r) < 0.03);

  plot.legend([
    { label: `source A, F0 = ${Math.round(f0a)} Hz`, className: 'series-1' },
    { label: `source B, F0 = ${Math.round(f0b)} Hz`, className: 'series-2' },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `At the ear these two are <strong>summed into one waveform</strong> — there is no separate channel per ` +
    `source. Yet they remain separable, because each source's components stand in a <em>lawful</em> relation ` +
    `to one another: integer multiples of a fundamental. "Which partials share an F0?" is a well-posed ` +
    `question with a usually-correct answer.` +
    (nearSimple
      ? ` <br><br>You have set the two fundamentals to a near-simple ratio (${ratio.toFixed(2)}), so many ` +
        `partials nearly coincide — closest gap ${minGap.toFixed(0)} Hz. This is exactly when grouping fails ` +
        `and two sources fuse into one perceived sound.`
      : ` <br><br>Closest partial spacing: ${minGap.toFixed(0)} Hz. Try setting the fundamentals to a simple ` +
        `ratio like 2:1 or 3:2 and watch the partials collide — that is when two sources fuse perceptually.`) +
    `<br><br><strong>Olfaction has no version of this.</strong> Molecules from one source stand in no lawful ` +
    `chemical relation to each other; a rose emits what its biochemistry emits. That absence is why temporal ` +
    `correlation has to carry the entire grouping load in smell.`;
  root.appendChild(note);
}
