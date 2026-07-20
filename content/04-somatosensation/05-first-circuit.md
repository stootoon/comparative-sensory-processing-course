---
id: m04.s05
title: The first circuit — dorsal horn and cuneate nucleus
lede: Touch's first circuit is easy to overlook because the afferents look like they go straight to the brain. They do not, and what happens at the cuneate nucleus is more retina-like than its reputation suggests.
estimatedMinutes: 14
---

Tactile afferents enter the spinal cord and ascend in the dorsal columns to the **cuneate** and **gracile** nuclei in the medulla, where they make their first synapse. That is the first circuit, and it has been much less studied than retina or bulb.

<x-figure src="content/media/somato-dcml-gray759.jpg"
  caption="The dorsal column–medial lemniscal pathway. Afferents ascend ungapped to the medulla, synapse in the cuneate and gracile nuclei, cross, and ascend to thalamus. Note how far the first synapse is from the receptor — unusual among the modalities here, and a consequence of the sensor surface being distributed over the whole body rather than concentrated in an organ."
  credit="Henry Vandyke Carter, Gray's Anatomy (1918). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Gray759.png">
</x-figure>


## What is known

The cuneate nucleus is not a relay. It shows:

**Convergence** — several afferents onto each cuneate neuron, improving signal-to-noise at the cost of spatial resolution, exactly the retinal trade. Note the constraint on it: the convergence is *within* afferent class. Individual cuneate neurons receive input from afferents of a single type, and cells of different types occupy different territories in the nucleus [@kandel2021]. **§4.4's four-way filterbank therefore survives its first synapse intact** — the pooling that buys signal-to-noise is not allowed to undo the split that buys parallel temporal channels.

**Lateral inhibition** producing centre–surround receptive fields. Since the array is ordered and metric (§4.4), this is *spatial* lateral inhibition of exactly the kind §1.5 described — the surround is a genuine neighbourhood, and the predictive-coding reading applies directly.

**Descending modulation** from cortex, which is heavy, and which gates transmission according to task and expected contact. Another instance of the pattern from §1.6: a structure between sensor and cortex, receiving substantial feedback, gating rather than re-coding.

What that feedback carries is more specific than "modulation", and it is the detail that connects this section to §4.9. Fibres from cortical *motor* areas terminate in the dorsal column nuclei and deliver an efference copy of the motor commands generating the movement [@kandel2021]. So the prediction against which touch signals are compared (Lesson 5) is injected at the very first synapse, not assembled somewhere central — which is why an actively-generated touch and an identical passively-imposed one can be distinguished before either reaches thalamus.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The comparison that clarifies the bulb</div>
Touch is the cleanest test of the §3.5 argument, because it is the modality most similar to vision in array structure but most similar to olfaction in the intermittency of its input.

<strong>Touch has an ordered metric array, and its first circuit does spatial lateral inhibition.</strong> The surround is a real neighbourhood; neighbouring receptors report correlated skin deformation; subtracting a local average removes genuine redundancy.

<strong>Olfaction has neither, and cannot.</strong> §3.5's question — whether bulbar inhibition is globally non-specific or learned from odour statistics — simply does not arise here, because proximity does the work for free.

Three modalities with ordered arrays (vision, audition, touch) all implement spatial or spectral lateral inhibition in their first circuit. The one modality without an ordered array is the one where the mechanism is contested. <strong>That is about as clean a comparative argument as this course produces.</strong>
</x-callout>

## The other pathway

Running alongside is the **spinothalamic** system, carrying pain, temperature and affective touch. It differs from the dorsal column system in almost every respect: slower fibres, different receptors, first synapse in the dorsal horn rather than the medulla, and coarse rather than fine spatial resolution.

Two systems in the same tissue with entirely different design points is a useful thing to have. The discriminative system is optimised for spatial and temporal detail; the affective system for valence and slow signalling. **This is the taste-versus-smell contrast in miniature** — same sensory surface, different loss functions, opposite designs — and §5 develops the argument.

<x-mcq>
<script type="application/json">
{
  "id": "m04.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The cuneate nucleus does spatial lateral inhibition and nobody argues about it; the olfactory bulb does lateral inhibition and §3.5 is an argument about what it computes. Why does the dispute arise in one case and not the other?",
  "options": [
    {
      "text": "Cuneate proximity is a proxy for correlation, so a local wiring rule automatically connects the units whose signals are redundant. The bulb has no such proxy, so its inhibition must either be non-specific or learned from odour statistics — and those are different mechanisms with different costs.",
      "correct": true,
      "feedback": "Exactly, and the comparative argument is unusually clean: three modalities with ordered arrays — vision, audition, touch — all implement spatial or spectral lateral inhibition in their first circuit, and the one modality without an ordered array is the one where the mechanism is contested. Note what the wiring rule buys in the ordered case. 'Subtract a weighted average of your neighbours' [@srinivasan1982] is specifiable without knowing anything about the world, because geometry has already sorted the correlated units together. The bulb would have to discover which glomeruli are correlated, which is not a spatial fact, must be learned, and must be relearned when the environment changes."
    },
    {
      "text": "The bulb's inhibition is mediated by granule cells with no spiking output, so the circuit is harder to characterise experimentally.",
      "correct": false,
      "feedback": "Correct under the assumption that the dispute is methodological — an access problem rather than a computational one. Access is genuinely worse in the bulb. But the dispute would remain even with perfect recordings, because the question is what the inhibition *should* be doing, and that is undetermined until you know whether proximity means anything. Compare the invertebrate case, where the antennal lobe's circuit is well characterised and turns out to implement global normalisation scaled by total ORN activity [@olsen2010] — good access, and it settled the question rather than dissolving it."
    },
    {
      "text": "Touch's input is intermittent and olfaction's is continuous, so a subtractive surround has a stable baseline to work against in the bulb and not in the cuneate.",
      "correct": false,
      "feedback": "Correct under the assumption stated, which is backwards on both counts. §4.2 makes intermittency touch's first structural similarity to olfaction — both are modalities of discrete encounters separated by silence, and vision and audition are the continuous ones. Worth noticing that this shared property is precisely what makes touch the useful control: it resembles vision in array structure and olfaction in input intermittency, which isolates the array as the variable."
    },
    {
      "text": "The cuneate is four synapses from cortex and the bulb is two, so the bulb has less depth in which to implement a decorrelating computation.",
      "correct": false,
      "feedback": "Correct under the assumption that decorrelation requires depth. It does not — the retina decorrelates at its first synaptic layer, and the cuneate's own centre–surround is built in one step. Depth is about how much must be computed before the signal is useful (§4.6), not about whether a subtraction is available. Conflating pathway length with computational capacity is a recurring error the course flags in the thalamus discussion too."
    }
  ]
}
</script>
</x-mcq>
