// The loss function as a design variable.
//
// Where the two errors cost the same, the optimal decision sits at the crossing
// of the likelihoods and the code should preserve detail. Where one error is
// catastrophic, the criterion moves, sensitivity is bought at the cost of
// specificity, and distinctions that do not change the action become worthless.
// This figure is the calculation behind gustation's twenty-five bitter
// receptors converging on one axis.

export const controls = [
  { id: 'logL', label: 'Loss ratio (miss : false alarm)', min: 0, max: 6, step: 0.25, value: 3,
    format: v=>`10^${v.toFixed(2)} : 1` },
  { id: 'd', label: "Sensory discriminability d'", min: 0.5, max: 4, step: 0.25, value: 1.5,
    format: v=>v.toFixed(2) },
];

// [label, log10 loss ratio, note]
const CASES=[
 ['Sweet detection',        0.3, 'both errors cheap; a missed calorie and a wasted lick are comparable'],
 ['Vision: object identity',0.5, 'open-ended consumers; no privileged error'],
 ['Proprioception',         0.7, 'controller wants an unbiased estimate, not a biased one'],
 ['Odour identity',         1.0, 'depends entirely on which consumer — unresolved'],
 ['Bitter rejection',       5.0, 'one swallowed toxin against many rejected safe foods'],
];

export function draw(root, values, { createPlot, sample }) {
  const logL=values.logL??3, dp=values.d??1.5;
  const L=10**logL;

  // Optimal criterion in units of d': c* = log(L)/d' + d'/2 measured from the
  // noise distribution mean, for equal-variance Gaussian signal detection.
  const crit=lg=>Math.log(10**lg)/dp + dp/2;
  // Resulting hit rate and false alarm rate under that criterion.
  const Phi=z=>0.5*(1+erf(z/Math.SQRT2));
  const erf=x=>{const s=Math.sign(x);x=Math.abs(x);
    const t=1/(1+0.3275911*x);
    const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);
    return s*y;};

  const plot=createPlot(root,{width:700,height:350,
    margin:{top:22,right:34,bottom:56,left:76},
    x:{domain:[0,6],label:'log₁₀ loss ratio — how much worse a miss is than a false alarm'},
    y:{domain:[0,1.02],label:'rate'},
    title:'What an asymmetric loss does to the optimal code'});

  plot.line(sample(0,6,200,lg=>Phi(dp-crit(lg))),{className:'series-1'});
  plot.line(sample(0,6,200,lg=>Phi(-crit(lg))),{className:'series-3'});
  plot.vline(logL,{label:'current'});
  plot.legend([{label:'hit rate — toxins correctly rejected',className:'series-1'},
               {label:'false alarm rate — safe foods rejected',className:'series-3'}]);
  CASES.forEach(c=>plot.annotate(c[1], 0.06, c[0]));

  const hit=Phi(dp-crit(logL)), fa=Phi(-crit(logL));
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `At a loss ratio of ${Math.round(L).toLocaleString()}:1 with d′ = ${dp.toFixed(2)}, the optimal observer rejects ` +
    `<strong>${(hit*100).toFixed(0)}%</strong> of toxins and pays for it by wrongly rejecting ` +
    `<strong>${(fa*100).toFixed(0)}%</strong> of safe foods. Drag the loss ratio down to 1:1 and the two rates ` +
    `converge — the criterion sits at the crossing and the system has no reason to prefer either error. ` +
    `<br><br>The design consequence is the part that matters. Once the criterion is far out on the tail, almost all ` +
    `the achievable improvement comes from <em>detecting more compounds</em> rather than from telling them apart, ` +
    `because the action is identical either way. That is the argument for twenty-five bitter receptors converging ` +
    `on a single axis, and for a single sweet receptor covering a bounded category. <strong>Receptor breadth is ` +
    `allocated by the loss function, not by the chemistry.</strong> <br><br>Note where odour identity sits: ` +
    `unplaced, because it depends on which consumer is asking. Innate-valence pathways should behave like the ` +
    `bitter case and collapse; identity pathways should behave like the vision case and preserve. Both are ` +
    `observed, in different olfactory streams.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Equal-variance Gaussian signal detection; the loss ratios attached to each case are illustrative orders of magnitude, not measurements.';
  root.appendChild(c);
}
