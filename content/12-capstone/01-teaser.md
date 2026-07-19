---
id: m12.s01
title: What the comparison buys
lede: Four sections of vision against four of olfaction. Here is what that alone licenses — each import carried to a concrete, falsifiable prediction rather than an analogy.
estimatedMinutes: 22
---

The full capstone works through eight modalities. This sampler has two, and four sections of each. So this page is deliberately limited: only what vision has *already* licensed.

The format is fixed, and every item must reach step four. An analogy that stops at "these are similar" has done no work.

1. The imported concept
2. The candidate olfactory analogue
3. The disanalogy that breaks it
4. **A concrete prediction or experiment**

## 12.1 From §1.2 — the opponent-channel question

**Imported:** PCA on natural cone responses yields the achromatic and two opponent axes. A stimulus space with no obvious coordinate system was given derived coordinates, from measured statistics alone [@buchsbaum1983; @ruderman1998].

**Candidate analogue:** run the same calculation on receptor-activation vectors evoked by natural odour scenes. Decorrelate, and ask whether the resulting axes have perceptual or neural reality.

**The disanalogy:** two problems, one soluble and one hard. There is no natural-odour-scene database with ground-truth composition comparable to natural-image databases. And cone responses combine linearly while receptor responses to mixtures do not — competitive binding and antagonism break superposition at the very first stage, so the linear-PCA move is not straightforwardly available.

**Prediction:** if odour statistics have a dominant low-dimensional structure inherited from biochemistry — compounds co-occurring because shared metabolic pathways produce them — then the derived axes should align with *biosynthetic* rather than physicochemical categories. This is testable now against existing co-occurrence data, and it is a different prediction from the hyperbolic-geometry proposal [@zhou2018], which says the space is not Euclidean at all. **The two can be distinguished**: hyperbolic embedding predicts that hierarchical distances are preserved while Euclidean PCA predicts a flat opponent structure. Fit both to the same co-occurrence data and compare held-out likelihood.

## 12.2 From §1.4 — the retinotopy question

**Imported:** vision's map is inherited free from the sensor sheet, and almost every computational motif depends on it.

**Candidate analogues:** three, mutually exclusive.

- **(a) No map, and the theory must explain why.** With no metric on receptor identity, wiring-length minimisation — the standard explanation for why maps exist — has nothing to minimise. Under this reading the absence is *predicted*, not anomalous.
- **(b) A map of a derived variable.** Bats build orderly cortical maps of echo delay: a computed quantity the receptor array does not supply directly. So a map can exist for something the sensor never measured. Candidates in olfaction: concentration, temporal contrast, plume-derived source distance, valence, novelty.
- **(c) Coarse chemotopy.** Weak clustering in the bulb. The honest state of the evidence is that this is contested and at best coarse.

**The disanalogy:** (b) requires the derived variable to be worth mapping — maps pay off when downstream computation needs *local* interactions among similar values. Odour identity has no such requirement.

**Prediction:** if a computed map exists, it should be for a behaviourally derived variable, and it should be **downstream of the bulb** — in anterior olfactory nucleus, olfactory tubercle, or a cortical subregion — not in the bulb, whose organisation is set by receptor identity. Given §3.2, the highest-prior candidate is **source distance**, since plume statistics carry that information and it is exactly the kind of continuous variable local interactions help with. Look for it with wide-field imaging under controlled plume geometry, varying distance while holding identity and mean concentration fixed.

## 12.3 From §1.4 — the tuning-breadth benchmark

**Imported:** optimal tuning width is derivable given stimulus dimensionality, channel count, and noise, and optimal tuning density tracks the prior [@ganguli2014]. Vision sits near the predicted optimum.

**Candidate analogue:** measure whether olfactory receptor tuning breadth sits near *its* optimum, given the effective dimensionality of natural odour space.

**The disanalogy:** the calculation needs the effective dimensionality of the natural ensemble, which returns us to the missing database.

**Prediction, and this one is sharp:** receptor *abundance* varies over orders of magnitude across types. If the Ganguli–Simoncelli logic holds, abundance should track the **prior probability of encountering ligands for that receptor in the animal's natural environment**. That is testable without solving the full dimensionality problem — it needs only relative encounter frequencies, which are far easier to estimate than a complete odour-scene ensemble. It also predicts that receptor abundance distributions should differ between species with different ecologies in a direction predictable from diet and habitat.

## 12.4 From §1.5 — whitening under SNR

**Imported:** the crown-jewel result. The optimal filter shifts from bandpass to lowpass as SNR falls, predicted in advance and confirmed [@srinivasan1982; @atick1992; @dan1996].

**Candidate analogue:** bulbar processing should shift from decorrelating to pooling as concentration falls toward threshold.

**The disanalogy:** as §3.5 argued, there is no agreed stimulus space in which to define the filter, and lowering concentration changes *which* receptors are engaged rather than merely scaling a fixed pattern.

