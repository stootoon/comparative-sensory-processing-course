---
id: m02.s09
title: Active sensing and the motor loop
lede: Audition is the most passive of the senses covered here, and the exceptions are the interesting part — including one that is a direct structural analogue of casting behaviour in odour tracking.
estimatedMinutes: 12
---

Audition cannot choose what arrives. There is no auditory equivalent of a saccade that redirects the sensor to a chosen part of the scene, and no equivalent of a sniff that controls when and how much stimulus is admitted. Sound arrives when it arrives.

The exceptions are worth listing because each has a counterpart elsewhere.

**Head movement to resolve ambiguity.** Interaural cues are ambiguous: a cone of positions produces identical ITD and ILD — the classic front-back confusion. Rotating the head changes the cues in a direction that depends on where the source actually is, resolving the ambiguity.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Audition is the most passive modality here — it has no sampling rhythm of its own, and the only entry in this band that belongs to it is the syllable rate of the speech it receives rather than anything it generates. That absence is the point of this section: audition resolves ambiguity by moving the head, not by controlling when the stimulus arrives.">
</x-figure>


<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The same move, three modalities</div>
This is <strong>structurally identical to casting in odour tracking</strong>. In both cases a single sample is ambiguous, the ambiguity has known geometry, and movement of the sensor produces a change whose direction disambiguates.

<strong>Audition:</strong> rotate the head, watch how ITD changes, infer front from back.<br>
<strong>Olfaction:</strong> cast across the wind, watch how encounter rate changes, infer bearing to source.<br>
<strong>Vestibular:</strong> the tilt–translation ambiguity, resolved by combining canal signals under a forward model.

The general form is: <em>ambiguity plus a known forward model of how movement changes the signal equals resolution.</em> §13 argues this is the shape any olfactory localisation account must take, and that the required forward model is a model of turbulent transport.
</x-callout>

**Pinna movement**, in species that have it, steers spectral filtering.

**Middle-ear muscle reflexes** attenuate transmission before loud self-generated sounds — a protective gain control that is also an efference-copy mechanism.

**Vocal efference copy.** When an animal vocalises it must not mistake its own sound for another's. Auditory cortex is suppressed during self-generated vocalisation by a corollary discharge from motor areas, and the suppression is *specific*: unexpected feedback breaks through.

That last one is the same motif as vestibular cancellation of self-generated head motion and the electrosensory negative image. **Subtract what you predicted**; a neuron that has succeeded goes quiet. The recurring interpretive warning applies — silence is a result, not an absence of response.

<x-predict>
<script type="application/json">
{
  "id": "m02.s09.p1",
  "contentRev": 1,
  "prompt": "Corollary discharge appears in audition for vocalisation, in vision for saccades, in the vestibular system for self-motion, and in electrosensation. Olfaction's obvious candidate is the sniff: self-generated, and the dominant modulator of receptor input. Predict what a corollary discharge of the sniff would look like, and give one observation that would distinguish it from ordinary sensory adaptation.",
  "placeholder": "What exactly would be cancelled, and how would you tell cancellation from adaptation?",
  "reveal": "**What it would have to look like.** A signal timed to the *motor command*, not to the airflow, carrying a prediction of the sniff-locked component of the bulbar response and subtracting it. Two properties follow, and both are diagnostic. It should precede or coincide with inhalation rather than lag it, since a prediction that arrives after the sensory consequence is useless. And it should be *specific*: an unexpected input — a sniff whose consequences differ from the predicted ones — should break through undiminished, exactly as unexpected auditory feedback breaks through vocalisation-induced suppression.\n\n**The distinguishing experiment.** Decouple the airflow from the motor command. Deliver the same flow passively, without a sniff command; or let the animal sniff while the flow is clamped. Then compare.\n\n*Adaptation* is a function of the stimulus history at the receptor. It predicts that responses track the airflow and are indifferent to whether a command was issued — same flow, same suppression.\n\n*Cancellation* is a function of the command. It predicts suppression that follows the command even when the flow is absent, and a large uncancelled response when flow arrives without a command. The mismatch condition is where the two accounts separate cleanly, and it is the same logic that established corollary discharge everywhere else on the list.\n\n**Why this is not merely an exercise.** Sniff-locked activity is ubiquitous in the bulb [@wachowiak2011] and is almost always treated as a *clock* — a phase reference for latency codes. Cancellation and clock are different jobs, and the same rhythm could be doing both: providing the timing reference downstream while being subtracted out of the amplitude signal. Nobody has separated them, and the mismatch experiment is the way in.\n\n**The comparative point.** Every other modality on that list cancels the consequences of a movement that changes *what the sensor points at*. Sniffing changes *how much stimulus is admitted*, which is a gain change rather than a displacement — so olfaction's version, if it exists, should look like predicted divisive normalisation rather than predicted subtraction. That is a structurally different prediction, and it would be the first entry on the list with that shape."
}
</script>
</x-predict>
