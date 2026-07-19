---
id: m07.s01
title: The computational problem
lede: Estimate body configuration in coordinates that no receptor measures. Proprioception is a coordinate-transformation problem wearing a detection problem's clothes — and it is where the course's "consumer determines the code" argument gets its clearest test.
estimatedMinutes: 13
---

Proprioception reports where the body is: joint angles, limb positions, movement velocities, muscle forces.

## The coordinate problem

Here is what makes it different from everything else in this course.

**No receptor measures the quantity of interest.** Muscle spindles measure muscle *length* and rate of change of length. But the animal needs joint angles, or endpoint position — and the mapping from muscle lengths to joint configuration is nonlinear, redundant, and posture-dependent.

<x-figure src="content/media/proprioceptor-overview.jpg"
  caption="The two proprioceptors. Spindles lie in parallel with the muscle and report length and its rate of change via Ia and II afferents; Golgi tendon organs lie in series at the tendon and report force via Ib afferents. Note the gamma efferents onto the intrafusal fibres — the brain setting its own receptor's gain, which no other sensor in this course can do."
  credit="Lallemend F, Techameena P, Hadjab S (2025), eLife 14:e106803, Figure 1. CC BY 4.0."
  source="https://elifesciences.org/articles/106803">
</x-figure>

Multi-joint muscles mean a single muscle's length depends on several joint angles at once.

So the central problem is a **coordinate transformation** from a sensor basis nobody wants into a task basis nobody measures.

<x-figure src="content/07-proprioception/figures/coordinate-transform.js"
  caption="Drag the two joints. The endpoint moves smoothly while the muscle lengths change non-monotonically — and the bi-articular muscle, spanning both joints, can hold its length across quite different postures. The second view plots those iso-length contours directly: every point on a curve is a posture that muscle cannot distinguish.">
</x-figure>


Compare: the retina measures light at positions, and position is what vision needs. The cochlea measures frequency, and frequency is a variable audition uses directly. Proprioception's sensors measure something that is not the answer.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The confounded measurement</div>
It is worse than a transformation. Spindle firing depends jointly on <strong>muscle length</strong>, <strong>rate of change of length</strong>, and <strong>gamma motor drive</strong> — the efferent signal that sets spindle sensitivity (§7.3).

So a spindle's output confounds the thing being measured with the measurement gain, and the gain is set by the nervous system itself.

That is a principled ambiguity of the same family as the vestibular tilt/translation confound (§6.1) and olfaction's concentration/distance confound (§3.1). Three modalities, three confounds, each requiring extra signals plus a model to resolve. Proprioception's resolution is the most direct: <strong>the brain knows what gamma drive it sent</strong>, so it can subtract its contribution — efference copy used not to cancel a prediction but to correct a measurement.
</x-callout>

## What is estimated, and for whom

- **Static configuration** — where are my limbs now.
- **Movement** — velocity and direction.
- **Force and load** — via Golgi tendon organs.
- **Body schema** — a persistent model including tools and extending over time.

The consumers are unusually well defined: spinal reflex circuits, the cerebellum's forward models, and cortical motor planning. Conscious position sense exists but is arguably a by-product.

**That matters for the course's argument.** §1.1 claimed vision preserves metric detail because its consumers are open-ended. Proprioception is the opposite extreme: essentially one consumer, the motor system, with a precisely specifiable need. If the consumer-determines-the-code claim is right, proprioception should show the strongest recoding toward a task-relevant basis of any modality here — and §7.5 shows exactly that.

## Deadline

The fastest proprioceptive loop is the monosynaptic stretch reflex: **one synapse**, latency around 30 ms including conduction. Shorter than the VOR's three-neuron arc in synapse count, though slower in absolute terms because limb nerves are long.

That is the shortest sensorimotor loop in the body, and it sets the same lesson as §6.5: depth tracks deadline.
