---
id: m08.s11
title: Normative synthesis and the olfaction hook
lede: The module's real result is that the adaptation principle had an unstated premise, and nociception is the case that exposes it. Scored honestly, one strong result, one useful reframing, and a large hole where chronic pain is.
estimatedMinutes: 13
---

## Scoring the theories

**The strongest result is the adaptation sign reversal.** §8.10 shows that the course's adaptation principle — reduce gain under sustained input — carried an unstated premise, namely that repetition is redundant with what has already been reported. That premise holds when the referent is transient and fails when it persists and demands an action not yet taken. Restating the principle to predict the *sign* from the persistence of the referent covers nine modalities that adapt and one that sensitizes, generalises correctly to itch and nausea, and could have been wrong. **This is the module's contribution to the rest of the course**, and it is a genuine one: it corrects a claim the course was making too broadly rather than adding an instance to it.

**The strongest reframing is the latent-variable argument.** Nociception is the course's clearest case of a sensory system whose receptive field is defined by a consequence rather than a stimulus (§8.1). That reframing explains polymodality, the OR combination rule, the absence of a spec sheet with units, and why the efficient-coding template stalls here for a different reason than it stalls for olfaction. It is a reframing rather than a result because nothing was derived quantitatively — but it is the reframing the capstone needs.

**Two solid confirmations.** Specificity versus pattern theory has the same shape as taste's labelled-line dispute, and §5.4's stage-specification lesson resolves the shape of it identically — specific at the periphery, both at the first synapse, dissolved centrally (§8.5). And the routing evidence is a within-modality test of §1.6's service decomposition that comes out right: one stream of four uses the thalamic relay, and it is the one needing spatial precision (§8.6).

**What is contested, and stays contested.**

*Specificity versus pattern* is not settled and the stage decomposition does not settle it — it dissolves the version of the question that was unanswerable and leaves real disagreement about the first synapse, where lamina I is specific and lamina V explicitly is not.

*Gate control* was influential and is not correct as originally stated. What survives is the convergence of large- and small-fibre input onto shared inhibitory machinery; what does not is the specific circuit, the confinement to one site, and the implication that afferent balance sets the gate. The gate's dominant input is descending (§8.5, §8.9).

*Chronic pain* is not understood, and the course's position (§8.10) is that the boundary between useful sensitization and pathology is not characterised. That is a real hole in the normative account, not a gap in the empirical literature — the account specifies an onset condition and no termination condition.

**What is missing.** No quantitative derivation of anything. The nearest tractable calculation is the one §8.2 identifies: assemble an injury ensemble, use it as a prior, and predict the allocation of nociceptor innervation density across body sites via the Ganguli–Simoncelli argument [@ganguli2014]. Nobody has done it, it is feasible, and the censoring problem — you cannot survey injuries that killed the animal — bounds how well it could ever work.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s11.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The module's central result is that the adaptation principle should predict the sign of the gain change from the persistence of the referent. Suppose someone found a modality reporting a persistent, action-demanding state that nonetheless adapted downward. What would that most likely indicate?",
  "options": [
    {
      "text": "That 'action-demanding' was doing more work than 'persistent', and that the required action had in fact been taken or was unavailable — so the report's decision value had gone to zero for the same reason stress-induced analgesia takes it to zero.",
      "correct": true,
      "feedback": "This is the most likely diagnosis, and it is worth noticing that the amended principle already contains the resources to make it. §8.9 shows the same system suppressing a persistent signal when the animal is committed to an incompatible action, so persistence alone was never sufficient — the clause about the action not yet being taken is load-bearing. A counterexample of this shape would refine the principle rather than refute it, which is a weakness as much as a strength: a principle with a clause that can absorb counterexamples is harder to falsify than it looks. That is the honest cost of the amendment."
    },
    {
      "text": "That the principle is wrong, and adaptation sign is set by mechanism — potentiating or depressing synapses — rather than by the signal's temporal structure.",
      "correct": false,
      "feedback": "Correct under the assumption that a single counterexample refutes a functional principle in favour of a mechanistic one. But this is the option §8.10 rejects on general grounds: mechanism explains how the sign is implemented, not why that implementation was selected. It also predicts that sign should be fixed per pathway, whereas nociception's descending system reduces gain in the same pathway that sensitizes — one circuit, both signs, so mechanism cannot be doing the explaining."
    },
    {
      "text": "That the modality's loss function is symmetric, so it has no reason to protect against misses the way nociception does.",
      "correct": false,
      "feedback": "Correct under the assumption that adaptation sign follows the loss function's asymmetry, which is a natural reading of §8.1 and is wrong in a specific and instructive way. Stress-induced analgesia takes nociception's gain to near zero under an unchanged loss function (§8.9), which demonstrates that the asymmetry sets the *criterion* rather than the gain. Conflating criterion placement and gain control is the most common error in reading this module, and this distractor is the place to notice it."
    },
    {
      "text": "That the referent was not really persistent, since a state that permits adaptation cannot have been demanding continuing action.",
      "correct": false,
      "feedback": "Correct under the assumption that the principle is true, which makes it unfalsifiable — the observation is redefined until it fits. That is the exact failure mode §1.12 identifies for optimisation arguments, and it is worth being able to spot in a principle you like. The difference between this and the correct answer is that the correct answer names an *independently checkable* condition (was the required action taken or available?) rather than inferring the premise from the conclusion."
    }
  ]
}
</script>
</x-mcq>

