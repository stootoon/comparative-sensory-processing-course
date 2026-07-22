// Inverse optics, rendered rather than asserted.
//
// §1.1 states I = R·L·cosθ and calls it underdetermined. An earlier version of
// this figure drew the three factors as bars and printed the product, which
// asks the reader to take the ill-posedness on trust. This one renders the
// surface: the sphere is shaded by an actual Lambertian computation, every
// point on it lies at a different angle to the light, and the receptor samples
// exactly one of them. Sliding the slant slides the sample point from the
// bright pole toward the terminator, so the cosθ term stops being a symbol.
//
// The payoff is the row underneath. Given whatever the reader has set, it
// solves R'·L'·cosθ' = I for genuinely different world states and renders each
// one. The worlds differ visibly. The receptor patches do not differ at all,
// because they are the same number.
//
// WHY CANVAS, in a codebase whose figures are otherwise SVG. Shading a sphere
// is a per-pixel computation and an SVG gradient cannot express it: the
// iso-luminance contours on a lit sphere project to a family of ellipses whose
// centres *and* axes both move with luminance, and no radialGradient generates
// that family. The usual objection to canvas here is that it cannot follow the
// CSS variables on a theme change — but nothing drawn on these canvases is
// theme-dependent. A luminance is a luminance in dark mode. Everything that
// does follow the theme (labels, rules, the panel chrome) stays in HTML.

export const controls = [
  { id: 'R',  label: 'Surface reflectance R', min: 0.05, max: 1, step: 0.01, value: 0.6, format: (v) => v.toFixed(2) },
  { id: 'L',  label: 'Illumination L',        min: 0.1,  max: 2, step: 0.02, value: 1.0, format: (v) => v.toFixed(2) },
  { id: 'th', label: 'Slant θ — angle between surface normal and light', min: 0, max: 80, step: 1, value: 0, format: (v) => `${Math.round(v)}°` },
];

// Display mapping. EXPOSURE is the intensity that renders as white; it equals
// the largest I the sliders can produce (R=1, L=2, θ=0), so the tone curve
// never clips. That matters more than it looks: if two different world states
// both clipped to white they would appear to be metamers when they are not,
// and this figure would be teaching the opposite of the truth.
const EXPOSURE = 2.0;
const GAMMA = 2.2;

const rad = (deg) => (deg * Math.PI) / 180;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Intensity to an 8-bit display value, through the exposure and gamma above. */
function tone(intensity) {
  return Math.round(255 * clamp01(intensity / EXPOSURE) ** (1 / GAMMA));
}
const grey = (intensity) => {
  const v = tone(intensity);
  return `rgb(${v},${v},${v})`;
};

// Light direction, from the surface toward the source, in a right-handed frame
// with x right, y up, z out of the screen. Up and to the left, tilted toward
// the viewer so that a usefully large part of the lit hemisphere is visible.
const LIGHT = normalise([-0.45, 0.55, 0.7]);
// The direction the sample point travels as θ grows: the component of "screen
// right" perpendicular to the light. Any perpendicular would be physically
// valid — the points at a given θ form a whole circle on the sphere — so this
// picks the one that keeps the marker visible and moving across the disc.
const SWEEP = normalise(reject([1, 0, 0], LIGHT));

function normalise(v) {
  const m = Math.hypot(v[0], v[1], v[2]);
  return [v[0] / m, v[1] / m, v[2] / m];
}
function reject(v, onto) {
  const d = v[0] * onto[0] + v[1] * onto[1] + v[2] * onto[2];
  return [v[0] - d * onto[0], v[1] - d * onto[1], v[2] - d * onto[2]];
}

/** The surface normal the receptor is looking at, for a given slant. */
function sampleNormal(theta) {
  const c = Math.cos(rad(theta));
  const s = Math.sin(rad(theta));
  return [
    c * LIGHT[0] + s * SWEEP[0],
    c * LIGHT[1] + s * SWEEP[1],
    c * LIGHT[2] + s * SWEEP[2],
  ];
}

const h = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const NS = 'http://www.w3.org/2000/svg';
const svgEl = (name, attrs = {}) => {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v != null) node.setAttribute(k, String(v));
  return node;
};

/**
 * A matte sphere of reflectance R under illumination L, shaded per pixel by
 * Lambert's cosine law, optionally marked at the point the receptor samples.
 */
