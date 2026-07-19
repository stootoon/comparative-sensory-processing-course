---
id: m10.s04
title: Dynamics
lede: Every modality adapts across at least four decades of time, and every modality splits into channels with different dynamics. The second motif is the more portable, and olfaction's instance of it is the least tested.
estimatedMinutes: 17
---

## The motif set

This subsection discharges Lesson 4 — where the sensor is slower than the signal, the population must compensate — and Lesson 7, early splitting into complementary channels. It also revisits Lesson 2, because the adaptation story is the clearest ongoing case of one principle producing different structures in different regimes.

## Adaptation across timescales

Every sensory system adjusts its input–output relation on multiple timescales: milliseconds of synaptic depression, hundreds of milliseconds of gain rescaling, minutes of receptor-level change, days to a lifetime of plasticity and, in olfaction, cell replacement.

The normative claim the course has made repeatedly: **adaptation timescale should track the volatility of the input statistics.** Fast where the world changes fast. This is a real prediction and it is testable across modalities rather than within one.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Switch the view to volatility versus adaptation speed. If timescale tracked volatility alone, the modalities would lie on a line, and they do not. Olfaction and vestibular are the informative outliers in opposite directions — olfaction adapts more slowly than the volatility of its input warrants, vestibular faster. Either the principle is incomplete or one of the two axes is mismeasured, and deciding which is a live question rather than a settled one.">
</x-figure>

The strongest quantitative instance is auditory: neurons in the inferior colliculus rescale their level–response functions to match the distribution of sound levels currently being presented, shifting the steep part of the curve to where the stimulus density is highest [@dean2005]. This converts efficient coding from an evolutionary claim about how a system was shaped into an *observable process* happening on a timescale of seconds — which is the single most valuable methodological move in the adaptation literature, because it makes the theory testable in one animal in one session.

It is the same objective Laughlin used for the fly's contrast–response curve [@laughlin1981]: match the transfer function to the cumulative distribution of the input. Laughlin's version was static and evolutionary; Dean's is dynamic and observable. Same principle, two regimes of timescale.

### What this predicts for olfaction

**Prediction — bulbar or piriform level–response functions should rescale to the currently-presented concentration distribution, on a timescale of seconds.** This is the Dean experiment transposed: present odour concentrations drawn from a narrow distribution centred at one value, then switch the centre, and ask whether the steep region of the concentration–response function follows. Efficient coding predicts it does, with the switch complete within a few seconds; a fixed-nonlinearity account predicts no shift; a pure divisive-normalisation account predicts a shift in gain but not in the *position* of the steep region relative to the new mean, which is the discriminating detail.

**Status: not done in this form.** Olfactory adaptation is extensively documented, but almost always as a decrement to a repeated stimulus rather than as a rescaling to a stimulus *distribution*. Those are different measurements and only the second tests the normative claim. This is one of the most directly importable experiments in the course and its absence is a genuine gap in the literature rather than a design fact about olfaction.

**The complication that makes olfaction's version harder.** In audition the statistic being adapted to is one-dimensional — sound level. In olfaction, "the concentration distribution" is a distribution over a high-dimensional receptor pattern, and there is no single scalar to rescale against. The experiment above finesses this by using a single odorant, which is legitimate as a first test but concedes exactly the dimensionality that makes olfaction hard.

<details class="x-deeper">
<summary>Why multiple timescales, and why a power law</summary>

If the environment's statistics change at an unknown rate, no single adaptation time constant is optimal. The Bayesian statement: an observer estimating a slowly-drifting parameter with unknown drift rate should integrate over a mixture of timescales, and the posterior-optimal estimator can be approximated by a bank of leaky integrators with time constants spread logarithmically. The resulting aggregate response to a step is approximately a power law rather than an exponential — which is what is observed in many adaptation measurements and is often reported as a puzzle.

So multi-timescale adaptation is not a failure to settle on the right time constant. **It is the correct response to uncertainty about the volatility itself.** This also predicts something checkable: an animal reared in an environment whose volatility is *known and fixed* should develop a narrower spread of timescales than one reared under variable volatility. Nobody has run that experiment in any modality, which is worth noting because it is the prediction that would distinguish the normative account from the observation that biological mechanisms happen to have many time constants.

Olfaction adds a timescale nothing else has: adult neurogenesis in the bulb, operating over weeks. The vestibular module raised the obligation this creates — adaptation needs a teacher, and olfaction has no equivalent of retinal slip. But proprioception supplies the escape: self-supervised recalibration needs only a forward model and prediction error from it, no external teacher [@wolpert1995]. Sniffing supplies a predictable self-generated component, so the error signal is available in principle. This is a coherent proposal and not a demonstrated mechanism, and it should be labelled as such.
</details>

## Splitting into complementary channels

The most portable motif in the course, and the one with the most independent instances:

