// The tilt–translation ambiguity, and its resolution.
//
// No Commons image shows this geometry, and a static panel would be worse
// than an interactive one anyway: the point is that DIFFERENT world states
// produce IDENTICAL otolith signals, which you understand by driving them to
// the same value and watching the otolith readout not move.
//
// This is the exact structural analogue of olfaction's concentration /
// distance / transport confound (§3.1), which is why it earns a figure.

export const controls = [
  { id: 'tilt',  label: 'Head tilt (degrees)', min: -40, max: 40, step: 1, value: 20,
    format: (v) => `${Math.round(v)}°` },
  { id: 'accel', label: 'Linear acceleration (m/s²)', min: -6, max: 6, step: 0.1, value: 0,
    format: (v) => v.toFixed(1) },
  { id: 'canals', label: 'Canal signal available', type: 'select', value: 'yes',
    options: [{ value: 'yes', label: 'Yes — combine both sensors' },
              { value: 'no',  label: 'No — otoliths alone' }] },
];

const G = 9.81;

export function draw(root, values, { createDiagram, createPlot, sample }) {
  const tiltDeg = values.tilt, accel = values.accel;
  const tilt = (tiltDeg * Math.PI) / 180;

  // The otoliths sense the GRAVITO-INERTIAL acceleration: the vector sum of
  // gravity and inertial acceleration, in head coordinates. Tilting rotates
  // gravity into the head's horizontal axis; translating adds a real
  // horizontal component. Both land in the same place.
  const fromTilt = G * Math.sin(tilt);
  const fromAccel = -accel;
  const shear = fromTilt + fromAccel;   // what the otolith actually reports

  const d = createDiagram(root, { width: 700, height: 300, title: 'Tilt and translation on the otolith' });

  const panel = (cx, label, theta, showAccel) => {
    d.text(cx, 30, label, { anchor: 'middle', className: 'head' });
    // head outline
    const r = 42;
    d.blob(cx, 130, r, { className: '' });
    // otolith macula as a line through the head, tilted with it
    const dx = r * 0.8 * Math.cos(theta), dy = r * 0.8 * Math.sin(theta);
    d.connect({ x: cx - dx, y: 130 - dy }, { x: cx + dx, y: 130 + dy }, { sign: 'excite' });
    // gravity, always down
    d.connect({ x: cx, y: 130 }, { x: cx, y: 130 + 52 }, { sign: 'excite', className: 'receptor' });
    d.text(cx + 12, 130 + 50, 'g', { anchor: 'start' });
    if (showAccel && Math.abs(accel) > 0.05) {
      const ax = Math.sign(accel) * Math.min(50, Math.abs(accel) * 8);
      d.connect({ x: cx, y: 130 }, { x: cx + ax, y: 130 }, { sign: 'excite', className: 'inhibit' });
      d.text(cx + ax / 2, 118, 'a', { anchor: 'middle' });
    }
  };

  panel(150, 'Tilt only', tilt, false);
  panel(370, 'Translation only', 0, true);
  panel(580, 'What the otolith reports', 0, false);

  // The readout bar — identical for both causes when shear matches.
  const bx = 580, by = 208, half = 60;
  d.connect({ x: bx - half, y: by }, { x: bx + half, y: by }, { sign: 'excite', className: 'dim' });
  const pos = Math.max(-half, Math.min(half, (shear / G) * half));
  d.blob(bx + pos, by, 8, { className: 'active' });
  d.text(bx, by + 30, `shear = ${shear.toFixed(2)} m/s²`, { anchor: 'middle' });
  d.note(40, 236, [
    'THE AMBIGUITY',
    'Tilting rotates gravity into the head’s horizontal axis.',
    'Translating adds a real horizontal acceleration.',
    'The otolith sums them and cannot tell which is which.',
  ]);

  // --- resolution panel ---------------------------------------------------
  const tiltOnly = (G * Math.sin(tilt) / G) * 100;
  const equivalentAccel = -fromTilt;
  const canals = values.canals ?? 'yes';

  const note = document.createElement('p');
  note.className = 'x-figure-note';

  const ambiguous = Math.abs(shear) > 0.05;
  note.innerHTML =
    `Set <strong>tilt = ${Math.round(tiltDeg)}°, acceleration = ${accel.toFixed(1)} m/s²</strong> and the otolith ` +
    `reports a shear of <strong>${shear.toFixed(2)} m/s²</strong>. ` +
    `<br><br><strong>Now reproduce that same reading a different way.</strong> Pure tilt of ${Math.round(tiltDeg)}° ` +
    `gives ${fromTilt.toFixed(2)}; a pure translation of ${equivalentAccel.toFixed(2)} m/s² with no tilt gives the ` +
    `same number. The sensor cannot distinguish them, and <em>no better-built accelerometer could</em> — this is ` +
    `Einstein's equivalence principle, not a biological limitation.` +
    (canals === 'yes'
      ? `<br><br><strong>With canals available</strong> the ambiguity is resolvable. The canals report angular ` +
        `velocity, so the brain knows whether the head rotated. Integrate that under a forward model of head ` +
        `dynamics, attribute any <em>sustained</em> component to gravity — since a body cannot accelerate ` +
        `translationally forever — and the two causes separate. Brainstem and cerebellar neurons compute exactly ` +
        `this decomposition.`
      : `<br><br><strong>Without canals</strong> there is no way out. This is the situation in canal-plugged animals ` +
        `and in some vestibular patients, and it produces exactly the predicted confusions — sustained linear ` +
        `acceleration is perceived as tilt, which is the somatogravic illusion that has killed pilots.`) +
    `<br><br><strong>The olfactory analogue (§3.1):</strong> instantaneous receptor activation confounds source ` +
    `strength, distance, and transport history. Same shape of problem, same requirement — extra signals plus a ` +
    `forward model. But olfaction's forward model is turbulent transport, which is <em>non-stationary</em>, where ` +
    `head dynamics are fixed. That is why the olfactory version is strictly harder.`;
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Diagram generated for this course. Illustrates the ambiguity resolved by the neurons described in ' +
    'Angelaki, Shaikh, Green & Dickman (2004).';
  root.appendChild(credit);
}
