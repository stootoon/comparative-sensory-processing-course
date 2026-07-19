---
id: m03.s04
title: The receptor array
lede: Unordered, high-dimensional, broadly tuned, one receptor per neuron. Read this beside §1.4 — it is the inverse of the visual array in every property that matters.
estimatedMinutes: 24
---

Read §1.4 first if you have not. This section is written to be compared with it line by line.

## The basic architecture

Mammals express a large family of odorant receptor genes — roughly 400 functional types in humans, around 1,100 in mice, about 50 in *Drosophila* [@buckaxel1991]. Each receptor neuron expresses, with rare exceptions, exactly **one** receptor type.

Neurons expressing the same receptor are scattered across the epithelium but converge onto one or a few **glomeruli** in the olfactory bulb, with convergence ratios in the thousands. So the glomerular array is a map of *receptor identity*, and each glomerulus reports the total activation of one receptor type.

<x-figure src="content/media/orn-glomeruli.jpg"
  caption="The wiring that sentence describes. Each colour is one receptor type. Note that same-coloured neurons are NOT neighbours in the epithelium — they are scattered, and their axons cross over one another to reach the glomerulus of matching colour. The sorting is chemical, not spatial. A retina wired this way, with axons ignoring position and sorting by some other property, would be unable to see."
  credit="Wikimedia Commons user “Noodle brain”, 2017. CC BY-SA 4.0, reproduced unmodified apart from downscaling."
  source="https://commons.wikimedia.org/wiki/File:Olfactory_Sensory_Neurons_innervating_Olfactory_Glomeruli.jpg">
</x-figure>


The code is combinatorial: one receptor responds to many odorants, one odorant activates many receptors, and identity is carried by the pattern across the array [@malnic1999]. Slight changes in a molecule, or in its concentration, change the pattern.

<x-figure src="content/media/oa-glomerular-odour-map.jpg"
  caption="Odour-evoked glomerular activity, imaged across the dorsal bulb. Each odorant activates a distinctive subset of glomeruli — this is the combinatorial code, measured. Note that the active glomeruli are scattered rather than clustered: there is no region of the map that is 'the aldehyde area'."
  credit="Baker KL, Vasan G, Gumaste A, Pieribone VA, Verhagen JV (2019). CC BY 4.0."
  source="https://doi.org/10.1371/journal.pbio.3000409">
</x-figure>


<x-figure src="content/03-olfaction/figures/combinatorial-code.js"
  caption="The combinatorial code, made concrete. No single glomerulus is the odorant and none is private to it — identity is the whole pattern. Drag the receptor count down to three and watch two odorants become confusable: that is the quantitative reason olfaction keeps hundreds of channels where vision manages with three.">
</x-figure>


So far this sounds like trichromacy with more channels. It is not, and the differences are the point.

## The array is unordered

**There is no natural ordering of receptor identity.** Receptor 42 and receptor 43 have no more in common than receptor 42 and receptor 907. The numbering is arbitrary; permuting it changes nothing.

### A test for whether an array is really ordered

That claim is easy to nod at, so here is an operational version. Take the receptor array and shuffle the labels — physically rewire which receptor sends its output where. Does the system still work?

- **Vision: catastrophically not.** Permute retinal positions and every downstream computation breaks. Edge detection, motion, stereo, and object recognition all assume that adjacent inputs come from adjacent points in the world. The map *is* the computation.
- **Audition: not really.** Permute cochlear place and you destroy the frequency axis. Harmonic templates, formant structure, and pitch all depend on knowing which channel is which *relative to* the others.
- **Olfaction: nothing breaks.** Permute which glomerulus receives which receptor and, provided the downstream connections are learned rather than hard-wired by position, the system is unaffected. There is no ordering to violate, because no downstream computation depends on one.

That thought experiment is a good working definition of what "ordered" means: **an array is ordered when permuting its channels destroys information that downstream circuits rely on.** By that test, olfaction's array is genuinely unordered — not merely unmapped or poorly mapped.

Physical position in the bulb does not fix this. Glomeruli adjacent on the bulb surface do not respond to chemically or perceptually similar odorants in any strong, reliable way. There are coarse regional biases, and the extent of "chemotopy" is genuinely contested — but nothing approaching retinotopy's precise, metric, invertible mapping between sensor position and stimulus dimension.

<details class="x-deeper">
<summary>Go deeper: why "chemotopy" is contested, and what would settle it<span class="x-deeper-tag">evidence</span></summary>
<div class="x-deeper-body">

The literature does report spatial structure in the bulb: broad regional biases, with some chemical classes tending to activate dorsal versus ventral zones, and clustering of glomeruli responding to related molecules. So is the array ordered after all?

