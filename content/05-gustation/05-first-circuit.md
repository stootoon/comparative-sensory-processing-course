---
id: m05.s05
title: The first circuit — geniculate ganglion and NST
lede: With five channels and no metric, there is nothing to decorrelate and no neighbourhood to inhibit. Taste's first circuit is where you see what a first circuit does when the usual jobs do not apply.
estimatedMinutes: 11
---

Taste receptor cells synapse onto afferent fibres of the geniculate, petrosal and nodose ganglia, which project to the **nucleus of the solitary tract** in the medulla. That is the first central relay.

<x-figure src="content/media/gustatory-pathway-neuroanatomy.jpg"
  caption="The gustatory periphery: chorda tympani, greater superficial petrosal and glossopharyngeal nerves carrying from different tongue regions to the geniculate and petrosal ganglia, and on to the nucleus of the solitary tract with a rough topography by nerve of origin — a topography by body region, not by taste quality."
  credit="Robin F. Krimm. CC BY 2.0."
  source="https://commons.wikimedia.org/wiki/File:Basic_neuroanatomy_of_the_gustatory_system.jpg">
</x-figure>


## What is conspicuously absent

Set NST beside the other first circuits and the absences are the interesting part.

**No decorrelation worth the name.** With five broadly independent channels there is little redundancy to remove. The retina's central problem — massive correlation between neighbouring inputs — simply does not arise.

**No spatial lateral inhibition.** There is no metric on the array, so no neighbourhood (§5.4). And unlike olfaction, there is no incentive to construct one in feature space either, because with five channels there is not much structure to sharpen.

**No convergence for SNR on the olfactory scale.** Taste operates at high concentrations — millimolar for sugars — so shot noise is not the binding constraint. Convergence exists but is modest.

<x-callout class="x-callout is-key">
<div class="x-callout-title">What a first circuit does when the standard jobs vanish</div>
Four first circuits, four different answers, and taste completes the set:

<strong>Retina:</strong> decorrelate. Input is redundant across a metric array; subtract a local prediction.<br>
<strong>Cochlear nucleus:</strong> decompose. One waveform carries several kinds of information; split into specialised streams.<br>
<strong>Olfactory bulb:</strong> converge for SNR, then something contested — because there is no metric to make "surround" meaningful.<br>
<strong>NST:</strong> mostly <em>route</em>. Integrate with visceral and post-ingestive signals, and pass to systems that will act.

<strong>There is no universal first-circuit operation.</strong> Each does what its input statistics and its consumer demand. Any claim that early sensory processing "does X" should be checked against all four — and the fact that taste's first circuit largely does not do X is the evidence that X was never fundamental.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout claims that taste's first circuit not doing decorrelation is evidence that decorrelation was never a fundamental property of early sensory processing. A sceptic replies that this is like concluding cars do not need brakes because a stationary car does not use them. What is the best response?",
  "options": [
    {
      "text": "The analogy fails because decorrelation was proposed as a principle governing what first circuits are *for*, and a first circuit facing uncorrelated input has no redundancy to remove — the condition for the principle to apply is absent, not merely unexercised.",
      "correct": true,
      "feedback": "This is the right response, and it turns on the difference between a capacity and a rationale. Efficient coding does not say circuits decorrelate; it says they remove redundancy when redundancy is present, which is the same conditional structure as the SNR reversal in §1.5. Taste supplies the low-redundancy regime, and the principle correctly predicts nothing happens there. That is the principle working, not failing — but it does refute the stronger, commonly asserted claim that decorrelation is what early circuits do."
    },
    {
      "text": "The sceptic is right that a single negative case cannot refute a general principle, but taste is one of four first circuits and the other three do different things too.",
      "correct": false,
      "feedback": "Partly correct, and the enumeration in the callout is the section's actual argument. But conceding the sceptic's framing gives away too much: the point is not that we have accumulated enough counterexamples, it is that the principle was conditional all along and taste satisfies its null condition. Counting cases is a weaker argument than showing the antecedent is false."
    },
    {
      "text": "Taste does have correlated channels — sweet and umami share a receptor subunit — so the premise that there is nothing to decorrelate is wrong.",
      "correct": false,
      "feedback": "Correct under the assumption that shared molecular machinery implies correlated activation, and there is a genuine partial correlation between sweet and umami channels. But the magnitude is nothing like the correlation between neighbouring photoreceptors, which is what makes retinal decorrelation worth a dedicated circuit. A weak correlation among five channels does not repay the machinery, and 'is there redundancy' is a quantitative question rather than a binary one."
    },
    {
      "text": "Decorrelation could be happening but be invisible in NST recordings, since the relevant redundancy may be between taste and the visceral afferents NST also receives.",
      "correct": false,
      "feedback": "Correct under the assumption that redundancy should be assessed across the full input to a circuit rather than within one modality — an interesting reframing, and not obviously wrong, since NST really is a convergence point. But taste and gut signals are informative about the same latent variable at different delays, which makes their relationship predictive rather than redundant. Subtracting one from the other would discard the teaching signal that §5.2 identifies as taste's greatest asset."
    }
  ]
}
</script>
</x-mcq>

## What NST does instead

NST is a **visceral integration hub**. It receives taste input alongside gut, cardiovascular and respiratory afferents, and it is where taste first meets the internal state that will modulate it.

That is the right design given the consumer. The decision "should I swallow this" depends on nutritional state as much as on chemistry — a sugar solution is more attractive when hungry, and salt more attractive when sodium-depleted. **Modulating early is efficient when the modulation is going to happen anyway**, and there is no reason to compute a state-independent representation first.

Compare olfaction, which also shows strong state-dependent modulation at its first circuit (§3.10). Two chemosenses, both modulating early by internal state, and for the same reason: their outputs feed appetitive decisions where state is part of the question rather than a nuisance.

## Pathway note

In rodents, NST projects to the **parabrachial nucleus** and then to thalamus. In primates, the parabrachial relay is largely bypassed and NST projects more directly to VPMpc. A species difference in pathway depth within a single modality — a useful reminder that "how many synapses" is not a fixed property of a sense.
