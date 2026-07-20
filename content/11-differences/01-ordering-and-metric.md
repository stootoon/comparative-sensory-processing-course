---
id: m11.s01
title: Ordering and metric
lede: The course's central claim, argued in full and then attacked. A motif-by-motif audit finds that fewer of them depended on the metric than the slogan implies — and that the ones which do fail, fail for three separable reasons.
estimatedMinutes: 18
---

## The claim, stated precisely enough to be wrong

Here is the sentence this module exists to test:

> Almost every computational motif that presupposes a metric — surrounds, maps, interpolation, smoothing priors, translation invariance, convolution — is either unavailable in olfaction or must be re-derived.

As a slogan it is memorable. As a scientific claim it is underspecified in two ways, and both need fixing before the datasheet can be brought to bear.

First, "presupposes a metric" conflates at least three distinct structures. A metric $d(i,j)$ on the receptor index set is one thing. A *neighbourhood* structure — which channels count as adjacent — is weaker, and is what lateral wiring actually consumes. A *group action*, some transformation $T_g$ acting on the index set under which the stimulus ensemble is invariant, is stronger, and is what convolution consumes. These come bundled in vision because the receptor array is a subset of $\mathbb{R}^2$, which supplies all three at once. They are logically separate, and separating them is most of the work of this section.

Second, "olfaction does not have one" needs a test. §3.4 supplied a good one: **an array is ordered when permuting its channels destroys information that downstream circuits rely on.** Permute the pixels of a retina and V1 is useless. Permute the tonotopic axis and every delay line in the superior olive breaks. Permute the glomeruli and — as far as anyone has shown — piriform is unaffected, because its input connectivity is already close to random with respect to glomerular position [@haberly2001; @caron2013].

So the array is genuinely unordered by the strongest available criterion. The question is what follows.

<x-figure src="content/11-differences/figures/metric-motifs.js"
  caption="The audit, not the slogan. Fourteen motifs, each labelled with the specific property of the metric it consumes. Three fail because they need a neighbourhood, two because they need a translation group, and one because it needs betweenness — but six never consumed a metric at all, and they include the two calculations the course most wants to run in olfaction. The strong reading of the central claim does not survive this table.">
</x-figure>

## What a metric actually buys, motif by motif

Take the motifs one at a time and name the property each uses. The discipline here is that each row must say what breaks, not merely that something breaks.

**Centre–surround.** The retina subtracts a prediction of a photoreceptor's response formed from its neighbours, because natural images have $1/f^2$ power spectra and nearby pixels are highly correlated [@srinivasan1982; @atick1992]. Two ingredients: a *predictor* (nearby channels are informative about this one) and a *wiring rule* (proximity in the array is cheap to wire). The second is unavailable in olfaction. The first is not obviously unavailable — receptor activations across odours are correlated, just not as a function of glomerular position. This is the key split, and it recurs: **the statistical justification survives; the wiring shortcut does not.** In olfaction the corresponding operation is divisive normalisation pooling over the entire glomerular population [@olsen2010], which is what you build when you cannot exploit locality and must pay for global connectivity instead.

**Topographic maps.** A map buys three things: it makes local wiring implement a meaningful computation, it lets the readout use position as a variable, and it makes development cheap because chemical gradients can lay out the map without instruction. All three need the neighbourhood structure. All three are absent.

**Convolution and translation invariance.** These need the group, not just the neighbourhood. A convolutional layer is the maximum-likelihood architecture when the stimulus ensemble is stationary under translation — the same object may appear anywhere on the retina and should be recognised identically. In olfaction there is no group acting on receptor identity. Odours do not "move" across the receptor array. The invariance actually wanted is over concentration, and concentration acts on the response vector as a *scaling* — an entirely different group, which piriform does appear to handle by recurrent gain control rather than by weight sharing [@bolding2018].

**Interpolation and smoothing priors.** Interpolation needs betweenness: given responses at $i$ and $k$, infer the response at some $j$ between them. Undefined here. But note carefully what is undefined. There is no "between" two *receptors*. Whether there is a "between" two *odours* is a separate and open question — one that hyperbolic embeddings of perceptual odour space [@zhou2018] are an attempt to answer, and the answer is not known.

