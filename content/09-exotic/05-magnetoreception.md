---
id: m09.s05
title: Magnetoreception — a sense with no known receptor
lede: Animals demonstrably use the magnetic field, and nobody can say for certain what detects it. The most useful thing about magnetoreception for this course is what its difficulty teaches about grounding a sensory channel.
estimatedMinutes: 12
---

Many animals — birds, sea turtles, salmon, some insects — use the Earth's magnetic field for orientation and navigation. The behaviour is well documented. The receptor is not.

## Why it is so hard

The Earth's field is weak, around 25–65 microtesla, and the energy of interaction with a molecular magnetic moment is far below thermal energy at body temperature. **A magnetic sense must extract a signal from an interaction weaker than thermal noise**, which rules out most straightforward detection schemes.

Two main hypotheses survive:

**Radical pairs.** Cryptochrome proteins in the retina form radical pairs on photoexcitation, whose singlet–triplet interconversion rate depends on magnetic field orientation. This is a **quantum-coherent** mechanism operating on nanosecond timescales, before thermal decoherence. It predicts a light-dependent, *inclination*-based compass — which matches bird behaviour, including the fact that migratory orientation fails in certain wavelengths.

<x-figure src="content/media/cryptochrome-radical-pair-magnetoreception.jpg"
  caption="The radical-pair mechanism. Photoexcitation generates a pair of radicals whose singlet–triplet interconversion depends on the orientation of the ambient magnetic field, so reaction yield varies with heading. It works only because the interconversion happens faster than thermal decoherence — a sensory mechanism constrained directly by quantum physics."
  credit="Chiswick Chap. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Quantum_Magnetoreception_in_Birds.svg">
</x-figure>


**Magnetite.** Biogenic magnetite crystals could transduce field direction mechanically. Magnetotactic bacteria demonstrably do this. In vertebrates, candidate magnetite deposits have been reported repeatedly and confirmed rarely.

<x-figure src="content/media/magnetotactic-bacteria-magnetosomes.jpg"
  caption="Magnetotactic bacteria, showing the chain of membrane-bound magnetite crystals that passively aligns the cell with the geomagnetic field. This is the existence proof that biology can build a magnetic sensor — the open question is whether vertebrates use the same trick."
  credit="Mihály Pósfai, Christopher T. Lefèvre, Denis Trubitsyn, Dennis A. Bazylinski & Richard B. Frankel, Frontiers in Microbiology 4:344 (2013). CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Alphaproteobacteria_magnetosomes.png">
</x-figure>


**Electromagnetic induction** is a third route available to marine elasmobranchs, whose ampullae of Lorenzini are sensitive enough to detect the voltage induced by swimming through the field.

<x-callout class="x-callout is-key">
<div class="x-callout-title">What the failure teaches</div>
Every other modality in this course was grounded by the same route: find the receptor, characterise its tuning, work upward. Magnetoreception shows what happens when that route is blocked.

<strong>Why it is blocked here:</strong> the receptor is probably sparse, probably not in an obvious sensory organ, has no distinctive morphology, and cannot be identified by ablation because the stimulus cannot be locally removed — you cannot shield part of an animal from a magnetic field the way you can occlude an eye.

<strong>The olfactory relevance is indirect but real.</strong> Olfaction's problem is not an unknown receptor — those are well characterised — but an <strong>unknown stimulus space</strong>. In both cases the usual bottom-up route stalls, and progress has to come from behaviour and theory constraining what the mechanism could be.

Magnetoreception has made progress that way: quantum-coherence arguments <em>constrain</em> the mechanism from physics, ruling out candidates that could not work. The olfactory analogue would be constraining the coding scheme from what the plume physics and the behavioural performance jointly permit — which is what the §3.3 speed argument does, and it is currently one of the more productive lines in the field.
</x-callout>

## The low-dimensional extreme

For the course's dimensionality axis, magnetoreception anchors the far end. The stimulus is essentially **two numbers** — field direction and intensity — with almost no bandwidth, used for a single low-dimensional inference (heading, and possibly position) over very long timescales.

Set against olfaction's several hundred dimensions with millisecond-relevant structure, the two occupy opposite corners. And both are hard, for opposite reasons: olfaction because the space is too large to characterise, magnetoreception because the signal is too small to detect.
