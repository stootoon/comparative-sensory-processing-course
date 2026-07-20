---
id: m13.s04
title: The same asymmetry, outside biology
lede: The engineering record read against every candidate explanation of olfaction's missing theory, each stated at full strength — and no verdict, because the record does not supply one. What it supplies is a subtraction, one dissociation nothing else predicts cleanly, and a loop.
estimatedMinutes: 30
---

One of the candidates on the table — (a), the unmeasured ensemble — rests in the biological material on a correlation across ten modalities between whether the input ensemble was measured and how mature the normative theory is. That correlation is very strong. It is also built on nine hand-assigned ordinal scores, assigned by people who had a view about the answer, over modalities that are not independent samples — they are all senses, in animals, built by the same evolutionary process, studied by overlapping communities with shared methods and shared fashions. The figure's own caption says as much.

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="The biological evidence this module reads from outside. Nine points, ordinal scores, one kingdom, and the people making the argument assigned the scores — a set of vulnerabilities the figure states about itself. Switch the axes to check the competing accounts and note that they are weaker but not absent. What follows is not another point on this plot: it is a second dataset with a different sampling frame, in which the ordering of events is documented rather than reconstructed, and in which none of the biological explanations for the outlier are even available.">
</x-figure>

Three objections to that plot deserve answers rather than dismissal.

**The scoring is subjective.** "Maturity of normative theory" and "is the ensemble measured" are judgements. They were made by people who already believed the conclusion, and the difference between a 3 and a 6 is not defensible to a sceptic. This is not fatal — the extreme cases are not in dispute, and the correlation does not hinge on the middle of the range — but it is real.

**The modalities are not independent.** Vision and audition share an evolutionary substrate, a set of investigators, a methodological culture, and in large part a theoretical vocabulary. Efficient coding arrived in vision and was then applied to audition by people who had read the vision literature. Two correlated successes are not two pieces of evidence.

**A third variable is available and plausible.** Both axes could track tractability, or how long a field has had good tools. Easy problems get measured ensembles *and* good theories, hard problems get neither, and the correlation is a consequence rather than a cause. The figure's caption concedes this and rests the causal reading on the historical ordering — the ensemble was measured first, by people not chasing the theory.

Progress on any of these needs a second dataset with a different sampling frame, different causes, and preferably documented ordering. That is what artificial sensing supplies — for every candidate at once, which is both its value and its limitation.

## The comparison, stated plainly

Machine vision and machine audition succeeded. Machine olfaction did not. Both successes were preceded by large characterised input corpora; the failure was not, and never has been. The stall is at the input representation rather than downstream, and it persists in systems with no metabolism, no evolutionary history, no development, no anatomy, no sensory deadline, and no obligation to be made of cells.

The same asymmetry, in the same direction, between the same modalities, with an entirely disjoint set of *biological* causes available — and, as the rest of this section shows, most of the non-biological ones still available.

It is worth being clear about which of the three objections to the biological plot this second dataset answers.

It answers the second cleanly. The engineering histories are not a resampling of the biological ones. They involved different people, different institutions, different incentives, and different timescales; nobody built a labelled image corpus because Atick and Redlich had derived a retinal filter [@atick1992]. Whatever non-independence contaminates the nine biological points does not contaminate this.

It answers the third partially and by the same route the caption used, but with better evidence. In engineering, the ordering is documented rather than inferred: the corpora were assembled, publicly, before the methods that exploited them existed, and the field's own contemporaneous expectations about what would work are on the record and were wrong. A tractability story has to explain why the tractable field's corpus arrived years before its results and was built by people who did not know what would use it.

It does not answer the first at all. If anything the engineering case is scored more crudely than the biological one — "succeeded" and "did not succeed" is a two-level ordinal variable over three domains. What it offers instead is that the extreme cases are not in dispute by anyone, and that the disagreement, if there is one, will be about causes rather than about the pattern.

## The within-olfaction control

The single most useful piece of evidence in this module is not the cross-modality comparison. It is that the dissociation reappears *inside* olfaction, in both substrates, with the animal and the anatomy and the chemistry held fixed.

Olfaction's chemical ensemble is unmeasured and its temporal ensemble is measured. Turbulent odour transport has been characterised, is analytically tractable, and supports quantitative work [@celani2014; @tootoonian2025], and §3.11 notes that this is precisely where olfactory normative theory has traction — the tractable problems are temporal and the stalled one is chemical.

