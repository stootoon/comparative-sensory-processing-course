---
id: m13.s01
title: Imports from vision and audition
lede: The method, and the first two modalities to run it on. Every import is carried to a concrete falsifiable prediction — an analogy that stops at "these are similar" has done no work.
estimatedMinutes: 30
---

The capstone works through the eight modalities in turn, and then the two modules that are not modalities, asking of each: what does it know that olfaction could use?

This section sets out the method and applies it to vision and audition, the two modalities with mature normative theories. §13.2 takes touch and taste, §13.3 the vestibular and proprioceptive systems, §13.4 the exotic senses, and §13.5 the two modules that are not modalities at all — development and evolution, and artificial sensing. §13.6 collects everything into a ranked agenda, §13.7 draws the conclusions, and §13.8 is the final exam.

The format is fixed, and every item must reach step four.

1. The imported concept
2. The candidate olfactory analogue
3. The disanalogy that breaks it
4. **A concrete prediction or experiment**

## Import 1 — from §1.2: the opponent-channel question

**Imported:** PCA on natural cone responses yields the achromatic and two opponent axes. A stimulus space with no obvious coordinate system was given derived coordinates, from measured statistics alone [@buchsbaum1983; @ruderman1998].

**Candidate analogue:** run the same calculation on receptor-activation vectors evoked by natural odour scenes. Decorrelate, and ask whether the resulting axes have perceptual or neural reality.

**The disanalogy:** two problems, one soluble and one hard. There is no natural-odour-scene database with ground-truth composition comparable to natural-image databases. And cone responses combine linearly while receptor responses to mixtures do not — competitive binding and antagonism break superposition at the very first stage, so the linear-PCA move is not straightforwardly available.

**Prediction:** if odour statistics have a dominant low-dimensional structure inherited from biochemistry — compounds co-occurring because shared metabolic pathways produce them — then the derived axes should align with *biosynthetic* rather than physicochemical categories. This is testable now against existing co-occurrence data, and it is a different prediction from the hyperbolic-geometry proposal [@zhou2018], which says the space is not Euclidean at all. **The two can be distinguished**: hyperbolic embedding predicts that hierarchical distances are preserved while Euclidean PCA predicts a flat opponent structure. Fit both to the same co-occurrence data and compare held-out likelihood.

## Import 2 — from §1.4: the retinotopy question

**Imported:** vision's map is inherited free from the sensor sheet, and almost every computational motif depends on it.

**Candidate analogues:** three, mutually exclusive.

- **(a) No map, and the theory must explain why.** With no metric on receptor identity, wiring-length minimisation — the standard explanation for why maps exist — has nothing to minimise. Under this reading the absence is *predicted*, not anomalous.
- **(b) A map of a derived variable.** Bats build orderly cortical maps of echo delay: a computed quantity the receptor array does not supply directly. So a map can exist for something the sensor never measured. Candidates in olfaction: concentration, temporal contrast, plume-derived source distance, valence, novelty.
- **(c) Coarse chemotopy.** Weak clustering in the bulb. The honest state of the evidence is that this is contested and at best coarse.

**The disanalogy:** (b) requires the derived variable to be worth mapping — maps pay off when downstream computation needs *local* interactions among similar values. Odour identity has no such requirement.

**Prediction:** if a computed map exists, it should be for a behaviourally derived variable, and it should be **downstream of the bulb** — in anterior olfactory nucleus, olfactory tubercle, or a cortical subregion — not in the bulb, whose organisation is set by receptor identity. Given §3.2, the highest-prior candidate is **source distance**, since plume statistics carry that information and it is exactly the kind of continuous variable local interactions help with. Look for it with wide-field imaging under controlled plume geometry, varying distance while holding identity and mean concentration fixed.

## Import 3 — from §1.4: the tuning-breadth benchmark

**Imported:** optimal tuning width is derivable given stimulus dimensionality, channel count, and noise, and optimal tuning density tracks the prior [@ganguli2014]. Vision sits near the predicted optimum.

**Candidate analogue:** measure whether olfactory receptor tuning breadth sits near *its* optimum, given the effective dimensionality of natural odour space.

**The disanalogy:** the calculation needs the effective dimensionality of the natural ensemble, which returns us to the missing database.

**Prediction, and this one is sharp:** receptor *abundance* varies over orders of magnitude across types. If the Ganguli–Simoncelli logic holds, abundance should track the **prior probability of encountering ligands for that receptor in the animal's natural environment**. That is testable without solving the full dimensionality problem — it needs only relative encounter frequencies, which are far easier to estimate than a complete odour-scene ensemble. It also predicts that receptor abundance distributions should differ between species with different ecologies in a direction predictable from diet and habitat.

