---
id: m04.s02
title: The signal and its natural statistics
lede: The statistics of touch are the statistics of contact — and unlike images or sounds, they are partly authored by the animal. That makes the ensemble harder to define than either, and easier than olfaction's.
estimatedMinutes: 14
---

## What the ensemble consists of

Natural tactile input is not a continuous field like an image. It is a sequence of **contact events**: making contact, maintaining it, sliding, releasing. Between events there is nothing.

That intermittency is worth naming because it is the first structural similarity to olfaction we have met. Touch, like smell, is a modality of discrete encounters separated by silence, rather than a continuously available signal. Vision and audition are both continuously present.

## Texture, and the two codes

Surface texture spans an enormous range of spatial scales, and the system uses two different strategies across that range.

**Coarse texture** — features above roughly 1 mm — is resolved **spatially**. The pattern of skin indentation carries the surface geometry, and slowly-adapting afferents with small receptive fields report it more or less directly.

**Fine texture** — below that — cannot be resolved spatially, because receptor spacing is too coarse. Instead, sliding the finger across the surface converts spatial structure into **vibration**, and the frequency content of that vibration carries the microstructure.

<x-figure src="content/media/somato-two-point-discrimination.jpg"
  caption="Two-point discrimination thresholds across the body. The gradient tracks innervation density, which tracks how finely the animal needs to resolve there — the same budget-allocation argument as foveal magnification (§1.4). Note that these are the limits of the SPATIAL code; fine texture below this scale is resolved temporally instead."
  credit="Tong J, Mao O, Goldreich D (2013), Front Hum Neurosci 7:579; uploaded by Commons user Conejo23. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:2-point_orientation_discrimination_(2POD)_compared_to_traditional_two-point_discrimination_(2PD).jpg">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">A spatial modality that relies on temporal codes</div>
This is one of the more useful corrections in the course.

Touch has a topographic, metric receptor array — everything §1.4 said vision's ordering buys, touch also gets. And yet a large part of what it computes depends on <strong>precise spike timing at millisecond resolution</strong>, because fine texture is transduced as vibration rather than as a spatial pattern.

<strong>Having a map does not mean the code is spatial.</strong> That matters directly for olfaction, where the debate about whether identity is carried by <em>which</em> glomeruli are active or by <em>when</em> they fire relative to the sniff has often been framed as though these were exclusive. Touch shows a system using both, for different aspects of the same stimulus, in the same afferents.
</x-callout>

The vibration is not incidental. Sliding a finger across a surface at typical exploratory speeds produces skin oscillations whose spectrum depends on the surface, and Pacinian afferents — which are exquisitely sensitive to vibration and have huge receptive fields — carry it. Their receptive field size is irrelevant because the code is not spatial.

## The animal authors part of the ensemble

Exploratory movements are stereotyped and matched to what is being judged: lateral motion for texture, pressure for compliance, static contact for temperature, enclosure for global shape.

So the input statistics depend on the animal's own policy. This is a genuine complication for the efficient-coding programme — the ensemble is not a property of the world alone — and it is shared with olfaction, where sniff vigour changes both how much odour arrives and the relative activation across receptors (§3.9).

**Neither modality has a clean answer to this.** It is worth flagging as a general limitation of applying vision-derived normative arguments to active senses: the ensemble is co-authored, and optimising a code against it is a fixed-point problem rather than a straightforward optimisation.
