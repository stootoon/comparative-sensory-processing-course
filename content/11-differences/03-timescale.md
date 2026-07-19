---
id: m11.s03
title: Timescale and the sensor–signal ratio
lede: Every classical sense but one has a sensor fast enough for the structure it uses. Olfaction's is an order of magnitude too slow — and the one non-classical sense with the same problem has already solved it.
estimatedMinutes: 17
---

## The ratio, and why it is the right variable

The datasheet's speed row records "sensor vs signal speed" and reads: vision comparable, audition sensor much faster, touch sensor fast, olfaction sensor slower. That row is a ratio, and stating it as one makes it do more work than a set of adjectives.

Define $\rho = B_{\text{sensor}} / B_{\text{signal}}$, where $B_{\text{sensor}}$ is the bandwidth over which the transducer follows its input and $B_{\text{signal}}$ is the bandwidth of the stimulus structure the animal **demonstrably uses** — not the bandwidth physically present, which is a different and much larger number in every modality.

That second definition is load-bearing. Turbulent plumes contain structure at hundreds of hertz; the relevant quantity is what behaviour depends on. Mice discriminate odour stimuli differing in fluctuation structure at frequencies up to roughly 40 Hz [@ackels2021], so $B_{\text{signal}} \approx 40$ Hz is a behavioural measurement, not an assumption about the physics.

$\rho > 1$ means the sensor is not the bottleneck and the interesting questions are about coding. $\rho < 1$ means single-sensor readout is provably insufficient and the system must have a population solution or the behaviour would not exist.

<x-figure src="content/11-differences/figures/sensor-signal-gap.js"
  caption="Two modalities fall to the left of the line, and they are the ones nobody groups together: olfaction and electroreception. Both have sensors slower than the structure their animals use, and both must therefore solve the problem in the population rather than in the transducer. Electric fish beat their afferent precision by three orders of magnitude by pooling; olfaction needs one. The section's argument is that this pairing, not olfaction's supposed uniqueness, is the useful comparison.">
</x-figure>

## Checking the claim that olfaction is nearly alone

The brief's Lesson 4 says the mismatch is "close to unique among the classical senses". Test it modality by modality, and be sceptical.

**Audition.** $\rho \gg 1$. Hair cells phase-lock to several kilohertz; the binaural system exploits interaural differences of tens of microseconds, far finer than any single spike time, but that is a *coincidence-detection* problem, not a bandwidth problem. The transducer follows the carrier. Claim holds.

**Touch.** $\rho > 1$. Sub-millisecond transduction; Pacinian afferents follow vibration to several hundred hertz, and texture is encoded in spike timing at that resolution. Note how touch achieves this: the Pacinian lamellae are a mechanical high-pass filter, so the sharpening is done by **accessory structure**, for free. Olfaction has almost none, and must pay neurally for everything.

**Vision.** $\rho \approx 1$, and this is the interesting near-miss. Photoreceptor integration times are tens of milliseconds and animals use flicker at comparable rates. Vision is scored "comparable" rather than "faster", and its solution — parallel sustained and transient channels with different kinetics — is the same solution the population account predicts for olfaction. Vision is a partial ally, not a control.

**Vestibular and proprioception.** $\rho \gg 1$ by a wide margin, and both are marginal cases of the ratio being even meaningful, since both sensors are attached to the effector generating the signal.

**Gustation.** Here the claim runs into a genuine problem. Taste transduction is slow — hundreds of milliseconds for a second-messenger cascade — and animals lick at 6–7 Hz. The naive ratio is near or below unity. But nobody has measured the bandwidth of taste structure that behaviour depends on the way plume-structure sensitivity was measured. **This datasheet cell is unmeasured, not zero.** The honest statement is that gustation's $\rho$ is unknown and could plausibly be below one, and if it is, olfaction's near-uniqueness among the classical senses is an artefact of which experiments were run.

**Olfaction.** ORNs follow roughly 5 Hz; behaviour uses 40 Hz. $\rho \approx 0.1$ — measured on both sides.

The verdict: the claim holds against every classical modality where the ratio has been measured on both sides, and there is exactly one classical modality where it has not been measured and the result could go the other way. That is a defensible claim with a stated exposure, which is better than a universal.

## The claim is false if "classical" is dropped

