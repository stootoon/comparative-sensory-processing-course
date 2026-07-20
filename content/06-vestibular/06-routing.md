---
id: m06.s06
title: Routing — motor first, cortex later
lede: Vestibular output reaches eye and spinal motor neurons before it reaches anything cortical. The cortical route is late, diffuse, and inherently multisensory — which is a different way of being unlike vision than olfaction's.
estimatedMinutes: 14
---

From the vestibular nuclei, output goes to:

- **Oculomotor nuclei** — the VOR, three synapses (§6.5).
- **Spinal cord**, via vestibulospinal tracts — postural reflexes.
- **Cerebellum**, especially the flocculus, nodulus and uvula, plus the fastigial nucleus — adaptation and internal models.
- **Autonomic and homeostatic centres** in the lateral medulla and the parabrachial nucleus — blood pressure, heart rate, respiration, even bone remodelling [@kandel2021].
- **Thalamus and cortex** — last, and comparatively sparse.

The autonomic branch is easy to skip and should not be. It is the reason that standing up does not drop your blood pressure, and the reason a vestibular conflict produces nausea rather than merely a wrong percept. It also makes vestibular a further case of a modality whose largest consumer is a *regulator* rather than a percept — the argument §7.7 makes about proprioception's mostly-cerebellar destination — reached here by a completely unrelated route.

## The thin cortical representation

There is no single "primary vestibular cortex" comparable to V1 or A1. Vestibular signals appear in several areas — parietoinsular vestibular cortex, area MSTd, ventral intraparietal area — and in every case **mixed with visual and somatosensory signals from the outset.**

<x-figure src="content/media/vestibular-thalamocortical-pathways.jpg"
  caption="Vestibular projections to thalamus and cortex. Note how diffuse the targets are compared with the sharply defined V1 or A1 — there is no stage at which a purely vestibular cortical representation exists. Vestibular's departure from the visual template is different in kind from olfaction's: olfaction has a dedicated cortex organised unusually, vestibular has no dedicated cortex at all."
  credit="Hitier M, Besnard S, Smith PF. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Vestibular_pathways_to_cortices_through_the_thalamus.jpg">
</x-figure>


There is no stage at which a purely vestibular cortical representation exists.

## The absence starts in the thalamus

The course has been treating the missing primary area as a cortical fact. It is not: there is no dedicated vestibular thalamic nucleus either. Vestibular projections arrive in the ventral posterolateral and ventral lateral nuclei and, more weakly, in the ventral posteroinferior nuclei, the posterior group and the anterior pulvinar [@kandel2021] — nuclei that are otherwise somatosensory and motor, and that project onward to S1, S2 and posterior parietal cortex. Every other modality in this course has a thalamic nucleus it can call its own. Vestibular is a lodger throughout.

Two further features are unusual enough to name. The projection is predominantly **contralateral**, which is anomalous for a system whose brainstem processing is emphatically bilateral and whose two labyrinths have already been compared commissurally three synapses earlier — by the time the signal crosses, "left labyrinth" is no longer the variable being carried. And the ascending route is not the only one: electrical stimulation of the vestibular nerve reaches prefrontal cortex and the supplementary motor area at short latency [@kandel2021], so the cortical representation is thin and diffuse but not slow. The reflexes do not wait for cortex because they cannot afford three extra synapses, not because cortex is late to hear about it.

<x-callout class="x-callout">
<div class="x-callout-title">A caution about the cortical maps</div>
Kandel's chapter 27 flags something the course should carry, because the diffuseness of vestibular cortex is doing real argumentative work here [@kandel2021]. Imaging studies, and to a lesser degree single-unit work, probably <em>overstate</em> the cortical extent of vestibular processing. A vestibular stimulus is almost impossible to deliver in isolation: it co-activates somatosensory and proprioceptive afferents, and it evokes postural and oculomotor responses whose own sensory consequences light up cortex.

