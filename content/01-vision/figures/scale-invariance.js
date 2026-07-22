// (d) Zoom in, and the statistics do not change.
//
// Scale invariance is the least intuitive of the natural-image claims and the
// one most often stated without evidence. The test is direct: take windows of
// 1024, 512, 256 and 128 pixels from the same photograph, plot each spectrum
// against cycles *per window* rather than per pixel, and see whether they land
// on each other. If the scene had a characteristic size — a texture with a
// grain, a wall of bricks — the curves would separate, because that size would
// sit at a different position in each window's frequency axis.
//
// Three of the four land on each other: the exponent holds between -2.25 and
// -2.47 over a fourfold change of scale, a tighter spread than between two
// photographs of different scenes. The fourth, the 128px window, steepens to
// -2.72, and that departure is worth as much as the agreement — at that window
// size the top of the fit band is about four pixels per cycle, where the lens
// and the JPEG are what is being measured rather than the wood. The figure says
// so rather than quietly dropping the point.
//
// GETTING THIS RIGHT REQUIRED ONE NON-OBVIOUS THING. An earlier version cropped
// from a downsampled copy of the photograph and appeared to refute scale
// invariance: the exponent drifted from -2.13 to -2.50 as the window shrank.
// The drift was the resampling filter, not the world — downsampling is a
// lowpass, so the smallest windows were measuring the resampler. Cropping at
// the camera's native resolution removes it. A figure that had shipped with the
// first version would have taught the opposite of the truth, confidently.

import { loadImage, cropWindow, radialSpectrum, fitSlope, patchCanvas } from './spectrum-core.js';

const FILE = 'content/media/nis-forest.jpg';
const WINDOWS = [1024, 512, 256, 128];
const FIT = [4, 32];      // one band for every window, so the fits are comparable
const CLS = ['series-1', 'series-2', 'series-3', 'series-4'];

