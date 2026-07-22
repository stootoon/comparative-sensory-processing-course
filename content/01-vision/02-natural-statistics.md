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

with $\eta$ small — typically $0.1$ to $0.3$. To a good approximation, power falls as the inverse square of spatial frequency [@field1987].

That claim is easy to state and rarely shown, so the figure below does the measurement rather than drawing the curve. Three photographs ship with this course; their spectra are computed in your browser when the figure loads, alongside white noise as a control for what *no* correlation looks like. Published exponents rest on databases of hundreds of images [@vanhateren1998] — but the effect is already unmistakable in three.

<x-figure src="content/01-vision/figures/image-spectra.js"
  caption="Real photographs, measured. Each image is windowed, Fourier transformed, and its power averaged over orientation into rings of constant spatial frequency; the dashed line is a pure inverse-square law drawn for reference rather than fitted. The two natural scenes track it across roughly two decades; white noise is flat. Switch to the compensated view to see the residual, and to the phase-scrambled view for the control that matters most — an image with an identical power spectrum and no visible structure at all.">
</x-figure>

### What that actually means, in pictures

The equation is compact and easy to nod at without absorbing. Three concrete ways to hold it:

**As a statement about blur.** Most of an image's energy is in its slow, gradual variation. Blur a photograph heavily and it still looks broadly like the scene — the layout, the large regions of light and dark survive. Keep *only* the fine detail (subtract the blurred version) and you get a faint edge map that is nearly black. The blurred version holds nearly all the variance; that is $1/f^2$ restated.

<x-figure src="content/01-vision/figures/blur-spectrum.js"
  caption="Blur applied to a real photograph, with the unblurred spectrum held on the same axes. The coarse structure below about ten cycles per image width is untouched no matter how hard you blur; the fine structure falls away by orders of magnitude. At a blur that leaves the fern perfectly recognisable, the power at 96 cycles has already dropped a thousandfold — which is why an eye can afford optics a camera could not, and the setup for the retina choosing to lowpass in dim light in §1.5.">
</x-figure>

**As a statement about neighbours.** As §0.2 set out, a steeply falling spectrum and strong spatial correlation are the same fact seen through a Fourier transform. Adjacent pixels in a natural image typically correlate at $r > 0.9$; pixels ten apart still correlate at around $0.8$. That slow decay is a wide autocorrelation function, and a wide function has a narrow transform concentrated at low frequencies.

<x-figure src="content/01-vision/figures/neighbour-correlation.js"
  caption="Every point is a real pair of pixels a chosen distance apart in the photograph, and the coefficient beside it is computed over all of them. At one pixel the cloud is barely a cloud — knowing one pixel fixes most of the variance of the next, which is the redundancy the retina is argued to remove. Drag the separation out and the cloud opens, slowly and with no characteristic distance. The curve on the right is the autocorrelation function whose Fourier transform is the power spectrum.">
</x-figure>

**As a statement about scale.** Photograph a forest from 2 m and from 20 m. The second image is not statistically different from the first — it just contains different objects at the same range of angular sizes. Natural scenes contain structure at every scale, because they contain objects at every distance, so no spatial frequency is privileged. An ensemble with no preferred scale must have a power-law spectrum: power laws are the only functions that look the same under rescaling [@simoncelli2001]. Measured directly in woodland, the statistics do hold up under magnification [@ruderman1994].

<x-figure src="content/01-vision/figures/scale-invariance.js"
  caption="Four windows spanning an eightfold range of scale, cropped from one photograph at the camera's own resolution, plotted against cycles per window and scaled to agree at four cycles, since the question is whether they have the same shape. Three of the four then coincide: shown a patch with the scale bar removed, you could not easily say which zoom level it came from. The smallest window peels away at high frequency, and that departure is the camera's own blur rather than the wood — the same lowpass the previous figure makes explicit. A scene with a characteristic size would fan the curves apart instead, which is what the courtyard does in the first figure.">
</x-figure>

<x-figure src="content/01-vision/figures/correlation-spectrum.js"
  caption="The same fact, two ways. Left: the autocorrelation function — how similar are two points a given distance apart. Right: its Fourier transform, the power spectrum. Drag the correlation length and watch the two move in opposite directions: broader correlation means a steeper, more concentrated spectrum. Switch to the scale-invariance view to see why natural scenes have no characteristic length at all.">
</x-figure>

### Why it matters downstream

Two consequences drive everything in §1.5:

- **Massive spatial correlation means massive redundancy.** If a neuron's neighbour can predict most of what it will say, transmitting both costs two neurons and delivers not much more than one neuron's worth of information. This is what makes whitening attractive.
- **Almost all the power is at low frequencies.** Which is what makes naive whitening dangerous: it means high frequencies are where the signal is weakest relative to a noise floor that does not fall. This is the tension §0.2 resolved, and the reason the retina's filter changes shape with light level.

<details class="x-deeper">
<summary>Go deeper: why the exponent is near 2, and when it is not<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

For a scale-invariant ensemble in $d$ dimensions, the exponent is set by how image intensity scales under magnification. If an image looks the same when you zoom by a factor $a$ — formally, if $I(a\mathbf{x})$ has the same statistics as $I(\mathbf{x})$ — then the spectrum must satisfy $S(af) = a^{-\alpha}S(f)$, forcing a power law.

The value $\alpha \approx 2$ has a specific origin: **occlusion edges**. A scene made of opaque objects at random distances produces intensity discontinuities at object boundaries. A single step edge has a $1/f^2$ power spectrum, and a scene that is essentially a collage of edges inherits it. The small deviation $\eta$ comes from texture and shading within objects, which are smoother than a step.

**When it breaks:**
- Underwater scenes have steeper spectra — scattering removes high frequencies.
- Close-up textures (bark, sand) are flatter, closer to $1/f$.
- Human-made environments have excess power at horizontal and vertical orientations, which is why the *orientation-averaged* spectrum hides real anisotropy. Cortical orientation preference distributions are correspondingly non-uniform.

This matters for the comparison later: vision's ensemble is unusually well-behaved. Not every modality gets a single stable exponent to build a theory on, and olfaction gets nothing like it.

</div>
</details>

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

<x-figure src="content/media/cone-mosaic-chicken-retina.jpg"
  caption="A five-type photoreceptor mosaic from chicken retina, Voronoi-tessellated. Birds have four cone classes plus double cones — more spectral channels than primates, and arranged in a strikingly regular mosaic. A useful reminder that trichromacy is a particular solution rather than the only one, and that channel count is set by ecology rather than by physics."
  credit="Jyfreesun (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Cones-mosaic.jpg">
</x-figure>


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
