---
id: m12.s06
title: Normative synthesis and the olfaction hook
lede: Scoring this module's own argument against the five criteria it has been applying to everyone else — which it passes less well than it would like — and handing six clues to the capstone, one of which contradicts the module's thesis.
estimatedMinutes: 16
---

## Scoring the argument

Every other module has scored the theories in its field against §0.2's five criteria. This module has no field to score, so it scores itself, which is the only honest option and a useful discipline.

**Criterion 1 — a measured ensemble. Fails.** The ensemble here is "engineered sensing domains", and there are three of them, chosen by the author, with the conclusion already known. Nobody enumerated the population of sensing problems humans have attempted and sampled from it. §12.4 names the specific consequence: the informative cells are the off-diagonal ones — good hardware and strong demand but no corpus, or poor hardware with a good corpus — and this module has not sampled them. This is the same failure it accuses olfactory theory of, which should not be lost on anyone.

**Criterion 2 — a physical constraint. Partial.** Real constraints do work in the argument: sensor drift and cross-sensitivity are physics, non-superposition at the sensor surface is chemistry [@shen2013], and GC-MS establishes that composition is physically recoverable, which is what rules out the strongest form of "the information is not there". But the argument's central variable — whether a corpus exists — is a sociological fact, not a physical one, and no physical constraint forces it either way.

**Criterion 3 — a risky prediction. Partial, and this is the module's best claim to being a test.** §12.1 stated four checks before §12.3 looked, and check 3 was genuinely risky: the stall had to be at the input representation rather than at the classifier. Had machine olfaction turned out to be short of algorithms, or to work well given clean data, the parallel would have collapsed. It did not. The prediction is qualitative rather than quantitative, which is a real weakness — §0.2 asks for a claim with a sign and a magnitude, and this one has only a location.

**Criterion 4 — confirmation by independent data. The strongest pass.** The within-olfaction control is the module's best evidence and it was not constructed for this purpose. Plume statistics were characterised by people studying turbulent transport [@celani2014], not to support an argument about datasets, and the robotic plume-tracking literature developed for its own reasons [@vergassola2007]. That both track the measured/unmeasured split within a single modality, holding the animal and the chemistry and the commercial pull fixed, is a fact nobody assembled to be convenient.

**Criterion 5 — few free parameters. Passes vacuously, which is not a virtue.** There is no model here, so there are no parameters, and §0.3 already warns that parameter counting is a proxy for the thing rather than the thing. A verbal argument scoring well on criterion 5 by having nothing to fit should be read as a caution, not a credential.

**Overall.** This module makes a good comparative argument and not a good normative one. It scores about as well as §13's eliminations do — which is to say it is most valuable for what it subtracts rather than for what it establishes, and its central claim, per §12.4, is supported and not isolated.

## Datasheet row

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Highlight Olfaction and read down the column, then read this module's table below it. The engineered rows agree with the biological ones on every property where an engineered system could have disagreed — unmeasured ensemble, no metric, non-superposing mixtures, no standard representation — and disagree on every property that is specifically biological, because the artefact simply does not have them. That pattern of agreements and disagreements is the module's whole argument in one comparison.">
</x-figure>

| Property | Machine vision | Machine audition | Machine olfaction |
|---|---|---|---|
| Input format agreed | pixel array | sampled waveform | **none — four incompatible candidates** |
| Sensor stable and standard | yes | yes | **no — drift plus cross-sensitivity** |
| Data transfers between devices | yes | yes | **no** |
| Large labelled corpus | yes, and first | yes, and first | **no** |
| Unlabelled input ensemble characterised | yes | yes | **no (chemical); yes (plume)** |
| Shared benchmark and metric | yes | yes, for decades | **no** |
| Metric on the input, hence an architectural prior | yes — convolution | yes — time, frequency | **no** |
| Mixtures superpose at the sensor | n/a (occlusion) | yes | **no** |
| Ground truth cost per sample | seconds of human time | seconds of human time | **an instrument run** |
| Stimulus storable and redistributable | yes | yes | **no** |
| Where the field stalls | — | — | **the input representation** |
| Biological constraints faced | none | none | **none — and it stalls anyway** |

