---
id: m09.s02
title: What a genome can specify
lede: A genome cannot enumerate connections. It can only write rules — and a rule needs something to be a rule about. This is where the missing metric stops being a conceptual observation and starts costing the animal something.
estimatedMinutes: 18
---

## The budget argument

Start with the crude version, because the crude version is already decisive.

A mouse has on the order of 10⁷ neurons in its olfactory system and vastly more synapses. Its genome has about 2.6×10⁹ base pairs, or roughly 5×10⁹ bits if you are generous and count every base as freely specifiable, which it is not. The information available to specify a connectome is smaller than that by orders of magnitude once you subtract everything the genome is also doing.

So the genome does not store the wiring diagram. Nobody thinks it does. The interesting question is what it stores instead, and what the answer constrains.

It stores a **program**: a set of rules whose execution, in a particular physical and chemical environment, produces a circuit. The rules are cheap and the circuit is expensive, and the compression ratio is the whole trick. A rule like "extend towards increasing concentration of ligand L, stop when the gradient flattens" costs a few genes and specifies the position of an arbitrary number of axons. Its cost does not grow with the number of things it wires.

<x-figure src="content/09-devo-evo/figures/specification-cost.js"
  caption="The rule curve is flat in N and that is the entire argument: a gradient costs the same whether it positions ten axons or ten thousand. But a rule needs an ordering to be a rule about. Push the array size out to the olfactory range with the metric removed, and the middle curve — naming an arbitrary permutation — is the cheapest genetic option left, and it is not cheap.">
</x-figure>

Now make it quantitative in the only way that matters for this course, which is comparative. Consider specifying which peripheral channel projects to which central target.

**With an ordered array**, the map is a monotone function of position. Two orthogonal gradients in the periphery, two matching gradients in the target, and a rule that says "match your level" specifies a full retinotopic map with a handful of parameters. This is roughly what happens: graded ephrin and Eph expression across the retina and the tectum, with the map falling out of a matching rule. The specification cost is essentially independent of how many ganglion cells there are. Double the retina and you change nothing about the program.

**With an unordered array**, there is no position to be a function of. Receptor type 47 is not between type 46 and type 48 in any sense that a molecular gradient could read. The map from receptor identity to glomerular position is, as far as the genome is concerned, an arbitrary bijection on ~1100 elements, and naming an arbitrary bijection on 1100 elements costs about log₂(1100!) ≈ 10⁴ bits — not catastrophic in isolation, but it has to be *implemented*, not merely counted, and implementing it means 1100 distinct molecular labels with 1100 distinct matching partners, each of which has to be specified, expressed in the right cell, and kept from cross-reacting with the other 1099.

That is the cost. Not the raw information, which is affordable, but the requirement for a combinatorial labelling scheme with no compression available.

<details class="x-deeper">
<summary>Why the raw bit count understates the problem</summary>

The bit count treats specification as though the genome could write an arbitrary lookup table. It cannot. It has to realise the table in molecules, and molecular labelling schemes have their own combinatorics.

If you have $L$ label genes and each is either on or off, you can in principle distinguish $2^L$ cell types, so 11 genes suffice for 1100 receptor types. But that only works if the *downstream* reader can decode arbitrary binary codes, which requires the target to implement 1100 distinct decoders — you have moved the problem rather than solved it. Graded labels are what make the ordered case cheap: the reader is a single monotone matching rule, not a decoder bank.

The general statement: **the compressibility of a wiring specification is bounded by the compressibility of the map it has to realise.** An ordered map is a low-complexity function of position and compresses enormously. A permutation with no structure is incompressible almost by definition — that is what it means for the array to have no metric. §11.1's audit concluded that of the course's metric-dependent motifs, wiring economy is the one that survives intact, and this is the reason: it does not depend on a metric being *useful* for computation, only on there being one for the developmental program to exploit.

