---
id: m05.s09
title: Active sensing and the motor loop
lede: Licking is a self-generated rhythm at about six hertz that admits the stimulus in discrete packets — the third member of a club whose membership demands explanation.
estimatedMinutes: 9
---

Taste requires bringing substances into contact with the tongue. Rodents lick at a strikingly regular ~6–7 Hz, and each lick delivers a discrete sample.

## The sampling clock

Like sniffing and whisking, licking:

- is **self-generated** and under voluntary control,
- is **rhythmic** at a few hertz,
- **discretises** a continuous stimulus into packets,
- and provides a **phase reference** against which response latencies are meaningful.

Gustatory responses are locked to the lick cycle, and the timing of a response within the cycle carries information.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Licking joins sniffing, whisking and saccades in the 4–12 Hz band. Four self-generated sampling rhythms, four modalities, one frequency range — a convergence nobody has convincingly explained, and one where the biomechanical and integration-time accounts make opposite predictions about how the band should scale with body size.">
</x-figure>


<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The 4–12 Hz club, now with four members</div>
<strong>Sniffing</strong> 2–10 Hz · <strong>Whisking</strong> 5–15 Hz · <strong>Licking</strong> ~6 Hz · <strong>Saccades</strong> ~3 Hz — plus hippocampal theta and the syllable rate of speech (§2.2) in the same band.

Four self-generated sampling rhythms, in four modalities, converging on one frequency band. That is not a coincidence anyone has convincingly explained, and the candidates are worth keeping distinct:

<strong>Biomechanical.</strong> Moving a sensor — tongue, whisker, nose, eye — has a natural resonance in this range. Predicts the band should scale with body size, and whisking-versus-licking within one animal is a partial test.<br>
<strong>Integration time.</strong> Downstream circuits integrate over ~100 ms, so sampling faster wastes samples and slower wastes time. Predicts the band should track neural time constants rather than body size.<br>
<strong>Shared clock.</strong> A common rhythm lets multiple sampling systems stay in register — which matters if you are sniffing and whisking at the same object. Predicts phase coupling between the rhythms, which is observed.

None is established. But it is a rare comparative question with a clear observable and multiple distinguishable hypotheses, which is why the course keeps returning to it.
</x-callout>

## Selection before ingestion

Taste also has a coarse pre-screen: olfaction and vision usually determine whether something reaches the mouth at all. Taste is the last check, not the first — which is another reason it can afford to be conservative and categorical. It only ever adjudicates candidates that earlier senses have already approved.

The last check is also not a single check. Taste buds are not confined to the tongue: they continue onto the palate, pharynx, epiglottis and the upper third of the oesophagus, innervated by cranial nerves IX and X rather than VII [@kandel2021]. The array is laid out along the path the food takes, so the accept/reject question is re-asked at the point of no return, after the animal has already committed to swallowing. That is the arrangement the asymmetric loss of §5.1 predicts — the cheapest place to catch a miss is the last place a rejection is still possible, and taste keeps sensors there.

<x-order>
<script type="application/json">
{
  "id": "m05.s09.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 21,
  "prompt": "Order the stages by which a foraging rodent decides whether a substance ends up metabolised, from the earliest screen to the final one. Then read the note, which is about what each stage's position implies for its design.",
  "items": [
    { "id": "a", "text": "Vision and orthonasal olfaction: is this worth approaching at all?" },
    { "id": "b", "text": "Orofacial contact — texture, temperature, trigeminal irritation: is this food-like?" },
    { "id": "c", "text": "Gustation across a few lick cycles: accept or reject this mouthful." },
    { "id": "d", "text": "Retronasal olfaction and flavour learning: what was that, and should I seek it again?" },
    { "id": "e", "text": "Post-ingestive nutrient signalling: was that decision correct?" }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "The ordering is worth having explicit because **position in the cascade predicts design**, and this is the strongest form of the section's closing remark.\n\nEarly stages face an enormous candidate set and a cheap rejection cost, so they should be high-throughput, permissive and inexpensive — which is what distal senses are. By the time gustation acts, the candidate set has been filtered several times over, the rejection cost is one mouthful, and the miss cost is a poison. **That is a completely different operating point, and it is why taste can afford five channels, categorical output and a threshold placed far toward rejection** (§5.1). A sense that had to adjudicate every substance in the world could not be built this way.\n\nTwo consequences worth carrying.\n\n*Sensitivity and specificity trade along the cascade, not within a stage.* The usual framing asks whether a given detector is well calibrated. The right question is whether the *sequence* is, and a stage that looks recklessly permissive or absurdly conservative in isolation may be neither in context.\n\n*Only the last stage gets ground truth.* Stage (e) is the only one that observes the outcome, and it teaches stages (c) and (d) — §5.2's point, and the reason taste can be hard-wired and still corrigible. Note that stages (a) and (b) are largely *not* taught by it, which predicts that distal food preferences should be more plastic through social and observational routes than through direct nutritional feedback.\n\nThe olfactory comparison: orthonasal olfaction sits at stage (a), retronasal at stage (d), and they are the same receptors. **One receptor array, two positions in the cascade, two operating points** — which is a within-modality version of the loss-function argument, and a reason to expect the two routes to be processed differently downstream."
}
</script>
</x-order>
