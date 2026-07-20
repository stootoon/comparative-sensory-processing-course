---
id: m08.s04
title: The receptor array
lede: An ordered, somatotopic array with poor localisation — and within it, a cutaneous/visceral contrast that varies spatial precision by two orders of magnitude while holding the loss function roughly fixed. This is the within-modality control §12.1 needs.
estimatedMinutes: 13
---

The nociceptive array tiles the body surface and, less densely, the body's interior. It is **ordered**: neighbouring receptors report neighbouring skin, and that ordering is preserved through the dorsal horn to thalamus and cortex. On the datasheet, nociception scores high on array ordering and shares that row with vision, audition, touch and the vestibular system rather than with olfaction and taste.

And yet **pain is badly localised**. Not catastrophically — you know which hand is burnt — but far worse than touch on the same skin, and for visceral pain the localisation is so poor that the percept is routinely referred to a completely different body part.

That combination is the section's whole point, and it is a result the course can only get here.

## Ordering does not entail precision

The course has repeatedly used array ordering as a load-bearing property. §1.4 argued that retinotopy is what makes centre–surround, convolution and interpolation available at all; §3.4 argued that olfaction lacks a map because it lacks a metric on receptor identity, and §12.1 audits which motifs actually need one.

Nociception is the case that separates two things those arguments risk conflating. **A metric on the array buys you the possibility of localising. It does not buy you resolution.** Resolution is set by innervation density and by the convergence ratio onto second-order neurons, and nociception spends far less on both than touch does over the same skin.

<x-figure src="content/08-nociception/figures/localisation-grain.js"
  caption="Switch to 'Nociceptive channels only'. Spatial precision varies by roughly two orders of magnitude from Aδ cutaneous to visceral, while the loss function stays approximately fixed — a missed injury is catastrophic in the gut as much as on the hand. Precision therefore cannot be a function of the loss; it tracks what the downstream action needs to know, which for a visceral insult is nothing spatial at all.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">The within-modality control</div>
§12.1 wants to know what array ordering and array precision actually buy. Every comparison the course has made so far is <em>between</em> modalities, and between-modality comparisons confound everything at once — vision differs from olfaction in ordering, metric, dimensionality, tuning breadth, transport physics and loss function simultaneously, which is the problem §5.11 spends a whole free-response question on.

Nociception offers something better: a comparison <strong>within one modality</strong>, holding the loss function, the transduction machinery, the first circuit and the ascending routes approximately fixed, and varying only the array's spatial grain.

| | cutaneous | visceral |
|---|---|---|
| Array ordered | yes | yes |
| Innervation density | moderate | very sparse |
| Localisation error | ~1–5 cm | ~10s of cm, often referred |
| Loss function | miss is catastrophic | miss is catastrophic |
| Available action | withdraw <em>this</em> part | stop, guard, seek help |

<strong>What it licenses.</strong> Spatial precision is not set by the cost of being wrong. Two channels with the same cost matrix differ in precision by two orders of magnitude, so the loss function cannot be the controlling variable. What differs is the <em>specificity of the available action</em>, and precision tracks that.

<strong>What it does not license.</strong> It does not show that action specificity is the <em>only</em> determinant, because innervation density and available body volume also differ, and a gut simply has fewer places to put afferents. The comparison is confounded by anatomy, just less badly than the between-modality ones. And it says nothing about ordering per se, since both channels are ordered.
</x-callout>

## Referred pain as a prediction rather than a curiosity

Referred pain is usually taught as an oddity — cardiac ischaemia felt in the left arm, appendicitis felt periumbilically before it localises. Read structurally, it is a straightforward consequence of the array's design and of the first circuit's pooling.

Visceral and cutaneous nociceptive afferents converge on the same lamina V wide-dynamic-range neurons in the dorsal horn [@kandel2021]. A single output neuron therefore cannot report which of its inputs drove it. Downstream has to attribute the signal somewhere, and it attributes it to the skin — plausibly because cutaneous input dominates the neuron's history, so the prior heavily favours a cutaneous source.