Electroreception has $\rho \approx 10^{-3}$. Weakly electric fish detect phase differences of well under a microsecond using afferents with millisecond-scale spike timing. That is a three-order-of-magnitude shortfall against olfaction's one, and the fish solve it.

The mechanism is known: pool across many afferents whose independent noise averages down. With $n$ independent afferents, temporal precision improves as $\sqrt{n}$ until correlated noise sets a floor. The convergence numbers in the two systems are similar in kind — olfaction converges ~1000 ORNs of one receptor type onto a glomerulus, which is the largest convergence ratio on the datasheet by an order of magnitude.

**This is the strongest structural argument in the module.** Olfaction has a sensor an order of magnitude too slow, and the largest convergence ratio of any modality. Those two facts fit together under a known mechanism.

They are also, so far, only *consistent*. Nobody has demonstrated that the convergence is what buys the temporal resolution. The prediction is explicit and testable: **fast-fluctuation discrimination should scale with the number of converging receptor neurons, and should degrade when the kinetic diversity of the converging population is reduced.** Until that experiment is done, the pooling account of olfactory temporal acuity is an inference from an analogy, and this course should not present it otherwise.

<details class="x-deeper">
<summary>Go deeper: what pooling can and cannot buy, with the correlated-noise ceiling<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

Take $n$ afferents each reporting a noisy version of the same time-varying signal, with jitter variance $\sigma^2$ on their spike times. If the noise is independent, the pooled estimate of an event time has variance $\sigma^2/n$, so timing precision improves as $\sqrt{n}$. With $n = 1000$ and $\sigma = 10$ ms, pooled precision is about 0.3 ms — comfortably enough for 40 Hz structure, with room to spare.

Now introduce correlation. If each pair of afferents shares a noise component with correlation $c$, the pooled variance is

$$\operatorname{Var} = \frac{\sigma^2}{n}\big(1 + (n-1)c\big) \;\xrightarrow[n \to \infty]{}\; c\,\sigma^2 .$$

The improvement saturates at $1/\sqrt{c}$ regardless of $n$. At $c = 0.01$ the ceiling is a tenfold improvement — exactly the factor olfaction needs, and no more. At $c = 0.1$ the ceiling is about threefold, which is not enough.

Two things follow. First, the account is quantitatively tight rather than comfortably slack: the required improvement sits close to the plausible ceiling, so **the correlation between ORNs converging on one glomerulus is the parameter that decides whether the pooling account works at all**, and it is not well measured. Second, correlation is exactly what shared transduction noise and shared plume input would produce — ORNs of one type sample the same air. That is an argument for $c$ being large, and therefore against pooling being sufficient on its own.

The escape route is kinetic diversity. If the converging ORNs have *different* response kinetics, the population carries information in the relative timing across sub-populations rather than in the average, which recovers bandwidth in a way that averaging cannot, and is not defeated by shared input the same way. This is why the discrimination experiment above has two arms: the number arm tests plain pooling, and the diversity arm tests the escape route. They can come apart, and a result where number does nothing and diversity does everything would be the most informative outcome.

</div>
</details>

## What a slow sensor forces, and whether the datasheet shows it

If $\rho < 1$ forces population solutions, then modalities with low $\rho$ should show large convergence, heterogeneous sensor kinetics, and active sampling that structures the input in time. Three predictions.

**Convergence.** Olfaction ~1000:1, the highest on the datasheet; electroreception also converges heavily. Vision ~100:1, audition ~1:1 to a few. The ordering is exactly inverse to $\rho$. **Prediction confirmed, and this correlation across four modalities is the strongest quantitative result in the section.**

**Heterogeneous kinetics.** Predicted, and it is the split-early motif of Lesson 7 arriving on a temporal rather than a sensitivity axis. Confirmed in touch (SA/RA/PC tile temporal frequency), in vision (sustained/transient), in vestibular (regular/irregular afferents). In olfaction, mitral and tufted cells differ in latency and threshold, which is the right shape — but that split is *downstream* of the slow transducer, so it cannot recover bandwidth the receptors never captured. Kinetic diversity among ORNs of the same receptor type, which is what the argument actually needs, is **not established**. This prediction is confirmed everywhere except the one modality it was invented for.

