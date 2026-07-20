---
id: m02.s07
title: The central representation — auditory cortex
lede: A1 is tonotopic, and that is nearly the last simple thing anyone can say about it. Where V1 has a workable normative account, A1 has resisted one — which is itself a finding worth taking seriously.
estimatedMinutes: 14
---

Primary auditory cortex is tonotopically organised, inheriting the cochlear frequency axis. Beyond that, the honest summary is that A1 has been harder to characterise than V1, and the difficulty is instructive.

<x-figure src="content/media/tonotopic-map-interpretations.jpg"
  caption="Competing parcellations of human auditory cortex from the same tonotopic data. The gradient is reproducible; where the field boundaries lie, and how many fields there are, is not agreed. That disagreement is itself informative — the map is real but the functional units it implies are not obvious, which is part of why A1 has resisted the normative treatment the cochlea received."
  credit="Michelle Moerel, Federico De Martino, Elia Formisano, Front. Neurosci. 8:225, Fig. 3. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Interpretations_of_tonotopic_maps_Fnins-08-00225-g003.jpg">
</x-figure>


<x-figure src="content/media/tonotopic-map-human-cortex.jpg"
  caption="Tonotopy in human auditory cortex, measured with high-field fMRI. The frequency gradient is real and reproducible — and note that it is inherited directly from the cochlear array (§2.4) rather than computed, exactly as retinotopy is inherited from the retina."
  credit="Sandra Da Costa, Wietske van der Zwaag, Jose P. Marques, Richard S. J. Frackowiak, Stephanie Clarke, Melissa Saenz. CC BY-SA 3.0."
  source="https://commons.wikimedia.org/wiki/File:Tonotopic_maps_in_human_auditory_cortex.jpg">
</x-figure>


## Time is deliberately thrown away on the way up

Before the linear model, one fact about A1 that the module has so far left implicit and that ought to be uncomfortable.

§2.3 made a great deal of the fast transducer: microsecond gating, phase-locking, timing precision no other sensor in this course approaches. That precision does not survive the trip. The upper limit of phase-locking falls from roughly 3 kHz in the auditory nerve, to below about 300 Hz in the medial geniculate body, to below about 100 Hz in A1 — by which point it is no better than the phase-locking limit in primary visual or somatosensory cortex [@kandel2021].

What replaces it is a rate code, and the handover is measurable. Play periodic click trains to A1 and two populations appear: *synchronised* neurons that fire in step with slow trains, and *nonsynchronised* neurons that do not follow the individual clicks at all but fire faster as the interval shortens. The crossover sits near a 25 ms interval — about 40 Hz — which is close to where a click train stops sounding like a sequence of events and starts sounding like a tone.

Read normatively, this is not degradation. It is a **change in what the representation is about**. The auditory nerve represents the waveform moment by moment; A1 represents *segments*, summarising over a window rather than transcribing. Two things follow, and both matter comparatively:

- Higher-level tasks — recognising a word, grouping a source, deciding — require integration over a window, and a code that spends its resolution on the waveform has nothing left with which to summarise.
- Audition's periphery runs orders of magnitude faster than vision's or touch's. If cortex is going to combine them, something has to give, and it is audition that gives. The slowing is the price of being combinable [@kandel2021].

This is the sharpest available answer to a question §2.3 leaves hanging: why build a transducer far faster than behaviour needs, then discard the margin? Because the margin is not spent on cortex. It is spent in the brainstem, on ITDs, and the fast pathway ends there.

## The failure of the linear model

The workhorse description of an A1 neuron is the **spectrotemporal receptive field** — the linear filter over the time-frequency representation that best predicts its response. STRFs are estimable and interpretable, and they do not work very well: for natural sounds a linear STRF typically captures a modest fraction of response variance.

One competing explanation deserves to be stated before the argument proceeds, because it is not obviously wrong. Selectivity increases steadily along the ascending pathway, and by A1 — especially in the upper layers, and only in awake animals — many neurons respond in sustained fashion to a narrow region of a multidimensional stimulus space and give only a transient onset response to everything else. This is why the earliest recordings found auditory cortex so hard to drive: the neurons were selective and the stimuli were not theirs. A neuron probed almost entirely outside its preferred region will yield a poorly-fitting filter no matter what the underlying computation is. So low explained variance alone is weak evidence — it is the *instability* that carries the argument, not the fit.

