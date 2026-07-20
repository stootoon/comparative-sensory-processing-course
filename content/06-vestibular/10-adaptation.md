---
id: m06.s10
title: Adaptation, gain control, and state
lede: VOR gain is recalibrated by experience within hours, using a visual error signal. It is the best-understood plasticity in any sensory system, and it shows what adaptation looks like when there is a well-defined error to minimise.
estimatedMinutes: 11
---

## VOR gain adaptation

The VOR must produce eye rotation exactly equal and opposite to head rotation. If gain is wrong, the image slips on the retina during head movement.

Retinal slip is therefore an **error signal**, and the system uses it. Fit an animal with magnifying or minifying spectacles and VOR gain adapts over hours to days to restore image stability. The cerebellar flocculus is required.

<x-predict>
<script type="application/json">
{
  "id": "m06.s10.p1",
  "contentRev": 1,
  "points": 1,
  "prompt": "VOR recalibration is supervised: an independent sense supplies an unambiguous error signal saying the gain is wrong. Before reading the callout, decide what olfaction's equivalent would have to be. If the bulb is adjusting a decorrelating transformation to track non-stationary statistics, what could tell it the transformation has drifted? Commit to an answer, including 'nothing could' if that is your position.",
  "placeholder": "Name the teacher, or argue there isn't one.",
  "reveal": "**There is no equivalent of retinal slip, and the honest position is that olfaction has no external teacher for this.**\n\nWhat makes the VOR case work is a conjunction that is rarer than it looks. There is a defined error (image slip on the retina), a defined correct answer (gain exactly −1), and the error is reported by a *different sense* that has no stake in the vestibular code being right. Nothing in olfaction has that shape. No independent modality reports that the olfactory code is mis-tuned, and there is no behavioural readout whose failure specifically indicts the transformation rather than the animal's decision, motivation, or motor execution.\n\n**Why the neurogenesis argument survives anyway.** §3.2 proposed that non-stationary odour statistics require continuous rebuilding of the bulbar transformation. Rebuilding toward *what*, with no teacher? The answer is that the plausible objectives — decorrelation, sparseness, whitening — are **unsupervised**. They are computable from the input statistics alone, so they need no external signal, only the input and a learning rule. The argument is intact.\n\n**But the constraint it imposes is real and should be stated.** Olfaction cannot be doing supervised recalibration of the VOR kind, so any proposal that it is must name the teacher. That is a live methodological demand rather than a rhetorical one: proposals invoking 'error-driven' plasticity in the bulb routinely leave the error unspecified.\n\n**One genuine candidate exists, and §7.10 develops it.** A sniff generates a *predictable* sensory consequence, so a forward model of sniff-driven input can generate prediction errors internally. That is self-supervision rather than supervision — the same trick proprioception uses, where the prediction and the outcome are both internal. It requires no independent sense, only a predictable self-generated component, which sniffing supplies. If you argued for this, you anticipated the module's resolution."
}
</script>
</x-predict>

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Vestibular adaptation spans from the canal's seconds-long mechanical decay to VOR recalibration over days. The slow end is genuinely supervised — retinal slip is an unambiguous error signal from an independent sense — which is the luxury the olfactory case does not have.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">Why this is the best-understood plasticity anywhere</div>
Because the problem is well-posed in a way most sensory adaptation is not:

<strong>There is a defined error.</strong> Retinal slip is directly measurable and unambiguously means the gain is wrong.<br>
<strong>There is a defined correct answer.</strong> Gain should be exactly −1.<br>
<strong>The error signal is available</strong> from an independent sense.

Compare olfactory adaptation (§3.10). What is the error signal? If the bulb is adjusting a decorrelating transformation to track non-stationary statistics, what tells it the transformation is wrong? There is no equivalent of retinal slip — no independent sense reporting that the olfactory code is mis-tuned.

<strong>This is a real problem for the neurogenesis argument</strong> and the course should say so. §3.2 proposed that non-stationary statistics require continuous rebuilding. But rebuilding toward <em>what</em>? Unsupervised objectives — decorrelation, sparseness — can be optimised without an external teacher, so the argument survives. But it does mean the olfactory system cannot be doing supervised recalibration of the VOR kind, and any proposal that it is needs to name the teacher.
</x-callout>

## Set-point and habituation

Sustained rotation produces a decaying response and, on stopping, an after-effect in the opposite direction — the familiar post-spin nystagmus and vertigo. Repeated exposure habituates it, which is why dancers and pilots adapt.

## State

Vestibular processing is strongly modulated by behavioural state, and in a way that connects to §6.9: responses to self-generated motion are suppressed during active movement and restored during passive transport. State here is not arousal but **agency** — whether the animal is causing the motion.

That is a more specific kind of state-dependence than the others in this course, and it is worth distinguishing. Attention modulates gain; arousal modulates gain; agency determines whether a prediction is available to subtract at all.
