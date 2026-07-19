---
id: m10.s05
title: Architecture
lede: Pathway depth tracks deadlines, not evolutionary age. Thalamus is not one thing. And the consumer determines the code — which is the lesson that most changes what you would go and measure.
estimatedMinutes: 18
---

## The motif set

The last subsection discharges Lesson 6 — the consumer determines the code — and the architectural face of Lesson 7. It is where the course's most-repeated structural claims get tested against the assembled table rather than asserted one modality at a time.

## Pathway depth tracks the deadline

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Sort by deadline and then by synapses to action, and the two orderings largely agree — which is the evidence for the claim that depth is set by how fast the fastest dependent behaviour must be, not by evolutionary age. Then sort by synapses to cortex and watch the agreement break: olfaction sits at two synapses to cortex with a 200 ms deadline, while gustation reaches cortex in four with a deadline of half a second. Depth to action and depth to cortex are answering different questions.">
</x-figure>

The claim: the number of synapses between receptor and the fastest dependent motor output is set by the deadline of that behaviour and by how much must be computed before the signal is usable. Not by phylogenetic antiquity.

The evidence is the joint ordering. Vestibular reaches motor output in three synapses with a 10 ms deadline for the VOR. Touch reaches withdrawal in two. Gustation reaches the gape reflex in two to three. Olfaction reaches cortex in two, with a discrimination deadline near 200 ms [@uchida2003].

The antiquity hypothesis makes the competing prediction: olfaction is shallow because it is old, and depth reflects when a system evolved rather than what it must do. The two accounts are distinguished by cases where age and deadline come apart, and the strongest such case is the spinocerebellar pathway. It bypasses thalamus entirely, is not phylogenetically ancient in the way olfaction is, and shares with olfaction exactly the two features the computational hypothesis names: a tight deadline and a consumer that wants speed rather than re-mapping. **That is a genuine dissociation and it favours the computational account** — though one dissociation is one dissociation, and the honest summary is that the computational hypothesis is better supported, not established.

## Obligatory relays, and what thalamus is actually for

Vision has LGN. Audition has IC and MGB. Touch has VPL for the discriminative route. Olfaction has none — bulb projects directly to cortex.

Treating this as a single mysterious fact is the error the course has tried to avoid. The productive move is to decompose thalamus into the services it provides, then ask, service by service, whether olfaction implements it and where:

| Thalamic service | Olfactory implementation |
|---|---|
| Gating by state and attention | Present — centrifugal modulation of the bulb, cholinergic and noradrenergic |
| Gain control and normalisation | Present, but in the bulb and in piriform recurrence [@bolding2018] |
| Feedback loop with cortex | Present — massive cortical feedback onto granule cells |
| Multimodal convergence before cortex | Largely absent |
| Re-mapping into a different coordinate system | Not evidently required — no metric to re-map |
| Sleep-state control of throughput | Present in some form; least well characterised |

Read this way, olfaction implements most thalamic services, just not in a thalamus. What it plausibly does *not* need is the re-mapping service — and the reason is Lesson 3 again. LGN and MGB preserve and refine a topographic organisation; a large part of what a relay does is maintain a coordinate frame. With no metric there is no frame to maintain.

**The interesting caveat:** LGN is not merely a relay either. It receives more feedback from cortex than feedforward from retina, and its efficient-coding credentials are real but modest — it whitens, and the whitening is demonstrable [@dan1996]. If the bulb performs the analogous decorrelation [@friedrich2001], then the bulb is doing retina's job and LGN's job in one structure, which is a coherent reading of why the pathway is short. This is a proposal, not a result: nobody has shown that bulbar decorrelation and LGN whitening are quantitatively the same operation on their respective inputs, and that comparison is a well-posed piece of analysis waiting to be done.

## Streams and their three causes

10.4 covered the split motif dynamically. The architectural point is that the three reasons for splitting produce different *anatomical* signatures, and conflating them causes people to look in the wrong place:

- **Conflicting invariance requirements** produce two long parallel pathways diverging early and staying separate to their respective consumers. Look for a second cortical target.
- **Conflicting loss functions** produce a short pathway to a valence structure alongside a long pathway to an identity structure. Look for an amygdalar or hypothalamic branch.
- **Conflicting deadlines** produce two pathways carrying the *same content* at different latencies. Look for two cell types in the same nucleus with different conduction and integration properties.

