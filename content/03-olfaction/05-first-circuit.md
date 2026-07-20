---
id: m03.s05
title: The first circuit — olfactory bulb
lede: The bulb has all the machinery the retina has — convergence, lateral inhibition, parallel output channels — deployed on an array with no metric. Watching each motif get re-derived without a spatial neighbourhood is the payoff of the whole comparison.
estimatedMinutes: 26
---

The olfactory bulb occupies the structural position the retina occupies in vision: the first circuit, obligatory, one synapse from the receptors, doing substantial computation before anything reaches cortex.

The parallel is close enough to be worth pushing hard, and it breaks in exactly the informative places.

<x-figure src="content/03-olfaction/figures/olfactory-pathway.js"
  caption="The olfactory pathway, drawn to be set beside the retinal circuit in §1.5. Same parts list — receptors, massive convergence, lateral inhibition, parallel output cells — but note that the receptor neurons are interleaved in the epithelium: their spatial arrangement carries no information, and only chemical identity determines where they project. The second view puts the synapse counts side by side.">
</x-figure>


## Convergence: the same argument, more extreme

Thousands of receptor neurons expressing the same receptor converge onto a single glomerulus — ratios in the low thousands in mouse, roughly 50 in *Drosophila*. In mouse the axons of several thousand sensory neurons arrive on the dendrites of some 40 to 50 mitral and tufted relay neurons per glomerulus, a roughly hundredfold reduction in the number of cells carrying olfactory signals [@kandel2021].

The argument is the retina's, from §1.5. Pooling $n$ independent noisy sensors improves signal-to-noise:

$$\mathrm{SNR}_{\text{glom}} = \sqrt{n}\;\mathrm{SNR}_{\text{ORN}}.$$

With $n \approx 1000$, that is roughly a thirtyfold improvement.

Why it matters is worth making concrete. Odour transduction is limited by **molecular shot noise**: at threshold concentrations a receptor neuron may bind only a handful of molecules during a sniff. Binding is a Poisson process, so if the expected count is $k$, the standard deviation is $\sqrt{k}$ — and with $k \approx 10$, a single neuron's estimate carries roughly 30% error before any downstream noise is added. Pool a thousand such neurons and the fractional error drops to about 1%.

<details class="x-deeper">
<summary>Go deeper: where the √n law comes from, and when it fails<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

For $n$ sensors each reporting $x_i = s + \eta_i$ with independent noise of variance $\sigma^2$, the average $\bar{x}$ has variance $\sigma^2/n$. Signal amplitude is unchanged, so

$$\mathrm{SNR}_{\text{pooled}} = \frac{s}{\sigma/\sqrt{n}} = \sqrt{n}\,\frac{s}{\sigma}.$$

**The independence assumption is doing all the work, and it is the first thing to check in any real system.** If the noise is correlated across sensors with correlation $\rho$, the pooled variance becomes

$$\mathrm{Var}(\bar{x}) = \frac{\sigma^2}{n}\left[1 + (n-1)\rho\right] \;\xrightarrow[n \to \infty]{}\; \sigma^2\rho,$$

which does **not** go to zero. Correlated noise puts a hard ceiling on what pooling can buy, no matter how many sensors you add.

For glomerular convergence this is a live question rather than a technicality. Receptor neurons expressing the same receptor sample the *same air*, so fluctuations driven by the plume itself are perfectly correlated across the population — pooling cannot remove them. What pooling removes is the *independent* part: stochastic binding, transduction noise, spike generation. So the √1000 figure is an upper bound, and the true benefit depends on how the noise budget splits between shared and independent sources.

This is the same reason correlated variability limits population codes in cortex, and it is one of the cleaner places where an olfactory question has an exact analogue in another modality.

</div>
</details>

But there is a crucial difference from the retina. **Retinal convergence costs spatial resolution.** Pooling rods trades acuity for sensitivity, which is why the fovea refuses the trade.

**Glomerular convergence costs nothing equivalent**, because the neurons being pooled all express the same receptor and are therefore, from the standpoint of odour identity, redundant. There is no acuity to lose. The trade that dominates retinal design simply does not arise.

What convergence *does* cost is temporal resolution, if the pooling is a slow average — and §3.2 showed the system needs tens-of-hertz resolution. Which makes the convergence architecture look less like a sensitivity mechanism and more like a mechanism for recovering temporal precision from slow sensors: pooling $n$ noisy timers sharpens timing as $\sqrt{n}$, the same argument that gives electric fish sub-microsecond acuity from millisecond neurons.

## Lateral inhibition without a neighbourhood

Now the interesting failure.

