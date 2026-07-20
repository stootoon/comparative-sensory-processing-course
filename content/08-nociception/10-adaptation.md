---
id: m08.s10
title: Adaptation, gain control, and state
lede: Every other modality in this course reduces gain under sustained input. This one increases it. The inversion is derivable rather than anomalous — and it makes chronic pain a failure mode of an otherwise sensible design.
estimatedMinutes: 15
---

This is the section the module exists for.

The course has run the same argument nine times. Sustained input is redundant; redundancy is wasted capacity; therefore reduce gain, re-centre the dynamic range on the current distribution, and spend resolution where the input actually varies. Photoreceptor calcium feedback, contrast adaptation, synaptic depression, level-statistics re-tuning [@dean2005], olivocochlear efferent gain, receptor adaptation in taste, canal mechanical decay in the vestibular system — all the same sign.

**Nociception goes the other way.** After injury, peripheral thresholds fall and central responses grow. The system becomes *more* sensitive to the thing it has just detected, and stays that way for hours to weeks.

The point of this section is that the inversion is not an exception to the principle. It is the principle, correctly applied to a signal with a different temporal structure.

## The two mechanisms

**Peripheral sensitization.** Tissue injury releases a chemical mixture at the site: bradykinin, substance P, nerve growth factor, ATP, histamine, serotonin, prostaglandins, leukotrienes, acetylcholine [@kandel2021]. These act, directly and indirectly, to lower the activation threshold of nociceptor terminals. Bradykinin is among the most potent, activating Aδ and C nociceptors directly and triggering prostaglandin synthesis nearby; cyclooxygenase-2 is preferentially induced under inflammation, and blocking it is how aspirin and ibuprofen work. Nerve growth factor and BDNF are upregulated in inflamed tissue and are causative rather than incidental — NGF-neutralising antibodies are analgesic in animal models, and inhibiting NGF signalling blocks pain about as effectively as COX inhibitors or opiates [@kandel2021].

There is also a positive feedback loop with no analogue elsewhere in the course. Substance P and CGRP released from the *peripheral* terminals of C fibres produce plasma extravasation and vasodilation — **neurogenic inflammation** — which liberates further bradykinin, which further sensitizes the nociceptors [@kandel2021]. The sensor modifies its own environment in the direction of increasing its own gain.

**Central sensitization.** Under persistent injury, C fibres fire repetitively and dorsal horn responses grow progressively — "wind-up", involving NMDA receptors [@kandel2021]. Cumulative depolarisation relieves the magnesium block, calcium enters, second messengers and protein kinases are recruited, immediate-early genes are expressed. Kandel's chapter 20 describes the resulting change as a "memory" of the state of C-fibre input, and notes the mechanistic parallel with long-term potentiation elsewhere in the brain.

The parallel deserves emphasis in this course's terms. **The dorsal horn implements a synaptic plasticity rule that is standardly discussed as a substrate of learning, and uses it for gain control.** Sensitization is not adaptation running backwards; it is a memory mechanism recruited into a sensory pathway.

<x-figure src="content/08-nociception/figures/sensitization-gain.js"
  caption="Slide the persistence of the underlying cause. The sign of the optimal gain change flips when the reported state stops being transient — which means the inversion is a consequence of the signal's temporal structure rather than a fact about nociception. Any modality reporting a slow, unresolved, action-demanding state should sensitize. Switch to the derived view and watch the crossover.">
</x-figure>


## The normative argument

Every adaptation argument in this course rests on a premise that is usually left implicit: **repeated input is redundant with what has already been reported.** That premise holds when the signal's referent is transient. A photon arrives and the event is over; the next photon is a new sample of a continuing process, and the informative quantity is the change.

Nociception's referent is not transient (§8.2). When tissue is damaged, the damage persists and continues to matter for hours to weeks. And crucially, the signal is not only a report about the world — **it is a report that a required action has not yet been taken.**