export const controls = [
  {
    id: 'level', label: 'Zoom',
    min: 0, max: WINDOWS.length - 1, step: 1, value: 0,
    format: (v) => `${WINDOWS[Math.round(v)]} px window`,
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

let cache = null;

async function render(root, values, api, token) {
  const image = await loadImage(FILE);
  if (root.__nisToken !== token) return;

  // All four are computed once. The 1024 transform is the expensive one and
  // recomputing it on every drag of the slider would make the zoom feel broken.
  if (!cache) {
    cache = WINDOWS.map((n, i) => {
      const patch = cropWindow(image, n);
      const spectrum = radialSpectrum(patch, n);
      return { n, patch, spectrum, cls: CLS[i], slope: fitSlope(spectrum, ...FIT).slope };
    });
  }

  const level = Math.round(values.level ?? 0);
  const current = cache[level];
  root.replaceChildren();

  const row = h('div', 'nis-pair');

  const left = h('div', 'nis-pair-cell');
  left.append(h('p', 'nis-panel-title', `${current.n} × ${current.n} pixels`));
  left.append(patchCanvas(current.patch, current.n, 250));
  left.append(h('p', 'io-hint',
    level === 0
      ? 'The whole frame. Zoom in and the window shrinks; the display size does not.'
      : `A ${(WINDOWS[0] / current.n).toFixed(0)}× closer view of the middle of the same photograph.`));
  row.append(left);

  const right = h('div', 'nis-pair-cell');
  // Each curve is divided by its own power at the reference frequency, so all
  // four pass through 1 there. Without this they come out parallel but stacked
  // a decade apart, which is not a failure of scale invariance — a larger
  // window simply contains more low-frequency variance, so it sits higher. The
  // claim being tested is about the SHAPE of the spectrum, and normalising at
  // one frequency is what makes the plot ask that question and no other.
  const REF = 4;
  const shown = cache.map((entry) => {
    const at = entry.spectrum.power[entry.spectrum.k.indexOf(REF)];
    return entry.spectrum.k.filter((k) => k <= 64).map((k, i) => [k, entry.spectrum.power[i] / at]);
  });
  const ys = shown.flat().map(([, y]) => y).filter((v) => v > 0);
  const yMax = 10 ** Math.ceil(Math.log10(Math.max(...ys)));
  const yMin = 10 ** Math.floor(Math.log10(Math.min(...ys)));

  const plot = api.createPlot(right, {
    width: 360, height: 300,
    margin: { top: 18, right: 18, bottom: 48, left: 62 },
    x: { domain: [1, 64], scale: 'log', label: 'cycles per window' },
    y: { domain: [yMin, yMax], scale: 'log', label: 'power, relative to 4 cycles' },
    title: 'Every zoom level, matched at 4 cycles',
  });
  // Every window keeps its own colour. Drawing the inactive ones in grey hid
  // the whole result: when the curves genuinely coincide, a grey line under a
  // thick coloured one is invisible, and the reader is left taking the overlap
  // on trust — which is the one thing this figure exists to avoid.
  for (const [i, entry] of cache.entries()) {
    plot.line(shown[i], { className: entry.cls, width: entry === current ? 2.6 : 1.2 });
  }
  plot.legend(cache.map((e) => ({ label: `${e.n} px`, className: e.cls })));
  row.append(right);
  root.append(row);

  const stats = h('div', 'nis-stats');
  for (const entry of cache) {
    const cell = h('div', entry === current ? 'nis-stat is-current' : 'nis-stat');
    cell.append(
      h('span', 'nis-stat-label', `${entry.n} px`),
      h('span', 'nis-stat-value', entry.slope.toFixed(2))
    );
    stats.append(cell);
  }
  root.append(stats);

  root.append(noteFor(cache));

  const credit = h('p', 'x-figure-credit');
  credit.textContent =
    'Windows cropped at native resolution and transformed in the browser. Photograph: beech wood, W.carter (CC0).';
  root.append(credit);
}

function noteFor(cache) {
  const wide = cache.filter((e) => e.n >= 256).map((e) => e.slope);
  const spread = Math.max(...wide) - Math.min(...wide);
  const small = cache[cache.length - 1];

  const node = h('p', 'x-figure-note');
  node.innerHTML =
    `Four windows spanning an eightfold range of scale, plotted against cycles <em>per window</em> so that they ` +
    `are directly comparable and each scaled to agree at four cycles, since the question is whether they have the ` +
    `same <em>shape</em>. The largest three lie almost on top of one another, with fitted exponents spanning ` +
    `<strong>${spread.toFixed(2)}</strong> — a tighter range than separates two photographs of different scenes.` +
    `<br><br>This is what scale invariance means operationally: <strong>the photograph carries almost no ` +
    `information about how far away you are standing.</strong> Shown a patch with the scale bar removed, you ` +
    `could not easily say which zoom level it came from, because the statistics barely change between them. A ` +
    `scene with a characteristic size would betray itself immediately — the bump would sit at a different place ` +
    `on each curve and the four would fan apart. The courtyard in the first figure does exactly that.` +
    `<br><br><strong>The ${small.n} px window is the exception, and it is measuring the camera rather than the ` +
    `wood.</strong> It steepens to ${small.slope.toFixed(2)}. At that window size the top of the fit band is ` +
    `about four pixels per cycle, which is where the lens's own blur and the JPEG's quantisation take over — the ` +
    `same lowpass the blur figure above makes explicit, arriving uninvited. Every optical measurement has such a ` +
    `limit, and mistaking it for a property of the world is the standard way this analysis goes wrong. An earlier ` +
    `draft of this figure did exactly that at every scale, by cropping from a downsampled copy.` +
    `<br><br>The consequence for coding is the one worth carrying forward. If the statistics are the same at ` +
    `every scale, then the <em>same</em> filter shape works at every scale, and a visual system can tile its ` +
    `receptive fields as a self-similar pyramid — a small number of shapes repeated at many sizes — rather than ` +
    `learning a separate solution per scale. Multiscale organisation in early vision is not merely convenient; ` +
    `it is what the statistics of the world recommend.` +
    `<br><br><em>Limits.</em> The invariance is empirical and approximate, one photograph is an illustration ` +
    `rather than an ensemble, and it holds over a far narrower range than the idealised "scale-free" language ` +
    `suggests — a few decades, not infinitely many.`;
  return node;
}
