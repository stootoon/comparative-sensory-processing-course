---
id: m04.s04
title: The receptor array
lede: Ordered and metric like vision, but with a metric that changes when you move. Four afferent classes tile the temporal domain rather than the spatial one — a filterbank in time, on a spatial array.
estimatedMinutes: 18
---

## The spatial array

Roughly 17,000 mechanoreceptive afferents innervate the glabrous skin of one human hand — around 20,000 counting the hand as a whole [@kandel2021]. The array is **ordered** and **metric**: neighbouring receptors report neighbouring skin locations, and distance on the skin is well defined.

But with a qualification no other modality has. **The metric is deformable and posture-dependent.** Two points a fixed distance apart on the skin are a variable distance apart in the world. A code that reported skin coordinates would be useless for reaching; a code that reported world coordinates requires proprioceptive information the receptors do not have.

**Innervation density varies enormously** — fingertip density is more than an order of magnitude above the back. This is a budget allocation exactly like the fovea: a fixed number of afferents spent uniformly for mediocre acuity everywhere, or concentrated where acuity matters and brought to bear by moving the hand.

The allocation is also non-uniform *across classes*, and by a wide margin. At the fingertip the densities run roughly 150 RA1, 70 SA1, 21 PC and 9 SA2 per cm² [@kandel2021]. The two classes that carry fine spatial detail take about nine-tenths of the budget; the two with large fields, which need no spatial sampling to do their jobs, are spent sparsely. That is the same logic as the density gradient across the body, applied along a second axis.

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
| **SA1** (Merkel) | slow | small (~11 mm²) | form and fine spatial detail (best below ~5 Hz) |
| **RA1** (Meissner) | rapid | small (~25 mm²) | slip, low-frequency flutter (most sensitive ~10–50 Hz) |
| **PC** (Pacinian) | very rapid | very large | vibration (most sensitive ~50–400 Hz, best ~200 Hz), tool-transmitted events |
| **SA2** (Ruffini) | slow | large | skin stretch, hand conformation |

The field sizes are not a free parameter set independently of the rest: they follow from how the afferent is wired. SA1 and RA1 are **type 1** fibres, each branching to many small end organs — one SA1 axon collects from around 20 Merkel cells, one RA1 axon from 10 to 20 Meissner corpuscles, all within a patch a few millimetres across. PC and SA2 are **type 2**, each axon terminating on a *single* large corpuscle deep in the dermis that picks up displacement from far away [@kandel2021]. Small field and large field are consequences of two different packaging strategies, not two settings of a dial.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A filterbank in the temporal domain</div>
Look at what those four are. They are <strong>not</strong> four samples of different parts of the skin — they overlap almost completely in space. They are four different <em>temporal filters</em> applied to the same mechanical input.

Audition builds a filterbank in frequency across a spatial array (§2.4). Touch builds a filterbank in temporal frequency at every point of a spatial array. Same idea, different axis.

<x-figure src="content/04-somatosensation/figures/afferent-filterbank.js"
  caption="The four afferent classes as frequency responses. Together they tile roughly three decades of temporal frequency with four broad channels. The second view sets them against a cochlear-style bank over the same span: audition spends ~3,500 narrow channels because frequency IS its stimulus dimension; touch spends four broad ones because temporal frequency is a secondary cue to texture.">
</x-figure>


And this is the same motif again: <strong>one channel cannot optimise sensitivity, temporal precision and dynamic range simultaneously</strong>, so split early. Retinal sustained/transient, cochlear bushy/stellate/octopus, vestibular regular/irregular, mitral/tufted, and now SA1/RA1/PC/SA2. Five modalities, independently.
</x-callout>

## The labelled-line story, and its correction

The tidy version assigns each afferent class a perceptual function: SA1 for form, RA1 for slip, PC for vibration, SA2 for stretch. It is a good first approximation and it appears in every textbook.

It is also too clean [@saal2014]. Artificial stimuli can be designed to excite one class selectively, but **most natural stimuli excite all of them**, and most tactile percepts are shaped by several. In cortex, most neurons receive convergent input from multiple afferent classes rather than staying within a submodality.

