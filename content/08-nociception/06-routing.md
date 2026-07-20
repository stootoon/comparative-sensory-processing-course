---
id: m08.s06
title: Routing
lede: Four ascending tracts to four consumers, and only one of them goes through thalamus in the sense §6 means. Nociception sits between vision's obligatory relay and olfaction's absent one — and shows what the relay is actually for.
estimatedMinutes: 12
---

§6 in every module asks a functional question rather than an anatomical one: what does thalamus *do*, and what does that job where there is no relay? §1.6 decomposed the answer into services — gain control, state-dependent gating, attentional selection, temporal alignment, and the maintenance of a spatially precise labelled representation. §3.6 then asked which of those the olfactory bulb provides under cortical feedback.

Nociception answers unusually informatively, because it does not have a single answer. **It runs four routes in parallel, and only one of them uses the thalamic relay.**

## The four tracts

The **spinothalamic tract** carries axons of nociceptive-specific, thermosensitive and wide-dynamic-range neurons from laminae I and V–VII, crosses the midline near its segment of origin, ascends in the anterolateral white matter and terminates in the lateral thalamic nuclei (VPL, VPM) [@kandel2021]. Its cells have discrete, unilateral receptive fields. From VPL the signal goes to somatosensory cortex. This is the discriminative route — where, and how much — and it is the one that behaves like vision's.

The **spinoparabrachial tract** carries laminae I and V axons to the parabrachial nucleus in the pons, and from there to the amygdala [@kandel2021]. No thalamic relay. This is the affective route — how bad, and what to learn from it.

The **spinoreticular tract** carries laminae VII and VIII axons to the reticular formation. Its cells have large, often bilateral receptive fields, and it is implicated in diffuse, poorly localised pain and in arousal [@kandel2021].

The **spinohypothalamic tract** goes directly to hypothalamic autonomic control centres, driving the neuroendocrine and cardiovascular responses to injury [@kandel2021].

<x-figure src="content/08-nociception/figures/ascending-tracts.js"
  caption="Order by 'Whether it passes through thalamus'. One route of four uses the relay, and it is the one serving the spatially precise estimate. That is a direct test of §1.6's decomposition: if the relay's services are the ones a fine labelled representation needs, then a modality running some consumers that need precision and others that do not should relay some streams and not others. It does.">
</x-figure>


## What this tests

Line the three cases up and the routing question stops being about anatomy.

| | Vision | Nociception | Olfaction |
|---|---|---|---|
| Obligatory relay | LGN, all streams | VPL, one stream of four | none |
| Consumers needing spatial precision | essentially all | one | arguably none |
| Consumers needing valence fast | few | three of four | several |

**The correlation runs in the right direction**, and nociception is the case that makes it a correlation rather than a two-point contrast. If the thalamic relay's services were generic — needed by any sensory signal reaching cortex — a modality would relay all its streams or none. Nociception relays some and not others, and the split falls exactly where the decomposition predicts.

This is worth being careful about, because it is easy to overclaim. What has been shown is a consistency, not a derivation: three modalities arranged in the predicted order on one axis. It does not establish which service is the critical one, and the alternative reading — that limbic and hypothalamic targets are simply older and predate the thalamocortical route — remains available and is not obviously wrong.

**But the antiquity reading makes a worse prediction.** It predicts the non-thalamic routes should be the crude ones and the thalamic route the elaborated one. What is found instead is that the spinoparabrachial route to amygdala is highly specific and functionally central — the affective component of pain is not a vestigial remnant, it is arguably the part that does the behavioural work. §10's treatment of evolutionary explanations makes exactly this complaint about antiquity arguments generally: they explain the existence of a structure without explaining its current specification.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two thalamic groups, doing different jobs</div>
Nociception splits the thalamus itself, which sharpens the point.

The <strong>lateral group</strong> (VPL, VPM, posterior) receives spinothalamic input from lamina I and V neurons. Its cells have small receptive fields matching their presynaptic partners, and it processes the precise location of an injury [@kandel2021]. This is the relay behaving exactly as §1.6 describes.

