---
id: m00.s02
title: Efficient coding in two regimes
lede: The same principle predicts opposite filters depending on signal-to-noise ratio. This is the cleanest quantitative prediction in sensory neuroscience, and it is the template for what a successful theory looks like.
estimatedMinutes: 28
---

Efficient coding is often summarised as "decorrelate the input". That summary is wrong half the time, and the half where it is wrong is the more interesting half.

This section builds the argument slowly, because almost everything later in the course is measured against it. The main line needs no more than comfort with a Fourier transform; the boxes marked **Go deeper** contain the algebra.

## Step 1: natural inputs are redundant

Point a camera at a forest and look at two adjacent pixels. Their intensities are almost always similar. Point it at two pixels a metre apart and the similarity is much weaker.

That everyday observation has a precise name. The **autocorrelation function** measures how similar two points separated by a distance $\Delta x$ tend to be:

$$C(\Delta x) = \langle I(x)\, I(x + \Delta x)\rangle_x$$

where the angle brackets mean "average over all positions $x$". For natural scenes $C$ is large at $\Delta x = 0$ (a point is perfectly similar to itself) and decays as $\Delta x$ grows.

**Redundancy is exactly this decay being slow.** If knowing one pixel tells you a great deal about its neighbour, then transmitting both costs you two neurons but delivers barely more than one neuron's worth of information. You are paying twice to send nearly the same message.

## Step 2: why correlation and the power spectrum are the same fact

Here is the connection that is usually asserted rather than explained.

The **power spectrum** $S(f)$ says how much of the image's variance sits at each spatial frequency $f$ — how much is slow, gradual shading, and how much is fine detail. The autocorrelation says how similar nearby points are. These sound like different descriptions. They are the same description, related by a theorem:

$$S(f) = \int C(\Delta x)\, e^{-2\pi i f \Delta x}\, \mathrm{d}(\Delta x)$$

**The power spectrum is the Fourier transform of the autocorrelation.** This is the Wiener–Khinchin theorem, and once you have it the connection becomes intuitive rather than formal.

Fourier transforms trade width for narrowness. A *wide* function has a *narrow* transform, and vice versa. So:

- **Strong correlation** = $C$ decays slowly = $C$ is wide → its transform $S(f)$ is narrow, i.e. concentrated at low frequencies, i.e. falls off steeply.
- **No correlation** (each pixel independent) = $C$ is a spike at zero = infinitely narrow → its transform is flat. **A white spectrum and zero correlation are the same statement.**

That is where the word "whitening" comes from. Flattening the spectrum *is* removing the correlations. They are not two goals; they are one goal in two languages.

<details class="x-deeper">
<summary>Go deeper: getting the exponent<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

Take a correlation that decays exponentially with length scale $\lambda$:

$$C(\Delta x) = \sigma^2 e^{-|\Delta x|/\lambda}$$

Its Fourier transform is a Lorentzian:

$$S(f) = \frac{2\sigma^2\lambda}{1 + (2\pi f\lambda)^2}$$

which is flat for $f \ll 1/\lambda$ and falls as $1/f^2$ for $f \gg 1/\lambda$. So *any* input with a characteristic correlation length produces a $1/f^2$ tail. The exponent 2 is not special to vision; it is what you get from correlations that die away with a single length scale.

Natural images do something slightly stronger. They are **scale invariant**: a forest photographed from 2 m and from 20 m has the same statistical structure, because scenes contain objects at all distances. A scale-invariant ensemble has no characteristic $\lambda$ at all, and the only correlation functions with no preferred scale are power laws. That forces

$$S(f) \propto f^{-\alpha}$$

exactly, over decades of frequency, rather than only asymptotically. Measured $\alpha$ for natural images clusters near 2, typically $1.7$–$2.1$ [@simoncelli2001].

**Why you should care about the distinction:** an exponential correlation has a built-in scale, so a system could tune to it. A power law does not, which is why the same filter shape works across viewing distances and why vision can hard-wire it.

</div>
</details>

## Step 3: why whitening is the natural fix

Now the question the last section left open. Given a redundant input, why is the right response to flatten its spectrum?

