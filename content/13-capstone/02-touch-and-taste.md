---
id: m13.s02
title: Imports from touch and taste
lede: Touch corrects the assumption that a map implies a spatial code. Taste dissociates two properties that vision and olfaction vary together, and in doing so localises the source of olfaction's difficulty.
estimatedMinutes: 26
---

The two modalities in this section are the course's best controls, and they earn that status for opposite reasons.

Touch has everything vision has — an ordered array, a metric, a somatotopic map — and still encodes its hardest stimulus in spike timing rather than in position. Taste has olfaction's disorder without olfaction's dimensionality, and none of olfaction's difficulties. Between them they break two confounds that the vision–olfaction comparison alone leaves standing.

## Import 8 — from §4.4: a map does not imply a spatial code

**Imported:** touch is topographic, metric, and somatotopically mapped, and it encodes fine texture in **millisecond spike timing** [@johnson2001; @saal2014]. The map and the temporal code coexist, carrying different aspects of one stimulus. Having a spatial organisation did not oblige the system to use it for everything.

**Candidate analogue:** the long-running olfactory argument about whether the code is *which* glomeruli fire or *when* they fire.

**The disanalogy — and here it runs in olfaction's favour:** there is none of consequence. The argument has been posed as exclusive, and touch is a worked example of a system that declined the choice. If a modality with a genuine metric still needs temporal coding for texture, the presumption that olfaction must pick one is unmotivated.

**Prediction:** identity and temporal structure should be separably decodable from the same bulbar population, and should dissociate under manipulations that target one and not the other. Specifically, reducing the temporal precision of stimulus delivery — smoothing the plume without changing its mean composition — should degrade source-separation performance while leaving identification intact. The converse manipulation, changing composition while holding fluctuation statistics fixed, should do the opposite. **A double dissociation in one preparation** is the experiment, and neither half of it requires settling the coding argument first.

<details class="x-deeper">
<summary>Why the exclusive framing survived so long — evidence</summary>

The framing is an artefact of stimulus design rather than of data. Olfactory experiments overwhelmingly deliver monomolecular odorants at steady concentration, and under a step stimulus there is very little temporal structure for a temporal code to carry. A system using both codes, probed with a stimulus that has no temporal content, returns evidence for the identity code alone.

This is the same methodological trap §4.11 flags for touch: labelled-line accounts of cutaneous coding came from artificial stimuli designed to isolate channels, and looked much weaker once natural textures were used. The correction in touch took decades and arrived only when someone changed the stimulus.

The implication for olfaction is uncomfortable and worth stating plainly: **the field's dominant stimulus paradigm is one that cannot detect the code half the field is arguing for.** That is a design problem, not an empirical result.
</details>

## Import 9 — from §4.9: whisking is sniffing's twin, and its decoder is already built

**Imported:** whisking and sniffing are the same act. Both are self-generated, voluntary, in the 4–12 Hz band, and both *alter the stimulus* rather than merely sampling it. Barrel cortex decoding referenced to whisk phase is characterised in detail; the bulbar equivalent is not.

**Candidate analogue:** phase-referenced decoding of bulbar responses against the sniff cycle, importing the barrel-cortex analysis wholesale.

**The disanalogy:** the whisker's contact time is a well-defined event that gives the phase reference an unambiguous zero. The sniff has no equivalent instant — odour arrival is distributed across the inhalation, and where in the cycle a molecule lands depends on flow and on sorption along the epithelium. The reference exists but is softer, so the analysis needs a latency model the barrel work did not.

**Prediction:** bulbar response latency relative to sniff onset should carry identity information *independently of* firing rate, and the two should be separately decodable — the standard result in barrel cortex. This has partial support already [@wachowiak2011]. The sharper and untested version: **that latency code should degrade when the animal is passively presented with odour on an externally-timed schedule rather than sniffing it**, because the phase reference is then unavailable to the decoder. Sniff-triggered versus experimenter-triggered delivery of identical stimuli is the manipulation, and it isolates the contribution of the reference rather than of the sampling.

## Import 10 — from §4.6: olfaction is not uniquely thalamus-free

**Imported:** the spinocerebellar tracts carry proprioceptive and some tactile information to the cerebellum, bypassing the thalamus entirely. Proprioception's reflex arc is shorter still.

**The move this licenses is negative, and it is one of the most useful things in the course.** Olfaction's missing obligatory relay is routinely explained by evolutionary antiquity: the olfactory system is old, thalamus arrived later, smell was left behind. Touch and proprioception falsify the general form of that argument. Neither is ancient in any special sense, both bypass thalamus for a subset of their traffic, and what those routes share with olfaction is not age but a **tight deadline and a consumer that wants speed rather than re-mapping**.

**The disanalogy:** the spinocerebellar bypass is a *parallel* route — touch also has a full thalamic pathway, and olfaction does not. So the comparison licenses "bypasses exist where deadlines are tight", not "olfaction's whole architecture is explained".

