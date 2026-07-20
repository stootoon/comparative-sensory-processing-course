---
id: m02.s05
title: The first circuit — cochlear nucleus and brainstem
lede: The retina compresses and the bulb converges. The cochlear nucleus does neither: it fans the same input out into parallel streams with different cell types, each preserving a different aspect of the signal. Three first circuits, three strategies.
estimatedMinutes: 22
---

Every auditory nerve fibre entering the brainstem terminates in the **cochlear nucleus**, and every one of them branches to contact several distinct cell types. That is the structural signature of this circuit, and it is different from both comparisons.

## Parallel decomposition, not compression

The retina compresses $10^8$ photoreceptors to $10^6$ ganglion cells. The bulb converges thousands of receptor neurons onto each glomerulus. The cochlear nucleus **expands**: the same auditory nerve input is copied into several parallel streams, each with cell types specialised for a different property.

- **Bushy cells** preserve timing with extraordinary fidelity. They receive giant terminals — the endbulbs of Held, among the largest synapses in the brain — that reliably drive a spike per input spike.

<x-figure src="content/media/oa-auditory-brainstem-cn-celltypes.jpg"
  caption="The auditory brainstem circuit, with the cochlear nucleus cell types and their targets. Every auditory nerve fibre branches to contact several of these — the same input, copied into parallel streams specialised for timing, level, spectrum and onset. This is decomposition rather than compression, and it is the third distinct answer to what a first circuit does."
  credit="Keine C, Englitz B (2025). CC BY 4.0."
  source="https://doi.org/10.3389/fncel.2025.1568506">
</x-figure>

They can even *improve* timing precision over their input by coincidence-detecting a few converging fibres. Their job is to protect phase-locking for the binaural comparison downstream.
- **Octopus cells** do the opposite: they integrate across many fibres spanning a wide frequency range, responding only to broadband transients. They are onset detectors with sub-millisecond precision.
- **Stellate cells** encode the spectral envelope with sustained, regular firing — the "what is the spectrum right now" channel.
- **Fusiform cells** in the dorsal cochlear nucleus integrate auditory input with somatosensory input about head and pinna position, which is what makes spectral cues for elevation usable.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Three first circuits, three strategies</div>
This is the comparison the module exists for.

<strong>Retina — decorrelate.</strong> Input is redundant across space, so subtract a local prediction and transmit the residual. Compression, driven by an optic-nerve bottleneck.

<strong>Cochlear nucleus — decompose.</strong> Input is a single waveform per channel containing several kinds of information at once (timing, level, spectrum, onset). No one cell type can preserve all of them, so split into specialised streams. Expansion, driven by incompatible requirements.

<strong>Olfactory bulb — converge, then what?</strong> Input is noisy and redundant across receptors of the same type, so pool for SNR. But the array has no metric, so decorrelation cannot be spatial (§3.5). Convergence is clear; what follows is the open question.

<strong>The generalisation:</strong> the first circuit does whatever the input statistics and the bottleneck demand. There is no universal "first circuit operation" — and any claim that there is should be checked against these three.
</x-callout>

## Coincidence detection and the ITD problem

Sound localisation in the horizontal plane depends on **interaural time differences**. For a human head the maximum ITD is about 700 µs; discrimination thresholds reach roughly 10 µs. That is finer than the duration of an action potential.

The classical proposal is the **Jeffress model**: axonal delay lines of graded length feeding an array of coincidence detectors, so that each detector fires maximally for one particular ITD, producing a place map of azimuth.

In the **barn owl**, this is essentially correct. Magnocellular axons act as delay lines whose conduction time varies systematically with depth in nucleus laminaris, laminaris neurons act as coincidence detectors, and the result is an orderly map of ITD [@carr1990]. Delay lines, coincidence detectors, place code — as proposed.

<x-figure src="content/media/superior-olivary-complex-itd.png"
  caption="The Jeffress scheme: axons of graded length act as delay lines, and coincidence detectors fire maximally when the delay exactly offsets the interaural time difference. The circuit exists as drawn in the barn owl. In small mammals the arrangement is different, and §2.5 argues the difference is a normative consequence of head size rather than a disagreement about mechanism."
  credit="Cristiane Tilelli (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Oliva_superior_medial.png">
</x-figure>


In **small mammals**, it is not. Recordings in the inferior colliculus show a systematic relationship between a neuron's best frequency and its best ITD, such that the steepest part of each neuron's ITD tuning curve — the region of maximum slope, where discrimination is best — falls near the midline for every neuron regardless of frequency. That is not a place map. It is consistent with **two broad hemispheric channels**, with azimuth read out from the *balance* between them [@mcalpine2001].

<details class="x-deeper">
<summary>Go deeper: why the answer differs between owl and gerbil<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

This looks like a contradiction and is actually a normative result, which is why it belongs in this course rather than in a review of the auditory brainstem.

The relevant quantity is the ITD range the animal actually experiences, which is set by head size, relative to the period of the frequencies it uses.

**Barn owl:** high frequencies (4–8 kHz), so many cycles fit inside the physiological ITD range. A place map is feasible and useful, because there are enough distinguishable delays to map.

**Gerbil, guinea pig, human at low frequency:** the physiological ITD range is a *small fraction* of one cycle. There is almost no room for a map — only a narrow slice of the ITD tuning curve is ever visited. Under those conditions the optimal arrangement is not to tile the range but to place the **steepest slope** where discrimination matters most, near the midline, and read out the difference between two broad channels.