## Datasheet row

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Highlight Nociception, then Olfaction. They share the bottom of the 'ensemble measured' row and diverge on almost everything else — nociception's array is ordered, its dimensionality low, its statistics comparatively stationary. Two modalities failing the same step for opposite reasons is the most useful thing this column adds.">
</x-figure>


| Property | Nociception |
|---|---|
| Array ordering | **ordered, somatotopic — but coarse** |
| Dimensionality | low (~3–4 peripheral classes) |
| Tuning breadth | very broad (polymodal C), narrow-ish (Aδ) |
| Stimulus | **a latent variable, not an energy** |
| Ensemble measured | **no, and not measurable in the required form** |
| Loss function | **extremely asymmetric; the starkest in the course** |
| Adaptation sign | **positive — the only one** |
| Descending control | **can abolish the percept entirely** |
| Obligatory relay | one stream of four (VPL) |
| Synapses to action | 2–3 for the withdrawal reflex |
| Percept ≡ afferent signal? | **no — dissociates in both directions** |

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. Asymmetric loss predicts which distinctions get collapsed — and nociception says how far the collapse can go.</strong> §5 showed taste collapsing hundreds of bitter compounds because the action is identical. Nociception collapses <em>heat, force and chemistry</em> — three different physical modalities — onto one channel, for the same reason. That is a far more aggressive collapse than taste's, and it sets the ceiling for what to expect in olfaction. The prediction: predator odours and spoilage volatiles, which serve a single asymmetric decision, should converge as completely as nociception's transducers do, across chemical classes with nothing structurally in common. §3.8 finds convergence; the question this module raises is whether anyone has tested how <em>chemically dissimilar</em> two aversive odorants can be and still converge. That is a measurable ceiling and nobody has measured it.

<strong>2. Does olfaction ever sensitize?</strong> §8.10's amended principle says gain should rise when the reported state persists and demands an action not yet taken. That is a testable claim about olfaction and nobody has tested it. §8.8 gives the design: record piriform and cortical amygdala simultaneously during prolonged exposure to a persistent aversive odour, under escapable and inescapable contingencies. If the valence arm sensitizes while the identity arm adapts, olfaction has opposite-signed adaptation in two streams from one receptor input — which would be the strongest evidence in the whole course that adaptation sign is set by the consumer rather than by the sensor.

<strong>3. Descending control may be for suppressing reports whose decision value has gone to zero.</strong> §3.6 asks what massive cortical feedback onto bulbar granule cells is for, and the standing candidates are attentional gain and figure–ground separation. Nociception offers a third, from stress-induced analgesia (§8.9): suppress input the animal cannot currently act on. The two accounts make <em>opposite</em> predictions — attentional gating predicts strongest suppression of task-irrelevant odours during exploration, decision-value gating predicts strongest suppression during committed goal-directed action. That is a clean experiment on an existing preparation.

<strong>4. A receptive field can be defined by a consequence.</strong> §5.11 raised this from taste's nutritional categories; nociception is the purer case, because there is no chemistry underneath at all. §14's search for olfactory coordinates has mostly been posed as a statistics-of-the-stimulus problem. Nociception is the existence proof that a sensory system can run entirely on consequence-defined coordinates, with polymodal transduction and OR combination as the signature to look for. <strong>If olfactory coordinates come from consequence, expect glomerular convergence rules that make no chemical sense.</strong>