So part of the apparent breadth is stimulus artefact. This does not rescue the idea of a primary vestibular area — the well-controlled single-unit work still finds multisensory responses everywhere it looks — but it does mean the honest claim is "no dedicated area, and an uncertain map" rather than "vestibular is represented across a third of cortex". The general methodological point is worth keeping: a modality that cannot be stimulated without moving the animal will always look more widely represented than it is.
</x-callout>

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two ways of departing from the visual template</div>
By now the course has met several modalities that fail to look like vision, and it is worth separating the ways.

<strong>Olfaction</strong> has a short pathway to a cortex that is not laminated like neocortex and not topographic — but it <em>does</em> have a dedicated cortical area receiving predominantly olfactory input.

<strong>Vestibular</strong> has a conventional thalamocortical route but <em>no dedicated area at all</em> — signals are distributed across regions that are multisensory from the start.

These are different departures. Olfaction has a dedicated cortex organised unusually; vestibular has no dedicated cortex. Neither resembles V1, and they do not resemble each other.

<strong>The lesson for §14:</strong> "does olfaction have a cortical area like V1" is the wrong question, because most modalities do not. The better question is what the central representation is <em>for</em> — associative memory in piriform's case, multisensory self-motion estimation in vestibular's.
</x-callout>

## Why the cortical route exists at all

If the reflexes do not need cortex, what is it for?

**Perception of self-motion**, which is genuinely useful for navigation and for distinguishing self-generated from world-generated change. And **cue combination**: vestibular signals about self-motion must be reconciled with visual optic flow and proprioception, and that integration is what MSTd and the parietal areas do (§6.8).

So the cortical route handles the slow, integrative, multisensory problem, while the brainstem handles the fast reflexive one. The same division as taste's (§5.6), and for the same reason.

<x-mcq>
<script type="application/json">
{
  "id": "m06.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vestibular has a thalamocortical route but no dedicated cortical area; olfaction has a dedicated cortical area but a short, non-thalamic route to it. A reviewer says these are two instances of the same phenomenon — non-visual modalities departing from the canonical plan. Why is collapsing them a mistake?",
  "options": [
    {
      "text": "The departures are on different axes and predict different things: vestibular's tells you the signal is only useful once combined with others, olfaction's tells you the consumer wants speed and association rather than gated re-representation.",
      "correct": true,
      "feedback": "Exactly, and the test of the distinction is that it makes different experimental predictions. If vestibular lacks a dedicated area because a unisensory self-motion estimate is not useful to anything, you should find no stage of purely vestibular cortical response — and you do not. If olfaction's route is short because piriform wants an identity to associate fast, you should find piriform doing associative work early rather than sensory refinement — and you do [@bolding2018]. Two different absences, two different diagnoses, and lumping them yields neither."
    },
    {
      "text": "They cannot be the same phenomenon because vestibular is phylogenetically older than olfaction, so the causes must differ.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, which is exactly the explanation §7.6 assembles the strongest available evidence against — proprioception's cerebellar route also bypasses thalamus and is not ancient. Beyond that, the ordering here is doubtful and the argument would be weak even if it were right, because age does not by itself specify a mechanism."
    },
    {
      "text": "Collapsing them is fine as a description but useless as an explanation, since 'departs from the visual template' names a residual category rather than a property.",
      "correct": false,
      "feedback": "Partly correct, and the epistemics are sound — 'not like vision' is indeed a complement class and complement classes rarely support inference. This is the best of the distractors. It stops short because it declines to say what the two cases *are*, and the section's point is constructive: once you name the two departures separately, each becomes a hypothesis about the consumer. Diagnosing the vacuity is the first half of the move, not the whole of it."
    },
    {
      "text": "They differ because vestibular signals reach cortex via thalamus and olfactory ones do not, so only olfaction is genuinely anomalous.",
      "correct": false,
      "feedback": "Correct under the assumption that thalamic relay is the canonical feature and its absence the real anomaly, which is the standard textbook framing. §1.6 dismantles it by decomposing thalamus into services rather than treating relay as a binary property, and §7.6 shows the bypass is neither rare nor ancient. Treating the relay as the diagnostic feature also makes vestibular look normal, which it plainly is not — it has the relay and still has no primary area."
    }
  ]
}
</script>
</x-mcq>
