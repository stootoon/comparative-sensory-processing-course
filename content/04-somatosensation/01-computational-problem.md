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

The deadline follows: corrective grip responses to an unexpected slip occur within about 70 ms, faster than voluntary reaction. It is tempting to read that as a spinal reflex. It is not — the corrective increase in grip force is driven from motor cortex [@kandel2021], so 70 ms is the round-trip time of a full cortical loop rather than evidence that cortex was bypassed.

That makes the constraint on the pathway sharper than "keep it shallow". Every synapse between skin and motor cortex is paid for twice, once ascending and once descending, and the loop still closes faster than a voluntary response can be initiated. §4.6 asks what that buys and what it costs.

<x-mcq>
<script type="application/json">
{
  "id": "m04.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Touch's estimation targets make incompatible demands: fine spatial detail needs small receptive fields and dense innervation, while slip detection needs high-frequency vibration sensitivity and cares nothing about spatial precision. What does the course expect the system to do, and on what grounds?",
  "options": [
    {
      "text": "Split into parallel channels early, because no single channel can optimise sensitivity, temporal precision and dynamic range at once — the same resolution as the retinal duplex system and the mitral/tufted split.",
      "correct": true,
      "feedback": "Right, and the strength of the expectation comes from its independence across modalities: retinal sustained/transient, cochlear bushy/stellate/octopus, vestibular regular/irregular, mitral/tufted, and touch's four afferent classes. Five instances, arrived at separately. §4.4 delivers the specific form, and the surprise there is which axis gets tiled — temporal frequency rather than space, on an array that is already spatial."
    },
    {
      "text": "Compromise on a single channel tuned to the mid-range of each requirement, since parallel channels multiply the metabolic and wiring cost.",
      "correct": false,
      "feedback": "Correct under the assumption that channel count is the binding constraint, which is a real efficient-coding consideration — §1.5's whole retinal argument is about a limited-capacity optic nerve. But the demands here are not merely different settings of one parameter; they are contradictory. A receptive field cannot be simultaneously small enough for form and driven by whole-hand vibration, and a mid-range compromise fails both tasks rather than half-satisfying each."
    },
    {
      "text": "Solve it centrally, extracting each property from a common afferent representation by different downstream filters.",
      "correct": false,
      "feedback": "Correct under the assumption that information not discarded at the periphery is recoverable later — and downstream convergence really does happen [@saal2014], so this is partly right about the destination. It fails at the periphery: what a single afferent class cannot transduce, no central filter can recover. Adaptation rate and receptive field size are properties of the transducer and its packaging, and the choice is made before any spike is available to filter."
    },
    {
      "text": "Resolve it by active movement, choosing the exploratory procedure matched to whichever property is currently being judged.",
      "correct": false,
      "feedback": "Correct under the assumption that the animal judges one property at a time, and §4.9 shows exploratory procedures really are near-optimally matched to judgements. But active sensing selects *which* signal arrives; it does not exempt the sensor from having to transduce more than one kind of signal. Grip control needs slip detection and object shape simultaneously, on the same contact, within 70 ms."
    }
  ]
}
</script>
</x-mcq>
