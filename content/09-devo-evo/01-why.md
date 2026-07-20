---
id: m09.s01
title: Why development and evolution belong in a normative course
lede: Eight modules have asked what a sensory system should do. Neither of the two questions that decide what it can do — how it is built, and where it came from — has been asked once.
estimatedMinutes: 14
---

## The gap this module fills

The course has a standard move. State the problem the system solves. Measure the ensemble it solves it over. Write down the physical constraints. Derive what the optimal solution looks like. Compare.

That move has a hidden premise: that the space of solutions the animal could have arrived at is the space of solutions we can write down. It is not, and the gap has two sources.

**A solution has to be buildable.** Not by an engineer with a wiring diagram, but by a genome running a developmental program. The genome does not specify the circuit; it specifies a process whose outcome is the circuit, and the space of outcomes reachable by such a process is far smaller than the space of circuits. If the optimum is not in that space, the animal does not have it, and no amount of measuring the ensemble will tell you why.

**A solution has to be reachable from somewhere.** Evolution does not sample the solution space uniformly. It modifies what already exists, one variant at a time, each of which has to work. A design that is optimal but separated from the current design by a valley of worse designs is unavailable in a way that has nothing to do with whether it is good.

Neither of these is a licence for defeatism. Both are constraints, and constraints are what normative arguments are made of. The retinal result is strong precisely because it takes the constraints seriously: a fixed number of ganglion cells, a fixed photon noise floor, a metabolic budget [@atick1992; @laughlin1981]. Adding "and the wiring has to be specifiable by a genome" is the same kind of move. It is not softening the theory; it is finishing it.

<x-figure src="content/09-devo-evo/figures/explanation-types.js"
  caption="Marker size is how settled the explanation is, not how loudly it is asserted. The large markers cluster on modalities with measured ensembles; nearly every olfactory row is small, meaning two or three explanation types remain live and no experiment separates them. That distribution — not any individual row — is this module's argument for existing.">
</x-figure>

## Three kinds of explanation, and why conflating them is the risk

§0.1 separated three normative stances — efficient coding, Bayesian inference, task optimality — because they make different predictions and get conflated. This section makes a cut at a different level. Given any design feature, three quite different things can explain it.

**Optimality.** The feature is there because it is good. Under a stated objective and stated constraints, this design outperforms the alternatives. The retinal filter's SNR-dependent shape is the course's cleanest instance: a prediction with a sign and a magnitude, made before the measurement, confirmed [@atick1992; @dan1996].

**Developmental accessibility.** The feature is there because it is cheap to build. Among designs that perform comparably, this one is specifiable by a short program, or emerges from a generic process that the animal is running anyway. Nothing about the feature is *optimal* in the coding sense; it is optimal in a budget the coding argument never mentioned.

**Historical contingency.** The feature is there because it was there. An ancestor had something like it, the modification that would remove it was never available or never neutral, and the lineage carries it forward. Insect odorant receptors are heteromeric ligand-gated ion channels with an inverted membrane topology relative to vertebrate GPCRs. No coding argument predicts that. It is what that lineage happened to recruit.

These are not competitors in general. A feature can be all three at once: good, cheap, and inherited. They are competitors for any *particular* feature, and the failure mode this course has spent 114 sections avoiding is to run the first explanation without checking whether either of the other two accounts for the observation on its own.

<details class="x-deeper">
<summary>Why this is a sharper problem than the usual "adaptation versus constraint" debate</summary>

The classical version of this argument is about whether a trait is an adaptation. The version that matters here is narrower and more tractable, because we are not asking about traits — we are asking about *representations*, and representations come with an explicit performance measure.

That gives us something the trait debate lacks. If a design feature is explained by optimality, there is a quantity it is supposed to be maximising, and a perturbation that should degrade that quantity. If it is explained by developmental accessibility, the prediction is different in kind: the feature should co-vary with the developmental program rather than with the task, and it should appear in lineages where the task does not.

So the three explanations are separable in principle by what they predict about *variation across species* — which is exactly the axis this course has, and exactly the axis the comparative programme was built to exploit. What makes olfaction hard is not that the question is unanswerable. It is that the comparative measurements needed to answer it have mostly not been made across the right species.

</details>

## How you would tell them apart

An explanation type that makes no differential prediction is not an explanation. Here is what each commits to.

**Optimality predicts degradation under perturbation.** If the feature is there because it maximises something, then a manipulation that preserves the feature's developmental origin but destroys its supposed function should cost the animal measurably. The strongest form is quantitative: the mushroom body's claw number is predicted to sit near the value that maximises the dimension of the Kenyon-cell representation, and it does [@litwinkumar2017]. That prediction had a number attached and could have come out wrong.

