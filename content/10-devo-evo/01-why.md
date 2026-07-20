---
id: m10.s01
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

<x-figure src="content/10-devo-evo/figures/explanation-types.js"
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

**Developmental accessibility predicts a specification cost, and predicts that the feature appears where the cost argument applies and not where it does not.** This is the argument §10.2 develops. If glomerular convergence exists because it is the only way to wire an unordered array with a rule the genome can write, then it should appear in every lineage with an unordered high-dimensional chemical array, and it should be absent — or take a different form — where the array is small enough to enumerate. Gustation is the test case, and gustation does not build glomeruli.

**Historical contingency predicts phylogenetic clustering with no task correlate.** If the feature tracks the tree rather than the ecology, contingency is the parsimonious reading. This is the strongest available discriminator and it is cheap: score the feature across many species, score the ecological demand independently, and ask which variable it follows. Repertoire size across mammals is the case §10.3 works through, and the answer is more mixed than the field's usual telling.

The general shape: **optimality predicts covariation with the task, contingency predicts covariation with the tree, and developmental accessibility predicts covariation with the specification problem.** These come apart in real data. They come apart best in a comparative dataset, which is why this module sits in a comparative course rather than in a developmental one.

<x-order>
<script type="application/json">
{
  "id": "m10.s01.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 29,
  "prompt": "You want to know whether a sensory design feature is explained by optimality, by developmental accessibility, or by contingency. Put the five steps of the comparative discriminator in the order they must be carried out. The order is doing more work here than it looks.",
  "items": [
    { "id": "a", "text": "State the feature at a level of description precise enough that a species could have failed to have it." },
    { "id": "b", "text": "Score the ecological demand independently, on a measured variable rather than an impression." },
    { "id": "c", "text": "Score the specification problem — array size, whether a metric is available — independently as well." },
    { "id": "d", "text": "Score the feature across a set of species spanning both the ecological and the phylogenetic axes." },
    { "id": "e", "text": "Ask which predictor the feature follows: task, tree, or specification problem." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Two things about the order, and they are the two failure modes this module is exposed to.\n\n**Step (a) comes first because the level of description is otherwise chosen after seeing the answer.** Describe the feature loosely enough and every species has it, so the comparison has no variance to explain. §10.4 has to fight this explicitly, and the discipline is the one stated there: state the feature so specifically that either system could have failed to have it, then ask whether it does.\n\n**Steps (b) and (c) come before (d) because otherwise the predictors get scored to fit.** 'This species relies heavily on olfaction' is the standard offender — it is almost always assigned after the repertoire size is known, which makes the correlation guaranteed and meaningless (§10.3). The same trap waits in §10.5, where chemical volatility and odour-learning demand must both be scored before anyone looks at neurogenesis rates, or the comparative test collapses into the adaptationist exercise it was designed to replace.\n\n**What (e) can and cannot deliver.** It is a model comparison across three predictors, not a test of one, and its most useful outcomes are the mixed ones. Note that the three explanation types are not exclusive — a feature can be good, cheap, and inherited at once — so the question is which predictor carries the variance, not which story is true."
}
</script>
</x-order>

## The trap, named

Evolutionary explanation is the natural home of unfalsifiable storytelling. The pattern is familiar: observe a feature, invent a selective advantage, declare the feature explained. The story is unconstrained because you get to choose the advantage after seeing the feature, and because there is no version of the observation that would have refuted it.

This module is exposed to that trap more than any other in the course, for a structural reason. The other modules could at least in principle be checked against a measurement — perturb the circuit, degrade the behaviour, compare to prediction. Evolutionary claims are claims about a process that ran once, in the past, without controls.

So: **every section of this module states, for the account it offers, what observation would have refuted it.** Where the honest answer is "none available", the section says so and moves on rather than dressing the story up. §10.5 is largely such a section, and it is not a failure of the module — an account that cannot be tested is worth knowing about precisely so that nobody builds on it.

Three specific disciplines follow, and they are worth stating as rules because it is easy to break them without noticing.

**One. Do not treat "this design is good" as evidence that goodness explains it.** Almost any design a working animal uses will be good at something. The question is whether the goodness is what put it there, and the way to find out is to look for designs that are equally good and absent, or worse and present.

**Two. Do not let the level of description do the work.** "Both lineages use a hierarchical representation" is true of almost every nervous system and explains nothing. §10.4 has to fight this explicitly, because the convergence argument is only as strong as its most specific shared feature, not its most general one.

**Three. Do not smuggle in optimality by calling it efficiency.** "The genome could not specify it any other way" is a real constraint. "The genome would not have wanted to specify it any other way" is a selective story wearing a developmental costume. §10.2 argues the first; it is careful not to argue the second.

<x-mcq>
<script type="application/json">
{
  "id": "m10.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague argues: \"Glomerular convergence pools ~1000 receptor neurons, which improves the estimate of that receptor's activation by roughly thirtyfold before the 200 ms deadline [@uchida2003]. So convergence exists because it is good.\" Which of the module's three disciplines does this most clearly violate, and why does the violation matter?",
  "options": [
    {
      "text": "Discipline One. The argument establishes that convergence is good, and then treats goodness as the explanation — without checking whether an equally good alternative exists and is absent, or whether a cheaper account produces the same structure.",
      "correct": true,
      "feedback": "Right, and the check is available rather than hypothetical. §10.2 offers a competing account on which convergence is what you build when no metric supplies an ordering, and §10.4 supplies the discriminating observation: convergence ratios differ more than twentyfold between flies and mice, which is hard to reconcile with a ratio set by noise level and deadline. The SNR argument is not wrong — pooling really does help — it is unfinished, because it never asked whether the goodness is what put the structure there."
    },
    {
      "text": "Discipline Two. \"Pooling improves the estimate\" is a description so general it applies to every convergent projection in the nervous system.",
      "correct": false,
      "feedback": "Correct under the assumption that the argument's weakness is its generality, and it is a fair worry in the abstract. But this particular argument is unusually specific: it names a convergence ratio, a noise regime, and a behavioural deadline measured independently [@uchida2003], and it predicts a number. Discipline Two catches claims like 'both lineages use hierarchical processing'; it does not catch a quantitative SNR argument. The problem here is not the level of description."
    },
    {
      "text": "Discipline Three. It presents a developmental necessity as though it were a selective advantage.",
      "correct": false,
      "feedback": "Correct under the assumption that the SNR argument is the developmental one wearing a costume — but it is the other way round. Discipline Three warns against the reverse smuggling: dressing a selective story in developmental language ('the genome would not have wanted to specify it otherwise'). This argument is straightforwardly and honestly selective. Its fault is not disguise; it is failing to compete against the developmental account at all."
    },
    {
      "text": "None. The argument is quantitative, cites an independently measured deadline, and makes a prediction — it meets §0.2's standard.",
      "correct": false,
      "feedback": "Correct under the assumption that §0.2's criteria are the whole test, and the argument does score respectably against them. But §10.1 is making a cut at a different level. A design feature can have a well-grounded optimality account and still be present for another reason entirely, with the optimality account true and idle. The criteria grade the derivation; they do not ask whether the derivation is what explains the feature's presence, and that second question is the one this module exists to force."
    }
  ]
}
</script>
</x-mcq>

## What this module claims

Three arguments, in ascending order of how much weight they can carry.

**Adult neurogenesis in the olfactory bulb has a normative rationale that is developmental, and it is currently untested.** The best available account is that a system facing non-stationary input statistics benefits from continuously replacing its coding units — an argument the course has made in passing (§3.2, §3.10) and never grounded. §10.5 grounds it, then reports that it makes no quantitative prediction anyone has checked. That is a weak result honestly labelled.

**The receptor repertoire is an evolving object, and its composition may be set by genomic dynamics rather than by coding demand.** Large gene families expand and contract by duplication and pseudogenisation. That process has its own dynamics, largely independent of what the coding problem wants. §10.3 develops this because the capstone needs it: the informative null result for "does receptor abundance track encounter frequency" is that abundance is set by birth-and-death dynamics, and without an articulated alternative, a null is merely disappointing rather than informative.

**Developmental specifiability is where the missing metric actually costs the animal, and convergence between insects and vertebrates is the strongest normative evidence available in olfaction.** These are the module's two load-bearing claims and they get §10.2 and §10.4. The first explains a set of olfactory design features the course has repeatedly described as strange — stochastic receptor choice, activity-dependent axon targeting, the glomerulus itself — as consequences of one constraint the course has stated but never used. The second is an argument the course has been implicitly relying on every time it cites the fly literature as though it told us something about mice [@olsen2010; @bhandawat2007; @caron2013], and has never once made explicitly.

Both come with limits, and the limits are stated where the arguments are.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Where this module sits in the skeleton</div>
This is not a modality module and it does not use the eleven-section skeleton. It is a constraint module: it supplies the two constraint sources that the modality modules assumed and never examined. Read it as belonging beside §0.1 and §0.2 — part of the toolkit, arriving late because the examples it needs come from the modules in between.

The consequence is that it earns its place only by constraining designs. A section here that merely surveys developmental neurobiology has failed, however true it is.
</x-callout>
