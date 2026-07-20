---
id: m13.s04
title: The same asymmetry, outside biology
lede: The course's central claim, tested in a substrate with none of biology's constraints — and then held to the course's own standard, which means stating four rival explanations at full strength and admitting that the result is supported rather than isolated.
estimatedMinutes: 30
---

The course's central empirical claim is a correlation across ten modalities between whether the input ensemble was measured and how mature the normative theory is, and the correlation is very strong. It is also built on nine hand-assigned ordinal scores, assigned by the people making the argument, over modalities that are not independent samples — they are all senses, in animals, built by the same evolutionary process, studied by overlapping communities with shared methods and shared fashions. The figure's own caption says as much.

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="The claim this module tests from outside. Nine points, ordinal scores, one kingdom, and the authors of the argument assigned the scores — a set of vulnerabilities the figure states about itself. What follows is not another point on this plot. It is a second dataset with a different sampling frame, in which the ordering of events is documented rather than reconstructed, and in which none of the biological explanations for the outlier are even available.">
</x-figure>

Three objections to that plot deserve answers rather than dismissal.

**The scoring is subjective.** "Maturity of normative theory" and "is the ensemble measured" are judgements. They were made by people who already believed the conclusion, and the difference between a 3 and a 6 is not defensible to a sceptic. This is not fatal — the extreme cases are not in dispute, and the correlation does not hinge on the middle of the range — but it is real.

**The modalities are not independent.** Vision and audition share an evolutionary substrate, a set of investigators, a methodological culture, and in large part a theoretical vocabulary. Efficient coding arrived in vision and was then applied to audition by people who had read the vision literature. Two correlated successes are not two pieces of evidence.

**A third variable is available and plausible.** Both axes could track tractability, or how long a field has had good tools. Easy problems get measured ensembles *and* good theories, hard problems get neither, and the correlation is a consequence rather than a cause. The figure's caption concedes this and rests the causal reading on the historical ordering — the ensemble was measured first, by people not chasing the theory.

An independent test needs a second dataset with a different sampling frame, different causes, and preferably documented ordering. That is what artificial sensing supplies.

## The test, stated plainly

Machine vision and machine audition succeeded. Machine olfaction did not. Both successes were preceded by large characterised input corpora; the failure was not, and never has been. The stall is at the input representation rather than downstream, and it persists in systems with no metabolism, no evolutionary history, no development, no anatomy, no sensory deadline, and no obligation to be made of cells.

The same asymmetry, in the same direction, between the same modalities, with an entirely disjoint set of available causes.

That is a genuine independent test and it is worth being clear about which of the three objections it answers.

It answers the second cleanly. The engineering histories are not a resampling of the biological ones. They involved different people, different institutions, different incentives, and different timescales; nobody built a labelled image corpus because Atick and Redlich had derived a retinal filter [@atick1992]. Whatever non-independence contaminates the nine biological points does not contaminate this.

It answers the third partially and by the same route the caption used, but with better evidence. In engineering, the ordering is documented rather than inferred: the corpora were assembled, publicly, before the methods that exploited them existed, and the field's own contemporaneous expectations about what would work are on the record and were wrong. A tractability story has to explain why the tractable field's corpus arrived years before its results and was built by people who did not know what would use it.

It does not answer the first at all. If anything the engineering case is scored more crudely than the biological one — "succeeded" and "did not succeed" is a two-level ordinal variable over three domains. What it offers instead is that the extreme cases are not in dispute by anyone, and that the disagreement, if there is one, will be about causes rather than about the pattern.

## The within-olfaction control, which reproduces

The single most useful piece of evidence in this module is not the cross-modality comparison. It is that the dissociation reappears *inside* olfaction, in both substrates, with the animal and the anatomy and the chemistry held fixed.

Olfaction's chemical ensemble is unmeasured and its temporal ensemble is measured. Turbulent odour transport has been characterised, is analytically tractable, and supports quantitative work [@celani2014; @tootoonian2025], and §3.11 notes that this is precisely where olfactory normative theory has traction — the tractable problems are temporal and the stalled one is chemical.

Now look at the engineering. Odour source localisation from intermittent plume encounters is a working area with real algorithms and robots that do it: search strategies that exploit the statistics of intermittent detections rather than following a gradient, of which infotaxis is the cleanest formulation [@vergassola2007], and which behave sensibly precisely because the transport statistics they assume are the measured ones. Meanwhile odour *identification* in the open world does not work at all.