**That is an optimal inference under a bad likelihood.** The brain is doing the right thing given a channel that has already discarded the information; the error is upstream, in the convergence. And the convergence is itself defensible: dedicating separate projection neurons to sparse visceral afferents would cost cells to deliver a spatial resolution nothing downstream can use.

A second anatomical route to the same phenomenon exists — some nociceptive afferents branch in the periphery and innervate both skin and viscera, so a single afferent genuinely has two receptive fields [@kandel2021]. Both explanations are on the table and they are not exclusive.

The comparative point is worth stating plainly: **referred pain is what happens when an ordered array is sampled too sparsely to support the map it nominally has.** Olfaction has no map and therefore cannot have referred percepts of this kind. Vision has a dense map and does not show them either. Nociception sits in between and shows the failure mode of the intermediate case, which no other modality in the course can demonstrate.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Cutaneous and visceral nociception share a loss function and differ in spatial precision by roughly two orders of magnitude. Which conclusion does that comparison best support?",
  "options": [
    {
      "text": "Spatial precision is set by the specificity of the action the estimate must support, not by the cost of being wrong — since holding the cost fixed and varying the available action varies the precision.",
      "correct": true,
      "feedback": "This is the inference the design licenses, and it is the reason the section exists. It also generalises: the four ascending tracts of §8.6 show the same pattern on the central side, with receptive-field size growing monotonically from the discriminative route to the autonomic one. Note the limit, though — the comparison is confounded by innervation density and by the sheer geometry of a gut, so the claim is 'precision tracks action specificity' rather than 'action specificity determines precision'."
    },
    {
      "text": "Spatial precision is set by innervation density, which is the only real difference between the two channels.",
      "correct": false,
      "feedback": "Correct under the assumption that the mechanistic determinant is the explanation. Innervation density is indeed the proximate cause, and the figure's second view shows receptive-field size tracking it neatly. But this answers a different question: the section asks *why* the system spends afferents unevenly, and 'because it has fewer afferents there' restates the observation. §8.1 and §5.1 both insist on keeping mechanism and rationale apart, and this is the same distinction."
    },
    {
      "text": "Ordering of the receptor array is not doing useful work in nociception, since an ordered array that localises this badly might as well be unordered.",
      "correct": false,
      "feedback": "Correct under the assumption that a map earns its keep only through fine localisation. It does not: coarse somatotopy is enough to direct a withdrawal to the correct limb, to guard the correct joint, and to organise the reflex circuitry segmentally — all of which would be impossible with an unordered array. The comparison shows ordering is insufficient for precision, not that it is useless. This is exactly the distinction §12.1 is auditing, and collapsing it would lose the result."
    },
    {
      "text": "Visceral nociception is an evolutionarily older, less refined system that never acquired the spatial machinery the cutaneous system has.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which this course examines and repeatedly finds unhelpful — §1.12 and §10 both note that touch and proprioception bypass thalamus without being ancient, and that appeals to age tend to substitute for explanations. Here the antiquity story also makes a wrong prediction: it predicts visceral nociception should be worse in every respect, whereas its sensitization, its autonomic coupling and its central targets are elaborate rather than rudimentary. Sparse spatial sampling is a specific allocation, not a general deficiency."
    }
  ]
}
</script>
</x-mcq>

## Channel count, tuning breadth, and the silent class

The array is **low-dimensional relative to its ordering**, which is an unusual combination.

Counting classes rather than fibres, the periphery offers roughly: thermal-specific Aδ, mechanical-specific Aδ, polymodal C, and a fourth class of **silent nociceptors** found particularly in viscera, which are not activated by noxious stimulation under normal conditions at all — inflammation and chemical mediators dramatically lower their threshold and recruit them [@kandel2021].

That fourth class deserves attention, because it is a design nothing else in this course has. A silent nociceptor is **a receptor held in reserve, switched into the array by tissue state.** It is not an adaptive gain change on an active channel; it is a change in the *size of the array*.

