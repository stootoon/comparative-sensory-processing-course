---
id: m12.s03
title: Imports from the vestibular and proprioceptive systems
lede: The closest structural match to olfaction's central ambiguity, and the clearest demonstration that a first circuit can be transforming coordinates rather than decorrelating. These two modules carry the sharpest imports in the course.
estimatedMinutes: 30
---

These two are the least-taught modalities in the course and the most useful. The vestibular system supplies the only worked example anywhere of neurons implementing a specified Bayesian estimator, against an ambiguity with exactly olfaction's structure. Proprioception supplies the demonstration that a first circuit's job may be a coordinate transformation rather than a decorrelation — a possibility the bulbar literature has largely not considered.

## Import 13 — from §6.1: the ambiguity template

**Imported:** the otolith organs cannot distinguish head tilt from linear acceleration. By the equivalence principle the two produce identical stimulation, so the ambiguity is a fact about physics rather than a limitation of the sensor. The system resolves it by combining canal signals under an internal model of head dynamics, and neurons in the vestibular nuclei and cerebellum carry responses reflecting **the combination rather than either input alone** [@angelaki2004; @cullen2012].

**Candidate analogue:** olfaction's confound between concentration, distance, and transport history, flagged in §3.1. A weak source nearby and a strong source far away produce identical receptor activation. So does the same source sampled during a dense whiff versus a dilute one. A single sniff cannot disambiguate these in principle.

**Why this is the best import in the course.** The structural match is exact: both are principled ambiguities in which one measurement confounds two or more latent causes, and in both cases the resolution requires *additional signals plus an internal model*. Because the vestibular solution is known in detail, what to look for in olfaction is known in detail — neurons whose responses reflect a combination of receptor activation with temporal statistics, rather than either alone.

**The disanalogy, and it is severe.** Gravity is constant. Turbulent transport is not. The vestibular forward model has a stationary target and can be hard-wired; the olfactory one would have to be estimated online from statistics that shift with wind, humidity, substrate, and time of day.

That is a precise statement of the extra difficulty, and it was obtained by comparison rather than by staring at olfaction — which is the whole method of the course working as intended.

<x-figure src="content/06-vestibular/figures/tilt-translation.js"
  caption="The ambiguity, and its resolution. One otolith signal is consistent with a whole family of tilt-plus-translation combinations; adding the canal signal under a model of head dynamics selects one. Olfaction's confound has this exact shape — receptor activation is consistent with a family of concentration-distance-transport combinations — and the same resolution is available in principle. The difference is that the line constraining this figure is fixed by gravity, while olfaction's would have to be re-estimated as the wind changes.">
</x-figure>

<details class="x-deeper">
<summary>What "estimated online" costs, quantitatively — theory</summary>

The difference is not merely one of degree. A stationary model can be learned once, over a lifetime, from an arbitrarily large sample; its estimation error goes to zero. A non-stationary model must be estimated from a window short enough that the statistics have not changed within it, which puts a floor on the error.

If the transport statistics drift with characteristic time $\tau_{\text{drift}}$ and the informative fluctuations arrive at rate $r$, the usable sample is of order $n \sim r\,\tau_{\text{drift}}$, and the parameter error scales as $1/\sqrt{n}$. Plume statistics drift on timescales of seconds to minutes as wind conditions change, and whiffs arrive at a few per second at moderate distances. So $n$ is of order tens to hundreds — small.

The consequence is a hard trade-off with no analogue in the vestibular case. A longer window gives a better estimate of a staler model. There is an optimal window length set by the ratio of drift rate to information rate, and it predicts something checkable: **the animal's performance should degrade specifically when transport statistics change faster than that window**, and the degradation should have a characteristic timescale that can be measured by stepping wind conditions during a task. Nobody has run this, and it requires no new recording technology — only a wind tunnel and a behavioural assay.
</details>

**Prediction:** bulbar or piriform neurons should exist whose responses to a fixed receptor activation pattern depend on the *recent temporal statistics* of the stimulus — intermittency, whiff frequency, blank duration — because those statistics are what a transport model would use to convert concentration into distance. The experiment holds the odorant and its mean concentration fixed while varying the fluctuation statistics, which is achievable with existing odour delivery. A neuron reporting concentration alone is not doing inference. A neuron whose concentration tuning shifts with intermittency is.

## Import 14 — from §6.9: cancellation is real, early, and specific

