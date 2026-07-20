---
id: m05.s07
title: The central representation — insular cortex
lede: Gustatory cortex is where the labelled-line story gets complicated, and where taste stops being about chemistry and starts being about expectation.
estimatedMinutes: 11
---

The primary gustatory area lies in the insula. Two findings dominate, and they pull in different directions.

## Spatial organisation

Imaging in mice has reported **spatially segregated "hotspots"** for different taste qualities in insular cortex — a sweet region, a bitter region — which would be a topographic map of a fundamentally unordered array (§5.4).

That is a striking claim, because it would mean the map is *computed* rather than inherited, exactly as bat delay maps are (§9). Extent and sharpness remain debated, and the spatial scale is coarse.

The hotspots also come with a causal result that the section below has to reckon with. Optogenetic activation of the sweet field produces appetitive licking and of the bitter field produces aversive orofacial rejection — and it does so in mice whose sweet and bitter transduction has been knocked out, so the behaviour cannot be a learned association with a taste they have ever had [@kandel2021]. Whatever else insular cortex is doing, a patch of it can stand in for a tastant and drive the innate response.

**This is worth flagging for §13.** If taste can construct a topographic map from an unordered receptor array, then unorderedness does not preclude central topography. The olfactory question — "is there a map anywhere downstream?" — is not answered by pointing at the bulb's disorder.

<x-mcq>
<script type="application/json">
{
  "id": "m05.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Insular \"hotspots\" would be a topographic map of an array with no metric on it. Why does that matter more for olfaction than for taste?",
  "options": [
    {
      "text": "Because it removes disorder at the receptor array as a sufficient reason to stop looking for a central olfactory map — the bulb's lack of chemotopy would no longer settle the question downstream.",
      "correct": true,
      "feedback": "This is the transfer, and it is why a contested taste result earns space in an olfaction course. §1.4's wiring-length argument explains map absence by appeal to a missing metric at the input. If a map of an unordered array can be *constructed* centrally — as bat delay maps are, for a quantity the cochlea never measures — then the argument constrains inherited maps only. The olfactory question becomes what derived variable a map might be of, which is where §13 goes."
    },
    {
      "text": "Because taste has only five qualities, so a five-region map is trivial to build, whereas olfaction would need hundreds of regions.",
      "correct": false,
      "feedback": "Correct under the assumption that a map needs one region per category, which is how the taste hotspot result is usually pictured. But maps of continuous variables — retinotopy, tonotopy, bat delay maps — are not partitions into categories, and an olfactory map would presumably be of a low-dimensional derived variable rather than of odorant identity. The dimensionality objection bites against a version of the hypothesis nobody holds."
    },
    {
      "text": "Because taste's map would be inherited from the tongue's papilla arrangement, whereas olfaction has no comparable peripheral order to inherit.",
      "correct": false,
      "feedback": "Correct under the assumption that insular hotspots reflect peripheral topography — and NST does carry a rough topography by nerve of origin (§5.5), so the worry is well founded as a possible artefact. But that topography is by body region, not by taste quality, and it is quality hotspots that are reported. If the hotspots were inherited spatial order they would be uninteresting, which is precisely why the extent and sharpness of the claim are worth arguing about."
    },
    {
      "text": "Because the result is contested, and a contested result cannot support inference in either modality.",
      "correct": false,
      "feedback": "Correct under the assumption that only settled results license inference — a defensible standard, and the section does flag that extent and sharpness are debated. But the inferential role here is to reopen a question rather than to answer one. Establishing that central topography from an unordered array is *possible* does not require the taste case to be secure; it requires it to be live. Demanding certainty before a possibility can be entertained would have blocked the bat comparison too."
    }
  ]
}
</script>
</x-mcq>

## Dynamics and expectation

The other body of work finds gustatory cortical responses that are **temporally structured and state-dependent**. Responses evolve through identifiable phases — an early detection phase, then identity, then palatability — with the palatability phase timed near when the decision to swallow or reject is made.

