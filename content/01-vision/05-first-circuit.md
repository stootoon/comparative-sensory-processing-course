---
id: m01.s05
title: The first circuit — retina
lede: The retina is where efficient coding came closest to being proven. It is also where the theory's limits are clearest, and both halves matter for the comparison.
estimatedMinutes: 20
---

The retina is not a relay. Between photoreceptor and optic nerve sit three synaptic layers and more than a dozen interneuron classes, and the signal leaving is profoundly transformed from the signal arriving. Roughly $10^8$ photoreceptors converge onto about $10^6$ ganglion cells — a hundredfold compression — and the retina decides what survives.

<x-figure src="content/media/cajal-retina.jpg"
  caption="Cajal's drawing of the mammalian retina, c. 1900. Light enters from below in this orientation and travels through the ganglion and inner nuclear layers before reaching the photoreceptors at the top — the retina is built back to front. Every cell class in the circuit below is visible here: rods and cones (a, b), horizontal cells (e), bipolars (f, g), amacrines (h), and ganglion cells (i, j). Cajal inferred the direction of signal flow from morphology alone, before any of it could be recorded."
  credit="Santiago Ramón y Cajal, c. 1900. Public domain. Original held by Instituto Cajal, CSIC, Madrid."
  source="https://commons.wikimedia.org/wiki/File:Cajal_Retina.jpg">
</x-figure>

<x-figure src="content/media/retina-organization.png"
  caption="The same circuit as a modern schematic, with the layer abbreviations you will meet in the literature: ONL outer nuclear layer, OPL outer plexiform, INL inner nuclear, IPL inner plexiform, GCL ganglion cell layer. P photoreceptor, H horizontal, B bipolar, A amacrine, G ganglion. Note that the two lateral cell classes — horizontal and amacrine — sit in the two plexiform layers, exactly where the vertical pathway is relayed. That placement is what lets them intercept and subtract."
  credit="Suh B, Baccus SA. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Organization_of_the_retina.png">
</x-figure>


## Centre–surround as predictive coding

The canonical retinal computation is the antagonistic centre–surround receptive field: a ganglion cell excited by light in a small central region and inhibited by light in an annulus around it.

The predictive-coding reading of this is precise and worth stating properly [@srinivasan1982]. The surround computes a weighted average of the neighbourhood — a *statistical prediction* of the centre, given the spatial correlations of natural scenes. That prediction is subtracted from the actual centre signal. What the ganglion cell transmits is the residual: the part the surround could not predict.

<x-figure src="content/01-vision/figures/retina-circuit.js"
  caption="The circuit that produces it. Horizontal cells pool across a wide lateral extent and feed back negatively onto the photoreceptor–bipolar synapse; that pooled average is the prediction being subtracted. Isolate each pathway with the selector. The centre–surround receptive field is not an abstraction imposed on the retina — it is what this wiring does.">
</x-figure>


### A worked example

Abstract statements about dynamic range become concrete quickly with numbers.

Take a ganglion cell viewing a patch of a natural scene. Suppose intensities in the scene span 0 to 1000 arbitrary units, and the cell can fire between 0 and 100 spikes/s.

**Without a surround.** The cell must map the full 0–1000 range onto 0–100 spikes. Each spike therefore represents about 10 units of intensity. Two adjacent points differing by 5 units — a faint edge — produce *the same firing rate*. The edge is invisible, not because the retina failed to see it, but because it was quantised away.

**With a surround.** The cell now reports centre minus local average. Because natural scenes are locally smooth, that residual is small — say it spans −50 to +50 units in this patch, rather than 0 to 1000. The same 100 spikes/s now covers a range of 100 units, so each spike represents 1 unit. The 5-unit edge produces a 5 spike/s change: clearly visible.

**The same neuron, the same spike budget, a tenfold improvement in contrast sensitivity** — bought entirely by subtracting something predictable. Nothing was added; something redundant was removed.

<details class="x-deeper">
<summary>Go deeper: the optimal surround weights, and why they are not just "average the neighbours"<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

