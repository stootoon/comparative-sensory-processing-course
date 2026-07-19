---
id: m10.s01
title: Sampling
lede: Five modalities generate their own stimulus at 4–12 Hz, and every one of them must cancel what it generated. The rhythm is a robust fact; the reason for it is not.
estimatedMinutes: 16
---

## What this module is for

§0.0 promised seven lessons and said each would be developed where it first appeared and revisited here. This module is the revisit. It is organised by motif rather than by modality, and each subsection carries an explicit charge of lessons:

| Subsection | Lessons discharged |
|---|---|
| 10.1 Sampling | 1 (input statistics determine the code), 5 (subtract what you can predict) |
| 10.2 Early computation | 1, 2 (same principle, opposite structures), 5 |
| 10.3 The central representation | 3 (motifs presuppose a metric) |
| 10.4 Dynamics | 4 (slow sensor, population compensation), 7 (early splitting) |
| 10.5 Architecture | 6 (the consumer determines the code), 7 |

One rule runs through all five. **Every motif ends with what it predicts for olfaction**, stated concretely enough to be wrong. Where the prediction has been tested, the result is given. Where it has not, the experiment is given. And where olfaction appears to *lack* a motif that four other modalities have, the section says whether the absence is real or whether nobody has looked — because those two states are constantly conflated in the comparative literature, and they call for opposite responses.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Absent versus unmeasured</div>
The distinction is not rhetorical. If a motif is genuinely absent, the interesting question is what replaces it, and the comparative table has gained a real data point. If it has merely never been measured, the table has gained nothing and the correct response is an experiment, not a theory.

The general test: <strong>a genuine absence should have a visible consequence.</strong> If olfaction lacked gain control, dynamic range would be demonstrably narrower than in modalities that have it. If a motif is absent and nothing downstream is worse, suspect you are looking at a measurement gap rather than a design fact.
</x-callout>

## The motif: sampling is an action

In vision, audition, touch, gustation and olfaction, the animal does not receive a stimulus. It *acquires* one, by moving something at a few hertz. Saccades reposition the fovea. Whisks sweep the vibrissae across a surface. Licks bring the tongue to the fluid. Sniffs pull air across the epithelium. Only audition and the vestibular sense are largely passive, and audition compensates with pinna and head movement.

The consequences are structural and they recur:

1. **The receptor input is jointly authored.** The natural stimulus ensemble is not a property of the world alone. This wrecks the clean version of Lesson 1: to derive an efficient code you need the ensemble as delivered, and in an active modality that ensemble depends on the sampling policy, which itself depends on the code. Touch's datasheet marks its ensemble "partially measured; co-authored by the animal", and this is why.
2. **The self-generated component is predictable**, so it can be subtracted — Lesson 5.
3. **The sampling phase becomes a usable clock.** Once the animal knows when it sampled, response latency relative to that reference carries information that absolute spike time does not.

<x-figure src="content/00-toolkit/figures/sampling-rhythms.js"
  caption="Five independently evolved motor rhythms in the same octave is either the strongest convergence result in the course or the weakest — and which one it is depends entirely on a scaling measurement nobody has done. The three candidate explanations (biomechanical resonance, a shared central oscillator, an inference-rate optimum) make different predictions about how the band moves with body mass. Move the slider and see that they are separable in principle.">
</x-figure>

### Why 4–12 Hz? Three candidate explanations, not one

The band is real. The explanation is open, and the course has been careful not to pick one. The candidates:

**Biomechanical.** Each effector has a resonant frequency set by its mass and stiffness, and these happen to land nearby in small mammals. Predicts strong negative scaling with body mass, and predicts that the bands should *diverge* across species — a rat's whisk and an elephant's sniff should not share a band.

**A shared central oscillator.** Sampling rhythms are entrained to, or driven by, the same septo-hippocampal theta machinery, which is why hippocampal theta appears on the figure alongside the motor rhythms. Predicts tight cross-modal phase locking within an animal and weak scaling with body mass.

