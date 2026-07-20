---
id: m13.s01
title: Why artificial systems are evidence about biology
lede: This is the only module in the course with no animal in it. The justification is that engineered sensing shares the task and the input with biological sensing and shares nothing else — which makes it a control, not an analogy.
estimatedMinutes: 22
---

Every module so far has argued by comparison across organisms. The method has a known weakness, and §14's conclusion names it: the comparison systematically under-weights properties with no analogue elsewhere, and the modalities being compared are not independent — they were built by the same evolutionary process, in the same nervous systems, under the same metabolic and developmental constraints. Nine hand-scored points from one kingdom is not a large sample, and several of the points are related.

This module reaches for a control from outside biology entirely.

§0.0 left an open question with several candidate answers: why is there a mature normative theory of the retina and nothing of the kind for olfaction? The candidates on the table are (a) that nobody has measured olfaction's input ensemble, (b) that odour is intrinsically harder because of its dimensionality and the absence of a metric, (c) that mixtures do not superpose at the receptor, so the linear machinery that worked elsewhere does not apply, (d) that the objective has never been stated precisely enough to solve, and (e) that the field is younger, smaller and less well funded. They are not mutually exclusive and several could be true at once.

Everything bearing on them so far is biological. That is a problem for all five, because a biological comparison cannot vary the things biology holds fixed — every modality it compares comes with an evolutionary history, a metabolic budget, a developmental programme and a behavioural deadline attached.

Engineered sensing can vary them, because humans have built sensing systems and those systems have none of it. Machine vision and machine audition succeeded, spectacularly and in public. Machine olfaction did not. The same asymmetry, in a substrate where the biological constraints are simply absent and where the ordering of events is a matter of documented record rather than reconstruction.

So this module is another comparison, on a different axis, and it bears on several of the candidates at once. What it does *not* do is adjudicate between them cleanly, and it is worth saying so at the outset rather than at the end. The module's job is to lay out what each candidate predicts about the engineering record, what the record actually shows, and what would separate them. The scoring is left to you.

Before running the test, it is worth being precise about what an artefact can and cannot tell you about an organism, because the inference is often made badly and the rest of this module depends on making it well.

<x-figure src="content/13-artificial/figures/evidence-from-artefacts.js"
  caption="The rungs are not equally sound and the module deliberately stands on only three. An engineered success is a strong existence proof and near-worthless mechanistic evidence; an engineered failure proves nothing about solvability but cleanly subtracts every explanation that appeals to a constraint the artefact does not face. Filter to failures and note that the row carrying §13.4 is rated only moderate — a differential argument is worth exactly what its list of ruled-out alternatives is worth.">
</x-figure>

## What a working artefact establishes

Four conclusions, in descending order of how much they are worth.

**An existence proof about the information.** If a machine performs a discrimination from a given signal, then that signal contains enough information for that discrimination. This is the strongest and least interesting rung. It licenses nothing about biology except that a question of the form "is the information even there?" has been answered, and it answers it independently of any assumption about neurons. Machine speech recognition establishes that the acoustic waveform carries phonetic identity robustly enough to be recovered without a vocal tract model, a lexicon that is genuinely known in advance, or a listener who wants anything. That is not obvious *a priori*, and several decades of the speech literature assumed otherwise.

**A sufficiency claim.** More useful: the artefact had access to a specified set of inputs and nothing else, so everything not on that list is optional. A vision system trained only on static images performs object recognition well, which establishes that motion, stereo, active fixation and a body are not *necessary* for the task — though they may be enormously helpful, and though the human system may use all four. Sufficiency results are the way engineering most reliably constrains theories of biology: they turn a claim of the form "X is required for Y" into an empirical question with a cheap decisive test.

**Weak evidence about algorithm.** That a machine solves a problem by method M is evidence — thin, easily overturned — that the brain might. It is thin because many algorithms compute the same function, and the artefact's designer chose M for reasons having nothing to do with biology: differentiability, hardware, the availability of a library. This is the aeroplane objection, and it is correct as far as it goes. Flight established the aerodynamic constraints that both birds and aircraft must satisfy; it established nothing about feathers.

**Essentially nothing about implementation.** The substrate is unrelated. No inference from a matrix multiply to a synapse survives contact with the details.

There is a fifth rung, and it is the one worth having.

