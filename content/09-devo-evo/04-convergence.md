---
id: m09.s04
title: Convergent solutions
lede: Insects and vertebrates built the same olfactory architecture out of non-homologous parts, 600 million years apart. This is the strongest normative argument available in olfaction, and the course has been leaning on it for eight modules without ever making it.
estimatedMinutes: 20
---

## The argument the course has been implying

Every time this course cites the fly antennal lobe to make a point about olfaction in general — divisive normalisation [@olsen2010], reliability and separability gains at the first synapse [@bhandawat2007], random convergence onto Kenyon cells [@caron2013], connection degree near the dimensionality optimum [@litwinkumar2017] — it is relying on an unstated premise. The premise is that the fly is telling us something about *olfaction*, not merely about flies.

That premise needs an argument, and the argument is available. It is the best one olfaction has.

**Insects and vertebrates independently arrived at the same olfactory architecture.** Both have large repertoires of broadly tuned chemoreceptors. Both express approximately one receptor per sensory neuron. Both route all neurons expressing a given receptor to a discrete, spatially stereotyped neuropil unit — a glomerulus — where they converge onto a small number of output cells. Both apply gain control at that stage. Both then project into a much larger population of sparsely active cells, with connectivity that is quasi-random rather than topographic: mushroom body Kenyon cells in insects, piriform pyramidal cells in vertebrates. Both split the output into a pathway serving learned identity and a pathway serving innate valence.

That is not a family resemblance. That is the same design, item by item.

<x-figure src="content/09-devo-evo/figures/convergence-ledger.js"
  caption="Read the top row first: the receptor proteins are not homologous, which is what licences everything below. Then apply both filters. Two rows fall to the 'too coarse' objection and two to the 'shared ancestry' objection, and seven shared features survive. That surviving set — not the unfiltered list — is what the convergence argument can actually spend.">
</x-figure>

## Why it is not shared inheritance

Everything depends on the two lineages having invented this separately, and here the evidence is unusually clean.

**The receptor proteins are not homologous.** Vertebrate odorant receptors are seven-transmembrane G-protein-coupled receptors [@buckaxel1991], part of the same superfamily as rhodopsin and the adrenergic receptors. Insect odorant receptors are not GPCRs at all. They are heteromeric ligand-gated ion channels, assembled from a variable ligand-binding subunit and a highly conserved co-receptor, and their membrane topology is *inverted* relative to GPCRs — the N-terminus is intracellular.

This is about as strong as a non-homology claim gets in molecular biology. It is not "these sequences have diverged"; it is "these are different kinds of protein doing the same job by different physics". One transduces by G-protein cascade and cyclic nucleotide-gated channels; the other by direct ionotropic gating.

**The last common ancestor was not doing this.** Bilaterian ancestry is roughly 600 million years back, and there is no reason to think that animal had a glomerular olfactory system with a thousand receptor types. Both lineages elaborated chemosensation independently, from an ancestor with, at most, a modest chemosensory capacity.

**The circuits are built from different developmental programs.** Insect and vertebrate brains are not homologous at the level of the structures involved. Mushroom body and piriform cortex are not versions of one ancestral structure; they arise from different neurogenic territories under different patterning genes.

So the shared architecture is independent invention. That is the fact that makes the argument possible.

## What convergence licenses

Now the disciplined part, because this is exactly the sort of argument that gets overspent.

**What it licenses is: a strong constraint exists.** If two lineages, building from different molecular parts, under different body plans, with different brains, arrive at the same architecture for the same problem, the most economical explanation is that the problem admits few good solutions. The design space is not flat. Something about high-dimensional chemical detection makes this architecture hard to avoid.

That is a genuine and useful conclusion. It converts the fly literature from "an interesting other system" into evidence about the general problem, which is what the course has been assuming all along.

**What it does not license is: this architecture is optimal.** Convergence tells you that a solution was found twice. It does not tell you it is the best solution, and it does not identify the objective it is best for. The most a convergence argument delivers is that the solution sits in a narrow basin. It says nothing about whether a better solution exists outside the basin, and it says nothing about *why* the basin is narrow — whether from coding demands, from developmental constraints, or from the physics of the receptors.

