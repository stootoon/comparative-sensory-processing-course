---
id: m09.s02
title: Electroreception — cancelling the predictable
lede: The animal generates its own signal, so it knows exactly what to expect. That makes the electrosensory lobe the clearest circuit-level implementation of "subtract the prediction" in all of neuroscience — and the archetype the olfactory silent-neuron account needs.
estimatedMinutes: 18
---

Weakly electric fish generate an **electric organ discharge** and sense the resulting field with receptors distributed over the body. Objects with conductivity different from water distort the field, casting an "electric image" on the skin.

<x-figure src="content/media/apteronotus-black-ghost-knifefish.jpg"
  caption="Apteronotus albifrons, the black ghost knifefish. The undulating ventral fin allows it to swim forwards or backwards while holding the body rigid — which matters, because a rigid body keeps the geometry of its self-generated electric field constant and therefore predictable."
  credit="Clinton & Charles Robertson. CC BY 2.0."
  source="https://commons.wikimedia.org/wiki/File:Apteronotus_albifrons.jpg">
</x-figure>


## Active sensing with a known probe

This is what makes the system uniquely tractable. The animal produces the carrier, so it knows precisely what the field should look like in an empty tank. Everything else is an object.

Two receptor classes: **ampullary** receptors, tuned to low frequencies and used for passive detection of external fields, and **tuberous** receptors, tuned to the animal's own discharge frequency and used for active electrolocation.

<x-figure src="content/media/mormyromast-tuberous-electroreceptor.png"
  caption="A mormyromast — a tuberous electroreceptor, tuned to the animal's own discharge. Tuberous and ampullary receptors sit in the same skin and serve entirely different jobs: one reads the self-generated probe for active electrolocation, the other listens passively for external fields. Two receptor classes, one surface, split by whether the signal is self-caused."
  credit="Ian Alexander. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Mormyromast_diagram.svg">
</x-figure>


The electric image is intrinsically **blurry** — the field spreads, so a small object produces a broad, low-contrast pattern. Spatial acuity is poor by visual standards, and much of what the system does is recovering information from a badly smeared signal.

<x-figure src="content/media/electric-image-scene-analysis.jpg"
  caption="Field lines around a weakly electric fish, and the electric image an object casts on the skin. Note how broad and low-contrast the image is: like the pit organ (§9.4), this is a sensor with poor optics whose usable acuity is a computational achievement."
  credit="Chiswick Chap, after Lewicki, Olshausen, Surlykke & Moss. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Scene_analysis_in_electroreception_coloured.jpg">
</x-figure>


## The negative image

Here is the result that earns this section its length.

<x-figure src="content/media/eod-waveform-paramormyrops.png"
  caption="Electric organ discharge waveforms recorded from two individual mormyrid fish (Paramormyrops). The waveform is stereotyped and self-generated, which is precisely why its sensory consequences are predictable — and therefore why they can be learned and subtracted."
  credit="Cdh8 (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Electric_organ_discharge_waveform_for_Paramormyrops_hopkinsi.png">
</x-figure>


The **electrosensory lateral line lobe** is a cerebellum-like structure receiving both electroreceptor input and a large parallel-fibre input carrying efference copy, proprioceptive signals, and prior electrosensory activity.

<x-figure src="content/media/oa-ell-circuit.jpg"
  caption="The electrosensory lateral line lobe. Electroreceptor input arrives on one pathway; a broad, delayed parallel-fibre input carrying efference copy and prior activity arrives on another. Anti-Hebbian plasticity at the parallel-fibre synapses builds the negative image. Compare the bulb: granule cells carrying massive cortical feedback onto mitral cells is the same architecture, which is why §9.6 proposes the timecourse experiment."
  credit="Hofmann V, Chacron MJ (2019). CC BY 4.0."
  source="https://doi.org/10.3389/fnint.2019.00052">
</x-figure>


