---
id: m06.s01
title: The computational problem
lede: Estimate head motion in an inertial frame from sensors that are provably ambiguous. Vestibular is the one modality whose normative story is a textbook state-estimation problem with a known forward model — and it is the closest structural match to olfaction's worst confound.
estimatedMinutes: 14
---

The vestibular system estimates how the head is moving and how it is oriented relative to gravity. It does this with two sensor types: **semicircular canals** measuring angular velocity, and **otolith organs** measuring linear acceleration.

<x-figure src="content/media/bony-labyrinth-labelled.jpg"
  caption="The bony labyrinth. Three semicircular canals in near-orthogonal planes, plus the utricle and saccule housing the otolith organs — and the cochlea, coiled off the same structure. Ten sensors in total (§6.4), forming an almost exact basis for the six degrees of freedom of head motion."
  credit="Jose Braga; Ross Whitwam. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bony_labyrinth_labelled.png">
</x-figure>


## The ambiguity, and why it is not a design flaw

The otoliths are accelerometers: a dense mass sits on a sensory epithelium and lags when the head accelerates, deflecting hair cells.

But **gravity is an acceleration**. An otolith organ tilted relative to gravity is deflected exactly as it would be by linear acceleration in the horizontal plane. Tilting your head and accelerating forward produce **identical** otolith signals.

This is not a limitation of biological sensors. It is Einstein's equivalence principle: gravitational and inertial acceleration are locally indistinguishable, and **no accelerometer of any construction can separate them.** A better sensor would not help.

<x-figure src="content/06-vestibular/figures/tilt-translation.js"
  caption="The ambiguity, and its resolution. Drive tilt and acceleration to produce the same otolith shear two different ways and watch the readout not move — distinct world states, identical sensor signal. Then switch the canal input off and see the somatogravic illusion appear. This is the exact structural analogue of olfaction's concentration/distance/transport confound.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">The structural match to olfaction</div>
This is the most exact analogy in the course, and §3.1 flagged it in advance.

<strong>Vestibular:</strong> two physically distinct world-states — head tilt, and linear acceleration — produce identical otolith activation. Resolvable only by combining a second sensor (the canals) under a known forward model of head dynamics.

<strong>Olfaction:</strong> instantaneous receptor activation confounds source concentration, distance to source, and plume transport history. A weak source nearby and a strong source far away can produce the same activation. Resolvable only by temporal statistics plus a model of turbulent transport.

Both are <strong>principled ambiguities</strong>, not sensor limitations. Both need extra signals plus a forward model. The vestibular case is solved and the mechanism is known, which makes it the best available template — and it tells you what to look for: <em>neurons whose responses reflect the combination rather than either input alone.</em>
</x-callout>

## What is being estimated

- **Angular velocity** of the head, in three axes.
- **Linear acceleration**, separated into the gravitational and inertial parts.
- **Head orientation** relative to gravity — the integral of the above.
- Implicitly, a running estimate of **self-motion** for distinguishing world motion from own motion.

The last is where vestibular differs most from the exteroceptive senses. It does not measure the world; it measures the **relation between the animal and the world**, which is why it is inseparable from motor control and why its outputs go to eye muscles and spinal cord before they go anywhere cognitive.

## Loss and deadline

The deadline is the tightest in the course. The vestibulo-ocular reflex must counter-rotate the eyes within about **10 ms** of a head movement to keep the image stable — faster than any visual feedback loop could achieve. That constraint alone dictates the anatomy (§6.5): a three-neuron arc, because there is not time for more.
