---
id: m12.s01
title: Why artificial systems are evidence about biology
lede: This is the only module in the course with no animal in it. The justification is that engineered sensing shares the task and the input with biological sensing and shares nothing else — which makes it a control, not an analogy.
estimatedMinutes: 22
---

Every module so far has argued by comparison across organisms. The method has a known weakness, and §13's conclusion names it: the comparison systematically under-weights properties with no analogue elsewhere, and the modalities being compared are not independent — they were built by the same evolutionary process, in the same nervous systems, under the same metabolic and developmental constraints. Nine hand-scored points from one kingdom is not a large sample, and several of the points are related.

This module reaches for a control from outside biology entirely.

The claim under test is the course's central empirical one: **modalities whose input statistics were measured have mature normative theories, and the one whose statistics nobody measured does not.** Everything supporting it so far is biological. If the claim is right in the way it is meant, it should be a fact about the *problem* rather than about nervous systems — measuring the input ensemble should be a precondition for understanding a sensory code no matter what the code is implemented in.

That is a testable consequence, because humans have built sensing systems. Machine vision and machine audition succeeded, spectacularly and in public. Machine olfaction did not. If that asymmetry has the same shape and the same apparent cause in silicon as in cortex, the claim has survived a test it could easily have failed — and it failed in a way that would have been visible, because engineered systems have documented histories and the ordering of events in them is a matter of record rather than reconstruction.

Before running the test, it is worth being precise about what an artefact can and cannot tell you about an organism, because the inference is often made badly and the rest of this module depends on making it well.

<x-figure src="content/12-artificial/figures/evidence-from-artefacts.js"
  caption="The rungs are not equally sound and the module deliberately stands on only three. An engineered success is a strong existence proof and near-worthless mechanistic evidence; an engineered failure proves nothing about solvability but cleanly subtracts every explanation that appeals to a constraint the artefact does not face. Filter to failures and note that the row carrying §12.4 is rated only moderate — a differential argument is worth exactly what its list of ruled-out alternatives is worth.">
</x-figure>

## What a working artefact establishes

Four conclusions, in descending order of how much they are worth.

**An existence proof about the information.** If a machine performs a discrimination from a given signal, then that signal contains enough information for that discrimination. This is the strongest and least interesting rung. It licenses nothing about biology except that a question of the form "is the information even there?" has been answered, and it answers it independently of any assumption about neurons. Machine speech recognition establishes that the acoustic waveform carries phonetic identity robustly enough to be recovered without a vocal tract model, a lexicon that is genuinely known in advance, or a listener who wants anything. That is not obvious *a priori*, and several decades of the speech literature assumed otherwise.

**A sufficiency claim.** More useful: the artefact had access to a specified set of inputs and nothing else, so everything not on that list is optional. A vision system trained only on static images performs object recognition well, which establishes that motion, stereo, active fixation and a body are not *necessary* for the task — though they may be enormously helpful, and though the human system may use all four. Sufficiency results are the way engineering most reliably constrains theories of biology: they turn a claim of the form "X is required for Y" into an empirical question with a cheap decisive test.

**Weak evidence about algorithm.** That a machine solves a problem by method M is evidence — thin, easily overturned — that the brain might. It is thin because many algorithms compute the same function, and the artefact's designer chose M for reasons having nothing to do with biology: differentiability, hardware, the availability of a library. This is the aeroplane objection, and it is correct as far as it goes. Flight established the aerodynamic constraints that both birds and aircraft must satisfy; it established nothing about feathers.

**Essentially nothing about implementation.** The substrate is unrelated. No inference from a matrix multiply to a synapse survives contact with the details.

There is a fifth rung, and it is the one worth having.

**Convergence under disjoint constraints.** If two systems that share the task and the input, and share nothing else, arrive independently at the same structure, then the structure is attributable to what they share. This is not an analogy argument. It is a differential argument with the same logic as the eliminations §13 identifies as the course's most durable product: taste is unordered and not stuck, therefore disorder is not sufficient for stuckness. Here the differential is stronger, because the two systems differ more completely. An engineered vision system has no evolutionary history, no development, no metabolic budget, no anatomy, no deadline imposed by predators, and no need for its parts to be built out of cells that also have to stay alive. If it converges on centre–surround-like early filters and orientation-selective units anyway, the list of things that could be responsible has been cut to one item: the statistics of natural images and the structure of the task.

<details class="x-deeper">
<summary>The reference-class problem, and why it is worse here than in comparative biology</summary>

The differential argument has a hidden premise: that the engineered and biological systems really do share only the task and the input. They do not, quite, and the leak runs in an awkward direction.

Engineered vision was designed by people who read the visual neuroscience literature. Convolutional architectures inherit weight sharing and local receptive fields from an explicitly biological ancestry; hierarchical feature extraction was a neuroscientific hypothesis before it was an engineering practice. So when a trained network's early layers look like early visual cortex, part of the resemblance may be inheritance rather than convergence, and the differential argument leaks exactly to the extent that it is.

The leak is bounded but it is not zero, and it can be bounded in a specific way: architectural priors are inherited, learned *tuning* is not. Nobody hand-specified orientation selectivity or the particular spatial-frequency bandwidths; those emerge from optimisation against image statistics under an architectural prior that is itself far too weak to determine them. The honest version of the claim is therefore narrower than it is usually stated — convergence holds at the level of what the optimisation discovers, not at the level of what the designer supplied — and it is the narrow version this module uses.