- Retinal sustained and transient ganglion cells.
- SA, RA and PC afferents in touch, tiling temporal frequency, with each class's filtering traceable partly to accessory-structure mechanics [@johnson2001].
- Regular and irregular vestibular afferents.
- Position, velocity and vibration channels in the fly chordotonal organ.
- Mitral and tufted cells in the bulb.

Every one is the same move: one channel cannot simultaneously optimise sensitivity, temporal precision and dynamic range, so split early and let the consumer choose. **When you meet two cell types with different dynamics, this should be the first hypothesis, not the last.**

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Filter to conflicting deadlines. The three reasons systems split are constantly conflated, and they transfer differently: an invariance split predicts one thing about olfaction, a loss-function split another, a deadline split a third. Olfaction has one confirmed instance, one proposed and one merely predicted — and knowing which is which is the difference between importing a result and importing an assumption.">
</x-figure>

<details class="x-deeper">
<summary>Why one channel cannot do both jobs</summary>

Take a channel with a fixed output entropy budget $H$ — a spike-rate ceiling. To resolve a signal to precision $\Delta$ over a range $R$ requires $\log_2(R/\Delta)$ bits, so range and resolution trade one-for-one on a log scale.

Now add time. A channel with an integration window $\tau$ averages input noise down by $\sqrt{\tau}$, so sensitivity improves as $\sqrt{\tau}$ while temporal resolution degrades as $\tau$. Sensitivity and temporal precision are therefore in direct conflict, and no choice of $\tau$ is optimal for both.

Two channels with time constants $\tau_1 \ll \tau_2$ dominate any single channel whenever the consumer needs both, at the cost of duplicated hardware. The condition for splitting to be worth its cost is roughly that the required dynamic range times the required temporal bandwidth exceeds what one channel's entropy budget covers — which is why the split appears in exactly those modalities with wide operating ranges and tight deadlines, and not in, say, magnetoreception.

This derivation is agnostic about *what* the channels split on. It gives the deadline and dynamic-range splits directly. It does not give the invariance split, which comes from a different argument entirely: identity requires position invariance and location requires the opposite, so no single representation serves both. Keeping these two derivations separate is the point of the figure above.
</details>

### What this predicts for olfaction

**Prediction 1, confirmed — a loss-function split.** Where one consumer wants distinctions preserved and another wants them collapsed, build both. Taste supplies the argument: hundreds of bitter compounds converge onto one axis because the action is identical for all of them [@chandrashekar2006]. The olfactory prediction — that innate-valence pathways collapse distinctions while identity pathways preserve them — holds in the piriform / cortical-amygdala dissociation and, in insects, in the lateral horn / mushroom body split. This is the course's clearest confirmed import, and its value is that the prediction was made from taste's argument by someone who had not connected the two literatures.

**Prediction 2, proposed but under-tested — a deadline split.** Mitral and tufted cells differ in latency, reliability and threshold, with tufted cells responding earlier and at lower concentration. The speed–accuracy reading is that tufted cells serve fast coarse inference against a tight deadline while mitral cells serve slower inference that integrates cortical feedback. This fits the behavioural fact that rats can discriminate odours within roughly 200 ms, near a single sniff [@uchida2003].

The falsifiable version: **if the split is by deadline, forcing the animal to respond faster should shift the behavioural read-out onto the tufted channel specifically**, and selectively silencing tufted cells should impair fast decisions while leaving slow ones intact — with mitral silencing producing the reverse. The prediction is precise, the manipulations exist, and the experiment has not been reported. This has been less explored than the other two framings largely because mitral and tufted cells were historically treated as one population.

**Prediction 3, predicted but not located — an invariance split.** Vision, audition and touch each split identity from location. Audition matters most here: its receptor array has *no spatial dimension at all*, and it splits anyway [@mcalpine2001; @carr1990]. That makes the split a consequence of the computational problem rather than of the sensor's geometry, and it predicts olfaction should have one. Nobody has convincingly located it.

Is it absent or unlooked-for? **Unlooked-for, with high confidence**, and for a specific reason. A location stream is found by varying source location and looking for neurons that track it. Olfactory physiology overwhelmingly varies odour identity at a fixed delivery port. If the wanted variables are bearing and distance to source — which is what Lesson 6 predicts if the dominant consumer is navigation — then the standard preparation holds both constant and could not reveal the stream however strong it is. Combined with the same argument in 10.3 about maps of derived variables, this is the module's clearest instance of a motif whose apparent absence is an artefact of what the field measures.

## The slow sensor, and population compensation

Lesson 4's core fact: olfactory receptor neurons are roughly an order of magnitude too slow for the plume fluctuations that mice demonstrably resolve and use behaviourally [@ackels2021]. That mismatch is close to unique among the classical senses — vision, audition and touch all have sensors fast enough for the signals that matter to them.

