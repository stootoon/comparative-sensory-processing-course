// The convergence ledger: what insects and vertebrates share, and what each
// shared feature actually licenses.
//
// Serves §10.4. The convergence argument is only as strong as its most SPECIFIC
// shared feature, not its most general one — so this figure grades every row
// twice: is the shared feature specific enough to be informative, and is
// independent origin actually established?

export const controls = [
  { id: 'filter', label: 'Show rows that survive', type: 'select', value: 'all',
    options: [{value:'all',label:'— nothing filtered —'},
              {value:'specific',label:'the "too coarse to be informative" objection'},
              {value:'independent',label:'the "shared ancestry" objection'},
              {value:'both',label:'both objections'}] },
  { id: 'col', label: 'Right-hand column shows', type: 'select', value: 'licence',
    options: [{value:'licence',label:'What the shared feature licenses'},
              {value:'alt',label:'The best non-adaptive alternative explanation'}] },
];

// [feature, vertebrate, insect, specific? , independent origin established?, licence, alternative]
const R=[
 ['Receptor protein family','GPCRs, 7TM','ion channels, inverted topology',1,1,
  'NOTHING — this is a DIVERGENCE, and it is what makes the rest independent',
  'n/a — nobody claims this is convergent'],
 ['Large receptor repertoire','~400–2000 ORs','~60–170 ORs',1,1,
  'that many broad channels are needed for a high-D chemical space',
  'gene families expand where duplication is cheap (§10.3)'],
 ['One receptor per neuron','stochastic choice + lockout','largely fixed, cell-type specified',1,1,
  'the response of a neuron must be attributable to one ligand profile',
  'a decoder that cannot separate mixtures within a cell forces it anyway'],
 ['Like-receptor convergence','~1000:1 onto glomeruli','~50:1 onto glomeruli',1,1,
  'the STRONGEST row: convergence at very different ratios, so not SNR alone',
  'both need an addressable central unit to wire from (§10.2)'],
 ['Glomerular neuropil','olfactory bulb glomeruli','antennal lobe glomeruli',1,1,
  'discrete convergent units are the solution, not merely a solution',
  'developmental self-organisation of like-labelled axons'],
 ['Divisive normalisation','bulbar lateral inhibition','LN-mediated, measured',1,0,
  'gain control on a high-D input is forced by dynamic range',
  'normalisation appears in every sensory system, so this is generic'],
 ['Expansion into a sparse layer','piriform, ~10⁶ cells','mushroom body, ~2×10³ KCs',1,1,
  'expansion recoding is the answer to unordered high-D input',
  'expansion recoding also appears in cerebellum — generic to learning'],
 ['Quasi-random connectivity','piriform: diffuse, non-topographic','KC claws: statistically random',1,1,
  'random projection is right when there is no metric to respect',
  'random is what you get when no rule specifies the wiring (§10.2)'],
 ['Sparse coding downstream','sparse piriform ensembles','very sparse KC responses',1,0,
  'sparsity supports associative learning on arbitrary categories',
  'sparsity is generic across cortex and says little about olfaction'],
 ['Hierarchical processing','yes','yes',0,0,
  'nothing — true of every nervous system',
  'the level of description is too coarse to carry information'],
 ['Valence / identity split','cortical amygdala vs piriform','lateral horn vs mushroom body',1,1,
  'conflicting loss functions force a split (§5.1, §12.5)',
  'innate and learned pathways separate in every modality'],
 ['Active sampling rhythm','sniffing, 2–10 Hz','antennal flicking / wing fanning',0,1,
  'weak — the rhythms are not obviously the same computation',
  'motor systems oscillate; the band may be a body-mechanics accident'],
];

export function draw(root, values, { createDiagram }) {
  const f=values.filter??'all';
  const showAlt=(values.col??'licence')==='alt';
  const rows=R.filter(r=>
    f==='all' || (f==='specific'&&r[3]) || (f==='independent'&&r[4]) || (f==='both'&&r[3]&&r[4]));

  const d=createDiagram(root,{width:760,height:70+rows.length*30,
    title:'The convergence ledger — insects and vertebrates, feature by feature'});
  d.text(12,20,'feature',{anchor:'start',className:'head'});
  d.text(150,20,'vertebrate',{anchor:'start',className:'head'});
  d.text(300,20,'insect',{anchor:'start',className:'head'});
  d.text(440,20,showAlt?'best non-adaptive alternative':'what it licenses',{anchor:'start',className:'head'});

  rows.forEach((r,i)=>{
    const y=48+i*30;
    const strong=r[3]&&r[4];
    d.text(12,y,r[0],{anchor:'start',className:strong?'head':''});
    d.text(150,y,r[1],{anchor:'start',className:'series-1'});
    d.text(300,y,r[2],{anchor:'start',className:'series-3'});
    d.blob(428,y-4,strong?7:4,{className:strong?'active':'dim'});
    d.text(440,y,showAlt?r[6]:r[5],{anchor:'start',className:strong?'':'dim'});
  });

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML = f==='all'
    ? `<strong>Read the top row first.</strong> The receptor proteins are not homologous — vertebrate ORs are ` +
      `7-transmembrane GPCRs, insect ORs are heteromeric ligand-gated ion channels with inverted membrane ` +
      `topology. That divergence is what licences everything below it: two lineages built from different parts ` +
      `and arrived at the same architecture.<br><br>` +
      `Now filter. <em>"Too coarse"</em> removes hierarchical processing and the sampling rhythm — real ` +
      `similarities that are true of too many systems to constrain anything. <em>"Shared ancestry"</em> removes ` +
      `normalisation and sparsity, which appear in every sensory system and so may be inherited from a common ` +
      `neural toolkit rather than independently invented for chemistry. <strong>Apply both filters and eight rows ` +
      `survive.</strong> Those eight are the argument.`
    : f==='both'
    ? `<strong>This is the surviving argument, and it is narrower than the usual telling.</strong> Seven shared ` +
      `features, under the top row that licences them: ` +
      `large repertoire, one receptor per neuron, like-receptor convergence, discrete glomeruli, expansion into a ` +
      `large layer, quasi-random connectivity, and the valence/identity split. Two lineages separated by ~600 My, ` +
      `built from non-homologous receptor proteins, arriving at all of them.<br><br>` +
      `Switch the right-hand column to the alternatives. Note that <strong>several rows have a developmental ` +
      `alternative rather than an adaptive one</strong> — convergence, glomeruli and randomness all fall out of ` +
      `§10.2's specifiability argument without any optimality premise. That does not defeat the convergence ` +
      `inference; it re-describes what the constraint is. The problem forces the solution, but the forcing may run ` +
      `through what is buildable rather than through what is best.`
    : f==='specific'
    ? `Removing the coarse rows costs two entries and almost no force, which is a good sign — the argument was ` +
      `never resting on "both have hierarchies". The test to apply to any convergence claim: <strong>could you ` +
      `state the shared feature precisely enough that a system might have failed to have it?</strong> ` +
      `"Quasi-random connectivity at a claw number near the dimensionality optimum" passes. "Hierarchical" does not.`
    : `Removing the rows where independent origin is not established costs normalisation and sparsity. Both are ` +
      `genuinely shared and both are found in visual, auditory and cerebellar circuits too, so a common ancestral ` +
      `neural toolkit is the parsimonious explanation. <strong>Convergence only carries evidential weight where ` +
      `the two lineages could not have inherited the solution</strong>, and for generic circuit motifs that ` +
      `condition fails.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Grading of "specific enough" and "independent origin established" is this course’s judgement, offered so it can be argued with.';
  root.appendChild(c);
}