That changes the information content of repetition completely. Continued afferent traffic from an injured region does not say "still the same photon flux". It says *the wound is still open, still unprotected, still not healed.* Habituating to that would amount to concluding that an unrepaired injury had stopped mattering, which is precisely the miss the whole system is built to prevent. Under §8.1's cost matrix it is the worst available policy.

Two further considerations push the same way.

**The prior has changed.** Damaged tissue is more likely to be damaged further — it is weakened, exposed, and being used by an animal that has not yet stopped using it. A Bayesian detector should raise its sensitivity in a region whose prior probability of injury has risen. The silent nociceptors of §8.4, recruited into the array by inflammation, are the array-level implementation of exactly this.

**The optimal action has changed.** Before injury, the correct behaviour is normal use with a detector watching. After injury, the correct behaviour is protection, and protection has to be *enforced* against the animal's other goals. Raising the gain so that ordinary movement of the injured part becomes painful is a mechanism for enforcing a behavioural policy, not for improving an estimate. Allodynia, read this way, is not a malfunction but the intended output — it is what makes you keep weight off a sprained ankle.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The general principle, restated so it covers both signs</div>
The course has been stating the adaptation principle too narrowly. Here is the version nociception forces.

<strong>Adjust gain to maximise the decision value of the signal, given the timescale over which the reported variable stays actionable.</strong>

<em>If the referent is transient</em>, repetition is redundant and further reports have low decision value → <strong>reduce gain</strong>. This covers vision, audition, touch, taste, the vestibular system.

<em>If the referent persists and demands an action not yet taken</em>, repetition is confirmation that the problem is unresolved, and further reports have high decision value → <strong>raise gain</strong>. This covers nociception.

<strong>Why this is better than the old statement.</strong> It predicts the sign rather than assuming it, so it could have been wrong. It identifies the variable that determines the sign — persistence of the referent — which is measurable. And it makes a testable prediction about modalities the course has not covered: itch (persistent, action-demanding: should sensitize, and does) and nausea (persistent, action-demanding: should sensitize, and does).

Compare §11.4's treatment of adaptation timescales, which lays modalities on a log-time axis and asks whether timescale tracks the volatility of the input statistics. <strong>That figure has no axis for the sign.</strong> Adding one would be the single most informative amendment nociception makes to the comparative datasheet.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m08.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Nociception raises gain under sustained input where every other modality lowers it. Which account of the inversion is strongest — meaning it predicts the sign rather than accommodating it, and generalises beyond this modality?",
  "options": [
    {
      "text": "The sign of the optimal gain change depends on whether the reported referent is transient or persistent. Repetition is redundant only when the referent is transient; when it persists and demands an unresolved action, repetition is confirmation and its decision value is high.",
      "correct": true,
      "feedback": "This is the account, and its virtue is that it is the *same* principle with the premise made explicit rather than a second principle bolted on. It predicts the sign from a measurable property of the signal, and it generalises correctly to itch and nausea, which sensitize, and to warmth and pressure, which adapt. It also makes a prediction the course can act on: any olfactory pathway reporting a persistent action-demanding state should sensitize, which §8.8 turns into an experiment nobody has run."
    },
    {
      "text": "Nociception is a detection system rather than an encoding system, and detection systems should become more sensitive after a positive detection because the prior has risen.",
      "correct": false,
      "feedback": "Correct under the assumption that the Bayesian prior update is the whole story, and the section endorses this as one of three contributing arguments — silent nociceptor recruitment is exactly a prior-driven sensitivity increase. But taken alone it predicts sensitization should decay as the prior relaxes toward baseline, and it does not explain why the gain increase is expressed as *pain on ordinary movement* rather than as a lowered detection threshold for genuinely noxious stimuli. The enforcement-of-policy argument is needed for that, and this option leaves it out."
    },
    {
      "text": "The asymmetric loss function means misses are catastrophic, so the system should always be pushed toward maximum sensitivity, and sensitization is that push.",
      "correct": false,
      "feedback": "Correct under the assumption that the asymmetry recommends maximum sensitivity unconditionally. It does not, and the section that shows this most clearly is §8.9: stress-induced analgesia takes the gain to near zero under the same loss function. If maximum sensitivity were always right, descending suppression would be inexplicable. The loss function sets the criterion; what varies the gain is the decision value of the report, which depends on state and on the persistence of the cause."
    },
    {
      "text": "The mechanisms are different in kind — inflammatory mediators and NMDA-dependent plasticity rather than calcium feedback and synaptic depression — so there is no reason to expect the same sign.",
      "correct": false,
      "feedback": "Correct under the assumption that mechanism determines sign, and the mechanistic description is accurate. But this makes the inversion a brute fact rather than an explanation, which is exactly what the course means by descriptive neuroscience with a normative sentence attached. It also gets the direction of explanation backwards: the question is why evolution recruited a potentiating mechanism here and a depressing one elsewhere, and 'because the mechanisms differ' restates the observation."
    }
  ]
}
</script>
</x-mcq>