**Active sampling in the same band.** Sniffing, whisking, licking, saccades and speech syllables all land in 4–12 Hz. This is a real convergence and it is unexplained. Three candidate explanations circulate — a shared central oscillator, a shared biomechanical resonance, and independent convergence on the same optimal sampling rate — and they make opposite predictions about how the band should scale with body size. Nobody has done the scaling measurement.

Note the tension with everything above. Sniffing at 2–10 Hz **cannot itself be the mechanism** for resolving 40 Hz structure; it is at or below the receptor bandwidth. Active sampling in olfaction sets the frame within which fast structure is read out, and possibly triggers the phase reference, but it does not supply the resolution. The two arguments are often blurred, and they are separate.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Five modalities, five self-generated sampling rhythms, one frequency band. Read it against the previous figure and the tension is immediate: sniffing at 2–10 Hz sits at or below the olfactory receptor bandwidth, so it cannot be the mechanism that resolves 40 Hz plume structure. Whatever recovers that bandwidth happens in the population, not in the sampling rhythm — and the two arguments are routinely conflated.">
</x-figure>

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Set the view to volatility against adaptation speed. The prediction is that adaptation should be fast where the input statistics are volatile, and olfaction has the least stationary statistics on the datasheet. Its receptor-level adaptation is indeed fast — but its bulbar plasticity runs on days to months, the slowest process in the figure. A single modality occupying both extremes is what a system does when it cannot tell which timescale the non-stationarity lives on.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s03.x1", "contentRev": 1, "points": 1,
  "prompt": "Olfactory receptor neurons follow about 5 Hz; mice use plume structure to about 40 Hz. Roughly 1000 ORNs of one receptor type converge on a single glomerulus. What is the strongest objection to concluding that convergent pooling explains the discrepancy?",
  "multi": false,
  "options": [
    { "text": "Pooling gains saturate at 1/√c under shared noise, and ORNs of one type sample the same air — so the correlation is plausibly large enough to cap the improvement below the required tenfold.", "correct": true, "feedback": "Right, and the numbers are uncomfortably tight: c = 0.01 gives exactly the tenfold ceiling needed, and c = 0.1 gives about threefold, which fails. The decisive parameter is the noise correlation among converging ORNs, and it is not well measured. This is why the escape route matters — kinetic diversity across the converging population recovers bandwidth in a way plain averaging does not." },
    { "text": "Sniffing occurs at 2–10 Hz, so the animal cannot sample fast enough to resolve 40 Hz structure regardless of how many receptors converge.", "feedback": "Correct under the assumption that the sniff is a discrete sample rather than a carrier within which continuous structure is transduced. It is not — receptors respond continuously through a sniff, and the sniff sets the frame rather than the sampling rate. But the confusion this option describes is real and worth naming; the section separates the two arguments for exactly this reason." },
    { "text": "Electric fish achieve a three-order-of-magnitude improvement by pooling, so a one-order improvement in olfaction is unremarkable and needs no explanation.", "feedback": "Correct if the mechanism were known to transfer, which is precisely what is unestablished. The electroreception case shows a sub-unity ratio is solvable and names a candidate mechanism; it does not show olfaction uses it. Treating the analogy as evidence is the error the section warns against." },
    { "text": "The behavioural measurement of 40 Hz sensitivity could reflect discrimination of total odour dose rather than temporal structure per se.", "feedback": "Correct under the assumption that the behavioural experiments failed to control integrated concentration. They were designed to control exactly that, which is what makes the 40 Hz figure a measurement of temporal sensitivity. A good instinct applied to the wrong experiment." }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s03.x2", "contentRev": 1, "points": 5,
  "corner": "Modality",
  "prompt": "Fill in the sensor–signal ratio (above or below one, or unmeasured) and the convergence ratio onto the first circuit. The last column asks what the pairing predicts.",
  "rows": ["Audition", "Vision", "Olfaction", "Gustation", "Electroreception"],
  "columns": ["Sensor faster than signal?", "Convergence to first circuit", "Your notes"],
  "cells": {
    "Audition|Sensor faster than signal?": { "answer": "yes, much", "accept": ["yes", "much faster", "ratio above 1"] },
    "Audition|Convergence to first circuit": { "answer": "~1:1 to a few", "accept": ["1:1", "low", "very low"] },
    "Vision|Sensor faster than signal?": { "answer": "comparable", "accept": ["about equal", "roughly 1", "marginal"] },
    "Vision|Convergence to first circuit": { "answer": "~100:1", "accept": ["100:1", "100"] },
    "Olfaction|Sensor faster than signal?": { "answer": "no — about 10x too slow", "accept": ["no", "slower", "ratio below 1"] },
    "Olfaction|Convergence to first circuit": { "answer": "~1000:1", "accept": ["1000:1", "1000", "very high"] },
    "Gustation|Sensor faster than signal?": { "answer": "unmeasured", "accept": ["unknown", "not measured", "not known"] },
    "Electroreception|Sensor faster than signal?": { "answer": "no — about 1000x too slow", "accept": ["no", "slower", "ratio below 1"] }
  },
  "modelAnswerNote": "Convergence runs inversely to the ratio across four modalities, which is the section's confirmed prediction: where the sensor cannot keep up, the population must, and pooling requires numbers. The gustation cell is deliberately 'unmeasured' rather than a value. Taste transduction is slow and licking is fast, so the ratio could plausibly be below one — but nobody has measured the bandwidth of taste structure that behaviour depends on, the way plume-structure sensitivity was measured. If it turns out below one, olfaction's near-uniqueness among the classical senses dissolves."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s03.x3", "contentRev": 1, "points": 1,
  "prompt": "Design the experiment that would move the pooling account of olfactory temporal acuity from analogy to evidence. State both arms, what each isolates, and what a dissociation between them would mean.",
  "modelAnswer": "Two arms, both measuring behavioural discrimination of odour stimuli differing only in fluctuation structure at frequencies above the ORN cutoff, with integrated concentration matched. Arm one manipulates the NUMBER of converging receptor neurons — by genetic reduction of the population expressing one receptor type, or by comparing species or developmental stages with different convergence ratios — and asks whether temporal discrimination scales as the square root of that number. This isolates plain averaging. Arm two manipulates the KINETIC DIVERSITY of the converging population while holding number fixed, and asks whether discrimination degrades. This isolates the relative-timing mechanism, which recovers bandwidth in a way averaging cannot and is not defeated by shared input. The dissociation is the informative outcome. If number matters and diversity does not, plain pooling is the mechanism and the noise correlation among converging ORNs must be small — which would be surprising, since they sample the same air. If diversity matters and number does not, the population is not averaging at all but reading out relative timing across sub-populations, and the electroreception analogy is the wrong one. If neither matters, the bandwidth is recovered somewhere other than at the convergence, and the account is wrong.",
  "rubric": [
    "Names both arms: convergence number and kinetic diversity",
    "States the √n prediction for the number arm and identifies it as testing plain averaging",
    "Explains why the diversity arm tests a different mechanism (relative timing, robust to shared input)",
    "Requires integrated concentration to be matched across stimuli",
    "Says what a dissociation between the arms would license, including the null-null outcome"
  ]
}
</script>
</x-free-response>

