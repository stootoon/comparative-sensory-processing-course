---
id: m02.s02
title: The signal and its natural statistics
lede: Audition is the second modality where someone measured the ensemble, derived the optimal code, and found it matched the biology. It is the strongest evidence that vision's success was not a fluke — and the sharpest measure of what olfaction is missing.
estimatedMinutes: 22
---

Natural sounds are not white noise, and the ways in which they are not are what the auditory system is built around.

## The modulation domain

Natural sounds have power at all frequencies, but the informative structure is mostly in how that power *changes over time*. Speech, animal vocalisations, footsteps, rain — all are characterised less by their instantaneous spectrum than by their **modulation spectrum**: how the energy in each frequency band fluctuates.

Two robust regularities:

- **Amplitude modulations concentrate at low rates**, typically below about 20 Hz, with speech peaking near the 4–8 Hz syllable rate. Modulation power falls roughly as $1/f$ in modulation frequency.
- **Modulations are correlated across frequency bands.** When a source gets louder it gets louder across its whole spectrum, so bands belonging to one source rise and fall together. **This correlation is the raw material of scene analysis** — it is what makes common modulation a usable grouping cue.

<x-figure src="content/media/spectrogram-birdsong-warbler.jpg"
  caption="Birdsong, as a spectrogram. Notice the structure the auditory system exploits: elements with common onset, coherent frequency sweeps, and modulation shared across bands. Each of those is a grouping cue — a lawful relation between components of one source — and none has a chemical analogue, which is why Import 5 argues temporal correlation must carry olfaction's entire grouping load."
  credit="Justin Jansen. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Hippolais_polyglotta_song_spectrogram.png">
</x-figure>


## Harmonicity: structure that makes demixing possible

The single most exploitable regularity in natural sound is that vibrating objects produce **harmonic series** — energy at integer multiples of a fundamental frequency.

<x-figure src="content/media/spectrogram-speech-vowels.jpg"
  caption="Spectrogram of three vowels, with formants marked. The horizontal bands are harmonics of the vocal fold fundamental; the vowel identity is carried by which harmonics are emphasised by the vocal tract. Everything that makes this decodable — the integer relations, the common onset, the shared modulation — is a lawful relation between components of one source. Olfaction has no chemical equivalent."
  credit="Wikimedia Commons contributor. CC BY 2.0."
  source="https://commons.wikimedia.org/wiki/File:Spectrogram_-iua-.png">
</x-figure>


This matters enormously for the mixture problem. Given a superposition of components, "which components share a common fundamental?" is a well-posed question with a usually-correct answer. Harmonicity converts an underdetermined separation problem into a tractable grouping problem.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The cue that olfaction does not have</div>
Harmonicity works because it is a <strong>lawful relationship between components of one source</strong>, derived from physics: a vibrating string or column of air produces integer multiples, necessarily.

There is no chemical analogue. Molecules emitted by one source stand in no lawful relation to each other — a rose emits a particular set of compounds because of its biochemistry, not because of any relation the nose could know in advance. Two components of one odour source are chemically arbitrary with respect to one another.

That absence is why §3.1 argued <strong>temporal correlation</strong> is the only reliable olfactory grouping cue. Audition has several cues and uses harmonicity most; olfaction has essentially one, and must use it well.
</x-callout>

## Sound textures: the ensemble, characterised

Beyond individual sources, natural auditory scenes contain **textures** — rain, wind, insect swarms, applause. These are the collective result of many similar acoustic events, and they turn out to be describable by surprisingly simple statistics.

Passing real-world textures through a model of the auditory periphery and measuring time-averaged statistics of the result — power and sparsity within each frequency channel, plus correlations *between* channels — yields a set of numbers sufficient to synthesise novel sounds that listeners find realistic and recognisable [@mcdermott2011]. Statistics of individual channels alone were not enough; the cross-channel correlations were essential.

