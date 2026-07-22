// Shared image analysis for the §1.2 natural-statistics figures.
//
// Four figures in this section make claims about real photographs — that the
// power spectrum falls as 1/f², that blur is a lowpass, that neighbouring
// pixels are correlated, that the spectrum is scale-invariant. All four
// *measure* those things in the browser from the shipped images rather than
// drawing an idealised curve, so the reader is looking at data. This module is
// the machinery they share.
//
// THREE DECISIONS THAT CHANGE THE ANSWER, so they are made here once and
// documented rather than buried in each figure.
//
// 1. Analysis runs on LINEAR luminance, not on the JPEG's code values. A JPEG
//    is sRGB-encoded — roughly a 1/2.2 power of luminance — and the exponent
//    genuinely depends on which you use: the beech-wood photograph fits -2.45
//    on code values, -2.22 on linear luminance and -2.63 on log luminance.
//    Linear is what "the power spectrum of the light arriving at the eye"
//    means, so that is what these figures report.
//
// 2. A Hann window is applied before every transform. Without it the FFT sees
//    the image as periodic, the discontinuity where the right edge meets the
//    left is a step edge, and its spectrum is a bright cross along the axes
//    that contaminates every radial bin. Windowing costs a little resolution
//    at the lowest frequencies and buys a spectrum that is about the image
//    rather than about its borders.
//
// 3. Images are cropped at NATIVE resolution wherever possible, never
//    downsampled to fit. Downsampling is itself a lowpass filter: the same
//    photograph reduced to 1024px and then cropped drifts from -2.13 to -2.50
//    as the crop shrinks, purely from the resampling, while native crops of
//    the same scene hold -2.43 to -2.48 over a 16x range of window sizes. That
//    drift would have been read as a failure of scale invariance.

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

const cache = new Map();

/** Undo the sRGB transfer function: code value 0..255 to linear 0..1. */
function srgbToLinear(v) {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}
const LINEAR = Float64Array.from({ length: 256 }, (_, i) => srgbToLinear(i));

/** Re-encode linear luminance for display. */
export function linearToSrgb(y) {
  const c = y <= 0.0031308 ? 12.92 * y : 1.055 * y ** (1 / 2.4) - 0.055;
  return Math.max(0, Math.min(255, Math.round(c * 255)));
}

/**
 * Load a square greyscale image as linear luminance. Cached by URL, and the
 * cache holds the promise rather than the result so that four figures mounting
 * at once share one decode instead of racing.
 */
export function loadImage(url) {
  if (cache.has(url)) return cache.get(url);
  const pending = (async () => {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    await img.decode();
    const n = img.naturalWidth;
    const canvas = document.createElement('canvas');
    canvas.width = n;
    canvas.height = n;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const rgba = ctx.getImageData(0, 0, n, n).data;
    const lin = new Float64Array(n * n);
    const code = new Uint8Array(n * n);
    for (let i = 0; i < n * n; i += 1) {
      // The files are greyscale, so any channel is the luminance; averaging
      // the three would only add rounding noise.
      code[i] = rgba[i * 4];
      lin[i] = LINEAR[rgba[i * 4]];
    }
    return { n, lin, code };
  })();
  cache.set(url, pending);
  return pending;
}

/** A square window of linear luminance, in native pixels. */
export function cropWindow(image, size, cx = image.n / 2, cy = image.n / 2) {
  const x0 = Math.max(0, Math.min(image.n - size, Math.round(cx - size / 2)));
  const y0 = Math.max(0, Math.min(image.n - size, Math.round(cy - size / 2)));
  const out = new Float64Array(size * size);
  for (let y = 0; y < size; y += 1) {
    const src = (y0 + y) * image.n + x0;
    out.set(image.lin.subarray(src, src + size), y * size);
  }
  return out;
}

// ---------------------------------------------------------------------------
// FFT
// ---------------------------------------------------------------------------

const twiddles = new Map();
function twiddleTable(n) {
  let t = twiddles.get(n);
  if (t) return t;
  const half = n >> 1;
  const cos = new Float64Array(half);
  const sin = new Float64Array(half);
  for (let j = 0; j < half; j += 1) {
    // Tabulated rather than accumulated by repeated complex multiplication,
    // which drifts by enough at n = 1024 to tilt a log-log slope.
    cos[j] = Math.cos((-2 * Math.PI * j) / n);
    sin[j] = Math.sin((-2 * Math.PI * j) / n);
  }
  t = { cos, sin };
  twiddles.set(n, t);
  return t;
}

/** In-place iterative radix-2 FFT. Length must be a power of two. */
function fft(re, im) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i += 1) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }
  const { cos, sin } = twiddleTable(n);
  for (let len = 2; len <= n; len <<= 1) {
    const half = len >> 1;
    const stride = n / len;
    for (let i = 0; i < n; i += len) {
      for (let k = 0; k < half; k += 1) {
        const wr = cos[k * stride];
        const wi = sin[k * stride];
        const a = i + k;
        const b = a + half;
        const vr = re[b] * wr - im[b] * wi;
        const vi = re[b] * wi + im[b] * wr;
        re[b] = re[a] - vr;
        im[b] = im[a] - vi;
        re[a] += vr;
        im[a] += vi;
      }
    }
  }
}

