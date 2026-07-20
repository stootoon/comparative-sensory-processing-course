---
id: m12.s03
title: Machine olfaction, and why it stalled
lede: Electronic noses were designed explicitly on the biological plan — a small array of broadly cross-sensitive sensors read out by pattern recognition — and they work in closed worlds and nowhere else. The stall is at the input representation, not at the classifier, which is the location the course's claim predicts.
estimatedMinutes: 24
---

Machine olfaction is not a neglected field. It has instruments, conferences, a journal literature going back four decades, and a commercial sector. It began from an explicitly biomimetic proposal: rather than build a selective sensor for each compound of interest, build a small array of *deliberately unselective* sensors, each responding to many compounds and none uniquely, and recover the identity of the sample from the pattern across the array.

That is the vertebrate olfactory design [@buckaxel1991; @malnic1999], adopted on purpose and for the same reason biology presumably adopted it. It is worth pausing on how good the reason is.

## The array design is not the mistake

A selective-sensor approach needs one sensor per analyte. The set of volatile organic compounds an animal or an instrument might plausibly encounter is somewhere in the tens of thousands at minimum, and the set of *mixtures* is combinatorially larger. One sensor per analyte does not scale, and it fails completely on anything not anticipated at design time.

A broadly tuned array trades this away. With $N$ cross-sensitive sensors, the response is a point in an $N$-dimensional space, and distinct analytes land at distinct points provided the sensors are not too redundant. The number of distinguishable analytes is then limited by noise and by the dimensionality of the array rather than by the number of sensor types, which is exactly the argument for combinatorial coding in the olfactory epithelium.

So biology and engineering converged on the same array design, independently, for a stated reason that is good in both cases. By §12.1's fifth rung this is a genuine convergence result: two systems sharing the task and the input and almost nothing else arrive at the same peripheral architecture. It is the module's one clean *positive* convergence, and it should be registered before the rest of this section describes what went wrong, because it means the failure is not a failure of the biomimetic idea at the array.

The failure is entirely downstream of the array, and it has a specific shape.

## Drift and cross-sensitivity, which are individually survivable and jointly fatal

<x-figure src="content/12-artificial/figures/sensor-drift.js"
  caption="The smallest model that shows the problem, and the point survives the toy numbers. Turn cross-sensitivity towards zero and drift becomes a nuisance you can normalise away, because each sensor still reports its own analyte. Turn it back up and normalisation has nothing to key on, because every sensor reports a mixture and drift changes the mixing weights. The two failure modes are always named together for a reason, and fixing either alone has not helped. Note the consequence for datasets: nothing in this plot transfers to another device or to the same device next month, which is an obstacle to a shared odour corpus that has nothing to do with anyone's willingness to collect one.">
</x-figure>

**Drift.** Chemical sensors change their response characteristics over time. Metal-oxide surfaces age and are poisoned by exposure; polymer films swell irreversibly; adsorbed contaminants accumulate; humidity and temperature modulate responses substantially and are themselves hard to hold constant in any application where an odour is worth measuring. The consequence is that a classifier trained on data from a device on one day performs worse on the same device weeks later, and worse still on a nominally identical second device. Calibration transfer — getting a model trained on one instrument to work on another — is a standing subfield rather than a solved preprocessing step, which is the tell.

**Cross-sensitivity.** Each sensor responds to many compounds, which is the design intent. It also means no sensor's output can be interpreted on its own, so there is no quantity in the raw data with a device-independent meaning.