So within a single modality, the sub-problem whose input statistics were characterised has both a normative theory and working machines, and the sub-problem whose statistics were not characterised has neither. The hardware is the same hardware. The dimensionality is the same dimensionality. The commercial pull is, if anything, larger on the identification side. **No rival explanation in this section predicts that split**, and the dataset account predicts it exactly.

That is the strongest single observation the module has, and it is worth more than the cross-modality comparison it is embedded in.

<x-matrix>
<script type="application/json">
{
  "id": "m13.s04.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill in the within-olfaction control, which is the module's strongest single observation. Two sub-problems of one modality, in one animal, on one set of sensors. Answer yes or no in each cell, then read the note — the point is not the six answers but which rivals can and cannot reproduce the pattern.",
  "rows": [
    "Input ensemble characterised?",
    "Normative theory with traction?",
    "Working engineered systems?"
  ],
  "columns": ["Plume / temporal", "Chemical identity"],
  "cells": {
    "Input ensemble characterised?|Plume / temporal": { "answer": "yes", "accept": ["yes","measured","characterised","characterized","y"] },
    "Input ensemble characterised?|Chemical identity": { "answer": "no", "accept": ["no","unmeasured","not measured","n"] },
    "Normative theory with traction?|Plume / temporal": { "answer": "yes", "accept": ["yes","y","some","yes — infotaxis","tractable"] },
    "Normative theory with traction?|Chemical identity": { "answer": "no", "accept": ["no","n","none","stalled"] },
    "Working engineered systems?|Plume / temporal": { "answer": "yes", "accept": ["yes","y","robots","plume tracking","infotaxis"] },
    "Working engineered systems?|Chemical identity": { "answer": "no", "accept": ["no","n","closed worlds only","only closed worlds"] }
  },
  "modelAnswerNote": "The columns differ in exactly one respect and agree on everything a rival could appeal to.\n\nTurbulent transport statistics have been characterised and are analytically tractable [@celani2014; @tootoonian2025], and that is the strand with both normative traction and robots that work — search strategies exploiting the statistics of intermittent detections rather than following a gradient, of which infotaxis is the cleanest [@vergassola2007]. Chemical identity has an unmeasured ensemble, no normative theory, and no open-world machine.\n\nNow apply the rivals. **Sensor hardware** is constant across the split — the same drifting cross-sensitive array serves both. **Commercial pull** is, if anything, larger on the identification side. **Raw dimensionality** is identical. **Ground-truth cost** differs in the convenient direction: plume localisation has free exact ground truth, because the experimenter placed the source, which is a partial hit and the reason §13.5 nominates it as the first benchmark.\n\nSo no rival except the last predicts this split, and the dataset account predicts it exactly. That is why §13.4 rates it worth more than the cross-modality comparison it is embedded in, and why §13.6's first recommendation is to push it to finer grain across sub-problems — it is free, and it is the most discriminating thing in the module."
}
</script>
</x-matrix>

## Four rivals, at full strength

Now the part that decides whether the test is worth anything. Four other explanations predict machine olfaction stalling while machine vision flies, and at least three of them are good. The course's standard is that a normative argument is worth what its ruled-out alternatives are worth, so these get stated at their strongest rather than at their most refutable.

<x-figure src="content/13-artificial/figures/rival-explanations.js"
  caption="Read the two middle columns before the row labels. Four of the five explain the engineering gap perfectly well, which is why the engineering gap alone settles nothing — the separation comes from the second column, where hardware and commercial pull have nothing to say about why olfactory theory lagged in animals with excellent chemical sensors. That is the dataset account's advantage, and it is parsimony rather than proof. Select each rival for what would break it, and note the bottom row: ground-truth cost is not competing with the dataset account, it is the reason the dataset does not exist.">
</x-figure>

### Rival 1 — sensor hardware

Cameras and microphones are cheap, near-linear, stable over the life of the device, and standardised to the point that data collected on one transfers to a model trained on another. Chemical sensors drift, cross-react, poison, saturate, respond strongly to humidity and temperature, and have no interchange format. §13.3 argues the two failure modes are jointly worse than either alone, and the deeper box there makes the sharpest version of the objection: an odour corpus is not merely expensive, it is *not a redistributable object*, because the stimulus cannot be stored or replayed and a sensor response means nothing outside the device that produced it.