Now look at the engineering. Odour source localisation from intermittent plume encounters is a working area with real algorithms and robots that do it: search strategies that exploit the statistics of intermittent detections rather than following a gradient, of which infotaxis is the cleanest formulation [@vergassola2007], and which behave sensibly precisely because the transport statistics they assume are the measured ones. Meanwhile odour *identification* in the open world does not work at all.

So within a single modality, the sub-problem whose input statistics were characterised has both a normative theory and working machines, and the sub-problem whose statistics were not characterised has neither. The hardware is the same hardware. The dimensionality is the same dimensionality. The commercial pull is, if anything, larger on the identification side.

This is the observation in the module with the most discriminating power, and it should be stated at full strength: **of the candidates below, only two predict this split at all.** Sensor hardware, commercial pull, and dimensionality are all constant across it and predict olfaction failing uniformly. Candidate (a) predicts it exactly. Candidate (b) predicts it too, and by a route worth noticing — the plume problem *has* a metric, namely time, and the chemical problem does not, so the absent-prior story fits the split as neatly as the unmeasured-ensemble story does. Ground-truth cost differs across the split in the convenient direction and so scores a partial hit.

Two candidates surviving where three fail is real progress and is not a verdict. It is also worth registering that the two survivors are not independent: a problem with a metric is a problem whose ensemble is cheap to characterise, which is part of why the plume ensemble got characterised.

That said, this observation is worth more than the cross-modality comparison it is embedded in, because it is a within-subject design and the cross-modality one is not.

<x-matrix>
<script type="application/json">
{
  "id": "m13.s04.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill in the within-olfaction control, which is the module's most discriminating single observation. Two sub-problems of one modality, in one animal, on one set of sensors. Answer yes or no in each cell, then read the note — the point is not the six answers but which candidate explanations can and cannot reproduce the pattern.",
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
  "modelAnswerNote": "The columns agree on most of what a candidate explanation could appeal to, which is what makes the design useful.\n\nTurbulent transport statistics have been characterised and are analytically tractable [@celani2014; @tootoonian2025], and that is the strand with both normative traction and robots that work — search strategies exploiting the statistics of intermittent detections rather than following a gradient, of which infotaxis is the cleanest [@vergassola2007]. Chemical identity has an unmeasured ensemble, no normative theory, and no open-world machine.\n\nNow apply the candidates one at a time. **Sensor hardware** is constant across the split — the same drifting cross-sensitive array serves both — so it predicts uniform failure and does not fit. **Commercial pull and field size** are, if anything, larger on the identification side, so they predict the split backwards. **Raw dimensionality** is identical across the columns.\n\nTwo candidates do fit. **The unmeasured ensemble** predicts it exactly: the characterised column has results and the uncharacterised one does not. **The missing metric** predicts it too, and this is the answer most readers miss — the plume problem has a metric, namely time, and the chemical problem has none, so the absent-architectural-prior story reproduces the same split by a completely different mechanism. **Ground-truth cost** scores a partial hit: plume localisation has free exact ground truth because the experimenter placed the source, which is also why §13.5 nominates it as the first benchmark.\n\nThe honest reading is therefore that this control eliminates three candidates and leaves two standing, entangled with each other — a problem with a metric being, unsurprisingly, a problem whose ensemble is cheap to measure. That is worth more than the cross-modality comparison it is embedded in, and it is why §13.6's first recommendation is to push it to finer grain across sub-problems: it is free, and it is the most discriminating thing in the module."
}
</script>
</x-matrix>

## The candidates, at full strength

Now the part that determines what the comparison is worth. Five explanations predict machine olfaction stalling while machine vision flies, and most of them are good. Each is stated below at its strongest rather than at its most refutable, in the same terms and with the same closing question — what would isolate it — because the reader is meant to be weighing them rather than watching one of them win.

