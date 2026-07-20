// The gain is set from above.
//
// Every module's §9 asks how the animal controls its own input. Nociception
// cannot move its sensor to a better vantage point, so it does the other
// thing: it changes the gain of the first synapse from the brainstem. This
// diagram puts the descending loop beside the ascending one so the reader can
// see that the control acts BEFORE the first relay, which is where the
// olfactory parallel (centrifugal input to the bulb) lives too.

export const controls = [
  { id: 'state', label: 'Behavioural state', type: 'select', value: 'rest',
    options: [
      { value: 'rest',   label: 'Rest — descending tone moderate' },
      { value: 'threat', label: 'Escape from a predator — analgesia' },
      { value: 'recov',  label: 'Recovery / guarding — facilitation' },
    ] },
];

const GAIN = { rest: 1.0, threat: 0.15, recov: 2.4 };

export function draw(root, values, { createDiagram }) {
  const st = values.state ?? 'rest';
  const g = GAIN[st];

  const d = createDiagram(root, {
    width: 760, height: 430,
    title: 'Descending control: the sensor whose gain is a policy variable',
  });

  const W = 430;
  d.layer(52, 50, 'cortex, amygdala, hypothalamus — state and expectation', { className: 'accent', extent: W });
  d.layer(140, 46, 'periaqueductal grey (PAG)', { extent: W });
  d.layer(216, 46, 'rostroventral medulla (RVM)', { className: 'alt', extent: W });
  d.layer(322, 60, 'dorsal horn — first synapse', { extent: W });

  const pag = d.cell(224, 162, { r: 11, className: 'excite', label: 'PAG', labelDy: -18 });
  const rvm = d.cell(224, 238, { r: 11, className: 'inhibit', label: 'RVM', labelDy: -18 });
  d.connect({ x: 224, y: 76 }, { x: 224, y: 150 }, { sign: 'excite' });
  d.connect({ x: 224, y: 174 }, { x: 224, y: 226 }, { sign: 'excite' });

  // The controlled synapse.
  const noci = d.cell(112, 350, { r: 9, className: 'receptor', label: 'nociceptor', labelDy: -18 });
  const proj = d.cell(300, 350, { r: 12, className: 'output', label: 'projection neuron', labelDy: 30 });
  d.connect({ x: 121, y: 350 }, { x: 287, y: 350 },
    { sign: 'excite', className: st === 'threat' ? 'dim' : 'strong' });
  d.connect({ x: 224, y: 250 }, { x: 296, y: 337 },
    { sign: st === 'recov' ? 'excite' : 'inhibit', className: 'strong' });

  d.text(206, 300, st === 'recov' ? 'ON cells — facilitation' : 'OFF cells — inhibition',
    { anchor: 'end', className: 'head' });
  d.bracket(360, 330, 46, `gain ×${g.toFixed(2)}`, { side: 'right' });

  d.note(462, 76, [
    'THE CONTROL SIGNAL',
    'is not sensory. It is state:',
    'threat, expectation, prior',
    'analgesia, whether the',
    'animal is committed to a',
    'movement it cannot abort.',
  ]);
  d.note(462, 196, [
    'BIDIRECTIONAL',
    'RVM contains OFF cells that',
    'suppress and ON cells that',
    'facilitate. So this is a gain',
    'knob, not an off switch —',
    'and the facilitatory setting',
    'is a candidate substrate for',
    'chronic pain.',
  ]);
  d.note(462, 336, [
    'ACTING AT SYNAPSE ONE',
    'The gain is applied before',
    'anything has been relayed.',
    'Compare the olfactory bulb,',
    'where cortical feedback',
    'gates granule cells at the',
    'first synapse too (§3.6).',
  ]);

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  const line = {
    rest: 'At rest the descending tone is intermediate, which is itself informative: the system is not ' +
      'sitting at maximum sensitivity, so ordinary experience is already a modulated signal.',
    threat: 'Under threat, PAG drive to RVM suppresses transmission at the first synapse and the injury ' +
      'is not felt. The normative reading is a <strong>deadline argument</strong>: while escape is in ' +
      'progress, the correct action is fixed, so the signal that would revise it has no decision value and ' +
      'its behavioural cost (stopping, guarding) is prohibitive. Report the injury when escape is over.',
    recov: 'During recovery the same circuit runs the other way. Facilitation raises the gain, so ordinary ' +
      'movement of the injured part is reported as painful and the part is protected. This is the ' +
      '<strong>useful</strong> version of the inversion §8.10 describes — and its pathological version uses ' +
      'the same machinery, which is what makes chronic pain hard to define as a lesion.',
  }[st];
  n.innerHTML = line + ' <br><br>Set against the rest of the course, this is an unusual amount of central ' +
    'authority over a sensor. Olfaction and audition both have centrifugal control of their first stages, ' +
    'but neither can abolish the percept outright the way stress-induced analgesia does.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Circuit after Kandel, Principles of Neural Science 6th ed., ch. 20 (PAG–RVM–dorsal horn, opioid and ' +
    'monoaminergic components). Gain values are illustrative, chosen to make the sign of the effect legible.';
  root.appendChild(c);
}
