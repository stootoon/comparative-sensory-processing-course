---
id: m07.s10
title: Adaptation, gain control, and state
lede: Proprioceptive recalibration is continuous, because the thing being measured keeps changing. Limbs grow, muscles fatigue, tools extend the body — and the system tracks all of it.
estimatedMinutes: 9
---

## Continuous recalibration

Proprioception's calibration problem is unusual: **the sensor's relationship to the world changes over the animal's lifetime.** Limbs grow, muscles change strength, injury alters mechanics, tools extend reach.

So recalibration is continuous, and it uses the same error signal the cerebellum uses for motor learning — the mismatch between predicted and actual sensory consequences.

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
