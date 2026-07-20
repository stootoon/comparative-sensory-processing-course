---
id: m09.s06
title: Synthesis and the olfaction hook
lede: One strong argument, one useful reframing, and one story that cannot yet be tested. Scored honestly, this module contributes less than it promised and more than the course had.
estimatedMinutes: 13
---

## Scoring the arguments

Three claims were made. Held against §0.2's five criteria — measured ensemble, physical constraint, risky quantitative prediction, confirmation by independent data, few free parameters — they score very differently, and the differences are diagnostic.

**The convergence argument is the strongest thing in this module, and it does not score against the criteria at all.** That is not a failure; it is a category point worth making explicitly. §0.2's criteria grade *derivations* — you measure an ensemble, state an objective, derive a prediction, compare. The convergence argument is not a derivation. It is an inference from an observed distribution over lineages, and its evidential force comes from independence of the two draws rather than from the tightness of a calculation.

Graded on its own terms it does well. The independence is established at the molecular level and is about as clean as such claims get: insect ORs are ligand-gated ion channels with inverted topology, vertebrate ORs are GPCRs [@buckaxel1991], and no shared ancestral glomerular olfactory system is plausible. Seven architectural features survive both the "too coarse" and "shared toolkit" objections. And the argument is falsifiable in a specific way: a well-characterised lineage with a large chemoreceptor repertoire and a different architecture would damage it, and an artificial-network experiment could sample the design space directly rather than observing two draws from it.

What it does *not* deliver is optimality. It licenses "a strong constraint operates", and §9.4 argued that the identity of the constraint is undetermined between coding demand and developmental specifiability — with the convergence-ratio evidence pointing towards the latter.

**The specifiability argument is a strong qualitative account with no quantitative version.** The scaling is what does the work — a gradient rule is flat in array size and a labelling scheme is not — and scaling arguments survive bad constants. But nobody has computed the specification cost of a real olfactory wiring program against a real genomic budget, and until somebody does, this is an argument rather than a result. It scores on physical constraint and on parsimony, fails on measured ensemble and on quantitative prediction.

Its main contribution is not the score. It is that it *unifies* four facts the course had been treating as separate curiosities: stochastic receptor choice, one-receptor-per-neuron expression, glomerular convergence, and activity-dependent targeting. Four mechanisms, one constraint. And it produces the module's most immediately usable consequence — that the receptor-swap experiment may be uninterpretable without a targeting control (§9.2).

**The birth-and-death account of repertoire composition is a mechanistic alternative rather than a normative claim, and that is its value.** Its parameters are estimable from sequence data independently of anything about odours, which is exactly what makes it a genuine competitor rather than a rhetorical one. It makes the capstone's abundance null informative.

**The non-stationarity account of adult neurogenesis fails four of the five criteria and should be reported as a story.** §9.5 says so at length and supplies four ways to make it testable, of which the comparative one is worth doing.

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Highlight Olfaction and read the two rows this module speaks to. 'Receptor array ordered' scores zero, and every other module has treated that as a set of absences — no map, no surround, no convolution. §9.2's argument is that the same zero also imposes a positive cost: it is the reason three separate developmental mechanisms exist where the ordered modalities need one gradient. 'Statistics stationary' scores one, and §9.5's neurogenesis story rests entirely on that cell — which is asserted, not measured.">
</x-figure>

## Datasheet row

The properties this module adds. Two columns, because the comparison that matters is between the ordered modalities as a class and olfaction, with gustation as the control that separates disorder from dimensionality (§5.11).

| Property | Vision / audition / touch | Gustation | Olfaction |
|---|---|---|---|
| Wiring specifiable by a gradient rule | **yes** — map is a function of position | not needed; ~5 channels enumerable | **no** — no metric to be a rule about |
| Cost of specifying the peripheral map | flat in array size | trivial | **combinatorial labelling, no compression** |
| Receptor→target assignment | genetically specified | genetically specified | **stochastic choice + activity-dependent sorting** |
| Receptor participates in axon targeting | no | no | **yes — confounds receptor-swap experiments** |
| Receptor repertoire dynamics | small, stable, ancient | small, stable | **birth-and-death; 20–50% pseudogenes** |
| Repertoire size across species | conserved | conserved | **~10 to ~2000; loosely tracks ecology** |
| Independent lineage solved it the same way | n/a | partial | **yes — insects, non-homologous receptors** |
| Critical period | **yes**, well characterised | weak | yes, for the map |
| Adult neurogenesis in the first circuit | **no** | receptor cells only | **yes — unique** |
| Best explanation type for the architecture | optimality | loss function | **developmental accessibility (contested)** |

