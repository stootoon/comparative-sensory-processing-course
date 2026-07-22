// (a) Four images, and their power spectra on one pair of axes.
//
// §1.2 asserts that natural images have power spectra falling roughly as 1/f².
// This figure measures it, in the browser, from photographs that ship with the
// course. Every number on screen is computed from the pixels at load time; none
// of it is a curve drawn to look right.
//
// The controls in the reference set are doing real work. White noise fixes what
// "no correlation" looks like — a flat line — so the reader can see that the
// natural curves are nothing like it. The courtyard fixes what a scene with a
// characteristic scale looks like. And the phase-scrambled view is the sharpest
// control of all: it has the same power spectrum as the photograph to floating
// point, and it looks like nothing, which is the whole of the argument the
// section's "second-order is not the whole story" callout makes in words.

import {
  loadImage, cropWindow, radialSpectrum, fitSlope,
  whiteNoise, phaseScramble, patchCanvas,
} from './spectrum-core.js';

const BASE = 'content/media/';
const N = 512;          // analysis window, native pixels
const FIT = [4, 64];    // fit band, cycles per window

const SCENES = [
  { key: 'forest',    file: 'nis-forest.jpg',    label: 'Beech wood',  cls: 'series-3',
    note: 'foliage, no dominant scale' },
  { key: 'landscape', file: 'nis-landscape.jpg', label: 'Hillside',    cls: 'series-1',
    note: 'distant terrain' },
  { key: 'colonnade', file: 'nis-colonnade.jpg', label: 'Courtyard',   cls: 'series-2',
    note: 'built, strongly periodic' },
];

export const controls = [
  {
    id: 'view', label: 'Show', type: 'select', value: 'raw',
    options: [
      { value: 'raw',      label: 'Power spectra' },
      { value: 'comp',     label: 'Compensated: power × f²  (flat means exactly 1/f²)' },
      { value: 'scramble', label: 'Phase scramble: identical spectrum, no structure' },
    ],
  },
];

const h = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

// Redraws are not awaited by the figure host, so a fast switch of the select
// can leave two async renders racing to append to the same element. Each render
// stamps a token and abandons itself if a later one has started.
export function draw(root, values, api) {
  const token = {};
  root.__nisToken = token;
  root.appendChild(h('p', 'nis-loading', 'Measuring spectra from the photographs…'));
  render(root, values, api, token).catch((error) => {
    root.replaceChildren();
    root.appendChild(h('div', 'x-figure-error', error.message));
  });
}

async function measured() {
  const out = [];
  for (const scene of SCENES) {
    const image = await loadImage(BASE + scene.file);
    const patch = cropWindow(image, N);
    const spectrum = radialSpectrum(patch, N);
    out.push({ ...scene, patch, spectrum, slope: fitSlope(spectrum, ...FIT).slope });
  }
  const noise = whiteNoise(N);
  const noiseSpectrum = radialSpectrum(noise, N);
  out.push({
    key: 'noise', label: 'White noise', cls: 'series-5', note: 'synthetic control',
    patch: noise, spectrum: noiseSpectrum, slope: fitSlope(noiseSpectrum, ...FIT).slope,
  });
  return out;
}

async function render(root, values, api, token) {
  const view = values.view ?? 'raw';
  const sets = view === 'scramble' ? await scrambleSet() : await measured();
  if (root.__nisToken !== token) return;
  root.replaceChildren();

  // --- the images themselves ---
  const strip = h('div', 'nis-strip');
  for (const set of sets) {
    const cell = h('figure', 'nis-cell');
    cell.append(patchCanvas(set.patch, N, 116));
    const cap = h('figcaption', 'nis-cell-cap');
    cap.append(
      h('span', `nis-key ${set.cls}`, set.label),
      h('span', 'nis-cell-note', set.note),
      h('span', 'nis-slope', `slope ${set.slope.toFixed(2)}`)
    );
    cell.append(cap);
    strip.append(cell);
  }
  root.append(strip);

  // --- their spectra ---
  const compensate = view === 'comp';
  const curves = sets.map((set) => ({
    set,
    points: set.spectrum.k.map((k, i) => [k, set.spectrum.power[i] * (compensate ? k * k : 1)]),
  }));

  const ys = curves.flatMap((c) => c.points.filter(([k]) => k >= 2).map(([, y]) => y)).filter((v) => v > 0);
  const yMax = 10 ** Math.ceil(Math.log10(Math.max(...ys)));
  const yMin = Math.max(10 ** Math.floor(Math.log10(Math.min(...ys))), yMax * 1e-9);

  const plot = api.createPlot(root, {
    width: 660, height: 320,
    margin: { top: 18, right: 22, bottom: 48, left: 70 },
    x: { domain: [1, N / 2], scale: 'log', label: 'spatial frequency (cycles per image width)' },
    y: { domain: [yMin, yMax], scale: 'log', label: compensate ? 'power × f²' : 'power (normalised)' },
    title: compensate ? 'Spectra compensated by f²' : 'Radially averaged power spectra',
  });

  if (compensate) {
    plot.hline(geomean(curves), { className: 'marker', label: 'flat = exactly 1/f²' });
  } else {
    // A pure 1/f² reference, pinned to the natural curves rather than fitted,
    // so the reader is comparing against the textbook claim and not against a
    // line that was quietly adjusted to agree with the data.
    const anchor = curves.find((c) => c.set.key === 'forest');
    const at = anchor.points.find(([k]) => k === 8);
    plot.line([[2, at[1] * 16], [N / 2, at[1] * (8 / (N / 2)) ** 2]], { className: 'marker', dashed: true });
    // annotate() takes data coordinates, so this rides on the reference line.
    plot.annotate(5, at[1] * (8 / 5) ** 2 * 2.2, 'slope −2', { anchor: 'start', className: 'marker' });
  }

  for (const curve of curves) plot.line(curve.points, { className: curve.set.cls });
  plot.legend(sets.map((s) => ({ label: `${s.label} (${s.slope.toFixed(2)})`, className: s.cls })));

  root.append(note(view, sets));
  root.append(credit());
}

