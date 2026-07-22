// (c) What "neighbouring pixels are correlated" actually looks like.
//
// The claim is usually made in one clause and moved past. Here it is measured:
// every point in the scatter is a real pair of pixels a chosen distance apart
// in the photograph, and the correlation coefficient beside it is computed over
// all several hundred thousand such pairs.
//
// Two things are worth the reader's time. At one pixel the cloud is a line —
// the second pixel is very nearly redundant given the first, which is the
// entire premise of predictive coding in the retina, stated as a picture. And
// the r-against-distance curve on the right IS the autocorrelation function,
// so this figure and the Wiener–Khinchin figure earlier in the section are two
// views of one measurement. That connection is asserted in most treatments and
// almost never shown on the same data.

import { loadImage, radialSpectrum, cropWindow } from './spectrum-core.js';

const FILE = 'content/media/nis-forest.jpg';
const OFFSETS = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256];

export const controls = [
  {
    id: 'dxIndex', label: 'Separation between the two pixels',
    min: 0, max: OFFSETS.length - 1, step: 1, value: 0,
    format: (v) => `${OFFSETS[Math.round(v)]} px`,
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

/** Correlation of I(x, y) with I(x + dx, y), over every pair in the image. */
function correlationAt(lin, n, dx) {
  let sx = 0; let sy = 0; let sxx = 0; let syy = 0; let sxy = 0; let count = 0;
  for (let y = 0; y < n; y += 1) {
    const row = y * n;
    for (let x = 0; x + dx < n; x += 1) {
      const a = lin[row + x];
      const b = lin[row + x + dx];
      sx += a; sy += b; sxx += a * a; syy += b * b; sxy += a * b; count += 1;
    }
  }
  const cov = sxy / count - (sx / count) * (sy / count);
  const va = sxx / count - (sx / count) ** 2;
  const vb = syy / count - (sy / count) ** 2;
  return cov / Math.sqrt(va * vb);
}

function samplePairs(lin, n, dx, wanted = 700) {
  // Deterministic sampling, so the cloud does not reshuffle on every redraw and
  // distract from the one thing that is meant to be changing.
  let s = 20240719;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [];
  for (let i = 0; i < wanted; i += 1) {
    const y = Math.floor(rand() * n);
    const x = Math.floor(rand() * (n - dx));
    out.push([lin[y * n + x], lin[y * n + x + dx]]);
  }
  return out;
}

async function render(root, values, api, token) {
  const image = await loadImage(FILE);
  if (root.__nisToken !== token) return;
  if (!cache) {
    cache = {
      curve: OFFSETS.map((dx) => [dx, correlationAt(image.lin, image.n, dx)]),
      spectrum: radialSpectrum(cropWindow(image, 512), 512),
    };
  }

  const dx = OFFSETS[Math.round(values.dxIndex ?? 0)];
  const r = cache.curve.find(([d]) => d === dx)[1];
  const pairs = samplePairs(image.lin, image.n, dx);
  const lim = Math.max(...pairs.flat()) * 1.05;

  root.replaceChildren();

  const row = h('div', 'nis-pair');

  const left = h('div', 'nis-pair-cell');
  const scatter = api.createPlot(left, {
    width: 320, height: 300,
    margin: { top: 18, right: 16, bottom: 46, left: 60 },
    x: { domain: [0, lim], label: 'luminance at x' },
    y: { domain: [0, lim], label: `luminance at x + ${dx}px` },
    title: `Pixel pairs ${dx} apart`,
  });
  scatter.line([[0, 0], [lim, lim]], { className: 'marker', dashed: true });
  scatter.points(pairs, { className: 'series-3', radius: 1.7 });
  scatter.annotate(lim * 0.04, lim * 0.94, `r = ${r.toFixed(3)}`, { anchor: 'start', className: 'head' });
  row.append(left);

  const right = h('div', 'nis-pair-cell');
  const curve = api.createPlot(right, {
    width: 320, height: 300,
    margin: { top: 18, right: 16, bottom: 46, left: 56 },
    x: { domain: [1, 256], scale: 'log', label: 'separation (pixels)' },
    y: { domain: [0, 1], label: 'correlation r' },
    title: 'Correlation against distance',
  });
  curve.line(cache.curve, { className: 'series-1' });
  curve.points([[dx, r]], { className: 'series-3', radius: 5 });
  curve.hline(0, { className: 'marker' });
  row.append(right);
  root.append(row);

  const stats = h('div', 'nis-stats');
  stats.append(
    stat('correlation', r.toFixed(3)),
    stat('variance predictable from the neighbour', `${(r * r * 100).toFixed(1)}%`),
    stat('left over', `${((1 - r * r) * 100).toFixed(1)}%`)
  );
  root.append(stats);

  root.append(noteFor(dx, r, cache.curve[0][1]));
  const credit = h('p', 'x-figure-credit');
  credit.textContent =
    'Correlations computed in the browser over every pixel pair in the image. Photograph: beech wood, W.carter (CC0).';
  root.append(credit);
}

function stat(label, value) {
  const cell = h('div', 'nis-stat');
  cell.append(h('span', 'nis-stat-label', label), h('span', 'nis-stat-value', value));
  return cell;
}

function noteFor(dx, r, rOne) {
  const node = h('p', 'x-figure-note');
  node.innerHTML =
    `At one pixel the cloud is barely a cloud: <strong>r = ${rOne.toFixed(3)}</strong>, so knowing one pixel ` +
    `fixes ${(rOne * rOne * 100).toFixed(0)}% of the variance of the next. A retina transmitting raw pixel ` +
    `values would be spending most of its capacity restating what it had already sent. That redundancy is not a ` +
    `metaphor here — it is the number in the middle of the panel above, measured on this photograph.` +
    `<br><br>Drag the separation out. The cloud opens into a disc and r decays, but slowly and without a ` +
    `characteristic distance: even ${dx >= 64 ? 'at this separation' : 'at sixty-four pixels'} the two ` +
    `luminances are still related. That slow scale-free decay is the same fact as the 1/<em>f</em>² spectrum, ` +
    `because <strong>the correlation-against-distance curve on the right is the autocorrelation function, and ` +
    `its Fourier transform is the power spectrum</strong>. The companion figure just below makes that ` +
    `identity with an idealised exponential; this one makes it with the pixels.` +
    `<br><br>Two cautions. Correlation is a second-order summary and, as the phase-scramble panel shows, second ` +
    `order is not the whole story — an image with exactly this autocorrelation can look like nothing at all. And ` +
    `r is a <em>linear</em> measure: it is entirely possible for two pixels to be strongly dependent and weakly ` +
    `correlated, which is the gap sparse coding exploits.` +
    `<br><br>The olfactory question this poses is uncomfortable. "Neighbouring" is meaningful here because the ` +
    `receptor array has a metric — pixels have distances. Ask which two olfactory receptors are neighbours and ` +
    `there is no answer that does not smuggle in an assumption, which is why §11 argues that every motif built ` +
    `on a metric has to be re-derived rather than transferred.`;
  return node;
}
