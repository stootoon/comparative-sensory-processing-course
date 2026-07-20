---
id: m05.s11
title: Normative synthesis and the olfaction hook
lede: Taste is the best evidence in this course that loss functions shape sensory architecture. Two chemosenses, one chemistry, opposite designs.
estimatedMinutes: 11
---

## Scoring the theories

**The strongest result is qualitative but compelling.** Receptor breadth allocated by loss function — twenty-five bitter receptors converging on one axis, one sweet receptor for a bounded category — explains a striking design fact from task structure alone, and it makes correct cross-modality predictions (§5.3).

**The contested result** is labelled lines versus ensemble coding, and it is still contested. Labelled lines are secure at the periphery, where receptor-swap experiments dissociate receptor identity from cell identity and behaviour follows the cell [@chandrashekar2006]. The convenient summary that the centre is therefore distributed is weaker than it is usually stated: quality-specific cortical fields exist, and optogenetically activating them substitutes for the tastant even in animals that have never tasted it [@kandel2021]. §5.4 sets out why stage-matching organises the dispute without settling it.

**What is missing:** no quantitative derivation of receptor tuning breadth from measured statistics of natural food chemistry. In principle this is the *easiest* such calculation in the course — the space is small and the categories are behaviourally defined — and it has not been done.

<x-mcq>
<script type="application/json">
{
  "id": "m05.s11.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The section calls the receptor-tuning calculation \"the easiest such calculation in the course\" and notes it has not been done. If it were done and *failed* — measured food chemistry did not predict the observed allocation of receptor breadth — what would that most likely indicate?",
  "options": [
    {
      "text": "That the relevant ensemble is the ancestral one, not the contemporary one, since the allocation was fixed by selection over evolutionary time under a diet nobody can now sample.",
      "correct": true,
      "feedback": "This is the most likely diagnosis, and it is a problem the vision and audition calculations largely escape because natural image and sound statistics are approximately stable over the relevant timescales. Food chemistry is not: domestication, cooking and range shifts have all moved the distribution. The failure mode is a mismatch between the ensemble that shaped the system and the ensemble available to measure — and it generalises to every normative calculation on a slowly evolved structure. The comparative fix is to run it across species with stable, differing ecologies rather than on humans."
    },
    {
      "text": "That the loss-function argument is wrong, and receptor breadth is set by chemistry after all.",
      "correct": false,
      "feedback": "Correct under the assumption that the quantitative calculation is a direct test of the qualitative argument. It is not quite: the loss argument predicts that breadth tracks *the cost structure over outcomes*, which a calculation based on encounter statistics alone does not measure. You could get the frequencies right and the costs wrong and fail. Distinguishing 'the theory is wrong' from 'the wrong quantity was measured' is the recurring difficulty with normative failures, and it is why the course insists the objective be stated before the comparison."
    },
    {
      "text": "That the calculation was mis-specified, because bitter breadth is driven by the open-endedness of the toxin set rather than by the frequencies of any measurable compounds.",
      "correct": false,
      "feedback": "Partly correct, and it identifies a genuine specification problem: §5.1's argument for bitter breadth is about a set that *cannot be enumerated*, so no sampling of current food chemistry captures it. But this predicts failure specifically for bitter while leaving sweet, umami and sour tractable, so it would show up as a partial rather than a global failure. Treat it as a reason to expect the calculation to work unevenly rather than as a diagnosis of total failure."
    },
    {
      "text": "That taste's dimensions are defined by consequence rather than chemistry, so a calculation over chemical statistics could never have worked.",
      "correct": false,
      "feedback": "Correct under a strong reading of §5.2's point about consequence-defined dimensions — and it is the deepest of the four options. But it proves too much: the categories being behaviourally defined is what makes the space small and the calculation *tractable*, per the section above. Once the categories are fixed, asking how much receptor breadth each should get is a well-posed question about the chemistry within them. The consequence-defined axes set the problem up rather than dissolving it."
    }
  ]
}
</script>
</x-mcq>

## Datasheet row

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="Gustation is the control condition. Highlight it, then highlight Olfaction, and compare the two columns: they agree on array ordering and metric structure and disagree on dimensionality. Since gustation has none of olfaction's difficulties, that disagreement localises the cause.">
</x-figure>


| Property | Gustation |
|---|---|
| Array ordering | **unordered** |
| Dimensionality | **~5, low at source** |
| Tuning breadth | narrow (sweet) to very broad (bitter) — allocated by loss |
| Distinctions | **deliberately collapsed** |
| Loss function | **grossly asymmetric** |
| Coding | near labelled-line peripherally |
| Learning | largely innate, plus one-trial aversion |
| Synapses to action | 2–3 for the rejection reflex |
| Teaching signal | **post-ingestive, delayed, ground-truth** |

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
<strong>1. Unordered does not entail high-dimensional.</strong> Taste is unordered like olfaction and low-dimensional unlike it, and has none of olfaction's difficulties. That dissociates two properties that vary together in the vision/olfaction comparison, and localises the source of the difficulty: <strong>it is dimensionality, not disorder.</strong>