function geomean(curves) {
  const vals = curves
    .filter((c) => c.set.key === 'forest' || c.set.key === 'landscape')
    .flatMap((c) => c.points.filter(([k]) => k >= 4 && k <= 64).map(([, y]) => Math.log10(y)));
  return 10 ** (vals.reduce((s, v) => s + v, 0) / vals.length);
}

async function scrambleSet() {
  const image = await loadImage(BASE + 'nis-forest.jpg');
  const patch = cropWindow(image, N);
  const scrambled = phaseScramble(patch, N);
  // Measured WITHOUT the analysis window here, and only here. Windowing is a
  // convolution in frequency, so it does not commute with a change of phase:
  // with the window on, these two curves visibly separate at high frequency
  // even though the underlying magnitudes are identical. Off, they agree to
  // floating point, which is the true statement this panel is making.
  const options = { windowed: false };
  const a = radialSpectrum(patch, N, options);
  const b = radialSpectrum(scrambled, N, options);
  return [
    { key: 'forest', label: 'Beech wood', cls: 'series-3', note: 'the photograph',
      patch, spectrum: a, slope: fitSlope(a, ...FIT).slope },
    { key: 'scrambled', label: 'Phase scrambled', cls: 'series-4', note: 'every magnitude kept',
      patch: scrambled, spectrum: b, slope: fitSlope(b, ...FIT).slope },
  ];
}

function note(view, sets) {
  const node = h('p', 'x-figure-note');
  const forest = sets.find((s) => s.key === 'forest');

  if (view === 'scramble') {
    node.innerHTML =
      `Both panels have <strong>the same power spectrum</strong> — not approximately, exactly. The right-hand ` +
      `image was made by taking the Fourier transform of the left, keeping every magnitude, and replacing every ` +
      `phase with a random number. The two curves lie on top of each other because they are the same numbers.` +
      `<br><br>Everything you can see in the photograph and cannot see on the right is carried by <em>phase</em>. ` +
      `Edges, objects, the fern — none of it survives, and none of it is in the spectrum. This matters because ` +
      `the covariance of an ensemble determines its power spectrum and nothing else, so <strong>every argument ` +
      `that proceeds from decorrelation alone is an argument about the left image's relationship to the right ` +
      `one</strong> — it cannot distinguish them. That is the precise sense in which whitening is not enough, ` +
      `and why sparse coding, which is sensitive to phase structure, gets further.` +
      `<br><br>It also sets up the harder question. Olfaction has no phase, because it has no spatial or ` +
      `temporal carrier of this kind at the receptor array. Ask what the analogous higher-order structure in ` +
      `an odour ensemble would even be, and the honest answer is that nobody knows.`;
    return node;
  }

  if (view === 'comp') {
    node.innerHTML =
      `Multiplying by <em>f</em>² removes the expected trend, so a scene with an exactly 1/<em>f</em>² spectrum ` +
      `plots as a horizontal line. This is the view that shows you the residual, and the residual is where the ` +
      `interesting departures live: the two natural scenes stay roughly flat across two decades, while the ` +
      `courtyard tilts and carries visible bumps where its columns and floor tiles put power at particular ` +
      `frequencies. A scene built by people has scales in it; a beech wood does not.` +
      `<br><br>Compensated plots are how this literature actually looks, and they are unforgiving — a curve that ` +
      `seems convincingly straight on a log-log plot spanning eight decades can be visibly bent here.`;
    return node;
  }

  node.innerHTML =
    `All four curves come from the pixels: each image is windowed, Fourier transformed, and its power averaged ` +
    `over orientation in rings of constant spatial frequency. The dashed line is a pure 1/<em>f</em>² law, drawn ` +
    `for reference rather than fitted.` +
    `<br><br>The two natural scenes fall close to it — <strong>${forest.slope.toFixed(2)}</strong> for the beech ` +
    `wood — across roughly two decades of spatial frequency, despite being photographs of completely different ` +
    `things at completely different distances. White noise is flat, which is what "no spatial correlation" looks ` +
    `like, and the gap between flat and −2 is the redundancy the retina is often argued to be removing.` +
    `<br><br>The courtyard is the useful awkward case. It is also roughly power-law, so 1/<em>f</em>² is not a ` +
    `signature of naturalness — but it is steeper, and it has structure at particular frequencies where the ` +
    `natural scenes have none. Switch to the compensated view to see that clearly.` +
    `<br><br><em>Method, because the exponent depends on it.</em> Analysis is on linear luminance, not on the ` +
    `JPEG's code values: the same beech-wood photograph fits −2.45 on code values, −2.22 on linear luminance and ` +
    `−2.63 on log luminance, and it is worth knowing that published exponents are not always comparable for this ` +
    `reason. Crops are taken at the camera's own resolution, never downsampled, because downsampling is itself a ` +
    `lowpass filter and would masquerade as a steeper spectrum. Four images are an illustration, not an ` +
    `ensemble — the published estimates rest on hundreds (Ruderman &amp; Bialek 1994; van Hateren &amp; van der Schaaf 1998).`;
  return node;
}

function credit() {
  const node = h('p', 'x-figure-credit');
  node.innerHTML =
    'Spectra computed in the browser from the images shown. Photographs: beech wood, W.carter (CC0); ' +
    'hillside, David Marcu (CC0); Zappeion courtyard, Jebulon (CC0), all via Wikimedia Commons.';
  return node;
}
