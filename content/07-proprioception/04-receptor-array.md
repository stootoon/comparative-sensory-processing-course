---
id: m07.s04
title: The receptor array
lede: Ordered by body, but not by the variable being estimated. Massively redundant, non-orthogonal, and confounded — proprioception's array is the worst-conditioned in this course, and it works anyway.
estimatedMinutes: 12
---

## Ordered by the wrong thing

There are thousands of spindles, distributed across muscles roughly in proportion to how finely each is controlled — dense in hand and neck muscles, sparse in large postural muscles. Another budget allocation (§4.4, §1.4).

The array is **ordered by body location**. But that is not the variable of interest. §7.1 established that the animal wants joint angles or endpoint position, and:

- Muscle length is a **nonlinear** function of joint configuration.
- Multi-joint muscles make one spindle's signal depend on **several joints**.
- The mapping is **redundant** — more muscles than degrees of freedom, so many muscle-length combinations correspond to one posture.
- The basis is **non-orthogonal** — spindle signals are heavily correlated, since muscles act together.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A new position on the ordering axis</div>
The course's datasheet has treated ordering as roughly binary. Proprioception shows it is not.

<strong>Vision, audition, touch:</strong> ordered by the variable of interest. Position on the sheet <em>is</em> the thing.<br>
<strong>Olfaction, gustation:</strong> unordered — no arrangement, and nothing to arrange by.<br>
<strong>Proprioception:</strong> <strong>ordered by something that is not the variable of interest.</strong> There is a perfectly good spatial arrangement, and it is the wrong one.

That third category is worth having, because it changes what "unordered" costs. Olfaction lacks a metric; proprioception has a metric on the wrong space, which is arguably harder — you must actively transform out of a misleading arrangement rather than simply build one from scratch.

And proprioception <em>solves</em> it (§7.5). Which is encouraging for olfaction: a sensory system can recode into a task-relevant basis that its receptors do not supply.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The section claims ordering has three states — ordered by the relevant variable, unordered, and ordered by an irrelevant one — and that the third is arguably harder than the second. On what does that claim actually depend?",
  "options": [
    {
      "text": "On whether local wiring rules are the mechanism available for building circuits: if they are, an existing but misleading arrangement biases the circuit toward computations nobody wants, and the bias must be actively overcome.",
      "correct": true,
      "feedback": "This is the load-bearing assumption, and making it explicit is what makes the claim assessable rather than rhetorical. Local rules — connect to neighbours, inhibit neighbours, interpolate across the sheet — are cheap to specify genetically and are the standard account of why maps exist at all (§1.4). An array ordered by the wrong variable makes those cheap rules produce the wrong computation, so the wrong answer is the default and the right one costs extra. Without that assumption the third state is merely a neutral fact about where cells sit."
    },
    {
      "text": "On the transformation being nonlinear: if muscle length were a linear function of joint angle, the arrangement would not matter.",
      "correct": false,
      "feedback": "Correct under the assumption that linearity would make the recoding trivial, and it would certainly make it easier — a fixed linear map is one synaptic weight matrix. But the difficulty being claimed is about the *arrangement misleading the construction process*, not about the algebra of the map. A linear but wrongly-ordered array still invites local rules to pool the wrong things. The nonlinearity is an additional cost, not the one the three-state claim rests on."
    },
    {
      "text": "On the receptors being redundant: with more sensors than degrees of freedom, the ordering carries no information and is therefore misleading by default.",
      "correct": false,
      "feedback": "Correct under the assumption that redundancy is what makes an ordering uninformative, and the redundancy is real. But these are independent properties. An array could be redundant and ordered by the relevant variable — the retina is exactly that, with far more photoreceptors than resolvable image dimensions — and it causes no difficulty at all. Ordering and redundancy have to be assessed separately."
    },
    {
      "text": "On there being a downstream consumer with a fixed basis requirement: without one, no ordering is more relevant than another.",
      "correct": false,
      "feedback": "Partly correct, and this is the sharpest distractor — 'irrelevant' is indeed relative to a consumer, and §7.1 is careful to establish the consumer before calling the ordering wrong. It is the right qualification on the *definition* rather than the answer to why the third state is harder. Once the consumer is fixed, you still need the local-wiring assumption to explain why a misleading arrangement costs more than none at all."
    }
  ]
}
</script>
</x-mcq>

## Redundancy as an opportunity

The redundancy is not purely a problem. More sensors than degrees of freedom means the transformation is over-determined, so errors can be averaged out and individual sensor noise suppressed.

<x-figure src="content/07-proprioception/figures/redundant-array.js"
  caption="Redundancy against estimation error. More muscles reporting on the same joints reduces error — but note the gap from the ideal √n line: because muscles act together their sensitivity vectors are non-orthogonal, and a badly-conditioned array wastes much of what it collects. The same caveat as glomerular convergence, for the same reason.">
</x-figure>


This is the same structural situation as glomerular convergence (§3.5) — many noisy sensors reporting related quantities — and the same caveat applies: pooling helps only for independent noise. Spindles in synergistic muscles see correlated fluctuations, which caps the benefit exactly as §3.5's correlated-noise argument does.