The row to carry forward is the last one. Every other module's architecture has been explained, where it has been explained at all, by an optimality argument. **This module's claim is that olfaction's is better explained by what can be built** — and that this is a demotion only if you assume optimality is the more respectable kind of explanation, which §9.1 argued it is not.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">Why the fly earns its place in this course</div>
The course has cited <em>Drosophila</em> results in nearly every olfactory discussion. §9.4 supplies the licence and its limits, and the rule is worth stating compactly.

A fly result carries <strong>general olfactory</strong> evidence if it sits on one of the seven surviving convergent rows: repertoire size, one receptor per neuron, like-receptor convergence, discrete glomeruli, expansion into a sparse layer, quasi-random connectivity, valence/identity split. The connection-degree result [@litwinkumar2017] and the random-convergence result [@caron2013] both do.

A fly result carries <strong>circuit-general</strong> evidence only if it sits on a filtered row. Divisive normalisation [@olsen2010] is the important case: it is a beautiful result and it appears in visual and auditory circuits too, so it tells you about gain control on high-dimensional input, not about chemistry.

The rule cuts both ways, which is what makes it a rule rather than an endorsement.
</x-callout>

## What this module changes about the rest of the course

Three revisions, stated plainly because they contradict things said earlier.

**§3.4's account of the missing metric was incomplete.** It presented unorderedness as removing capabilities. It also imposes a cost — three developmental mechanisms in place of one — and that cost is where §11.1's surviving wiring-economy argument actually lives.

**The receptor-swap experiment needs a control the course did not anticipate.** §5.11 handed it forward as a clean import from taste. It is not clean, because in olfaction the receptor helps determine where the axon goes. The import survives with a targeting-verification requirement attached.

**The fly literature's status has been upgraded and bounded simultaneously.** It was being used as though it generalised. It does generalise, on seven specified rows, and does not on the others.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. Convergence is the strongest normative evidence olfaction has, and it is evidence for a constraint rather than for optimality.</strong> Two lineages, 600 My apart, non-homologous receptor proteins, seven shared architectural features. The capstone should use this wherever it wants to claim an olfactory design feature is not arbitrary — and should stop short of calling it optimal, because convergence identifies a narrow basin without evaluating what lies outside it. The experiment that would go further is computational: train networks on realistic chemical and plume statistics without imposing an architecture, and ask whether the convergent design emerges.

<strong>2. Import 11's receptor swap needs a targeting control or it is uninterpretable.</strong> The olfactory receptor protein participates in axon guidance, so changing which receptor a neuron expresses may change where it projects — in which case "behaviour follows the receptor" is trivially true and says nothing about the code. Three fixes are available (§9.2): induce the swap after the map is formed and verify anatomically; treat targeting as a measured outcome rather than an assumption; or build a chimeric receptor that separates ligand binding from targeting. The third is the clean reagent and it is a molecular problem, not a conceptual one.

<strong>3. The informative null for the abundance prediction is genomic, and it has to be measured in the same experiment.</strong> If receptor abundance does not track natural encounter frequency, that is a fact and not a finding — unless the alternative was written down first. Extract cluster membership and subfamily size from the genome alongside the abundance and encounter measurements, and analyse it as a model comparison. Then every outcome is interpretable, including the mixed one, and the null becomes evidence that composition is set by birth-and-death dynamics rather than by coding demand (§9.3).

<strong>4. The missing chemical ensemble blocks the evolutionary question as well as the coding one.</strong> Without knowing what odours an animal actually encounters, you cannot say whether its repertoire is well matched to them, so the adaptive account of repertoire size is unfalsifiable in the form it is usually given. This is the same missing measurement that blocks the efficient-coding calculation (§3.11). <strong>Two independent central problems, one blocking measurement</strong> — a stronger argument for making it than either supplies alone, and the capstone's agenda should say so.

<strong>5. Adult neurogenesis is a story, and here is the comparative experiment that would make it a result.</strong> Score chemical-environment volatility and odour-learning demand independently across species, before looking at neurogenesis rates, then ask which one the rate follows. Non-stationarity predicts volatility; the learning-capacity alternative predicts learning demand. The within-species version — re-randomised odour-to-consequence mappings against a matched-total-learning control — is feasible now and to my knowledge has not been run with that control (§9.5).

<strong>6. When an olfactory design feature looks strange, ask whether it is cheap before asking whether it is good.</strong> The general methodological hand-off. Optimality predicts covariation with the task, contingency predicts covariation with the tree, developmental accessibility predicts covariation with the specification problem — and these come apart in comparative data (§9.1). The course has run the first explanation type for eight modules by default. For olfaction specifically, the second one keeps winning.
</x-callout>