**Convergence under disjoint constraints.** If two systems that share the task and the input, and share nothing else, arrive independently at the same structure, then the structure is attributable to what they share. This is not an analogy argument. It is a differential argument with the same logic as the eliminations §14 identifies as the course's most durable product: taste is unordered and not stuck, therefore disorder is not sufficient for stuckness. Here the differential is stronger, because the two systems differ more completely. An engineered vision system has no evolutionary history, no development, no metabolic budget, no anatomy, no deadline imposed by predators, and no need for its parts to be built out of cells that also have to stay alive. If it converges on centre–surround-like early filters and orientation-selective units anyway, the list of things that could be responsible has been cut to one item: the statistics of natural images and the structure of the task.

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

**It locates the difficulty, but only under a condition.** If serious effort has been applied and the stall occurs consistently at one point in the pipeline, the stall point is informative about where the difficulty is. Both clauses matter. "Serious effort" is a judgement, not a measurement, and §13.4 gives the account in which effort simply differed — because the commercial pull differed — a full hearing rather than a dismissal. And "consistently at one point" is an empirical claim about the engineering literature which §13.3 has to earn rather than assert.

**A differential explanation is worth exactly as strongly as the alternatives are ruled out.** This is the rung §13.4 works on, and the figure above rates it moderate on purpose. The tempting argument runs: vision and audition had a large labelled dataset before their breakthrough; olfaction never had one; olfaction has no breakthrough; therefore the dataset is the difference that mattered. That form is valid only if the other differences — sensor physics, intrinsic problem difficulty, commercial incentive, the cost of ground truth — are either controlled or shown to be insufficient. There are at least four such differences, most of them are good, and none of them is controlled by the engineering record as it stands. §13.4 states each at full strength and reaches no verdict, which is the correct outcome rather than an evasion.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "An electronic nose, given decades of effort, still cannot identify odours in an open world. Which conclusion does §13.1's ladder actually license?",
  "options": [
    {
      "text": "Every explanation of olfaction's theoretical backwardness that appeals to a specifically biological constraint has been subtracted from being the whole story, because the artefact has none of those constraints and stalls anyway.",
      "correct": true,
      "feedback": "This is the clean rung, and note its logical form: it is an elimination, not a positive account. The artefact has no metabolic budget, no 200 ms deadline [@uchida2003], no adult neurogenesis, no missing relay, no receptors it did not choose. It stalls regardless. That subtracts a list; it does not name a cause, and §13.4 finds that four candidate causes survive the subtraction with none of them isolated."
    },
    {
      "text": "Open-world odour identification is probably not solvable by any system built the way electronic noses are built.",
      "correct": false,
      "feedback": "Correct under the assumption that sustained engineering failure is evidence of impossibility — the inductive step the history of artificial intelligence has punished most consistently. §13.1 says to discard arguments of this form on sight. Note also that the premise is available for cheap refutation: animals do this task, on hardware with the same broad-tuning design."
    },
    {
      "text": "The brain must therefore be using an algorithm that machine olfaction has not discovered.",
      "correct": false,
      "feedback": "Correct under the assumption that engineering evidence transfers at the algorithmic level. §13.1 rates that rung thin and rates implementation empty. A designer picks a method for differentiability and library availability, not for biological plausibility, so the absence of a method in engineering says almost nothing about its presence in cortex. The stall is informative about *where* the difficulty is, not about what solves it."
    },
    {
      "text": "Nothing — only working artefacts carry information about biology.",
      "correct": false,
      "feedback": "Correct under the assumption that existence proofs are the only usable form of engineering evidence, which is the standard and overly cautious reading. But this course's most durable products are eliminations (§14), and a failure in a system missing all of biology's constraints eliminates precisely the constraint-based explanations. The failure direction is where this module's argument lives."
    }
  ]
}
</script>
</x-mcq>

## Where the inference sits in Marr's levels

A compact way to hold all of the above. Engineering evidence is strong at the computational level, weak at the algorithmic level, and empty at the implementational level.

That is convenient, because the computational level is where most of the candidate explanations live. "The input statistics determine the code" is not a statement about synapses; neither is "odour has no metric, so the priors that cut sample complexity elsewhere are unavailable"; neither is "mixtures do not superpose, so the linear machinery does not apply". Each is a statement about what any system solving a sensory problem faces — and if any is true, it should be true of a system with no synapses at all. §0.1's insistence on separating the three stances earns its keep here: candidates pitched at the computational level can be probed by artefacts, and candidates pitched lower cannot.