<x-figure src="content/13-artificial/figures/rival-explanations.js"
  caption="Read the two middle columns before the row labels. Four of the five explain the engineering gap perfectly well, which is why the engineering gap alone settles nothing. The second column separates them further: hardware and commercial pull have nothing to say about why olfactory theory lagged in animals with excellent chemical sensors, whereas the unmeasured ensemble and the missing metric both cover the biological half as well. That narrows five to two, and it is parsimony rather than proof. Select each row for what would break it, and note the bottom row: ground-truth cost is not competing with the ensemble account, it is a proposed mechanism for it.">
</x-figure>

### Candidate 1 — the unmeasured ensemble

Nobody has characterised the distribution of chemical compositions that natural odour scenes deliver. Efficient-coding derivations consume that distribution at step one, and supervised learning consumes a labelled version of it, so a modality lacking it should have neither a normative theory nor a working machine — which is what is observed, in both substrates, with the stall in the predicted place.

**Its distinctive strength is coverage.** It is one of only two candidates that speaks to the biological half of the asymmetry as well as the engineering half, and it is the only one that also names a specific, buildable object whose construction would settle the matter (§13.5). It fits the within-olfaction control exactly.

**Its distinctive weakness is equivocation.** The word "dataset" covers two different objects — the marginal $p(x)$ that theory consumes and the conditional $p(y \mid x)$ that engineering consumes (§13.2's box) — and the engineering evidence assembled in this module is about the second while the claim about olfactory theory is about the first. That is not a small crack. The callout at the end of this section widens it.

**What would isolate it:** build the corpus on today's imperfect hardware and see whether performance follows despite the sensors. That is §13.5, and it is expensive.

### Candidate 2 — sensor hardware

Cameras and microphones are cheap, near-linear, stable over the life of the device, and standardised to the point that data collected on one transfers to a model trained on another. Chemical sensors drift, cross-react, poison, saturate, respond strongly to humidity and temperature, and have no interchange format. §13.3 argues the two failure modes are jointly worse than either alone, and the deeper box there makes the sharpest version of the objection: an odour corpus is not merely expensive, it is *not a redistributable object*, because the stimulus cannot be stored or replayed and a sensor response means nothing outside the device that produced it.

**This is sufficient on its own to explain the engineering gap.** Take the strongest form: even with unlimited money and unlimited annotators, you could not build the analogue of a large image corpus, because there is no format in which to publish one. If that is right, machine olfaction's failure is fully accounted for by instrumentation, and candidate 1 has the causal arrow the wrong way round — the ensemble is unmeasured *because* the instruments do not transfer.

**What it does not cover is biology.** Animals have superb chemical sensors — sensitive, fast enough to be interesting, and not obviously drift-limited over behavioural timescales — and olfactory theory lagged anyway. The hardware account is silent on the entire biological half of the asymmetry, which means it cannot be the shared cause even if it is the whole engineering cause.

**And it bounds the nose rather than the problem.** GC-MS establishes that composition is recoverable. A perfect, drift-free, standardised chemical sensor array delivered tomorrow would still leave you without examples of the mapping from composition to source identity, because that mapping is not in the chemistry. Hardware is necessary and demonstrably not sufficient.

**What would isolate it:** a stable, standardised, device-independent array, with no new corpus. If the field moves, hardware was binding. That experiment is expensive but not conceptually hard, and it is being run slowly by instrumentation improvement.

### Candidate 3 — the problem is intrinsically harder

Three separable claims travel under this heading, and §0.0 lists two of them as candidates in their own right: high dimensionality; no metric on the stimulus space; and mixtures that do not superpose at the sensor [@shen2013]. All three cover both substrates, since neither biology nor engineering can exploit structure that is not there — which puts this candidate on level terms with the first on the one dimension where the first has an advantage.

The three fare very differently and separating them matters.

**Wrong: dimensionality alone.** Images are far higher-dimensional than odour receptor vectors — hundreds of thousands to millions of pixels against a thousand receptor types — and machine learning handles them. Raw dimensionality has not been a barrier to engineered sensing for a long time. Whatever is hard about odour, "there are a lot of numbers" is not it, and the course's prose leans on dimensionality more than the evidence supports. The modality-space figure says the same thing from the other side: dimensionality against theory maturity is a weaker correlation than the disorder axis it is usually contrasted with.

**Right, and specifically: no metric means no architectural prior.** This is the strongest single claim anywhere in this section, stronger than anything offered on behalf of candidate 1. Convolutional architectures work because images have a metric: nearby pixels are related, the same feature is worth detecting everywhere, and weight sharing is therefore a correct prior that reduces the sample complexity enormously. Audio has the same property along time and, usably, along frequency. Odour has neither. There is no "nearby receptor", no translation to be invariant to, and therefore no prior of that kind to build in. A learner facing odour has to learn the relational structure from data instead of getting it free from the architecture — which raises the data requirement rather than lowering it. §12.1's audit of metric-dependent motifs has a direct engineering consequence, and this is it.

**Also right, and separately: mixtures do not superpose.** Competitive adsorption at a sensor surface and competitive binding at a receptor produce the same failure of additivity [@shen2013], and its consequence is specific — the linear machinery does not apply. The colour derivation worked because cone responses to mixed wavelengths add, which makes the map from spectrum to activation linear and PCA on the result well defined [@buchsbaum1983]. Odour has neither property, so the flagship calculation is blocked by the physics of transduction independently of how much data anyone collects (§13.5's fourth component). This is candidate (c) from §0.0's list, and the engineering record does nothing to weaken it, because the same non-additivity appears in silicon with entirely different chemistry.

Now the part that matters most, and it cuts against candidate 1 rather than for it. The absent-prior claim is not merely a *rival* reason odour is harder. **It is a reason the data requirement is larger, which means candidates 1 and 3 compound rather than compete.** If a learner facing odour must acquire from data the relational structure that a learner facing images gets free from its architecture, then the corpus that would suffice for odour is larger — perhaps by a great deal — than the corpus that sufficed for vision. Anyone reasoning "vision needed a corpus of size $N$, so olfaction needs one of size $N$" is making an error whose magnitude is set by the missing prior. The simple version of candidate 1, in which the only thing standing between olfaction and a theory is that nobody went out and measured, does not survive this. What survives is a compound account in which the measurement is necessary, the amount required is unknown, and the missing metric is what makes it unknown.

**What the engineering evidence does rule out**, and this is worth stating precisely because it is easy to overclaim: engineered systems face none of biology's constraints and stall in the same place, so the *biological-constraint* versions of "olfaction is harder" — slow receptors, no map, two synapses to cortex, adult neurogenesis, metabolic budget — cannot be the whole explanation of the theoretical gap. That is a real elimination. It leaves the *computational* versions untouched, and both the metric argument and the non-additivity argument are computational versions. Any slogan to the effect that machine failure is evidence against olfaction being intrinsically harder is too strong; the defensible version is that it is evidence against the biological versions of that story only.

**What would isolate it:** candidate 3 predicts that a learner handed exact, noise-free compositional input still cannot recover source identity at reasonable sample sizes, because the difficulty is in the structure of the problem rather than in the measurement of it. Candidate 1 predicts that it can. That experiment is affordable now and appears in the list below for exactly this reason.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "\"Odour is high-dimensional, which is why machine olfaction stalled while machine vision flew.\" Diagnose this claim as precisely as you can.",
  "options": [
    {
      "text": "It is wrong, and the correct version inverts its consequence: images are far higher-dimensional and yield, so dimensionality is not the barrier. What odour lacks is a *metric*, hence no convolutional prior, hence a higher data requirement — which makes the intrinsic-difficulty and unmeasured-ensemble candidates compound rather than compete.",
      "correct": true,
      "feedback": "This is the full diagnosis and the second clause is the part that does work. Hundreds of thousands of pixels against a thousand receptor types: raw dimensionality has not been a barrier to engineered sensing for a long time. Convolution works because images have a metric — nearby pixels are related, the same feature is worth detecting everywhere — so weight sharing is a correct prior that cuts sample complexity enormously. Odour has no 'nearby receptor' and no translation to be invariant to, so a learner must acquire the relational structure from data. The intrinsic-difficulty candidate therefore *raises* the dataset requirement rather than displacing it, which is why §13.4 declines to treat the two as alternatives — and why the simple form of the unmeasured-ensemble account, in which measuring is the only thing standing in the way, does not survive."
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
      "feedback": "Partly correct, and this is a genuine component of the intrinsic-difficulty candidate — indeed §0.0 lists it separately, and non-additivity appears in silicon through competitive adsorption and in biology through competitive binding, with the same consequence. But note where it bites: it obstructs the *linear* calculations, such as pushing a composition ensemble through receptors (§13.5's forward-model problem). It is not the reason the learning problem has a high sample complexity, which is the metric argument."
    }
  ]
}
</script>
</x-mcq>

### Candidate 4 — effort: commercial pull and field size

The market for machine vision and speech recognition is enormous. The market for a general artificial nose is thin. Effort has differed by orders of magnitude for decades, in people, money, and compute. That alone predicts the observed pattern with no claim about the problem at all, which is what makes it hard to beat: it is an explanation that requires nothing to be true about odour.

This is candidate (e) from §0.0's list, and two things weaken it while neither kills it.

**It is silent on biology**, like the hardware account. Academic olfactory neuroscience is not a small field, is not obviously less well funded per investigator than auditory neuroscience, and has been at it for a long time. If effort explains the engineering gap, something else has to explain the theory gap. Candidates 1 and 3 each cover both with one cause; this covers one with two. That is a parsimony argument and parsimony is a preference, not evidence — a two-cause world is perfectly possible, and the history of science contains many.

**It is partly endogenous.** Pull is low in part *because* the technology does not work; a working artificial nose would have obvious applications in food, agriculture, security, environmental monitoring and medicine, and the thinness of the market is at least partly a consequence of the failure it is being used to explain. That makes it a loop rather than an exogenous cause, and loops cannot be adjudicated by observing which way round they run.

**What would isolate it:** nothing observational. This candidate needs an intervention — fund the corpus at the scale vision's was funded and see what happens. That is the same experiment that isolates candidate 1, run from the other end, which is a hint that these two are less separable than they look.

### Candidate 5 — ground truth is expensive

Labelling an image is a second or two of untrained human time. Ground-truthing an air sample requires an analytical instrument, an operator, consumables, and time; and, per §13.3's box, the sample cannot be stored, replayed, or shown to a second labeller. Annotation in vision is a marginal cost near zero and in olfaction it is not.

This one should be reclassified rather than argued with. **It is not a competitor to candidate 1. It is a proposed mechanism for it.** Candidate 1 says the absence of a characterised input is what blocks both theory and engineering; this says why the input has not been characterised. They are the same story told at two levels, and treating them as competitors is a category error.

It does have one sting, and it is a serious one. If ground truth is intrinsically and permanently expensive, then candidate 1 may be *correct and useless*: identifying the binding constraint does not help if the constraint cannot be relaxed. §13.5 takes that seriously and looks for the cheapest object that would do the job, which is not the same as the most complete one.

## The loop, and why "which one is it" may be the wrong question

Laying the five out as competing hypotheses misrepresents their relationship. They form a cycle:

Unstable, non-standard sensors mean no corpus transfers between labs. No transferable corpus means no benchmark. No benchmark means competing methods cannot be adjudicated, so bad ones are not eliminated and progress is slow. Slow progress means no working product. No working product means thin commercial pull. Thin pull means nobody funds better sensors, or the expensive ground-truthing that would make a corpus, and round again. The missing metric sits alongside the loop rather than in it, raising the cost of every arrow that involves learning from data.

Every arrow in that loop is defensible and the loop has no obvious entry point. A causal question asked of a cycle — *which* of these is the cause — may simply be malformed, in the way that asking which blade of the scissors does the cutting is malformed. What is well posed is a different question: **where is the loop cheapest to break, and which intervention would be informative about the others?** Those have answers, and they are listed below. They are answers about what to do, not about what is true, and the two should not be confused.

So the section closes without a verdict, and that is the outcome the evidence supports rather than a failure of nerve. What the engineering record does supply is bounded and worth restating: it eliminates the specifically biological explanations of the theory gap; it locates the stall at the input representation in a substrate where that location could have come out otherwise; and it contains one within-subject dissociation that three of the five candidates cannot reproduce. It does not eliminate hardware, it does not eliminate effort, and it does not eliminate the metric-prior or non-additivity forms of intrinsic difficulty — which are not competitors to the ensemble account so much as compounding factors that change what the ensemble account would have to deliver.

**What would separate the survivors**, in rough order of cost:

1. **Exploit the within-olfaction control harder.** It is free. Push the plume/chemical dissociation as far as it goes in both substrates and check whether the correlation between "ensemble measured" and "results exist" holds at finer grain — across sub-problems, not just modalities. If it does, hardware and effort are in trouble, since both are constant across the split. It will not separate the ensemble account from the missing-metric account, because sub-problems that have a metric are exactly the sub-problems whose ensembles get measured.
2. **Look for the missing cells of the design.** The engineering comparison so far samples only the diagonal: good hardware with good corpora, bad hardware with none. The informative cells are the off-diagonal ones — a sensing domain with excellent, cheap, standardised instrumentation and strong commercial demand but no labelled corpus, and one with poor instrumentation and a good corpus. Whether such domains exist is a question a reader could settle in an afternoon, and it would do more for this argument than any amount of further reasoning.
3. **Build a corpus on today's imperfect hardware**, using composition as the interchange format so that it transfers. If performance follows despite the sensors, the dataset was binding and hardware was not. This is §13.5.
4. **Deliver a stable standardised array with no new corpus.** If the field moves, hardware was binding.
5. **Hand a learner the composition vector directly**, bypassing sensors and superposition entirely — which is possible now, at small scale, from GC-MS. If it still cannot learn source identity, the difficulty is intrinsic and neither datasets nor sensors are the story.

Note that (5) is cheap, is not being done at scale, and is the only item on the list that discriminates between the two candidates the rest of the section leaves standing. It is the best-value experiment in this module for that reason, and its value does not depend on which way it comes out.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The objection that cuts the other way, and it is the sharpest one</div>
Suppose the corpus gets built and a large network trained on it identifies odours superbly. What would that establish about the questions this course has been asking?

Possibly nothing. It would be an engineering success with no normative content: no derived coordinates for odour space, no account of why receptor tuning breadth is what it is, no statement of what the bulb computes, nothing that answers a single item in §14.7. Machine vision is the cautionary case — the labelled corpus bought recognition, and vision's <em>normative theory</em> came from somewhere else entirely, from unlabelled natural image statistics measured decades earlier by people doing something different.

Which means the word "dataset" has been doing double duty throughout this module. §13.2's box states it formally: efficient-coding theory needs the marginal $p(x)$, and supervised engineering needs the conditional $p(y \mid x)$. These are different objects with different costs, and vision had both. The engineering evidence in this module is about the second, while candidate 1's claim about olfactory <em>theory</em> is about the first. An argument that slides between them is equivocating, and this module has to be read with that in view.

<strong>So the parallel is weaker than it first looks, and the honest version is narrower:</strong> what olfaction is missing is the shared prerequisite of both — nobody has gone out and recorded, at scale and in a common format, what actually arrives at the sensor. Taking that step is necessary for both goods and sufficient for neither. §13.5 has to say which good it is buying, and the answer turns out to determine the design.
</x-callout>

## What the comparison has produced

Three things, stated at the strength the evidence supports.

**An elimination.** The asymmetry between olfaction and the other two classical modalities is not specifically biological. It reproduces in engineered systems that share none of biology's constraints, which subtracts every explanation appealing to receptor kinetics, wiring, deadlines, metabolism, development or evolutionary history from being the whole story. This is the module's most durable output, and note its form: it removes a class of answers without selecting among those that remain.

**A location.** The difficulty sits at the input representation. In both substrates the failure is upstream — no agreed representation, no characterised ensemble, no ground-truth pairs — rather than in what happens afterwards; machine olfaction has full access to every classifier and optimiser the successful domains used. This was risky and could have come out otherwise. It is also compatible with at least three of the five candidates, which is why locating the stall constrains without deciding.

**An open question with a shorter list.** Five candidate explanations went in. Effort and hardware account for the engineering gap and are silent on the biological one. Ground-truth cost turns out to be a mechanism for the ensemble account rather than a competitor to it. What is left is two entangled candidates — the unmeasured ensemble and the intrinsic difficulty of a problem with no metric and no superposition — which the within-olfaction control cannot separate, which predict the same location for the stall, and which compound rather than compete, since the missing metric is precisely what would make the required ensemble larger. The reader who wants a winner should notice that the evidence assembled here does not supply one, and should be suspicious of any summary that does.

§13.5 turns the actionable part into a specification, on the principle that the fastest way to find out whether a missing thing is binding is to go and make it — which is a reason to build the corpus that survives whichever of the two remaining candidates is right.