<strong>2. Which olfactory distinctions are worthless?</strong> Taste collapses hundreds of bitter compounds because the action is the same for all of them. The question for olfaction is which distinctions are similarly worthless — and the prediction, confirmed, is that innate-valence pathways collapse while identity pathways preserve (§3.8, §5.3).

<strong>3. Coordinates could be defined by consequence rather than by chemistry.</strong> Taste's dimensions are nutritional categories, not chemical families. §14's search for olfactory coordinates has been posed as a statistics-of-the-stimulus problem; taste suggests a second possibility, where coordinates come from what odours <em>do</em>. Both could hold in different pathways.

<strong>4. Receptor swaps settle coding disputes.</strong> Express a bitter receptor in a sweet cell and behaviour follows the cell. The olfactory analogue — swap which receptor a glomerulus expresses, ask whether behaviour follows receptor or glomerulus — is feasible and would settle several arguments about what glomerular identity means.

<strong>5. Learning rules track the teacher's statistics.</strong> One-trial learning tolerating hour-long delays is optimal when the teaching signal is delayed and rare. Both chemosenses face delayed consequences, and both should differ from vision in the same direction.
</x-callout>

<x-free-response>
<script type="application/json">
{
  "id": "m05.s11.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Gustation is included as a control condition. State precisely what it controls for, what it fails to control for, and then say whether the module has earned its central conclusion — that olfaction's difficulties come from dimensionality rather than disorder.",
  "modelAnswer": "**What it controls for.**\n\nIn a two-modality comparison of vision and olfaction, four properties move together: ordered versus unordered, metric versus non-metric, low- versus high-dimensional, narrowly versus broadly tuned. No inference about which one causes olfaction's difficulties is available, because they are perfectly confounded.\n\nGustation breaks the confound at one point. It is **unordered and non-metric like olfaction, and low-dimensional and mostly narrowly tuned unlike it** — and it has none of olfaction's problems. No demixing problem worth the name, no expansion recoding, no combinatorial explosion, no difficulty defining the stimulus space. That dissociates disorder from dimensionality, which is a real result and one that two modalities cannot supply.\n\n**What it fails to control for.**\n\nSeveral things, and they should be stated rather than glossed.\n\n*Transport.* Taste's stimulus arrives by direct contact at millimolar concentrations; olfaction's arrives through turbulent air. The chaotic, effectively irreversible forward map that makes olfactory inference ill-posed (§3.1) is absent from taste and has nothing to do with dimensionality. This is the largest uncontrolled difference and arguably explains as much as dimensionality does.\n\n*Consumers.* Taste serves one decision; olfaction serves an open-ended set. §5.1 argues this shapes everything about taste's design, which means it also confounds the comparison the module wants to make.\n\n*Coordinates.* Taste's dimensions were fixed by consequence before any coding question arises. Olfaction's are unknown. A sense with five known axes and a sense with a thousand unknown ones differ in more than the count.\n\n*Stationarity, sensor speed, and the presence of a ground-truth teaching signal* all differ too.\n\n**Has the conclusion been earned?**\n\nPartly, and the honest statement is narrower than the one the callout makes.\n\nWhat has been earned: **disorder alone is not sufficient** for olfaction's difficulties. That is a valid inference from a single well-chosen negative case, and it is worth having, because a great deal of writing about olfaction treats unorderedness as the source of the trouble.\n\nWhat has not been earned: that dimensionality is *the* cause. That requires ruling out the uncontrolled differences above, and the design cannot do it — with three modalities and six differing properties, the comparison is under-determined however it is arranged. The strongest available upgrade is a within-olfaction comparison across species whose receptor repertoires differ by an order of magnitude while transport, chemistry and tuning breadth stay fixed.\n\n**The methodological point is the durable one.** A control condition licenses the negative claim it was designed for and no more. The value of gustation here is that it converts a plausible story about disorder into a refuted one, and that is a smaller and more useful thing than the positive claim it is usually recruited to support.",
  "rubric": [
    "States the confound in the two-modality comparison — ordering, metric, dimensionality and tuning breadth all covary",
    "Identifies precisely what gustation dissociates: unordered but low-dimensional, with none of the difficulties",
    "Names at least two uncontrolled differences, ideally including turbulent transport and the single-consumer loss function",
    "Distinguishes the earned negative claim (disorder is not sufficient) from the unearned positive one (dimensionality is the cause)",
    "Bonus: proposes the within-olfaction cross-species comparison as the design that would settle it",
    "Bonus: draws the general methodological point that a control licenses only the negative claim it was built for"
  ]
}
</script>
</x-free-response>