<x-predict>
<script type="application/json">
{
  "id": "m12.s03.p1",
  "contentRev": 1,
  "prompt": "Drift and cross-sensitivity are always named together in the electronic-nose literature. Before reading on: take each alone and say whether it is survivable, and what rescue is available. Then say what happens when both are present at once, and why the rescues stop working.",
  "placeholder": "What invariant survives drift alone? What survives cross-sensitivity alone? What survives both?",
  "reveal": "Each alone leaves an invariant, and the rescues are built on it.\n\n**Drift with selective sensors.** Each channel still means 'the amount of compound X'. Drift merely rescales that quantity, so ratios, internal standards or periodic recalibration against a known reference recover it. The meaning of a channel is stable even when its gain is not.\n\n**Cross-sensitivity with stable sensors.** Each channel reports a fixed weighted mixture. The mixing matrix is a property of the device, so characterise it once and invert it, or simply train a classifier on the raw pattern and use it indefinitely. The gain is stable and so is the mixing.\n\n**Both together.** Every channel reports a mixture, and the mixing weights themselves wander. Now there is no quantity in the raw data with a device-independent meaning and no quantity with a *time*-independent meaning either. Normalisation has nothing to key on, because there is no channel whose reading can be interpreted alone and therefore no reference against which to fit the transform. The pattern *is* the measurement, and the pattern moves.\n\n**The consequence that matters for this module** is not that classification is hard. It is that no corpus transfers: a dataset collected on one device is a dataset about that device, on that day. §12.4 promotes this to Rival 1, and the deeper box in this section states its strongest form — an odour corpus is not merely expensive, it is not a redistributable object.\n\nNotice also what this implies about the fix. The rescue is not drift-free hardware, which is a materials problem that has resisted decades of work. It is a shared reference object that restores a common frame — which is why §12.5 puts the transfer standard first, ahead of the sensors."
}
</script>
</x-predict>

Separately, each of these is manageable. A drifting but selective sensor can be rescued by ratios, internal standards, or periodic recalibration against a known reference, because "the amount of compound X" survives as a quantity the drift merely rescales. A stable but cross-sensitive array can be characterised once and used indefinitely, because the mixing is fixed and invertible.

Together they are not manageable, and the figure shows why. When every channel reports a different weighted mixture and the weights themselves wander, the representation has no invariant. There is nothing the classifier could have keyed on that persists. The pattern *is* the measurement, and the pattern moves.

Now compare a camera. Photon counting is close to linear, essentially does not drift over the life of the device, and is standardised well enough that an image collected on one camera is usable data for a model trained on another. A microphone is the same story. This is not a small difference, and §12.4 has to take seriously the possibility that it is the whole difference.

## What has worked, and the shape of the successes

Electronic noses do work, and it is worth being precise about the conditions.

They work in **closed worlds**: a fixed, small, known set of alternatives, discriminated in a controlled sampling environment, with recalibration. Detecting whether a batch of a specific product is within specification. Flagging spoilage in a known foodstuff. Monitoring a known industrial process for a known off-condition. Leak detection for a specific gas at a specific place. In these the task is not identification but *classification into a handful of pre-enumerated categories on a device that was calibrated for this deployment*, and the drift problem is contained by recalibrating against the same small reference set.

They also work as **anomaly detectors**, which is the same closed-world argument in a weaker form: "does today's pattern differ from the pattern I saw when things were fine?" needs no representation of what the odour *is*.

What they do not do is open-world identification. Present an arbitrary natural odour scene — a kitchen, a forest floor, a person — and ask what is in it, and no electronic nose comes close. Present a mixture of two analytes that were each characterised alone and ask for both, and performance degrades badly, because sensor responses to mixtures do not superpose: competitive adsorption at the sensor surface produces the same failure of additivity that competitive binding and antagonism produce at olfactory receptors [@shen2013]. This is the mixture problem from the datasheet, appearing in silicon with entirely different chemistry and the same consequence.

## The problem that *is* solved, and why noticing it matters

Analytical chemistry can determine the composition of an air sample to a standard no nose of any kind approaches. Gas chromatography with mass spectrometry separates a sample into constituents and identifies them, quantitatively, with high sensitivity and a searchable reference library.

This is worth dwelling on, because it decisively rules out one story about why machine olfaction stalled.

