// W-2: plume statistics against natural image statistics.
//
// The asymmetry is the whole point of the figure.
//
// A natural image's power spectrum is scale-invariant: move closer or further
// and the SPECTRUM DOES NOT CHANGE SHAPE. Distance information in vision comes
// from geometry — stereo, parallax, perspective — not from image statistics.
//
// A plume's temporal spectrum is the opposite. Its SHAPE encodes distance:
// close to a source the signal is dense and carries high-frequency structure;
// far away it becomes intermittent and low-pass. The statistics ARE the
// distance signal, which is why olfactory localisation is a problem about
// temporal statistics rather than about spatial gradients.
//
// The correlation panel makes the bilateral-sampling story concrete: the
// correlation between two sampling points falls with their separation at a
// rate that itself depends on distance to source.

export const controls = [
  {
    id: 'distance',
    label: 'Distance from odour source',
    min: 0.2, max: 10, step: 0.1, value: 1,
    format: (v) => `${v.toFixed(1)} m`,
  },
  {
    id: 'turbulence',
    label: 'Turbulence intensity',
    min: 0.1, max: 1.5, step: 0.05, value: 0.6,
    format: (v) => v.toFixed(2),
  },
  {
    id: 'panel',
    label: 'Show',
    type: 'select',
    value: 'spectra',
    options: [
      { value: 'spectra', label: 'Power spectra — image vs plume' },
      { value: 'whiffs', label: 'Whiff duration distribution' },
      { value: 'correlation', label: 'Two-point correlation vs separation' },
    ],
  },
];

// Natural image power spectrum: S(f) ~ 1/f^2. Scale-invariant, so viewing
// distance rescales the frequency axis but leaves the shape untouched — on
// log-log axes it is the same straight line wherever you stand.
const imageSpectrum = (f) => Math.pow(f, -2);

// Plume temporal spectrum. A Kolmogorov-like -5/3 inertial range, rolled off
// above a cutoff that falls as distance grows: far from the source, turbulent
// diffusion has smoothed away the fast structure.
function plumeSpectrum(f, distance, turbulence) {
  const cutoff = 40 / (1 + distance / (0.8 * turbulence + 0.2));
  const inertial = Math.pow(f, -5 / 3);
  const rolloff = 1 / (1 + Math.pow(f / cutoff, 2));
  return inertial * rolloff;
}

// Intermittency: the fraction of time odour is detectable. Falls steeply with
// distance — the single most robust feature of real plume data.
const intermittency = (distance, turbulence) =>
  Math.exp(-distance / (2.5 / (0.5 + turbulence)));

// Whiff durations follow a power law with an exponential cutoff whose
// position depends on distance.
function whiffDensity(duration, distance, turbulence) {
  const cutoff = 0.35 * (1 + distance / 2) * (1 + turbulence);
  return Math.pow(duration, -1.5) * Math.exp(-duration / cutoff);
}

// Correlation between two sampling points separated by `separation`,
// at a given distance from the source. Nearby points sample the same eddies;
// the correlation length grows with distance because eddies grow as the plume
// spreads — which is exactly why separation carries distance information.
function twoPointCorrelation(separation, distance, turbulence) {
  const correlationLength = 0.04 * distance * (1 + turbulence) + 0.01;
  return Math.exp(-Math.pow(separation / correlationLength, 1.3));
}

export function draw(root, values, { createPlot, sample }) {
  const distance = values.distance;
  const turbulence = values.turbulence;
  const panel = values.panel ?? 'spectra';

  if (panel === 'spectra') return drawSpectra(root, distance, turbulence, createPlot, sample);
  if (panel === 'whiffs') return drawWhiffs(root, distance, turbulence, createPlot, sample);
  return drawCorrelation(root, distance, turbulence, createPlot, sample);
}

