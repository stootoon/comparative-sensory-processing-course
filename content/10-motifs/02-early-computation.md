---
id: m10.s02
title: Early computation
lede: Four operations appear in the first circuit of nearly every modality — normalisation, decorrelation, convergence, predictive subtraction. Three of them are regime-dependent, and one of them may be over-determined.
estimatedMinutes: 18
---

## The motif set

Between the receptors and the first central synapse, the same short list of operations recurs: divisive normalisation, decorrelation or whitening, convergence for signal-to-noise, and subtraction of a prediction. This subsection discharges Lesson 1 (input statistics determine the code), Lesson 2 (the same principle predicts opposite structures in different regimes), and the early-circuit face of Lesson 5.

It is worth being blunt about what these four have in common and what they do not. They are not four instances of one principle. Normalisation and decorrelation are usually motivated by efficient coding; convergence for SNR is motivated by estimation theory and applies whether or not the code is efficient; predictive subtraction can be derived from either. Collapsing them into "the retina does efficient coding" is the standard error and it costs precision.

## Divisive normalisation

The canonical form: a neuron's response is its own drive divided by a pooled measure of the population's drive,

$$r_i = \frac{d_i^{\,n}}{\sigma^n + \sum_{j} w_{ij} d_j^{\,n}}.$$

It appears in V1 contrast normalisation, in auditory level adaptation, and — the cleanest quantitative case in this course — in the *Drosophila* antennal lobe, where projection neuron responses are predicted by the divisive form with the pool taken over the whole glomerular population [@olsen2010].

What it buys, in three separable arguments:

1. **Dynamic range.** The output range is bounded regardless of input scale, so a fixed spike budget covers many decades of intensity. This is the Laughlin argument in its dividing form [@laughlin1981].
2. **Removing a common mode.** If concentration multiplies all receptor activations by a common factor, dividing by the sum removes it, leaving something closer to identity. This is the concentration-invariance argument.
3. **Reducing redundancy.** Divisive gain control reduces statistical dependence between channels in a way that linear decorrelation cannot, because natural inputs have variance dependencies, not just mean correlations.

These are not the same claim and they make different predictions. Argument 2 predicts the normalisation pool should be tuned to the *concentration-carrying* directions in receptor space; argument 3 predicts the pool should be weighted by measured statistical dependence between glomeruli; argument 1 predicts the pool structure barely matters and only its total magnitude does. In the fly, the pool is close to uniform across glomeruli, which is what argument 1 predicts and argument 3 does not — the fly's pool is not obviously shaped by odour statistics. That is a mild point against the redundancy-reduction reading of that particular result.

### What this predicts for olfaction

**Status: tested, and it holds — in insects.** Divisive normalisation with a global pool quantitatively accounts for antennal lobe transformations [@olsen2010], and it improves both reliability and separability of the population response [@bhandawat2007]. That is one of the two strongest normative results in olfaction.

**The vertebrate version is weaker.** Concentration-invariant odour coding does emerge in mouse piriform, but the mechanism identified there is recurrent cortical circuitry rather than early divisive pooling [@bolding2018]. So the motif is present, but it has *moved* — from the first circuit in the fly to the second in the mouse. That is a genuine comparative fact and it should be stated as such, not smoothed over. The prediction it generates: if the mouse bulb does implement a divisive stage, its pool should be measurably weaker than the fly's, because part of the job has been delegated downstream. Measured normalisation strength in bulb versus antennal lobe, on matched stimulus sets, is a comparison nobody has published, and it is straightforward.

## Decorrelation and whitening — and Lesson 2

The Atick–Redlich result is the most-cited derivation in sensory neuroscience and the most commonly over-read. The optimal linear filter under a power constraint is a product of two factors: a whitening term that boosts high frequencies to flatten the output spectrum, and a low-pass term that suppresses frequencies where the input is dominated by noise [@atick1992; @srinivasan1982].

$$|F(f)|^2 \;\propto\; \underbrace{\frac{1}{S(f)}}_{\text{whiten}} \times \underbrace{\frac{S(f)^2}{(S(f)+N(f))^2}}_{\text{suppress noise}}$$

<x-figure src="content/00-toolkit/figures/whitening-snr.js"
  caption="This is Lesson 2 in one picture. The same objective — maximise transmitted information under a power constraint — produces a band-pass filter at high SNR and a low-pass filter at low SNR, because the two factors of the product trade places. Any statement of the form 'sensory systems decorrelate' is therefore half a statement; the missing half is 'at high SNR'. Slide the SNR down and watch the surround disappear.">
</x-figure>

The consequence: **at high SNR the system decorrelates; at low SNR it pools.** Retinal surrounds weaken in dim light. Nothing about the principle changed; the regime did. And real systems occupy both regimes at once — different eccentricities, different adaptation states, different parts of the same organ.

<details class="x-deeper">
<summary>The multivariate version, and why olfaction may need it</summary>

