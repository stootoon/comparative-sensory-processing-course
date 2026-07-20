---
id: m11.s06
title: Module quiz — Key Differences
lede: Seven questions on the module that argues against the course's own central claim. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 28
---

Module 11 is the adversarial one. It takes the five axes on which olfaction is supposed to be exceptional and asks, for each, whether the axis actually predicts — and four of the five failed somewhere. The fifth failed nowhere, which the module treats as a problem rather than a triumph.

This quiz tests whether you can hold a weakened claim precisely, which is harder than holding a strong one. Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m11.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Of fourteen audited motifs, six turned out to consume no property of the receptor array at all. What is the most consequential thing that follows?",
  "options": [
    {
      "text": "The flagship calculation is blocked on the missing chemical ensemble, not on the missing metric — so the central claim, whatever its merits, does not locate olfaction's stall.",
      "correct": true,
      "feedback": "This is the consequence that changes what you would do. The opponent-axis derivation is PCA on receptor responses to natural scenes [@buchsbaum1983; @ruderman1998]; it is indifferent to whether the receptors lie in a lattice, a line, or nothing at all. Same for efficient coding, divisive normalisation, sparse coding, random expansion and predictive subtraction. Six of the fourteen, including the two calculations the course most wants run, are metric-free. The metric story survives as an architectural claim and stops being an explanation of the theoretical stall."
    },
    {
      "text": "The central claim is refuted, since fewer than half the audited motifs depend on the metric.",
      "correct": false,
      "feedback": "Correct under the assumption that a claim about 'almost every motif' is refuted by a counting result — and the count does refute the slogan as stated. But the module's verdict is narrower and more useful: motifs consuming neighbourhood, betweenness or a translation group are genuinely unavailable, and the group-consuming ones are dead rather than re-derivable. What is refuted is the scope, not the content. Reporting it as refutation discards three surviving results."
    },
    {
      "text": "Metric-dependent motifs can all be rebuilt in statistical form, so nothing is actually lost.",
      "correct": false,
      "feedback": "Correct under the assumption that a statistical counterpart is a full replacement, and for centre–surround it nearly is — the predictor survives as a weighted sum over statistically dependent glomeruli, and only the wiring shortcut is lost. But the wiring shortcut is not nothing: a local rule costs a stencil and the general form costs a full weight matrix, which is a real and measurable architectural consequence. And convolution has no statistical counterpart at all, because there is no group to share weights across."
    },
    {
      "text": "The receptive field concept survives, so vision-trained intuitions transfer better than the course suggests.",
      "correct": false,
      "feedback": "Correct under the assumption that the receptive field is the load-bearing import, and the module agrees it survives — strip the spatial layout and a receptive field is a tuning vector over an unordered index set, so you lose the picture and nothing else. But that is the motif where the loss was always smallest, and generalising from it to the toolkit as a whole overshoots. Convolution and interpolation do not follow it across."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s06.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Gustation is unordered, low-dimensional, and has none of olfaction's difficulties. What is the honest conclusion, and why is it not simply \"dimensionality, not disorder\"?",
  "options": [
    {
      "text": "A disorder × dimensionality interaction: disorder is nearly costless at D≈5, where every distinction can be wired individually, and expensive at D≈1000, where exploiting structure is the only way to avoid per-connection costs.",
      "correct": true,
      "feedback": "Right, and the reason the main-effect reading fails is visible in taste's own architecture. Taste is unordered *and* nearly labelled-line, which is what you can afford at five categories. Neither factor alone reproduces olfaction's profile: disorder is not sufficient for the difficulty, and it is not irrelevant either. Note that the capstone's headline claim is stated as the slogan 'dimensionality, not disorder' — this module is where the slogan gets its qualification, and the qualification is the more defensible object."
    },
    {
      "text": "Dimensionality, not disorder — the dissociation holds disorder fixed and varies dimensionality, and the difficulty follows dimensionality.",
      "correct": false,
      "feedback": "Correct under a two-factor main-effects model, which is the right first analysis and the one the course's headline claim reports. The dissociation is real and it does remove disorder's main effect. What it does not license is the conclusion that disorder is inert, because the cost of disorder plausibly depends on D — and §11.1 gives the mechanism. This distractor is a partly-correct answer and the most common one; the interaction is the version that survives scrutiny."
    },
    {
      "text": "Neither — taste's ease is explained by its asymmetric loss function, which lets it collapse distinctions no other modality can afford to lose.",
      "correct": false,
      "feedback": "Correct under the assumption that the consumer axis explains the case, and it explains part of it: twenty-five bitter receptors converge onto one axis because the action is identical for all of them [@chandrashekar2006]. But that account is about why taste's *code* is low-dimensional, not why its *stimulus space* is, and the dissociation is about the latter. Also note the general worry from §11.5: the consumer axis explains every case, which is a reason to be suspicious of it explaining this one."
    },
    {
      "text": "The comparison is invalid, because gustation's natural ensemble has not been measured either.",
      "correct": false,
      "feedback": "Correct under the assumption that the two modalities must be matched on ensemble status for the dissociation to be clean — and gustation's unmeasured ensemble is a genuine embarrassment, one §11.2 reports as a failure of its own axis. But it cuts the other way: gustation lacks the measured ensemble *and* has a serviceable normative account and a settled coding dispute, which strengthens rather than weakens the point that its ease does not come from the ingredients olfaction lacks."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s06.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "§11.4 refutes the antiquity explanation of olfaction's missing relay and then reports that its proposed replacement also fails. What exactly fails, and what survives?",
  "options": [
    {
      "text": "The deadline conjunct fails — olfaction has the loosest deadline but one and the deepest path to action — and the re-mapping conjunct survives: neither piriform nor the cerebellum wants its input geometrically re-registered.",
      "correct": true,
      "feedback": "Right, and the failure is the interesting half. The computational hypothesis was sold as 'tight deadline plus a consumer wanting speed rather than re-mapping', and on the datasheet's own numbers olfaction fails the first conjunct outright: ~200 ms, five synapses to action, no fast reflex arc at all. What survives is the second conjunct alone, sharpened by the service decomposition — five of seven thalamic services are provided somewhere, and exactly one, topographic re-mapping, is inapplicable rather than relocated. That is §11.1's claim doing genuine work rather than being restated."
    },
    {
      "text": "The antiquity hypothesis fails entirely, since the spinocerebellar bypass is a counterexample to a universal claim.",
      "correct": false,
      "feedback": "Correct if the hypothesis were stated as 'all bypasses are ancient'. It usually is not — it is a claim about olfaction specifically, and a counterexample elsewhere removes the *inference* from bypass to antiquity without removing the possibility. Olfaction is old and its architecture may be conserved partly for that reason. What has been taken away is the evidence, not the hypothesis, and over-reading the counterexample is as much an error as ignoring it."
    },
    {
      "text": "Both halves fail, leaving no account of the missing relay — which is why the capstone marks the claim provisional.",
      "correct": false,
      "feedback": "Correct under the assumption that 'provisional' means 'unsupported'. The capstone's provisional label is earned by something narrower: the quantitative comparison of thalamic signatures between bulb and LGN has not been run. The re-mapping account is not merely unfalsified — it is the conjunct that survived a test the deadline conjunct failed, which is a better epistemic position than untested."
    },
    {
      "text": "The deadline conjunct survives once you use synapses-to-cortex rather than synapses-to-action, since olfaction is shallowest to cortex.",
      "correct": false,
      "feedback": "Correct under the assumption that the two depth measures are interchangeable, which is precisely the conflation §11.4 opens by dismantling. Depth-to-action tracks deadline well — the VOR at 10 ms through three synapses, the stretch reflex at 30 ms through one. Depth-to-cortex tracks it not at all. Switching measures to save the conjunct is the move the section names and warns you to notice in yourself."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s06.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "The consumer axis predicts correctly for every modality in the module, where the other four each failed somewhere. What is the right response to that record?",
  "options": [
    {
      "text": "Suspicion. The consumer's loss function is almost never measured independently of the code it explains, so an unbroken record is evidence of post-hoc freedom rather than of predictive power.",
      "correct": true,
      "feedback": "Right, and the diagnostic is the difference in kind between the variables. Dimensionality is a receptor count fixed before you look at the brain; the sensor–signal ratio is two measurements, neither made with coding in mind. Those can embarrass you and they did. The consumer is inferred from behaviour, and the behaviour studied is often the one the architecture suggested. An axis that fits everything is not thereby confirmed — it has failed to expose itself. What partially rescues it is cross-modality transfer, which is a genuinely risky move, and the taste-to-olfaction valence prediction is the one clear instance."
    },
    {
      "text": "Acceptance. The consumer is the master variable and the other four are downstream of it, which is why it never fails.",
      "correct": false,
      "feedback": "Correct under the assumption that a perfect fit is evidence of a deeper variable, and this reading survives the evidence in the course — the module says so explicitly and does not adjudicate. But it is not the only reading that survives, and choosing it because the record is perfect is choosing it for the reason that should worry you. The way to separate the two readings is the vestibular diagnosis: an objective stated in advance is a commitment, and post-hoc consumer attribution is not."
    },
    {
      "text": "Indifference. Whether an axis fails elsewhere is irrelevant to whether it is correct about olfaction.",
      "correct": false,
      "feedback": "Correct under a strictly local view of evidence, and there is something to it — an axis can be right about one case for the right reasons regardless of its record. But it discards the only tool available for assessing an unmeasured variable. The consumer's explanatory record across modalities is the evidence about whether the construct has content, precisely because the construct is not measured directly in any of them."
    },
    {
      "text": "Reject the axis. An unfalsifiable variable has no place in a normative account.",
      "correct": false,
      "feedback": "Correct under a strict falsificationist standard, and this course applies that standard often. But it over-corrects: some consumers *are* established from outside neuroscience. Taste's loss asymmetry follows from toxicology and proprioception's controller from cerebellar anatomy, so those cases are not circular. The honest position is that the axis is confirmed where the consumer is externally established and unfalsified elsewhere — not that it is empty."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s06.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Someone reports that natural odour scenes occupy an effective dimensionality of about 8. Which of the course's arguments survives?",
  "options": [
    {
      "text": "The encoding-side arguments — expansion recoding and demixing overdetermination — survive unchanged, because both depend on the measurement count rather than on the latent dimension.",
      "correct": true,
      "feedback": "Right. The receptor array still carries ~1000 channels, so random projection into a larger space with a near-optimal degree still applies [@litwinkumar2017], and four sources still project into a thousand-dimensional measurement space. What collapses is the dimensionality *explanation of the stall*: at effective D of 8, olfaction sits beside gustation and vestibular, both of which have workable normative accounts, and the burden shifts to non-stationarity or the sensor–signal mismatch. Note the result would make the flagship calculation more attractive, not less — an 8-dimensional space with derivable axes is exactly the shape of the problem PCA on cone responses solved."
    },
    {
      "text": "None of them — the dimensionality claim is load-bearing throughout, so the whole comparative argument would need restating.",
      "correct": false,
      "feedback": "Correct under the assumption that one number carries the course, and the capstone's own list of open questions says a low effective dimensionality would mean 'most of the course's dimensionality arguments need restating'. But 'most' is not 'all', and the ones that survive are identifiable in advance: anything indexed to the receptor count rather than the latent dimension. Knowing which arguments are hostage to a measurement is part of stating them honestly."
    },
    {
      "text": "The metric argument survives, since an 8-dimensional space would still have no ordering on the receptor array.",
      "correct": false,
      "feedback": "Correct, and trivially so — the metric claim is about the receptor index set, which no measurement of the ensemble's dimensionality touches. It survives because it was never at risk, which makes it a weak thing to report as surviving. The interesting question is which at-risk arguments survive, and the encoding-side ones are the answer."
    },
    {
      "text": "The coordinate problem would be solved, since knowing the dimensionality tells you the space's structure.",
      "correct": false,
      "feedback": "Correct under the assumption that dimension determines coordinates. It does not — knowing colour space is three-dimensional is a long way short of knowing it has opponent axes, which took a calculation on natural cone statistics [@buchsbaum1983]. An effective D of 8 gives you the size of the problem and none of its geometry, and the axes are what §13 wants."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m11.s06.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 57,
  "prompt": "Order these five claims from most secure to least, given what this module established.",
  "items": [
    { "id": "a", "text": "Motifs consuming a translation group are unavailable in olfaction and cannot be re-derived." },
    { "id": "b", "text": "Thalamic bypass is not a marker of evolutionary antiquity." },
    { "id": "c", "text": "Olfaction's theoretical stall is caused by its dimensionality." },
    { "id": "d", "text": "Thalamus-bypassing pathways share a tight deadline." },
    { "id": "e", "text": "The dominant consumer of the olfactory code is navigation." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "**(a) is nearly definitional and therefore most secure.** Weight sharing needs something to share weights across, and there is no group acting on receptor identity. This is not an empirical claim that could come out otherwise.\n\n**(b) is a clean elimination.** The spinocerebellar bypass exists in a system nobody would call a preserved primitive, so the inference from bypass to antiquity is unsound. Eliminations are the most durable product of comparison — they say a property is not sufficient for a consequence, which no analogy needs to hold for.\n\n**(c) is a live hypothesis resting on an inference from a receptor count.** Olfaction's effective dimensionality is unmeasured, and proprioception is the standing demonstration that nominal and effective can differ sevenfold [@wolpert1995]. Plausible, load-bearing, and hostage to one measurement nobody has made.\n\n**(d) is refuted by the module's own datasheet.** Olfaction has a ~200 ms deadline, five synapses to action, and no fast reflex arc — the proposed common factor does not hold in the case it was invented to unify. Placing it below (c) is the point of the exercise: a claim the course itself advanced and then killed ranks below a claim it advanced and left standing.\n\n**(e) is a conjecture with an explanatory appetite larger than its evidence.** Two independent arguments converge on it, which is worth something, and the bulbar spatial-tuning test that would support it has not been run.\n\nIf you placed (d) above (c), reread §11.4. The temptation is to rank by how prominently a claim features, and (d) features prominently as the replacement for antiquity — which is exactly why noticing that it failed is worth marks."
}
</script>
</x-order>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s06.mx1",
  "contentRev": 1,
  "points": 5,
  "corner": "Axis",
  "prompt": "For each of the module's five axes, name the modality on which it failed to predict — and for the one that never failed, say what that record indicates.",
  "rows": [
    "Ordering and metric",
    "Dimensionality",
    "Sensor–signal timescale",
    "Depth and routing",
    "The consumer"
  ],
  "columns": ["Where it failed", "What the failure shows"],
  "cells": {
    "Ordering and metric|Where it failed": { "answer": "gustation", "accept": ["gustation", "taste"] },
    "Dimensionality|Where it failed": { "answer": "gustation and proprioception", "accept": ["gustation", "proprioception", "gustation, proprioception"] },
    "Sensor–signal timescale|Where it failed": { "answer": "electroreception", "accept": ["electroreception", "electric fish", "the exotic senses"] },
    "Depth and routing|Where it failed": { "answer": "olfaction itself — the deadline conjunct", "accept": ["olfaction", "the deadline conjunct", "olfaction's own deadline"] },
    "The consumer|Where it failed": { "answer": "nowhere", "accept": ["nowhere", "it did not fail", "no failures", "none"] }
  },
  "modelAnswerNote": "Read the last row against the other four.\n\nThe first four axes are properties of the problem as posed to the animal — countable, measurable without knowing anything about the brain, and each of them was embarrassed somewhere. The consumer is a property of the solution, and it was embarrassed nowhere. Two readings survive: the consumer is genuinely the master variable, or it is the axis with the most freedom to be fitted after the fact and its perfect record is a symptom.\n\nThe module does not adjudicate, and neither should you. What separates them is the vestibular diagnosis: an objective stated *in advance* is a commitment that could fail, and 'estimate heading with minimum variance' is one. Nobody can write down what piriform estimates, so the olfactory application of the consumer axis is currently on the wrong side of that line.\n\nNote also that the depth row's failure is unusual: the axis failed on olfaction, the very case it was constructed to explain. That is the most informative failure in the module and the easiest to skim past."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s06.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "This module argues against the course's central claim and then keeps a weakened version of it. Write the strongest case that the weakened version is not worth keeping — that what survives is either trivial or unfalsifiable — and then say what you think actually survives.",
  "modelAnswer": "**The case against the survivors.**\n\nThree things were said to survive. Take each at its weakest.\n\n*Wiring economy.* The claim is that local rules are cheap when the array is ordered, so olfaction must pay for global connectivity where the retina pays for a stencil. This is close to a restatement of the premise: an unordered array has no local rules by definition, so of course it cannot use them. The claim earns its keep only if it makes a quantitative prediction about connectivity cost that could come out otherwise, and none is offered. As stated it is an observation about what 'unordered' means.\n\n*Group-consuming motifs are dead.* This is definitional, and its emptiness is the giveaway: no experiment could refute it. A claim that cannot fail is not a finding, and listing it among the survivors inflates the count.\n\n*The interaction between disorder and dimensionality.* This is the one that looks most like a result and is the most slippery. It is invoked precisely where the main-effect reading fails, and it has never been tested with a case that varies disorder while holding D high — because no such modality exists in the course. An interaction posited to rescue a main effect that failed, with no independent case to test it on, is the shape of an unfalsifiable repair. The mechanism offered (per-connection wiring costs matter at D=1000 and not at D=5) is plausible and entirely untested.\n\n*And the deeper problem.* The audit found six of fourteen motifs consuming no metric at all, including both calculations the course most wants run. So even granting everything that survives, the metric claim has been shown not to be where the stall is. A claim retained in weakened form after being shown irrelevant to the phenomenon it was introduced to explain is being retained for reasons other than evidence.\n\n**What actually survives, in my judgement.**\n\nOne thing survives cleanly, and it is not on the module's list: **the audit itself.** Decomposing 'presupposes a metric' into neighbourhood, betweenness and a translation group, and then asking motif by motif which property each consumes, is a durable analytical move regardless of how the tally comes out. It converts a slogan into a table, and the table is what showed the slogan was mislocated. That is the module's real product.\n\nOf the substantive claims, the group-action one survives as definitional bookkeeping — worth stating once so nobody wastes time looking for olfactory convolution, and worth nothing after that. The wiring-economy claim survives conditionally: it becomes a finding if someone measures connectivity cost in the bulb against a metric-array control and finds the predicted excess, and it stays a restatement until then.\n\nThe interaction I would demote to a *conjecture with a named test*. The test exists in principle: find or engineer a system that is disordered at high D and see whether it inherits olfaction's difficulties, or work the other way and ask whether olfaction's difficulties track its effective rather than nominal dimensionality once that is measured. Both are years away, and saying so is better than presenting the interaction as the module's settled conclusion.\n\n**The self-directed note.** The course's headline claim is 'it is dimensionality, not disorder', and this module is where that gets qualified into an interaction. A reader who takes the headline and skips the qualification ends up with a claim the course does not defend. That is worth noticing about how the course presents itself, not only about what it argues.",
  "rubric": [
    "Attacks each surviving claim individually rather than the module as a whole",
    "Identifies that the group-action survivor is definitional and cannot fail",
    "Identifies that the interaction was posited where the main effect failed and has no independent test case",
    "Notes that six of fourteen motifs consumed no metric, so the claim is retained after being shown mislocated",
    "Offers a considered verdict rather than either full endorsement or full rejection",
    "Bonus: identifies the decomposition of 'metric' into three separable properties as the durable product, independent of the tally",
    "Bonus: names a concrete measurement that would convert the wiring-economy claim or the interaction from restatement into finding",
    "Bonus: notices the gap between the course's headline slogan and the qualified claim this module actually defends"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the capstone</div>
Module 11 was the audit. Four things go forward, and three of them are demotions.

<strong>The central claim survives weakened.</strong> Motifs consuming neighbourhood, betweenness or a translation group are unavailable; motifs defined by population statistics transfer unchanged, and they include the flagship calculation. The stall is not located in the metric.

<strong>Dimensionality is the leading candidate and it is an inference from a receptor count.</strong> Olfaction's effective dimensionality is unmeasured, and proprioception is the standing demonstration that nominal and effective can differ sevenfold.

<strong>The tidy story about the missing relay lost half of itself.</strong> Antiquity fails as a general account of bypass; the deadline half of its replacement fails on olfaction's own numbers. What survives is that neither piriform nor the cerebellum wants geometric re-registration — and the confirming comparison has not been run, which is why the capstone marks the claim provisional.

<strong>An axis that never fails should make you uneasy.</strong> The consumer explains every modality and is measured in almost none of them. What rescues it is cross-modality transfer, because a prediction generated by one system and confirmed in another is risky in a way a fitted explanation is not. Carry that test into §13, where several claims are going to want it.
</x-callout>
