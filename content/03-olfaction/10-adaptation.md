---
id: m03.s10
title: Adaptation, gain control, and state
lede: Olfactory adaptation is fast, strong, and in tension with itself — because the same high-pass filtering that removes a stale background also removes the temporal statistics that carry spatial information.
estimatedMinutes: 12
---

Adaptation runs at every level: receptor neurons through calcium feedback, the bulb through granule-cell inhibition and centrifugal modulation, and cortex strikingly rapidly — piriform responses to a sustained odour decline within seconds, which is faster than most cortical adaptation elsewhere.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Olfaction against the rest. Two things stand out: cortical odour adaptation is at the fast end of anything here, and bulbar neurogenesis is at the extreme slow end — a span of six orders of magnitude within one modality. The volatility view tests whether that fast end is what the non-stationarity argument predicts.">
</x-figure>


## The background problem

The functional case is clear. An animal in a stable odour environment needs to detect *changes*, and a receptor tonically occupied by a background odour is wasting its dynamic range. Adapting away the background restores sensitivity to new arrivals.

This is the same argument as light adaptation, and it produces the same signature: neurons that respond transiently to onsets rather than reporting sustained concentration.

It also produces the interpretive trap the course keeps flagging. A neuron that has successfully subtracted a predictable background **goes quiet**, and looks unresponsive. Common-feature subtraction and temporal contrast coding are normative accounts of exactly this, and they explain why unbiased recordings find so many apparently silent cells: silence is a result.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A conflict specific to olfaction</div>
Here is a tension that only becomes visible once §3.2's plume statistics are taken seriously, and it does not arise in vision or audition.

<strong>Adaptation is high-pass filtering.</strong> It removes slow components and emphasises change.

<strong>But the informative signal is the fluctuation statistics themselves</strong> — intermittency, whiff durations, blank durations, correlations between sampling points. Those live across a broad band, and the low-frequency components carry information about distance.

So adaptation tuned to remove backgrounds will also attenuate part of the signal carrying spatial information. In vision this conflict does not arise, because the slow components adaptation removes are illumination — a nuisance variable the animal genuinely does not care about. In olfaction the slow components are not obviously nuisance.

<strong>How the system resolves this is unknown, and it is a good question.</strong> One possibility: the mitral/tufted split (§3.5) separates the two demands, with one class adapted for change detection and the other preserving slower structure. That is testable, and it would be a second functional rationale for a split whose purpose is contested.
</x-callout>

## State and centrifugal modulation

The bulb receives more centrifugal input than it does sensory input — from piriform, anterior olfactory nucleus, and cholinergic, noradrenergic and serotonergic systems. Mitral cell responses differ substantially between anaesthetised and awake states, and with hunger, satiety and task engagement.

§3.6 argued this feedback provides the gain control and gating that thalamus supplies elsewhere. Note the consequence for interpretation: **a bulbar response measured under anaesthesia is a response with the modulator input removed** — closer to LGN in a slice than to LGN in a behaving animal.

## Adult neurogenesis

The bulb continuously adds granule cells throughout life. §3.2 offered the normative argument: if odour statistics are non-stationary and the decorrelating transformation must track them, machinery for continuously rebuilding that transformation is a requirement rather than an oddity.

The prediction that follows is testable. Neurogenesis rate should depend on the **volatility** of the odour environment, not merely on its richness. An animal in a complex but stable odour world should need less rebuilding than one in a simpler but rapidly changing one — and the standard enrichment paradigms confound the two.
