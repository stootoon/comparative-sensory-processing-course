---
id: m12.s05
title: What a solved machine olfaction would need
lede: §13.7's Gaps 1 and 4, restated as an engineering specification — and itemised, because the pieces are separable, they cost wildly different amounts, and the cheapest subset is the one that buys the normative theory rather than the working device.
estimatedMinutes: 24
---

The fastest way to test whether a missing ingredient is binding is to go and make it. This section specifies what would have to be built, at the level of detail where the cost becomes visible.

The framing matters. Discussed as a single undertaking — "olfaction needs its ImageNet" — the thing looks like an unfundable decade-long megaproject, and that framing is part of why it does not exist. Itemised, it is seven components that buy different goods at very different prices, two of them nearly free, and the subset that unblocks the questions this course cares about is markedly smaller than the subset that would produce a working nose.

<x-figure src="content/12-artificial/figures/spec-sheet.js"
  caption="Seven separable components, sorted by what they buy. The single most expensive item is source-labelled pairs, because every label costs an instrument run rather than two seconds of a human's attention — and switching to the theory view removes exactly that row. The expensive part is the part this course does not need, which reframes Gap 1 from a heroic decade-long effort into two objects of very different size.">
</x-figure>

## 1. A transfer standard, before anything else

§12.3 argued that the reason no odour corpus is reusable is not cost but the absence of a format: a sensor response means nothing outside the device that produced it, and drift means it means something different next month on the same device.

The cheapest fix for that is not better sensors. It is a **transfer standard** — a defined set of reference volatiles, at defined concentrations, spanning the response space of typical arrays, cheap enough that every lab can hold one and reproducible enough that two labs' copies agree. Every published measurement is then accompanied by that device's response to the standard, and any two datasets can be mapped into common coordinates by fitting the transform that aligns their reference responses.

This is not a novel idea in general, only in this field. Photography solved the same problem with colour calibration targets: a physical chart with known reflectances, photographed alongside the subject, from which a device-specific transform is recovered. Analytical chemistry solved it with internal standards. Neither required the underlying instruments to be stable or identical; both required agreement on a reference object.

Its value is not that it makes any single measurement better. It is that it makes measurements **poolable**, which converts a field of incomparable local datasets into a field with a growing shared one. That is the same argument for benchmarks in §12.2 — the elimination mechanism — arriving one level lower down, at the level of whether two people's numbers can be put on the same axis at all.

It is also the item on the whole list with the best ratio of consequence to cost, and it requires an agreement rather than a discovery.

## 2. A sensor array, specified by transferability rather than selectivity

The instinct when specifying an artificial nose is to ask for better sensors, meaning more selective ones. §12.3 argues that is the wrong ask: selectivity does not scale, and the broadly tuned array is the design both biology and engineering converged on for a good reason.

What to ask for instead, in order:

**Device-independence over sensitivity.** An array whose responses can be mapped into a common frame, even if each individual sensor is mediocre, is worth more than a superb array whose readings are private to itself. This follows directly from the corpus argument: sensitivity improves one lab's results, transferability improves everyone's.

**A drift model rather than drift-free hardware.** Drift-free chemical sensing is a hard materials problem that has resisted decades of work. Drift that is *characterised* — measured against the transfer standard at intervals, with a model of how the response surface deforms — is an engineering problem of ordinary difficulty. The figure in §12.3 makes the point in the negative: what kills the classifier is that the drift is unmodelled, not that it is large.

**Diversity, quantified.** The useful capacity of a cross-sensitive array is set by how differently its elements respond, not by how many there are. This is the same quantity the invertebrate literature makes precise for biological arrays — the connection degree that maximises the dimensionality of the downstream representation [@litwinkumar2017] — and there is no reason the analysis should not be run on a sensor array, where the designer actually controls the parameter.