Think of the optic nerve as a bundle of channels, one per spatial frequency, each with a **bounded dynamic range** — a neuron can fire between zero and a few hundred spikes per second, and no more. You are trying to push as much information as possible through that bundle.

With a $1/f^2$ input and no processing, the situation is badly lopsided:

- **Low-frequency channels are swamped.** Almost all the variance is down here. The signal routinely exceeds what the neuron can represent, so it saturates and detail is clipped.
- **High-frequency channels are idle.** There is so little power up here that these neurons barely deviate from baseline. Their range is allocated but unused.

You are wasting capacity at both ends. The fix is to equalise: apply a gain that is small where the input is large and large where the input is small, so every channel ends up using its full range. The gain that achieves this is

$$|W(f)| \propto \frac{1}{\sqrt{S(f)}}$$

because the output power becomes $|W(f)|^2 S(f) \propto 1$ — flat, by construction. For $S \sim 1/f^2$ this gives $|W(f)| \propto f$: a **high-pass filter**, which amplifies fine detail and suppresses gradual shading.

And a high-pass filter is what a centre–surround receptive field is. The surround subtracts a local average — the low-frequency part — leaving the deviation.

<details class="x-deeper">
<summary>Go deeper: three routes to the same answer<span class="x-deeper-tag">theory</span></summary>
<div class="x-deeper-body">

The equal-use-of-range argument is the intuition. Three more formal routes reach the same filter, and it is worth knowing they are distinct claims:

**Information-theoretic (infomax).** For a Gaussian source through channels with a total power constraint, mutual information between input and output is maximised when the output components are decorrelated *and* have equal variance. Whitening is precisely the transform achieving both.

**Redundancy reduction (Barlow).** Minimise the summed entropy of individual channels while preserving joint entropy. The redundancy $\sum_i H(y_i) - H(\mathbf{y})$ is zero exactly when channels are statistically independent; for a Gaussian, decorrelation gives independence [@barlow1961].

**Metabolic.** Spikes cost ATP. Minimising expected spike count subject to transmitting a fixed amount of information again favours equalising the load across channels rather than making a few work hard.

**These are not equivalent in general.** They coincide for Gaussian signals and linear codes, which is why the retinal story is clean and why arguments beyond V1 — where neither assumption holds — get murky. When someone says "efficient coding predicts X", it is always worth asking which of the three they mean.

Note also that whitening is only defined **up to an arbitrary rotation**: if $W$ whitens, so does $RW$ for any orthogonal $R$. Decorrelation alone therefore cannot pick out a specific set of filters. That degeneracy is the gap sparse coding fills — see §1.2.

</div>
</details>

## Step 4: the correction that changes everything

Everything so far assumed a noiseless system. Real ones are not, and putting noise in reverses the prescription over part of the range.

Be careful about the mechanism, because it is easy to state loosely. Noise is not "amplified at high frequencies" in some special way. What matters is the *comparison* between two spectra:

- The **signal** spectrum falls steeply, as $1/f^2$. There is very little signal power at high frequencies.
- The **noise** spectrum does not. Photon shot noise and synaptic noise are roughly **white** — flat, the same power at every frequency.

So the signal-to-noise ratio $S(f)/N$ is not constant across frequency. It is excellent at low frequencies, where the signal is strong, and **terrible at high frequencies**, where the signal has all but vanished and the noise has not.

Now look again at the whitening filter. Its gain is $1/\sqrt{S(f)}$ — largest exactly where $S(f)$ is smallest, which is exactly where the SNR is worst. **A whitening filter applies its greatest amplification precisely to the frequencies that are mostly noise.** In dim light it would take a band that is essentially all noise and boost it to full output range.

The optimal filter therefore has to balance two demands, and it is a product of two terms [@atick1992]:

$$|W(f)| \;\propto\; \underbrace{\frac{1}{\sqrt{S(f)}}}_{\text{whiten: rises with } f} \times \underbrace{\frac{S(f)}{S(f)+N}}_{\text{suppress noise: falls with } f}$$

The second term is a Wiener filter: near 1 where signal dominates, near 0 where noise dominates. Where the two terms cross depends on the overall SNR:

