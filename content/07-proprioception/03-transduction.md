---
id: m07.s03
title: Transduction and physical limits
lede: The only sensor in this course whose sensitivity the brain sets. Gamma motor drive means proprioception can tune its own receptors — which is either a solution or a confound, depending on whether you know what was sent.
estimatedMinutes: 12
---

## Muscle spindles

Spindles are encapsulated organs lying in parallel with muscle fibres, containing specialised **intrafusal** fibres innervated by sensory endings. Stretch the muscle and the spindle stretches, and the endings fire.

<x-figure src="content/media/somato-muscle-spindle.jpg"
  caption="A muscle spindle. Intrafusal fibres lie in parallel with the working muscle, wrapped by sensory endings — and note the gamma motor innervation of the intrafusal fibres themselves. That efferent input is what lets the nervous system set its own receptor's sensitivity, which no other sensor in this course can do."
  credit="Kowalczewski & Prochazka (Neuromechanics). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Muscle_spindle_model.jpg">
</x-figure>


Two ending types: **primary (Ia)** endings, highly sensitive to rate of change, and **secondary (II)** endings, reporting static length. The same split-early motif again — one channel for the derivative, one for the value.

## Gamma drive: the brain sets the gain

Here is the property no other sensor in this course has.

Intrafusal fibres have their own motor innervation, from **gamma motor neurons**. Contracting them stretches the sensory region, changing the spindle's sensitivity and operating point independently of the muscle's actual length.

**The nervous system tunes its own receptors, on a moment-to-moment basis.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">Efferent control of a sensor: how common is it?</div>
The course has met partial versions:

<strong>Olivocochlear efferents</strong> turn the cochlear amplifier down (§2.10) — gain control, but not re-tuning.<br>
<strong>Pupil</strong> adjusts light admitted — a crude aperture.<br>
<strong>Sniffing and whisking</strong> alter what reaches the sensor (§3.9, §4.9) — controlling the stimulus, not the transducer.<br>
<strong>Gamma drive</strong> changes the transducer's own operating point and sensitivity, continuously, under central control.

Gamma drive is the most direct. And it creates the confound of §7.1: spindle output is a function of length <em>and</em> gamma drive, so a downstream reader must know the gamma command to interpret the afferent signal.

<strong>Alpha–gamma co-activation</strong> is the usual resolution — motor commands drive alpha and gamma together, keeping the spindle loaded across the movement so it stays sensitive to deviations from the intended trajectory. On that reading the spindle does not report length at all. <strong>It reports the difference between intended and actual length</strong> — an error signal, computed at the sensor.

That is predictive subtraction implemented in the periphery, and it belongs on the list with vestibular cancellation and the electrosensory negative image. Same principle, earliest possible implementation.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Under alpha–gamma co-activation, the spindle is claimed to report not length but the difference between intended and actual length. What observation would most directly support that reading over the plain length-encoding one?",
  "options": [
    {
      "text": "That during an accurately executed movement, spindle afferent firing stays near a constant baseline despite large changes in muscle length, and departs from it in proportion to unexpected perturbation.",
      "correct": true,
      "feedback": "This is the signature, and it is the same signature as vestibular cancellation (§6.9) implemented one stage earlier. A length encoder must modulate with length; an error encoder is quiet when execution matches intention and speaks when it does not. The reason this belongs in the course is that it is predictive subtraction performed *at the sensor* rather than at a central synapse — which means 'the periphery reports the raw variable and the brain does the inference' is not a safe default anywhere."
    },
    {
      "text": "That cutting the gamma efferents abolishes the spindle's response to muscle stretch.",
      "correct": false,
      "feedback": "Correct under the assumption that gamma drive is what makes the spindle responsive at all, and de-efferented spindles are indeed substantially less sensitive — the intrafusal fibres go slack and the sensory region unloads. But abolishing responsiveness is not the prediction. The error-signal reading requires the response to be *organised around a reference*, not merely present; a de-efferented spindle that still reports stretch weakly is consistent with both accounts."
    },
    {
      "text": "That Ia afferents are more sensitive to rate of change than to absolute length.",
      "correct": false,
      "feedback": "Correct under the assumption that phasic tuning indicates error coding, and derivative-sensitivity is genuinely a form of redundancy reduction — the same logic as retinal transient channels. But it is a fixed filter applied to the input, not a comparison against a centrally supplied reference. A pure differentiator is quiet during *any* held posture, whether or not it was the intended one, so it cannot distinguish accurate execution from inaccurate."
    },
    {
      "text": "That spindle firing during passive stretch differs from firing during an identical active movement.",
      "correct": false,
      "feedback": "Partly correct, and this is the closest distractor — it is the vestibular experimental design transplanted, and the difference does exist. It falls short because a difference between active and passive is also predicted by a simpler account in which gamma drive merely sets gain, with no reference signal involved. To get to the error-coding claim you need the response to scale with the *mismatch* specifically, which requires perturbing the active movement rather than only comparing it with a passive one."
    }
  ]
}
</script>
</x-mcq>

