---
id: m03.s09
title: Active sensing and the motor loop
lede: The sniff is not how odour gets in. It is a sampling decision, a clock, and a filter — and it makes olfaction structurally closer to echolocation than to vision.
estimatedMinutes: 16
---

Nothing reaches the olfactory epithelium unless the animal draws it there. Sniffing is not incidental; it is the act that structures all olfactory input.

## Three things the sniff does

**It sets the sampling schedule.** Sniff frequency in rodents ranges from about 2 Hz at rest to 10 Hz during active investigation. The animal chooses when to sample and how much — a control no visual or auditory system has over its input.

**It provides a phase reference.** Bulbar responses are locked to the sniff cycle, and a great deal of the information is in *when* within the cycle a cell fires. This makes latency codes possible: latency relative to sniff onset is a well-defined quantity because the animal generated sniff onset itself.

That is not a small point. A latency code needs a reference, and most modalities have to find one. Olfaction manufactures its own.

**It shapes the stimulus.** Flow rate affects the sorption of molecules along the epithelium, so sniff vigour changes not just how much odour arrives but the relative activation across receptor types. The animal partly controls its own transfer function.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The 4–12 Hz club</div>
Sniffing (2–10 Hz), whisking (5–15 Hz), licking (~6 Hz), saccades (~3 Hz), and the theta rhythm all occupy a similar band. That convergence across modalities and species demands explanation and does not have an agreed one.

Candidates: biomechanical limits on moving a sensor; matching to integration times of the circuits that consume the samples; or a shared coordination clock that lets multiple sampling systems stay in register.

The full course treats this as a motif in its own right. It is worth flagging that <strong>the sniff is the most computationally consequential member of the club</strong> — it is the only one that also filters the stimulus.
</x-callout>

## Search without gradients

§3.2 established the crucial negative result: turbulent mixing destroys usable concentration gradients at the scale of an animal. Chemotaxis by gradient ascent, which works for bacteria at small scales, is unavailable.

What works instead is search that treats detections as **evidence** rather than as a gradient. Maximising expected information gain about source location reproduces the casting and zigzagging that moths and rodents actually do [@vergassola2007] — cast across the wind when no odour has been detected recently, surge upwind on detection.

The structure is worth naming: **an ambiguous instantaneous signal, a known forward model of how movement changes it, and movement chosen to disambiguate.** §2.9 identified the same structure in head rotation to resolve auditory front-back confusion, and the vestibular tilt–translation problem is a third instance.

## Closer to echolocation than to vision

The course's suggestion here is that olfaction's usual comparison class is wrong.

Vision is largely passive: photons arrive, and eye movements select among them but do not create them. Olfaction is closer to **active sensing** in the strong sense — the animal controls the timing, the amount, and to a degree the spectral character of what it samples, and it uses movement to resolve ambiguity that a single sample cannot.

Echolocating bats adapt call rate, bandwidth and beam direction to current uncertainty, increasing rate as they close on a target. **Does sniff strategy adapt the same way?** Sniff frequency does change with task, but whether it tracks posterior uncertainty in the way an optimal-experiment-design account predicts is largely untested — and §12 makes it a concrete proposal.