function drawSpectra(root, distance, turbulence, createPlot, sample) {
  // Every curve is normalised to 1 at the low-frequency end, so overall power
  // is divided out and only the SHAPE remains. That is the whole comparison:
  // normalised, the image curves collapse onto a single line at every viewing
  // distance, while the plume curves separate by distance.
  const NORM_F = 0.1;

  const plot = createPlot(root, {
    width: 660,
    height: 330,
    margin: { top: 18, right: 24, bottom: 48, left: 66 },
    x: { domain: [0.1, 100], scale: 'log', label: 'frequency (Hz, or cycles/degree for the image)' },
    y: { domain: [1e-4, 2], scale: 'log', label: 'power, normalised at low frequency' },
    title: 'Shape of the image spectrum against shape of the plume spectrum',
  });

  const shapeOf = (fn, steps = 200) => {
    const ref = fn(NORM_F);
    return sample(-1, 2, steps, (logF) => fn(Math.pow(10, logF)) / ref)
      .map(([logF, p]) => [Math.pow(10, logF), p]);
  };

  // Natural images at two viewing distances. Scale invariance means both
  // normalise to exactly the same curve — they draw on top of each other.
  plot.line(shapeOf((f) => imageSpectrum(f), 160), { className: 'series-2' });
  plot.line(shapeOf((f) => imageSpectrum(f * 3) * 9, 160), {
    className: 'series-2', dashed: true, width: 1.4,
  });

  // Plume at a near reference, the chosen distance, and a far reference.
  plot.line(shapeOf((f) => plumeSpectrum(f, 0.3, turbulence), 160), {
    className: 'series-4', dashed: true, width: 1.4,
  });
  plot.line(shapeOf((f) => plumeSpectrum(f, 8, turbulence), 160), {
    className: 'series-3', dashed: true, width: 1.4,
  });
  plot.line(shapeOf((f) => plumeSpectrum(f, distance, turbulence)), { className: 'series-1' });

  plot.vline(40, { className: 'marker', label: '40 Hz — mice discriminate here' });

  plot.legend([
    { label: `plume at ${distance.toFixed(1)} m`, className: 'series-1' },
    { label: 'plume at 0.3 m', className: 'series-4', dashed: true },
    { label: 'plume at 8 m', className: 'series-3', dashed: true },
    { label: 'natural image, 2 viewing distances', className: 'series-2', dashed: true },
  ]);

  const cutoff = 40 / (1 + distance / (0.8 * turbulence + 0.2));
  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'Both image curves lie exactly on top of one another — that is scale invariance, and it means the image ' +
    'spectrum carries <strong>no</strong> distance information at all. Vision gets distance from geometry instead. ' +
    `The plume curves separate: at ${distance.toFixed(1)} m the rolloff knee sits near ` +
    `<strong>${cutoff.toFixed(1)} Hz</strong>, and it moves down as you retreat from the source. ` +
    'In olfaction the shape of the spectrum <strong>is</strong> the distance signal.';
  root.appendChild(note);
}

function drawWhiffs(root, distance, turbulence, createPlot, sample) {
  const plot = createPlot(root, {
    width: 660,
    height: 330,
    x: { domain: [0.01, 10], scale: 'log', label: 'whiff duration (s)' },
    y: { domain: [1e-4, 1e3], scale: 'log', label: 'probability density' },
    title: 'Whiff duration distribution',
  });

  for (const [d, cls, dashed] of [[distance, 'series-1', false], [0.3, 'series-4', true], [8, 'series-2', true]]) {
    const curve = sample(-2, 1, 180, (logT) => {
      const t = Math.pow(10, logT);
      return whiffDensity(t, d, turbulence);
    }).map(([logT, p]) => [Math.pow(10, logT), p]);
    plot.line(curve, { className: cls, dashed });
  }

  plot.legend([
    { label: `${distance.toFixed(1)} m`, className: 'series-1' },
    { label: '0.3 m (close)', className: 'series-4' },
    { label: '8 m (far)', className: 'series-2' },
  ]);

  const inter = intermittency(distance, turbulence);
  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `Intermittency at this distance: odour is detectable <strong>${(inter * 100).toFixed(0)}%</strong> of the time. ` +
    'Power-law durations mean there is no characteristic timescale — so an animal averaging over any fixed window ' +
    'discards information. This is why mean concentration is a poor summary of a plume.';
  root.appendChild(note);
}

function drawCorrelation(root, distance, turbulence, createPlot, sample) {
  const plot = createPlot(root, {
    width: 660,
    height: 330,
    x: { domain: [0, 0.5], label: 'separation between sampling points (m)' },
    y: { domain: [0, 1], label: 'correlation of concentration time series' },
    title: 'Two-point correlation — where the spatial information lives',
  });

  for (const [d, cls, dashed] of [[distance, 'series-1', false], [0.5, 'series-4', true], [5, 'series-2', true]]) {
    const curve = sample(0.001, 0.5, 180, (s) => twoPointCorrelation(s, d, turbulence));
    plot.line(curve, { className: cls, dashed });
  }

  // Mouse internostril distance — the separation actually available.
  plot.vline(0.005, { className: 'marker', label: 'mouse internostril (~5 mm)' });

  plot.legend([
    { label: `source at ${distance.toFixed(1)} m`, className: 'series-1' },
    { label: 'source at 0.5 m', className: 'series-4' },
    { label: 'source at 5 m', className: 'series-2' },
  ]);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    'Correlation falls off over a length that <em>grows with distance to the source</em>, because eddies grow as the ' +
    'plume spreads. So comparing two nearby samples is informative about distance — and note how little separation ' +
    'a mouse actually has. That the comparison works at all is why high-frequency components matter: they decorrelate ' +
    'fastest with separation, and so carry the most information about source geometry.';
  root.appendChild(note);
}
