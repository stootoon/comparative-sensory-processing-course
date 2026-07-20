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

<x-mcq>
<script type="application/json">
{
  "id": "m07.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Three confounded measurements: otolith shear (tilt vs translation), spindle firing (length vs velocity vs gamma drive), and olfactory receptor activation (concentration vs distance vs transport). Proprioception's is the easiest to resolve. Why?",
  "options": [
    {
      "text": "One of the confounding variables is the nervous system's own output, so its value is known exactly and without measurement — the gamma command can be subtracted rather than inferred.",
      "correct": true,
      "feedback": "This is the asymmetry, and it is worth stating as a general principle: a confound whose value you *caused* is not on the same footing as one you must estimate. The vestibular case needs a second sensor plus a forward model to separate two external causes; olfaction needs a model of turbulence it does not have. Proprioception has privileged access to one term. Note the twist in the callout above — the efference copy here corrects a *measurement gain* rather than cancelling a predicted sensory consequence, which is a different use of the same signal from the one in §6.9."
    },
    {
      "text": "Because there are more spindles than degrees of freedom, so the redundancy lets the confound be averaged away.",
      "correct": false,
      "feedback": "Correct under the assumption that redundancy resolves ambiguity, which is right for independent noise and is genuinely why the over-determined array helps (§7.4). But it does nothing here: gamma drive shifts every spindle in the muscle in the same direction, so it is a common-mode bias rather than independent noise, and averaging over more sensors leaves it exactly where it was. Distinguishing noise you can average from bias you cannot is the whole difference."
    },
    {
      "text": "Because the mapping from muscle lengths to joint angles is known anatomically, so the transformation can be inverted.",
      "correct": false,
      "feedback": "Correct under the assumption that the coordinate transformation and the confound are the same problem, and inverting the kinematics is indeed part of what the system must do. But they are separate difficulties. Even with the muscle-to-joint map known perfectly, a spindle's firing rate still does not tell you its length unless you also know what gamma drive was applied. The transformation problem sits downstream of the confound problem."
    },
    {
      "text": "Because the confounding variables have different time courses — length changes slowly, velocity fast — so they separate in the frequency domain.",
      "correct": false,
      "feedback": "Correct under the assumption that temporal separation resolves the confound, and this is a real strategy: the Ia/II split does effectively separate the derivative from the value by using two ending types with different dynamics (§7.3). But it addresses only two of the three terms. Gamma drive varies on the timescale of the movement itself, co-modulated with the motor command, so it is precisely the component that will not separate spectrally from what it is contaminating."
    }
  ]
}
</script>
</x-mcq>

## What is estimated, and for whom

- **Static configuration** — where are my limbs now.
- **Movement** — velocity and direction.
- **Force and load** — via Golgi tendon organs.
- **Body schema** — a persistent model including tools and extending over time.

The consumers are unusually well defined: spinal reflex circuits, the cerebellum's forward models, and cortical motor planning. Conscious position sense exists but is arguably a by-product.

**That matters for the course's argument.** §1.1 claimed vision preserves metric detail because its consumers are open-ended. Proprioception is the opposite extreme: essentially one consumer, the motor system, with a precisely specifiable need. If the consumer-determines-the-code claim is right, proprioception should show the strongest recoding toward a task-relevant basis of any modality here — and §7.5 shows exactly that.

<x-predict>
<script type="application/json">
{
  "id": "m07.s01.p1",
  "contentRev": 1,
  "points": 1,
  "prompt": "If the consumer-determines-the-code claim is right, proprioception should show the strongest recoding of any modality here. Before §7.5 tells you what was found: name the variables you would expect early ascending neurons to report, say how early you would expect the recoding to appear, and — the part that separates a prediction from a guess — name a plausible result that would count against the claim.",
  "placeholder": "Which variables, how early, and what would falsify it?",
  "reveal": "**What the claim predicts.** The dominant consumer is the cerebellum, running a forward model. Forward models operate on task variables — where the endpoint is, how fast it is moving — not on the lengths of individual muscles. So the expected variables are whole-limb ones: the length and orientation of the limb axis, or endpoint position. And the expected timing is *as early as possible*, because there is no advantage to carrying a basis nobody wants any further than necessary.\n\n**What is found.** Neurons in Clarke's nucleus and the dorsal spinocerebellar tract are better predicted by global limb variables — the length and orientation of the hip-to-foot axis — than by the lengths of the individual muscles supplying them [@bosco2001]. That is the transformation, and it is complete **by the second synapse**.\n\n**The falsifier you should have named**, and the reason the claim is testable at all: if ascending neurons had turned out to be faithful relays of individual muscle lengths, with the transformation deferred to the cerebellum or to cortex, the consumer-determines-the-code claim would have survived only in a weakened form — the consumer would determine the code *eventually*, which is nearly unfalsifiable. The strong version stakes something on the recoding happening early, and that is what makes the result worth having.\n\n**The caveat you probably did not name**, and §7.5 develops it at length: the limb's segments are mechanically linked, so muscle lengths are already correlated with limb-axis variables before any neuron acts. Part of the transformation is supplied by the skeleton. Bosco and Poppele tested this directly by decoupling limb geometry from endpoint position, and about half the cells changed their response pattern under perturbation [@bosco2003]. The honest reading is partly neural, partly biomechanical, with the split not cleanly quantified — which is enough for the course's argument but is not the tidy version."
}
</script>
</x-predict>

## Deadline

The fastest proprioceptive loop is the monosynaptic stretch reflex: **one synapse**, latency around 30 ms including conduction. Shorter than the VOR's three-neuron arc in synapse count, though slower in absolute terms because limb nerves are long.

That is the shortest sensorimotor loop in the body, and it sets the same lesson as §6.5: depth tracks deadline.
