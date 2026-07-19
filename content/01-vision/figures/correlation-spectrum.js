// Autocorrelation and power spectrum, side by side.
//
// The Wiener–Khinchin relation is usually asserted rather than shown. Seeing
// the two curves move in opposite directions as you drag one slider is the
// fastest way to internalise that "strongly correlated" and "steep spectrum"
// are one fact in two languages — and that "white" literally means
// "uncorrelated".

export const controls = [
  {
    id: 'lambda',
    label: 'Correlation length λ (degrees)',
    min: 0.02, max: 2, step: 0.02, value: 0.5,
    format: (v) => v.toFixed(2),
  },
  {
    id: 'view',
    label: 'Show',
    type: 'select',
    value: 'pair',
    options: [
      { value: 'pair', label: 'Autocorrelation and its spectrum' },
      { value: 'scale', label: 'Why natural scenes have no single λ' },
    ],
  },
];

// Exponential correlation with length scale λ.
const autocorr = (dx, lambda) => Math.exp(-Math.abs(dx) / lambda);

// Its Fourier transform: a Lorentzian, flat below 1/λ and ~1/f² above.
const lorentzian = (f, lambda) =>
  (2 * lambda) / (1 + Math.pow(2 * Math.PI * f * lambda, 2));

export function draw(root, values, { createPlot, sample }) {
  if ((values.view ?? 'pair') === 'scale') {
    return drawScaleInvariance(root, createPlot, sample);
  }

  const lambda = values.lambda;

  // --- Panel 1: autocorrelation -------------------------------------------
  const left = createPlot(root, {
    width: 660, height: 210,
    margin: { top: 16, right: 24, bottom: 42, left: 66 },
    x: { domain: [0, 3], label: 'separation Δx (degrees)' },
    y: { domain: [0, 1.05], label: 'correlation' },
    title: 'Autocorrelation: how similar are two points Δx apart',
  });
  left.line(sample(0, 3, 200, (dx) => autocorr(dx, lambda)), { className: 'series-1' });
  left.vline(lambda, { className: 'marker', label: `λ = ${lambda.toFixed(2)}°` });
  left.hline(Math.exp(-1), { className: 'marker', label: '1/e' });

  // --- Panel 2: its transform ---------------------------------------------
  const right = createPlot(root, {
    width: 660, height: 250,
    margin: { top: 22, right: 24, bottom: 50, left: 66 },
    x: { domain: [0.03, 30], scale: 'log', label: 'spatial frequency (cycles/degree)' },
    y: { domain: [1e-5, 10], scale: 'log', label: 'power' },
    title: 'Its Fourier transform: the power spectrum',
  });
  right.line(
    sample(-1.5, 1.5, 220, (lf) => lorentzian(Math.pow(10, lf), lambda))
      .map(([lf, p]) => [Math.pow(10, lf), p]),
    { className: 'series-1' }
  );

  // 1/f² reference so the reader can see the asymptote the Lorentzian joins.
  right.line(
    sample(-1.5, 1.5, 120, (lf) => Math.pow(Math.pow(10, lf), -2) * 0.02)
      .map(([lf, p]) => [Math.pow(10, lf), p]),
    { className: 'series-3', dashed: true, width: 1.3 }
  );
  right.vline(1 / (2 * Math.PI * lambda), { className: 'marker', label: 'knee at 1/2πλ' });

  right.legend([
    { label: 'spectrum of this correlation', className: 'series-1' },
    { label: '1/f² reference slope', className: 'series-3', dashed: true },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `<strong>Drag λ and watch the two panels move in opposite directions.</strong> ` +
    `Wider correlation (larger λ) means the spectrum's knee moves to <em>lower</em> frequency and the spectrum ` +
    `becomes more concentrated — steeper, in the sense that more of the power sits at low f. ` +
    `Push λ toward zero and the correlation becomes a spike at the origin while the spectrum flattens out: ` +
    `<strong>white spectrum and zero correlation are the same statement.</strong> That is where the word ` +
    `"whitening" comes from — flattening the spectrum <em>is</em> removing the correlations.`;
  root.appendChild(note);
}

// Natural scenes have no single correlation length. Superposing many scales
// is what turns a Lorentzian (which has a knee) into a power law (which does
// not) — and a power law is what lets one filter work at every viewing
// distance.
function drawScaleInvariance(root, createPlot, sample) {
  const plot = createPlot(root, {
    width: 660, height: 340,
    margin: { top: 20, right: 24, bottom: 50, left: 66 },
    x: { domain: [0.03, 30], scale: 'log', label: 'spatial frequency (cycles/degree)' },
    y: { domain: [1e-5, 30], scale: 'log', label: 'power' },
    title: 'Superposing many correlation lengths gives a power law',
  });

  const scales = [0.05, 0.15, 0.45, 1.35, 4.0];
  for (const lambda of scales) {
    plot.line(
      sample(-1.5, 1.5, 140, (lf) => lorentzian(Math.pow(10, lf), lambda) / lambda)
        .map(([lf, p]) => [Math.pow(10, lf), p]),
      { className: 'series-3', dashed: true, width: 1 }
    );
  }

  // Their sum: straight on log-log axes — a power law, no knee anywhere.
  plot.line(
    sample(-1.5, 1.5, 220, (lf) => {
      const f = Math.pow(10, lf);
      return scales.reduce((sum, l) => sum + lorentzian(f, l) / l, 0);
    }).map(([lf, p]) => [Math.pow(10, lf), p]),
    { className: 'series-1' }
  );

  plot.legend([
    { label: 'sum over all scales — a power law', className: 'series-1' },
    { label: 'individual correlation lengths', className: 'series-3', dashed: true },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'Each dashed curve is one correlation length, and each has a <em>knee</em> — a scale at which its behaviour ' +
    'changes. A scene containing objects at every distance superposes all of them, and the sum (solid) is ' +
    'straight on log–log axes: <strong>a power law, with no characteristic scale anywhere.</strong> ' +
    'This is why the retina can hard-wire one filter shape and have it remain appropriate whether you are ' +
    'looking at your hand or at a hillside — and, per §3.2, why olfaction cannot do the same, since plume ' +
    'statistics change shape with distance rather than staying scale-free.';
  root.appendChild(note);
}