**This is sufficient on its own to explain the engineering gap.** Take the strongest form: even with unlimited money and unlimited annotators, you could not build the analogue of a large image corpus, because there is no format in which to publish one. If that is right, machine olfaction's failure is fully accounted for by instrumentation and tells you nothing about datasets.

**What it does not cover is biology.** Animals have superb chemical sensors — sensitive, fast enough to be interesting, and not obviously drift-limited over behavioural timescales — and olfactory theory lagged anyway. The hardware account is silent on the entire biological half of the asymmetry, which means it cannot be the shared cause even if it is the whole engineering cause.

**And it bounds the nose rather than the problem.** GC-MS establishes that composition is recoverable. A perfect, drift-free, standardised chemical sensor array delivered tomorrow would still leave you without examples of the mapping from composition to source identity, because that mapping is not in the chemistry. Hardware is necessary and demonstrably not sufficient.

**What would isolate it:** a stable, standardised, device-independent array, with no new corpus. If the field moves, hardware was binding. That experiment is expensive but not conceptually hard, and it is being run slowly by instrumentation improvement.

### Rival 2 — the problem is intrinsically harder

High dimensionality; no metric on the stimulus space; mixtures that do not superpose at the sensor [@shen2013]. This account covers both substrates, since neither biology nor engineering can exploit structure that is not there.

It has one component that is clearly right and one that is clearly wrong, and separating them matters.

**Wrong: dimensionality alone.** Images are far higher-dimensional than odour receptor vectors — hundreds of thousands to millions of pixels against a thousand receptor types — and machine learning handles them. Raw dimensionality has not been a barrier to engineered sensing for a long time. Whatever is hard about odour, "there are a lot of numbers" is not it, and the course's prose leans on dimensionality more than the evidence supports. The modality-space figure says the same thing from the other side: dimensionality against theory maturity is a weaker correlation than the disorder axis it is usually contrasted with.

**Right, and specifically: no metric means no architectural prior.** This is the honest concession, and it is the best non-dataset explanation in this section. Convolutional architectures work because images have a metric: nearby pixels are related, the same feature is worth detecting everywhere, and weight sharing is therefore a correct prior that reduces the sample complexity enormously. Audio has the same property along time and, usably, along frequency. Odour has neither. There is no "nearby receptor", no translation to be invariant to, and therefore no prior of that kind to build in. A learner facing odour has to learn the relational structure from data instead of getting it free from the architecture — which raises the data requirement rather than lowering it. §12.1's audit of metric-dependent motifs has a direct engineering consequence, and this is it.

Note carefully what that concession does and does not do to the module's argument. It is a reason odour is genuinely harder. It is *also* a reason the dataset requirement is larger, not smaller, which makes it a partial ally rather than a pure rival. The two accounts are not exclusive and the honest reading is that they compound.