**Imported:** vestibular nuclei subtract self-generated head motion at the **first central synapse**, using an efference copy of the motor command. Neurons that have successfully subtracted their prediction go quiet, and look unresponsive to anyone measuring their response to passive motion [@cullen2012].

**Candidate analogue:** the bulb has the architecture for this. Granule cells carry massive cortical and centrifugal feedback onto mitral cells, in the same configuration — a broad, delayed input onto principal cells — that implements the negative image in electrosensory lobes (§9.2).

**The disanalogy:** vestibular cancellation subtracts a signal the animal generated *and knows the parameters of*. The sniff generates a predictable component too, but what arrives during a sniff depends on the odour environment as well as on the motor command, so the predictable part is a smaller fraction of the total.

**Prediction, and this one is directly runnable:** deliver identical odour transients under two conditions — triggered by the animal's own sniff, and delivered on an external schedule uncorrelated with sniffing. Bulbar neurons that appear silent under self-generated sampling should **respond to the passive version**, because the prediction that cancelled them is no longer valid.

This reframes the silent-neuron literature. A substantial fraction of bulbar neurons respond weakly or not at all to odour panels, and this is usually treated as a puzzle about tuning — the cells are assumed to be waiting for the right ligand. Lesson 5 says otherwise: **silence is a result, not an absence of response.** A neuron that has successfully subtracted its prediction is doing its job.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two accounts of silence, and how to tell them apart</div>
This matters enough to state as a clean contrast, because the two make opposite predictions about nearly every manipulation.

<strong>The tuning account:</strong> silent cells are narrowly tuned to ligands not in the panel. Predicts silence is stable over time, unaffected by whether sampling is active or passive, unaffected by plasticity manipulations, and broken only by finding the right odorant.

<strong>The cancellation account:</strong> silent cells are subtracting a learned prediction. Predicts silence <em>develops</em> over minutes of exposure to a stable environment, is broken by passive delivery, is blocked by interfering with plasticity at the granule–mitral synapse, and returns when the environment stabilises again.

Every one of those is measurable with current methods, and the two accounts are not exclusive — some silent cells will be one and some the other. <strong>The informative measurement is the proportion</strong>, and it is currently unknown because the experiment separating them has not been run.
</x-callout>

## Import 15 — from §6.11: state the objective before gathering more data

**Imported:** the vestibular system's normative success came from a precisely stated estimation problem. Not "what does this system encode" but: given canal and otolith signals with known noise, and known head dynamics, estimate tilt and translation. Once posed that way the optimal solution is derivable and the neural test is obvious.

**The import is methodological**, and it is uncomfortable. Olfaction's normative stall is usually attributed to the missing chemical ensemble, and §3.11 endorses that. But the vestibular case suggests a second and partly independent cause: **the objective has not been stated precisely enough to solve.**

"Encode odour identity efficiently" is not an estimation problem. It does not specify the latent variable, the loss, or the noise model. §2.4's prediction exercise reached the same conclusion from the audition side — Lewicki could optimise for "encode the waveform" because in audition the signal *is* the thing, whereas in olfaction the receptor pattern is not the thing and the animal wants latent causes.

**Prediction, of a different kind.** This one is about the field rather than the animal, and it is falsifiable in the same way. If the stall is caused by the missing ensemble alone, then the *temporal* side of olfaction — where the ensemble **is** measured [@celani2014; @tootoonian2025] — should have produced normative theory of comparable maturity to vision's. It has produced some, and less than the data would support. That asymmetry is evidence that the missing ensemble is not the only bottleneck, and it points at the objective.

The constructive version: state the olfactory problem as an estimation problem with a named latent variable — source position, say, or source composition — a specified loss, and a noise model, and the machinery of §0.1 becomes available. Where that has been done, on the source-separation problem, it has yielded quantitative results [@tootoonian2025]. Where it has not, the field has qualitative arguments.

## Import 16 — from §7.5: the first circuit may be transforming coordinates, not decorrelating

**Imported:** Clarke's nucleus recodes individual muscle lengths into whole-limb variables — axis length and orientation — **by the second synapse**, because that is the basis its consumer, the cerebellum, wants [@bosco2001]. The transformation adds no information. It makes existing structure legible to the consumer.

**With one caveat carried forward from §7.5**, because it affects how far the import travels: part of that global representation comes from the limb's mechanical linkages rather than from spinal processing, and the neural and biomechanical contributions have not been cleanly separated [@bosco2003]. The transformation is real and early; how much of it neurons perform is not settled.

