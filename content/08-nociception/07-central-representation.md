---
id: m08.s07
title: The central representation
lede: There is no pain cortex, and the search for one was the wrong search. Nociception is the sensory process; pain is the percept; and they dissociate in both directions — which is the course's "the consumer determines the code" theme in its sharpest available form.
estimatedMinutes: 14
---

Ask where pain is represented and the honest answer is that no single cortical area is responsible. Imaging shows many regions activated when pain is experienced, and lesion evidence shows that different components of the experience can be removed independently [@kandel2021].

The course's §7 is deliberately called "the central representation" rather than "primary cortex" so that modalities can answer honestly. Nociception's honest answer is that **the central representation is distributed across at least three functionally distinct territories**, and that the interesting fact about it is not where it is but that it is not the same thing as the afferent signal.

## Three territories, three jobs

**Somatosensory cortex** contains neurons with small receptive fields responding to noxious input, receiving from VPL via the spinothalamic route. It supports the discriminative component — where, and how intense. Kandel's chapter 20 notes that these small receptive fields may contribute rather little to the diffuse aching that characterises most clinical pain, which is a useful corrective: the part of the system that looks most like classical sensory cortex is the part that explains the least about pain as patients experience it.

**Anterior cingulate cortex** is limbic, receives via the medial thalamic group and the parabrachial route, and is associated with the affective component. Neurosurgical procedures that ablate cingulate cortex or its connections from frontal cortex **reduce the affective features of pain without eliminating the ability to recognise its intensity and location** [@kandel2021].

**Insular cortex** receives from thalamus and amygdala, processes information about the internal state of the body, and contributes to the autonomic component. Lesions there produce **pain asymbolia**: patients perceive noxious stimuli as painful and can distinguish sharp from dull, but fail to display appropriate emotional responses [@kandel2021].

<x-callout class="x-callout is-key">
<div class="x-callout-title">A double dissociation of components</div>
Cingulate ablation removes the affect and leaves the discrimination. Insular lesion leaves the discrimination and the report of painfulness, and removes the emotional response.

That is a dissociation between components of a single percept, and it is the strongest evidence in this module that <strong>the parallel-streams split of §8.8 is a division of labour rather than a hierarchy described twice</strong> — the same criterion §4.8 applied to touch's what/where streams using the parietal lesion evidence.

It also does something touch's dissociation does not. The discriminative and affective components here are components of <em>one experience</em> that patients report as unified. Taking them apart surgically shows that the unity is constructed rather than given, which is a stronger claim than showing that two behavioural capacities depend on different areas.
</x-callout>

## Nociception is not pain

This is the section's central claim and the reason the module belongs in the course.

**Nociception** is the sensory process: transduction of noxious stimuli, transmission, dorsal horn processing, ascent. It is measurable at every stage with electrodes.

**Pain** is the percept: an unpleasant sensory and emotional experience associated with actual or potential tissue damage, or described in terms of such damage — the standard definition, and note that its final clause already concedes that damage need not be present.

They are not the same variable, and the evidence is a double dissociation with both off-diagonal cells well populated.

<x-figure src="content/08-nociception/figures/dissociation-grid.js"
  caption="Both off-diagonal cells are occupied by well-documented conditions, which is the strongest form of evidence this course accepts that two variables are distinct. Step through them. The consequence for method is severe: any measurement made at the nociceptor is a measurement of nociception, and the inference from it to what is felt runs through a gain stage the experimenter does not control.">
</x-figure>


**Nociception without pain.** Wounded soldiers who do not feel their injuries until removed from the battlefield; injured athletes unaware of pain until the game ends [@kandel2021]. Stress-induced analgesia is the mechanism (§8.9). Placebo analgesia is a milder everyday instance, and it involves endorphin release and is reversible by naloxone — which is worth stating explicitly, because it means a placebo response is not evidence that the pain was imaginary [@kandel2021].

**Pain without nociception.** Central post-stroke pain (the Dejerine–Roussy syndrome) following infarction of lateral thalamus, in which patients experience spontaneous burning pain contralateral to the lesion. Phantom limb pain, where the receptive field contains no receptors because the limb is gone. Anaesthesia dolorosa, in which ablating trigeminal sensory neurons to treat neuralgia produces ongoing burning pain in the now-denervated territory [@kandel2021].

That last one is worth reading twice. **Destroying the afferent supply can produce the percept it was destroyed to abolish.** No account on which pain is a readout of nociceptor activity survives it.

## Why this is the sharpest form of "the consumer determines the code"

The course has made this argument repeatedly and in weaker forms.

§5.4 argued that receptor-swap experiments in taste show behaviour follows the cell rather than the receptor — the downstream wiring, not the molecular detector, determines what a signal means. §3.8 argued that the same olfactory receptor input means "learned identity" in piriform and "innate valence" in cortical amygdala. §4.8 argued that discriminative and affective touch differ because their consumers want different things.

