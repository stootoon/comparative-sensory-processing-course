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

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="The whole course on two axes; pick any pair. The opening view is the course's central empirical claim — measured ensemble against theoretical maturity, r = 0.91 across nine modalities, the strongest relationship in the datasheet, with olfaction alone in the bottom-left. Then check the two rival explanations of why olfaction lacks a theory: ordered array against theory gives r = 0.76, dimensionality against theory gives −0.69. Disorder correlates with poor theory slightly BETTER than dimensionality does, which is not what the course's slogan implies — the case for blaming dimensionality rests on gustation being an outlier the coefficient averages away, not on the correlation. Highlight gustation and see, then read §11.1.">
</x-figure>


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

Receptive fields, centre–surround, topographic maps, interpolation, smoothing priors, translation invariance, convolution — all of them need "nearby" to mean something. Vision, audition and touch all have ordered arrays where it does. **Olfaction does not**, and the consequence is that much of the conceptual toolkit imported from vision either fails to apply or has to be rebuilt in a non-spatial form.

Much of what looks strange about olfactory circuits looks strange only because we arrive with expectations calibrated on vision.

**Read that as a hypothesis, not a conclusion — the course sets out to test it and it does not survive intact.** §11.1 audits fourteen motifs one at a time, asking of each exactly which property of the metric it consumes, and finds that **six never needed one**. Among the survivors is the opponent-axis calculation of §1.2, which is the closest thing the course has to a flagship olfactory question and which turns out to be blocked on the missing ensemble rather than on the missing metric.

What survives the audit is narrower and more useful than the slogan: motifs consuming a neighbourhood, a betweenness relation, or a translation group are genuinely unavailable, while motifs defined by population statistics transfer unchanged. Gustation is what forces the weakening — it is unordered like olfaction, low-dimensional unlike it, and has none of olfaction's difficulties, so disorder alone cannot be the culprit (§11.1, §5.3).

Stating the claim strongly here and then weakening it in §11.1 is deliberate. It is the course's own worked example of skill 1 above: take a claim that would change how you read your field, work out what would falsify it, and then actually check.

### Lesson 4 — Where the sensor is slower than the signal, the population must compensate

Vision, audition and touch all have sensors fast enough for the signals that matter to them. Olfactory receptor neurons are roughly an order of magnitude too slow for the plume structure that mice demonstrably use. That mismatch is close to unique among the classical senses, and it forces population solutions.

Usefully, the problem is *solved* elsewhere: electric fish achieve sub-microsecond behavioural precision from neurons with millisecond precision, by pooling. The mechanism is known; the question is whether olfaction uses the same one.

### Lesson 5 — Subtract what you can predict

Retinal surrounds subtract a spatial prediction. Vestibular nuclei subtract self-generated head motion. Electrosensory lobes learn a negative image of the animal's own discharge. In every case a neuron that has successfully subtracted its prediction goes *quiet*, which means **silence is a result, not an absence of response** — an interpretive trap that has caught people in several fields.

### Lesson 6 — The consumer determines the code

Proprioception recodes muscle lengths into task-relevant limb variables because its consumer is a controller. Taste collapses hundreds of bitter compounds onto one axis because its consumer makes one binary decision under a wildly asymmetric loss. Vision preserves metric detail because its consumers are open-ended.

So: *who consumes the olfactory code, and what basis do they want?* If the answer is navigation, the wanted variables are bearing and distance to source, not molecular identity — which predicts a stream nobody has convincingly located.

### Lesson 7 — Early splitting into complementary channels

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="A motif you will meet in five modules: self-generated sampling rhythms, all landing in the 4–12 Hz band. Sniffing, whisking, licking, saccades, and the syllable rate of speech. Nobody has established why, and the three candidate explanations make opposite predictions about how the band should scale with body size.">
</x-figure>


Retinal sustained and transient cells. The four SA1/RA1/PC/SA2 afferent classes in touch. Regular and irregular vestibular afferents. Position, velocity and vibration channels in the fly's chordotonal organ. Mitral and tufted cells.

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

## How the course is laid out

Fourteen modules, doing four different jobs.

**This toolkit (§0)** supplies the vocabulary everything else uses: the three normative stances and how to tell them apart, and why efficient coding predicts opposite structures at high and low SNR. It is short, and worth reading first — every module after it assumes it.