function renderSphere(logicalSize, R, L, { theta = null, small = false } = {}) {
  const dpr = Math.min(2, globalThis.devicePixelRatio || 1);
  const px = Math.round(logicalSize * dpr);
  const canvas = document.createElement('canvas');
  canvas.width = px;
  canvas.height = px;
  canvas.className = small ? 'io-sphere is-small' : 'io-sphere';
  canvas.setAttribute('role', 'img');

  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(px, px);
  const data = image.data;
  const centre = px / 2;
  const radius = px * 0.46;

  for (let y = 0; y < px; y += 1) {
    for (let x = 0; x < px; x += 1) {
      const nx = (x + 0.5 - centre) / radius;
      const ny = -(y + 0.5 - centre) / radius;
      const r2 = nx * nx + ny * ny;
      const index = (y * px + x) * 4;
      if (r2 > 1) continue; // transparent outside the disc

      const nz = Math.sqrt(1 - r2);
      const lambert = Math.max(0, nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]);
      const value = tone(R * L * lambert);

      // One-pixel feather at the limb, or the disc edge crawls with aliasing.
      const edge = clamp01((1 - Math.sqrt(r2)) * radius + 0.5);
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = Math.round(255 * edge);
    }
  }
  ctx.putImageData(image, 0, 0);

  if (theta != null) {
    const n = sampleNormal(theta);
    const mx = centre + n[0] * radius;
    const my = centre - n[1] * radius;
    const ring = small ? 3.2 * dpr : 5.5 * dpr;
    // Two concentric strokes, light over dark, so the marker stays legible
    // whether it sits on the bright pole or down in the terminator.
    ctx.lineWidth = (small ? 3 : 4) * dpr;
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.beginPath();
    ctx.arc(mx, my, ring, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = (small ? 1.4 : 1.8) * dpr;
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.beginPath();
    ctx.arc(mx, my, ring, 0, Math.PI * 2);
    ctx.stroke();
  }

  canvas.setAttribute(
    'aria-label',
    `A matte sphere of reflectance ${R.toFixed(2)} under illumination ${L.toFixed(2)}, lit from the upper left.`
  );
  return canvas;
}

/** The lamp: a warm disc whose brightness and ray length track L. */
function lampIcon(L, size = 46) {
  const b = clamp01(L / 2) ** (1 / GAMMA);
  const svg = svgEl('svg', { viewBox: '0 0 46 46', class: 'io-icon', width: size, height: size, role: 'img' });
  const title = svgEl('title');
  title.textContent = `Illumination ${L.toFixed(2)}`;
  svg.appendChild(title);
  for (let i = 0; i < 8; i += 1) {
    const a = (i * Math.PI) / 4;
    const inner = 11;
    const outer = 12 + 8 * b;
    svg.appendChild(
      svgEl('line', {
        x1: 23 + inner * Math.cos(a), y1: 23 + inner * Math.sin(a),
        x2: 23 + outer * Math.cos(a), y2: 23 + outer * Math.sin(a),
        stroke: `rgb(${Math.round(255 * b)},${Math.round(200 * b)},${Math.round(70 * b)})`,
        'stroke-width': 2, 'stroke-linecap': 'round',
      })
    );
  }
  svg.appendChild(
    svgEl('circle', {
      cx: 23, cy: 23, r: 9.5,
      fill: `rgb(${Math.round(255 * b)},${Math.round(212 * b)},${Math.round(94 * b)})`,
      stroke: 'var(--rule-strong)', 'stroke-width': 0.8,
    })
  );
  return svg;
}

/** The geometry: surface, its normal, the incoming ray, and the angle between. */
function slantIcon(theta, size = 46) {
  const svg = svgEl('svg', { viewBox: '0 0 46 46', class: 'io-icon', width: size, height: size, role: 'img' });
  const title = svgEl('title');
  title.textContent = `Slant ${Math.round(theta)} degrees`;
  svg.appendChild(title);

  const cx = 23;
  const cy = 32;
  svg.appendChild(svgEl('line', { x1: 7, y1: cy, x2: 39, y2: cy, class: 'fig-ink', 'stroke-width': 1.6 }));
  svg.appendChild(svgEl('line', { x1: cx, y1: cy, x2: cx, y2: cy - 20, class: 'fig-faint', 'stroke-width': 1.2, 'stroke-dasharray': '2 2' }));

  const a = rad(theta);
  const rx = cx - 20 * Math.sin(a);
  const ry = cy - 20 * Math.cos(a);
  svg.appendChild(
    svgEl('line', { x1: rx, y1: ry, x2: cx, y2: cy, stroke: 'var(--series-5)', 'stroke-width': 1.8, 'stroke-linecap': 'round' })
  );
  if (theta > 3) {
    svg.appendChild(
      svgEl('path', {
        d: `M${cx},${cy - 11} A11,11 0 0,0 ${cx - 11 * Math.sin(a)},${cy - 11 * Math.cos(a)}`,
        fill: 'none', class: 'fig-ink', 'stroke-width': 1,
      })
    );
  }
  return svg;
}

