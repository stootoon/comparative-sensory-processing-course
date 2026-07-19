---
id: m11.s05
title: What the consumer wants
lede: The loss function is a design variable, and it is the only axis in this module that predicts architecture across all eight modalities without a failure. That success is also its weakness — an axis that never fails is an axis that may not be risking anything.
estimatedMinutes: 18
---

## The axis

The four previous axes were properties of the stimulus or the sensor. This one is a property of whoever reads the code, and it turns out to be the most predictive of the five.

State it as a claim: **the code is shaped by what the downstream consumer needs to decide, and where the consumer's loss function is asymmetric or low-dimensional, the code collapses distinctions the stimulus contains.**

The datasheet carries the relevant entries scattered across modules — gustation's "loss function: grossly asymmetric" and "distinctions: deliberately collapsed", proprioception's "dominant consumer: a controller, not a percept", vestibular's "synapses to action: 3 (VOR)". Pulled together they describe one variable.

<x-figure src="content/11-differences/figures/loss-asymmetry.js"
  caption="The calculation behind twenty-five bitter receptors. Drag the loss ratio out to 10⁵:1 and watch where the achievable improvement comes from: almost entirely from detecting more compounds, almost none from telling them apart, because the action is identical either way. Receptor breadth is allocated by the loss function rather than by the chemistry. Note that odour identity has no fixed position on this axis — it sits wherever the consumer asking the question puts it, which is why olfaction shows both the collapsed and the preserved regimes in different streams.">
</x-figure>

## Four consumers, four codes

**Taste: one binary decision under a wildly asymmetric loss.** Swallowing a toxin can be fatal; rejecting a safe food costs a meal. The loss ratio is enormous, and the design consequences follow from the figure: twenty-five bitter receptors converging onto one axis, one sweet receptor for a bounded category, near labelled-line coding peripherally, and a rejection reflex two to three synapses from the receptor [@chandrashekar2006]. **The system does not know which bitter compound it tasted and has no use for the information.** This is the purest case in the course of a stimulus distinction being deliberately destroyed, and it explains a striking design fact from task structure alone.

**Proprioception: a controller.** The consumer is the cerebellar forward model, which wants limb variables — endpoint position, velocity, the configuration the controller acts on — not muscle lengths. Clarke's nucleus performs that recoding by the second synapse [@bosco2001] — though §7.5 notes that the limb's own mechanical linkages contribute part of the transformation, so the neural share is real but not cleanly quantified [@bosco2003]. The loss here is not asymmetric; it is a squared-error loss on a control variable, which wants an *unbiased* estimate, and that is why proprioception's code preserves metric detail in the variables it cares about while discarding the coordinate system the receptors delivered.

Note the ordering point this makes. §11.1 treated ordering as binary, and proprioception is the third case: **ordered by an irrelevant variable.** Its array is arranged by body position, which is not what is being estimated. That is arguably worse than being unordered, and the system recodes anyway — which is the encouraging precedent for olfaction, since it shows a first circuit can deliver a basis the receptors did not supply.

**Vestibular: a reflex with a 10 ms deadline, plus a slower percept.** The objective is stateable — minimum-variance estimate of self-motion — and the consequence is a normative account that passes all five criteria of §0.2, uniquely in this course [@angelaki2004]. The relevant lesson is that the objective's stateability, not the circuit's simplicity, is what made the account possible.

**Vision: open-ended consumers.** No privileged decision, so no privileged collapse, so the code preserves metric detail and the retina ships ~20 parallel feature channels. This is the negative control: where the consumer is unspecified, the code specialises for nothing.

## The prediction that ties it together

If the consumer determines the code, then a modality serving *several* consumers with conflicting demands should split into parallel streams — and the splits should be attributable to specific conflicts, not merely observed.

This is Lesson 7 arriving from a different direction, and the datasheet supports a three-way classification of splits. Conflicting invariance requirements: identity wants position-invariance, location wants the opposite. Conflicting loss functions: metric detail versus fast categorical withdrawal. Conflicting deadlines: the same content needed at 10 ms and at seconds.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Filter by reason and the classification holds up: eleven splits across seven modalities, each attributable to a specific conflict rather than to a general tendency to divide. The two olfactory entries to watch are the honest ones — the what/where split is marked PREDICTED, not located, and the mitral/tufted split is marked PROPOSED. The loss-driven split into piriform and cortical amygdala is confirmed, which is one confirmation out of three predictions and should be read as such.">
</x-figure>