The bulb has powerful inhibition: granule cells form reciprocal dendrodendritic synapses with mitral and tufted cells, and there is inhibition in the glomerular layer as well. Textbooks routinely describe this as "lateral inhibition, as in the retina, sharpening contrast between glomeruli".

That description does not survive §3.4. Retinal lateral inhibition works because the surround is a **statistical prediction of the centre**, and it is a good prediction because neighbouring receptors view correlated parts of the world. The predictive-coding account depends entirely on physical proximity implying statistical correlation.

In the bulb, physical proximity implies nothing. Adjacent glomeruli respond to unrelated odorants. An inhibitory surround defined by proximity on the bulb surface would subtract a prediction that has no predictive value.

So there are only two coherent possibilities.

**Global normalisation.** Inhibition is non-specific and scales with total activity. Cheap, requires no learning. But it removes only the mean — first-order redundancy — and cannot decorrelate. This is demonstrably what the fly antennal lobe does: lateral inhibition scales with total ORN activity, and a two-variable model predicts projection-neuron responses well [@olsen2010].

**Structured, learned connectivity.** Inhibition connects glomeruli that are correlated in the animal's odour environment. This can genuinely decorrelate, but the connectivity is not specifiable by any local wiring rule — it must be learned from experience and relearned when the environment changes.

There is real evidence for something beyond global normalisation. In zebrafish, mitral-cell ensemble representations of similar odours become progressively *less* similar over the course of a response, without individual tuning curves sharpening [@friedrich2001]. Decorrelation is happening at the population level, produced by bulb circuit dynamics rather than inherited from the input.

Granule cells are the natural substrate. Modelling the bulb as a balance between excitatory drive and granule-cell inhibition reproduces both the combinatorial and the temporal sparseness seen in awake recordings, and gives the dendrodendritic synapse a specific functional role rather than leaving it as an anatomical curiosity [@koulakov2011].

<x-callout class="x-callout is-key">
<div class="x-callout-title">The normative payoff, and a testable claim</div>
If the bulb implements structured decorrelation, the connectivity must track odour statistics that are <em>non-stationary</em> (§3.2). Machinery for continuously rebuilding that connectivity is then not a curiosity but a requirement — which is the strongest normative rationale available for the bulb's extreme plasticity and for adult neurogenesis two synapses from the sensory surface.

<strong>The experiment:</strong> does the inhibition a glomerulus receives depend on <em>which</em> other glomeruli are active, or only on <em>how many</em>? And does that dependence change after prolonged exposure to a structured odour environment? Global normalisation predicts no dependence and no change. Structured decorrelation predicts both.
</x-callout>

## The sparse-connectivity problem

There is a deeper architectural difficulty, and it is where the inference framing pays off.

Treat odour recognition as inference in a linear model: a small number of sources are present out of a very large possible set, and receptor activations are a linear mixture. This is a sparse recovery problem, and the standard algorithms that provably find the MAP solution require **all-to-all connectivity** between the units representing the variables.

The bulb does not have all-to-all connectivity. Nothing in the brain does.

So either the bulb is not doing this computation, or it is doing it by some route that does not need dense wiring.

One proposal starts from the bulb's *sister cells* — the mitral cells that receive input from the same glomerulus, of which, as counted above, there are some tens per glomerulus, and whose redundancy has no obvious functional explanation. If the inference is distributed across sisters rather than concentrated in one cell per glomerulus, an algorithm exists that provably reaches the MAP solution using only **sparse** connectivity [@tootoonian2022]. On that reading, the apparent redundancy is what makes biologically plausible wiring sufficient.

<x-callout class="x-callout is-key">
<div class="x-callout-title">How much this is, and is not, established</div>
This is a <strong>proof of possibility, not a claim about what the bulb does.</strong> It shows the computation is achievable under a realistic connectivity constraint, and it makes sister cells a candidate solution to a real problem rather than an anatomical curiosity. It does not show the bulb uses this algorithm, and there are other accounts of sister cells — differences in their response properties and downstream targets suggest they may not be interchangeable in the way the model assumes.

Hold it against the five criteria from §0.2 and it scores well on constraint and objective, poorly on the measured ensemble, and it has not yet made a risky prediction that has been checked. That is a normal and useful position for a theory to occupy. It is not the same as being right.
</x-callout>

Worth noting what the argument *does* buy regardless of whether the specific algorithm is correct. It reframes a piece of anatomy that had no functional story into a candidate answer to a well-posed question — and it identifies what would count as evidence. If sister cells are implementing distributed inference, their responses should be systematically related in a way the model specifies, and that relationship should be measurable.

