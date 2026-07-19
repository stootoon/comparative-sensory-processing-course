---
id: m03.s11
title: Normative synthesis and open questions
lede: Olfaction is where the normative programme has the least to show and the most to gain. This section scores the attempts honestly and hands the capstone a ranked list of what to do next.
estimatedMinutes: 16
---

## Scoring the theories

Held against the five criteria of §0.2, and the record is mixed in a specific and diagnosable way.

**Where olfaction does well.** Constraints are clear and physical — receptor count, shot-noise-limited transduction, the ~200 ms deadline, sparse connectivity. Objectives can be stated precisely. The invertebrate work in particular has produced genuine successes: divisive normalisation in the antennal lobe [@olsen2010], random projections to Kenyon cells at close to the connection degree that maximises representation dimension [@litwinkumar2017].

**Where it fails, consistently: criterion one.** There is no measured natural ensemble. Every account in this module optimises against an assumed input distribution rather than a measured one, and that is exactly the ingredient the retinal and cochlear successes depended on.

**A second, subtler failure.** §2.4's prediction exercise raised it: Lewicki could optimise for "encode the waveform" because in audition the signal is the thing. In olfaction the receptor pattern is *not* the thing — the animal wants source identity and source location, which are latent causes. So the olfactory version may not be an efficient-coding problem at all but an **inference** problem, and §0.1 warned those give different answers. Some of the stall may be from posing the wrong kind of question.

**The one part that is in good shape.** Plume statistics are measured, characterised, and analytically tractable [@celani2014; @tootoonian2025]. Olfaction's *temporal* ensemble is known even though its chemical ensemble is not. That is where the tractable normative work is, and it is under-exploited.

## The completed datasheet

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="The datasheet, sorted by how much the modalities differ. Olfaction is at or near the bottom of the top four rows, and those rows are not independent — dimensionality is what drives the rest. Switch the highlight to Gustation for the control case: also unordered, also non-metric, and without any of the difficulties.">
</x-figure>


| Property | Vision | Audition | Olfaction |
|---|---|---|---|
| Array ordering | ordered, metric | ordered, metric | **unordered, non-metric** |
| Dimensionality | 2 spatial + 3 spectral | 1 (frequency) | ~400–1000 |
| Tuning breadth | very broad spectrally | narrow | broad |
| Convergence to first circuit | ~100:1 | ~1:1 to a few | **~1000:1** |
| Ensemble measured | yes | yes | **chemical no, plume yes** |
| Statistics stationary | yes | yes | **no** |
| Sensor vs signal speed | comparable | sensor much faster | **sensor slower** |
| Mixture problem | occlusion | additive, 1-D | additive, high-D, nonlinear |
| Grouping cues | many | harmonicity, onset, modulation | **temporal correlation** |
| Synapses to cortex | 4 | 5+ | **2** |
| Obligatory relay | LGN | IC, MGB | **none** |
| Central representation | V1, laminated, topographic | A1, laminated, tonotopic | **piriform, 3-layer, non-topographic** |
| Active sensing | saccades ~3 Hz | head movement only | **sniff 2–10 Hz, shapes stimulus** |
| Adult neurogenesis | no | no | **yes** |

## The olfaction hook — what goes to the capstone

Ranked by how ready each is to be acted on.

**1. Does receptor abundance track natural encounter frequency?** The cheapest test on the list. Needs only relative ligand encounter frequencies and existing abundance data, and it has a built-in comparative control across species with different ecologies. A null result would be informative either way.

**2. Structured decorrelation or global normalisation in the bulb?** (§3.5) Does the inhibition a glomerulus receives depend on *which* other glomeruli are active or only on *how many*, and does that change after prolonged exposure to a structured odour environment? Settles whether adult neurogenesis has a normative rationale.

**3. Where is the dorsal stream?** (§3.8) Look for neurons tuned to plume statistics — intermittency, whiff frequency, bilateral correlation — rather than to chemical identity. Likely missed because standard protocols present no plume statistics at all.

**4. Is the bulb's receptive field temporal rather than chemical?** (§3.4) Would reframe the silent-neuron literature entirely. Same experimental gap as (3).

**5. Do the thalamic services have thalamic signatures?** (§3.6) Compare attentional modulation depth, time constants and state dependence of bulbar granule-cell gating against LGN quantitatively. Measurable now; apparently not yet done.

**6. Kinetic heterogeneity or pooling for fast fluctuations?** (§3.3) Distinguishable by whether performance scales with converging neuron number or degrades with reduced kinetic diversity.

**7. Can the receptor repertoire be derived from natural statistics?** (§2.4) The flagship, and the one blocked on a years-long data-collection effort — plus the conceptual question of whether it is an efficient-coding or an inference problem.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The honest summary</div>
Olfaction's theoretical gap relative to vision and audition is <strong>not</strong> mainly because olfaction is harder, or because its theorists are less capable.

It is because the other two had their input ensembles measured first, by people who mostly were not thinking about coding theory at all. Natural image statistics and natural sound statistics were characterised, and only then could anyone derive anything.

Olfaction has half of this. The plume ensemble is measured; the chemical ensemble is not. <strong>The distribution of open questions above follows that split exactly</strong> — the tractable ones are temporal, and the flagship one is chemical.
</x-callout>
