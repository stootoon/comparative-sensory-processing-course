// Nociception is not pain: the double dissociation, drawn as a 2x2.
//
// The course's recurring claim is that the consumer determines the code. This
// is the sharpest available demonstration, because both off-diagonal cells
// are occupied by well-documented conditions. A sensory process and its
// percept that can each occur without the other are not the same variable,
// and no amount of afferent measurement will settle what is felt.

export const controls = [
  { id: 'cell', label: 'Focus on', type: 'select', value: 'all',
    options: [
      { value: 'all', label: 'All four cells' },
      { value: 'np',  label: 'Nociception without pain' },
      { value: 'pn',  label: 'Pain without nociception' },
    ] },
];

const CELLS = [
  { col: 0, row: 0, head: 'NEITHER', body: ['no insult, no percept', 'the baseline'], cls: 'dim' },
  { col: 1, row: 0, head: 'PAIN WITHOUT NOCICEPTION', key: 'pn', cls: 'series-2',
    body: ['central post-stroke pain', 'phantom limb pain', 'anaesthesia dolorosa',
           'the periphery is silent or', 'absent; the percept is not'] },
  { col: 0, row: 1, head: 'NOCICEPTION WITHOUT PAIN', key: 'np', cls: 'series-1',
    body: ['stress-induced analgesia', 'the wounded soldier', 'placebo analgesia',
           'afferents fire; descending', 'control suppresses the percept'] },
  { col: 1, row: 1, head: 'BOTH', body: ['the textbook case —', 'and the only cell most', 'accounts describe'], cls: 'active' },
];

export function draw(root, values, { createDiagram }) {
  const focus = values.cell ?? 'all';
  const d = createDiagram(root, {
    width: 720, height: 420,
    title: 'Nociception and pain dissociate in both directions',
  });

  const x0 = 180, y0 = 92, w = 250, h = 136;
  d.text(x0 + w / 2, 56, 'pain absent', { anchor: 'middle', className: 'head' });
  d.text(x0 + w * 1.5, 56, 'pain present', { anchor: 'middle', className: 'head' });
  d.text(x0 - 16, y0 + h / 2, 'nociception absent', { anchor: 'end', className: 'head' });
  d.text(x0 - 16, y0 + h * 1.5, 'nociception present', { anchor: 'end', className: 'head' });

  CELLS.forEach((c) => {
    const cx = x0 + c.col * w + 20;
    const cy = y0 + c.row * h + 6;
    const dim = focus !== 'all' && c.key !== focus;
    d.text(cx, cy, c.head, { anchor: 'start', className: dim ? 'dim' : 'head' });
    c.body.forEach((line, i) => d.text(cx, cy + 22 + i * 17, line,
      { anchor: 'start', className: dim ? 'dim' : c.cls }));
    d.blob(cx - 12, cy - 5, 5, { className: dim ? 'dim' : (c.cls === 'dim' ? 'dim' : 'active') });
  });

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  n.innerHTML = focus === 'np'
    ? 'Afferent traffic arrives and no pain is reported. This is not rare or exotic — it is the ordinary ' +
      'operation of the descending system under threat, and it tells you the periphery does not determine ' +
      'the percept. <strong>Any measurement made at the nociceptor is a measurement of nociception</strong>, ' +
      'and the inference from it to what is felt runs through a gain stage the experimenter does not control.'
    : focus === 'pn'
    ? 'The percept occurs with the afferent supply silent, damaged or physically absent. Phantom limb pain ' +
      'is the extreme case: the receptive field has no receptors in it. <strong>Whatever pain is a ' +
      'representation of, it is not the current output of the array</strong> — which is why treating it as ' +
      'the readout of a sensor is a category error, and why analgesics aimed only at the periphery have a ' +
      'ceiling.'
    : 'Two occupied off-diagonal cells make this a double dissociation, and double dissociations are the ' +
      'strongest evidence this course accepts for two variables being distinct. The comparative point is ' +
      'that <strong>every modality has this structure and only here is it forced on you</strong>. Vision ' +
      'has retinal transduction and visual experience, and they come apart too (blindsight, hallucination) — ' +
      'but rarely enough that the field can speak loosely. Nociception cannot, which makes it the module ' +
      'where "the consumer determines the code" has to be stated exactly.';
  root.appendChild(n);

  const c2 = document.createElement('p');
  c2.className = 'x-figure-credit';
  c2.textContent =
    'Clinical conditions after Kandel, Principles of Neural Science 6th ed., ch. 20. The 2×2 framing and ' +
    'the double-dissociation argument are this course\'s.';
  root.appendChild(c2);
}