## Where the account stops working: chronic pain

The course's rule is to be honest where the literature disagrees, and this is the place.

Everything above argues that sensitization is the right policy. But **persistent pain outlasting its cause is one of the largest disease burdens in medicine**, and chronic pain, as Kandel's chapter 20 puts it, appears to serve no useful purpose. An account that declares the design optimal owes an explanation of that.

Three positions, and the course should not pretend to adjudicate between them.

**Position one: chronic pain is the same mechanism running past its useful range.** Sensitization is adaptive over days and maladaptive over months, and nothing in the mechanism knows the difference. On this reading it is a straightforward failure of a control system with insufficient feedback about whether the cause has resolved. Attractive, and it makes a prediction: restoring accurate feedback about tissue state should terminate it. That prediction is not well supported.

**Position two: chronic pain is a distinct pathology sharing machinery with the adaptive process.** Neuropathic pain follows direct injury to nerves rather than to tissue, involves loss of GABAergic inhibitory control in the dorsal horn, microglial activation, and inappropriate engagement of nociceptive circuits by Aβ afferents [@kandel2021]. It responds poorly to NSAIDs and to opiates, and is treated first-line with anticonvulsants. **A condition with different mechanisms, different pharmacology and a different trigger is arguably a different thing**, and calling it sensitization gone too far may be a verbal move rather than a claim.

**Position three: the boundary is not characterised, and that is the honest state of the field.** There is no accepted marker distinguishing useful sensitization from pathological sensitization. Both involve NMDA-dependent potentiation, both involve reduced inhibition, both involve altered gene expression. The clinical distinction is made on duration and on whether a cause can be found — which is a diagnosis of exclusion, not a mechanism.

**The course's position is the third**, and it has a specific consequence for this module. §8.11 cannot score nociception's adaptation account as a success on the strength of the normative argument alone. The argument explains why gain should rise; it does not explain what stops it, and the thing that stops it is the part that fails clinically. **An optimality account that has nothing to say about the termination condition of the process it justifies is incomplete in a way that matters.**

