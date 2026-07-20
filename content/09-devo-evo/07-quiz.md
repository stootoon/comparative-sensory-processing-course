---
id: m09.s07
title: Module quiz — Development and Evolution
lede: Eight questions on constraint, convergence and the discipline of not telling stories. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 26
---

This quiz is mostly about telling explanation types apart, because that is the transferable skill in the module. Several questions hand you an observation and ask which of three explanations it supports — and in more than one case the honest answer is that the observation does not discriminate.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Insects and vertebrates both build glomeruli, both express roughly one receptor per sensory neuron, and both expand into a large sparsely active layer with quasi-random connectivity. Their receptor proteins are not homologous — insect ORs are ligand-gated ion channels with inverted topology, vertebrate ORs are GPCRs. What does this convergence license you to conclude?",
  "options": [
    {
      "text": "That the problem strongly constrains the space of workable solutions — but not that the shared architecture is optimal, and not which constraint is doing the forcing.",
      "correct": true,
      "feedback": "This is the disciplined reading. Two independent draws landing on the same design is evidence that the design space is not flat. It is silent about whether a better solution exists outside the basin, and silent about whether the basin is narrow because of coding demands or because of what a genome can specify (§9.2). Convergence identifies that a constraint operates; identifying which constraint requires separate work."
    },
    {
      "text": "That the shared architecture is optimal for the olfactory coding problem, since two independent optimisations converged on it.",
      "correct": false,
      "feedback": "Correct under the assumption that evolution is a reliable optimiser that samples the design space widely. It is not — it is a local hill-climber constrained by what is reachable and buildable, and two hill-climbers starting from similar places can land in the same local basin for reasons having nothing to do with global optimality. To claim optimality you must state the objective and do the calculation, which is blocked by the same missing ensemble as everything else in olfaction."
    },
    {
      "text": "That the last common ancestor of insects and vertebrates already had a glomerular chemosensory system, which both lineages retained.",
      "correct": false,
      "feedback": "Correct under the assumption that shared architecture implies shared inheritance — which is exactly the alternative the non-homologous receptors rule out. Had the receptors been homologous, this would be the parsimonious reading and the whole argument would collapse into inheritance. The molecular divergence is not a side note; it is the premise that makes the rest evidential."
    },
    {
      "text": "Nothing, because the shared features are described too coarsely — every nervous system is hierarchical and sparse.",
      "correct": false,
      "feedback": "Correct under a strict reading of the coarseness objection, and the instinct is the right one to have. But the objection has to be applied row by row rather than to the whole ledger. It genuinely defeats 'both are hierarchical' and 'both are sparse'. It does not defeat 'like-receptor neurons converge onto discrete stereotyped glomeruli', which is specific enough that a system could plainly have failed to have it — and, in C. elegans, does."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "A genome cannot enumerate connections. §9.2 argues this bears asymmetrically on olfaction. What is the precise asymmetry?",
  "options": [
    {
      "text": "An ordered array lets the map be specified as a monotone function of position, at a cost independent of array size. An unordered array admits no such rule, so the assignment must be realised as a combinatorial labelling scheme with no compression available.",
      "correct": true,
      "feedback": "This is the argument, and the load-bearing word is 'independent'. Double the retina and the specification program does not change: two gradients and a matching rule position any number of axons. Double the receptor repertoire and you need twice as many distinct labels with twice as many matching partners. The scaling is what does the work, which is why the argument survives the fact that nobody has computed the constants."
    },
    {
      "text": "Olfaction has far more receptor types than the other modalities, so the total information required exceeds the genome's capacity.",
      "correct": false,
      "feedback": "Correct under the assumption that raw bit count is the binding constraint — and it is the natural first thought, but the arithmetic does not support it. Naming an arbitrary bijection on 1100 elements costs roughly 10⁴ bits, which is affordable against any plausible genomic budget. The problem is not counting the bits; it is realising them in molecules that must be expressed in the right cells and not cross-react. Compressibility, not capacity."
    },
    {
      "text": "Olfactory sensory neurons are continuously replaced, so any specified map would be destroyed within weeks.",
      "correct": false,
      "feedback": "Correct under the assumption that turnover is the primary obstacle, and turnover is real (§9.5). But it does not create the specification problem — it makes an already-unspecifiable map need re-deriving repeatedly. Note also that the causation plausibly runs the other way: peripheral turnover is survivable precisely because targeting is activity-dependent rather than hard-wired."
    },
    {
      "text": "Olfaction reaches cortex in two synapses, leaving no intermediate stage at which a map could be constructed.",
      "correct": false,
      "feedback": "Correct under the assumption that map construction requires processing depth — an assumption §1.12 already dismantled from the other direction, since the retina inherits its map at zero synapses and bats build echo-delay maps for a quantity the cochlea never measures. Depth is neither necessary nor sufficient, and it is orthogonal to the specification question."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "You plan the olfactory version of the taste receptor swap: change which receptor a class of sensory neurons expresses, then ask whether behaviour follows the receptor or the glomerulus. A colleague says the experiment may be uninterpretable. What is the strongest version of that worry?",
  "options": [
    {
      "text": "The receptor protein participates in axon targeting, so swapping it may relocate the axons — in which case the receptor took its wiring with it and 'behaviour follows the receptor' becomes trivially true.",
      "correct": true,
      "feedback": "This is the confound, and it comes directly from §9.2's third signature: a map the genome cannot specify has to be sorted out by activity and by the receptor itself. The experiment survives with a control — induce the swap after the map is fixed and verify anatomy, or build a chimera that separates ligand binding from targeting. Gustation is spared this because taste cells do not use their receptor to find their target, which is only possible because there are five of them."
    },
    {
      "text": "Olfactory percepts are learned rather than innate, so there is no stereotyped behaviour to read out.",
      "correct": false,
      "feedback": "Correct under the assumption that the readout must be innate, and it is a real design problem — but a soluble one. The innate-valence pathway supplies stereotyped responses to specific ligands (§3.8), and a swap involving one of those receptors gives a readable behavioural output. This constrains which receptors to use, not whether the experiment works."
    },
    {
      "text": "Sensory neurons are replaced continuously, so any manipulated population is gone within weeks.",
      "correct": false,
      "feedback": "Correct under the assumption that turnover outpaces the experiment, and it is a genuine complication for the inducible-swap design specifically — newly born neurons will target according to the new receptor even if existing ones do not. But it is a timing problem with engineering solutions, and it does not make the result ambiguous in the way the targeting confound does. Note that it makes the targeting confound worse rather than replacing it."
    },
    {
      "text": "Each glomerulus receives input from more than one receptor type, so glomerular identity is not well defined.",
      "correct": false,
      "feedback": "Correct under a reading of the anatomy that the field largely rejects: the one-receptor-one-glomerulus relationship is among the better-established facts in the modality. If it were false, the experiment would indeed be ill-posed — but then so would most of the coding literature that depends on glomerular identity meaning something."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "You measure receptor abundance across the epithelium and encounter frequency of each receptor's ligands in the animal's natural environment. The correlation is null. Which analysis choice, made in advance, would have made that null informative rather than merely disappointing?",
  "options": [
    {
      "text": "Extracting genomic predictors — cluster membership and subfamily size — in the same experiment, so the analysis is a model comparison between coding demand and birth-and-death dynamics.",
      "correct": true,
      "feedback": "This is §9.3's point and it generalises well past olfaction. A null is only informative against a stated alternative, and the alternative here is concrete and independently measurable: receptors sit in genomic clusters, choice probability depends on the regulatory landscape, and recently expanded subfamilies have many similar members. With both predictors in hand, every outcome is interpretable — including the mixed one where both contribute, which is the most likely result."
    },
    {
      "text": "Pre-registering the direction and magnitude of the predicted correlation, so the test is risky in §0.2's sense.",
      "correct": false,
      "feedback": "Correct under the assumption that the problem is post-hoc flexibility, and pre-registration is good practice that would strengthen the positive result. But it does nothing for the null: a pre-registered null is still consistent with the animal not allocating efficiently, with your ligand assignments being wrong, and with allocation happening downstream. Risk makes a confirmation meaningful; a named alternative makes a disconfirmation meaningful."
    },
    {
      "text": "Weighting encounter frequency by behavioural relevance rather than raw occurrence, since efficient allocation should track value rather than frequency.",
      "correct": false,
      "feedback": "Correct under the assumption that the relevant statistic is a value-weighted one — a defensible position, and §5.11's point that coordinates could be defined by consequence rather than chemistry supports it. But this changes which coding hypothesis you are testing rather than making a null interpretable. If the value-weighted correlation also comes out null, you are back in the same position with one more free parameter spent."
    },
    {
      "text": "Measuring abundance in multiple species, so the result is comparative rather than single-species.",
      "correct": false,
      "feedback": "Correct under the assumption that comparative data is what separates the hypotheses — which §9.1 argued it generally is, so this is the closest wrong answer. But the comparative version of this particular test is expensive and slow, and the genomic-predictor analysis achieves the discrimination within one species using data you already have. Do the cheap discriminating analysis first."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Adult neurogenesis adds granule cells to the olfactory bulb for life, and no other first sensory circuit does anything comparable. The standard normative account is that olfactory input statistics are non-stationary. Where does that account stand against §0.2?",
  "options": [
    {
      "text": "It fails the risky-prediction criterion outright: it predicts that neurogenesis exists, which was already known, and predicts no rate, timescale or magnitude that could have come out wrong.",
      "correct": true,
      "feedback": "This is the diagnosis, and §9.5 reports it as a story rather than a result. The account is plausible and connects two independently motivated facts, which is worth something. It is not a normative result, and the fix is to extract a magnitude: neurogenesis rate should scale with independently scored environmental volatility across species, and should not scale with odour-learning demand — which the leading alternative predicts instead."
    },
    {
      "text": "It fails the measured-ensemble criterion, since nobody has measured the rate of change of natural odour statistics.",
      "correct": false,
      "feedback": "True, and it is the same criterion-one failure that blocks everything else in the modality (§3.11) — so this is nearly right. But it is not the criterion that matters most here. Even granting the non-stationarity premise for free, the account would still make no quantitative prediction, and would still be consistent with any observed neurogenesis rate. The ensemble is necessary; the missing magnitude is what makes it untestable."
    },
    {
      "text": "It passes, because blocking neurogenesis impairs olfactory discrimination and learning, which confirms the account against independent data.",
      "correct": false,
      "feedback": "Correct under the assumption that the loss-of-function result discriminates. It does not: impairment is equally consistent with neurogenesis serving learning capacity, memory clearance, or circuit maintenance, none of which invoke non-stationarity. A manipulation that damages a structure and damages behaviour tells you the structure matters, not what it is for — and this is a general trap, not an olfactory one."
    },
    {
      "text": "It cannot be scored, because §0.2's criteria apply to coding derivations and this is a developmental claim.",
      "correct": false,
      "feedback": "Correct for the convergence argument in §9.4, which genuinely is a different kind of inference and has to be graded on its own terms. It is not correct here. The non-stationarity account is a coding argument in developmental clothing — it says the bulbar transformation must be re-fitted because the input distribution moves — and coding arguments are exactly what the criteria grade."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m09.s07.o1",
  "contentRev": 1,
  "points": 1,
  "partialCredit": true,
  "shuffleSeed": 29,
  "prompt": "You want to know whether a design feature is explained by optimality, by developmental accessibility, or by historical contingency. Put the steps of the discriminating procedure in the order they must be carried out. The ordering constraint is the same one that makes §0.2's template a test rather than a story.",
  "items": [
    { "id": "a", "text": "State the feature at a level of description precise enough that a system could have failed to have it." },
    { "id": "b", "text": "Score the ecological or task demand independently, across species, without looking at the feature." },
    { "id": "c", "text": "Write down what each of the three explanations predicts about how the feature co-varies — with the task, with the tree, or with the specification problem." },
    { "id": "d", "text": "Measure the feature across the same species." },
    { "id": "e", "text": "Ask which predictor the feature follows, and report the residual variance the winner does not explain." }
  ],
  "correctOrder": ["a", "c", "b", "d", "e"],
  "modelAnswerNote": "Two orderings carry the whole procedure, and both exist to prevent a specific failure.\n\n**(a) before everything.** If you state the feature after seeing both systems, you will state it at whatever level makes them match — which is how 'both are hierarchical' gets counted as convergence. §9.4's formal note makes this precise: the evidential force scales as 1/p², and p depends entirely on how specifically you described the feature.\n\n**(b) before (d).** Scoring 'reliance on olfaction' after seeing repertoire sizes produces exactly the unfalsifiable adaptationism this module was written to resist. §9.3's figure includes a deliberately crude ecological score so its crudeness is visible; the falsifiable version requires the ecological variable measured independently and quantitatively.\n\nStep (e) is not decoration. In every real dataset here — repertoire size against ecology is the clearest — the winning predictor leaves most of the variance unexplained, and reporting that is the difference between 'ecology explains repertoire size' and 'ecology explains some of repertoire size, and something else explains more'."
}
</script>
</x-order>

<x-matrix>
<script type="application/json">
{
  "id": "m09.s07.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill in the developmental columns. The comparison that matters is the ordered modalities as a class against olfaction, with gustation as the control that separates disorder from dimensionality (§5.11).",
  "rows": [
    "Map specifiable by a gradient rule",
    "Receptor→target assignment",
    "Receptor participates in axon targeting",
    "Repertoire dynamics",
    "Adult neurogenesis in the first circuit",
    "Independent lineage converged on the same design"
  ],
  "columns": ["Vision", "Olfaction"],
  "cells": {
    "Map specifiable by a gradient rule|Vision": { "answer": "yes", "accept": ["yes", "yes — position", "gradients", "ephrin"] },
    "Map specifiable by a gradient rule|Olfaction": { "answer": "no", "accept": ["no", "not specifiable", "no metric", "none"] },
    "Receptor→target assignment|Olfaction": { "answer": "stochastic choice plus activity-dependent sorting", "accept": ["stochastic", "activity-dependent", "random then sorted", "activity dependent"] },
    "Receptor participates in axon targeting|Olfaction": { "answer": "yes", "accept": ["yes", "yes — confounds swaps"] },
    "Repertoire dynamics|Olfaction": { "answer": "birth-and-death, many pseudogenes", "accept": ["birth and death", "birth-and-death", "duplication and pseudogenisation", "pseudogenes"] },
    "Adult neurogenesis in the first circuit|Olfaction": { "answer": "yes", "accept": ["yes", "granule cells", "unique"] }
  },
  "modelAnswerNote": "The vision column is nearly all 'no' or 'not applicable', and that is the point: for the ordered modalities these questions do not arise, because a gradient rule specifies the map and the receptor is not doing double duty as a guidance cue.\n\nThe two cells to carry forward are the third and the fifth. **Receptor participates in targeting** is what puts a control requirement on Import 11's receptor swap. **Adult neurogenesis** is the module's one genuinely unique fact and its least defensible explanation — §9.5 reports the non-stationarity account as a story and supplies the comparative experiment that would make it a result."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m09.s07.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A reviewer objects: \"The convergence argument is unfalsifiable adaptationist storytelling. You observed two systems, noticed they were similar, and declared the similarity meaningful. Any two nervous systems solving a similar problem will look similar at some level of description.\" Write the strongest reply you can — then say honestly which part of the objection survives it.",
  "modelAnswer": "**The reply.**\n\nThe objection is right about the general danger and wrong that this instance succumbs to it, for three reasons.\n\nFirst, **independence is established at the molecular level rather than assumed**. Insect ORs are heteromeric ligand-gated ion channels with inverted membrane topology; vertebrate ORs are GPCRs [@buckaxel1991]. Different proteins, different physics of transduction, different developmental origins for the circuits involved. This is not 'we assume they evolved separately'; it is a positive divergence that makes shared inheritance implausible for the peripheral architecture.\n\nSecond, **the level-of-description problem is exactly the objection, and §9.4 answers it by grading every shared feature for specificity in advance and discarding the ones that fail**. Hierarchy and sparse coding are discarded: true, shared, and true of too many systems to constrain anything. Divisive normalisation is discarded on a different ground — it appears in visual and auditory circuits in both lineages, so a shared inhibitory toolkit is the parsimonious explanation. What survives is specific: one receptor per neuron, like-receptor convergence onto discrete stereotyped glomeruli, quasi-random expansion into a sparse layer at a connection degree near the dimensionality optimum [@litwinkumar2017; @caron2013]. Each of these is stated precisely enough that a system could have failed to have it, and C. elegans — an enormous chemoreceptor repertoire in about a dozen neurons, several receptors per cell, no glomeruli — is a system that does fail to have them.\n\nThird, **the argument makes a prediction that could still refute it**. A well-characterised lineage with a large chemoreceptor repertoire and a different architecture would damage it. Better, the design space can be sampled directly: train networks on realistic chemical and plume statistics without imposing an architecture and ask whether the convergent design emerges. That is a real risk, and it is available now.\n\n**What survives the reply.**\n\nTwo things, and they matter.\n\nThe specificity grading is *this course's judgement*, made after seeing both systems. I claim the surviving rows are specific enough and the discarded ones are not, but I chose where to draw that line with both systems in view — which is a weaker position than a pre-registered one, and structurally the same failure §0.2 was written to prevent.\n\nMore importantly, **even granting everything, the argument licenses far less than it is usually asked to carry**. It shows a constraint operates. It does not show the architecture is optimal, and §9.2 supplies a rival account of the constraint — developmental specifiability — under which the same convergence would occur without any coding optimality at all. The convergence-ratio evidence (1000:1 in mouse against ~50:1 in fly) argues mildly for the developmental reading and against the SNR reading. So the honest position is that the convergence is real, the independence is established, the surviving features are specific, and what they demonstrate is that the problem is hard to solve any other way — not that this solution is good.",
  "rubric": [
    "Cites the non-homologous receptor proteins as establishing independence positively rather than by assumption",
    "Answers the level-of-description objection by grading features for specificity and discarding the generic ones",
    "Names at least one discarded row (hierarchy, sparsity, or normalisation) and why it was discarded",
    "States a falsifying observation — a divergent lineage, or the artificial-network experiment",
    "Concedes that the specificity line was drawn after seeing both systems",
    "Concedes that convergence licenses 'a constraint operates', not optimality",
    "Bonus: notes that developmental specifiability is a rival account of the same constraint",
    "Bonus: uses the convergence-ratio difference as evidence bearing on which constraint it is"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Four things, and the first is a habit rather than a fact.

<strong>Ask whether a design is cheap before asking whether it is good</strong> (§9.1). Three explanation types — optimality, developmental accessibility, historical contingency — and they are separated by what the feature co-varies with: the task, the specification problem, or the tree. The course ran the first by default for eight modules. For olfaction the second keeps winning.

<strong>The missing metric imposes a cost, not only an absence</strong> (§9.2). Three developmental mechanisms in place of one gradient rule, and one of them puts a control requirement on the capstone's receptor-swap experiment.

<strong>Convergence is the strongest normative evidence olfaction has, and it stops short of optimality</strong> (§9.4). Seven surviving shared features, non-homologous receptors, 600 My. Use it to argue that a design feature is not arbitrary; do not use it to argue the feature is best.

<strong>Two central problems, one blocking measurement</strong> (§9.3, §9.6). The absent chemical ensemble blocks the evolutionary question as well as the coding one, which is a stronger argument for making the measurement than either supplies alone. The capstone's agenda should lead with that.
</x-callout>
