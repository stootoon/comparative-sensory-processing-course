---
id: m06.s02
title: The signal and its natural statistics
lede: Head motion has been measured, has a 1/f-like spectrum, and comes with a constant, exploitable prior — gravity. Vestibular has the best-conditioned ensemble of any modality here.
estimatedMinutes: 11
---

## Natural head motion

Head movement during natural behaviour has been recorded, and its statistics are well behaved:

- **Power concentrates at low frequencies**, falling roughly as a power law. Most natural head motion is below about 20 Hz, with locomotion contributing peaks at gait frequency.
- **Rotation and translation are correlated**, because natural movements combine them — turning while walking produces both.
- **The distribution is reasonably stationary** across behaviours and individuals.

So the ensemble is measured, stationary, and low-dimensional. Everything the efficient-coding programme wants (§0.2) is available.

## Gravity as a prior

Vestibular has something no other modality does: **a constant, known, exploitable prior.**

Gravity points down, always, at 9.8 m/s². That is a fact about the world an animal can rely on completely, and it is what makes the tilt–translation ambiguity resolvable in principle. Given canal input reporting rotation and the assumption that any *sustained* acceleration component must be gravity — because sustained translational acceleration is impossible for a body that stays in one place — the two can be separated.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The prior that makes inference possible</div>
The general form is worth extracting. An ambiguous measurement becomes resolvable when you have <strong>a constraint on the possible causes</strong>. Gravity's constancy is the constraint: it converts an underdetermined problem into a determined one.

Ask what olfaction's equivalent would be. §3.2 argued that plume statistics carry distance information, but only through a <em>model of turbulent transport</em> — and turbulence has no constant analogous to gravity. The transport statistics depend on wind, substrate and temperature, all of which vary.

So the olfactory inference problem is <strong>strictly harder than the vestibular one</strong>: same structure, but the forward model is itself non-stationary and must be estimated online. That is a precise statement of why §3.2's non-stationarity matters, arrived at by comparison rather than assertion.
</x-callout>

## Frequency ranges and the two sensors

The canals are mechanically band-limited: fluid inertia and cupula elasticity make them act as **integrating accelerometers** over the mid-frequency range, so their output approximates angular *velocity* rather than acceleration — but only within a band, roughly 0.1–10 Hz.

That band is not arbitrary. It matches the frequency content of natural head movement. The sensor is tuned to the ensemble, mechanically, without any neural computation — another instance of accessory-structure computation (§4.3).
