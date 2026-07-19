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
<strong>Pit organ:</strong> a pinhole aperture forms a crude thermal image (§9).

Each of these is a transformation obtained for free — no spikes, no metabolic cost, no delay.

<strong>Olfaction has almost none of it.</strong> The mucus layer imposes some chromatographic sorting, and nasal airflow patterns bias which receptors see what, but there is no accessory structure performing a useful transformation of the kind these others get. Every olfactory computation has to be paid for in neurons. When comparing circuit complexity across modalities, that is worth remembering: olfaction may look like it does more neural work because it has less mechanical help.
</x-callout>

## Noise and limits

Tactile thresholds are impressive: a fingertip detects vibration amplitudes of tens of nanometres, and detects a raised dot of a few micrometres. The limit is set partly by Brownian motion of the skin and partly by the mechanical filtering above.

But unlike the rod at the single-photon limit or the ORN at the shot-noise limit, touch is not obviously operating at a *physical* bound. The interesting constraint on touch is not detection but **innervation budget** — how many afferents to spend, and where — which is §4.4's subject.
