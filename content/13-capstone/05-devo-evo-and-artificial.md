---
id: m13.s05
title: Imports from development, evolution, and artificial sensing
lede: Two modules that are not modalities at all. One supplies the strongest non-optimality evidence in the course and a reagent that rescues an experiment the agenda had written off; the other supplies a control no animal could provide, and subtracts most of the standing explanations of why olfactory theory is stuck.
estimatedMinutes: 28
---

The preceding four sections imported from senses. This one imports from two modules that are not senses: how olfactory systems are built and how they evolved (§9), and what happens when engineers attempt chemical sensing with none of biology's constraints (§12).

They belong in the capstone for opposite reasons. Development and evolution supply an **explanation type** the rest of the course has barely used — what is cheap to specify rather than what is good to have — and one specific molecular fix. Artificial sensing supplies **eliminations**, which §13.7 argues are the most durable thing comparison produces, obtained from a control that has no metabolism, no history, and no cells.

Three of the seven imports below change what §13.6 should say. Two of them change it enough that §13.6 has been amended.

## Import 22 — from §9.4: convergence is evidence for a constraint, not for optimality

**Imported:** insects and vertebrates, separated by roughly 600 My and building their receptors from **non-homologous proteins** — insect ORs are ligand-gated ion channels with inverted topology, vertebrate ORs are GPCRs [@buckaxel1991] — arrived at seven shared architectural features: large repertoire, one receptor per neuron, like-receptor convergence, discrete glomeruli, expansion into a sparse layer, quasi-random connectivity onto that layer [@caron2013], and a valence/identity split.

**Candidate analogue:** wherever this capstone wants to say that an olfactory design feature is not arbitrary, this is the evidence to cite. It is the strongest such evidence olfaction has, and it is stronger than anything the efficient-coding strand can currently supply, because it does not require the chemical ensemble to have been measured.

**The disanalogy that breaks it — and the discipline it imposes.** Convergence licenses "a strong constraint operates". It does not license "this is optimal". Two draws from a design space that land in the same place tell you the basin is narrow; they say nothing whatever about what lies outside it, because nothing outside it was ever sampled. The two lineages may share a constraint that has nothing to do with coding — §9.4 argues the convergence-ratio evidence points towards **developmental specifiability** rather than coding demand, and specifiability is a constraint on what can be built, not a claim about what is good.

So the import comes with a prohibition attached: use convergence to rule out arbitrariness, never to establish optimality. An architecture that two lineages both reached may be the best available, or merely the only one reachable from a genome.

<x-figure src="content/09-devo-evo/figures/convergence-ledger.js"
  caption="Filter to the rows that survive both objections and count what is left. The argument's force does not come from the number of shared features — it comes from the most specific surviving row, and from the first row, which is a divergence rather than a convergence. Non-homologous receptor proteins are what make the remaining agreements independent draws rather than one inherited design described twice. Note what the right-hand column never says: no row licenses 'optimal'. Each licenses 'constrained', and the best non-adaptive alternative is available for every one of them.">
</x-figure>

**Prediction, and it is computational rather than comparative.** Observing two draws cannot evaluate the space. Sampling it can. Train networks on realistic chemical and plume statistics under a task the animal plausibly faces — source identification, or source separation — **without imposing an architecture**, and ask whether the convergent design emerges.

- If a large sparse expansion layer with quasi-random connectivity appears from optimisation alone, the constraint is a coding constraint, and the convergence argument is upgraded from "narrow basin" to something close to optimality — because now the space *has* been sampled outside the basin.
- If it does not appear, and the trained solution is architecturally unlike both lineages while performing at least as well, then the biological convergence is evidence about **genomes rather than about odours**, and the specifiability account wins by elimination.
- The connection-degree result [@litwinkumar2017] supplies a quantitative checkpoint: the optimal degree is derivable and matches biology, so a network that converges on a different degree under realistic statistics is a falsification rather than a shrug.