That last distinction is the important one, and §9.2 already supplied the competing account. Every one of the surviving convergent features has a developmental reading:

| Feature | Adaptive reading | Developmental reading (§9.2) |
|---|---|---|
| One receptor per neuron | a neuron's response must be attributable | stochastic choice with lockout is the only specifiable way to tile a large repertoire |
| Like-receptor convergence | pooling improves SNR before the deadline | it is how you build an addressable central array when no metric supplies one |
| Discrete glomeruli | discretisation supports downstream readout | self-organisation of like-labelled axons produces discreteness for free |
| Quasi-random expansion | random projection preserves distances without a metric | random is what you get when no rule specifies the wiring |

Both columns are plausible. Both would produce convergence, because both constraints apply to any lineage attempting this problem. **The convergence is evidence that a constraint is operating; it does not identify which constraint.** That is the honest version, and it is weaker than the version usually implied — but note that it is still substantially stronger than what the course had before, which was nothing.

<details class="x-deeper">
<summary>Convergence as evidence: what the inference actually is, formally</summary>

The inference has the shape of a likelihood ratio. Let $A$ be the observed architecture and $H_c$ the hypothesis that the problem strongly constrains the solution. Two lineages independently producing $A$ has probability approximately $p^2$ under a null in which each lineage samples the design space in a way unconstrained by the problem, where $p$ is the probability of hitting $A$ by chance. Under $H_c$ it has probability close to one.

The evidential force therefore scales as $1/p^2$, and everything depends on how small $p$ is — which is to say, on **how specifically you describe $A$**. Describe it as "hierarchical processing of chemical input" and $p$ is near one: the evidence vanishes. Describe it as "one receptor per neuron, like-receptor convergence onto discrete glomeruli, quasi-random expansion into a sparse layer at a connection degree near the dimensionality optimum" and $p$ is small.

This is why the figure grades every row for specificity, and why the "too coarse to be informative" objection is not pedantry but the heart of the matter. The temptation in every convergence argument is to describe the shared feature at whatever level makes the two systems match, and that level is chosen after seeing both systems — which is the same post-hoc failure §0.2 was written to prevent, transplanted into comparative biology.

The discipline: **state the shared feature at a level of description precise enough that either system could have failed to have it.** Then ask whether it does.

Two further complications the ratio hides. First, $p^2$ assumes independence, and the lineages are not independent in every respect — they share a common neural toolkit (§below). Second, $p$ is not observable; we have no way to sample the space of possible olfactory systems. So the argument is an intuition pump with a formal skeleton, not a computation. It should be reported that way.

</details>

## The three alternative explanations, weighed

Convergence arguments fail in three characteristic ways. Each applies here to some degree, and the module is only worth writing if it says how much.

### Shared ancestral constraint at a deeper level

The two lineages are not independent draws. They share a nervous system built from neurons that spike, synapses that are excitatory or inhibitory, and a developmental toolkit of transcription factors and axon guidance molecules that predates the split. If that shared toolkit makes some architectures easy and others impossible, then both lineages arriving at the same one may reflect shared inheritance at the level of *building materials* rather than convergence on a solution.

**How much survives.** This objection has real force for the generic features and little for the specific ones. Divisive normalisation appears in visual, auditory and olfactory circuits in both lineages; a shared inhibitory-interneuron toolkit that produces normalisation whenever you build a circuit is entirely plausible, so the olfactory instance carries little weight. Sparse coding is the same. This is why the figure's "shared ancestry" filter removes exactly those two rows.

But the receptor-level features are not toolkit features. There is no shared inhibitory motif that produces "express exactly one member of a large receptor family per cell". That is a lineage-specific regulatory invention in both cases, implemented by different mechanisms, and the shared-toolkit objection does not reach it.

**Verdict: removes the generic rows, leaves the peripheral architecture intact.**

### Similar physics forcing similar transduction

Chemical detection has physical requirements that any system must meet. Odorant molecules arrive in small numbers, bind stochastically, and must be discriminated by differential affinity across a set of binding sites. Perhaps large repertoires of broadly tuned receptors are forced by the chemistry rather than chosen by the coding problem: broad tuning is what you get when you build binding pockets that are not exquisitely engineered, and a large repertoire is what you need if each pocket is imprecise.

