---
id: m00.s00
title: Why compare modalities
lede: Every sensory system solves a version of the same problem with a different physics. That makes them natural experiments — and it is the only way we currently have of telling which features of a circuit are necessary and which are accidents.
estimatedMinutes: 16
---

Here is the situation this course is a response to.

We have a mature, quantitative, genuinely predictive theory of the retina. We can start from measured statistics of natural images, apply a principle, and derive receptive field shapes that match what electrophysiologists find — including how those shapes should *change* when the light dims, which was predicted before it was checked.

We have nothing of the kind for olfaction. Not because the field is less careful or less clever, but because the ingredients that made the visual result possible are missing.

**Both facts are informative, and the second is only interpretable in light of the first.** Studying olfaction alone, you cannot tell whether the missing theory reflects a gap in our knowledge or a genuine difference in how the system works. Studying it beside vision, you can start to say which.

## Sensory systems as natural experiments

The deep reason to compare is that evolution has run the experiment we cannot.

Every sensory system faces a version of the same problem: recover behaviourally useful facts about the world from a noisy, ambiguous, high-dimensional signal, fast enough to act on. But each faces it with a different physics — photons versus pressure waves versus molecules versus inertia — and each arrived at its solution independently.

That gives us the one thing a single-system study can never provide: **a way to separate what is forced from what is contingent.**

- A motif appearing in every modality, despite completely different physics, is probably forced by the computational problem. Divisive normalisation shows up in V1, in auditory cortex, and in the fly antennal lobe. Three unrelated implementations converging on one operation is evidence that the operation is required.
- A motif appearing in some and not others tells you what it is *for*, because you can ask what those modalities share. Topographic maps exist wherever the receptor array has a metric and are absent where it does not — which tells you maps are about the sensor's geometry, not about sensation as such.
- A motif appearing in exactly one is either a solution to something peculiar about that modality, or a historical accident. Distinguishing those two is hard, and the comparison is what makes it possible at all.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The method in one line</div>
Vary the physics, hold the computational problem roughly fixed, and see what stays the same. Anything invariant across radically different sensors is a candidate for a genuine principle rather than an implementation detail.
</x-callout>

## What you will be able to do at the end

Concretely, the skills this course is trying to build:

1. **Read a normative claim and say what would falsify it.** Most of the work is identifying the input ensemble, the constraint, the objective, and — the step almost always skipped — the free parameters.
2. **Recognise a motif across modalities and know what varies with it.** Not "there is lateral inhibition here too" but "lateral inhibition requires a neighbourhood, so what plays that role in an array with no metric?"
3. **Import a result from one modality to another and know where the import breaks.** The disanalogy is usually more informative than the analogy.
4. **Say what is genuinely open in olfaction, and why**, in terms sharp enough to design an experiment.

## The lessons you should expect to meet

Rather than leave these to emerge, here is the map. Each is developed where it first appears and revisited in the synthesis modules.

### Lesson 1 — The input statistics determine the code

The single most productive idea in sensory neuroscience. Measure what the world actually delivers, ask what representation would be efficient given that, and the biology often matches. It works for retinal receptive fields, for cochlear filter shapes, for the contrast–response curve of a fly neuron.

**The comparative twist:** it only works when someone has measured the ensemble. Vision and audition have; olfaction has not, and that single gap explains most of the asymmetry in theoretical maturity between them. **This is a data problem masquerading as a theory problem**, which is worth knowing before you spend a career on the theory side.

### Lesson 2 — The same principle predicts opposite structures in different regimes

Efficient coding does not say "decorrelate". It says decorrelate at high SNR and pool at low SNR, and real systems do both — sometimes in different parts of the same organ at the same moment. Any claim of the form "sensory systems do X" should immediately prompt: under what conditions, and what do they do otherwise?

### Lesson 3 — Almost every familiar motif presupposes a metric on the receptor array

This is the course's central claim, and the one most likely to change how you read your own field.

Receptive fields, centre–surround, topographic maps, interpolation, smoothing priors, translation invariance, convolution — all of them need "nearby" to mean something. Vision, audition and touch all have ordered arrays where it does. **Olfaction does not**, and the consequence is that most of the conceptual toolkit imported from vision either fails to apply or has to be rebuilt in a non-spatial form.

Much of what looks strange about olfactory circuits looks strange only because we arrive with expectations calibrated on vision.

### Lesson 4 — Where the sensor is slower than the signal, the population must compensate

Vision, audition and touch all have sensors fast enough for the signals that matter to them. Olfactory receptor neurons are roughly an order of magnitude too slow for the plume structure that mice demonstrably use. That mismatch is close to unique among the classical senses, and it forces population solutions.

Usefully, the problem is *solved* elsewhere: electric fish achieve sub-microsecond behavioural precision from neurons with millisecond precision, by pooling. The mechanism is known; the question is whether olfaction uses the same one.