**The general principle, which recurs throughout the course:** the optimal code depends on the range of stimuli actually encountered, not on the range physically possible. Owl and mammal are not disagreeing about mechanism — they are optimally solving different problems, because their heads are different sizes.

**Carry this into olfaction.** When you ask whether the bulb should build a map of anything, ask first what range of that variable the animal actually experiences, and whether there is room in it for a map to be worth building.

</div>
</details>

<x-figure src="content/02-audition/figures/itd-coding.js"
  caption="Two ways to code interaural time difference. Drag head size and frequency, and watch which scheme has more usable resolution. Large head or high frequency: many cycles fit in the ITD range, a place map is worth building, and the owl builds one. Small head or low frequency: the whole range is a fraction of a cycle, and two broad channels with their steepest slopes at midline do better.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The owl/gerbil resolution rests on a rule: the optimal code depends on the range of values actually encountered, not the range physically possible. Which application of that rule is correct?",
  "options": [
    {
      "text": "Before asking whether the bulb should map some olfactory variable, ask what range of it the animal actually experiences and whether there is enough room in that range for a map to beat a two-channel readout.",
      "correct": true,
      "feedback": "This is the transfer the section is set up for, and note what it changes: 'is there a map?' becomes 'is a map worth building here?', which is answerable in advance from the ecology rather than only by recording. Applied to plume-derived bearing, for instance, the encountered range is wide but the per-sample precision is terrible — which argues for a coarse two-channel comparison of the kind the gerbil uses, not a place map."
    },
    {
      "text": "Human ITDs span about ±700 µs and discrimination reaches 10 µs, giving roughly 70 distinguishable values — ample room for a place map, so humans should use one.",
      "correct": false,
      "feedback": "Correct under the assumption that the number of discriminable values is what determines the code, which is the natural reading and the wrong comparison. The argument turns on the physiological ITD range measured against the *period of the frequencies the animal uses for ITD*. Humans localise by ITD at low frequencies, where 700 µs is a fraction of one cycle, so only a narrow slice of each tuning curve is ever visited — which is the gerbil's situation, not the owl's."
    },
    {
      "text": "Channels should be allocated in proportion to how often stimuli occur, so values that are never encountered get no representation at all.",
      "correct": false,
      "feedback": "Correct under a strict proportional-allocation reading of efficient coding, and closely related to Laughlin's result — but that result is about the *transfer function of one channel* matching a cumulative distribution, while this argument is about the geometry of a population code. They are different claims. A system with literally no representation outside the common range could not signal novelty, and stimulus-specific adaptation (§2.10) shows that novelty is signalled."
    },
    {
      "text": "Since owl and mammal genuinely differ, ITD coding is a species-specific implementation detail rather than an instance of any general principle.",
      "correct": false,
      "feedback": "Correct under the assumption that a difference in mechanism implies the absence of a shared theory — the conclusion the field drew for some years, and the one the normative reading overturns. The two are the same rule evaluated at different parameter values. A principle that predicts *different* mechanisms from measurable differences between animals is stronger evidence than one predicting the same mechanism everywhere, because it can fail."
    }
  ]
}
</script>
</x-mcq>

## What the brainstem tells you about first circuits generally

Three features of this circuit generalise, and each shows up again in the olfaction module.

**Specialised synapses buy precision.** The endbulb of Held exists because timing had to survive one more synapse. When a computation needs a physical property preserved, evolution builds unusual hardware for it.

**Splitting happens early.** By the second synapse, timing, level, spectrum and onset are already in separate streams. Compare the mitral/tufted split (§3.5), retinal sustained/transient, SA/RA/PC in touch. **One channel cannot optimise sensitivity, precision and dynamic range simultaneously**, and every modality in this course discovered that independently.

**The obligatory hub.** Almost everything ascending in the auditory system passes through the **inferior colliculus** — an unusually strict bottleneck with no real analogue in vision. Olfaction sits at the opposite extreme, with two synapses to cortex and no obligatory relay at all. §2.6 asks what that buys, and §3.6 asks what olfaction gave up by skipping it.

<x-order>
<script type="application/json">
{
  "id": "m02.s05.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 7,
  "prompt": "Reconstruct the reasoning that turns the owl/gerbil contradiction into a normative result. The order is the argument; getting it right is what lets you run the same move on a dispute you have not seen before.",
  "items": [
    { "id": "a", "text": "Note that the two findings are inconsistent only if read as claims about a universal mechanism." },
    { "id": "b", "text": "Identify the physical parameter that differs between the animals: head size, and hence the range of ITDs encountered." },
    { "id": "c", "text": "Express that range relative to the period of the frequencies each animal actually uses for localisation." },
    { "id": "d", "text": "Ask, separately in each regime, which readout gives the best discrimination where discrimination matters." },
    { "id": "e", "text": "Conclude that both are optimal solutions, to different problems." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Step (c) is the one that carries the result, and it is the one most easily skipped. Head size alone does not settle anything — a large head with high-frequency hearing and a small head with low-frequency hearing can occupy the same regime, because what matters is the *dimensionless* ratio of encountered range to cycle period. Any version of the argument that stops at (b) has produced a correlation with body size rather than a normative explanation.\n\nStep (a) is a disposition rather than a deduction, and it is worth naming as a step because it is where the field spent years. Two careful labs measuring different things in different animals and disagreeing is a strong hint that a parameter is varying, not that one of them is wrong.\n\nThe transferable procedure: when two preparations disagree, look for the parameter that differs, non-dimensionalise it against something the system cares about, and re-solve. This is the same manoeuvre §1.5 performs on light level, where the parameter is SNR and the systems being compared are the same retina at two times of day."
}
</script>
</x-order>