/** A swatch of the material as it would look under standard light (L=1, θ=0). */
function albedoChip(R, size = 46) {
  const chip = h('span', 'io-chip');
  chip.style.background = grey(R);
  chip.style.width = `${size}px`;
  chip.style.height = `${size}px`;
  chip.title = `Reflectance ${R.toFixed(2)}`;
  return chip;
}

function worldIcons(R, L, theta, { compact = false } = {}) {
  const size = compact ? 32 : 38;
  const wrap = h('div', compact ? 'io-world is-compact' : 'io-world');
  const cell = (node, label) => {
    const box = h('div', 'io-world-cell');
    box.append(node, h('span', 'io-world-label', label));
    return box;
  };
  wrap.append(
    cell(albedoChip(R, size), `R ${R.toFixed(2)}`),
    cell(lampIcon(L, size), `L ${L.toFixed(2)}`),
    cell(slantIcon(theta, size), `θ ${Math.round(theta)}°`)
  );
  return wrap;
}

/**
 * Other world states with the same receptor value. Solves R'·L'·cosθ' = I on a
 * grid, keeps what is in range, and greedily picks ones far apart so the row is
 * three genuinely different worlds rather than three rounding errors.
 */
function metamers(R, L, theta, I, count = 3) {
  const own = Math.round(theta);
  // The reader's own slant is always a candidate geometry, because the pure
  // reflectance-against-illumination trade at fixed θ is the case worth seeing:
  // it is lightness constancy, and it is the one the figure's note asks them to
  // reproduce by hand. The rest of the grid supplies different geometries.
  const slants = [...new Set([own, 0, 20, 35, 50, 65, 75])];

  // Keep only the most different world per slant. Three candidates that share a
  // geometry and differ slightly in reflectance make the row look like rounding
  // error; one per slant makes it look like what it is.
  const bySlant = new Map();
  for (const th of slants) {
    const c = Math.cos(rad(th));
    for (let r = 0.1; r <= 1.0001; r += 0.05) {
      const l = I / (r * c);
      if (l < 0.1 || l > 2) continue;
      if (Math.abs(r - R) < 0.12 && Math.abs(th - theta) < 6) continue; // the reader's own world
      const spread = Math.abs(r - R) / 0.95 + Math.abs(l - L) / 1.9 + Math.abs(th - theta) / 80;
      const best = bySlant.get(th);
      if (!best || spread > best.spread) bySlant.set(th, { R: r, L: l, th, spread });
    }
  }

  const sameGeometry = bySlant.get(own);
  const others = [...bySlant.values()]
    .filter((c) => c !== sameGeometry)
    .sort((a, b) => b.spread - a.spread);
  const chosen = sameGeometry
    ? [sameGeometry, ...others.slice(0, count - 1)]
    : others.slice(0, count);
  return chosen.sort((a, b) => a.th - b.th);
}

/** Purely decorative: the panels already read left to right. */
function arrow() {
  const node = h('div', 'io-arrow', '\u2192');
  node.setAttribute('aria-hidden', 'true');
  return node;
}

function panel(titleText, ...children) {
  const box = h('div', 'io-panel');
  box.append(h('h4', 'io-panel-title', titleText), ...children);
  return box;
}