**Developmental accessibility predicts a specification cost, and predicts that the feature appears where the cost argument applies and not where it does not.** This is the argument §9.2 develops. If glomerular convergence exists because it is the only way to wire an unordered array with a rule the genome can write, then it should appear in every lineage with an unordered high-dimensional chemical array, and it should be absent — or take a different form — where the array is small enough to enumerate. Gustation is the test case, and gustation does not build glomeruli.

**Historical contingency predicts phylogenetic clustering with no task correlate.** If the feature tracks the tree rather than the ecology, contingency is the parsimonious reading. This is the strongest available discriminator and it is cheap: score the feature across many species, score the ecological demand independently, and ask which variable it follows. Repertoire size across mammals is the case §9.3 works through, and the answer is more mixed than the field's usual telling.

The general shape: **optimality predicts covariation with the task, contingency predicts covariation with the tree, and developmental accessibility predicts covariation with the specification problem.** These come apart in real data. They come apart best in a comparative dataset, which is why this module sits in a comparative course rather than in a developmental one.

## The trap, named

Evolutionary explanation is the natural home of unfalsifiable storytelling. The pattern is familiar: observe a feature, invent a selective advantage, declare the feature explained. The story is unconstrained because you get to choose the advantage after seeing the feature, and because there is no version of the observation that would have refuted it.

This module is exposed to that trap more than any other in the course, for a structural reason. The other modules could at least in principle be checked against a measurement — perturb the circuit, degrade the behaviour, compare to prediction. Evolutionary claims are claims about a process that ran once, in the past, without controls.

So: **every section of this module states, for the account it offers, what observation would have refuted it.** Where the honest answer is "none available", the section says so and moves on rather than dressing the story up. §9.5 is largely such a section, and it is not a failure of the module — an account that cannot be tested is worth knowing about precisely so that nobody builds on it.

Three specific disciplines follow, and they are worth stating as rules because it is easy to break them without noticing.

**One. Do not treat "this design is good" as evidence that goodness explains it.** Almost any design a working animal uses will be good at something. The question is whether the goodness is what put it there, and the way to find out is to look for designs that are equally good and absent, or worse and present.

**Two. Do not let the level of description do the work.** "Both lineages use a hierarchical representation" is true of almost every nervous system and explains nothing. §9.4 has to fight this explicitly, because the convergence argument is only as strong as its most specific shared feature, not its most general one.

**Three. Do not smuggle in optimality by calling it efficiency.** "The genome could not specify it any other way" is a real constraint. "The genome would not have wanted to specify it any other way" is a selective story wearing a developmental costume. §9.2 argues the first; it is careful not to argue the second.

## What this module claims

Three arguments, in ascending order of how much weight they can carry.

**Adult neurogenesis in the olfactory bulb has a normative rationale that is developmental, and it is currently untested.** The best available account is that a system facing non-stationary input statistics benefits from continuously replacing its coding units — an argument the course has made in passing (§3.2, §3.10) and never grounded. §9.5 grounds it, then reports that it makes no quantitative prediction anyone has checked. That is a weak result honestly labelled.

**The receptor repertoire is an evolving object, and its composition may be set by genomic dynamics rather than by coding demand.** Large gene families expand and contract by duplication and pseudogenisation. That process has its own dynamics, largely independent of what the coding problem wants. §9.3 develops this because the capstone needs it: the informative null result for "does receptor abundance track encounter frequency" is that abundance is set by birth-and-death dynamics, and without an articulated alternative, a null is merely disappointing rather than informative.

**Developmental specifiability is where the missing metric actually costs the animal, and convergence between insects and vertebrates is the strongest normative evidence available in olfaction.** These are the module's two load-bearing claims and they get §9.2 and §9.4. The first explains a set of olfactory design features the course has repeatedly described as strange — stochastic receptor choice, activity-dependent axon targeting, the glomerulus itself — as consequences of one constraint the course has stated but never used. The second is an argument the course has been implicitly relying on every time it cites the fly literature as though it told us something about mice [@olsen2010; @bhandawat2007; @caron2013], and has never once made explicitly.

Both come with limits, and the limits are stated where the arguments are.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Where this module sits in the skeleton</div>
This is not a modality module and it does not use the eleven-section skeleton. It is a constraint module: it supplies the two constraint sources that the modality modules assumed and never examined. Read it as belonging beside §0.1 and §0.2 — part of the toolkit, arriving late because the examples it needs come from the modules in between.

The consequence is that it earns its place only by constraining designs. A section here that merely surveys developmental neurobiology has failed, however true it is.
</x-callout>
