// Cone spectral sensitivities, and the code they produce.
//
// Textbooks show the three absorption curves and stop. The curves alone do
// not explain anything — the interesting facts are that L and M overlap so
// heavily that their responses are ~0.95 correlated, and that decorrelating
// that pair is what produces the opponent axes.
//
// So this figure has two panels: the biology, and the consequence. The slider
// separating the L and M peaks lets the reader break the real arrangement and
// watch the correlation fall — which is the fastest way to see that the
// overlap is a design decision rather than an accident of pigment chemistry.
//
// Sensitivities computed from the Govardovskii et al. (2000) A1 visual-pigment
// template, which is the standard analytic form; peak wavelengths are the
// conventional human values.

export const controls = [
  {
    id: 'lPeak',
    label: 'L cone peak (nm)',
    min: 500, max: 620, step: 1, value: 564,
    format: (v) => `${Math.round(v)}`,
  },
  {
    id: 'view',
    label: 'Show',
    type: 'select',
    value: 'spectra',
    options: [
      { value: 'spectra', label: 'Spectral sensitivities' },
      { value: 'consequence', label: 'What the overlap costs and buys' },
    ],
  },
];

const M_PEAK = 534;
const S_PEAK = 420;
const ROD_PEAK = 498;

// Govardovskii A1 template for the alpha band.
function pigment(lambda, lambdaMax) {
  const x = lambdaMax / lambda;
  const a = 0.8795 + 0.0459 * Math.exp(-Math.pow(lambdaMax - 300, 2) / 11940);
  const A = 69.7, B = 28, b = 0.922, C = -14.9, c = 1.104, D = 0.674;
  const alpha = 1 / (
    Math.exp(A * (a - x)) + Math.exp(B * (b - x)) + Math.exp(C * (c - x)) + D
  );
  // Beta band — the secondary short-wavelength lobe of real pigments.
  const lambdaMb = 189 + 0.315 * lambdaMax;
  const bBand = -40.5 + 0.195 * lambdaMax;
  const beta = 0.26 * Math.exp(-Math.pow((lambda - lambdaMb) / bBand, 2));
  return Math.max(0, alpha + beta);
}

// Natural reflectance spectra are smooth and low-dimensional. A few smooth
// basis functions plus illuminant variation reproduces the statistics that
// matter for the correlation calculation.
function sampleNaturalSpectra(n = 400) {
  const out = [];
  for (let i = 0; i < n; i += 1) {
    // Deterministic pseudo-random so the figure is stable across redraws.
    const s = (k) => {
      const v = Math.sin((i + 1) * 12.9898 + k * 78.233) * 43758.5453;
      return v - Math.floor(v);
    };
    const w = [s(1) - 0.5, s(2) - 0.5, s(3) - 0.5];
    out.push((lambda) => {
      const t = (lambda - 400) / 300;
      return Math.max(0.02,
        0.5 + w[0] * 0.55 * t + w[1] * 0.4 * Math.cos(Math.PI * t) + w[2] * 0.25 * Math.cos(2 * Math.PI * t));
    });
  }
  return out;
}

function coneResponses(lPeak) {
  const spectra = sampleNaturalSpectra();
  const L = [], M = [], S = [];
  for (const refl of spectra) {
    let l = 0, m = 0, sv = 0;
    for (let lambda = 390; lambda <= 700; lambda += 5) {
      const r = refl(lambda);
      l += r * pigment(lambda, lPeak);
      m += r * pigment(lambda, M_PEAK);
      sv += r * pigment(lambda, S_PEAK);
    }
    L.push(l); M.push(m); S.push(sv);
  }
  return { L, M, S };
}

function correlation(a, b) {
  const n = a.length;
  const ma = a.reduce((x, y) => x + y, 0) / n;
  const mb = b.reduce((x, y) => x + y, 0) / n;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < n; i += 1) {
    const x = a[i] - ma, y = b[i] - mb;
    num += x * y; da += x * x; db += y * y;
  }
  return num / Math.sqrt(da * db);
}