**Prediction:** translate into the temporal domain, where olfaction does have measured statistics. Discrimination of correlated versus anti-correlated fluctuations [@ackels2021] should degrade at low concentration, and the frequency band carrying most information should **shift downward** as SNR falls — the whitening-to-pooling crossover, in the one domain where the ensemble is characterised [@tootoonian2025].

<x-free-response>
<script type="application/json">
{
  "id": "m12.s01.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Pick the one prediction above you would actually run first, and defend the choice on grounds of cost and informativeness. What would a null result tell you?",
  "modelAnswer": "A defensible answer picks 12.3, receptor abundance against natural encounter frequency, on cost grounds. It needs no new theory, no new recording technology, and no complete odour-scene database — only relative ligand encounter frequencies and existing receptor abundance data, some of which is published. It also has a built-in comparative control: species with different ecologies should differ in a predictable direction.\n\nA null result would be genuinely informative rather than merely disappointing, which is the mark of a good experiment. If abundance does not track encounter frequency, either the Ganguli–Simoncelli logic does not transfer to unordered arrays, or abundance is set by developmental and genomic constraints rather than by coding optimality. Both are substantive conclusions, and the second would be an important negative result about how far optimality arguments reach in a system where the receptor repertoire is a gene family subject to birth-and-death evolution.\n\n12.4 is also a strong answer: it builds directly on an existing paradigm, and the prediction is quantitative. The weakest first choice is 12.1, not because it is uninteresting — it is the most important question here — but because it is blocked on a data-collection effort measured in years.",
  "rubric": [
    "Makes an explicit cost-versus-informativeness argument rather than picking the most interesting question",
    "States what a null result would establish, and shows it would be informative either way",
    "Recognises that 12.1 is blocked on a missing dataset rather than on theory",
    "Bonus: notes that 12.3 has a built-in comparative control across species"
  ]
}
</script>
</x-free-response>

## The running datasheet

<x-matrix>
<script type="application/json">
{
  "id": "m12.s01.mx1",
  "contentRev": 1,
  "points": 5,
  "corner": "Axis",
  "prompt": "The comparative datasheet as it stands after this sampler. In the full course this table grows a column per modality and becomes the backbone of the synthesis modules.",
  "rows": [
    "Natural ensemble characterised?",
    "Stimulus statistics stationary across environments?",
    "Where is spatial information carried?",
    "Sensor bandwidth vs signal bandwidth",
    "Can the code be hard-wired?"
  ],
  "columns": ["Vision", "Olfaction", "Consequence"],
  "cells": {
    "Natural ensemble characterised?|Vision": { "answer": "yes", "accept": ["yes", "well characterised", "measured"] },
    "Natural ensemble characterised?|Olfaction": { "answer": "no", "accept": ["no", "not yet", "partially", "poorly"] },
    "Stimulus statistics stationary across environments?|Olfaction": {
      "answer": "no",
      "accept": ["no", "non-stationary", "not stationary", "varies"]
    },
    "Where is spatial information carried?|Olfaction": {
      "answer": "temporal correlations",
      "accept": ["temporal", "time", "correlations", "temporal correlation", "timing", "fluctuations"]
    },
    "Sensor bandwidth vs signal bandwidth|Olfaction": {
      "answer": "sensor is slower than the signal",
      "accept": ["sensor slower", "slower", "sensor is slower", "mismatch", "signal faster"]
    }
  },
  "modelAnswerNote": "The last row is close to unique among the classical senses. Vision, audition, and touch all have sensors fast enough for the signals that matter to them; olfactory receptor neurons are roughly an order of magnitude too slow for the plume structure animals demonstrably use. That mismatch is not a flaw to be explained away — it forces population solutions, and it is the reason convergence in the bulb may be doing temporal rather than amplitude work."
}
</script>
</x-matrix>

## Open questions, ranked

What the comparison has sharpened, in priority order. Each is tagged with the section that generated it.

1. **Is there a derivable coordinate system for odour?** (§1.2) The flagship question. Blocked on the natural-odour-scene database, not on theory.
2. **Does the bulb implement structured decorrelation or global normalisation?** (§1.5, §3.5) Directly testable, and the answer determines whether adult neurogenesis has a normative rationale.
3. **Where is olfaction's dorsal stream?** (§3.1) Identity and location are computationally distinct problems sharing one sensory surface. Vision separated them; olfaction should too.
4. **Is the bulb's real receptive field temporal rather than chemical?** (§3.4) Would reframe the silent-neuron literature entirely.
5. **Does receptor abundance track natural encounter frequency?** (§1.4) The cheapest test on this list.
6. **Kinetic heterogeneity or pooling for fast fluctuations?** (§3.2) A solved precedent exists in electroreception.
7. **Is there an olfactory analogue of the critical band?** (§1.4) Requires the audition module — a masking experiment in chemical space.

The full course adds audition, somatosensation, gustation, vestibular, proprioception, and the exotic senses. Each contributes its own imports, and several of the sharpest — cancellation of predicted input from electroreception, acuity-as-deconvolution from infrared sensing, ambiguity resolution from the vestibular system — have no analogue in vision at all.