Principal cells in this structure **learn to predict and subtract** the reafferent input — the part of the signal caused by the animal's own discharge and its own movements. The learning uses anti-Hebbian plasticity at parallel-fibre synapses, and it builds what is called a **negative image**: an internally generated pattern that cancels the expected input.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The template for the silent-neuron account</div>
This is the most complete circuit-level account of predictive subtraction anywhere, and it is what §3.10's common-feature-subtraction argument implicitly assumes exists.

<strong>What the electrosensory case establishes:</strong>
<ul>
<li>The prediction is <strong>learned</strong>, not hard-wired — the negative image builds over minutes when a new predictable input is introduced.</li>
<li>The plasticity rule is <strong>anti-Hebbian</strong> at a broad, delayed parallel-fibre input — pairing predicts <em>depression</em>, which is what a subtractive predictor requires.</li>
<li>The predictor is <strong>separate from the driver</strong>: sensory drive arrives on one pathway, the prediction on another.</li>
<li>A successfully predicting neuron <strong>goes quiet</strong>.</li>
</ul>

<strong>The olfactory translation is direct.</strong> Granule cells receive massive cortical feedback and inhibit mitral cells (§3.5, §3.6) — a broad, delayed input onto the principal cells, exactly the architecture the negative image needs. Is the bulb a cerebellum-like structure?

<strong>The experiment the electrosensory literature hands over:</strong> introduce a novel constant background odour and measure the <em>timecourse</em> over which apparently-silent bulbar neurons become silent. The negative-image account predicts a build-up over minutes, dependent on plasticity, and reversible when the background is removed. A purely adaptive account predicts a much faster, plasticity-independent timecourse. <strong>These are distinguishable.</strong>
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m09.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The negative image is built by an *anti*-Hebbian rule at the parallel-fibre synapses: pairing parallel-fibre activity with principal-cell spiking produces depression. Why must the sign be that way round, given that the parallel fibres drive the principal cell?",
  "options": [
    {
      "text": "The learned signal has to be subtracted from the sensory drive, and the only error signal available is the principal cell's own residual activity — so a synapse must weaken exactly when it fires alongside a residual it failed to cancel.",
      "correct": true,
      "feedback": "This is the argument, and it is worth seeing that the sign is forced rather than chosen. The principal cell's output *is* the error. If a parallel fibre is active whenever the cell still has uncancelled drive, that fibre carries information about the uncancelled part, and the way to use it is to make its net effect more negative. Hebbian potentiation would amplify the very thing being cancelled — a positive feedback loop on the residual. Note the corollary: the rule is a gradient-descent step on squared residual, which is why the negative image converges rather than oscillating."
    },
    {
      "text": "Anti-Hebbian rules prevent runaway potentiation, which any circuit with a large excitatory input onto a spiking cell requires for stability.",
      "correct": false,
      "feedback": "Correct under the assumption that the constraint being satisfied is dynamical stability, and stability is a genuine problem for a cell receiving tens of thousands of parallel fibres. But stability is generic: it would be satisfied equally by weight normalisation, by a hard ceiling, or by homeostatic scaling, none of which build a negative image. The rule has to do more than not explode; it has to converge on the *particular* pattern that cancels the reafference, and only an error-driven sign does that."
    },
    {
      "text": "The parallel-fibre pathway is inhibitory, so a rule that strengthens it would be described as anti-Hebbian anyway — the label is about the net effect on the principal cell, not about the learning rule.",
      "correct": false,
      "feedback": "Correct under the assumption that the sign of the synapse and the sign of the plasticity rule are the same statement, which is a natural conflation and worth untangling. They are independent: parallel fibres are excitatory onto the principal cells, and the rule applied to them is depressive. The cancellation is achieved by *withdrawing excitation* that would otherwise be present, not by recruiting inhibition — which matters for the olfactory translation, since the bulb's granule-cell pathway is inhibitory and would therefore need the opposite rule sign to implement the same computation."
    },
    {
      "text": "Because the prediction arrives delayed relative to the sensory input, and delayed pairing is depressive under standard spike-timing rules.",
      "correct": false,
      "feedback": "Correct under the assumption that the sign is inherited from the timing rather than from the function, and the timing fact is right — the parallel-fibre input is broad and delayed, which is what lets it span the reafferent waveform. But timing sets *which* delay gets modified, not whether modification is up or down. A system with the same delays and a potentiating rule would learn a positive image and fail. The delay supplies the basis functions; the sign supplies the objective."
    }
  ]
}
</script>
</x-mcq>