- **High SNR (bright light).** The noise term stays near 1 across most of the range, so whitening dominates. The filter is **bandpass** — a strong, tight inhibitory surround. The system differentiates.
- **Low SNR (dim light).** The noise term collapses at moderate frequencies, cutting the whitening off early. The filter becomes **lowpass** — a weak, broad surround. The system pools.

The same principle, the same objective, opposite filters. That is the prediction.

<details class="x-deeper">
<summary>Go deeper: where the crossover sits, and why it is not a free parameter<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

With $S(f) = A f^{-2}$ and white noise of power $N$, the filter magnitude is

$$|W(f)| \propto \frac{1}{\sqrt{A f^{-2}}}\cdot\frac{A f^{-2}}{A f^{-2}+N} = \frac{\sqrt{A}\,f^{-1}}{A f^{-2}+N}.$$

Differentiating and setting to zero puts the peak at

$$f_{\text{peak}} = \sqrt{\frac{A}{N}}\,,$$

which is exactly the frequency where signal power equals noise power, $S(f_{\text{peak}}) = N$.

**This is what makes the prediction risky rather than descriptive.** The peak is not fitted; it is pinned to a quantity you can measure independently — the frequency at which the natural signal spectrum crosses the noise floor. Drop the light level by four log units and $N$ rises relative to $A$, so $f_{\text{peak}}$ moves down by two log units in a specified way. The theory could have been wrong, and it was not.

Contrast this with a model containing a free surround strength fitted to the data: that model can reproduce any surround and therefore predicts nothing.

</div>
</details>

<x-predict>
<script type="application/json">
{
  "id": "m00.s02.p1",
  "contentRev": 2,
  "prompt": "Before reading on. Sketch, in words, the spatial frequency response of a retinal ganglion cell at high light levels. Then: ambient light drops by four log units, so photon noise now dominates at high spatial frequencies. Redraw your curve, and say roughly where the two curves cross.",
  "placeholder": "Describe both curves and where they cross…",
  "reveal": "At high light the response is bandpass: gain rising with spatial frequency to whiten the $1/f^2$ input, peaking where signal power meets the noise floor, then rolling off above it where the optics and receptor aperture cut in.\n\nAt low light it becomes lowpass. The peak moves toward zero and the surround weakens and broadens: the system stops differentiating and starts pooling, because at low SNR subtracting a neighbour's estimate costs more in amplified noise than it gains in removed redundancy.\n\n**Where they cross:** at low-to-middling spatial frequency. Below the crossing the low-light curve is *higher* — it passes low frequencies with more gain, because it is pooling. Above it the high-light curve is higher. The crossing is not a free parameter; it sits near where signal power falls to noise power, which is what makes this a prediction rather than a description.\n\nThis was confirmed. Retinal surrounds measurably weaken and broaden at scotopic levels [@srinivasan1982; @atick1992], and LGN responses to natural movies are close to temporally white, as whitening requires [@dan1996].",
  "followUp": "Now ask what the olfactory version would even look like. What plays the role of $S(f)$? We return to exactly this in §3.2 — and the answer is that the ensemble has not been measured, which is the single biggest obstacle to a normative theory of smell."
}
</script>
</x-predict>

<x-figure src="content/00-toolkit/figures/whitening-snr.js"
  caption="The optimal filter as SNR varies. Drag the SNR slider and watch the filter go from bandpass (strong surround, differentiating) to lowpass (weak surround, pooling). The two factors are drawn separately so you can see which one is doing the work at each frequency.">
</x-figure>

## Step 5: the same story in three other places

The pattern — *high SNR: sharpen and decorrelate; low SNR: pool and smooth* — is not a quirk of retina. Some worked instances:

**Fly photoreceptors.** Laughlin's original result was that the contrast–response curve of a large monopolar cell matches the cumulative distribution of contrasts in the fly's natural environment [@laughlin1981]. The same neurons shift toward pooling as light falls.

**Auditory nerve at low level.** As sound level drops, auditory filters broaden and the system integrates over longer windows. Same trade, temporal axis.

