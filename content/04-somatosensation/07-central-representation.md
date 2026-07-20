---
id: m04.s07
title: The central representation — S1
lede: The homunculus is the most famous map in neuroscience and is usually shown as the endpoint. It is better understood as a resource allocation, and as an argument that maps track behavioural importance rather than sensor geometry.
estimatedMinutes: 14
---

Primary somatosensory cortex contains an orderly map of the body surface, with four subdivisions — areas 3a, 3b, 1 and 2 — forming a rough hierarchy from simple to complex response properties.

<x-figure src="content/media/somato-s1-areas-3a-3b-1-2.jpg"
  caption="The somatosensory pathway and the S1 subdivisions. Areas 3a (muscle spindle input), 3b (cutaneous), 1 and 2 (increasingly complex, combining both) form a hierarchy — and note that 3a is where proprioceptive input arrives, which is why touch and proprioception are hard to separate cleanly."
  credit="Qi H-X, Kaas JH, Reed JL (2014), Frontiers in Systems Neuroscience 8:84, Figure 1. CC BY."
  source="https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/fnsys.2014.00084/full">
</x-figure>


## The homunculus as budget allocation

The map is grotesquely distorted: hands and lips occupy vastly more cortex than their surface area warrants, and the distortion tracks **innervation density**, which itself tracks behavioural importance.

The magnitude is worth stating, because it is what makes this a budget rather than a bias. Cortical area per unit area of skin varies by **more than a hundredfold** across the body surface, and the fingers command roughly three times as many cortical columns as the entire trunk [@kandel2021]. A hundredfold is not a distortion of a body map; it is a different allocation entirely, and it lines up with acuity — the four most magnified regions in humans have acuity thresholds of about 0.5 mm (lips), 0.6 mm (tongue), 1.0 mm (fingers) and 4.5 mm (toes).

<x-figure src="content/media/somato-homunculus.jpg"
  caption="The sensory homunculus. This is not a picture of the body — it is a picture of how much cortex each part is allocated, which tracks innervation density, which tracks how much the animal needs to resolve there. Maps allocate by importance rather than reproducing sensor layout, which reframes §13's question: is there any olfactory variable whose values differ enough in importance to be worth allocating unevenly?"
  credit="OpenStax College; derivative work by Popadius. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Sensory_Homunculus-en.svg">
</x-figure>


This is the same argument as foveal magnification in vision, and it generalises cleanly: **cortical area is allocated in proportion to the density of the input, which is allocated in proportion to how much the animal needs to resolve there.**

Two consequences worth drawing out.

**Maps are plastic.** Cortical magnification changes with use — over-represented in trained digits, reorganised after amputation. A map that reallocates according to use is behaving like a resource being budgeted, not like a fixed wiring diagram.

**Maps track importance, not geometry.** The homunculus is not a picture of the body; it is a picture of how much the animal cares about each part. That reframing matters for §13's retinotopy question — if maps allocate by importance rather than reproducing sensor layout, the question for olfaction becomes "is there any variable whose values differ in importance enough to be worth allocating unevenly?"

