// The combinatorial receptor code, made concrete.
//
// "One receptor responds to many odorants, one odorant activates many
// receptors" is easy to say and hard to picture. Showing the actual activation
// pattern across a glomerular array — and letting the reader mix two odorants
// and watch the patterns overlap — turns it into something they can reason
// about, including why mixture separability improves with dimensionality.

export const controls = [
  {
    id: 'odourA',
    label: 'Odorant A',
    min: 0, max: 11, step: 1, value: 0,
    format: (v) => `#${Math.round(v) + 1}`,
  },
  {
    id: 'odourB',
    label: 'Odorant B (mixture partner)',
    min: 0, max: 11, step: 1, value: 6,
    format: (v) => `#${Math.round(v) + 1}`,
  },
  {
    id: 'nReceptors',
    label: 'Receptor types in the array',
    min: 3, max: 40, step: 1, value: 24,
    format: (v) => `${Math.round(v)}`,
  },
];

// Deterministic pseudo-random affinity: receptor r's response to odorant o.
// Broad and disordered, as measured affinity matrices are.
function affinity(receptor, odour) {
  const v = Math.sin(receptor * 12.9898 + odour * 78.233) * 43758.5453;
  const u = v - Math.floor(v);
  // Heavy-tailed: most receptors respond weakly, a few strongly.
  return Math.pow(u, 2.2);
}

export function draw(root, values, { createPlot }) {
  const n = Math.round(values.nReceptors);
  const a = Math.round(values.odourA);
  const b = Math.round(values.odourB);

  const respA = Array.from({ length: n }, (_, i) => affinity(i, a));
  const respB = Array.from({ length: n }, (_, i) => affinity(i, b));

  const plot = createPlot(root, {
    width: 660, height: 300,
    margin: { top: 20, right: 24, bottom: 52, left: 62 },
    x: { domain: [-0.5, n - 0.5], label: 'glomerulus (receptor type)', tickCount: Math.min(n, 12) },
    y: { domain: [0, 1.05], label: 'activation' },
    title: 'Activation pattern across the glomerular array',
  });

  const barW = Math.max(3, Math.min(16, 520 / n));
  plot.bars(respA.map((v, i) => [i, v]), { className: 'series-1', barWidth: barW });
  plot.bars(respB.map((v, i) => [i, v]), { className: 'series-2', barWidth: barW * 0.5 });

  plot.legend([
    { label: `odorant A (#${a + 1})`, className: 'series-1' },
    { label: `odorant B (#${b + 1})`, className: 'series-2' },
  ]);

  // Overlap: cosine similarity, the quantity that governs confusability.
  const dot = respA.reduce((s, v, i) => s + v * respB[i], 0);
  const na = Math.sqrt(respA.reduce((s, v) => s + v * v, 0));
  const nb = Math.sqrt(respB.reduce((s, v) => s + v * v, 0));
  const cos = dot / (na * nb);

  const strongA = respA.filter((v) => v > 0.25).length;

  const note = document.createElement('p');
  note.className = 'x-figure-note';
  note.innerHTML =
    `Odorant A drives <strong>${strongA} of ${n}</strong> receptor types appreciably — no single glomerulus ` +
    `<em>is</em> the odorant, and no glomerulus is private to it. Identity is the whole pattern. ` +
    `<br><br>Overlap between A and B: <strong>${cos.toFixed(2)}</strong> ` +
    `(1 = indistinguishable, 0 = no shared receptors). ` +
    `<strong>Now drag the receptor count down to 3.</strong> Overlap climbs, because with few broad ` +
    `channels almost every odorant drives almost every one. That is the quantitative reason olfaction ` +
    `keeps hundreds of receptor types while vision manages with three: in vision the natural ensemble ` +
    `really is low-dimensional, so three channels lose little. In chemistry there is no such saving ` +
    `structure, so dimensions cannot be given up.`;
  root.appendChild(note);

  const credit = document.createElement('p');
  credit.className = 'x-figure-credit';
  credit.textContent =
    'Schematic affinities with the broad, disordered, heavy-tailed character reported for real receptor ' +
    'arrays; illustrates the combinatorial coding scheme of Malnic et al. (1999).';
  root.appendChild(credit);
}
