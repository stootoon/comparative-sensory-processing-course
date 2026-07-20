---
id: m05.s01
title: The computational problem
lede: One decision, made under a wildly asymmetric loss, about an open-ended set of possible poisons. Almost everything strange about taste follows from that sentence — and it is the perfect foil for olfaction.
estimatedMinutes: 14
---

Taste exists to answer one question: **should I swallow this?**

That is a much narrower brief than any other modality in this course, and the narrowness is the point. Vision, audition and touch serve open-ended sets of downstream uses. Taste serves essentially one decision, and it is optimised for it to a degree that looks bizarre until you take the loss function seriously.

## The asymmetric loss

The costs of the two errors are not remotely comparable.

**Swallow a toxin:** possibly fatal. Irreversible.
**Reject a safe nutrient:** a missed meal. Recoverable in hours.

An optimal decision rule under that asymmetry does not sit at the point of equal evidence. It sits far toward rejection, accepting many false alarms to avoid one miss.

<x-figure src="content/05-gustation/figures/loss-asymmetry.js"
  caption="The asymmetric loss, made quantitative. Raise the cost of swallowing a toxin and the optimal criterion slides away from the equal-evidence point, accepting a high rate of rejected safe food to hold the miss rate down. Slide the ratio back to 1 and a symmetric loss gives a symmetric detector — roughly what olfaction has.">
</x-figure>


This single fact predicts a great deal:

- **Bitter is aversive and innate**, requiring no learning, because learning a toxin by experience may not be survivable.
- **Bitter thresholds are much lower than sweet thresholds** — often by orders of magnitude. You detect a trace of a poison and need a substantial concentration of sugar.
- **The response is categorical**, not graded. Reject or accept; there is little use for a precise estimate of how bitter something is.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two chemosenses, opposite designs</div>
This is the comparison the module exists for, and it is the cleanest natural experiment in the course.

Taste and smell both detect small molecules. Both use GPCRs. Both sample the chemical world. And they arrived at <strong>opposite architectures on every axis</strong>:

| | Gustation | Olfaction |
|---|---|---|
| Receptor types | ~5 classes | ~400–1,000 |
| Distinctions preserved | deliberately collapsed | preserved |
| Coding | close to labelled-line | combinatorial |
| Learning required | no, largely innate | yes, mostly learned |
| Loss function | grossly asymmetric | roughly symmetric |
| Consumers | essentially one decision | open-ended |

<strong>The chemistry cannot explain this.</strong> Both are detecting small organic molecules with G-protein-coupled receptors. The explanation has to be the task — and that makes gustation the strongest available evidence that <em>loss functions shape sensory architecture</em>, not just sensory decisions.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Bitter thresholds sit orders of magnitude below sweet thresholds. Which explanation for that gap is best supported by the argument of this section?",
  "options": [
    {
      "text": "The optimal decision criterion under a loss where misses are fatal and false alarms merely cost a meal sits far toward rejection, and a low threshold is what that criterion looks like at the sensor.",
      "correct": true,
      "feedback": "This is the argument, and its strength is that it derives a quantitative feature of the periphery from the shape of the loss rather than from anything chemical. The same reasoning predicts the other two facts in the list: innateness, because learning by experience may not be survivable, and categorical rather than graded output, because a decision rule needs a criterion crossing rather than an estimate. One assumption, three predictions."
    },
    {
      "text": "Toxins are typically active at far lower concentrations than sugars are nutritionally useful, so the thresholds track the concentrations at which the compounds matter.",
      "correct": false,
      "feedback": "Partly correct, and this is a real contributor rather than a wrong answer — a detector should be sensitive over the range where its target occurs. But it explains the gap by appeal to the chemistry and misses what the section is doing, which is showing that the *same* chemistry could support either design and the task selects between them. Note also that it makes no prediction about innateness or about categorical output, whereas the loss argument predicts all three."
    },
    {
      "text": "Bitter receptors are broadly tuned and co-expressed, so their responses summate and the effective threshold falls.",
      "correct": false,
      "feedback": "Correct under the assumption that convergence lowers threshold, which it does — summation across ~25 co-expressed receptors genuinely contributes sensitivity. But this is the mechanism, not the reason. The question is why evolution built a summating OR gate for bitter and a single narrow dimer for sweet, and the answer is the loss function together with the open-endedness of the toxin set. Mechanism and rationale are separate questions and this course keeps them apart deliberately."
    },
    {
      "text": "Detection thresholds generally scale inversely with the number of receptor types serving a quality, and bitter has by far the most.",
      "correct": false,
      "feedback": "Correct under the assumption that receptor count is the primary determinant of psychophysical threshold — a generalisation that fails immediately outside taste. Olfaction has ~400–1,000 receptor types and unremarkable thresholds for most odorants; vision has three cone types and operates at the single-photon limit. Receptor count and sensitivity are set by different pressures, and treating the correlation here as a law would mispredict every other modality in the course."
    }
  ]
}
</script>
</x-mcq>

