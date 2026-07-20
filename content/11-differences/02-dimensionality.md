---
id: m11.s02
title: Dimensionality
lede: From one dimension in audition to roughly a thousand in olfaction. What changes as D grows — tuning breadth, sparseness, sampling cost, mixture separability — and why the same number is olfaction's handicap for identity and its advantage for demixing.
estimatedMinutes: 19
---

## The range, and what it is a range of

The datasheet's dimensionality row spans three orders of magnitude:

| Modality | D | What the number counts |
|---|---|---|
| Audition | 1 | frequency; the cochlea tiles a line |
| Gustation | ~5 | nutritional categories at the receptor |
| Vision | 2 spatial + 3 spectral | position is not really "dimensionality" in the same sense |
| Vestibular | 6 | three rotational, three translational, from 10 channels |
| Touch | ~2 spatial + a temporal-frequency axis | deformable and posture-dependent |
| Proprioception | joint space ~20; natural ensemble ~3 | the two numbers disagree, and that is the point |
| Olfaction | ~400–1000 | receptor types, with no reduction known |

Two of these rows need care before any comparison is legitimate.

Vision's "2 spatial + 3 spectral" mixes two things. The spatial dimensions index *where a measurement was made*; the spectral dimensions index *what was measured*. Olfaction's ~1000 is entirely of the second kind. The right comparison to olfaction's receptor dimensionality is vision's **three** — the number of independent measurements at a point — not vision's five. Under that reading vision is not a mildly lower-dimensional system than olfaction; it is lower by a factor of a few hundred, and every spatial dimension it has is a dimension with a metric on it.

Proprioception's two numbers are the more instructive case. The joint space is ~20-dimensional; the ensemble of natural movements occupies about three [@wolpert1995]. **Nominal dimensionality and effective dimensionality can differ by an order of magnitude**, and it is the effective one that determines how hard the estimation problem is. This is the single most important caveat on olfaction's ~1000. Nobody knows olfaction's effective dimensionality, because that is exactly the quantity a measured chemical ensemble would give you and there is not one. Hyperbolic embeddings of perceptual data suggest a low-dimensional latent structure [@zhou2018], and the honest status of that is: an intriguing result on psychophysical similarity data, not a measurement of the natural ensemble. **The ~1000 is a receptor count, not a measured intrinsic dimension.** Treating it as the latter is the most common overreach in this literature, and this course has committed it in earlier drafts.

<x-figure src="content/11-differences/figures/dimension-tradeoff.js"
  caption="One number, two opposite consequences. Sampling coverage collapses as N^(1/D) — the curve is the quantitative content of 'the ensemble has not been measured', and sliding N up three orders of magnitude barely moves the olfactory end. Separability of k sources runs the other way: audition demixes in one carrier dimension and pays for it with harmonicity, onset and a six-synapse brainstem; olfaction's mixture problem is generically overdetermined. High D is the handicap and the advantage, and it is the same number.">
</x-figure>

## What the variation predicts

If dimensionality is the operative variable, four things should co-vary with it across the datasheet. Take each as a prediction and check it.

### Prediction 1: optimal tuning breadth should grow with D

The argument is standard. With $M$ neurons tiling a $D$-dimensional space, narrow tuning gives each neuron a sharp local estimate but leaves most of the space uncovered — the number of tiles needed grows as $(1/w)^D$. Broad tuning covers the space but each neuron carries little information about location within it. The optimum shifts toward broader tuning as $D$ grows, because coverage becomes the binding constraint.

**Check.** Audition, $D=1$: narrow tuning [@shera2002]. Vestibular, $D=6$ from 10 channels: broad cosine tuning, deliberately so, because with fewer channels than would tile anything the system uses a linear basis instead. Olfaction, $D\approx 1000$: broad tuning [@malnic1999]. Vision spectrally, $D=3$: very broad. Three of four fit.

Vision is the awkward one and worth pausing on. $D=3$ spectrally with extremely broad, heavily overlapping cone spectra — much broader than the D-scaling argument predicts for three dimensions. The reason is a different constraint entirely: photon noise. Narrow cone filters would collect too few photons. **Tuning breadth is over-determined**, set by noise as well as by coverage, and the D-argument is one of at least two forces. Anyone reading breadth off dimensionality alone in olfaction is ignoring the other one — and olfactory transduction is itself shot-noise-limited, so the same second force applies.

### Prediction 2: representations should become sparser downstream as D grows

If the input is high-dimensional and its structure unknown, expansion followed by sparsification is the standard move: project randomly into a much larger space, threshold hard, and previously entangled categories become linearly separable. The prediction is that high-D systems should show large expansion ratios and low activity fractions.

