---
id: m02.s08
title: Parallel streams
lede: Audition has a what/where split like vision's, arrived at independently from a receptor array with no spatial dimension at all. That independence is what makes it evidence.
estimatedMinutes: 12
---

Beyond primary cortex, auditory processing diverges into broadly separable streams: an **anteroventral** pathway concerned with identity — what is this sound, whose voice, which word — and a **posterodorsal** pathway concerned with location and with auditory-motor mapping.

The parallel with vision's ventral and dorsal streams is close enough to be more than coincidence, and the fact that it is close is the interesting part. It is also, on the anatomy, a tendency rather than a partition — medial belt areas project to both dorsal and ventral frontal targets, and broadly space-tuned neurons are found in caudal and anterior areas alike [@kandel2021]. The claim worth defending is that the streams are separated, not that they are disjoint.

A lesion result sharpens what the cortical "where" pathway is actually for. Removing A1 can produce profound localisation deficits — but not on every task. An animal asked merely to report which side a sound came from is unimpaired; the deficit appears when it must *approach* the location of a brief sound, that is, form a representation of the source, hold it, and move to it. Inactivating the avian equivalent of the frontal eye fields in barn owls does the same thing: orienting to a present sound survives, orienting to a remembered one does not [@kandel2021]. So the subcortical route through the inferior and superior colliculi already suffices for reflexive orienting, and what cortex adds is memory and the ability to act on a source that is no longer sounding. Worth carrying into §3.8: the question "where is olfaction's dorsal stream?" may be better posed as "what does olfaction do that needs a *remembered* source location?"

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why the convergence is evidence</div>
Vision's ventral/dorsal split could be explained by its receptor array: the retina samples space directly, so an anatomical separation between "what" and "where" might just reflect two ways of reading a spatial map.

<strong>Audition has no spatial dimension in its receptor array at all.</strong> The cochlea samples frequency; location is computed from interaural differences several synapses later. Yet audition arrives at the same split.

Two systems with completely different input geometries, converging on the same divergence, is good evidence that <strong>the split is driven by the computational problem rather than by the sensor</strong>. Identity requires invariance to location; location requires invariance to identity. You cannot optimise one representation for both, so split.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Every parallel-stream split in the course, grouped by why it exists. Filter to 'conflicting invariance requirements' and note that vision, audition and touch are three independent instances with three different receptor geometries — and that the predicted olfactory instance is the one nobody has located.">
</x-figure>


<strong>Which forces the question of §3.8 and §13.</strong> Olfaction faces the same pair of problems — identity in chemical space, location from plume statistics — and they are, if anything, <em>more</em> dissimilar than vision's or audition's. So where is olfaction's dorsal stream? The comparative argument now rests on two independent instances, and predicts a third.
</x-callout>

## Scene analysis as inference

The deepest computation downstream is **auditory scene analysis**: deciding how many sources there are and which spectral components belong to each.

The grouping cues from §2.2 — harmonicity, common onset, common modulation, spatial coincidence — are best understood not as heuristics but as **likelihood terms in an inference over generative models of the scene**. A set of components sharing a fundamental is far more probable under "one harmonic source" than under "several coincidentally related sources."

That framing matters for the comparison. Olfaction's demixing problem has the same logical structure and almost none of the same cues: no harmonicity, minimal spatial resolution, leaving temporal correlation to carry the load. When §14 argues that temporal correlation is olfaction's harmonicity, this is the claim being made — not that they are similar cues, but that they occupy the same slot in the same inference.

<x-mcq>
<script type="application/json">
{
  "id": "m02.s08.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "\"Temporal correlation occupies the same slot as harmonicity.\" Read as a claim about likelihood terms rather than as an analogy, what does that commit you to?",
  "options": [
    {
      "text": "That there is a generative model of odour scenes under which co-fluctuating channels are far more probable given one source than given several — so the cue's force is derivable from transport physics and is quantifiable, as harmonicity's is derivable from how vibrating bodies produce sound.",
      "correct": true,
      "feedback": "This is the commitment, and it is what makes the claim testable rather than decorative. Harmonicity is powerful because the physics of a vibrating body makes integer-ratio components overwhelmingly more likely under one source than under several — a likelihood ratio, computable in principle. The olfactory version demands the same thing from turbulent transport: molecules released together stay together and fluctuate together, and the strength of the cue is whatever the transport statistics say it is. Anyone making the claim owes that calculation."
    },
    {
      "text": "That temporal correlation is as reliable a cue for olfaction as harmonicity is for audition.",
      "correct": false,
      "feedback": "Correct under the assumption that occupying the same slot means matching in strength, which is how analogies are usually meant. This one is structural. The cue could be much weaker than harmonicity and still be the correct answer to 'what fills this role', simply because it is the only candidate left once chemistry declines to supply a lawful relation. Expecting parity is what makes the claim look overstated when it is not."
    },
    {
      "text": "That the olfactory bulb must contain a circuit dedicated to computing cross-channel correlation.",
      "correct": false,
      "feedback": "Correct under the assumption that a term in an inference implies a dedicated detector for it — a common and often productive move, and the reason people go looking. But it converts a computational-level claim into an implementational prediction without the intervening argument: the correlation could be exploited at any stage, or distributed, or read out only where it is needed. Marr's levels are being collapsed one step too early."
    },
    {
      "text": "That odour sources must emit their components in fixed ratios, since harmonicity is a lawful relation among a source's components.",
      "correct": false,
      "feedback": "Correct under the assumption that the analogy runs through the *lawfulness* of the relation — and that is exactly what chemistry does not provide. There is no rule relating the components a source emits, which is why fixed-ratio templates are the wrong model. The cue is co-fluctuation in time, which requires no lawful relation among components at all, only that they travelled together. Mice can discriminate on this basis at surprisingly high frequencies [@ackels2021]."
    }
  ]
}
</script>
</x-mcq>
