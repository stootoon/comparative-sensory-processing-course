---
id: m05.s08
title: Parallel streams
lede: Identity and hedonics, separated. Taste's split is the purest instance of the loss-function division — and it is the one olfaction demonstrably shares.
estimatedMinutes: 10
---

Taste divides into an **identity** stream — what is this substance, supporting learning and flavour perception — and a **hedonic/value** stream, running through amygdala and hypothalamus and driving ingestion, rejection and autonomic responses.

Unlike vision's what/where, this is not an invariance argument. Both streams care about the same variable — which taste is present. They differ in **what they do with it**.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Filter to 'conflicting loss functions' and gustation is the purest case: one decision, grossly asymmetric loss, and a value stream that reaches motor output without cortex. The confirmed olfactory instance sits directly below it — a prediction derived from this argument that held in a system nobody had connected to it.">
</x-figure>


## Conditioned taste aversion

The clearest window onto the value stream. Pair a novel flavour with subsequent illness and animals develop a lasting aversion, with two properties that violate normal learning rules:

**One trial suffices.** Most associative learning requires many pairings.
**Delays of hours are tolerated.** Most associative learning requires near-simultaneity.

Both make sense given the teaching signal (§5.2). Post-ingestive consequences are *inherently* delayed, and the cost of needing several trials to learn that something is poisonous is obvious. The learning rule is matched to the statistics of the feedback it receives.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Learning rules are shaped by the teacher's statistics</div>
This generalises, and it is a good thing to carry into any modality.

A learning rule requiring temporal contiguity is optimal when causes and effects are contiguous. When the informative consequence arrives hours later and is rare, the optimal rule tolerates long delays and learns in one shot — and taste implements exactly that.

<strong>The olfactory version is worth asking about.</strong> Olfactory learning also supports rapid acquisition with relatively long delays, and olfaction shares taste's problem: the consequences of an odour (a food was good, a predator was near) often arrive well after the odour itself. If learning rules track feedback statistics, olfaction and gustation should have similar rules for similar reasons — and both should differ from vision, where consequences are usually immediate.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s08.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Conditioned taste aversion is one-trial and tolerates hour-long delays. The section explains this by matching the learning rule to the teacher's statistics. Which prediction follows most directly, and would most sharply test the explanation?",
  "options": [
    {
      "text": "Within one animal, the tolerable delay should differ by modality according to how delayed that modality's consequences typically are — long for taste, short for a cue predicting a foot shock.",
      "correct": true,
      "feedback": "This is the prediction that puts the account at risk, because it forbids the obvious alternative: that the animal simply has a slow general-purpose eligibility trace. A single trace predicts one delay tolerance across all cues. The statistics-matching account predicts cue-specific tolerances within the same nervous system, and the classic selective-association findings are exactly that — tastes associate with illness across long delays, audiovisual cues with shock across short ones. Same animal, same illness, different rules."
    },
    {
      "text": "Aversion strength should scale with the severity of the post-ingestive consequence.",
      "correct": false,
      "feedback": "Correct under the assumption that learning magnitude tracks the teaching signal's magnitude, which is true and is observed. But it is predicted by essentially every associative account, including ones with no matching to feedback statistics at all. A prediction shared by all competitors discriminates among none of them — the same objection §1.5 raises about centre–surround being over-determined."
    },
    {
      "text": "Aversions should form to novel flavours more readily than to familiar ones.",
      "correct": false,
      "feedback": "Partly correct, and latent inhibition is a real and relevant effect: a familiar flavour eaten safely many times is poor evidence about the current illness. That is genuinely a statistics-driven feature, so this is not a wrong answer. But it is a prediction about the *prior* over which cue caused the illness rather than about the delay structure, and the delay tolerance is the anomaly the section is trying to explain."
    },
    {
      "text": "Olfactory learning should show the same one-trial, long-delay profile, since both chemosenses face delayed consequences.",
      "correct": false,
      "feedback": "Correct under the account, and the callout makes exactly this extension — so this is the right *transfer* rather than the right test. The reason it is weaker as a test is that olfaction and gustation are confounded: they share pathways, share the flavour percept, and share an evolutionary history, so a shared learning rule has explanations other than shared feedback statistics. The within-animal, cross-modality contrast holds all of that fixed."
    }
  ]
}
</script>
</x-mcq>

## Flavour

What is colloquially called taste is mostly **flavour** — a fusion of gustation, retronasal olfaction, texture and temperature. Retronasal odour is perceptually attributed to the mouth despite being detected in the nose, and people are poor at separating the contributions.

The mislocalisation looks like a coincidence inference. Chewing and swallowing pump volatiles up the retronasal passage at the same moment the tongue is being stimulated chemically and mechanically, and the standard account is that this three-way coincidence is what assigns the odour to the mouth [@kandel2021]. Which is the ordinary logic of multisensory binding — common cause inferred from common timing — applied to a case where the inference is *wrong* about the receptor location and right about the object. Localisation follows the source of the food, not the site of transduction.

That fusion is itself interesting: two chemosenses with opposite architectures (§5.1) produce a single unified percept, and the binding is obligatory rather than optional. It is one of the stronger cases of forced multisensory integration anywhere, and the full course treats it alongside the vestibular–visual case in §6.
