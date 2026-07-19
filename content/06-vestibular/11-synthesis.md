---
id: m06.s11
title: Normative synthesis and the olfaction hook
lede: The one modality where a normative account is essentially complete — and it succeeded centrally rather than peripherally, which is the opposite of vision and audition, and a useful diagnosis of why.
estimatedMinutes: 12
---

## Scoring the theories

**Vestibular passes all five criteria of §0.2**, which nothing else in this course does.

Measured ensemble (natural head motion). Physical constraints (two noisy sensors, known reliabilities, a provable ambiguity). A precisely stated objective (minimum-variance estimate of self-motion). Quantitative risky predictions (reliability-weighted cue combination, and the specific way weights shift). Confirmed, behaviourally and neurally [@angelaki2004].

**And the success is central, not peripheral.** MSTd and the brainstem–cerebellar circuits are where the account works, while the peripheral story — hair cells in various packages — is comparatively unremarkable.

That inverts vision and audition, whose triumphs are at the retina and cochlea and whose central accounts fail.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The diagnosis this offers the whole field</div>
Why does the normative programme succeed centrally for vestibular and fail centrally for vision and audition?

Not because vestibular circuits are simpler. Because <strong>the objective can be stated.</strong> "Estimate heading direction with minimum variance" is precise, and it makes the optimality calculation well-defined. Nobody can write down with comparable precision what V4 or A1 is estimating.

<strong>The obstacle beyond primary cortex may be that we cannot state the objective, not that the systems are too complicated.</strong>

For olfaction this is a genuinely actionable diagnosis. The field's instinct has been to gather better data. The vestibular case suggests the binding constraint may instead be that nobody has written down precisely what the olfactory system is estimating — and §3.11 already noted the candidates (identity, concentration, source location) demand different answers.
</x-callout>

## Datasheet row

| Property | Vestibular |
|---|---|
| Array ordering | ordered, **geometrically orthogonal** |
| Dimensionality | 3 rotational + 3 translational |
| Number of channels | **10** |
| Ensemble measured | yes |
| Prior available | **gravity — constant and exploitable** |
| Forward model | known and **stationary** |
| Synapses to action | **3** (VOR) |
| Cortical representation | thin, distributed, multisensory from the start |
| Strongest result | optimal cue combination, confirmed |

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. The ambiguity template.</strong> Tilt versus translation is the exact structural match to olfaction's concentration / distance / transport confound. Both are principled ambiguities requiring extra signals plus a forward model. The vestibular solution is known, so <strong>what to look for is known</strong>: neurons whose responses reflect the combination rather than either input alone.

<strong>2. But olfaction's version is strictly harder.</strong> Gravity is constant; turbulent transport is not. The vestibular forward model is stationary and can be hard-wired; the olfactory one must be estimated online from non-stationary statistics. That is a precise statement of the extra difficulty, obtained by comparison.

<strong>3. Cancellation is real, early, and specific</strong> [@cullen2012]. Vestibular nuclei subtract self-generated motion at the first central synapse, producing neurons that look unresponsive. The experiment transfers directly: deliver identical odour transients sniff-triggered versus externally timed, and ask whether silent bulbar cells respond to the passive version.

<strong>4. State your objective before gathering more data.</strong> Vestibular's normative success came from a precisely stated estimation problem. Olfaction's stall may be the absence of one.

<strong>5. Adaptation needs a teacher, or an unsupervised objective.</strong> VOR recalibration works because retinal slip is an unambiguous error signal. Olfaction has no equivalent, so the neurogenesis argument must rest on unsupervised objectives — which is fine, but should be said explicitly.
</x-callout>