**Normative — an inference-rate optimum.** Each sample is worth acquiring only until its evidence has been integrated; sampling faster wastes energy on redundant samples, slower wastes time. Predicts the band should track the *evidence-integration time constant* of the downstream circuit, which is only loosely related to body size, and predicts it should shift with task difficulty within an animal.

These are separable, and the discriminating measurement — how the band scales across a wide mass range, and whether it shifts with task statistics within an animal — has not been done systematically. Until it is, the convergence is a striking observation, not a result.

<details class="x-deeper">
<summary>The sampling-rate optimum, made explicit</summary>

Treat each sample as delivering $I$ nats about a latent variable, with a cost $c$ per sample and a deadline. If samples are independent, total information after time $T$ at rate $f$ is $fTI(f)$ — but $I$ depends on $f$, because samples taken closer together are more correlated. Model the correlation as exponential with the stimulus autocorrelation time $\tau_s$, so the *incremental* information of a sample taken $\Delta t = 1/f$ after the last is roughly

$$I_{\text{inc}}(f) \approx I_0\left(1 - e^{-1/(f\tau_s)}\right).$$

Rate of information gain is $R(f) = f I_0 (1 - e^{-1/(f\tau_s)}) - cf$. Without cost, $R$ is monotonically increasing and saturating: sample as fast as the effector allows. With a per-sample cost, $R$ has an interior maximum near $f^\star \sim 1/\tau_s$ up to a factor of order unity set by $c/I_0$.

The prediction is therefore not "4–12 Hz" but $f^\star \propto 1/\tau_s$: **the sampling rate should track the autocorrelation time of the signal, not the size of the animal.** For odour plumes, measured correlation times are of order 100 ms at behaviourally relevant distances [@celani2014], which lands in the right band — encouragingly, but with enough slop that this is a consistency check rather than a prediction. The risky version is the derivative: change $\tau_s$ experimentally by changing flow conditions, and $f^\star$ should move.
</details>

### What this predicts for olfaction

**Prediction 1 — sniff rate should rise when each sample is less informative.** This is the optimal-experiment-design account applied directly, imported from echolocation, where bats increase pulse rate as they approach a target and the per-pulse uncertainty reduction falls. The olfactory experiment is specified in the exotic module: vary plume intermittency while holding task difficulty and source distance fixed. Higher intermittency means each sniff is more often a miss, so sniff rate should rise. **Status: not done in this controlled form.** Sniff rate is known to rise in novel and demanding situations, but that is confounded with arousal, which is why the fixed-difficulty control matters.

Note what makes this falsifiable rather than a hedge. Two rival accounts predict the opposite. If sniffing is a *motor habit* entrained to locomotion, rate should track running speed and be insensitive to intermittency. If sniffing is under *arousal* control alone, rate should track task difficulty and be insensitive to intermittency at fixed difficulty. The three accounts are cleanly separated by that one design.

**Prediction 2 — sniffing changes the stimulus, so the ensemble cannot be measured at the nose alone.** Flow rate through the epithelium modulates which molecules deposit where, by sorptive chromatography. This means the olfactory input ensemble is co-authored in exactly the sense touch's is, and it makes olfaction's missing-ensemble problem *worse* than the datasheet's "not measured" suggests: even a complete chemical inventory of the world would not be the ensemble at the receptors. Any olfactory efficient-coding derivation must therefore specify a sampling policy as part of its input. None currently does. This is a real obstacle, and it should temper how quickly one expects the Lewicki-style calculation to transfer once the chemical ensemble arrives.

**Prediction 3 — efference copy of the sniff should be present, and used.** Here the comparative case is overwhelming and the olfactory evidence is partial. Vestibular nuclei cancel self-generated head motion at the first central synapse [@cullen2012]. Electrosensory lobes learn a negative image of the animal's own discharge. Proprioception recalibrates against its own forward model [@wolpert1995]. All three cancel a self-generated component using a copy of the motor command.