**Check.** This one holds cleanly and quantitatively. The fly maps ~50 glomerular channels onto ~2000 Kenyon cells with ~7 inputs each, and 7 is close to the degree that maximises the dimension of the representation [@litwinkumar2017; @caron2013]. The connectivity is random with respect to glomerular identity, which is the direct experimental confirmation that no metric is being consumed. Piriform receives similarly distributed bulbar input [@haberly2001]. Contrast the retina, $D$ small: ~100:1 *convergence*, not expansion.

This is the cleanest dimensionality prediction in the module, and note what it implies about §11.1 — the expansion-and-sparsify motif is available to olfaction *because* it never needed a metric, and it is the one place where olfactory theory has a result of the same quality as the retinal and cochlear ones.

### Prediction 3: sampling cost should explode

To characterise an ensemble in $D$ dimensions to resolution $\epsilon$ per axis costs $O(\epsilon^{-D})$ samples on a grid. At $D=1$ this is trivial; at $D=1000$ no experiment is possible. The figure above makes the point that raising $N$ by three orders of magnitude is nearly invisible at the olfactory end.

**Check.** The "ensemble measured" row of the datasheet tracks dimensionality almost perfectly. Audition and vision: yes. Vestibular, $D=6$: yes. Gustation, $D\approx 5$: partially, and the module's own verdict is that the calculation is *easy* and simply has not been done. Olfaction, $D\approx 1000$: chemical no, plume yes.

That last cell is the informative one. **The plume ensemble is measured and the chemical ensemble is not** [@celani2014; @tootoonian2025], and the two differ in exactly the predicted way: plume dynamics live in a low-dimensional temporal space, chemistry does not. The dimensionality account predicts the split within olfaction, not merely between olfaction and everything else. That is a risky prediction that came out right.

Touch is the exception and it is not a dimensionality exception. Touch is moderate-D and its ensemble is only partially measured, because **the animal co-authors the stimulus** — you cannot define the ensemble independently of the sampling behaviour. Different obstacle, same symptom. Anyone who read the "ensemble measured" column as a pure function of D would misdiagnose touch.

### Prediction 4: mixture separability should improve with D

Here the sign flips, and this is the section's central point.

Audition's mixture problem is severe: multiple sources sum into a single pressure waveform, one carrier dimension, and recovery is underdetermined in the strict linear-algebraic sense. Audition solves it with lawful relations between components of one source — harmonicity, common onset, common modulation — and with a deep brainstem to compute them.

Olfaction's mixture problem is generically *over*determined. A hundred molecules from four sources project onto ~1000 receptor channels. In a linear model with mildly incoherent columns, four sources in a thousand-dimensional measurement space separate easily, and compressed-sensing bounds say you can do much better than four. The sparse-inference accounts of bulbar circuitry take exactly this view [@koulakov2011; @tootoonian2022; @shen2013].

**So the same number carries opposite signs.** High D makes identity hard: the space cannot be sampled, no ensemble can be measured, no coordinates can be derived, and the normative programme stalls at criterion one. High D makes demixing easy: sources separate that would be hopelessly entangled in one dimension. Olfaction's stated grouping cue is temporal correlation *only*, and it has been read as a poverty of cues — but the demixing side of the ledger says the poverty is affordable, because dimensionality is doing work that audition has to do with harmonicity.

<details class="x-deeper">
<summary>Go deeper: where the demixing advantage is actually spent<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

The overdetermination argument assumes a linear mixing model $y = Ax + \eta$, with $x \in \mathbb{R}^p$ the source concentrations, $A \in \mathbb{R}^{D \times p}$ the receptor affinity matrix, and $D \gg p$. Under that model, recovery is a well-posed least-squares problem, and with $x$ sparse, $\ell_1$ recovery succeeds with $D = O(k \log(p/k))$ measurements — comfortably satisfied.

Three things break it, in increasing severity.

1. **$A$ is unknown.** The affinity matrix is measured for a handful of receptor–ligand pairs and unknown in general. This is the missing chemical ensemble in a different guise: it is not just that the input distribution is unmeasured, but that the forward model is too.

2. **Mixing is not linear.** Competitive binding at a shared receptor makes the response to a mixture sublinear in each component, and the antennal lobe then applies divisive normalisation on top [@olsen2010]. So $y = f(Ax)$ with $f$ compressive and unknown. The measurement count is still $D$; the conditioning is much worse.

