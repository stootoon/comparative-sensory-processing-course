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
- **Octopus cells** do the opposite: they integrate across many fibres spanning a wide frequency range, responding only to broadband transients. They are onset detectors with sub-millisecond precision. Note what that makes them, in the vocabulary of §2.2: a dedicated detector for **common onset** — components that start together came from one source. One of the grouping cues on which the whole scene-analysis argument rests has a cell type of its own at the second synapse.
- **Stellate cells** encode the spectral envelope with sustained, regular firing — the "what is the spectrum right now" channel.
- **Fusiform cells** in the dorsal cochlear nucleus integrate auditory input with somatosensory input about head and pinna position, which is what makes spectral cues for elevation usable. The dorsal cochlear nucleus is a mammalian invention — no other vertebrate has one — and it is built like a piece of cerebellum, with a molecular layer of parallel fibres and cartwheel interneurons that resemble Purkinje cells. Its circuits appear to subtract *predictable* sound, cancelling an animal's own chewing and licking while leaving unpredicted spectral change intact [@kandel2021]. That is the "subtract what you predicted" motif of §2.9 appearing two synapses in, earlier than anywhere else in this course.

Precision here is bought twice over, and the course's usual story names only half of it. The endbulb is the presynaptic half. The postsynaptic half is intrinsic: bushy and octopus cells carry a large low-voltage-activated K⁺ conductance, which gives them a low input resistance, makes voltage changes fast but small, and prevents repetitive firing. They are deliberately leaky, which is why they need giant synapses in the first place — and it is the leak, not the synapse, that stops them from smearing successive inputs together [@kandel2021]. Stellate and fusiform cells, which are integrating rather than timing, have neither feature.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Three first circuits, three strategies</div>
This is the comparison the module exists for.

<strong>Retina — decorrelate.</strong> Input is redundant across space, so subtract a local prediction and transmit the residual. Compression, driven by an optic-nerve bottleneck.

<strong>Cochlear nucleus — decompose.</strong> Input is a single waveform per channel containing several kinds of information at once (timing, level, spectrum, onset). No one cell type can preserve all of them, so split into specialised streams. Expansion, driven by incompatible requirements.

<strong>Olfactory bulb — converge, then what?</strong> Input is noisy and redundant across receptors of the same type, so pool for SNR. But the array has no metric, so decorrelation cannot be spatial (§3.5). Convergence is clear; what follows is the open question.

<strong>The generalisation:</strong> the first circuit does whatever the input statistics and the bottleneck demand. There is no universal "first circuit operation" — and any claim that there is should be checked against these three.
</x-callout>

## Coincidence detection and the ITD problem

Sound localisation in the horizontal plane depends on **interaural time differences**. For a human head the maximum ITD is roughly 600–700 µs, and discrimination near the midline reaches about 10 µs — corresponding to about one degree of azimuth, and finer than the duration of an action potential [@kandel2021]. The quantity is set by head size and nothing else: for a small bird the entire range is about 35 µs.

Two cues are available, not one, and which is usable is again a matter of head size relative to wavelength. Sounds whose wavelength is short compared with the head are deflected by it, producing an **interaural level difference**; in humans this becomes usable above about 2 kHz. Below that the head is acoustically transparent and only timing is left. Small-headed mammals therefore localise mostly by ILD at high frequency, and animals that hear low localise by ITD — the classical duplex theory, and the same head-size argument that will resolve the owl/gerbil dispute below, run one level earlier.

The two cues are computed by two adjacent nuclei with different architectures. The **medial superior olive** compares timing, as described next. The **lateral superior olive** compares level, by balancing direct excitation from the ipsilateral cochlear nucleus against inhibition relayed from the contralateral side through the medial nucleus of the trapezoid body; a cell's firing rate then falls monotonically as the source moves from the ipsilateral to the contralateral side. Worth noting for the argument that follows: **the LSO builds no map at all.** It is a rate code, read out from the balance of two opposed inputs — which is to say the two-channel scheme the mammalian ITD literature argues about is uncontroversially what the neighbouring nucleus does for the other cue.

The classical proposal is the **Jeffress model**: axonal delay lines of graded length feeding an array of coincidence detectors, so that each detector fires maximally for one particular ITD, producing a place map of azimuth.

