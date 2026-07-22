// (b) Blur one photograph, and watch what it does to the spectrum.
//
// The point is not that blur is a lowpass — that is definitional. It is that
// the reader can see *where* the cut falls and how sharply, on a real image,
// against the unblurred spectrum held on the same axes as a reference. Two
// things become obvious that are hard to convey in prose: the low frequencies
// are untouched no matter how hard you blur, and the high-frequency loss is
// enormous — several orders of magnitude — for a blur that still leaves the
// picture perfectly recognisable.
//
// That asymmetry is the argument for why an eye can afford poor optics at high
// spatial frequency, and it is the setup for §1.5, where the retina's answer to
// low SNR is to lowpass on purpose rather than to whiten.

import { loadImage, cropWindow, radialSpectrum, gaussianBlur, patchCanvas } from './spectrum-core.js';

const FILE = 'content/media/nis-forest.jpg';
const N = 256;   // native-resolution window; blur and transform both run per redraw

export const controls = [
  {
    id: 'sigma', label: 'Blur radius σ (pixels)',
    min: 0, max: 8, step: 0.25, value: 1.5,
    format: (v) => (v === 0 ? 'none' : `${v.toFixed(2)} px`),
  },
];

const h = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

export function draw(root, values, api) {
  const token = {};
  root.__nisToken = token;
  root.appendChild(h('p', 'nis-loading', 'Loading photograph…'));
  render(root, values, api, token).catch((error) => {
    root.replaceChildren();
    root.appendChild(h('div', 'x-figure-error', error.message));
  });
}

let sharpCache = null;

async function render(root, values, api, token) {
  const sigma = values.sigma ?? 0;
  const image = await loadImage(FILE);
  if (root.__nisToken !== token) return;

  const patch = cropWindow(image, N);
  if (!sharpCache) sharpCache = radialSpectrum(patch, N);
  const blurred = gaussianBlur(patch, N, sigma);
  const spectrum = sigma > 0 ? radialSpectrum(blurred, N) : sharpCache;

  root.replaceChildren();

  const strip = h('div', 'nis-strip');
  for (const [label, data, tag] of [
    ['Original', patch, 'σ = 0'],
    ['Blurred', blurred, sigma === 0 ? 'σ = 0 — move the slider' : `σ = ${sigma.toFixed(2)} px`],
  ]) {
    const cell = h('figure', 'nis-cell');
    cell.append(patchCanvas(data, N, 168));
    const cap = h('figcaption', 'nis-cell-cap');
    cap.append(h('span', 'nis-key', label), h('span', 'nis-cell-note', tag));
    cell.append(cap);
    strip.append(cell);
  }
  root.append(strip);

  // The vertical range is fixed from the unblurred spectrum, which never
  // changes, rather than from the data on screen. An axis that rescaled as the
  // slider moved would hide the very thing the slider is for: the curve would
  // appear to stay put while the numbers beneath it changed.
  const top = 10 ** Math.ceil(Math.log10(Math.max(...sharpCache.power) * sharpCache.variance));
  const plot = api.createPlot(root, {
    width: 660, height: 300,
    margin: { top: 18, right: 22, bottom: 48, left: 70 },
    x: { domain: [1, N / 2], scale: 'log', label: 'spatial frequency (cycles per image width)' },
    y: { domain: [top * 1e-10, top], scale: 'log', label: 'power' },
    title: 'What the blur removes',
  });

  // Absolute power, not the variance-normalised shape, so that "the low
  // frequencies are untouched" is shown as the two curves actually coinciding.
  const absolute = (sp) => sp.k.map((k, i) => [k, sp.power[i] * sp.variance]);
  plot.line(absolute(sharpCache), { className: 'series-3', dashed: true });
  plot.line(absolute(spectrum), { className: 'series-2' });

  // Half-power point of a Gaussian of width σ, in cycles per window. Marked
  // rather than fitted: it is where the analytic transfer function predicts the
  // cut, so the reader can check the measured curve against theory.
  if (sigma > 0) {
    const cut = (N * Math.sqrt(Math.log(2))) / (2 * Math.PI * sigma);
    if (cut > 1.5 && cut < N / 2) plot.vline(cut, { className: 'marker', label: 'half power' });
  }
  plot.legend([
    { label: 'original', className: 'series-3', dashed: true },
    { label: 'blurred', className: 'series-2' },
  ]);

  const retained = stats(sharpCache, spectrum, sigma);
  root.append(retained.node);
  root.append(noteFor(sigma, retained.ratios));
  const credit = h('p', 'x-figure-credit');
  credit.textContent =
    'Blur and spectrum computed in the browser. Photograph: beech wood, W.carter (CC0), via Wikimedia Commons.';
  root.append(credit);
}

/** Power retained at three frequencies, which is the quantitative payload. */
function stats(sharp, blurred, sigma) {
  const row = h('div', 'nis-stats');
  const ratios = {};
  for (const k of [8, 32, 96]) {
    const i = sharp.k.indexOf(k);
    const ratio = i < 0 ? 1
      : (blurred.power[i] * blurred.variance) / (sharp.power[i] * sharp.variance);
    ratios[k] = ratio;
    const cell = h('div', 'nis-stat');
    cell.append(
      h('span', 'nis-stat-label', `${k} cycles`),
      h('span', 'nis-stat-value', sigma === 0 ? '100%' : fraction(ratio))
    );
    row.append(cell);
  }
  return { node: row, ratios };
}

function fraction(ratio) {
  if (ratio >= 0.01) return `${(ratio * 100).toFixed(ratio >= 0.1 ? 0 : 1)}%`;
  const exp = Math.floor(Math.log10(ratio));
  return `10${superscript(exp)}`;
}
const superscript = (n) =>
  String(n).replace('-', '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);

function noteFor(sigma, ratios) {
  const node = h('p', 'x-figure-note');
  const fine = ratios[96];
  const coarse = ratios[8];
  const live = sigma > 0
    ? `At the σ you have set, <strong>${(coarse * 100).toFixed(0)}%</strong> of the power at 8 cycles survives ` +
      `and <strong>${fraction(fine)}</strong> of it at 96 — and the picture is still obviously a fern.`
    : `Move the slider and watch the three numbers above diverge: the coarse one barely moves, the fine one falls ` +
      `off a cliff.`;
  node.innerHTML =
    `The blurred curve leaves the original and never comes back. Below about ten cycles per image width the two ` +
    `are indistinguishable — <strong>blur does not touch the coarse structure at all</strong> — and above the ` +
    `marked half-power point the loss runs into orders of magnitude.` +
    `<br><br>${live} That is the sense in which most of what an optical ` +
    `system throws away is information the viewer was not using. It is also why the eye can get away with ` +
    `aberrations that would be unacceptable in a camera lens — the retina is not attempting to recover those ` +
    `frequencies either.` +
    `<br><br>Read this against §1.5. Atick and Redlich's result is that the optimal early filter <em>whitens</em> ` +
    `when the signal is strong and <em>lowpasses</em> when it is weak, because at low SNR the high-frequency ` +
    `content is mostly noise and amplifying it is worse than discarding it. The slider is doing by hand what a ` +
    `retina in dim light does deliberately: it is the same operation, chosen rather than suffered.` +
    `<br><br><em>Method.</em> The blur is a separable Gaussian applied to linear luminance, because a lens sums ` +
    `light rather than display code values. The marked frequency is the analytic half-power point of that ` +
    `Gaussian, not a fit — the measured curve is free to disagree with it, and does at large σ, where the ` +
    `remaining power is at the level of the JPEG's own quantisation floor rather than the image's.`;
  return node;
}