3. **The columns of $A$ are highly coherent.** Broad receptor tuning means every receptor responds to a large fraction of odorants, so columns are far from orthogonal. Coherence is the quantity that controls $\ell_1$ recovery, and broad tuning drives it up. **Broad tuning is predicted by high $D$ and it degrades the advantage that high $D$ confers.** The two consequences of dimensionality partly cancel.

The net is not known, because computing it requires $A$ over a natural ensemble. What can be said is that the demixing advantage is real, is bounded, and is spent chiefly on nonlinearity and coherence rather than on the source count.

</div>
</details>

## Where the axis fails to predict

Two honest failures, and they are more useful than the successes.

**Gustation should be the easy case in every respect, and its ensemble is unmeasured.** $D\approx 5$, behaviourally defined categories, a small and enumerable stimulus space. The dimensionality account predicts that the natural-food-chemistry calculation should have been done decades ago. It has not been. The prediction fails, and the reason is sociological rather than computational — nobody needed it, because the labelled-line structure made the answer seem obvious in advance. **Sampling cost is necessary but not sufficient to explain which ensembles get measured.**

**Proprioception has ~20 nominal dimensions and a mature normative theory.** If D drove theoretical maturity, proprioception should sit between vision and olfaction. It scores 6 on the datasheet — near the top. The escape is the effective-dimensionality caveat: the natural ensemble is ~3-D. But that escape has a sting in it, because nobody knows olfaction's effective dimensionality either, and until someone measures it the dimensionality explanation for olfaction's stall is **an inference from a receptor count, not a measurement**. Proprioception is the standing demonstration that the two numbers can differ by a factor of seven.

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="Set the horizontal axis to stimulus dimensionality and the vertical to whether the ensemble has been measured. The relation is strong and it is the mechanism behind the theory-maturity correlation, not a separate fact — you cannot derive a code from statistics nobody has. Then switch the vertical axis to normative theory maturity and find proprioception sitting high at moderate D: the counterexample that forces the nominal-versus-effective distinction, since its natural ensemble occupies about three dimensions of a twenty-dimensional joint space.">
</x-figure>

