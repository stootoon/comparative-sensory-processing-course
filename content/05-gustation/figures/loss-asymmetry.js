// Why the bitter threshold is so much lower than the sweet threshold.
//
// §5.1 argues the asymmetric loss function explains taste's whole design.
// This makes the argument quantitative: move the cost of a miss and watch the
// optimal decision criterion slide away from the point of equal evidence.

export const controls = [
  { id: 'logCost', label: 'Cost of swallowing a toxin ÷ cost of rejecting food',
    min: 0, max: 5, step: 0.1, value: 3, format: v=>`10^${v.toFixed(1)}` },
  { id: 'sep', label: 'Evidence separation (d′)', min: 0.5, max: 4, step: 0.1, value: 1.8, format: v=>v.toFixed(1) },
];

const gauss=(x,mu,sd)=>Math.exp(-0.5*((x-mu)/sd)**2)/(sd*Math.sqrt(2*Math.PI));

export function draw(root, values, { createPlot, sample }) {
  const ratio=Math.pow(10,values.logCost), d=values.sep;
  // Optimal criterion for unequal costs: shift by ln(ratio)/d′
  const crit = d/2 - Math.log(ratio)/d;

  const plot=createPlot(root,{width:700,height:330,
    margin:{top:20,right:24,bottom:52,left:70},
    x:{domain:[-4,6],label:'evidence that the substance is toxic'},
    y:{domain:[0,0.5],label:'probability density'},
    title:'Where an optimal taster puts the accept/reject boundary'});
  plot.area(sample(-4,6,220,x=>gauss(x,0,1)),{className:'series-3'});
  plot.line(sample(-4,6,220,x=>gauss(x,0,1)),{className:'series-3'});
  plot.area(sample(-4,6,220,x=>gauss(x,d,1)),{className:'series-2'});
  plot.line(sample(-4,6,220,x=>gauss(x,d,1)),{className:'series-2'});
  plot.vline(crit,{className:'marker',label:'optimal criterion'});
  plot.vline(d/2,{className:'marker',label:'equal-evidence point',dashed:true});
  plot.legend([{label:'safe food',className:'series-3'},{label:'toxic',className:'series-2'}]);

  // Error rates at the optimal criterion.
  const erf=z=>{const t=1/(1+0.3275911*Math.abs(z));
    const y=1-((((1.061405429*t-1.453152027)*t+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-z*z);
    return z>=0?y:-y;};
  const Phi=z=>0.5*(1+erf(z/Math.SQRT2));
  const falseAlarm=1-Phi(crit);        // safe food rejected
  const miss=Phi(crit-d);              // toxin swallowed

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `With a toxin costing <strong>${ratio<1e4?ratio.toFixed(0):ratio.toExponential(0)}×</strong> more than a missed ` +
    `meal, the optimal boundary sits well to the <em>left</em> of the equal-evidence point. ` +
    `The result: <strong>${(falseAlarm*100).toFixed(0)}%</strong> of safe foods rejected, to hold toxins swallowed ` +
    `down to <strong>${(miss*100).toFixed(2)}%</strong>. ` +
    `<br><br>That is not a badly-calibrated sensor. It is the correct policy under this loss — and it is why bitter ` +
    `thresholds are orders of magnitude lower than sweet thresholds, why bitter is innately aversive, and why the ` +
    `response is categorical rather than graded. <strong>Slide the cost ratio to 1</strong> and the criterion moves ` +
    `to the middle: a symmetric loss gives a symmetric detector, which is roughly what olfaction has.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Signal-detection calculation generated for this course; illustrates the argument of §5.1.';
  root.appendChild(c);
}