The bulb receives the sniff signal — respiratory phase is the dominant temporal structure in mitral cell firing, and sniffing is the standard frame for olfactory active sensing [@wachowiak2011]. What is *not* established is whether the bulb performs cancellation in the strict sense: whether the self-generated component is subtracted such that a neuron which has predicted its input correctly falls silent.

The discriminating experiment is the one the vestibular module hands over. Deliver an identical odour transient in two conditions — triggered by the animal's own sniff, and delivered by the experimenter at a time uncorrelated with sniffing — and ask whether bulbar cells that appear unresponsive in the active condition respond in the passive one. A cell that is silent because it has cancelled a prediction behaves completely differently from a cell that is silent because it is not tuned to the odour. **This is Lesson 5 in its most operational form: silence is a result, and the only way to tell a successful subtraction from an absence of response is to break the prediction.**

**Where the absence may be real.** One asymmetry is worth flagging. Vestibular and electrosensory cancellation both operate on a forward model that is *stationary* — gravity does not change, and the electric organ discharge is under the animal's exact control. The olfactory forward model would have to predict how a self-generated airflow interacts with a turbulent, non-stationary external plume. That model must be estimated online from statistics that do not sit still. It is entirely possible that strict cancellation is genuinely absent from olfaction because the prediction is not learnable at the required accuracy, and what the bulb does instead is phase-referenced gating: not subtracting the expected input but ignoring inputs at expected phases. The two are distinguishable — subtraction leaves a signed error signal, gating does not — and no published experiment separates them.

<x-predict>
<script type="application/json">
{
  "id": "m10.s01.p1", "contentRev": 1,
  "prompt": "You record from a bulbar mitral cell during free sniffing of a constant background odour. It is silent. Before reading on: list every distinct hypothesis consistent with that silence, and for each, name one manipulation that would rule it out.",
  "placeholder": "Hypothesis → discriminating manipulation…",
  "reveal": "At least five, and the comparative modules supply all of them. (1) The cell is not tuned to the odour — test with a panel. (2) The cell has adapted at the receptor — test by changing concentration abruptly, since receptor adaptation rescales rather than cancels. (3) The cell is under divisive normalisation by the population — test by adding a second odorant, which should reduce responses to the first if normalisation is the mechanism [@olsen2010]. (4) The cell has learned a negative image of a predictable input and is subtracting it — test by introducing the odour at an unexpected sniff phase, which should produce a signed error response. (5) The input is being gated at expected phases rather than subtracted — distinguished from (4) because gating produces no error signal when the prediction is violated, only a restored response.\n\nHypotheses 4 and 5 are the ones a vision-trained intuition omits, and they are the ones the vestibular and electrosensory modules exist to install. Note that (4) and (5) both predict the cell responds to an unexpected transient, so the discriminating measurement is the *sign structure* of the response, not its presence.",
  "followUp": "Which of these five has actually been tested in the bulb? Only (1)–(3), and (3) mostly in insects. That gap is the point."
}
</script>
</x-predict>

