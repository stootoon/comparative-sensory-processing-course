---
id: m05.s04
title: The receptor array
lede: Unordered like olfaction, tiny unlike everything, and deliberately collapsed unlike anything. Taste is the low-dimensional endpoint of the course's main axis.
estimatedMinutes: 12
---

## The array

Taste receptor cells sit in taste buds distributed across the tongue, palate and epiglottis. Roughly 50–100 cells per bud, a few thousand buds.

<x-figure src="content/media/taste-bud-structure.jpg"
  caption="A taste bud. Fifty to a hundred receptor cells packed into a single structure, with a pore admitting dissolved chemicals at the top. Contrast the olfactory epithelium (§3.4), where each receptor neuron expresses one receptor type and same-type neurons are scattered — here the cells of different types are packed together and it makes no difference, because there is no combinatorial pattern across space to preserve."
  credit="Jonas Tole. CC0 (public domain dedication)."
  source="https://commons.wikimedia.org/wiki/File:Taste_bud_2_eng.svg">
</x-figure>


**The array is unordered**, in exactly the sense §3.4 defined. There is no meaningful spatial arrangement of taste qualities — the "tongue map" of school textbooks is wrong, and all qualities are detectable across the tongue. Permuting which bud sits where would change nothing.

<x-figure src="content/media/vallate-papilla-sem.jpg"
  caption="A vallate papilla, false-coloured SEM. Taste buds line the trench walls. The papillae are arranged systematically on the tongue — but the taste qualities are not arranged systematically across the papillae, which is the sense in which the array is unordered."
  credit="Hanna Jackowiak. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Brodawka_j%C4%99zykowa_okolona.tif">
</x-figure>


So taste shares olfaction's central structural property. It has no metric on receptor identity, and none of the motifs that presuppose one.

**But the array is tiny.** About five channels, against olfaction's several hundred.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Unordered does not entail high-dimensional</div>
This is why gustation earns a place in the course despite being a small module.

If you only compared vision and olfaction, you could not tell which of olfaction's properties were causing its difficulties — unordered, high-dimensional, non-metric, broadly tuned all vary together.

<strong>Taste is unordered AND low-dimensional AND narrowly tuned.</strong> It dissociates them.

And the consequence is instructive: taste has none of olfaction's problems. With five channels there is no demixing problem worth the name, no need for expansion recoding, no combinatorial explosion, and no difficulty defining the stimulus space.

<strong>So olfaction's difficulties come from high dimensionality, not from being unordered per se.</strong> That is a real conclusion, and only a third data point makes it available.
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m05.s04.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout concludes that olfaction's difficulties come from high dimensionality rather than from being unordered. That is a causal claim inferred from three data points. State the strongest objection to the inference, and say what further comparison would answer it.",
  "modelAnswer": "**The objection: three points, and the confound is not fully broken.**\n\nThe design is a two-by-two with two cells filled. Vision is ordered and high-dimensional; olfaction is unordered and high-dimensional; gustation is unordered and low-dimensional. **The ordered, low-dimensional cell is empty.** Without it, the inference rests on comparing olfaction to gustation, and those two differ in more than dimensionality — tuning breadth, convergence ratio, sensor speed, stationarity of the statistics, and whether the stimulus arrives through a turbulent medium all differ as well.\n\nAny of those could carry the causal work. Turbulence in particular is a strong candidate: taste's stimulus is delivered by direct contact at millimolar concentrations, so it has none of olfaction's transport problem, and transport is what §3.1 identifies as making the inverse problem effectively irreversible. That has nothing to do with dimensionality.\n\n**The stronger version of the objection.** The conclusion may be true and still under-supported, because dimensionality and the other properties are not independent in nature. A high-dimensional chemical sense *needs* broad tuning, because you cannot afford a narrow detector per compound when the compounds are unbounded. So the comparison cannot separate dimensionality from tuning breadth using naturally occurring systems at all.\n\n**What would answer it.**\n\nFill the empty cell. Thermoreception and nociception are plausible candidates — unordered in some respects, low-dimensional, and without turbulent transport — but the cleanest available case is a sense that is *ordered and low-dimensional*, which audition's frequency axis approximates. Comparing gustation to audition holds dimensionality roughly fixed and varies ordering, which is the contrast the current three points cannot make.\n\nBetter still, and this is the honest answer: **the argument should be made within olfaction rather than across modalities.** Insect olfactory systems vary in receptor number by an order of magnitude across species while holding turbulence, tuning breadth and transduction chemistry roughly constant. If dimensionality is doing the causal work, the computational demands — expansion recoding, demixing, decorrelation — should scale with receptor number across those species. That is a comparison with one variable moving, which is what the cross-modality version cannot supply.",
  "rubric": [
    "Identifies that the three-point design leaves the ordered / low-dimensional cell empty",
    "Names at least one property besides dimensionality that differs between olfaction and gustation — turbulent transport, tuning breadth, convergence, sensor speed, or non-stationarity",
    "Recognises that these properties are not independent in nature, so no natural comparison isolates dimensionality",
    "Proposes a comparison that varies dimensionality while holding the confounds fixed",
    "Bonus: proposes the within-olfaction comparison across species differing in receptor number",
    "Bonus: allows that the conclusion may be correct while remaining under-supported"
  ]
}
</script>
</x-free-response>