The <strong>medial group</strong> (medial dorsal, central lateral, intralaminar) receives from laminae VII and VIII, and projects widely to limbic targets including anterior cingulate cortex [@kandel2021]. Large receptive fields, no spatial precision, and it is not doing the labelled-representation job at all.

<strong>So "does it relay through thalamus?" is the wrong question even within thalamus.</strong> The lateral group provides the services §1.6 enumerates; the medial group provides something closer to arousal and valence routing that the parabrachial and reticular routes also provide without a relay.

That is a real gain for the course's framework. It suggests the decomposition should be pushed one level further: not "which modalities relay", but <strong>which services each nucleus supplies, and which consumers buy them.</strong> §12's relay-services audit is the place to run that.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m08.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Nociception relays its discriminative stream through VPL and sends three other streams to brainstem, limbic and hypothalamic targets without a thalamic relay. Which reading of this best supports §1.6's decomposition of thalamus into services?",
  "options": [
    {
      "text": "That the relay is bought where a spatially precise, labelled representation is needed and skipped where it is not — so relaying is a per-stream decision rather than a per-modality fact.",
      "correct": true,
      "feedback": "Right, and the strength of the case is that it is a within-modality dissociation. Comparing vision with olfaction confounds everything; comparing nociception's four tracts holds the modality, the receptor array and the first circuit fixed and varies only the consumer. The prediction the decomposition makes — relay where precision matters — is checkable here and holds. Note the honest limit: this shows the relay correlates with precision, not that precision is what the relay provides."
    },
    {
      "text": "That thalamus is not necessary for conscious perception, since the affective component of pain reaches cortex via parabrachial and amygdala without passing through it.",
      "correct": false,
      "feedback": "Correct under the assumption that the relevant question is what thalamus contributes to consciousness — a real question, and one on which nociception is genuinely informative. But it is a different question from the one §1.6 poses, and answering it does not decompose anything. The service framework is deliberately agnostic about consciousness; it asks what computational jobs a structure does, so that their absence elsewhere becomes investigable."
    },
    {
      "text": "That the non-thalamic routes are evolutionarily older, and the thalamic route was added later for the discriminative function primates need.",
      "correct": false,
      "feedback": "Correct under the antiquity hypothesis, and the phylogenetic terminology in the literature (paleospinothalamic, neospinothalamic) encourages it. The section argues this reading makes a worse prediction: it expects the old routes to be crude, whereas the spinoparabrachial route to amygdala is specific and does much of the behavioural work. §10 makes the general complaint — antiquity explains why a structure exists without explaining its current specification, and the course prefers explanations that do both."
    },
    {
      "text": "That nociception has four parallel streams because its loss function demands redundant routing, so no single lesion can abolish the signal.",
      "correct": false,
      "feedback": "Correct under the assumption that §8.1's asymmetry buys redundancy. But the four tracts carry demonstrably different content to different consumers — location, valence, arousal, autonomic response — rather than four copies of one message. Anterolateral cordotomy does markedly reduce pain contralaterally, which redundant routing should have prevented. Parallel is not the same as redundant, and the distinction is the whole of §8.8."
    }
  ]
}
</script>
</x-mcq>

## Latency, depth, and the reflex that bypasses everything

There is a fifth route, and it does not ascend at all.

The withdrawal reflex is spinal: nociceptor to dorsal horn interneuron to motor neuron, two or three synapses, no supraspinal involvement required. On the pathway-depth figure that puts nociception's fastest action at the shallow end alongside proprioception's monosynaptic stretch reflex and gustation's gape reflex — and it puts nociception's route to cortex at four synapses, unremarkable.

The course's claim about depth is that it tracks the deadline of the fastest dependent behaviour and how much must be computed before the signal is useful, rather than evolutionary age. Nociception fits comfortably and adds one refinement worth stating.

