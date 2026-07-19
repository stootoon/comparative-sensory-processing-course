---
id: m03.s01
title: The computational problem
lede: Three problems are routinely conflated under "olfaction". Separating them is the first useful thing the comparative method does, because they have almost nothing in common.
estimatedMinutes: 16
---

Molecules arrive at a sheet of receptor neurons. The animal must work out what is out there and where.

Stated that way it sounds like vision. It is not, and the differences begin at the first step.

## Three problems, not one

**Identity.** What is this? A categorisation problem over a space with no agreed coordinates, no metric, and no smooth structure relating chemical description to behavioural meaning.

**Intensity.** How much? Complicated by the fact that concentration at the nose confounds source strength with distance and with the transport history of the parcel of air that happened to arrive.

**Location.** Where is the source? A statistical inference over an intermittent, turbulent time series — much closer to a signal-processing problem than to anything in the identity story.

These have almost nothing in common. Identity is a static classification in high-dimensional chemical space. Location is a dynamic inference from temporal statistics in which chemical identity is nearly irrelevant — you locate a source by the *timing* of whiffs, not by what is in them.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A prediction from the structure of the problem alone</div>
Two problems this different, sharing one sensory surface, should be solved by different downstream machinery. In vision, the analogous split between identity and location gave rise to the ventral and dorsal streams, and it is one of the best-established facts in systems neuroscience.

So: <strong>where is olfaction's dorsal stream?</strong> This is not a rhetorical question. If the argument is right, it should exist, and the fact that we cannot confidently point at it is a gap rather than an absence. We return to it in the capstone.
</x-callout>

## The ill-posedness is worse than vision's

§1.1 noted that a single photoreceptor confounds reflectance, illumination, and geometry. Olfaction's version is nastier.

The instantaneous activation of a receptor confounds at least:

- the **identity** of the molecules present,
- the **concentration** of each,
- the **distance** to each source,
- the **strength** of each source,
- the **transport history** — how much mixing and dilution this parcel of air underwent on its way here.

A weak source nearby and a strong source far away can produce identical receptor activation. So can the same source sampled during a dense whiff versus a dilute one. **A single sniff cannot disambiguate these**, in principle, not merely in practice.

Vision has nothing quite this bad, because light travels in straight lines and geometry is recoverable. Odour travels by turbulent advection, which is chaotic and effectively irreversible.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">Flagged forward: the vestibular parallel</div>
This confound has a precise structural analogue elsewhere in the course. The otolith organs cannot distinguish head tilt from linear acceleration — by Einstein's equivalence principle, the two produce identical stimulation, and the ambiguity is not a limitation of the sensor but a fact about physics.

The vestibular system resolves it by combining canal signals under an internal model of head dynamics, and this is arguably the best worked example anywhere of neurons implementing a specified Bayesian estimator.

The parallel suggests olfaction's resolution must have the same shape: <em>additional signals plus an internal model</em>. The additional signal is the temporal statistics of the plume; the internal model would be a model of turbulent transport. Whether the olfactory system actually has such a model is open, and it is one of the sharpest questions the comparison generates.
</x-callout>

## The mixture problem

Natural odours are mixtures, usually of dozens of components, and multiple sources contribute simultaneously. The system must decide which components came from the same place.

Audition faces the purest form of this: sound pressure adds exactly, so two sources produce a single summed waveform that must be separated. Audition solves it with grouping cues — harmonicity, common onset, common modulation, spatial coincidence.

Olfaction's version differs in two ways that matter.

First, mixing in olfaction is **not linear at the receptor**. Odorants compete for binding sites and can antagonise one another, so the receptor response to a mixture is not the sum of responses to components. Locust projection neurons show strong hypoadditivity to mixtures, and downstream Kenyon cells often signal single components within a mixture rather than the blend [@shen2013]. Nonlinearity at the very first stage breaks the superposition assumption that auditory scene analysis leans on.

Second, and more usefully, **high dimensionality helps**. Two odorants collide only if they share receptors. In a 1,000-dimensional receptor space, two randomly chosen odorants overlap only partially, so mixture components remain more separable than in audition's shared one-dimensional carrier. The property that makes olfaction hard for identity — refusing dimensionality reduction — makes demixing easier.

<x-predict>
<script type="application/json">
{
  "id": "m03.s01.p1",
  "contentRev": 1,
  "prompt": "Audition segregates sources using harmonicity, common onset, common modulation, and spatial coincidence. Go through these and ask which are available to olfaction. Then name the one grouping cue olfaction does have, and say what it implies about the temporal resolution the system needs.",
  "placeholder": "Which auditory grouping cues transfer, and which do not?",
  "reveal": "Almost none transfer.\n\n**Harmonicity** has no chemical analogue — there is no relation among molecules corresponding to integer frequency ratios, and no reason components of one source should stand in any lawful chemical relation.\n\n**Spatial coincidence** is nearly unavailable: with two nostrils a few millimetres apart and a turbulent medium, instantaneous spatial sampling is very coarse compared with the ~600 μs interaural time differences audition exploits.\n\n**Common modulation and common onset** do transfer, and this is the whole story. Molecules emitted from the same source travel together through the same turbulent eddies, so their concentrations fluctuate *together*. Molecules from different sources, mixed by different flow histories, fluctuate independently. Temporal correlation is therefore the primary — arguably the only reliable — cue that two chemicals share an origin.\n\n**Temporal correlation is to olfaction what harmonicity is to audition.**\n\nThe implication is demanding: the system needs temporal resolution fine enough to measure these correlations. Plume fluctuations carry structure to tens of hertz, while an individual receptor neuron's response has a time constant on the order of 100 ms. That is a genuine mismatch, and §3.2 shows the system resolves it anyway — mice discriminate correlated from anti-correlated odour fluctuations up to 40 Hz [@ackels2021]."
}
</script>
</x-predict>

## The deadline

A rat can discriminate two odours accurately within a single sniff — under 200 ms [@uchida2003]. Discrimination time was largely independent of odour similarity, which rules out a large class of iterative "think harder about hard cases" models.

That is a hard constraint on any proposed olfactory computation, and it is roughly the same deadline vision faces for object categorisation. Two very different systems, converging on the same timescale, because both are set by the same thing: how fast the animal must act.

The sniff is doing more than setting a deadline, though. It is an *active sampling* act: the animal controls when odour arrives, how fast, and in what volume, and the sniff cycle imposes a phase reference against which response latencies can be measured [@wachowiak2011]. That makes olfaction structurally closer to whisking or echolocation than to passive vision — a point the full course develops in §3.9, and one the field arguably under-exploits.
