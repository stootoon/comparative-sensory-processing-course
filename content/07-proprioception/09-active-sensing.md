---
id: m07.s09
title: Active sensing and the motor loop
lede: Proprioception has no separate motor loop, because it is inside the motor loop. It is the limiting case of active sensing — sensor and effector are the same tissue.
estimatedMinutes: 10
---

Every other modality in this course has a sensor that can be aimed, and a distinction between the movement and the sensing. Proprioception has neither. **The thing being measured is the thing doing the moving.**

Three consequences.

**Gamma drive tunes the sensor during movement** (§7.3). Alpha–gamma co-activation keeps spindles loaded through a movement so they remain sensitive to deviations from the intended trajectory — the sensor's operating point tracks the motor plan.

**The forward model is continuously updated by the signal it predicts.** The cerebellum predicts the sensory consequences of a command; the actual proprioceptive input either confirms or corrects it. Sensing and control are one loop, not two.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Proprioception is the one modality with no sampling rhythm at all — because there is nothing to sample. The sensor is the effector, and the loop runs continuously rather than in discrete packets. It anchors the far end of the active-sensing spectrum this section sets out.">
</x-figure>


**Sensory attenuation.** Self-generated movement produces attenuated proprioceptive and tactile responses (§4.10). The prediction is subtracted.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The active-sensing spectrum, complete</div>
<strong>Passive:</strong> audition — sound arrives, head movement helps only marginally (§2.9).<br>
<strong>Selective:</strong> vision — saccades choose among available signals but do not create them (§1.9).<br>
<strong>Sampling-controlled:</strong> olfaction, touch, taste — sniffing, whisking, licking determine when and how much stimulus arrives, and partly shape it (§3.9, §4.9, §5.9).<br>
<strong>Self-generated carrier:</strong> echolocation, active electrolocation — the animal creates the probe signal (§10).<br>
<strong>Sensor is the effector:</strong> proprioception. No separation at all.

Olfaction sits in the middle and is usually taught as though it belonged at the passive end. §3.9 argued it is closer to echolocation than to vision; this spectrum places it precisely, and shows that the neighbours worth borrowing from are touch and echolocation rather than vision.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m07.s09.p1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The spectrum places olfaction in the middle — sampling-controlled, alongside touch and taste — and argues its useful neighbours are echolocation and whisking rather than vision. Before reading on, commit to what specifically transfers from an active-sensing neighbour that would not transfer from vision. Name one concrete borrowing.",
  "placeholder": "What does the neighbour have that vision does not?",
  "reveal": "**The transferable thing is that the sampling command is available as a signal, and its consequences are predictable.**\n\nVision's saccades select among signals that exist whether or not the eye moves; the world's luminance does not depend on where you look. Sniffing, whisking and echolocation *create or shape* the stimulus, which has two consequences vision cannot supply.\n\n**First, a self-generated component to subtract.** Because the animal knows what sampling command it issued, it can predict the sensory consequence and cancel it — the vestibular mechanism (§6.9) with a sniff in place of a head turn. That is the whole basis of the common-feature-subtraction account, and it is why §7.10 can argue olfactory recalibration needs no external teacher: sniffing supplies the predictable component that makes self-supervision possible.\n\n**Second, the sampling parameters are themselves informative.** A whisking rodent can infer object distance from the phase at which contact occurred; a bat can infer range from echo delay against its own emission. The general form is that the *timing of the sample relative to the command* carries information the sample alone does not. Applied to olfaction, sniff phase becomes a coordinate rather than a nuisance — and bulbar responses are indeed strongly sniff-phase-locked [@wachowiak2011], which under the passive framing looks like an artefact of respiration and under this one looks like the code.\n\n**The third, less often noticed:** an active sampler chooses *when* to sample, so the statistics of what it receives are not the statistics of the environment. Every efficient-coding calculation for olfaction has to condition on the sampling policy, which is a complication vision largely escapes and which no measured olfactory ensemble currently addresses.\n\nIf you named sniff-phase coding or the subtractable self-generated component, you have the two that matter most."
}
</script>
</x-predict>

## Tool use and the body schema

The body schema extends to tools. Using a rake changes the represented extent of the arm, and reaching behaviour changes accordingly. Whatever proprioception's central representation is, it is **learned, plastic, and not anatomically fixed** — a model of the effector, updated by experience, rather than a readout of receptor positions.