Worse for the framework, STRFs are **not stable**. The same neuron measured under different stimulus ensembles yields different filters, and measured while an animal performs different tasks yields different filters again. Task-dependent retuning in A1 is rapid and substantial.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A1 is less "primary" than V1</div>
A neuron whose receptive field depends on the task the animal is performing is not a passive feature detector. It is participating in something closer to inference or decision than to encoding.

This should raise a doubt about the whole framing. §1.5 and §2.5 treated the first circuit as encoding and cortex as the thing encoded *for*. But if the cortical representation is task-dependent, "the representation" is not a fixed object to be characterised.

That doubt applies with even more force to <strong>piriform cortex</strong> (§3.7), which is not laminated like V1 or A1, has recurrent connectivity dominating its afferent drive, and looks structurally like an associative memory rather than a sensory map. The temptation is to treat piriform's oddity as an olfactory peculiarity. A1 suggests the peculiarity may be more general — and that V1 is the outlier, not piriform.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A1 spectrotemporal receptive fields change with the stimulus ensemble and change again with the task the animal is performing. Which conclusion does that pair of findings license?",
  "options": [
    {
      "text": "That the filter being estimated is state-dependent, so 'the receptive field' is not a fixed property awaiting a better estimator — which undercuts the encoding framing itself, not merely the linear model.",
      "correct": true,
      "feedback": "This is the conclusion, and the task-dependence is what forces it. Ensemble-dependence alone is consistent with a fixed but nonlinear system being probed at different operating points. Task-dependence is not, because the animal's intention is not a property of the stimulus at all — so no function from stimulus to response, linear or otherwise, can absorb it. Once the mapping depends on something outside the input, characterising 'the encoding' is the wrong project."
    },
    {
      "text": "That A1 neurons are strongly nonlinear, so a richer nonlinear model would recover a stable description.",
      "correct": false,
      "feedback": "Correct under the assumption that the instability is a model-class failure, which is a real possibility and worth pursuing — a static nonlinearity would indeed explain why filters estimated under different ensembles differ. But it cannot explain task-dependence, since the two tasks can be run over an identical stimulus ensemble and still yield different filters. The two findings need different explanations, and only one of them is about model class."
    },
    {
      "text": "That A1 is not really primary sensory cortex and the designation is a misnomer.",
      "correct": false,
      "feedback": "Correct under the assumption that 'primary' entails passive feedforward encoding — and the callout above says something close to this. But the relabelling is a consequence of the finding rather than the finding's content, and it invites the wrong comparative conclusion: V1 also shows task and attention modulation, more weakly. The difference is quantitative, which is precisely why the section suggests V1 may be the outlier rather than A1 the anomaly."
    },
    {
      "text": "That STRFs should be estimated with natural stimuli, since ensemble-dependence means artificial stimuli give the wrong filter.",
      "correct": false,
      "feedback": "Correct under the assumption that some ensemble is privileged and yields the true filter. Good practice, and defensible for other reasons — but if the filter genuinely depends on the ensemble, the natural-stimulus STRF is one more ensemble-conditional description rather than the correct one. This response treats the finding as a methodological nuisance when it is a claim about what kind of object is being measured."
    }
  ]
}
</script>
</x-mcq>

## One thing cortex demonstrably does compute

The pessimism above should not be total, and the exception is precisely the quantity §2.2 said carries the demixing load.

A restricted region near the low-frequency border of A1 and the rostral field in marmosets contains **pitch-selective neurons**: cells tuned to a pure tone at some frequency that also respond to a harmonic complex whose *fundamental* is near that frequency — including when the fundamental is physically absent from the sound and every present harmonic lies outside the cell's excitatory response area. Human imaging finds a region in the same relative position, at the lateral end of Heschl's gyrus. Nearby, **harmonic template neurons** respond weakly to pure tones and strongly to particular combinations of harmonics [@kandel2021].

Two reasons this matters more than a catalogue entry.

First, it is genuinely computed rather than reflected. Subcortical neurons carry information from which pitch could be recovered; these neurons carry pitch, across sounds that share nothing in their spectra but a periodicity. That is a nonlinear inference about a latent cause, done in cortex, and it is the kind of thing the module has otherwise been unable to point at.