Worth being precise about *where* the picture stops being labelled, because the answer is late. Submodality segregation is maintained through the dorsal column nuclei and the thalamus — individual cuneate neurons receive from afferents of a single type, and the types are spatially separated. Convergence begins at cortex: SA1 and RA1 inputs from the same patch of skin meet on common neurons in area 3b [@kandel2021]. So the labelled lines are real for three synapses and then stop being real, which is a more interesting claim than either the tidy version or its blanket rejection. It also sets a boundary the olfactory analogue lacks: the bulb has no comparable stretch of pathway over which a which-glomeruli code is known to be preserved intact.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A recurring shape of dispute</div>
This is the same argument as labelled-line versus ensemble coding in taste (§5), and as the "which glomeruli" versus "when they fire" debate in olfaction.

The pattern: an initial account assigns each channel a dedicated function based on responses to well-controlled artificial stimuli. A later account shows that natural stimuli engage everything and downstream neurons pool across channels.

<strong>The methodological lesson is worth carrying:</strong> a coding scheme inferred from stimuli chosen to isolate channels will tend to look more labelled-line than the system is. Olfactory experiments overwhelmingly use monomolecular odorants at steady concentration — the tactile equivalent of only ever probing with single-frequency vibration.
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m04.s04.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The labelled-line account of touch — SA1 for form, RA1 for slip, PC for vibration, SA2 for stretch — was built on stimuli designed to excite one class at a time, and it is too clean [@saal2014]. State the methodological principle this establishes, then design the olfactory experiment that would expose the analogous error. Say what result would show the labelled picture is an artefact of the stimulus set rather than a property of the system.",
  "modelAnswer": "**The principle.** A coding scheme inferred from stimuli chosen to isolate channels will tend to look more labelled-line than the system is. The isolation is a property of the probe, and the inference from 'this stimulus drives one class' to 'this class carries one percept' smuggles the probe's design into the conclusion. Natural stimuli excite all four classes, most tactile percepts are shaped by several, and most cortical neurons receive convergent input across classes rather than staying within a submodality.\n\nNote the shape of the dispute, because it recurs: an initial account assigns each channel a dedicated function from well-controlled artificial stimuli; a later account shows natural stimuli engage everything and downstream neurons pool. Taste has it (§5). Olfaction has it as 'which glomeruli' versus 'when they fire'.\n\n**The olfactory analogue of the artificial stimulus.** Monomolecular odorants at steady concentration, delivered on a controlled flow. That is the tactile equivalent of only ever probing with single-frequency vibration, and it is what the overwhelming majority of olfactory experiments use. It is worth being precise about *what* it isolates: single molecules at fixed concentration produce a stationary, well-separated activation pattern with no temporal structure — which is exactly the regime in which a which-glomeruli code would look sufficient whether or not it is.\n\n**The experiment.** Compare coding under monomolecular steady delivery against coding under natural mixtures delivered with realistic plume dynamics — intermittent, fluctuating in concentration, with several sources present [@ackels2021; @celani2014]. Decode identity from the same population under both regimes, using a spatial-pattern decoder and a sniff-phase-referenced timing decoder, and compare their performance.\n\n**The diagnostic result.** If the spatial decoder is sufficient under monomolecular delivery and degrades sharply under natural dynamics while the timing decoder holds up, the labelled 'which glomeruli' picture is an artefact of the stimulus set. If both decoders degrade together, identity coding is genuinely spatial and merely noisy. **The strongest version is the interaction**: the ranking of the two decoders should reverse across regimes, which no account attributing the labelled picture to the system can produce.\n\n**The transferable moral**, and it is the reason touch is worth reading before returning to the bulb: the answer is likely to be 'both, for different things'. Touch is topographic, metric and mapped, and still carries fine texture in millisecond timing [@johnson2001]. The olfactory debate has been posed as exclusive, and touch is the existence proof that it need not be.",
  "rubric": [
    "States the principle that stimuli designed to isolate channels bias the inferred code toward labelled lines",
    "Identifies monomolecular odorants at steady concentration as the olfactory equivalent",
    "Proposes a comparison across stimulus regimes rather than a single-regime measurement",
    "Specifies decoders — spatial pattern versus phase-referenced timing — as the read-out",
    "Names a result that would discriminate artefact from property, ideally an interaction or reversal",
    "Bonus: notes the same dispute shape in taste and the convergent cortical pooling in touch",
    "Bonus: concludes the likely answer is both codes serving different aspects of one stimulus"
  ]
}
</script>
</x-free-response>

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
