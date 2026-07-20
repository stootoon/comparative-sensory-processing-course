---
id: m06.s01
title: The computational problem
lede: Estimate head motion in an inertial frame from sensors that are provably ambiguous. Vestibular is the one modality whose normative story is a textbook state-estimation problem with a known forward model — and it is the closest structural match to olfaction's worst confound.
estimatedMinutes: 14
---

The vestibular system estimates how the head is moving and how it is oriented relative to gravity. It does this with two sensor types: **semicircular canals** measuring angular velocity, and **otolith organs** measuring linear acceleration.

<x-figure src="content/media/bony-labyrinth-labelled.jpg"
  caption="The bony labyrinth. Three semicircular canals in near-orthogonal planes, plus the utricle and saccule housing the otolith organs — and the cochlea, coiled off the same structure. Ten sensors in total (§6.4), forming an almost exact basis for the six degrees of freedom of head motion."
  credit="Jose Braga; Ross Whitwam. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bony_labyrinth_labelled.png">
</x-figure>


## The ambiguity, and why it is not a design flaw

The otoliths are accelerometers: a dense mass sits on a sensory epithelium and lags when the head accelerates, deflecting hair cells.

But **gravity is an acceleration**. An otolith organ tilted relative to gravity is deflected exactly as it would be by linear acceleration in the horizontal plane. Tilting your head and accelerating forward produce **identical** otolith signals.

This is not a limitation of biological sensors. It is Einstein's equivalence principle: gravitational and inertial acceleration are locally indistinguishable, and **no accelerometer of any construction can separate them.** A better sensor would not help.

<x-mcq>
<script type="application/json">
{
  "id": "m06.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "An engineer proposes fixing the tilt–translation ambiguity by building a better otolith organ: denser otoconia, stiffer gel, lower transducer noise. What is wrong with the proposal, and what does the answer tell you about which ambiguities are worth attacking with better sensors?",
  "options": [
    {
      "text": "The ambiguity is a property of the physics, not of the instrument — the two world-states produce the same force on any test mass — so no accelerometer improves the situation. Only a second sensor measuring a different physical quantity can help.",
      "correct": true,
      "feedback": "This is the distinction the section is built on. Sensor-limited ambiguities shrink as the sensor improves; principled ambiguities do not shrink at all, because distinct causes are mapped to an identical physical signal before transduction. The diagnostic question is whether a perfect instrument would still be confused. Here it would, so the fix has to be informational — canal input plus a forward model — rather than mechanical."
    },
    {
      "text": "Better otoliths would help, but the improvement is not worth the metabolic and developmental cost of denser crystals.",
      "correct": false,
      "feedback": "Correct under the assumption that this is a cost–benefit trade of the kind §1.5 makes for retinal filters, and that framing is right for many sensory design questions. It is wrong here because the benefit is exactly zero, not merely small. Cost arguments are the right tool when a resolution–cost curve exists; the equivalence principle means there is no such curve to sit on."
    },
    {
      "text": "The proposal fails because otolith noise is already at the physical limit, so no headroom remains.",
      "correct": false,
      "feedback": "Correct under the assumption that the binding constraint is transducer noise — the assumption that is right for rod photoreceptors [@baylor1979], where single-photon detection really does leave no headroom. But the vestibular case fails for a different and deeper reason. Even an infinitely quiet, arbitrarily sensitive accelerometer returns the same number for tilt and for translation. The problem is degeneracy, not noise."
    },
    {
      "text": "It fails because the otoliths also need to report high-frequency acceleration, and increasing the mass would slow the response.",
      "correct": false,
      "feedback": "Correct under the assumption that the design is bandwidth-limited, and the mechanics are real — a heavier mass on a compliant gel does lower the corner frequency, exactly as the canal's cupula sets its passband (§6.2). But this identifies a side effect of the proposed change rather than the reason the change cannot work. Removing the bandwidth cost entirely would still leave tilt and translation indistinguishable."
    }
  ]
}
</script>
</x-mcq>

<x-figure src="content/06-vestibular/figures/tilt-translation.js"
  caption="The ambiguity, and its resolution. Drive tilt and acceleration to produce the same otolith shear two different ways and watch the readout not move — distinct world states, identical sensor signal. Then switch the canal input off and see the somatogravic illusion appear. This is the exact structural analogue of olfaction's concentration/distance/transport confound.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">The structural match to olfaction</div>
This is the most exact analogy in the course, and §3.1 flagged it in advance.

<strong>Vestibular:</strong> two physically distinct world-states — head tilt, and linear acceleration — produce identical otolith activation. Resolvable only by combining a second sensor (the canals) under a known forward model of head dynamics.