Comparative biology has the mirror problem in a milder form: two modalities in one brain are not independent samples either. Neither method is clean. The reason to run both is that their contaminations are different, and a conclusion surviving both is better supported than one surviving either.
</details>

## What a stalled artefact establishes

The failure direction is where this module's argument actually lives, and it is more fragile, so it needs stating carefully.

**It does not establish that the problem is unsolvable.** Nobody has proved machine olfaction impossible, no such proof is in prospect, and the history of artificial intelligence is substantially a history of confident impossibility claims about tasks that were subsequently done. Any argument of the form "engineers tried and failed, therefore it cannot be done" should be discarded on sight.

**It does establish that the missing ingredient is not one of biology's constraints.** This is the clean rung, and it does real work. An electronic nose has no metabolic budget to respect, no 200 ms behavioural deadline [@uchida2003], no requirement that its receptors be proteins expressed one-per-neuron, no developmental programme that must wire it up without a blueprint, no evolutionary history it cannot escape, and no obligation to be built from components that are also alive. If an engineered system stalls at the same place a biological account stalls, then every explanation that appeals to a specifically biological constraint has been subtracted from the list of possible whole explanations.

This matters more than it looks, because the folk explanation of olfaction's theoretical backwardness leans heavily on such constraints. Receptor promiscuity, the absence of a topographic map, adult neurogenesis, sensors too slow for the signal, the missing thalamic relay — every one of these is a fact about animals, and not one of them applies to a sensor array on a circuit board. An engineered system that nonetheless stalls in the same place is evidence that the difficulty is upstream of all of them.

**It locates the difficulty, but only under a condition.** If serious effort has been applied and the stall occurs consistently at one point in the pipeline, the stall point is informative about where the difficulty is. Both clauses matter. "Serious effort" is a judgement, not a measurement, and §12.4 treats the objection that effort simply differed — because the commercial pull differed — as the strongest of the rivals. And "consistently at one point" is an empirical claim about the engineering literature which §12.3 has to earn rather than assert.

**It supports the differential explanation only as strongly as the alternatives are ruled out.** This is the rung §12.4 stands on, and the figure above rates it moderate on purpose. The argument's form is: vision and audition had a large labelled dataset before their breakthrough; olfaction never had one; olfaction has no breakthrough; therefore the dataset is the difference that mattered. That is valid only if the other differences — sensor physics, intrinsic problem difficulty, commercial incentive, the cost of ground truth — are either controlled or shown to be insufficient. There are four such differences, at least three of them are good, and the honest conclusion is not that the dataset account wins but that it is *supported and not isolated*.

## Where the inference sits in Marr's levels

A compact way to hold all of the above. Engineering evidence is strong at the computational level, weak at the algorithmic level, and empty at the implementational level.

That is convenient, because the computational level is where this course's central claim lives. "The input statistics determine the code" is not a statement about synapses. It is a statement about what any system solving a sensory problem must know in order to solve it well — and if it is true, it should be true of a system with no synapses at all. §0.1's insistence on separating the three stances earns its keep here: a claim pitched at the computational level can be tested by artefacts, and a claim pitched lower cannot.

The converse is worth stating too, because it constrains what this module may conclude. Nothing here can adjudicate the disputes that occupy most of the olfactory literature — whether the bulb decorrelates or normalises or subtracts a negative image, whether identity is carried by which glomeruli or by when they fire, whether piriform is an associative network [@haberly2001] or something more V1-like. Those are algorithmic and implementational questions. A machine olfaction system that worked perfectly would settle none of them, and a machine olfaction system that fails settles none of them either.

## The shape of the test

To make the test explicit, so that §12.4 can be scored against something stated in advance rather than assembled afterwards.

The course's claim predicts, if it is about the problem rather than about brains:

1. In engineered sensing, modalities with large characterised input datasets should have working systems, and modalities without should not.
2. The dataset should have come *first*. If the working systems were built and the datasets assembled afterwards to evaluate them, the ordering that makes the biological version persuasive is absent and the parallel collapses.
3. The engineered stall should be at the input representation rather than downstream. If machine olfaction failed because nobody could build good classifiers, the parallel is spurious; if it failed because nobody could agree what the input to a classifier should be, the parallel is exact.
4. The stall should persist despite the absence of biological constraints — otherwise the artefact adds nothing that biology did not already supply.

All four are checkable against the historical record rather than against anyone's intuition, which is the reason to run this test at all. §12.2 takes the first two, §12.3 the third and fourth, and §12.4 asks what else could produce the same pattern.

One thing to hold on to while reading the next three sections, because it cuts against the module's own thesis and will be the sharpest question in §12.4: **it is entirely possible for a dataset to buy engineering success without buying any theoretical understanding.** A large enough odour dataset and a large enough network might well produce a machine that identifies odours superbly while yielding no normative account of olfactory coding whatever — no derived coordinates, no efficient-coding argument, nothing that would count as an answer to the questions this course has been asking. If that is what happened, then datasets purchase two different goods and the course has been conflating them. Whether they can be separated is the most consequential open question in this module, and §12.5 returns to it as a design requirement rather than a caveat.
