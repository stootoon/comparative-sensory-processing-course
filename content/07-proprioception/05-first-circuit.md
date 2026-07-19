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