<x-mcq>
<script type="application/json">
{
  "id": "m11.s02.x1", "contentRev": 1, "points": 1,
  "prompt": "Audition demixes concurrent sources from a single pressure waveform; olfaction demixes them from ~1000 receptor channels. Which system faces the harder linear-algebraic problem, and why does the answer feel counterintuitive?",
  "multi": false,
  "options": [
    { "text": "Audition — one measurement dimension makes source recovery underdetermined, so it must import lawful within-source relations as extra constraints. Olfaction's problem is generically overdetermined.", "correct": true, "feedback": "Right, and this is why audition needs harmonicity, common onset and common modulation while olfaction can get by with temporal correlation alone. The counterintuition comes from reading olfaction's high D as uniformly a burden. For identity it is; for demixing it is the resource that pays for the missing grouping cues." },
    { "text": "Olfaction — with ~1000 unknown affinities and no measured forward model, there are more unknowns than in audition's single well-characterised channel.", "feedback": "Correct under the assumption that the binding difficulty is model identification rather than source separation. It is a serious point and the deeper box concedes it: the affinity matrix is unknown and mixing is nonlinear. But that is a statement about the forward model, not about the dimension count, and it would remain true if D were 10." },
    { "text": "They are equally hard, since both reduce to blind source separation and the number of measurements does not affect identifiability.", "feedback": "Correct if the mixing matrix were entirely unknown and the sources non-sparse, where identifiability is governed by independence rather than by measurement count. With sparse sources and even approximately known columns, the measurement count is exactly what determines recoverability." },
    { "text": "Olfaction — broad receptor tuning makes the columns of the mixing matrix nearly parallel, which destroys any benefit from extra dimensions.", "feedback": "Correct under the assumption that coherence fully cancels the dimensionality gain. Coherence genuinely degrades it and the deeper box says so, but 'degrades' is not 'destroys' — and note that broad tuning is itself predicted by high D, so this option describes the two effects partly cancelling, not the advantage vanishing." }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m11.s02.x2", "contentRev": 1, "points": 6,
  "corner": "Modality",
  "prompt": "Fill in nominal dimensionality, whether the natural ensemble has been measured, and — where the two differ — the effective dimensionality of the natural ensemble.",
  "rows": ["Audition", "Gustation", "Proprioception", "Olfaction"],
  "columns": ["Nominal D", "Effective D of natural ensemble", "Ensemble measured?"],
  "cells": {
    "Audition|Nominal D": { "answer": "1", "accept": ["one", "1 (frequency)"] },
    "Audition|Ensemble measured?": { "answer": "yes", "accept": ["yes, extensively"] },
    "Gustation|Nominal D": { "answer": "~5", "accept": ["5", "about 5", "five"] },
    "Gustation|Ensemble measured?": { "answer": "no", "accept": ["not done", "no — and it would be easy"] },
    "Proprioception|Nominal D": { "answer": "~20", "accept": ["20", "joint space 20"] },
    "Proprioception|Effective D of natural ensemble": { "answer": "~3", "accept": ["3", "about 3", "three"] },
    "Olfaction|Nominal D": { "answer": "~400–1000", "accept": ["400-1000", "~1000", "1000", "several hundred"] },
    "Olfaction|Effective D of natural ensemble": { "answer": "unmeasured", "accept": ["unknown", "not known", "nobody knows"] },
    "Olfaction|Ensemble measured?": { "answer": "chemical no, plume yes", "accept": ["plume yes chemical no", "partly", "temporal yes chemical no"] }
  },
  "modelAnswerNote": "Two cells carry the section. Proprioception's 20-versus-3 gap shows that nominal and effective dimensionality can differ sevenfold, and that it is the effective number which governs difficulty. Olfaction's effective dimensionality is UNMEASURED — not known to be high, not known to be low. Every argument in this course that attributes olfaction's stall to dimensionality is therefore an inference from a receptor count. Gustation's row is the other embarrassment: D is small, the categories are behaviourally defined, and the calculation still has not been done."
}
</script>
</x-matrix>

<x-predict>
<script type="application/json">
{
  "id": "m11.s02.x3", "contentRev": 1,
  "prompt": "Suppose someone measures the natural chemical ensemble and reports that odour scenes occupy an effective dimensionality of about 8. Write down, before reading on, what that would and would not resolve.",
  "placeholder": "Which arguments in this course survive that result, and which collapse?",
  "reveal": "It would collapse the dimensionality explanation for olfaction's theoretical stall, which is this course's leading candidate. At an effective D of 8, olfaction sits beside gustation and vestibular, both of which have measured ensembles and workable normative accounts, and the burden shifts entirely to some other factor — most plausibly the non-stationary statistics or the sensor–signal speed mismatch of §11.3.\n\nWhat it would NOT resolve: the encoding side. The receptor array would still carry ~1000 channels, so the expansion-and-sparsify motif and the demixing overdetermination both survive unchanged, since both depend on the measurement count rather than on the latent dimension. Nor would it supply the coordinates — knowing that a manifold is 8-dimensional does not tell you what the axes mean, which is exactly the gap between knowing colour space is 3-dimensional and knowing it has opponent axes [@buchsbaum1983].\n\nThe result would in fact make the flagship §13 calculation more attractive, not less: an 8-dimensional space with derivable opponent axes is precisely the shape of the problem that PCA on cone responses solved.",
  "followUp": "If the measurement instead returned an effective D of 300, would that vindicate the dimensionality account or merely fail to falsify it?"
}
</script>
</x-predict>

<x-free-response>
<script type="application/json">
{
  "id": "m11.s02.x4", "contentRev": 1, "points": 1,
  "prompt": "The datasheet's 'ensemble measured' column correlates strongly with dimensionality. Name the two modalities that break the correlation and explain what each shows about the limits of the sampling-cost argument.",
  "modelAnswer": "Touch and gustation. Touch is only moderately high-dimensional but its ensemble is only partially measured, and the obstacle is not sampling cost: the animal co-authors the stimulus, so the ensemble cannot be defined independently of the sampling behaviour that generates it. This shows sampling cost is not the only route to an unmeasured ensemble — a modality can be cheap to sample and still lack a well-posed ensemble to sample. Gustation breaks it the other way. D is about 5, the categories are behaviourally defined rather than chemically, and the calculation of receptor breadth from natural food chemistry is arguably the easiest such calculation in the course. It has not been done. So low sampling cost does not cause an ensemble to be measured; the sampling-cost argument gives a necessary condition for the calculation being feasible and no condition at all on whether anyone runs it. Together the two cases show that 'ensemble measured' is a fact about the field's history as much as about the stimulus space, and that inferring difficulty from the column requires care.",
  "rubric": [
    "Identifies touch and gustation as the two exceptions",
    "For touch: the ensemble is ill-defined because the animal co-authors the stimulus, not because sampling is expensive",
    "For gustation: sampling is cheap and the calculation is still undone",
    "Draws the general conclusion that sampling cost gives a necessary but not sufficient account of which ensembles get measured",
    "Does not treat the correlation as if it were causal without qualification"
  ]
}
</script>
</x-free-response>