The surround is the least-squares predictor of the centre from its neighbours. For a centre $c$ and neighbours $\mathbf{n}$, we want weights $\mathbf{w}$ minimising

$$\mathbb{E}\left[(c - \mathbf{w}^\top \mathbf{n})^2\right],$$

whose solution is the Wiener–Hopf equation

$$\mathbf{w} = \mathbf{C}_{nn}^{-1}\,\mathbf{c}_{nc},$$

where $\mathbf{C}_{nn}$ is the covariance among neighbours and $\mathbf{c}_{nc}$ the covariance between neighbours and centre. Both come straight from the scene statistics of §1.2.

Two consequences that a naive "average the neighbours" account misses:

**The weights are not uniform, and not all positive.** Because neighbours are correlated *with each other*, $\mathbf{C}_{nn}^{-1}$ down-weights redundant ones. Nearer neighbours get most of the weight; the profile can go slightly negative at larger radii, which is why measured surrounds sometimes show a weak secondary positive lobe.

**The weights depend on noise.** With noisy measurements, replace $\mathbf{C}_{nn}$ by $\mathbf{C}_{nn} + \sigma^2\mathbf{I}$. As $\sigma^2$ grows this regularises toward smaller weights — the surround weakens. This is the §0.2 result arriving by a different route: the SNR-dependence is not an extra assumption bolted on, it falls out of doing the estimation properly.

</div>
</details>

This is the same computation as whitening, seen from a different angle. Subtracting a local prediction removes the low-frequency, high-power components, flattening the output spectrum. If you prefer the frequency-domain picture, return to the figure in §0.2 and switch it to the receptive-field view — that is this same filter, drawn in space.

## The prediction that made it credible

A theory that explains an existing observation is cheap. §0.2 set out the version that made a risky prediction: because the optimal filter trades whitening against noise suppression, the surround should **weaken and broaden as light level falls**.

It does. At scotopic levels, retinal surrounds weaken measurably and receptive fields broaden — the system stops differentiating and starts pooling, precisely as predicted. Direct tests showed LGN responses to natural movies are close to temporally white, as whitening requires [@dan1996].

<x-callout class="x-callout is-key">
<div class="x-callout-title">The benchmark, restated</div>
Measured input ensemble → physical constraint → risky quantitative prediction → confirmed by later data. This is what a mature normative theory of a sensory circuit looks like. It is the standard olfactory theory is measured against in §3.5, and the honest verdict there is that we are not close — not through lack of ingenuity, but because the first ingredient is missing.
</x-callout>

## Where the theory stops working

Three complications, in increasing order of how much they should worry you.

**Decorrelation is incomplete.** Retinal ganglion spike trains are decorrelated relative to the visual input, but most of that decorrelation is accomplished by a steep response nonlinearity rather than by the linear centre–surround structure [@pitkow2012]. The linear theory gets the right qualitative answer partly for the wrong mechanistic reason.

**Centre–surround is over-determined.** It also falls out of arguments about noise and response nonlinearity that never invoke redundancy reduction at all. When several distinct principles predict the same structure, the structure is weak evidence for any one of them — a point worth carrying into every later module.

**The retina does much more than whiten.** Around twenty ganglion cell types leave the eye in parallel, computing direction selectivity, looming detection, and object-motion-versus-self-motion discrimination. These are *feature detectors*, not efficient re-codings, and efficient coding says little about why this particular set. The retina is already doing task-specific inference, which the pure efficient-coding framing does not anticipate.