**How much survives.** This is the strongest of the three objections for the *peripheral* rows, and it should be conceded. Broad tuning is very plausibly a consequence of the difficulty of building specific binding pockets for arbitrary small molecules; the immune system solves a related problem with a completely different strategy, but at enormous cost. Repertoire size may follow: with imprecise pockets you need many of them.

But the objection does not reach past the receptor. Nothing about binding physics predicts that like-receptor neurons should converge onto a discrete glomerulus, or that the second stage should be a large sparse layer with random connectivity. Those are circuit-architectural facts and the physics of ligand binding is silent about them.

**Verdict: substantially explains broad tuning and possibly repertoire size; leaves the circuit architecture untouched.** Which is convenient, because the circuit architecture is what the course cares about.

### The description is too coarse

The most corrosive objection, and the one to take most seriously because it is invisible from the inside. "Both expand into a large sparse layer" is true, but the layers differ by three orders of magnitude in cell number — about two thousand Kenyon cells against roughly a million piriform neurons. "Both converge onto glomeruli" is true, but the convergence ratios differ by more than an order of magnitude. If the shared description is coarse enough to accommodate systems that differ that much, how constraining is the constraint it reveals?

**How much survives.** This one cuts, but it also cuts in an interesting direction. Take convergence ratio. If convergence existed purely for SNR, you would expect the ratio to be set by the noise level and the deadline, and it is hard to see why those should differ twenty-fold between a fly and a mouse. That the *presence* of convergence is conserved while its *magnitude* varies by an order of magnitude is evidence that convergence is not primarily an SNR device — which is exactly what §9.2 argued on independent grounds. The coarseness objection, pushed, turns into a discriminating observation.

The same move works for the expansion layer. What is conserved is not the size but the *ratio structure*: a small number of input channels expanded into a much larger, sparsely active population with unstructured connectivity. That is the feature the theory predicts [@litwinkumar2017], and it is conserved at the level the theory speaks about.

**Verdict: the objection is right that the shared description is coarse in absolute terms, and wrong that it is uninformative — because the theory's predictions are also about ratios rather than absolutes.** But this defence has to be earned row by row and cannot be assumed.

