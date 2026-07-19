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

## Hyperacuity from slow elements

The second import from this system concerns the **jamming avoidance response**. When two fish with similar discharge frequencies meet, each shifts its frequency away from the other's, and to do so it must resolve phase differences of well under a microsecond.

No individual neuron has anything like that precision — spike timing jitter is in the millisecond range. The resolution comes from **pooling across a large population**, with the behavioural threshold improving as the square root of the number of contributing units.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A solved precedent for olfaction's speed problem</div>
§3.3 posed the problem: olfactory receptor neurons have ~100 ms time constants, yet mice discriminate odour correlations up to 40 Hz [@ackels2021]. How does a slow sensor resolve a fast signal?

The jamming avoidance response is the same problem, <strong>solved, with the quantitative analysis done</strong>. Sub-microsecond behavioural precision from millisecond neurons, by population pooling.

What the electrosensory case supplies that the olfactory case lacks is the <em>analysis</em>: how many units are needed, how the improvement scales, and — critically — how correlated noise caps it. §3.3 flagged that the √n law assumes independence and that receptor neurons of one type sample the same air. The electric fish literature has confronted exactly this, and its treatment transfers.
</x-callout>