**What the engineering evidence does rule out**, and this is worth stating precisely because it is easy to overclaim: engineered systems face none of biology's constraints and stall in the same place, so the *biological-constraint* versions of "olfaction is harder" — slow receptors, no map, two synapses to cortex, adult neurogenesis, metabolic budget — cannot be the whole explanation of the theoretical gap. That is a real elimination. It leaves the *computational* versions untouched, and the metric argument above is a computational version. The module's brief slogan, that machine failure is evidence against olfaction being intrinsically harder, is too strong as stated; the defensible version is that it is evidence against the biological versions of that story.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "\"Odour is high-dimensional, which is why machine olfaction stalled while machine vision flew.\" Diagnose this claim as precisely as you can.",
  "options": [
    {
      "text": "It is wrong, and the correct version inverts its consequence: images are far higher-dimensional and yield, so dimensionality is not the barrier. What odour lacks is a *metric*, hence no convolutional prior, hence a higher data requirement — which makes intrinsic difficulty and the dataset account compound rather than compete.",
      "correct": true,
      "feedback": "This is the full diagnosis and the second clause is the part that does work. Hundreds of thousands of pixels against a thousand receptor types: raw dimensionality has not been a barrier to engineered sensing for a long time. Convolution works because images have a metric — nearby pixels are related, the same feature is worth detecting everywhere — so weight sharing is a correct prior that cuts sample complexity enormously. Odour has no 'nearby receptor' and no translation to be invariant to, so a learner must acquire the relational structure from data. The intrinsic-difficulty rival therefore *raises* the dataset requirement, and §13.6 flags that the capstone had been treating the two as alternatives when they are additive."
    },
    {
      "text": "It is right, since a thousand receptor types generate a combinatorially vast space of mixtures that no corpus could cover.",
      "correct": false,
      "feedback": "Correct under the assumption that coverage of the input space is what a corpus must provide. That assumption fails for the same reason it fails in vision: the space of possible images is unimaginably larger than any corpus, and the corpus works because natural inputs occupy a low-dimensional manifold within it. §13.5's box argues the same for odour scenes — mixtures generated by a modest number of sources with correlated emission profiles, so effective dimensionality is probably tens rather than a thousand."
    },
    {
      "text": "It is wrong because dimensionality is a property of the receptor array rather than of the stimulus, and the array's dimensionality is a design choice.",
      "correct": false,
      "feedback": "Correct under the assumption that the claim is about the sensor. It is a real distinction — §13.5 treats array diversity as a designable quantity, and the invertebrate literature makes the optimum precise [@litwinkumar2017]. But relocating the dimensionality does not dispose of the claim, and it misses the substantive error, which is that dimensionality of any kind is not what is binding."
    },
    {
      "text": "It is wrong because the real obstacle is that mixture responses do not superpose at the sensor [@shen2013].",
      "correct": false,
      "feedback": "Partly correct, and this is a genuine component of the intrinsic-difficulty rival — non-additivity appears in silicon through competitive adsorption and in biology through competitive binding, with the same consequence. But note where it bites: it obstructs the *linear* calculations, such as pushing a composition ensemble through receptors (§13.5's forward-model problem). It is not the reason the learning problem has a high sample complexity, which is the metric argument."
    }
  ]
}
</script>
</x-mcq>

### Rival 3 — commercial pull

The market for machine vision and speech recognition is enormous. The market for a general artificial nose is thin. Effort has differed by orders of magnitude for decades, in people, money, and compute. That alone predicts the observed pattern with no claim about the problem at all, which is what makes it hard to beat: it is an explanation that requires nothing to be true about odour.

Two things weaken it and neither kills it.

**It is silent on biology**, like the hardware account. Academic olfactory neuroscience is not a small field, is not obviously less well funded per investigator than auditory neuroscience, and has been at it for a long time. If effort explains the engineering gap, something else has to explain the theory gap, and the dataset account then covers both with one cause while this covers one with two.

**It is partly endogenous.** Pull is low in part *because* the technology does not work; a working artificial nose would have obvious applications in food, agriculture, security, environmental monitoring and medicine, and the thinness of the market is at least partly a consequence of the failure it is being used to explain. That makes it a loop rather than an exogenous cause, and loops cannot be adjudicated by observing which way round they run.

**What would isolate it:** nothing observational. This rival needs an intervention — fund the corpus at the scale vision's was funded and see what happens. That is the same experiment that isolates the dataset account, run from the other end, which is a hint that these two are less separable than they look.

### Rival 4 — ground truth is expensive

Labelling an image is a second or two of untrained human time. Ground-truthing an air sample requires an analytical instrument, an operator, consumables, and time; and, per §13.3's box, the sample cannot be stored, replayed, or shown to a second labeller. Annotation in vision is a marginal cost near zero and in olfaction it is not.

This one should be reclassified rather than argued with. **It is not a rival to the dataset account. It is the mechanism by which the dataset is missing.** The dataset account says the absence of a characterised input is what blocks both theory and engineering; this says why the input has not been characterised. They are the same story told at two levels, and treating them as competitors is a category error.

It does have one sting, and it is a serious one. If ground truth is intrinsically and permanently expensive, then the dataset account may be *correct and useless*: identifying the binding constraint does not help if the constraint cannot be relaxed. §13.5 takes that seriously and looks for the cheapest object that would do the job, which is not the same as the most complete one.

## The loop, and why "isolate the dataset account" is the wrong request

Laying the five out as competing hypotheses misrepresents their relationship. They form a cycle:

Unstable, non-standard sensors mean no corpus transfers between labs. No transferable corpus means no benchmark. No benchmark means competing methods cannot be adjudicated, so bad ones are not eliminated and progress is slow. Slow progress means no working product. No working product means thin commercial pull. Thin pull means nobody funds better sensors, or the expensive ground-truthing that would make a corpus, and round again.