**This is the pattern to take from the section**, and it recurs everywhere in the course: a normative framework rarely proves what a circuit does. What it reliably does is turn "why is this here?" into "here is a computation that would need exactly this, and here is what you would measure to find out."

## Parallel output channels

The bulb sends output through at least two projection-neuron classes — mitral and tufted cells — with different thresholds, latencies, sniff-phase locking, and downstream targets.

<x-figure src="content/media/oa-mitral-tufted-morphology.jpg"
  caption="Mitral and tufted cells: different somatic depths, different dendritic arborisations, different downstream targets. The course argues this is the sixth independent instance of the split-early motif — and §6.8 raises the possibility, not much pursued, that it is specifically a DEADLINE-driven split rather than an invariance or loss-function one."
  credit="Imamura F, Ito A, LaFever BJ (2020). CC BY 4.0."
  source="https://doi.org/10.3389/fncir.2020.561822">
</x-figure>


Every modality in this course does something structurally similar: sustained and transient retinal ganglion cells, SA/RA/PC afferents in touch, regular and irregular vestibular afferents, position/velocity/vibration channels in the fly chordotonal organ.

The generic normative account: **a single channel cannot simultaneously optimise sensitivity, temporal precision, and dynamic range**, so split. In olfaction the natural reading is a speed–accuracy decomposition — tufted cells firing earlier and more reliably at low concentration, supporting rapid coarse inference; mitral cells later and more sparsely, supporting slower, more nuanced inference integrating cortical feedback.

This connects directly to the deadline of §3.1. If a decision must be made within one sniff but more accuracy is available with more time, an optimal system does not choose — it computes both and lets the downstream consumer decide which to use.

What the bulb hands downstream is worth noting here, before §3.7 takes up piriform properly. Bulbar responses remain strongly concentration-dependent, yet identity representations in piriform are not: recurrent collateral circuitry, driven by the earliest-responding bulbar cells, recruits global feedback inhibition that truncates the later concentration-dependent input [@bolding2018]. Concentration invariance is *computed* in cortex rather than inherited — and it is computed by recurrence, which is the defining feature of piriform as a three-layer associative network rather than a primary sensory area in the V1 sense [@haberly2001].

<x-predict>
<script type="application/json">
{
  "id": "m03.s05.p1",
  "contentRev": 1,
  "prompt": "Recall from §1.5 that the retinal surround weakens as SNR falls — the filter shifts from whitening to pooling. Predict the olfactory analogue: what should happen to bulbar inhibition as odour concentration falls toward threshold, and what would make this prediction hard to test?",
  "placeholder": "What should happen, and why is it hard to check?",
  "reveal": "The analogous prediction is that at low concentration — where molecular shot noise dominates and each glomerulus's estimate is unreliable — the system should shift from decorrelating (subtracting predictions between glomeruli) toward pooling (averaging across them). Inhibition should weaken, and the effective code should become less sparse and more redundant.\n\nTwo things make this much harder to test than the retinal version.\n\n**There is no equivalent of 'spatial frequency'.** In vision the prediction is sharp because you can characterise the filter in a well-defined frequency domain and watch its shape change. Olfaction has no agreed stimulus space in which to define the analogous filter, so 'the surround weakened' has no direct measurement. This is §3.2's missing-ensemble problem reappearing as a measurement problem.\n\n**Concentration is confounded.** Lowering concentration changes which receptors are above threshold, not just the SNR of a fixed set — because receptor affinities span orders of magnitude, so the pattern changes shape as well as scale. In vision, dimming the light scales all cone responses roughly together; in olfaction, diluting an odorant can change its perceived quality.\n\nA workable version: use the *temporal* domain, where the ensemble IS characterised. Predict that discrimination of correlated versus anti-correlated fluctuations should degrade at low concentration in a specific way, and that the frequency band carrying most information should shift downward as SNR falls — a direct translation of the whitening-to-pooling crossover into the domain where olfaction actually has measured statistics."
}
</script>
</x-predict>

## Where this leaves the comparison

The bulb has the retina's motifs — massive convergence, lateral inhibition, parallel output channels, adaptation — but each one has to be re-justified on an array with no metric, and each comes out differently:

- **Convergence** buys SNR *without* the acuity cost that dominates retinal design, and may be doing temporal rather than amplitude work.
- **Lateral inhibition** cannot be spatial and must be either globally non-specific or learned from odour statistics.
- **Parallel channels** implement a speed–accuracy split rather than a spatial-frequency or SNR split.
- **Plasticity** is not a refinement but a requirement, because the statistics are non-stationary.

Same parts list. Different machine.
