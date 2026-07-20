---
id: m03.s10
title: Adaptation, gain control, and state
lede: Olfactory adaptation is fast, strong, and in tension with itself — because the same high-pass filtering that removes a stale background also removes the temporal statistics that carry spatial information.
estimatedMinutes: 12
---

Adaptation runs at every level: receptor neurons through calcium feedback, the bulb through granule-cell inhibition and centrifugal modulation, and cortex strikingly rapidly — piriform responses to a sustained odour decline within seconds, which is faster than most cortical adaptation elsewhere.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Olfaction against the rest. Two things stand out: cortical odour adaptation is at the fast end of anything here, and bulbar neurogenesis is at the extreme slow end — a span of six orders of magnitude within one modality. The volatility view tests whether that fast end is what the non-stationarity argument predicts.">
</x-figure>


## The background problem

The functional case is clear. An animal in a stable odour environment needs to detect *changes*, and a receptor tonically occupied by a background odour is wasting its dynamic range. Adapting away the background restores sensitivity to new arrivals.

This is the same argument as light adaptation, and it produces the same signature: neurons that respond transiently to onsets rather than reporting sustained concentration.

It also produces the interpretive trap the course keeps flagging. A neuron that has successfully subtracted a predictable background **goes quiet**, and looks unresponsive. Common-feature subtraction and temporal contrast coding are normative accounts of exactly this, and they explain why unbiased recordings find so many apparently silent cells: silence is a result.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A conflict specific to olfaction</div>
Here is a tension that only becomes visible once §3.2's plume statistics are taken seriously, and it does not arise in vision or audition.

<strong>Adaptation is high-pass filtering.</strong> It removes slow components and emphasises change.

<strong>But the informative signal is the fluctuation statistics themselves</strong> — intermittency, whiff durations, blank durations, correlations between sampling points. Those live across a broad band, and the low-frequency components carry information about distance.

So adaptation tuned to remove backgrounds will also attenuate part of the signal carrying spatial information. In vision this conflict does not arise, because the slow components adaptation removes are illumination — a nuisance variable the animal genuinely does not care about. In olfaction the slow components are not obviously nuisance.

<strong>How the system resolves this is unknown, and it is a good question.</strong> One possibility: the mitral/tufted split (§3.5) separates the two demands, with one class adapted for change detection and the other preserving slower structure. That is testable, and it would be a second functional rationale for a split whose purpose is contested.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout ends by suggesting the mitral/tufted split could resolve the adaptation conflict, with one class adapted for change detection and the other preserving slower structure. How should a careful reader hold that suggestion?",
  "options": [
    {
      "text": "As a proposal that is attractive because it is testable and because it would supply a second rationale for a split whose function is contested — but which is currently supported by no direct evidence that the two classes differ in adaptation dynamics in the way it requires.",
      "correct": true,
      "feedback": "This is the right register, and getting it right matters more than it looks. §3.5 offers a speed–accuracy reading of the mitral/tufted split as one possible account among several; it is not established that the split exists to do that, let alone that it also resolves the adaptation conflict. The suggestion here is a second, independent job the same anatomy could be doing. Its value is that it names a measurement — compare adaptation time constants and high-pass characteristics across the two classes under sustained backgrounds — not that it settles anything."
    },
    {
      "text": "As an established functional division, since the speed–accuracy account of mitral and tufted cells is well supported.",
      "correct": false,
      "feedback": "Correct under the assumption that a well-motivated normative account of an anatomical split is thereby confirmed — a slide this course flags repeatedly and this section is designed to catch. Tufted cells do fire earlier and at lower concentrations, which is a measurement. The speed–accuracy *interpretation* of why the split exists is a proposal, and the further claim that it also solves the adaptation conflict has not even been tested. Two inferential steps, neither taken."
    },
    {
      "text": "As untestable, since adaptation dynamics and response latency are confounded in any recording from the two classes.",
      "correct": false,
      "feedback": "Correct under the assumption that the classes can only be compared during transients, where latency and adaptation are hard to separate. But the discriminating measurement is made during *sustained* backgrounds, where the question is which class continues to report slow concentration structure after seconds of exposure — a regime in which onset latency is no longer in play. The confound is real for the speed–accuracy claim and largely absent for this one."
    },
    {
      "text": "As unnecessary, since receptor-level calcium adaptation already resolves the conflict by leaving the low-frequency components intact.",
      "correct": false,
      "feedback": "Correct under the assumption that ORN adaptation is incomplete enough to preserve slow structure, which is partly true — adaptation is rarely total, and a residual DC signal survives. But partial preservation is not a resolution: the conflict is about whether the *statistics* of the fluctuations, including blank durations spanning seconds, survive a high-pass stage. A leaky high-pass filter still distorts them, and nothing in receptor physiology suggests the leak is tuned to preserve the informative band."
    }
  ]
}
</script>
</x-mcq>

