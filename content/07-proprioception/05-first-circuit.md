---
id: m07.s05
title: The first circuit — spinal cord and Clarke's nucleus
lede: The recoding happens early. By the second synapse, neurons report global limb variables rather than individual muscle lengths — the course's clearest case of the consumer determining the code, with the caveat that the limb's own mechanics supply part of the transformation.
estimatedMinutes: 14
---

Proprioceptive afferents do two things immediately: they drive **spinal reflex circuits**, and they ascend to **Clarke's nucleus** and the cuneate nucleus.

## The monosynaptic reflex

Ia afferents synapse directly onto alpha motor neurons of the same muscle. One synapse, sensor to motor output.

This is the shortest sensorimotor loop in the body, and it exists because stabilising a limb against perturbation cannot wait. Same principle as the VOR (§6.5).

## The recoding result

Here is the finding that makes this module matter for the course's argument.

Neurons in Clarke's nucleus and the dorsal spinocerebellar tract do **not** simply relay individual muscle lengths. Their firing is better predicted by **global limb variables** — the length and orientation of the axis from hip to foot — than by the lengths of the individual muscles supplying them [@bosco2001].

A transformation from muscle coordinates into a task-relevant, whole-limb coordinate system, **by the second synapse.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">How much of this is neural — the caveat the tidy version omits</div>
The result is usually stated as the nervous system computing a coordinate transformation. Part of it is not neural at all.

The limb's segments are mechanically linked, so muscle lengths are already correlated with limb-axis variables before any neuron does anything. A global representation could therefore arise from <strong>biomechanics</strong> rather than from spinal processing — the same "accessory structures compute for free" point §4.3 makes about cochlear stiffness gradients and Pacinian lamellae.

Bosco and Poppele posed exactly this question and tested it, by decoupling limb geometry from endpoint position during passive step-cycle trajectories [@bosco2003]. About half of the 89 cells studied changed their response pattern under the perturbations. Under joint constraints the changes were accounted for by re-weighting the <em>same</em> response components, which supports genuine global processing. Under muscle stimulation, additional components appeared and stimulus parameters were explicitly represented — which does not.

So the honest reading is <strong>partly neural, partly biomechanical, and the split is not cleanly quantified.</strong> The transformation is real and it does happen early, which is what the course's argument needs. But "the nervous system recodes into limb coordinates" credits neurons with work the skeleton is doing some of, and the course should not repeat that.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Bosco and Poppele decoupled limb geometry from endpoint position and found that about half of 89 cells changed their response pattern [@bosco2003]. Under joint constraints the changes were captured by re-weighting the same response components; under muscle stimulation, additional components appeared and stimulus parameters were explicitly represented. What is the defensible conclusion?",
  "options": [
    {
      "text": "The transformation is real and early but partly supplied by the limb's mechanical linkages, and the neural and biomechanical contributions are not cleanly separated by these data.",
      "correct": true,
      "feedback": "This is the honest reading, and it is the one the course insists on because the tidy version credits neurons with work the skeleton is doing some of. The two perturbation results point different ways — re-weighting of the same components supports genuine global processing, explicit representation of stimulus parameters does not — and neither is decisive. The general form of the caution is §4.3's: before attributing a computation to a circuit, establish what the mechanics delivered to its input for free."
    },
    {
      "text": "The transformation is neural, since a purely biomechanical account predicts no change in response pattern under perturbation.",
      "correct": false,
      "feedback": "Correct under the assumption that biomechanical determination implies rigidity — but this gets the prediction backwards. If muscle lengths are correlated with limb-axis variables *because* of the skeletal linkage, then decoupling the linkage should change the responses, which is exactly what happened in half the cells. The perturbation result is therefore consistent with both accounts and cannot by itself select the neural one."
    },
    {
      "text": "The transformation is biomechanical, since half the cells failed to maintain their limb-variable tuning when geometry was decoupled.",
      "correct": false,
      "feedback": "Correct under the assumption that a genuinely neural transformation would be invariant to the perturbation, which is a reasonable-sounding criterion and the mirror image of the previous distractor. It over-reads in two ways: half the cells did *not* change, and among those that did, the joint-constraint changes were accounted for by re-weighting the same components — which is what a neural transformation operating on altered input should look like."
    },
    {
      "text": "The result is inconclusive, so the recoding claim should be set aside until better data exist.",
      "correct": false,
      "feedback": "Correct under the assumption that an unresolved mechanism undermines the phenomenon, and epistemic caution is usually the right default in this course. But it discards what the data do establish. Clarke's neurons are better predicted by global limb variables than by individual muscle lengths [@bosco2001], and that transformation is present by the second synapse — which is all the consumer-determines-the-code argument requires. What is unsettled is the *division of labour*, not whether the recoding occurs."
    }
  ]
}
</script>
</x-mcq>

