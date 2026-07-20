---
id: m08.s08
title: Parallel streams
lede: The loss-function split again, and this time with lesion evidence on both sides. §4.8 established that discriminative and affective are divided for a different reason from what and where; nociception is where that division is sharpest and where its cost is visible.
estimatedMinutes: 12
---

§4.8 did most of this work already, and the point of §8.8 is not to repeat it.

Touch established the taxonomy: **what/where is an invariance argument** — identity needs invariance to position and position needs invariance to identity, so no single representation serves both — while **discriminative/affective is a loss-function argument**, because fine texture judgement wants metric detail preserved and pain wants a fast categorical signal that drives withdrawal. Touch is the modality where both operate at once, which is what makes it the clean demonstration that they are distinct principles.

Nociception is on the other side of touch's second split. It *is* the affective stream, considered from the inside. And looked at from there, three things become visible that §4.8 could not show.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Filter to 'Conflicting loss functions'. Nociception's contribution is not a new instance on this grid — it is the same instance seen from inside, where the affective stream turns out to have its own internal splits driven by all three reasons at once. A modality can be one arm of another modality's split and still run the full taxonomy internally.">
</x-figure>


## One: the affective stream has its own streams

Touch's affective arm is described as a single thing — spinothalamic, to insula and limbic targets, poor spatial resolution, strong valence. From inside, it is at least four things (§8.6), and they are split for all three of §4.8's reasons at once.

**Deadline split.** Aδ first pain against C-fibre second pain: the same event, delivered to a reflex consumer and a management consumer four orders of magnitude apart in time (§8.1). This is a textbook deadline split and one of the cleanest in the course, because the conduction velocities are measured and the perceptual consequence is directly reportable.

**Loss-function split.** Spinothalamic to S1 against spinoparabrachial to amygdala: where-and-how-much against how-bad. The first wants metric detail preserved; the second wants a categorical valence signal that can drive avoidance learning and does not need to know which centimetre of skin was involved.

**Invariance split, weakly.** The discriminative route needs location invariant to the quality of the insult; the affective route needs a severity estimate invariant to location. That is the invariance argument's shape, though it is a weaker instance than vision's because severity and location are not as deeply incompatible as identity and position are.

**The generalisable point:** a stream that appears atomic at one level of description can run the whole taxonomy internally. That should make the course cautious about the olfactory case, where §3.8's piriform/cortical-amygdala split is treated as *the* loss-function division — the cortical amygdala arm may well have internal structure that nobody has looked for, and this module is the reason to go looking.

## Two: the cost of the split is visible

§4.8 stated the benefit of the discriminative/affective division. Nociception makes the cost measurable, because both arms can be lesioned.

**Remove the affective arm** — cingulotomy, or ablation of the frontal-cingulate pathway — and patients retain the ability to recognise intensity and location while losing the affective features [@kandel2021]. They know it hurts and do not mind. The behavioural consequence is that a signal designed to compel protective behaviour stops compelling it.

**Remove the discriminative arm** — anterolateral cordotomy, used for intractable terminal cancer pain — and pain sensation is markedly reduced contralaterally [@kandel2021], but the affective and autonomic routes are not fully spared, since the parabrachial and reticular tracts also ascend in the anterolateral quadrant. The lesion is anatomically coarse, and that is itself informative: the streams are separable functionally and bundled physically.

The comparative claim from §4.8 was that lesion double dissociations distinguish a division of labour from a hierarchy described twice. Nociception supplies one — at the cortical level, cingulate against insula (§8.7) — and shows the surgical version to be messier than the schematic. **Streams that are computationally distinct need not be anatomically separable**, which is worth carrying to olfaction, where the search for a second stream has largely been a search for a separable tract.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why the fast arm is the polymodal one</div>
§8.3 left a question open. The system contains relatively specific Aδ nociceptors and highly unspecific polymodal C fibres. Why is the <em>fast protective</em> response driven by the specific ones and the <em>slow motivational</em> signal by the polymodal ones — and not the other way round?

Because the two consumers need different statistics, and the specificity is in service of speed rather than of discrimination.

The withdrawal consumer needs <strong>a fast, clean detection with a location</strong>. Aδ fibres are myelinated, which is what makes them fast; myelination is expensive, which is why there are few of them; and few afferents means each must be relatively specific, because a sparse array cannot afford channels whose reports are ambiguous. Speed buys specificity as a side effect of the sparse, expensive design that speed requires.

The management consumer needs <strong>a dense, severity-graded, persistent signal</strong> and does not care what caused it. Unmyelinated fibres are cheap, so you can have many of them, sampling the body densely; and since the consumer pools them anyway, individual specificity buys nothing.

<strong>So the specificity gradient is a consequence of the deadline split rather than an independent design decision.</strong> That is a satisfying reduction: two apparently separate facts about the periphery — the fibre-speed dichotomy and the specificity dichotomy — turn out to have one cause.
</x-callout>

## Three: what the split predicts for olfaction, sharpened

§3.8 identified the piriform/cortical-amygdala division as olfaction's loss-function split — learned identity against innate valence — and §5.11 lists it as the course's confirmed import from gustation. Nociception sharpens the prediction in two specific ways.

**Sharpening one: expect the valence arm to route without a relay.** Nociception's affective streams reach limbic targets via parabrachial and reticular routes, bypassing the thalamic relay that the discriminative stream uses (§8.6). Touch's affective arm likewise reaches insula and limbic targets by a different route from the dorsal-column–VPL–S1 path. Two instances, same pattern: **valence streams skip the relay that discriminative streams take.** Olfaction, which has no obligatory relay at all, should therefore look like a modality that is *all* valence stream by this criterion — and the fact that it also supports fine learned discrimination is then the thing needing explanation, not the missing relay.

