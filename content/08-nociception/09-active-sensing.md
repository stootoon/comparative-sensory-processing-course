---
id: m08.s09
title: Active sensing and the motor loop
lede: There is no sniff, no saccade, no whisk. The animal cannot move this sensor to a better vantage point — so it does the other thing, and sets the gain of the first synapse from the brainstem. This is the strongest centrifugal control of any sensor in the course.
estimatedMinutes: 13
---

§9 in every module asks how the animal shapes its own input. Vision saccades, olfaction sniffs, touch whisks and palpates, gustation licks, proprioception moves the very thing it measures. The course's claim is that sampling is optimal experiment design, and that efference copy is what makes the resulting input interpretable.

**Nociception has no sampling act**, and the absence is not an oversight in the system's design. Deliberately probing for damage is a strategy with an obvious flaw: the probe causes the thing it is probing for. There is no equivalent of moving the eye to a more informative fixation, because the informative manipulation is destructive.

The section says so, and then asks what nociception does instead — because it does something, and it does more of it than any other modality here.

## Two things that are genuinely active sensing

Before the main argument, two real instances, because the absence is not total.

**Guarding and probing.** An animal with an injured limb tests it: partial loading, small movements, the wince that follows. That is exactly optimal experiment design — a controlled, minimal-cost probe to estimate the current state of an unobservable variable (how healed is it?) whose value determines an important decision (can I run on it?). It is under-studied as active sensing and fits the framework well.

**Withdrawal as an epistemic act.** Removing a hand from a stimulus does two jobs: it stops the damage, and it tests whether the stimulus was the cause. If the signal ends when you move, the source was external and localised; if it does not, it is internal. The reflex is a controlled intervention on a causal hypothesis, and the fact that its primary purpose is protective does not stop it being informative.

Both are real and neither is a sampling *rhythm*.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Nociception is not on this figure, and it is the only somatic modality that is not. Sniffing, whisking, licking and saccades all discretise input at 4–12 Hz because each is an act that repositions a sensor. Nociception has nothing to reposition — the informative manipulation is the destructive one — so the absence is a prediction of the framework rather than a hole in it.">
</x-figure>


## What replaces it: gain control from above

If you cannot move the sensor, the remaining way to control your own input is to change what the sensor's output is worth. Nociception does this with a dedicated descending system that acts at the first synapse.

Stimulation of the **periaqueductal grey** produces profound and remarkably modality-specific analgesia: animals still respond to touch, pressure and temperature in the body area that has become insensitive to pain [@kandel2021]. Few PAG neurons project directly to the dorsal horn; most act through the **rostroventral medulla**, including serotonergic neurons of the nucleus raphe magnus, whose axons descend in the dorsolateral funiculus to form inhibitory connections in laminae I, II and V. A second noradrenergic descending system arises from locus coeruleus and other pontine and medullary nuclei [@kandel2021].

The system is **bidirectional**. RVM contains cells that suppress transmission and cells that facilitate it, so this is a gain knob rather than an off switch — and the facilitatory setting is a candidate substrate for pathological pain (§8.10).

It is also **opioid-based**, which is why it was discovered. Naloxone blocks stimulation-produced analgesia, which was the first clue that the brain contains endogenous opioids [@kandel2021]. Enkephalin and dynorphin interneurons in the superficial dorsal horn sit adjacent to the synapses between nociceptive afferents and projection neurons, with μ, δ and κ receptors on both the presynaptic terminals and the postsynaptic dendrites — hyperpolarising the projection neuron and blocking calcium entry into the afferent terminal [@kandel2021]. Morphine works by mimicking this system, which is worth stating in the course's terms: **the most important analgesic in medicine is an exogenous agonist at a gain-control mechanism the animal already has.**

<x-figure src="content/08-nociception/figures/descending-control.js"
  caption="Step through the three behavioural states. The control signal is not sensory — it is threat, expectation, prior commitment to a movement — and it acts before anything has been relayed. Compare §3.6's argument about what centrifugal input to the olfactory bulb might be for: both systems apply state-dependent gain at the first synapse, and nociception is the case where the behavioural consequence is unmistakable.">
</x-figure>


## The normative argument for stress-induced analgesia

This looks like a paradox and is not. A system whose entire justification is that misses are catastrophic contains a mechanism for suppressing its own output — and it deploys that mechanism at the moment injury is most likely.

The resolution is a **decision-value argument**, and it is worth stating carefully because it is the module's best example of the course's method producing a non-obvious answer.

A signal is worth transmitting to the extent that it can change what the animal does. During escape from a predator, the correct action is already determined and is not revisable: run. A pain signal arriving mid-escape cannot improve that decision. What it *can* do is degrade it — pain compels guarding, immobility and attention to the injured part, all of which are correct when the threat is the injury and catastrophic when the threat is the predator.

So the expected value of transmitting is negative, and the optimal policy suppresses. **Report the injury when the report can change something.** That is not an exception to §8.1's asymmetric loss; it is what the asymmetric loss recommends once you notice that the cost of a false alarm is not constant but depends on what the animal is currently doing.