## Hyperacuity from slow elements

The second import from this system concerns the **jamming avoidance response**. When two fish with similar discharge frequencies meet, each shifts its frequency away from the other's, and to do so it must resolve phase differences of well under a microsecond.

No individual neuron has anything like that precision — spike timing jitter is in the millisecond range. The resolution comes from **pooling across a large population**, with the behavioural threshold improving as the square root of the number of contributing units.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A solved precedent for olfaction's speed problem</div>
§3.3 posed the problem: olfactory receptor neurons have ~100 ms time constants, yet mice discriminate odour correlations up to 40 Hz [@ackels2021]. How does a slow sensor resolve a fast signal?

The jamming avoidance response is the same problem, <strong>solved, with the quantitative analysis done</strong>. Sub-microsecond behavioural precision from millisecond neurons, by population pooling.

What the electrosensory case supplies that the olfactory case lacks is the <em>analysis</em>: how many units are needed, how the improvement scales, and — critically — how correlated noise caps it. §3.3 flagged that the √n law assumes independence and that receptor neurons of one type sample the same air. The electric fish literature has confronted exactly this, and its treatment transfers.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m09.s02.p1",
  "contentRev": 1,
  "prompt": "The √n story is usually told and then dropped. Push it. Suppose each of n electroreceptors reports the phase with independent noise of variance σ², plus a shared noise term of variance c that is common to all of them — a fluctuation in the fish's own discharge, or a global change in water conductivity. Work out what happens to the pooled estimate as n grows, and say what the result implies for a system trying to buy precision by adding receptors.",
  "placeholder": "What does the variance of the pooled average converge to, and what does that mean for the design?",
  "reveal": "**The algebra.** Averaging n readings with independent noise σ² and shared noise c gives a pooled variance of σ²/n + c. The first term vanishes; the second does not. As n → ∞ the precision does not improve without bound — it saturates at c, and the standard error floors at √c.\n\n**The consequence for design.** There is a receptor count beyond which adding receptors is nearly free of benefit: once σ²/n has fallen well below c, the animal is paying metabolic and wiring cost for nothing. So the correlated-noise term does not merely weaken the √n law, it sets an *optimal array size*, and that size depends on c rather than on how much precision the task would like.\n\n**Why the correlation is not incidental.** The fish's discharge is the common cause of every tuberous receptor's input. Anything that perturbs the discharge perturbs all of them together, which is exactly the structure that produces c. A system whose receptors share a stimulus source cannot assume independence, and the electrosensory case is where that has been taken seriously quantitatively.\n\n**The olfactory transfer, and it is the part §3.3 needs.** Receptor neurons of one type sample the same air, in the same nostril, behind the same sniff. Sniff-to-sniff variation in flow rate, in mucus thickness, in the arrival time of a filament — all of these are shared across the ~1000 neurons expressing a given receptor, so they enter as c and not as σ²/n. The naive calculation says 1000-fold convergence buys a factor of ~32 in SNR; the corrected one says it buys that only up to the point where shared sampling noise dominates, and beyond that the convergence must be paying for something else.\n\n**Which sharpens the experiment.** If convergence were an SNR device operating in the σ²/n regime, discrimination should improve measurably when the number of converging neurons is increased and degrade when it is reduced. If the system is already at the c floor, it should not — and §10.2 offers an independent reason to expect exactly that, since convergence ratios vary more than twenty-fold between flies and mice without a corresponding change in the noise problem."
}
</script>
</x-predict>