<x-order>
<script type="application/json">
{
  "id": "m04.s07.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 41,
  "prompt": "Put the homunculus argument in causal order, from the behavioural fact to the cortical observation. The point is that the map is the last item in the chain rather than the first — which is what the usual textbook presentation obscures.",
  "items": [
    { "id": "a", "text": "Some body regions need finer resolution than others, because of what the animal does with them." },
    { "id": "b", "text": "Afferents are allocated non-uniformly, concentrating innervation density where resolution matters." },
    { "id": "c", "text": "Those regions therefore deliver disproportionately many afferent channels to the ascending pathway." },
    { "id": "d", "text": "Cortical territory scales with the number of channels arriving rather than with the skin area they came from." },
    { "id": "e", "text": "The cortical map is grotesquely distorted — the homunculus." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Reading the chain forwards makes the map a consequence and reading it backwards makes the map a mystery, which is why it is usually presented as an endpoint.\n\n**The same chain runs in vision**: foveal magnification is (b), and cortical magnification factor is (d). Two modalities, same argument, and neither needs a separate account of why the map is distorted.\n\n**Plasticity is the evidence that the chain is live rather than merely developmental.** Cortical magnification changes with use — expanded for trained digits, reorganised after amputation — which is what a budget being reallocated looks like and not what a fixed wiring diagram looks like. If (d) held only during development, the distortion would be a historical fact about the animal; that it tracks current use means the allocation is being maintained.\n\n**The consequence for §13's retinotopy question is the reframing.** If maps allocate by importance rather than reproducing sensor layout, then the absence of an olfactory map is not answered by noting that olfactory receptors are unordered. The live question becomes: is there any olfactory variable whose values differ enough in behavioural importance to be worth allocating unevenly? That is a question about ecology and loss functions, and it is answerable, which the geometric version is not."
}
</script>
</x-order>

## Timing in a spatial cortex

§4.2 established that fine texture is coded temporally. That code survives into cortex: S1 neurons carry texture information in precise spike timing at millisecond resolution, not only in firing rate.

It is worth saying how far it survives, because the answer bounds the claim rather than weakening it. Afferents fire in phase with vibratory cycles, and so do neurons in area 3b — the raster of a 3b neuron during 20 Hz vibration is still visibly locked to the cycle. Periodicity is already weaker in area 1, and by S2 it is gone: S2 neurons encode vibratory frequency in *mean rate*, firing monotonically with frequency and no longer phase-locked [@kandel2021]. The same temporal-to-rate transition occurs between primary auditory cortex and its downstream targets.

So the timing code is not carried indefinitely — it is carried until something can read it out, and then converted. That is the honest form of the claim, and it is the more useful one: the question to ask of a candidate temporal code anywhere is not "does the system use timing" but "over which stretch of pathway, and where does the conversion happen".

<x-callout class="x-callout is-key">
<div class="x-callout-title">The correction this module exists to deliver</div>
Touch has everything vision has — an ordered metric array, a topographic cortical map, spatial receptive fields with centre–surround structure. And a substantial part of what it computes depends on <strong>millisecond spike timing</strong>.

Having a map does not mean the code is spatial. A system can be topographically organised and still carry its most important information in when spikes occur.

<strong>Apply this to olfaction.</strong> The debate over whether odour identity is carried by which glomeruli are active or by their latencies relative to the sniff has often been posed as exclusive. Touch shows a system doing both at once, in the same afferents, for different aspects of the same stimulus. The olfactory answer is likely to be "both, for different things" — and §3.7 already showed piriform using a timing-based mechanism to solve an intensity problem.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m04.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague argues: \"Olfaction has no topographic map, which is why the field is stuck arguing about spatial versus temporal codes. Modalities with maps use spatial codes.\" Which correction does touch supply, and what does it cost the colleague's position?",
  "options": [
    {
      "text": "Touch is topographic, metric and somatotopically mapped, and still carries fine texture in millisecond spike timing into cortex [@johnson2001; @saal2014] — so possessing a map is no evidence at all about which code carries the information.",
      "correct": true,
      "feedback": "This is the correction the module exists to deliver, and note how much it costs the position: not a weakening but a severed inference. Having a map and using a spatial code are independent facts, so the colleague's premise licenses nothing about olfaction either way. The positive lesson is that the olfactory question should be posed the way touch answers it — both codes, for different aspects of one stimulus — rather than as a choice."
    },
    {
      "text": "Touch shows that maps are allocated by behavioural importance rather than by sensor geometry, so the absence of an olfactory map is a claim about ecology rather than about coding.",
      "correct": false,
      "feedback": "Correct under the assumption that the question at issue is why the map is missing, and this is a genuinely useful reframing — it converts §13's retinotopy question into whether any olfactory variable differs enough in importance to be worth allocating unevenly. But it addresses the map's *origin*, and the colleague's error is about what a map implies for the *code*. Answering a different question is the most common way this argument goes wrong."
    },
    {
      "text": "Touch's temporal code exists only because the finger moves, so the comparison holds only for active sensing and olfaction's sniff makes it applicable.",
      "correct": false,
      "feedback": "Partly correct and usefully so — sliding is what converts spatial microstructure into vibration, and sniffing supplies olfaction with the analogous self-generated phase reference (§4.9). But the correction does not need the active-sensing premise. The claim being refuted is that a map implies a spatial code, and one counterexample of any provenance suffices."
    },
    {
      "text": "Touch's four afferent classes tile temporal frequency rather than space, so its array is not really doing spatial work at all.",
      "correct": false,
      "feedback": "Correct about the filterbank and wrong about the conclusion. The array does substantial spatial work — coarse texture, object shape, and the cuneate's genuine centre–surround all depend on proximity meaning something (§4.5). The interesting fact is the coexistence: a system with a real metric, using it for some computations and ignoring it for others, in the same afferents."
    }
  ]
}
</script>
</x-mcq>
