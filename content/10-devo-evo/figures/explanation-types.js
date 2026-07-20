// Three kinds of explanation for a design feature, and how to tell them apart.
//
// Serves §10.1. The course has been running one explanation type — optimality —
// for eight modules. This lays the other two beside it on the same features, so
// the reader can see that for most olfactory design facts, more than one
// explanation is live and nobody has run the test that separates them.

export const controls = [
  { id: 'show', label: 'Show', type: 'select', value: 'all',
    options: [{value:'all',label:'All three explanation types'},
              {value:'opt',label:'Optimality — the design is good'},
              {value:'dev',label:'Developmental accessibility — the design is cheap to build'},
              {value:'hist',label:'Historical contingency — the design is what was inherited'}] },
  { id: 'sort', label: 'Order features by', type: 'select', value: 'settled',
    options: [{value:'settled',label:'How settled the explanation is'},
              {value:'listed',label:'Listed order'}] },
];

// [feature, best-supported type, how settled 0-3, the discriminating test]
const F=[
 ['Retinal centre–surround','opt',3,'measured ensemble + advance prediction of the SNR crossover'],
 ['Cochlear filter bandwidths','opt',3,'derived from natural sound before comparison with biology'],
 ['Vestibular cue weighting','opt',3,'weights shift by a predicted amount when reliability is manipulated'],
 ['Bitter receptors collapse','opt',2,'receptor swap: behaviour follows the cell, not the ligand'],
 ['KC connection degree ~6–7','opt',2,'degree predicted from a dimensionality argument, then measured'],
 ['Large OR repertoire','opt',1,'repertoire size should track ecological demand, not phylogeny'],
 ['One receptor per neuron','opt',1,'no test — the alternatives are not separated'],
 ['Glomerular convergence','dev',1,'is convergence needed for SNR, or only for wiring a rule?'],
 ['Absence of a chemotopic map','dev',2,'no metric on the array, so no wiring rule to lay one out'],
 ['Stochastic receptor choice','dev',1,'is the stochasticity load-bearing or a cheap way to tile?'],
 ['Adult bulbar neurogenesis','dev',0,'non-stationarity account makes no quantitative prediction yet'],
 ['Two synapses to cortex','hist',1,'shallow in every vertebrate; no task argument distinguishes it'],
 ['Three-layer piriform','hist',1,'shared with other palaeocortex regardless of what it computes'],
 ['No obligatory thalamic relay','hist',1,'antiquity vs deadline — touch and cerebellum break the tie'],
 ['Insect ORs are ion channels','hist',3,'lineage-specific invention; nothing normative selects topology'],
];
const COL={opt:'series-1',dev:'series-2',hist:'series-3'};
const NAME={opt:'optimality',dev:'developmental accessibility',hist:'historical contingency'};

export function draw(root, values, { createDiagram }) {
  const f=values.show??'all';
  let rows=F.filter(r=>f==='all'||r[1]===f);
  if((values.sort??'settled')==='settled') rows=[...rows].sort((a,b)=>b[2]-a[2]);
  const d=createDiagram(root,{width:740,height:64+rows.length*30,
    title:'Design features by the kind of explanation that best accounts for them'});
  d.text(14,22,'feature',{anchor:'start',className:'head'});
  d.text(250,22,'explanation',{anchor:'start',className:'head'});
  d.text(372,22,'what would settle it',{anchor:'start',className:'head'});
  rows.forEach((r,i)=>{
    const y=48+i*30;
    d.text(14,y,r[0],{anchor:'start'});
    d.blob(236,y-4,3+r[2]*2.2,{className:r[2]>=2?'active':'dim'});
    d.text(250,y,NAME[r[1]],{anchor:'start',className:COL[r[1]]});
    d.text(372,y,r[3],{anchor:'start',className:r[2]>=2?'':'dim'});
  });
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = f==='all'
    ? `<strong>Marker size is how settled the explanation is, not how often it is asserted.</strong> Note where the ` +
      `large markers sit: on the modalities with measured ensembles, and on the one insect fact that nobody has ` +
      `tried to make normative. Almost every olfactory row is a small marker — meaning at least two of the three ` +
      `explanation types remain live and no published experiment separates them.<br><br>` +
      `Filter by each type in turn. <em>Optimality</em> answers "why is this design good?"; <em>developmental ` +
      `accessibility</em> answers "why is this design reachable?"; <em>historical contingency</em> answers "why ` +
      `this design and not an equally good one?" They are not rivals in general — a feature can be all three — ` +
      `but they are rivals for any particular feature, and treating one as the default is how adaptationist ` +
      `storytelling gets in.`
    : f==='opt'
    ? `The optimality rows with large markers are exactly the ones where §0.2's criteria are met: a measured ` +
      `ensemble, a stated objective, a prediction with a sign and a magnitude made before the measurement. The ` +
      `small-marker optimality rows are olfactory, and they are small for one reason — nobody stated what would ` +
      `have counted as the theory failing.`
    : f==='dev'
    ? `These are the features this module argues have been misfiled. Each has been offered an optimality story ` +
      `(convergence for SNR, neurogenesis for capacity), and for each there is a competing account in which the ` +
      `feature is what you get for free once you accept how the system has to be built. <strong>Developmental ` +
      `accessibility is not a weaker explanation than optimality</strong> — it is a constraint on which optima ` +
      `are reachable, which makes it prior.`
    : `Contingency is the explanation of last resort and should be. But it is the correct explanation sometimes, ` +
      `and the bottom row is a case where it is not seriously disputed: insect odorant receptors are ion channels ` +
      `with inverted membrane topology because that is what that lineage recruited, and no coding argument ` +
      `predicts it. Holding that row in mind is what keeps §10.4's convergence argument honest.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Compiled from the §12 sections across the course. "How settled" is this course’s judgement against §0.2, not a literature consensus.';
  root.appendChild(c);
}
