---
id: m06.s09
title: Active sensing and the motor loop
lede: Vestibular nuclei cancel self-generated head motion but not passive motion. It is the most precisely localised instance of "subtract the prediction" in the mammalian brain, and the mechanistic archetype the olfactory silent-neuron account needs.
estimatedMinutes: 14
---

Vestibular is unusual: it is a sense of self-motion, and the animal generates most of its own self-motion. The signal is dominated by reafference.

## The cancellation result

Here is the finding that makes this section the most important in the module for olfaction.

A subset of vestibular nucleus neurons respond robustly to **passively applied** head rotation. The same neurons respond far less — often barely at all — to **actively generated** head rotation of identical amplitude and velocity [@cullen2012].

The sensor reports both identically; the afferents fire the same way. The cancellation happens centrally, at the first central synapse, and it depends on the movement being **self-generated and matching the motor command**. Perturb an active movement unexpectedly and the response returns.

**"A subset" is load-bearing, and flattening it would break the reflex.** Near-complete cancellation is confined to the neurons feeding posture and self-motion estimation; the neurons driving the VOR are attenuated but remain responsive during active head turns, which they must be, since gaze needs stabilising whether or not the animal caused the head movement. So the same afferent signal is subtracted on one branch and passed through on another, at the same synapse, in the same nucleus. That is a stronger and more specific finding than "the brain cancels reafference": what is cancelled is decided per consumer, not per stimulus, and it lines up exactly with the type 3 split of §6.8. Any olfactory version of this account has to say which stream it thinks is doing the subtracting; a bulb that cancelled sniff-driven input wholesale would have nothing left to report.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The archetype, and what it hands olfaction</div>
This is the cleanest localised instance of predictive subtraction in the mammalian brain, and it is exactly the mechanism the olfactory common-feature-subtraction account invokes.

<strong>What vestibular establishes:</strong>
<ul>
<li>The subtraction happens <strong>early</strong> — at the first central synapse, not in cortex.</li>
<li>It is <strong>specific</strong> — cancellation only when the sensory consequence matches the prediction.</li>
<li>The result is a neuron that appears <strong>unresponsive</strong> to a stimulus it is demonstrably encoding.</li>
<li>The prediction comes from an <strong>efference copy</strong> combined with a forward model of head dynamics.</li>
</ul>

<strong>The olfactory translation.</strong> Sniff-generated and background-odour-generated activity are both predictable. A bulb that subtracts them contains neurons that look silent. That is the common-feature-subtraction account — and vestibular shows the mechanism is real, early, and specific.

<strong>What to measure, borrowed directly:</strong> the vestibular experiment works by comparing <em>active</em> and <em>passive</em> delivery of an identical stimulus. The olfactory version is to deliver an identical odour transient either sniff-triggered (self-generated) or externally timed (passive), and ask whether apparently-silent bulbar neurons respond to the passive version. If they do, they were not silent — they were subtracting.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m06.s09.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A vestibular nucleus neuron fires vigorously to passive head rotation and barely at all to an identical active rotation [@cullen2012]. Which inference about its encoding is licensed, and which is not?",
  "options": [
    {
      "text": "The neuron encodes head rotation throughout; what is suppressed is the predicted component, so its output is a residual and its apparent silence during active motion is a statement that the prediction was accurate.",
      "correct": true,
      "feedback": "Right, and the decisive evidence is that perturbing an active movement unexpectedly restores the response. A neuron that had switched off would stay off; a neuron computing a residual fires exactly when the residual is non-zero. This is why the result is the archetype the olfactory silent-neuron account needs — it establishes that 'unresponsive' and 'not encoding' are different claims, and that distinguishing them requires manipulating the predictability of the stimulus rather than its intensity."
    },
    {
      "text": "The neuron is gated off during self-generated movement, so no vestibular information passes during active behaviour.",
      "correct": false,
      "feedback": "Correct under a gating model, which is a real mechanism elsewhere — thalamic and cerebellar circuits do suppress transmission during movement, and gating would produce the same first-order observation. It is ruled out here by the perturbation result. Under gating the channel is closed and an unexpected perturbation during an active movement should also be suppressed; instead the response returns, which requires the comparison to be with a specific prediction rather than with a movement flag."
    },
    {
      "text": "The neuron adapts rapidly, and active movements are preceded by postural adjustments that pre-adapt it.",
      "correct": false,
      "feedback": "Correct under the assumption that the suppression is a fatigue or adaptation phenomenon, which is a sensible first hypothesis and is why the experiment matches active and passive stimuli for amplitude and velocity. Adaptation would predict suppression that depends on recent stimulus history and not on agency, so it fails the case where a passive rotation is delivered immediately after an identical active one and still drives a full response."
    },
    {
      "text": "The neuron encodes the motor command rather than the sensory signal, since its firing tracks the absence of a command.",
      "correct": false,
      "feedback": "Correct under the assumption that a signal correlated with the command is a representation of the command — a genuine ambiguity in efference-copy circuits, and one worth taking seriously. It fails on sign and content: the neuron is driven by vestibular afference and its response to unpredicted perturbations scales with the *sensory* mismatch, not with the command. A command representation would not be modulated by an unexpected mechanical perturbation at all."
    }
  ]
}
</script>
</x-mcq>