**The information is obtainable.** Nobody can claim the chemical composition of an odour scene is inaccessible in principle, or that no instrument can recover it. One can, routinely. What GC-MS is not is a *nose*: it is slow relative to a sniff by three or four orders of magnitude, it is large and expensive and cannot be pointed at things, it consumes the sample, and — this is the part that matters here — it returns composition rather than identity or percept. Handed a full compositional readout of the air in a kitchen, an instrument still does not know that there is coffee in the room. That inference from composition to source is not a chemistry problem.

So the field's difficulty splits cleanly in two, and only one half is stuck:

- **Measure the composition of an air sample.** Solved, expensively and slowly.
- **Map composition, or a cheap proxy for it, onto the things an animal cares about — sources, objects, categories, percepts.** Not solved, and stuck for want of examples of the mapping.

The second is a supervised learning problem with no training set. That is a strikingly specific way to be stuck, and it is check 3 from §12.1's list: the stall is at the input representation and at the input–output pairs, not at the classifier.

<x-mcq>
<script type="application/json">
{
  "id": "m12.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "GC-MS recovers the composition of an air sample routinely and to a standard no nose approaches. Which story about machine olfaction's stall does that fact decisively kill?",
  "options": [
    {
      "text": "That the information is not recoverable from the physical signal — that odour identity is simply not there to be extracted.",
      "correct": true,
      "feedback": "Right, and this is §12.1's first rung being used in its cheapest and most decisive form. An existence proof about the information licenses nothing about mechanism, but it removes one explanation permanently. What remains is the second half of the split: mapping composition onto sources, objects and categories, which is a supervised problem with no training set. That is a strikingly specific way to be stuck, and it is check 3 passing."
    },
    {
      "text": "That chemical sensor hardware is the binding constraint.",
      "correct": false,
      "feedback": "Correct under the assumption that GC-MS counts as a chemical sensor for these purposes — and it does bound the *nose* rather than the problem, which is genuinely a hit against Rival 1 (§12.4). But it does not kill the hardware story, because GC-MS is not deployable as a nose: too slow by three or four orders of magnitude, too large, sample-consuming. A perfect fast array delivered tomorrow would still leave the composition-to-source mapping unlearned."
    },
    {
      "text": "That the problem is intrinsically harder than vision.",
      "correct": false,
      "feedback": "Correct under the assumption that intrinsic difficulty means difficulty of *measurement*. But §12.4's surviving version of that rival is computational, not measurement-related: odour has no metric, hence no convolutional prior, hence a higher sample requirement. GC-MS says nothing about that, and the two are compatible."
    },
    {
      "text": "That the stall is at the classifier rather than the input representation.",
      "correct": false,
      "feedback": "Correct as a conclusion, wrong as an inference from this premise. The stall's location is established by the field having full access to every classifier and optimiser the successful domains used and stalling anyway. GC-MS contributes something different — that composition is obtainable — which sharpens *what* the missing input is rather than showing where the failure sits."
    }
  ]
}
</script>
</x-mcq>

## No standard representation, and no benchmark

Two absences follow, and they are the engineering statement of §13.7's Gaps 1 and 4.

**There is no agreed representation of an odour.** Ask what the input to a machine vision system is and the answer is an array of pixel intensities — universally agreed, device-independent, and lossless with respect to the thing being modelled. Ask for audio and the answer is a sampled waveform, with the same properties. Ask what the input to a machine olfaction system is, and there are at least four incompatible answers in current use: the raw response vector of a particular sensor array (device-specific and drifting); a list of compounds with concentrations from GC-MS (correct but not obtainable at speed and not what any nose measures); a vector of computed physicochemical descriptors of a molecule (defined only for single molecules, and the choice of descriptors is arbitrary); or a vector of receptor activations (biologically motivated, measured for a small fraction of receptors and a small fraction of ligands).

Nothing in vision or audition corresponds to this. The dispute over what odour space even *is* — its dimensionality, its geometry, whether it is Euclidean or hyperbolic [@zhou2018], what its coordinates could be [@koulakov2011; @krishnamurthy2022] — is an open theoretical question in biology and simultaneously a blocking engineering problem, and that coincidence is not accidental.