**Prediction:** the services a thalamic relay provides — attentional gain control, state-dependent gating, burst/tonic mode switching — should be found in olfaction, implemented elsewhere, rather than absent. §3.6 localises the candidate: granule-cell gating of mitral cells under cortical feedback. **The test is quantitative rather than qualitative**: measure attentional modulation depth, time constants, and state dependence in the bulb and in LGN under matched task demands, and ask whether the numbers correspond. If they do, "no thalamus" is a statement about anatomy and not about computation. If they do not, the antiquity account gets its first real support.

<x-figure src="content/00-toolkit/figures/pathway-depth.js"
  caption="Sorted by synapses to action rather than synapses to cortex, the picture rearranges: olfaction stops looking exceptional and lands among the short reflex-like paths. The antiquity explanation predicts olfaction should be alone at the shallow end. It is not — proprioception and touch are there too, and neither is ancient.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m13.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Touch and proprioception both route some traffic around the thalamus. What does that fact do to the claim that olfaction lacks an obligatory relay because it is evolutionarily ancient?",
  "options": [
    {
      "text": "It undermines the general form of the argument, because it shows thalamic bypass tracks computational demand rather than age.",
      "correct": true,
      "feedback": "This is the right reading. The bypass appears wherever a deadline is tight and the consumer wants speed rather than re-mapping — a computational criterion, satisfied by systems of very different evolutionary ages. That does not prove the antiquity account false for olfaction specifically, but it removes its generality: the account now has to explain why olfaction is a special case rather than an instance of a pattern."
    },
    {
      "text": "It leaves the argument intact, because touch and proprioception also have full thalamic pathways and olfaction does not.",
      "correct": false,
      "feedback": "This is the answer under the assumption that what needs explaining is the *absence* of a relay rather than the *existence* of a bypass — and it is a fair point, noted in the section as the genuine disanalogy. But it does not rescue the antiquity claim. The bypass routes still demonstrate that skipping thalamus is something nervous systems do for computational reasons; the antiquity account has to explain why olfaction's case is different in kind, and it currently does not."
    },
    {
      "text": "It confirms the argument, since spinocerebellar pathways are themselves phylogenetically old.",
      "correct": false,
      "feedback": "This is the answer under the assumption that the spinal-cerebellar route is a primitive retained feature. The cerebellum and its input tracts are not usefully described as more ancient than the thalamocortical system, and the fine proprioceptive recoding those tracts carry is not a primitive function. The argument would need the bypass to correlate with age; it correlates with deadline."
    },
    {
      "text": "It makes the question unanswerable, because evolutionary and computational explanations cannot be distinguished.",
      "correct": false,
      "feedback": "This is the answer under the assumption that the two hypotheses make no differing predictions — but they do, and the section states one. Antiquity predicts olfaction should be alone at the shallow end of the pathway-depth axis; computational demand predicts other short-deadline systems should join it. That is a check you can run, and it has an answer."
    }
  ]
}
</script>
</x-mcq>

## Import 11 — from §5.3: unordered does not entail high-dimensional

**Imported:** taste is unordered, like olfaction. Its receptor array has no metric — there is no sense in which the sweet receptor is "between" the sour and bitter ones. And taste has essentially none of olfaction's difficulties: its normative account is in reasonable shape, its dimensionality is about five, and nobody thinks the field is stalled.

**What this dissociates.** In the vision–olfaction comparison, *ordered* and *low-dimensional* co-vary, and *unordered* and *high-dimensional* co-vary. With two data points you cannot tell which property is responsible for anything. Taste is the third point that separates them: unordered and low-dimensional, and easy.

**The conclusion, which is the single most useful thing taste contributes:** the source of olfaction's difficulty is **dimensionality, not disorder.**

This should change what a theorist works on. If disorder were the problem, the research programme would be to find a metric on chemical space — which is where a great deal of effort has gone. If dimensionality is the problem, the metric hunt is a secondary matter and the primary questions are about how a system handles a ~1000-dimensional input with a few hundred channels and a 200 ms deadline.

<x-callout class="x-callout is-key">
<div class="x-callout-title">How much weight this argument bears</div>
Less than a clean experiment would, and the reasoning should be stated honestly. This is a comparison across three modalities, not a controlled manipulation, and the modalities differ in many ways besides ordering and dimensionality — taste has a grossly asymmetric loss function, an innate structure, a delayed post-ingestive teaching signal, and a consumer that makes one binary decision. Any of those could be what makes it tractable.

What the argument establishes securely is narrower but still worth having: <strong>disorder alone is not sufficient to produce olfaction's difficulties</strong>, because taste has disorder and lacks the difficulties. That is a genuine elimination. The stronger claim — that dimensionality is the operative cause — is an inference, and the honest label for it is a well-motivated hypothesis rather than a result.

The test that would settle it is comparative: find or engineer a case with high dimensionality and an <em>ordered</em> array, and see whether the difficulties persist. Vision's spectral system at three dimensions is too small; the closest natural candidate is the auditory system treated as a high-dimensional spectrotemporal problem, which is ordered and does not stall. That points the same way, but it is again a comparison rather than a manipulation.
</x-callout>

