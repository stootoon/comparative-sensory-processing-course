---
id: m04.s04
title: The receptor array
lede: Ordered and metric like vision, but with a metric that changes when you move. Four afferent classes tile the temporal domain rather than the spatial one — a filterbank in time, on a spatial array.
estimatedMinutes: 18
---

## The spatial array

Roughly 17,000 mechanoreceptive afferents innervate the glabrous skin of one human hand. The array is **ordered** and **metric**: neighbouring receptors report neighbouring skin locations, and distance on the skin is well defined.

But with a qualification no other modality has. **The metric is deformable and posture-dependent.** Two points a fixed distance apart on the skin are a variable distance apart in the world. A code that reported skin coordinates would be useless for reaching; a code that reported world coordinates requires proprioceptive information the receptors do not have.

**Innervation density varies enormously** — fingertip density is more than an order of magnitude above the back. This is a budget allocation exactly like the fovea: a fixed number of afferents spent uniformly for mediocre acuity everywhere, or concentrated where acuity matters and brought to bear by moving the hand.

<x-figure src="content/media/somato-meissner-micrograph.jpg"
  caption="A Meissner corpuscle in a dermal papilla, close to the skin surface. Meissner density in the fingertip is among the highest anywhere on the body — the peripheral half of the budget allocation whose cortical consequence is the homunculus (§4.7)."
  credit="OpenStax Anatomy and Physiology. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:514_Light_Micrograph_of_a_Meissner_Corpuscle.jpg">
</x-figure>


The parallel is close enough to be worth stating as a principle: **non-uniform sampling plus active positioning** beats uniform sampling, in any modality where the sensor can be aimed. Vision has the fovea plus saccades. Touch has the fingertip plus reaching. Olfaction has neither, and it is worth asking why — the answer being that there is nothing to aim, because chemical space has no region to point at.

## Four classes, tiling time

The four afferent types differ mainly in adaptation rate and receptive field size [@johnson2001]:

| Class | Adaptation | Field | Best at |
|---|---|---|---|
| **SA1** (Merkel) | slow | small | form and fine spatial detail |
| **RA1** (Meissner) | rapid | small | slip, low-frequency flutter (~5–50 Hz) |
| **PC** (Pacinian) | very rapid | very large | vibration (~50–400 Hz), tool-transmitted events |
| **SA2** (Ruffini) | slow | large | skin stretch, hand conformation |

<x-callout class="x-callout is-key">
<div class="x-callout-title">A filterbank in the temporal domain</div>
Look at what those four are. They are <strong>not</strong> four samples of different parts of the skin — they overlap almost completely in space. They are four different <em>temporal filters</em> applied to the same mechanical input.

Audition builds a filterbank in frequency across a spatial array (§2.4). Touch builds a filterbank in temporal frequency at every point of a spatial array. Same idea, different axis.

And this is the same motif again: <strong>one channel cannot optimise sensitivity, temporal precision and dynamic range simultaneously</strong>, so split early. Retinal sustained/transient, cochlear bushy/stellate/octopus, vestibular regular/irregular, mitral/tufted, and now SA1/RA1/PC/SA2. Five modalities, independently.
</x-callout>

## The labelled-line story, and its correction

The tidy version assigns each afferent class a perceptual function: SA1 for form, RA1 for slip, PC for vibration, SA2 for stretch. It is a good first approximation and it appears in every textbook.

It is also too clean [@saal2014]. Artificial stimuli can be designed to excite one class selectively, but **most natural stimuli excite all of them**, and most tactile percepts are shaped by several. In cortex, most neurons receive convergent input from multiple afferent classes rather than staying within a submodality.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A recurring shape of dispute</div>
This is the same argument as labelled-line versus ensemble coding in taste (§5), and as the "which glomeruli" versus "when they fire" debate in olfaction.

The pattern: an initial account assigns each channel a dedicated function based on responses to well-controlled artificial stimuli. A later account shows that natural stimuli engage everything and downstream neurons pool across channels.

<strong>The methodological lesson is worth carrying:</strong> a coding scheme inferred from stimuli chosen to isolate channels will tend to look more labelled-line than the system is. Olfactory experiments overwhelmingly use monomolecular odorants at steady concentration — the tactile equivalent of only ever probing with single-frequency vibration.
</x-callout>

<x-matrix>
<script type="application/json">
{
  "id": "m04.s04.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Add touch to the datasheet. Compare with what you filled in for the other three.",
  "rows": ["Array ordering","Metric structure","What the parallel channels tile","Non-uniform sampling?"],
  "columns": ["Vision","Audition","Touch"],
  "cells": {
    "Array ordering|Touch": {"answer":"ordered","accept":["ordered","somatotopic","yes"]},
    "Metric structure|Touch": {"answer":"metric but deformable and posture-dependent","accept":["metric","deformable","posture dependent","metric but deformable","changes with posture"]},
    "What the parallel channels tile|Touch": {"answer":"temporal frequency","accept":["time","temporal","temporal frequency","adaptation rate","frequency"]},
    "Non-uniform sampling?|Touch": {"answer":"yes — fingertip","accept":["yes","fingertip","yes fingertips","strongly"]}
  },
  "modelAnswerNote": "The row that matters is the third. Vision's parallel channels tile space and wavelength; audition's tile frequency; touch's tile TEMPORAL frequency at every spatial point. Olfaction's mitral/tufted split appears to tile something like speed versus accuracy. In every case the split exists because one channel cannot optimise everything — but what gets tiled differs, and it is set by which variable the modality most needs resolved."
}
</script>
</x-matrix>
