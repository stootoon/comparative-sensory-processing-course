---
id: m09.s07
title: Module quiz — Exotic Senses
lede: Seven questions on the four natural experiments. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 26
---

The four systems in this module are not a curiosity cabinet. Each holds constant something the familiar five confound — a self-generated carrier with known parameters, a probe designed in real time, a fixed and knowable blur kernel, a stimulus that cannot be locally removed — and that is the only reason they are here.

This quiz tests whether you can say, for each one, *what was held constant and what that buys*. Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m09.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You introduce a novel constant background odour and measure how bulbar responses to it decline. What single feature of the result would most strongly favour learned negative-image subtraction over simple adaptation?",
  "options": [
    {
      "text": "An off-response when the background is removed, whose magnitude scales with background strength and whose decay matches the acquisition time.",
      "correct": true,
      "feedback": "This is the diagnostic, and its virtue is that it is a signature no adaptive account produces. A subtractive predictor that has learned a negative image is still emitting it when the input disappears, so removal unmasks the prediction as a positive deflection. Adaptation has nothing to unmask — it only fails to respond. The timescale evidence (minutes rather than seconds) points the same way, but the off-response is the one that cannot be reproduced by a slower adaptive process."
    },
    {
      "text": "The decline takes minutes rather than seconds.",
      "correct": false,
      "feedback": "Correct under the assumption that timescale alone separates the accounts, and the module leans on exactly this — the two predictions differ by orders of magnitude, so the measurement is not delicate. But it is the weaker diagnostic, because a sufficiently slow adaptive mechanism reproduces it. Timescale rules out fast adaptation; it does not rule out slow adaptation. The off-response does."
    },
    {
      "text": "Blocking plasticity at the granule–mitral synapse abolishes the decline.",
      "correct": false,
      "feedback": "Correct under the assumption that plasticity-dependence is specific to learning, and it is genuinely part of the electrosensory signature — anti-Hebbian plasticity at the parallel-fibre input is what builds the negative image. The problem is interpretive rather than logical: plasticity manipulations at that synapse alter mitral cell excitability generally, so an abolished decline is consistent with the cell simply responding differently. It is good corroborating evidence and a poor primary diagnostic."
    },
    {
      "text": "Neurons that stop responding to the background also stop responding to other odours.",
      "correct": false,
      "feedback": "Correct under the assumption that the mechanism is a general gain reduction — which is what you would predict if the answer were divisive normalisation rather than subtraction. That is a real third hypothesis and worth testing for. But it is the signature of the account you are trying to rule *out*: a negative image is specific to the predicted input and should leave responses to unpredicted odours intact."
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
  "prompt": "Electric fish achieve sub-microsecond behavioural precision from neurons with millisecond jitter, by pooling. Which part of that precedent is the part olfaction most needs and most often omits?",
  "options": [
    {
      "text": "The ceiling: pooling improves as the square root of N only while the noise is independent, and shared noise across converging elements sets a floor that no further pooling crosses.",
      "correct": true,
      "feedback": "This is the omitted half, and it is the half that decides whether the olfactory version can work at all. Receptor neurons expressing one receptor type sample the same air through the same epithelium, so a large fraction of their fluctuation is shared. The electrosensory literature has confronted exactly this and its treatment transfers — which is why the import is a quantitative analysis rather than an encouraging analogy. Quoting √n without the ceiling is quoting the part that was never in doubt."
    },
    {
      "text": "The demonstration that behavioural precision can exceed single-neuron precision at all.",
      "correct": false,
      "feedback": "Correct under the assumption that the existence claim is what olfaction lacks. It is not — nobody doubts that populations beat their members, and mice demonstrably discriminate correlations at 40 Hz with ~100 ms receptor time constants [@ackels2021]. The existence proof was free. What was expensive, and what electroreception supplies, is the scaling analysis with its saturation."
    },
    {
      "text": "The fact that the carrier is self-generated, so the expected signal is known exactly.",
      "correct": false,
      "feedback": "Correct under the assumption that the hyperacuity result depends on the known carrier — and for the *negative image* it does, which is why that import comes from the same animal. But the jamming-avoidance pooling result does not: it is an estimation-theoretic argument about phase resolution from noisy elements, and it holds whether or not the signal was self-produced. Keeping the two electrosensory imports separate matters, because only one of them requires the known probe."
    },
    {
      "text": "The anatomical fact of high convergence, which olfaction has at roughly 1000:1.",
      "correct": false,
      "feedback": "Correct under the assumption that the convergence ratio is the transferable content. Olfaction already has the largest convergence in the course, and knowing the number tells you nothing about whether it is being spent on temporal precision. The scaling law is what converts the anatomy into a prediction, and the prediction has a ceiling attached."
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
  "prompt": "Bats maintain an orderly cortical map of echo delay. What does this establish, stated as narrowly as the evidence allows?",
  "options": [
    {
      "text": "Peripheral order is sufficient but not necessary for central topography, so olfaction's unordered array converts the missing-map question from a structural impossibility into an empirical one with named candidates.",
      "correct": true,
      "feedback": "Right, and the narrowness is the point. The bat shows the inference from unordered receptors to no central map is invalid; it does not show olfaction has a map. What it buys is a search target: continuous scalars with wide behaviourally relevant range and a downstream computation that needs local interactions among similar values — concentration and plume-derived source distance, downstream of the bulb. Note the course's own caution that this is unmeasured rather than absent, because the standard preparation holds source distance constant at zero."
    },
    {
      "text": "Maps are built by computation rather than inherited, so retinotopy and tonotopy are also constructed.",
      "correct": false,
      "feedback": "Correct under the assumption that one constructed map generalises to all maps — and it is a tempting over-read. Retinotopy is inherited from the sensor sheet at zero synapses and costs nothing to maintain; the delay map is built by coincidence detection between call and echo and then arranged. Both exist. The bat establishes that the second route is available, not that the first is illusory, and conflating them loses the wiring-economy argument entirely."
    },
    {
      "text": "Olfaction should have a chemotopic map, since a map can be built regardless of receptor arrangement.",
      "correct": false,
      "feedback": "Correct under the assumption that the mappable variable is chemical identity. The bat argument cuts the other way here: a map pays off when downstream computation needs local interactions among *similar* values, and chemical identity supplies neither a metric nor a notion of locality for that to operate on. The capstone is explicit that an unguided hunt for chemotopy is the wrong search and the derived-variable map is the right one."
    },
    {
      "text": "The cochlea must therefore carry some representation of delay, since a map cannot be built from nothing.",
      "correct": false,
      "feedback": "Correct under the assumption that a mapped variable must be present in the afferent code in some form. Delay is present in the *pair* of signals — call and echo — but no cochlear channel measures it, and that is precisely the interesting fact. The variable is relational, computed by comparison, and exists nowhere in the receptor array. Requiring it to be there is the assumption the bat case is meant to break."
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
  "prompt": "The pit organ recovers behavioural acuity from a badly blurred thermal image by deconvolving a known point-spread function. What is the most important disanalogy when the frame is transferred to odour localisation?",
  "options": [
    {
      "text": "The pit's kernel is fixed and deterministic; the plume's is stochastic and non-stationary, so olfaction must infer under a distribution over kernels rather than invert one.",
      "correct": true,
      "feedback": "This is the disanalogy that matters, and it is why the import is valuable rather than merely pretty. It converts odour localisation into blind deconvolution — a harder problem, but a well-posed one with identifiability conditions and a literature, rather than the ill-posed 'how do animals find sources'. It also generates the test: manipulate flow so the actual transport departs from what the animal has experienced, and localisation should degrade in the specific way a model-mismatch account predicts."
    },
    {
      "text": "Infrared radiation travels in straight lines and odour does not, so the forward model is geometric in one case and fluid-dynamical in the other.",
      "correct": false,
      "feedback": "Correct under the assumption that the physics of transport is the load-bearing difference. It is true and it is the *reason* for the real disanalogy, but stated this way it stops one step short. What matters computationally is not that the physics differs but that one forward model is fixed and the other must be estimated online from non-stationary statistics — which is the same extra difficulty the vestibular module identified when comparing constant gravity against turbulent transport."
    },
    {
      "text": "The pit organ is low-dimensional and olfaction is high-dimensional, so the deconvolution runs over vastly more channels.",
      "correct": false,
      "feedback": "Correct under the assumption that dimensionality is the binding cost, and the datasheet does place the two at opposite ends of that axis. But dimensionality is largely orthogonal here: the localisation problem is about recovering a source position from a smeared signal, and it would be just as hard with a single odorant. Note that high dimensionality is on balance a *help* for the related demixing problem, so importing dimensionality as a generic handicap is the error §11.2 warns against."
    },
    {
      "text": "The snake's acuity is behavioural rather than neural, so the deconvolution may not be implemented in the nervous system at all.",
      "correct": false,
      "feedback": "Correct under the assumption that a computational-level account without an identified circuit is not yet a mechanistic claim — which is a fair standard and one this course applies elsewhere. But the analyses do show the blurred image carries enough information for the observed acuity and that plausible neural implementations exist, so the frame is not floating free. This is a caveat on the infrared result, not a disanalogy with olfaction."
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
  "prompt": "Magnetoreception has excellent normative reasoning, decades of effort, and no agreed transduction mechanism. What is the right lesson to draw for olfaction?",
  "options": [
    {
      "text": "The bottleneck was biological, not theoretical — so a field can have good objectives and still stall, and the diagnosis of *which* ingredient is missing must be made case by case rather than assumed.",
      "correct": true,
      "feedback": "Right, and the comparison is instructive because the missing ingredient is different in the two cases. Magnetoreception knows what the animal is estimating — heading — and cannot find the receptor. Olfaction has its receptors characterised in detail and cannot say what is being estimated or what the input ensemble is. Both stall; neither stalls for the other's reason. The warning is against importing 'we need better theory' or 'we need more data' as a blanket prescription."
    },
    {
      "text": "Normative reasoning is insufficient without a mechanism, so olfaction should prioritise circuit-level work over theory.",
      "correct": false,
      "feedback": "Correct under the assumption that magnetoreception's failure indicts theory generally. It does not: theory did the only constraining work available there, ruling out detection schemes that could not survive thermal noise, and that is what progress has looked like. And the prescription inverts olfaction's case, where the receptors are known and the objective is not — §6.11's diagnosis is that stating the objective is the binding constraint, and more circuit data does not relieve it."
    },
    {
      "text": "A sense whose stimulus cannot be locally removed cannot be studied by ablation, so olfaction should avoid lesion methods.",
      "correct": false,
      "feedback": "Correct as a statement about magnetoreception's specific methodological trap — you cannot shield part of an animal from a magnetic field the way you can occlude an eye, and that is genuinely why the receptor hunt failed. But the trap does not transfer: odour delivery is locally controllable and olfactory ablation methods work. This is the disanalogy, not the lesson."
    },
    {
      "text": "Low-dimensional senses are hard for different reasons than high-dimensional ones, so the dimensionality axis explains both stalls.",
      "correct": false,
      "feedback": "Correct under the assumption that dimensionality is the master variable, and the module does place the two at opposite corners — magnetoreception at essentially two numbers, olfaction at several hundred. But saying both are hard at opposite extremes of one axis explains nothing; it is compatible with any outcome. §11.2 makes the sharper point that olfaction's dimensionality figure is a receptor count and its effective dimensionality is unmeasured."
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
  "shuffleSeed": 41,
  "prompt": "Order these four exotic-sense imports by how ready each is to be run in olfaction — most ready first. Readiness means: the measurement is specified, the apparatus exists, and both outcomes are interpretable.",
  "items": [
    { "id": "a", "text": "Negative-image timecourse: introduce a novel constant background odour and measure the decline, its plasticity dependence, and the off-response." },
    { "id": "b", "text": "Sampling tracks uncertainty: vary plume intermittency while holding task difficulty and distance fixed, and ask whether sniff rate rises." },
    { "id": "c", "text": "Pooling versus kinetic diversity: manipulate convergence number and kinetic heterogeneity separately, and measure fast-fluctuation discrimination." },
    { "id": "d", "text": "Acuity as deconvolution: manipulate flow so transport statistics depart from the animal's experience, and look for model-mismatch degradation." }
  ],
  "correctOrder": ["a", "b", "c", "d"],
  "modelAnswerNote": "**(a) first.** Standard delivery, standard recording, no new apparatus, and a diagnostic — the off-response — that needs only careful timing. The two accounts differ by orders of magnitude in predicted timescale, so the measurement is not delicate. The capstone ranks the closely related sniff-triggered experiment as the best cost-to-information ratio in the course for the same reasons.\n\n**(b) second.** Needs controlled plume intermittency, which is real apparatus but well-established, and the prediction is directional: sniff rate should rise when each sample is less informative even though the task is nominally unchanged. The interpretive risk is the control — holding *difficulty* fixed while varying informativeness is exactly the confound that would sink it.\n\n**(c) third.** Conceptually the cleanest dissociation in the module, and the manipulations are hard: reducing convergence number without collateral damage, and reducing kinetic diversity while holding number fixed, are genetic problems rather than stimulus problems. The mechanisms are also not exclusive, so the informative output is a relative contribution rather than a winner.\n\n**(d) last.** The reframing is the most generative thing in the module and the experiment is the least ready, because it requires an estimate of what transport statistics the animal has *experienced* — a rearing-history variable nobody controls. A null is close to uninterpretable, which is what pushes it down regardless of how attractive the idea is.\n\nThe general point: readiness and interest are anti-correlated here, and the ordering above is by readiness. If you ranked by which would change most minds you would get close to the reverse, and both rankings are defensible provided you say which one you are giving."
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
  "prompt": "Fill in the exotic columns of the datasheet. The question is not whether you memorised the table but whether you can say, for each system, which variable it holds constant that the familiar five leave confounded.",
  "rows": [
    "Active control of the stimulus",
    "Forward model known?",
    "Dimensionality"
  ],
  "columns": ["Electroreception", "Echolocation", "Infrared", "Magnetoreception"],
  "cells": {
    "Active control of the stimulus|Electroreception": { "answer": "carrier self-generated", "accept": ["self-generated", "generates its own carrier", "yes — self-generated"] },
    "Forward model known?|Electroreception": { "answer": "exactly known", "accept": ["known", "exact", "yes, exactly"] },
    "Active control of the stimulus|Echolocation": { "answer": "probe designed in real time", "accept": ["probe designed", "real-time probe design", "yes — designed"] },
    "Forward model known?|Infrared": { "answer": "known, fixed blur", "accept": ["known", "fixed blur kernel", "known and fixed"] },
    "Dimensionality|Infrared": { "answer": "low", "accept": ["low", "low–moderate"] },
    "Dimensionality|Magnetoreception": { "answer": "minimal", "accept": ["minimal", "very low", "two numbers", "~2"] }
  },
  "modelAnswerNote": "Read the table as four controls rather than four animals.\n\nElectroreception holds the forward model *exactly* fixed, which is why it produces the clean subtraction result — every other modality's cancellation story is confounded by uncertainty about what should have been predicted. Echolocation separates active control from a known forward model: the probe is redesigned moment to moment, which is what makes optimal-experiment-design testable rather than merely assertable. Infrared holds the blur kernel fixed while the optics stay terrible, isolating acuity-as-computation from acuity-as-optics. Magnetoreception strips dimensionality to essentially nothing and still fails — which is how you know dimensionality is not the only thing that makes a sense hard.\n\nOlfaction's row, for comparison, reads: sampling-controlled, forward model **needed and absent**, dimensionality high. It is the only entry in the course that is active without a forward model, and that combination is what the four imports are each addressing a piece of."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m09.s07.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Pick two of the four exotic systems. For each, name precisely what it holds constant that the familiar five confound, and say what conclusion that licenses which no comparison among vision, audition, touch, taste and vestibular could have licensed. Then name one thing your two chosen systems jointly fail to control for.",
  "modelAnswer": "**Electroreception holds the forward model exactly constant.**\n\nEvery cancellation story in the course has the same shape — subtract what you can predict — and every one of them outside electroreception is confounded by uncertainty about what the correct prediction was. Retinal surrounds subtract a spatial prediction whose accuracy depends on image statistics nobody controls. Vestibular nuclei subtract self-generated head motion, and the efference copy is good but the plant is variable. The electric fish generates its own carrier with a stereotyped waveform, so the expected input is known to the experimenter as well as to the animal.\n\nWhat that licenses: the claim that **a successfully predicting neuron goes quiet, and that the prediction is learned rather than wired**. Both follow from watching the negative image build over minutes at a broad delayed input under anti-Hebbian plasticity, with the driver and the predictor arriving on separate pathways. No comparison among the familiar five separates 'this neuron is untuned' from 'this neuron has successfully predicted its input', because in none of them is the correct prediction independently known. This is the interpretive trap Lesson 5 names, and electroreception is the only place it is cleanly escaped.\n\n**Infrared holds the blur kernel constant while leaving the optics bad.**\n\nThe pit is a pinhole with an aperture far too large, so the image is severely smeared, and the smearing is fixed by geometry. Among the familiar five, acuity and optical quality covary — vision has good optics and good acuity, and where acuity is poor the optics are usually poor too, so the two cannot be separated.\n\nWhat that licenses: **acuity is a computational achievement and can be decoupled from the quality of the front end.** The consequence for olfaction is the reframing of localisation as deblurring under a transport model — an ill-posed question becoming a blind-deconvolution problem with identifiability conditions — and the prediction that performance should track the match between the animal's internal transport model and the actual flow.\n\n**What the pair jointly fails to control.**\n\nBoth are low-dimensional systems with a single dominant consumer, and neither says anything about what happens when the stimulus space is large and the consumer is unresolved. That is precisely olfaction's condition. So both imports arrive with an unexamined premise: that the operation in question — subtraction, deconvolution — scales to a several-hundred-dimensional input whose relevant latent variables are not agreed. Neither system tests that, and the honest label on both imports is that they establish the operation is *available*, not that it is *affordable* here.\n\nA related joint failure: both are systems where the animal's own contribution to the stimulus is either exactly known (the discharge) or absent (the snake does not emit infrared). Olfaction sits in between — sniffing shapes the stimulus and the forward model for it is needed and absent — and neither chosen system holds that combination.",
  "rubric": [
    "For each chosen system, names the specific variable held constant rather than describing the system generally",
    "States a conclusion that requires the exotic case — i.e. one the familiar five confound and cannot separate",
    "For electroreception: identifies that the known carrier is what distinguishes successful prediction from absence of tuning",
    "For echolocation: identifies that the mapped variable is derived and absent from the receptor array, licensing central topography without peripheral order",
    "For infrared: separates acuity from optical quality, and states the resulting reframing of localisation",
    "For magnetoreception: identifies the bottleneck as transduction rather than normative reasoning",
    "Names a genuine joint blind spot rather than a generic caveat",
    "Bonus: notices that most exotic systems are low-dimensional with a single identified consumer, which is exactly the condition olfaction does not satisfy",
    "Bonus: distinguishes establishing that an operation is available from establishing that it is affordable at olfaction's scale"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Four templates leave this module, and they are templates rather than analogies — each comes with a specified measurement.

<strong>Cancellation with a known predictor</strong> (§9.2) — the bulb has the electrosensory architecture: a broad delayed input onto principal cells. Whether it runs the electrosensory computation is a timecourse measurement, and the off-response is the diagnostic.

<strong>Hyperacuity with a ceiling</strong> (§9.2) — pooling buys precision as √N until shared noise stops it. Olfactory receptor neurons of one type sample the same air, so the ceiling is not a technicality here. Carry the ceiling, not just the square root.

<strong>Maps of derived variables</strong> (§9.3) — an unordered receptor array precludes *inherited* topography, not central topography. §10.3 turns this into the question of whether olfaction's missing map is absent or unlooked-for, and the answer favours unlooked-for.

<strong>Acuity as deconvolution</strong> (§9.4) — the plume is a blur kernel applied to a point source, and the kernel is stochastic rather than fixed. That is a harder problem with a literature, which is the whole value of the import.

And one warning, from magnetoreception: decades of good normative reasoning did not produce a transduction mechanism, because the bottleneck was biological. Before prescribing more theory or more data for olfaction, say which ingredient is actually missing.
</x-callout>
