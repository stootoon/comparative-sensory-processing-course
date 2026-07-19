// The Atick–Redlich filter, decomposed.
//
// The pedagogical job of this figure is to show that the optimal filter is a
// PRODUCT of two competing factors, and that changing SNR changes which one
// wins where. Plotting only the result hides the mechanism; plotting the
// factors separately makes the crossover legible.
//
// Redrawn after the treatment in Atick & Redlich (1992) and Srinivasan,
// Laughlin & Dubs (1982). Curves are computed from the equations in the text,
// not traced from the papers.

export const controls = [
  {
    id: 'logSnr',
    label: 'Signal-to-noise ratio',
    min: -1, max: 4, step: 0.1, value: 3,
    format: (v) => `10^${v.toFixed(1)}`,
  },
  {
    id: 'show',
    label: 'Show',
    type: 'select',
    value: 'both',
    options: [
      { value: 'both', label: 'Filter and its two factors' },
      { value: 'filter', label: 'Optimal filter only, at three SNRs' },
      { value: 'rf', label: 'Resulting receptive field (space)' },
    ],
  },
];

// Natural-scene power spectrum, S(f) ~ 1/f^2, normalised to 1 at f = 1.
const signalPower = (f) => Math.pow(f, -2);

function factors(f, snr) {
  const S = signalPower(f);
  const N = 1 / snr;                       // white noise floor
  const whiten = 1 / Math.sqrt(S);         // rises with f
  const wiener = S / (S + N);              // falls with f
  return { whiten, wiener, filter: whiten * wiener };
}

// Peak sits where signal power meets the noise floor: f = sqrt(A/N).
const peakFrequency = (snr) => Math.sqrt(snr);

const normalised = (fn, points) => {
  const max = Math.max(...points.map(([, y]) => y));
  return points.map(([x, y]) => [x, max > 0 ? y / max : 0]);
};

export function draw(root, values, { createPlot, sample }) {
  const snr = Math.pow(10, values.logSnr);
  const show = values.show ?? 'both';

  if (show === 'rf') return drawReceptiveField(root, snr, createPlot, sample);

  const plot = createPlot(root, {
    width: 660,
    height: 340,
    margin: { top: 18, right: 24, bottom: 50, left: 66 },
    x: { domain: [0.03, 30], scale: 'log', label: 'spatial frequency (cycles/degree)' },
    y: { domain: [0, 1.15], label: 'gain (normalised)' },
    title: 'The optimal filter and the two factors it balances',
  });

  const curve = (fn) =>
    normalised(fn, sample(-1.5, 1.5, 220, (lf) => fn(Math.pow(10, lf)))
      .map(([lf, y]) => [Math.pow(10, lf), y]));

  if (show === 'both') {
    plot.line(curve((f) => factors(f, snr).whiten), { className: 'series-3', dashed: true, width: 1.4 });
    plot.line(curve((f) => factors(f, snr).wiener), { className: 'series-2', dashed: true, width: 1.4 });
    plot.line(curve((f) => factors(f, snr).filter), { className: 'series-1' });
    plot.vline(peakFrequency(snr), { className: 'marker', label: 'signal = noise' });
    plot.legend([
      { label: 'optimal filter (their product)', className: 'series-1' },
      { label: 'whitening factor  1/√S(f)', className: 'series-3', dashed: true },
      { label: 'noise suppression  S/(S+N)', className: 'series-2', dashed: true },
    ]);
  } else {
    for (const [s, cls, dash] of [[1e4, 'series-1', false], [1e2, 'series-2', true], [1e0, 'series-3', true]]) {
      plot.line(curve((f) => factors(f, s).filter), { className: cls, dashed: dash });
      plot.points([[peakFrequency(s), 1]], { className: cls, radius: 4 });
    }
    plot.legend([
      { label: 'high SNR — bandpass, strong surround', className: 'series-1' },
      { label: 'medium SNR', className: 'series-2', dashed: true },
      { label: 'low SNR — lowpass, pooling', className: 'series-3', dashed: true },
    ]);
  }

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  const peak = peakFrequency(snr);
  note.innerHTML = show === 'both'
    ? `The filter (solid) is the product of a whitening factor that <strong>rises</strong> with frequency and a ` +
      `noise-suppression factor that <strong>falls</strong>. At this SNR they cross near ` +
      `<strong>${peak.toFixed(2)} c/deg</strong> — the frequency where signal power equals noise power. ` +
      `Drag SNR down and watch the noise factor collapse earlier, dragging the peak toward zero and turning ` +
      `a bandpass filter into a lowpass one.`
    : 'Three SNRs, same principle. The peak of each curve sits at √SNR — not fitted, but pinned to the ' +
      'frequency where the natural signal spectrum crosses the noise floor. That is what makes this a ' +
      'prediction rather than a description.';
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Computed from the equations in the text; the result reproduces the filter family derived by ' +
    'Atick & Redlich (1992), building on Srinivasan, Laughlin & Dubs (1982).';
  root.appendChild(credit);
}

// The spatial receptive field is the inverse transform of the filter. Showing
// it makes the abstract frequency argument concrete: the reader sees the
// inhibitory surround physically weaken and spread as SNR falls.
function drawReceptiveField(root, snr, createPlot, sample) {
  const plot = createPlot(root, {
    width: 660,
    height: 340,
    margin: { top: 18, right: 24, bottom: 50, left: 66 },
    x: { domain: [-2, 2], label: 'position (degrees)' },
    y: { domain: [-0.35, 1.05], label: 'sensitivity' },
    title: 'The same filter, seen in space',
  });

  // Numerically invert: RF(x) = ∫ W(f) cos(2π f x) df
  const rf = (x, s) => {
    let total = 0;
    const steps = 400;
    for (let i = 1; i <= steps; i += 1) {
      const f = (i / steps) * 20;
      total += factors(f, s).filter * Math.cos(2 * Math.PI * f * x);
    }
    return total;
  };

  const build = (s) => {
    const pts = sample(-2, 2, 240, (x) => rf(x, s));
    const peak = Math.max(...pts.map(([, y]) => Math.abs(y)));
    return pts.map(([x, y]) => [x, y / peak]);
  };

  plot.hline(0, { className: 'marker', dashed: false });
  plot.line(build(1e4), { className: 'series-1' });
  plot.line(build(snr), { className: 'series-2', dashed: true });
  plot.line(build(1), { className: 'series-3', dashed: true });

  plot.legend([
    { label: 'high SNR — deep, tight surround', className: 'series-1' },
    { label: 'current SNR', className: 'series-2', dashed: true },
    { label: 'low SNR — surround nearly gone', className: 'series-3', dashed: true },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'The frequency-domain argument, translated back into the receptive field an electrophysiologist would map. ' +
    'At high SNR there is a deep, tight inhibitory surround: the cell reports the difference between centre and ' +
    'neighbourhood. At low SNR the surround all but disappears and the field becomes a broad positive blob — ' +
    'the cell now reports a local <em>average</em>. <strong>Same neuron, same principle, opposite computation.</strong>';
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Inverse transform of the filter above. Compare the measured weakening of retinal surrounds at scotopic ' +
    'levels reported by Srinivasan, Laughlin & Dubs (1982) and Atick & Redlich (1992).';
  root.appendChild(credit);
}
