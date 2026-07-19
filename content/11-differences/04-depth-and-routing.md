---
id: m11.s04
title: Depth and routing
lede: Olfaction reaches cortex in two synapses with no obligatory relay. The usual explanation is evolutionary antiquity — and touch and proprioception, which are not ancient, bypass the thalamus too. This section runs the test and reports what survives.
estimatedMinutes: 18
---

## Two numbers, and they do not correlate

The datasheet carries two depth measures and they are routinely conflated.

| Modality | Synapses to cortex | Synapses to fastest motor output | Deadline of that behaviour |
|---|---|---|---|
| Olfaction | 2 | 5 | ~200 ms |
| Vestibular | 4 | 3 | ~10 ms |
| Gustation | 4 | 2–3 | ~500 ms |
| Vision | 4 | 4 | ~150 ms |
| Touch | 4 | 2 | ~70 ms |
| Proprioception | 4 | 1 | ~30 ms |
| Audition | 6 | 4 | ~50 ms |

Read the first column and olfaction is the outlier: shallowest by two synapses, with no obligatory relay. Read the second and olfaction is the *deepest*, and proprioception's monosynaptic stretch reflex is shallowest.

The inversion is the section's first result. **Olfaction is shallow to cortex and has no fast reflex arc at all**, which immediately rules out one tidy explanation: shallowness is not about reflex speed. Whatever explains the two-synapse path to piriform, it is not a deadline, because the fastest odour-guided behaviours are slow by the standards of every other modality on the table.

Meanwhile the second column correlates well with deadline. The VOR at 10 ms runs through three synapses; the stretch reflex at 30 ms through one; the grip-slip correction at 70 ms through two. **Depth-to-action tracks deadline; depth-to-cortex does not.** These are different quantities answering different questions, and treating "olfaction is only two synapses from cortex" as a claim about speed is a category error.

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Sort by synapses to cortex, then by synapses to action, and watch olfaction move from one end of the ordering to the other. It is shallowest to cortex and deepest to motor output — a combination no deadline-based account predicts. Then sort by deadline and note how tightly the action column tracks it while the cortex column does not. The two depths are different quantities, and the argument that olfaction's shallowness reflects urgency dies on this figure.">
</x-figure>

## The antiquity hypothesis, and the test that kills it

The standard explanation for olfaction's missing relay: olfaction is phylogenetically the oldest sense, its architecture predates the thalamus, and the thalamus was subsequently interposed in the modalities that evolved or elaborated later. On this account the two-synapse path is a fossil.

The alternative — the computational hypothesis — says a relay is interposed where a relay has work to do, and olfaction lacks one because the work is absent.

These make different predictions, and there is a clean test available. **If antiquity explains thalamic bypass, then every bypass should be found in an ancient system.** Find a bypass in a recent one and the antiquity account is falsified as a general explanation.

The bypasses exist. **Spinocerebellar pathways carry tactile and proprioceptive information to the cerebellum without passing through the thalamus.** Both routes are present alongside the thalamic route in the same animal, carrying overlapping information to different consumers.

Are they ancient? The cerebellum has deep vertebrate origins, but the mammalian spinocerebellar system as it exists — including Clarke's nucleus with its recoding into limb variables — is not a preserved primitive architecture; it is elaborated in step with the limbs it serves. Nobody would call the mammalian spinocerebellar tract a fossil in the sense the olfactory argument requires.

So the antiquity hypothesis fails as a *general* account of thalamic bypass. That much is clean.

## What survives, stated carefully

The failure above is narrower than it looks, and honesty requires spelling out what it does and does not establish.

**What it establishes.** Thalamic bypass is not a marker of antiquity, because at least one bypass occurs in a system that is not ancient. Any argument of the form "olfaction bypasses thalamus, therefore olfaction is running an ancestral architecture" is unsound, since the premise is compatible with recent origin.

**What it does not establish.** It does not show that antiquity plays *no* role in olfaction specifically. The general claim and the particular claim are different, and refuting the general one leaves the particular one standing unrefuted — merely unsupported by this argument. Olfaction is old; its architecture may well be conserved for reasons that include its age. What has been removed is the *inference from bypass to antiquity*, not the possibility.

**What the alternative predicts, and whether it holds.** If bypass occurs where the relay has no work, the bypassing pathways should share a functional profile. The brief's proposal is that they share a tight deadline and a consumer that wants speed rather than re-mapping.

Check this against the datasheet and it half-works. The spinocerebellar routes do have tight deadlines — 30 ms for the stretch reflex, 70 ms for grip correction — and a consumer, the cerebellar forward model, that wants raw fast signal. Good.

Olfaction does not. Its deadline is ~200 ms, the loosest but one on the table, and its consumer is an associative cortex. **The proposed common factor does not in fact hold across the cases it was invented to unify.** The brief presents deadline-plus-speed-hungry-consumer as evidence for the computational hypothesis over antiquity, and on the datasheet's own numbers olfaction fails the deadline half of it.