The experiment's weakness is honest and worth naming: it requires realistic chemical statistics, which is Gap 1 again. The plume half is available now [@celani2014], so a partial version — optimise for temporal source separation only — is runnable immediately.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Insects and vertebrates independently arrived at like-receptor convergence onto discrete glomeruli, using non-homologous receptor proteins. Why does this not establish that glomerular convergence is the optimal architecture for chemical sensing?",
  "options": [
    {
      "text": "Because two draws landing in the same place show the basin is narrow without evaluating anything outside it, and the constraint producing the narrowness may be developmental rather than computational.",
      "correct": true,
      "feedback": "Correct, and the second clause is the part usually dropped. Convergence is an inference from an observed distribution over lineages, not a derivation, so its force comes from the independence of the draws — which is genuinely established here at the molecular level. But an unsampled space cannot be optimised over, and §9.4's specifiability argument supplies a live alternative constraint: a scheme in which axons sort by the receptor they express is cheap to specify in a genome regardless of whether it is good for coding. That is why the licensing experiment is computational — you have to sample the space to say anything about what is outside the basin."
    },
    {
      "text": "Because 600 My is long enough that the two lineages may have exchanged the architecture by horizontal transfer or an unrecognised shared ancestor.",
      "correct": false,
      "feedback": "This is the answer under the assumption that the independence of the draws is the weak link, and it is the right objection to worry about in general — it is exactly what the 'shared ancestry' filter in the ledger figure tests. But it is the objection this case survives best: the receptor proteins are non-homologous and no ancestral glomerular olfactory system is plausible. The independence is about as clean as such claims get. The failure is at the inferential step after independence, not at independence itself."
    },
    {
      "text": "Because only seven features are shared, which is too few to constrain a design space of this size.",
      "correct": false,
      "feedback": "This is the answer under the assumption that evidential force scales with the number of agreeing features. It does not. A convergence argument is only as strong as its most *specific* surviving row — one highly specific shared feature is worth more than twenty coarse ones, because coarse features ('has receptors', 'has neurons') are shared for reasons that carry no information. Counting rows is the wrong operation; grading them, as the ledger does, is the right one."
    },
    {
      "text": "Because optimality claims require a measured input ensemble, and the chemical ensemble is unmeasured.",
      "correct": false,
      "feedback": "This is the answer under the assumption that all normative claims must route through §2.4's five-step template, and it is a defensible general position — it is why §0.2's criteria grade derivations. But it proves too much here. The convergence argument's whole appeal is that it is *not* a derivation and therefore does not need the ensemble; that is why it is the strongest evidence olfaction currently has. The reason it stops short of optimality is structural, not evidentiary: it never samples outside the basin, and it would not do so even if the ensemble were measured tomorrow."
    }
  ]
}
</script>
</x-mcq>

## Import 23 — from §9.2: the reagent that rescues Import 11

**Imported:** in olfaction, and unlike in taste, the **receptor protein participates in axon guidance**. Which receptor a neuron expresses helps determine where its axon goes.

**Candidate analogue — this is not an analogy but a direct correction.** §13.2's Import 11 took the taste receptor-swap experiment [@chandrashekar2006] as a clean template: change which receptor a cell expresses, ask whether behaviour follows the receptor or the cell. §13.6 then declined to run it, on the grounds that swapping the receptor may move the axon, so "behaviour follows the receptor" would be trivially true and say nothing about the code.

**The disanalogy that breaks the pessimism.** That objection is about a specific molecular confound, not about the logic of the experiment — and molecular confounds have molecular fixes. §9.2 supplies three, of which one is clean: a **chimeric receptor that separates ligand binding from targeting**, retaining the targeting determinants of the original receptor while binding the ligands of another. The dissociation the experiment needs then survives, because the axon goes where it always went and only the ligand specificity has changed.

The other two fixes are weaker and worth knowing. Inducing the swap after the map has formed and verifying anatomically leaves you arguing about incomplete conversion. Treating targeting as a measured outcome rather than an assumption is honest but converts a decisive experiment into a correlational one.

**Prediction, with the reagent in hand:** express a chimeric receptor with verified unchanged glomerular targeting, then test an **innate** valence response — which the experiment also requires, since a learned readout lets the animal simply relearn and produce "behaviour follows the receptor" for reasons unrelated to coding.

