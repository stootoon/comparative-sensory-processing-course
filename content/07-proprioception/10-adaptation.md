---
id: m07.s10
title: Adaptation, gain control, and state
lede: Proprioceptive recalibration is continuous, because the thing being measured keeps changing. Limbs grow, muscles fatigue, tools extend the body — and the system tracks all of it.
estimatedMinutes: 9
---

## Continuous recalibration

Proprioception's calibration problem is unusual: **the sensor's relationship to the world changes over the animal's lifetime.** Limbs grow, muscles change strength, injury alters mechanics, tools extend reach.

So recalibration is continuous, and it uses the same error signal the cerebellum uses for motor learning — the mismatch between predicted and actual sensory consequences.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Proprioceptive recalibration in context. It sits in the middle of the range, and it is the useful middle case for the argument this section makes: it is self-supervised, needing no external teacher, because a forward model generates predictions that reality can falsify.">
</x-figure>


Adaptation after loading, prism adaptation, and tool incorporation are all instances of the same mechanism: a forward model updated by prediction error.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Three calibration problems, compared</div>
<strong>Vestibular</strong> (§6.10): recalibrates VOR gain using retinal slip — an <em>independent sense</em> providing an unambiguous error signal.<br>
<strong>Proprioception:</strong> recalibrates using prediction error from its own forward model — <em>self-supervised</em>, since the prediction and the outcome are both internal.<br>
<strong>Olfaction</strong> (§3.10): must recalibrate against non-stationary statistics, with <strong>no independent error signal at all</strong>.

Proprioception is the useful middle case. It shows that a system can recalibrate <em>without</em> an external teacher, provided it has a forward model generating predictions that reality can falsify.

<strong>Does olfaction have anything comparable?</strong> A sniff generates a predictable sensory consequence, so a forward model of sniff-driven input could in principle generate prediction errors. That is exactly what the common-feature-subtraction account requires, and it means the olfactory recalibration story does not need an external teacher after all — it needs a predictable self-generated component, which sniffing supplies.
</x-callout>

## Fatigue and gain

Muscle fatigue changes the force a given command produces, and the system compensates by adjusting the mapping between intended and commanded force. Persistent aftereffects — the arm that drifts upward after pushing against a wall — are the compensation outlasting its cause.

<x-mcq>
<script type="application/json">
{
  "id": "m07.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Proprioception recalibrates with no external teacher, using prediction error from its own forward model. What exactly does that licence for olfaction, and what does it still not licence?",
  "options": [
    {
      "text": "It licences recalibration against the predictable, self-generated component of the input — sniff-driven activity — but not recalibration against drift in the external odour statistics, which no internal prediction can detect.",
      "correct": true,
      "feedback": "This is the right partition, and drawing it is what stops the argument from proving too much. A forward model falsifiable by reality gives you an error signal for anything you can predict; the sniff's sensory consequence qualifies. But the non-stationarity §3.2 invokes is in the *world's* statistics — which odours co-occur, at what concentrations — and a self-generated prediction says nothing about whether that has changed. So the neurogenesis argument still needs an unsupervised objective for the external part, exactly as §6.10 concluded. Self-supervision covers one half of the problem, not both."
    },
    {
      "text": "It licences the full neurogenesis argument, since a forward model of sniff-driven input supplies the error signal that §3.10 was missing.",
      "correct": false,
      "feedback": "Correct under the assumption that any internally generated error signal can drive any recalibration, and this is the reading the section's callout invites if read quickly. It over-extends. The error signal has to be informative about the quantity being recalibrated, and a sniff-consequence prediction error reports on the sniff-to-input mapping, not on whether the bulb's decorrelating transformation still matches the environment's covariance structure."
    },
    {
      "text": "It licences nothing for olfaction, because proprioception's forward model predicts the consequences of the animal's own commands and olfaction's problem is about external statistics.",
      "correct": false,
      "feedback": "Partly correct, and the distinction it draws is the right one — this is the strongest distractor. It goes too far in the other direction. Sniffing genuinely is a motor command with predictable sensory consequences, so olfaction really does have a self-supervisable component, and that component is precisely what the common-feature-subtraction account needs (§6.9). The honest position is a partition, not a rejection."
    },
    {
      "text": "It licences comparing the two only if olfactory recalibration operates on a similar timescale, since prediction-error learning requires the target to change slowly relative to the sampling rate.",
      "correct": false,
      "feedback": "Correct under the assumption that timescale separation is the binding condition on error-driven learning, and it is a real requirement — a target changing faster than you can estimate it is not learnable by any rule. But it is a condition on both systems equally rather than a disanalogy, and sniffing at several hertz samples far faster than odour environments change. Timescale is not where this comparison succeeds or fails."
    }
  ]
}
</script>
</x-mcq>
