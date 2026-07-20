---
id: m02.s06
title: Routing — the obligatory hub
lede: Audition has more subcortical stations than any other sense, and one of them is a bottleneck almost nothing bypasses. Setting that beside olfaction's two synapses is the sharpest version of the question this course keeps returning to.
estimatedMinutes: 14
---

The ascending auditory pathway is long. From cochlear nucleus the signal passes through the superior olivary complex, the lateral lemniscus, the **inferior colliculus**, and the medial geniculate body of the thalamus before reaching cortex — five or more synapses, against vision's four and olfaction's two.

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Pathway depth across all the modalities. Sort by synapses-to-cortex and audition is deepest, olfaction shallowest. Then sort by synapses-to-ACTION and the ordering inverts — proprioception is shortest, olfaction longest. That inversion is the evidence for the rule this course proposes: depth tracks the deadline of the fastest dependent behaviour, and how much geometric work must be done before the signal is useful, not evolutionary age.">
</x-figure>


<x-figure src="content/media/auditory-pathway.jpg"
  caption="The ascending auditory pathway. Count the stations between cochlea and cortex, then compare with the two-synapse olfactory route in §3.6. The inferior colliculus, near the top, is an obligatory hub that nearly everything ascending passes through — a bottleneck with no equivalent in vision or olfaction."
  credit="Jonathan E. Peelle. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Auditory_Pathway.png">
</x-figure>


## What the lateral lemniscus is for

The list above names the lateral lemniscus as a station and then says nothing about it, which is worth repairing, because its known job answers a problem §2.1 raised and then dropped: **reverberation**.

Every localisation cue an animal computes is corrupted by reflections, which arrive milliseconds later carrying entirely wrong ITDs and ILDs. The behavioural solution is the *precedence effect* — mammals suppress all but the first-arriving copy. The dorsal nucleus of the lateral lemniscus is a plausible mechanism for it: its neurons are GABAergic, driven binaurally from both superior olives, amplified by NMDA receptors so that the inhibition they impose on the inferior colliculus outlasts the sound by tens of milliseconds, and physiological correlates of echo suppression are measurable in the IC [@kandel2021].

Note the shape of that solution, because it recurs. The system is not estimating the room and deconvolving it. It is applying a *prior* — the first arrival is the direct path — implemented as a temporal window during which later evidence is simply refused. Cheap, wrong in principle, and almost always right in practice.

## The inferior colliculus

Nearly every ascending auditory pathway synapses in the IC. This is unusual: vision has no equivalent obligatory midbrain hub, since retinal output reaches cortex via LGN with the superior colliculus running in parallel rather than in series.

What the IC appears to be for:

- **Convergence.** Timing, level and spectral streams, separated in the cochlear nucleus, are brought back together. Binaural cues computed in the olive meet monaural spectral cues computed in the dorsal cochlear nucleus, and a unified representation of auditory space becomes possible. This is forced rather than optional: ITD and ILD each specify only a cone of directions, so nothing short of combining them with the spectral cue can name a single point in space.
- **Tonotopy with a grain.** The central nucleus is tonotopic, but the map is *discontinuous* — best frequencies step rather than vary smoothly, and the step is about a third of an octave, which is the width of the psychophysical critical band plotted in §2.4 [@kandel2021]. A behavioural filter width and a midbrain lamination interval turning out to be the same number is the sort of correspondence the course should collect, because it constrains where the filter is imposed.
- **Adaptation to stimulus statistics.** IC neurons adjust their rate–level functions to the mean, variance and higher-order structure of the current sound-level distribution, improving population accuracy near the most common levels [@dean2005]. This is §0.2's dynamic efficient coding, measured directly, in the middle of a pathway.
- **Multisensory and motor integration**, and a route to orienting behaviour that does not require cortex.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The synapse-count question, sharpened</div>
Three modalities, three depths before cortex:

<strong>Audition:</strong> five or more, through an obligatory midbrain hub.<br>
<strong>Vision:</strong> four, through an obligatory thalamic relay.<br>
<strong>Olfaction:</strong> two, with no obligatory relay at all.

The tempting explanation is evolutionary age, and it is probably part of the story. But notice a better one is available: <strong>the depth tracks how much has to be computed before the signal is useful.</strong>

Audition must compute location from scratch — it is not in the receptor array — and that requires binaural comparison, then integration with spectral cues, then combination. Vision gets location for free from retinotopy and needs fewer stages. Olfaction computes neither location nor a metric arrangement early, and goes almost directly to an associative structure.

<strong>The prediction this makes:</strong> depth before cortex should correlate with how much of the behaviourally relevant variable is <em>absent</em> from the receptor array, not with evolutionary age. That is testable across the modalities in the full course.
</x-callout>

## The thalamus, doing thalamus things

The medial geniculate body shows the same features as LGN: driver and modulator inputs, burst and tonic firing modes, strong modulation by attention and state, and descending corticothalamic feedback that outnumbers the ascending path by roughly ten to one [@kandel2021]. That ratio is worth stating as a number rather than as "massive", because it is the single most awkward fact for a feedforward reading of any sensory pathway: the thalamus receives an order of magnitude more from cortex than it sends there.

Two independent modalities converging on the same thalamic architecture is decent evidence that the architecture does something necessary rather than accidental. Which makes olfaction's willingness to do without it the more striking — and is exactly the question §3.6 takes up.

<x-mcq>
<script type="application/json">
{
  "id": "m02.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "This section proposes that pathway depth tracks how much of the behaviourally relevant variable is absent from the receptor array, rather than evolutionary age. Which finding would count most strongly against it?",
  "options": [
    {
      "text": "A modality whose receptor array supplies the behaviourally relevant variable directly, and which nonetheless has many obligatory stations before the signal can drive behaviour.",
      "correct": true,
      "feedback": "This is the disconfirming case, because it is the combination the hypothesis forbids: nothing to compute, yet depth anyway. Note that the hypothesis is genuinely at risk here, which is what makes it worth stating. Proprioception is the obvious place to look — the array reports joint configuration close to directly — and the fact that it is also the shortest route to action is the hypothesis surviving a test it could have failed."
    },
    {
      "text": "The observation that olfaction is both the phylogenetically oldest of the three and the shallowest, as the age account predicts.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which is the live rival and is probably part of the story. But the two accounts agree on olfaction — it is old *and* it computes little geometry — so the case discriminates nothing. Evidence against a hypothesis has to come from where the rivals disagree, which means finding a young modality that is shallow or an old one that is deep."
    },
    {
      "text": "A finding that the inferior colliculus is bypassed in some species, reducing audition's effective depth below vision's.",
      "correct": false,
      "feedback": "Correct under the assumption that the raw synapse count is the predicted quantity. It is not quite: the account predicts depth from computational demand, so a species that bypasses the IC is a counterexample only if it also computes auditory space to the same precision. Without the behavioural half, the finding is uninterpretable — and if the bypassing species turned out to localise poorly, it would be a confirmation."
    },
    {
      "text": "Evidence that the IC's main functions are statistical adaptation and multisensory integration rather than geometric computation.",
      "correct": false,
      "feedback": "Partly correct, and the observation is largely true [@dean2005]. It bites to the extent that it removes the geometric work the account attributes to the pathway. But the account predicts *total* depth from total computational demand, and does not require each station to be doing the geometry — stations acquire further functions once they exist. It would be damaging only if no station in the pathway did geometric work, and the superior olive plainly does."
    }
  ]
}
</script>
</x-mcq>