That caveat has a sharp consequence for the olfactory version. Olfaction has almost no accessory structure to do this kind of work for free — the nose does very little computation the way the cochlea or the limb skeleton does. **So if the bulb performs a coordinate transformation, it must pay for all of it neurally**, and the circuit should look correspondingly more elaborate than Clarke's nucleus rather than comparable to it.

**Candidate analogue:** the olfactory bulb, doing the same kind of job.

**Why this is worth taking seriously.** The bulbar literature has been overwhelmingly about decorrelation — whether granule-cell inhibition whitens the glomerular representation, and whether that is structured or global. Proprioception raises a different job description for a first circuit, one that is not about redundancy at all. And it predicts, from an entirely independent direction, the same thing §3.8 predicted: **bulbar neurons tuned to plume-derived spatial variables** rather than to chemical identity.

Two independent arguments converging on the same prediction is worth more than either alone, and it is the strongest reason in the course to go looking for that stream.

**The disanalogy:** Clarke's nucleus knows what basis to transform into because the limb's geometry is fixed and known. The olfactory equivalent requires knowing what the consumer wants, which returns to Import 15's problem — and if the consumer is navigation, the wanted variables are bearing and distance to source, not molecular identity.

**Prediction:** record in the bulb under controlled plume geometry, varying source distance and bearing while holding odorant identity and mean concentration fixed. A decorrelating circuit predicts responses depending on the chemical pattern and not on the geometry. A coordinate-transforming circuit predicts a population carrying distance and bearing. **These are cleanly distinguishable**, and the reason the experiment has not been done is that standard protocols present no plume geometry at all — a single odorant from a single port at a fixed distance. The variable of interest has been held constant by construction.

<x-order>
<script type="application/json">
{
  "id": "m12.s03.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 41,
  "prompt": "Rank these five experiments by how much they would tell you per unit of effort — most informative-per-cost first. Assume a well-equipped lab with standard imaging, odour delivery, and a wind tunnel.",
  "items": [
    { "id": "a", "text": "Vary plume geometry (distance, bearing) with identity and mean concentration fixed; ask whether bulbar populations carry spatial variables." },
    { "id": "b", "text": "Deliver identical odour transients sniff-triggered versus externally timed; ask whether silent bulbar cells respond to the passive version." },
    { "id": "c", "text": "Measure whether bulbar neurons' concentration tuning shifts with the recent intermittency of the stimulus." },
    { "id": "d", "text": "Compare attentional modulation depth and time constants in bulb versus LGN under matched task demands." },
    { "id": "e", "text": "Swap which odorant receptor a defined glomerulus expresses and ask whether innate valence follows receptor or glomerulus." }
  ],
  "correctOrder": ["b", "a", "c", "d", "e"],
  "modelAnswerNote": "The intended ranking, though a defensible case can be made for swapping the middle three.\n\n**(b) first** — it is the cheapest experiment on the list, needs no new apparatus beyond sniff-triggered delivery, and either outcome reframes a large existing literature. Cheap and high-yield is the combination to look for.\n\n**(a) second** — more effort, since it requires controlled plume geometry, but it tests a prediction that two independent arguments converge on (Import 16 and §3.8), which raises the prior on a positive result. A null result is also informative: it would argue against the dorsal-stream hypothesis in the place it is most likely to be true.\n\n**(c) third** — the direct test of whether the bulb does inference rather than reporting. Conceptually the sharpest of the five, but it needs careful stimulus control to hold mean concentration fixed while varying fluctuation statistics, which is harder than it sounds.\n\n**(d) fourth** — genuinely useful and apparently not done, but it is a quantitative comparison that settles an interpretive question rather than revealing a new mechanism. Lower ceiling.\n\n**(e) last** — the most conceptually decisive but by far the hardest, and it has a technical problem that may make it uninterpretable: glomerular targeting is activity-dependent during development, so changing the receptor may change where the axons go and destroy the manipulation. High value, low feasibility.\n\nThe general lesson is that the ranking is dominated by cost and interpretability rather than by how interesting the question is. The most interesting question on this list is last."
}
</script>
</x-order>

## Import 17 — from §7.7: perception may be the by-product

**Imported:** a proprioception literature built on conscious position sense would have missed the cerebellum entirely. The dominant consumer of proprioceptive information is a controller, not an experience, and the psychophysics of limb position sense is close to a side effect of machinery built for something else.

