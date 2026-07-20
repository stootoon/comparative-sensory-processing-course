---
id: m07.s11
title: Normative synthesis and the olfaction hook
lede: The modality where the only coherent normative account is state estimation for control — and where perception looks like a by-product. It is the sharpest challenge to how olfaction is usually studied.
estimatedMinutes: 12
---

## Scoring the theories

**What works.** State estimation is the right frame and it is well supported [@wolpert1995]. The recoding into global limb variables at Clarke's nucleus is the course's best demonstration that the code serves the consumer [@bosco2001] — though §7.5 records the caveat that the limb's mechanical linkages supply part of the transformation for free, so the neural contribution is real but not cleanly quantified [@bosco2003]. The low intrinsic dimensionality of natural movement is measured and makes the transformation tractable.

**What is unusual.** Efficient coding barely features. Nobody derives spindle tuning from the statistics of natural movement the way retinal filters are derived from image statistics — and the reason is that proprioception is not obviously trying to transmit information about its input faithfully. It is trying to support control.

That is itself a finding. **A modality can have a good normative account with no efficient-coding content at all**, and §0.1's insistence on distinguishing the three stances earns its keep here.

<x-order>
<script type="application/json">
{
  "id": "m07.s11.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 61,
  "prompt": "Order the stages by which a joint rotation becomes a corrected estimate of limb state. Two of these stages are not neural computations at all — identify which as you go.",
  "items": [
    { "id": "a", "text": "Joint rotation changes muscle lengths through the skeleton's mechanical linkages." },
    { "id": "b", "text": "Spindle afferents fire at a rate jointly determined by length, its derivative, and gamma drive." },
    { "id": "c", "text": "Clarke's nucleus neurons report global limb variables rather than individual muscle lengths." },
    { "id": "d", "text": "The cerebellum combines the ascending signal with an efference copy to predict current limb state." },
    { "id": "e", "text": "Prediction error corrects the estimate and updates the model." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "**Stage (a) is pure mechanics, and part of stage (c) is too.** That is the caveat §7.5 insists on. Because the limb's segments are mechanically linked, muscle lengths are already correlated with limb-axis variables before any neuron acts, so the skeleton supplies some of the transformation for free. Bosco and Poppele decoupled limb geometry from endpoint position to ask how much, and about half of 89 cells changed their response pattern [@bosco2003]. The split remains uncleanly quantified. The transformation is real and early [@bosco2001], which is what the course's argument requires — but 'the nervous system recodes into limb coordinates' credits neurons with work the skeleton is doing some of.\n\n**Stage (b) is where the confound enters and stage (d) is where it is resolved**, using a signal the system has privileged access to because it issued it.\n\n**The general moral, and it is the one to carry to olfaction.** Reading the chain top to bottom, the computation is distributed across mechanics, transduction, an early recoding, and a central predictor — and only two of the five stages are unambiguously neural inference. Before attributing any olfactory computation to bulbar circuitry, ask what the periphery contributed. The uncomfortable answer for olfaction is that it has almost no accessory structure doing this kind of work (§6.3), so the neural share of the total is larger there than anywhere else in the course. That is a systematic bias in every cross-modality comparison of circuit complexity."
}
</script>
</x-order>

## Datasheet row

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Proprioception scores high on active control and forward model and middling elsewhere — a profile unlike any other modality here. Note that it and vestibular are the two with forward models available, which is the row §13 argues olfaction most needs to borrow from.">
</x-figure>


| Property | Proprioception |
|---|---|
| Array ordering | **ordered by body, not by the estimated variable** |
| Dimensionality | joint space ~20-D; natural ensemble ~3-D |
| Measurement | **confounded** — length, velocity and gamma drive |
| Efferent control of sensor | **yes, direct** (gamma drive) |
| First circuit computes | **coordinate transformation** |
| Central representation | cerebellum, as a forward model |
| Thalamic relay | conscious route yes; **cerebellar route bypasses** |
| Dominant consumer | a controller, not a percept |

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. The consumer determines the code — demonstrated, not argued.</strong> Clarke's nucleus recodes muscle lengths into limb variables by the second synapse, because that is what the cerebellum wants. <strong>Who consumes the olfactory code, and what basis does it want?</strong> If navigation, the wanted variables are bearing and distance — not molecular identity.

<strong>2. The first circuit might be transforming coordinates, not decorrelating.</strong> The bulbar debate has been about decorrelation. Proprioception raises a different job for a first circuit, and it predicts the same thing §3.8 predicted independently: bulbar neurons tuned to plume-derived spatial variables.

<strong>3. Perception may be the by-product.</strong> A proprioception literature built on conscious position sense would have missed the cerebellum entirely. Olfactory research is dominated by discrimination and identification because those are what psychophysics measures. If the dominant consumer is navigation, that literature may be studying the side effect.

<strong>4. Ordering has three states, not two.</strong> Ordered by the relevant variable; unordered; and <strong>ordered by an irrelevant variable</strong>. Proprioception is the third and solves it anyway — which is encouraging, because it shows a system can recode into a basis its receptors do not supply.

<strong>5. Self-supervised recalibration needs only a forward model.</strong> Proprioception recalibrates with no external teacher, using prediction error from its own model. Sniffing supplies olfaction with a predictable self-generated component, so the neurogenesis argument (§3.10) does not need an external error signal after all.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s11.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Proprioception has a defensible normative account with essentially no efficient-coding content. Vestibular has a complete one whose success is central rather than peripheral. What single conclusion do these two facts jointly support for olfaction?",
  "options": [
    {
      "text": "That the first question is what the system is estimating and for whom, not how it encodes its input efficiently — and that olfaction's stall may be the absence of a stated objective rather than of data.",
      "correct": true,
      "feedback": "This is the joint implication, and neither module supports it alone. Proprioception shows that efficient coding is optional — a modality trying to support control rather than to transmit its input faithfully needs no redundancy-reduction story at all. Vestibular shows that what a successful account does need is a statable objective, and that circuit complexity is not the obstacle. Together they redirect the olfactory programme from 'measure the ensemble and derive the optimal code' to 'name the consumer, then name what it wants estimated' — which §3.11 notes is unsettled, since identity, concentration and source location demand different answers."
    },
    {
      "text": "That olfaction should be studied as a control problem rather than as a coding problem, since navigation is its dominant consumer.",
      "correct": false,
      "feedback": "Correct under the assumption that the consumer has been identified, and it is the direction both modules point. But it asserts the answer to the question they actually raise. Whether navigation is olfaction's dominant consumer is a hypothesis (§3.8, §7.8), and adopting it as a premise repeats in a new key the mistake the modules warn against — choosing the objective before establishing whose it is."
    },
    {
      "text": "That efficient coding is the wrong framework for olfaction, since two of the three most successful normative accounts in the course make no use of it.",
      "correct": false,
      "feedback": "Correct under the assumption that a framework's applicability transfers across modalities by majority vote, and the observation is accurate. But the vestibular and proprioceptive cases show efficient coding is *not universal*, which is different from showing it is wrong anywhere in particular. Olfactory receptor arrays plausibly do face a coding problem; what the modules challenge is the assumption that it is the *first* problem."
    },
    {
      "text": "That the olfactory field should look for its central representation in a cerebellum-like structure rather than a cortex-like one.",
      "correct": false,
      "feedback": "Partly correct, and §7.7 makes exactly this comparison — piriform and cerebellum share expansion recoding, sparsification, and an associative-memory description [@litwinkumar2017]. But this is a claim about architecture, and the question asks what the two normative facts jointly support. The architectural resemblance follows from a different argument and would hold whether or not either module had a normative account at all."
    }
  ]
}
</script>
</x-mcq>