- *Labelled channel:* the animal responds as though the original ligand were present, because the glomerulus is the label and the label has not moved. The new ligand acquires the old ligand's innate meaning.
- *Distributed pattern:* the response follows the receptor's tuning as read out across the population, so the new ligand keeps roughly its own meaning and the manipulated channel contributes only a fraction of it.

**Status change:** this moves the receptor swap from "not worth running" to "runnable once the reagent exists". That is a real demotion of the obstacle — from conceptual to molecular — and it is the reason §13.6's rejection list has been amended rather than left standing.

## Import 24 — from §9.3: write down the genomic alternative before you look

**Imported:** olfactory receptor repertoires evolve by **birth-and-death** dynamics — tandem duplication, divergence, pseudogenisation, with 20–50% pseudogenes in mammals. The parameters of that process are estimable from sequence data alone, with no reference to odours at all.

**Candidate analogue:** §13.6's item 2 asks whether receptor abundance tracks natural encounter frequency, following the Ganguli–Simoncelli allocation logic [@ganguli2014]. As currently posed it has one hypothesis and a null.

**The disanalogy that breaks it.** A one-hypothesis test cannot produce an interpretable negative. If abundance does not track encounter frequency, the result is a **fact rather than a finding** — it establishes that one particular optimality argument failed to transfer, and leaves you unable to say why. It could be that the Ganguli–Simoncelli logic does not extend to unordered arrays; it could be that abundance is set by how many copies a duplication-prone cluster happens to contain; it could be that the encounter-frequency estimate was bad. Nothing in the design separates these.

**Prediction, restated as a model comparison.** Extract **cluster membership and subfamily size from the genome** alongside the abundance and encounter measurements, in the same experiment, and fit three models: coding demand, genomic history, and both.

| Outcome | What it establishes |
|---|---|
| Encounter frequency wins | The allocation logic transfers to an unordered array — a genuine extension of efficient coding into a receptor family it was not built for. |
| Cluster and subfamily size win | Repertoire composition is set by birth-and-death dynamics, and optimality arguments have a hard boundary in receptor families shaped this way. |
| Both contribute | The informative outcome, and the likely one. The measurement is then the **residual variance in abundance after genomic history is regressed out** — which is the quantity the coding argument is actually about, and which nobody has ever isolated. |

The middle row is what converts the null into evidence. The bottom row is why the experiment is worth doing even if the null is expected.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The general form of this correction</div>
It applies well beyond the abundance experiment, and it is the single most transferable thing §9 contributes to the agenda.

Every optimality test in this capstone has a <strong>mechanistic alternative that is estimable independently of the normative variable</strong>. For abundance it is birth-and-death parameters from sequence. For glomerular position it is developmental accessibility. For repertoire size it is phylogenetic inertia.

The alternative must be measured in the same experiment, not invoked afterwards in the discussion. Invoked afterwards it is an excuse; measured alongside, it is a model comparison, and every outcome including the mixed one becomes interpretable.

<strong>An optimality test with no measured alternative can only ever confirm.</strong> That is not a test.
</x-callout>

## Import 25 — from §12.1: the asymmetry is not specifically biological

**Imported:** machine olfaction stalls in exactly the place biological olfactory theory stalls — at the **input representation**, not at the classifier. This was stated as a risky prediction before the field was examined, and it held: machine olfaction is not short of algorithms, and it does not work well given clean data.

**Candidate analogue — and here the import is a subtraction, not an addition.** The artefacts have no metabolism, no evolutionary history, no development, no anatomy, no sensory deadline, and no obligation to be made of cells. They face none of olfaction's biological constraints and they stall anyway.

Therefore every account of olfactory theory's backwardness that appeals to **slow receptors, the missing metric, two synapses to cortex, adult neurogenesis, or the absent thalamic relay** is subtracted from being *sufficient*. Each may still be a real cost to the animal. None can be the reason the theory is stuck, because the theory is equally stuck in a system that has none of them.

