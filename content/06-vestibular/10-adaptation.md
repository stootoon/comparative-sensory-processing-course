---
id: m06.s10
title: Adaptation, gain control, and state
lede: VOR gain is recalibrated by experience within hours, using a visual error signal. It is the best-understood plasticity in any sensory system, and it shows what adaptation looks like when there is a well-defined error to minimise.
estimatedMinutes: 15
---

## VOR gain adaptation

The VOR must produce eye rotation exactly equal and opposite to head rotation. If gain is wrong, the image slips on the retina during head movement.

Retinal slip is therefore an **error signal**, and the system uses it. Fit an animal with magnifying or minifying spectacles and VOR gain adapts over hours to days to restore image stability [@kandel2021]. The cerebellar flocculus is required, and the site of the change is now reasonably well localised: the visual error reaches the inferior olive and is delivered to Purkinje cells as climbing-fibre input, but the learned change is ultimately held in the *vestibular nuclei*, in floccular target neurons that maintain their altered sensitivity after cerebellar input is removed. The cerebellum teaches; the brainstem remembers. That distinction is worth carrying, because "the cerebellum is required for the plasticity" and "the plasticity is in the cerebellum" are different claims and only the first is safe.

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

## Where the well-posedness runs out

The callout's second claim — that there is a defined correct answer — is true of the rotational VOR and conspicuously untrue of its translational counterpart, and the contrast is more instructive than either case alone.

For rotation, a gain of −1 is correct for every target at every distance, because a head rotation displaces all images by the same angle. For translation it is not: a lateral head movement shifts a near object across the retina far more than a distant one, so the compensatory eye rotation must scale with viewing distance, and "correct gain" is undefined until the target is specified. The system does attempt it — the translational VOR is distance-dependent — but primates **undercompensate substantially, with gains around 0.5** [@kandel2021]. Ocular counter-rolling, the tilt response, is worse still: a gain below 0.1 in humans, against near-complete compensation in lateral-eyed afoveate species that cannot fix the residual with a saccade.

So the tidy picture holds for exactly the reflex whose objective is target-independent, and degrades in proportion to how much the objective depends on unmeasured context. This is the same failure the course diagnoses centrally in §6.7 and §6.11 — accounts succeed where the objective can be stated — arriving here at the level of a brainstem reflex. It also predicts where to expect sloppiness elsewhere: not in the fast systems and not in the complicated ones, but in whichever ones cannot say what they should be computing without knowing something they do not measure.

## Set-point and habituation

Sustained rotation produces a decaying response and, on stopping, an after-effect in the opposite direction — the familiar post-spin nystagmus and vertigo. Repeated exposure habituates it, which is why dancers and pilots adapt.

## Compensation: plasticity with no teacher at all

Destroy one labyrinth and the immediate consequence is severe: the intact side's resting discharge is now unopposed, the brainstem reads a permanent rotation, and the animal has violent vertigo and spontaneous nystagmus. Over days this subsides — completely, in the sense that the resting symptoms go — even though nothing peripheral has regenerated. The commissural system (§6.5) rebalances the set-point centrally [@kandel2021].

This belongs beside VOR gain adaptation because it is the *opposite* kind of learning, in the same system, on a similar timescale.

- **VOR recalibration** is supervised. An independent sense reports a signed error, and the correct answer is externally defined.
- **Vestibular compensation** has no teacher. No sense reports that the tonic imbalance is wrong, and the brain has no access to the fact that the labyrinth is gone. What it has is an objective computable from the input alone: *at rest, the two sides should agree*. Restoring that requires only the input and a learning rule.

The second is the shape olfaction needs, and it is a better template than the first. §3.2's neurogenesis argument was defended in the callout above on the grounds that unsupervised objectives exist; compensation shows one running in a real circuit, on a behaviourally decisive problem, with a measurable endpoint. It also shows the characteristic limitation of unsupervised repair: compensation restores the *set-point* but not the *dynamic range*, which is why the head-impulse asymmetry (§6.4) persists indefinitely after the vertigo has gone. An objective computed from the input can only fix what the input reveals, and a missing high-velocity channel reveals nothing when the head is still.

## State

Vestibular processing is strongly modulated by behavioural state, and in a way that connects to §6.9: responses to self-generated motion are suppressed during active movement and restored during passive transport. State here is not arousal but **agency** — whether the animal is causing the motion.

That is a more specific kind of state-dependence than the others in this course, and it is worth distinguishing. Attention modulates gain; arousal modulates gain; agency determines whether a prediction is available to subtract at all.