This is a strong result and worth being precise about why. It says the auditory system's representation of a texture is *equivalent to* a modest set of summary statistics — the perceptual system is discarding everything else. And it establishes the ensemble quantitatively, which is the prerequisite for everything in §2.4.

<x-figure src="content/02-audition/figures/modulation-spectrum.js"
  caption="Natural sound statistics. Modulation power concentrates at low rates and falls roughly as 1/f, with speech peaking at the syllable rate. Switch views to see the harmonic structure that makes grouping possible, and how two superposed harmonic series remain separable by fundamental — the auditory counterpart of the receptor-overlap picture in §3.4.">
</x-figure>

<details class="x-deeper">
<summary>Go deeper: why the modulation spectrum, and not the power spectrum<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

For vision, §1.2 characterised the ensemble by its power spectrum — a second-order statistic of the raw signal. For audition the equivalent move is nearly useless, and the reason is instructive.

The long-term power spectrum of natural sound is roughly $1/f$ and remarkably uninformative: speech, music, and rain have similar average spectra. Almost nothing that distinguishes sound sources survives averaging over time.

What does distinguish them is the **temporal structure within each band**. So the right description is two-stage: decompose into frequency channels, then characterise the *envelope statistics* of each channel and the correlations between them. That is a higher-order statistic of the original waveform, and it has no direct visual counterpart.

**The general lesson, which recurs in olfaction:** the right ensemble description is modality-specific and is itself a scientific result, not a formality. Choosing the wrong statistic is why "natural sounds are $1/f$" — true but nearly vacuous — coexisted for years with real progress on the modulation domain.

Olfaction's version of this question is unresolved. The chemical-identity ensemble may need a co-occurrence description [@zhou2018]; the plume ensemble needs intermittency and whiff statistics [@celani2014]. It is not obvious these are the same kind of object, and it is possible that olfaction, like audition, needs a two-stage description nobody has yet written down.

</div>
</details>

## Stationarity, again

Like natural images, natural sound statistics are reasonably stable across environments — the modulation spectrum of a forest and a city differ in detail but not in form. So audition, like vision, can hard-wire a code and expect it to remain appropriate.

That is now two modalities with stationary, measured ensembles and mature normative theories, against one with a non-stationary, unmeasured ensemble and no theory of comparable maturity. The pattern is hard to miss, and it is the strongest available argument that olfaction's theoretical gap is a **data** problem.

<x-mcq>
<script type="application/json">
{
  "id": "m02.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Why is the long-term power spectrum a poor description of the natural sound ensemble, when the analogous statistic works well for natural images?",
  "options": [
    {
      "text": "Because averaging over time destroys the modulation structure that distinguishes sources, and that structure is where the information is.",
      "correct": true,
      "feedback": "Correct. Speech, music and rain have similar long-term spectra; what separates them is how energy in each band fluctuates. The useful ensemble description is two-stage — decompose into channels, then characterise envelope statistics and their cross-channel correlations."
    },
    {
      "text": "Because sound is one-dimensional while images are two-dimensional, so a spectrum carries less information.",
      "feedback": "Dimensionality is a real difference but not the operative one. A one-dimensional signal can be perfectly well characterised by its spectrum — the problem is specifically that time-averaging discards temporal structure, not that there is only one spatial dimension."
    },
    {
      "text": "Because the auditory system does not compute a Fourier transform, so the spectrum is not the right description of what it sees.",
      "feedback": "The cochlea does perform something close to a frequency decomposition, so this understates it. The issue is not that the decomposition is wrong but that averaging its output over time throws away what matters. The system decomposes AND tracks the dynamics."
    },
    {
      "text": "Because natural sounds are not stationary, so a single spectrum cannot describe them.",
      "feedback": "Individual sounds are indeed non-stationary — but the *ensemble* statistics are reasonably stationary across environments, which is what allows a hard-wired code. The problem is the choice of statistic, not the stability of the ensemble."
    }
  ]
}
</script>
</x-mcq>