**The reflex is not a short version of the percept; it is a different computation on the same input.** The spinal circuit computes "move this limb away", which requires knowing which limb and roughly where, and nothing else. It does not need to know how bad, what caused it, or whether the animal can afford to move. Those all require the ascending routes, and the ascending routes take as long as they take because those questions cannot be answered locally.

The comparison that makes this concrete is stress-induced analgesia (§8.9), where descending control suppresses the percept while the animal escapes. **The spinal reflex and the cortical percept can be dissociated in both directions**, which is what you would expect of two computations rather than two stages of one.

<x-free-response>
<script type="application/json">
{
  "id": "m08.s06.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "§1.6 decomposed thalamus into services so that olfaction's missing relay became a checklist rather than a mystery. Run the checklist for nociception, service by service, and then say what the exercise reveals about the decomposition itself.",
  "modelAnswer": "**The services, and where nociception puts them.**\n\n*Maintaining a spatially precise labelled representation.* Supplied by the lateral thalamic group — VPL and VPM, whose cells have small receptive fields matching their presynaptic spinal partners [@kandel2021]. This is the one service nociception clearly buys from thalamus, and it buys it for exactly one of its four streams.\n\n*Gain control.* **Not supplied by thalamus here.** It is supplied at the first synapse, by the PAG–RVM descending system acting in the dorsal horn (§8.9). That is a genuinely different architectural placement — before the relay rather than at it — and it is the same placement the olfactory bulb uses.\n\n*State-dependent gating.* Also pre-thalamic, and by the same machinery. Stress-induced analgesia gates the signal out at the dorsal horn, not at VPL.\n\n*Attentional selection.* Ambiguous, and the honest answer is that nobody has localised it. There is descending cortical influence over PAG, and there is thalamic modulation, and the relative contributions are not established.\n\n*Temporal alignment across channels.* Not obviously required. Nociception's two fibre classes are deliberately *mis*aligned by four orders of magnitude (§8.1), and the misalignment is the design rather than a problem to be corrected. This is a service the modality appears simply not to need.\n\n**What the exercise reveals about the decomposition.**\n\nThree things, in increasing order of consequence.\n\n*One: the services are separable in practice, not just in principle.* Nociception buys one from thalamus and implements two others upstream. That is direct evidence that §1.6's decomposition carves the problem at real joints, since a modality can take the services à la carte.\n\n*Two: the checklist should be run per stream, not per modality.* Nociception's four tracts have different service requirements, and asking 'does nociception relay?' averages over a distinction that matters. §3.6 asks the question of olfaction as a whole, and this suggests it should be asked of piriform and cortical amygdala separately.\n\n*Three, and most consequential: one service is missing from the list.* Neither §1.6 nor §3.6 includes anything like 'suppress reports whose decision value has gone to zero', which §8.9 argues is what descending control is doing here. If that is a genuine service, it should be added and then looked for in the other modalities — and the bulb's granule-cell gating becomes a candidate implementation rather than a puzzle.\n\n**The caveat.** The service list was assembled from vision and applied outward, which biases it toward services a spatially precise exteroceptive sense needs. Nociception's contribution is to add one entry; a proper audit would ask which other entries are vision-specific artefacts, and §12's relay-services figure is where that should be done.",
  "rubric": [
    "Goes through the services individually rather than giving a global verdict",
    "Identifies the labelled spatial representation as the one service bought from thalamus, and notes it serves only one of four streams",
    "Places gain control and state-dependent gating pre-thalamically, at the dorsal horn, and draws the parallel with the olfactory bulb",
    "Notes that temporal alignment appears not to be required, and that the fibre-class misalignment is deliberate",
    "Concludes that the checklist should be run per stream rather than per modality",
    "Bonus: proposes adding a decision-value suppression service to the list, and points it at bulbar granule-cell gating",
    "Bonus: notes the list was assembled from vision and may contain vision-specific entries"
  ]
}
</script>
</x-free-response>