That is a genuine failure of a tidy story and it should stand. What the two cases actually share is the *second* half only: neither consumer wants geometric re-mapping. The cerebellum wants the raw afferent signal; piriform wants a distributed pattern it can associate over. Neither wants a topographically re-registered version of its input, and topographic re-mapping is the one thalamic service that is unambiguously geometric.

<x-figure src="content/11-differences/figures/relay-services.js"
  caption="Decompose the thalamus into services and 'olfaction has no thalamus' stops being one mysterious fact. Five of seven services are provided, relocated into the bulb and into cortical feedback. Exactly one — topographic re-mapping — is inapplicable rather than relocated, and that is §11.1's claim doing genuine explanatory work here rather than being restated. Switch the comparison column to Proprioception: its cerebellar route drops the same services olfaction lacks, which is what the antiquity hypothesis cannot explain and the no-geometry-to-re-map account can.">
</x-figure>

<details class="x-deeper">
<summary>Go deeper: why "obligatory relay" is the wrong variable, and what to measure instead<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

The datasheet's "obligatory relay" row is binary — LGN, IC and MGB, none — and binary variables hide the interesting structure. A better formulation asks, for each thalamic service, whether it is provided, and where.

Consider what a relay nucleus is architecturally: a population interposed between periphery and cortex, receiving driver input from below and modulatory input from cortical layer 6 in far greater number. The layer 6 projection typically outnumbers the ascending driver input by an order of magnitude, which means the structure is not primarily relaying at all — it is comparing an ascending signal against a descending prediction.

Under that reading, a "relay" is a **comparison stage**, and the question becomes: does olfaction have one? It does. The granule-cell layer of the bulb receives massive feedback from piriform and delivers inhibition onto mitral cells, which is architecturally the same computation in a different package [@koulakov2011]. The electrosensory lobe uses the identical motif to build a negative image of the animal's own discharge, and the vestibular nuclei to subtract self-generated head motion at the first central synapse [@cullen2012].

So the honest version of "olfaction has no obligatory relay" is: **olfaction has no anatomically separate comparison stage, because the comparison happens within the first circuit rather than after it.** The bulb is doing bulb-work and relay-work in one structure.

That reformulation makes a prediction the binary version cannot. If the granule-cell layer implements the comparison, then introducing a novel constant background odour should produce a *learned* cancellation with a timecourse of minutes and a dependence on plasticity — not the seconds-scale, plasticity-independent timecourse of simple receptor adaptation. The two are distinguishable in a single experiment, and it has not been done in olfaction the way it has in electroreception.

</div>
</details>

## What the shallowness actually predicts

Set aside why the path is short and ask what follows from its being short.

The vision module's fourth hook is the useful one: vision's normative theory is strong at the retina, partial at V1, and absent beyond, and the wall arrives about three synapses in. If theory degrades with depth in a way that reflects distance from measurable physical constraints rather than intrinsic difficulty, then **olfaction reaching cortex in two synapses means its theory should run out sooner in synapse count**, and this should not be mistaken for olfaction being harder.

Check it. Olfactory theory is in good shape at the receptor and antennal lobe: divisive normalisation [@olsen2010], improved separability of ensemble representations [@bhandawat2007], random projections to Kenyon cells near the optimal degree [@litwinkumar2017]. That is two synapses of solid ground, which is the same *fraction* of the pathway as the retina represents in vision. Beyond that, piriform, where accounts are sparse — but piriform is only the third synapse, so the comparison to make is with V1, not with V4.

Made that way, olfaction is not behind. It is approximately where vision is at the equivalent depth, and it looks worse only because the pathway is short enough that the wall arrives while the reader still expects progress. **This is the most reassuring result in the module and it is a comparison, not a measurement** — the theory-maturity scores on the datasheet are ordinal and were assigned by this course.

One further consequence, less reassuring. Depth is where intermediate representations get built, and a system with fewer stages has fewer places to put them. Audition builds sound-source location across six synapses because it must construct a variable the cochlea never measures. If olfaction needs to construct source location — a variable the receptor array equally never measures — it has two synapses to cortex in which to do it, and no obligatory relay in which to do it. Either the construction happens in the bulb, or it happens in or after piriform, or it happens on a pathway nobody has looked at. The datasheet does not record an answer, and the honest entry is **unmeasured**.

