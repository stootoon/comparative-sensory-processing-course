---
id: m04.s01
title: The computational problem
lede: Estimate contact mechanics from the deformation of a sheet that is deformable, body-mounted, and actively moved. Touch is the first modality in this course where the sensor's own geometry is a variable.
estimatedMinutes: 14
---

Skin deforms. Mechanoreceptors embedded in it report that deformation. From this the animal must recover what it is touching, what the surface is made of, whether the object is slipping, and what shape it has.

<x-figure src="content/media/somato-mechanoreceptors-skin.jpg"
  caption="The four mechanoreceptor types in glabrous skin, at their characteristic depths. Merkel and Meissner endings sit superficially with small receptive fields; Pacinian and Ruffini endings sit deep with large ones. §4.4 argues these four are best understood not as sampling different parts of the skin — they overlap almost completely — but as four different temporal filters applied to the same input."
  credit="Thomas Haslwanter. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Skin_proprioception.jpg">
</x-figure>


## Three complications the other modalities do not have

**The sensor surface is deformable.** The retina's geometry is fixed; the cochlea's is fixed. Skin stretches, compresses, and changes its mechanical properties with hydration and temperature. The mapping from world to receptor activation is not constant.

**The sensor is body-mounted and the body moves.** Two receptors a centimetre apart on the hand are a fixed distance apart on the *skin* but an entirely variable distance apart in *space*, depending on posture. Any computation in world coordinates requires knowing the body configuration — which is proprioception's job (§7), and is why the two modules belong together.

**The stimulus is usually self-generated.** You cannot feel a texture without moving across it. The signal that reaches the receptors is jointly determined by the surface and by the movement, and separating the two is part of the problem rather than a preliminary to it.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Touch as the bridge to active sensing</div>
Vision and audition are mostly done to the animal; the sensor selects among signals it did not create. Touch is different — <strong>there is no tactile stimulus until the animal moves</strong> — and this puts it in the same class as sniffing, whisking, and echolocation.

That makes touch the modality where the active-sensing arguments developed for olfaction can be checked against a system where the behaviour is far easier to measure. §4.9 makes the whisking/sniffing comparison directly, and it is one of the closer structural matches in the whole course.
</x-callout>

## What is being estimated

- **Contact events** — is something touching me, where, and when did it start? Detection with a severe latency requirement, since grip adjustments must happen within tens of milliseconds of a slip.
- **Surface microstructure** — texture, in the sense of roughness and fine spatial detail.
- **Object shape and size**, from the pattern of skin indentation across a region.
- **Compliance and material**, from how the object deforms in response to applied force.
- **Slip**, which is a temporal-frequency problem rather than a spatial one.

Those demand incompatible things from a sensor. Fine spatial detail needs small receptive fields and dense innervation. Slip detection needs sensitivity to high-frequency vibration and cares nothing about spatial precision. §4.4 shows how the system resolves this — and it is the same resolution as the retina's duplex system and the mitral/tufted split.

## Loss and deadline

Touch's loss function is dominated by one asymmetry: **dropping things is expensive**. Grip force must exceed what is needed to prevent slip, but excessive force damages objects and wastes energy. The system runs a continuous control loop with a tight margin.

The deadline follows: corrective grip responses to an unexpected slip occur within about 70 ms, faster than voluntary reaction. That is a reflex loop, and it means much of touch's processing must complete without cortical involvement — a structural fact that shapes the pathway (§4.6).