<details class="x-deeper">
<summary>Go deeper: what a smoothness prior is once you strip the geometry off<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

A Gaussian smoothness prior on a signal $x$ over a graph with Laplacian $L$ is

$$p(x) \propto \exp\left(-\tfrac{\lambda}{2}\, x^\top L\, x\right) = \exp\left(-\tfrac{\lambda}{2}\sum_{i\sim j} (x_i - x_j)^2\right),$$

which penalises disagreement between adjacent channels. It is a claim that the signal has few effective degrees of freedom, expressed in the eigenbasis of $L$: most of the energy is in the low-eigenvalue modes.

Remove the graph and the *claim* survives, but the basis must be supplied some other way. A sparsity prior $p(x) \propto \exp(-\lambda \|x\|_1)$ makes the same kind of claim — few degrees of freedom active — with no adjacency at all. The dictionary supplies the structure that adjacency supplied before.

This is why sparse coding transfers to olfaction and smoothing does not, even though both are "the signal is simple" priors. Olshausen and Field's derivation never used pixel adjacency; it used the statistics of natural images through the learned dictionary [@olshausen1996], and the pixel lattice enters only as the arbitrary coordinates the images happen to be delivered in. Run the identical algorithm on a permuted image set and you recover permuted versions of the same filters.

The consequence for olfaction is concrete: the olfactory analogue of a smoothness prior is not "nearby glomeruli should agree" but "few sources should be active", and that is the prior in the sparse-inference accounts of bulbar circuitry [@koulakov2011; @tootoonian2022].

</div>
</details>

**The receptive field itself.** This is the one people find hardest to give up, and it is also the one where the loss is smallest. A receptive field is a function from stimulus to response. In vision we draw it as a picture because the stimulus domain has a natural two-dimensional layout. Strip that and you have a tuning vector over an unordered index set — you lose the picture and nothing else. The mathematics of an ORN's odour tuning is the mathematics of a simple cell's spatial tuning; only the plot is impossible.

## The counter-case, and it is strong

Now the serious attack. Three lines, in increasing force.

**First: gustation.** Taste is unordered. Taste has no metric on its receptor array. And taste has none of olfaction's difficulties — no theoretical stall, no unsolved mixture problem, a coding dispute that was settled [@chandrashekar2006], and a normative account of receptor breadth that follows straightforwardly from the loss function. The vision/olfaction contrast varies orderedness and dimensionality together, and gustation breaks the confound: it holds disorder fixed and lowers dimensionality, and the difficulty vanishes. Under the simplest reading of that experiment, **disorder is not the culprit — dimensionality is.** §11.2 takes this up in full; here it is enough to note that the datasheet's own control condition undercuts the naive form of the central claim.

**Second: the audit itself.** Count the rows in the figure above. Efficient coding, opponent-axis derivation, divisive normalisation, sparse coding, random expansion, predictive subtraction — six motifs that carry no metric dependence whatever, because each is defined by the covariance or higher-order statistics of the population and not by the ordering of the index. This includes the two calculations the course most wants to see run in olfaction. The colour-opponency derivation [@buchsbaum1983; @ruderman1998] is PCA on receptor responses to natural scenes; it is indifferent to whether the receptors are laid out in a line, a lattice, or nothing at all. That calculation is blocked in olfaction — but it is blocked on **the missing ensemble, not the missing metric** [@celani2014].

**Third: proprioception and the bats.** Proprioception's array is ordered by body position, which is not the variable being estimated. It is ordered by the *wrong* thing, which is arguably worse than being unordered — and Clarke's nucleus recodes into limb variables by the second synapse anyway [@bosco2001]. And echolocating bats maintain a precise topographic map of echo delay, a quantity the cochlea never measures at any point. **Order can be manufactured downstream over a derived variable.** The absence of order in the receptor array therefore does not entail the absence of order in the representation, and the olfactory candidates — concentration, source distance, bearing — are exactly the ones §13 goes looking for.