Every arrow in that loop is defensible and the loop has no obvious entry point. Which is why the honest conclusion is not "the dataset account wins" but something more specific and more useful: **the dataset account is the only one of the five that covers both the engineering asymmetry and the biological one with a single cause, and it names the intervention that breaks the loop at the cheapest point.** That is a reason to act on it, not a reason to believe it to the exclusion of the others.

Stated as a credence: the dataset account is supported and not isolated. The engineering evidence raises it, mostly through the within-olfaction control that no rival predicts, and mostly by eliminating the specifically biological explanations of the theory gap. It does not eliminate hardware, it does not eliminate commercial pull, and it does not eliminate the metric-prior version of intrinsic difficulty — which is not even a rival so much as a compounding factor.

**What would isolate it**, in rough order of cost:

1. **Exploit the within-olfaction control harder.** It is free. Push the plume/chemical dissociation as far as it goes in both substrates and check whether the correlation between "ensemble measured" and "results exist" holds at finer grain — across sub-problems, not just modalities. If it does, hardware and pull are in trouble, since both are constant across the split.
2. **Look for the missing cells of the design.** The engineering comparison so far samples only the diagonal: good hardware with good corpora, bad hardware with none. The informative cells are the off-diagonal ones — a sensing domain with excellent, cheap, standardised instrumentation and strong commercial demand but no labelled corpus, and one with poor instrumentation and a good corpus. Whether such domains exist is a question a reader could settle in an afternoon, and it would do more for this argument than any amount of further reasoning.
3. **Build a corpus on today's imperfect hardware**, using composition as the interchange format so that it transfers. If performance follows despite the sensors, the dataset was binding and hardware was not. This is §13.5.
4. **Deliver a stable standardised array with no new corpus.** If the field moves, hardware was binding.
5. **Hand a learner the composition vector directly**, bypassing sensors and superposition entirely — which is possible now, at small scale, from GC-MS. If it still cannot learn source identity, the difficulty is intrinsic and neither datasets nor sensors are the story.

Note that (5) is cheap, is not being done at scale, and is close to decisive between the dataset account and intrinsic difficulty. It is the best-value experiment in this module.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The objection that cuts the other way, and it is the sharpest one</div>
Suppose the corpus gets built and a large network trained on it identifies odours superbly. What would that establish about the questions this course has been asking?

Possibly nothing. It would be an engineering success with no normative content: no derived coordinates for odour space, no account of why receptor tuning breadth is what it is, no statement of what the bulb computes, nothing that answers a single item in §14.7. Machine vision is the cautionary case — the labelled corpus bought recognition, and vision's <em>normative theory</em> came from somewhere else entirely, from unlabelled natural image statistics measured decades earlier by people doing something different.

Which means the word "dataset" has been doing double duty throughout this module. §13.2's box states it formally: efficient-coding theory needs the marginal $p(x)$, and supervised engineering needs the conditional $p(y \mid x)$. These are different objects with different costs, and vision had both. The engineering evidence in this module is about the second, and the course's central claim is about the first.

<strong>So the parallel is weaker than it first looks, and the honest version is narrower:</strong> what olfaction is missing is the shared prerequisite of both — nobody has gone out and recorded, at scale and in a common format, what actually arrives at the sensor. Taking that step is necessary for both goods and sufficient for neither. §13.5 has to say which good it is buying, and the answer turns out to determine the design.
</x-callout>

## What the module has established by this point

Three things, stated at the strength the evidence supports rather than the strength the thesis would like.

**Established.** The asymmetry between olfaction and the other two classical modalities is not specifically biological. It reproduces in engineered systems that share none of biology's constraints, which subtracts every explanation appealing to receptor kinetics, wiring, deadlines, metabolism, development or evolutionary history from being the whole story.

**Strongly supported.** The location of the difficulty is the input representation. In both substrates the failure is upstream — no agreed representation, no characterised ensemble, no ground-truth pairs — rather than in what happens afterwards. Machine olfaction has full access to every classifier and optimiser the successful domains used.

**Supported and not isolated.** That the missing input characterisation is the cause rather than a correlate. The within-olfaction control is the best evidence and no rival predicts it; sensor hardware, commercial pull, and the metric-prior form of intrinsic difficulty all remain live, mutually entangled, and in the last case probably additive rather than alternative.

§13.5 turns the supported part into a specification, on the principle that the fastest way to test whether the missing thing is binding is to go and make it.
