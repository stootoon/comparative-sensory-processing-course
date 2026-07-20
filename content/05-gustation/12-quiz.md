---
id: m05.s12
title: Module quiz — Gustation
lede: Seven questions on the course's control condition — unordered like olfaction, low-dimensional unlike it, and with none of olfaction's difficulties. Every distractor is right under a different assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 22
---

Gustation is a small module doing a large job. It is the third data point that breaks a confound: vision and olfaction differ on ordering, dimensionality, tuning breadth and metric structure all at once, so the two-way comparison cannot say which property is responsible for anything. Taste holds one of those fixed and varies the others.

This quiz tests whether you can run that dissociation yourself, and whether you can carry taste's loss-function argument into a modality whose loss function nobody has written down.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m05.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Taste is unordered, has no metric on receptor identity, and has essentially none of olfaction's computational difficulties — no demixing problem, no expansion recoding, no difficulty defining the stimulus space. What does this license?",
  "options": [
    {
      "text": "Olfaction's difficulties are attributable to dimensionality rather than to disorder, since disorder is held fixed across the two chemosenses and dimensionality is not.",
      "correct": true,
      "feedback": "This is the inference the module exists to support, and it is a genuine dissociation rather than a rhetorical one. In the vision/olfaction comparison, ordering, dimensionality, tuning breadth and metric structure covary, so no attribution is possible. Taste matches olfaction on ordering and metric and differs on dimensionality, and the difficulties track the dimensionality. Note this does not retire the metric argument — the metric still determines which *motifs* are available (§1.4). It relocates the source of the difficulty."
    },
    {
      "text": "The metric argument of §1.4 is wrong, since a modality can lack a metric and have no problems at all.",
      "correct": false,
      "feedback": "Correct under the assumption that the metric argument was a claim about difficulty. It was not — it is a claim about which computational motifs presuppose \"nearby\", and taste confirms it exactly: taste has no receptive fields, no surrounds, no topographic map, no smoothing prior. It simply does not need them, because with five channels there is nothing to smooth. The argument predicts the absences correctly and is silent about how much they cost."
    },
    {
      "text": "Nothing, because gustation and olfaction differ on too many other properties — loss function, learning, consumer breadth — for a clean attribution.",
      "correct": false,
      "feedback": "Partly correct, and the methodological caution is right: this is an observational comparison across two evolved systems, not a controlled manipulation, and the confounds you name are real. But the argument does not need all else equal. It needs one property held fixed while the outcome changes, which is enough to show disorder is *not sufficient* for the difficulties. That is a weaker conclusion than a full attribution and it is the one the module actually claims."
    },
    {
      "text": "Olfaction's difficulties come from its broad receptor tuning, since taste's narrow sweet receptor is what spares it.",
      "correct": false,
      "feedback": "Correct under the assumption that tuning breadth is the operative variable, and it is a serious candidate — broad tuning is what makes a receptor pattern combinatorial rather than a labelled line. But taste has both: sweet is narrow and bitter is very broad, with 25 receptors covering hundreds of compounds, and bitter causes no demixing problem whatever. Breadth without dimensionality is harmless, because the 25 receptors converge on one axis."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Roughly 25 bitter receptors converge on a single perceptual axis; one narrow sweet receptor dimer serves sugars. What is the correct normative explanation of the asymmetry?",
  "options": [
    {
      "text": "The set of toxins is open-ended and unenumerable while \"sugar\" is a small stable category, and the action taken is identical for every bitter compound — so breadth is allocated by what the animal must do, not by the chemistry.",
      "correct": true,
      "feedback": "Right, and both clauses do work. Open-endedness forces a permissive OR-gate detector; identity of action licenses collapsing the outputs onto one axis. Take away the second clause and you would want 25 distinguishable bitter channels. This is one of the best normative arguments in sensory neuroscience and it is rarely taught as one — it derives an architectural fact from task structure alone, with no appeal to receptor biophysics."
    },
    {
      "text": "Bitter compounds are chemically more diverse than sugars, so more receptor types are needed to cover the space.",
      "correct": false,
      "feedback": "Correct under the assumption that receptor count tracks chemical diversity, and the premise is true — bitter ligands are structurally heterogeneous. But it explains only half the fact and the less interesting half. It does not explain why the 25 converge onto *one* axis rather than 25 discriminable ones, and that convergence is the design feature that needs explaining. Chemistry motivates the breadth; the loss function motivates the collapse."
    },
    {
      "text": "Bitter detection is innate and sweet is learned, and innate systems require more receptors to cover the space without experience.",
      "correct": false,
      "feedback": "Correct under the assumption that innateness is the operative variable — and the intuition that a system which cannot learn must be pre-wired broadly is sound. But both are largely innate in taste, and the direction is wrong anyway: it is bitter, the one that cannot afford to learn by experience because a first exposure may be fatal, that carries the breadth. The asymmetry is in the *cost of error*, and innateness is downstream of that, not upstream."
    },
    {
      "text": "Bitter thresholds are far lower than sweet thresholds, and low thresholds require more receptor types for adequate sensitivity.",
      "correct": false,
      "feedback": "Correct under the assumption that sensitivity is bought with receptor diversity. It is generally bought with convergence and integration time instead — olfaction's ~1000:1 convergence onto a glomerulus is the clear case. The threshold asymmetry is real and is itself predicted by the loss asymmetry, so this distractor names a co-effect rather than a cause. Two consequences of one asymmetry, not one explaining the other."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "Taste's dimensions are nutritional categories — sugar, sodium, protein, acid, toxin — not chemical families. What does that suggest about the search for olfactory coordinates, which §13 poses as a statistics-of-the-stimulus problem?",
  "options": [
    {
      "text": "Coordinates can be defined by consequence rather than by chemistry, so a second class of candidate axes exists that no amount of receptor-response statistics would recover — and both kinds could hold in different olfactory pathways.",
      "correct": true,
      "feedback": "This is the transfer. Taste's axes are not recoverable from the chemistry of its ligands, because sodium and sucrose have nothing chemically in common with each other or with what distinguishes them from toxins. They are recoverable from what the animal must do. That predicts a partition in olfaction — and §3.8 finds one, with innate-valence pathways collapsing and identity pathways preserving distinctions."
    },
    {
      "text": "It shows the statistics-of-the-stimulus approach is misconceived, since perceptual dimensions are always behaviourally defined.",
      "correct": false,
      "feedback": "Correct under the assumption that taste generalises to all sensory coordinates. It does not, and vision is the counterexample the course opened with: the opponent colour axes fall out of PCA on natural cone responses with no reference to behaviour or physiology [@buchsbaum1983; @ruderman1998]. Both routes to coordinates are real. The mistake is assuming only one is available."
    },
    {
      "text": "It implies olfactory coordinates should also be nutritional, since both are chemosenses sampling the same molecular world.",
      "correct": false,
      "feedback": "Correct under the assumption that shared input physics implies shared coordinates — and the chemosenses do share GPCR transduction and small-molecule ligands. But §5.1 is precisely the demonstration that this inference fails: two systems with the same chemistry arrived at opposite architectures on every axis, because their consumers differ. Taste answers one question; olfaction serves open-ended ones. Same input, different coordinates."
    },
    {
      "text": "It suggests olfactory coordinates cannot be found until the natural chemical ensemble is measured, since consequence-based axes still require knowing what is out there.",
      "correct": false,
      "feedback": "Partly correct, and it names the real blocker for the statistical route — the missing chemical ensemble is criterion one of §0.2 and is why the flagship calculation is stalled. But the point of the taste case is that the consequence route *bypasses* that requirement. You define the axes by the behavioural categories, then ask whether receptor space respects them. That calculation is runnable now, which makes this the more actionable half of the hook."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Express a bitter receptor in a sweet-sensing cell, and the animal is attracted to the bitter ligand [@chandrashekar2006]. What makes this experimental design unusually powerful, and what is the olfactory analogue?",
  "options": [
    {
      "text": "It dissociates receptor identity from cell identity, which observation alone cannot do — and the analogue is swapping which receptor a glomerulus expresses, then asking whether behaviour follows the receptor or the glomerulus.",
      "correct": true,
      "feedback": "Exactly. Correlational work can never separate the two because they are perfectly confounded in the intact animal: the cell that expresses the bitter receptor is always the bitter cell. The swap breaks the confound and the answer is unambiguous — behaviour follows the cell. The olfactory version is technically feasible and would settle several long-running arguments about what glomerular identity means, which is why it appears in the hook."
    },
    {
      "text": "It proves taste is labelled-line at every stage, resolving the dispute against ensemble coding.",
      "correct": false,
      "feedback": "Correct under the assumption that the swap constrains the whole pathway, and the temptation is understandable given how decisive it looks. But it constrains the *periphery*: it shows the peripheral line carries a label the rest of the system honours. Central recordings still find multi-quality neurons with informative temporal patterns and state modulation. The accepted resolution is periphery-labelled and centre-distributed, and §5.4's real lesson is that a coding claim must specify a stage."
    },
    {
      "text": "It shows percept follows receptor activation rather than chemistry, which is the same conclusion the miracle-fruit effect delivers.",
      "correct": false,
      "feedback": "Partly correct, and the two results do belong together as evidence for peripheral labelling. But miraculin converts the sweet receptor to an acid-activated state within the sweet cell, so it varies the ligand while holding both receptor cell and label fixed. The genetic swap varies the receptor against the cell. Only the second dissociates the two things that are confounded in nature, which is the property the question asks about."
    },
    {
      "text": "Its power is that the manipulation is genetic rather than pharmacological, so it is specific and permanent.",
      "correct": false,
      "feedback": "Correct under the assumption that specificity of manipulation is what confers inferential force, and genetic targeting is indeed what makes the experiment clean. But specificity is a means. A perfectly specific manipulation of an uninformative variable teaches nothing. What makes this design powerful is which confound it breaks, and that is a question about the causal structure, not the technique."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Conditioned taste aversion is one-trial and tolerates hour-long delays between taste and illness, violating the temporal-contiguity rules that govern most associative learning. What is the right normative reading, and what does it predict for olfaction?",
  "options": [
    {
      "text": "The learning rule is matched to the statistics of its teacher — post-ingestive nutrient signals are delayed, rare and near-ground-truth — so both chemosenses should depart from vision's rules in the same direction.",
      "correct": true,
      "feedback": "Right. A delayed teaching signal makes a long eligibility trace optimal, and a rare, highly reliable one makes a large single-trial update optimal. Neither is an exception to normal learning; both are what normal learning looks like under those teacher statistics. The prediction for olfaction is direct: odour consequences are also delayed and sparse, so expect longer traces and larger single-trial updates than a visual associative task would show."
    },
    {
      "text": "It shows taste learning is a specialised innate module rather than an instance of general associative learning.",
      "correct": false,
      "feedback": "Correct under the assumption that a violation of general rules indicates a dedicated mechanism, which is how the effect was originally read and why it was so controversial. The normative reframing is stronger and more useful: it is not an exception to the rules but the correct setting of their parameters given a delayed teacher. That version makes a quantitative prediction — vary the delay distribution, and the optimal trace length should follow — which the modularity story does not."
    },
    {
      "text": "It reflects the asymmetric loss function, since a single poisoning may be fatal and there is no opportunity for a second trial.",
      "correct": false,
      "feedback": "Partly correct, and the loss asymmetry genuinely contributes to the size of the update — one-trial learning is what you want when the second trial may not happen. But it does not explain the *delay* tolerance, which is the more striking half of the phenomenon and is set by when the evidence arrives rather than by what an error costs. Two properties, two explanations; this distractor covers one."
    },
    {
      "text": "It shows the post-ingestive signal is the true taste receptor system, with oral taste serving only as a fast predictor.",
      "correct": false,
      "feedback": "Correct under the assumption that ground-truth access defines the sensory system, and the framing has real merit — oral taste is a fast, cheap proxy for a metabolic measurement, trained by the slow accurate one. But calling the teacher the sensory system inverts the usual terms without gaining anything, and it obscures the point at issue, which is why the *learning rule* has the parameters it does."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m05.s12.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill both columns. The rows are chosen so the two chemosenses agree on the first and disagree on the rest — which is the whole argument of the module in one table. Check against §5.1 and §5.11.",
  "rows": [
    "Array ordering",
    "Dimensionality",
    "Loss function"
  ],
  "columns": ["Gustation", "Olfaction"],
  "cells": {
    "Array ordering|Gustation": { "answer": "unordered", "accept": ["unordered", "no order", "non-metric", "unordered, non-metric"] },
    "Array ordering|Olfaction": { "answer": "unordered", "accept": ["unordered", "no order", "non-metric", "unordered, non-metric"] },
    "Dimensionality|Gustation": { "answer": "~5, low at source", "accept": ["5", "~5", "five", "low", "about 5", "low, ~5"] },
    "Dimensionality|Olfaction": { "answer": "~400–1000", "accept": ["400-1000", "~400-1000", "high", "hundreds", "several hundred", "400 to 1000"] },
    "Loss function|Gustation": { "answer": "grossly asymmetric", "accept": ["asymmetric", "grossly asymmetric", "very asymmetric", "highly asymmetric"] },
    "Loss function|Olfaction": { "answer": "roughly symmetric", "accept": ["symmetric", "roughly symmetric", "approximately symmetric", "near symmetric"] }
  },
  "modelAnswerNote": "The first row is the control and the other two are the manipulation. Same chemistry, same receptor superfamily, same physical sampling problem, same array structure — and opposite designs, because the consumers differ.\n\nThe loss row is the one worth dwelling on. Olfaction's roughly symmetric loss is not a measured fact but an inference from consumer breadth: a modality serving open-ended uses cannot have a single loss function, so it preserves distinctions instead of collapsing them. That is a reasonable argument and it is also the weakest cell in the table. If you wanted to attack the module's central claim, this is where."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m05.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Taste collapses hundreds of bitter compounds because the action is identical for all of them. State the corresponding question for olfaction as precisely as you can, say what the answer appears to be, and say what would falsify it.",
  "modelAnswer": "**The question.**\n\nNot \"is olfaction combinatorial\" — that is under-specified in exactly the way \"taste uses labelled lines\" was (§5.4), because it fails to name a pathway. The precise version is: **for which olfactory pathways is the downstream action invariant across the stimuli that pathway responds to, and do those pathways collapse the corresponding distinctions?**\n\nThe reasoning is the taste argument run in reverse. Collapse is optimal when the consumer takes the same action regardless, because preserved distinctions cost channel capacity and buy nothing. Preservation is optimal when the consumer is open-ended and cannot say in advance which distinctions it will need.\n\n**The answer, as it stands.**\n\nOlfaction is not one system with one policy. It partitions (§3.8):\n\n- **Innate-valence pathways collapse.** Predator odours, spoilage cues and aversive volatiles converge onto stereotyped output, and the specific molecule is not preserved downstream. Same architecture as bitter, same reason — the action is fixed.\n- **Identity pathways preserve.** The route through piriform to association cortex keeps distinctions the animal has no current use for, because it serves learning and the consumer is not yet known.\n\nThat is a confirmed prediction rather than a post-hoc description: the partition was predicted from the consumer argument and found.\n\n**What would falsify it.**\n\nA labelled innate-valence pathway that nonetheless preserves molecular identity downstream — distinguishable representations of two aversive compounds triggering identical behaviour, maintained past the point of divergence from the identity stream. Or the converse: an identity pathway that collapses chemically distinct odorants the animal can behaviourally discriminate, which would show preservation is not where the discrimination lives.\n\n**The caveat worth stating.** The partition is comfortable because it lets every observation land somewhere. Guarding against that requires committing in advance to which pathway a given odour class routes through, and the innate/learned boundary is not always crisp — which is the same unfalsifiability risk §0.2 flags for normative arguments generally.",
  "rubric": [
    "States the question at the level of pathway rather than modality, echoing §5.4's insistence that coding claims specify a stage",
    "Gives the normative rationale: collapse when action is invariant, preserve when the consumer is open-ended",
    "Identifies the innate-valence / identity partition as the observed answer",
    "Proposes a concrete falsifier involving preserved identity in a collapsing pathway or the converse",
    "Bonus: notes the prediction preceded the finding rather than describing it after the fact",
    "Bonus: flags the unfalsifiability risk that a two-pathway story accommodates any result"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Gustation is small and hands forward four disproportionately useful things.

<strong>The dissociation</strong> (§5.4, §5.11) — unordered, low-dimensional, and untroubled. Disorder is not what makes olfaction hard; dimensionality is. Every later claim about olfaction's strangeness should be checked against this.

<strong>Breadth allocated by the loss function</strong> (§5.1) — 25 bitter receptors onto one axis because the action is identical, one narrow sweet receptor because the category is bounded. The architecture is derived from the task with no appeal to chemistry.

<strong>Coordinates from consequence</strong> (§5.11) — taste's axes are nutritional, not chemical, and no statistics of the stimulus would recover them. A second route to olfactory coordinates that does not wait on the missing ensemble.

<strong>Specify the stage</strong> (§5.4) — the labelled-line dispute is resolved as periphery-labelled and centre-distributed [@chandrashekar2006], and it burned a decade because neither camp named a stage. The olfactory timing dispute has the same shape.
</x-callout>
