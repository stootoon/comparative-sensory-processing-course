// What it costs a genome to specify a wiring pattern, as a function of array size.
//
// Serves §9.2. The argument is that an ordered array admits a RULE and an
// unordered one does not, and that the difference is not rhetorical — it is
// several orders of magnitude of specification information. Slide the array
// size out to the olfactory range and watch which curves cross the budget.

export const controls = [
  { id: 'k', label: 'Parameters per gradient rule', min: 2, max: 40, step: 2, value: 8,
    format: (v) => `${v}` },
  { id: 'budget', label: 'Assume the genome can devote', type: 'select', value: 'reg',
    options: [{value:'all',label:'the whole genome (~6×10⁹ bits)'},
              {value:'reg',label:'wiring-relevant regulatory info (~10⁷ bits)'},
              {value:'tight',label:'one gene family’s worth (~10⁵ bits)'}] },
];

const BUDGET={all:6.4e9,reg:1e7,tight:1e5};
const BLAB={all:'whole genome',reg:'wiring-relevant regulatory information',tight:'one gene family'};

// log2(N!) by Stirling — the cost of naming an arbitrary bijection.
const logFact=(n)=> n<2?0:(n*Math.log2(n)-n*Math.log2(Math.E)+0.5*Math.log2(2*Math.PI*n));

export function draw(root, values, { createPlot, sample }) {
  const k=values.k??8;
  const bkey=values.budget??'reg';
  const B=BUDGET[bkey];

  const plot=createPlot(root,{width:700,height:400,
    margin:{top:22,right:26,bottom:52,left:78},
    x:{domain:[4,3000],scale:'log',label:'number of distinct receptor types, N'},
    y:{domain:[1,1e8],scale:'log',label:'bits to specify the wiring'},
    title:'Specification cost of three ways to wire a receptor array'});

  // Every synapse named individually: an N × N connection matrix.
  plot.line(sample(4,3000,220,(n)=>Math.min(n*n,1e9)),{className:'series-3'});
  // The type → target map named as an arbitrary permutation.
  plot.line(sample(4,3000,220,(n)=>Math.max(logFact(n),1)),{className:'series-2'});
  // A rule: a handful of gradients plus a monotone read-out.
  plot.line(sample(4,3000,220,()=>k*12),{className:'series-1'});

  plot.hline(B,{label:`budget: ${BLAB[bkey]}`,className:'marker'});
  plot.vline(6,{label:'taste (~5)',dashed:true});
  plot.vline(400,{label:'human ORs',dashed:true});
  plot.vline(1100,{label:'mouse ORs',dashed:true});

  plot.legend([
    {label:'enumerate every connection (N × N)',className:'series-3'},
    {label:'enumerate the type → target map (log₂ N!)',className:'series-2'},
    {label:`specify a rule: ${k} gradient parameters`,className:'series-1'},
  ]);

  const nMouse=1100;
  const cEnum=nMouse*nMouse, cPerm=logFact(nMouse), cRule=k*12;
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `At the mouse repertoire (N ≈ 1100), naming every connection costs about ` +
    `<strong>${cEnum.toExponential(1)} bits</strong>, naming the type→target map as an arbitrary permutation costs ` +
    `about <strong>${cPerm.toExponential(1)} bits</strong>, and a gradient rule costs ` +
    `<strong>${cRule} bits</strong> — flat in N, which is the whole point. ` +
    (cPerm>B
      ? `Against the selected budget the permutation is <strong>over budget by a factor of ${(cPerm/B).toPrecision(2)}</strong>.`
      : `Against the selected budget the permutation is affordable, by a factor of ${(B/cPerm).toPrecision(2)} — ` +
        `which is why the budget assumption has to be stated rather than waved at.`) +
    `<br><br>The rule curve is flat because a rule does not scale with the thing it wires: "grow towards higher ` +
    `ligand concentration" costs the same whether it positions ten cells or ten thousand. <strong>But a rule ` +
    `requires an ordering to be a rule about.</strong> Remove the metric and the middle curve is the best you can ` +
    `do genetically — which is the olfactory situation, and which is why olfaction sorts its map out with activity ` +
    `instead of specifying it.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Order-of-magnitude estimates. The budget lines are deliberately crude — the argument is about the slopes, not the intercepts.';
  root.appendChild(c);
}