**Temporal bandwidth.** Almost all electronic-nose work samples a headspace at steady state, which discards the temporal structure that §3.9 and §11.3 argue is where olfaction's tractable information lives. An array fast enough to resolve whiff structure in a turbulent plume is measuring a signal whose statistics are already characterised [@celani2014] — and, per §12.4, is the sub-problem where engineering already works.

## 3. The dataset — and it is two datasets

This is where the two-goods distinction from §12.2's box stops being a philosophical caveat and starts determining what to build.

**For the theory: an unlabelled corpus of scene compositions.** Air sampled from ecologically relevant environments — burrows, forest floor, kitchens, bodies, whatever the animal in question actually breathes — with composition determined by GC-MS, sampled densely enough in time to capture the dynamics, and across enough environments and occasions to estimate variability. That is $p(x)$: a sample from the natural odour ensemble.

What makes this cheaper than it sounds is that **it needs no labels**. No panel, no annotation, no agreement about what anything smells like, no human in the loop at all. It is exactly analogous to a natural image database, which is a collection of photographs and not a collection of judgements, and it is what the efficient-coding template consumes at step one (§2.4). Every downstream calculation in the course's flagship list — the opponent-axis analogue [@buchsbaum1983; @ruderman1998], the tuning-breadth derivation, the dimensionality estimate — runs on the marginal distribution and asks nothing about labels.

**For the device: source-labelled pairs.** The same samples annotated with what was actually present — this room contained coffee and a person and a gas leak. This is $p(y\mid x)$, it is the expensive one, and it is expensive in a way money only partly fixes, since the ground truth for "what was in the room" is often not knowable even in principle at the granularity a label wants.

The design consequence is worth stating flatly, because it inverts the usual framing: **the version of Gap 1 that unblocks this course's questions is substantially smaller and cheaper than the version that would produce a working artificial nose.** The course has consistently described the missing database as a heroic effort, and the heroic part is the labelling, which the theory does not need.

And the route §13.7 identifies for building it stands up better on this reading than on the other. Atmospheric chemistry, food science, flavour research and entomology are already generating compositional measurements of real air for their own purposes. Persuading those communities to publish raw compositions in a common format produces exactly the unlabelled marginal, at close to zero marginal cost, and it does not require anyone to agree about perception. That is not a substitute for a purpose-built effort but it is a first version, and the natural image databases were assembled the same accidental way.

## 4. A receptor forward model, which is the piece nobody lists

A compositional corpus is not directly the input to any nervous system or any array. To ask what representation is efficient for a receptor population, you need to push the composition ensemble through the receptors, which requires knowing what each receptor does to each compound — and, because mixture responses do not superpose [@shen2013], knowing how it behaves under competitive binding and antagonism rather than merely its response to each ligand alone.

That model does not exist at scale. Ligand–receptor data covers a small fraction of receptors and a small fraction of compounds, mostly measured with single odorants at concentrations chosen for convenience.

This has a specific and uncomfortable consequence for the flagship calculation. The colour version worked because cone responses to a mixture of wavelengths add, so the map from spectrum to cone activation is linear and known, and PCA on cone responses is a well-defined operation [@buchsbaum1983]. The olfactory version has neither property. §1.12's third question puts exactly this to the reader, and the answer is that the obstacle is the non-additivity rather than the dimensionality or the missing metric.

So the specification has a fourth component that the "olfaction needs its ImageNet" framing hides: **the ensemble is not enough without a model of the transduction it passes through.** It is medium-cost, it is measurable with existing methods, and it is a prerequisite for the calculation the course most wants run. That it is rarely named as part of Gap 1 is a small failure of the field's own accounting, and this module's most concrete addition to §13.7.