Olfaction's confirmed instance is the loss-function split; its proposed instance is the deadline split; its predicted-and-unlocated instance is the invariance split. The anatomical prescription above says where to look for the missing one: a second cortical target receiving bulbar input, whose neurons track source location while identity-tuned regions do not.

<details class="x-deeper">
<summary>Why invariance splits are forced rather than convenient</summary>

Let the stimulus be described by a latent identity $c$ and a latent location $x$. A representation $r$ that is invariant to $x$ satisfies $r(c, x) = r(c, x')$ for all $x, x'$. A representation that is informative about $x$ must satisfy $r(c,x) \neq r(c,x')$ for some pairs. **No single representation can satisfy both**, so if both quantities are needed downstream, two representations are required. This is not an efficiency argument or an engineering preference — it is a statement about functions, and it is why the split appears in three modalities with completely unrelated receptor geometries.

The subtlety, and the reason this is worth stating formally: the argument forces two representations, not two *pathways*. Interleaved populations within one region would satisfy it. Anatomical segregation is an additional fact requiring an additional explanation — wiring cost, or different downstream targets, or different learning rules. So the strong prediction for olfaction is that *some* population must be location-informative while the identity population is location-invariant; the prediction that they occupy distinct anatomical regions is weaker and should be held more loosely. Anyone searching for an olfactory 'where' stream by looking for a separate region may be imposing an assumption the argument does not license.
</details>

## The consumer determines the code

Lesson 6, and the one most likely to redirect a research programme.

The demonstration is proprioceptive. Clarke's nucleus recodes muscle lengths into global limb variables by the second synapse — not because muscle length is a bad thing to represent, but because the consumer is the cerebellum, running a forward model for control, and it wants limb-level variables [@wolpert1995]. The first circuit is performing a coordinate transformation, not a decorrelation.

The second demonstration is gustatory. Taste collapses hundreds of bitter compounds onto one axis because the consumer makes one binary decision under a wildly asymmetric loss [@chandrashekar2006]. Vision preserves metric detail because its consumers are open-ended and unknown in advance.

And proprioception supplies the encouraging structural point: **ordering has three states, not two.** Ordered by the relevant variable; unordered; and ordered by an *irrelevant* variable. Proprioception is the third — its array is ordered by body, not by the estimated variable — and it recodes successfully anyway. A system can construct a basis its receptors do not supply.

### What this predicts for olfaction

**Prediction — if the dominant consumer is navigation, the wanted variables are bearing and distance to source, not molecular identity, and bulbar neurons should be tuned to plume-derived spatial variables.**

This is the module's sharpest claim and it needs its status stated carefully. It is a prediction from an argument, not an established result. Two independent routes reach it: the proprioceptive route above, and the plume-statistics route, which observes that the temporal structure of a plume carries recoverable information about source separation and distance [@celani2014; @tootoonian2025] and that gradient-free search strategies operate on exactly such derived quantities [@vergassola2007]. Two independent derivations converging on the same prediction is worth something, and it is still a prediction.

The experiment is specified: record from the bulb in an animal navigating a real plume in a real flow, and regress responses against plume-derived variables — intermittency, encounter rate, whiff duration, bearing — rather than against odour identity. **Nobody has done this in the form that would settle it.** The reason is the same one that recurs throughout this module: the standard preparation delivers a monomolecular odorant at a fixed port with no flow structure, which sets every one of those regressors to a constant.

**Is the absence real or unlooked-for? Unlooked-for.** And the diagnosis matters, because the two states call for opposite responses. If bulbar spatial tuning is genuinely absent, the interesting question becomes where the navigational variables *are* computed, and the answer is presumably downstream. If it has never been looked for, no theory is needed and an experiment is.

The methodological warning generalises beyond olfaction, and touch supplies it: labelled-line accounts of touch came from artificial stimuli designed to isolate channels [@johnson2001], and the corrective came from asking what the afferent population does under natural contact [@saal2014]. Olfactory experiments overwhelmingly use monomolecular odorants at steady concentration, which is the tactile equivalent of only ever probing with pure tones — and would have produced exactly the same overly-clean picture.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The seven lessons, discharged</div>
<strong>1 — Input statistics determine the code.</strong> Held wherever the ensemble was measured (10.2), and the temporal half of olfaction's ensemble is measured and under-exploited while the chemical half blocks everything else.

<strong>2 — The same principle predicts opposite structures in different regimes.</strong> Whitening at high SNR, pooling at low (10.2). The olfactory test — a sign reversal of decorrelation across a concentration sweep — has not been run.

<strong>3 — Almost every familiar motif presupposes a metric.</strong> 10.3. The corrective is echolocation: an unordered array precludes inherited topography, not central topography of a derived variable.

<strong>4 — Slow sensor, population compensation.</strong> 10.4. Two candidate mechanisms with clean separate signatures, neither tested.

<strong>5 — Subtract what you can predict.</strong> 10.1 and 10.2. Silence is a result; the sniff-triggered versus externally-timed comparison is how you tell a successful subtraction from an absence of response.

<strong>6 — The consumer determines the code.</strong> 10.5. Demonstrated in proprioception and gustation; the olfactory prediction is spatial tuning in the bulb, and it is unlooked-for rather than refuted.

<strong>7 — Early splitting.</strong> 10.4 and 10.5. Olfaction has one confirmed split, one proposed, and one predicted by three independent instances and not located.

<strong>The running theme.</strong> Of the motifs olfaction appears to lack, almost none has been shown absent. In nearly every case the standard preparation — one odorant, fixed port, steady concentration, experimenter's clock — holds constant precisely the variable the motif would be organised around. That is not an indictment of the field; it is the most actionable thing this module has to say.
</x-callout>

<x-matrix>
<script type="application/json">
{
  "id": "m10.s05.mx1", "contentRev": 1, "points": 6,
  "corner": "Question",
  "prompt": "Complete the architecture comparison. The point is which entries dissociate depth from age.",
  "rows": ["Synapses to fastest action", "Deadline of fastest behaviour", "Obligatory thalamic relay", "Dominant consumer"],
  "columns": ["Vestibular", "Olfaction", "Proprioception (cerebellar route)"],
  "cells": {
    "Synapses to fastest action|Vestibular": { "answer": "3", "accept": ["three", "3 (VOR)"] },
    "Deadline of fastest behaviour|Vestibular": { "answer": "10 ms", "accept": ["~10ms", "10", "tens of ms"] },
    "Obligatory thalamic relay|Olfaction": { "answer": "none", "accept": ["no", "absent", "bypassed"] },
    "Obligatory thalamic relay|Proprioception (cerebellar route)": { "answer": "none", "accept": ["no", "bypassed", "bypasses thalamus"] },
    "Deadline of fastest behaviour|Olfaction": { "answer": "200 ms", "accept": ["~200ms", "200", "one sniff"] },
    "Dominant consumer|Proprioception (cerebellar route)": { "answer": "a controller", "accept": ["controller", "cerebellum", "forward model", "motor control"] }
  },
  "modelAnswerNote": "The two thalamus-free rows are the argument. Olfaction and the spinocerebellar route both bypass thalamus, and they are not comparably ancient — but they share a tight deadline and a consumer that wants speed rather than re-mapping. That dissociates the computational explanation from the antiquity explanation, which no single modality could do."
}
</script>
</x-matrix>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s05.q1", "contentRev": 1, "points": 1,
  "prompt": "A colleague argues that olfaction lacks a 'where' stream because a chemical receptor array carries no spatial information, so there is nothing for such a stream to represent. What is the strongest objection?",
  "multi": false,
  "options": [
    { "text": "Audition's receptor array has no spatial dimension either, and audition computes location and splits anyway — so the split follows from the task, not the array.", "correct": true, "feedback": "Correct, and this is why audition earns its place in the course. The cochlea is ordered by frequency, not by space; interaural differences are computed centrally [@carr1990; @mcalpine2001]. If a location stream can be built from an array with no spatial dimension, the argument from array geometry fails, and olfaction's missing stream becomes a gap rather than a structural impossibility." },
    { "text": "Olfaction does have spatial information, from bilateral concentration comparison between the two nostrils.", "feedback": "True and relevant, but it concedes the colleague's framing — it argues that the array does carry spatial information after all. That is a weaker position, because inter-nostril differences are small and the bilateral cue alone is a thin basis for a full location stream. The audition argument is stronger because it does not require the array to carry spatial information at all." },
    { "text": "Plume temporal structure carries information about source distance, so location is recoverable from a single receptor's timecourse.", "feedback": "This is right under the assumption that the relevant location cue is temporal rather than spatial, and there is real support for it [@celani2014; @tootoonian2025]. But it answers a different question: it establishes that the information exists, not that the system splits to represent it. The colleague's claim is about the necessity of a split, and the invariance argument is what addresses that directly." },
    { "text": "Echolocation maps echo delay, a variable no receptor measures, so the periphery does not constrain central organisation.", "feedback": "This is right under the assumption that the question is about central topography. It is a good argument and it appears in 10.3 for exactly that purpose. Here the claim at issue is whether a separate stream is needed, which is settled by the invariance argument rather than by the existence of derived maps." }
  ]
}
</script>
</x-mcq>

<x-free-response>
<script type="application/json">
{
  "id": "m10.s05.f1", "contentRev": 1, "points": 1,
  "prompt": "The vestibular module argued that normative theory succeeds centrally there, and fails centrally in vision and audition, because the objective can be stated precisely. Apply that diagnosis to olfaction: state the strongest version of the argument, then the strongest objection to it.",
  "modelAnswer": "The argument: vestibular's success rests on 'estimate self-motion with minimum variance', which is precise enough to make the optimality calculation well-defined, and it yields confirmed quantitative predictions about reliability-weighted cue combination [@angelaki2004; @cullen2012]. Nobody can write down with comparable precision what V4 or A1 estimates, and that — not circuit complexity — may be why the normative programme stalls beyond primary cortex. For olfaction the diagnosis is actionable: the field's instinct is to gather better data, but the binding constraint may be that nobody has stated what the olfactory system is estimating. The candidates — molecular identity, concentration, source location — demand different answers, and a theory that does not choose cannot be tested.\n\nThe objection: olfaction's stall is not obviously an objective problem, because the objective 'identify the source' is statable and the calculation is still blocked. What blocks it is the missing input ensemble, which is criterion one of the normative checklist and the ingredient the retinal and cochlear successes depended on. On this reading olfaction resembles vision-at-the-retina with the data missing, not vision-beyond-V1 with the objective missing.\n\nA reasonable resolution is that both obstacles are real and they bind at different stages: the ensemble blocks the peripheral efficient-coding calculation, and the unstated objective blocks the central one. That predicts the two would be relieved by different interventions, which is a testable claim about the field rather than about the brain.",
  "rubric": [
    "States the vestibular objective precisely and connects its precision to the success of the normative account",
    "Identifies the three competing olfactory objectives and notes they yield different optimal codes",
    "Raises the missing-ensemble objection as a distinct and possibly prior obstacle",
    "Distinguishes where each obstacle binds — periphery versus centre — rather than treating them as one problem"
  ]
}
</script>
</x-free-response>

<x-predict>
<script type="application/json">
{
  "id": "m10.s05.p1", "contentRev": 1,
  "prompt": "Suppose the bulbar-spatial-tuning experiment is run properly — freely navigating animal, real flow, regression against plume-derived variables — and comes out flatly negative. What should you conclude, and what would you do next?",
  "placeholder": "Conclusion, and the next experiment…",
  "reveal": "The negative result is informative, which is the point of specifying the experiment tightly enough to fail. It refutes the strong form of the consumer-determines-the-code prediction *for the bulb*, and it removes the proprioceptive analogy's most direct application — Clarke's nucleus recodes at the second synapse, and the bulbar equivalent would be the second synapse here.\n\nWhat it does not refute is the argument itself. The navigational variables would still have to be computed somewhere, so the next move is to follow the pathway: cortical amygdala, posterior piriform, and the entorhinal–hippocampal targets where odour and navigation converge. A null in the bulb relocates the prediction; it does not cancel it.\n\nThe deeper reading is about the shape of the argument. 'The consumer determines the code' constrains *some* stage to represent what the consumer wants; it does not say which stage. Proprioception recodes at synapse two because the cerebellum is close. If olfaction's navigational consumer is further away, the recoding should be further along, and finding it at synapse two was always the strong version rather than the necessary one.",
  "followUp": "Note how much of this module's content is of this form: an argument that forces something to exist somewhere, plus a separate and weaker claim about where. Keeping those apart is most of the discipline."
}
</script>
</x-predict>

## Handing forward

Module 10 has laid out the motifs; Module 11 takes the exceptions seriously. The two things to carry: first, the running distinction between genuinely absent and never measured, with the tally coming out heavily on the second side for olfaction. Second, the pattern behind that tally — the standard olfactory preparation holds constant the variables that the missing motifs would be organised around. Every gap this module identified as unlooked-for traces to that one design choice.
