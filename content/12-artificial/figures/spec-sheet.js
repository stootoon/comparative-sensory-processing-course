// What a solved machine olfaction would actually require, itemised.
//
// Serves §12.5. The section's argument is that the pieces are separable and
// that they buy different goods at very different prices — so the figure sorts
// them by what you are trying to buy rather than by how they would appear in a
// grant application. The punchline is visible in the 'theory' view: the
// cheapest component list is the one that buys the normative account, because
// it needs no labels.

export const controls = [
  { id: 'buying', label: 'Sort by what you are trying to buy', type: 'select', value: 'both',
    options: [{ value: 'both',   label: 'Everything — the full specification' },
              { value: 'theory', label: 'Only what a normative theory needs' },
              { value: 'eng',    label: 'Only what a working device needs' }] },
];

// [component, buys, cost, gap, one-line spec]
const SPEC = [
  ['A transfer standard', 'both', 'low', 'Gap 1+4',
   'a defined set of reference volatiles at defined concentrations, so any device can be expressed in common coordinates'],
  ['A characterised sensor array', 'eng', 'high', 'Gap 1',
   'broad, diverse, drift-modelled tuning — selectivity is not the requirement, device-independence is'],
  ['Unlabelled scene compositions', 'theory', 'medium', 'Gap 1',
   'GC-MS composition of air from real environments, densely sampled in time — this is p(x), and it needs no labels at all'],
  ['Source-labelled pairs', 'eng', 'very high', 'Gap 1',
   'the same samples with what was actually in the room — this is p(y|x), and every label costs an instrument run'],
  ['A receptor forward model', 'theory', 'medium', 'Gap 1',
   'composition → receptor activation, including the non-additivity; without it the ensemble cannot be pushed through the array'],
  ['A benchmark task and split', 'both', 'very low', 'Gap 4',
   'held-out test set, agreed metric, and splits by environment and device so that transfer is what is scored'],
  ['An interchange representation', 'both', 'very low', 'Gap 4',
   'composition as the common denominator — agreeing on a format does not require solving odour space'],
];
const COST = { 'very low': 'series-1', low: 'series-1', medium: 'series-2', high: 'series-4', 'very high': 'series-3' };

export function draw(root, values, { createDiagram }) {
  const b = values.buying ?? 'both';
  const rows = SPEC.filter(r => b === 'both' || r[1] === b || r[1] === 'both');
  const d = createDiagram(root, { width: 760, height: 86 + rows.length * 46,
    title: 'The specification, itemised by what it buys and what it costs' });

  rows.forEach((r, i) => {
    const y = 56 + i * 46;
    d.text(14, y, r[0], { anchor: 'start', className: 'head' });
    d.blob(226, y - 4, 7, { className: r[2] === 'very high' || r[2] === 'high' ? 'dim' : 'active' });
    d.text(242, y, r[2] + ' cost', { anchor: 'start', className: COST[r[2]] });
    d.text(344, y, r[3], { anchor: 'start', className: 'series-4' });
    d.connect({ x: 424, y: y - 4 }, { x: 448, y: y - 4 }, { sign: 'excite', className: COST[r[2]] });
    d.text(460, y, r[4].length > 62 ? r[4].slice(0, 62) + '…' : r[4], { anchor: 'start' });
    d.text(460, y + 17, r[4].length > 62 ? r[4].slice(62) : '', { anchor: 'start', className: 'dim' });
  });

  const n = document.createElement('p'); n.className = 'x-figure-note';
  n.innerHTML = b === 'both'
    ? `<strong>Seven components, and they are separable.</strong> The field discusses this as one large undertaking, ` +
      `which makes it look unfundable; itemised, two of the seven cost almost nothing and one of them — the ` +
      `transfer standard — is a precondition for everything else being reusable.` +
      `<br><br>Note where the expense actually sits. <em>Source-labelled pairs</em> are the single most expensive ` +
      `item, because every label costs an instrument run rather than two seconds of a human's attention. Now ` +
      `switch to "only what a normative theory needs" and watch that row disappear.`
    : b === 'theory'
    ? `<strong>This is the section's punchline.</strong> The components a normative theory needs are cheaper than the ` +
      `components a working device needs, and the reason is that efficient-coding theory optimises against the ` +
      `<em>unlabelled</em> input distribution. No annotation. No panel. No agreement about what the answer is. ` +
      `Air samples, composition, a receptor model, and a common format.` +
      `<br><br>Which reframes §13.7's Gap 1 in a useful way: the course has been describing the missing database as ` +
      `a heroic decade-long effort, and the version that unblocks the <em>theory</em> is a substantially smaller ` +
      `object than the version that unblocks the <em>engineering</em>. The expensive part is the part this course ` +
      `does not need.`
    : `A working device needs the labels, and the labels are where the cost is — the conditional p(y|x) rather than ` +
      `the marginal p(x). It also needs a device-independent sensor array, which is the hardest item here and the ` +
      `one §12.4 treats as a live rival explanation of the whole gap.` +
      `<br><br>Worth noticing: a system built from these rows alone could work beautifully and yield <em>no</em> ` +
      `normative account whatever. That is the objection in §12.4's callout, expressed as a purchasing decision.`;
  root.appendChild(n);
  const c = document.createElement('p'); c.className = 'x-figure-credit';
  c.textContent = 'Specification constructed for this course. Cost ratings are relative and are an argument rather than an estimate.';
  root.appendChild(c);
}