**Nociception makes the argument unavoidable rather than merely available.** In the other cases you can, with effort, maintain that the peripheral signal has an intrinsic meaning that the consumers happen to use differently. Here you cannot: the percept occurs without the periphery and fails to occur with it, so whatever pain is a representation of, it is not the current output of the array.

The methodological consequence is uncomfortable and should be stated. **The dependent variable this field cares about is not measurable at the periphery**, and the mapping from afferent activity to percept passes through a descending gain stage set by state, expectation and context. That is why analgesics acting only peripherally have a ceiling, why placebo is a component of every analgesic's action [@kandel2021], and why animal models are so difficult — a withdrawal reflex is a nociceptive measure, and inferring pain from it assumes exactly the identity this section denies.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Anaesthesia dolorosa — burning pain in a territory whose sensory neurons have been ablated — is the section's strongest single case. What exactly does it rule out, and what does it leave standing?",
  "options": [
    {
      "text": "It rules out any account on which the percept is a function of current afferent activity, while leaving standing accounts on which the percept is generated by central circuits whose normal input is afferent activity and whose set-point is disturbed by its loss.",
      "correct": true,
      "feedback": "This is the right scope, and stating the second half matters as much as the first. The case is devastating to readout accounts and entirely compatible with the central circuits being *calibrated* by afferent traffic — deafferentation removes an inhibitory or homeostatic input and the circuit's output drifts. That reading is testable and it makes contact with the cortical reorganisation seen in phantom limb pain [@kandel2021], where the map of the missing limb is invaded by neighbouring representations. So the case narrows the hypothesis space sharply without emptying it."
    },
    {
      "text": "It rules out peripheral theories of pain entirely, showing that pain is generated centrally and the periphery is merely a trigger.",
      "correct": false,
      "feedback": "Correct under the assumption that a single dissociating case settles the general architecture, which overreaches in a way the course keeps warning against. The other off-diagonal cell — nociception without pain — is equally well populated, and together they show the two variables are distinct, not that one causes nothing. Peripheral sensitization demonstrably changes what is felt; NSAIDs act peripherally and work. 'Pain is central' proves too much and predicts the wrong things about analgesia."
    },
    {
      "text": "It shows that pain is a purely affective or emotional state rather than a sensory one, since the sensory apparatus is absent.",
      "correct": false,
      "feedback": "Correct under the assumption that removing the afferent supply removes the sensory component, leaving only affect. But patients with anaesthesia dolorosa report a *localised* burning quality with sensory character, in a specific territory — the sensory content is present without the sensory input. And the insular lesion evidence cuts the other way, showing affect can be removed while the sensory report survives. Both components can occur without their expected causes, which is stranger than either being reducible to the other."
    },
    {
      "text": "It shows that the definition of pain should be revised to remove the reference to tissue damage, since no damage is present.",
      "correct": false,
      "feedback": "Correct under the assumption that the definition asserts damage is present — but it does not. The standard definition says pain is associated with actual or potential tissue damage *or described in terms of such damage*, and that final clause exists precisely to accommodate these cases. It is a definition built by people who knew about anaesthesia dolorosa. Noticing that is worthwhile: the clinical definition is already more careful about the latent-variable structure than most textbook treatments of the mechanism are."
    }
  ]
}
</script>
</x-mcq>

## What kind of representation is this?

§7 in the other modules asks what the first large recurrent plastic area computes. Nociception's answer is unusual and should be stated as a question rather than a claim.

The candidate answer is that the central representation of pain is **not a representation of the stimulus at all, but of a decision problem**: how bad is the current threat to bodily integrity, what should be protected, what should be avoided in future, and how should the animal's other goals be re-prioritised. That would explain why the territories involved are limbic and interoceptive rather than sensory, why the affective component can be removed surgically while the sensory one persists, and why the system is so heavily influenced by expectation and context.

It would also explain why the central representation is plastic in the way it is. The topographic map of the body in thalamus and cortex is not fixed; it changes with use and disuse, and loss of a limb can lead to shrinking and disappearance of its cortical representation, with abnormal reorganisation likely contributing to phantom limb pain [@kandel2021]. A representation of a decision problem should be re-shaped by what the body can currently do, which is what that plasticity looks like.

**This is a proposal, not a result, and the course should mark it as such.** It is not sharply testable in its present form, it competes with the more conservative reading that these are simply several sensory representations serving several consumers, and nobody has stated an objective function for it precisely enough to derive anything. What it does is make the absence of a "pain cortex" into a prediction rather than a gap — which is the same service §3.6's reframing performs for olfaction's missing relay.
