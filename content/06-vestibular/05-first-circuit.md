---
id: m06.s05
title: The first circuit — vestibular nuclei
lede: Three synapses from sensor to eye muscle. The vestibular nuclei are the clearest case in the course of a first circuit whose design is dictated entirely by a deadline.
estimatedMinutes: 12
---

Vestibular afferents synapse in the **vestibular nuclei** in the brainstem. From there, remarkably few synapses separate the sensor from behaviour.

## The three-neuron arc

The vestibulo-ocular reflex is: **afferent → vestibular nucleus neuron → oculomotor neuron → eye muscle.**

<x-figure src="content/media/vor-openstax.jpg"
  caption="The three-neuron arc. Afferent, vestibular nucleus, oculomotor neuron, eye muscle — with excitation to one muscle and inhibition to its antagonist. Roughly 10 ms end to end, which is faster than any visual feedback loop could manage and is precisely why the pathway is this short."
  credit="OpenStax College, Anatomy & Physiology. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:1419_Vestibulo-Ocular_Reflex.jpg">
</x-figure>


Three neurons. Total latency about 10 ms.

That is dictated by the task. Head movements during locomotion have components above 10 Hz, and image stabilisation must keep up. A visual feedback loop would take 70–100 ms — far too slow. So the reflex is open-loop, feedforward, and as short as physically possible.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Depth is set by the deadline of the fastest behaviour</div>
§5.6 proposed this rule and vestibular is its strongest case.

<strong>VOR:</strong> 3 synapses, ~10 ms. Image stabilisation during locomotion.<br>
<strong>Bitter gape reflex:</strong> 2–3 synapses. Do not swallow poison.<br>
<strong>Grip-force correction:</strong> ~70 ms. Do not drop the object.<br>
<strong>Olfactory discrimination:</strong> 2 synapses to cortex, ~200 ms decision.

Note what this means for the vestibular cortical route: it exists, it reaches parietal and insular areas, and it is <strong>almost an afterthought</strong> in pathway terms. The reflexes do not wait for it.

<strong>So "distance to cortex" does not measure a modality's importance.</strong> It measures how fast the fastest dependent behaviour has to be. Vestibular is arguably the most essential sense — losing it is catastrophic — and its cortical representation is the thinnest in this course.
</x-callout>

## Velocity storage

The canals are mechanically band-limited (§6.3): their response to a sustained rotation decays within seconds, because the cupula returns to rest.

But the VOR outlasts the canal signal. The brainstem implements **velocity storage** — a neural integrator that extends the effective low-frequency response beyond what the mechanics provide.

This is worth naming precisely: it is a **prior about the world implemented as a circuit**. Sustained rotations are rare and brief in natural behaviour, so a decaying sensor is usually adequate; velocity storage patches the specific frequency range where the mechanics fall short of the ensemble (§6.2). The circuit compensates for a known deficiency in the transducer, informed by the statistics of natural head motion.

## Commissural inhibition

The two sides are connected by inhibitory commissural fibres, implementing the push–pull comparison centrally as well as mechanically. This is lateral inhibition — but between *matched sensors measuring opposite signs of the same variable*, not between neighbours in a map.

Worth adding to the list of what "lateral inhibition" can mean:

- **Retina, cuneate:** between spatial neighbours, removing spatial redundancy.
- **Cochlear nucleus:** between spectral neighbours.
- **Vestibular nuclei:** between opposed sensors, cancelling common mode.
- **Olfactory bulb:** between…? (§3.5) — the open question.

The vestibular case shows a fourth possibility the olfactory debate has not much considered: inhibition between channels related by a *known physical relationship* rather than by proximity or by learned correlation.