export function draw(root, values, { createPlot, sample }) {
  const lPeak = values.lPeak;
  if ((values.view ?? 'spectra') === 'consequence') {
    return drawConsequence(root, lPeak, createPlot, sample);
  }

  const plot = createPlot(root, {
    width: 660, height: 320,
    margin: { top: 20, right: 24, bottom: 50, left: 62 },
    x: { domain: [390, 700], label: 'wavelength (nm)', ticks: [400, 450, 500, 550, 600, 650, 700] },
    y: { domain: [0, 1.08], label: 'normalised sensitivity' },
    title: 'Cone and rod spectral sensitivities',
  });

  const curve = (peak) => {
    const pts = sample(390, 700, 250, (l) => pigment(l, peak));
    const max = Math.max(...pts.map(([, v]) => v));
    return pts.map(([l, v]) => [l, v / max]);
  };

  plot.line(curve(ROD_PEAK), { className: 'series-5', dashed: true, width: 1.3 });
  plot.line(curve(S_PEAK), { className: 'series-4' });
  plot.line(curve(M_PEAK), { className: 'series-3' });
  plot.line(curve(lPeak), { className: 'series-2' });

  // Shade the L/M overlap — the region where the two are nearly redundant.
  const overlap = sample(390, 700, 200, (l) =>
    Math.min(pigment(l, M_PEAK) / pigment(M_PEAK, M_PEAK),
             pigment(l, lPeak) / pigment(lPeak, lPeak)));
  plot.area(overlap, { className: 'series-2', baseline: 0 });

  plot.vline(M_PEAK, { className: 'marker', label: `M ${M_PEAK}` });
  plot.vline(lPeak, { className: 'marker', label: `L ${Math.round(lPeak)}` });

  plot.legend([
    { label: `L cone (${Math.round(lPeak)} nm)`, className: 'series-2' },
    { label: `M cone (${M_PEAK} nm)`, className: 'series-3' },
    { label: `S cone (${S_PEAK} nm)`, className: 'series-4' },
    { label: `rod (${ROD_PEAK} nm)`, className: 'series-5', dashed: true },
  ]);

  const sep = Math.abs(lPeak - M_PEAK);
  const { L, M } = coneResponses(lPeak);
  const r = correlation(L, M);

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `<strong>Look at how much L and M overlap.</strong> Their peaks are only ` +
    `<strong>${sep.toFixed(0)} nm</strong> apart at the real human values, and the shaded region is the ` +
    `sensitivity they share. Responses to natural surfaces are correlated at ` +
    `<strong>r = ${r.toFixed(3)}</strong>. ` +
    `Two channels that agree that closely are almost redundant — which is the problem the opponent ` +
    `transform exists to solve. Drag the L peak apart and watch the correlation fall; then ask why ` +
    `evolution did not simply do that. (Switch to the second view.)`;
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Sensitivities computed from the Govardovskii et al. (2000) A1 visual-pigment template; ' +
    'peak wavelengths are conventional human values.';
  root.appendChild(credit);
}

function drawConsequence(root, lPeak, createPlot, sample) {
  const { L, M, S } = coneResponses(lPeak);
  const rLM = correlation(L, M);

  // Panel 1: the L/M scatter — visually, a nearly one-dimensional cloud.
  const scatter = createPlot(root, {
    width: 660, height: 260,
    margin: { top: 20, right: 24, bottom: 46, left: 62 },
    x: { domain: [Math.min(...L) * 0.95, Math.max(...L) * 1.02], label: 'L cone response' },
    y: { domain: [Math.min(...M) * 0.95, Math.max(...M) * 1.02], label: 'M cone response' },
    title: 'Responses to natural surfaces: L against M',
  });
  scatter.points(L.map((l, i) => [l, M[i]]), { className: 'series-1', radius: 2 });

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `The cloud is a <strong>line</strong>, not a blob — that is what r = ${rLM.toFixed(3)} looks like. ` +
    `Almost all the variance lies along the diagonal (L+M, the luminance direction) and a sliver lies ` +
    `across it (L−M, the red–green direction). ` +
    `<strong>Rotating to those axes is exactly what PCA does</strong>, and it is why the opponent channels ` +
    `fall out of natural statistics without any reference to physiology.`;
  root.appendChild(note);

  const note2 = document.createElement('p');
  note2.className = 'x-figure-note';
  note2.innerHTML =
    `<strong>So why not just separate the pigments?</strong> Two reasons. Photon catch: a narrow pigment ` +
    `absorbs fewer photons, so each channel is noisier, and at low light that costs more than the ` +
    `redundancy does. And wavelength discrimination is best where sensitivity curves have steep, ` +
    `opposed slopes — which requires them to overlap. The overlap is not a failure to separate the ` +
    `pigments; it buys sensitivity and fine discrimination, and pays for it with a redundancy that ` +
    `a single subtraction downstream removes for free.`;
  root.appendChild(note2);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Reproduces the structure reported by Buchsbaum & Gottschalk (1983) and measured on natural ' +
    'cone signals by Ruderman, Cronin & Chiao (1998). Reflectance ensemble is synthetic but ' +
    'matched to the smooth, low-dimensional character of natural spectra.';
  root.appendChild(credit);
}
