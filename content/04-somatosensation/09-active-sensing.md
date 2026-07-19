---
id: m04.s09
title: Active sensing and the motor loop
lede: The strongest active-sensing story in mammals, and the closest structural analogue to sniffing anywhere in the course. Whisking and sniffing are the same solution to two different problems.
estimatedMinutes: 16
---

## Exploratory procedures

Humans use stereotyped movements matched to what they are judging: lateral motion for texture, pressure for compliance, static contact for temperature, enclosure for global shape, contour following for exact shape.

These are near-optimal for their respective judgements, and people select the right one almost immediately. That is **optimal experiment design** in its clearest behavioural form: the animal chooses the measurement that best reduces uncertainty about the property it cares about.

The olfactory question follows directly: is sniff strategy similarly matched to the judgement? Rats do change sniff frequency by task, but whether the change is *optimal* for the discrimination — as exploratory procedures demonstrably are — has not been established.

## Whisking

Rodents sweep their whiskers back and forth at 5–15 Hz to palpate their surroundings, and the system has become the workhorse preparation for active sensing.

<x-figure src="content/media/whisking-mouse-kinematics.jpg"
  caption="A head-fixed mouse whisking, with the whisk cycle decomposed into offset, amplitude and phase. That decomposition is exactly what makes phase-referenced decoding tractable here and not yet in the bulb — and §12 proposes importing it, since sniffing supplies the same kind of self-generated phase reference."
  credit="Chinta S, Pluta SR (2025), PLOS Biology 23(4):e3003087, Figure 1a,c (cropped). CC BY 4.0."
  source="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003087">
</x-figure>


<x-figure src="content/media/somato-barrel-cortex-layer4.jpg"
  caption="Barrel cortex in layer 4, with individual whiskers mapped one-to-one onto anatomically discrete barrels. This precise, visible somatotopy is what made the whisker system the workhorse preparation for active sensing — and it is exactly what the olfactory bulb does not offer, which is part of why phase-referenced decoding is far better characterised here than in the bulb."
  credit="Commons user Imbrickle. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Labeled40xVibrissae.jpg">
</x-figure>


The parallel with sniffing is unusually close, and worth laying out explicitly:

| | Whisking | Sniffing |
|---|---|---|
| Frequency | 5–15 Hz | 2–10 Hz |
| Under voluntary control | yes | yes |
| Provides a phase reference | yes | yes |
| Responses locked to the cycle | yes | yes |
| Latency measured against cycle onset | yes | yes |
| Alters the stimulus itself | yes (contact forces) | yes (sorption) |

<x-figure src="content/media/somato-whisker-pathways.jpg"
  caption="Parallel pathways from whisker to cortex. As in every modality in this course, the signal splits early into streams with different response properties — and §4.4's argument applies: one channel cannot optimise sensitivity, temporal precision and dynamic range at once."
  credit="Commons user Peterhaslehurst. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Barrel_cortex_pathways.jpg">
</x-figure>


<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The transferable machinery</div>
Both systems generate a rhythm, both lock sensory responses to its phase, and both make latency-relative-to-phase a meaningful quantity. In whisking, the machinery for <strong>phase-referenced decoding</strong> has been worked out in some detail — how downstream neurons combine phase and amplitude, where the reference signal comes from, whether it is reafferent or a corollary discharge.

That machinery is directly importable, and §12 proposes it as one of the more concrete transfers available: <strong>does the bulb implement phase-referenced decoding the way barrel cortex does, and where does its copy of the sniff phase come from?</strong>

The one asymmetry: whisker contact is binary and localised, so phase-to-contact mapping is relatively clean. Odour arrival is graded and continuous within a sniff, so the olfactory version is harder. But the question is well-posed, which is more than can be said for most olfactory coding questions.
</x-callout>

## Prediction and grip control

The grip-force control loop is the clearest case anywhere of a sensory system operating inside a predictive motor loop. When lifting an object, grip force is adjusted *in anticipation* of load force, using a learned internal model of the object's weight and friction. Only when prediction fails — an unexpected slip — does a rapid reflexive correction occur, within about 70 ms.

Two things generalise. **Sensory signals are compared against predictions, not interpreted in isolation** — the same motif as vestibular cancellation, corollary discharge in vision, and the electrosensory negative image. And **the prediction is learned and object-specific**, which means the forward model is not a fixed property of the circuit but something continuously updated.
