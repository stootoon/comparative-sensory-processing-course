---
id: m02.s05
title: The first circuit — cochlear nucleus and brainstem
lede: The retina compresses and the bulb converges. The cochlear nucleus does neither: it fans the same input out into parallel streams with different cell types, each preserving a different aspect of the signal. Three first circuits, three strategies.
estimatedMinutes: 22
---

Every auditory nerve fibre entering the brainstem terminates in the **cochlear nucleus**, and every one of them branches to contact several distinct cell types. That is the structural signature of this circuit, and it is different from both comparisons.

## Parallel decomposition, not compression

The retina compresses $10^8$ photoreceptors to $10^6$ ganglion cells. The bulb converges thousands of receptor neurons onto each glomerulus. The cochlear nucleus **expands**: the same auditory nerve input is copied into several parallel streams, each with cell types specialised for a different property.

- **Bushy cells** preserve timing with extraordinary fidelity. They receive giant terminals — the endbulbs of Held, among the largest synapses in the brain — that reliably drive a spike per input spike. They can even *improve* timing precision over their input by coincidence-detecting a few converging fibres. Their job is to protect phase-locking for the binaural comparison downstream.
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

## What the brainstem tells you about first circuits generally

Three features of this circuit generalise, and each shows up again in the olfaction module.

**Specialised synapses buy precision.** The endbulb of Held exists because timing had to survive one more synapse. When a computation needs a physical property preserved, evolution builds unusual hardware for it.

**Splitting happens early.** By the second synapse, timing, level, spectrum and onset are already in separate streams. Compare the mitral/tufted split (§3.5), retinal sustained/transient, SA/RA/PC in touch. **One channel cannot optimise sensitivity, precision and dynamic range simultaneously**, and every modality in this course discovered that independently.

**The obligatory hub.** Almost everything ascending in the auditory system passes through the **inferior colliculus** — an unusually strict bottleneck with no real analogue in vision. Olfaction sits at the opposite extreme, with two synapses to cortex and no obligatory relay at all. §2.6 asks what that buys, and §3.6 asks what olfaction gave up by skipping it.