The invariance row is the strongest inference in this module and worth stating carefully. Vision splits ventral/dorsal, and one could explain that away by the spatial receptor array — identity and location are different functions of a spatial map, so of course they diverge. Audition splits anterior/posterior *from an array with no spatial dimension at all*. Touch splits a third time. **Three independent instances, one of them from a non-spatial array, makes the split a consequence of the computational problem rather than of the receptor geometry** — and predicts olfaction should have one.

That prediction is unconfirmed. The datasheet records the olfactory what/where split as predicted and not located. This is a place where the honest entry is **unmeasured rather than absent**: the experiments that would find a location-selective olfactory stream have largely not been run, because the psychophysical literature is dominated by discrimination and identification tasks that could not detect one.

Which is the proprioception hook turned on the field itself. A proprioception literature built entirely on conscious position sense would have missed the cerebellum. **If the dominant consumer of the olfactory code is navigation, then the identification-and-discrimination literature has been studying the side effect.** That is a claim about what has been looked for, not a claim about what exists, and this course cannot settle it.

<details class="x-deeper">
<summary>Go deeper: why an axis that never fails should make you uneasy<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

The previous four sections each found a modality where the axis failed to predict. Ordering failed against gustation. Dimensionality failed against gustation's unmeasured ensemble and proprioception's mature theory. Sensor–signal ratio failed to be uniquely olfactory once electroreception was admitted. Depth failed on the deadline conjunct.

This section found none. Every modality's code is explicable from its consumer's demands. That should be uncomfortable rather than satisfying, and the reason is that the consumer is not independently measured.

Compare the two kinds of variable. Dimensionality is fixed before you look at the brain: count the receptor types. The sensor–signal ratio is two measurements, one physiological and one behavioural, neither made with the code in mind. These can embarrass you, and in this module they did.

The consumer's loss function is almost never measured. It is inferred from behaviour, and the behaviour was often chosen because it was the one the code seemed built for. "Taste has an asymmetric loss" is well grounded, since the asymmetry follows from toxicology rather than from neuroscience. "Proprioception's consumer is a controller" is well grounded, since the cerebellar anatomy is independent evidence. But "the olfactory consumer wants bearing and distance" is a hypothesis about what would explain the architecture, and using it to explain the architecture is circular.

The test that breaks the circle is the one the taste module supplies: **loss functions predict across modalities.** The prediction that innate-valence pathways should collapse distinctions while identity pathways preserve them was derived from the taste case and confirmed in olfaction, in a system whose architecture played no part in generating it. Cross-modality transfer is what converts a post-hoc rationalisation into a risky prediction.

The corresponding untested transfer is the navigation one, and it has a clean form: if the consumer wants source location, bulbar neurons should be tuned to plume-derived spatial variables — bearing, distance, time since last encounter — and not merely to odour identity. §3.8 and §7 arrived at this independently. It is falsifiable, it has not been tested, and until it is, the navigation consumer is a conjecture with an explanatory appetite larger than its evidence.

</div>
</details>

## What this axis says about the whole module

Set the five axes side by side and a pattern emerges that none of them shows alone.

Ordering, dimensionality, sensor speed and depth are properties of the *problem as posed to the animal*. They are measurable without knowing anything about the brain, and each of them failed somewhere. The consumer is a property of the *solution*, and it never failed.

The optimistic reading: the consumer is genuinely the master variable, and the others are downstream. The sceptical reading: the consumer is the axis with the most freedom to be fitted after the fact, and its perfect record is a symptom.

Both readings survive the evidence in this course, and the way to separate them is the vestibular diagnosis. The normative programme succeeds centrally for vestibular and fails centrally for vision and audition, and the difference is not circuit complexity but whether the objective can be *stated in advance*. "Estimate heading with minimum variance" is a commitment made before looking. Nobody can write down with comparable precision what V4 or A1 estimates, and nobody can write down what piriform estimates.

So the actionable version of this axis is not "find out who consumes the olfactory code" but something sharper: **write down the objective precisely enough that it could be wrong, before gathering more data.** The candidates — identity, concentration, source location — demand different answers, and the field's instinct to gather better data first has the order backwards.

## What the five axes leave the capstone

Summarising across the module, four things go forward.

