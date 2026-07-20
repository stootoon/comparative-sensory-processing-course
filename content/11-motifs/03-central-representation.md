---
id: m11.s03
title: The central representation
lede: Expansion, sparseness, recurrence and topography are four separate motifs that the vision-trained reader tends to receive as one package. Olfaction has three of them and not the fourth, which is how we know they are separable.
estimatedMinutes: 18
---

## The motif set, and Lesson 3

This subsection discharges the course's central claim: **almost every familiar motif presupposes a metric on the receptor array.** Receptive fields, centre–surround, topographic maps, interpolation, smoothing priors, translation invariance, convolution — every one of them needs "nearby" to mean something. Vision, audition and touch have ordered arrays where it does. Olfaction does not [@buckaxel1991; @malnic1999], and the consequence is that a large part of the imported toolkit either fails to apply or must be rebuilt in a non-spatial form.

The productive move, stated in the vision hook and worth repeating because it is the difference between a complaint and a research programme: **do not note the absence — ask, for each metric-dependent motif, what it was buying, and what could buy the same thing without a metric.**

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="Set the vertical axis to array ordering and the horizontal to stimulus dimensionality, and the argument of this whole subsection is visible as a scatter. Gustation is the load-bearing point: unordered like olfaction, low-dimensional unlike it, and it has none of olfaction's difficulties. Two properties that are confounded in the vision/olfaction comparison come apart here, and the difficulty tracks dimensionality rather than disorder.">
</x-figure>

## Expansion recoding

The motif: project a moderate-dimensional input into a much larger population with sparse random-ish connectivity. Fly antennal lobe (~50 glomeruli) to Kenyon cells (~2000). Mouse bulb (~1000 glomeruli) to piriform (~10<sup>6</sup> neurons). Cerebellar mossy fibres to granule cells, at a ratio of similar magnitude.

The normative rationale is a dimension-expansion argument: random projection into a higher-dimensional space with a threshold nonlinearity makes arbitrary input categories linearly separable, so a simple downstream readout — one layer of plastic synapses — suffices for arbitrary association. The quantitative version predicts an optimum in the number of inputs per expansion neuron: too few and the projection loses information, too many and responses become correlated across neurons, collapsing effective dimension. The predicted optimum for the fly is on the order of a handful of claws per Kenyon cell, and the measured value sits close to it [@litwinkumar2017], with the connectivity itself statistically indistinguishable from random draws over glomeruli [@caron2013].

This is the second of olfaction's two strong normative results, and it is worth being clear about why it scores well: it makes a quantitative prediction from a stated objective, with few free parameters, and the anatomy was measured independently.

### What this predicts for olfaction

**Prediction, tested: connectivity degree should sit near the dimensionality-maximising optimum.** Confirmed in the fly [@litwinkumar2017; @caron2013].

**Prediction, untested: the same optimum should hold in mouse piriform, with a different value.** The optimal degree depends on the input dimension and on the noise level, both of which differ substantially between fly and mouse. A theory that fits the fly and makes no distinct numerical prediction for mouse has been fitted, not tested. The mouse calculation is doable now — the input dimension is the glomerular count, which is known — and the anatomical measurement is hard but not out of reach. This is the single most valuable replication available to the field's strongest olfactory result.

**A caveat that deserves airing.** Random expansion is not the only account of piriform's connectivity. An alternative is that sparse, apparently-random connectivity implements approximate MAP inference in a generative model of mixtures, in which case the connectivity statistics are not random but constrained by the inference problem, and sister mitral cells carry structured rather than redundant copies [@tootoonian2022]. The two accounts overlap in their predictions about degree and diverge in their predictions about *correlation structure* between the connections of related cells. That is a discriminating measurement, and it is the honest reason not to present dimension expansion as settled.

## Sparseness

Kenyon cells respond to a few percent of odours. Piriform neurons respond sparsely and with high stimulus selectivity. V1 simple cell receptive fields are recovered by imposing sparseness on a generative model of images [@olshausen1996]. Granule cells in the bulb have been argued to implement a sparse-representation objective on mitral cell activity [@koulakov2011].

But sparseness has at least three distinct rationales and they are routinely conflated:

1. **Metabolic** — spikes are expensive, so encode with few of them.
2. **Statistical** — natural inputs are generated by a small number of active causes drawn from a large dictionary, so a sparse code is the *correct* inference, not merely a cheap one.
3. **Associative** — sparse patterns have low overlap, so a downstream associative memory has higher capacity and less interference.

These make different predictions. Metabolic sparseness should relax when energy is abundant and should scale with the metabolic cost of spiking. Statistical sparseness should track the actual sparsity of causes in the world — encountering genuinely dense mixtures should produce dense responses. Associative sparseness should be *fixed* by the capacity requirement regardless of the input, and should be actively enforced by normalisation.

### What this predicts for olfaction

**Prediction — the three rationales are separable by presenting mixtures of increasing component count.** Statistical sparseness predicts response density should grow with the number of components, because the number of active causes has genuinely grown. Associative sparseness predicts density should be actively held near-constant by inhibition, because the downstream memory requires it.