<x-free-response>
<script type="application/json">
{
  "id": "m08.s10.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "State the termination problem precisely: what would a complete normative account of sensitization have to specify that this section does not, and design the strongest available test of whether the system implements it.",
  "modelAnswer": "**The problem.**\n\nThe section derives an increase in gain from the persistence of an unresolved, action-demanding referent. That derivation is a statement about the *onset* condition. A control policy needs both: raise gain when the state is unresolved, and **return gain to baseline when it resolves**. The second half has been left entirely unspecified, and it is not a detail — a controller with a well-motivated activation rule and no termination rule is not a controller, it is a latch.\n\nSpecifying it requires answering: what signal reports that healing is complete? The system has no direct measurement of tissue integrity. It has the absence of inflammatory mediators, which is an indirect and slow proxy, and it has the animal's own behaviour — the injured part being used without further insult. Both are weak, and both are exactly the kind of evidence that a sensitized system biases: a sensitized nociceptor reports pain on ordinary use, which the controller could read as continuing insult. **The termination signal is corrupted by the state it is supposed to terminate.** That is a positive feedback loop at the level of the policy, not just at the level of the neurogenic inflammation of §8.10, and it is the clearest normative account available of why chronic pain should be a common failure rather than a rare one.\n\n**The test.**\n\nThe hypothesis is that resolution is inferred from the absence of further insult during normal use, and that sensitization persists when that inference is blocked. So manipulate the availability of the disconfirming evidence while holding the injury fixed.\n\nDesign: produce a standardised, genuinely resolving peripheral injury. In one group, allow normal use of the part during healing. In a second, prevent use — immobilise, or make use impossible — so the animal never accumulates evidence that the part can be loaded without insult. In a third, allow use but pair it with a mild noxious stimulus early in healing, so that the evidence accumulated is misleading in the direction of continuing insult. Measure the time course of mechanical threshold recovery, and of central sensitization markers, long after the tissue has healed.\n\nThe prediction: resolution time should track the *evidence available about resolution*, not the tissue's actual healing time. Group two should sensitize for longer than group one despite identical tissue outcomes; group three longer still.\n\n**What each result would mean.** If resolution time tracks tissue healing regardless of the behavioural manipulation, the termination rule is peripheral and biochemical, the policy-level story is wrong, and chronic pain needs an explanation that is not about inference. If it tracks the evidence, the account is supported and it makes an immediate clinical prediction — that early graded, safe loading of an injured part should shorten sensitization, which is testable in humans and is roughly what physiotherapy already assumes without this justification.\n\n**The honest caveat.** The design cannot separate 'the animal infers resolution' from 'use itself has some direct anti-sensitizing effect' — for instance via the Aβ-driven inhibition of §8.5, which is engaged by movement and would confound every group. Adding a condition with passive Aβ stimulation and no loading would address it, and this is the kind of confound the course wants named rather than discovered afterwards.",
  "rubric": [
    "Identifies that the account specifies an onset condition and no termination condition, and says why that is fatal to it as a control policy",
    "Notes that the system has no direct measurement of tissue integrity and must infer resolution from proxies",
    "Identifies the key corruption: a sensitized system's own output biases the evidence used to decide whether to desensitize",
    "Proposes a manipulation of the evidence about resolution while holding tissue injury fixed",
    "States what each outcome would mean, including what would refute the account",
    "Bonus: names the Aβ-stimulation confound, or an equivalent alternative explanation for the effect of use",
    "Bonus: draws the clinical prediction about early safe loading"
  ]
}
</script>
</x-free-response>

## The other timescales

For completeness, and because the datasheet needs them, nociception's gain changes span an unusually wide range.

**Milliseconds to seconds.** Wind-up in the dorsal horn, building over a train of C-fibre inputs at 1 Hz [@kandel2021]. Upward.

**Minutes to hours.** Peripheral sensitization by inflammatory mediators; primary and secondary hyperalgesia around a burn, with the hyperalgesic area larger than the visible flare and outlasting it [@kandel2021]. Upward.

**Hours to days.** NGF-driven transcriptional changes, BDNF upregulation, and altered channel expression in the nociceptor. Upward.

**Seconds to hours, and the only downward one.** Descending control from PAG and RVM (§8.9), set by behavioural state. Downward, and it is the only fast mechanism in the list that reduces gain.

**Lifetime.** Cortical and thalamic map reorganisation after limb loss or chronic disuse [@kandel2021]. Sign unclear, and implicated in phantom limb pain.

The pattern is stark once laid out: **every bottom-up mechanism increases gain and the only decreasing mechanism is top-down.** That is the opposite of the arrangement in vision and audition, where peripheral adaptation does most of the gain reduction and descending control provides comparatively subtle modulation. It is a design in which the sensor cannot turn itself down and only the brain can — which is exactly what §8.1's cost matrix recommends, and exactly why the system is vulnerable when the brain's control is disrupted.
