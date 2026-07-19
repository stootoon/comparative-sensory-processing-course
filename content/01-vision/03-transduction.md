---
id: m01.s03
title: Transduction and physical limits
lede: The rod detects a single photon. That means the sensor is already at the physical limit, and everything downstream is about what to discard rather than what to detect — which is not the situation olfaction is in.
estimatedMinutes: 14
---

## At the physical limit

A dark-adapted rod produces a reliable electrical response to the absorption of **one photon** [@baylor1979]. There is no smaller unit of light. The sensor cannot be improved.

This is a stronger statement than it first appears, and it sets up the module's organising claim. If detection is already optimal, then every subsequent stage of the visual system is not solving a detection problem. It is solving a **selection** problem: which of this vast incoming stream to keep, given a bottleneck.

That framing is what makes efficient coding the natural theory for vision. Redundancy reduction is about what to throw away, and vision is a modality whose central difficulty is having too much rather than too little.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Olfaction is not in this position</div>
Olfactory transduction is limited by <strong>molecular shot noise</strong>. At threshold a receptor neuron may bind only a handful of molecules per sniff, and unlike photons, molecules cannot be counted more cleverly — they either arrive or they do not.

So olfaction's peripheral problem is genuinely one of <em>detection</em>, not selection. That difference propagates: convergence in the bulb buys SNR against a real shortage of evidence (§3.5), whereas convergence in the retina is a trade against acuity that the fovea declines to make.

<strong>When a normative account is imported from vision to olfaction, check first whether it assumes an abundance of signal.</strong> Several do.
</x-callout>

## Amplification and its cost

A single photon produces a measurable current because the phototransduction cascade amplifies enormously: one activated rhodopsin catalyses hundreds of transducin molecules, each activating a phosphodiesterase, each hydrolysing thousands of cGMP molecules.

Amplification of that depth takes time. The rod's single-photon response peaks after roughly 200 ms — very slow by neural standards. Cones are faster and far less sensitive, which is the trade.

**The duplex retina** resolves the conflict structurally: two receptor systems with different gains, spanning together about ten log units of intensity. Rods for photon-starved conditions with slow, high-gain, saturating responses; cones for daylight with fast, low-gain, non-saturating ones.

This is the same solution as the mitral/tufted split and the SA/RA/PC split — **one channel cannot cover the whole range, so build two and let the consumer choose.** It appears here at the transducer itself, which is earlier than in any other modality in the course.

## Noise floors

Two irreducible noise sources bound performance, and both matter for §1.5's SNR argument.

**Photon shot noise.** Photon arrivals are Poisson, so a mean of $N$ photons carries standard deviation $\sqrt{N}$. At low light, $N$ is small and fractional noise is large. **This is the noise that makes whitening dangerous** — and it is a property of the world, not of the eye.

**Thermal isomerisation.** Rhodopsin occasionally isomerises spontaneously, producing a response indistinguishable from a real photon. Roughly one event per rod every hundred seconds or so — a dark noise floor that no amount of neural cleverness removes.

<details class="x-deeper">
<summary>Go deeper: why single-photon detection does not mean noiseless transmission<span class="x-deeper-tag">evidence</span></summary>
<div class="x-deeper-body">

It is tempting to reason: behaviour approaches the limit set by photon statistics, therefore the retina must transmit single-photon signals essentially without loss. That inference is not safe [@field2005].

The measured constraints are considerably weaker than usually assumed. Behavioural thresholds involve pooling over many rods and long integration times, and the resulting bound on per-rod fidelity is loose. Ganglion cell sensitivity is likewise consistent with a range of noise levels in the intervening circuitry.

Why it matters here: the rod bipolar pathway applies a **nonlinear threshold** that discards small responses. Since most rods in dim light contain only noise, discarding everything below a criterion improves the pooled signal — at the cost of losing some genuine single-photon events.

That is a deliberate, lossy, task-optimal choice, and it is not what pure efficient coding predicts. It is the retina performing **inference about whether a photon arrived**, not faithful transmission of what the rod reported. Worth remembering when §1.5 presents the retina as an efficient-coding success — the same circuit is simultaneously doing something efficient coding does not describe.

</div>
</details>
