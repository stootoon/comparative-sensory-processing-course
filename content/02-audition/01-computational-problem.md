---
id: m02.s01
title: The computational problem
lede: Two one-dimensional pressure waveforms, containing several simultaneous sources that have already been summed together. Audition faces the mixture problem in its purest form — which is exactly why it is the right comparison for olfaction.
estimatedMinutes: 16
---

Two eardrums move. Each reports a single scalar — air pressure — as a function of time. From those two one-dimensional signals the animal must recover what is out there, where it is, and what it means.

## The mixture problem, in its hardest form

Here is the fact that organises the whole module. **Sound pressure adds exactly.**

If three sources are producing sound, the waveform at the eardrum is the arithmetic sum of the three waveforms that each would have produced alone. There is no separate channel per source. There is one number, at each instant, per ear.

This is a genuinely harder starting point than vision's. In a visual scene, objects mostly *occlude* one another: the nearer object wins, and the further one is hidden. Occlusion loses information, but it does not scramble it — the pixels showing the front object are uncontaminated. Sound has no occlusion. Every source contributes to every sample, and the contributions are inseparably summed.

Formally the system receives $x(t) = \sum_i s_i(t)$ and must recover the individual $s_i$. With one measurement per time point and $N$ unknown sources, this is underdetermined by a factor of $N$. It is soluble only because the $s_i$ are not arbitrary — natural sounds have structure, and that structure is what the grouping cues exploit.

<x-figure src="content/02-audition/figures/superposition.js"
  caption="Two sources, and the single waveform the eardrum actually receives. Nothing is hidden and nothing is clean — every sample is a sum. Set the two fundamentals to a simple ratio and the sum fuses; set them awkwardly and it becomes rough and separable. Harmonicity is the structure that rescues the problem, and chemistry offers no equivalent.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">Why this module matters for olfaction</div>
Olfaction faces a mixture problem too, and audition is the modality that has thought hardest about it. But the two differ in ways that turn out to be more instructive than the similarity:

<strong>Audition mixes linearly in a shared one-dimensional carrier</strong> — the worst case, maximum collision, solved by exploiting temporal and harmonic structure.

<strong>Olfaction mixes in a ~1000-dimensional space, non-linearly at the receptor.</strong> Components collide only if they happen to share receptors, so high dimensionality does most of the demixing work for free. But receptor-level competition and antagonism break the superposition assumption that auditory scene analysis leans on.

By §14 the claim will be that <em>temporal correlation is to olfaction what harmonicity is to audition</em>: the primary cue that two things came from the same place.
</x-callout>

## What is being estimated

- **Identity** — what is making the sound? Requires invariance to level, distance, room reverberation, and the presence of other sources.
- **Location** — where is it? Recovered by inference from tiny differences between the two ears, since neither ear samples space directly.
- **Content** — for speech and conspecific vocalisation, an entire further layer of structure.
- **Scene structure** — how many sources are there at all? This has to be inferred, not read off.

Note that **location is a genuine inference in audition in a way it is not in vision.** The retina samples direction directly: which photoreceptor fired tells you where the light came from. The cochlea samples *frequency*, not direction, so spatial location must be computed from interaural differences — a few hundred microseconds of time, and, at frequencies short enough for the head to cast an acoustic shadow, up to some tens of decibels of level.

That has a consequence worth carrying forward: audition builds a map of auditory space in the midbrain — in the superior colliculus, where it is registered with the visual and somatosensory maps and with the motor map for orienting — and that map is **computed**, not inherited from the receptor surface [@kandel2021]. It is one of the clearest existence proofs that a topographic map can exist for a derived variable — which is precisely the possibility §14 raises for olfaction.

## The loss function and the deadline

Audition's loss is largely symmetric and open-ended, like vision's, with one asymmetry: sounds are often the only warning of things outside the visual field, so detection sensitivity is weighted heavily. The system operates near the thermal noise floor of the medium.

The deadline is severe and varies by task. Localisation for orienting happens within tens of milliseconds. Speech comprehension tracks a syllable rate of 4–8 Hz, requiring continuous processing rather than snapshot decisions — closer to olfaction's plume tracking than to vision's saccade-locked sampling.

<x-predict>
<script type="application/json">
{
  "id": "m02.s01.p1",
  "contentRev": 1,
  "prompt": "Vision and audition both face scenes with multiple objects. Explain why audition's version of the problem is fundamentally harder, in terms of what happens to the signals from two sources when they reach the sensor. Then say what audition gains in exchange.",
  "placeholder": "What happens to two sources at the sensor in each case?",
  "reveal": "**Vision: occlusion.** Two objects at different depths project to *different* photoreceptors. The nearer one hides the further one, so information about the occluded object is lost — but the pixels you do receive are uncontaminated. Segmentation is about deciding which pixels belong together, and the evidence at each pixel is clean.\n\n**Audition: superposition.** Two sources contribute to *the same* sample, additively, at every instant. Nothing is hidden, but nothing is clean either. Every measurement is a sum, and separation requires inferring how to split each number.\n\nThat is why auditory scene analysis needs grouping cues — harmonicity, common onset, common modulation, spatial coincidence — that have no real counterpart in visual segmentation. The system must decide which *frequency components* belong to the same source when all of them arrive superposed.\n\n**What audition gains:** transparency, and therefore completeness. Vision cannot see the back of an object or anything behind it. Audition receives contributions from every sound source in the environment simultaneously, including those behind walls and outside the visual field. It trades clean-but-partial evidence for complete-but-entangled evidence.\n\nWorth asking now which trade olfaction made. The answer is closer to audition's — every source contributes — but with the crucial difference that high dimensionality keeps most contributions from colliding at all."
}
</script>
</x-predict>