Second, it is the cortical payoff of the harmonicity argument. §2.2 claimed harmonicity is the structure that converts an underdetermined mixture into a tractable grouping problem, and §2.8 will claim the grouping cues are likelihood terms in an inference. A dedicated cortical representation of the fundamental — the variable that inference is over — is what that claim predicts. **Olfaction's version of this prediction is the one to hold the field to:** if temporal correlation really occupies harmonicity's slot, there should be cells somewhere downstream tuned to co-fluctuation rather than to composition.

## Where the normative programme stalls

For the periphery, audition has one of the two best normative results in sensory neuroscience (§2.4). For cortex it has essentially nothing comparable — no derivation of A1 tuning from natural sound statistics with anything like the force of the filterbank result.

That pattern is the same in vision: strong at the retina, plausible at V1 via sparse coding, weak beyond. **Both modalities' normative theories degrade with depth**, and at roughly the same rate.

This is worth stating plainly because it changes what one should expect for olfaction. The absence of a good normative account of piriform is not evidence that olfaction is special. It is the same wall that vision and audition hit two or three synapses in — reached sooner in olfaction only because there are fewer synapses to begin with.

<x-free-response>
<script type="application/json">
{
  "id": "m02.s07.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision and audition both have strong peripheral theory and nothing comparable at cortex. Make the best case you can that this shared pattern is a fact about the theories rather than a fact about the brains — then say what evidence would decide between the two readings.",
  "modelAnswer": "**The case that it is about the theories.**\n\nEfficient coding is a theory of *transmission*. It takes an input ensemble, a channel with constraints, and asks how to spend the channel. Every ingredient is measurable at a sensory periphery: the ensemble is out in the world, the constraint is a nerve of countable fibres, the noise is physical. None of them is well defined at cortex. What is the ensemble arriving at A1 — sounds, or the brainstem's already-recoded version of them? What is the channel, when the output goes to a dozen places for a dozen purposes? What is the cost, when the same neuron participates in several computations?\n\nOn this reading the wall is not in the brain at all. It is the boundary of a framework whose ingredients stop being definable, and the pattern's reappearance in a second modality is unsurprising because it is the same framework running out for the same reason twice.\n\nTwo pieces of support. First, the vestibular system: its normative successes are *central* rather than peripheral, because 'estimate heading with minimum variance' is a statable objective even though the circuits are not simple. Circuit complexity is therefore not what stops the theory. Second, the failures are characteristically failures of *specification* rather than of fit — nobody has a badly-fitting derivation of A1 tuning; there is no derivation to fit.\n\n**The case that it is about the brains.** A1's filters change with task. If that is a real property rather than a measurement artefact, then there may be no fixed encoding to derive, and the theory is not failing to describe something — it is correctly reporting that the thing does not exist in the form assumed. That reading makes the wall a genuine transition in what cortex is doing: from encoding to inference and decision.\n\n**What would decide it.** The readings differ on what happens when the objective *is* statable at depth. So: find a deep structure with a well-posed task-level objective, and see whether the normative programme works there. If it does — and the vestibular case suggests it does — the wall is about statability, and cortical depth per se is not the obstacle. If a precisely specified deep objective still yields no traction, the difficulty is in the brains.\n\nA second, cheaper test: the framing predicts that a *task-fixed* preparation should restore stable STRFs. If holding the task constant does not stabilise the filter, task-dependence is not the whole story and the encoding framing fails for some further reason.\n\n**Why this matters for olfaction.** Under the first reading, the productive response to piriform's opacity is not more effort on piriform but a search for the parts of olfaction where an objective can actually be written down — which are the temporal and plume-statistical ones, not chemical identity.",
  "rubric": [
    "Identifies that efficient coding's ingredients — ensemble, channel, cost — are definable at a periphery and not at cortex",
    "Notes that the same framework failing twice for the same reason is weak evidence about brains",
    "States the rival reading: task-dependent filters may mean there is no fixed encoding to derive",
    "Proposes a discriminating test involving a deep structure with a statable objective",
    "Bonus: uses the vestibular case, where normative success is central rather than peripheral",
    "Bonus: draws the consequence that olfactory effort should move to where an objective is statable"
  ]
}
</script>
</x-free-response>