The fly gives a partial answer: Kenyon cell sparseness is enforced by feedback inhibition that scales with total drive, which is the associative prediction. Whether mammalian piriform does the same across mixture complexity is less well resolved, and the mixture-complexity sweep, run to enough components to stress the system, is the discriminating experiment. Insect work on mixtures shows that representations of components are not simply superposed [@shen2013], which already argues against the naive statistical account.

**The concentration-invariance connection.** Whichever rationale holds, a sparse code has to stay sparse as concentration rises, or the representation drifts with intensity. In mouse, recurrent circuitry in piriform is what accomplishes this [@bolding2018] — which places a *homeostatic* requirement on the central representation that is not implied by any of the three rationales taken alone.

## Recurrence

Piriform is heavily recurrent — associational fibres among pyramidal cells are the dominant input, outnumbering the afferent bulbar input [@haberly2001]. So is CA3. So, in a different form, is the recurrent circuitry that produces concentration invariance [@bolding2018].

The functional readings on offer: pattern completion from partial input; attractor dynamics providing categorical stability; normalisation and gain control; and the implementation of an inference loop where feedback carries the prediction. These are not mutually exclusive and the evidence does not cleanly separate them.

<details class="x-deeper">
<summary>Why a metric changes what recurrence can be for</summary>

In a metric array, recurrent connectivity is typically a function of distance: $W_{ij} = f(\|x_i - x_j\|)$. That single restriction buys a great deal. It makes $W$ a convolution, so the dynamics diagonalise in Fourier space; it produces ring or bump attractors with a continuum of stable states parameterised by position; and it gives smoothing and interpolation for free, because a locally-connected recurrent network implements a smoothness prior.

Every one of those is unavailable in piriform. With no metric, $W$ is a general matrix. The attractor structure is discrete rather than continuous — you get point attractors, not a manifold — and there is no interpolation, because there is nothing between two odours in the way there is something between two orientations.

The consequence for theory is specific: models of continuous-attractor dynamics, line attractors and drift, which are the workhorses of head-direction and oculomotor integrator modelling, **do not port**. What ports instead is the Hopfield-style discrete associative memory literature, which is a much older and in some ways better-developed body of theory that olfaction has under-used.

There is an important escape hatch, and it is the reason the hyperbolic-geometry proposal matters. A metric may exist on odour space even though none exists on the receptor array — if the statistics of natural odour co-occurrence induce one. Analysis of odour descriptor and co-occurrence data suggests a hyperbolic rather than Euclidean geometry [@zhou2018]. If that holds, continuous-manifold theory becomes applicable again, but in a space with negative curvature, where the volume available at a given radius grows exponentially and the intuitions calibrated on flat space fail in a different way. This is a live proposal rather than an established fact, and the honest position is that the evidence is suggestive and the geometry is contested.
</details>

## Maps, and their absence

Vision has retinotopy. Audition has tonotopy. Touch has somatotopy. Vestibular has an orthogonal geometric arrangement. Olfaction has a glomerular array whose position appears to carry no consistent chemical logic.

The vision-trained inference is that olfaction lacks central topography because its receptor array is unordered. **This inference is wrong, and echolocation is what refutes it.** Bats build a precise topographic map of echo delay — a variable the cochlea never measures. Delay is computed centrally and then mapped. So an unordered or non-delivering receptor array does not preclude central topography; it only precludes topography *inherited from the periphery*.

### What this predicts for olfaction

**Prediction — there should be central maps of derived olfactory variables, and the candidates are nameable.** Concentration and source distance are the leading ones, both downstream of the bulb, both continuous scalars, both behaviourally central. A topographic map of estimated source distance in a region receiving both olfactory and navigational input is the specific thing to look for.

**Status: not found — and the crucial question is whether it is absent or unlooked-for.** Here the two diagnoses are unusually easy to separate, and the answer favours "unlooked-for". A map is detected by systematically varying the mapped variable while recording across space. Almost all olfactory physiology varies *odour identity* while recording across space. If the mapped variable is source distance, the standard protocol holds it constant at zero and would never reveal the map, however clear it is. **The measurement procedure is orthogonal to the hypothesis.**

That is a strong claim, so state what would defeat it: a study that varied plume distance or concentration systematically across a wide cortical or subcortical extent and found no spatial organisation. If such a study exists and is null, the absence becomes a real data point. Until then, "olfaction has no maps" is a statement about the literature's sampling of stimulus space, not about the brain.