## Tuning: the labelled-line controversy

How selective is an individual taste receptor cell? This is the module's live dispute, and it is worth teaching as a case study in how coding claims get adjudicated.

**The labelled-line case.** Distinct cell types express unique receptors and are tuned to detect one quality each; they function as dedicated sensors wired to elicit stereotyped responses [@chandrashekar2006]. Receptor-swap experiments support this strongly: express a bitter receptor in sweet cells, and the animal is *attracted* to the bitter ligand. The behavioural output follows the cell, not the receptor — which is close to a decisive argument that the line is labelled.

**The ensemble case.** Recordings in the nucleus of the solitary tract and in gustatory cortex find neurons responding to multiple qualities, with information in temporal patterns and strong modulation by expectation and internal state. On this view identity is carried by population activity and its dynamics.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">How to adjudicate a coding dispute</div>
Both bodies of evidence are real. The resolution most people now accept is that the <strong>periphery is close to labelled-line and the central representation is more distributed</strong> — which is not a compromise so much as a recognition that the two camps were measuring different stages.

The generalisable lesson, and the reason this belongs in a comparative course:

<strong>1. Receptor-swap experiments are unusually powerful</strong> because they dissociate receptor identity from cell identity. The olfactory equivalent — swap which receptor a given glomerulus expresses and ask whether behaviour follows the receptor or the glomerulus — is technically feasible and would settle several arguments.

<strong>2. A coding claim must specify a stage.</strong> "Olfaction uses a combinatorial code" is under-specified in exactly the way "taste uses labelled lines" was. Combinatorial where — at the receptor, at the glomerulus, in piriform? The answer differs, and the taste dispute burned a decade on the ambiguity.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Express a bitter receptor in sweet cells and the animal is attracted to the bitter ligand [@chandrashekar2006]. What makes this design decisive in a way that recording studies were not?",
  "options": [
    {
      "text": "It dissociates two variables that covary in every intact animal — which receptor detects the ligand, and which cell carries the signal — so the behavioural readout attributes causation to one of them.",
      "correct": true,
      "feedback": "This is the logic, and it is worth abstracting because the design is portable. In a normal animal, receptor identity and cell identity are perfectly confounded: every observation consistent with 'behaviour follows the receptor' is equally consistent with 'behaviour follows the cell'. No amount of recording breaks a perfect confound. The swap breaks it by construction, which is why §5.11 lists the olfactory analogue — swap which receptor a glomerulus expresses — as feasible and worth doing."
    },
    {
      "text": "It measures behaviour rather than neural activity, and behaviour is the quantity the coding claim is ultimately about.",
      "correct": false,
      "feedback": "Partly correct, and behavioural readout does matter here: it is what makes the result about what the animal does rather than about what a population looks like. But behaviour alone is not what makes it decisive — behavioural measurements in intact animals face exactly the same confound. The dissociation does the work; the behavioural readout just makes the consequence unambiguous."
    },
    {
      "text": "It is a causal manipulation, and causal manipulations outrank correlational measurements.",
      "correct": false,
      "feedback": "Correct under the assumption that the causal/correlational distinction is what settles coding disputes — a widely held view, and too coarse here. Plenty of causal manipulations in this literature are uninformative: silencing bitter cells abolishes bitter responses, which is causal and tells you nothing about whether the label lives in the receptor or the cell. What matters is which variables a manipulation dissociates, not that it is a manipulation."
    },
    {
      "text": "It works at the periphery, where the labelled-line claim is true, whereas recordings were made centrally where the code is distributed.",
      "correct": false,
      "feedback": "Correct under the resolution the callout above endorses — periphery-labelled, centre-distributed — and it correctly diagnoses why the two literatures disagreed. But it answers a different question. Stage-matching explains why the dispute persisted; it does not explain what made the swap experiment conclusive *at* the periphery, which is the dissociation. Note that the same design run centrally would still be informative, and would still be the reason to believe the result."
    }
  ]
}
</script>
</x-mcq>