**Candidate analogue:** olfactory research is dominated by discrimination and identification, because those are what psychophysics measures and what head-fixed behavioural tasks assay. If the dominant consumer of the olfactory code is navigation, that literature may be studying the side effect with great care while the main function goes unmeasured.

**The disanalogy:** proprioception's controller is identifiable and its wanted variables are derivable from the mechanics. Olfaction's consumer is not established, and "navigation" is a hypothesis rather than a finding — one that fits rodents in a plume better than it fits primates, and the primate literature is where most of the psychophysics comes from.

**Prediction:** if navigation is a dominant consumer, then olfactory representations should be better predicted by variables relevant to source localisation — bearing, distance, whiff timing — than by variables relevant to identification, **in freely-moving animals performing a search task.** The prediction is specifically about the preparation: head-fixed discrimination tasks cannot detect this, because they remove the behaviour the code would be serving. That is a testable claim about why a literature looks the way it does, and it is the kind of claim the comparative method is unusually good at generating.

<x-free-response>
<script type="application/json">
{
  "id": "m12.s03.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The vestibular system is the course's best example of a normative theory that worked. List the ingredients that made it work, then go through them for olfaction and say which are present, which are absent, and which are absent for reasons that are fixable within a few years.",
  "modelAnswer": "**What the vestibular case had.**\n\n1. *A precisely stated estimation problem* — estimate tilt and translation from canal and otolith signals. Named latent variables, named measurements.\n2. *Known physics of the stimulus* — the equivalence principle makes the ambiguity exact and analytically tractable, and head dynamics are well characterised.\n3. *A measured input ensemble* — natural head-motion statistics, which are stationary and measurable with an accelerometer on a freely-moving animal.\n4. *A specified noise model* for the afferents.\n5. *A risky prediction that was checked* — neurons should reflect the combination rather than either input, and they do.\n\n**Olfaction, ingredient by ingredient.**\n\n*(1) The stated problem: absent, and this is the underrated one.* \"Encode odour identity efficiently\" names no latent variable and no loss. The fix costs nothing but thought, and where it has been done — posing source separation as an estimation problem — it has produced quantitative results. **Fixable now.**\n\n*(2) Known physics: present, and better than usually credited.* Turbulent transport is well characterised, and the plume ensemble is analytically tractable. This is the strongest ingredient olfaction has and it is under-exploited.\n\n*(3) The measured ensemble: split.* The plume ensemble is measured. The chemical ensemble is not, and building it is a years-long analytical-chemistry effort rather than a theory problem. **The temporal half is available now; the chemical half is not fixable within a few years.**\n\n*(4) Noise model: partially present.* Transduction noise is characterised for receptor neurons; what is missing is the noise in the *stimulus* as delivered by turbulence, which is arguably the dominant term and is inseparable from (2).\n\n*(5) A checked risky prediction: largely absent.* This is the honest weak point. The olfactory normative literature is rich in post-hoc accounts and thin in predictions that were stated in advance and then tested.\n\n**The conclusion the comparison forces:** the tractable normative work in olfaction is *temporal*, because that is where four of the five ingredients are already in place. The chemical identity problem — which is what the field mostly works on — is missing the one ingredient that cannot be supplied quickly. That is an argument for reallocating effort, and it comes from noticing what made a neighbouring modality succeed.",
  "rubric": [
    "Names a precisely stated estimation problem as an ingredient, not just data",
    "Separates the plume ensemble (measured) from the chemical ensemble (not)",
    "Identifies the unstated objective as fixable immediately and at no cost",
    "Identifies the chemical database as the one genuinely long-lead item",
    "Notes the scarcity of pre-registered risky predictions in the olfactory normative literature",
    "Bonus: concludes that effort should shift toward the temporal problem, where the ingredients exist"
  ]
}
</script>
</x-free-response>

## What these two modules changed

The vestibular system gave the ambiguity a template and a known solution, and then — by being stationary where olfaction is not — gave a precise measure of the extra difficulty. It also supplied the course's most directly runnable experiment, in the sniff-triggered versus passive delivery test.

Proprioception did something less expected. It offered a job description for a first circuit that the bulbar literature has largely not considered, and arrived independently at the prediction §3.8 reached from the streams argument. When two unrelated lines of reasoning converge on "look for bulbar neurons tuned to plume geometry", that is the point at which a comparative course stops being an intellectual exercise and starts being a research proposal.