The converse is worth stating too, because it constrains what this module may conclude. Nothing here can adjudicate the disputes that occupy most of the olfactory literature — whether the bulb decorrelates or normalises or subtracts a negative image, whether identity is carried by which glomeruli or by when they fire, whether piriform is an associative network [@haberly2001] or something more V1-like. Those are algorithmic and implementational questions. A machine olfaction system that worked perfectly would settle none of them, and a machine olfaction system that fails settles none of them either.

<x-predict>
<script type="application/json">
{
  "id": "m13.s01.p1",
  "contentRev": 1,
  "prompt": "Candidate (a) says that measuring the input ensemble is a precondition for understanding a sensory code. Before reading on: write down what *that* candidate predicts about engineered sensing, stated so that the historical record could falsify it. Aim for conditions that specify not just *which* domains succeed but the *ordering* of events and the *location* of the failure — then ask, of each condition you wrote, which of the other four candidates predicts it too.",
  "placeholder": "What would have to be true of the engineering record, and which candidates does each condition actually discriminate?",
  "reveal": "§13.1 commits to four checks, and the value of stating them in advance is that §13.4 reads the record against something fixed rather than assembled afterwards.\n\n**1. Presence/absence.** Engineered modalities with large characterised input corpora have working systems; those without do not.\n\n**2. Ordering.** The corpus came *first*. If the machines were built and the corpora assembled afterwards to evaluate them, the ordering that makes the biological version persuasive is gone and the parallel collapses. This is the check a third-variable story — both are downstream of a field maturing — cannot reproduce for free.\n\n**3. Location.** The stall is at the input representation, not downstream. If machine olfaction had failed for want of classifiers, the parallel would be spurious. This is the genuinely risky one, and §13.6 rates it the module's best claim to being a test rather than a description.\n\n**4. Persistence without biological constraints.** The stall survives in systems with no metabolism, deadline, development or anatomy — otherwise the artefact adds nothing biology did not already supply.\n\nNow the discrimination question, which matters more than the checks. **Check 1 discriminates nothing**: every candidate predicts it, including (b) intrinsic difficulty, (c) non-superposition, and (e) a thin field. **Check 4 subtracts a whole class** — the biological-constraint explanations — but it leaves (a), (b), (c) and (e) all standing, because none of them is about biology. **Checks 2 and 3 carry what evidential weight there is**, because each could have come out the other way and the record would have said so. Even they do not separate (a) from (b): a domain with no metric and therefore a large data requirement would also stall at the input representation, for a different reason."
}
</script>
</x-predict>

## The shape of the comparison

To make the checks explicit, so that §13.4 reads the record against something stated in advance rather than assembled afterwards.

Candidate (a) — the unmeasured ensemble — predicts the following, if it is about the problem rather than about brains:

1. In engineered sensing, modalities with large characterised input datasets should have working systems, and modalities without should not.
2. The dataset should have come *first*. If the working systems were built and the datasets assembled afterwards to evaluate them, the ordering that makes the biological version persuasive is absent and the parallel collapses.
3. The engineered stall should be at the input representation rather than downstream. If machine olfaction failed because nobody could build good classifiers, the parallel is spurious; if it failed because nobody could agree what the input to a classifier should be, the parallel is exact.
4. The stall should persist despite the absence of biological constraints — otherwise the artefact adds nothing that biology did not already supply.

All four are checkable against the historical record rather than against anyone's intuition, which is the reason to run this comparison at all. §13.2 takes the first two, §13.3 the third and fourth, and §13.4 asks what else could produce the same pattern — and finds that a good deal else could.

The other candidates make their own predictions about the same record, and §13.4 states them side by side. (b) predicts that the stall is worst wherever the input lacks a metric, in engineering as in biology, independently of what has been measured. (c) predicts that the calculations which break are specifically the linear ones. (e) predicts the gap tracks money and headcount and requires nothing to be true about odour at all. Notice in advance that these predictions overlap heavily with (a)'s, which is why the module ends without a winner.

One thing to hold on to while reading the next three sections, because it cuts against candidate (a) in particular and will be the sharpest question in §13.4: **it is entirely possible for a dataset to buy engineering success without buying any theoretical understanding.** A large enough odour dataset and a large enough network might well produce a machine that identifies odours superbly while yielding no normative account of olfactory coding whatever — no derived coordinates, no efficient-coding argument, nothing that would count as an answer to the questions this course has been asking. If that is so, then datasets purchase two different goods and any argument that runs them together is equivocating. Whether they can be separated is the most consequential open question in this module, and §13.5 returns to it as a design requirement rather than a caveat.
