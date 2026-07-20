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

<x-order>
<script type="application/json">
{
  "id": "m06.s05.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 47,
  "prompt": "Put the stages of the horizontal VOR in causal order, from head rotation to eye movement. Then count how many of them involve a neuron — the count is the point of the exercise.",
  "items": [
    { "id": "a", "text": "The head rotates." },
    { "id": "b", "text": "Endolymph lags behind the canal wall by inertia." },
    { "id": "c", "text": "The cupula is deflected, bending the embedded hair bundles." },
    { "id": "d", "text": "Afferent firing rate is modulated, up on one side and down on the other." },
    { "id": "e", "text": "A vestibular nucleus neuron excites one oculomotor pool and inhibits its antagonist." },
    { "id": "f", "text": "Oculomotor neurons drive the extraocular muscles, counter-rotating the eyes." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e", "f"],
  "modelAnswerNote": "Six stages, and only the last three involve a neuron at all — of which only one, stage (e), is a central neuron doing anything that could be called computation.\n\nThat is the arithmetic behind the 10 ms figure. Stages (b) and (c) are the mechanical integration: the fluid's inertia and the cupula's elasticity convert angular acceleration into a signal proportional to angular velocity, which is the transformation the reflex actually needs. **The system does not have time to compute it, so it does not compute it — the labyrinth's geometry does the calculus before transduction.**\n\nThis is why the deadline argument and the accessory-structure argument (§6.3) are the same argument seen from two sides. A 10 ms budget cannot accommodate a neural integrator, so any system meeting that deadline must either find the integration for free in its mechanics or abandon the behaviour. Vestibular found it.\n\n**The transfer to olfaction is a warning.** Sniff-locked odour discrimination happens within roughly 200 ms, which is generous by VOR standards but must be met by neurons throughout, because there is no mechanical stage in olfaction performing anything comparable to the cupula's integration. When comparing pathway depth across modalities, count what the periphery contributed first."
}
</script>
</x-order>

## Velocity storage

The canals are mechanically band-limited (§6.3): their response to a sustained rotation decays within seconds, because the cupula returns to rest.

But the VOR outlasts the canal signal. The brainstem implements **velocity storage** — a neural integrator that extends the effective low-frequency response beyond what the mechanics provide.

This is worth naming precisely: it is a **prior about the world implemented as a circuit**. Sustained rotations are rare and brief in natural behaviour, so a decaying sensor is usually adequate; velocity storage patches the specific frequency range where the mechanics fall short of the ensemble (§6.2). The circuit compensates for a known deficiency in the transducer, informed by the statistics of natural head motion.

<x-mcq>
<script type="application/json">
{
  "id": "m06.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Velocity storage extends the VOR beyond the canal signal's mechanical decay. Which reading of it is strongest, and what does it license you to look for elsewhere?",
  "options": [
    {
      "text": "It is a prior about natural head motion instantiated as a circuit — the brainstem asserts that rotation persists because in the measured ensemble it usually does, covering the exact band where the cupula falls short.",
      "correct": true,
      "feedback": "Right, and the specificity is what makes it more than a metaphor. The circuit does not extend the response arbitrarily; it covers the low-frequency range where the mechanical passband stops overlapping the ensemble's power (§6.2). That licenses a general search strategy: wherever a transducer's response does not match the stimulus statistics, look for a neural circuit whose dynamics fill precisely that gap, and read the circuit's time constant as a statement about the world rather than about the neurons."
    },
    {
      "text": "It is a neural integrator compensating for a mechanical high-pass filter — an engineering fix, describable entirely in signal-processing terms with no reference to statistics.",
      "correct": false,
      "feedback": "Correct under the assumption that the mechanistic description is complete, and everything in it is true: the cupula is a high-pass element and velocity storage extends the low-frequency response. But the description does not explain the time constant. Why extend it by seconds rather than by minutes or by nothing? Only the ensemble answers that, which is precisely the difference between a mechanistic and a normative account (§0.1)."
    },
    {
      "text": "It is a memory of recent rotation, held so that the system can detect when rotation stops.",
      "correct": false,
      "feedback": "Correct under the assumption that the reflex needs an offset detector, and post-rotatory nystagmus (§6.10) does show that stored activity outlives the stimulus and produces an after-effect. But that after-effect is a *cost* of velocity storage, not its purpose — it is why dancers get vertigo. Reading a system's failure mode as its function is a recurring trap, and this distractor is the vestibular version of it."
    },
    {
      "text": "It compensates for afferent adaptation, keeping the central estimate accurate when the afferents habituate to sustained input.",
      "correct": false,
      "feedback": "Correct under the assumption that the deficit is neural adaptation, which would be the right diagnosis in many systems — olfactory receptor neurons and cochlear afferents both adapt in ways downstream circuits must undo. Here the deficit is upstream of any neuron: the cupula physically returns to rest, so the afferents are faithfully reporting a mechanical signal that has genuinely decayed. Locating the deficit correctly matters, because it is what tells you the fix could not have been mechanical."
    }
  ]
}
</script>
</x-mcq>

## Commissural inhibition

The two sides are connected by inhibitory commissural fibres, implementing the push–pull comparison centrally as well as mechanically. This is lateral inhibition — but between *matched sensors measuring opposite signs of the same variable*, not between neighbours in a map.

<x-figure src="content/media/vor-three-neuron-arc-fish.jpg"
  caption="Horizontal VOR circuitry compared across goldfish, flatfish and shark. The same three-neuron plan is rewired to suit each animal's body axis — flatfish lie on their side, and the circuit compensates. A clean demonstration that the deadline fixes the number of synapses while the connectivity adapts to the geometry."
  credit="Hans Straka and Robert Baker. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Horizontal_vestibulo-ocular_reflex_in_fish.jpg">
</x-figure>


Worth adding to the list of what "lateral inhibition" can mean:

- **Retina, cuneate:** between spatial neighbours, removing spatial redundancy.
- **Cochlear nucleus:** between spectral neighbours.
- **Vestibular nuclei:** between opposed sensors, cancelling common mode.
- **Olfactory bulb:** between…? (§3.5) — the open question.

The vestibular case shows a fourth possibility the olfactory debate has not much considered: inhibition between channels related by a *known physical relationship* rather than by proximity or by learned correlation.