The interesting theoretical question, which nobody has posed cleanly, is whether the olfactory map is compressible *at all* — whether receptor sequence similarity, which does have a metric, predicts glomerular position well enough to serve as a wiring rule. There is a weak version of this in the literature and it is far from a complete account.

</details>

## What the constraint predicts, and what olfaction does

If the argument is right, olfaction faces a specification problem the other modalities do not, and should show signatures of having solved it some other way. It shows three.

**One: stochastic receptor choice with feedback.** Each olfactory sensory neuron expresses one receptor from the repertoire, apparently chosen probabilistically, and then a feedback signal from the expressed receptor suppresses expression of all the others. The genome does not specify which neuron expresses which receptor. It specifies a *process* that guarantees exactly one, and lets the assignment fall out.

This is precisely the move the budget argument predicts. Specifying the assignment cell-by-cell is impossible; specifying a stochastic-choice-plus-lockout mechanism costs one regulatory circuit. And it produces a statistically well-tiled array without ever naming a single cell. Note the two things this account explains together — one-receptor-per-neuron is usually explained by the coding requirement that a neuron's response be interpretable, and stochastic choice is usually explained separately or not at all. On the specifiability account they are one mechanism: the lockout is what makes the stochastic choice safe, and the stochastic choice is what makes the assignment specifiable.

**Two: convergence of like-receptor neurons onto glomeruli.** All neurons expressing one receptor project to one or two glomeruli, out of thousands of scattered cell bodies. The usual normative account is signal-to-noise: pooling ~1000 noisy receptor neurons before the first synapse improves the estimate of that receptor's activation, which matters because transduction is near shot-noise-limited and the deadline is ~200 ms [@uchida2003].

That account is probably right and is not what I want to displace. But notice what convergence also does. It converts an unordered *peripheral* array into an ordered *central* one — not ordered by chemistry, but ordered in the sense of having stable, addressable, spatially discrete units. Everything downstream can then be wired by position, using exactly the cheap rules the ordered modalities use. The glomerulus is the point where the specification problem gets solved once, at the periphery, so that no downstream circuit has to solve it again.

That reframing makes a prediction the SNR account does not: convergence should be present even where the SNR argument is weak. Insects are the test. A fly has on the order of 50 receptor neurons of a given type, not 1000, so the pooling gain is modest — and flies build glomeruli anyway, with the same one-receptor-per-neuron logic and the same convergence [@olsen2010]. That is not decisive, since 50-fold pooling is still worth having, but it points the right way and §9.4 develops it.

**Three: activity-dependent refinement of glomerular targeting.** Coarse targeting uses molecular cues, but the final sorting — one receptor type, one glomerulus, sharply bounded — depends on neural activity and on the receptor protein itself being present in the axon terminal. A map the genome cannot specify has to be sorted out by the system, and the only signal available for sorting is correlated activity among neurons expressing the same receptor.

This is the same argument as ocular dominance column formation, run on a system that has no alternative. In vision, activity refines a map that molecular gradients already got roughly right. In olfaction, there is no roughly-right map to refine, and activity is doing more of the work.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Where the missing metric actually costs you</div>
The course has stated eight times that the olfactory receptor array is unordered, and has used the fact mainly to explain why familiar motifs are absent — no surround, no map, no convolution, no interpolation (§3.4, §11.1). Those are absences.

<strong>This is the one place where the missing metric imposes a positive cost that the animal has to pay for.</strong> Vision, audition and touch get their maps for free from the sensor sheet, and get them specified for free by gradient rules. Olfaction gets neither, and has to build the ordering it needs — the glomerular array — by combining a stochastic choice mechanism, a molecular labelling scheme with no compression available, and an activity-dependent sorting process.

That is three mechanisms in place of one gradient, and each of them has consequences that §9.3 and the capstone have to live with.
</x-callout>

## The receptor-swap experiment may be uninterpretable

