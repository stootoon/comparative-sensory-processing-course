// Why an electronic nose stops working, in the smallest model that shows it.
//
// Serves §13.3. Two odour classes, two cross-sensitive chemical sensors. A
// decision boundary is fitted at calibration time and then left alone while
// the sensors drift. The point is structural and does not depend on the
// numbers: with a broadly cross-sensitive array there is no invariant the
// classifier could have keyed on instead, so drift is not a nuisance to be
// filtered out — it moves the representation itself.
//
// Everything here is a toy model. No measured data is plotted.

export const controls = [
  { id: 'drift', label: 'Sensor drift since calibration', min: 0, max: 1, step: 0.05, value: 0.45,
    format: (v) => v === 0 ? 'none — freshly calibrated' : `${Math.round(v * 100)}% of the class separation` },
  { id: 'cross', label: 'Cross-sensitivity between sensors', min: 0, max: 0.95, step: 0.05, value: 0.7,
    format: (v) => v < 0.3 ? `${v.toFixed(2)} — near-selective sensors` : `${v.toFixed(2)} — broadly tuned, as real ones are` },
  { id: 'show', label: 'Show', type: 'select', value: 'both',
    options: [{ value: 'both', label: 'Calibration day and later' },
              { value: 'cal',  label: 'Calibration day only' }] },
];

// Deterministic noise so the figure does not shimmer between redraws.
function rng(seed) { let s = seed; return () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648; }
function gauss(r) { return Math.sqrt(-2 * Math.log(r() + 1e-9)) * Math.cos(2 * Math.PI * r()); }

// True composition of the two odours, in "amount of analyte A / amount of B".
const CLASSES = [{ a: 0.62, b: 0.30, cls: 'series-1', name: 'odour A' },
                 { a: 0.32, b: 0.60, cls: 'series-2', name: 'odour B' }];

// A cross-sensitive array: each sensor responds to both analytes, and drift is
// a slow multiplicative gain change that differs between sensors.
function respond(c, cross, gain1, gain2, r) {
  const x = (c.a + cross * c.b) * gain1 + 0.035 * gauss(r);
  const y = (c.b + cross * c.a) * gain2 + 0.035 * gauss(r);
  return [x, y];
}

export function draw(root, values, { createPlot }) {
  const drift = values.drift ?? 0.45;
  const cross = values.cross ?? 0.7;
  const show = values.show ?? 'both';

  const plot = createPlot(root, {
    width: 660, height: 380,
    margin: { top: 24, right: 24, bottom: 54, left: 70 },
    x: { domain: [0, 1.9], label: 'sensor 1 response (arbitrary units) →' },
    y: { domain: [0, 1.9], label: 'sensor 2 response →' },
    title: 'A decision boundary fitted on calibration day, and the same boundary later',
  });

  const r = rng(20250719);
  const cal = [], later = [];
  for (const c of CLASSES) {
    const pc = [], pl = [];
    for (let i = 0; i < 45; i++) {
      const jitter = { a: c.a * (1 + 0.10 * gauss(r)), b: c.b * (1 + 0.10 * gauss(r)) };
      pc.push(respond(jitter, cross, 1, 1, r));
      pl.push(respond(jitter, cross, 1 + 0.85 * drift, 1 - 0.35 * drift, r));
    }
    cal.push({ c, pts: pc }); later.push({ c, pts: pl });
  }

  // Boundary: the perpendicular bisector of the two class means on calibration day.
  const mean = (pts) => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length], [0, 0]);
  const m1 = mean(cal[0].pts), m2 = mean(cal[1].pts);
  const mid = [(m1[0] + m2[0]) / 2, (m1[1] + m2[1]) / 2];
  const dx = m2[0] - m1[0], dy = m2[1] - m1[1];
  const bLine = [];
  for (let t = -3; t <= 3; t += 0.05) bLine.push([mid[0] - dy * t, mid[1] + dx * t]);
  const side = (p) => Math.sign((p[0] - mid[0]) * dx + (p[1] - mid[1]) * dy);
  const ref = side(m1);

  for (const g of cal) plot.points(g.pts, { className: g.c.cls, radius: 3 });
  if (show === 'both') for (const g of later) plot.points(g.pts, { className: g.c.cls, radius: 5 });
  plot.line(bLine, { className: 'series-3' });

  let wrong = 0, total = 0;
  later.forEach((g, i) => { for (const p of g.pts) { total++; if (side(p) !== (i === 0 ? ref : -ref)) wrong++; } });
  const err = Math.round(100 * wrong / total);

  plot.legend([{ label: 'odour A', className: 'series-1' },
               { label: 'odour B', className: 'series-2' },
               { label: 'boundary fitted on calibration day', className: 'series-3' }]);

  const n = document.createElement('p'); n.className = 'x-figure-note';
  n.innerHTML = show === 'cal'
    ? `On calibration day the problem looks easy: two clouds, cleanly separable, and a linear boundary does the ` +
      `job. Every electronic-nose paper can show this figure. Switch to "calibration day and later".`
    : `Small markers are calibration day, large markers are the same two odours later, and the boundary has not ` +
      `moved because nothing told it to. At the current settings <strong>${err}% of later samples fall on the ` +
      `wrong side</strong>.` +
      `<br><br>Now turn cross-sensitivity down towards zero. With near-selective sensors, drift shifts the clouds ` +
      `but each sensor still reports its own analyte, so a ratio or a normalisation recovers the classes. Turn it ` +
      `back up and that fails, because <strong>every sensor is reporting a mixture and drift changes the mixing ` +
      `weights</strong> — there is no invariant left to normalise against. Cross-sensitivity and drift are ` +
      `individually survivable and jointly fatal, which is why the two are always named together and why fixing ` +
      `either alone has not helped much.` +
      `<br><br>The comparison that matters is with a camera. Photon counting is linear, stable over years, and ` +
      `standardised, so a corpus collected on one device transfers to another. Nothing in this plot transfers to ` +
      `another device, or to the same device next month — which is a reason a shared odour corpus is hard that has ` +
      `nothing to do with anyone's willingness to collect one.`;
  root.appendChild(n);
  const c = document.createElement('p'); c.className = 'x-figure-credit';
  c.textContent = 'Toy model constructed for this course. Illustrative only — no measured sensor data is plotted, and the drift model is the simplest one that makes the point.';
  root.appendChild(c);
}