The disagreement is mostly about what would count as a map. Three standards, in increasing strength:

1. **Any statistical clustering** — nearby glomeruli respond more similarly than chance. Reasonably supported.
2. **A smooth, monotonic gradient** in some chemical parameter, analogous to tonotopy. Weakly supported at best; proposed parameters (carbon chain length, functional group, water solubility) each account for a small fraction of variance and disagree with each other.
3. **A metric, invertible map** — the position of a glomerulus tells you its tuning, and the distance between two glomeruli tells you how similar their tunings are. **No serious evidence.** This is what retinotopy and tonotopy provide, and it is what the computational motifs of §1.4 actually require.

The honest position: standard 1 is probably true and standard 3 is probably false, and much of the disagreement in the literature comes from authors arguing past each other about which one is at issue.

**What would settle it:** the wiring test above, done properly. Measure whether the inhibitory or associative connectivity a glomerulus receives is predicted by its *physical position* versus by its *response similarity* to other glomeruli. If position predicts connectivity, there is a functional map. If only response similarity does, the spatial arrangement is developmental happenstance and the real organisation is in feature space.

</div>
</details>

Now recall the list from §1.4 of what ordering buys, and cross each item off:

| What vision gets from ordering | Olfaction |
|---|---|
| Local lateral inhibition wired by proximity | Unavailable — proximity means nothing |
| Topographic maps inherited free from the sensor | Unavailable — nothing to be topographic about |
| Interpolation and smoothing priors | Undefined — no "between" two receptors |
| Translation invariance, convolution | Undefined — no translation operation exists |
| Receptive field as a coherent concept | Requires redefinition; see below |

<x-callout class="x-callout is-key">
<div class="x-callout-title">This is the course's central claim, stated plainly</div>
Almost every computational motif that presupposes a metric — surrounds, maps, interpolation, smoothing priors, translation invariance, convolution, the receptive field itself — is either <strong>unavailable</strong> in olfaction or must be <strong>re-derived</strong> in some non-spatial form.

That is not a deficiency of olfaction. It is a different design problem, and much of what looks strange about olfactory circuits looks strange only because we arrive with expectations calibrated on vision.
</x-callout>

## Is disorder a bug or a feature?

The natural reaction is to treat the lack of order as a limitation — something evolution failed to arrange. There is a serious argument that it is the opposite.

If receptor binding is diffuse and disordered, a vast but sparsely-structured odour space is compressed into a small receptor space in a way that **preserves similarity** in a precise sense. Introducing order or structure into which receptor binds what *degrades* that similarity preservation. The same holds downstream: expansive disordered projections to the central brain produce a high-dimensional representation containing redundant subsets from which downstream neurons can learn flexible associations, and introducing order there degrades recall in the presence of noise [@krishnamurthy2022].

On this account the disorder is load-bearing. Olfaction's fundamental use of disorder is what distinguishes its processing from the other senses, rather than a failure to achieve what the other senses have.

The random-projection motif is well documented on the invertebrate side: each Kenyon cell in the *Drosophila* mushroom body integrates input from an apparently random combination of glomeruli, with no discernible organisation with respect to odour tuning, anatomy, or developmental origin [@caron2013]. And the number of inputs per Kenyon cell is not arbitrary — representation dimension is maximised at approximately the degree actually observed [@litwinkumar2017].

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The Invertebrate Mirror</div>
The invertebrate work is not an aside here — it is where the normative theory is most complete, and it should be used to interpret the vertebrate data rather than the reverse.

<strong>Random connectivity, optimally sparse.</strong> Kenyon cells sample glomeruli randomly [@caron2013], with a connection degree near the theoretical optimum for maximising representation dimension [@litwinkumar2017]. The optimum is a genuine peak, not a plateau.

<strong>Divisive normalisation.</strong> Antennal-lobe lateral inhibition scales with total ORN population activity, and a model with two variables — feedforward drive and total activity — predicts projection-neuron responses well [@olsen2010]. Weak inputs are amplified and strong ones are not, which broadens tuning and equalises distances between odour representations [@bhandawat2007].

The fly therefore gives a worked example of the full pipeline: compress for SNR, normalise globally, then expand randomly for separability. Whether the mouse bulb does something more structured than global normalisation is exactly the open question of §3.5.
</x-callout>

## The comparison, completed

