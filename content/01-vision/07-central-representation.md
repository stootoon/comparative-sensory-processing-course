---
id: m01.s07
title: The central representation — V1
lede: Sparse coding derives V1-like receptive fields from natural images. It is the deepest into a sensory hierarchy any normative theory has reached — and it is worth being precise about how far that is, because it is not very far.
estimatedMinutes: 16
---

Primary visual cortex neurons respond to oriented edges at particular positions, spatial frequencies and phases. Simple cells are approximately linear and phase-sensitive; complex cells are phase-invariant.

<x-figure src="content/media/v1-orientation-map-pinwheels.jpg"
  caption="Orientation preference in V1, mapped by optical imaging. Colour codes preferred orientation; the singularities marked are pinwheels, around which all orientations are represented. This is a map of a COMPUTED variable — orientation is nowhere in the retinal array — and it is the vertebrate precedent for §12's question about whether olfaction could map something it does not directly sample."
  credit="Crair et al. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Pinwheel_orientation.jpg">
</x-figure>


## The sparse coding result

§1.2 established that natural images are strongly non-Gaussian: filtered with an oriented bandpass filter, the response distribution is sharply peaked at zero with heavy tails. Most of an image is smooth, punctuated by sparse high-contrast structure.

Take that seriously and ask for a set of basis functions that represent natural images such that **few coefficients are active for any given image**. The learned basis functions come out localised, oriented and bandpass — closely resembling V1 simple cell receptive fields [@olshausen1996].

This is the deepest into any sensory hierarchy that a normative derivation has reached, and it succeeded where decorrelation alone had failed. Decorrelation is degenerate — whitening is defined only up to an arbitrary rotation, so it cannot pick out any particular set of filters. Sparseness breaks the degeneracy.

<details class="x-deeper">
<summary>Go deeper: what sparseness buys, as three separate claims<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

"Sparse codes are good" bundles at least three distinct arguments with different evidence. They are worth separating, because olfaction inherits all three and they do not stand or fall together.

**Metabolic.** Spikes cost ATP. If a representation can be achieved with fewer active neurons, it is cheaper. Estimates suggest cortex can afford only a small percentage of neurons active at once.

**Capacity.** Sparse patterns are easier to store and retrieve in associative memories — they overlap less, so they interfere less. This is the argument that matters most for piriform (§3.7) and mushroom body, both of which look like associative memories.

**Separability.** Sparse high-dimensional representations make categories linearly separable, so a simple downstream readout suffices. This is the argument behind expansion recoding — cerebellar granule cells, Kenyon cells — and it is where the connection-degree optimum comes from [@litwinkumar2017].

**They can conflict.** Maximum separability wants high dimensionality and moderate sparseness; maximum capacity wants very sparse patterns; metabolic cost wants the fewest spikes. A system optimising one is not optimising the others. When a paper says a code is "efficiently sparse", ask which of the three.

</div>
</details>

## Where the account runs out

Being honest about the limits matters, because the same limits arrive earlier in olfaction and get mistaken for an olfactory problem.

**Sparse coding explains simple cells, not V1.** It says little about complex cells, about surround suppression, about contextual modulation from far outside the classical receptive field, or about how responses change with task and attention.

**V1 is not feedforward.** Most synapses onto a V1 neuron come from other cortical neurons, not from LGN. As in the thalamus, the feedforward drive is a minority input to a structure dominated by recurrence — and sparse coding as usually formulated is a feedforward story.

**Beyond V1, essentially nothing.** No comparable derivation of V2, V4 or IT tuning from natural image statistics. The programme that produced retinal receptive fields and V1 filters stops here.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Set expectations for piriform now</div>
Vision's normative theory is strong at the retina, partial at V1, and absent beyond. Audition's is strong at the cochlea and absent at A1 (§2.7). <strong>Both degrade at the same rate with depth.</strong>

Olfaction reaches its central representation in two synapses. So the absence of a good normative account of piriform is not evidence that olfaction is peculiar — it is the same wall, reached sooner because there is less pathway before it.

What piriform does have going for it is that it looks like a structure the theory of §1.7's capacity argument was built for: recurrent, non-topographic, sparse, associative. The tools that failed on V4 may be better suited to piriform than to anything in vision.
</x-callout>