<strong>5. A modality can be one arm of another modality's split and still run the full taxonomy internally.</strong> §8.8's point. Touch treats affective as atomic; from inside it splits three ways for all three of §4.8's reasons. So §3.8's treatment of the cortical amygdala as olfaction's single valence arm should be regarded as provisional — the arm is where nobody has looked for internal structure, and this module is the reason to look.

<strong>6. Two ways to fail step one.</strong> Olfaction has a measurable ensemble nobody has measured; nociception has no measurable ensemble at all. The fix differs accordingly — engineering for one, a change of instrument for the other. §8.2's substitution of signal detection theory for efficient coding is the move, and it is available to any olfactory subproblem posed as a detection question rather than an encoding one.
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m08.s11.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The module claims nociception earns its place by exposing an unstated premise in the course's adaptation principle. Assess that claim: state what the amendment is, what it costs, and whether the module would still be worth including if the amendment turned out to be wrong.",
  "modelAnswer": "**The amendment.**\n\nThe course's principle was: reduce gain under sustained input, because repetition is redundant. Nociception forces: *adjust gain to maximise the decision value of the report, given the timescale over which the reported variable stays actionable* — which reduces to the old principle when the referent is transient and reverses when it persists and demands an action not yet taken.\n\nThat is a strict generalisation. It covers every case the old principle covered, predicts the one case the old principle got wrong, and names the variable that determines which regime applies. It also generalises correctly outside the course's coverage, to itch and nausea.\n\n**What it costs.**\n\nThree things, and the module should not pretend otherwise.\n\n*It adds a clause that can absorb counterexamples.* 'And demands an action not yet taken' is doing real work — §8.9's stress-induced analgesia is a persistent referent with downward gain, rescued by that clause. A principle with a rescuing clause is harder to falsify, and §8.11's own MCQ concedes this. The defence is that the clause is independently checkable (is the required action available and untaken?) rather than inferred from the observed sign, but the defence has to actually be run in each case.\n\n*It is qualitative.* No timescale is derived. Nothing predicts how fast the gain should rise or where it should saturate, which is precisely where the account fails clinically (§8.10's termination problem).\n\n*It was not a prediction.* Sensitization was known before the amendment was stated. §0.2 rates advance risky predictions above post-hoc accommodations, and by that standard this is an accommodation that happens to generalise well. The honest defence is that it makes a *new* risky prediction about olfaction (the two-arm experiment of §8.8) which has not been run, and that is where the amendment can earn its status.\n\n**Would the module still be worth including?**\n\nYes, and this is the part worth arguing rather than asserting.\n\nEven with the amendment struck out, four things survive. The **latent-variable argument** stands independently: this is the only modality here whose stimulus is not an energy, and that fact does real work explaining polymodality and the failure of the efficient-coding template. The **within-modality metric control** of §8.4 — cutaneous against visceral, spatial precision varying two orders of magnitude with the loss function fixed — is a controlled comparison §12.1 cannot get anywhere else, and it depends on nothing in §8.10. The **nociception/pain double dissociation** (§8.7) is the sharpest available form of 'the consumer determines the code', with both off-diagonal cells populated. And the **routing test** (§8.6) is a within-modality check of §1.6's service decomposition.\n\nSo the module is over-determined. What would be lost without the amendment is its contribution *back* to the rest of the course — it would become another modality to compare against rather than a correction to a claim the course was making everywhere.\n\n**The residual worry.** Nothing in this module is quantitative, and §8.11 says so. A reader who takes §0.2's five criteria seriously should score nociception below vision, audition and the vestibular system, and roughly with touch — strong qualitative arguments, one useful correction, no derivation. The module's defence is that it is the course's clearest demonstration that the normative programme has more than one instrument in it, which matters most for the modality the whole course is aimed at.",
  "rubric": [
    "States the amendment as a strict generalisation, with the persistence-of-referent variable named as what determines the sign",
    "Identifies the rescuing clause ('action not yet taken') as a falsifiability cost, and notes the stress-analgesia case that requires it",
    "Notes the account is qualitative and says nothing about timescale or termination",
    "Concedes that sensitization was known first, so this is accommodation rather than advance prediction — and identifies the olfactory two-arm experiment as where it could earn prediction status",
    "Argues the module is over-determined, naming at least two contributions independent of §8.10",
    "Bonus: scores the module honestly against §0.2's criteria rather than defending it",
    "Bonus: identifies the loss as the module's contribution *back* to the course rather than its standalone value"
  ]
}
</script>
</x-free-response>
