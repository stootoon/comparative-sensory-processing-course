---
id: m09.s06
title: Synthesis — what the exotic senses hand olfaction
lede: Three of these four supply direct mechanistic templates for open olfactory questions. None of the templates is available from vision or audition, which is the argument for the module.
estimatedMinutes: 12
---

## The design-space map

Place all the modalities on the course's axes and the exotic senses populate regions the familiar five leave empty.

| | Active control of stimulus | Forward model known? | Dimensionality |
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