### Lesson 5 — Subtract what you can predict

Retinal surrounds subtract a spatial prediction. Vestibular nuclei subtract self-generated head motion. Electrosensory lobes learn a negative image of the animal's own discharge. In every case a neuron that has successfully subtracted its prediction goes *quiet*, which means **silence is a result, not an absence of response** — an interpretive trap that has caught people in several fields.

### Lesson 6 — The consumer determines the code

Proprioception recodes muscle lengths into task-relevant limb variables because its consumer is a controller. Taste collapses hundreds of bitter compounds onto one axis because its consumer makes one binary decision under a wildly asymmetric loss. Vision preserves metric detail because its consumers are open-ended.

So: *who consumes the olfactory code, and what basis do they want?* If the answer is navigation, the wanted variables are bearing and distance to source, not molecular identity — which predicts a stream nobody has convincingly located.

### Lesson 7 — Early splitting into complementary channels

Retinal sustained and transient cells. SA/RA/PC afferents in touch. Regular and irregular vestibular afferents. Position, velocity and vibration channels in the fly's chordotonal organ. Mitral and tufted cells.

Every one of these is the same move: one channel cannot simultaneously optimise sensitivity, temporal precision and dynamic range, so split early and let the consumer choose. When you meet two cell types with different dynamics, this should be the first hypothesis.

## Why olfaction is the right test case

Not because it is the most important sense, but because it is the one where imported intuitions fail most informatively.

Olfaction inverts nearly every property vision teaches: unordered rather than ordered array, hundreds of channels rather than three, no metric rather than a clean one, sensor slower than signal rather than faster, two synapses to cortex rather than four, no obligatory thalamic relay at all.

Each inversion is a chance to ask **what that property was doing** in the system that had it. You learn what thalamus is for by studying the sense that manages without one. You learn what a map buys by studying the sense that has nothing to be topographic about.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A word on the invertebrate material</div>
Fly and locust work appears throughout, and not as decoration. For several of the key computations — divisive normalisation, random expansion recoding, the optimal number of inputs per Kenyon cell — the invertebrate account is <em>more complete</em> than the vertebrate one, because the circuits are small enough to characterise fully.

The right attitude is to use those results to interpret vertebrate data, not the other way round.
</x-callout>

## What this sampler covers

You are reading a sampler: two modalities, four sections each, plus this toolkit and a capstone.

The four sections are §1 (the computational problem), §2 (natural statistics), §4 (the receptor array) and §5 (the first circuit) — chosen because that is where vision and olfaction diverge most sharply, and because the vision sections supply templates the olfaction sections can be measured against.

The full course adds audition, somatosensation, gustation, vestibular, proprioception and the exotic senses, then synthesis modules that pivot everything into a single comparative table.

<x-predict>
<script type="application/json">
{
  "id": "m00.s00.p1",
  "contentRev": 1,
  "prompt": "Before going further — commit to a guess. You know that vision has topographic maps (retinotopy) and that olfaction does not have anything comparable. Give your best reason WHY a sensory system would build a topographic map at all. What is it for? Then predict what a system lacking one has to do instead.",
  "placeholder": "What is a map actually for?",
  "reveal": "The usual first answer is \"so the brain knows where things are\", and it is worth seeing why that cannot be right: the information about position is in *which* neuron fires, whether or not those neurons are arranged tidily. A scrambled retina would carry identical information. Maps are not required for representing position.\n\nThe better answers are about **wiring and local computation**:\n\n- **Wiring length.** Neurons that need to interact frequently should be close, because axon is expensive in volume, energy and delay. If computation is local in stimulus space — comparing a point to its neighbours — then laying out the sheet to match stimulus space minimises total wiring.\n- **Local interaction becomes cheap.** Centre–surround needs each cell to sample its neighbourhood. With a map, \"neighbourhood\" is a short local connection requiring no specificity beyond proximity. Without one, the same computation needs precise long-range connectivity that must somehow be specified.\n- **Development becomes cheap.** Gradients of guidance molecules can build a map without specifying each connection individually.\n\nNotice that all three are about *implementation*, not representation. This matters: it means a system without a metric on its receptor array is not missing a representational capability, it is missing a set of cheap implementation tricks — and must pay for the same computations some other way.\n\n**What olfaction has to do instead** is the subject of §3.5, and the answer is one of: learn the connectivity from experience (expensive, plastic, and a possible rationale for adult neurogenesis in the bulb), or give up on structured decorrelation and use non-specific global normalisation (cheap, but removes only the mean).",
  "followUp": "Keep your answer. §3.4 asks you to apply it, and §12 turns it into a testable prediction about where in the olfactory system a map could exist after all."
}
</script>
</x-predict>