<x-mcq>
<script type="application/json">
{
  "id": "m12.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A funder offers to build one item from this specification. You want the flagship efficient-coding calculation — the olfactory analogue of deriving opponent axes from natural cone responses [@buchsbaum1983; @ruderman1998] — to become runnable. Which single item is the binding one, and why?",
  "options": [
    {
      "text": "The receptor forward model, because a compositional ensemble cannot be pushed through a receptor array without a map from composition to activation that handles non-additivity [@shen2013].",
      "correct": true,
      "feedback": "This is the piece the 'olfaction needs its ImageNet' framing hides, and it is the module's most concrete addition to §13.7's accounting. The colour calculation worked because cone responses to a mixture of wavelengths add, so the map from spectrum to activation is linear, known, and PCA on the result is well defined. The olfactory version has neither property. Note the corollary: without the forward model, a perfect compositional corpus leaves the flagship calculation still unrunnable, which is why the item's usual omission from lists of what is missing is consequential rather than pedantic."
    },
    {
      "text": "The unlabelled compositional corpus, since that is $p(x)$ and step one of the efficient-coding template consumes exactly that.",
      "correct": false,
      "feedback": "Correct under the assumption that the ensemble is the only prerequisite — which is the course's own repeated framing and is why this is the tempting answer. It is genuinely necessary, and the section's headline result is that this version of Gap 1 is far cheaper than the labelled one. But the ensemble is over *compositions*, and the calculation is about *receptor activations*. The transduction between them is the item that has to exist as well, and the question asks which is binding given the other pieces."
    },
    {
      "text": "The transfer standard, because without a common frame no two labs' measurements can be pooled.",
      "correct": false,
      "feedback": "Correct under the assumption that the corpus will be built from sensor-array responses, in which case this is item one for exactly the stated reason and has the best consequence-to-cost ratio on the list. But §12.5's escape route is to make *composition* the interchange format, and a GC-MS composition is already device-independent. The transfer standard is essential for the device and largely bypassed for the theory."
    },
    {
      "text": "The benchmark task, since without an agreed scoring rule nobody can tell whether a derived representation is any good.",
      "correct": false,
      "feedback": "Correct under the assumption that the goal is engineering progress, where the elimination mechanism is what drives a field (§12.2). For a normative derivation it is the wrong instrument: the retinal filter was not validated by a benchmark but by comparison against independently measured biology. Benchmarks adjudicate methods; normative theories are tested against measurements they did not fit."
    }
  ]
}
</script>
</x-mcq>

## 5. A benchmark task, chosen carefully because it will shape the field

Benchmarks are not neutral instruments. A field optimises what its benchmark scores, so the choice of task determines what gets built for a decade. §12.3 noted that the one benchmark-shaped episode in machine olfaction was built on single molecules at fixed concentration rated by human panellists — a well-designed challenge on a badly chosen stimulus, which is §13.7's Gap 3 in engineering dress.

A benchmark worth having would score:

**Source identification in mixtures at unconstrained concentration.** Not "which molecule is this" but "what is in this air", with several sources present, at concentrations nobody controlled, against a natural background. This is the task an animal faces and the task the useful applications need, and it fails informatively — the ways a system breaks on it are the ways the demixing problem is hard.

**Localisation from a temporal record.** Given a time series of encounters, where is the source. Ground truth here is cheap and exact, because the experimenter placed the source. This is the strongest candidate for a *first* benchmark for exactly that reason: the answers are free.

**Transfer, explicitly, in the split.** Held-out test sets split by environment and by device rather than randomly, so that a system scoring well has demonstrably not memorised one room and one instrument. In a field whose central technical problem is that nothing transfers, a benchmark that does not score transfer will be gamed within a year.

**A metric that penalises confident error.** Olfaction's loss function is asymmetric (§5.1), and a benchmark scoring plain accuracy will select for systems that ignore that.

Assembling this requires no new measurement beyond the corpus itself. §13.7 makes the same point about Gap 4 — an agreed benchmark could be assembled from existing data, and what is missing is agreement rather than instrumentation.

## 6. An agreed interchange representation, which is less than it sounds

