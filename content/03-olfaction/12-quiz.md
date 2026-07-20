---
id: m03.s12
title: Module quiz — Olfaction
lede: Eight questions, and the hardest set in the course. Every distractor is the right answer under a different normative assumption, and several ask you to tell a well-motivated proposal apart from an established result.
estimatedMinutes: 28
---

This quiz tests whether you can *use* the module, not whether you remember it. Olfaction is where the course's machinery is aimed, so the questions are correspondingly less forgiving: some ask which of three conflated problems a given experiment actually addresses, and some ask you to say how much of a proposal is evidence and how much is possibility.

That last skill matters more here than anywhere else. This module contains proposals that are well posed, biologically motivated, and unconfirmed, and reading them as settled would be a worse error than not knowing them at all.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A lab reports that piriform ensembles are concentration-invariant and concludes that piriform \"represents odour\". §3.1 separates three problems conflated under that word. What is the sharpest objection?",
  "options": [
    {
      "text": "Concentration invariance is a solution to the identity problem obtained by discarding exactly what the intensity and location problems need — so the result constrains one of the three and is silent, or negative, about the other two.",
      "correct": true,
      "feedback": "Right, and the sign matters: this is not merely a gap but evidence of a division of labour. Bulbar responses remain strongly concentration-dependent while piriform's identity representations are not, and the invariance is *computed* by recurrent circuitry recruiting global feedback inhibition that truncates the later concentration-dependent input [@bolding2018]. Something that throws away concentration cannot be the stream estimating source distance, which is precisely why §3.11 asks where the other stream is."
    },
    {
      "text": "Concentration invariance in a three-layer associative network is expected from recurrent pattern completion alone, so it tells you about network architecture rather than about odour coding.",
      "correct": false,
      "feedback": "Partly correct, and worth taking seriously — piriform is an associative network rather than a primary sensory area in the V1 sense [@haberly2001], and attractor dynamics do produce invariance generically. But this is the over-determination worry from §0.2 rather than the conflation objection, and it is weaker here than usual: the mechanism is identified, and it is driven specifically by the earliest-responding bulbar cells rather than by generic recurrence."
    },
    {
      "text": "The experiment presented monomolecular odorants at steady concentration, so it cannot speak to natural scenes at all.",
      "correct": false,
      "feedback": "Correct under the assumption that ecological validity is the binding objection, and §4.11 makes exactly this criticism of the field — steady pure odorants are the chemosensory equivalent of only ever probing touch with pure tones. But taken as *the* objection it proves too much, since it would void the invariance result along with everything else. The conflation objection is sharper because it accepts the finding and localises what it establishes."
    },
    {
      "text": "Invariance is a property of the readout rather than of the representation, so nothing follows without specifying a decoder.",
      "correct": false,
      "feedback": "Correct under the assumption that population-level claims require an explicit decoder, which is a genuinely good methodological reflex — \"the representation is invariant\" usually means \"a linear decoder generalises across concentrations\". But it is a caveat about strength of evidence, not about which of the three problems is in play. You can grant the decoder point entirely and the conflation objection still stands."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "§3.1 argues olfaction's ill-posedness exceeds vision's. Vision's photoreceptor confounds reflectance, illumination and geometry — a genuine confound. What makes the olfactory version structurally worse rather than merely longer?",
  "options": [
    {
      "text": "The transport that generated the signal is turbulent and effectively irreversible, so there is no forward model that maps source configuration to receptor input deterministically — the animal must estimate the transport as well as the source.",
      "correct": true,
      "feedback": "This is the structural difference. Vision's confounds are all resolvable in principle given enough constraints, because light travels in straight lines and the forward model is geometry — deterministic, known, and stationary. Turbulent advection is chaotic, so the mapping from source to sensor is a stochastic process whose statistics themselves shift with wind, humidity and substrate. §6.11 makes the sharpest version: the vestibular tilt/translation ambiguity has the same shape, and is easier only because gravity is constant and its forward model can be hard-wired."
    },
    {
      "text": "The confound list is longer — identity, concentration, distance, source strength and transport history against vision's three.",
      "correct": false,
      "feedback": "Correct under the assumption that ill-posedness scales with the number of confounded variables. That is a reasonable first pass and the list really is longer. But counting is the wrong measure: five variables confounded by a known deterministic map can be far more tractable than two confounded by a chaotic stochastic one. The extra variables are a symptom; irreversibility of transport is the cause."
    },
    {
      "text": "Receptor responses to mixtures are nonlinear because odorants compete for binding sites [@shen2013], so superposition fails and the inverse problem is non-convex.",
      "correct": false,
      "feedback": "Correct under the assumption that the nonlinearity is the deepest obstacle, and it genuinely blocks the linear machinery imported from vision and audition. But it is a property of the *sensor*, and sensor nonlinearities can be characterised and inverted once measured. The transport problem is not a property of any organ; it sits in the world, and no amount of receptor characterisation removes it."
    },
    {
      "text": "Olfaction has no metric on its stimulus space, so there is no notion of a nearby hypothesis and no smoothness prior to regularise the inverse problem with.",
      "correct": false,
      "feedback": "Partly correct, and it is the course's central claim about metrics doing real work — regularising an ill-posed problem usually means assuming the answer is smooth, and smoothness needs a metric. But it bites on the identity problem, not on the localisation problem, and localisation is where the ill-posedness is sharpest. Note also that the temporal domain has a perfectly good metric, which is exactly why the tractable normative work in olfaction is temporal (§3.11)."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "Plume concentration is heavy-tailed and intermittent, whiff and blank durations are power-law distributed with no characteristic timescale [@celani2014], and the discriminative information about source separation sits at high frequencies rather than where the power is [@tootoonian2025]. Which design principle does this most directly imply?",
  "options": [
    {
      "text": "The system should weight frequency bands by their information about the latent variable, not by their signal power — so an efficient-coding calculation that maximises fidelity to the concentration waveform would derive the wrong filter.",
      "correct": true,
      "feedback": "This is the implication, and it is where §0.1's distinction between the stances stops being bookkeeping. Low frequencies carry most of the power, so any objective of the form \"represent the input faithfully under a power constraint\" allocates capacity there. But the animal wants source separation, and Fisher information about separation concentrates at high frequencies when sources are close relative to the large eddies. Efficient coding and inference give different filters here, and the inference one is right."
    },
    {
      "text": "The system should whiten the plume spectrum, boosting high frequencies where power is low — the retinal argument applied on the time axis.",
      "correct": false,
      "feedback": "Correct under the assumption that whitening is what efficient coding recommends, and it lands on roughly the right answer by luck: whitening also boosts high frequencies, because that is where the power is not. But the reasons come apart, and the difference is testable. Whitening's boost tracks the *power* spectrum and should follow it as conditions change; the informativeness argument tracks source geometry and eddy scale, and predicts the optimal band should shift with flow conditions at fixed spectrum shape."
    },
    {
      "text": "The system should abandon averaging entirely and respond to individual whiffs, since a mean over a heavy-tailed distribution is dominated by rare excursions and discards most of the information.",
      "correct": false,
      "feedback": "Partly correct — mean concentration really is a poor summary of a heavy-tailed intermittent signal, and an animal integrating over a long window would throw away most of what it needs. But \"no averaging\" is the wrong conclusion, because pooling across the thousands of receptor neurons converging on a glomerulus is exactly what makes fast fluctuations resolvable at all (§3.3). The distinction is averaging across sensors, which helps, versus averaging across time, which does not."
    },
    {
      "text": "The system should track the spatial gradient with sub-second resolution, since intermittency falls off steeply with distance from source.",
      "correct": false,
      "feedback": "Correct under the assumption that a monotonic gradient exists to track — which is true for bacteria at micrometre scales and false at the scale of a mouse. Turbulent mixing destroys monotonicity, which is the crucial negative result of §3.2, and it is why search strategies based on information gain rather than gradient ascent reproduce the casting and zigzagging that real animals do [@vergassola2007]. Intermittency does encode distance, but as a statistic accumulated over time, not as a gradient sampled across space."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Mice discriminate correlated from anti-correlated odour fluctuations up to 40 Hz [@ackels2021], while a single receptor neuron's response time constant is around 100 ms. Two population accounts survive: kinetic heterogeneity acting as a filterbank, and pooling many noisy timers. Which measurement separates them?",
  "options": [
    {
      "text": "Vary the number of converging receptor neurons and, separately, the diversity of their kinetics — pooling predicts performance scaling with number, the filterbank predicts degradation when diversity is reduced at fixed number.",
      "correct": true,
      "feedback": "Right, and the value of the comparison is that it makes each account commit to a different independent variable. Pooling n noisy timers sharpens timing as √n, the mechanism established in the electric fish jamming avoidance response where sub-microsecond behavioural precision is built from millisecond neurons — a solved precedent in another modality for exactly this problem. Kinetic heterogeneity instead needs the population to span time constants, and is indifferent to how many neurons share each one."
    },
    {
      "text": "Measure whether high-frequency information survives at the glomerulus, since pooling happens at the glomerulus and kinetic diversity is a property of the receptor population upstream of it.",
      "correct": false,
      "feedback": "Correct under the assumption that the two mechanisms live at different stages and can be separated anatomically. They cannot: same-receptor neurons converging on one glomerulus are both the pool *and* the population whose kinetics may vary, so both mechanisms deliver their benefit at exactly the same place. The measurement would show information present and say nothing about which route produced it."
    },
    {
      "text": "Test whether performance degrades at low concentration, since pooling is a noise-reduction mechanism and should help most where shot noise dominates.",
      "correct": false,
      "feedback": "Correct under the assumption that pooling's only currency is amplitude SNR — the retinal reading, and the one §3.5 argues against. Pooling buys temporal precision by the same √n law whether or not the concentration is low, so both accounts predict degradation at threshold and the manipulation fails to separate them. The interesting claim in §3.5 is precisely that bulbar convergence may be doing temporal rather than amplitude work."
    },
    {
      "text": "Compare species with different convergence ratios — roughly 50:1 in *Drosophila* against low thousands in mouse — and ask whether temporal acuity tracks the ratio.",
      "correct": false,
      "feedback": "Partly correct, and comparative variation in convergence ratio is a real and underused source of evidence. But it confounds everything that differs between a fly and a mouse: receptor kinetics, plume statistics at their respective body scales, deadline, and the behavioural assays themselves. A within-species manipulation of number and diversity separates the accounts; a cross-phylum correlation with n = 2 does not."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "§3.5 presents two of the module's own proposals: that sister cells distribute a sparse-recovery inference so the MAP solution is reachable without all-to-all connectivity [@tootoonian2022], and that the mitral/tufted split is a speed–accuracy decomposition. What is the correct epistemic status of these, held against §0.2?",
  "options": [
    {
      "text": "Proofs of possibility with well-specified objectives and constraints, no measured ensemble, and no risky prediction yet checked — normal and useful positions for a theory to occupy, and not the same as being right.",
      "correct": true,
      "feedback": "This is the honest reading, and §3.5 states it explicitly about the sister-cell result. What such an argument buys is real but bounded: it turns a piece of anatomy with no functional story into a candidate answer to a well-posed question, and it names what would count as evidence — sister-cell responses should be related in the way the model specifies, and that relationship is measurable. Competing accounts exist; sisters differ in response properties and downstream targets in ways the model treats as interchangeable. The speed–accuracy reading of mitral/tufted is in the same position: motivated by the one-sniff deadline, consistent with the latency and threshold differences, and not established against alternatives such as a targeting or invariance split."
    },
    {
      "text": "Established results, since both are consistent with measured response properties — tufted cells do fire earlier and at lower thresholds, and sister cells do share a glomerulus.",
      "correct": false,
      "feedback": "Correct under the assumption that consistency with data is confirmation. It is not, and this is the failure mode §0.1 opens the course with. The measured differences are what the proposals were built to explain, so agreement with them is fitting rather than prediction. Confirmation requires a claim made in advance that could have failed — criterion three — and neither proposal has had one checked."
    },
    {
      "text": "Unfalsifiable, since any anatomical redundancy can be reframed as distributed computation and any pair of cell types as a speed–accuracy trade.",
      "correct": false,
      "feedback": "Partly correct as a warning — the split-early motif is invoked so freely across this course that it risks explaining everything, and a claim that fits any two cell types predicts nothing about any of them. But the sister-cell proposal is not in that class: it specifies a relationship among sister responses that is measurable and could come out wrong. Distinguish a theory that is merely unconfirmed from one that could not be disconfirmed."
    },
    {
      "text": "Weak, because they fail §0.2's first criterion — no measured ensemble — and that is the criterion the whole course identifies as binding.",
      "correct": false,
      "feedback": "Correct under the assumption that criterion one is binding for every olfactory claim, which is true for the flagship receptor-repertoire calculation and less true here. The sparse-recovery framing needs a sparsity assumption about natural scenes rather than a full ensemble, and the speed–accuracy argument needs only the deadline, which is measured [@uchida2003]. Grading proposals means asking which criterion each actually fails, and for these it is criterion three, not one."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s12.q6",
  "contentRev": 1,
  "points": 1,
  "prompt": "Olfaction reaches cortex in two synapses with no obligatory thalamic relay, against vision's four through LGN and audition's five-plus through IC and MGB. Which account of the absence does the comparative evidence best support?",
  "options": [
    {
      "text": "A computational account: pathways bypass thalamus where the consumer wants speed rather than re-mapping, which is also what spinocerebellar pathways share with olfaction — and which predicts the thalamic *services* should appear elsewhere in the olfactory circuit rather than be absent.",
      "correct": true,
      "feedback": "This is the reading the comparison supports, and its virtue is that it is checkable. §1.6 decomposes thalamus into services — gain control, state-dependent gating, feedback-mediated selection — so \"no thalamus\" becomes a checklist rather than a single mysterious fact, and granule-cell gating under cortical feedback is the candidate implementer. §3.11 lists the quantitative comparison against LGN as measurable now and apparently not yet done, which is the right shape for an open question."
    },
    {
      "text": "An evolutionary account: olfaction is the oldest sensory pathway, and its projection to cortex predates the elaboration of thalamus.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which is the standard textbook line and which the comparative evidence largely defeats. Spinocerebellar and proprioceptive pathways also bypass thalamus and are not ancient in the relevant sense, and what they share with olfaction is a deadline and a consumer wanting speed. Antiquity also makes no prediction about where the services went, which is what makes it the less useful hypothesis even where it might be partly true."
    },
    {
      "text": "A dimensionality account: a relay that re-maps a topographic representation has nothing to re-map when the array has no metric, so thalamus has no function to serve here.",
      "correct": false,
      "feedback": "Correct under the assumption that thalamic function is fundamentally about spatial re-mapping — and it is an elegant argument that fits the course's central claim about metrics. But it over-reads what LGN does: most of LGN's afferent drive is cortical feedback, and its services are largely gating and gain control, neither of which needs a metric. The argument would also predict no relay for gustation, whose array is unordered too."
    },
    {
      "text": "A deadline account: the ~200 ms single-sniff decision time [@uchida2003] leaves no budget for extra synapses, so the pathway is short by necessity.",
      "correct": false,
      "feedback": "Partly correct, and the deadline is a genuine constraint that this module leans on repeatedly. But the arithmetic does not force it: audition's localisation-for-orienting deadline is tens of milliseconds and it still routes through IC and MGB, because a synapse costs a few milliseconds rather than tens. The deadline explains a preference for speed — which is the computational account — rather than a hard synapse budget."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m03.s12.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill in olfaction's column from memory, then check it against §3.11. Every claim in the capstone about olfaction being unusual is a claim about one of these rows.",
  "rows": [
    "Array ordering",
    "Ensemble measured?",
    "Statistics stationary?",
    "Sensor vs signal speed",
    "Grouping cues",
    "Obligatory relay"
  ],
  "columns": ["Olfaction"],
  "cells": {
    "Array ordering|Olfaction": { "answer": "unordered, non-metric", "accept": ["unordered","non-metric","unordered and non-metric","no metric","none"] },
    "Ensemble measured?|Olfaction": { "answer": "chemical no, plume yes", "accept": ["chemical no plume yes","partly","partially","no for chemical yes for plume","half","plume yes chemical no"] },
    "Statistics stationary?|Olfaction": { "answer": "no", "accept": ["no","non-stationary","nonstationary","not stationary"] },
    "Sensor vs signal speed|Olfaction": { "answer": "sensor slower", "accept": ["sensor slower","slower","sensor too slow","signal faster than sensor"] },
    "Grouping cues|Olfaction": { "answer": "temporal correlation", "accept": ["temporal correlation","temporal","correlation","common modulation","temporal correlation only"] },
    "Obligatory relay|Olfaction": { "answer": "none", "accept": ["none","no","no relay","absent","no thalamic relay"] }
  },
  "modelAnswerNote": "Read the column and notice that the entries are not independent.\n\nDimensionality with no metric is what makes the chemical ensemble hard to measure, which is what blocks criterion one, which is what keeps every identity-side normative claim qualitative. Non-stationarity is what turns bulbar plasticity from an oddity into a requirement. Sensor-slower-than-signal is what forces a population solution to a problem the other modalities never face.\n\nThe one row that is doing different work is grouping cues. Temporal correlation being the only reliable one is a *consequence* of chemistry offering no lawful relation among the molecules of a source — and it is also where the good news is, because the temporal ensemble is measured [@celani2014; @tootoonian2025] even though the chemical one is not. Half the column is the problem; that row is the way in."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m03.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The field's instinct is that olfaction needs better data. The vestibular comparison suggests a different diagnosis. Argue for whichever you find better supported, using the criteria of §0.2 — and say what the other diagnosis gets right.",
  "modelAnswer": "**The two diagnoses.**\n\nThe data diagnosis: olfaction fails §0.2's first criterion, consistently. Every account in the module optimises against an assumed input distribution rather than a measured one, and a measured ensemble is precisely what the retinal and cochlear successes were built on. On this reading olfaction is a data problem masquerading as a theory problem, and the remedy is years of unglamorous analytical chemistry.\n\nThe objective diagnosis: vestibular passes all five criteria and its success is *central* rather than peripheral [@angelaki2004], which inverts vision and audition. Vestibular circuits are not simpler; what it has is a statable objective — estimate self-motion with minimum variance. Nobody can say with comparable precision what piriform is estimating. On this reading the binding constraint is that the problem has not been posed, and no database fixes that.\n\n**Why the objective diagnosis is better supported.**\n\nThe decisive observation is that vision's ensemble *is* measured, extensively, and its central account still fails beyond V1. If a measured ensemble were sufficient the wall would not be where it is. And §3.1 shows olfaction does not have one objective but three — identity, intensity, location — which demand different answers and are routinely conflated in the same sentence. Running the Lewicki calculation on a complete odour database without first choosing among them yields the optimal repertoire for whichever objective was smuggled in, which will usually be \"represent the receptor pattern faithfully\": an efficient-coding objective for a problem where the animal wants latent causes. §0.1 warned that the stances give different answers, and §3.11 says the olfactory version may not be an efficient-coding problem at all.\n\n**What the data diagnosis gets right, and it is a lot.**\n\nIt correctly identifies the criterion that actually fails, and it is right that no amount of conceptual clarification produces the chemical ensemble. It is also right about the *asymmetry*: the temporal half of the problem is already in good shape precisely because that ensemble was measured [@celani2014; @tootoonian2025], which is direct evidence that measurement unblocks things. The strongest version of the objective diagnosis therefore does not say the data are unnecessary. It says the data are necessary and the ordering is wrong — that stating what is being estimated is cheap, is a precondition for designing the database sensibly, and has not been done.\n\n**The practical upshot.** The tractable normative work in olfaction is temporal, because that is where an ensemble exists *and* an objective is statable: estimate source separation, or bearing, or distance, from an intermittent time series with known statistics. The flagship chemical question needs both a database and a decision about what the repertoire is for, and it is blocked on the second at zero cost while it waits years for the first.",
  "rubric": [
    "States both diagnoses fairly, with the criterion each rests on",
    "Uses vision's measured ensemble plus failed central account as evidence against data alone being sufficient",
    "Connects the objective problem to §3.1's three conflated problems",
    "Notes that efficient coding and inference give different optimal repertoires from the same database",
    "Credits the data diagnosis with correctly identifying the criterion that fails",
    "Bonus: uses the measured plume ensemble as evidence that measurement does unblock work",
    "Bonus: concludes that the temporal problem is tractable because it has both an ensemble and a statable objective"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Four things, and the fourth is the one most often dropped.

<strong>Three problems, not one</strong> (§3.1) — identity, intensity, location. They share a receptor sheet and almost nothing else, and a result about one is usually silent about the others. Whenever a claim says "odour coding", ask which.

<strong>The ensemble is half-measured</strong> (§3.2, §3.11) — the chemical ensemble does not exist and the plume ensemble does [@celani2014; @tootoonian2025]. That split predicts exactly where the tractable normative work is, and the open questions sort accordingly.

<strong>The mismatches that force population solutions</strong> (§3.3, §3.5) — the sensor is an order of magnitude slower than the plume structure the animal demonstrably uses, the statistics are non-stationary, and the array has no metric. Each has a solved analogue in another modality, which is what the remaining modules are for.

<strong>Which claims are proposals</strong> (§3.5) — sister cells implementing distributed MAP inference, and mitral/tufted as a speed–accuracy decomposition, are well-posed candidates that have not made a risky prediction that has been checked. Carry them forward as questions with named measurements attached, not as results.
</x-callout>
