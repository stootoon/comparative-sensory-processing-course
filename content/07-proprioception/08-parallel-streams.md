---
id: m07.s08
title: Parallel streams
lede: Three consumers with three latencies — reflex, forward model, and conscious perception — and the last of them is arguably a by-product.
estimatedMinutes: 9
---

Proprioceptive information diverges to consumers with very different requirements:

- **Spinal reflexes** — fastest, one to two synapses, stabilising against perturbation.
- **Cerebellar forward models** — updating the predictor, on the timescale of movement.
- **Cortical motor planning** — slower, integrative.
- **Conscious position sense** — slowest, and the least essential.

This is a **deadline-driven split** of the vestibular kind (§6.8): the same content delivered to consumers needing it at different latencies.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Proprioception's split is the deadline kind, and it spans the widest latency range of any: a 30 ms monosynaptic reflex through to conscious position sense. Filter by each reason in turn to see how differently the three arguments distribute across modalities.">
</x-figure>


## Conscious position sense as a by-product

The clinical evidence is striking. Patients with large-fibre sensory neuropathy lose conscious proprioception and are severely impaired, but with visual guidance can relearn substantial motor control — indicating that the *conscious* representation is not what the motor system primarily uses.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Perception is not always the point</div>
Proprioception is the clearest case in the course where the perceptual representation appears to be secondary to a control representation. The system's main output is a state estimate for a controller; awareness of limb position is close to a side effect.

<strong>That is worth carrying to olfaction.</strong> Olfactory research is dominated by identification and discrimination — perceptual tasks — because they are what humans report and what psychophysics measures.

But §3.8 argued that a large part of what olfaction does is <em>navigation</em>: getting to a source. If the dominant consumer is a controller rather than a percept, then the perceptual literature may be studying the by-product, exactly as a proprioception literature built on conscious position sense would have missed the cerebellum.

<strong>The concrete version:</strong> what does olfactory-guided navigation demand of the code, and is anyone measuring that instead of discrimination performance?
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m07.s08.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A proprioception literature built on conscious position sense would have missed the cerebellum. Suppose the analogous mistake is being made in olfaction — that discrimination and identification are the by-product and navigation is the point. Design the strongest single experiment you can to find out, and state honestly what a negative result would and would not license.",
  "placeholder": "What would you measure, and what would a null mean?",
  "modelAnswer": "**The shape of the argument first.** The proprioceptive case is convincing because of a dissociation with a specific structure: patients with large-fibre neuropathy lose conscious position sense yet, with visual guidance, relearn substantial motor control. The perceptual representation can be removed while the control representation carries on. The olfactory version needs the same shape — a manipulation that removes one function and leaves the other — and the hard part is that both functions run through the same tissue.\n\n**The experiment.** Train an animal on two tasks with the same stimuli: a go/no-go discrimination between two odorants, and free navigation to a source releasing one of them into a turbulent plume. Then compare what the bulbar population encodes under each, and — the load-bearing part — ask which stimulus features each task's *performance* actually depends on. Manipulate plume intermittency and encounter timing while holding time-averaged identity information constant. Navigation should degrade sharply; discrimination should not. Then run the reverse: degrade identity information while preserving temporal structure.\n\n**What a double dissociation would establish.** That the two tasks make genuinely different demands of the code, which is the necessary premise of the whole reframing. Without it, 'the field is studying the by-product' is not even well-posed, because the by-product and the point would be the same signal.\n\n**What a negative result would and would not license.** A failure to dissociate would *not* show that navigation is unimportant. It would show that these two tasks do not distinguish the codes, which is compatible with the demands being genuinely different but the manipulation too weak, or with the animal solving navigation by repeated discrimination — a real possibility, and one that would make the reframing wrong in an interesting way rather than merely unsupported.\n\n**The honest caveat.** Unlike the neuropathy case, there is no known olfactory preparation that removes the percept and spares the control. Until there is, the argument is an analogy rather than a demonstration, and should be labelled as one. What makes it worth pursuing anyway is that it is cheap to check whether anyone is measuring navigation-relevant coding at all — and largely, nobody is.",
  "rubric": [
    "Identifies that the proprioceptive argument's force comes from a dissociation, and that olfaction lacks the equivalent preparation",
    "Proposes a comparison of the same stimuli under a discrimination and a navigation task",
    "Manipulates temporal or plume structure independently of identity information, in both directions",
    "States that a double dissociation establishes only that the tasks demand different codes — the premise, not the conclusion",
    "Handles the null honestly: weak manipulation, or navigation solved by serial discrimination, both remain open",
    "Bonus: labels the argument as analogy rather than demonstration until a percept-sparing manipulation exists"
  ]
}
</script>
</x-free-response>
