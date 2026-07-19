// Laughlin (1981): the contrast–response curve matches the cumulative
// distribution of natural contrasts.
//
// This is the founding empirical success of efficient coding and, taught
// well, it is the most convincing single example in the field: a prediction
// with essentially no free parameters, checked against an independently
// measured distribution.
//
// The figure lets the reader break it. Change the environment's contrast
// distribution and the optimal curve moves; the fly's actual curve does not.
// Mismatch costs information, and the cost is shown.
//
// Redrawn from the argument, not traced: the natural-contrast distribution is
// modelled as Gaussian, following Laughlin's own description of his measured
// histogram.

export const controls = [
  {
    id: 'mean',
    label: 'Environment: mean contrast',
    min: -1, max: 1, step: 0.05, value: 0,
    format: (v) => v.toFixed(2),
  },
  {
    id: 'sd',
    label: 'Environment: contrast spread',
    min: 0.1, max: 1.2, step: 0.05, value: 0.4,
    format: (v) => v.toFixed(2),
  },
  {
    id: 'show',
    label: 'Show',
    type: 'select',
    value: 'match',
    options: [
      { value: 'match', label: 'Contrast distribution and optimal response' },
      { value: 'cost', label: 'What mismatch costs' },
    ],
  },
];

const gaussian = (x, mu, sd) =>
  Math.exp(-0.5 * Math.pow((x - mu) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI));

// Cumulative distribution — the optimal transfer function. Using the CDF
// makes every output level equally likely, which maximises output entropy
// and so maximises transmitted information for a bounded response range.
function cdf(x, mu, sd) {
  const z = (x - mu) / (sd * Math.SQRT2);
  // Abramowitz–Stegun erf approximation.
  const t = 1 / (1 + 0.3275911 * Math.abs(z));
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t
    - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
  const erf = z >= 0 ? y : -y;
  return 0.5 * (1 + erf);
}

// The fly's actual curve, fixed: matched to its own natural environment
// (mean 0, spread 0.4). It does not move when the sliders do.
const FLY_MEAN = 0;
const FLY_SD = 0.4;

export function draw(root, values, { createPlot, sample }) {
  const { mean, sd } = values;
  if ((values.show ?? 'match') === 'cost') {
    return drawCost(root, mean, sd, createPlot, sample);
  }

  const dist = createPlot(root, {
    width: 660, height: 190,
    margin: { top: 16, right: 24, bottom: 40, left: 66 },
    x: { domain: [-2, 2], label: 'contrast' },
    y: { domain: [0, 1.6], label: 'probability' },
    title: 'Distribution of contrasts in the environment',
  });
  dist.area(sample(-2, 2, 200, (x) => gaussian(x, mean, sd)), { className: 'series-2' });
  dist.line(sample(-2, 2, 200, (x) => gaussian(x, mean, sd)), { className: 'series-2' });

  const resp = createPlot(root, {
    width: 660, height: 250,
    margin: { top: 22, right: 24, bottom: 50, left: 66 },
    x: { domain: [-2, 2], label: 'contrast' },
    y: { domain: [0, 1.05], label: 'response (fraction of maximum)' },
    title: 'Optimal contrast–response curve = the cumulative distribution',
  });
  resp.line(sample(-2, 2, 220, (x) => cdf(x, mean, sd)), { className: 'series-1' });
  resp.line(sample(-2, 2, 220, (x) => cdf(x, FLY_MEAN, FLY_SD)), {
    className: 'series-3', dashed: true,
  });

  resp.legend([
    { label: 'optimal for THIS environment', className: 'series-1' },
    { label: "fly LMC's actual curve (fixed)", className: 'series-3', dashed: true },
  ]);

  const matched = Math.abs(mean - FLY_MEAN) < 0.06 && Math.abs(sd - FLY_SD) < 0.06;
  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML = matched
    ? 'The two curves now coincide. <strong>This is Laughlin\'s result:</strong> the measured contrast–response ' +
      'function of a fly large monopolar cell matches the cumulative distribution of contrasts measured ' +
      'independently in the fly\'s woodland habitat. Steep where contrasts are common, shallow where they are ' +
      'rare — so every response level is used equally often, which is exactly the transformation that ' +
      'maximises transmitted information for a bounded output range.'
    : 'You have moved the environment away from the one the fly evolved in, and the optimal curve (solid) has ' +
      'moved with it — while the fly\'s actual curve (dashed) has not. The gap between them is wasted capacity: ' +
      'response levels that are now either saturated or almost never used. Return the sliders to mean 0, ' +
      'spread 0.40 to see them coincide.';
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Redrawn from the argument in Laughlin (1981); the contrast distribution is modelled as Gaussian, ' +
    'following his description of the measured histogram.';
  root.appendChild(credit);
}

function drawCost(root, mean, sd, createPlot, sample) {
  const plot = createPlot(root, {
    width: 660, height: 320,
    margin: { top: 20, right: 24, bottom: 50, left: 70 },
    x: { domain: [0, 1], label: 'response level' },
    y: { domain: [0, 4.5], label: 'how often this level is used' },
    title: 'Usage of the output range — flat means no capacity wasted',
  });

  // Histogram of output levels when the environment's contrasts are passed
  // through a curve tuned to (FLY_MEAN, FLY_SD). Matched -> flat.
  const bins = 40;
  const counts = new Array(bins).fill(0);
  const N = 20000;
  for (let i = 0; i < N; i += 1) {
    const u = (i + 0.5) / N;
    // Inverse-transform sample from the environment distribution.
    let lo = -6, hi = 6;
    for (let k = 0; k < 40; k += 1) {
      const mid = (lo + hi) / 2;
      if (cdf(mid, mean, sd) < u) lo = mid; else hi = mid;
    }
    const out = cdf((lo + hi) / 2, FLY_MEAN, FLY_SD);
    const b = Math.min(bins - 1, Math.max(0, Math.floor(out * bins)));
    counts[b] += 1;
  }
  const usage = counts.map((c, i) => [(i + 0.5) / bins, (c / N) * bins]);
  plot.bars(usage, { className: 'series-1', barWidth: 11 });
  plot.hline(1, { className: 'marker', label: 'flat = every level used equally' });

  const flat = Math.sqrt(usage.reduce((s, [, v]) => s + (v - 1) ** 2, 0) / bins);
  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `Each bar is how often a given response level gets used, given the current environment and the fly's ` +
    `fixed transfer curve. <strong>Flat is optimal</strong> — every level equally likely means maximum output ` +
    `entropy, hence maximum information for a bounded range. Deviation from flat: ` +
    `<strong>${flat.toFixed(2)}</strong> (0 is perfect). ` +
    `Move the environment sliders and watch the distribution pile up at one end: those are response levels ` +
    `the neuron is paying to maintain and hardly ever using.`;
  root.appendChild(note);
}
