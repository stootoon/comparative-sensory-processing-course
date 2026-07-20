---
id: m04.s10
title: Adaptation, gain control, and state
lede: Touch adapts so completely that a sustained stimulus disappears from awareness. That is the extreme case of a principle every modality in this course shares, and it makes the interpretive trap unusually visible.
estimatedMinutes: 10
---

## Complete adaptation

You do not feel your clothes. A constant pressure fades from awareness within seconds, and rapidly-adapting afferents stop responding almost immediately after a step.

Touch is therefore the modality where the general principle is most obvious: **sensory systems report change, not state.** The reason is the one from §0.2 — a sustained signal is predictable, predictable signals carry no information, and dynamic range spent representing them is wasted.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Touch has the fastest peripheral adaptation in the course — Pacinian afferents stop responding within milliseconds of a step. That speed is partly mechanical rather than neural (§4.3): the corpuscle's lamellae relax and stop transmitting force, so the adaptation costs nothing.">
</x-figure>


Adaptation operates at several levels: mechanical relaxation in accessory structures (§4.3), channel inactivation, synaptic depression, and central gain control.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The silent-neuron trap, at its clearest</div>
A Pacinian afferent under sustained pressure is <strong>silent</strong>. It is not broken, not unresponsive, and not failing to encode — it has correctly reported that nothing is changing.

This is the same trap the course has flagged in vestibular cancellation, in electrosensory negative images, and in the olfactory silent-neuron literature. Touch makes it obvious because the perceptual consequence is available to introspection: you know your clothes are there, and you know you cannot feel them.

<strong>The general rule:</strong> in any modality with strong adaptation, an unresponsive neuron under sustained stimulation is evidence that subtraction is working, not evidence of no response. Deciding which requires a stimulus that changes.
</x-callout>

## Sensory gating and self-touch

Tactile transmission is gated during movement — sensory input from a limb is suppressed while that limb moves, which is why self-generated touch feels weaker than identical externally-generated touch.

The classic demonstration is that you cannot tickle yourself. Predicted tactile consequences of your own action are attenuated; the same stimulus delivered unpredictably is not.

That is the **efference-copy** motif once more, and touch adds something the other instances do not: a graded psychophysical measurement. Introduce a delay or a spatial offset between the self-generated movement and the resulting touch, and the attenuation weakens progressively with the mismatch. **The forward model's precision is measurable**, which makes touch the best place to study the mechanism the olfactory silent-neuron account invokes.

<x-mcq>
<script type="application/json">
{
  "id": "m04.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You record an olfactory neuron that is silent during sustained presentation of an odour it was reported to respond to. Which conclusion is licensed, and what stimulus would settle it?",
  "options": [
    {
      "text": "None yet — silence under sustained stimulation is equally consistent with no response and with a subtraction working correctly, and only a stimulus that *changes* distinguishes them.",
      "correct": true,
      "feedback": "This is the trap in its general form, and touch makes it obvious because the perceptual consequence is available to introspection: you know your clothes are there and you know you cannot feel them. A Pacinian afferent under sustained pressure is silent, not broken — it has correctly reported that nothing is changing. The same ambiguity has been flagged in vestibular cancellation and in electrosensory negative images. The diagnostic is a transient: step, offset, or fluctuation, ideally with the predicted component manipulated independently."
    },
    {
      "text": "The neuron is participating in a predictive-coding scheme, since sensory systems report change rather than state.",
      "correct": false,
      "feedback": "Correct under the assumption that the general principle can be applied to an individual measurement — and the principle is right: predictable signals carry no information and dynamic range spent representing them is wasted (§0.2). But the principle predicts the observation under *both* hypotheses, so it cannot discriminate between them. Inferring the mechanism from a measurement it does not distinguish is precisely the trap."
    },
    {
      "text": "The original report was an artefact, since a genuine responder would sustain some elevated rate above baseline.",
      "correct": false,
      "feedback": "Correct under the assumption that response magnitude should track stimulus magnitude — the labelled-line intuition, and the one adaptation is built to violate. Touch is the extreme case: rapidly-adapting afferents stop responding almost immediately after a step, and the adaptation is partly mechanical rather than neural, so it costs nothing and is not negotiable (§4.3)."
    },
    {
      "text": "The odour is being sampled without sniffing, so the receptors are not being driven; restoring active sampling would restore the response.",
      "correct": false,
      "feedback": "Partly correct as an experimental worry, and worth ruling out — sniffing is what delivers the fluctuating input, so a sustained flow removes the very transients the system encodes. But it is a special case of the right answer rather than an alternative to it: what the diagnostic requires is a stimulus that changes, and restoring the sniff is one way to supply one."
    }
  ]
}
</script>
</x-mcq>
