---
id: m09.s05
title: Critical periods, plasticity, and adult neurogenesis
lede: The olfactory bulb replaces its interneurons for life, and no other sensory structure does. The best available explanation is that its input statistics never stop changing — an argument the course has made in passing four times and never tested.
estimatedMinutes: 16
---

## Two different things called plasticity

Sensory systems change on two developmental schedules that are easy to conflate and make opposite predictions.

**Critical periods** are windows during which experience sets a parameter that then stays set. Ocular dominance columns, tonotopic map refinement, the phonemic inventory of a first language. The logic is that some property of the world is stable across the animal's lifetime but unknown at birth — the interocular distance, the acoustics of the animal's own head — so the right strategy is to estimate it once, from early experience, and then stop paying the cost of remaining plastic. A critical period is an argument that the statistics are *stationary but initially unknown*.

**Lifelong plasticity** is the opposite argument. Keep changing because the world keeps changing. The cost is that you never consolidate and remain vulnerable to interference; the benefit is that you track a moving target.

Which one a system should implement is determined by the non-stationarity of its input, and this is a genuinely normative question with an answer that has a sign attached. That makes it, in principle, exactly the kind of claim §0.2 asks for.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Switch to the volatility view. Every modality's fastest statistics-re-tuning mechanism sits roughly where its input volatility predicts — except that olfaction, scored as the most volatile, adds a mechanism the others do not have at all: continuous replacement of coding units on a timescale of weeks. That is the outlier the section has to explain, and the volatility axis is the only explanation on offer.">
</x-figure>

## Where olfaction sits

Olfaction has critical periods, and they look ordinary. Early odour exposure shapes glomerular responses and bulbar circuitry, imprinting effects are well documented across species, and neonatal experience biases later preference. Nothing here distinguishes olfaction from vision.

What distinguishes olfaction is the second mechanism, at a depth no other sensory system matches.

**The receptor neurons are replaced throughout life.** Olfactory sensory neurons die and are regenerated from basal stem cells on a timescale of weeks. Each new neuron makes a stochastic receptor choice and must find its glomerulus, using the activity-dependent targeting of §9.2. So the peripheral array is being continuously rebuilt, and the map that connects it to the bulb is being continuously re-derived.

**The bulb receives new interneurons for life.** Granule cells and periglomerular cells are generated in the subventricular zone and migrate to the bulb in adulthood, in substantial numbers. Many die within weeks; survival is experience-dependent, and odour learning increases it.

Nothing comparable happens in visual, auditory, somatosensory, vestibular or proprioceptive systems. Taste receptor cells turn over — the one partial parallel, and worth holding onto — but the taste *circuit* does not receive new interneurons.

So the fact to explain is specific: **the first olfactory circuit continuously replaces its inhibitory interneurons, and no other first sensory circuit does.**

## The non-stationarity argument

Here is the best available account, stated as strongly as it can honestly be put.

The course has established that olfactory input statistics are non-stationary in a way no other modality's are (§3.2, and the datasheet row that says so in every module). An animal's chemical environment changes with season, diet, habitat, the arrival of unfamiliar species, and the appearance of odours that no ancestor encountered. There is no analogue in vision: the statistics of natural images are famously stable, with the same spectral falloff across scenes and centuries.

A representation optimised for one input distribution is wrong when the distribution moves. If the move is small, adaptation of gain suffices. If the move is large — new odours, new correlations, new relevance structure — then the *basis* is wrong, not just the gain, and fixing a basis requires changing which features the units encode.

Adding new interneurons is a mechanism for changing the basis. Granule cells shape the decorrelating and sparsifying transformation performed by the bulb [@friedrich2001; @koulakov2011]; a supply of new ones whose survival depends on whether they are useful is a search procedure over bases, with selection by experience. Continuous neurogenesis is what you build when the target keeps moving and you cannot pre-specify where it is going.

That is a coherent argument, it connects to a measured property of olfactory input, and it explains an otherwise anomalous fact. It is also, as things stand, untested.

<x-callout class="x-callout is-key">
<div class="x-callout-title">This is a story we currently cannot test</div>
Held against §0.2's five criteria, the non-stationarity account of adult neurogenesis fails on four of them.

<strong>Measured ensemble: no.</strong> The claim is that olfactory statistics are non-stationary and other modalities' are not. Nobody has measured the rate of change of natural odour statistics, so the central premise is asserted rather than measured — and it is asserted using the same absent ensemble that blocks everything else in the modality (§3.11).

<strong>Physical constraint: partial.</strong> There is a real cost to neurogenesis and a real benefit to a matched basis, but neither is quantified.

<strong>Risky quantitative prediction: no.</strong> The account predicts that neurogenesis exists. It predicts no rate, no cell number, no timescale, and no functional magnitude. A theory that predicts the existence of something already observed has made no risky prediction at all.

<strong>Confirmed against independent data: no.</strong> Blocking neurogenesis impairs some olfactory learning and discrimination tasks, which is consistent with the account — and equally consistent with neurogenesis serving learning capacity, memory clearance, or circuit maintenance, none of which invoke non-stationarity.

<strong>Few free parameters: not applicable</strong>, since there is no model with parameters.

It passes on plausibility and on connecting two independently motivated facts. That is worth something, and it is not a normative result. Saying so is more useful than repeating the story, because the next paragraph is where the story becomes testable.
</x-callout>