## The open-ended toxin problem

There is a second argument, and it is the one that explains bitter specifically.

The set of molecules that might poison you is **open-ended and cannot be enumerated in advance**. Plants evolve new defensive compounds continually; an animal cannot have a dedicated detector for each.

Under those conditions the optimal detector is **broad and permissive**: an OR gate that fires for anything resembling a class of toxins, accepting false alarms. Roughly 25 bitter receptors in humans, expressed together in the same cells, converging on one perceptual axis, collectively responding to hundreds of structurally diverse compounds.

Compare sweet: a single narrow receptor dimer, because "sugar" is a small, well-defined, chemically stable category that has not changed in millions of years. You can afford a specific detector when the target is specific.

**Receptor breadth is allocated by the loss function, not by the chemistry.** This is one of the best normative arguments in sensory neuroscience and is rarely taught as one.

## The deadline, and the delayed teaching signal

The immediate decision is fast — accept or reject within a mouthful. But taste has a second, much slower channel: **post-ingestive nutrient signalling**, which reports the actual metabolic consequences of what was swallowed, minutes to hours later.

That delayed signal teaches the fast one. Conditioned taste aversion is famously one-trial and tolerates delays of hours between taste and illness — a violation of normal temporal-contiguity rules in learning, and precisely the adaptation you would design if the teaching signal were inherently delayed.

<x-predict>
<script type="application/json">
{
  "id": "m05.s01.p1",
  "contentRev": 1,
  "prompt": "The section's central claim is that architecture follows the loss function rather than the chemistry. Take it seriously and run it backwards. Olfaction's loss is roughly symmetric and its consumers are open-ended — but one olfactory pathway is not like that. Predict what the innate-valence olfactory pathway should look like if the loss argument transfers, and name one thing that would falsify the transfer.",
  "placeholder": "What should an olfactory subsystem serving a single asymmetric decision look like?",
  "reveal": "**The prediction.**\n\nIf an olfactory pathway serves one decision under an asymmetric loss — approach or flee, given a predator cue — then the loss argument says it should show taste's design signature rather than olfaction's, even though it shares olfaction's receptors and its first two synapses.\n\nConcretely, it should **collapse distinctions that olfaction elsewhere preserves.** Chemically distinct predator odours should converge onto a common response, because the correct action is identical for all of them, exactly as ~25 bitter receptors converge onto one axis. It should be **innate rather than learned**, because learning a predator by experience has the same survivability problem as learning a toxin. It should be **categorical**, because there is no use for a graded estimate of how much predator is present. And it should be **low-threshold and false-alarm tolerant**, for the same asymmetry reason.\n\nNote that this is a strong prediction: it says two pathways carrying the same receptor input should have opposite coding properties, with the difference attributable only to what the downstream consumer is doing.\n\n**It holds.** The cortical amygdala carries innate-valence responses in which chemically distinct aversive odours converge, while the piriform pathway preserves the distinctions between them — §3.8 develops this, and §5.11 lists it as the confirmed instance of a prediction derived from gustation.\n\n**What would falsify it.**\n\nThe cleanest disconfirmation would be finding that the innate-valence pathway preserves odorant identity as finely as piriform does — that is, that the convergence is an artefact of coarse measurement rather than a design feature. Decoding odorant identity from cortical-amygdala populations at piriform-level accuracy would do it.\n\nA subtler one: if the valence pathway turned out to be *learned* rather than innate, the loss argument would lose its main support, because the whole point of the asymmetry is that it forbids learning from experience. Demonstrating that the aversive responses require prior exposure would leave the convergence needing a different explanation entirely."
}
</script>
</x-predict>
