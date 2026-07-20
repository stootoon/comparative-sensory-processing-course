---
id: m09.s06
title: Synthesis — what the exotic senses hand olfaction
lede: Three of these four supply direct mechanistic templates for open olfactory questions. None of the templates is available from vision or audition, which is the argument for the module.
estimatedMinutes: 12
---

## The design-space map

Place all the modalities on the course's axes and the exotic senses populate regions the familiar five leave empty.

| | Active control of stimulus | Forward model known? | Dimensionality |

<x-figure src="content/media/ampullae-of-lorenzini-3d.png"
  caption="Three-dimensional organisation of the ampullae of Lorenzini: pores on the skin, jelly-filled canals, and the sensory ampullae. The canal length sets the spatial baseline over which voltage is compared — an accessory structure performing a computation, as in the cochlea and the semicircular canal, and again something olfaction does not have."
  credit="Chiswick Chap. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Ampullae_of_Lorenzini.svg">
</x-figure>

|---|---|---|---|
| Vision | selective (saccades) | n/a | low–moderate |
| Audition | minimal | n/a | low |
| Touch | sampling-controlled | partial | moderate |
| Olfaction | sampling-controlled | **needed, absent** | high |
| Vestibular | none — measures self | **known, stationary** | very low |
| Proprioception | sensor is effector | known, learned | moderate |
| **Electroreception** | **carrier self-generated** | **exactly known** | low |
| **Echolocation** | **probe designed in real time** | known | moderate |
| **Infrared** | none | **known, fixed blur** | low |
| **Magnetoreception** | none | n/a | **minimal** |

The three cells in bold on the right are what olfaction needs and cannot get from vision or audition: a system with a known forward model, a system that designs its probe, and a system that deblurs.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The three templates, with their experiments</div>

<strong>1. Cancellation — from electroreception (§9.2).</strong><br>
The negative image is learned by anti-Hebbian plasticity at a broad, delayed input onto principal cells. The bulb has the same architecture: granule cells carrying cortical feedback onto mitral cells.<br>
<em>Experiment:</em> introduce a novel constant background odour and measure the <strong>timecourse</strong> over which bulbar neurons become unresponsive to it. Negative-image learning predicts minutes and plasticity-dependence; simple adaptation predicts seconds and plasticity-independence.

<strong>2. Hyperacuity from slow elements — from electroreception (§9.2).</strong><br>
Sub-microsecond behavioural precision from millisecond neurons, by pooling, with the scaling analysis done including the correlated-noise ceiling.<br>
<em>Experiment:</em> the §3.3 test — does fast-fluctuation discrimination scale with the number of converging receptor neurons, or degrade with reduced kinetic diversity?

<strong>3. Acuity as deconvolution — from infrared (§9.4).</strong><br>
The plume is a blur kernel applied to a point source; localisation is deblurring under a transport model. Converts an ill-posed question into blind deconvolution, which has a literature.<br>
<em>Experiment:</em> manipulate flow conditions so the actual transport statistics depart from what the animal has experienced, and ask whether localisation degrades in the way a model-mismatch account predicts.

<strong>4. Sampling tracks uncertainty — from echolocation (§9.3).</strong><br>
<em>Experiment:</em> vary plume intermittency while holding task difficulty and distance fixed. Optimal-experiment-design predicts sniff rate should rise when each sample is less informative.

<strong>5. Maps of derived variables — from echolocation (§9.3).</strong><br>
Bats map echo delay, which the cochlea never measures. So unorderedness of the receptor array does not preclude central topography — and the olfactory candidates are concentration and source distance, downstream of the bulb.
</x-callout>

## The methodological point

Every one of those five is a **specific, runnable experiment** derived from a system nobody studying olfaction would ordinarily read.

That is the argument for comparative work, stated as concretely as this course can state it. Studying olfaction alone, "why are so many bulbar neurons silent?" is a puzzle. Set beside the electrosensory lobe, it is a question with a known mechanism, a predicted timecourse, and a distinguishing experiment.

<x-matrix>
<script type="application/json">
{
  "id": "m09.s06.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Exotic sense",
  "prompt": "For each of the four, name the variable it isolates and the single olfactory question it speaks to. Do it from memory before checking — if you cannot state the isolated variable, the sense is still a curiosity to you rather than an experiment.",
  "rows": [
    "Electroreception",
    "Echolocation",
    "Infrared",
    "Magnetoreception"
  ],
  "columns": ["Variable isolated", "Olfactory question"],
  "cells": {
    "Electroreception|Variable isolated": { "answer": "active sensing with an exactly known forward model", "accept": ["known forward model","forward model known","self-generated carrier","known probe","exactly known forward model"] },
    "Electroreception|Olfactory question": { "answer": "why are so many bulbar neurons silent — is the bulb subtracting a learned prediction?", "accept": ["silent neurons","silent neuron account","predictive subtraction","cancellation","negative image","hyperacuity from slow receptors","speed problem"] },
    "Echolocation|Variable isolated": { "answer": "real-time design of the probe signal, plus maps of derived variables", "accept": ["probe designed in real time","optimal experiment design","active control of the stimulus","real-time probe control","maps of computed variables"] },
    "Echolocation|Olfactory question": { "answer": "does sniff rate track posterior uncertainty, and is a map of a derived olfactory variable possible?", "accept": ["sniff strategy","sniff rate","sampling strategy","is a map possible","olfactory map","maps of derived variables"] },
    "Infrared|Variable isolated": { "answer": "acuity as a computational rather than optical achievement, with a known blur kernel", "accept": ["deconvolution","known blur kernel","acuity as deconvolution","bad optics good performance","blur kernel"] },
    "Infrared|Olfactory question": { "answer": "how are odour sources localised — deblurring under a transport model rather than gradient-following", "accept": ["localisation","source localisation","odour localisation","plume as blur kernel","deblurring"] },
    "Magnetoreception|Variable isolated": { "answer": "a sense at the edge of physical possibility, with no identified receptor", "accept": ["no known receptor","physical limit","ungrounded channel","minimal bandwidth","low dimensionality"] },
    "Magnetoreception|Olfactory question": { "answer": "can theory constrain a code when the bottom-up route is blocked?", "accept": ["constraining theory without mechanism","top-down constraint","unknown stimulus space","what to do when bottom-up stalls","grounding a channel"] }
  },
  "modelAnswerNote": "Three of the four hand over a template. Magnetoreception hands over a warning, and the warning is the one most likely to be ignored.\n\nThe templates are cancellation, sampling-tracks-uncertainty plus maps-of-derived-variables, and deblurring — each attached to a runnable olfactory experiment listed above. Magnetoreception supplies none, and its contribution is the observation that a modality can have first-rate normative reasoning, decades of effort, and no mechanism, because the binding constraint was a biological fact rather than a theoretical one.\n\nThe reason that matters here: olfaction's binding constraint is also a measurement, not a theory. Steps two through five of the efficient-coding template are ready and step one does not exist (§3.11). A field in that position should be careful about how much of its effort goes into refining the theory."
}
</script>
</x-matrix>
