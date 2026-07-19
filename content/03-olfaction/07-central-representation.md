---
id: m03.s07
title: The central representation — piriform cortex
lede: Piriform is not a primary sensory cortex. It is a three-layer associative network where recurrence dominates afferent drive, and its oddities look less odd once you notice that A1 has many of them too.
estimatedMinutes: 18
---

Piriform cortex receives mitral and tufted cell axons directly. It has three layers rather than six. And its most important structural fact is that **recurrent connections vastly outnumber afferent ones**: a piriform neuron receives far more input from other piriform neurons than from the bulb.

<x-figure src="content/media/piriform-cortex-mouse.jpg"
  caption="Piriform cortex. Note the dense cell-body layer and the absence of the six-layer organisation of neocortex — this is three-layer paleocortex, structurally closer to hippocampus than to V1. There is no topography here: neurons responding to the same odorant are scattered rather than clustered."
  credit="National Institutes of Health (NIH). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Piriform_cortex_of_a_mouse.jpg">
</x-figure>


## What piriform is not

It is worth listing the ways the V1 analogy fails, because each failure is informative.

**No topography.** Odour-responsive neurons are distributed across piriform with no discernible spatial organisation. Two neurons responding to the same odorant are not neighbours. Given §3.4 this is expected — there is no metric on the input to be topographic *about* — but it means every spatial intuition from visual cortex is inapplicable.

**Sparse, distributed ensembles.** Any odour activates a small percentage of neurons, scattered. Identity is carried by which sparse set is active.

**Afferent drive is a minority input.** V1 is also recurrence-dominated, but piriform is more extreme, and the recurrent connections are long-range and non-topographic rather than local.

**Not laminated like neocortex.** Three layers, paleocortex, more similar in organisation to hippocampus than to V1 [@haberly2001].

## What it looks like instead

The productive framing is **content-addressable associative memory**. Sparse distributed patterns, dense recurrent connectivity, and plasticity are the ingredients of an attractor network, and piriform has all three.

That predicts pattern completion — a partial input should recover the full stored pattern — and pattern separation, keeping similar inputs distinct. Both are reported.

## Concentration invariance, computed not inherited

The clearest functional result, and a good example of a cortical computation being genuinely cortical.

Bulbar output is strongly **concentration-dependent**: raise the concentration and more glomeruli activate, more strongly. Yet odour identity must be recognised across concentrations.

Piriform solves this with recurrence. The earliest-responding bulbar cells drive a sparse subset of piriform neurons; recurrent collaterals broadcast that activation across the network, recruiting global feedback inhibition that truncates and suppresses cortical activity for the remainder of the sniff — discounting the slower, concentration-dependent bulbar input that arrives later. Removing recurrent collateral output makes cortical responses steeply concentration-dependent and abolishes concentration-invariant decoding [@bolding2018].

<x-callout class="x-callout is-key">
<div class="x-callout-title">A timing-based solution to an intensity problem</div>
Note the mechanism, because it is not the obvious one. Invariance is achieved not by normalising amplitude but by **listening only to the earliest inputs and then shutting the door**. Concentration affects how many cells respond and how strongly, but affects the *identity of the first responders* much less.

That is a primacy code, implemented by recurrent inhibition, and it connects directly to the sniff-locked timing of §3.5 and to the ~200 ms deadline of §3.1. The system is not fighting the deadline; it is <em>using</em> it.

<strong>Worth carrying to other modalities:</strong> wherever a system needs invariance to intensity and has a temporal reference, first-spike or rank-order codes are a candidate solution — and they are cheap. Retinal latency codes and tactile first-spike codes may be doing the same thing.
</x-callout>

## The normative gap, in context

There is no derivation of piriform organisation from natural odour statistics with anything like the force of the retinal or cochlear results.

But §1.7 and §2.7 established the relevant baseline: **vision's theory is strong at the retina, partial at V1, absent beyond; audition's is strong at the cochlea and absent at A1.** Both degrade at the same rate with depth.

Olfaction reaches its central representation in two synapses. The absence of a good normative account of piriform is the same wall, hit sooner because there is less pathway.

There is even a reason for optimism specific to piriform. The theoretical tools that failed on V4 and IT — sparse coding, associative memory capacity, expansion recoding, random projections — were built for exactly the kind of structure piriform is. A recurrent, non-topographic, sparse associative network is what those theories describe. The tools may fit olfaction's cortex *better* than vision's.