The last two rows are the ones to carry forward. Everything above them describes a field with a hard instrumentation problem; those two are what make it evidence about biology.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. The asymmetry is not specifically biological, so the biological explanations of it cannot be the whole story.</strong> Machine olfaction stalls where biological olfactory theory stalls, in systems with no metabolism, no evolutionary history, no development, no anatomy, no sensory deadline and no obligation to be made of cells. Every account of olfaction's theoretical backwardness that appeals to slow receptors, the missing map, two synapses to cortex, adult neurogenesis or the absent thalamic relay is thereby subtracted from being sufficient. This is an elimination of the kind §13.7 argues the course is best at, obtained from a control no animal could provide.

<strong>2. The within-olfaction control is the best single piece of evidence for the course's central claim, and it is free to push further.</strong> The plume ensemble is measured and that strand has both normative traction [@celani2014; @tootoonian2025] and working machines [@vergassola2007]; the chemical ensemble is unmeasured and that strand has neither. Same animal, same receptors, same commercial pull, same sensor hardware. <strong>No rival explanation in §12.4 predicts that split.</strong> The capstone should promote it from an observation to a systematic comparison across sub-problems, because it is the cheapest thing in this module and the most discriminating.

<strong>3. The missing metric has a precise engineering consequence, and it raises the data requirement rather than lowering it.</strong> No metric means no convolutional prior — no weight sharing, no translation invariance, no relational structure obtainable free from the architecture — so a learner must acquire from data what vision gets from its wiring. This upgrades §11.1 from a list of motifs that fail to a quantitative claim about sample complexity, and it means the "intrinsically harder" and "no dataset" accounts <em>compound</em> rather than compete. The capstone has treated them as alternatives; they are not.

<strong>4. Gap 1 is two objects of very different size, and the cheaper one is the one the theory needs.</strong> Efficient-coding theory consumes the unlabelled marginal over natural scenes; a working device needs labelled pairs. Only the second requires annotation, panels, or agreement about perception, and it is where nearly all the cost sits. §13.7 describes Gap 1 as a heroic decade-long effort — that description fits the device version, and the theory version is a substantially smaller object that could be started from data other fields are already generating.

<strong>5. Gap 1 has a component nobody lists: the receptor forward model.</strong> A compositional ensemble cannot be pushed through a receptor array without a model of composition → receptor activation that includes the non-additivity [@shen2013]. The colour calculation worked because that map is linear and known [@buchsbaum1983]; the olfactory one is neither. This is a prerequisite for the flagship calculation, it is measurable with existing methods, and its omission from the field's accounting of what is missing is a small but consequential error.

<strong>6. Datasets buy engineering success and theoretical understanding separately — and this cuts against the module's own thesis.</strong> A large labelled corpus and a large network could produce a machine that identifies odours superbly and answers not one question in §13.7. Vision is the cautionary case: the labelled corpus bought recognition, and vision's normative theory came from unlabelled image statistics measured decades earlier for other reasons. The capstone should not treat "build the database" as automatically purchasing an answer, and should state which good it is buying. The concrete recommendation that follows is about publication policy rather than science — <strong>publish the unlabelled compositional ensemble as a first-class object</strong>, or the field gets a device and the theory gets nothing.

<strong>7. The decisive cheap experiment: hand a learner the composition vector directly.</strong> Bypass the sensors and the superposition problem entirely by training on GC-MS compositions with source labels, at whatever small scale is affordable. If a learner cannot recover source identity from exact composition, the difficulty is intrinsic and neither datasets nor better sensors are the story. If it can, then the entire gap sits between the air and the sensor, which is an instrumentation problem rather than a scientific one. This separates the two leading accounts in §12.4, it is affordable now, and nobody appears to be running it.
</x-callout>