Import 11 in the capstone proposes the olfactory version of the taste receptor swap. In gustation the experiment is beautiful and decisive: express a bitter receptor in a sweet-detecting cell, and the animal finds the bitter ligand appetitive [@chandrashekar2006]. Behaviour follows the cell, not the ligand, which settles the labelled-line question in one stroke.

The olfactory analogue would be: change which receptor a given class of sensory neuron expresses, present the new receptor's ligand, and ask whether behaviour follows the *receptor* or the *glomerulus*. If it follows the glomerulus, glomerular identity is the meaningful unit and receptor identity is just how the glomerulus gets its input. If it follows the receptor, the receptor's identity carries the meaning wherever it goes.

The problem is the third signature above. **The receptor protein participates in axon targeting.** Change which receptor a neuron expresses and its axon may not go to the same glomerulus — it may go to the glomerulus appropriate to the new receptor, or to a novel location, or fail to coalesce cleanly at all. In that case the experiment has not swapped a receptor within a fixed circuit; it has changed the circuit, and "behaviour follows the receptor" becomes trivially true and uninformative, because the receptor took its wiring with it.

This is not a reason to abandon the experiment. It is a reason to design it around the confound, and there are three ways.

**Swap after targeting is complete.** Use inducible expression to change the receptor in adult animals whose glomerular map is already formed, and verify anatomically that the axons stay put. The interpretation then holds. Whether adult axons are stable enough for this is an empirical question with an ongoing complication — the epithelium is continuously replaced, so newly born neurons will target according to the new receptor even if existing ones do not.

**Verify the anatomy in every animal, and treat targeting as an outcome rather than an assumption.** The uninterpretable version of the experiment is the one where nobody looked. If some animals show preserved targeting and some show shifted targeting, the comparison between them is more informative than either alone.

**Decouple ligand-binding from targeting.** If the targeting-relevant properties of the receptor are separable from its ligand-binding pocket — and there is reason to think targeting depends on constitutive receptor activity rather than on odour-evoked activity — then a chimeric receptor with new binding specificity and old targeting behaviour is the clean reagent. This is a molecular problem rather than a conceptual one, which makes it the most promising route.

The general point generalises past this experiment. **In a system where the receptor determines the wiring, receptor manipulations are not clean perturbations of the code.** Any olfactory experiment that changes what a neuron expresses is potentially changing where it projects, and the developmental fact is what makes the coding experiment ambiguous. Gustation is spared this because taste receptor cells do not use their receptor to find their target — which is itself only possible because there are five of them and the wiring can be specified directly.

## What would refute this section

Held to the standard §9.1 set, here is what this account commits to.

**It predicts that lineages with small chemosensory repertoires do not build glomeruli.** If a chemosensory system with, say, twenty receptor types were found to build a full one-receptor-per-neuron convergent glomerular architecture, the specification argument would be in trouble, because twenty labels are cheap to specify directly. The vomeronasal system is a partial and awkward test — a distinct receptor family with its own targeting logic and considerably less convergence per glomerulus.

**It predicts that the degree of activity-dependence in map formation scales with repertoire size.** Species with larger repertoires should depend more heavily on activity to sort their maps, because they have less molecular specification available per channel. Nobody has measured this across species. It is a straightforward comparative experiment and it would be the strongest available test.

**It does not predict, and must not be read as predicting, that the glomerular architecture is optimal.** The argument is that it is *reachable and cheap*, which is a different claim. A system that could specify anything might well do something else. §9.4 is where the case for optimality has to be made, and it has to be made independently, or the two arguments become one circular one.

Finally, the honest caveat. The budget argument is qualitative. Nobody has computed the specification cost of a real olfactory wiring program in bits and compared it against a real genomic budget, and the numbers in the figure above are order-of-magnitude gestures. The argument survives because the *scaling* is what does the work — a rule is flat in N and a labelling scheme is not — and scaling arguments are robust to bad constants. But a quantitative version does not exist, and until it does this is a strong qualitative argument rather than a normative result in the sense §0.2 demands.
