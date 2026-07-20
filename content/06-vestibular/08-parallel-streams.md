---
id: m06.s08
title: Parallel streams
lede: Vestibular splits by consumer rather than by content — reflex, posture, perception, and internal-model updating, all from the same signal, with different latencies and precisions.
estimatedMinutes: 9
---

The vestibular signal is used by at least four consumers, and the divergence is organised around them:

- **Oculomotor** — the VOR. Fastest, most stereotyped, three synapses.
- **Spinal/postural** — vestibulospinal tracts, balance and antigravity muscle tone.
- **Cerebellar** — adaptation and forward-model updating.
- **Cortical** — conscious self-motion perception and navigation.

Each has a different deadline and a different precision requirement, and the pathway depth tracks the deadline (§6.5).

<x-callout class="x-callout is-key">
<div class="x-callout-title">A third principle for splitting streams</div>
The course has now met three distinct reasons a sensory system divides into parallel streams, and it is worth keeping them apart because they transfer differently.

<strong>1. Conflicting invariance requirements</strong> — vision, audition, touch. Identity needs invariance to position; position needs invariance to identity. No single representation serves both.

<strong>2. Conflicting loss functions</strong> — gustation, and discriminative-versus-affective touch. One consumer wants metric detail preserved; another wants a fast categorical decision.

<strong>3. Conflicting deadlines</strong> — vestibular. The same content, at the same precision, delivered to consumers that need it at 10 ms and at 200 ms. You cannot serve both with one pathway, so build a short reflex arc and a long integrative one in parallel.

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="All three reasons, side by side. Filter to 'conflicting deadlines' and note that the mitral/tufted split appears there as PROPOSED rather than established — the framing this section argues has been less explored than the invariance and loss-function readings, and fits the speed–accuracy evidence better than either.">
</x-figure>


<strong>For olfaction:</strong> §3.8 identified the piriform / cortical-amygdala split as type 2, and predicted an unlocated type 1 split. The vestibular case raises a third possibility nobody has looked for — <strong>is the mitral/tufted split a type 3 division?</strong> Tufted cells respond earlier and more reliably at low concentration; mitral cells later and more sparsely. That is exactly what a deadline-driven split looks like, and it fits the speed–accuracy framing better than either of the other two types.
</x-callout>

## Visual–vestibular integration and causal inference

The deepest computation is deciding whether sensory change is due to self-motion or world-motion. Optic flow can arise from moving through a stationary world or from the world moving past a stationary observer, and vestibular input is what disambiguates.

That is a **causal inference** problem, not merely a cue-combination problem: the system must decide *whether the two cues share a common cause* before deciding how to weight them. When they conflict strongly, the right answer is not to average but to segregate — and perceptual illusions like vection are what happens when the inference goes the other way.

<x-mcq>
<script type="application/json">
{
  "id": "m06.s08.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Tufted cells respond earlier and more reliably at low concentration; mitral cells respond later and more sparsely. Applying the vestibular framing, which claim would most cleanly establish that this is a deadline-driven (type 3) split rather than an invariance (type 1) or loss-function (type 2) split?",
  "options": [
    {
      "text": "That the two populations carry substantially the same information about the odour, but their consumers act on it at different latencies — so neither stream is specialised for content the other lacks.",
      "correct": true,
      "feedback": "This is the discriminating claim, and note how much it demands. A type 3 split is defined by *identical content on different clocks*, which is what makes the vestibular case clean: the VOR and the cortical percept receive the same head-motion signal, one at 10 ms and one far later. The olfactory test is therefore an information-theoretic one — quantify what each population carries about identity and about concentration, and show the difference is in timing and reliability rather than in what is encoded. If the contents differ systematically, it is type 1 or type 2 and the vestibular analogy fails."
    },
    {
      "text": "That tufted and mitral cells project to different downstream targets with different behavioural roles.",
      "correct": false,
      "feedback": "Correct under the assumption that divergent targets diagnose a stream split, and divergent targets are indeed necessary — a split with a common consumer is not a split. But all three types produce divergent targets, so this observation cannot distinguish among them. It establishes that there is a division of labour without saying what the division is along."
    },
    {
      "text": "That tufted cells support faster behavioural discrimination than mitral cells when the two are selectively silenced.",
      "correct": false,
      "feedback": "Partly correct, and this is a strong experiment — a latency difference in behaviour is much better evidence than a latency difference in firing, because it shows a consumer actually uses the fast stream on a fast clock. It stops short of the full claim because a stream could be faster *and* carry different content, in which case the split would be type 2 with a speed side effect. The speed result plus content equivalence is what closes it; speed alone leaves the alternative open."
    },
    {
      "text": "That tufted responses are more invariant to concentration than mitral responses.",
      "correct": false,
      "feedback": "Correct under the assumption that concentration-invariance is the relevant contrast, which would be the signature of a *type 1* split — identity needing invariance to intensity, intensity needing sensitivity to it. That is a real candidate for an olfactory stream division, and §3.8 predicts an unlocated type 1 split somewhere. But finding it here would argue against the deadline reading, not for it, so this answer supports a different conclusion than the question asks about."
    }
  ]
}
</script>
</x-mcq>