## Import 12 — from §5.3: coordinates could come from consequence rather than from chemistry

**Imported:** taste's dimensions are not chemical families. They are **nutritional categories** — energy, protein, electrolyte, toxin, spoilage. Twenty-five bitter receptors converge onto one axis because the correct action is the same for all of them, regardless of what the molecules have in common chemically, which is often nothing. The coordinate system is defined by what the stimulus *does*, not by what it *is*.

**Candidate analogue:** olfactory coordinates defined by consequence. Import 1 posed the search for odour coordinates as a statistics-of-the-stimulus problem — decorrelate receptor activations across natural scenes and read off the axes. Taste suggests a second and quite different possibility, in which the axes are behavioural categories and the chemistry is incidental.

**The disanalogy:** taste's consequences are few, innate, and unambiguous, with a ground-truth teaching signal arriving post-ingestively. Olfaction's consequences are numerous, largely learned, and context-dependent. A consequence-derived coordinate system for smell would have to be learned rather than innate, and would differ between individuals with different histories.

**Prediction, and the two accounts come apart cleanly:** a statistics-derived coordinate system should be **shared across conspecifics** and stable, since it reflects the environment. A consequence-derived one should be **individual and experience-dependent**. Train two groups of animals with opposite valence assignments over the same odour set and ask whether the geometry of the piriform representation diverges between groups while the bulbar geometry does not. The prediction is that it should, and that the divergence should appear at the first stage where learning is substantial.

**Both accounts can hold at once**, in different pathways — and §3.8's ventral/dorsal question is the natural place for that split. An identity stream would carry statistics-derived coordinates; a valence stream would carry consequence-derived ones. That is a stronger and more interesting hypothesis than either alone, and it predicts that the two streams should have measurably different geometries over the same stimulus set.

<x-predict>
<script type="application/json">
{
  "id": "m13.s02.p1",
  "contentRev": 1,
  "prompt": "Taste settles coding disputes with receptor swaps: express a bitter receptor in a sweet-sensing cell, and behaviour follows the cell rather than the receptor [@chandrashekar2006]. Design the olfactory analogue. State what each outcome would establish — and then say why the experiment is harder to interpret in olfaction than in taste.",
  "placeholder": "What do you swap, and what does each result mean?",
  "reveal": "**The design.** Change which odorant receptor a defined glomerulus expresses, holding the glomerulus's downstream connectivity fixed, then ask whether learned behaviour follows the receptor's new ligand or the glomerulus's original identity.\n\n**If behaviour follows the glomerulus**, glomerular position is the meaningful unit and the receptor is an interchangeable front end — which would make the bulb's spatial arrangement functionally load-bearing, and would be a strong argument that whatever chemotopy exists is being used.\n\n**If behaviour follows the receptor**, the glomerulus is a labelled channel whose meaning is set by its input, and the spatial arrangement is largely incidental — consistent with §3.4's claim that the array is genuinely unordered and that position carries no computational weight.\n\n**Why olfaction is harder to interpret, and this is the substantive half of the answer:**\n\n*Taste's consequence is innate and unlearned*, so the readout is immediate and needs no training history. Olfactory valence is mostly learned, so any swap has to be followed by learning — and learning could simply reassign meaning to the altered channel, which would produce \"behaviour follows the receptor\" for reasons that have nothing to do with the coding question. **The experiment must be run with an innate-valence pathway** — a predator odour or an aversive ligand with a hard-wired response — or the result is uninterpretable.\n\n*Taste's periphery is close to labelled-line; olfaction's is combinatorial* [@malnic1999]. Swapping one receptor in a system where every odorant activates dozens of channels changes a small part of a distributed pattern, and the behavioural effect may be below detection. Taste's swap worked partly because the channel being swapped carried the whole signal.\n\n*Glomerular targeting is activity-dependent during development.* Changing the receptor may change where the axons go, which destroys the manipulation — the intended dissociation between receptor and position collapses. This is a real technical obstacle rather than a conceptual one, and it is the reason the experiment is discussed more often than it is done."
}
</script>
</x-predict>

## What these two modules changed

Touch removed a false choice: identity coding and temporal coding are not competitors, and a system with a perfectly good metric still uses both. Olfaction's version of that argument is probably a non-argument, and the stimulus paradigm that sustains it is the thing to fix.

Taste removed a confound: disorder is not sufficient for difficulty. That redirects effort away from the search for a metric on chemical space and toward the consequences of high dimensionality — and it does so on the strength of an elimination, which is the most secure kind of comparative inference available here.

Both also supplied methodological warnings that generalise, and it is worth noticing that they are the same warning twice: **in each case the field's standard stimulus was chosen to isolate channels, and in each case it turned out to be incapable of revealing the code that was actually there.** Touch has already been through that correction. Olfaction, with its monomolecular odorants at steady concentration, has not.