Read normatively, this is the array-level version of §8.10's argument. Under normal conditions the extra channels would only add false alarms — the tissue is fine, so their reports carry no information and cost sensitivity elsewhere. Once inflammation establishes that damage has occurred and is unresolved, the prior over further damage in that tissue rises sharply, and additional sensitivity becomes worth its false alarms. **Recruiting receptors is a rational response to a changed prior**, and it is the most explicit instance in the course of a receptor array whose membership is a state variable.

It is also, unsurprisingly, implicated in the pathology: silent nociceptor recruitment is thought to contribute to secondary hyperalgesia and central sensitization [@kandel2021]. The mechanism that makes the array rationally adaptive is the same one that makes it capable of running away.

<x-free-response>
<script type="application/json">
{
  "id": "m08.s04.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "§3.4 argues olfaction's array is unordered because receptor identity has no metric. §8.4 argues nociception's array is ordered but coarse. Using both, state what a receptor array must supply for a downstream 'map' to be worth building, and apply the criterion to one case in each direction.",
  "modelAnswer": "**The criterion, in three parts.**\n\nA map of an array is worth building when all three hold.\n\n*One: the array must carry a metric.* Neighbouring receptors must report neighbouring values of something, or 'nearby' has no referent and no local operation — surround inhibition, interpolation, convolution — means anything. This is §1.4's requirement and it is what olfaction fails.\n\n*Two: the sampling must be dense enough that positions are distinguishable.* An ordered array sampled sparsely supports a topography that no downstream computation can exploit at fine grain. This is what visceral nociception fails, and referred pain is the visible consequence.\n\n*Three: some consumer must need the position.* A map is a cost — wiring, cortical area, developmental specification (§10). If every downstream action is the same regardless of where the stimulus was, the map buys nothing. This is the gustation case: taste is unordered and nobody misses the map, because the action is swallow or spit.\n\n**Case one, in the direction of 'not worth building': visceral nociception.** It passes criterion one and fails two and three together. The array is ordered but sparse, and the actions it supports — stop moving, guard, seek help, mount an autonomic response — need no location. The system accordingly does not build a fine visceral map, pools visceral afferents onto neurons shared with skin, and accepts referred pain as the price. That is the right trade, and it is worth noticing that the 'error' is only an error from the point of view of a clinician wanting a diagnosis, not from the point of view of the animal.\n\n**Case two, in the direction of 'worth building despite appearances': echo delay in bats (§9).** The cochlea has no receptor for delay — delay is not a physical quantity any hair cell measures. The array supplies frequency, and delay must be computed. But a consumer needs it acutely (range for interception), and the computed variable does have a metric, so a map of it is built centrally even though nothing in the array is ordered by it. This shows criterion one applies to the *variable being mapped*, not to the receptor array as such, which is the amendment nociception and echolocation jointly force.\n\n**What this means for olfaction.** The standard claim is that olfaction lacks a map because receptor identity has no metric. The bat case shows that is not decisive: a map of a *derived* variable is available if the derived variable has a metric and a consumer needs it. §14.2 pursues exactly this, and the candidates are temporal — plume timing, source separation, whiff statistics [@tootoonian2025] — where a metric is not in doubt.\n\n**The honest caveat.** All three criteria are stated qualitatively and none is quantitative. Nobody can say how dense is dense enough, or how much a consumer must need position before a map pays for itself. The nociceptive cutaneous/visceral pair is the closest the course gets to a calibrated point on that axis, and it is one point.",
  "rubric": [
    "States a metric requirement on the array (or on the mapped variable), citing olfaction as the failure",
    "States a sampling-density requirement, citing visceral nociception and referred pain",
    "States a consumer requirement — some downstream user must need position — citing gustation",
    "Applies the criteria to a 'not worth building' case with the trade made explicit",
    "Applies them to a case where a map IS built for a derived variable with no corresponding receptor ordering (bat echo delay, or equivalent)",
    "Bonus: draws the amendment that criterion one applies to the mapped variable rather than the receptor array, and points it at olfaction's temporal variables",
    "Bonus: concedes that none of the three criteria is quantitative"
  ]
}
</script>
</x-free-response>
