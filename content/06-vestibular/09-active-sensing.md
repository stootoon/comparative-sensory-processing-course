---
id: m06.s09
title: Active sensing and the motor loop
lede: Vestibular nuclei cancel self-generated head motion but not passive motion. It is the most precisely localised instance of "subtract the prediction" in the mammalian brain, and the mechanistic archetype the olfactory silent-neuron account needs.
estimatedMinutes: 14
---

Vestibular is unusual: it is a sense of self-motion, and the animal generates most of its own self-motion. The signal is dominated by reafference.

## The cancellation result

Here is the finding that makes this section the most important in the module for olfaction.

Vestibular nucleus neurons respond robustly to **passively applied** head rotation. The same neurons respond far less — often barely at all — to **actively generated** head rotation of identical amplitude and velocity [@cullen2012].

The sensor reports both identically; the afferents fire the same way. The cancellation happens centrally, at the first central synapse, and it depends on the movement being **self-generated and matching the motor command**. Perturb an active movement unexpectedly and the response returns.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The archetype, and what it hands olfaction</div>
This is the cleanest localised instance of predictive subtraction in the mammalian brain, and it is exactly the mechanism the olfactory common-feature-subtraction account invokes.

<strong>What vestibular establishes:</strong>
<ul>
<li>The subtraction happens <strong>early</strong> — at the first central synapse, not in cortex.</li>
<li>It is <strong>specific</strong> — cancellation only when the sensory consequence matches the prediction.</li>
<li>The result is a neuron that appears <strong>unresponsive</strong> to a stimulus it is demonstrably encoding.</li>
<li>The prediction comes from an <strong>efference copy</strong> combined with a forward model of head dynamics.</li>
</ul>

<strong>The olfactory translation.</strong> Sniff-generated and background-odour-generated activity are both predictable. A bulb that subtracts them contains neurons that look silent. That is the common-feature-subtraction account — and vestibular shows the mechanism is real, early, and specific.

<strong>What to measure, borrowed directly:</strong> the vestibular experiment works by comparing <em>active</em> and <em>passive</em> delivery of an identical stimulus. The olfactory version is to deliver an identical odour transient either sniff-triggered (self-generated) or externally timed (passive), and ask whether apparently-silent bulbar neurons respond to the passive version. If they do, they were not silent — they were subtracting.
</x-callout>

## The internal model

The cancellation requires the brain to predict the sensory consequences of a motor command, which means a **forward model** of head dynamics.

<x-figure src="content/07-proprioception/figures/forward-model.js"
  caption="A forward model correcting a delayed, noisy sensor. Switch the model off and the estimate inherits both the lag and the noise. This is the object vestibular cancellation requires, and the same one §12 argues olfaction needs for plume transport — with the crucial difference that head dynamics are stationary and turbulence is not.">
</x-figure>


This is the same computational object as the one in motor control [@wolpert1995], and it is the same object §12 argues olfaction needs for plume transport. The vestibular version is easier in one crucial respect: **the forward model of head dynamics is stationary.** Heads obey Newtonian mechanics that do not change. Turbulent transport does not have that property, which is again why the olfactory inference problem is strictly harder (§6.2).