The final component is the one most likely to be over-scoped. "Agree on a representation of odour" sounds like it requires solving odour space — its dimensionality, its geometry, whether it is hyperbolic [@zhou2018], what its coordinates are [@koulakov2011; @krishnamurthy2022].

It does not, and conflating the two has probably cost the field years. Vision's interchange format is a pixel array, which embodies no theory of visual representation whatever; it is merely a common denominator that everyone can convert to and from. **Composition can play that role for odour.** It is device-independent, it is what the physics actually delivers, it is measurable by an existing standard instrument, and it commits nobody to any claim about perception or geometry.

The coordinates question then becomes what it should be: a *result* to be derived from the corpus rather than a precondition for collecting it. Which is the right order, and the same order vision ran in — pixels first, opponent axes derived later, from statistics.

<details class="x-deeper">
<summary>How large does the unlabelled corpus have to be, and what is actually being estimated</summary>

Worth doing roughly, because the answer bears on whether this is a decade or a year.

For the flagship calculation you want the covariance structure of receptor activations across natural scenes, in something like 1000 dimensions. Naively, estimating a $D \times D$ covariance well requires samples in excess of $D$, so of order $10^4$–$10^5$ independent scene samples, which is discouraging.

Three considerations pull the requirement down sharply.

**The leading subspace is what is wanted, not the full covariance.** The opponent-axis result used three cone types and recovered three axes; the olfactory analogue asks for the leading tens of components, not all thousand. Estimating a $k$-dimensional principal subspace needs samples scaling with $k$ and the spectral gap, not with $D$, and regularised or structured estimators do better still.

**The intrinsic dimensionality is probably far below the nominal one.** §13.7 flags this as an open question and names proprioception as the warning: 20 nominal degrees of freedom, about 3 effective. Natural odour scenes are mixtures generated by a modest number of sources with strongly correlated emission profiles, so there is good reason to expect heavy compression. If the effective dimensionality is tens rather than a thousand, the sample requirement falls by orders of magnitude — and, usefully, **estimating the intrinsic dimensionality is itself much cheaper than estimating the covariance**, so it is the right first analysis on a small pilot corpus and it determines the size of everything after.

**Temporal samples are cheap once you are sampling at all.** The expensive unit is the deployment, not the measurement. Dense temporal sampling at one site gives many samples that are not independent, but they are exactly what the temporal problem needs, and they are close to free.

The honest counterweight: samples from one environment are not samples from the natural ensemble, and the variance that matters is across environments, which is the expensive axis. A corpus of a hundred thousand samples from six kitchens would be large and nearly useless. **Breadth of environment is the binding cost, not number of samples**, which is a different funding proposition from the one usually described and a considerably cheaper one to start.
</details>

## What this would and would not settle

If it were built, and a system trained on it worked, what would have been shown?

**That the dataset was binding**, against the hardware and intrinsic-difficulty rivals — provided it worked on today's imperfect sensors, which is why the transfer standard is item one rather than a detail. This is §12.4's isolating experiment.

**Not necessarily anything normative.** The callout in §12.4 states the objection and the specification above is the response to it: build the corpus so that the *unlabelled marginal is published as a first-class object*, not merely as an intermediate consumed by a training pipeline. If only the labelled pairs and the trained model are released, olfaction gets a device and the course gets nothing. If the compositional ensemble is published, the derivations become possible whether or not the device is ever built — and, per the figure, that is the cheaper half.

This is the module's one actionable recommendation and it is a recommendation about publication policy rather than about science, which is uncomfortable but appears to be where the binding constraint sits.

Finally, and connecting to what §12.6 has to score: none of this touches §13.7's Gap 2. A corpus does not state an objective. If the olfactory problem is an inference problem rather than an efficient-coding problem, a beautifully characterised $p(x)$ leaves you needing to say what latent variable is being estimated under what loss — and that costs nothing but thought, is not helped by any amount of data, and is the gap §13.7 ranks first for exactly that reason.