const hannCache = new Map();
function hann(n) {
  let w = hannCache.get(n);
  if (w) return w;
  w = new Float64Array(n);
  for (let i = 0; i < n; i += 1) w[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (n - 1));
  hannCache.set(n, w);
  return w;
}

/**
 * Radially averaged power spectrum of a square patch.
 *
 * Returns frequency in cycles per window width, so that spectra of differently
 * sized windows can be laid on the same axes — which is exactly the comparison
 * the scale-invariance figure needs to make.
 *
 * Power is divided by the patch variance, so curves from images of different
 * contrast are comparable in shape without one sitting three decades above
 * another for reasons that have nothing to do with their statistics.
 */
export function radialSpectrum(patch, n, { windowed = true } = {}) {
  let mean = 0;
  for (let i = 0; i < patch.length; i += 1) mean += patch[i];
  mean /= patch.length;

  let variance = 0;
  for (let i = 0; i < patch.length; i += 1) variance += (patch[i] - mean) ** 2;
  variance = variance / patch.length || 1e-30;

  // Windowing is a multiplication in space and therefore a convolution in
  // frequency, so it does not commute with anything that changes phase. The
  // phase-scramble comparison needs both sides measured the same way and turns
  // it off; everything else wants it on.
  const w = windowed ? hann(n) : null;
  const re = new Float64Array(n * n);
  const im = new Float64Array(n * n);
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      const v = patch[y * n + x] - mean;
      re[y * n + x] = w ? v * w[y] * w[x] : v;
    }
  }

  const rowRe = new Float64Array(n);
  const rowIm = new Float64Array(n);
  for (let y = 0; y < n; y += 1) {
    rowRe.set(re.subarray(y * n, y * n + n));
    rowIm.set(im.subarray(y * n, y * n + n));
    fft(rowRe, rowIm);
    re.set(rowRe, y * n);
    im.set(rowIm, y * n);
  }
  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < n; y += 1) {
      rowRe[y] = re[y * n + x];
      rowIm[y] = im[y * n + x];
    }
    fft(rowRe, rowIm);
    for (let y = 0; y < n; y += 1) {
      re[y * n + x] = rowRe[y];
      im[y * n + x] = rowIm[y];
    }
  }

  const bins = n >> 1;
  const sum = new Float64Array(bins);
  const count = new Float64Array(bins);
  for (let y = 0; y < n; y += 1) {
    const fy = y > n / 2 ? y - n : y;
    for (let x = 0; x < n; x += 1) {
      const fx = x > n / 2 ? x - n : x;
      const r = Math.round(Math.hypot(fx, fy));
      if (r < 1 || r >= bins) continue;
      sum[r] += re[y * n + x] ** 2 + im[y * n + x] ** 2;
      count[r] += 1;
    }
  }

  const k = [];
  const power = [];
  for (let r = 1; r < bins; r += 1) {
    if (!count[r]) continue;
    k.push(r);
    power.push(sum[r] / count[r] / (variance * patch.length));
  }
  // `variance` is returned so a caller that needs ABSOLUTE power can undo the
  // normalisation. The blur figure must: dividing by the variance of the patch
  // being measured makes a blurred image's low frequencies appear to gain
  // power, because blurring lowers the variance in the denominator. Reporting
  // "108% retained" for an operation that only ever removes energy is worse
  // than useless.
  return { k, power, variance };
}

/** Least-squares slope of log10(power) on log10(k), over a frequency band. */
export function fitSlope({ k, power }, lo, hi) {
  const xs = [];
  const ys = [];
  for (let i = 0; i < k.length; i += 1) {
    if (k[i] < lo || k[i] > hi || !(power[i] > 0)) continue;
    xs.push(Math.log10(k[i]));
    ys.push(Math.log10(power[i]));
  }
  if (xs.length < 3) return null;
  const n = xs.length;
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let sxy = 0;
  let sxx = 0;
  for (let i = 0; i < n; i += 1) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
  }
  if (!sxx) return null;
  const slope = sxy / sxx;
  return { slope, intercept: my - slope * mx };
}

// ---------------------------------------------------------------------------
// Operations on patches
// ---------------------------------------------------------------------------

/**
 * Separable Gaussian blur, applied in LINEAR luminance because that is where
 * optical blur happens — a lens sums light, not display code values. Blurring
 * the encoded values instead would darken edges in a way no optics does.
 * Edges are handled by clamping, which is what a larger sensor would see.
 */