<x-mcq>
<script type="application/json">
{
  "id": "m01.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A retinal ganglion cell's surround weakens as ambient light drops. Which reading is best supported?",
  "options": [
    {
      "text": "At low SNR the optimal filter shifts from whitening toward noise-suppressing pooling, so the subtractive surround is worth less.",
      "correct": true,
      "feedback": "Correct, and note that this was predicted before being systematically confirmed, which is what gives it evidential force. The optimal filter is a product of a whitening term rising with frequency and a noise-suppression term falling with it; lowering SNR moves the crossover down, and the filter becomes lowpass."
    },
    {
      "text": "Photon noise makes the surround's estimate of the centre unreliable, so the system stops trusting it.",
      "feedback": "This has the right flavour and reaches nearly the right conclusion, but it is subtly incomplete. The surround averages over many receptors, so it is *less* noisy than the centre, not more. The reason to weaken it is not that the prediction became unreliable — it is that subtracting anything amplifies the relative contribution of noise in the residual, which is only worth paying when signal power is high."
    },
    {
      "text": "Rod pathways have intrinsically wider convergence than cone pathways, so the change is anatomical rather than computational.",
      "feedback": "Rod convergence is real and does contribute. But this treats the shift as a fixed consequence of switching pathways, when the surround also changes with adaptation state *within* a pathway. The anatomical and computational accounts are not exclusive — the anatomy is one mechanism implementing the computational principle."
    },
    {
      "text": "Lower light means fewer spikes, so metabolic cost dominates and the cell simplifies its computation.",
      "feedback": "Metabolic cost is a genuine constraint in efficient-coding arguments, but it does not predict this specific change. A cheaper computation could equally be achieved by narrowing the centre or by reducing gain overall; nothing in a cost argument alone singles out weakening the surround as SNR falls."
    }
  ]
}
</script>
</x-mcq>

## The convergence, and what it buys

The hundredfold convergence from photoreceptors to ganglion cells is worth pausing on, because the same motif recurs in every modality with a different justification.

Pooling $n$ independent noisy signals improves signal-to-noise as

$$\mathrm{SNR}_{\text{pooled}} = \sqrt{n}\;\mathrm{SNR}_{\text{single}},$$

so rod convergence in dim light — where hundreds of rods may feed one ganglion cell — buys roughly an order of magnitude in sensitivity, at the direct cost of spatial resolution. That trade is worth taking when photons are scarce and worth refusing in the fovea, where midget ganglion cells receive input from a single cone.

The retina therefore implements both ends of the trade simultaneously, in different places, matched to the local SNR regime. Photoreceptors themselves operate at the physical limit — a rod reliably signals the absorption of a single photon [@baylor1979] — so everything downstream is about what to discard, not what to detect [@field2005].

<x-predict>
<script type="application/json">
{
  "id": "m01.s05.p1",
  "contentRev": 1,
  "prompt": "The retinal surround is a weighted average of *spatial neighbours*, which works because neighbouring receptors see correlated parts of the world. The olfactory bulb also has powerful lateral inhibition, but its receptor array is unordered — glomeruli that are neighbours on the bulb surface have no particular relationship in chemical space. Predict what structure the bulb's inhibitory connectivity must have for lateral inhibition to decorrelate anything, and state what that structure would cost.",
  "placeholder": "What would 'surround' have to mean, and what would it cost to build?",
  "reveal": "There are two possibilities, and distinguishing them is a live experimental question.\n\n**Structured, learned connectivity.** If inhibition is to remove redundancy, it must connect glomeruli that are correlated *in the odour statistics of the animal's environment* — which is not a spatial relationship and cannot be specified by a local wiring rule. It would have to be learned from experience, and re-learned when the environment changes. That is expensive: it requires plasticity, it requires the statistics to be estimated online, and it takes time. Adult neurogenesis in the bulb, otherwise a puzzling feature two synapses from the sensory surface, becomes a plausible mechanism for exactly this.\n\n**Global normalisation.** Alternatively, inhibition is non-specific and scales with total activity across the array. Cheap, requires no learning, no specificity. But it can only remove the *mean* — first-order redundancy — and cannot decorrelate anything. The Drosophila antennal lobe does essentially this: lateral inhibition scales with total ORN population activity, and a model with two variables predicts projection-neuron responses well [@olsen2010].\n\n**The discriminating experiment:** measure whether the inhibition one glomerulus receives depends on *which* other glomeruli are active or only on *how many*. Then ask whether that dependence changes after prolonged exposure to a structured odour environment. Global normalisation predicts no dependence and no change; structured decorrelation predicts both.\n\nThis is the question §3.5 is built around."
}
</script>
</x-predict>
