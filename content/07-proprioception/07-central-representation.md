---
id: m07.s07
title: The central representation — mostly cerebellar
lede: There is no primary proprioceptive cortex worth the name, and that is exactly what you would predict from who the consumer is. The central representation is the cerebellum, and it is a forward model rather than a map.
estimatedMinutes: 12
---

Ask where proprioception's V1 is and the honest answer is that there isn't one. Areas 3a and 2 exist and are genuinely proprioceptive, but they are thin, and lesioning them does not abolish the functions that matter most.

**The dominant central representation is cerebellar.**

## Why §7 of the skeleton is named as it is

This is the module that justifies the course's naming decision. If §7 were "primary cortex", this section would be two paragraphs about area 3a and would miss the subject entirely.

Framed as "the first large, recurrent, plastic central structure", the answer is obvious: the cerebellum, with its enormous granule cell population, its expansion recoding, and its plasticity.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two modules, one skeleton, opposite answers</div>
<strong>Proprioception §7:</strong> cerebellum. Not laminated cortex, not topographic in the usual sense, organised around a forward model.<br>
<strong>Olfaction §7:</strong> piriform. Three-layer paleocortex, non-topographic, organised as associative memory.<br>
<strong>Vision §7:</strong> V1. Six-layer neocortex, topographic, organised around oriented filters.

Three completely different structures occupying the same functional slot. A skeleton that had asked for "primary cortex" would have forced two of them into a shape they do not have.

<strong>And the comparison is informative rather than merely tidy.</strong> Piriform and cerebellum have more in common with each other than either has with V1: both take a high-dimensional input, expand it, sparsify it, and use it for learned associations. Both are described by the same theoretical tools — expansion recoding, sparse coding, associative memory capacity, optimal connection degree [@litwinkumar2017].

<strong>Olfaction's central representation may be better compared with the cerebellum than with visual cortex</strong> — and the mushroom body, which is explicitly cerebellum-like, is the invertebrate version of exactly that comparison.
</x-callout>

## The forward model

What the cerebellum computes is a **forward model**: given the current state and a motor command, predict the next state. Direct psychophysical evidence supports this [@wolpert1995] — errors in estimating limb position after movement in the dark propagate exactly as optimal state estimation predicts.

<x-figure src="content/07-proprioception/figures/forward-model.js"
  caption="The central representation, as a predictor rather than a map. With the forward model on, the estimate tracks true position despite an 80 ms sensory delay; switch it off and the estimate lags and jitters. This is why the answer to 'where is proprioception's central representation' is the cerebellum rather than area 3a.">
</x-figure>


Proprioception's central representation is therefore not a representation of the body in the way V1 is a representation of the image. It is a **predictor**, and the sensory signal's role is to correct it.

<x-matrix>
<script type="application/json">
{
  "id": "m07.s07.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Fill in the three central representations occupying the same slot in the skeleton. Do it from memory before revealing — the point is whether you can see that two of these columns resemble each other more than either resembles the third.",
  "rows": [
    "Structure",
    "Topographic?",
    "Organising principle",
    "Expansion recoding?"
  ],
  "columns": ["Vision", "Proprioception", "Olfaction"],
  "cells": {
    "Structure|Vision": { "answer": "V1, six-layer neocortex", "accept": ["v1","primary visual cortex","neocortex","v1 neocortex","striate cortex"] },
    "Structure|Proprioception": { "answer": "cerebellum", "accept": ["cerebellum","cerebellar cortex","cerebellum (not area 3a)"] },
    "Structure|Olfaction": { "answer": "piriform, three-layer paleocortex", "accept": ["piriform","piriform cortex","paleocortex","olfactory cortex"] },
    "Topographic?|Vision": { "answer": "yes — retinotopic", "accept": ["yes","retinotopic","yes, retinotopy"] },
    "Topographic?|Proprioception": { "answer": "not in the usual sense", "accept": ["no","not really","no, not in the usual sense","somatotopic only coarsely","partly"] },
    "Topographic?|Olfaction": { "answer": "no", "accept": ["no","none","non-topographic","no, distributed"] },
    "Organising principle|Vision": { "answer": "oriented filters over a map", "accept": ["oriented filters","orientation tuning","filters","edge detection","sparse coding of images"] },
    "Organising principle|Proprioception": { "answer": "a forward model — predict the next state", "accept": ["forward model","prediction","state estimation","predictor","internal model"] },
    "Organising principle|Olfaction": { "answer": "associative memory", "accept": ["associative memory","association","learned associations","autoassociation","memory"] },
    "Expansion recoding?|Vision": { "answer": "no — V1 is not primarily an expansion", "accept": ["no","not primarily","limited","no, not the organising feature"] },
    "Expansion recoding?|Proprioception": { "answer": "yes — granule cell layer", "accept": ["yes","granule cells","yes, granule cell expansion","massive expansion"] },
    "Expansion recoding?|Olfaction": { "answer": "yes — bulb to piriform, and the mushroom body", "accept": ["yes","yes, into piriform","mushroom body","expansion"] }
  },
  "modelAnswerNote": "The bottom two rows are where the comparison earns its keep.\n\n**Piriform and cerebellum have more in common with each other than either has with V1.** Both take a high-dimensional input, expand it into a much larger population, sparsify it, and use the result for learned associations. Both are described by the same theoretical apparatus — expansion recoding, sparse coding, associative memory capacity, optimal connection degree [@litwinkumar2017]. The mushroom body, explicitly cerebellum-like in architecture, is the invertebrate version of exactly this convergence.\n\nV1 is the odd column. It is a filtering stage over a metric map, and almost nothing about it transfers to a structure lacking a map.\n\n**The methodological point is about the skeleton, not the biology.** Had §7 of each module asked 'what is the primary cortex', two of these three columns would have been forced into a shape they do not have — proprioception would have become two paragraphs about area 3a and missed the cerebellum entirely. Asking instead for 'the first large, recurrent, plastic central structure' lets each modality answer in its own terms, and only then does the piriform–cerebellum resemblance become visible.\n\n**The consequence for olfaction:** its central representation may be more usefully compared with the cerebellum than with visual cortex, which is not where the field's intuitions or its analytical tools currently point."
}
</script>
</x-matrix>