**One.** The central claim survives in a weakened and more useful form. Motifs consuming neighbourhood, betweenness or a translation group are unavailable; motifs defined by population statistics transfer unchanged, and they include the flagship calculation. The stall is not located in the metric.

**Two.** Dimensionality is the leading candidate for the stall, and it is an inference from a receptor count. Olfaction's *effective* dimensionality is unmeasured, and proprioception is the standing demonstration that nominal and effective can differ sevenfold.

**Three.** The two axes where olfaction is not the outlier — active control of the stimulus, and forward models — are where the transferable machinery lives. Electroreception, echolocation and vestibular all solved problems olfaction has, using pooling, optimal sampling and forward models respectively.

**Four.** The binding constraint is a stateable objective, not more data. Every axis in this module ends at the same place: nobody has written down precisely what the olfactory system is estimating, and the three candidates demand different codes. That is what §12 has to fix before anything else in it can be evaluated.

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Highlight each modality in turn and read only the bottom two rows — forward model available, and normative theory maturity. They track almost perfectly, and vestibular and proprioception lead on both. That is the same claim as this section's, in the datasheet's own coarse scoring: knowing what the consumer wants is what makes an objective stateable, and a stateable objective is what makes the normative calculation well-posed. Olfaction scores 1 on forward model and 2 on maturity, and those are not independent numbers.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s05.x1", "contentRev": 1, "points": 1,
  "prompt": "Taste collapses twenty-five bitter receptors onto one axis. Vision preserves metric detail across ~20 parallel retinal channels. Which single difference best explains the contrast?",
  "multi": false,
  "options": [
    { "text": "Taste's consumer makes one decision under an extreme loss asymmetry, so distinctions that do not change the action are worthless; vision's consumers are open-ended, so no distinction can be safely discarded.", "correct": true, "feedback": "Right, and note the direction of the argument: the design fact is explained from task structure alone, with no appeal to chemistry or to receptor biophysics. That is what makes it the strongest qualitative normative result outside vestibular." },
    { "text": "Taste is low-dimensional and vision is higher-dimensional, so taste has fewer distinctions available to preserve.", "feedback": "Correct under the assumption that collapse follows from dimensionality. It does not — taste receives hundreds of chemically distinguishable bitter compounds and could in principle distinguish them. The low dimensionality of the taste CODE is the thing being explained, not the explanation, and the collapse is what produces it." },
    { "text": "Taste transduction is slow and noisy, so fine distinctions would not survive the sensor anyway.", "feedback": "Correct under the assumption that the code is limited by the transducer. Bitter receptors are individually selective and the peripheral information exists; it is discarded centrally at a convergence, which is a design choice rather than a sensor limit." },
    { "text": "Taste is evolutionarily older, so it has had longer to compress its code toward the minimum sufficient representation.", "feedback": "Correct if compression accumulated with time rather than tracking the loss function. The cross-modality test refutes it: within olfaction, innate-valence pathways collapse while identity pathways preserve, in one animal of one age. Loss structure, not phylogenetic age, sorts them." }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s05.x2", "contentRev": 1, "points": 6,
  "corner": "Modality",
  "prompt": "Name the dominant consumer, the shape of its loss, and the design consequence that follows.",
  "rows": ["Gustation", "Proprioception", "Vestibular", "Vision", "Olfaction"],
  "columns": ["Dominant consumer", "Loss shape", "Design consequence"],
  "cells": {
    "Gustation|Dominant consumer": { "answer": "ingest-or-reject decision", "accept": ["a binary decision", "rejection reflex", "one decision"] },
    "Gustation|Loss shape": { "answer": "grossly asymmetric", "accept": ["asymmetric", "very asymmetric"] },
    "Gustation|Design consequence": { "answer": "distinctions deliberately collapsed", "accept": ["collapsed", "25 bitter receptors onto one axis", "broad bitter tuning"] },
    "Proprioception|Dominant consumer": { "answer": "a controller", "accept": ["cerebellar forward model", "motor controller", "not a percept"] },
    "Proprioception|Design consequence": { "answer": "coordinate transformation into limb variables", "accept": ["recoding to limb variables", "Clarke's nucleus recoding", "coordinate transform"] },
    "Vestibular|Loss shape": { "answer": "minimum variance on self-motion", "accept": ["squared error", "symmetric", "minimum-variance estimate"] },
    "Vision|Dominant consumer": { "answer": "open-ended", "accept": ["many consumers", "unspecified", "no privileged decision"] },
    "Vision|Design consequence": { "answer": "metric detail preserved", "accept": ["preserves detail", "~20 parallel channels", "no collapse"] },
    "Olfaction|Dominant consumer": { "answer": "unresolved", "accept": ["unknown", "contested", "identity or navigation — unresolved"] }
  },
  "modelAnswerNote": "The olfaction row is the one that matters and its first cell is 'unresolved'. Identity, concentration and source location demand different codes, and the field has not committed. The vestibular case says why that is the binding constraint: its normative account succeeds centrally not because the circuit is simple but because the objective can be stated in advance. Note also that this table is easy to fill in after the fact for every row — which is the axis's weakness as well as its strength, since the consumer is inferred from the architecture it is then used to explain."
}
</script>
</x-matrix>