**Sharpening two: expect the valence arm to sensitize.** §8.10's argument is that gain should rise rather than fall when the reported state persists and demands unresolved action. The affective arm is where that applies; the discriminative arm shows ordinary adaptation. If the same logic transfers, an olfactory valence pathway reporting a persistent, action-demanding state — a predator's continuing presence, food that is continuing to rot — should show gain that rises with repeated exposure while the identity pathway adapts normally. **Nobody appears to have looked for opposite-signed adaptation in the two olfactory arms**, and it is a straightforward experiment.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s08.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Touch treats affective as a single stream; from inside, nociception splits it for all three of §4.8's reasons at once. What is the most useful general lesson, and where in the course does it bite hardest?",
  "options": [
    {
      "text": "A stream that looks atomic from outside can run the whole taxonomy internally, so any claim that a modality has N streams is a claim about the resolution of the description — and it bites hardest on §3.8's treatment of the cortical amygdala as olfaction's single valence arm.",
      "correct": true,
      "feedback": "Right, and the reason it bites there specifically is that the cortical amygdala arm is where nobody has looked for internal structure, while piriform has been studied intensively. An asymmetry in where people have looked is easily mistaken for an asymmetry in what is there. The module's concrete suggestion is to ask whether the valence arm has its own deadline split (fast innate avoidance against slower motivational weighting) of the kind nociception's Aδ/C dichotomy provides."
    },
    {
      "text": "Stream counts should be derived from the number of distinct consumers rather than from anatomy, since each consumer requires its own estimate.",
      "correct": false,
      "feedback": "Correct under the assumption that consumers and streams stand in one-to-one correspondence, which is the natural reading of the loss-function argument and is too strong. Nociception's spinoreticular and spinohypothalamic routes serve arousal and autonomic control, which are consumers whose requirements overlap substantially; and one WDR neuron's output feeds several consumers at once. The consumer count bounds the stream count without determining it."
    },
    {
      "text": "The three reasons for splitting are not independent, since nociception shows all three operating on the same anatomical division, so §4.8's taxonomy should be collapsed.",
      "correct": false,
      "feedback": "Correct under the assumption that co-occurrence implies non-independence. But the section is careful that the three reasons operate on *different* divisions within the affective stream — deadline on Aδ against C, loss function on spinothalamic against spinoparabrachial, invariance weakly across both. Co-occurrence within a modality is exactly what touch showed for two reasons in §4.8, and it was taken there as evidence the principles are distinct rather than collapsible."
    },
    {
      "text": "Anatomical separability is the right criterion for counting streams, since computationally distinct channels that share a tract cannot be independently lesioned or independently modulated.",
      "correct": false,
      "feedback": "Correct under the assumption that a stream must be anatomically addressable to be real, which has the practical virtue of being checkable. The section argues against it directly: anterolateral cordotomy cannot spare the affective routes because they ascend in the same quadrant, yet cingulate and insular lesions dissociate the components cleanly at cortex. Streams that are computationally distinct need not be anatomically separable — and taking separability as the criterion is what has made the search for olfaction's second stream a search for a tract."
    }
  ]
}
</script>
</x-mcq>

<x-predict>
<script type="application/json">
{
  "id": "m08.s08.p1",
  "contentRev": 1,
  "prompt": "Take the second sharpening seriously. Design the experiment: how would you test whether an olfactory valence pathway sensitizes while the identity pathway adapts, and what result would falsify the transfer rather than merely fail to confirm it?",
  "placeholder": "What stimulus, what recording, what comparison — and what does a null result mean here?",
  "reveal": "**The design.**\n\nRepeatedly present a persistent innately-aversive odour — a predator kairomone, or a spoilage volatile — and record simultaneously from piriform and cortical amygdala populations in the same animal, over tens of minutes rather than the seconds most adaptation experiments use. The timescale matters: §8.10's sensitization builds over minutes to hours, so an experiment sampling the first few seconds will see only the ordinary receptor-level adaptation both pathways share.\n\nThe key comparison is **within-animal and within-stimulus**, with the two pathways as the only varying factor. That removes the obvious confounds — differences in stimulus delivery, in arousal, in receptor-level adaptation — which is why it is a better design than comparing aversive with neutral odours.\n\n**The prediction.** Piriform responses decline with repetition, as they do. Cortical amygdala responses hold or grow. Behaviourally, avoidance should strengthen rather than habituate over the same period.\n\n**What would falsify the transfer.**\n\nA clean falsification is not the null result. If both pathways adapt with the same time course, that is *evidence against*, but it admits an obvious rescue: the stimulus may not have signalled a persistent unresolved state, because an odour in a box with no consequences is not a predator. The rescue is legitimate, which makes the null weak.\n\nThe sharper falsification comes from making the persistence manipulable. **Run the same odour under two contingencies** — one where the animal can escape it and one where it cannot — and let the sensitization argument predict the interaction. §8.10's claim is that gain rises when the reported cause is unresolved and the required action has not been taken. So the inescapable condition should sensitize more than the escapable one, in the valence pathway only. If the two pathways adapt identically *and* the contingency has no effect on either, the transfer has failed on its own terms rather than on a technicality.\n\n**Why this is worth doing regardless of the result.** The experiment measures something nobody has measured — the sign of adaptation, separately, in two olfactory streams over behaviourally relevant timescales. Even a flat null constrains §3.8's claim that the two arms serve different loss functions, because two streams serving genuinely different losses should not have identical dynamics."
}
</script>
</x-predict>