In the **barn owl**, this is essentially correct. Magnocellular axons act as delay lines whose conduction time varies systematically with depth in nucleus laminaris, laminaris neurons act as coincidence detectors, and the result is an orderly map of ITD [@carr1990]. Delay lines, coincidence detectors, place code — as proposed.

<x-figure src="content/media/superior-olivary-complex-itd.png"
  caption="The Jeffress scheme: axons of graded length act as delay lines, and coincidence detectors fire maximally when the delay exactly offsets the interaural time difference. The circuit exists as drawn in the barn owl. In small mammals the arrangement is different, and §2.5 argues the difference is a normative consequence of head size rather than a disagreement about mechanism."
  credit="Cristiane Tilelli (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Oliva_superior_medial.png">
</x-figure>


In **small mammals**, it is not. Recordings in the inferior colliculus show a systematic relationship between a neuron's best frequency and its best ITD, such that the steepest part of each neuron's ITD tuning curve — the region of maximum slope, where discrimination is best — falls near the midline for every neuron regardless of frequency. That is not a place map of the owl's kind. It is consistent with **two broad hemispheric channels**, with azimuth read out from the *balance* between them [@mcalpine2001] — a reading the field has not fully accepted, for reasons taken up below.

<details class="x-deeper">
<summary>Go deeper: why the answer differs between owl and gerbil<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

This looks like a contradiction and is actually a normative result, which is why it belongs in this course rather than in a review of the auditory brainstem.

The relevant quantity is the ITD range the animal actually experiences, which is set by head size, relative to the period of the frequencies it uses.

**Barn owl:** unusually, it localises using high frequencies (roughly 3–9 kHz), where the period is a few hundred microseconds — comparable to or smaller than its own ITD range. A full cycle or more fits inside the range the animal actually experiences, which is what makes a place map feasible: there are enough distinguishable delays to be worth tiling. (The price is phase ambiguity, which the owl pays and resolves by combining across frequency channels — the same trick Kandel describes for the mammalian medial superior olive, where a broadband sound drives coincidence in a single dorsoventral column and so disambiguates.)

**Gerbil, guinea pig, human at low frequency:** the physiological ITD range is a *small fraction* of one cycle. There is almost no room for a map — only a narrow slice of the ITD tuning curve is ever visited. Under those conditions the optimal arrangement is not to tile the range but to place the **steepest slope** where discrimination matters most, near the midline, and read out the difference between two broad channels.

**The general principle, which recurs throughout the course:** the optimal code depends on the range of stimuli actually encountered, not on the range physically possible. Owl and mammal are not disagreeing about mechanism — they are optimally solving different problems, because their heads are different sizes.

**Carry this into olfaction.** When you ask whether the bulb should build a map of anything, ask first what range of that variable the animal actually experiences, and whether there is room in it for a map to be worth building.

**How settled is this, honestly?** Less than the account above implies, and the module should say so. The standard reference treatment — Kandel's chapter on central auditory processing — does not adopt the two-channel reading: it describes the mammalian medial superior olive as still forming a map, but of the *contralateral hemifield only*, produced by an asymmetric variant of Jeffress in which the contralateral bushy-cell axon branches act as delay lines while the ipsilateral branches are of equal length [@kandel2021]. On that account owl and mammal differ in the symmetry and extent of the delay arrangement, not in whether there is a map.

There is also a third mechanism that both the place-code and two-channel stories underweight. Principal cells of the MSO receive sharply timed *inhibition* driven from both ears, through the medial and lateral nuclei of the trapezoid body, and — despite travelling through an extra synapse — it arrives *before* the excitation, because globular bushy cells have very large axons ending in calyces of Held. Inhibition that reliably precedes excitation can shift a cell's best delay without any axonal delay line at all. So part of what looks like evidence against Jeffress in mammals may be evidence that mammalian best delays are set by inhibitory timing rather than by conduction distance.

None of this dissolves the normative argument. Head size relative to cycle period still predicts which regime an animal is in, and still explains why the owl's arrangement would be pointless in a gerbil. What it does is narrow the claim: the *readout geometry* is what head size predicts, and the mechanism generating a given best delay — delay line, inhibitory timing, or both — is a separate and still-open question. Treat "resolved" as applying to the first and not the second.

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