<strong>Olfaction:</strong> instantaneous receptor activation confounds source concentration, distance to source, and plume transport history. A weak source nearby and a strong source far away can produce the same activation. Resolvable only by temporal statistics plus a model of turbulent transport.

Both are <strong>principled ambiguities</strong>, not sensor limitations. Both need extra signals plus a forward model. The vestibular case is solved at the computational level and the solution has been localised — convergent canal and otolith signals in the vestibular nuclei and cerebellum, with separate populations coming to encode tilt and translation [@kandel2021; @angelaki2004] — which makes it the best available template. It tells you what to look for: <em>neurons whose responses reflect the combination rather than either input alone.</em>

Be precise about what is settled, because the course leans on this case repeatedly. That the computation is performed, where, and that it requires canal input, are established. The <em>form</em> of the internal model — how the physics is represented in the circuit, and what learns it — is an interpretation fitted to the responses rather than a measured mechanism. "Solved" here means the problem statement and the sufficient inputs are known, not that the implementation has been read out.
</x-callout>

## What is being estimated

- **Angular velocity** of the head, in three axes.
- **Linear acceleration**, separated into the gravitational and inertial parts.
- **Head orientation** relative to gravity — the integral of the above.
- Implicitly, a running estimate of **self-motion** for distinguishing world motion from own motion.

The last is where vestibular differs most from the exteroceptive senses. It does not measure the world; it measures the **relation between the animal and the world**, which is why it is inseparable from motor control and why its outputs go to eye muscles and spinal cord before they go anywhere cognitive.

## Loss and deadline

The deadline is the tightest in the course. The vestibulo-ocular reflex must counter-rotate the eyes within about **10 ms** of a head movement to keep the image stable — faster than any visual feedback loop could achieve. That constraint alone dictates the anatomy (§6.5): a three-neuron arc, because there is not time for more.

<x-free-response>
<script type="application/json">
{
  "id": "m06.s01.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout above claims tilt/translation is the exact structural analogue of olfaction's concentration/distance/transport confound. Push on the analogy: name the one respect in which the olfactory case is structurally *worse*, and say what that difference predicts about where an olfactory solution would have to live in the pathway.",
  "placeholder": "Where does the analogy break, and what follows for the anatomy?",
  "modelAnswer": "**Where the analogy holds.** Both are degeneracies of the forward map: distinct world-states produce identical receptor activation, so no improvement to the transducer separates them. Both are resolvable only by adding a signal the confounded sensor does not carry, interpreted through a model of how causes generate signals.\n\n**Where it breaks, and this is the load-bearing difference.** The vestibular resolution rests on a *constant* — gravity is 9.8 m/s², downward, always. The forward model of head dynamics is Newtonian and does not change over an animal's lifetime, so it can be built in during development and left alone. Olfaction's forward model is a model of turbulent transport, and turbulence has no constant of comparable status: the statistics depend on wind speed, substrate, temperature, and time of day, all of which vary faster than development can track (§6.2).\n\nSo the olfactory problem is not the vestibular problem with a bigger sensor array. It is the vestibular problem **with a non-stationary forward model**, which is a strictly harder class.\n\n**What that predicts about anatomy.** A stationary forward model can be hard-wired at the first central synapse, and the vestibular one is — the cancellation happens in the vestibular nuclei (§6.9), three synapses from behaviour, with no learning required at run time. A non-stationary forward model cannot be hard-wired anywhere; it must be estimated online, which requires plasticity, a longer integration window, and somewhere to hold an estimate that updates.\n\nThe prediction is therefore that **olfaction cannot solve its ambiguity at the equivalent of the vestibular nuclei**. Whatever does the work must be plastic and must integrate over time, which points at the bulb's granule-cell layer and its adult neurogenesis (§3.2) rather than at anything resembling a fixed three-neuron arc. A useful corollary: if someone reports a hard-wired, non-plastic olfactory circuit that resolves concentration from distance, that is evidence the transport statistics are more stationary than this course assumes — which would be a result.",
  "rubric": [
    "States the shared structure: degenerate forward map, unfixable by a better transducer, resolvable only by an extra signal plus a model",
    "Identifies the constancy of gravity versus the non-stationarity of turbulent transport as the asymmetry",
    "Draws the consequence that the olfactory forward model must be estimated online rather than built in",
    "Derives an anatomical prediction: the solution needs plasticity and temporal integration, so it cannot sit at the first synapse the way vestibular cancellation does",
    "Bonus: names a finding that would falsify the argument — a fixed, non-plastic olfactory circuit resolving the confound"
  ]
}
</script>
</x-free-response>
