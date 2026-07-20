---
id: m08.s05
title: The first circuit — the dorsal horn
lede: A circuit that sorts by fibre class, builds two output channels with deliberately different pooling, and contains a gain stage set from the brain. Gate control was the influential account of the last of these, and it was only partly right.
estimatedMinutes: 14
---

The dorsal horn is nociception's retina — the first place the array's output is transformed rather than merely relayed, and the place where the module's design decisions become visible as circuitry.

Applying the course's test: does it do more than pass signals on? It sorts afferents by class into distinct laminae. It constructs at least two output channels with different convergence properties. It contains inhibitory interneurons whose gain is set descendingly. It is the site of a plasticity that changes the system's transfer function for weeks. That is a circuit by any standard the course has applied elsewhere.

<x-figure src="content/08-nociception/figures/dorsal-horn.js"
  caption="Laminar sorting, wide-dynamic-range convergence, and the gate — with the descending input the 1965 gate-control circuit did not contain. Step through the three views. The claim the figure is making is that the dorsal horn's two output channels are not redundant copies: one preserves what the other deliberately pools, and neither alone is the answer.">
</x-figure>


## Sorting, and what it costs to sort

Primary afferents terminate in an orderly laminar arrangement. Aδ and C nociceptors terminate superficially in laminae I and II; large-diameter Aβ mechanoreceptors terminate deeper in laminae III and IV; lamina V neurons receive Aβ and Aδ directly and, via dendrites reaching into lamina II, C-fibre input as well [@kandel2021].

So the array's ordering survives into the circuit along **two** axes — body position across the mediolateral and segmental extent, and afferent class in depth. The second is the one worth dwelling on, because it is a design choice that vision makes too. The retina's inner plexiform layer stratifies ON and OFF bipolar terminals into distinct sublaminae, so that a ganglion cell's dendritic depth determines what it listens to (§1.5). **Sorting by channel identity in depth is a general solution to the wiring problem of selective connectivity**, and it appears in two circuits with nothing else in common.

The cost is that a neuron's depth commits it. A lamina I cell cannot easily change its mind about listening to Aβ afferents — and §8.10 will note that when it does, after nerve injury, the result is allodynia.

## Two output channels, deliberately unequal

Lamina I contains **nociceptive-specific** projection neurons, driven by Aδ and C input and not by innocuous stimuli. Lamina V contains **wide-dynamic-range** neurons, responding in a graded way to both innocuous and noxious mechanical stimulation, and pooling cutaneous with visceral input [@kandel2021].

The obvious question is why build both, and the obvious wrong answer is that one is a cruder version of the other.

**What the nociceptive-specific channel buys.** A clean detection statistic. A cell that fires only for noxious input has a likelihood ratio that is easy for downstream to interpret: activity means damage, with no confusion from ordinary contact. Under §8.1's cost matrix that is exactly the channel you want driving the fast protective response.

**What the wide-dynamic-range channel buys.** Two things, and they are worth separating. First, a **graded intensity estimate**: a system with only a binary detector cannot report how bad an injury is, and the management decisions of §8.1's slow deadline need that. Second, and less obviously, **context**. A neuron that sees both the innocuous and noxious input from a region can, in principle, report noxious input *relative to* the ordinary tactile traffic in that region, which is a better statistic than an absolute one for a body part that is being used.

**What it costs.** The pooling discards the source. A WDR neuron's output cannot say whether it was driven by skin or gut, or by a touch or a burn — which is referred pain (§8.4) and, when the balance shifts after injury, allodynia. That is a real cost paid for a real benefit, and the honest statement is that the dorsal horn runs a specific channel and a pooled channel in parallel precisely because neither is adequate alone.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Specificity versus pattern, and why §5.4 settles the shape of it</div>
Nociception has its own version of taste's labelled-line dispute, and it has been running for longer.

<strong>Specificity theory</strong> holds that pain has dedicated receptors, dedicated fibres and dedicated central neurons — a labelled line for damage. <strong>Pattern theory</strong> holds that pain is signalled by the pattern of activity across afferents that also serve other functions, with intensity and temporal structure carrying the message.

The dispute has the same shape as taste's, and §5.4's lesson applies directly: <strong>the question is mis-posed until you specify the stage.</strong>

<strong>At the periphery, specificity is strong.</strong> Nociceptors are molecularly distinct, express distinct channel complements, and their loss is selective — <em>SCN9A</em> loss-of-function abolishes pain while sparing touch, temperature, proprioception and tickle [@kandel2021]. That is close to a clean dissociation.

<strong>At the first synapse, pattern wins for one channel and specificity for the other.</strong> Lamina I is specific; lamina V is explicitly not. Both exist, so neither theory describes the dorsal horn.

<strong>Centrally, the dispute dissolves into a different one.</strong> No cortical region is dedicated to pain; many are activated, and the affective and discriminative components dissociate under lesions (§8.7).

<strong>The lesson is the one taste taught.</strong> "Is it labelled lines or a pattern code?" is not a question about a modality. It is a question about a stage, and asking it stage by stage turns an unresolvable argument into a series of answerable ones. Nociception is the second independent instance of that lesson, which is what makes it a confirmation rather than a repetition.
</x-callout>

## The gate: influential, and only partly right