**The disanalogy, and it bounds the claim precisely.** The engineered systems do not share olfaction's biology, but they *do* share its chemistry — non-superposing mixtures at the sensor [@shen2013], an unmeasured compositional ensemble, no agreed input format. So the elimination removes the biological explanations and leaves the chemical and statistical ones standing. It does not adjudicate among the survivors. What it does is cut the candidate list roughly in half, on evidence no animal could supply.

<x-figure src="content/12-artificial/figures/evidence-from-artefacts.js"
  caption="Set the filter to failure and read only the strong rows — those are the ones this import stands on, and there are fewer of them than the argument's confidence suggests. An engineered failure licenses 'this property is not sufficient' cleanly, because the artefact demonstrably lacks the property and fails anyway. It licenses nothing at all about what the sufficient property is. That asymmetry is why §12 belongs in a capstone about eliminations rather than in one about mechanisms, and it is why the import below is a subtraction from a list rather than an addition to it.">
</x-figure>

**Prediction, and it is cheap:** hand a learner the **composition vector directly**. Train on GC-MS compositions paired with source labels, bypassing sensors and the superposition problem entirely, at whatever small scale is affordable.

- If a learner cannot recover source identity from exact composition, the difficulty is **intrinsic to the chemical statistics**, and neither better sensors nor larger datasets are the story. Every remaining explanation that appeals to instrumentation dies with it.
- If it can, the entire gap sits between the air and the sensor, which is an instrumentation problem rather than a scientific one — and the field's theoretical stall is then unexplained by anything in §12, which is itself a strong result.

This separates the two leading accounts, it is affordable now, and it appears not to have been run.

## Import 26 — from §12.4: the within-olfaction control, promoted

**Imported:** inside olfaction, one sub-problem has a measured ensemble and one does not, and they have diverged exactly as the dataset-first account predicts. The **plume ensemble** is characterised [@celani2014], and that strand has both normative traction [@tootoonian2025] and working machines [@vergassola2007]. The **chemical ensemble** is unmeasured, and that strand has neither.

**Candidate analogue — the point is that there is no analogy involved.** Same animal, same receptors, same sensor hardware, same commercial pull, same funding environment, same journals. Every rival explanation for olfaction's theoretical backwardness — it is intrinsically harder, it attracts fewer people, the tools are worse, the money is not there — applies equally to both strands and therefore predicts no split. The measured/unmeasured variable is the only one that differs.

This is the closest thing in the course to a controlled experiment on the sociology of a field, and it was not assembled to be convenient: the plume statistics were characterised by people studying turbulent transport, not to support an argument about datasets.

**The disanalogy that bounds it:** two sub-problems is n = 2, and the comparison is retrospective. Retrospective comparisons with n = 2 are how people talk themselves into things.

**Prediction, which is what promotion means here:** stop treating this as an observation and run it as a **systematic comparison across sub-problems**. Enumerate the sub-problems of olfaction — mixture segregation, concentration invariance, source localisation, temporal discrimination, valence assignment, identity coding — and score each on two axes independently, ideally by different people blind to the other axis: *is the relevant input ensemble measured?* and *does the sub-problem have quantitative normative theory and working artificial implementations?*

The dataset-first account predicts the two scores correlate **within olfaction**, holding constant everything the cross-modality comparison in §11 could not. The rivals predict no within-modality structure at all. It costs a literature survey and a scoring rubric, and it is the cheapest and most discriminating thing in either of these two modules.