The scalar frequency-domain form above assumes a shift-invariant input, which is what lets you diagonalise in Fourier space. Take that away and the general statement is: with input covariance $\Sigma$ and isotropic output noise, the information-maximising linear map under a power constraint is

$$W = R\,\Lambda\,U^{\!\top}, \qquad \Sigma = U S U^{\!\top},$$

with $\Lambda_{kk}$ a per-eigenmode gain that is water-filling-like — near $S_k^{-1/2}$ for modes well above the noise floor, and near zero for modes below it — and $R$ an arbitrary rotation the objective does not fix.

Two things fall out that matter for the comparative argument.

First, **$R$ is unconstrained.** Information maximisation determines the *subspace* and the *gains*, not the basis. Any claim that a particular set of neurons realises the whitening solution requires an extra principle — sparseness, non-negativity, wiring cost — to fix $R$. This is exactly why sparse coding recovers oriented filters where decorrelation alone recovers only a rotation-ambiguous set [@olshausen1996].

Second, in vision $U$ is the Fourier basis for free, because natural images are approximately stationary. **In olfaction there is no such gift.** The receptor array is unordered [@buckaxel1991; @malnic1999], so there is no translation to be invariant to, and $U$ must be estimated from measured data. That is not a conceptual obstacle — it is a data obstacle, and it is the same one Lesson 1 identifies. The olfactory whitening calculation is not hard. It is blocked on $\Sigma$.
</details>

### What this predicts for olfaction

**Prediction — bulbar output should be more decorrelated than bulbar input, and the effect should be SNR-dependent.** The first half is the classic claim: mitral cell population responses decorrelate over the first few hundred milliseconds of a response, and this improves separability of similar odours [@friedrich2001]. The second half is the falsifiable part nobody has tested. If decorrelation is the efficient-coding solution rather than a generic circuit property, then **at low concentration, where receptor responses are shot-noise dominated, decorrelation should reverse into pooling.** Similar odours should become *less* separable, not more, and the correct read of that would be that the circuit is doing the right thing, not failing.

Run the Friedrich–Laurent protocol across three decades of concentration and plot decorrelation index against estimated input SNR. Efficient coding predicts a sign change. A generic-lateral-inhibition account predicts a monotone weakening but no reversal. This is one of the cheapest discriminating experiments in the course and it appears not to have been done.

**The honest caveat, imported from vision.** Retinal decorrelation is accomplished largely by nonlinearity rather than by the linear surround [@pitkow2012], and centre–surround is over-determined — several distinct principles predict it, so observing it confirms none of them specifically. Both caveats transfer. Observing decorrelation in the bulb does not establish that decorrelation is what the bulb is *for*. The concentration-sweep experiment matters precisely because a sign reversal is a signature no over-determined explanation predicts.

## Convergence for SNR

A pooled estimate from $N$ noisy channels has variance falling as $1/N$ when the noise is independent, and saturating at the correlated-noise floor otherwise. Vision pools ~100 photoreceptors per ganglion cell, and near absolute threshold this is what makes single-photon detection behaviourally usable [@baylor1979; @field2005]. Olfaction's convergence ratio is roughly 1000:1 — receptor neurons of one type onto one glomerulus — which is the largest in the course by an order of magnitude.

This is not an efficient-coding motif. It is an estimation-theoretic one, and it holds whether or not the code is efficient. Its normative content is entirely in the scaling law.

### What this predicts for olfaction

**Prediction — temporal acuity should scale with the number of converging receptor neurons, with a ceiling set by shared noise.** This is the hyperacuity template from electroreception, where sub-microsecond behavioural precision is achieved from neurons with millisecond precision purely by pooling. The olfactory case is Lesson 4's: receptor neurons are roughly an order of magnitude too slow for plume fluctuations that mice demonstrably resolve and use [@ackels2021]. Something must compensate, and convergence is the leading candidate.

The experiment: reduce the number of converging neurons per glomerulus and ask whether fast-fluctuation discrimination degrades as $1/\sqrt{N}$ — and separately, reduce the *kinetic diversity* of the converging population while holding $N$ fixed. These come apart. Pure averaging predicts sensitivity to $N$ and indifference to diversity. A basis-of-filters account — where the population spans a set of time constants and the readout deconvolves — predicts sensitivity to diversity and comparative indifference to $N$ beyond a modest threshold. **Neither has been done.** This is the clearest case in the module of a motif that is neither confirmed nor absent but simply unmeasured, and where the measurement is well posed.

## Predictive subtraction

Retinal surrounds subtract a spatial prediction of the centre [@srinivasan1982]. Vestibular nuclei subtract self-generated head motion [@cullen2012]. Electrosensory lobes learn a negative image of the animal's own discharge. In each case the substrate is a broad, delayed input onto a principal cell, and in each case a successful prediction produces silence.