## The internal model

The cancellation requires the brain to predict the sensory consequences of a motor command, which means a **forward model** of head dynamics.

The model has to be of more than the head. A neck motor command specifies head-on-trunk motion, whereas the canals report head-in-space motion, and the two differ by whatever the trunk is doing. So the prediction is constructed from a forward model of the canals, the otoliths *and* the neck proprioceptors together [@kandel2021] — which is why the cancellation survives when the animal moves its head while the trunk is also moving, and why it is not simply a copy of the neck command subtracted from the afferent.

<x-figure src="content/07-proprioception/figures/forward-model.js"
  caption="A forward model correcting a delayed, noisy sensor. Switch the model off and the estimate inherits both the lag and the noise. This is the object vestibular cancellation requires, and the same one §13 argues olfaction needs for plume transport — with the crucial difference that head dynamics are stationary and turbulence is not.">
</x-figure>


This is the same computational object as the one in motor control [@wolpert1995], and it is the same object §13 argues olfaction needs for plume transport. The vestibular version is easier in one crucial respect: **the forward model of head dynamics is stationary.** Heads obey Newtonian mechanics that do not change. Turbulent transport does not have that property, which is again why the olfactory inference problem is strictly harder (§6.2).

<x-free-response>
<script type="application/json">
{
  "id": "m06.s09.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You run the borrowed experiment: identical odour transients delivered sniff-triggered or externally timed, recording from bulbar neurons that appear unresponsive under normal sniffing. The passive-delivery responses come back indistinguishable from zero. Before concluding the neurons are simply not encoding the odour, list the alternative explanations that must be excluded, and say which one you would attack first.",
  "placeholder": "What else could produce a null here?",
  "modelAnswer": "**The null is much weaker than the positive result would have been, and the reason is worth being precise about.** Cancellation of a self-generated component requires the prediction to be available and accurate. A negative result is consistent with the account provided any link in that chain is broken by the manipulation.\n\n**Alternatives to exclude, roughly in order of seriousness.**\n\n**The prediction is not tied to the sniff command specifically.** If the bulb subtracts a slowly-updated estimate of the recent input rather than a per-sniff efference copy, externally timing the transient changes nothing about what is subtracted. This is the closest analogue of the vestibular perturbation control, and it is why the vestibular experiment works: there the prediction is demonstrably yoked to the motor command, and that was established separately [@cullen2012].\n\n**The passive stimulus is not actually matched.** An externally timed transient that does not reproduce the concentration waveform an active sniff produces at the epithelium is a different stimulus, and a null then says nothing. Nasal airflow shapes the sorption profile, so matching at the odour port is not matching at the receptor.\n\n**The subtraction is not at the recorded stage.** If cancellation happens at the granule-cell layer and the recorded population sits upstream or downstream of it, the manipulation targets a computation the electrode cannot see.\n\n**The neurons genuinely are not encoding the odour.** The uninteresting explanation, and the one that only becomes credible after the others are closed.\n\n**Which I would attack first, and why.** The stimulus-matching one, because it is the cheapest to check and because a failure there invalidates everything downstream of it. Measure the intranasal concentration waveform directly under both delivery modes and equate them; only then is the null about neurons rather than about plumbing.\n\n**The general lesson.** The vestibular result is compelling because it includes a *positive* condition — perturb the active movement and the response returns — which converts a null into a demonstration. Any olfactory version needs its equivalent: a manipulation that should restore the response if the account is right. Designing that condition matters more than running the comparison.",
  "rubric": [
    "Recognises that a null is weak evidence here because cancellation requires an intact prediction chain",
    "Names the possibility that the subtracted prediction is not yoked to the sniff command",
    "Names stimulus mismatch at the receptor, distinct from matching at the delivery port",
    "Names the possibility of recording at the wrong stage",
    "Chooses a first target with a stated reason, ideally the cheapest test whose failure invalidates the rest",
    "Bonus: identifies that the vestibular design's real strength is the response-restoring positive condition, and that the olfactory version needs one"
  ]
}
</script>
</x-free-response>
