// The inversion: gain goes UP, not down.
//
// Every other §10 in this course plots a gain that falls under sustained
// input. This one plots the same axes for nociception and gets the opposite
// sign, and the point of making it interactive is that the sign flip is
// derivable: it depends entirely on whether the signal's decision value
// decays with time. Slide the persistence of the underlying damage and watch
// the optimal policy cross over.

export const controls = [
  { id: 'persist', label: 'How long the underlying cause persists (s, log)',
    min: -1, max: 6, step: 0.1, value: 4, format: v => `10^${v.toFixed(1)} s` },
  { id: 'show', label: 'Show', type: 'select', value: 'both',
    options: [
      { value: 'both',  label: 'Adaptation and sensitization together' },
      { value: 'optimal', label: 'The optimal gain, derived' },
    ] },
];

export function draw(root, values, { createPlot, sample }) {
  const tau = Math.pow(10, values.persist);      // persistence of the cause
  const tSense = 1e2;                            // sensitization time constant, s
  const tAdapt = 3;                              // adaptation time constant, s

  if ((values.show ?? 'both') === 'both') {
    const plot = createPlot(root, {
      width: 700, height: 340,
      margin: { top: 20, right: 30, bottom: 54, left: 66 },
      x: { domain: [0.1, 1e5], scale: 'log', label: 'time since stimulus onset (s)' },
      y: { domain: [0, 4], label: 'gain (relative to baseline)' },
      title: 'Sustained input: every other modality goes down, this one goes up',
    });
    plot.line(sample(0.1, 1e5, 260, t => 0.15 + 0.85 * Math.exp(-t / tAdapt)),
      { className: 'series-1' });
    plot.line(sample(0.1, 1e5, 260, t => 1 + 2.2 * (1 - Math.exp(-t / tSense)) * Math.exp(-t / (8 * tau))),
      { className: 'series-2' });
    plot.line(sample(0.1, 1e5, 260, t => 1 + 2.6 * (1 - Math.exp(-t / (12 * tSense)))),
      { className: 'series-3' });
    plot.hline(1, { className: 'marker', label: 'baseline' });
    plot.legend([
      { label: 'vision / audition / touch — adaptation', className: 'series-1' },
      { label: 'nociception, injury that heals — sensitization then resolution', className: 'series-2' },
      { label: 'nociception, cause never resolved — chronic', className: 'series-3' },
    ]);
  } else {
    // Optimal gain when the signal's decision value is proportional to the
    // posterior probability that the cause is still present and unaddressed.
    const plot = createPlot(root, {
      width: 700, height: 340,
      margin: { top: 20, right: 30, bottom: 54, left: 66 },
      x: { domain: [0.1, 1e5], scale: 'log', label: 'time since stimulus onset (s)' },
      y: { domain: [0, 4], label: 'optimal gain' },
      title: 'Optimal gain when the signal reports an unresolved cause',
    });
    // If the cause is short-lived, repeated input is redundant → reduce gain.
    // If it persists and demands action, repeated input means the problem is
    // unaddressed → raise gain.
    const opt = t => {
      const stillThere = Math.exp(-t / tau);          // P(cause persists)
      const redundancy = 1 / (1 + t / tAdapt);        // novelty of the report
      return 0.2 + 3.2 * stillThere * (1 - 0.85 * redundancy * (1 - stillThere));
    };
    plot.line(sample(0.1, 1e5, 260, opt), { className: 'series-2' });
    plot.hline(1, { className: 'marker', label: 'baseline' });
    plot.vline(tau, { className: 'marker', label: 'persistence of the cause' });
  }

  const n = document.createElement('p');
  n.className = 'x-figure-note';
  const long = tau > 1e3;
  n.innerHTML =
    `With the cause persisting for about <strong>${tau < 60 ? tau.toFixed(0) + ' s' : tau < 86400 ? (tau / 3600).toFixed(1) + ' h' : (tau / 86400).toFixed(0) + ' days'}</strong>, ` +
    (long
      ? 'the optimal policy is to <strong>raise</strong> gain: continued input means the problem is still ' +
        'there and has not been dealt with, so each additional report carries decision value rather than ' +
        'redundancy. Habituating would amount to concluding that an unrepaired wound had stopped mattering.'
      : 'the optimal policy tends back toward <strong>reducing</strong> gain: the cause is transient, so ' +
        'continued input is largely redundant with what has already been reported, and the usual efficient-' +
        'coding argument applies again.') +
    '<br><br><strong>The sign of the adaptation is not a fact about nociception — it is a consequence of the ' +
    'timescale over which the reported variable stays actionable.</strong> That is the claim this figure ' +
    'exists to make testable, and it predicts that any modality reporting a slow, unresolved, ' +
    'action-demanding state should sensitize rather than adapt. Itch and nausea are the obvious places ' +
    'to look; §8.11 asks whether olfaction has such a case.';
  root.appendChild(n);

  const c = document.createElement('p');
  c.className = 'x-figure-credit';
  c.textContent =
    'Illustrative curves computed from the equations in the source, not fits to data. Time constants are ' +
    'order-of-magnitude, after the peripheral and central sensitization time courses described in Kandel, ' +
    'Principles of Neural Science 6th ed., ch. 20.';
  root.appendChild(c);
}