<x-figure src="content/07-proprioception/figures/clarke-recoding.js"
  caption="The same step cycle in two bases. Individual muscle lengths are a tangle of phase-shifted signals; limb axis length and orientation are smooth and interpretable, and are what Clarke's nucleus neurons actually report. The second view plots the cycle in the limb basis, where it becomes a simple closed loop — the transformation adds no information, it makes existing structure legible to the consumer.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">The consumer determines the code — demonstrated</div>
§1.1 introduced this as an argument. Here it is as a result.

The cerebellum needs limb state for a forward model. Forward models operate on task variables — where the endpoint is, how fast it is moving — not on the lengths of individual muscles. So the recoding happens <strong>before</strong> the signal reaches the consumer, at the earliest opportunity.

This is why the parallel structure of the course matters. §5 of every module asks what the first circuit computes, and the answers now form a set:

<strong>Retina:</strong> decorrelate — because input is spatially redundant.<br>
<strong>Cochlear nucleus:</strong> decompose — because one waveform carries several kinds of information.<br>
<strong>NST:</strong> route and integrate with state — because the decision depends on state.<br>
<strong>Clarke's nucleus:</strong> <strong>change coordinates</strong> — because the consumer wants a different basis.<br>
<strong>Olfactory bulb:</strong> converge for SNR, then contested.

<strong>The question this poses for the bulb:</strong> the course has mostly asked whether bulbar processing decorrelates. Proprioception raises a different possibility — that the first circuit's job might be <em>coordinate transformation</em> toward what the consumer wants. If olfaction's dominant consumer is navigation (§3.8), the wanted variables are bearing and distance to source, and the bulb might be starting that transformation rather than decorrelating chemical identity.

That reframing has not, as far as this course is aware, been seriously pursued — and it would predict bulbar neurons tuned to plume-derived spatial variables, which is the same prediction §3.8 arrived at from a different direction.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s05.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Suppose the bulb's first-circuit job is coordinate transformation toward navigation variables — bearing and distance to source — rather than decorrelation of chemical identity. Which finding would discriminate most sharply between the two proposals?",
  "options": [
    {
      "text": "That a bulbar population's responses are better predicted by plume-derived spatial variables than by odorant identity, while carrying no more information about identity than the receptor input does.",
      "correct": true,
      "feedback": "This is the discriminating shape, and note that it has the same logic as the Clarke's result: the test is not whether the output looks different from the input but whether it is better predicted by the *consumer's* variables than by the sensor's. The second clause matters as much as the first. A transformation adds no information — it makes existing structure legible — so a population doing coordinate transformation should show reorganised, not increased, information about identity. If identity information rose, something other than a change of basis is happening."
    },
    {
      "text": "That bulbar output responses are less correlated across glomeruli than the receptor inputs are.",
      "correct": false,
      "feedback": "Correct under the assumption that reduced correlation diagnoses decorrelation as the objective, and it is the standard measurement in this debate [@friedrich2001]. The trouble is that it does not discriminate: a coordinate transformation into any well-chosen basis will generally also reduce correlations, because task-relevant bases tend to be closer to orthogonal than sensor bases are. Decorrelation is a consequence of many transformations, so observing it selects among them weakly."
    },
    {
      "text": "That bulbar responses depend on the temporal structure of the plume rather than only on mean concentration.",
      "correct": false,
      "feedback": "Partly correct, and it is necessary for the navigation reading — plume timing is where the spatial information lives [@ackels2021], so a system extracting bearing must be sensitive to it. But temporal sensitivity is also what an efficient code for a fluctuating input would show, and both proposals predict it. Necessary conditions are cheap; the question asks for a discriminating one."
    },
    {
      "text": "That lesioning the bulb impairs odour-guided navigation more than odour discrimination.",
      "correct": false,
      "feedback": "Correct under the assumption that behavioural dissociation localises function, and the result would be genuinely interesting. But it speaks to what the bulb's output is *used for* rather than to what the first circuit computes, and the two can come apart — a decorrelated identity code could support navigation perfectly well downstream. The proposals differ in the representation, so the test has to be in the representation."
    }
  ]
}
</script>
</x-mcq>