**Seven modality modules (§1–§7)**, each using the identical eleven-section skeleton, in the same order, with the same numbering. §4 means the receptor array whether you are reading about cones or odorant receptors, so you can read *across* modules as easily as down one. Vision comes first because it supplies the templates everything else is measured against; olfaction comes third, after two mature normative theories, so you arrive equipped.

**Two modules of natural experiments (§8–§9).** The exotic senses are not a curiosity cabinet — electroreception, echolocation, infrared and magnetoreception each hold constant something the familiar seven confound. Development and evolution then supply the two constraint sources the earlier modules assume without examining: how a system must be *built*, and how it *got here*.

**Four synthesis modules (§10–§13)**, which introduce little new material and mostly pivot what is already established. §10 collects the motifs that recur; §11 the axes on which modalities differ, where the course audits its own central claim and weakens it; §12 tests the central empirical claim outside biology, in engineered systems where no evolutionary or metabolic explanation is available; and §13 works through what each modality lends olfaction, ending in a ranked research agenda and a reading guide.

Every module ends with a quiz, and §13.8 is a cumulative final exam.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">Why there is no module between 7 and 8 in the obvious place</div>
Nothing is missing. The eleven-section skeleton is used by §1–§7 only, because those are the modules where a receptor array, a first circuit and a central representation all exist to be compared. §8 onward have their own structures because they are asking different questions — a module about convergent evolution has no "receptor array" section to fill, and forcing one would be padding.

If you are reading across rather than down, read across §1–§7. The later modules are where the across-reading gets cashed out.
</x-callout>

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two ways to read this</div>
<strong>Down</strong> — one modality at a time, all eleven sections. This is the natural route if you want to learn a modality you do not know.

<strong>Across</strong> — the same section number in every module, in turn. Read every §4 and you get a comparative treatment of receptor arrays; read every §6 and you get the question of what thalamus is actually for, asked of eight systems, two of which manage without one. <strong>The across-reading is what the parallel skeleton exists to enable</strong>, and it is where most of the course's arguments actually come from.

If you only have time for a slice: §0, then all of §1 (vision) as the template, then all of §3 (olfaction) as the case, then §13.6 for what the comparison produced.
</x-callout>

**No section is ever deleted.** Where a structure is absent — and olfaction is missing several that vision teaches you to expect — the section says so and asks why. Those absences are the most comparatively informative data in the course, and deleting the section would destroy the information.

<x-predict>
<script type="application/json">
{
  "id": "m00.s00.p1",
  "contentRev": 1,
  "prompt": "Before going further — commit to a guess. You know that vision has topographic maps (retinotopy) and that olfaction does not have anything comparable. Give your best reason WHY a sensory system would build a topographic map at all. What is it for? Then predict what a system lacking one has to do instead.",
  "placeholder": "What is a map actually for?",
  "reveal": "The usual first answer is \"so the brain knows where things are\", and it is worth seeing why that cannot be right: the information about position is in *which* neuron fires, whether or not those neurons are arranged tidily. A scrambled retina would carry identical information. Maps are not required for representing position.\n\nThe better answers are about **wiring and local computation**:\n\n- **Wiring length.** Neurons that need to interact frequently should be close, because axon is expensive in volume, energy and delay. If computation is local in stimulus space — comparing a point to its neighbours — then laying out the sheet to match stimulus space minimises total wiring.\n- **Local interaction becomes cheap.** Centre–surround needs each cell to sample its neighbourhood. With a map, \"neighbourhood\" is a short local connection requiring no specificity beyond proximity. Without one, the same computation needs precise long-range connectivity that must somehow be specified.\n- **Development becomes cheap.** Gradients of guidance molecules can build a map without specifying each connection individually.\n\nNotice that all three are about *implementation*, not representation. This matters: it means a system without a metric on its receptor array is not missing a representational capability, it is missing a set of cheap implementation tricks — and must pay for the same computations some other way.\n\n**What olfaction has to do instead** is the subject of §3.5, and the answer is one of: learn the connectivity from experience (expensive, plastic, and a possible rationale for adult neurogenesis in the bulb), or give up on structured decorrelation and use non-specific global normalisation (cheap, but removes only the mean).",
  "followUp": "Keep your answer. §3.4 asks you to apply it, and §13 turns it into a testable prediction about where in the olfactory system a map could exist after all."
}
</script>
</x-predict>
