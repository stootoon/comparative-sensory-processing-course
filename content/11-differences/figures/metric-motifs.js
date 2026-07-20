// Which metric-dependent motifs survive the loss of a metric.
//
// The course's central claim is that almost every familiar computational motif
// presupposes a metric on the receptor array. That claim is only useful if it
// is audited motif by motif: each one uses a DIFFERENT property of the metric,
// and they therefore fail — or survive — for different reasons. This figure is
// that audit, laid out so the three verdicts can be counted.

export const controls = [
  { id: 'show', label: 'Show motifs that', type: 'select', value: 'all',
    options: [{value:'all',  label:'All — the full audit'},
              {value:'fails',label:'Fail outright without a metric'},
              {value:'rederived',label:'Survive in re-derived form'},
              {value:'free', label:'Never needed a metric at all'}] },
  { id: 'sortBy', label: 'Order by', type: 'select', value: 'verdict',
    options: [{value:'verdict',label:'Verdict'},
              {value:'assumption',label:'Which property of the metric it uses'}] },
];

// [motif, the property of the metric it actually consumes, verdict, what happens in olfaction]
const M=[
 ['Centre–surround',      'neighbourhood', 'fails',
  'no neighbourhood; but divisive normalisation over ALL glomeruli does the gain-control half [@olsen2010]'],
 ['Topographic map',      'neighbourhood', 'fails',
  'glomerular position is stereotyped but not similarity-ordered'],
 ['Convolution',          'translation',   'fails',
  'no group action on receptor identity to be equivariant to'],
 ['Translation invariance','translation',  'fails',
  'nothing translates; the invariance wanted is over concentration, not position'],
 ['Interpolation',        'betweenness',   'fails',
  'no "between" two receptors — but "between" two ODOURS may still exist perceptually'],
 ['Smoothness prior',     'betweenness',   'rederived',
  'replaced by sparsity: few sources active, not neighbouring channels similar'],
 ['Receptive field',      'neighbourhood', 'rederived',
  'survives as a tuning curve over an unordered index set; loses only its picture'],
 ['Efficient coding / whitening','none',   'free',
  'needs only the covariance of receptor activations — index order is irrelevant'],
 ['Opponent axes from PCA','none',         'free',
  'the colour calculation transfers verbatim; blocked on the ensemble, not the metric'],
 ['Divisive normalisation','none',         'free',
  'pool over the whole population; confirmed in the antennal lobe [@olsen2010]'],
 ['Sparse coding',        'none',          'free',
  'dictionary learning never used pixel adjacency, only co-occurrence [@olshausen1996]'],
 ['Random projection / expansion','none',  'free',
  'optimal degree depends on D, not on order [@litwinkumar2017; @caron2013]'],
 ['Predictive subtraction','none',         'free',
  'needs a predictor, not a neighbourhood; cancellation circuits are generic [@cullen2012]'],
 ['Central map of a derived variable','neighbourhood','rederived',
  'bats map echo delay the cochlea never measures — order can be BUILT downstream'],
];

const VERDICT={fails:'series-3', rederived:'series-5', free:'series-1'};
const VLABEL={fails:'fails outright', rederived:'survives, re-derived', free:'never needed one'};

export function draw(root, values, { createDiagram }) {
  const show=values.show??'all';
  let rows=M.filter(m=>show==='all'||m[2]===show);
  if((values.sortBy??'verdict')==='verdict'){
    const rank={fails:0,rederived:1,free:2};
    rows=[...rows].sort((a,b)=>rank[a[2]]-rank[b[2]]);
  } else {
    const rank={neighbourhood:0,translation:1,betweenness:2,none:3};
    rows=[...rows].sort((a,b)=>rank[a[1]]-rank[b[1]]);
  }

  const W=760, cellH=30, left=250;
  const d=createDiagram(root,{width:W,height:78+rows.length*cellH,
    title:'Auditing the central claim, motif by motif'});

  d.text(left-10, 24, 'motif', {anchor:'end', className:'head'});
  d.text(left+16, 24, 'property of the metric it uses', {className:'head'});
  d.text(left+300, 24, 'verdict', {className:'head'});

  rows.forEach((m,i)=>{
    const y=54+i*cellH;
    d.text(left-10, y+4, m[0], {anchor:'end'});
    d.blob(left+4, y, 6, {className: m[2]==='free'?'dim':'active'});
    d.text(left+16, y+4, m[1]==='none'?'— none —':m[1]);
    d.blob(left+292, y, 7, {className:'active'});
    d.text(left+306, y+4, VLABEL[m[2]]);
  });

  const n=document.createElement('p'); n.className='x-figure-note';
  const nFail=M.filter(m=>m[2]==='fails').length;
  const nRe=M.filter(m=>m[2]==='rederived').length;
  const nFree=M.filter(m=>m[2]==='free').length;
  n.innerHTML = show==='all'
    ? `Of ${M.length} motifs audited: <strong>${nFail} fail outright, ${nRe} survive in re-derived form, and ` +
      `${nFree} never consumed a metric in the first place.</strong> That last count is the honest correction to a ` +
      `strong reading of the central claim. The motifs that fail all consume one of three specific properties — ` +
      `neighbourhood, a translation group, or betweenness — and none of the survivors consumes any of them. ` +
      `Switch the ordering to "which property" and the pattern is exact: the failures cluster, and everything in the ` +
      `"none" block transfers to olfaction unchanged.`
    : show==='fails'
    ? `These are the genuine casualties. Each names the specific property it needs, which is more useful than the ` +
      `blanket claim: the fix for a neighbourhood-consumer is not the fix for a translation-consumer.`
    : show==='rederived'
    ? `The interesting middle. A smoothness prior becomes a sparsity prior — both are priors that most of the signal ` +
      `is explained by few degrees of freedom, and only the spatial version needs adjacency. A receptive field ` +
      `becomes a tuning curve over an index set. And a map can be built centrally over a variable the receptors ` +
      `never measured, which is what bats do with echo delay.`
    : `The survivors. Every one of these is defined by second-order or higher statistics of the population, never by ` +
      `the ordering of the index. This is why §13's flagship calculation — opponent axes from the covariance of ` +
      `receptor responses to natural scenes — is blocked on the missing ensemble and not on the missing metric.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Verdicts assigned by this course from the per-module analyses; they are an argument, not a measurement.';
  root.appendChild(c);
}
