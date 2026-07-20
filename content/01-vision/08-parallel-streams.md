---
id: m01.s08
title: Parallel streams
lede: Ventral for identity, dorsal for location and action. The split is real, the labels are too tidy, and its independent recurrence in audition is what turns it from an anatomical fact into a computational principle.
estimatedMinutes: 12
---

Beyond V1, visual processing diverges into a **ventral** stream toward inferotemporal cortex, concerned with object identity, and a **dorsal** stream toward parietal cortex, concerned with spatial relationships and visually guided action.

<x-figure src="content/media/ventral-dorsal-streams.jpg"
  caption="The two streams. Ventral toward temporal cortex for identity, dorsal toward parietal for location and action. Audition arrives at the same division from a receptor array with no spatial dimension at all (§2.8) — which is what makes the split a consequence of the task rather than the sensor."
  credit="Andrey Vyshedskiy, Shreyas Mahapatra, Rita Dunn. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Ventral_and_dorsal_stream_in_visual_information_processing.png">
</x-figure>


## Why split at all

The normative argument is about **conflicting invariance requirements**.

Identity demands invariance to position, size, pose and illumination — a representation where the same object at different places is the same. Location demands the opposite: sensitivity to position, and invariance to identity, since where something is should not depend on what it is.

A single representation cannot provide both. Any code that discards position to achieve identity invariance has destroyed exactly what the location computation needs.

Along the ventral stream, receptive fields grow, tolerance to transformations increases, and object manifolds become progressively more linearly separable — the geometry is progressively untangled until a simple readout suffices.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two independent instances, one prediction</div>
Vision's split could be explained by its receptor array: the retina samples space directly, so separating "what" from "where" might just be two ways of reading a spatial map.

<strong>Audition has no spatial dimension in its receptor array at all</strong> (§2.8) — the cochlea samples frequency, and location is computed several synapses later. It splits anyway.

Two systems with entirely different input geometries converging on the same divergence is strong evidence that the split follows from <strong>the structure of the task</strong>, not the sensor.

Olfaction faces the same pair of problems, and §3.1 argued they are <em>more</em> dissimilar than vision's: identity is categorisation in a non-metric chemical space, location is statistical inference over an intermittent time series. If the argument holds, olfaction should have separate machinery — and nobody can confidently point to it. That is §13's most actionable gap.
</x-callout>

## The labels are too tidy

Worth flagging, because the clean version gets repeated more than it deserves. The dorsal stream is not purely spatial — it carries object information relevant to grasping. The ventral stream is not position-invariant at every stage. The two are heavily interconnected. And "what/where" competes with "perception/action" as a description, with evidence on both sides.

The useful residue is the **computational argument**: incompatible invariance requirements force separate representations. That survives the anatomical untidiness, and it is what transfers to other modalities.

<x-mcq>
<script type="application/json">
{
  "id": "m01.s08.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The section treats audition's independent arrival at the same split as evidence that the split follows from the task rather than the sensor. Which observation would most directly weaken that inference?",
  "options": [
    {
      "text": "A modality whose identity and location problems are as dissimilar as vision's, but which demonstrably serves both from a single representation.",
      "correct": true,
      "feedback": "This is the direct refutation, because the argument's load-bearing claim is a impossibility claim: no single code can be position-invariant and position-sensitive at once. One clear existence proof of a shared representation doing both jobs and the necessity evaporates, leaving the two splits as a coincidence in need of a different explanation. Notice that this makes olfaction the crucial case rather than a mere application — if olfaction turns out to have no dorsal stream and no deficit, that is the counterexample."
    },
    {
      "text": "Evidence that the dorsal stream also carries object information relevant to grasping.",
      "correct": false,
      "feedback": "Correct under the assumption that the argument requires anatomically pure streams — and the observation is true, which is why the section concedes it. But the invariance argument predicts that two representations exist with different invariances, not that either is dedicated to a single variable. A grasp-relevant identity signal in the dorsal stream is exactly what a stream computing action parameters should carry."
    },
    {
      "text": "Evidence that the two streams are heavily interconnected at every level.",
      "correct": false,
      "feedback": "Correct under the assumption that separation means informational independence, which would be the right reading if the claim were modular processing. It is not. Two representations with incompatible invariances can exchange information freely; what they cannot do is be the same representation. Interconnection is a problem for a modularity thesis, not for this one."
    },
    {
      "text": "A finding that audition's split emerges several synapses later in the hierarchy than vision's.",
      "correct": false,
      "feedback": "Correct under the assumption that a genuine shared principle should produce matched anatomy — the reasoning one would use to argue for homology. But the argument here is explicitly about convergence from different starting points, and a depth difference is what you would expect: audition has to compute location before it can separate on location, and vision does not. Differing depth strengthens the independence of the two instances rather than weakening it."
    }
  ]
}
</script>
</x-mcq>
