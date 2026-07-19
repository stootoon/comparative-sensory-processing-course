---
id: m07.s03
title: Transduction and physical limits
lede: The only sensor in this course whose sensitivity the brain sets. Gamma motor drive means proprioception can tune its own receptors — which is either a solution or a confound, depending on whether you know what was sent.
estimatedMinutes: 12
---

## Muscle spindles

Spindles are encapsulated organs lying in parallel with muscle fibres, containing specialised **intrafusal** fibres innervated by sensory endings. Stretch the muscle and the spindle stretches, and the endings fire.

<x-figure src="content/media/somato-muscle-spindle.jpg"
  caption="A muscle spindle. Intrafusal fibres lie in parallel with the working muscle, wrapped by sensory endings — and note the gamma motor innervation of the intrafusal fibres themselves. That efferent input is what lets the nervous system set its own receptor's sensitivity, which no other sensor in this course can do."
  credit="Kowalczewski & Prochazka (Neuromechanics). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Muscle_spindle_model.jpg">
</x-figure>


Two ending types: **primary (Ia)** endings, highly sensitive to rate of change, and **secondary (II)** endings, reporting static length. The same split-early motif again — one channel for the derivative, one for the value.

## Gamma drive: the brain sets the gain

Here is the property no other sensor in this course has.

Intrafusal fibres have their own motor innervation, from **gamma motor neurons**. Contracting them stretches the sensory region, changing the spindle's sensitivity and operating point independently of the muscle's actual length.

**The nervous system tunes its own receptors, on a moment-to-moment basis.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">Efferent control of a sensor: how common is it?</div>
The course has met partial versions:

<strong>Olivocochlear efferents</strong> turn the cochlear amplifier down (§2.10) — gain control, but not re-tuning.<br>
<strong>Pupil</strong> adjusts light admitted — a crude aperture.<br>
<strong>Sniffing and whisking</strong> alter what reaches the sensor (§3.9, §4.9) — controlling the stimulus, not the transducer.<br>
<strong>Gamma drive</strong> changes the transducer's own operating point and sensitivity, continuously, under central control.

Gamma drive is the most direct. And it creates the confound of §7.1: spindle output is a function of length <em>and</em> gamma drive, so a downstream reader must know the gamma command to interpret the afferent signal.

<strong>Alpha–gamma co-activation</strong> is the usual resolution — motor commands drive alpha and gamma together, keeping the spindle loaded across the movement so it stays sensitive to deviations from the intended trajectory. On that reading the spindle does not report length at all. <strong>It reports the difference between intended and actual length</strong> — an error signal, computed at the sensor.

That is predictive subtraction implemented in the periphery, and it belongs on the list with vestibular cancellation and the electrosensory negative image. Same principle, earliest possible implementation.
</x-callout>

## Golgi tendon organs

Located at the muscle–tendon junction, in **series** with the muscle rather than in parallel, so they report **force** rather than length. Together with spindles the system measures both kinematics and kinetics.

<x-figure src="content/media/somato-spindle-gto-fluorescence.jpg"
  caption="Spindle and Golgi tendon organ imaged in situ in mouse muscle, with the sensory terminals fluorescently labelled. The spindle's spiral wrapping around intrafusal fibres and the GTO's branching within the tendon are visible — two quite different endings, and the difference in placement is what makes one report length and the other force."
  credit="Sonner MJ, Walters MC, Ladle DR (2017), PLOS ONE 12(1):e0170751, Figure 1. CC BY 4.0."
  source="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0170751">
</x-figure>


<x-figure src="content/media/somato-golgi-tendon-organ.jpg"
  caption="A Golgi tendon organ, at the muscle–tendon junction. Being in series with the muscle rather than parallel to it is the whole difference: a series element reports the force transmitted, a parallel element reports length. The same transducer, two placements, two different measured quantities — the accessory-structure principle again (§4.3)."
  credit="Kowalczewski & Prochazka (Neuromechanics). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Tendon_organ_model.jpg">
</x-figure>


## Other contributors

Joint receptors signal mainly at extremes of range. Cutaneous receptors, especially SA2 stretch afferents (§4.4), contribute substantially — skin stretch over a joint is informative about its angle, which is one reason touch and proprioception are hard to separate cleanly.