<x-predict>
<script type="application/json">
{
  "id": "m13.s05.p1",
  "contentRev": 1,
  "prompt": "The cross-modality version of this claim is that measured ensemble predicts theoretical maturity across nine modalities, r = 0.91. The within-olfaction version proposed above holds the animal, the chemistry, the funding and the community fixed. State what the within-olfaction version adds that the cross-modality version cannot, and then state the strongest reason it could come out positive for a reason that has nothing to do with datasets.",
  "placeholder": "What does holding the modality fixed buy, and what does it fail to control?",
  "reveal": "**What it adds.** The cross-modality correlation has an obvious confound and §13.7's figure caption concedes it: both axes may track intrinsic tractability. Vision may have a measured ensemble *and* mature theory because vision is simply an easier problem, in which case the correlation is real and the causal story is wrong. Holding the modality fixed removes that confound as far as it can be removed — mixture segregation and plume tracking are problems for the same nose, and no account of intrinsic modality difficulty distinguishes them.\n\nIt also removes the sociological confounds wholesale. Community size, funding, journal prestige, tool quality and prestige of the problem are shared across sub-problems of one modality in a way they are not shared across modalities.\n\n**The strongest reason it comes out positive anyway.** *Reverse causation, operating at the sub-problem level.* Ensembles get measured when they are measurable. Plume statistics are characterisable because turbulent transport is a physics problem with mature instrumentation and a governing equation; compositional statistics are not, because GC-MS is slow, expensive, and cannot be pointed. So the sub-problems with measured ensembles may be exactly the ones that were tractable to begin with, and the correlation would then reproduce itself with datasets playing no causal role at all.\n\nThis is a serious objection and the design should anticipate it rather than discover it. **The discriminating move is to score a third axis: measurement difficulty, judged independently of both other axes.** If theoretical maturity tracks ensemble measurement *after* measurement difficulty is partialled out, the dataset account survives; if the residual vanishes, it does not. That is one more column in the same rubric, and omitting it would make the whole survey uninterpretable in precisely the way Import 24 warns about — a test with no measured alternative can only confirm.\n\n**A second, subtler failure mode.** Sub-problems are not independent units. Progress on plume tracking makes source localisation look tractable, and the boundaries between them are drawn by the person doing the scoring. Pre-registering the sub-problem list, and having someone outside the argument draw it, is cheap insurance against generating the result by carving."
}
</script>
</x-predict>

## Import 27 — from §12.3: no metric means more data, not less

**Imported:** the absence of a metric on the input has a precise engineering consequence. No metric means **no convolutional prior** — no weight sharing, no translation invariance, no relational structure obtainable free from the architecture. Vision gets those from its wiring, at zero sample cost, because pixel adjacency is a fact about the sensor array.

**Candidate analogue:** §11.1 audited the visual motifs that fail to transfer to olfaction — convolution, retinotopy, centre-surround — and presented the result as a list of absences. The engineering consequence converts that list into a quantitative claim: an olfactory learner must **acquire from data what vision gets free from its wiring**, and the sample-complexity cost of that is estimable.

**The disanalogy, and it is where the quantitative version has to be careful.** Weight sharing buys a specific and bounded thing — invariance to a group action the input actually possesses. Olfaction may possess a different group structure that nobody has looked for; §9's convergent quasi-random expansion [@caron2013] and the derived optimal connection degree [@litwinkumar2017] are what a system does when it has no group to exploit, which is suggestive but not proof that no group exists. The claim is therefore "no *known* exploitable structure", and the honest version of the import states the cost as conditional on that.

**The consequence that matters most for the capstone.** §13.6 and §11 have treated two explanations for olfaction's backwardness as competitors: *the problem is intrinsically harder* and *there is no dataset*. The engineering argument shows they **compound**. The absence of a metric raises the sample requirement; the absence of a dataset means the samples do not exist. Each makes the other worse, and a field facing both is not facing two candidate explanations of which one is right.

**Prediction, and it is a controlled experiment in silico:** take a task with known group structure, train two matched learners — one with the convolutional prior, one with the prior destroyed by a fixed random permutation of input channels — and measure the sample-complexity gap directly. Then repeat with real receptor-response data, where the permutation is not a manipulation but the actual situation.

- The **size of the gap** on the synthetic task is the quantity §11.1's audit was implicitly claiming without a number, and it converts "convolution does not transfer" into "the transfer costs a factor of k in samples".
- If the gap on real receptor data is much *smaller* than on the synthetic control, that is evidence of exploitable structure in receptor space that the permutation control did not destroy — which would be a positive discovery of latent geometry, and it would come out of an experiment designed to measure a cost.

That second branch is why the experiment is worth running rather than assuming: the null result and the interesting result are the same measurement.

<details class="x-deeper">
<summary>Why the two accounts compound rather than compete — sketch</summary>

