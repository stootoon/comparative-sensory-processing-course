---
id: m01.s10
title: Adaptation, gain control, and state
lede: The visual system spans ten log units of intensity with neurons that have two. Every mechanism that makes this possible is a form of the same move — rescale to recent statistics — operating at a different timescale.
estimatedMinutes: 12
---

## Light adaptation

Ambient light varies over about ten log units between starlight and noon. A neuron's firing rate spans perhaps two. The gap is closed by adaptation: the system continuously rescales so that its limited range covers the *current* distribution.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Adaptation timescales across every modality in the course. Filter to Vision and note the three-decade span from photoreceptor calcium feedback to the rod–cone handover — no single mechanism covers the range, so several are stacked. Then switch to the volatility view for the prediction this section ends on.">
</x-figure>


Mechanisms stack across timescales — pupil (fast, small range), photoreceptor gain via calcium feedback in the transduction cascade, synaptic depression, network-level gain in bipolar and ganglion circuits, and the rod-to-cone handover across the widest range.

The result is that visual neurons encode **contrast** rather than absolute intensity, which is the right variable: contrast is a property of surfaces, while absolute intensity mostly reflects illumination the animal does not care about.

## Contrast and pattern adaptation

Beyond mean luminance, the system adapts to **variance**. After exposure to high-contrast stimuli, gain drops; after low contrast, it rises. This is Laughlin's argument (§0.1) applied to the second moment rather than the first, and it is the same computation the auditory midbrain performs on sound level [@dean2005].

Adaptation is also **selective** — to orientation, spatial frequency, direction of motion, and higher-order properties like faces. Selective adaptation is what makes aftereffects work, and each one is evidence that some population was coding that property.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Adaptation timescale should track statistical volatility</div>
A system adapting to input statistics faces an estimation problem: how much history to use. Average over too long and you track a stale distribution; too short and you chase noise. The optimal window depends on how fast the statistics actually change.

This makes a comparative prediction that the full course tests:

<strong>Vision</strong> — natural image statistics are highly stationary (§1.2), so adaptation can be relatively slow and the hard-wired code is mostly right.<br>
<strong>Audition</strong> — sound-level statistics change as you move between environments; adaptation is measured in tens of milliseconds to seconds [@dean2005].<br>
<strong>Olfaction</strong> — plume and odour-scene statistics are <em>non-stationary</em> (§3.2), changing with wind, substrate and time of day.

<strong>Prediction: olfactory adaptation should be faster and proportionally larger than visual.</strong> Cortical odour adaptation is indeed strikingly rapid. Whether it is quantitatively what the volatility argument predicts is, as far as this course is aware, untested — and it is a cheap experiment.
</x-callout>

## State and attention

Gain is modulated by arousal, locomotion, and attention through neuromodulatory systems and through the corticothalamic loop of §1.6. Attending to a location increases gain for stimuli there, as early as LGN.

The functional interpretation is that these are all **priors and precision-weights entering a gain control**, which is the framing that makes them comparable to centrifugal modulation of the olfactory bulb — a structure that receives more feedback than feedforward input, and where the same interpretive options are open.
