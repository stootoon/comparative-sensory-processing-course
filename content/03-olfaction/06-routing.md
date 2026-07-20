---
id: m03.s06
title: Routing — the missing relay
lede: Olfaction reaches cortex in two synapses with no obligatory thalamic relay. Treated as a curiosity this is a piece of trivia. Treated as a question — which thalamic services does olfaction implement, and where — it is the most productive puzzle in the course.
estimatedMinutes: 20
---

Mitral and tufted cells leave the olfactory bulb in the lateral olfactory tract and project directly to a set of cortical and limbic targets. Defining olfactory cortex as whatever receives a direct bulbar projection gives six areas: piriform cortex — the largest, and the one usually meant — the anterior olfactory nucleus, which links the two bulbs through the anterior commissure, the anterior and posterior-lateral cortical nuclei of the amygdala, the olfactory tubercle, and part of entorhinal cortex [@kandel2021].

**Two synapses from the sensory surface to cortex.** Vision takes four, audition five or more. And unlike them, olfaction has no obligatory relay.

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Olfaction is shallowest to cortex — and, sorted by synapses to motor output, it is the LONGEST. It has no fast reflex arc comparable to the VOR or the gape response. So its shallowness cannot be about reflex speed, which supports the reading developed below: there is simply no geometric re-mapping for a relay to perform.">
</x-figure>


The textbook framing is that olfaction is "the only sense that bypasses the thalamus," usually delivered as a curiosity and attributed to evolutionary antiquity. That framing is a dead end. §1.6 set up the better question.

## The services, and where olfaction provides them

§1.6 decomposed "what thalamus does" into four services. Take them one at a time.

### 1. Driver/modulator segregation

In LGN, retinal drivers determine *what* a cell responds to while vastly more numerous cortical and brainstem modulators determine *whether and how strongly* it transmits.

**Olfaction has this, in the bulb.** Receptor neuron input to mitral cells is the driver. Massive centrifugal feedback — from piriform, anterior olfactory nucleus, and neuromodulatory systems — arrives predominantly onto **granule cells**, the inhibitory interneurons, rather than onto mitral cells directly.

That architecture is worth stating precisely: feedback that targets inhibition rather than excitation cannot easily change what a cell responds to, but it can change gain and gating very effectively. **It is a modulator architecture.** The service exists; it is delivered one stage earlier, at the first synapse rather than between the first and second.

### 2. Attentional gating

Selective enhancement of behaviourally relevant input before cortex. Bulbar responses are strongly modulated by attention, task engagement, and internal state, and the machinery is the same centrifugal projection.

### 3. State-dependent transmission

LGN burst and tonic modes tie transmission to arousal and sleep. The bulb is likewise heavily innervated by cholinergic, noradrenergic and serotonergic systems, and mitral cell responses differ substantially between anaesthetised and awake states — enough that a great deal of the older literature has needed re-examination.

### 4. Cross-cortical routing

This is the one where olfaction looks genuinely different, and it is where the mediodorsal thalamus comes in. Olfaction *does* have a thalamic loop: piriform projects to mediodorsal thalamus, which projects to orbitofrontal cortex, alongside a direct piriform projection to frontal cortex that skips the thalamus entirely [@kandel2021]. The loop is **late and non-obligatory** — downstream of cortex rather than upstream of it.

The usual reading of what it carries is attention, value and decision rather than the sensory signal, and this course has taken that line. It should be said plainly that the standard textbook reading is different: these frontal pathways are treated as the substrate of odour *discrimination*, on the evidence that orbitofrontal lesions abolish it, and that some orbitofrontal neurons are multimodal, responding to the smell, sight and taste of the same object [@kandel2021]. Those two readings are not straightforwardly compatible. A route that is genuinely post-decisional should not be lesionable into a discrimination deficit.

The reconciliation this course would offer — and it is a proposal, not a result — is that discrimination in the behavioural sense requires reading out an identity that piriform has already computed, so a lesion downstream of the representation abolishes the *report* without abolishing the representation. That prediction is testable and worth stating as such: piriform ensembles should still separate odours in an animal whose orbitofrontal cortex is silenced and which can no longer discriminate them behaviourally. If they do not, the late-and-non-obligatory framing above is wrong and the thalamic route is carrying sensory content after all.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The reframing</div>
Olfaction does not lack thalamic function. It <strong>relocates</strong> it.