Let a learner need $n(\varepsilon)$ samples to reach error $\varepsilon$. An architectural prior that correctly encodes an invariance group of size $|G|$ reduces the effective hypothesis class, and in the standard bounds the sample requirement falls roughly as

$$n_{\text{prior}}(\varepsilon) \approx \frac{n_{\text{no prior}}(\varepsilon)}{|G|}$$

up to constants and subject to the invariance actually holding in the data. Vision's $|G|$ is the translation group over the image, which is large.

Olfaction's known exploitable $|G|$ is $1$. So $n_{\text{olf}} \approx n_{\text{no prior}}$, and the requirement is at its maximum.

Now write the available data as $m$. The two accounts are:

- *intrinsically harder*: $n_{\text{olf}}$ is large.
- *no dataset*: $m$ is small.

The learner succeeds when $m \geq n$. These are not alternative explanations of failure — they are the two sides of one inequality, and neither has to be false for the other to be true. **The relevant quantity is the ratio $m/n$, and both accounts push it the same way.**

The practical consequence is that arguing about which one is correct is a mistake in the form of the question. The useful questions are quantitative: how large is $n_{\text{olf}}$ relative to $n_{\text{vision}}$, and how far is $m$ from it? The permutation experiment above measures the first. Gap 1 determines the second.

The one thing this sketch does *not* license is pessimism. If a group structure exists in receptor space and is found, $|G|$ rises and $n$ falls, and the same data goes further. That is the branch worth chasing, and it is the one nobody is chasing because the absences have been read as facts rather than as unfinished searches.
</details>

## Import 28 — from §12.6: name which good the database buys

**Imported:** datasets purchase **engineering success and theoretical understanding separately**, and vision is the cautionary case. The labelled corpus bought recognition. Vision's normative theory came from unlabelled image statistics measured decades earlier, by people not thinking about coding at all [@olshausen1996; @atick1992].

**Candidate analogue:** §13.7's Gap 1 is described as a single heroic decade-long effort. It is not one object. Efficient-coding theory consumes the **unlabelled marginal** over natural odour scenes; a working device needs **labelled pairs**. Only the second requires annotation, human panels, or any agreement about what odours are perceptually. Nearly all of the cost sits there.

**The disanalogy, which is the reason this is an import rather than a bookkeeping note.** Vision's two objects were built decades apart by different communities in the convenient order — statistics first, labels later. Olfaction is being asked to build both at once by one community, and the labelled version is the one with the funding case, because it has a product at the end. The default trajectory therefore delivers the expensive object that answers none of §13.7's questions.

**Prediction, and it is about publication policy rather than about nature:** the recommendation that follows is to publish the **unlabelled compositional ensemble as a first-class object**, with a DOI and a format, independently of any labelling effort. The testable version is comparative and already running in other fields — track the citation and reuse profile of unlabelled ensemble releases against labelled benchmark releases in a field that has both, and the dataset-first account predicts the unlabelled object generates the theory papers while the labelled one generates the systems papers.

If that split fails to appear in fields where both objects exist, the distinction being drawn here is wrong and Gap 1 really is one thing.

