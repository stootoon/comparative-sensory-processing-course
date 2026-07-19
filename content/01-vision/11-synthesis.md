---
id: m01.s11
title: Normative synthesis and the olfaction hook
lede: Vision is the modality where efficient coding came closest to being proven, and where its limits are clearest. Both halves are what make it the right reference for everything else.
estimatedMinutes: 14
---

## Scoring the theories

**The retina is the success.** Measured ensemble, physical constraint, risky quantitative prediction, confirmed by later data, few free parameters (§0.2). Nothing else in sensory neuroscience scores as well.

**Colour is the other success**, and for this course the more important one. Opponent axes derived from natural cone statistics with no reference to physiology [@buchsbaum1983; @ruderman1998] — a stimulus space with no obvious coordinate system, given derived coordinates.

**V1 is partial.** Sparse coding gets simple cell receptive fields [@olshausen1996] but not complex cells, surround suppression, contextual modulation or task dependence.

**Beyond V1, nothing comparable.**

**The honest caveats.** Retinal decorrelation is mostly accomplished by nonlinearity rather than the linear surround [@pitkow2012]; centre–surround is over-determined, predicted by several distinct principles; and the retina computes ~20 parallel feature channels that efficient coding does not anticipate.

## The comparative datasheet

| Property | Vision |
|---|---|
| Array ordering | ordered, metric |
| Dimensionality | 2 spatial + 3 spectral |
| Tuning breadth | very broad spectrally, narrow spatially |
| Convergence | ~100:1 photoreceptor → ganglion |
| Ensemble measured | yes, extensively |
| Statistics stationary | yes |
| Sensor vs signal speed | comparable |
| Mixture problem | occlusion, not superposition |
| Synapses to cortex | 4 |
| Obligatory relay | LGN |
| Active sensing | saccades, ~3 Hz, plus fixational drift |
| Strongest result | SNR-dependent retinal filter |
| Biggest failure | nothing beyond V1 |

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
Four things vision hands forward, in descending order of how ready they are to use.

<strong>1. The opponent-axis calculation.</strong> PCA on natural cone responses yielded the axes along which colour is represented. The olfactory version — decorrelate receptor activations across natural odour scenes, ask whether the resulting axes have perceptual reality — is well-posed and blocked only on the ensemble. §12.1 makes it the flagship question.

<strong>2. Every metric-dependent motif is at risk.</strong> Surrounds, maps, interpolation, smoothing priors, convolution, the receptive field itself — all need "nearby" to mean something. §3.4 removes that. The productive move is not to note the absence but to ask, for each motif, what it was buying and what could buy the same thing without a metric.

<strong>3. Thalamus decomposed into services</strong> (§1.6), so §3.6 can ask which ones olfaction implements and where — rather than treating "no thalamus" as a single mysterious fact.

<strong>4. Set your expectations for piriform.</strong> Vision's theory is strong at the retina, partial at V1, absent beyond. The wall is real and it arrives about three synapses in. Olfaction reaches cortex in two. <strong>Expect the theory to run out sooner, and do not mistake that for olfaction being harder.</strong>
</x-callout>
