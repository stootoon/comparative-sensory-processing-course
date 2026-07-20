---
id: m05.s10
title: Adaptation, gain control, and state
lede: The same solution can be pleasant or aversive depending on how hungry you are. Taste is where sensory coding and internal state become inseparable — and the modality that shows most clearly that "the stimulus" is not the whole input.
estimatedMinutes: 10
---

## Alliesthesia

The perceived pleasantness of a taste depends on physiological state. Sugar is intensely pleasant when hungry and cloying when sated; salt becomes attractive when sodium-depleted, and the shift is specific to sodium rather than a general appetite change.

This is not a subtle modulation. **The valence of the stimulus inverts.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">The state is part of the stimulus</div>
The other modalities have state-dependent gain: attention increases visual responses, arousal modulates auditory ones. Taste has something stronger — <strong>state determines the sign of the behavioural output</strong>, not merely its magnitude.

That makes sense given §5.1. Taste answers "should I swallow this", and the correct answer genuinely depends on nutritional state. State is not a nuisance variable contaminating a sensory measurement; it is <em>part of the question</em>.

<strong>This reframes state-dependence generally.</strong> When an olfactory response changes with hunger, it is tempting to treat it as modulation of a sensory signal. The taste case suggests a different reading: for any sense feeding an appetitive decision, state-dependence may be the system correctly computing a state-dependent quantity. §3.10 noted the bulb's strong state-dependence, and the interpretation matters — modulation of a percept, or correct computation of a different quantity?
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout proposes reading state-dependence not as modulation of a percept but as correct computation of a state-dependent quantity. Applied to the olfactory bulb, what would distinguish the two readings experimentally?",
  "options": [
    {
      "text": "Whether the state-dependent component is recoverable from the population — a modulated percept implies the odour identity signal survives the state change and could be read out, whereas a state-dependent quantity implies the two are genuinely entangled.",
      "correct": true,
      "feedback": "This is the operational form of the distinction, and it is decodable rather than philosophical. If hunger multiplies responses along a direction orthogonal to identity, a downstream reader can recover identity by projecting the state axis out — the percept is intact and something else changed. If hunger changes which odours are represented as similar to which, then no such projection exists and the bulb is computing a different function in the two states. The measurement is whether the representational geometry, not the response magnitude, changes."
    },
    {
      "text": "Whether the modulation is present under anaesthesia, since anaesthesia removes centrifugal input.",
      "correct": false,
      "feedback": "Correct under the assumption that centrifugal input is what implements modulation, which §3.10 supports — and the anaesthesia point matters for a different reason, namely that a bulbar response measured under anaesthesia is one with the modulator removed. But both readings predict the effect disappears when the modulator does. Removing a signal cannot tell you what the signal was computing."
    },
    {
      "text": "Whether the effect is multiplicative or additive, since a gain change is modulation and an offset is a different computation.",
      "correct": false,
      "feedback": "Correct under the assumption that the arithmetic form of an effect reveals its function — a natural thought, and the multiplicative/additive distinction does have real consequences for downstream readout. But it does not map onto this question. A multiplicative gain applied selectively to some odours and not others changes the representational geometry as thoroughly as an offset would, and a uniform additive shift changes it not at all. Selectivity is what matters, not arithmetic."
    },
    {
      "text": "Whether behaviour changes with state, since correct computation of a state-dependent quantity should produce state-appropriate behaviour.",
      "correct": false,
      "feedback": "Correct under the assumption that behavioural appropriateness identifies what the neural signal encodes. But behaviour changes with state under either reading — an intact percept read out by a state-dependent decision rule produces exactly the same behavioural adaptation, with the state-dependence living downstream instead. This is why the question has to be settled at the level of the representation rather than the output, and it is the same trap the taste literature fell into over labelled lines."
    }
  ]
}
</script>
</x-mcq>

## Adaptation proper

Sustained exposure reduces sensitivity — hold a solution in the mouth and it fades — and there are well-known cross-adaptation effects between compounds sharing a receptor, which is one of the tools used to argue about receptor classes.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Gustation's timescales, in context. Note the satiety entry: alliesthesia operates over minutes to hours, far slower than any receptor process, because it is tracking nutritional state rather than stimulus statistics. And note that both chemosenses — and only the chemosenses — have receptor-cell turnover on the scale of days.">
</x-figure>


The famous **miracle fruit** effect belongs here too: miraculin binds the sweet receptor and converts it to an acid-activated state, so sour tastes become sweet. It is a striking demonstration that percept follows receptor activation rather than chemistry, and it belongs with the receptor-swap experiments of §5.4 as evidence for labelled lines.

## Peripheral turnover

Taste receptor cells are replaced every 10–14 days. Like olfactory receptor neurons — and unlike photoreceptors and hair cells, which are not replaced at all — the chemosensory receptors are continuously renewed.

Both chemosenses sit in exposed epithelia and take chemical damage, so the shared explanation is straightforward. But it means both must **continuously re-establish correct connectivity**, which is a non-trivial requirement and one that vision and audition never face. In olfaction it is coupled with adult neurogenesis in the bulb itself (§3.10), which taste does not have — and the difference is worth noting, because it suggests bulbar neurogenesis is not simply a consequence of peripheral turnover.
