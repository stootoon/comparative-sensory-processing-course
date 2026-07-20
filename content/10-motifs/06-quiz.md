---
id: m10.s06
title: Module quiz — Common Motifs
lede: Eight questions on the motifs that recur and the ones that only appear to be missing. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 28
---

This module discharged the seven lessons, and its running theme was a distinction rather than a list: a motif **genuinely absent** is a different object from a motif **never looked for**, and confusing them has cost the field several confident negative claims.

Most of these questions are that distinction in disguise. Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m10.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The module argues that most of olfaction's apparently missing motifs are unlooked-for rather than absent, and traces this to a single root cause. What is it?",
  "options": [
    {
      "text": "The standard preparation — one odorant, fixed port, steady concentration, experimenter's clock — holds constant exactly the variables the missing motifs would be organised around.",
      "correct": true,
      "feedback": "This is the root cause and it is one design choice, not four. Source location is fixed, so a location stream cannot be detected however strong it is. Plume statistics are absent, so neurons tuned to intermittency look unresponsive. Sniff timing is decoupled from delivery, so a phase-referenced code is destroyed by construction. Temporal structure is absent, so a temporal code has nothing to encode. Every unlooked-for verdict in this module traces here, and the touch literature went through exactly this correction — labelled-line accounts came from artificial stimuli designed to isolate channels [@johnson2001] and weakened once natural contact was used [@saal2014]."
    },
    {
      "text": "The measured chemical ensemble does not exist, so nobody knows which stimuli to present.",
      "correct": false,
      "feedback": "Correct under the assumption that the binding gap is Gap 1 — and it is the course's most-cited absence, blocking the flagship calculation and every derivation that needs the receptor covariance. But it is the wrong diagnosis for *this* problem. The missing motifs here are organised around location, timing and plume dynamics, none of which requires the chemical ensemble to manipulate. The stimulus-design gap and the ensemble gap are separate, and the first is much cheaper to close."
    },
    {
      "text": "Olfaction has no metric on its receptor array, so the motifs have nothing to be organised over.",
      "correct": false,
      "feedback": "Correct under the assumption that the missing motifs are the metric-dependent ones. Some are — convolution and interpolation are genuinely dead, and §11.1 says why. But the motifs at issue here are the location stream, the derived-variable map and the phase-referenced code, and none of them consumes a metric on the receptor array. The bat's delay map is the standing demonstration: a map of a derived variable needs no peripheral order at all."
    },
    {
      "text": "Recording technology cannot sample enough neurons simultaneously to detect distributed codes.",
      "correct": false,
      "feedback": "Correct under the assumption that the limitation is on the readout side, which is the usual answer when a code is not found. It is not the argument here, and the module is careful about this: population recording in olfaction is not the bottleneck, because the problem arises before the recording. A perfectly complete recording taken while source distance is held at zero contains no information about distance tuning."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s06.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "You silence tufted cells and find a large behavioural impairment under a tight response deadline and an equally large impairment under a generous one. What does this establish about the mitral/tufted split?",
  "options": [
    {
      "text": "It is not a deadline split. A deadline split carries the same content at two latencies, so removing the fast channel must be harmless once time is unlimited — the persistent impairment points to a content difference instead.",
      "correct": true,
      "feedback": "Right, and this is why the three reasons for splitting are kept apart. The refuting cell of the 2×2 is precisely tufted-silenced with a generous deadline: a deadline split predicts recovery there, because the mitral channel eventually delivers the same information. Impairment that survives unlimited time means the channels differ in *what* they carry, which sends you to the invariance or loss-function accounts instead. Note that this reasoning needs no facts about mitral or tufted cells — it follows from the definition of a deadline split, which is what makes it a prediction."
    },
    {
      "text": "It confirms the deadline split, since the fast channel is evidently necessary for the behaviour.",
      "correct": false,
      "feedback": "Correct under the assumption that necessity of the fast channel is what a deadline split predicts. It predicts something narrower: necessity *under the deadline*, and dispensability without it. Necessity everywhere is what a labelled-line or content-based split predicts. This is the most common misreading of the design and worth sitting with, because the confirmatory-looking result is the disconfirming one."
    },
    {
      "text": "It shows tufted cells carry the concentration signal and mitral cells the identity signal, which is a loss-function split.",
      "correct": false,
      "feedback": "Correct under the assumption that a content difference must be *this* content difference. The result establishes that the channels differ in content and says nothing about which content. A loss-function split predicts a short pathway to a valence structure alongside a long pathway to an identity structure — an anatomical signature — and this experiment tested neither pathway's target. Naming the specific split requires the anatomy, not the behaviour."
    },
    {
      "text": "It is uninterpretable, because silencing tufted cells removes a large fraction of bulbar output and the deficit could be nonspecific.",
      "correct": false,
      "feedback": "Correct under the assumption that any large manipulation produces uninterpretable results, and the concern is legitimate — this is why the design uses the mitral-silencing arm as its control, with the deadline-split account predicting the reverse pattern. But note that the objection would apply equally to the confirmatory outcome, and an objection that is indifferent to the result is not evidence about the result. It is a reason to run the reciprocal condition, which the design already includes."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s06.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "Of olfaction's three predicted stream splits, one is confirmed, one proposed, one predicted and not located. Which is confirmed, and what makes the confirmation count as a risky prediction rather than a description?",
  "options": [
    {
      "text": "The loss-function split — piriform versus cortical amygdala, and lateral horn versus mushroom body in insects. It counts because the prediction was derived from taste's argument by someone who had not connected the two literatures.",
      "correct": true,
      "feedback": "Right, and the provenance is the whole point. Taste establishes that where the action is identical, distinctions get destroyed [@chandrashekar2006]. Transposed, that predicts innate-valence pathways should collapse distinctions while identity pathways preserve them — a claim about olfactory architecture generated by a system whose architecture played no part in generating it. Cross-modality transfer is what converts a post-hoc rationalisation into a risky prediction, and §11.5 makes this the test that rescues the consumer axis from circularity."
    },
    {
      "text": "The invariance split — identity against location, predicted by three independent instances including audition's non-spatial array.",
      "correct": false,
      "feedback": "Correct under the assumption that strength of argument equals confirmation status. The invariance argument is the strongest inference in the module — it is a statement about functions, not an engineering preference, and audition splits from an array with no spatial dimension at all [@carr1990; @mcalpine2001]. And it is still marked **predicted and not located**. Holding those apart is exactly the discipline this module is trying to instil."
    },
    {
      "text": "The deadline split — mitral against tufted cells, differing in latency, reliability and threshold.",
      "correct": false,
      "feedback": "Correct under the assumption that a measured physiological difference constitutes a confirmed split. The latency and threshold differences are real; what is unconfirmed is the *reason*. The falsifiable version — that forcing faster responses shifts the read-out onto the tufted channel specifically — has not been reported, so the status is **proposed and under-tested**. A described difference is not an explained one."
    },
    {
      "text": "None of them is confirmed; all three remain predictions, which is the module's honest position.",
      "correct": false,
      "feedback": "Correct under the assumption that the module is uniformly pessimistic — an understandable reading given how often it says 'unlooked-for'. But the grading is genuinely graded, and flattening it loses information in the other direction. Treating a confirmed import as merely predicted is the same error as treating a prediction as confirmed, and the loss-function split is the course's clearest confirmed import."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s06.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "You run the Friedrich–Laurent decorrelation protocol across three decades of odour concentration and find decorrelation strengthens monotonically, with no reversal at the lowest concentrations. What obligation does taking this result seriously impose?",
  "options": [
    {
      "text": "Independently estimate receptor SNR at the lowest concentration used, to establish whether the noise-dominated regime was ever reached.",
      "correct": true,
      "feedback": "This is the obligation, and skipping it is what makes an efficient-coding account unfalsifiable. The theory predicts a sign change at low SNR, so a monotone result is consistent with it only if the tested range never entered that regime — and 'never entered the regime' must be established by a measurement rather than asserted after seeing the data. Without it, any null is absorbed and the prediction stops being risky, which is the failure mode §0.2 exists to prevent."
    },
    {
      "text": "Conclude that bulbar decorrelation is a generic property of lateral inhibition rather than a normative solution.",
      "correct": false,
      "feedback": "Correct under the assumption that a failed prediction selects the alternative. It does not select it here, because the two accounts make identical predictions until the noise-dominated regime is reached — a static operation whose strength scales with drive produces exactly this monotone pattern, and so does efficient coding tested over the wrong range. The experiment as described has not separated them, and saying so is the honest report."
    },
    {
      "text": "Measure the output covariance directly rather than through a decorrelation index, since whitening is a claim about the covariance.",
      "correct": false,
      "feedback": "Correct under the assumption that the index is the weak link, and methodologically this is a good instinct. But it does not rescue the inference, and there is a deeper problem: information maximisation fixes the eigenvalue spectrum and not the basis, so an isotropic output covariance is compatible with any rotation of the code. Whitening alone never identifies a particular set of neurons as the solution."
    },
    {
      "text": "Treat the result as confirming the theory, since decorrelation strengthening with SNR is what efficient coding predicts.",
      "correct": false,
      "feedback": "Correct under the assumption that the directional claim is the whole prediction. It is half — decorrelate at high SNR, pool at low — and the half that makes it risky is the reversal. Reporting the monotone increase as confirmation collects the part of the theory that was never in doubt while quietly dropping the part that could have failed."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s06.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "A grant panel asks why olfaction lacks a 'where' stream. Which reply is strongest, and what does its strength depend on?",
  "options": [
    {
      "text": "\"We do not know that it lacks one. A location stream is found by varying source location, and the standard preparation holds it constant — so the literature's silence is a fact about sampling, not about brains.\"",
      "correct": true,
      "feedback": "Right, and the strength depends on being able to say what would defeat it. That is the discipline: a study that varied plume distance or bearing systematically across a wide recording extent and found no organisation would convert 'unlooked-for' into a real data point. Until such a study exists, the absence is not evidence. Note the reply is also constructive — it names the experiment rather than merely declining to concede."
    },
    {
      "text": "\"Because a chemical receptor array carries no spatial information, so there is nothing for such a stream to represent.\"",
      "correct": false,
      "feedback": "Correct under the assumption that stream structure is inherited from array geometry. Audition refutes it: the cochlea is ordered by frequency and not by space, interaural differences are computed centrally, and audition splits anyway [@carr1990; @mcalpine2001]. If a location stream can be built from an array with no spatial dimension at all, the argument from geometry fails and the missing olfactory stream becomes a gap rather than a structural impossibility."
    },
    {
      "text": "\"It does have spatial information — inter-nostril concentration differences give a bilateral cue.\"",
      "correct": false,
      "feedback": "Correct under the assumption that the challenge must be met by finding spatial information in the array, and the cue is real. But this concedes the questioner's framing, and it is the weaker ground: inter-nostril differences are small and a thin basis for a full location stream. The audition argument is stronger precisely because it does not require the array to carry spatial information at all."
    },
    {
      "text": "\"Plume temporal structure carries information about source distance, so location is recoverable from a single receptor's timecourse.\"",
      "correct": false,
      "feedback": "Correct under the assumption that the question is whether the information exists, and it does [@celani2014; @tootoonian2025]. But that answers a different question: it establishes recoverability, not that the system splits to represent it. The invariance argument is what bears on whether a split is *necessary*, and the sampling argument is what bears on why it has not been found."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m10.s06.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 29,
  "prompt": "Order these four claims about olfaction from best-supported to least, using the module's own gradations.",
  "items": [
    { "id": "a", "text": "Divisive normalisation with a global pool accounts quantitatively for first-circuit transformations." },
    { "id": "b", "text": "Expansion recoding sits near the connection degree that maximises representation dimension." },
    { "id": "c", "text": "Mitral and tufted cells constitute a split by response deadline." },
    { "id": "d", "text": "Bulbar neurons are tuned to plume-derived spatial variables such as bearing and distance." }
  ],
  "correctOrder": ["a", "b", "c", "d"],
  "modelAnswerNote": "**(a) and (b) are the two strong results**, both from invertebrate work, and both score well for the same reasons: a stated objective, a quantitative prediction, few free parameters, and anatomy measured independently [@olsen2010; @litwinkumar2017; @caron2013]. (a) edges ahead because the fit is to a transformation measured directly, whereas (b) has a live alternative — sparse connectivity implementing approximate MAP inference in a generative model would produce a similar degree with different correlation structure between related cells [@tootoonian2022], and that discriminating measurement has not been made.\n\nA caution on both: the vertebrate versions are weaker. Concentration invariance in mouse arises from recurrent cortical circuitry rather than early divisive pooling [@bolding2018], so the motif has *moved* rather than replicated. And the mouse expansion optimum predicts a different numerical value that nobody has computed — a theory that fits the fly and makes no distinct prediction for mouse has been fitted, not tested.\n\n**(c) is proposed and under-tested.** The physiological differences between mitral and tufted cells are established; the deadline interpretation is not, and the manipulations that would test it exist.\n\n**(d) is predicted and unlooked-for.** Two independent arguments converge on it, which raises the prior, and no experiment in the form that would settle it has been run. Note that (c) and (d) are both 'unconfirmed' and they are unconfirmed in different ways — (c) has been looked for and not resolved, (d) has not been looked for. Collapsing them is the error the module spends most of its length resisting."
}
</script>
</x-order>

<x-matrix>
<script type="application/json">
{
  "id": "m10.s06.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Reason for splitting",
  "prompt": "The three reasons channels split produce different anatomical signatures and different olfactory statuses. Fill in both, plus the instance from another modality that carries the argument.",
  "rows": [
    "Conflicting invariance requirements",
    "Conflicting loss functions",
    "Conflicting deadlines"
  ],
  "columns": ["Anatomical signature to look for", "Status in olfaction", "Modality that carries the argument"],
  "cells": {
    "Conflicting invariance requirements|Anatomical signature to look for": { "answer": "a second cortical target, tracking location while identity regions do not", "accept": ["second cortical target", "two long parallel pathways to different consumers", "a separate location-tracking region"] },
    "Conflicting invariance requirements|Status in olfaction": { "answer": "predicted, not located", "accept": ["predicted", "unlocated", "unlooked-for", "predicted and unlooked-for"] },
    "Conflicting invariance requirements|Modality that carries the argument": { "answer": "audition", "accept": ["audition", "hearing", "audition — non-spatial array"] },
    "Conflicting loss functions|Anatomical signature to look for": { "answer": "a short branch to a valence structure alongside a long identity pathway", "accept": ["amygdalar branch", "hypothalamic branch", "valence branch"] },
    "Conflicting loss functions|Status in olfaction": { "answer": "confirmed", "accept": ["confirmed", "held", "yes"] },
    "Conflicting deadlines|Status in olfaction": { "answer": "proposed, under-tested", "accept": ["proposed", "under-tested", "proposed and untested"] }
  },
  "modelAnswerNote": "The status column is the one to get right, because the three entries are genuinely different epistemic objects.\n\n**Confirmed** means a prediction generated elsewhere came true here. **Proposed** means a real difference is observed and its explanation is untested. **Predicted and not located** means an argument forces something to exist and nobody has looked in the form that would find it.\n\nOne subtlety on the invariance row. The argument forces two *representations*, not two *pathways* — interleaved populations within one region satisfy it. Anatomical segregation is an additional fact needing an additional explanation. So the signature in the first column is the strong version, and anyone searching for an olfactory 'where' stream by looking only for a separate region may be imposing an assumption the argument does not license."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m10.s06.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "State a general procedure for deciding whether a motif is genuinely absent from olfaction or merely never looked for. Apply it to two motifs the module treats differently, and say where the procedure would be hardest to apply.",
  "modelAnswer": "**The procedure.**\n\nFor a motif M, ask three questions in order.\n\n1. *What variable would M be organised around?* Not what M looks like in vision, but the quantity a system implementing M would be indexed by — position for a retinotopic map, source location for a where-stream, sniff phase for a phase-referenced code, plume intermittency for uncertainty-tracking sampling.\n\n2. *Does the standard preparation vary that variable?* If it holds it constant, the literature's silence carries no information whatever, however large and however well-recorded. This is the step people skip, because a well-powered null feels like evidence regardless of what was varied.\n\n3. *State what would convert 'unlooked-for' into 'absent'.* Name the study: which variable varied, over what range, recorded across what extent. If you cannot name it, you are not entitled to the distinction and should say so.\n\n**Applied: the derived-variable map.**\n\nThe organising variable is source distance or concentration, not chemical identity. Almost all olfactory physiology varies identity while recording across space; if the mapped variable is distance, the standard protocol holds it at zero and could not reveal the map however clear it is. **The measurement procedure is orthogonal to the hypothesis**, which is the strongest possible version of the unlooked-for verdict. What would defeat it is nameable: a study varying plume distance or concentration systematically across a wide cortical or subcortical extent, reporting no spatial organisation.\n\n**Applied: the concentration-sweep sign reversal in decorrelation.**\n\nHere the verdict is different, and the difference is instructive. The organising variable is input SNR, and concentration *is* routinely varied — so this motif has been looked for in the relevant dimension, just not analysed for the signature. It is not unlooked-for in the same sense; it is untested in a narrower sense, which is a cheaper problem. The distinction matters because the two call for different responses: one needs a new preparation and one needs a reanalysis plus a check that the noise-dominated regime was reached.\n\n**Where the procedure is hardest.**\n\nStep 1 is the weak point, and it is weak in a way that is not fixable by more care. Naming the organising variable requires already knowing what the system is estimating — which is exactly Gap 2, the unstated objective. If the olfactory consumer is navigation, the organising variables are bearing and distance; if it is identity, they are chemical. The procedure therefore cannot adjudicate a motif whose organising variable is itself contested, and it will systematically return 'unlooked-for' for motifs organised around variables nobody has thought to name.\n\n**The self-directed version of that worry.** 'Unlooked-for' is unfalsifiable if applied without step 3, and it is an unusually comfortable verdict — it converts every negative result into a methodological complaint and protects every prediction indefinitely. A module that reaches 'unlooked-for' on most of its tally should be uneasy about that, and the discipline that saves it is insisting each time on the study that would settle the question. Where the module does that, the verdict is earned. Where it does not, the verdict is a way of not being wrong.",
  "rubric": [
    "States a procedure that begins by naming the organising variable rather than the motif's visual appearance",
    "Includes the test of whether the standard preparation varies that variable",
    "Requires specifying in advance what would convert 'unlooked-for' into 'absent'",
    "Applies it to two motifs and reaches genuinely different verdicts, with the reason for the difference",
    "Identifies that naming the organising variable presupposes knowing the objective, which is itself unsettled",
    "Bonus: notices that 'unlooked-for' is unfalsifiable without the defeating-study clause, and is a comfortable verdict for the arguer",
    "Bonus: distinguishes 'never varied the relevant dimension' from 'varied it but never analysed for the signature', which have different costs to fix"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Module 10 assembled the motifs. Module 11 takes the exceptions seriously and argues against the course's own central claim, so carry the tools for reading an argument that turns on its author.

<strong>Absent versus unlooked-for</strong> — with the tally coming out heavily on the second side, and one root cause behind it. The verdict is only honest when you also name the study that would overturn it.

<strong>The three reasons for splitting, kept apart</strong> — invariance, loss function, deadline. They predict different anatomy, transfer differently, and olfaction's three instances are graded confirmed, proposed and unlocated. Grading is not hedging; it is the information.

<strong>An argument that forces something to exist somewhere is weaker about where</strong> — the invariance argument forces two representations, not two pathways; the consumer argument forces recoding at some stage, not at stage two. Most of the discipline is keeping the strong claim and the weak one apart.

<strong>Motifs are not one principle</strong> — normalisation and decorrelation come from efficient coding, convergence from estimation theory, predictive subtraction from either. "The first circuit does efficient coding" collapses four arguments into one and costs precision every time.
</x-callout>