In 1965 Melzack and Wall proposed that the relative balance of activity in large-diameter non-nociceptive and small-diameter nociceptive afferents controls transmission through the dorsal horn — large fibres exciting an inhibitory interneuron that closes a "gate" on the projection neuron, small fibres inhibiting the interneuron and opening it [@kandel2021].

The course's rule is to say what survives and what does not.

**What survives.** The core claim that non-nociceptive input can suppress nociceptive transmission through shared inhibitory machinery in the superficial dorsal horn is correct and well established. It explains why rubbing a knock helps, why shaking a burnt hand helps, and it motivated transcutaneous electrical nerve stimulation and spinal cord stimulation, both of which work and both of which show the segmental specificity the theory predicts — you do not shake your left leg to relieve pain in your right arm [@kandel2021].

**What does not survive.** The specific circuit as drawn in 1965 is wrong in its details, the interaction is not confined to the first synapse but occurs at many supraspinal sites, and — most importantly for this module — the gate's setting is not determined by afferent balance. **It is dominated by descending control from the brainstem**, which the original model did not contain (§8.9).

**Why it was influential anyway, and what to take from that.** Gate control's real contribution was to reframe the question. Before it, pain was treated as a transmission problem: a signal travelling from periphery to brain, with the interesting variation in the periphery. Gate control asserted that **the signal is modulated at the first synapse by things other than the signal**, which made the descending systems, the placebo effect and stress analgesia into phenomena requiring circuit explanations rather than psychological hand-waving.

That is worth stating precisely because it is a pattern the course should recognise. A theory can be wrong in its mechanism and right in its reframing, and the reframing can be the larger contribution. §1.6's decomposition of thalamus into services is the same kind of move — it does not settle what LGN does, it changes what question you ask.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s05.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The dorsal horn builds a nociceptive-specific channel and a wide-dynamic-range channel from the same afferents. What is the best normative justification for running both?",
  "options": [
    {
      "text": "They answer different questions — 'is this damage?' needs a clean likelihood ratio uncontaminated by touch, while 'how bad, and in what context?' needs a graded estimate that sees the innocuous traffic too. Neither statistic can be recovered from the other.",
      "correct": true,
      "feedback": "This is the argument, and the non-recoverability clause is what makes it more than a restatement. A binary detector cannot be integrated up into a graded severity estimate, and a pooled graded signal cannot be thresholded to recover which input drove it. Two irrecoverable statistics from one input is the general condition under which parallel channels are worth their cost, and §8.8 shows the same logic operating on the ascending tracts. Note also what this predicts: the two channels should project differently, and they do."
    },
    {
      "text": "Redundancy — a system whose misses are catastrophic should duplicate its critical pathway so that damage to one leaves the other intact.",
      "correct": false,
      "feedback": "Correct under the assumption that the asymmetric loss should buy redundancy, which is a reasonable inference from §8.1 and is probably true to some degree. But it predicts two *similar* channels, and these are deliberately dissimilar — one specific, one pooling across submodality and across viscera and skin. Redundancy is a poor explanation for a duplication whose two copies have opposite properties. It also fails to explain why they project to different targets."
    },
    {
      "text": "Speed — the specific channel is fast and the pooled channel is slow, matching the two deadlines of §8.1.",
      "correct": false,
      "feedback": "Correct under the assumption that the specific/pooled split is the deadline split of §8.1 seen at the first synapse. It is a natural guess and it is not right: the deadline split lives in the periphery, in Aδ against C conduction velocity, and both dorsal horn channels receive both fibre classes. Two different splits are operating in the same structure, which is exactly the confusion §4.8's taxonomy exists to prevent — this is a difference in what is computed, not in when it arrives."
    },
    {
      "text": "Anatomical convenience — lamina V neurons extend dendrites into lamina II and therefore receive C-fibre input incidentally, so the wide-dynamic-range property is a consequence of geometry rather than a design.",
      "correct": false,
      "feedback": "Correct under the assumption that mechanism explains function, and the anatomical fact is accurate. But it inverts the explanation: dendritic geometry is under developmental control and could have been otherwise, so 'the dendrites reach lamina II' is the implementation of the pooling rather than an accident that produced it. This course keeps asking why a system would build a given mechanism, and the answer is never that the mechanism happened to be there."
    }
  ]
}
</script>
</x-mcq>

## Chemistry as a second timescale

One feature of the dorsal horn has no analogue in the retina or the bulb, and it belongs here rather than in §8.10.

Nociceptive afferents release glutamate, like every primary sensory neuron. Many also release neuropeptide cotransmitters — substance P, CGRP — from separate dense-core vesicles, under different release conditions from the glutamate vesicles [@kandel2021]. Substance P produces slow excitatory postsynaptic potentials that prolong the glutamate depolarisation.

Read as signal processing, this is **a synapse with two output timescales from one input**, and the slow one is gated on intensity — peptide release requires strong or sustained stimulation, so the slow channel engages only when the fast one has been driven hard. That is an intensity-dependent switch into a longer integration regime, built into the first synapse.

The normative reading follows §8.2's persistence argument. Brief, weak input reports a transient event and should produce a transient response. Strong, sustained input reports a state that will persist, and the response should persist with it. A synapse that changes its own time constant as a function of how hard it is driven is a reasonable implementation of that policy — and it is also, via NMDA-receptor-dependent wind-up, the entry point to central sensitization (§8.10). The same machinery again: the rational adaptation and the pathology share a mechanism.
