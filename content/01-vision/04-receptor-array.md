---
id: m01.s04
title: The receptor array
lede: Ordered, metric, two-dimensional, non-uniformly sampled — and, in the spectral domain, radically dimension-reducing. Every one of those properties fails in olfaction.
estimatedMinutes: 20
---

This section and its counterpart in §3.4 are the two pages this course exists to put side by side. Read them together.

## The spatial array

Roughly $10^8$ photoreceptors tile a two-dimensional surface. Four properties of that arrangement do essentially all the computational work.

**It is ordered.** Receptor position on the retina corresponds to direction in space. Two receptors that are neighbours on the sheet look at neighbouring parts of the world.

**It is metric.** Not merely ordered but *quantitatively* so: the distance between two receptors on the sheet is proportional to the angular distance between the points they sample. "How far apart" is a well-defined question with a numerical answer.

**It is two-dimensional**, with the third dimension recovered by inference from stereo, parallax, and pictorial cues rather than sampled directly.

**It is non-uniformly sampled.** Cone density in the fovea exceeds peripheral density by more than two orders of magnitude. This is a budget allocation: a fixed number of downstream fibres can be spent uniformly for mediocre resolution everywhere, or concentrated for excellent resolution somewhere, with eye movements bringing the somewhere to wherever it is needed.

The consequences of ordering and metric structure are enormous, and they are so pervasive in visual neuroscience that it takes effort to notice them as assumptions at all:

- **Lateral inhibition is local.** A "surround" is the physical neighbourhood on the sheet. Wiring it requires only short local connections, no learning and no specificity beyond "connect to your neighbours".
- **Maps are possible and cheap.** Retinotopy is inherited from the sensor geometry, not computed.
- **Interpolation and smoothing priors are meaningful.** "The value between these two samples is probably intermediate" is a sensible statement.
- **Translation invariance is definable.** Which is what makes convolution the right operation, and what makes a receptive field a coherent concept in the first place.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The load-bearing assumption</div>
Almost every computational motif you learn from vision presupposes a metric on the receptor array. Surrounds, maps, interpolation, smoothing priors, translation invariance, convolution, the very notion of a receptive field — all of them need "nearby" to mean something.

When we reach §3.4, that assumption is gone. Not weakened: absent. The interesting question is which motifs survive in some re-derived form and which simply do not apply.
</x-callout>

## The spectral array: three channels, and what they throw away

Now the same array considered in the wavelength domain, where the story inverts.

The physical stimulus is a spectral power distribution — a function of wavelength, and therefore in principle infinite-dimensional. Human vision samples it with **three** cone types, whose sensitivities are broad and heavily overlapping. L and M peak roughly 30 nm apart, so their responses to natural surfaces are correlated at around $r > 0.9$.

This is drastic dimensionality reduction, and it is lossy in a specific and interesting way. Two physically different spectra that produce identical $(L, M, S)$ triplets are **metamers**: indistinguishable, permanently, by any downstream process. Colour vision is not measuring the spectrum. It is measuring a three-dimensional projection of it and discarding the rest.

<x-figure src="content/01-vision/figures/cone-spectra.js"
  caption="The three cone pigments, and what their overlap costs. L and M peak only about 30 nm apart, so their responses to natural surfaces are correlated at r ≈ 0.95 — nearly redundant channels. The second view plots those responses against each other and shows the cloud collapsing onto a line, which is exactly the structure the opponent transform removes.">
</x-figure>


Why is that acceptable? Because three dimensions capture most of the variance in *natural* reflectance spectra, which are smooth and well described by a handful of basis functions. The system is optimised for the spectra it actually encounters, and metamerism is the price — paid, ordinarily, without cost.

