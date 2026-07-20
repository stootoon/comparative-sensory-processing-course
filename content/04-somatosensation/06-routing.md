---
id: m04.s06
title: Routing — thalamus, and a pathway that skips it
lede: Discriminative touch goes through thalamus like vision and audition. But another somatosensory pathway bypasses it entirely — which defuses the idea that olfaction is uniquely strange.
estimatedMinutes: 12
---

From the cuneate nucleus, the medial lemniscus crosses and ascends to the **ventral posterior lateral nucleus** of the thalamus, and from there to primary somatosensory cortex. Four synapses to cortex, the same as vision, through an obligatory thalamic relay with the same driver/modulator architecture (§1.6).

So far, unremarkable.

## The pathway that does not

**Spinocerebellar tracts carry proprioceptive and some tactile information directly to the cerebellum, bypassing the thalamus entirely.**

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Pathway depth across the modalities. Sorted by synapses to action, touch's grip-correction loop is near the top — and the spinocerebellar route bypasses thalamus entirely, exactly as olfaction does. What those two share is a tight deadline and a consumer that wants speed rather than re-mapping, not evolutionary antiquity.">
</x-figure>


This deserves more attention than it usually gets in the olfactory literature, because it undermines a common framing.

<x-predict>
<script type="application/json">
{
  "id": "m04.s06.p1",
  "contentRev": 1,
  "prompt": "Two pathways in this course reach their targets without a thalamic relay: olfactory bulb to piriform, and spinocerebellar tracts to cerebellum. The usual explanation for the olfactory case is evolutionary antiquity. Before reading on: state what these two pathways actually have in common, and say whether antiquity survives as an explanation once the second case is on the table.",
  "placeholder": "What do the two share besides the absence of a relay — and what does the second case do to the antiquity story?",
  "reveal": "**Antiquity does not survive.** Proprioception is not evolutionarily ancient in any special way, so if it also skips the relay, age cannot be what determines the routing. The textbook line — olfaction is the only sense that bypasses the thalamus — is true only if 'sense' is restricted to the classical five and 'bypass' to a whole modality.\n\n**What the two actually share is two things, and both are computational.**\n\n*A severe deadline.* Spinocerebellar pathways serve motor control loops closing in milliseconds; the grip correction in §4.1 has about 70 ms. Olfaction must decide within one sniff (§3.1) and on a comparable budget [@uchida2003]. Every synapse costs time.\n\n*A consumer that wants the signal fast rather than re-mapped.* The cerebellum wants current body state for a forward model; piriform wants an odour identity to associate. Neither needs the geometric re-mapping and mid-stream attentional gating a thalamic relay supplies.\n\n**Why this counts as evidence rather than as a story.** The antiquity and computational hypotheses make different predictions about a case neither was built to explain, and the second case discriminates: antiquity predicts that a recently elaborated pathway will have a relay, and spinocerebellar does not. §2.6's general principle survives the test — depth before cortex tracks how much must be computed before the signal is useful, not evolutionary age. Audition computes location from scratch and is deepest; vision and touch inherit location and are intermediate; olfaction and the spinocerebellar route compute nothing geometric and are shallowest.\n\nThis is also the sort of argument only a comparative treatment makes available. Studying olfaction alone, the missing relay looks like a quirk of an old system."
}
</script>
</x-predict>

<x-callout class="x-callout is-key">
<div class="x-callout-title">Olfaction is not the only sense that skips the thalamus</div>
The textbook line — "olfaction is the only sense that bypasses the thalamus" — is true only if you restrict "sense" to the classical five and "bypass" to the whole modality. Somatosensory and proprioceptive information reaches the cerebellum without a thalamic relay, and proprioception is not evolutionarily ancient in any special way.

What the two thalamus-skipping pathways share is more interesting than antiquity:

<strong>1. A severe deadline.</strong> Spinocerebellar pathways serve motor control loops that must close in milliseconds. Olfaction must decide within one sniff (§3.1). Every synapse costs time.

<strong>2. A consumer that wants the signal fast, not re-mapped.</strong> The cerebellum wants current body state for a forward model; piriform wants an odour identity to associate. Neither needs the geometric re-mapping and attentional gating a thalamic relay provides mid-stream.

<strong>This is evidence for the computational hypothesis over the antiquity hypothesis</strong> (§3.6), and it is the sort of argument only a comparative treatment makes available. Studying olfaction alone, the missing relay looks like a quirk of an old system. Set beside spinocerebellar pathways, it looks like what happens when the deadline is tight and the consumer is not asking for re-mapping.
</x-callout>

The general principle §2.6 proposed — that depth before cortex tracks how much must be computed before the signal is useful, rather than evolutionary age — survives this test. Audition computes location from scratch and is deepest. Vision inherits location and is intermediate. Touch inherits location and is intermediate. Olfaction and the spinocerebellar route compute nothing geometric and are shallowest.

<x-mcq>
<script type="application/json">
{
  "id": "m04.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Discriminative touch goes through VPL with the same driver/modulator architecture as vision, while the spinocerebellar route skips thalamus. What does having both routings *in one modality* buy the argument that a whole-modality comparison does not?",
  "options": [
    {
      "text": "It holds the modality's age, receptors and sensory surface fixed while the routing varies, so any explanation appealing to those properties predicts no difference and is refuted by one.",
      "correct": true,
      "feedback": "This is the within-modality control, and it is the same move §12.4 makes with olfaction's plume and chemical strands: vary one factor while everything a rival could appeal to stays constant. Antiquity, receptor kinetics and surface geometry are identical across the two touch routes; deadline and consumer are not. That is what upgrades the observation from a counterexample to a discriminating test."
    },
    {
      "text": "It shows the thalamic relay is optional, so the services §1.6 attributes to it must be implemented elsewhere in both pathways.",
      "correct": false,
      "feedback": "Correct under the assumption that the services are obligatory and must appear somewhere — which is the hypothesis §1.6's decomposition exists to make searchable, not a premise. Finding that a pathway lacks some services entirely would be a result rather than a failure of the method. Note also the overreach: the discriminative route does have a relay, so nothing here shows it is optional for the tasks that use it."
    },
    {
      "text": "It shows the cerebellum is a functional analogue of cortex, receiving sensory input at equivalent depth.",
      "correct": false,
      "feedback": "Correct under the assumption that pathway depth is the relevant equivalence, and the depth really is comparable. But the two consumers want different things — a forward model of current body state versus a representation to associate over — and the whole point of §2.6's principle is that depth tracks what must be computed, so equal depth across different consumers implies nothing about functional equivalence."
    },
    {
      "text": "It explains why touch's grip loop closes in 70 ms, since the thalamus-skipping route is what makes the reflex fast enough.",
      "correct": false,
      "feedback": "Partly correct in spirit and wrong in detail. The deadline argument runs the other way — the tight deadline is the *reason* to expect a shallow route, not a consequence of it — and the 70 ms grip correction is a spinal reflex loop rather than a spinocerebellar one. Using the deadline to explain the routing and the routing to explain the deadline is circular; the evidential content is in the two pathways sharing a deadline while sharing nothing else."
    }
  ]
}
</script>
</x-mcq>