**Rod versus cone circuits.** The mammalian retina implements both ends *simultaneously in different places*. In the fovea, midget ganglion cells may receive input from a single cone — no pooling, maximum acuity, because photons are plentiful. In the rod pathway, hundreds of rods converge onto one ganglion cell — maximum pooling, because at scotopic levels a rod sees a photon every few minutes. The trade is not made once for the whole organ; it is made locally, matched to the local SNR.

**Olfactory receptor neurons.** Thousands of same-type receptor neurons converge on one glomerulus. That is pooling, and §3.5 asks whether the reason is the retinal one (SNR, in a shot-noise-limited sensor) or something else entirely (recovering temporal precision from slow sensors).

## What makes this a *good* normative result

Worth being explicit, because it sets the standard everything later is judged against.

1. **The input ensemble was measured, not assumed.** Natural image spectra are an empirical fact, collected independently of any theory of the retina.
2. **The constraint is physical.** Bounded firing rate, known noise sources.
3. **The prediction is quantitative and risky.** Not "there should be a surround" but "the surround should weaken as SNR falls, with the peak at the signal–noise crossover" — a claim that could have been false.
4. **It was confirmed by data collected afterwards.**
5. **The free parameters are few and named.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">The standard</div>
When you meet a normative claim about olfaction later in this course, hold it against these five. Most current proposals fail on the first — and not because the theorists are careless. The natural odour ensemble genuinely has not been characterised the way natural image statistics have, which makes it a data problem before it is a theory problem.
</x-callout>

## An honest complication

Real retinas decorrelate less than the cleanest form of the theory requires, and much of the decorrelation that does occur comes from a steep response **nonlinearity** rather than from the linear centre–surround [@pitkow2012]. The linear theory gets the right qualitative answer partly for the wrong mechanistic reason.

Worse for the theory's evidential status: centre–surround structure also falls out of arguments about noise and nonlinearity that never mention redundancy at all. **When several distinct principles predict the same structure, that structure is weak evidence for any one of them.** Keep this in mind every time a later module reports a motif "as predicted by efficient coding".

<x-order>
<script type="application/json">
{
  "id": "m00.s02.o1",
  "shuffleSeed": 11,
  "contentRev": 1,
  "points": 1,
  "partialCredit": true,
  "prompt": "Put the steps of a normative derivation in order. One of these is the step most often skipped in published work — and skipping it is how a flexible theory passes for a predictive one.",
  "items": [
    "State the input ensemble, measured from the natural environment",
    "State the constraint: what resource is limited, and how",
    "State the objective being optimised",
    "Solve for the optimal code",
    "Compare the solution to the measured biology",
    "Identify the free parameters and ask how much of the fit they bought"
  ]
}
</script>
</x-order>

<x-mcq>
<script type="application/json">
{
  "id": "m00.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Why does the optimal filter stop whitening at high spatial frequencies in dim light?",
  "options": [
    {
      "text": "Because signal power there has fallen below the noise floor, so the whitening gain would amplify mostly noise.",
      "correct": true,
      "feedback": "Correct. The whitening gain $1/\\sqrt{S(f)}$ is largest exactly where $S(f)$ is smallest — which is exactly where SNR is worst. The Wiener term cuts it off at the frequency where $S(f)$ meets $N$."
    },
    {
      "text": "Because noise is amplified more at high frequencies than at low frequencies.",
      "feedback": "This is the most common way to misstate it, and worth pinning down. Noise is roughly *white* — the same power at every frequency, not preferentially high-frequency. What changes across frequency is the SIGNAL, which collapses. The problem is the ratio, not any property of the noise on its own."
    },
    {
      "text": "Because the photoreceptor's own temporal filtering has already removed those frequencies.",
      "feedback": "Optical blur and receptor aperture do impose a high-frequency cutoff, and it is real. But it does not move with light level, whereas the surround demonstrably does — so it cannot explain the SNR-dependent shift, which is the phenomenon at issue."
    },
    {
      "text": "Because metabolic cost rises with firing rate, and high-frequency channels fire most.",
      "feedback": "Metabolic cost is a genuine constraint in efficient-coding arguments. But on its own it predicts turning gain down everywhere, not a frequency-dependent crossover that moves with light level. It cannot single out high frequencies without the SNR argument."
    }
  ]
}
</script>
</x-mcq>