## What survives

Something does. Three things, stated as narrowly as the evidence allows.

1. **The wiring-economy argument survives intact.** Local computations are cheap when the array is ordered, because a rule like "inhibit your neighbours" is expressible in development without specifying connections individually. Olfaction cannot use that shortcut, and the bulb correspondingly uses long-range and non-local connectivity where the retina uses short-range. This is a real and measurable architectural consequence.

2. **Motifs consuming a group action are genuinely dead**, not re-derivable. Weight sharing needs something to share weights across. There is no candidate.

3. **The gustation objection does not fully acquit disorder.** Taste is unordered *and* nearly labelled-line, which is what you can afford when there are five categories. Disorder is costless at $D=5$ and expensive at $D=1000$, because at high $D$ the only way to avoid paying per-connection wiring costs is to exploit structure — and order is the cheapest structure there is. So the honest formulation is not "disorder is harmless" but **disorder and high dimensionality interact**, and neither alone reproduces olfaction's profile.

The claim that survives, then, is weaker and more useful than the slogan: *motifs which consume neighbourhood, betweenness, or a translation group are unavailable in olfaction and must be replaced by their statistical counterparts, which exist. Motifs defined by population statistics transfer unchanged. The stall in olfactory theory is not located in this list.*

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Highlight Gustation, then Olfaction, and read only the two rows 'Receptor array ordered' and 'Metric on stimulus space'. They agree — both near zero. Then read 'Normative theory maturity': gustation 5, olfaction 2. If disorder were the cause of the stall, these two columns should track. They do not, which is the single strongest piece of evidence against the naive central claim, and it comes from the course's own datasheet.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s01.x1", "contentRev": 1, "points": 1,
  "prompt": "Olshausen and Field's sparse coding derivation recovers oriented, localised filters from natural images. If you randomly permuted the pixel positions of every image in the training set (using the same permutation throughout) and reran the algorithm, what would you recover?",
  "multi": false,
  "options": [
    { "text": "The same filters, permuted — the algorithm never used adjacency, only co-occurrence statistics.", "correct": true, "feedback": "Right, and this is why sparse coding is on the list of motifs that transfer to olfaction unchanged. The objective depends on the joint distribution of pixel values, which a fixed permutation carries along intact. Localisation and orientation are properties of the images, expressed in whatever coordinates they arrive in." },
    { "text": "Unstructured noise-like filters, because the smoothness of natural images has been destroyed.", "feedback": "Correct under the assumption that the algorithm exploits a smoothness prior over the pixel lattice. It does not — no term in the sparse coding objective references pixel adjacency. This is the confusion the section is built to remove: the images are smooth, but the algorithm learns that smoothness as covariance, not as geometry." },
    { "text": "Global, spatially extended filters, because local structure is no longer learnable.", "feedback": "Correct under the assumption that locality in the recovered dictionary comes from locality in the algorithm. It comes from the statistics: natural images are generated by localised causes, and the dictionary discovers those causes in whatever index order it is given." },
    { "text": "Filters resembling PCA components, since sparseness degenerates to decorrelation without spatial structure.", "feedback": "Correct if sparseness required a metric to be well-defined. It does not — sparseness is a property of the coefficient distribution, invariant to relabelling of the dictionary's input coordinates. PCA and sparse coding differ in objective, not in geometric assumptions." }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s01.x2", "contentRev": 1, "points": 6,
  "corner": "Motif",
  "prompt": "For each motif, name the single property of the receptor array it actually consumes — 'neighbourhood', 'translation group', 'betweenness', or 'none' — and give the verdict for olfaction.",
  "rows": ["Convolution", "Centre–surround wiring", "Interpolation", "Divisive normalisation", "Opponent axes from PCA"],
  "columns": ["Property consumed", "Verdict in olfaction", "Your notes"],
  "cells": {
    "Convolution|Property consumed": { "answer": "translation group", "accept": ["translation", "group action", "translation invariance"] },
    "Convolution|Verdict in olfaction": { "answer": "fails outright", "accept": ["fails", "dead", "unavailable", "no analogue"] },
    "Centre–surround wiring|Property consumed": { "answer": "neighbourhood", "accept": ["adjacency", "proximity", "locality"] },
    "Interpolation|Property consumed": { "answer": "betweenness", "accept": ["between", "ordering", "betweeness"] },
    "Divisive normalisation|Property consumed": { "answer": "none", "accept": ["nothing", "no metric"] },
    "Opponent axes from PCA|Property consumed": { "answer": "none", "accept": ["nothing", "no metric", "only covariance"] }
  },
  "modelAnswerNote": "The table's point is that 'metric-dependent' is not one property. Convolution dies because there is no group; centre–surround loses its wiring shortcut but keeps its statistical justification as global normalisation; interpolation loses betweenness over receptors, though betweenness over odours remains an open perceptual question. The bottom two rows consume nothing at all — which is why the flagship §13 calculation is blocked on the missing chemical ensemble rather than on the missing metric."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s01.x3", "contentRev": 1, "points": 1,
  "prompt": "A colleague argues: 'The central claim is refuted. Gustation is unordered and non-metric and has no theoretical difficulties, so disorder cannot be what makes olfaction hard.' Give the strongest version of this argument, then say precisely how much of the central claim survives it.",
  "modelAnswer": "The argument is a clean dissociation. Vision-versus-olfaction varies orderedness and dimensionality together, so the comparison cannot attribute the difficulty to either. Gustation holds disorder fixed at the olfactory value and lowers dimensionality to about five, and the difficulty disappears: the coding dispute is settled, receptor breadth has a normative account from the loss function, and the mixture problem is absent. On a two-factor reading, disorder has no main effect. What survives is narrower and non-trivial. First, the wiring-economy consequence is real regardless: with no neighbourhood structure, local inhibition cannot be specified developmentally by proximity, and the bulb correspondingly uses global normalisation where the retina uses a local surround. Second, motifs consuming a translation group are genuinely unavailable, not re-derivable. Third, the dissociation is better read as an interaction than as a main effect: disorder is nearly costless at D=5, where a labelled-line architecture is affordable and every distinction can be wired individually, and expensive at D=1000, where exploiting structure is the only way to avoid per-connection costs. So disorder is not sufficient for the difficulty, but it is not irrelevant either — the honest claim is that neither factor alone reproduces olfaction's profile.",
  "rubric": [
    "States the dissociation correctly: gustation holds disorder fixed and lowers dimensionality, and the difficulty vanishes",
    "Identifies that the vision/olfaction comparison confounds the two factors",
    "Names at least one consequence of disorder that survives the objection (wiring economy, or the death of group-based motifs)",
    "Frames the conclusion as an interaction between disorder and dimensionality rather than a main effect of either",
    "Does not claim the central claim is either fully vindicated or fully refuted"
  ]
}
</script>
</x-free-response>

<x-predict>
<script type="application/json">
{
  "id": "m11.s01.x4", "contentRev": 1,
  "prompt": "Bats maintain a precise topographic map of echo delay — a quantity the cochlea never measures. Before reading the answer: what does this imply about the inference 'the olfactory receptor array is unordered, therefore olfactory central representations cannot be topographic'?",
  "placeholder": "What exactly does the bat case break in that inference?",
  "reveal": "It breaks the inference entirely. Peripheral order is sufficient for central order but not necessary: a map over a derived variable can be constructed downstream by systematically arranging the tuning of the computing neurons, regardless of how their inputs are laid out. The bat's delay map is built from coincidence detection between the emitted pulse and the echo, and delay-tuned neurons are then arranged in an orderly gradient. What this does NOT tell you is whether olfaction builds one. It converts a supposed impossibility into an empirical question with named candidates — concentration, source distance, bearing — all downstream of the bulb and, as far as the datasheet records, unmeasured rather than shown absent. That distinction matters: nobody has run the experiment that would find such a map, so its absence from the literature is not evidence of its absence from the brain.",
  "followUp": "Which of the three candidate variables would be easiest to test for, and what would the negative result actually license you to conclude?"
}
</script>
</x-predict>