<x-free-response>
<script type="application/json">
{
  "id": "m09.s04.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Apply the specificity discipline to a case the section does not cover. Someone proposes adding a row to the convergence ledger: \"both lineages sample the chemical world rhythmically — insects flick their antennae, mammals sniff.\" Decide whether the row survives, and in doing so state the general procedure for grading a candidate convergent feature.",
  "modelAnswer": "**The verdict: the row does not survive as stated, and it is instructive to see why it can be rescued only by making it false.**\n\n**Run the three filters.**\n\n*Too coarse.* 'Samples rhythmically' has a probability near one under any null. Almost every animal that must transport a fluid across a chemosensor moves it periodically, because that is what transport requires — and the two mechanisms are not the same mechanism. Antennal flicking is a limb movement that refreshes the boundary layer around a static sensillum; sniffing is a respiratory manoeuvre that drives bulk flow across a mucosal sheet, on a different timescale, driven by a different motor system. Described at the level where both have the feature, $p$ is high and the evidential force $1/p^2$ vanishes.\n\n*Shared toolkit.* Rhythmic motor patterns are produced by central pattern generators, which predate the split and appear in locomotion, feeding and ventilation in both lineages. A shared oscillator toolkit that produces rhythm whenever a movement must be repeated is entirely plausible, so the olfactory instance carries no special weight — the same objection that removes divisive normalisation and sparse coding from the ledger.\n\n*Physics.* Chemical sampling from a fluid requires renewing the fluid at the sensor. Both animals are subject to that constraint whatever their circuits do. The physics substantially explains the feature, as it substantially explains broad tuning.\n\n**All three objections bite, which is unusual, and the row should be filtered.**\n\n**The rescue attempt, and why it fails honestly.** One could restate the row specifically: 'sampling rate is modulated by current posterior uncertainty about the source.' That is specific enough that either lineage could fail to have it — precisely the discipline §9.4 demands. But now the row is not established: for mammals the evidence is that sniff rate rises during active search, which is consistent with arousal and has not been separated from it (§8.3 proposes the experiment), and the antennal-flicking version is weaker still. **So the specific version is a claim nobody has demonstrated in either lineage, and the demonstrated version is too coarse to constrain anything.** Asserting the row would be choosing the level of description that makes the systems match, after seeing both — the exact failure the specificity rule exists to prevent.\n\n**The general procedure, stated compactly.**\n\n1. State the feature at a level of description at which either lineage could observably have failed to have it. Fix that level *before* checking whether they do.\n2. Ask whether a shared neural or developmental toolkit predates the split and would produce the feature in any circuit. If so, the feature is evidence about circuits, not about chemistry.\n3. Ask whether physics or chemistry forces the feature independently of any coding argument.\n4. If it survives all three, ask what varies across the lineages. Conservation of the feature's *presence* alongside large variation in its *magnitude* is itself informative — it argues against whichever account predicts that the magnitude is set by a constraint that does not differ between the species. That is the move that turns the convergence-ratio disparity into evidence against the SNR reading.\n\n**The reason the procedure is worth internalising:** convergence arguments are cheap to make and expensive to make well, and the whole evidential force sits in step 1. Nothing else in this module has that property.",
  "rubric": [
    "Judges the row as filtered rather than surviving",
    "Applies the too-coarse objection with a real disanalogy between flicking and sniffing, not just an assertion of coarseness",
    "Invokes the shared-toolkit objection via central pattern generators predating the split",
    "Notes that fluid renewal at the sensor is forced by transport physics",
    "States the discipline: fix the level of description before checking, precisely enough that either system could have failed",
    "Bonus: shows that the specific rescued version is undemonstrated in both lineages, so the rescue trades coarseness for absence of evidence",
    "Bonus: notes that conserved presence with varying magnitude is itself a discriminator between accounts"
  ]
}
</script>
</x-free-response>

## What is left

After all three objections, here is the honest ledger.

**Strongly supported.** The circuit architecture — one receptor per neuron, like-receptor convergence onto discrete glomeruli, expansion into a large sparse layer with quasi-random connectivity, and a valence/identity split — was arrived at twice, independently, from non-homologous parts. Some constraint forces it. Given the two candidate constraints on the table, and given that the convergence-ratio and layer-size differences argue against the SNR reading, **the developmental-specifiability constraint of §9.2 is the better-supported account of why**, though the case is not closed.

**Explained away.** Broad tuning and possibly repertoire magnitude, by the physics of ligand binding. Divisive normalisation and sparse coding, by a shared neural toolkit. Hierarchy and sampling rhythms, by being described too coarsely to constrain anything.

**Not licensed at all.** Any claim that the architecture is optimal. Convergence identifies a narrow basin; it does not evaluate what is outside it, and it does not name the objective. If you want optimality, you have to do the calculation — measure the ensemble, state the objective, derive, compare — and that route runs into criterion one all over again.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The upgrade this gives the fly literature</div>
Before this section, the course's use of <em>Drosophila</em> results rested on an assumption nobody stated: that the fly is a model of olfaction rather than a model of flies.

<strong>The convergence ledger converts that assumption into an argument with a stated scope.</strong> For the seven surviving rows, a result in the fly is evidence about the general problem, because the fly and the mouse solved that problem separately and got the same answer. For the filtered rows — normalisation, sparsity, hierarchy — a fly result is evidence about circuits in general and carries no special olfactory content.

That is a usable rule. When you read a fly olfaction paper, ask which row it is on. §9.6 hands the capstone the specific version: the mushroom-body connection-degree result [@litwinkumar2017] sits on a surviving row, which is why its piriform analogue is worth testing and why a negative result there would be genuinely surprising rather than merely a species difference.
</x-callout>

## What would refute the argument

Three observations would damage it, and none has been made.

