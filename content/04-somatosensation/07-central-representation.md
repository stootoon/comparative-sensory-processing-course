---
id: m04.s07
title: The central representation — S1
lede: The homunculus is the most famous map in neuroscience and is usually shown as the endpoint. It is better understood as a resource allocation, and as an argument that maps track behavioural importance rather than sensor geometry.
estimatedMinutes: 14
---

Primary somatosensory cortex contains an orderly map of the body surface, with four subdivisions — areas 3a, 3b, 1 and 2 — forming a rough hierarchy from simple to complex response properties.

<x-figure src="content/media/somato-s1-areas-3a-3b-1-2.jpg"
  caption="The somatosensory pathway and the S1 subdivisions. Areas 3a (muscle spindle input), 3b (cutaneous), 1 and 2 (increasingly complex, combining both) form a hierarchy — and note that 3a is where proprioceptive input arrives, which is why touch and proprioception are hard to separate cleanly."
  credit="Qi H-X, Kaas JH, Reed JL (2014), Frontiers in Systems Neuroscience 8:84, Figure 1. CC BY."
  source="https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/fnsys.2014.00084/full">
</x-figure>


## The homunculus as budget allocation

The map is grotesquely distorted: hands and lips occupy vastly more cortex than their surface area warrants, and the distortion tracks **innervation density**, which itself tracks behavioural importance.

<x-figure src="content/media/somato-homunculus.jpg"
  caption="The sensory homunculus. This is not a picture of the body — it is a picture of how much cortex each part is allocated, which tracks innervation density, which tracks how much the animal needs to resolve there. Maps allocate by importance rather than reproducing sensor layout, which reframes §12's question: is there any olfactory variable whose values differ enough in importance to be worth allocating unevenly?"
  credit="OpenStax College; derivative work by Popadius. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Sensory_Homunculus-en.svg">
</x-figure>


This is the same argument as foveal magnification in vision, and it generalises cleanly: **cortical area is allocated in proportion to the density of the input, which is allocated in proportion to how much the animal needs to resolve there.**

Two consequences worth drawing out.

**Maps are plastic.** Cortical magnification changes with use — over-represented in trained digits, reorganised after amputation. A map that reallocates according to use is behaving like a resource being budgeted, not like a fixed wiring diagram.

**Maps track importance, not geometry.** The homunculus is not a picture of the body; it is a picture of how much the animal cares about each part. That reframing matters for §12's retinotopy question — if maps allocate by importance rather than reproducing sensor layout, the question for olfaction becomes "is there any variable whose values differ in importance enough to be worth allocating unevenly?"

## Timing in a spatial cortex

§4.2 established that fine texture is coded temporally. That code survives into cortex: S1 neurons carry texture information in precise spike timing at millisecond resolution, not only in firing rate.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The correction this module exists to deliver</div>
Touch has everything vision has — an ordered metric array, a topographic cortical map, spatial receptive fields with centre–surround structure. And a substantial part of what it computes depends on <strong>millisecond spike timing</strong>.

Having a map does not mean the code is spatial. A system can be topographically organised and still carry its most important information in when spikes occur.

<strong>Apply this to olfaction.</strong> The debate over whether odour identity is carried by which glomeruli are active or by their latencies relative to the sniff has often been posed as exclusive. Touch shows a system doing both at once, in the same afferents, for different aspects of the same stimulus. The olfactory answer is likely to be "both, for different things" — and §3.7 already showed piriform using a timing-based mechanism to solve an intensity problem.
</x-callout>
