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

Gravity points down, always, at 9.8 m/s². That is a fact about the world an animal can rely on completely, and it is what makes the tilt–translation ambiguity resolvable in principle. Gravity's direction in head coordinates can only change if the head rotates, so a signal reporting rotation is exactly what is needed to predict how the gravitational component of the otolith signal should be moving; whatever the otoliths report in excess of that prediction is translation.

It is tempting to shortcut this to a frequency rule — sustained acceleration is gravity, transient acceleration is translation — and that heuristic is roughly right about natural statistics but wrong about the mechanism. It was tested directly and rejected: when tilt and translation are delivered with matched frequency content, so that no filter could separate them, central neurons still segregate the two, and they stop doing so when canal input is removed [@angelaki2004]. The separation is computed from canal signals under an internal model of head dynamics, not read off the spectrum. Kandel's chapter 27 puts the same conclusion less sharply — convergent canal and otolith signals plus "some simple computations" [@kandel2021] — but the negative result is the load-bearing part: a purely peripheral, filter-based solution was available and is not what the system uses.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The prior that makes inference possible</div>
The general form is worth extracting. An ambiguous measurement becomes resolvable when you have <strong>a constraint on the possible causes</strong>. Gravity's constancy is the constraint: it converts an underdetermined problem into a determined one.

Ask what olfaction's equivalent would be. §3.2 argued that plume statistics carry distance information, but only through a <em>model of turbulent transport</em> — and turbulence has no constant analogous to gravity. The transport statistics depend on wind, substrate and temperature, all of which vary.

So the olfactory inference problem is <strong>strictly harder than the vestibular one</strong>: same structure, but the forward model is itself non-stationary and must be estimated online. That is a precise statement of why §3.2's non-stationarity matters, arrived at by comparison rather than assertion.
</x-callout>

## Frequency ranges and the two sensors

The canals are mechanically band-limited: fluid inertia and cupula elasticity make them act as **integrating accelerometers** over the mid-frequency range, so their output approximates angular *velocity* rather than acceleration — but only within a band, roughly 0.1–10 Hz.

That band is not arbitrary. It matches the frequency content of natural head movement. The sensor is tuned to the ensemble, mechanically, without any neural computation — another instance of accessory-structure computation (§4.3).

<x-mcq>
<script type="application/json">
{
  "id": "m06.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The canal's mechanical passband matches natural head-motion statistics, and where it fails at low frequencies the brainstem patches it with velocity storage (§6.5). Someone calls this \"a sensor matched to its ensemble\" and stops there. What does the velocity-storage half add that the matching claim alone misses?",
  "options": [
    {
      "text": "It shows that matching is negotiable — where mechanics could not deliver the required band, a neural circuit supplied a prior about head motion instead, so the same statistical knowledge is split across two very different implementations.",
      "correct": true,
      "feedback": "This is the point, and it generalises. The ensemble determines what the system needs to represent; it does not determine where that knowledge is stored. Here the same fact about natural head motion — most of it lives in a particular band, sustained rotation is rare — appears once as cupula elasticity and once as a brainstem integrator. Any comparative claim of the form 'modality X does less neural processing' has to account for the accessory structure before it means anything, which is exactly the asymmetry that makes olfactory circuits look complex (§6.3)."
    },
    {
      "text": "It shows the mechanical matching is imperfect, so the ensemble was probably measured under conditions unrepresentative of natural behaviour.",
      "correct": false,
      "feedback": "Correct under the assumption that a mismatch between sensor and measured statistics indicts the measurement, which is a reasonable default when a normative prediction fails. It does not apply here, because the mismatch is at the low-frequency end where the cupula's return to rest is a hard mechanical constraint, not a tuning choice. The mechanics could not have been matched there at any price, which is why the fix is neural."
    },
    {
      "text": "It shows the canal is really an acceleration sensor and the velocity signal is constructed centrally.",
      "correct": false,
      "feedback": "Correct under the assumption that mechanical integration is an approximation the brain must finish, and the first clause is genuinely true — the canal transduces cupula deflection, and it approximates velocity only within its passband. But velocity storage does not construct the velocity signal; it extends the duration of one the mechanics already deliver. Getting this backwards makes the mechanical integration look like a convenience rather than the load-bearing computation it is."
    },
    {
      "text": "It shows the system prefers neural solutions because they are adaptable, whereas mechanics are fixed.",
      "correct": false,
      "feedback": "Correct under the assumption that adaptability is what selects the implementation — a good general instinct, and it explains why the olfactory forward model must be neural (§6.1). But it predicts the wrong thing here. Head dynamics are stationary, so there is nothing for adaptability to buy, and the system uses mechanics wherever mechanics will reach. The circuit appears only where the mechanics cannot, which is the opposite ordering of preferences."
    }
  ]
}
</script>
</x-mcq>

<x-figure src="content/06-vestibular/figures/head-motion-stats.js"
  caption="The canal's mechanical passband sits on top of where natural head motion has its power, and the match holds as you change behaviour. Where it fails — at very low frequencies, as the cupula returns to rest — velocity storage patches it neurally. A prior about the world, implemented as a circuit, covering a known deficiency in the transducer.">
</x-figure>

