---
id: m04.s03
title: Transduction and physical limits
lede: Touch transduces force directly through mechanically gated channels — the fastest transduction in the course after hearing. And like the cochlea, much of its filtering is done by accessory structures rather than by neurons.
estimatedMinutes: 14
---

## Direct mechanical gating

Mechanotransduction in touch is fast because it is direct. Force applied to the membrane opens **Piezo2** channels without an intervening second-messenger cascade. Latency is sub-millisecond.

<x-figure src="content/media/somato-piezo2-mechanogating.jpg"
  caption="Piezo2 mechanogating. Membrane tension opens the channel directly, with no second-messenger cascade — which is why touch transduction is sub-millisecond. Vision and olfaction cannot do this: detecting single photons or a handful of molecules requires amplification, and amplification takes time. Cascades buy gain and cost speed."
  credit="Commons user BPM1234. CC0."
  source="https://commons.wikimedia.org/wiki/File:PIEZO2_Mechanogating.jpg">
</x-figure>


Compare the chain across modalities:

- **Audition:** tip-link tension gates the channel directly. Microseconds.
- **Touch:** membrane tension gates Piezo2 directly. Sub-millisecond.
- **Vision:** a cascade with enormous gain. Tens of milliseconds.
- **Olfaction:** a cascade, plus mucus diffusion. ~100 milliseconds.

The pattern is clean and worth stating as a rule: **cascades buy gain and cost speed.** Vision and olfaction need gain because single photons and handfuls of molecules are tiny signals. Touch and hearing deal in mechanical forces large enough to gate a channel directly, so they skip the cascade and keep the speed.

That is the physical reason olfaction is stuck with a slow sensor (§3.3). It is not an evolutionary oversight — a receptor that must detect a few molecules needs amplification, and amplification takes time.

## Accessory structures do the filtering

The four afferent classes in glabrous skin differ less in their transduction machinery than in **what is built around the nerve ending**.

**Pacinian corpuscles** are the clearest case. The ending sits inside an onion-like stack of fluid-filled lamellae. A sustained pressure deforms the outer layers, which then relax and stop transmitting force to the core — so the corpuscle mechanically **high-passes** its input. Remove the capsule and the same ending responds to sustained pressure.

<x-figure src="content/media/somato-pacinian-histology.jpg"
  caption="A Pacinian corpuscle in section. The concentric lamellae are the filter: sustained pressure deforms the outer layers, which then relax and stop transmitting force inward, so only changing stimuli reach the ending. The high-pass characteristic is a property of the packaging, not of the neuron — computation bought from mechanics, like the cochlear stiffness gradient and the semicircular canal's fluid inertia."
  credit="Mikael Haggstrom, M.D. CC0."
  source="https://commons.wikimedia.org/wiki/File:Histology_of_a_Pacinian_corpuscle.jpg">
</x-figure>


The filter is not computed. It is a property of the packaging.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">Accessory structures as free computation — the running list</div>
<strong>Cochlea:</strong> graded stiffness of the basilar membrane performs a frequency decomposition before transduction (§2.3).<br>
<strong>Pacinian corpuscle:</strong> lamellae high-pass the mechanical input.<br>
<strong>Semicircular canals:</strong> fluid inertia integrates angular acceleration into velocity (§6.3).<br>
<strong>Pit organ:</strong> a pinhole aperture forms a crude thermal image (§10).

Each of these is a transformation obtained for free — no spikes, no metabolic cost, no delay.

<strong>Olfaction has almost none of it.</strong> The mucus layer imposes some chromatographic sorting, and nasal airflow patterns bias which receptors see what, but there is no accessory structure performing a useful transformation of the kind these others get. Every olfactory computation has to be paid for in neurons. When comparing circuit complexity across modalities, that is worth remembering: olfaction may look like it does more neural work because it has less mechanical help.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m04.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Strip the capsule from a Pacinian corpuscle and the same ending now responds to sustained pressure. Two claims are often drawn from this. Which pair of consequences is correct?",
  "options": [
    {
      "text": "The high-pass filter belongs to the packaging rather than the neuron; and since olfaction has almost no equivalent accessory structure, some of its apparent extra neural machinery is doing work that physics does elsewhere.",
      "correct": true,
      "feedback": "Both halves hold, and the second is the comparative payoff. The running list — cochlear stiffness gradient, Pacinian lamellae, semicircular canal fluid inertia, the pit organ's pinhole — is a list of transformations obtained with no spikes, no metabolic cost and no delay. Olfaction gets mucus chromatography and airflow biasing and little else, so every olfactory computation is paid for neurally. When comparing circuit complexity across modalities, that is a confound, not a finding."
    },
    {
      "text": "The four afferent classes must therefore differ mainly in their transduction machinery, and each class's tuning is a property of its channel complement.",
      "correct": false,
      "feedback": "Correct under the assumption that a transducer's dynamics are set by its molecular apparatus, which is the default expectation and is right in plenty of systems. Here it is inverted by the decapsulation result: the four classes differ *less* in transduction machinery than in what is built around the ending. §4.11 makes the point explicitly — each class's temporal filtering is traceable to accessory-structure mechanics."
    },
    {
      "text": "The corpuscle is therefore an adaptation mechanism, so touch's rapid adaptation is neural gain control implemented peripherally.",
      "correct": false,
      "feedback": "Partly correct, and §4.10 does treat the lamellae as the fastest adaptation in the course. But 'neural gain control implemented peripherally' gets the mechanism wrong in a way that matters for cost accounting: mechanical relaxation is not gain control, it is a passive filter, and it is free. Adaptation in touch operates at several levels — mechanical relaxation, channel inactivation, synaptic depression, central gain control — and conflating them loses the reason touch's is the cheapest."
    },
    {
      "text": "Piezo2's sub-millisecond gating is what makes the high-pass characteristic possible, so direct mechanical gating and the capsule are two descriptions of one mechanism.",
      "correct": false,
      "feedback": "Correct under the assumption that filter shape follows from transducer speed. It does not, and the decapsulation experiment is the demonstration: the same fast channel, in the same ending, now responds to sustained pressure. Direct gating explains why touch is *fast* — cascades buy gain and cost speed, which is why vision and olfaction are slow — and explains nothing about which temporal band any given afferent reports."
    }
  ]
}
</script>
</x-mcq>

## Noise and limits

Tactile thresholds are impressive: grasping a large object, a human detects vibration of about 30 nm at 200 Hz, and a fingertip detects a raised dot a few micrometres high [@kandel2021]. The Pacinian corpuscle is the most sensitive mechanoreceptor in the body, and its sensitivity is band-limited by the same capsule that high-passes it — the threshold curve is a mechanical property, not a tuning curve. The limit is set partly by Brownian motion of the skin and partly by that filtering.

But unlike the rod at the single-photon limit or the ORN at the shot-noise limit, touch is not obviously operating at a *physical* bound. The interesting constraint on touch is not detection but **innervation budget** — how many afferents to spend, and where — which is §4.4's subject.
