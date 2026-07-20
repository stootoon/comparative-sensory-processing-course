---
id: m02.s04
title: The receptor array
lede: Ordered, metric, one-dimensional, and narrowly tuned. Audition sits between vision and olfaction on almost every axis — which makes it the control condition that tells you which differences actually matter.
estimatedMinutes: 22
---

Read this beside §1.4 and §3.4. Audition is the third point that turns a contrast into a trend.

## The array

Roughly **3,500 inner hair cells** in the human cochlea, arranged in a single row along the basilar membrane. Each is driven by the mechanical filter at its position, so each reports energy in a narrow frequency band.

The properties, in the same order as the other two modules:

**It is ordered.** Position along the cochlea corresponds to frequency, monotonically. Neighbouring hair cells respond to neighbouring frequencies.

**It is metric.** Distance along the membrane is proportional to the *logarithm* of frequency. "How far apart in frequency" is well-defined, and the relevant notion of distance is ratio rather than difference — which is the correct choice, since harmonic and vocal-tract relations are multiplicative.

**It is one-dimensional.** This is the sharpest structural difference from vision. Vision samples a 2-D surface; audition samples a line. Everything else — location, timbre, source identity — is *computed* from that line plus its counterpart in the other ear.

**Tuning is narrow**, and actively sharpened (§2.3). A single auditory nerve fibre responds to a small fraction of the audible range — the opposite of the cone's spectral promiscuity.

<x-figure src="content/media/oa-auditory-nerve-tuning-curves.jpg"
  caption="Frequency threshold tuning curves from single auditory nerve fibres. Each fibre has a sharply defined best frequency with a steep high-frequency flank — the sharpness is what the cochlear amplifier buys (§2.3), and it is what makes ~3,500 narrow channels an efficient way to tile a one-dimensional stimulus space."
  credit="Karosas DM, Gonzales L, Wang Y, Bergevin C, Carney LH, Henry KS (2025). CC BY 4.0."
  source="https://doi.org/10.7554/eLife.102911">
</x-figure>


<x-figure src="content/02-audition/figures/critical-band.js"
  caption="The critical band, measured behaviourally. Widen the masker and masking increases only while the masker fits inside the auditory filter; beyond that it plateaus. This is a psychophysical experiment that reads out a peripheral filter width — and Import 6 proposes the olfactory analogue, where the sharp prediction is that masking should track receptor-activation overlap rather than perceptual similarity.">
</x-figure>


## Narrow tuning, and why that is the right choice here

§1.4 built a normative account of tuning breadth: for a fixed channel count and noise level, the optimal width depends on the **dimensionality of the stimulus space**. Narrow tuning wins in one dimension, where channels can tile the space; broad tuning wins in high dimensions, where narrow tuning leaves most stimuli in gaps.

Audition is the clean one-dimensional case, and it does exactly what the theory says: ~3,500 channels, narrowly tuned, tiling a single axis.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Three modalities, one principle</div>
Return to the tuning-breadth widget in §1.4 and set the dimensionality slider to 1, 3, and 8 in turn.

<strong>Audition (D ≈ 1, N ≈ 3,500):</strong> optimum is narrow. Observed: narrow. ✓<br>
<strong>Vision, spectral (D ≈ 3, N = 3):</strong> optimum is broad. Observed: very broad, heavily overlapping. ✓<br>
<strong>Olfaction (D large, N ≈ 1,000):</strong> optimum is broad. Observed: broad. ✓

The same equation accounts for all three, and it is not a fit — the dimensionality and channel counts come from anatomy and physics, not from tuning data. This is what it looks like when a comparative principle actually holds, and it is worth having one clean example before the course starts arguing about the messier ones.
</x-callout>

## Deriving the filterbank from natural sounds

This section is audition's answer to vision's opponent-axis result, and it is the second-strongest normative result in the course.

The question: **why these filters?** Auditory nerve fibres have bandwidths that scale in a specific way with centre frequency — roughly constant-Q at high frequencies, broader relative bandwidth at low. Is that arbitrary, or derivable?

Take an ensemble of natural sounds, and find the set of filters that encodes it most efficiently. The answer depends on the sound class — optimising for animal vocalisations yields something Fourier-like, optimising for non-biological environmental sounds yields something wavelet-like — but for the **combined** ensemble, the optimal code reproduces the scaling of real auditory nerve tuning [@lewicki2002].