export function gaussianBlur(patch, n, sigma) {
  if (sigma <= 0) return patch;
  const radius = Math.max(1, Math.ceil(sigma * 3));
  const kernel = new Float64Array(2 * radius + 1);
  let total = 0;
  for (let i = -radius; i <= radius; i += 1) {
    const v = Math.exp(-(i * i) / (2 * sigma * sigma));
    kernel[i + radius] = v;
    total += v;
  }
  for (let i = 0; i < kernel.length; i += 1) kernel[i] /= total;

  const tmp = new Float64Array(n * n);
  const out = new Float64Array(n * n);
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      let acc = 0;
      for (let i = -radius; i <= radius; i += 1) {
        const xx = Math.min(n - 1, Math.max(0, x + i));
        acc += patch[y * n + xx] * kernel[i + radius];
      }
      tmp[y * n + x] = acc;
    }
  }
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      let acc = 0;
      for (let i = -radius; i <= radius; i += 1) {
        const yy = Math.min(n - 1, Math.max(0, y + i));
        acc += tmp[yy * n + x] * kernel[i + radius];
      }
      out[y * n + x] = acc;
    }
  }
  return out;
}

/** White noise with the same mean and variance as a reference patch. */
export function whiteNoise(n, seed = 7) {
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = new Float64Array(n * n);
  for (let i = 0; i < out.length; i += 1) {
    // Box-Muller, so the histogram is Gaussian rather than uniform.
    const u = Math.max(1e-12, rand());
    out[i] = 0.25 + 0.08 * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand());
  }
  return out;
}

/**
 * Randomise the phase of a patch while keeping every Fourier magnitude.
 *
 * This is the control that matters most in this section. The result has an
 * identical power spectrum to the original — the same second-order statistics,
 * to numerical precision — and looks like nothing at all. Anything you can see
 * in the photograph that you cannot see here is carried by phase, which the
 * covariance and therefore the whole efficient-coding-as-decorrelation story
 * never touches.
 */
export function phaseScramble(patch, n, seed = 11) {
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  let mean = 0;
  for (let i = 0; i < patch.length; i += 1) mean += patch[i];
  mean /= patch.length;

  const re = new Float64Array(n * n);
  const im = new Float64Array(n * n);
  for (let i = 0; i < patch.length; i += 1) re[i] = patch[i] - mean;

  const rowRe = new Float64Array(n);
  const rowIm = new Float64Array(n);
  const rows = () => {
    for (let y = 0; y < n; y += 1) {
      rowRe.set(re.subarray(y * n, y * n + n));
      rowIm.set(im.subarray(y * n, y * n + n));
      fft(rowRe, rowIm);
      re.set(rowRe, y * n);
      im.set(rowIm, y * n);
    }
  };
  const cols = () => {
    for (let x = 0; x < n; x += 1) {
      for (let y = 0; y < n; y += 1) {
        rowRe[y] = re[y * n + x];
        rowIm[y] = im[y * n + x];
      }
      fft(rowRe, rowIm);
      for (let y = 0; y < n; y += 1) {
        re[y * n + x] = rowRe[y];
        im[y * n + x] = rowIm[y];
      }
    }
  };
  rows();
  cols();

  // Random phases with Hermitian symmetry, so the inverse transform is real.
  const phase = new Float64Array(n * n);
  const idx = (y, x) => ((y % n) + n) % n * n + (((x % n) + n) % n);
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      const i = y * n + x;
      const j = idx(-y, -x);
      if (phase[j] !== 0 || j === i) continue;
      const p = rand() * 2 * Math.PI;
      phase[i] = p;
      phase[j] = -p;
    }
  }
  for (let i = 0; i < n * n; i += 1) {
    const mag = Math.hypot(re[i], im[i]);
    re[i] = mag * Math.cos(phase[i]);
    im[i] = mag * Math.sin(phase[i]);
  }

  // Inverse by conjugation, which avoids a second FFT implementation.
  for (let i = 0; i < n * n; i += 1) im[i] = -im[i];
  rows();
  cols();
  const out = new Float64Array(n * n);
  for (let i = 0; i < n * n; i += 1) out[i] = re[i] / (n * n) + mean;
  return out;
}

// ---------------------------------------------------------------------------
// Display
// ---------------------------------------------------------------------------

/**
 * Draw a linear-luminance patch onto a canvas at a given display size, with
 * nearest-neighbour scaling so that zooming shows real pixels rather than the
 * browser's interpolation of them.
 */
export function patchCanvas(patch, n, displaySize, className = 'nis-image') {
  const dpr = Math.min(2, globalThis.devicePixelRatio || 1);
  const px = Math.round(displaySize * dpr);
  const src = document.createElement('canvas');
  src.width = n;
  src.height = n;
  const sctx = src.getContext('2d');
  const image = sctx.createImageData(n, n);
  for (let i = 0; i < n * n; i += 1) {
    const v = linearToSrgb(patch[i]);
    image.data[i * 4] = v;
    image.data[i * 4 + 1] = v;
    image.data[i * 4 + 2] = v;
    image.data[i * 4 + 3] = 255;
  }
  sctx.putImageData(image, 0, 0);

  const out = document.createElement('canvas');
  out.width = px;
  out.height = px;
  out.className = className;
  // The backing store is devicePixelRatio times the layout size, so the CSS
  // size has to be stated or the element lays out at the buffer's width and
  // every image comes out twice as large as intended on a retina display.
  out.style.width = `${displaySize}px`;
  out.style.height = `${displaySize}px`;
  const ctx = out.getContext('2d');
  ctx.imageSmoothingEnabled = n > displaySize;
  ctx.drawImage(src, 0, 0, px, px);
  return out;
}