<x-predict>
<script type="application/json">
{
  "id": "m11.s05.x3", "contentRev": 1,
  "prompt": "Suppose the dominant consumer of the olfactory code is navigation rather than identification. Before reading on: write down two things about the existing literature that this would explain, and one prediction it makes that could fail.",
  "placeholder": "What would look different, and what would you go and measure?",
  "reveal": "It would explain two persistent frustrations. First, why psychophysical odour identification is so poor in humans relative to visual object recognition, while odour-guided navigation in rodents is fast and reliable — the tasks psychophysics measures may simply not be the ones the system was built for. Second, why piriform looks like an associative memory rather than a feature hierarchy: if the identity stream is a secondary consumer, there is no reason to expect the V1-to-V4 progression that vision trained everyone to look for.\n\nThe prediction that could fail is specific: bulbar output neurons should carry information about plume-derived spatial variables — bearing to source, distance, time since last encounter — beyond what is explained by odour identity and concentration. §3.8 and §7 reached this independently, from the mixture problem and from the Clarke's nucleus precedent respectively.\n\nIt is falsifiable and it has not been tested. If bulbar activity turns out to be fully explained by identity and concentration, the navigation-consumer hypothesis loses its main structural support and becomes a claim about downstream areas only. Note carefully that the current absence of such reports is NOT evidence against, because the recordings that would reveal it require freely moving animals in characterised plumes, which very few experiments have done.",
  "followUp": "The proprioception hook warns that a literature built on conscious position sense would have missed the cerebellum entirely. What is the olfactory equivalent of the cerebellum, and how would you know if you had missed it?"
}
</script>
</x-predict>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s05.x4", "contentRev": 1, "points": 1,
  "prompt": "This section's axis predicted correctly for every modality, unlike the previous four. Argue that this is a weakness rather than a strength, and then say what would rescue it.",
  "modelAnswer": "The concern is that the consumer's loss function is almost never measured independently of the code it is used to explain. Dimensionality is a receptor count fixed before you look at the brain; the sensor-signal ratio is two measurements neither of which was made with coding in mind. Both can embarrass you and both did, against gustation and against electroreception respectively. The consumer is inferred from behaviour, and the behaviour studied is frequently the one the architecture suggested. An axis with that much post-hoc freedom will fit everything, and fitting everything is not evidence. Two things rescue it, unevenly. First, some consumers are established from outside neuroscience: taste's loss asymmetry follows from toxicology, and proprioception's controller from cerebellar anatomy, so those cases are not circular. Second and more importantly, loss functions transfer across modalities. The prediction that innate-valence pathways collapse distinctions while identity pathways preserve them was derived from taste and confirmed in olfaction, in a system that played no part in generating it — a genuinely risky prediction. The untested transfer is the navigation one: if the olfactory consumer wants source location, bulbar neurons should be tuned to plume-derived spatial variables. Until that is tested the navigation consumer remains a conjecture whose explanatory appetite exceeds its evidence, and the honest version of this axis is that it is confirmed where the consumer is externally established and unfalsified elsewhere.",
  "rubric": [
    "States the circularity: the consumer is usually inferred from the architecture it explains",
    "Contrasts with at least one axis whose variable is measured independently and did fail",
    "Identifies the cases where the consumer IS externally established (toxicology for taste, cerebellar anatomy for proprioception)",
    "Names cross-modality transfer as the mechanism that converts rationalisation into risky prediction, with the valence/identity example",
    "States the untested olfactory transfer and what would falsify it"
  ]
}
</script>
</x-free-response>
