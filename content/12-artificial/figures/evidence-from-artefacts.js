// What an engineered system licenses you to conclude about a biological one.
//
// Serves §12.1. The module's whole argument rests on an inference from
// artefacts to organisms, and that inference is strong for some conclusions
// and worthless for others. Rather than assert this in prose, lay every
// conclusion type on one grid with its strength attached, so the reader can
// see which rungs the rest of the module actually stands on.

export const controls = [
  { id: 'kind', label: 'Show inferences from', type: 'select', value: 'all',
    options: [{value:'all',   label:'Both success and failure'},
              {value:'succ',  label:'An engineered success'},
              {value:'fail',  label:'An engineered failure'}] },
];

// [source, conclusion, strength, why]
const R = [
 ['success','the problem is solvable from this information alone','strong',
  'an existence proof; no assumption about biology is needed'],
 ['success','this information suffices — nothing else is required','strong',
  'the artefact had access to nothing else, so the rest is optional'],
 ['success','biology solves it the same way','weak',
  'many algorithms compute one function; the aeroplane objection'],
 ['success','the biological mechanism is what the artefact uses','none',
  'implementation level: engineered substrate shares nothing with neural'],
 ['success','the design is forced, if convergent under disjoint constraints','strong',
  'the shared cause must lie in what the two systems share: the task'],
 ['fail','the problem is unsolvable','none',
  'absence of evidence; effort may simply not have been spent'],
 ['fail','the difficulty is located where the effort stalls','moderate',
  'only if the effort was serious and the stall is at one consistent place'],
 ['fail','the missing ingredient is not a biological constraint','strong',
  'the artefact faces no metabolism, no evolution, no development'],
 ['fail','the missing ingredient is whatever the successes had and this lacks','moderate',
  'a differential argument; it needs the rival differences ruled out'],
];
const COL={strong:'series-1',moderate:'series-2',weak:'series-4',none:'series-3'};

export function draw(root, values, { createDiagram }) {
  const f = values.kind ?? 'all';
  const rows = R.filter(r => f === 'all' || (f === 'succ' ? r[0] === 'success' : r[0] === 'fail'));
  const d = createDiagram(root, { width: 740, height: 64 + rows.length * 36,
    title: 'What an artefact licenses you to conclude about an organism' });

  rows.forEach((r, i) => {
    const y = 46 + i * 36;
    d.text(14, y, r[0] === 'success' ? 'worked' : 'stalled', { anchor: 'start', className: 'head' });
    d.blob(92, y - 4, 7, { className: r[2] === 'none' || r[2] === 'weak' ? 'dim' : 'active' });
    d.text(110, y, r[1], { anchor: 'start' });
    d.connect({ x: 470, y: y - 4 }, { x: 494, y: y - 4 }, { sign: 'excite', className: COL[r[2]] });
    d.text(506, y, r[2] + ' — ' + r[3], { anchor: 'start', className: COL[r[2]] });
  });

  const n = document.createElement('p'); n.className = 'x-figure-note';
  n.innerHTML = f === 'all'
    ? `<strong>The rungs are not equally sound, and this module deliberately stands on only three of them.</strong> ` +
      `An engineered success is a strong existence proof and a strong sufficiency claim, and near-worthless as ` +
      `evidence about mechanism. An engineered failure proves nothing about solvability at all — but it does ` +
      `establish, cleanly, that whatever is missing is <em>not</em> one of the constraints biology labours under, ` +
      `because the artefact labours under none of them.` +
      `<br><br>Note which row carries the module's central section: <em>the missing ingredient is whatever the ` +
      `successes had and this lacks</em>, rated only <strong>moderate</strong>, because a differential argument is ` +
      `worth exactly as much as its list of ruled-out alternatives. §12.4 spends itself on that list.`
    : f === 'succ'
    ? `Success is <strong>over-determined</strong>. Many different systems compute the same function, so a working ` +
      `artefact constrains the problem far more than it constrains the solution. The one strong mechanistic rung ` +
      `is convergence under disjoint constraints — if two systems that share nothing but the task arrive at the ` +
      `same structure, the task is doing the work. That is the form of the CNN / visual-cortex argument in §12.2, ` +
      `and it is why that argument is worth more than a resemblance.`
    : `Failure is the <strong>informative direction here, and the fragile one</strong>. It cannot show the problem ` +
      `is unsolvable — nobody has proved that, and nobody could. What it can do is subtract explanations: an ` +
      `engineered system has no metabolic budget, no evolutionary history, no developmental programme and no ` +
      `200 ms deadline, so if it stalls in the same place biology stalls, none of those can be the whole story. ` +
      `The remaining risk is that the effort was never serious, which is the commercial-pull objection §12.4 ` +
      `treats as the strongest rival.`;
  root.appendChild(n);
  const c = document.createElement('p'); c.className = 'x-figure-credit';
  c.textContent = 'Constructed for this course. Strength ratings are the authors’ and are the argument, not a summary of one.';
  root.appendChild(c);
}
