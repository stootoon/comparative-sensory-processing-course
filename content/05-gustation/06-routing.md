---
id: m05.s06
title: Routing — a relay, and a shortcut to action
lede: Taste has a thalamic route to cortex like the others, and a parallel limbic route that reaches motor output almost immediately. The split maps onto the two things taste has to do.
estimatedMinutes: 10
---

From NST, taste information takes two broadly different routes.

**The cortical route:** NST → (parabrachial, in rodents) → VPMpc thalamus → **insular cortex**. A conventional thalamocortical pathway with the usual driver/modulator architecture.

<x-figure src="content/media/flavor-three-pathways.jpg"
  caption="The three chemosensory routes to cortex, side by side: gustation via NST and thalamus to insula, olfaction direct to piriform with no obligatory relay, and chemesthesis via the trigeminal system. Perceptually these fuse into flavour — two chemosenses with opposite architectures (§5.1) producing a single unified percept, and the binding is obligatory rather than optional."
  credit="John E. Hayes and Allison N. Baker. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Summary_of_three_distinct_sensory_pathways_involved_in_flavor_perception.jpg">
</x-figure>


**The limbic route:** NST and parabrachial project directly to hypothalamus, amygdala and bed nucleus of the stria terminalis, reaching structures that drive ingestion, rejection and autonomic responses without cortical involvement.

## Two routes, two jobs

The division tracks the two things taste must do, and the timescales differ by orders of magnitude.

**Immediate accept/reject.** Must be fast, must not require learning, must work in a decerebrate animal — and it does. The gape response to bitter is present in animals with no cortex at all. This is the limbic route.

**Flavour perception, learning and value.** Slower, integrative, combines taste with retronasal smell and texture, supports learned preferences and aversions. This is the cortical route.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Reflex depth tracks deadline, not modality importance</div>
§2.6 proposed that depth before cortex tracks how much must be computed before the signal is useful. Taste adds a cleaner version.

The bitter rejection reflex needs <strong>two or three synapses</strong> to reach motor output. It has to, because the alternative to acting fast is swallowing a poison.

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Sort this by deadline and then by synapses-to-action: the correlation is the point. The VOR at 10 ms is three synapses; grip correction at 70 ms is two; the gape reflex is two to three. Pathway length is set by how fast the fastest dependent behaviour must be.">
</x-figure>


The vestibulo-ocular reflex is a <strong>three-neuron arc</strong> (§6.5), for the same reason: the eyes must counter-rotate within milliseconds.

Grip-force correction on slip closes in about <strong>70 ms</strong> (§4.9).

<strong>The rule:</strong> the number of synapses between sensor and action is set by the deadline of the fastest behaviour that depends on it. Cortical routes exist in parallel for the slower, more integrative jobs — they do not replace the short ones.

Applied to olfaction: the two-synapse route to cortex is short, but olfaction has no reflex arc anywhere near as short as the gape response or the VOR. Which suggests olfaction's shallowness is <em>not</em> primarily about reflex speed — supporting the §3.6 reading that it is about the absence of geometric re-mapping to perform.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m05.s06.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Taste has a short limbic arc *and* a full thalamocortical route; olfaction has a short cortical route and no obligatory relay at all. If the rule is that pathway length is set by the deadline of the fastest dependent behaviour, what does olfaction's architecture imply?",
  "options": [
    {
      "text": "Nothing about deadlines, because olfaction has no behaviour requiring the speed the gape reflex or the VOR does — so the rule is silent on olfaction and its shallowness needs a different explanation.",
      "correct": true,
      "feedback": "Correct, and noticing that a rule is silent is a more useful skill than applying it everywhere. The rule sets a *lower bound* on how short the fastest arc must be. Olfaction's fastest behaviours — a surge on detection, a sniff adjustment — operate on the ~200 ms sniff cycle, which two synapses vastly overshoots. So the shallowness is unexplained by deadline, and §3.6's alternative reading takes over: there is no geometric re-mapping to perform, and thalamus is where re-mapping happens."
    },
    {
      "text": "That olfaction's fastest behaviours are faster than gustation's, since its cortical route is shorter than taste's cortical route.",
      "correct": false,
      "feedback": "Correct under the assumption that the rule constrains every pathway rather than the shortest one. It does not. Taste's cortical route is long *and* taste has a two-synapse arc; the two coexist precisely because the deadline binds only the reflex path. Comparing cortical routes across modalities and inferring deadlines from them inverts the logic — the callout's own examples show slow cortical routes running in parallel with fast ones."
    },
    {
      "text": "That olfaction should have an undiscovered short reflex arc, since every modality with a shallow cortical route has one.",
      "correct": false,
      "feedback": "Correct under the assumption that shallow cortical depth and short reflex arcs are causally linked — plausible on the face of it, and the prediction is at least checkable. But the callout's cases separate them: the VOR is a three-neuron arc in a system whose cortical route is long, so arc length and cortical depth are independent quantities. There is no reason for a short cortical route to imply a short reflex."
    },
    {
      "text": "That olfaction's missing thalamic relay is evidence the deadline rule generalises to relays: relays cost time, so time-critical senses drop them.",
      "correct": false,
      "feedback": "Correct under the assumption that a relay's cost is its latency. A synapse costs a few milliseconds, which is negligible against olfaction's ~200 ms sniff-limited deadline — the transducer alone is slower than that (§3.3). If latency were the reason to drop thalamus, vision and audition, whose deadlines are far tighter, should have dropped it first. They did not, which is good evidence that thalamus is retained for what it computes rather than despite what it costs."
    }
  ]
}
</script>
</x-mcq>
