---
id: m04.s02
title: The signal and its natural statistics
lede: The statistics of touch are the statistics of contact — and unlike images or sounds, they are partly authored by the animal. That makes the ensemble harder to define than either, and easier than olfaction's.
estimatedMinutes: 14
---

## What the ensemble consists of

Natural tactile input is not a continuous field like an image. It is a sequence of **contact events**: making contact, maintaining it, sliding, releasing. Between events there is nothing.

That intermittency is worth naming because it is the first structural similarity to olfaction we have met. Touch, like smell, is a modality of discrete encounters separated by silence, rather than a continuously available signal. Vision and audition are both continuously present.

## Texture, and the two codes

Surface texture spans an enormous range of spatial scales, and the system uses two different strategies across that range.

**Coarse texture** — features above roughly 1 mm — is resolved **spatially**. The pattern of skin indentation carries the surface geometry, and slowly-adapting afferents with small receptive fields report it more or less directly.

<x-predict>
<script type="application/json">
{
  "id": "m04.s02.p1",
  "contentRev": 1,
  "prompt": "Coarse surface features are resolved spatially, by the pattern of skin indentation. Below roughly 1 mm, receptor spacing is too coarse for that — the structure falls below the sampling limit of the array. Predict what the system does instead, and what physical operation makes it possible. Then say which of the four afferent classes you would expect to carry the result, and why its receptive field size is irrelevant.",
  "placeholder": "The spatial code has run out. What is left, and what converts one into the other?",
  "reveal": "**Sliding converts space into time.** Move the finger across the surface and spatial microstructure is transduced as skin oscillation, whose frequency content depends on the surface and on the sliding speed. The array's spatial sampling limit is bypassed because the code is no longer spatial.\n\n**Pacinian afferents carry it**, and the reason their enormous receptive fields do not matter is the point: a code in the temporal-frequency domain does not care where on the skin the vibration was picked up. PC afferents are exquisitely sensitive to vibration in the ~50–400 Hz band (§4.4), and their field size is a cost only if you assume the information is spatial.\n\n**Two consequences worth carrying.**\n\nFirst, the correction this module exists to deliver: **having a map does not mean the code is spatial.** Touch has an ordered, metric, somatotopically mapped array — everything §1.4 said vision's ordering buys — and a large part of what it computes rides on millisecond spike timing [@johnson2001; @saal2014]. That survives into cortex, where S1 neurons carry texture in precise timing rather than only in rate (§4.7).\n\nSecond, the trap. The temporal code is only available *because the animal moves*, so the ensemble is co-authored: the vibration spectrum is a joint function of the surface and the exploratory policy. Optimising a code against that ensemble is a fixed-point problem rather than a straightforward optimisation — a genuine limitation on importing vision-derived normative arguments into active senses, and one olfaction shares (§3.9).\n\n**The transfer to olfaction:** the debate over whether odour identity is carried by *which* glomeruli are active or by *when* they fire has been posed as exclusive. Touch is an existence proof that a mapped system can do both at once, in the same afferents, for different aspects of one stimulus."
}
</script>
</x-predict>

**Fine texture** — below that — cannot be resolved spatially, because receptor spacing is too coarse. Instead, sliding the finger across the surface converts spatial structure into **vibration**, and the frequency content of that vibration carries the microstructure.

<x-figure src="content/media/somato-two-point-discrimination.jpg"
  caption="Two-point discrimination thresholds across the body. The gradient tracks innervation density, which tracks how finely the animal needs to resolve there — the same budget-allocation argument as foveal magnification (§1.4). Note that these are the limits of the SPATIAL code; fine texture below this scale is resolved temporally instead."
  credit="Tong J, Mao O, Goldreich D (2013), Front Hum Neurosci 7:579; uploaded by Commons user Conejo23. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:2-point_orientation_discrimination_(2POD)_compared_to_traditional_two-point_discrimination_(2PD).jpg">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">A spatial modality that relies on temporal codes</div>
This is one of the more useful corrections in the course.