<x-matrix>
<script type="application/json">
{
  "id": "m11.s03.mx1", "contentRev": 1, "points": 8,
  "corner": "Motif",
  "prompt": "Fill in whether each central-representation motif is present, absent, or unmeasured in each modality. The point of the table is which columns dissociate.",
  "rows": ["Expansion recoding", "Sparse responses", "Strong recurrence", "Topographic map of a peripheral variable", "Topographic map of a derived variable"],
  "columns": ["Vision", "Olfaction", "Echolocation", "Your notes"],
  "cells": {
    "Expansion recoding|Olfaction": { "answer": "present", "accept": ["yes", "bulb to piriform", "glomeruli to piriform", "antennal lobe to Kenyon cells"] },
    "Sparse responses|Olfaction": { "answer": "present", "accept": ["yes", "sparse"] },
    "Strong recurrence|Olfaction": { "answer": "present", "accept": ["yes", "piriform associational"] },
    "Topographic map of a peripheral variable|Olfaction": { "answer": "absent", "accept": ["no", "none", "not present"] },
    "Topographic map of a derived variable|Olfaction": { "answer": "unmeasured", "accept": ["not looked for", "unknown", "untested", "not measured"] },
    "Topographic map of a peripheral variable|Vision": { "answer": "present", "accept": ["yes", "retinotopy"] },
    "Topographic map of a peripheral variable|Echolocation": { "answer": "present", "accept": ["yes", "cochleotopy", "tonotopy"] },
    "Topographic map of a derived variable|Echolocation": { "answer": "present", "accept": ["yes", "delay map", "echo delay"] }
  },
  "modelAnswerNote": "The bottom two rows are the argument. Echolocation has both kinds of map, and the derived one is of a variable — echo delay — that no receptor measures. That severs the inference from 'unordered array' to 'no central map', and converts olfaction's missing map from a structural consequence into an open empirical question. Note also that only one cell in this table is honestly 'unmeasured' rather than 'absent', and that distinguishing them is the whole methodological point."
}
</script>
</x-matrix>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s03.q1", "contentRev": 1, "points": 1,
  "prompt": "You are designing a model of piriform. Which body of theory transfers most directly, and why?",
  "multi": false,
  "options": [
    { "text": "Discrete associative memory — Hopfield-style attractors — because with no metric on the input the recurrent weight matrix is general and the stable states are points rather than a manifold.", "correct": true, "feedback": "Correct, and this is the practical payoff of Lesson 3. The moment you drop the assumption that connectivity is a function of distance, you lose the convolutional structure that continuous-attractor models depend on and you land in the general-matrix regime the associative memory literature was built for [@haberly2001]." },
    { "text": "Continuous attractor networks, because piriform must represent odour concentration, which is a continuous variable.", "feedback": "This is right under the assumption that any continuously-varying encoded quantity requires a continuous attractor. It does not — a continuous attractor requires a continuum of *stable states*, which requires connectivity structured by a metric on the represented variable. Concentration could equally be encoded by population gain on a discrete identity representation, which is closer to what the concentration-invariance work suggests [@bolding2018]." },
    { "text": "Convolutional models with local connectivity, because piriform's connectivity is spatially local within the cortical sheet.", "feedback": "This is the answer if you assume anatomical locality in the cortical sheet implies functional locality in stimulus space. In V1 those coincide, because the sheet is retinotopic. In piriform they do not: neighbouring piriform cells have unrelated odour tuning, so cortical distance is not stimulus distance and a convolution over the sheet computes nothing meaningful." },
    { "text": "Sparse coding as a generative model, because piriform responses are sparse.", "feedback": "This is right under the assumption that sparse responses imply a sparse generative model — rationale 2 of the three in this section. It is a live hypothesis, but sparseness also follows from purely associative capacity requirements with no generative content, and the fly evidence for actively-enforced sparseness fits the associative account better. Observing sparseness does not select the sparse-coding rationale." }
  ]
}
</script>
</x-mcq>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s03.f1", "contentRev": 1, "points": 1,
  "prompt": "Pick two metric-dependent motifs from vision. For each, say what it was buying, and propose a non-metric mechanism that could buy the same thing in olfaction.",
  "modelAnswer": "Centre–surround buys redundancy reduction: it removes the component of a receptor's response predictable from its neighbours, and 'neighbour' is defined by the spatial correlation structure of images. The non-metric version needs no space at all — subtract from each glomerulus the component predictable from a weighted sum of other glomeruli, with weights set by measured co-activation across natural odour scenes. The operation is identical; only the definition of 'neighbour' changes, from spatial adjacency to statistical dependence. It is blocked on the same missing ensemble as everything else in Lesson 1.\n\nA smoothing prior buys robustness to noise: it assumes nearby locations have similar values, so averaging suppresses noise without destroying signal. There is nothing to smooth over in an unordered array. The equivalent is a low-dimensional prior — assume the receptor pattern lies near a low-dimensional manifold of natural odour patterns, and project onto it. Smoothness is a specific low-dimensional prior that happens to be expressible as a local operation when the array is ordered; the general form survives the loss of the metric even though the local implementation does not.\n\nThe pattern generalises: metric-dependent motifs are usually cheap local implementations of a statistical operation that has a metric-free general form. What is lost is not the computation but its efficiency, because the general form requires a full weight matrix where the local form required a stencil.",
  "rubric": [
    "Names what each motif buys computationally, not just what it does mechanically",
    "Proposes a mechanism defined by statistical dependence rather than spatial adjacency",
    "Recognises that the general form typically costs more connectivity than the metric-dependent local form",
    "Notes that the non-metric versions are blocked on the measured odour ensemble"
  ]
}
</script>
</x-free-response>
