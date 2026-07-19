---
id: m03.s03
title: Transduction and physical limits
lede: The sensor is slower than the signal. That single fact is close to unique among the classical senses, and most of what is strange about early olfactory processing follows from it.
estimatedMinutes: 16
---

## Binding as a stochastic process

An odorant receptor is a G-protein-coupled receptor. Detection begins with a molecule binding, which triggers a cascade — G-protein, adenylyl cyclase, cAMP, a cyclic-nucleotide-gated channel — and a depolarisation.

The first stage is stochastic in a way photon absorption is not, and the difference matters. A photon either arrives or does not. A molecule **binds, unbinds, and may rebind**, with rates set by affinity and concentration. What the receptor reports is a time-averaged occupancy, and occupancy is a noisy estimate of concentration.

At threshold, a receptor neuron may register only a handful of binding events per sniff. Binding is Poisson, so with an expected count $k$ the fractional error is $1/\sqrt{k}$ — with $k \approx 10$, roughly 30% before any downstream noise. **This is the shot-noise limit that glomerular convergence exists to beat** (§3.5).

## The speed problem

Here is the fact this module keeps returning to.

The olfactory receptor neuron response to a concentration step has a time constant of roughly **100 milliseconds**. The cascade has several stages, each contributing delay, and the mucus layer adds diffusion time before a molecule reaches the receptor at all.

Natural plumes carry structure to **tens of hertz** (§3.2). Mice discriminate correlated from anti-correlated fluctuations up to 40 Hz [@ackels2021].

The sensor is roughly an order of magnitude too slow for the signal it must resolve.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Nothing else in this course is in this position</div>
<strong>Audition:</strong> hair cell transduction in microseconds, gated directly by tip-link tension with no cascade. Faster than any behaviourally relevant timescale (§2.3).<br>
<strong>Vision:</strong> phototransduction in tens of milliseconds — slow, but most scenes are slower.<br>
<strong>Touch:</strong> Pacinian afferents follow vibration to hundreds of hertz.<br>
<strong>Olfaction:</strong> ~100 ms sensor, ~40 Hz signal.

Audition solves timing problems by having a fast transducer. Olfaction cannot, so <strong>the temporal precision has to be manufactured by the population</strong>. That is a strong constraint on any account of the bulb, and it reframes convergence: the ~1000:1 ratio may be doing temporal work rather than, or as well as, amplitude work.

The precedent exists elsewhere. Electric fish achieve sub-microsecond behavioural precision from neurons with millisecond precision, by pooling. Same problem, solved, in a different modality.
</x-callout>

<details class="x-deeper">
<summary>Go deeper: two ways a slow population can be fast<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

**Pooling.** For $n$ sensors each with independent timing jitter $\sigma_t$, the pooled estimate of event time has jitter $\sigma_t/\sqrt{n}$. With $n \approx 1000$ and $\sigma_t \approx 100$ ms, the bound is ~3 ms — comfortably enough for 40 Hz.

The catch is the independence assumption (§3.5). Receptor neurons of one type sample the *same air*, so plume-driven fluctuations are perfectly shared and cannot be averaged away. Only the independent part — binding stochasticity, transduction noise, spike jitter — is reduced. The √1000 figure is an upper bound.

**Kinetic heterogeneity.** If receptor neurons differ in their time constants, the population is a filterbank rather than a single slow filter. The fast tail retains high-frequency information even though the mean is slow. This requires no independence assumption at all, but it does require diversity — and it predicts that the *fast* subpopulation carries most of the temporal information.

**They are distinguishable.** Pooling predicts performance scaling with the number of converging neurons; a filterbank predicts degradation when kinetic diversity is reduced but relative insensitivity to number. These come apart experimentally, and the experiment has not been done.

</div>
</details>

## Adaptation at the receptor

ORNs adapt strongly through calcium feedback onto the CNG channel, shifting sensitivity toward the recent concentration range. This is Weber-like and serves the same function as light adaptation: keep a limited output range positioned over the current input distribution.

But note the tension it creates, which is specific to olfaction. Adaptation that removes a sustained background is exactly what you want for detecting a new odour against an old one. It is exactly what you do *not* want if the informative signal is the temporal fluctuation itself — because a high-pass filter applied to an intermittent signal discards the intermittency statistics that §3.2 identified as carrying the spatial information.

How the system resolves that is open, and it is a good example of a conflict that only becomes visible once you take the plume statistics seriously.