The olfactory architecture has the same shape: granule cells carrying cortical feedback onto mitral cells is structurally the electrosensory arrangement. Whether it does the same computation is open, and 10.1 gave the sniff-triggered experiment. The complementary experiment, from the exotic module, isolates the *learning* claim: introduce a novel constant background odour and measure how long bulbar neurons take to stop responding to it. **Negative-image learning predicts minutes and dependence on plasticity at the granule–mitral synapse. Simple receptor or synaptic adaptation predicts seconds and no plasticity dependence.** The timescale alone separates them, and it is a measurement rather than an inference.

<x-mcq>
<script type="application/json">
{
  "id": "m10.s02.q1", "contentRev": 1, "points": 1,
  "prompt": "You measure mitral cell population decorrelation across three decades of odour concentration and find it strengthens monotonically with concentration, with no reversal at the lowest concentrations. What does this most support?",
  "multi": false,
  "options": [
    { "text": "Decorrelation strengthens with SNR as efficient coding predicts, but the lowest concentration tested was still above the regime where pooling should take over.", "correct": true, "feedback": "Correct, and this is the answer that takes the negative result seriously without abandoning the theory. The prediction is a sign change at low SNR, and a monotone increase over a range that never reaches the noise-dominated regime is consistent with it. The obligation this creates is to independently estimate receptor SNR at the lowest concentration used — otherwise the theory is unfalsifiable by construction, which is the failure mode this course is trying to avoid." },
    { "text": "Decorrelation is a fixed property of lateral inhibition in the bulb and is not under normative control.", "feedback": "This is the answer if you assume the circuit implements a static linear operation whose strength scales with drive. It is a real alternative and the result is consistent with it — but it is not selected by this result, because it and the efficient-coding account make identical predictions until the noise-dominated regime is actually reached. The experiment as described has not separated them." },
    { "text": "Concentration invariance is achieved by decorrelation, so stronger decorrelation at high concentration is the mechanism.", "feedback": "This is the answer under the assumption that concentration invariance and decorrelation are the same operation. They are not: invariance removes a common mode, decorrelation removes pairwise structure among the remaining modes. And in mouse, concentration invariance appears to be built recurrently in cortex rather than in the bulb [@bolding2018], so the two are dissociated anatomically as well as conceptually." },
    { "text": "The bulb is whitening, so the output covariance should be measured directly rather than through a decorrelation index.", "feedback": "This is methodologically the best instinct on the list, and under the assumption that whitening means an isotropic output covariance it is the right measurement. But it is not a conclusion from the data given, and note the deeper problem: information maximisation fixes the eigenvalue spectrum, not the basis, so an isotropic output covariance is compatible with any rotation of the code. Whitening alone never identifies a specific set of neurons." }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m10.s02.o1", "contentRev": 1, "points": 1, "partialCredit": true,
  "prompt": "Order these four early-circuit operations by how well the comparative evidence supports them holding in olfaction — best supported first.",
  "items": [
    "Divisive normalisation (quantitatively confirmed in the fly antennal lobe)",
    "Convergence for SNR (anatomically established at ~1000:1; the scaling law untested)",
    "Decorrelation (observed in the bulb; the SNR-dependence that would make it normative untested)",
    "Predictive subtraction of a learned negative image (architecture present, computation unmeasured)"
  ]
}
</script>
</x-order>

<x-predict>
<script type="application/json">
{
  "id": "m10.s02.p1", "contentRev": 1,
  "prompt": "Vision, audition and touch all have measured natural ensembles and all yield efficient-coding derivations of their first-stage filters. Olfaction has a measured plume ensemble but no chemical ensemble. Predict which olfactory derivations should already be possible, and which are blocked.",
  "placeholder": "Possible now / blocked, and why…",
  "reveal": "The split follows the data exactly. **Possible now:** anything whose relevant statistics are temporal. Optimal filter shapes for plume fluctuation timescales, optimal sniff rate given plume correlation times, the information available about source separation from temporal structure — all of these need only the plume ensemble, which is measured and analytically tractable [@celani2014; @tootoonian2025]. This is the under-exploited half.\n\n**Blocked:** anything requiring the receptor covariance $\\Sigma$ across natural odour scenes. Optimal receptor tuning breadth, the number of receptor types, the olfactory analogue of opponent colour axes [@buchsbaum1983; @ruderman1998], whether glomerular arrangement carries any statistical logic. Every one of these is a well-posed calculation waiting on one dataset.\n\nThe useful diagnostic: **the tractable questions are temporal and the blocked ones are chemical**, and this is precisely the shape of the field's open-problem distribution. That is not a coincidence — it is Lesson 1 showing through.",
  "followUp": "A harder point, from audition. Even with the chemical ensemble in hand, the efficient-coding framing may be the wrong one: the animal wants latent causes, not a faithful encoding of the receptor pattern. That makes it an inference problem, which need not give the same answer."
}
</script>
</x-predict>
