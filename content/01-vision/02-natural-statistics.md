---
id: m01.s02
title: The signal and its natural statistics
lede: Natural images are scale-invariant, heavy-tailed, and remarkably stationary across environments. Each of those three properties does specific work — and the third is the one olfaction does not share.
estimatedMinutes: 22
---

The efficient-coding programme needs an input ensemble. For vision it exists, it is measured, and it has been measured many times over in many environments. This section is about what is in it.

## Scale invariance and the $1/f^2$ spectrum

Take the two-dimensional Fourier transform of a natural image and average power over orientation. The result falls approximately as

$$S(f) \propto \frac{1}{f^{2-\eta}},$$

with $\eta$ small — typically $0.1$ to $0.3$. To a good approximation, power falls as the inverse square of spatial frequency.

The deep reason is scale invariance. Natural scenes contain objects at all distances, so the same object appears at many angular sizes, and no spatial scale is privileged. A statistically scale-invariant ensemble has a power-law spectrum, and the exponent near $2$ follows from the dimensionality and the edge-like structure of the underlying scenes [@simoncelli2001].

Two consequences matter for everything downstream:

- **Massive spatial correlation.** Nearby pixels are highly redundant. Transmitting them independently wastes capacity, which is what makes whitening attractive.
- **Almost all the power is at low frequencies.** Which is what makes naive whitening dangerous, since it means high frequencies are where signal is weakest relative to noise. This is the tension §0.2 resolved.

## Non-Gaussian structure, and what PCA misses

Here is a subtlety that matters for the comparison later. The power spectrum captures only second-order statistics — the covariance. If natural images were Gaussian, the spectrum would be the whole story, and principal component analysis would extract everything there is to extract.

They are not. Filter a natural image with an oriented bandpass filter and the distribution of responses is sharply peaked at zero with heavy tails: most of the image is smooth, punctuated by sparse, high-contrast structure at edges. That is a strongly non-Gaussian, higher-order property, and it is invisible to the covariance.

This is why sparse coding gets further than PCA. Optimising for sparseness rather than merely for decorrelation yields localised, oriented, bandpass filters closely resembling V1 simple cells [@olshausen1996], which decorrelation alone does not produce.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Second-order is not the whole story</div>
Decorrelation exploits the covariance. Sparse coding exploits higher-order structure. They are different claims about what redundancy is being removed, and they predict different codes. Keep them separate — a great deal of loose writing treats "efficient coding" as though it meant only the first.
</x-callout>

## Colour: statistics that yield the code

This is the single most important result in the module for our purposes, and it deserves its own treatment.

The retina samples the spectrum with three cone types whose sensitivities overlap heavily — L and M especially, with peak sensitivities only about 30 nm apart. Given that overlap, cone responses to natural surfaces are enormously correlated.

Apply principal component analysis to the responses of L, M, and S cones to natural scenes. The components that come out are, in order:

1. $L + M$ — an achromatic luminance axis carrying most of the variance
2. $L - M$ — a red–green opponent axis
3. $S - (L + M)$ — a blue–yellow opponent axis

These are the opponent channels of colour vision, derived from natural statistics alone, with no reference to physiology. The theoretical case was made first [@buchsbaum1983] and confirmed on measured natural cone signals afterwards [@ruderman1998].

<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">Why this matters more than it appears</div>
Stop and consider what has happened here. Someone took a physical stimulus space with no obvious coordinate system — the space of reflectance spectra is infinite-dimensional — and *derived*, from measured natural statistics, the small set of axes along which the nervous system actually represents it. The axes were not guessed from the biology and then rationalised. They fell out.