The prediction is specific and checkable: analgesia should be tied to **behavioural commitment to an incompatible action**, not to arousal or to stress hormones as such. It should appear during escape and combat, be absent during grooming and rest, and terminate when the escape does — which matches the soldier and athlete descriptions well [@kandel2021]. It also predicts that analgesia should be weaker in animals with no available escape, which is testable.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The comparative point, and the olfactory parallel</div>
Every modality in this course has centrifugal control of its early stages. What distinguishes nociception is <strong>how much</strong>.

<strong>Vision.</strong> Cortical feedback to LGN outnumbers retinal input, and modulates gain and timing. It does not abolish seeing.

<strong>Audition.</strong> Olivocochlear efferents adjust cochlear gain by tens of decibels — real, and still not enough to make a sound inaudible.

<strong>Olfaction.</strong> Massive cortical feedback onto granule cells gates mitral output (§3.6). §1.6 lists this as the candidate for what the bulb does instead of a thalamic relay.

<strong>Nociception.</strong> Descending control can abolish the percept entirely, in an intact animal, with the afferents firing.

<strong>What that suggests for olfaction.</strong> §3.6 asks what bulbar centrifugal feedback is for, and the usual candidate answers are attentional gain and figure–ground separation. Nociception offers a third: <em>suppressing reports whose decision value has gone to zero because the animal is committed to an action they cannot improve.</em> That predicts bulbar suppression should be strongest during committed goal-directed behaviour and weakest during exploration — which is close to the opposite of what an attentional account predicts, and is therefore worth testing.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m08.s09.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Stress-induced analgesia suppresses a signal whose miss is supposed to be catastrophic. What is the best normative account of why that is not a contradiction?",
  "options": [
    {
      "text": "The cost of a false alarm is not constant — it depends on what the animal is doing. During committed escape, a pain signal cannot improve the current decision and can degrade it, so its expected decision value is negative and suppression is optimal.",
      "correct": true,
      "feedback": "This is the argument, and the crucial move is recognising that §8.1's cost matrix has a state-dependent entry rather than a fixed one. It also makes a specific prediction that distinguishes it from rival accounts: analgesia should track *commitment to an incompatible action* rather than arousal, so it should appear during escape and be absent during high-arousal states with no competing action. Note that this is the same shape as the audition and vestibular arguments for efference copy — suppress what you already know cannot change your estimate."
    },
    {
      "text": "The suppression is incomplete, so the signal still gets through in attenuated form and the miss is avoided.",
      "correct": false,
      "feedback": "Correct under the assumption that the system is trading off detection against interference on a continuum, which is a reasonable default and is often partly true. But it does not explain the *timing* — why suppression is engaged specifically during escape rather than as a fixed attenuation — and the clinical descriptions describe complete absence of pain rather than reduction. A graded-attenuation account predicts the wrong dependence on behavioural state, which is the interesting variable here."
    },
    {
      "text": "Analgesia is a byproduct of the stress response rather than a designed feature, since the same opioid and monoaminergic systems serve arousal and autonomic regulation.",
      "correct": false,
      "feedback": "Correct under the assumption that shared machinery indicates a spandrel. The machinery genuinely is shared. But the analgesia is modality-specific — PAG stimulation abolishes pain while sparing touch, pressure and temperature in the same body region [@kandel2021] — and a byproduct of general arousal has no reason to be selective for one submodality. Selectivity is the signature of a designed circuit, and it is what makes the byproduct reading hard to sustain."
    },
    {
      "text": "The injury has already happened, so the information is about the past and a system optimised for prediction should discount it.",
      "correct": false,
      "feedback": "Correct under the assumption that the signal reports a completed past event, which is how a naive reading of §8.1 might frame it. But §8.2's persistence argument says the opposite: the reported state is ongoing and unresolved, which is exactly why §8.10's gain goes *up* rather than down. If the signal were merely historical, sensitization would be inexplicable. The suppression is about the current action's revisability, not about the age of the evidence."
    }
  ]
}
</script>
</x-mcq>

## Efference copy, and its absence

One more comparison closes the section.

Proprioception and the vestibular system have forward models: an efference copy of the motor command predicts the sensory consequences, and the prediction is subtracted so that self-generated input can be distinguished from externally caused input [@wolpert1995; @cullen2012]. §7.9 argues this is the central computation of proprioception rather than a refinement of it.

**Nociception has no forward model, and should not want one.** A forward model exists to cancel the sensory consequences of your own actions. But self-inflicted damage is still damage — a burn is a burn whether you reached for the pan or it fell on you — so cancelling the self-generated component would remove exactly the reports the system exists to make.

This is a clean case of an absence that the framework predicts rather than merely records. The general principle: **cancel self-generated input when it is uninformative about the latent variable, and keep it when it is not.** Self-motion is uninformative about the world's motion, so cancel it. Self-inflicted injury is fully informative about tissue damage, so keep it.

It also explains the one apparent exception. You cannot tickle yourself, and self-administered touch is attenuated — but self-administered noxious stimuli are not attenuated in the same way, which is why people are poor at pulling out their own splinters and why surgery on oneself is not a viable strategy. The attenuation follows the informativeness, exactly as the principle predicts.