export function draw(root, values) {
  const R = values.R ?? 0.6;
  const L = values.L ?? 1.0;
  const th = values.th ?? 0;
  const I = R * L * Math.cos(rad(th));

  const wrap = h('div', 'io-wrap');

  // ---- The scene: world state, the rendered surface, the one number out ----
  const main = h('div', 'io-main');

  main.append(
    panel('The world', worldIcons(R, L, th), h('p', 'io-hint', 'None of this is available to the eye.'))
  );
  main.append(arrow());

  const sphereBox = h('div', 'io-sphere-box');
  sphereBox.append(
    renderSphere(124, R, L, { theta: th }),
    h('p', 'io-hint', 'Every point is a different θ. The ring is the sampled one.')
  );
  main.append(panel('The surface, rendered', sphereBox));
  main.append(arrow());

  const swatch = h('div', 'io-swatch');
  swatch.style.background = grey(I);
  const readout = h('div', 'io-readout');
  readout.append(
    h('span', 'io-readout-value', `I = ${I.toFixed(3)}`),
    h('span', 'io-hint', `${R.toFixed(2)} × ${L.toFixed(2)} × cos ${Math.round(th)}°`)
  );
  main.append(panel('What one receptor reports', swatch, readout));

  wrap.append(main);

  // ---- The payoff: different worlds, indistinguishable measurement ----
  const alternatives = metamers(R, L, th, I);
  const row = h('section', 'io-alt');
  row.append(h('h4', 'io-panel-title', 'Other worlds this receptor cannot tell apart'));

  if (alternatives.length === 0) {
    row.append(
      h('p', 'io-hint', 'At this setting the intensity is so extreme that no other in-range combination reaches it — the only worlds that produce it are near the one you have set. Move the sliders back toward the middle.')
    );
  } else {
    const grid = h('div', 'io-alt-grid');
    for (const alt of alternatives) {
      const column = h('div', 'io-alt-col');
      const altSwatch = h('div', 'io-swatch is-small');
      altSwatch.style.background = grey(alt.R * alt.L * Math.cos(rad(alt.th)));
      column.append(
        worldIcons(alt.R, alt.L, alt.th, { compact: true }),
        renderSphere(88, alt.R, alt.L, { theta: alt.th, small: true }),
        altSwatch
      );
      grid.append(column);
    }
    // Deliberately not "the bottom row", which is only true on a wide screen —
    // these wrap to two lines on a phone.
    row.append(grid, h('p', 'io-hint', 'Different materials, different lamps, different geometry — and one identical grey.'));
  }
  wrap.append(row);
  root.appendChild(wrap);

  const note = h('p', 'x-figure-note');
  note.innerHTML =
    `<strong>Try R = 0.9 with L = 0.44, then R = 0.3 with L = 1.32.</strong> A pale surface in gloom and a dark ` +
    `surface in bright light. The spheres are the same. Not similar — the same, pixel for pixel, because the ` +
    `image depends on R and L only through their product and no amount of looking will separate them.` +
    `<br><br>Then hold R and L still and move the slant. The sample ring slides toward the terminator and the ` +
    `reading falls, even though nothing about the material or the lighting changed. That is the third unknown, ` +
    `and it is why a shaded region in an image is ambiguous between a dark patch and a turned-away one.` +
    `<br><br>This is the ill-posedness that makes vision an inference problem rather than a measurement problem. ` +
    `It also shows why a naive efficient-coding framing is not enough on its own: a system that transmitted ` +
    `<em>I</em> perfectly would be an excellent codec and a useless visual system, because the animal cares ` +
    `about R, not I. Recovering R needs constraints from outside the measurement — illumination varies smoothly ` +
    `while reflectance has edges, light usually comes from above — which is what §1.2 is about.` +
    `<br><br>Compare §3.1, where instantaneous receptor activation confounds identity, concentration, distance ` +
    `and transport history — the same shape of problem with five unknowns instead of three, and no straight ` +
    `lines to help recover the geometry.` +
    `<br><br><em>What is simulated and what is not.</em> The shading is Lambert's cosine law under a single ` +
    `distant source, computed per pixel; the sphere is there because it shows every angle at once, so the ` +
    `cos θ term is visible rather than stipulated. Intensity is mapped to the screen through a fixed exposure ` +
    `and a 2.2 gamma, chosen so the brightest reachable setting is exactly white — nothing ever clips, since two ` +
    `distinct states clipping to a common white would fake a metamerism that is not there. Interreflection, ` +
    `ambient light, specularity and the eye's own nonlinearities are all omitted.`;
  root.appendChild(note);

  const credit = h('p', 'x-figure-credit');
  credit.textContent = 'Rendered for this course from I = R·L·cos θ.';
  root.appendChild(credit);
}
