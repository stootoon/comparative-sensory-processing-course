---
id: m03.s09
title: Active sensing and the motor loop
lede: The sniff is not how odour gets in. It is a sampling decision, a clock, and a filter — and it makes olfaction structurally closer to echolocation than to vision.
estimatedMinutes: 16
---

Nothing reaches the olfactory epithelium unless the animal draws it there. Sniffing is not incidental; it is the act that structures all olfactory input.

## Three things the sniff does

**It sets the sampling schedule.** Sniff frequency in rodents ranges from about 2 Hz at rest to 10 Hz during active investigation. The animal chooses when to sample and how much — a control no visual or auditory system has over its input.

**It provides a phase reference.** Bulbar responses are locked to the sniff cycle, and a great deal of the information is in *when* within the cycle a cell fires. This makes latency codes possible: latency relative to sniff onset is a well-defined quantity because the animal generated sniff onset itself.

That is not a small point. A latency code needs a reference, and most modalities have to find one. Olfaction manufactures its own.

<x-figure src="content/03-olfaction/figures/sniff-phase-code.js"
  caption="Latency referenced to sniff onset. Drag concentration across three decades: amplitudes change enormously and all latencies shorten, but the ORDER of first spikes barely moves, because it is set by receptor affinity rather than concentration. That stability is the basis of the primacy account and of how piriform achieves concentration invariance without normalising amplitude.">
</x-figure>


**It shapes the stimulus.** Flow rate affects the sorption of molecules along the epithelium, so sniff vigour changes not just how much odour arrives but the relative activation across receptor types. The animal partly controls its own transfer function.

## The second sampling route, and what it does to the percept

There is a second way to get molecules onto the epithelium, and it makes a stronger point than the sniff does. Chewing and swallowing pump volatiles released in the mouth up the **retronasal passage** into the back of the nasal cavity. The receptors are the same receptors. The transduction is the same transduction. Yet the resulting sensation is not localised in the nose: it is referred to the mouth and experienced as *flavour*, apparently because it coincides with gustatory and somatosensory stimulation of the tongue [@kandel2021].

This is a sharper version of the section's thesis than sniffing supplies. The sniff shows that the motor act controls *what* is sampled. Retronasal olfaction shows that the motor act controls how the sample is *interpreted* — same molecules, same receptors, different sampling behaviour, and the percept is assigned to a different organ and a different modality label. Whatever is doing the assigning is reading the motor context, not the afferent. §5.8 develops the flavour case and §5.9 places the two routes at different stages of the same acceptance cascade; the point to carry from here is that active sensing in olfaction is not only a gating story.

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">The 4–12 Hz club</div>
Sniffing (2–10 Hz), whisking (5–15 Hz), licking (~6 Hz), saccades (~3 Hz), and the theta rhythm all occupy a similar band. That convergence across modalities and species demands explanation and does not have an agreed one.

Candidates: biomechanical limits on moving a sensor; matching to integration times of the circuits that consume the samples; or a shared coordination clock that lets multiple sampling systems stay in register.

The full course treats this as a motif in its own right. It is worth flagging that <strong>the sniff is the most computationally consequential member of the club</strong> — it is the only one that also filters the stimulus.
</x-callout>

## Search without gradients

§3.2 established the crucial negative result: turbulent mixing destroys usable concentration gradients at the scale of an animal. Chemotaxis by gradient ascent, which works for bacteria at small scales, is unavailable.

What works instead is search that treats detections as **evidence** rather than as a gradient. Maximising expected information gain about source location reproduces the casting and zigzagging that moths and rodents actually do [@vergassola2007] — cast across the wind when no odour has been detected recently, surge upwind on detection.

<x-figure src="content/media/odor-plume-mouse-tracking.jpg"
  caption="A mouse tracking an odour source, carrying a head-mounted sensor that records what it actually encountered. Recordings like this are what turned plume tracking from a behavioural description into a quantitative problem — you can see both the search trajectory and the intermittent signal that drove it."
  credit="Tariq MF, Sterrett SC, Moore S, Lane L, Perkel DJ, Gire DH (2024), PLOS ONE 19(9):e0310254, Figure 1. CC BY 4.0."
  source="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0310254">
</x-figure>


The structure is worth naming: **an ambiguous instantaneous signal, a known forward model of how movement changes it, and movement chosen to disambiguate.** §2.9 identified the same structure in head rotation to resolve auditory front-back confusion, and the vestibular tilt–translation problem is a third instance.