## Import 4 — from §1.5: whitening under SNR

**Imported:** the crown-jewel result. The optimal filter shifts from bandpass to lowpass as SNR falls, predicted in advance and confirmed [@srinivasan1982; @atick1992; @dan1996].

**Candidate analogue:** bulbar processing should shift from decorrelating to pooling as concentration falls toward threshold.

**The disanalogy:** as §3.5 argued, there is no agreed stimulus space in which to define the filter, and lowering concentration changes *which* receptors are engaged rather than merely scaling a fixed pattern.

**Prediction:** translate into the temporal domain, where olfaction does have measured statistics. Discrimination of correlated versus anti-correlated fluctuations [@ackels2021] should degrade at low concentration, and the frequency band carrying most information should **shift downward** as SNR falls — the whitening-to-pooling crossover, in the one domain where the ensemble is characterised [@tootoonian2025].

<x-free-response>
<script type="application/json">
{
  "id": "m13.s01.f1",
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

## Import 5 — from audition: temporal correlation is olfaction's harmonicity

**Imported:** audition faces the mixture problem in its purest form — sources sum exactly in a shared one-dimensional carrier — and solves it with **lawful relations between components of one source**. Harmonicity above all: partials at integer multiples of a fundamental are almost certainly one object.

**Candidate analogue:** molecules from one source travel together through the same turbulent eddies, so their concentrations fluctuate together. Molecules from separated sources decorrelate. Temporal correlation occupies the same slot in the same inference that harmonicity occupies in audition.

**The disanalogy:** harmonicity is a *physical law* about vibrating objects, known in advance and identical for every source. Temporal correlation is a *statistical* relation that depends on flow geometry, wind, and distance — it must be estimated, not assumed. And the estimate degrades exactly where it is most needed, far from the source.

**Prediction:** if temporal correlation is the binding cue, there should be neurons in piriform or anterior olfactory nucleus that respond to **coincident onset across glomeruli** more strongly than to the same glomeruli activated asynchronously — a common-onset detector, the direct analogue of auditory grouping units. Mice can discriminate correlations up to 40 Hz [@ackels2021], so the resolution exists. **Test:** deliver two odorants through separate lines, vary their cross-correlation while holding mean concentration and identity fixed, and look for cells whose response depends on correlation alone.

## Import 6 — from audition: is there an olfactory critical band?

**Imported:** the critical band is the resolution limit of the cochlear filterbank, measured *behaviourally* by masking. A background masks a target if and only if it falls within the same auditory filter. It is a psychophysical measurement of a peripheral property, and it works.

**Candidate analogue:** a masking bandwidth in chemical space. Does a background odorant mask a target if and only if their receptor activation patterns overlap beyond some threshold?

**The disanalogy:** the critical band is a *distance* on a metric axis. Chemical space has no metric (§3.4), so "bandwidth" must be redefined as overlap in receptor activation rather than as a distance.

**Prediction, and this is the sharp one:** masking should be governed by **receptor-activation overlap**, not by perceptual similarity. Those two dissociate — molecules can smell alike while activating different receptors, and vice versa. **Where they dissociate is the crucial test**, and it distinguishes a peripheral account of masking from a central one. The experiment is a standard psychophysical masking paradigm with odorant pairs chosen from receptor-response data to dissociate the two similarity measures.

## Import 7 — from audition: the range that matters is the range encountered

**Imported:** the ITD-coding dispute (§2.5) resolved not by deciding who was right but by noticing that owl and gerbil face different problems. A place map is worth building when many cycles fit inside the physiological range; two broad channels win when the whole range is a fraction of a cycle. **The optimal code depends on the range of stimuli actually encountered, not the range physically possible.**

**Candidate analogue:** apply the same test before asking whether the olfactory system should map anything. For any candidate variable — concentration, source distance, temporal contrast — ask what range the animal actually experiences and whether there is room in it for a map to be worth building.

**Prediction:** concentration spans orders of magnitude and is behaviourally important, which by this criterion is the *best* candidate for an olfactory map of a derived variable — better than identity, which has no metric to map. **Look for orderly spatial organisation of concentration preference** in a downstream structure, not in the bulb.

## The running datasheet

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="The whole course in one grid, sorted by how much the modalities differ. This is what the comparative method produces: a set of axes on which every modality has a position, so that 'olfaction is unusual' becomes a specific claim about which properties and in which direction.">
</x-figure>


<x-matrix>
<script type="application/json">
{
  "id": "m13.s01.mx1",
  "contentRev": 1,
  "points": 5,
  "corner": "Axis",
  "prompt": "The datasheet as vision and audition leave it. Fill in what these two modalities alone establish — §11 pivots the completed version, with a column per modality, into the axes the course argues on.",
  "rows": [
    "Natural ensemble characterised?",
    "Stimulus statistics stationary across environments?",
    "Where is spatial information carried?",
    "Sensor bandwidth vs signal bandwidth",
    "Can the code be hard-wired?"
  ],
  "columns": ["Vision", "Audition", "Olfaction"],
  "cells": {
    "Natural ensemble characterised?|Vision": { "answer": "yes", "accept": ["yes", "well characterised", "measured"] },
    "Natural ensemble characterised?|Audition": { "answer": "yes", "accept": ["yes", "measured", "well characterised"] },
    "Natural ensemble characterised?|Olfaction": { "answer": "no", "accept": ["no", "not yet", "partially", "poorly"] },
    "Stimulus statistics stationary across environments?|Audition": { "answer": "yes", "accept": ["yes", "stationary", "mostly"] },
    "Stimulus statistics stationary across environments?|Olfaction": {
      "answer": "no",
      "accept": ["no", "non-stationary", "not stationary", "varies"]
    },
    "Where is spatial information carried?|Olfaction": {
      "answer": "temporal correlations",
      "accept": ["temporal", "time", "correlations", "temporal correlation", "timing", "fluctuations"]
    },
    "Sensor bandwidth vs signal bandwidth|Audition": { "answer": "sensor much faster than signal", "accept": ["faster", "sensor faster", "much faster", "microseconds"] },
    "Sensor bandwidth vs signal bandwidth|Olfaction": {
      "answer": "sensor is slower than the signal",
      "accept": ["sensor slower", "slower", "sensor is slower", "mismatch", "signal faster"]
    }
  },
  "modelAnswerNote": "The last row is close to unique among the classical senses. Vision, audition, and touch all have sensors fast enough for the signals that matter to them; olfactory receptor neurons are roughly an order of magnitude too slow for the plume structure animals demonstrably use. That mismatch is not a flaw to be explained away — it forces population solutions, and it is the reason convergence in the bulb may be doing temporal rather than amplitude work."
}
</script>
</x-matrix>

## What vision and audition have handed over

What these two modalities alone have sharpened. Import 5 re-ranks the whole list once the other six have contributed, and the order changes substantially — several items below are displaced by cheaper experiments imported from the vestibular and electrosensory systems.

1. **Is there a derivable coordinate system for odour?** (§1.2) The flagship question. Blocked on the natural-odour-scene database, not on theory.
2. **Does the bulb implement structured decorrelation or global normalisation?** (§1.5, §3.5) Directly testable, and the answer determines whether adult neurogenesis has a normative rationale.
3. **Where is olfaction's dorsal stream?** (§3.1) Identity and location are computationally distinct problems sharing one sensory surface. Vision separated them; olfaction should too.
4. **Is the bulb's real receptive field temporal rather than chemical?** (§3.4) Would reframe the silent-neuron literature entirely.
5. **Does receptor abundance track natural encounter frequency?** (§1.4) The cheapest test on this list.
6. **Kinetic heterogeneity or pooling for fast fluctuations?** (§3.2) A solved precedent exists in electroreception.
7. **Is there an olfactory critical band?** (Import 6) A masking experiment in chemical space, with the sharp version being that masking should track receptor overlap rather than perceptual similarity.
8. **Is there a common-onset detector in piriform?** (Import 5) The direct analogue of auditory grouping units, and the mechanistic test of the temporal-correlation claim.

Notice what is *not* on this list. Every item above came from a modality with an ordered, metric receptor array and a mature normative theory, and every one of them consequently frames olfaction's problem as a coding problem — find the coordinates, derive the filter, measure the tuning.

The remaining six modalities change that framing rather than extending it. The sharpest imports still to come have no analogue in either vision or audition: cancellation of predicted input from electroreception, acuity-as-deconvolution from infrared sensing, coordinate transformation as a first-circuit job from proprioception, and ambiguity resolution under a forward model from the vestibular system — which §3.1 already flagged as the closest structural match to olfaction's concentration/distance/transport confound.

Two of those will turn out to be cheaper to run than anything on this list.