<x-figure src="content/05-gustation/figures/cortical-dynamics.js"
  caption="The three response phases, with palatability arriving around the moment of decision. Switch to expected delivery and anticipatory activity appears before the stimulus does — which a sensory representation should not do. This is closer to an evolving decision variable than to a code for chemical identity.">
</x-figure>


And responses are strongly modulated by **expectation**: the same taste delivered expectedly and unexpectedly produces different cortical responses, with anticipatory activity before delivery.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A sensory cortex that is mostly about decision</div>
Gustatory cortex encodes chemical identity, and also palatability, expectation, and internal state — with the palatability signal arriving on the timescale of the behavioural choice.

That is not a sensory representation in the V1 sense. It is closer to an evolving decision variable.

<strong>The honest counterweight is the hotspot result above.</strong> Stimulating a quality-specific cortical field substitutes for the tastant in an animal that has never had it, which is what a labelled sensory line looks like, not what a decision variable looks like. Both findings are in the same cortex. The reading this course prefers is that the two are compatible — a labelled input arriving into a population whose activity is then dominated by evaluation — but that is a proposal, and anyone who takes the hotspots at full strength will read the dynamics as decoration on a labelled line instead.

<strong>Which continues a pattern this course keeps meeting.</strong> A1 retunes with task (§2.7). Piriform is an associative network rather than a map (§3.7). Gustatory cortex is largely about decision. <strong>V1 is starting to look like the outlier</strong> — a genuinely feedforward, stimulus-driven sensory representation — and the field's habit of treating it as the template for "what sensory cortex is" may have distorted expectations for every other modality.

For olfaction specifically: piriform's failure to look like V1 is not evidence that olfaction is odd. It is evidence that V1 is.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m05.s07.p1",
  "contentRev": 1,
  "prompt": "The claim is that gustatory cortex carries an evolving decision variable rather than a code for chemical identity. But the detection → identity → palatability sequence is also exactly what you would expect from a sensory code read out by a downstream decision process, with the palatability phase reflecting feedback. Predict an experiment that separates the two, and say what each account predicts.",
  "placeholder": "What manipulation makes the two accounts disagree?",
  "reveal": "**The manipulation: hold the chemistry fixed and change the correct action.**\n\nA code for chemical identity is a function of the tastant. A decision variable is a function of the tastant *and* everything else that bears on whether to swallow. So the discriminating experiments all break the correspondence between the two.\n\n*Change internal state.* Deliver an identical sodium solution to a sodium-replete and a sodium-depleted animal, where the correct action inverts (§5.10). An identity code predicts the early and identity phases are unchanged and only late activity shifts. A decision-variable account predicts the palatability phase inverts with state — and that is roughly what is found, which is why the decision reading has traction.\n\n*Change the contingency without changing the taste.* Conditioned taste aversion is the sharpest version: train an aversion to a familiar flavour and re-record. Identity is unchanged by construction; palatability is reversed. If the identity phase is untouched and only the palatability phase flips, both accounts survive. **If the identity phase itself changes, the identity reading is in trouble**, because chemical identity did not change.\n\n*Decouple expectation from delivery.* Cue an expected taste and omit it. A sensory code with feedback predicts little or nothing, since no stimulus arrived. A decision variable predicts activity anyway — the animal is evaluating a prospect. Anticipatory activity before delivery, which the figure above shows, is already this result in weak form.\n\n**Why the question is harder than it looks.**\n\nNone of these fully separates the accounts, because 'sensory code plus feedback' can absorb any of them by placing enough of the effect in the feedback. The distinction is not clean, and the honest position is that it is a question of what the region's activity is *best described as* rather than a binary.\n\nThe useful move is the one §5.11 makes for coding disputes generally: **specify a stage and specify a readout.** 'Decision variable' becomes testable when you say which downstream population reads it and commit to a decoding accuracy for the behavioural choice from cortical activity, trial by trial. If choice is decodable from the palatability phase better than the tastant is, on trials where the two disagree, that is the result the decision reading needs — and it is a measurement rather than an interpretation."
}
</script>
</x-predict>
