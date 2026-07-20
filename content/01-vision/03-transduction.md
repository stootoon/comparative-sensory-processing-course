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

<x-mcq>
<script type="application/json">
{
  "id": "m01.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The single-photon result is used here to argue that vision's downstream problem is selection rather than detection. A colleague objects that the rod bipolar pathway applies a nonlinear threshold which discards genuine single-photon events, so the retina is evidently still solving a detection problem. What is the best response?",
  "options": [
    {
      "text": "The objection correctly identifies detection-like inference in the circuit, but it does not restore a detection bottleneck: the threshold discards events because most rods in dim light contain only noise, and no downstream stage could improve on a transducer already at the physical limit.",
      "correct": true,
      "feedback": "This keeps the two claims at their proper levels. 'The sensor cannot be improved' is a statement about the transducer; 'the retina decides what to believe' is a statement about allocation under a bottleneck. The threshold is a decision about which reports to keep, which is the selection problem in its sharpest form — and it is lossy on purpose."
    },
    {
      "text": "The threshold is lossy and therefore not what efficient coding predicts, so it falls outside the framing altogether.",
      "correct": false,
      "feedback": "Correct under the assumption that the selection/detection contrast is a claim about efficient coding specifically, and the observation itself is right — the deeper box below makes exactly this point, that the threshold is task-optimal inference rather than efficient transmission. But the selection/detection contrast is about where the physical limit sits, and it survives whichever normative theory you then apply."
    },
    {
      "text": "Behavioural thresholds approach the limit set by photon statistics, so single-photon signals must be transmitted essentially losslessly and the objection's premise is false.",
      "correct": false,
      "feedback": "Correct under the assumption that behavioural performance tightly constrains per-rod fidelity — an inference that looks safe and is not [@field2005]. Behavioural thresholds involve pooling over many rods and long integration times, so the resulting bound on the intervening circuitry is loose. The premise of the objection is in fact right."
    },
    {
      "text": "Hundreds of rods converge onto one ganglion cell in dim light, so pooling recovers whatever the threshold discarded.",
      "correct": false,
      "feedback": "Correct under the assumption that convergence recovers information. It does not — pooling improves the signal-to-noise ratio of what survives, by roughly $\\sqrt{n}$, but information destroyed at a nonlinearity is gone before the pooling happens. Ordering matters here: the threshold is applied first, and that is what makes it a commitment rather than a filter."
    }
  ]
}
</script>
</x-mcq>

## Amplification and its cost

A single photon produces a measurable current because the phototransduction cascade amplifies enormously: one activated rhodopsin catalyses hundreds of transducin molecules, each activating a phosphodiesterase, each hydrolysing more than a thousand cGMP molecules per second [@kandel2021].

Amplification of that depth takes time. The rod's single-photon response peaks after roughly 200 ms — very slow by neural standards. Cones are faster and far less sensitive, which is the trade.

Faster, but not fast. A cone takes about 40 ms to reach peak response to a flash, which is already an awkward delay for an animal that must act on what it sees. Kandel's chapter 22 draws the consequence that matters here: some ganglion cells peak roughly 20 ms after the flash — *before the cone that drives them has finished responding* [@kandel2021]. The retina's temporal filtering does not merely sharpen the signal; it recovers latency the transducer cost, by responding to the rising phase rather than waiting for the peak.

This is worth holding on to, because it is the first instance of a pattern the course returns to: a circuit whose apparent job is coding is simultaneously buying back a deadline (§1.1). Efficient coding does not predict it, and a theory that scored circuits only on bits transmitted would not notice it had happened.

**The duplex retina** resolves the conflict structurally: two receptor systems with different gains, spanning together about ten log units of intensity. Rods for photon-starved conditions with slow, high-gain responses that saturate outright around dawn — every cGMP-gated channel closed, the cell no longer reporting intensity at all [@kandel2021]; cones for daylight with fast, low-gain responses that are held in range by gain control rather than allowed to saturate.

<x-figure src="content/media/cone-mosaic-normal-vs-protanope.jpg"
  caption="The cone mosaic, imaged in a living eye. The duplex arrangement means this mosaic is only half the story — interleaved rods, far more numerous, carry vision at low light with entirely different gain and speed. Two receptor systems for one stimulus dimension, because no single transducer covers ten log units."
  credit="Mark Fairchild. CC BY-SA 3.0."
  source="https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg">
</x-figure>


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

<x-free-response>
<script type="application/json">
{
  "id": "m01.s03.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Both vision and olfaction are limited at the periphery by shot noise — photons in one case, molecules in the other. §1.5 will use the photon case to derive a prediction with a sign attached: whiten at high SNR, pool at low. State what the analogous olfactory prediction would be, then give the strongest reason it might not transfer.",
  "modelAnswer": "**The naive transfer.**\n\nMolecular arrivals at a receptor are, to a first approximation, Poisson in the same way photon arrivals are: a mean of $N$ binding events carries standard deviation $\\sqrt{N}$, so fractional noise grows as concentration falls. Run the vision argument unchanged and you get: at high concentration, decorrelate across receptor channels; at low concentration, pool. Convergence in the bulb should therefore be concentration-dependent, and lateral inhibition should weaken at low concentration exactly as the retinal surround does.\n\n**Three reasons to distrust it, in increasing order of severity.**\n\n*The regime is different, not just the level.* Vision spends most of its life photon-rich and occasionally photon-starved, and the crossover is a genuine crossover. Olfaction at behavioural threshold may bind a handful of molecules per sniff, so the low-SNR branch is arguably the normal operating point rather than the exception. A prediction whose interest lies in a switch is less interesting in a system that sits on one side of it.\n\n*Decorrelation needs correlations to remove, and those are not spatial.* The retinal surround works because neighbouring receptors see correlated parts of the world, which is a fact about geometry and can be wired locally. Olfactory receptor channels are correlated because odorants co-occur in the world, which is a fact about chemistry and ecology, and cannot be specified by a local rule (§1.4, §3.5).\n\n*Superposition fails at the sensor.* This is the deepest one. The photon count at a cone is additive across sources; receptor activation is not additive across odorants, because competitive binding and antagonism intervene [@shen2013]. A linear whitening calculation on a stage that is not linear is not obviously the right calculation to be doing.\n\n**The residue that does transfer.** The structural claim — that the optimal peripheral operation depends on where the system sits relative to its noise floor, and that this predicts a *change* rather than a fixed design — survives all three objections. It is the prediction of a switch that transfers, not the specific filter.",
  "rubric": [
    "States the naive prediction with a direction: decorrelate when signal is plentiful, pool when it is scarce",
    "Identifies that olfaction may live permanently on the low-SNR branch, so the crossover is less diagnostic",
    "Notes that olfactory correlations are ecological rather than geometric, so the wiring cannot be local",
    "Bonus: raises the failure of superposition at the receptor as an obstacle to the linear calculation",
    "Bonus: separates the transferable structural claim (SNR-dependence of the optimum) from the untransferable specific filter"
  ]
}
</script>
</x-free-response>