<x-matrix>
<script type="application/json">
{
  "id": "m03.s04.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Complete the datasheet you started in §1.4. The vision column is filled for reference; fill in olfaction.",
  "rows": [
    "Array ordering",
    "Metric structure",
    "Number of channels",
    "Tuning breadth",
    "Lateral inhibition is defined over…",
    "Dimensionality reduction at the receptor?"
  ],
  "columns": ["Vision (reference)", "Olfaction", "Your notes"],
  "cells": {
    "Array ordering|Olfaction": {
      "answer": "unordered",
      "accept": ["unordered", "not ordered", "no ordering", "disordered", "arbitrary", "random"]
    },
    "Metric structure|Olfaction": {
      "answer": "non-metric (contested; possibly hyperbolic)",
      "accept": ["non-metric", "no metric", "none", "not metric", "hyperbolic", "contested", "unknown"]
    },
    "Number of channels|Olfaction": {
      "answer": "~400 human, ~1100 mouse, ~50 fly",
      "accept": ["400", "1100", "hundreds", "~400", "~1000", "50", "many"]
    },
    "Tuning breadth|Olfaction": {
      "answer": "broad",
      "accept": ["broad", "very broad", "wide", "combinatorial"]
    },
    "Lateral inhibition is defined over…|Olfaction": {
      "answer": "feature space, not physical space — by learned connectivity or global normalisation",
      "accept": ["feature space", "chemical space", "odour space", "not space", "global", "normalisation", "learned connectivity", "unclear"]
    },
    "Dimensionality reduction at the receptor?|Olfaction": {
      "answer": "no — dimensionality is retained",
      "accept": ["no", "none", "retained", "not reduced", "kept high", "minimal"]
    }
  },
  "modelAnswerNote": "Notice that 'broad tuning' is the ONLY row where the two modalities agree — and the agreement is misleading. Vision pairs broad tuning with 3 channels and gets drastic compression with metamerism; olfaction pairs broad tuning with ~1,000 channels and gets a high-dimensional combinatorial code with no compression at all. Tuning breadth in isolation predicts almost nothing. It is breadth TOGETHER WITH channel count and stimulus dimensionality that determines the code, which is exactly what the widget in §1.4 makes visible."
}
</script>
</x-matrix>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision compresses an infinite-dimensional spectral space to three dimensions and accepts metamerism. Olfaction retains hundreds of dimensions. What best explains the difference?",
  "options": [
    {
      "text": "Natural reflectance spectra are smooth and near-low-dimensional, so vision's discarded dimensions are nearly empty; chemical space has no comparable low-dimensional structure.",
      "correct": true,
      "feedback": "Correct. The key move is distinguishing the physical stimulus space from the natural ensemble within it. Vision's physical space is infinite-dimensional but its natural ensemble is nearly three-dimensional, so compression is almost free. Chemical space offers no such saving structure — molecules do not lie near a smooth low-dimensional manifold in any known coordinate system."
    },
    {
      "text": "Molecules carry more behaviourally relevant information than wavelengths, so more channels are needed.",
      "feedback": "This treats channel count as tracking the amount of information, which is intuitive but not quite the operative principle. The relevant quantity is the *intrinsic dimensionality of the natural ensemble*, not the total information available. A high-information but low-dimensional signal could be captured by few channels."
    },
    {
      "text": "Opsins cannot be diversified as easily as GPCRs, so vision is constrained by what evolution can build.",
      "feedback": "There is a real evolutionary point here — receptor repertoires do expand and contract with ecological pressure. But it cannot be the main explanation, because it predicts that vision would add channels whenever it could, and some birds and insects do have four or five spectral channels without approaching olfaction's hundreds. The difference is one of task structure, not of what is buildable."
    },
    {
      "text": "Olfaction cannot afford metamers because confusing two odours could be fatal.",
      "feedback": "Olfaction does in fact have metamers — distinct molecular mixtures that smell identical, sometimes called olfactory white. So the premise is false. And confusing two *stimuli* is fatal in vision too, if one is a predator. The asymmetry is about the structure of the natural ensemble, not about the stakes."
    }
  ]
}
</script>
</x-mcq>

## What is an olfactory receptive field?

A last consequence, and it reframes more of the literature than it first appears to.

In vision, a receptive field is the region of stimulus space to which a neuron responds — coherent because stimulus space has a metric and a topology. In olfaction, what is the analogue?

Three candidates:

1. **A tuning curve over chemical descriptor space.** The usual implicit assumption, and it inherits every problem with defining that space.
2. **A temporal filter over concentration.** What kind of concentration dynamics drive this neuron, regardless of which molecule.
3. **A "receptive field" in plume-statistic space** — tuned to whiff duration, fluctuation frequency, intermittency.

The third is the least explored and, given §3.2, arguably the most promising. If the informative structure in natural odour signals is largely temporal, then the bulb's real receptive field may be a spatiotemporal filter over concentration dynamics rather than a chemical tuning curve at all.

That possibility reframes the "silent neuron" literature: cells that appear unresponsive to a panel of monomolecular odorants at steady concentration may be tuned to temporal features that such a panel never presents.