## How to make it falsifiable

The account fails because it predicts existence rather than magnitude. Every fix is a way of getting a number out of it.

**Prediction one: neurogenesis rate should scale with the volatility of the species' chemical environment.** This is the comparative test and it is the strongest. Species whose odour worlds change quickly — generalist foragers, seasonal migrants, animals with broad diets — should show higher rates of adult bulbar neurogenesis than specialists occupying stable chemical niches. Species that are chemical specialists on a single host should show the least. The alternative accounts do not predict this: if neurogenesis serves learning capacity, it should track how much odour learning the animal does, which is a different and separately measurable variable.

Note the design requirement. **Volatility and learning demand must be scored independently, before the neurogenesis rates are looked at**, or this becomes exactly the adaptationist exercise §9.1 warned about.

**Prediction two: manipulate volatility experimentally.** Rear animals in an environment where the odour-to-consequence mapping is periodically re-randomised, against controls in a stable mapping with matched total learning. The non-stationarity account predicts higher new-cell survival in the volatile group. The learning-capacity account predicts no difference, since total learning is matched. This is a within-species experiment, it is feasible, and to my knowledge the matched-learning control has not been run.

**Prediction three: the effect should be selective for basis change, not for learning per se.** If new granule cells are re-fitting the bulbar transformation to a shifted input distribution, then blocking neurogenesis should impair learning that requires new *discriminations* — odours that were previously indistinguishable becoming behaviourally distinct — more than it impairs learning that reassigns meaning to already-distinguishable odours. That is a sharp dissociation and it follows from the account rather than from the general observation that neurogenesis matters for olfactory learning.

**Prediction four: the timescale should match.** Newly generated granule cells take weeks to integrate. If the mechanism tracks non-stationarity, the environmental changes it is tracking should be on that timescale — seasonal, dietary, migratory — and not on the timescale of minutes or of years. This is nearly free to check against the volatility measurement in prediction one and it is a real risk, because if odour statistics turn out to change fastest on a timescale of hours, the mechanism is too slow to be the answer.

<details class="x-deeper">
<summary>Why the peripheral turnover may need no normative explanation at all</summary>

The two neurogenic phenomena should be argued separately, and the peripheral one is much easier.

Olfactory sensory neurons sit in an epithelium exposed directly to the outside world — to desiccation, pathogens, and inhaled toxicants — with their cilia in the mucus. They are the only neurons in the body whose membranes contact the environment. Under those conditions they are damaged and killed at a high rate, and a stem cell population that replaces them is the obvious response.

Notice the form of that explanation. It is not a coding argument at all; it is a maintenance argument, and it makes a completely different prediction — that turnover should track environmental insult rather than statistical volatility. It is testable in the obvious way: rear animals in filtered air.

Taste is the confirming case, and it is why the parallel matters. Taste receptor cells also turn over, taste cells are also directly exposed, and nobody proposes that gustatory turnover exists to track non-stationary statistics — because taste's statistics are not notably non-stationary. Two exposed epithelia, both turning over, one with a volatility story attached and one without. **The parsimonious reading is that peripheral turnover is about exposure in both cases**, which leaves the bulbar interneuron result as the genuinely unusual fact requiring a coding explanation.

This matters for interpreting neurogenesis-blocking experiments, which frequently target the subventricular zone route and leave peripheral turnover intact. Good — those are the experiments that speak to the coding account.

</details>

## Critical periods, and what they say about the map

One more thing this section can contribute, and it connects back to §9.2 rather than forward.

If the glomerular map is not genetically specified but sorted out by activity, then the map's formation is a *learning* problem, and learning problems have critical periods when the thing being learned is stable. The prediction: glomerular position should be strongly experience-dependent early and progressively fixed, while the *interneuron* population that reads the map stays plastic for life.

This is roughly what is observed, and it is a satisfying division of labour. The addressing scheme — which receptor talks to which glomerulus — needs to be stable, because everything downstream is wired to it, and a map that kept shifting would invalidate every synapse that had learned to read it. The transformation applied to that map needs to keep moving, because the statistics do. **Fix the addresses, keep re-fitting the function.**

That division makes a prediction that could fail. Newly generated sensory neurons, arriving throughout life, must find the glomerulus their receptor specifies — into a map that is by then fixed. If the map were still being negotiated, the continuous influx would degrade it. So the account predicts that the targeting mechanism used by adult-born sensory neurons differs from the one used during initial map formation: the adult version should be a matching operation onto an existing target, not a self-organising one. Evidence bearing on this is thin, and it is a place where developmental data would settle a coding question.

## What to take from this section

**The honest summary is that olfactory plasticity has one striking fact and one unfalsified story.** The fact — lifelong interneuron addition to the first circuit, unique among sensory systems — is solid. The story — that it exists because the input statistics never stop moving — is plausible, connects to an independently motivated property of the modality, and makes no quantitative prediction anyone has tested.

The four predictions above would change that, and the first is the one worth doing, because it is comparative and this is a comparative course. It also has the property §9.1 asked for: it distinguishes an optimality account from its rivals by asking whether the feature co-varies with the task or with the tree.

Until then, this belongs in the module's column of things that are believed rather than known, and §9.6 scores it accordingly.