<x-predict>
<script type="application/json">
{
  "id": "m11.s03.x4", "contentRev": 1,
  "prompt": "Sniffing, whisking, licking, saccades and speech syllables all fall in 4–12 Hz. Before reading on: propose the measurement that would discriminate a shared central oscillator from independent convergence on an optimal sampling rate.",
  "placeholder": "What varies between the hypotheses, and what would you measure?",
  "reveal": "Body-size scaling is the cleanest discriminator, and it has not been done properly. A shared central oscillator predicts that all five rhythms scale together across species, since they share a clock. A biomechanical-resonance account predicts each rhythm scales with the mass and stiffness of its own effector — whiskers, tongue, thorax — so the rhythms should DIVERGE across species with different body plans, and the convergence in rodents would be coincidence. An optimal-sampling account predicts scaling with the autocorrelation time of the relevant stimulus, which is set by the environment and by locomotion speed, and predicts that rhythms should track the world rather than the body.\n\nThe three make genuinely opposite predictions, which is rare and valuable. The measurement is a comparative one across species spanning several orders of magnitude in mass, with all five rhythms measured in the same animals. Nobody has run it, and the convergence remains one of the better-known unexplained facts in sensory neuroscience.\n\nNote the constraint from this section: whatever explains the band, it cannot be what gives olfaction its temporal resolution, because the band sits at or below the receptor bandwidth.",
  "followUp": "Which of the three accounts would be hardest to rescue if the rhythms turned out to scale differently within a single species across development?"
}
</script>
</x-predict>