Pushed further with a spike-based code that represents the waveform by the timing and magnitude of discrete acoustic features, the optimised features come out resembling time-domain cochlear filter estimates, with the right bandwidth-versus-frequency dependence, and greater coding efficiency than conventional representations [@smith2006].

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">This is the template for the olfaction question</div>
Note the structure of what was done, because it is exactly the calculation §13 asks someone to run for smell:

<strong>1.</strong> Assemble an ensemble of natural stimuli.<br>
<strong>2.</strong> Specify the representation being optimised — here, a set of filters.<br>
<strong>3.</strong> Specify the constraint — fixed number of filters, plus noise, plus a coding cost.<br>
<strong>4.</strong> Solve for the optimum.<br>
<strong>5.</strong> Compare to the measured biology.

The olfactory version: ensemble = receptor activations across natural odour scenes; representation = receptor affinity spectra; constraint = fixed receptor count and noise; prediction = the actual repertoire.

<strong>Steps 2–5 are ready. Step 1 does not exist.</strong> That is the whole gap, stated as precisely as this course can state it.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m02.s04.p1",
  "contentRev": 1,
  "prompt": "Lewicki derived cochlear-like filters by optimising a code for natural sounds. Someone proposes doing the same for olfaction and gets a grant. List, in order, the things that would have to be true for the calculation to work — then say which one you expect to break first, and why.",
  "placeholder": "What has to be in place?",
  "reveal": "**What is needed, in order:**\n\n1. **An ensemble of natural odour scenes with ground-truth chemical composition.** Air samples across ecologically relevant environments, analysed by GC-MS, sampled densely enough in time.\n2. **A receptor response model** — the affinity matrix mapping molecules to receptor activation. Partial versions exist for *Drosophila* and for some mouse receptors.\n3. **A specified constraint** — receptor count, noise model, metabolic cost. This part is easy.\n4. **A specified objective** — information about *what*? Identity, concentration, or location? These give different answers, and audition ducked the question because sound has one obvious thing to encode: the waveform.\n5. **Ground-truth tuning for real receptors**, to compare against.\n\n**What breaks first: (1).** No such database exists, and building one is a large, unglamorous analytical-chemistry effort rather than a theory problem.\n\n**But (4) is the more interesting break**, and it is easy to miss. Lewicki could optimise for \"encode the waveform\" because in audition the signal *is* the thing. In olfaction the receptor activation pattern is not the thing — the animal wants source identity and source location, which are latent causes, not the signal. So the olfactory calculation is not really an efficient-coding problem at all. It is an **inference** problem, and §0.1 warned these give different answers.\n\nThat may be why the olfactory programme has stalled even where partial data exist: it has been posed as the wrong kind of problem."
}
</script>
</x-predict>

## The comparative datasheet, three columns

<x-matrix>
<script type="application/json">
{
  "id": "m02.s04.mx1",
  "contentRev": 1,
  "points": 5,
  "corner": "Property",
  "prompt": "Fill in the audition column. Vision and olfaction are given for reference — you filled those in §1.4 and §3.4.",
  "rows": [
    "Array ordering",
    "Array dimensionality",
    "Number of channels",
    "Tuning breadth",
    "Ensemble measured?"
  ],
  "columns": ["Vision", "Audition", "Olfaction"],
  "cells": {
    "Array ordering|Audition": { "answer": "ordered", "accept": ["ordered","tonotopic","tonotopy","yes"] },
    "Array dimensionality|Audition": { "answer": "1 (frequency)", "accept": ["1","one","1d","one-dimensional","frequency"] },
    "Number of channels|Audition": { "answer": "~3500 inner hair cells", "accept": ["3500","~3500","3,500","thousands","3500 hair cells"] },
    "Tuning breadth|Audition": { "answer": "narrow", "accept": ["narrow","sharp","narrowly tuned","very narrow"] },
    "Ensemble measured?|Audition": { "answer": "yes", "accept": ["yes","measured","well characterised"] }
  },
  "modelAnswerNote": "Audition is the control condition. It is ordered and metric like vision, but one-dimensional and narrowly tuned like nothing else. If you wanted to argue that olfaction's problems come from being unordered rather than from being high-dimensional, audition is where you would test it — it shares ordering with vision and shares neither dimensionality nor tuning breadth. That is what a third data point buys you."
}
</script>
</x-matrix>