<x-free-response>
<script type="application/json">
{
  "id": "m13.s05.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Imports 22 and 25 pull in opposite directions. Import 22 says olfaction's architecture is strongly constrained, on the strength of two independent lineages converging on it. Import 25 says the reason olfactory theory is stuck cannot be anything specifically biological, because machines with no biology stall in the same place. Reconcile them, or argue that one of them is overstated — and say what would decide it.",
  "modelAnswer": "**The two are compatible, and seeing why is the point of putting them in the same section.**\n\nThey are answers to different questions. Import 22 is about **why the architecture looks the way it does**; Import 25 is about **why the theory of it has not advanced**. An architecture can be tightly constrained by biology while the intellectual obstacle to understanding it is entirely non-biological. Nothing in the convergence argument claims that the biological features explain the field's stall, and nothing in the machine argument claims the biological features are unimportant to the animal.\n\n**The sharper reconciliation.** Import 25 subtracts a specific list from being *sufficient* to explain the theoretical stall: slow receptors, the missing metric, two synapses to cortex, neurogenesis, the absent relay. Notice that most of the seven convergent features are not on that list. Convergence establishes that a large repertoire, one-receptor-per-neuron, glomerular convergence and sparse quasi-random expansion are constrained solutions. The machine control never touches them, because machines have no repertoire to organise. So the two claims barely overlap in subject matter.\n\n**Where a real tension does exist, and it is worth finding.** The missing metric appears in both. Import 22's specifiability reading says the unordered array is what you get when there is no metric to be a rule about, and that this is a constraint two lineages both hit. Import 25 says the missing metric cannot be the reason theory is stuck, because machine olfaction has no metric either and stalls for reasons that look chemical. These are consistent only if the missing metric is a real biological constraint that is *not* the binding constraint on theory — which is precisely §11.1's conclusion that disorder alone is insufficient and the interaction with dimensionality is what matters.\n\n**A good answer will also notice that Import 25 is doing something Import 22 explicitly cannot.** Import 25 is an elimination and survives regardless of whether any analogy holds. Import 22 is an inference from a distribution over lineages and is only as strong as the independence of the two draws plus the specificity of the shared rows. §13.7 argues the eliminations are the more durable product, and this pair is a clean illustration.\n\n**What would decide the residual disagreement.** The network experiment of Import 22 is the arbiter, and it is arbiter for both. Train on realistic statistics without imposing an architecture. If the convergent design emerges, the constraint is computational and shared by any system facing these statistics — which would mean machine olfaction should eventually converge on it too, and its failure to do so is about data rather than about design. If the convergent design does not emerge, the constraint is genomic, the machine control is irrelevant to it, and the two imports were never about the same thing at all.\n\n**The weak answer** asserts that both can be true because they are about different things, and stops. The distinction is correct and is where the work begins, not where it ends.",
  "rubric": [
    "Separates the explanandum of each import — architecture versus the state of the theory",
    "Notes that Import 25's subtracted list barely overlaps with the seven convergent features",
    "Identifies the missing metric as the one term appearing in both, and resolves it",
    "Distinguishes the elimination (durable, analogy-independent) from the convergence inference (conditional on independence and specificity)",
    "Names a decisive experiment — the unconstrained-architecture network — and says what each outcome would mean",
    "Bonus: notices that if the convergent design is computationally forced, machine olfaction should eventually reach it"
  ]
}
</script>
</x-free-response>

## What these two modules changed

**§13.6 gained an experiment it had rejected.** The receptor swap was on the not-worth-running list because glomerular targeting is activity-dependent. §9.2's chimeric receptor separates ligand binding from targeting, and the obstacle drops from conceptual to molecular. That is not the same as being easy — nobody has built the reagent — but "blocked on a construct" and "uninterpretable in principle" belong on different lists, and the agenda has been amended to say so.

**§13.6's cheapest experiment gained a second measurement and stopped being able to produce an uninterpretable result.** The abundance test now requires cluster membership and subfamily size from the same genomes, analysed as a model comparison. The cost increase is close to zero, and it converts the likely outcome — the null — from a fact into evidence about where optimality arguments stop.

**A list of standing explanations got shorter.** Machine olfaction stalls at the input representation with no metabolism, no history, no development and no deadline. Every biological account of the theoretical stall is thereby removed from being sufficient. This is the largest single elimination in the capstone and no animal could have supplied it.

**Two accounts stopped competing.** "Intrinsically harder" and "no dataset" are the two sides of one inequality between required and available samples, and the absence of a metric is what puts the requirement at its maximum. §11.1's list of failed visual motifs becomes a claim with a number attached, measurable by a permutation control.

**And Gap 1 split in two.** The unlabelled compositional ensemble is what the theory consumes; labelled pairs are what a device needs. Only the second requires panels, annotation, or any agreement about perception, and that is where nearly all the cost is. The object the theory needs is the cheaper one, and §13.7 has been amended to record it — along with the component nobody lists, a receptor forward model from composition to activation, without which the flagship calculation cannot run whatever the database contains.

The pattern across both modules is the same one §13.7 ends on. Neither supplied a mechanism. One supplied a constraint on what may be concluded and a reagent; the other subtracted half a candidate list. That is what these controls are for.
