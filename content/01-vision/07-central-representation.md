---
id: m01.s07
title: The central representation — V1
lede: Sparse coding derives V1-like receptive fields from natural images. It is the deepest into a sensory hierarchy any normative theory has reached — and it is worth being precise about how far that is, because it is not very far.
estimatedMinutes: 16
---

Primary visual cortex neurons respond to oriented edges at particular positions, spatial frequencies and phases. Simple cells are approximately linear and phase-sensitive; complex cells are phase-invariant.

<x-figure src="content/media/v1-orientation-map-pinwheels.jpg"
  caption="Orientation preference in V1, mapped by optical imaging. Colour codes preferred orientation; the singularities marked are pinwheels, around which all orientations are represented. This is a map of a COMPUTED variable — orientation is nowhere in the retinal array — and it is the vertebrate precedent for §13's question about whether olfaction could map something it does not directly sample."
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

<x-predict>
<script type="application/json">
{
  "id": "m01.s07.p1",
  "contentRev": 1,
  "prompt": "Sparse coding succeeded where decorrelation failed because whitening is defined only up to a rotation and sparseness picks a rotation out. Suppose someone runs the identical algorithm on a large set of olfactory receptor activation vectors and it converges. Predict what the learned basis functions would look like, and what would have to be true for anyone to be able to tell whether the result was right.",
  "placeholder": "What does a learned basis vector look like when the input has no metric, and what would you compare it against?",
  "reveal": "**What comes out.** Each basis function is a vector of weights over receptor types — an unordered list. Nothing more can be said about its shape, because 'localised', 'oriented' and 'bandpass' are all descriptions that presuppose a metric on the input array. The three properties that made the V1 result striking [@olshausen1996] are not merely absent from the olfactory answer; they are not expressible.\n\n**Why that is a problem for evaluation, not for the calculation.** The algorithm runs perfectly well. What fails is the comparison step — step five of the template. In vision you could hold the learned filter next to a measured receptive field and see the match by eye, in the same coordinates. In olfaction the only available check is quantitative and expensive: record the tuning of real mitral or piriform neurons *across the same receptor basis*, and ask whether the learned vectors predict them. That is a far weaker and far more laborious test, and it is why a positive result would need to be quantitative from the start.\n\n**Two prior obstacles.** The ensemble of natural odour scenes does not exist, so there is nothing to learn from. And receptor activation is not additive across odorants [@shen2013], so the linear generative model the algorithm assumes is wrong at the first stage.\n\n**The useful inversion.** Notice that the metric was doing work you might not have credited it with. It was not needed to *run* efficient coding — it was needed to *recognise the answer*. §1.11 lists this as one of the motifs to audit, and it is the one where the loss is least obvious in advance."
}
</script>
</x-predict>

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

<x-mcq>
<script type="application/json">
{
  "id": "m01.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The deeper box separates three arguments for sparse coding: metabolic, capacity, and separability. Piriform cortex is recurrent, non-laminated, non-topographic, and receives a diffuse bulbar projection. Which argument does that architecture most specifically implicate?",
  "options": [
    {
      "text": "Capacity — dominant recurrence in a structure with no topography is the signature of an associative memory, and the capacity argument is the one that makes claims about pattern overlap and interference during storage.",
      "correct": true,
      "feedback": "Right, and the reason this is the specific answer rather than the general one is that recurrence is the discriminating feature. A feedforward sparse layer gets you metabolic savings and separability without any recurrent connectivity at all; storage and retrieval are what recurrence buys. Note the prediction this makes: piriform's sparseness level should track what a memory needs, not what a readout needs."
    },
    {
      "text": "Separability — sparse high-dimensional codes make categories linearly separable, which is what a downstream readout requires.",
      "correct": false,
      "feedback": "Correct under the assumption that the operative downstream stage is a linear classifier, which is the right framing for expansion recoding — Kenyon cells, cerebellar granule cells, and the connection-degree optimum that comes with them [@litwinkumar2017]. But that argument is about a feedforward random projection into a much larger layer, and piriform's defining feature is recurrence rather than expansion. Correct architecture, wrong one."
    },
    {
      "text": "Metabolic — spikes cost ATP, and cortex can afford only a small fraction of neurons active at once.",
      "correct": false,
      "feedback": "Correct under the assumption that the binding constraint is energy, and the constraint is real. But it applies to every cortical structure equally, so it cannot single out piriform or explain anything about its architecture. An argument that predicts sparseness everywhere makes no prediction about anywhere in particular."
    },
    {
      "text": "All three, since they are the same claim stated at different levels of description.",
      "correct": false,
      "feedback": "Correct under the assumption that the three converge, which is how 'efficiently sparse' is usually deployed. They do not converge: maximum capacity wants very sparse patterns, maximum separability wants moderate sparseness at high dimension, and metabolic cost wants the fewest spikes regardless of dimension. A system optimising one is measurably not optimising the others, which is why the box insists on separating them."
    }
  ]
}
</script>
</x-mcq>