<x-mcq>
<script type="application/json">
{
  "id": "m11.s04.x1", "contentRev": 1, "points": 1,
  "prompt": "Spinocerebellar pathways carry tactile and proprioceptive signals to the cerebellum without a thalamic relay. What does this establish about the claim that olfaction's missing relay reflects evolutionary antiquity?",
  "multi": false,
  "options": [
    { "text": "It refutes antiquity as a general account of thalamic bypass, but leaves the particular claim about olfaction unsupported rather than refuted.", "correct": true, "feedback": "Right, and the distinction matters. The bypass exists in a system nobody would call a preserved primitive, so 'bypass implies ancient' is unsound as an inference. That removes the argument without removing the possibility: olfaction is old, and its architecture may be conserved partly for that reason. The evidence has been taken away, not the hypothesis." },
    { "text": "It refutes antiquity entirely, since a single counterexample falsifies a universal claim.", "feedback": "Correct if the antiquity hypothesis were stated as 'all bypasses are ancient'. It usually is not — it is stated as a claim about olfaction specifically, which a counterexample elsewhere weakens without refuting. Over-reading the counterexample is as much an error as ignoring it." },
    { "text": "It supports antiquity, since the cerebellum itself has deep vertebrate origins.", "feedback": "Correct under the assumption that the age of the target structure determines the age of the pathway. The cerebellum is old; the mammalian spinocerebellar system with Clarke's nucleus recoding into limb variables is elaborated alongside the limbs it serves, and is not a fossil in the sense the argument needs." },
    { "text": "It is uninformative, because cerebellar and cortical targets are not comparable destinations.", "feedback": "Correct if 'thalamic bypass' meant specifically 'reaching neocortex without a relay'. But the hypothesis under test is about why a relay is interposed at all, and the cerebellar case is a genuine instance of ascending sensory information reaching a large plastic structure with no interposed nucleus. Narrowing the claim to save it is a move worth noticing in yourself." }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s04.x2", "contentRev": 1, "points": 6,
  "corner": "Modality",
  "prompt": "Fill in both depth measures and the deadline. The final column asks which of the two depths, if either, the deadline predicts.",
  "rows": ["Olfaction", "Proprioception", "Audition", "Vestibular"],
  "columns": ["Synapses to cortex", "Synapses to action", "Deadline (ms)"],
  "cells": {
    "Olfaction|Synapses to cortex": { "answer": "2", "accept": ["two"] },
    "Olfaction|Synapses to action": { "answer": "5", "accept": ["five"] },
    "Olfaction|Deadline (ms)": { "answer": "~200", "accept": ["200", "about 200"] },
    "Proprioception|Synapses to action": { "answer": "1", "accept": ["one", "monosynaptic"] },
    "Proprioception|Deadline (ms)": { "answer": "~30", "accept": ["30", "about 30"] },
    "Audition|Synapses to cortex": { "answer": "6", "accept": ["six", "5+", "5 or more"] },
    "Vestibular|Synapses to action": { "answer": "3", "accept": ["three"] },
    "Vestibular|Deadline (ms)": { "answer": "~10", "accept": ["10", "about 10"] }
  },
  "modelAnswerNote": "The two depth columns anti-correlate for olfaction: shallowest to cortex, deepest to action. Deadline predicts the action column well — 10 ms through three synapses for the VOR, 30 ms through one for the stretch reflex — and predicts the cortex column not at all. Olfaction has the second-loosest deadline on the table and the shortest cortical path, which is the combination that rules out urgency as the explanation for its shallowness."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s04.x3", "contentRev": 1, "points": 1,
  "prompt": "The brief proposes that thalamus-bypassing pathways share 'a tight deadline and a consumer that wants speed rather than re-mapping'. Test this against the datasheet and report honestly what survives.",
  "modelAnswer": "The proposal has two conjuncts and only one survives. The deadline conjunct fails. Spinocerebellar routes do have tight deadlines — 30 ms for the stretch reflex, 70 ms for grip correction — but olfaction's fastest dependent behaviour runs at about 200 ms, the second-loosest deadline in the course, and olfaction has no fast reflex arc at all; its synapses-to-action count is the highest on the datasheet. So the property invoked to unify the bypassing cases does not hold in the case it was invoked to explain. The re-mapping conjunct survives and does the real work. The cerebellum wants the raw afferent signal for a forward model; piriform wants a distributed pattern it can associate over. Neither consumer wants its input geometrically re-registered, and topographic re-mapping is the one unambiguously geometric thalamic service. Decomposing the thalamus into services makes this precise: olfaction implements five of seven somewhere, relocated into the bulb and cortical feedback, and only the re-mapping service is inapplicable rather than relocated. So the correct statement is not that bypass tracks urgency but that a relay is interposed where geometric re-registration is needed, and olfaction has no geometry to re-register.",
  "rubric": [
    "Separates the proposal into two conjuncts and evaluates them independently",
    "Reports that olfaction's ~200 ms deadline and 5 synapses to action falsify the deadline conjunct",
    "Identifies the re-mapping conjunct as the one that survives, and says why for both cerebellum and piriform",
    "Uses the service decomposition rather than the binary relay/no-relay variable",
    "Does not paper over the failure of the deadline conjunct"
  ]
}
</script>
</x-free-response>

<x-order>
<script type="application/json">
{
  "id": "m11.s04.x4", "contentRev": 1, "points": 1, "partialCredit": true,
  "prompt": "Order these modalities by depth from receptor to cortex, shallowest first.",
  "items": ["Olfaction (2)", "Vision (4)", "Touch (4)", "Gustation (4)", "Audition (6)"]
}
</script>
</x-order>
