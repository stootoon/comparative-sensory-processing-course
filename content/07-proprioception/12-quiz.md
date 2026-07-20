---
id: m07.s12
title: Module quiz — Proprioception
lede: Seven questions on the modality with a good normative account and almost no efficient-coding content — and on the uncomfortable possibility that its perceptual literature was studying a side effect. Every distractor is right under a different assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 25
---

Proprioception is the module that makes the course's parallel skeleton earn its keep. Ask it for "primary cortex" and you get two thin paragraphs about area 3a; ask it for the first large recurrent plastic central structure and you get the cerebellum, a forward model, and the whole subject.

This quiz tests whether you can run the consumer argument yourself, and whether you can hold onto the caveat that comes with its headline result — that the limb's own mechanics do some of the recoding, and nobody has cleanly separated the neural share.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m07.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Clarke's nucleus neurons are better predicted by limb axis length and orientation than by the lengths of the muscles supplying them [@bosco2001]. What is the honest statement of what this shows?",
  "options": [
    {
      "text": "A global limb representation is present by the second synapse — but the limb's mechanical linkages already correlate muscle lengths with limb-axis variables, so the transformation is partly neural, partly biomechanical, and the split is not cleanly quantified [@bosco2003].",
      "correct": true,
      "feedback": "This is the honest version, and the caveat is not a hedge. Bosco and Poppele tested it directly by decoupling limb geometry from endpoint position, and about half of 89 cells changed response pattern. Under joint constraints the changes were captured by re-weighting the same response components, which supports genuine global processing; under muscle stimulation new components appeared and stimulus parameters were explicitly represented, which does not. The transformation is real and early — what the course's argument needs — but crediting neurons with all of it repeats an error the module exists to correct."
    },
    {
      "text": "The nervous system computes a coordinate transformation from muscle space into task space by the second synapse.",
      "correct": false,
      "feedback": "Correct under the assumption that the whole transformation is neural, which is how the result is usually stated and is the version most readers carry away. It overclaims in exactly the way §4.3's accessory-structure argument warns about: the skeleton's linkages do part of the work for free, like cochlear stiffness gradients and Pacinian lamellae. The claim needs a qualifier, and stripping it makes the result sound cleaner than the data support."
    },
    {
      "text": "It shows the recoding is biomechanical rather than neural, since correlated muscle lengths would produce the same result with no processing.",
      "correct": false,
      "feedback": "Correct under the assumption that a sufficient passive explanation displaces the neural one — a proper deflationary instinct, and it is what motivated the decoupling experiment. But the experiment was run and the deflation does not survive it: responses reorganised under geometric perturbation in ways a fixed mechanical mapping cannot produce. The right conclusion is a split of unknown proportions, not a reversal."
    },
    {
      "text": "It shows Clarke's nucleus performs the same decorrelation the retina does, since muscle lengths are heavily correlated.",
      "correct": false,
      "feedback": "Correct under the assumption that any transformation of a correlated input is doing redundancy reduction, and the input genuinely is correlated — spindle signals are non-orthogonal because muscles act together (§7.4). But the transformation adds no information and does not obviously reduce redundancy; it makes existing structure legible in the basis the consumer wants. Coordinate change and decorrelation are different jobs for a first circuit, and distinguishing them is the point."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "The course's datasheet has treated array ordering as roughly binary. Proprioception adds a third state. What is it, and why does it matter for reading olfaction?",
  "options": [
    {
      "text": "Ordered by a variable that is not the one being estimated — a real spatial arrangement that is the wrong one — and it matters because that system solves the problem anyway, showing a modality can recode into a basis its receptors do not supply.",
      "correct": true,
      "feedback": "Right, and the encouragement is the point. Proprioception's array is ordered by body location while the animal wants joint angles or endpoint position, and the mapping between them is nonlinear, redundant and non-orthogonal. Arguably that is harder than olfaction's situation: you must transform out of a misleading arrangement rather than build one from scratch. It works. So \"olfaction's receptors do not supply the coordinates the animal wants\" is a description of a solved problem elsewhere, not a verdict."
    },
    {
      "text": "Partially ordered — proprioception has a metric that is real but degraded, sitting between vision's and olfaction's.",
      "correct": false,
      "feedback": "Correct under the assumption that the third state is a matter of degree along the same axis, and touch offers a genuine instance of that: a metric that is real but deformable and posture-dependent (§4.11). Proprioception's case is categorically different. Its metric is not degraded at all — body location is perfectly well defined — it is simply a metric on the wrong space. Degree and wrongness are different failures needing different fixes."
    },
    {
      "text": "Ordered only after central processing, since the ordering appears at Clarke's nucleus rather than in the receptor array.",
      "correct": false,
      "feedback": "Partly correct as a description of where limb variables appear, and it is the right instinct about central topography — echolocation makes the same move with delay maps for a quantity the cochlea never measures. But the third state is a property of the *receptor array*, which is what the datasheet row describes. What Clarke's nucleus does is the response to being in that state, not the state itself."
    },
    {
      "text": "Unordered but low-dimensional, since the natural movement ensemble is about 3-D despite a 20-D joint space.",
      "correct": false,
      "feedback": "Correct under the assumption that intrinsic dimensionality determines the effective ordering, and the dimensionality figures are right and important — the low intrinsic dimensionality of natural movement is what makes the transformation tractable. But that is gustation's contribution to the ordering axis, not proprioception's (§5.4), and proprioception's array is emphatically ordered. Two different rows of the datasheet."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "A proprioception literature built entirely on conscious position sense would have missed the cerebellum. What is the sharpest version of the corresponding worry about olfactory research?",
  "options": [
    {
      "text": "Discrimination and identification dominate because they are what psychophysics can measure — so if olfaction's dominant consumer is navigation, that literature may be characterising a by-product rather than the main output.",
      "correct": true,
      "feedback": "This is the challenge, and it is uncomfortable because the methods are not at fault. Psychophysics measures what a subject can report, and reportable percepts are exactly what a control-oriented system need not produce. Proprioception is the proof of concept: the dominant consumer is a controller, the central representation is a forward model, and conscious position sense is thin and dispensable. The olfactory version predicts a navigational stream nobody has convincingly located — bearing and distance to source rather than molecular identity."
    },
    {
      "text": "Olfactory psychophysics uses monomolecular odorants at steady concentration, which strips the temporal structure the animal actually uses.",
      "correct": false,
      "feedback": "Correct, and it is a real and serious criticism — §4.11 makes it as the tactile methodological warning, and it is the reason labelled-line accounts of touch looked so clean. But it is a criticism of the *stimulus*, and it would be answered by running the same discrimination tasks with naturalistic plumes. The proprioceptive worry survives that fix, because it is about which behaviour is being measured at all."
    },
    {
      "text": "Conscious odour percepts are unreliable and heavily influenced by verbal labelling and expectation, so the psychophysical data are noisy.",
      "correct": false,
      "feedback": "Correct under the assumption that the problem is measurement quality, and olfactory psychophysics is genuinely more label-dependent and context-sensitive than visual. But noisy measurement of the right variable is a tractable problem — average more. Precise measurement of a side effect is not, and it is the failure mode proprioception illustrates. Confusing the two leads to investing in better versions of the wrong experiment."
    },
    {
      "text": "It suggests olfactory perception should be studied in the cerebellum-like structure — piriform — rather than in the bulb.",
      "correct": false,
      "feedback": "Partly correct and a good observation: §7.7 argues piriform and cerebellum are more alike than either is to V1, both taking high-dimensional input, expanding, sparsifying and using it for learned association [@litwinkumar2017]. But that parallel concerns architecture, and this question is about which *behaviour* the field measures. Moving the electrode does not fix studying the wrong output."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Nobody derives spindle tuning from the statistics of natural movement the way retinal filters are derived from image statistics — and the natural movement ensemble *has* been measured. What is the right reading of this absence?",
  "options": [
    {
      "text": "Proprioception is not trying to transmit information about its input faithfully; it is supporting control. A modality can have a good normative account with no efficient-coding content, which is why §0.1 insists on distinguishing the stances.",
      "correct": true,
      "feedback": "Right, and this is the module's most transferable finding. Efficient coding, Bayesian inference and optimal control are different normative stances that give different answers, and the habit of treating \"normative\" as synonymous with \"efficient coding\" hides that. Here the ensemble exists and the calculation still is not the interesting one, because the objective is state estimation for a controller rather than faithful transmission. For olfaction this reopens a question the field treats as settled: whether the efficient-coding framing is the right one at all."
    },
    {
      "text": "It is a gap in the literature, and the calculation should be done since the ensemble is available.",
      "correct": false,
      "feedback": "Correct under the assumption that a measurable calculation is worth doing — and §5.11 makes exactly this complaint about gustation, where the ensemble is small, the categories behaviourally defined, and nobody has run it. The difference is that the taste calculation would test a stated hypothesis about loss-allocated receptor breadth. Here it would answer a question about the wrong objective, and getting a number back would not tell you anything about what spindles are for."
    },
    {
      "text": "The measurement is confounded — spindle firing mixes length, velocity and gamma drive — so no clean input-output relation can be derived.",
      "correct": false,
      "feedback": "Correct under the assumption that the obstacle is technical, and the confound is real and severe: efferent gamma control means the sensor's sensitivity is set by the nervous system moment to moment, which no other modality in the course has to this degree. But it is soluble in principle by measuring or controlling gamma drive, and solving it would not create an efficient-coding account. The absence is about the objective, not the tractability."
    },
    {
      "text": "The natural movement ensemble is ~3-D, which is too low-dimensional for an efficient-coding argument to have any purchase.",
      "correct": false,
      "feedback": "Correct under the assumption that efficient coding needs high dimensionality to say anything, and low dimensionality does reduce the pressure to compress. But the fly's contrast–response result [@laughlin1981] is one-dimensional and is arguably the cleanest normative demonstration in the literature. Dimensionality is not what makes an efficient-coding argument possible; a transmission objective is."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m07.s12.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 73,
  "prompt": "Order the steps of the consumer argument as proprioception runs it, so you can run it for olfaction. §7.5 is the worked instance.",
  "items": [
    { "id": "a", "text": "Identify the dominant consumer of the code — for proprioception, a controller rather than a percept." },
    { "id": "b", "text": "Determine what basis that consumer operates in — forward models work on task variables such as endpoint position, not on individual muscle lengths." },
    { "id": "c", "text": "Predict that the recoding into that basis happens early, at the first opportunity." },
    { "id": "d", "text": "Test whether early neurons are better predicted by the consumer's variables than by the receptors' variables." },
    { "id": "e", "text": "Establish how much of the transformation is neural rather than supplied by the periphery's mechanics." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Steps (a) through (d) are the argument as it is usually told, and step (e) is the one the tidy version omits [@bosco2003]. It belongs in the sequence rather than in a footnote, because without it (d) does not distinguish a computing circuit from a well-linked skeleton.\n\n**Running it for olfaction.** Step (a) is where it stalls, and that is the whole point of the hook. The field has largely assumed the consumer is an identifier, which makes the wanted basis molecular identity and makes the bulb's job decorrelation. If the dominant consumer is instead navigation (§3.8), the wanted variables are bearing and distance to source, step (c) predicts the bulb should already be starting that transformation, and step (d) is a concrete experiment: are bulbar neurons better predicted by plume-derived spatial variables than by odour identity?\n\nThat prediction arrives here from the consumer argument and independently from §3.8's ecological argument, which is the kind of convergence worth taking seriously. And step (e) has an olfactory version too — the nasal epithelium does some chromatographic separation, so part of any apparent transformation may be sorption physics."
}
</script>
</x-order>

<x-mcq>
<script type="application/json">
{
  "id": "m07.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Proprioception recalibrates with no external teacher, using prediction error from its own forward model. Vestibular recalibrates using retinal slip, an external error signal. What does the proprioceptive case add to the argument about bulbar adult neurogenesis?",
  "options": [
    {
      "text": "Self-supervised recalibration needs only a forward model and a predictable self-generated component — and sniffing supplies one — so the neurogenesis argument does not require the external teacher olfaction lacks.",
      "correct": true,
      "feedback": "This is the addition, and it is a repair rather than a decoration. §6.11 leaves the neurogenesis argument owing an objective, since there is no olfactory equivalent of retinal slip. Proprioception supplies a mechanism that needs no ground truth: predict the sensory consequences of your own action, and use the discrepancy. Sniffing is self-generated, rhythmic and its consequences are partly predictable, so prediction error is available. The claim becomes testable — disrupt the sniff-related reafference and the plasticity should change."
    },
    {
      "text": "It shows an unsupervised objective such as decorrelation is sufficient, since prediction error requires no labels.",
      "correct": false,
      "feedback": "Partly correct in that neither needs external labels, and both are legitimate answers to §6.11's challenge. But they are different objectives making different predictions. Decorrelation is defined on the input distribution alone and predicts plasticity should track input non-stationarity. Self-supervision is defined on the discrepancy between predicted and actual consequences of one's own action, and predicts dependence on intact reafference. Collapsing them loses the experiment that distinguishes them."
    },
    {
      "text": "It shows the cerebellum is the model for piriform, so olfactory plasticity should follow cerebellar learning rules.",
      "correct": false,
      "feedback": "Correct under the assumption that the architectural parallel carries the learning rule with it, and the parallel is real and useful — both expand a high-dimensional input, sparsify, and support learned association [@litwinkumar2017]. But the question is about the bulb, not piriform, and about whether an error signal exists at all rather than what rule consumes it. The architecture tells you where a rule could be implemented, not what it is trained on."
    },
    {
      "text": "It shows external teachers are unnecessary in general, so vestibular's reliance on retinal slip is an accident of having vision available.",
      "correct": false,
      "feedback": "Correct under the assumption that self-supervision is universally available, and it is more available than the vestibular case suggests. But VOR gain is a parameter no forward model of head motion can check against itself — you need something outside the loop to say the eyes moved by the wrong amount, and slip is that thing. Some quantities are self-checkable and some are not, and knowing which is which is what the comparison teaches."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m07.s12.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Fill proprioception's column, then check against §7.11. Three of these four rows have no counterpart anywhere else in the course.",
  "rows": [
    "Array ordering",
    "Efferent control of sensor",
    "First circuit computes",
    "Dominant consumer"
  ],
  "columns": ["Proprioception"],
  "cells": {
    "Array ordering|Proprioception": { "answer": "ordered by body, not by the estimated variable", "accept": ["ordered by body", "ordered by the wrong variable", "ordered by an irrelevant variable", "ordered, but by body location", "ordered by body location"] },
    "Efferent control of sensor|Proprioception": { "answer": "yes, direct (gamma drive)", "accept": ["yes", "gamma drive", "yes, gamma drive", "direct", "yes, direct"] },
    "First circuit computes|Proprioception": { "answer": "coordinate transformation", "accept": ["coordinate transformation", "change of coordinates", "coordinate change", "recoding", "transformation"] },
    "Dominant consumer|Proprioception": { "answer": "a controller, not a percept", "accept": ["a controller", "controller", "motor control", "the cerebellum", "control, not perception"] }
  },
  "modelAnswerNote": "The efferent-control row is the one with no real counterpart. Gamma drive means the nervous system sets its own sensor's sensitivity moment to moment, so afferent firing confounds muscle length, velocity and the descending command — a measurement problem no exteroceptive modality faces in this form. Active sensing elsewhere changes what the sensor is *pointed at*; this changes what the sensor *is*.\n\nOlfaction's nearest approach is sniffing, which alters the stimulus but not the transducer's gain, and its sorption effects are at least in principle separable. Worth knowing when importing active-sensing arguments in either direction.\n\nThe first-circuit row is the transferable one. Set beside retina (decorrelate), cochlear nucleus (decompose) and NST (route and integrate with state), the set of answers is more varied than the bulbar debate has assumed — and coordinate transformation is a candidate nobody has seriously pursued for the bulb."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m07.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The course places piriform in the same structural slot as V1 and as the cerebellum. Argue for which comparison is more informative, and say what your answer implies about how olfactory central processing should be studied.",
  "modelAnswer": "**The case for the cerebellar comparison, which I take to be the stronger one.**\n\nThe skeleton asks each module for the first large, recurrent, plastic central structure, and the three answers are V1, piriform and cerebellum. Structurally piriform and cerebellum are the pair:\n\n- Both take a **high-dimensional input** and expand it — granule cells, Kenyon cells, piriform pyramidal cells.\n- Both **sparsify**, and both are analysed with the same tools: expansion recoding, sparse coding, associative memory capacity, optimal connection degree [@litwinkumar2017].\n- Both are organised for **learned association** rather than for filtering, and neither is topographic in the way V1 is.\n- The mushroom body is explicitly cerebellum-like and is the invertebrate olfactory centre, so the parallel appears twice independently.\n\nV1 shares with piriform only its position in the pathway, and the resemblance is partly an artefact of the slot. V1's organising principles — retinotopy, oriented filters, a metric on the input array — are exactly the ones §1.4 shows olfaction cannot supply.\n\n**What follows methodologically.**\n\nStop looking for piriform's tuning curves and start asking about capacity. The V1 comparison prescribes characterising what individual neurons are selective for and how selectivity is built from the input — the receptive-field programme. The cerebellar comparison prescribes different questions: what is the effective dimensionality of the expanded representation, what connection degree does the circuit use and is it near the capacity-maximising value, how many associations can be stored before interference, and what is the plasticity rule.\n\nThose questions have been productive in the mushroom body and much less so in piriform, and the asymmetry is at least partly because the mushroom body was approached with the right template.\n\n**The counter-case, which is not negligible.** The cerebellum has a teacher — climbing fibres delivering an error signal — and it is not obvious what plays that role for piriform. If the comparison breaks anywhere it breaks there, and it breaks at the same place the neurogenesis argument does (§6.11): olfaction's missing error signal. So the honest position is that the architectural half of the analogy is strong and the learning half is a hypothesis. **Set the expectations from the cerebellum, then go looking for the teacher** — and if there is none, that absence is itself the finding, and it says piriform is doing unsupervised association where the cerebellum does supervised prediction.",
  "rubric": [
    "Identifies expansion, sparsification and associative function as the shared piriform/cerebellum properties",
    "Notes that V1's organising principles are the metric-dependent ones olfaction cannot supply",
    "Draws a concrete methodological consequence: capacity, dimensionality and connection degree rather than tuning curves",
    "Uses the mushroom body as an independent instance of the same parallel",
    "Bonus: identifies the climbing-fibre teacher as where the analogy is weakest, connecting to olfaction's missing error signal",
    "Bonus: treats the absence of a teacher as a finding rather than a defect in the analogy"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Proprioception hands forward four things, and the first is the course's Lesson 6 in its demonstrated form.

<strong>The consumer determines the code</strong> (§7.5) — muscle lengths recoded into global limb variables by the second synapse [@bosco2001], with the caveat that the limb's mechanics supply part of it and the split is not cleanly quantified [@bosco2003]. The olfactory version asks who consumes the code and what basis they want.

<strong>Coordinate transformation as a first-circuit job</strong> (§7.5) — set beside decorrelate, decompose, and route-and-integrate. If olfaction's consumer is navigation, the bulb might be starting a transformation toward bearing and distance rather than decorrelating identity, which is what §3.8 predicts from a different direction.

<strong>Ordering has three states</strong> (§7.4) — ordered by the relevant variable, unordered, and ordered by an irrelevant one. Proprioception is the third, which is arguably harder than olfaction's position, and it solves it.

<strong>Perception may be the by-product</strong> (§7.7, §7.11) — the central representation is a forward model and conscious position sense is thin. If olfaction's dominant consumer is navigation, the discrimination literature may be measuring the side effect.
</x-callout>