<x-mcq>
<script type="application/json">
{
  "id": "m03.s09.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Infotaxis reproduces casting and surging without ever computing a gradient [@vergassola2007]. A referee objects: \"An animal that surges upwind on detection and casts otherwise is following a gradient — it just does so in a noisy, discretised way.\" What is wrong with the objection?",
  "options": [
    {
      "text": "A gradient rule is a function of the local concentration field, and in a turbulent plume that field carries no reliable directional information at the animal's scale — the surge is driven by a detection *event* interpreted against a forward model, which is a different quantity.",
      "correct": true,
      "feedback": "Right, and the distinction is measurable rather than semantic. A gradient follower's next move depends on the spatial derivative it just sampled; an infotactic agent's next move depends on its posterior over source location, which encodes the whole history of detections *and non-detections*. The clean discriminator is behaviour during a blank: a gradient rule has nothing to act on, whereas the posterior keeps evolving and drives systematic casting. Real animals cast."
    },
    {
      "text": "Gradient ascent requires simultaneous sampling at two points, and most animals tracking plumes have effectively one sensor.",
      "correct": false,
      "feedback": "Correct under the assumption that spatial gradient sensing requires bilateral comparison — and bilateral comparison is genuinely used, so the premise is shaky. But the objection would survive: a single sensor can estimate a temporal gradient while moving, which is how bacteria do it. The problem is not the number of sensors, it is that there is no stable field for either method to differentiate. §3.2 is a claim about the physics, not about the anatomy."
    },
    {
      "text": "Infotaxis maximises expected information gain, which is a fundamentally different objective from reaching the source.",
      "correct": false,
      "feedback": "Partly correct, and worth being precise about: the objective really is information gain rather than distance reduction, and that is what generates the exploratory casting a distance-reducing rule would never produce. But stated this way it is a claim about objectives rather than a rebuttal to the referee, who was making a claim about the *signal*. The signal claim is the one that does the work, because it is what rules gradient ascent out in the first place."
    },
    {
      "text": "Nothing is wrong — surging upwind on detection is a gradient rule in wind coordinates, so the objection stands.",
      "correct": false,
      "feedback": "Correct under the assumption that a fixed stimulus-triggered response counts as gradient following. It does not: upwind surging uses wind direction, which is a separate anemotactic cue, and it triggers on presence rather than on a difference. If you want to call it a gradient rule you have to say in what variable, and the honest answer is that no spatial derivative of concentration is being taken anywhere."
    }
  ]
}
</script>
</x-mcq>

## Closer to echolocation than to vision

The course's suggestion here is that olfaction's usual comparison class is wrong.

Vision is largely passive: photons arrive, and eye movements select among them but do not create them. Olfaction is closer to **active sensing** in the strong sense — the animal controls the timing, the amount, and to a degree the spectral character of what it samples, and it uses movement to resolve ambiguity that a single sample cannot.

Echolocating bats adapt call rate, bandwidth and beam direction to current uncertainty, increasing rate as they close on a target. **Does sniff strategy adapt the same way?** Sniff frequency does change with task, but whether it tracks posterior uncertainty in the way an optimal-experiment-design account predicts is largely untested — and §13 makes it a concrete proposal.

<x-predict>
<script type="application/json">
{
  "id": "m03.s09.p1",
  "contentRev": 1,
  "prompt": "Suppose you run the experiment. You track a mouse searching for a source in a controlled plume, with a head-mounted sensor recording what it actually encountered, and you fit an infotactic model to get a posterior entropy on every timestep. You then regress sniff frequency on that entropy. Before reading on: what confound will make a positive correlation uninterpretable, and how would you break it?",
  "placeholder": "What else covaries with posterior entropy in this task?",
  "reveal": "**The confound is locomotion.**\n\nSniff frequency in rodents is tightly coupled to running speed and to general arousal, and both covary with the search phase. Early in a trial the animal is uncertain *and* moving fast and aroused; late in a trial it is confident *and* slowing as it approaches. A positive regression coefficient is therefore the expected result whether or not sniffing has anything to do with uncertainty, and reporting it would establish nothing.\n\n**Three ways to break it, in increasing order of strength.**\n\n*Regress out the motor variables.* Include speed, head acceleration and a pupil or arousal proxy as covariates. Cheap, and it is the minimum anyone should accept. Weak, because the covariates are collinear with the regressor of interest, so the residual variance you are testing on may be mostly noise.\n\n*Decouple entropy from phase.* Construct trials where the posterior sharpens and then re-broadens — introduce a spurious second source, or interrupt the plume — so entropy is non-monotonic while locomotion is not. Now the two predictors disagree within a trial, which is what the regression needs.\n\n*Manipulate uncertainty without changing the task.* Hold the plume and the geometry fixed and change only the prior: cue the animal to a likely source location on some trials. If sniff frequency drops on cued trials at matched running speed and matched odour encounter rate, that is a direct effect of posterior entropy with the motor confound held constant.\n\n**The general point.** Active-sensing hypotheses almost always predict a correlation between a sampling variable and an internal uncertainty variable, and in almost every case the animal's motor state covaries with both. The same problem afflicts the bat literature — call rate rises with closing speed as well as with uncertainty — and it is why the strongest version of the experiment manipulates the prior rather than measuring the posterior.\n\nThis is what §13 has to solve before the proposal is testable rather than merely stateable."
}
</script>
</x-predict>
