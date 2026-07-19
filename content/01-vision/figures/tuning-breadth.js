// W-1: optimal tuning breadth against stimulus dimensionality.
//
// The point of this figure is that the optimum INVERTS as dimensionality
// grows: narrow tuning wins in 1-D, broad tuning wins in high dimensions.
// That single fact converts the vision/olfaction tuning contrast from a fact
// to be memorised into a consequence that can be watched.
//
// The model, and why it has an interior optimum at all:
//
//   Fisher information for N Gaussian tuning curves of width σ tiling a
//   D-dimensional space goes as N·σ^(D-2). On its own that is monotonic —
//   which is why a naive treatment produces a cliff rather than an optimum.
//   Two effects bound it at both ends:
//
//   TOO NARROW → coverage fails. The expected number of channels driven by a
//   stimulus is N·σ^D; when that falls below ~1 the stimulus lands in a gap
//   between tuning curves and drives nothing. The information you would have
//   had is irrelevant, because you are guessing. This is the term that kills
//   narrow tuning in high D, where σ^D collapses.
//
//   TOO BROAD → redundancy. As σ approaches the size of the space, every
//   channel responds to everything, gradients flatten, and channels stop
//   carrying independent information.
//
// The optimum sits between the two, and its location moves right with D
// because the coverage term degrades exponentially in D.

export const controls = [
  {
    id: 'dim',
    label: 'Stimulus dimensionality D',
    min: 1, max: 8, step: 1, value: 1,
    format: (v) => `${v}`,
  },
  {
    id: 'channels',
    label: 'Number of channels N',
    min: 10, max: 1000, step: 10, value: 200,
    format: (v) => `${Math.round(v)}`,
  },
  {
    id: 'noise',
    label: 'Noise (fraction of peak)',
    min: 0.02, max: 0.5, step: 0.01, value: 0.1,
    format: (v) => v.toFixed(2),
  },
];

const MAX_ERROR = 1;   // guessing: the stimulus could be anywhere in the space

function decodingError(sigma, D, N, noise) {
  // Expected number of channels a stimulus actually drives.
  const active = N * Math.pow(Math.min(sigma, 1), D);

  // Probability at least one channel responds. Below this you are guessing.
  const coverage = 1 - Math.exp(-active);

  // Fisher information from the channels that do respond, ∝ N·σ^(D-2),
  // scaled by noise.
  const rawInfo = (N * Math.pow(sigma, D - 2)) / (noise * noise / 0.01);

  // Redundancy penalty: broad channels overlap and stop being independent.
  const redundancy = 1 / (1 + Math.pow(sigma / 0.8, 4));

  const info = Math.max(rawInfo * redundancy, 1e-9);
  const errorWhenCovered = Math.min(MAX_ERROR, 1 / Math.sqrt(info));

  // Expected error mixes the covered case with the guessing case.
  return coverage * errorWhenCovered + (1 - coverage) * MAX_ERROR;
}

function optimumFor(D, N, noise) {
  let best = { sigma: 0.01, err: Infinity };
  for (let i = 0; i <= 300; i += 1) {
    const sigma = Math.pow(10, -2 + (2 * i) / 300);
    const err = decodingError(sigma, D, N, noise);
    if (err < best.err) best = { sigma, err };
  }
  return best;
}

// Real receptor arrays placed on the tuning-width axis. Order-of-magnitude
// placements meant to anchor intuition, not precise measurements.
// `dy` staggers the labels so they do not collide.
const ANCHORS = [
  { sigma: 0.04, label: 'auditory filters', series: 'series-3', dy: -0.07 },
  { sigma: 0.30, label: 'odorant receptors', series: 'series-4', dy: 0.13 },
  { sigma: 0.45, label: 'taste (5)', series: 'series-5', dy: -0.09 },
  { sigma: 0.62, label: 'cones (3)', series: 'series-2', dy: 0.13 },
];

export function draw(root, values, { createPlot, sample }) {
  const D = Math.round(values.dim);
  const N = Math.round(values.channels);
  const noise = values.noise;

  const plot = createPlot(root, {
    width: 660,
    height: 350,
    margin: { top: 20, right: 22, bottom: 50, left: 66 },
    x: {
      domain: [0.01, 1],
      scale: 'log',
      label: 'tuning width σ  (fraction of stimulus range)',
    },
    y: { domain: [0, 1], label: 'decoding error  (lower is better)' },
    title: 'Optimal tuning width against stimulus dimensionality',
  });

  const curveFor = (dim, steps = 220) =>
    sample(-2, 0, steps, (logSigma) => decodingError(Math.pow(10, logSigma), dim, N, noise))
      .map(([logSigma, err]) => [Math.pow(10, logSigma), err]);

  // Faint references first so the current curve draws on top.
  for (const [refD, cls] of [[1, 'series-3'], [6, 'series-4']]) {
    if (refD === D) continue;
    plot.line(curveFor(refD, 160), { className: cls, dashed: true, width: 1.2 });
    const opt = optimumFor(refD, N, noise);
    plot.points([[opt.sigma, opt.err]], { className: cls, radius: 3 });
  }

  plot.line(curveFor(D), { className: 'series-1' });

  const opt = optimumFor(D, N, noise);
  plot.vline(opt.sigma, {
    className: 'marker',
    label: `optimum σ ≈ ${opt.sigma < 0.1 ? opt.sigma.toFixed(3) : opt.sigma.toFixed(2)}`,
  });
  plot.points([[opt.sigma, opt.err]], { className: 'series-1', radius: 5 });

  for (const anchor of ANCHORS) {
    const err = decodingError(anchor.sigma, D, N, noise);
    plot.points([[anchor.sigma, err]], { className: anchor.series, radius: 4 });
    plot.annotate(
      anchor.sigma,
      Math.min(0.93, Math.max(0.07, err + anchor.dy)),
      anchor.label,
      { anchor: 'middle', className: anchor.series }
    );
  }

  plot.legend([
    { label: `D = ${D} (current)`, className: 'series-1' },
    { label: 'D = 1 reference', className: 'series-3', dashed: true },
    { label: 'D = 6 reference', className: 'series-4', dashed: true },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  const wide = opt.sigma > 0.25;
  note.innerHTML =
    `At <strong>D = ${D}</strong> with <strong>N = ${N}</strong> channels the optimum is ` +
    `<strong>σ ≈ ${opt.sigma < 0.1 ? opt.sigma.toFixed(3) : opt.sigma.toFixed(2)}</strong> — ` +
    `${wide ? 'broad' : 'narrow'} tuning wins. ` +
    'Drag D from 1 to 8 and watch the optimum sweep right: narrow tuning tiles a line efficiently, but in ' +
    'high dimensions a narrowly-tuned array leaves most stimuli in gaps where nothing responds at all. ' +
    'Drop N to 10 with D = 8 to reach the region where <em>no</em> tuning width works.';
  root.appendChild(note);
}