Touch has a topographic, metric receptor array — everything §1.4 said vision's ordering buys, touch also gets. And yet a large part of what it computes depends on <strong>precise spike timing at millisecond resolution</strong>, because fine texture is transduced as vibration rather than as a spatial pattern.

<strong>Having a map does not mean the code is spatial.</strong> That matters directly for olfaction, where the debate about whether identity is carried by <em>which</em> glomeruli are active or by <em>when</em> they fire relative to the sniff has often been framed as though these were exclusive. Touch shows a system using both, for different aspects of the same stimulus, in the same afferents.
</x-callout>

The vibration is not incidental. Sliding a finger across a surface at typical exploratory speeds produces skin oscillations whose spectrum depends on the surface, and Pacinian afferents — which are exquisitely sensitive to vibration and have huge receptive fields — carry it. Their receptive field size is irrelevant because the code is not spatial.

## The animal authors part of the ensemble

Exploratory movements are stereotyped and matched to what is being judged: lateral motion for texture, pressure for compliance, static contact for temperature, enclosure for global shape.

So the input statistics depend on the animal's own policy. This is a genuine complication for the efficient-coding programme — the ensemble is not a property of the world alone — and it is shared with olfaction, where sniff vigour changes both how much odour arrives and the relative activation across receptors (§3.9).

**Neither modality has a clean answer to this.** It is worth flagging as a general limitation of applying vision-derived normative arguments to active senses: the ensemble is co-authored, and optimising a code against it is a fixed-point problem rather than a straightforward optimisation.

<x-mcq>
<script type="application/json">
{
  "id": "m04.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You want to run the efficient-coding template on touch: measure the ensemble, state the objective and constraints, derive, compare. Which obstacle is specific to touch and olfaction and absent in vision and audition?",
  "options": [
    {
      "text": "The ensemble is co-authored by the animal's own exploratory policy, so the input statistics are not a property of the world alone and the optimisation becomes a fixed point rather than a solve.",
      "correct": true,
      "feedback": "This is the structural obstacle and it is worth stating as a fixed point: the optimal code depends on the ensemble, the ensemble depends on the sampling policy, and the optimal policy depends on the code. Natural image statistics are what the world delivers whether or not anyone looks; the vibration spectrum from a surface exists only once a finger slides across it at some speed. Olfaction has the identical problem, since sniff vigour changes both how much odour arrives and the relative activation across receptors (§3.9), and neither modality has a clean answer."
    },
    {
      "text": "Tactile input is intermittent — discrete contact events separated by silence — so there is no continuous signal whose statistics could be characterised.",
      "correct": false,
      "feedback": "Correct under the assumption that ensemble statistics require a continuously present signal, and the intermittency is real and is the first structural similarity to olfaction the module meets. But intermittency is a property of the ensemble, not an obstacle to measuring it: the distribution of contact durations, intervals and event types is exactly the kind of thing that can be characterised, and the analogous plume literature does characterise intermittent statistics successfully [@celani2014]."
    },
    {
      "text": "The receptor array is deformable, so the mapping from world to receptor activation is not constant.",
      "correct": false,
      "feedback": "Correct under the assumption that the obstacle is at the transducer, and it is a genuine complication no other modality in the course has — §4.4 notes the metric is deformable and posture-dependent. But olfaction does not share it, and the question asks for what touch and olfaction have in common. A non-constant sensor geometry also has a known remedy in principle: condition on posture, which is what proprioception supplies (§7)."
    },
    {
      "text": "Fine texture is coded temporally rather than spatially, so the ensemble would have to be characterised in the time domain.",
      "correct": false,
      "feedback": "Correct under the assumption that the domain of the statistics is what makes the calculation hard. It does not — audition characterises natural sound ensembles in exactly the time domain and derives a filterbank from them [@lewicki2002], with no special difficulty. The temporal code is this module's most useful correction about *codes*, not an obstacle to measuring an ensemble."
    }
  ]
}
</script>
</x-mcq>