Usefully, the problem is *solved* elsewhere. Electric fish achieve sub-microsecond behavioural precision from neurons with millisecond jitter, purely by pooling across a large converging population, and the scaling analysis is worked out including the ceiling imposed by correlated noise. The mechanism is known; the open question is whether olfaction uses the same one.

Two candidate compensations, with different signatures:

- **Averaging.** Precision improves as $1/\sqrt{N}$ in the number of converging receptor neurons, saturating at the correlated-noise floor. Predicts sensitivity to $N$ and indifference to the diversity of kinetics.
- **A filter basis.** The converging population spans a range of time constants, and the readout inverts the known filter bank to recover faster structure than any single element resolves. Predicts sensitivity to kinetic diversity and comparative indifference to $N$ above a threshold.

These are cleanly separable and neither has been tested. The measurement is the one flagged in 10.2: manipulate $N$ and kinetic diversity independently, and measure fast-fluctuation discrimination.

<x-predict>
<script type="application/json">
{
  "id": "m10.s04.p1", "contentRev": 1,
  "prompt": "You can silence tufted cells or mitral cells selectively, and you can impose either a tight or a generous response deadline. Before reading on: write the full 2×2 of predicted behavioural outcomes under the deadline-split hypothesis, and say which cell of the table would most cleanly refute it.",
  "placeholder": "Tufted silenced × tight deadline → …",
  "reveal": "Under the deadline hypothesis: tufted silenced with a tight deadline → large impairment, because the fast channel is the only one that has reported by then. Tufted silenced with a generous deadline → little or no impairment, because the mitral channel has time to deliver the same content. Mitral silenced with a tight deadline → little impairment on speed, though accuracy should not exceed the coarse ceiling the tufted channel supports. Mitral silenced with a generous deadline → impairment specifically on fine discriminations that require the extra integration time.\n\n**The refuting cell is tufted-silenced with a generous deadline.** A deadline split says the two channels carry the *same content* to consumers with different latency requirements, so removing the fast channel must be harmless once the deadline is relaxed. If tufted silencing impairs performance even with unlimited time, the split is not by deadline — it is by content, and you are looking at an invariance or loss-function split instead. That distinction is the whole reason the three reasons for splitting are kept apart.",
  "followUp": "Note that you could derive this entire table without knowing anything about mitral or tufted cells — it follows from the definition of a deadline split. That is what makes it a prediction rather than a summary."
}
</script>
</x-predict>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s04.q1", "contentRev": 1, "points": 1,
  "prompt": "You reduce the number of receptor neurons converging on each glomerulus by 75%, holding the diversity of their response kinetics constant. Discrimination of fast plume fluctuations is unimpaired. What follows?",
  "multi": false,
  "options": [
    { "text": "Simple averaging is not the compensation mechanism; the readout is exploiting the diversity of kinetics rather than the number of samples.", "correct": true, "feedback": "Correct. Averaging predicts precision scaling as the square root of N, so a 75% reduction should cost a factor of two — a large effect. Its absence, with diversity held constant, points to a filter-basis account where the population spans a set of time constants and the readout inverts them. This is the electroreception template applied and coming out the other way, which is exactly what makes the manipulation worth doing." },
    { "text": "The population was already at the correlated-noise ceiling, so reducing N changes nothing.", "feedback": "This is right under the assumption that shared noise across converging receptor neurons dominates independent noise. It is a genuine alternative and the electroreception scaling analysis includes exactly this ceiling. The way to separate it from the answer above is to reduce N much further: if a ceiling is the explanation, performance falls off sharply once N drops below where shared noise stops dominating; a filter-basis account predicts a much gentler decline." },
    { "text": "Fast fluctuation information is carried by the bulb's recurrent circuitry rather than by the afferent input at all.", "feedback": "This is the answer if you assume central dynamics can generate temporal precision not present in the input. They cannot create information the input lacks — recurrence can sharpen or maintain a representation but not recover a component the afferents never carried. The manipulation reduced afferent count, so any surviving performance had to come through the surviving afferents." },
    { "text": "Receptor kinetics were never the limiting factor, so the premise of Lesson 4 is wrong.", "feedback": "This is the answer under the assumption that a null result on N refutes the whole slow-sensor framing. It does not: the mismatch between receptor time constants and the plume fluctuations mice use behaviourally is a measured fact [@ackels2021], independent of which compensation mechanism operates. The result constrains the mechanism, not the problem." }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m10.s04.o1", "contentRev": 1, "points": 1, "partialCredit": true,
  "prompt": "Order these adaptation timescales from fastest to slowest, as the course has met them.",
  "items": [
    "Synaptic depression at the first central synapse (tens of milliseconds)",
    "Level-distribution rescaling in the inferior colliculus (seconds)",
    "Sensory receptor adaptation to a maintained odour background (tens of seconds)",
    "Negative-image learning at a broad delayed input (minutes)",
    "Adult neurogenesis in the olfactory bulb (weeks)"
  ]
}
</script>
</x-order>