**There is no benchmark.** Consequently, results are reported on idiosyncratic odour panels, collected on idiosyncratic hardware, evaluated with idiosyncratic protocols, and are not comparable. A new method cannot be scored against an old one. The elimination mechanism that drove speech recognition for decades — many groups, one test set, one metric — has never operated in machine olfaction, and no amount of individual cleverness substitutes for it.

The nearest thing the field has had to a benchmark episode is instructive on both counts. A published psychophysical dataset — single molecules, presented at fixed concentrations, rated by human panellists on verbal descriptor scales — was used as the basis of an open prediction challenge in which many groups predicted perceptual ratings from molecular structure. It produced measurable, rapid progress, exactly as the benchmark argument predicts. And the scope of it is the argument's other half: **single molecules, at fixed concentration, described in words.** That is not the natural ensemble. It is §13.7's Gap 3 — the standard stimulus cannot reveal what is at issue — reappearing in engineering, and it means the one place machine olfaction has had a benchmark is the one place it has moved.

<details class="x-deeper">
<summary>Why the labelled-set problem is worse in olfaction than the annotation-cost argument suggests</summary>

The obvious statement of the difficulty is cost: labelling an image takes a human a second or two, whereas ground-truthing an air sample needs an analytical instrument. §12.4 treats that as a rival explanation and it deserves to be.

But there is a structural problem underneath the cost, and it is not fixed by money.

In vision, the label and the stimulus are separable and the label is cheap *because the human labeller and the machine receive the same input*. A photograph shown to a person and to a network is the same object. The annotation is therefore a sample from the very conditional the machine is trying to learn.

In olfaction there is no such object. A stimulus cannot be stored, transmitted, replayed, or shown to a second labeller later. It cannot be presented identically to a human panel and a sensor array unless both are in the same room at the same time, and even then the two sample different air. There is no odour equivalent of a JPEG — no encoding from which the stimulus can be reconstructed at the sensor of an arbitrary receiver.

This has a consequence the cost argument misses. In vision the corpus is a set of **stimulus–label pairs that can be redistributed**, so the annotation effort is spent once by anyone and reused by everyone. In olfaction, any corpus of sensor responses is a corpus of *one device's responses*, and a corpus of GC-MS compositions is a corpus of measurements at *one sampling point at one time* that no other lab can reproduce or verify against its own instrument.

So the odour corpus that would be analogous is not merely more expensive to build. It is a different kind of object, and getting it to transfer requires solving the standardisation problem first. This is the strongest version of the sensor-hardware objection in §12.4, and it should be stated at full strength rather than the weak version about drift being annoying.

The escape route, and §12.5 takes it: **make composition the interchange format.** A GC-MS composition is device-independent in a way a sensor response is not. It is expensive, slow and not a nose — but it is publishable, comparable, and reusable, which the alternatives are not. That is the same argument §13.7 makes for persuading atmospheric chemists and food scientists to publish raw compositions, arrived at from the engineering side.
</details>

## Where that leaves the test

Against §12.1's four checks:

1. **Dataset present in the successes, absent in the failure.** Holds.
2. **Dataset first.** Holds in vision and speech, on the historical record. Vacuous in olfaction, where there is nothing to order.
3. **The stall is at the input representation.** Holds, and this is the strongest of the four. Machine olfaction is not short of classifiers, optimisers, or compute — it has full access to everything the successful domains used. It is short of an agreed input, of ground-truth pairs, and of a way to make either transfer between devices.
4. **The stall persists without biological constraints.** Holds. No electronic nose has a metabolic budget, a 200 ms deadline [@uchida2003], adult neurogenesis, a missing thalamus, or receptors it cannot choose. The design of its array it borrowed from biology deliberately; every constraint it did not borrow, it does not have. It stalls anyway, in the same place.

All four checks pass, which is the point at which one should become suspicious rather than satisfied. §12.4 is about what else could have produced exactly this pattern.
