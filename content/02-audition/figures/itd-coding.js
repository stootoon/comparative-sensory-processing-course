// Interaural time difference: place map or two channels?
//
// This looks like a factual dispute — owl versus gerbil — and is actually a
// normative result. The optimal code depends on the ITD range the animal
// ACTUALLY experiences relative to the period of the frequencies it uses.
// Big head or high frequency: many cycles fit, a map is worth building.
// Small head or low frequency: the whole range is a fraction of a cycle, and
// two broad channels with maximum slope at midline do better.
//
// The transferable lesson, and the reason this figure is here: optimal codes
// depend on the range encountered, not the range physically possible.

export const controls = [
  {
    id: 'headCm', label: 'Head width (cm)',
    min: 3, max: 30, step: 0.5, value: 15,
    format: (v) => `${v.toFixed(1)}`,
  },
  {
    id: 'freqHz', label: 'Sound frequency (Hz)',
    min: 100, max: 8000, step: 50, value: 500,
    format: (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${Math.round(v)}`),
  },
];

const SPEED_OF_SOUND = 343; // m/s

export function draw(root, values, { createPlot, sample }) {
  const headM = values.headCm / 100;
  const f = values.freqHz;

  // Maximum ITD for a head of this width.
  const maxItd = (headM / SPEED_OF_SOUND) * 1e6;      // microseconds
  const period = 1e6 / f;                              // microseconds
  const cyclesInRange = (2 * maxItd) / period;

  const plot = createPlot(root, {
    width: 660, height: 330,
    margin: { top: 20, right: 24, bottom: 52, left: 68 },
    x: { domain: [-maxItd * 1.4, maxItd * 1.4], label: 'interaural time difference (µs)' },
    y: { domain: [0, 1.08], label: 'normalised response' },
    title: 'Two schemes for coding interaural time difference',
  });

  // Shade the physiologically reachable range.
  plot.vline(-maxItd, { className: 'marker', label: 'physiological range' });
  plot.vline(maxItd, { className: 'marker' });

  // Jeffress: an array of narrowly tuned detectors tiling the range.
  const nDetectors = 7;
  for (let i = 0; i < nDetectors; i += 1) {
    const best = -maxItd + (2 * maxItd * i) / (nDetectors - 1);
    const curve = sample(-maxItd * 1.4, maxItd * 1.4, 160, (t) =>
      0.5 * (1 + Math.cos((2 * Math.PI * (t - best)) / period)));
    plot.line(curve, { className: 'series-3', dashed: true, width: 1 });
  }

  // Two-channel: broad opposing curves, steepest slope at midline.
  for (const [sign, cls] of [[1, 'series-1'], [-1, 'series-2']]) {
    const curve = sample(-maxItd * 1.4, maxItd * 1.4, 200, (t) =>
      1 / (1 + Math.exp((-sign * t) / (maxItd * 0.5))));
    plot.line(curve, { className: cls });
  }

  plot.legend([
    { label: 'left-favouring channel', className: 'series-1' },
    { label: 'right-favouring channel', className: 'series-2' },
    { label: 'Jeffress place-map detectors', className: 'series-3', dashed: true },
  ]);

  const mapViable = cyclesInRange > 1.5;
  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `Head width ${values.headCm.toFixed(1)} cm gives a maximum ITD of <strong>±${maxItd.toFixed(0)} µs</strong>. ` +
    `At ${f >= 1000 ? (f / 1000).toFixed(1) + ' kHz' : Math.round(f) + ' Hz'} one cycle is ` +
    `${period.toFixed(0)} µs, so the physiological range spans <strong>${cyclesInRange.toFixed(2)} cycles</strong>.` +
    `<br><br>` +
    (mapViable
      ? `<strong>A place map is viable here.</strong> Several cycles fit inside the reachable range, so ` +
        `narrowly tuned detectors can tile it and each codes a distinct azimuth. This is the barn owl's ` +
        `regime — high frequency, and it builds exactly the delay-line-and-coincidence circuit Jeffress ` +
        `proposed.`
      : `<strong>A place map is nearly useless here.</strong> The whole reachable range is a fraction of ` +
        `one cycle, so only a sliver of each detector's tuning curve is ever visited — there is nothing ` +
        `to tile. The better arrangement is two broad channels whose <em>steepest slope</em> sits at ` +
        `midline, where discrimination matters most, reading azimuth from their balance. This is the ` +
        `small-mammal regime.`) +
    `<br><br>Drag head width to 30 cm or frequency to 5 kHz and watch the verdict flip. ` +
    `<strong>Owl and gerbil are not disagreeing about mechanism — they are optimally solving different ` +
    `problems, because their heads are different sizes.</strong>`;
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Computed from head geometry and the speed of sound. Illustrates the argument of McAlpine, Jiang & ' +
    'Palmer (2001), against the delay-line circuit demonstrated in the owl by Carr & Konishi (1990).';
  root.appendChild(credit);
}
