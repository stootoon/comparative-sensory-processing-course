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
  caption="A head-fixed mouse whisking, with the whisk cycle decomposed into offset, amplitude and phase. That decomposition is exactly what makes phase-referenced decoding tractable here and not yet in the bulb — and §13 proposes importing it, since sniffing supplies the same kind of self-generated phase reference."
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

That machinery is directly importable, and §13 proposes it as one of the more concrete transfers available: <strong>does the bulb implement phase-referenced decoding the way barrel cortex does, and where does its copy of the sniff phase come from?</strong>

The one asymmetry: whisker contact is binary and localised, so phase-to-contact mapping is relatively clean. Odour arrival is graded and continuous within a sniff, so the olfactory version is harder. But the question is well-posed, which is more than can be said for most olfactory coding questions.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m04.s09.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Phase-referenced decoding is worked out in barrel cortex and not in the bulb, despite whisking and sniffing sharing frequency band, voluntary control, phase reference, cycle-locked responses, and alteration of the stimulus itself. What is the substantive obstacle to importing the machinery, as distinct from the historical reason it has not been imported?",
  "options": [
    {
      "text": "Whisker contact is binary and localised, so the phase-to-contact mapping is clean; odour arrival is graded and continuous within a sniff, so the quantity being decoded against phase is not a discrete event.",
      "correct": true,
      "feedback": "This is the one asymmetry, and stating it precisely is what keeps the transfer honest. In whisking, 'when in the cycle did contact occur' is a well-defined scalar with an unambiguous ground truth. In sniffing, concentration rises and falls continuously through the cycle and receptors are being differentially recruited throughout, so latency-relative-to-phase needs a definition before it can be decoded. Note that this makes the olfactory version harder rather than ill-posed — which is more than can be said for most olfactory coding questions, and why §13 nominates it as one of the more concrete available transfers."
    },
    {
      "text": "The bulb has no somatotopy, so there is no anatomical frame in which to reference the phase.",
      "correct": false,
      "feedback": "Correct under the assumption that phase referencing needs a spatial frame — and barrel cortex's one-to-one whisker-to-barrel mapping is genuinely why the preparation became the workhorse, so the intuition has a real source. But a phase reference is temporal, not spatial: it requires a copy of the cycle signal and a clock, neither of which is a map. Note that this distractor commits the module's own headline error in reverse, inferring a limit on a temporal code from the absence of a spatial one."
    },
    {
      "text": "Sniffing alters the stimulus — sorption changes which receptors see what — so the decoder cannot treat the input as independent of the sampling behaviour.",
      "correct": false,
      "feedback": "Correct under the assumption that whisking does not have this property, which is false: whisker contact forces are equally self-generated, and §4.2 makes the co-authored ensemble a shared feature of both active senses. The problem is real and general (§4.2's fixed point), but it is not what distinguishes the two systems, and the question asks for the asymmetry."
    },
    {
      "text": "Sniff frequency spans 2–10 Hz against whisking's 5–15 Hz, so the cycles are not commensurable and latencies cannot be compared.",
      "correct": false,
      "feedback": "Correct under the assumption that decoding requires a fixed cycle period. It does not — phase-referenced decoding normalises to the cycle by construction, which is what makes it robust to the frequency modulation both systems show under task demands. The overlapping bands are in fact part of why the analogy is close, not an obstacle to it."
    }
  ]
}
</script>
</x-mcq>

## Prediction and grip control

The grip-force control loop is the clearest case anywhere of a sensory system operating inside a predictive motor loop. When lifting an object, grip force is adjusted *in anticipation* of load force, using a learned internal model of the object's weight and friction. Only when prediction fails — an unexpected slip — does a rapid correction occur, within about 70 ms, driven from motor cortex rather than by a spinal reflex [@kandel2021].

Two things generalise. **Sensory signals are compared against predictions, not interpreted in isolation** — the same motif as vestibular cancellation, corollary discharge in vision, and the electrosensory negative image. And **the prediction is learned and object-specific**, which means the forward model is not a fixed property of the circuit but something continuously updated.

<x-order>
<script type="application/json">
{
  "id": "m04.s09.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 27,
  "prompt": "Put one cycle of the grip-force control loop in order, for an object being lifted whose weight has been misjudged. The ordering is the argument: note where the sensory signal enters relative to the prediction.",
  "items": [
    { "id": "a", "text": "A learned internal model of the object's weight and friction predicts the load force the lift will generate." },
    { "id": "b", "text": "Grip force is raised in anticipation, before load force actually rises." },
    { "id": "c", "text": "The lift proceeds and afferents report the contact forces that actually occur." },
    { "id": "d", "text": "Rapidly-adapting afferents signal micro-slip — a mismatch between predicted and actual contact state." },
    { "id": "e", "text": "A corrective grip increase is issued from motor cortex, within about 70 ms." },
    { "id": "f", "text": "The internal model for this object is updated, so the next lift needs no correction." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e", "f"],
  "modelAnswerNote": "The load-bearing feature is that (b) precedes (c). Grip is set from a prediction, and the afferent signal enters only as an error term — which is why the sensory system can be almost silent on a well-predicted lift and why silence is not absence of encoding (§4.10).\n\n**Two things generalise, and they are separable.** *Sensory signals are compared against predictions rather than interpreted in isolation*: the same motif as vestibular cancellation, corollary discharge in vision, and the electrosensory negative image [@wolpert1995]. And *the prediction is learned and object-specific*, so step (f) is not decoration — the forward model is continuously updated rather than being a fixed property of the circuit.\n\n**The deadline is tighter than it looks.** Seventy milliseconds is faster than voluntary reaction, and the tempting reading is that steps (d) and (e) close subcortically. They do not — the corrective grip increase is driven from motor cortex [@kandel2021], so the loop makes a full cortical round trip inside the deadline. That is the more demanding fact, and it is why §4.1 lists the deadline among the problem's constraints rather than among its results: the pathway has to be short enough to be traversed twice.\n\n**Where this bears on olfaction.** The olfactory silent-neuron literature invokes exactly this mechanism — a subtracted prediction — and touch is the best place to study it, because the forward model's precision is directly measurable: introduce a delay or spatial offset between a self-generated movement and the resulting touch and the attenuation weakens progressively with the mismatch (§4.10). No olfactory preparation offers a graded psychophysical handle of that kind."
}
</script>
</x-order>