<x-matrix>
<script type="application/json">
{
  "id": "m01.s04.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Start the comparative datasheet. Fill in what you know for vision now; the olfaction column is filled in §3.4 and you can return here. Ungraded cells are for your own notes.",
  "rows": [
    "Array ordering",
    "Metric structure",
    "Number of channels (spectral / chemical)",
    "Tuning breadth",
    "Lateral inhibition is defined over…",
    "Dimensionality reduction at the receptor?"
  ],
  "columns": ["Vision", "Olfaction (fill in later)", "Your notes"],
  "cells": {
    "Array ordering|Vision": {
      "answer": "ordered",
      "accept": ["ordered", "topographic", "retinotopic", "spatially ordered"]
    },
    "Metric structure|Vision": {
      "answer": "metric",
      "accept": ["metric", "euclidean", "yes metric", "fully metric"]
    },
    "Number of channels (spectral / chemical)|Vision": {
      "answer": "3",
      "accept": ["3", "three", "3 cone types", "four with rods"]
    },
    "Tuning breadth|Vision": {
      "answer": "very broad",
      "accept": ["broad", "very broad", "wide", "heavily overlapping"]
    },
    "Lateral inhibition is defined over…|Vision": {
      "answer": "physical space on the receptor sheet",
      "accept": ["space", "physical space", "spatial neighbourhood", "retinal position", "the sheet"]
    },
    "Dimensionality reduction at the receptor?|Vision": {
      "answer": "yes, drastic",
      "accept": ["yes", "yes drastic", "radical", "infinite to 3", "severe"]
    }
  },
  "modelAnswerNote": "The row worth staring at is tuning breadth. Vision uses very broad, heavily overlapping spectral tuning with only three channels; olfaction uses broad tuning with hundreds to a thousand. Both are 'broad', but the combination with channel count produces completely different codes — and the widget below shows why that combination, not breadth alone, is what matters."
}
</script>
</x-matrix>

## Why broad tuning, and why only three?

Here is where a normative account earns its keep, because the naive intuition is wrong.

Narrow tuning gives better resolution *per channel*. So why are cones broad?

For a fixed number of channels and fixed noise, the optimal tuning width depends on the dimensionality of the stimulus space. In one dimension, narrow tuning wins: channels tile the space and each reports precisely where in its small interval the stimulus fell. As dimensionality rises, narrow tuning fails catastrophically — the number of channels needed to tile a $D$-dimensional space with narrow tuning grows exponentially in $D$, and with a fixed budget most stimuli would fall in gaps and drive nothing at all.

Broad tuning ensures every stimulus drives many channels, so identity is carried combinatorially by the *pattern* across channels rather than by which single channel fired. With three broad overlapping cones, every visible wavelength produces a distinctive ratio.

The general treatment relates optimal tuning density to the prior over stimuli: more channels with narrower tuning should be allocated where the prior mass is [@ganguli2014].

<x-figure src="content/01-vision/figures/tuning-breadth.js"
  caption="Optimal tuning width against stimulus dimensionality. Drag the dimensionality slider and watch the optimum invert: narrow tuning wins in 1-D, broad tuning wins in high dimensions. Markers show roughly where real receptor arrays sit. The wrong-answer region is real — push channel count down and dimensionality up and decoding fails however you tune.">
</x-figure>

<x-predict>
<script type="application/json">
{
  "id": "m01.s04.p1",
  "contentRev": 1,
  "prompt": "Vision uses 3 broadly-tuned spectral channels for a stimulus space that is physically infinite-dimensional, and it accepts metamerism as the price. Olfaction uses roughly 400 (human) or 1,100 (mouse) broadly-tuned receptor types. Predict, from the task rather than the chemistry, why olfaction refuses the dimensionality reduction that vision embraces.",
  "placeholder": "What differs in the task, not in the molecules?",
  "reveal": "Vision can collapse the spectrum to three dimensions because natural reflectance spectra are smooth and low-dimensional: three numbers capture most of the variance in the spectra that actually occur, so the discarded dimensions are mostly empty. The physical stimulus is infinite-dimensional but the *natural ensemble* is not.\n\nChemical space has no such saving structure. Molecules do not lie near a smooth low-dimensional manifold in any known coordinate system, and two molecules can be arbitrarily similar structurally while being behaviourally unrelated — a nutrient and a toxin can differ by one functional group. There is no projection to three dimensions that preserves what matters, because what matters is not a smooth function of any simple descriptor.\n\nSo olfaction pays for hundreds of receptor types, and this looks like the right decision rather than an evolutionary accident. There is a further argument that the *disorder* in receptor binding is itself functional: introducing structure into which receptor binds what degrades the code's ability to preserve similarity [@krishnamurthy2022].\n\nThe deeper consequence: because olfaction retains high dimensionality, it cannot use any of the machinery that low dimensionality makes cheap. No metric, no map worth building, no local surround."
}
</script>
</x-predict>
