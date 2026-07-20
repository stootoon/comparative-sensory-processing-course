---
id: m06.s12
title: Module quiz — Vestibular
lede: Seven questions on the one modality with a complete normative account, and on why it succeeded where vision and audition failed. Every distractor is right under a different assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 26
---

Vestibular passes all five criteria of §0.2, which nothing else in this course does — and it did so *centrally*, which inverts vision and audition. That inversion is the module's real payload, because the diagnosis it supports is actionable for olfaction in a way more data would not be.

This quiz tests whether you can use the template rather than admire it. Two questions turn on a detail that is easy to read past: the animals are near-optimal, not optimal, and that is the stronger result.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m06.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Behavioural cue weights in the heading task show modest but reproducible deviations from the Bayesian optimum, and MSTd population decoding predicts the weights *including* those deviations [@fetsch2011]. Why is this a more stringent test of the normative account than exact optimality would have been?",
  "options": [
    {
      "text": "A theory predicting only the optimum makes one prediction; a theory whose implementation predicts the specific shortfall is constrained at many more points and had many more ways to fail.",
      "correct": true,
      "feedback": "This is the argument, and it inverts the usual reading of a deviation. Exact optimality is a single target that many mechanisms could hit, and it is also the outcome a motivated analysis can be pushed toward. A decoder that reproduces the *idiosyncratic pattern* of shortfall is matching a high-dimensional signature it could not have matched by accident. §0.2's fourth criterion — a risky prediction that could have failed — is satisfied far more stringently. Take this as the template for what a confirmed normative account looks like."
    },
    {
      "text": "It shows the deviations are noise rather than systematic error, since the neural and behavioural estimates agree.",
      "correct": false,
      "feedback": "Correct under the assumption that agreement between two measurements indicates noise cancelling out. But the deviations are reproducible, which is precisely what makes them not noise — and if they were noise, the decoder reproducing them would be an accident rather than a result. The finding requires the deviations to be real and systematic to have any force."
    },
    {
      "text": "It rescues the theory, since the behaviour would otherwise have falsified the Bayesian prediction.",
      "correct": false,
      "feedback": "Correct under the assumption that the account being tested is \"behaviour is optimal\", in which case the deviations are a problem needing rescue and this is a repair. That is how the result is often reported, and it undersells it badly. The account under test is that MSTd computes a reliability-weighted combination, and behaviour inherits whatever that computation produces — optimal or not. On that framing the deviations are a bonus prediction, not a debt."
    },
    {
      "text": "It demonstrates that the neural implementation is the true locus of the computation rather than a downstream decision stage.",
      "correct": false,
      "feedback": "Partly correct, and it is a real corollary — the correspondence does localise the weighting to MSTd rather than to a later decision process. But localisation is a claim about anatomy, and the question asks about the strength of the test. A perfectly localised computation that only ever predicted the optimum would still be weakly constrained."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m06.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Tilt and translation produce identical otolith signals. What is the correct characterisation of this fact, and what does it license for olfaction?",
  "options": [
    {
      "text": "It is a principled ambiguity following from the equivalence principle — no accelerometer of any construction could separate them — so the resolution must come from a second signal plus a forward model, and olfaction's concentration/distance/transport confound has the same structure.",
      "correct": true,
      "feedback": "Right on both halves. Calling it principled matters because it changes what counts as a solution: you stop looking for a better sensor and start looking for the extra signal and the model that combines it. In vestibular the extra signal is the canals; in olfaction it is temporal structure plus a model of turbulent transport. And it tells you what to look for neurally — units whose responses reflect the *combination*, not either input alone."
    },
    {
      "text": "It is a sensor limitation that evolution has not overcome, and the neural solution is a workaround for hardware that could in principle be improved.",
      "correct": false,
      "feedback": "Correct under the assumption that biological sensors are generally suboptimal and neural computation compensates — which is true often enough that it is a sensible default, and photoreceptor noise is a real case. It fails here for a reason worth internalising: the indistinguishability is physics, not biology. Gravitational and inertial acceleration are locally identical. This distractor is the belief that makes people look for the wrong kind of solution in olfaction too."
    },
    {
      "text": "It is resolved by the otoliths themselves through their frequency response, since sustained signals indicate tilt and transients indicate translation.",
      "correct": false,
      "feedback": "Partly correct, and this heuristic is genuinely used — the somatogravic illusion is what happens when sustained acceleration is misread as tilt, which shows a frequency-based prior is in play. But it is a prior, not a solution, and it fails exactly when the world violates it. The actual resolution combines canal angular-velocity signals with a forward model of head dynamics, which works for sustained translation where the heuristic does not."
    },
    {
      "text": "It is the same kind of ambiguity as olfaction's, and equally hard, since both require a forward model estimated from the input.",
      "correct": false,
      "feedback": "Partly correct on structure and wrong on difficulty, and the difference is one of the module's sharpest contributions. Gravity is constant, so the vestibular forward model is stationary and can be hard-wired. Turbulent transport is not stationary, so the olfactory model must be estimated online from statistics that keep changing. Same template, strictly harder instance — and stating the extra difficulty precisely is what the comparison buys."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m06.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "The normative programme succeeds centrally for vestibular and fails centrally for vision and audition. What is the best diagnosis, and what does it prescribe for olfaction?",
  "options": [
    {
      "text": "The vestibular objective can be stated precisely — minimum-variance estimate of self-motion — while nobody can say what V4 or A1 estimates. The prescription is to state the olfactory objective before gathering more data.",
      "correct": true,
      "feedback": "This is the diagnosis, and it is actionable in a way most methodological advice is not. The field's instinct is that olfaction needs better recordings. The vestibular case says the binding constraint may be that nobody has written down what the system is estimating — and §3.11 notes the candidates (identity, concentration, source location) demand different answers, so the ambiguity is not a technicality. Vision's own §1.11 reaches the same conclusion from the other direction."
    },
    {
      "text": "Vestibular circuits are simpler — three neurons for the VOR — so the calculation is tractable where cortical circuits are not.",
      "correct": false,
      "feedback": "Correct under the assumption that circuit complexity sets the limit, which is the standard explanation and is wrong here in an instructive way. The VOR arc is simple, but the normative success is not in the arc — it is in MSTd and the brainstem–cerebellar circuits, which are not simple at all. Meanwhile the retina, where vision's success lives, computes twenty parallel feature channels. Complexity does not track where theory works."
    },
    {
      "text": "Vestibular has a measured ensemble of natural head motion, which vision lacks beyond V1 and audition lacks beyond A1.",
      "correct": false,
      "feedback": "Correct under the assumption that ensemble measurement is the binding criterion — it is criterion one of §0.2 and is exactly what blocks olfaction's flagship calculation, so the instinct is well trained. But vision has natural image statistics in abundance and its central account still fails. The ensemble is necessary and not sufficient, and the vestibular case isolates what is additionally needed: a statable objective."
    },
    {
      "text": "Vestibular estimates a physical variable while cortical areas represent abstract or learned categories, which have no ground truth to be optimal about.",
      "correct": false,
      "feedback": "Partly correct, and close to the right answer — having a physical variable to estimate is a large part of why the objective is statable. But it is not the same claim, and the difference matters for olfaction. Odour identity and source location are perfectly physical, and the objective is still not stated. What is missing is a commitment to which one the system is estimating, not the existence of a ground truth."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m06.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vestibular nuclei subtract self-generated head motion at the first central synapse, so neurons responding vigorously to passive rotation appear unresponsive during active head movements [@cullen2012]. What is the correct experimental transfer to olfaction, and what would a null result mean?",
  "options": [
    {
      "text": "Deliver identical odour transients sniff-triggered versus externally timed, and ask whether bulbar cells silent in the active case respond to the passive one. A null result would mean the silence is genuine unresponsiveness rather than successful prediction.",
      "correct": true,
      "feedback": "Right, and the design's virtue is that it holds the stimulus fixed and varies only its predictability, which is the only way to distinguish subtraction from insensitivity. Lesson 5 is that a neuron which has successfully subtracted its prediction goes quiet, so silence is a result rather than an absence of response — an interpretive trap that has caught people in several fields. The null is informative precisely because the alternative hypothesis is well specified."
    },
    {
      "text": "Compare bulbar responses to odour presented during fast versus slow sniffing, since cancellation should scale with the magnitude of the self-generated component.",
      "correct": false,
      "feedback": "Correct under the assumption that cancellation strength tracks the amplitude of self-generated input, which is true of the cancellation itself. But sniff rate changes the *stimulus* — sorption, flow, and the odour transient's shape all vary with sniff vigour — so the manipulation confounds predictability with the thing being predicted. The whole point of the sniff-triggered/externally-timed design is that it breaks that confound."
    },
    {
      "text": "Record from piriform rather than the bulb, since cancellation in vestibular occurs at the first *central* synapse and the bulb is peripheral.",
      "correct": false,
      "feedback": "Correct under a strict reading of \"first central synapse\", and the anatomical care is appropriate. But the mapping is wrong: the bulb is the first central circuit in olfaction, receiving receptor-neuron input directly, and it has the architecture cancellation requires — granule cells delivering broad, delayed cortical feedback onto mitral cells, the same arrangement as the electrosensory negative image (§8.2). Piriform is one synapse too late."
    },
    {
      "text": "Introduce a novel constant background odour and measure how long bulbar cells take to stop responding to it.",
      "correct": false,
      "feedback": "Correct under the assumption that the target is negative-image *learning* — and this is a real and well-posed experiment, listed in §9's templates, where minutes-long plasticity-dependent timecourses distinguish learned cancellation from simple adaptation. But it tests learning of an external regularity, not cancellation of a self-generated signal, and the vestibular result is specifically about reafference. Right family, different question."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m06.s12.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 62,
  "prompt": "Order the ingredients of the vestibular normative account as §0.2's five criteria require them, then read the note on which one olfaction is actually missing.",
  "items": [
    { "id": "a", "text": "A measured ensemble of natural head motion." },
    { "id": "b", "text": "Physical constraints: two noisy sensors with known reliabilities, and a provable ambiguity between tilt and translation." },
    { "id": "c", "text": "A precisely stated objective: the minimum-variance estimate of self-motion." },
    { "id": "d", "text": "Quantitative risky predictions: combined thresholds follow a specific formula, and weights shift by a specific amount when reliability is degraded." },
    { "id": "e", "text": "Confirmation behaviourally and neurally, including the deviations from the optimum." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Nothing else in the course completes this sequence, and the useful exercise is to run each modality against it and find where it stops.\n\nVision stops at (e) for V1 and at (c) beyond it. Audition the same. Touch stops at (a), because the ensemble is co-authored by the animal (§4.2). Gustation stops at (a) too, though only because nobody has done a calculation that §5.11 argues is the easiest in the course.\n\n**Olfaction is usually said to stop at (a), and that is half right.** The chemical ensemble is unmeasured; the plume ensemble is measured and tractable [@celani2014; @tootoonian2025]. But §6.11's diagnosis is that the deeper failure is at **(c)**: 'encode odour identity efficiently' names no latent variable and no loss, and identity, concentration and source location demand different answers. A field stuck at (a) needs data. A field stuck at (c) needs to decide what question it is asking, and more data will not supply that."
}
</script>
</x-order>

<x-mcq>
<script type="application/json">
{
  "id": "m06.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vestibular is arguably the most essential sense — losing it is catastrophic — and has the thinnest cortical representation in the course, reached almost as an afterthought. What does this establish about pathway depth?",
  "options": [
    {
      "text": "Depth to cortex measures the deadline of the fastest dependent behaviour, not a modality's importance — the VOR needs 10 ms, so it gets three synapses and does not wait for cortex.",
      "correct": true,
      "feedback": "Right, and the rule generalises across the course: bitter gape at 2–3 synapses, grip correction at 70 ms, olfactory discrimination at 2 synapses to cortex with a ~200 ms deadline. Applied to olfaction it removes a common rhetorical move — treating shallow cortical access as evidence of a primitive or degraded sense. It is evidence about timing requirements and nothing else."
    },
    {
      "text": "It shows depth tracks how much must be computed before the signal is useful, since vestibular computes nothing geometric.",
      "correct": false,
      "feedback": "Partly correct — this is §2.6's rule, and it does real work explaining why audition, which computes location from scratch, is the deepest. But vestibular is not a clean case for it: the tilt/translation resolution is a substantial computation with a forward model, and it happens fast anyway. The deadline rule explains vestibular; the computation rule explains audition. Both are true and this question is about the one vestibular demonstrates."
    },
    {
      "text": "It shows cortical representation is required only for conscious perception, which vestibular largely lacks.",
      "correct": false,
      "feedback": "Correct under the assumption that cortex is the seat of awareness and that vestibular is not consciously perceived. There is something to it — vestibular percepts are thin, and §7 makes the parallel point that proprioceptive perception may be a by-product of control machinery. But it does not explain the *depth*, only the thinness of the percept, and it would wrongly predict shallow pathways wherever awareness is weak."
    },
    {
      "text": "It shows evolutionarily older systems have shorter pathways, since vestibular is among the oldest sensory systems in vertebrates.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which is the same explanation offered for olfaction's missing relay and which this course keeps rejecting on the same grounds. Audition shares the octavolateralis origin with vestibular and is the deepest pathway in the course. Antiquity predicts nothing here; the deadline predicts the number of synapses almost exactly."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m06.s12.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Fill vestibular's column, then note that on every one of these rows olfaction is the opposite. Check against §6.11.",
  "rows": [
    "Ensemble measured",
    "Prior available",
    "Forward model",
    "Synapses to action"
  ],
  "columns": ["Vestibular"],
  "cells": {
    "Ensemble measured|Vestibular": { "answer": "yes", "accept": ["yes", "measured", "natural head motion", "yes, natural head motion"] },
    "Prior available|Vestibular": { "answer": "gravity — constant and exploitable", "accept": ["gravity", "gravity, constant", "gravity - constant", "constant gravity", "yes, gravity"] },
    "Forward model|Vestibular": { "answer": "known and stationary", "accept": ["known and stationary", "known, stationary", "known", "stationary"] },
    "Synapses to action|Vestibular": { "answer": "3 (VOR)", "accept": ["3", "three", "3 (vor)", "three, vor"] }
  },
  "modelAnswerNote": "Olfaction's column on these four rows reads: chemical ensemble unmeasured, no exploitable constant prior, forward model needed and absent, two synapses to cortex with a ~200 ms decision.\n\nThe forward-model row is the one to carry forward. Vestibular's is stationary, so it can be hard-wired and never revisited; olfaction's must be estimated online from non-stationary turbulent statistics. That single difference converts a solved problem into an open one, and it is the most precise statement of olfaction's extra difficulty that the course produces — obtained entirely by comparison, which is the method's argument for itself.\n\nThe stationarity point also feeds §3.10: a system whose forward model must track a changing world needs continuing plasticity, which is a functional argument for bulbar neurogenesis that does not depend on an external teacher."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m06.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "VOR recalibration works because retinal slip is an unambiguous error signal with a known desired value of zero. Olfaction has no equivalent teacher. Say what follows for the argument that bulbar adult neurogenesis serves adaptation, and what the honest version of that argument has to look like.",
  "modelAnswer": "**Why VOR recalibration is easy, and why that matters.**\n\nThe VOR has a teacher with three properties that rarely co-occur: the error signal is **available** (retinal slip is measured continuously), **unambiguous** (slip has one interpretation — the gain is wrong), and has a **known target** (zero). Adaptation is then a supervised problem with a scalar objective, and it works: put prisms on an animal and the gain retunes over days.\n\nOlfaction has none of these. There is no slip-equivalent. An unexpected odour response is not an error, because the system does not know what the response should have been. The only candidate ground truths — post-ingestive consequence, navigational success — are delayed, sparse, and available for a tiny fraction of the odours encountered.\n\n**What follows for the neurogenesis argument.**\n\nThe common framing is that neurogenesis provides plasticity for the bulb to *adapt* to a changing odour world (§3.10). Stated that way it borrows the VOR's logic without the VOR's teacher, and the borrowing is illegitimate. Adaptation toward what? Supervised adaptation needs an error signal, and there isn't one.\n\n**The honest version rests on an unsupervised objective**, and this is fine — it is just a different claim requiring different evidence. Candidates:\n\n- **Decorrelation or whitening** of the bulbar representation with respect to the current input distribution. Non-stationary statistics (§3.2) mean the optimal decorrelating transform keeps moving, and tracking it needs continuing plasticity. No teacher required, since the objective is defined on the input alone.\n- **Maintaining representational capacity** as the set of behaviourally encountered odours drifts.\n- **Self-supervision from the forward model**, which §7 supplies from the other direction: proprioception recalibrates with no external teacher, using prediction error from its own model. Sniffing gives olfaction a predictable self-generated component, so a prediction-error signal is available even though a ground-truth one is not.\n\n**The methodological point.** These make different predictions — an unsupervised decorrelation objective predicts neurogenesis rate should track input non-stationarity rather than task performance, and the self-supervised version predicts dependence on intact sniff-related reafference. Saying \"neurogenesis serves adaptation\" without naming the objective is unfalsifiable in exactly the way §0.2 warns about, and the vestibular comparison is what makes the omission visible.",
  "rubric": [
    "Identifies the three properties that make retinal slip a usable teacher: available, unambiguous, known target",
    "States that olfaction has no equivalent, and why delayed consequence does not substitute",
    "Concludes the neurogenesis-as-adaptation argument cannot be supervised and must rest on an unsupervised or self-supervised objective",
    "Names at least one concrete unsupervised objective, e.g. tracking a moving optimal decorrelation under non-stationary statistics",
    "Bonus: imports proprioception's self-supervised recalibration via a forward model, with sniffing as the predictable component",
    "Bonus: notes that the candidate objectives make distinguishable predictions, so naming one is what makes the claim testable"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Vestibular is the course's existence proof, and four things travel with it.

<strong>The diagnosis</strong> (§6.11) — normative theory succeeds where the objective can be stated, not where circuits are simple. The prescription for olfaction is to state the objective before gathering more data, since identity, concentration and source location demand different answers.

<strong>The ambiguity template</strong> (§6.1) — a principled ambiguity from the equivalence principle, resolved by a second sensor under a forward model. Olfaction's concentration/distance/transport confound has the same structure and a strictly harder instance, because turbulent transport is not stationary.

<strong>What confirmation actually looks like</strong> (§6.7) — near-optimal behaviour whose deviations are themselves predicted by population decoding [@fetsch2011]. Hold the other modalities to this standard, not to exact optimality.

<strong>Cancellation at the first central synapse</strong> (§6.5, §6.11) — self-generated motion subtracted early, producing neurons that look unresponsive [@cullen2012]. Silence is a result. The sniff-triggered versus externally-timed experiment transfers directly.
</x-callout>