**This is the closest existing analogue to what a successful theory of odour-space coordinates would look like.** It is the model for the flagship question of the capstone: can the same calculation be run on receptor-activation vectors evoked by natural odour scenes, and do the resulting axes have any perceptual or neural reality?
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m01.s02.p1",
  "contentRev": 1,
  "prompt": "PCA on natural cone responses yields the opponent axes. Write down what the corresponding olfactory calculation would be: name the input ensemble, the representation being optimised, the constraint, and the prediction to check against biology. Then say which of those four ingredients we currently lack.",
  "placeholder": "Ensemble = … ; representation = … ; constraint = … ; prediction = …",
  "reveal": "The parallel construction is:\n\n- **Ensemble:** receptor-activation vectors evoked by *natural odour scenes* — not by panels of monomolecular odorants chosen for experimental convenience, which is the analogue of doing colour science on laser lines.\n- **Representation:** the receptor affinity spectra, i.e. which receptor binds what and how strongly.\n- **Constraint:** a fixed number of receptor types, plus noise, plus the metabolic cost of expressing them.\n- **Prediction:** the affinity spectra of the actual repertoire, and the low-dimensional axes along which bulb or cortex represents odour.\n\nThe missing ingredient is the first one. There is no natural-odour-scene database with ground-truth chemical composition remotely comparable to the natural-image databases that made the colour result possible. Work on odour co-occurrence statistics has made a start [@zhou2018], but the gap is real and it is the binding constraint on the whole programme.\n\nThe second-order problem is that receptor response models are incomplete, and receptor-level interactions — competitive binding, antagonism — are nonlinear in a way cone responses are not. So even with the ensemble in hand, the linear-PCA move is not straightforwardly available.",
  "followUp": "Notice that this is a well-posed research programme with a named blocking dependency, not a vague aspiration. That is what the comparative method buys."
}
</script>
</x-predict>

## Stationarity — the property nobody mentions

One last property, ordinarily passed over in silence because in vision it is unremarkable: **natural image statistics are remarkably stationary.** The $1/f^2$ spectrum holds in forests, in savannah, in cities, indoors, underwater. The exponent shifts a little; the form does not.

That stationarity is what makes hard-wiring an efficient code viable. If the input statistics are the same across every environment the species will encounter, the optimal filter can be built into the developmental program and left alone.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Flagged for §3.2</div>
Odour-scene statistics are <em>not</em> stationary in this way. They change with wind speed, substrate, humidity, and time of day. A modality whose input statistics are non-stationary cannot hard-wire an efficient code and must adapt continuously — which may be the best available normative rationale for the olfactory bulb's extreme plasticity, and for adult neurogenesis in a structure two synapses from the sensory surface.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m01.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Why does sparse coding recover oriented, localised V1-like filters when decorrelation alone does not?",
  "options": [
    {
      "text": "Because sparseness exploits higher-order statistical structure that the covariance does not capture.",
      "correct": true,
      "feedback": "Correct. Decorrelation only constrains second-order statistics, and many different bases decorrelate equally well — whitening is unique only up to an arbitrary rotation. Sparseness is a higher-order criterion that selects among those bases, and the one it selects is localised and oriented because natural images consist of smooth regions punctuated by sparse edges."
    },
    {
      "text": "Because sparse codes transmit more information per spike than decorrelated codes.",
      "feedback": "This assumes sparseness is fundamentally about information rate, which is the metabolic-cost argument for sparseness rather than the reason it produces these particular filters. The two arguments are distinct and it is worth keeping them apart: sparseness buys metabolic efficiency AND associative-memory capacity AND linear separability, and those are separate claims with separate evidence."
    },
    {
      "text": "Because decorrelation is only valid at high SNR, and V1 operates at low SNR.",
      "feedback": "The SNR-dependence of whitening is real and important (§0.2), but it is about the shape of the retinal filter, not about why V1 filters are oriented. Even at high SNR, pure decorrelation would not single out oriented localised filters — the rotational degeneracy remains."
    },
    {
      "text": "Because natural images are Gaussian, so second-order statistics are sufficient.",
      "feedback": "This is exactly backwards, and the inversion is instructive. If natural images *were* Gaussian, second-order statistics would be sufficient and PCA would extract everything. Their strongly non-Gaussian, heavy-tailed filter-response distributions are precisely what leaves room for sparseness to do work."
    }
  ]
}
</script>
</x-mcq>