<x-mcq>
<script type="application/json">
{
  "id": "m10.s01.q1", "contentRev": 1, "points": 1,
  "prompt": "You measure sniff rate while varying plume intermittency, holding source distance and discrimination difficulty constant. Sniff rate does not change. Which conclusion is best supported?",
  "multi": false,
  "options": [
    { "text": "The optimal-experiment-design account of sampling is disconfirmed for olfaction, and sniff rate is set by something other than per-sample informativeness.", "correct": true, "feedback": "Correct, and the strength of the design is that it removes the two standard confounds. Under optimal experiment design, less informative samples require more of them to reach the same posterior confidence by the deadline. Holding difficulty and distance fixed removes arousal and approach-related explanations for a rate change, so a null result is informative rather than merely uninformative." },
    { "text": "Sniff rate is set by biomechanical resonance of the nasal airway, which intermittency cannot alter.", "feedback": "This is the answer if you assume the effector's resonance dominates and the animal has no useful control over rate. It is a live hypothesis, but the null result does not select it over the several other rate-setting accounts — locomotor entrainment and central-oscillator control predict the same null. The experiment refutes one account; it does not confirm a specific replacement." },
    { "text": "The animal is integrating over sniffs rather than treating each as a sample, so total evidence is what matters, not rate.", "feedback": "This is the answer under the assumption that sampling cost is negligible and only elapsed time matters. It is coherent — but it predicts rate should be pinned at the biomechanical maximum, so it makes an additional check available: is the observed rate the fastest the animal can sniff? If not, this account has to explain the shortfall." },
    { "text": "Intermittency does not reduce per-sniff information, because the receptor array integrates over a window longer than the intermittency timescale.", "feedback": "This is right under the assumption that the sensor is slow relative to the plume — and Lesson 4 says the receptor neurons are indeed roughly an order of magnitude too slow for the plume structure. But mice demonstrably use fluctuations faster than that [@ackels2021], so the population recovers information the individual sensor loses, and the premise fails at the population level. This distractor is the most instructive one: it is wrong only because of a result about population compensation, covered in 10.4." }
  ]
}
</script>
</x-mcq>

<x-free-response>
<script type="application/json">
{
  "id": "m10.s01.f1", "contentRev": 1, "points": 1,
  "prompt": "Efference copy is documented in vestibular, electrosensory and proprioceptive systems, and its olfactory status is unresolved. Argue both sides: make the strongest case that bulbar cancellation is genuinely absent, then the strongest case that it is present but unmeasured. Then state the single experiment that most cleanly decides.",
  "modelAnswer": "Genuinely absent: cancellation requires a forward model accurate enough that the residual is smaller than the signal of interest. The vestibular and electrosensory forward models are stationary and near-exact — gravity is constant, the electric organ discharge is self-generated with known waveform [@cullen2012]. The olfactory forward model must predict the interaction of self-generated airflow with a turbulent external plume whose statistics are non-stationary [@celani2014]. If that model cannot be learned to sufficient accuracy, subtracting it would inject noise rather than remove it, and the right design is to gate by phase instead. Absence would then be a rational design choice, not a missing part.\n\nPresent but unmeasured: the anatomical substrate is exactly the one electroreception uses — a broad, delayed feedback input onto principal cells, here granule cells carrying cortical feedback onto mitral cells. The bulb is strongly respiration-locked, so a phase-specific prediction is available. And crucially, the experiment that would reveal cancellation has not been run: cancellation produces silence, silent cells are routinely excluded from analysis as unresponsive, and the standard preparation delivers odours on the experimenter's clock rather than the animal's, which destroys the very correlation cancellation would exploit. The measurement procedure is biased against detecting the phenomenon.\n\nDeciding experiment: deliver identical odour transients sniff-triggered versus externally timed at random phase, recording from the same cells, and analyse cells that are silent in the active condition. Cancellation predicts they respond in the passive condition with a signed response whose polarity depends on whether the actual input exceeded or fell short of the prediction. Gating predicts a restored response with no signed structure. No cancellation predicts they stay silent in both.",
  "rubric": [
    "Names the stationarity of the forward model as the substantive reason cancellation might be genuinely absent",
    "Identifies granule-cell feedback onto mitral cells as the architectural analogue of the electrosensory substrate",
    "Notes that the standard experimental design (experimenter-timed odour delivery, exclusion of silent cells) is biased against detecting cancellation",
    "Specifies the sniff-triggered versus externally-timed comparison, restricted to cells silent in the active condition",
    "Distinguishes cancellation from phase gating by the presence of a signed error response"
  ]
}
</script>
</x-free-response>

## Handing forward

Two things carry into 10.2. First, an active sampler delivers its own input statistics, so every efficient-coding derivation downstream inherits a dependence on the sampling policy. Second, prediction and subtraction have been introduced as a sampling-level phenomenon, but they are the same operation the retina performs spatially and the vestibular nucleus performs with head motion. The next subsection treats it as one motif with several arguments to it.