**A third independent lineage that solved the problem differently.** Molluscs and crustaceans have elaborate chemosensory systems, and the crustacean olfactory lobe has a glomerular organisation, which supports the argument. A well-characterised lineage with a large chemoreceptor repertoire and *no* glomerular convergence would be strong evidence that the basin is not narrow after all. Nematodes are a partial case worth taking seriously — *C. elegans* has an enormous chemoreceptor repertoire packed into about a dozen sensory neurons, with several receptors per neuron and no glomeruli at all. That is a genuinely different architecture, and the standard explanation is that with 302 neurons the design constraints are entirely different. It is also, uncomfortably, exactly the kind of after-the-fact rescue §9.1 warned about.

**Demonstration that one of the "independent" features is homologous after all.** If the glomerular organisation turned out to derive from a shared ancestral chemosensory structure, the strongest row would collapse into inheritance.

**A working artificial system with a different architecture that performs better on the same problem.** This is the cleanest possible test and it is available now, without any biology: train networks to identify and localise chemical sources under realistic mixture and plume statistics, without imposing an architecture, and ask whether the convergent design emerges. If a quite different architecture wins comfortably, the "narrow basin" claim is in trouble. If the biological design keeps appearing, the claim is strengthened in a way no amount of comparative anatomy could achieve — because you would have sampled the design space rather than observed two draws from it.

That last one is the experiment this section most wants done, and it is blocked by the same thing everything else is blocked by: without a measured chemical ensemble, you do not know what statistics to train against [@krishnamurthy2022]. The convergence argument is currently the best evidence olfaction has *because* the calculation that would supersede it cannot be run.

<x-mcq>
<script type="application/json">
{
  "id": "m09.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Insects and vertebrates arrived at the same olfactory architecture from non-homologous receptor proteins, 600 My apart. A reviewer writes: \"Independent convergence on a design is the strongest evidence available that the design is optimal.\" What is wrong with that, stated precisely?",
  "options": [
    {
      "text": "Convergence establishes that the reachable design space contains few good solutions — a narrow basin — but it neither evaluates what lies outside the basin nor names the objective the design is supposed to be good for.",
      "correct": true,
      "feedback": "Both halves matter and the second is the one usually dropped. Optimality is a claim relative to a stated objective and stated constraints; convergence supplies neither, so 'optimal' has no argument place filled. And two draws from a space tell you the draws landed together, not that they landed at the maximum — the two lineages could share a constraint that excludes better designs from both. Which is exactly the live alternative: §9.2's specifiability constraint would produce convergence without any optimality at all."
    },
    {
      "text": "The two lineages are not independent draws, since they share a neural and developmental toolkit that predates the split.",
      "correct": false,
      "feedback": "Correct under the assumption that the flaw is in the independence premise, and this is a genuine objection that the section takes seriously — it is what removes divisive normalisation and sparse coding from the ledger. But it does not reach the receptor-level rows: no shared inhibitory motif produces 'express exactly one member of a large receptor family per cell'. So the objection reduces the number of usable rows and leaves the reviewer's inference structurally unfixed on the rows that survive."
    },
    {
      "text": "The shared description is too coarse — the sparse layers differ by three orders of magnitude in cell number and the convergence ratios by more than one.",
      "correct": false,
      "feedback": "Correct under the assumption that the flaw is in how the shared feature is described, and this is the most corrosive of the three objections in general. But the section shows it cuts in a more interesting direction here: conserved presence with varying magnitude is evidence *against* the SNR reading of convergence, and the theory's own predictions are about ratio structure rather than absolutes [@litwinkumar2017]. It damages some rows and sharpens others. It does not touch the logical gap between 'converged' and 'optimal', which would remain even if the description were perfectly specific."
    },
    {
      "text": "Nothing is wrong in principle; the inference is valid but the sample size of two is too small to support it statistically.",
      "correct": false,
      "feedback": "Correct under the assumption that this is an estimation problem awaiting more lineages, which is a natural reading of a likelihood ratio scaling as $1/p^2$ — and more independent lineages would indeed strengthen the constraint claim. But no number of draws converts 'this design keeps being found' into 'this design is best', because you never sample what was not reached. That is why the section's preferred test is computational rather than comparative: training networks without imposing an architecture samples the design space instead of observing draws from it."
    }
  ]
}
</script>
</x-mcq>
