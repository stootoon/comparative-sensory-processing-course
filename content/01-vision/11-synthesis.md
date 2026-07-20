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

**The honest caveats.** Retinal decorrelation is mostly accomplished by nonlinearity rather than the linear surround [@pitkow2012]; centre–surround is over-determined, predicted by several distinct principles; and the retina computes more than 20 parallel feature channels [@kandel2021] that efficient coding does not anticipate.

## The comparative datasheet

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="The full datasheet, pivoted. Highlight Vision and read its profile: measured ensemble, stationary statistics, ordered metric array, mature theory. Then highlight Olfaction and compare — the rows where they differ are the candidate explanations for the theoretical gap.">
</x-figure>


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

<x-matrix>
<script type="application/json">
{
  "id": "m01.s11.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Four rows where vision and olfaction differ, all of them established somewhere in this module. Fill both columns before reading the hook below — the hook is organised around exactly these differences.",
  "rows": [
    "Array ordering",
    "Statistics stationary?",
    "Peripheral noise limit",
    "Synapses to cortex"
  ],
  "columns": ["Vision", "Olfaction"],
  "cells": {
    "Array ordering|Vision": { "answer": "ordered, metric", "accept": ["ordered","metric","ordered and metric","retinotopic","ordered, metric"] },
    "Array ordering|Olfaction": { "answer": "unordered, no metric", "accept": ["unordered","no metric","unordered, no metric","none","not ordered"] },
    "Statistics stationary?|Vision": { "answer": "yes", "accept": ["yes","stationary","largely","mostly"] },
    "Statistics stationary?|Olfaction": { "answer": "no", "accept": ["no","non-stationary","nonstationary","not stationary"] },
    "Peripheral noise limit|Vision": { "answer": "photon shot noise", "accept": ["photon shot noise","photon noise","shot noise","photons","single photon"] },
    "Peripheral noise limit|Olfaction": { "answer": "molecular shot noise", "accept": ["molecular shot noise","molecule shot noise","molecular noise","molecules","shot noise in molecules"] },
    "Synapses to cortex|Vision": { "answer": "4", "accept": ["4","four"] },
    "Synapses to cortex|Olfaction": { "answer": "2", "accept": ["2","two"] }
  },
  "modelAnswerNote": "Two of these rows are differences in kind and two are differences in degree, and it is worth being clear which is which.\n\n**Kind.** Ordering is the one that removes tools rather than weakening them — a surround, a map, a convolution, a smoothness prior all need 'nearby' to denote something, and none of them degrades gracefully as the metric gets worse, because there is no worse, there is only absent. Stationarity is the other: a stationary ensemble makes a hard-wired code viable, and a non-stationary one does not, which is a switch rather than a slider.\n\n**Degree.** Both noise limits are shot noise, and the difference is which quantum is being counted. Both pathways are short, and two versus four is a difference you could imagine closing. The temptation is to treat all four rows as equally damning, and the useful discipline is to notice that only the first two change what calculations are available.\n\nThe third row cuts the other way from the first two, incidentally: it is the row where olfaction's problem is *harder in the same currency*, which means the vision tools apply and simply give a worse answer. That is the best kind of difference to have."
}
</script>
</x-matrix>

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
Four things vision hands forward, in descending order of how ready they are to use.

<strong>1. The opponent-axis calculation.</strong> PCA on natural cone responses yielded the axes along which colour is represented. The olfactory version — decorrelate receptor activations across natural odour scenes, ask whether the resulting axes have perceptual reality — is well-posed and blocked only on the ensemble. Import 1 makes it the flagship question.

<strong>2. Every metric-dependent motif is at risk.</strong> Surrounds, maps, interpolation, smoothing priors, convolution, the receptive field itself — all need "nearby" to mean something. §3.4 removes that. The productive move is not to note the absence but to ask, for each motif, what it was buying and what could buy the same thing without a metric.

<strong>3. Thalamus decomposed into services</strong> (§1.6), so §3.6 can ask which ones olfaction implements and where — rather than treating "no thalamus" as a single mysterious fact.

<strong>4. Set your expectations for piriform.</strong> Vision's theory is strong at the retina, partial at V1, absent beyond. The wall is real and it arrives about three synapses in. Olfaction reaches cortex in two. <strong>Expect the theory to run out sooner, and do not mistake that for olfaction being harder.</strong>
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m01.s11.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Hook item 2 says the productive move is not to note that a metric-dependent motif is unavailable, but to ask what it was buying and what could buy the same thing without a metric. Carry that out for one motif — pick the centre–surround, the topographic map, or the convolution. Say what the motif purchases, then propose a metric-free substitute and name its cost.",
  "modelAnswer": "Worked for the **centre–surround**, since it is the one with the most machinery attached.\n\n**What it purchases.** Not 'edge detection' — that is the phenomenon, not the purpose. It purchases *redundancy removal by subtracting a prediction*, and it does so with a wiring rule of striking cheapness: pool from your neighbours and subtract. The cheapness is the whole point. Because natural scenes are locally correlated and receptors are spatially arranged, physical adjacency is a good proxy for statistical correlation, so the optimal predictor can be specified genetically without anyone measuring anything.\n\n**What breaks.** The proxy. Removing the metric does not remove the redundancy — olfactory receptor channels are strongly correlated, because odorants co-occur — it removes the *free access* to which channels are correlated. The prediction is still worth subtracting; you just cannot tell from anatomy who to subtract from whom.\n\n**The substitute.** Learned inhibitory connectivity, with weights set by measured co-activation rather than by position. Hebbian anti-correlation learning is sufficient in principle: strengthen inhibition between glomeruli that co-activate.\n\n**The costs, and they are not small.**\n\n*Time.* The statistics must be estimated online before the code is any good, so a naive animal is uncompetitive for as long as estimation takes.\n\n*Machinery.* Plasticity, a learning rule, and something to re-estimate when the environment changes — which in a non-stationary modality is continuously. Adult neurogenesis in the bulb, otherwise peculiar two synapses from the sensor, becomes a plausible mechanism for exactly this.\n\n*Specificity.* The connectivity must be pairwise-specific across hundreds of channels, which is a much larger genetic or developmental object than 'inhibit your neighbours'.\n\n**The fallback, and why it is not the same thing.** Global normalisation — inhibition proportional to total activity — is cheap and needs no learning, and the *Drosophila* antennal lobe appears to do essentially this [@olsen2010]. But it removes only the first moment. It cannot decorrelate, so it buys dynamic range and not redundancy reduction.\n\n**The general shape of the answer, which is the transferable part:** a metric-dependent motif is usually a *cheap approximation to a statistical relationship*. Losing the metric loses the cheapness, not the relationship — so the substitute is always to learn what the geometry used to supply, and the cost is always paid in plasticity, time, and specificity.",
  "rubric": [
    "Identifies what the motif purchases computationally, not what it does phenomenally",
    "Recognises that the metric supplies a cheap proxy for statistical structure rather than the structure itself",
    "Proposes a learned, experience-dependent substitute for the geometric wiring rule",
    "Names at least two costs: learning time, plasticity machinery, or pairwise specificity",
    "Bonus: contrasts the learned substitute with global normalisation and notes the latter removes only the mean",
    "Bonus: states the general form — losing a metric loses the cheapness of a relationship, not the relationship"
  ]
}
</script>
</x-free-response>
