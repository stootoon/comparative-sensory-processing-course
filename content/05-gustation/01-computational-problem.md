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

## The open-ended toxin problem

There is a second argument, and it is the one that explains bitter specifically.

The set of molecules that might poison you is **open-ended and cannot be enumerated in advance**. Plants evolve new defensive compounds continually; an animal cannot have a dedicated detector for each.

Under those conditions the optimal detector is **broad and permissive**: an OR gate that fires for anything resembling a class of toxins, accepting false alarms. Roughly 25 bitter receptors in humans, expressed together in the same cells, converging on one perceptual axis, collectively responding to hundreds of structurally diverse compounds.

Compare sweet: a single narrow receptor dimer, because "sugar" is a small, well-defined, chemically stable category that has not changed in millions of years. You can afford a specific detector when the target is specific.

**Receptor breadth is allocated by the loss function, not by the chemistry.** This is one of the best normative arguments in sensory neuroscience and is rarely taught as one.

## The deadline, and the delayed teaching signal

The immediate decision is fast — accept or reject within a mouthful. But taste has a second, much slower channel: **post-ingestive nutrient signalling**, which reports the actual metabolic consequences of what was swallowed, minutes to hours later.

That delayed signal teaches the fast one. Conditioned taste aversion is famously one-trial and tolerates delays of hours between taste and illness — a violation of normal temporal-contiguity rules in learning, and precisely the adaptation you would design if the teaching signal were inherently delayed.