## Golgi tendon organs

Located at the muscle–tendon junction, in **series** with the muscle rather than in parallel, so they report **force** rather than length. Together with spindles the system measures both kinematics and kinetics.

<x-figure src="content/media/somato-spindle-gto-fluorescence.jpg"
  caption="Spindle and Golgi tendon organ imaged in situ in mouse muscle, with the sensory terminals fluorescently labelled. The spindle's spiral wrapping around intrafusal fibres and the GTO's branching within the tendon are visible — two quite different endings, and the difference in placement is what makes one report length and the other force."
  credit="Sonner MJ, Walters MC, Ladle DR (2017), PLOS ONE 12(1):e0170751, Figure 1. CC BY 4.0."
  source="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0170751">
</x-figure>


<x-figure src="content/media/somato-golgi-tendon-organ.jpg"
  caption="A Golgi tendon organ, at the muscle–tendon junction. Being in series with the muscle rather than parallel to it is the whole difference: a series element reports the force transmitted, a parallel element reports length. The same transducer, two placements, two different measured quantities — the accessory-structure principle again (§4.3)."
  credit="Kowalczewski & Prochazka (Neuromechanics). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Tendon_organ_model.jpg">
</x-figure>


## Other contributors

Joint receptors signal mainly at extremes of range. Cutaneous receptors, especially SA2 stretch afferents (§4.4), contribute substantially — skin stretch over a joint is informative about its angle, which is one reason touch and proprioception are hard to separate cleanly.

<x-free-response>
<script type="application/json">
{
  "id": "m07.s03.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Gamma drive lets the nervous system set its own receptor's operating point continuously. Sniffing lets it control what reaches the receptor. Argue for or against the claim that these are the same capability at different points in the chain — and say what would be gained if olfaction had a genuine gamma-drive analogue.",
  "placeholder": "Same capability, or different in kind?",
  "modelAnswer": "**They are not the same capability, and the distinction is worth defending precisely because it is easy to blur.**\n\nSniffing controls the *stimulus*: how much odorant arrives, over what time course, with what sorption profile along the epithelium. The transducer's properties are untouched. Whisking, licking and saccades all sit in the same category — the animal chooses what to present to a fixed sensor.\n\nGamma drive changes the *transducer*: the intrafusal fibre's contraction shifts the sensory region's operating point and sensitivity, independently of the muscle's actual length. Olivocochlear efferents are the nearest partial case in this course, and they only turn gain up or down (§2.10); gamma drive re-tunes.\n\n**Why the difference has consequences rather than being terminological.** Stimulus control cannot fix a sensor operating in the wrong range — if the epithelium is saturated, sniffing harder makes it worse. Transducer control can. And transducer control creates a confound stimulus control does not: the readout now depends on a command the reader must know, which is exactly §7.1's problem. **The capability and the confound arrive together**, and any system claiming one must pay for the other.\n\n**What an olfactory gamma-drive analogue would buy.** The concrete win is dynamic range. Olfactory receptor neurons face concentrations spanning many orders of magnitude, and the interesting discriminations often sit near a background. A mechanism that shifted receptor sensitivity to centre the operating range on the expected concentration — set from an efference copy of what the animal expects to encounter — would do for olfaction what centre–surround does for the retina's contrast sensitivity (§1.5): spend the available range on the informative residual rather than on the predictable bulk.\n\n**And it makes a prediction.** Such a mechanism would have to be *specific* to expected background, not merely a global gain term, and it would show the vestibular signature: apparently reduced responses to expected concentrations, restored responses when the expectation is violated. Peripheral olfactory adaptation is usually described as a passive receptor-level process. Whether any part of it is centrally commanded is, as far as this course is aware, not settled — and it is the version of §6.9's experiment that targets the receptor rather than the bulb.",
  "rubric": [
    "Separates control of the stimulus from control of the transducer, with examples on each side",
    "Notes that olivocochlear efferents are gain control rather than re-tuning, so the analogue is partial",
    "Identifies that transducer control brings a readout confound the reader must resolve with efference copy",
    "Names dynamic range around an expected background as the concrete benefit for olfaction",
    "Bonus: connects the benefit to the same logic as retinal predictive subtraction — spend range on the residual",
    "Bonus: states a testable signature, namely expectation-specific suppression that is restored when the expectation is violated"
  ]
}
</script>
</x-free-response>
