---
id: m01.s12
title: Module quiz — Vision
lede: Eight questions on what vision established and what it hands forward. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 25
---

This quiz tests whether you can *use* the module, not whether you remember it. Several questions ask you to apply a vision result to a modality vision knows nothing about — which is the skill the whole course is built around.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m01.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Atick and Redlich predicted that the optimal retinal filter shifts from bandpass to lowpass as light level falls, and Dan et al. confirmed it in LGN. What is the single most important reason this counts as a strong normative result rather than a post-hoc account?",
  "options": [
    {
      "text": "The prediction was made in advance, it was risky — the theory could have predicted a single fixed filter — and the direction of the shift was specified before it was measured.",
      "correct": true,
      "feedback": "This is the criterion that matters. §0.2 lists five requirements, and the one that separates a normative theory from a story is a risky prediction that could have failed. Efficient coding does not say 'decorrelate'; it says decorrelate at high SNR and pool at low SNR, and that is a prediction with a sign attached. A theory that accommodates whatever is found is not being tested."
    },
    {
      "text": "The input ensemble — natural image statistics — was measured independently of the neural data.",
      "correct": false,
      "feedback": "Correct under the assumption that the binding criterion is a measured ensemble, and this is genuinely essential — it is criterion one, and its absence is exactly what blocks the olfactory version (§3.11). But it is not sufficient. You could have a measured ensemble and still merely accommodate the data after the fact. The measured ensemble makes the calculation possible; the advance prediction makes it a test."
    },
    {
      "text": "The result replicates across species and preparations.",
      "correct": false,
      "feedback": "Correct under the assumption that generality is what distinguishes a strong result. Replication matters for believing the measurement, but a robustly replicated post-hoc account is still post-hoc. Note that the fly's contrast-response result [@laughlin1981] is a single species and single cell type and is arguably the cleanest normative demonstration in the literature — because it was a prediction, not because it was general."
    },
    {
      "text": "It derives from an optimisation principle rather than from a mechanistic model.",
      "correct": false,
      "feedback": "Correct under the assumption that the normative level is inherently more explanatory — a common view, and one §0.1 deliberately resists. Being normative is what makes it a *normative* result, not what makes it a *strong* one. Plenty of optimisation arguments are unfalsifiable because the objective and constraints are chosen after seeing the answer, which is the failure mode this course keeps flagging."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m01.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague says: \"Whitening amplifies high spatial frequencies, and noise is concentrated at high frequencies, so at low light the system must stop whitening.\" One clause of that is wrong. Which, and why does it matter?",
  "options": [
    {
      "text": "Noise is not concentrated at high frequencies — it is roughly flat. What collapses at low light is the signal, and it is the signal-to-noise ratio at each frequency that drives the switch.",
      "correct": true,
      "feedback": "Right, and this distinction does real work. Photon noise is approximately white, so its spectrum is flat. Natural images have power falling as roughly 1/f², so at low light the signal falls below the flat noise floor at high frequencies first. The optimal filter therefore stops boosting exactly where SNR has collapsed. Getting this backwards makes the theory sound like a story about noise when it is a story about a ratio."
    },
    {
      "text": "Whitening does not amplify high frequencies; it flattens the output spectrum, which is a different operation.",
      "correct": false,
      "feedback": "Correct under the assumption that flattening and amplifying are distinct — but for a 1/f² input, flattening the output *is* achieved by amplifying high frequencies, so the two describe the same filter. The clause is loosely worded rather than wrong."
    },
    {
      "text": "The system does not stop whitening at low light; it whitens more, to recover the attenuated signal.",
      "correct": false,
      "feedback": "Correct under the assumption that the goal is faithful reconstruction of the input at any cost. Under that objective you would indeed boost harder. But the efficient-coding objective is information transmitted subject to a coding cost, and amplifying a band whose SNR is below one spends capacity on noise. This is the intuition the crossover result overturns, which is why it was a risky prediction."
    },
    {
      "text": "Nothing is wrong — the reasoning is a correct summary of the crossover result.",
      "correct": false,
      "feedback": "Correct only if the noise spectrum really were high-frequency-weighted. It is not, and the error is common enough that this course flags it explicitly in §1.5. If you picked this, reread that section — the argument only works with the ratio, not with either term alone."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m01.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "PCA on natural cone responses yields the achromatic axis and two opponent axes [@buchsbaum1983; @ruderman1998]. Someone proposes running the identical calculation on olfactory receptor activations across natural odour scenes. Beyond the missing database, what is the deepest obstacle?",
  "options": [
    {
      "text": "Receptor responses to mixtures are not linear — competitive binding and antagonism break superposition at the first stage — so the linear-PCA move is not straightforwardly available.",
      "correct": true,
      "feedback": "This is the structural obstacle, and it is why the olfactory version is not merely the vision calculation with a bigger matrix. Cone responses to a mixture of wavelengths add; receptor responses to a mixture of odorants do not [@shen2013]. PCA on a space where superposition fails is not obviously meaningful, and any honest version of the calculation has to model the nonlinearity first."
    },
    {
      "text": "Odour space has no metric, so principal components have no interpretation as directions.",
      "correct": false,
      "feedback": "Correct under the assumption that PCA requires a metric on the *stimulus* space. It does not — PCA operates on the receptor-activation vectors, which live in a perfectly good Euclidean space of dimension equal to the receptor count, exactly as cone responses do. This is a case where the course's central claim about metrics does NOT apply, and §12.1 flags the opponent-axis calculation as one of the six audited motifs that never needed a metric."
    },
    {
      "text": "There are ~1000 receptor types rather than 3, so the covariance matrix cannot be estimated reliably.",
      "correct": false,
      "feedback": "Correct under the assumption that dimensionality is the binding constraint on estimation, and it is a real practical worry — estimating a 1000×1000 covariance needs a great many samples. But it is a sample-size problem, which is a version of the database problem the question sets aside, and it is soluble with regularisation. The nonlinearity is not soluble that way."
    },
    {
      "text": "Olfactory perception is largely learned, so there are no innate axes for the calculation to recover.",
      "correct": false,
      "feedback": "Correct under the assumption that the axes must be innate to be real — and this is a genuinely open possibility that Import 12 develops, where coordinates come from consequence rather than from chemistry. But it is a hypothesis about the answer rather than an obstacle to the calculation, and if it were true the calculation would still be informative, just about the wrong thing."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m01.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision has retinotopy, and almost every early visual motif depends on it. What is the strongest reason to think olfaction's lack of a comparable map is *predicted* rather than anomalous?",
  "options": [
    {
      "text": "The standard explanation for why maps exist is wiring-length minimisation, which requires a metric on the receptor array to have anything to minimise. Olfaction has none, so the explanation predicts no map.",
      "correct": true,
      "feedback": "This is the argument, and its virtue is that it turns an absence into a consequence. Maps are usually explained as minimising the wire needed for local interactions among similar values. 'Similar' requires a metric; olfactory receptor identity supplies none. So the absence is what the theory of maps predicts, rather than a gap in olfaction. Note that this leaves open a map of a *derived* variable, which §14.2 pursues."
    },
    {
      "text": "Olfaction reaches cortex in two synapses, which is too few to construct a map.",
      "correct": false,
      "feedback": "Correct under the assumption that map formation requires depth. It does not — the retina's map is inherited free from the sensor sheet at zero synapses, and bats build echo-delay maps for a quantity the cochlea never measures. Depth is neither necessary nor sufficient, and this distractor is worth thinking about because it conflates a map's origin with its cost."
    },
    {
      "text": "The olfactory bulb does show coarse chemotopy, so the premise of the question is false.",
      "correct": false,
      "feedback": "Correct under a reading of the evidence that this course treats as contested. §1.4 and §3.4 both note that bulbar chemotopy is at best coarse and disputed. Even granting weak clustering, it is not doing the computational work retinotopy does — nothing downstream appears to exploit bulbar position the way V1 exploits retinal position."
    },
    {
      "text": "Adult neurogenesis continuously rebuilds the bulb, so a stable map could not be maintained.",
      "correct": false,
      "feedback": "Correct under the assumption that maps require anatomical stability — an interesting thought, and not obviously false. But it inverts the likely causation: §3.2 argues neurogenesis is a response to non-stationary statistics, and plenty of plastic structures maintain maps. This explains too much, since it would predict no stable representation of any kind in the bulb."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m01.s12.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 13,
  "prompt": "Put the five steps of the efficient-coding template in the order they must be carried out. §2.4 formalises this; the question is whether you can reconstruct it from the vision examples.",
  "items": [
    { "id": "a", "text": "Assemble and measure an ensemble of natural stimuli." },
    { "id": "b", "text": "Specify what is being optimised — the representation, and the objective." },
    { "id": "c", "text": "Specify the constraints: channel count, noise, metabolic cost." },
    { "id": "d", "text": "Solve for the optimum." },
    { "id": "e", "text": "Compare the optimum against the measured biology." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "The order matters more than it looks, and the reason is the failure mode it prevents.\n\nIf you specify the objective and constraints *after* seeing the biology, you can almost always find a combination that makes the observed solution optimal — which is how optimisation arguments become unfalsifiable. Fixing (a) through (c) before (d) and (e) is what makes the exercise a test.\n\nFor olfaction, steps 2 through 5 are ready and step 1 does not exist. That is the whole gap, and §2.4 states it in exactly these terms. But Import 15 adds a subtler point: step 2 is also not settled for olfaction, because 'encode odour identity efficiently' names no latent variable and no loss. The field may be missing two ingredients, not one."
}
</script>
</x-order>

<x-mcq>
<script type="application/json">
{
  "id": "m01.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "§1.6 decomposes the thalamus into services rather than treating it as a relay. Why is that reframing the useful move for this course?",
  "options": [
    {
      "text": "Because it converts \"olfaction has no thalamus\" from a single mysterious fact into a checklist — which services does olfaction implement, and where?",
      "correct": true,
      "feedback": "Exactly. A relay is a thing you either have or lack; a set of services is something you can audit. §3.6 can then ask, service by service, whether the bulb's granule-cell gating under cortical feedback provides attentional gain control and state-dependent gating, and Import 10 turns that into a quantitative comparison against LGN. Decomposition is what makes an absence investigable."
    },
    {
      "text": "Because LGN turns out not to be a relay at all, given that most of its input is cortical feedback.",
      "correct": false,
      "feedback": "Correct under the assumption that the anatomical fact settles the functional question, and the fact is right — feedback dominates the afferent drive. But noting that LGN is not a simple relay does not by itself tell you what it is for, and the course's move is the constructive one: enumerate the services, then go looking for them elsewhere."
    },
    {
      "text": "Because it shows that olfaction's missing relay is explained by evolutionary antiquity.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which this course examines and largely rejects — Import 10 and §12.4 show touch and proprioception also bypass thalamus and are not ancient. The service decomposition is neutral between explanations; it is a tool for asking the question, not an answer to it."
    },
    {
      "text": "Because thalamic services are conserved across modalities, so olfaction must have them somewhere.",
      "correct": false,
      "feedback": "Correct under the assumption that conservation is established — but that is the hypothesis under test, not a premise. The honest position is that the services are a checklist to search against, and finding that olfaction lacks some of them entirely would be a result rather than a failure of the method."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m01.s12.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Fill in vision's column from memory, then check it against §1.11. The point is whether the profile is now familiar enough to reproduce, since every later module is read against it.",
  "rows": [
    "Array ordering",
    "Ensemble measured?",
    "Statistics stationary?",
    "Obligatory thalamic relay"
  ],
  "columns": ["Vision"],
  "cells": {
    "Array ordering|Vision": { "answer": "ordered, metric", "accept": ["ordered","retinotopic","ordered and metric","metric","yes"] },
    "Ensemble measured?|Vision": { "answer": "yes", "accept": ["yes","measured","well characterised","well-characterised"] },
    "Statistics stationary?|Vision": { "answer": "yes", "accept": ["yes","stationary","largely","mostly"] },
    "Obligatory thalamic relay|Vision": { "answer": "LGN", "accept": ["lgn","yes","lateral geniculate","lateral geniculate nucleus"] }
  },
  "modelAnswerNote": "Vision is the reference column, and the reason to know it cold is that every claim about olfaction being unusual is implicitly a claim about a difference from this profile. When you meet 'olfaction has no obligatory relay', the useful next question is what LGN was doing — which is §1.6's decomposition, and which Import 10 turns into an experiment."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m01.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision's normative theory is strong at the retina, partial at V1, and absent beyond. State the best explanation you can for where the wall is, then say what that predicts for olfaction — which reaches cortex in two synapses rather than four.",
  "modelAnswer": "**Where the wall is, and why.**\n\nThe retina admits a precise problem statement: given natural image statistics and a known noise level, transmit maximum information through a limited-capacity optic nerve. Every term is measurable, so the optimum is derivable and testable. V1 admits a partial one — sparse coding of natural images recovers oriented filters [@olshausen1996] — but the objective is already less forced, and several different objectives yield similar filters, which weakens the test. Beyond V1 nobody can write down what V4 or IT is estimating with comparable precision.\n\nThe best diagnosis, and §6.11 makes it from the other direction, is that **the wall is where the objective stops being statable**, not where the circuits become complicated. The vestibular system is evidence for this reading: its normative success is *central* rather than peripheral, because 'estimate heading with minimum variance' is precise even though the circuits are not simple. Complexity is not the barrier; specifiability is.\n\n**What it predicts for olfaction.**\n\nExpect the theory to run out sooner in synapse count, and do not mistake that for olfaction being harder. If the wall arrives roughly where the objective becomes unstatable, and olfaction reaches cortex in two synapses, then the tractable zone is the epithelium and the bulb, and piriform is already past it. That matches the state of the literature.\n\nThe non-obvious consequence: a theorist working on piriform is attempting something closer to a V4-level problem than a retina-level one, and should expect correspondingly less traction. **The productive response is not to work harder on piriform but to find the parts of olfaction where an objective can be stated** — which Import 15 argues are the temporal ones, since plume statistics support a precise estimation problem in a way chemical identity currently does not.",
  "rubric": [
    "Identifies statability of the objective, rather than circuit complexity, as what sets the wall",
    "Notes that the retinal problem has every term measurable and the extrastriate one does not",
    "Draws the consequence that olfaction's theory should run out at a shallower depth",
    "Warns against reading that as olfaction being intrinsically harder",
    "Bonus: uses the vestibular case as evidence that complexity is not the barrier",
    "Bonus: concludes that effort should move to where an objective is statable, i.e. the temporal problem"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Vision supplies the templates, and four of them recur throughout the course.

<strong>The efficient-coding template</strong> (§1.2, §1.5) — measure the ensemble, state the objective and constraints, derive, compare. Audition runs it again on sound and it works again; olfaction cannot run step one.

<strong>The SNR reversal</strong> (§1.5) — the same principle predicts opposite structures in different regimes. Any claim of the form "sensory systems do X" should prompt: under what conditions, and what do they do otherwise?

<strong>The metric dependence</strong> (§1.4) — surrounds, maps, interpolation, convolution all need "nearby" to mean something. §12.1 audits which of these actually survive without a metric, and the answer is more than you would expect.

<strong>Thalamus as services, not a relay</strong> (§1.6) — the decomposition that makes olfaction's missing relay investigable rather than merely puzzling.
</x-callout>
