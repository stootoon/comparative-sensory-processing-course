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

## Redundancy as an opportunity

The redundancy is not purely a problem. More sensors than degrees of freedom means the transformation is over-determined, so errors can be averaged out and individual sensor noise suppressed.

<x-figure src="content/07-proprioception/figures/redundant-array.js"
  caption="Redundancy against estimation error. More muscles reporting on the same joints reduces error — but note the gap from the ideal √n line: because muscles act together their sensitivity vectors are non-orthogonal, and a badly-conditioned array wastes much of what it collects. The same caveat as glomerular convergence, for the same reason.">
</x-figure>


This is the same structural situation as glomerular convergence (§3.5) — many noisy sensors reporting related quantities — and the same caveat applies: pooling helps only for independent noise. Spindles in synergistic muscles see correlated fluctuations, which caps the benefit exactly as §3.5's correlated-noise argument does.