Services 1–3 are implemented pre-cortically, in the bulb, by cortical feedback onto inhibitory interneurons. Service 4 is implemented post-cortically, through mediodorsal thalamus.

What olfaction lacks is specifically a relay <em>in series between the first circuit and cortex</em>. And once the question is put that way, a candidate answer appears: <strong>the bulb is already doing what thalamus does.</strong> It receives more feedback than feedforward input, it gates transmission via inhibition under central control, and it sits between the sensor and cortex. Structurally, the bulb is the relay — it simply also does the first-circuit computation, which LGN does not.
</x-callout>

## Two hypotheses, and how to tell them apart

Why did olfaction end up this way? Two accounts, usually conflated.

**The ancient-architecture hypothesis.** Olfaction is evolutionarily old, its cortex is three-layered paleocortex predating six-layered neocortex, and the direct route is simply what was already there when thalamocortical organisation evolved. The absence is historical.

**The computational hypothesis.** Olfaction does not need a relay because of what its computation is like. Two candidate reasons: the deadline is severe (one sniff, under 200 ms, §3.1), so every synapse is expensive; and there is no metric on the array (§3.4), so there is no spatial re-mapping for a relay to perform. Much of what LGN might be doing geometrically has no olfactory counterpart.

<x-predict>
<script type="application/json">
{
  "id": "m03.s06.p1",
  "contentRev": 1,
  "prompt": "Two hypotheses for why olfaction has no obligatory thalamic relay: evolutionary antiquity, or computational unnecessity. Propose evidence that would favour one over the other. Comparative, developmental, and functional evidence are all fair game.",
  "placeholder": "What would distinguish 'old' from 'doesn't need one'?",
  "reveal": "Several lines, none decisive alone, which is roughly the actual state of the field.\n\n**Comparative — the strongest available.** If antiquity explains it, the arrangement should track phylogeny: species that diverged early should share it, and it should not correlate with olfactory ecology. If computation explains it, pathway depth should track *task demands* — species under pressure for fast odour-guided decisions should stay shallow, and those using odour for slower tasks might tolerate more stages. The relative development of the mediodorsal loop across species with different olfactory ecologies is the place to look.\n\n**Another sense that skips it.** Antiquity predicts olfaction is unique. It is not: **spinocerebellar pathways carry proprioceptive information to the cerebellum bypassing thalamus entirely**, and proprioception is not especially ancient. What those two share is a severe deadline and a consumer that wants the signal fast rather than re-mapped. That is a point for the computational account, and it is why §7 of the full course matters here.\n\n**Developmental.** Does olfactory cortex receive transient thalamic input during development that is later lost? A vestigial relay would favour antiquity; never having had one favours computation.\n\n**Functional — the sharpest test.** Ask whether the *services* are present. If bulbar granule-cell gating under cortical feedback performs attentional gating and state-dependent transmission with the same signatures as LGN — comparable time constants, comparable attentional modulation depth, comparable state dependence — then olfaction has thalamic function without thalamic anatomy, and the question dissolves. **This is measurable now**, and as far as this course is aware, the quantitative comparison has not been made.\n\n**A caution:** these are not exclusive. The most likely truth is that the arrangement is historically contingent AND has been retained because the computation tolerates it. Evolution rarely offers clean dissociations."
}
</script>
</x-predict>

## What is genuinely lost

One thing does seem to be given up. In vision and audition, thalamus provides a **single controllable bottleneck** — one place where everything ascending can be gated together, and one place where a lesion or a manipulation affects all downstream areas equally.

Olfaction's output diverges to piriform, tubercle, amygdala and entorhinal cortex in parallel, from the same mitral cells. There is no single point at which the whole ascending stream can be modulated coherently. Whether that is a cost or a feature — parallel targets can be regulated independently, which a single bottleneck forbids — is open, and it connects directly to §3.8.
