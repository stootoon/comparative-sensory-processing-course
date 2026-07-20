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

<x-mcq>
<script type="application/json">
{
  "id": "m03.s11.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You are asked to separate this module's confirmed results from its well-motivated proposals. Which of the following is a confirmed experimental result about the biology, rather than a proposal about what the biology might be doing?",
  "options": [
    {
      "text": "Lateral inhibition in the Drosophila antennal lobe scales with total ORN population activity, and a model with two free variables predicts projection-neuron responses across odours and concentrations [@olsen2010].",
      "correct": true,
      "feedback": "Correct. This is a measurement with a fitted model that generalises out of sample — the divisive-normalisation form was tested against responses it was not fitted to, and it held. Note what it does *not* establish: that normalisation is there for the normative reason usually attached to it. The result is the input–output relation; the rationale remains an interpretation. That distinction survives even for the module's strongest results."
    },
    {
      "text": "Sister cells distribute a sparse-recovery inference across the bulb, which is what makes biologically sparse connectivity sufficient to reach the MAP solution [@tootoonian2022].",
      "correct": false,
      "feedback": "Correct under the assumption that a proof about a well-posed problem is a claim about the animal. It is not, and §3.5 says so in terms: this is a **proof of possibility, not a claim about what the bulb does.** What was shown is that an algorithm exists which attains the MAP solution under sparse connectivity — a genuine result in the theory, and a reason to take sister cells seriously as a candidate rather than an anatomical curiosity. Whether the bulb runs it is untested, and competing accounts of sister cells exist, since their response properties and downstream targets differ in ways the model assumes away."
    },
    {
      "text": "Mitral and tufted cells implement a speed–accuracy decomposition, with tufted cells supporting fast coarse inference and mitral cells slower inference incorporating cortical feedback.",
      "correct": false,
      "feedback": "Correct under the assumption that a measured difference in latency and threshold identifies the function of a split. The measurements are solid — tufted cells do respond earlier and at lower concentrations. The speed–accuracy reading is one possible interpretation of why the split exists, offered as such in §3.5, and §3.10 floats a quite different job for the same anatomy. When two rationales compete for one structure, neither is established by the structure."
    },
    {
      "text": "Bulbar lateral inhibition implements structured decorrelation tuned to the correlations in the animal's odour environment, which is what adult neurogenesis exists to maintain.",
      "correct": false,
      "feedback": "Correct under the assumption that the normative argument for neurogenesis has been confirmed. It has not — it sits at number two on the list below precisely because it is open. The discriminating experiment is stated there: does the inhibition a glomerulus receives depend on *which* other glomeruli are active, or only on how many? Note that the confirmed result in the correct option is evidence for the *other* answer in a different species."
    }
  ]
}
</script>
</x-mcq>

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

**1. Does receptor abundance track natural encounter frequency?** The cheapest test on the list. The quantity in question is the deviation from the ~5,000 neurons per receptor type that is the mouse average (§3.4) — the question is whether that number is flat across the repertoire or is allocated, and allocation is what the efficient-coding argument predicts. Needs only relative ligand encounter frequencies and existing abundance data, and it has a built-in comparative control across species with different ecologies. A null result would be informative either way.

**2. Structured decorrelation or global normalisation in the bulb?** (§3.5) Does the inhibition a glomerulus receives depend on *which* other glomeruli are active or only on *how many*, and does that change after prolonged exposure to a structured odour environment? Settles whether adult neurogenesis has a normative rationale.

**3. Where is the dorsal stream?** (§3.8) Look for neurons tuned to plume statistics — intermittency, whiff frequency, bilateral correlation — rather than to chemical identity. Likely missed because standard protocols present no plume statistics at all.

**4. Is the bulb's receptive field temporal rather than chemical?** (§3.4) Would reframe the silent-neuron literature entirely. Same experimental gap as (3).

**5. Do the thalamic services have thalamic signatures?** (§3.6) Compare attentional modulation depth, time constants and state dependence of bulbar granule-cell gating against LGN quantitatively. Measurable now; apparently not yet done.

**6. Kinetic heterogeneity or pooling for fast fluctuations?** (§3.3) Distinguishable by whether performance scales with converging neuron number or degrades with reduced kinetic diversity.

**7. Can the receptor repertoire be derived from natural statistics?** (§2.4) The flagship, and the one blocked on a years-long data-collection effort — plus the conceptual question of whether it is an efficient-coding or an inference problem.

<x-order>
<script type="application/json">
{
  "id": "m03.s11.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 37,
  "prompt": "Reconstruct the chain that leads from the physics of odour transport to the claim that olfaction's spatial problem is a temporal one. Each step should follow from the one above it.",
  "items": [
    { "id": "a", "text": "Turbulent transport is chaotic, so the mapping from source to receptor input is effectively irreversible." },
    { "id": "b", "text": "The resulting signal is intermittent: power-law whiff and blank durations, heavy-tailed concentrations." },
    { "id": "c", "text": "Time-averaged concentration therefore carries no usable directional gradient at the scale of an animal." },
    { "id": "d", "text": "Source location must be inferred from the temporal structure of detections instead — whiff frequency, blank statistics, correlations between sampling points." },
    { "id": "e", "text": "Search becomes sequential evidence accumulation, and maximising expected information gain reproduces the casting and surging animals actually perform." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "The chain matters because each link is doing separable work, and people routinely skip from (a) to (e).\n\nStep (a) is a claim about physics, and it is stronger than vision's ill-posedness. An image can be inverted badly; a plume cannot be inverted at all, because the forward map has destroyed the information rather than merely mixed it. Step (b) is a *measured* statistical characterisation [@celani2014; @tootoonian2025] — this is the half of olfaction's ensemble that exists, and the reason the temporal problem is tractable while the chemical one is not. Step (c) is the negative result everything downstream depends on: it is why bacterial chemotaxis does not scale up. Step (d) is the reframing the module is built on — **spatial information lives in temporal correlation** — and it is what makes bilateral comparison and whiff timing worth measuring. Step (e) is where behaviour re-enters [@vergassola2007].\n\nWhat the ordering exposes: the reason infotaxis is convincing is not that it fits trajectories, since several rules fit trajectories. It is that it is what steps (a) through (d) force you to. A model that reproduces behaviour without that derivation would be a curve fit.\n\nAnd note where the chain does *not* go. Nothing in it mentions chemical identity. This is the module's central asymmetry: the location problem has a measured ensemble and a stateable objective, the identity problem has neither, and §3.1 was right that treating them as one problem obscures exactly this."
}
</script>
</x-order>

<x-callout class="x-callout is-key">
<div class="x-callout-title">The honest summary</div>
Olfaction's theoretical gap relative to vision and audition is <strong>not</strong> mainly because olfaction is harder, or because its theorists are less capable.

It is because the other two had their input ensembles measured first, by people who mostly were not thinking about coding theory at all. Natural image statistics and natural sound statistics were characterised, and only then could anyone derive anything.

Olfaction has half of this. The plume ensemble is measured; the chemical ensemble is not. <strong>The distribution of open questions above follows that split exactly</strong> — the tractable ones are temporal, and the flagship one is chemical.
</x-callout>