## State and centrifugal modulation

The bulb receives more centrifugal input than it does sensory input — from piriform, anterior olfactory nucleus, and cholinergic, noradrenergic and serotonergic systems. Mitral cell responses differ substantially between anaesthetised and awake states, and with hunger, satiety and task engagement.

§3.6 argued this feedback provides the gain control and gating that thalamus supplies elsewhere. Note the consequence for interpretation: **a bulbar response measured under anaesthesia is a response with the modulator input removed** — closer to LGN in a slice than to LGN in a behaving animal.

## Adult neurogenesis

The bulb continuously adds granule cells throughout life. §3.2 offered the normative argument: if odour statistics are non-stationary and the decorrelating transformation must track them, machinery for continuously rebuilding that transformation is a requirement rather than an oddity.

The prediction that follows is testable. Neurogenesis rate should depend on the **volatility** of the odour environment, not merely on its richness. An animal in a complex but stable odour world should need less rebuilding than one in a simpler but rapidly changing one — and the standard enrichment paradigms confound the two.

<x-matrix>
<script type="application/json">
{
  "id": "m03.s10.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Adaptive process",
  "prompt": "Adaptation is not one thing. For each olfactory process below, name the variable it tracks — the quantity whose change the process is trying to follow. Answer in a word or two before checking; the point is that four mechanisms in one modality are chasing four different things, which is why they can be in conflict.",
  "rows": [
    "ORN calcium feedback",
    "Rapid piriform adaptation",
    "Centrifugal modulation of the bulb",
    "Adult neurogenesis"
  ],
  "columns": ["Variable tracked"],
  "cells": {
    "ORN calcium feedback|Variable tracked": { "answer": "recent concentration", "accept": ["concentration","recent concentration","background concentration","ambient concentration","mean concentration","local concentration"] },
    "Rapid piriform adaptation|Variable tracked": { "answer": "stimulus novelty", "accept": ["novelty","familiarity","recency","whether the odour is new","stimulus novelty","recent history"] },
    "Centrifugal modulation of the bulb|Variable tracked": { "answer": "behavioural state", "accept": ["state","behavioural state","behavioral state","internal state","arousal","task demands","hunger","attention"] },
    "Adult neurogenesis|Variable tracked": { "answer": "environmental statistics", "accept": ["statistics","odour statistics","odor statistics","environmental statistics","input statistics","volatility","correlation structure"] }
  },
  "modelAnswerNote": "Four processes, four variables, and timescales spanning six orders of magnitude — which is the substance of the figure at the top of the section.\n\nThe reason to lay them out this way is that it makes the conflict in the callout precise. The receptor process tracks concentration and removes it; the neurogenesis process tracks the statistics of concentration and needs them preserved. **One mechanism is discarding what another is trying to estimate.** That is not a paradox, but it does mean the two cannot both be operating on the same signal at the same stage, and locating where they are separated is an experiment nobody has done.\n\nThe comparative point: vision has processes at every one of these timescales except the slowest, and its slow end is developmental rather than continuous. If the non-stationarity argument in §3.2 is right, that difference is a consequence of odour statistics being non-stationary in a way image statistics are not — which is a claim about the world, and therefore checkable independently of any neuroscience."
}
</script>
</x-matrix>
