---
id: m08.s03
title: Echolocation — designing the experiment
lede: Bats choose their own stimulus, in real time, according to what they currently need to know. And they build cortical maps of quantities the receptor array never measured — which is the existence proof olfaction's map question requires.
estimatedMinutes: 16
---

An echolocating bat emits a call and listens for the echo. Delay gives range, Doppler shift gives relative velocity, spectral notches give elevation, and interaural differences give azimuth.

<x-figure src="content/media/echolocating-bat-myotis-flight.jpg"
  caption="An echolocating bat taking prey in flight. Everything this animal knows about the moth's position it computed from echoes of sounds it produced itself, in the preceding few hundred milliseconds."
  credit="Dietmar Nill, published in PLoS Computational Biology (2009). CC BY 2.5."
  source="https://commons.wikimedia.org/wiki/File:Myotis_bechsteinii-flying.jpg">
</x-figure>


## The probe is designed, in real time

The bat controls its own stimulus, and adapts it continuously:

- **Call rate rises** as the bat closes on a target, from a few per second during search to two hundred per second in the terminal "feeding buzz".

<x-figure src="content/media/bat-echolocation-spectrogram-buzz.jpg"
  caption="Spectrogram of an approach sequence. Widely spaced FM sweeps during search give way to the terminal buzz as the bat closes — call rate rising with proximity is sampling rate rising with uncertainty about a rapidly changing quantity. This is the pattern §8.3 proposes testing in sniffing."
  credit="Xofc (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bat.nav%2Bbuzz.20250704_204120.jpg">
</x-figure>

- **Bandwidth and structure change** with task. Broadband FM sweeps give precise ranging; narrowband CF components give Doppler sensitivity for detecting fluttering prey.
- **Beam direction is aimed**, like gaze, at objects of current interest.
- **Frequency is adjusted** to compensate for Doppler shift, holding the echo in a narrow, highly sensitive frequency band.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Optimal experiment design, and the olfactory question it poses</div>
Increasing call rate as a target approaches is exactly what an information-maximising agent should do: as uncertainty about a rapidly changing quantity grows, sample more often.

<strong>§3.9 asked whether sniff strategy does the same thing.</strong> Sniff frequency does change with task, and rodents sniff faster during active search. But the bat literature makes a stronger and more specific claim — that sampling rate tracks <em>current posterior uncertainty</em>, moment to moment.

<strong>The experiment, borrowed:</strong> manipulate uncertainty independently of task difficulty. In a plume-tracking task, vary the intermittency of the plume — which changes how informative each sniff is — while holding the discrimination and the distance constant. If sniff rate tracks uncertainty, it should rise when the plume is patchier even though the task is nominally identical.

As far as this course is aware, that has not been done, and it is a clean test of whether olfactory sampling is genuinely optimal-experiment-design or merely arousal-driven.
</x-callout>

## Maps of computed variables

Now the result that matters most for §13.

Bat auditory cortex contains areas where neurons are tuned to specific **echo delays** — the time between call and echo, which corresponds to target range. These delay-tuned neurons are arranged systematically, forming an orderly map of range.

<x-figure src="content/media/bat-auditory-cortex-map.jpg"
  caption="Functional subdivisions of mustached bat auditory cortex, including the delay-tuned FM-FM area where echo delay — and therefore target range — is mapped systematically. Range is nowhere in the cochlear array; the map is built on a computed quantity. This is the existence proof §13 needs."
  credit="Goran tek-en, after Kaldari. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bat_Auditory_Cortex.svg">
</x-figure>


**Range is not a variable the cochlea measures.** The receptor array reports frequency. Delay is computed by comparing call and echo, and the map is built on the computed quantity.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A map can exist for something the sensor never measured</div>
This is the existence proof Import 2 needs, and it changes the olfactory map question.

The usual argument is: olfaction's receptor array is unordered, so there is nothing to be topographic about, so no map. The bat shows the inference is invalid. <strong>Maps can be constructed for derived variables.</strong>

So the right olfactory question is not "is the receptor array ordered" — it is not — but <strong>"is there a derived variable worth mapping?"</strong>

§6.4's criterion helps: a map pays off when downstream computation needs <em>local interactions among similar values</em>. §2.5's ITD lesson adds another: there must be enough usable range for tiling to be worthwhile.

Applying both, the best olfactory candidates are continuous scalar quantities with a wide behaviourally relevant range — <strong>concentration</strong> and <strong>plume-derived source distance</strong> — and not chemical identity, which has neither a metric nor a notion of locality. And the map should be downstream of the bulb, whose organisation is fixed by receptor identity.
</x-callout>

## Clutter and jamming

Two further problems with olfactory counterparts. **Clutter**: echoes from vegetation swamp the target echo, a scene-segmentation problem in the time domain. And **jamming**: bats flying in groups must attribute echoes to their own calls, which they partly solve by shifting call frequency — the same solution as the electric fish's jamming avoidance, arrived at independently.
