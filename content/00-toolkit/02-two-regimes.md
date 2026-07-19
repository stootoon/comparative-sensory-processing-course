---
id: m00.s02
title: Efficient coding in two regimes
lede: The same principle predicts opposite filters depending on signal-to-noise ratio. This is the cleanest quantitative prediction in sensory neuroscience, and it is the template for what a successful theory looks like.
estimatedMinutes: 18
---

Efficient coding is often summarised as "decorrelate the input". That summary is wrong half the time, and the half where it is wrong is the more interesting half.

## The problem

Natural inputs are correlated. Neighbouring points in an image have similar intensities; the power spectrum of natural scenes falls roughly as $1/f^2$ in spatial frequency. Transmitting each point independently wastes capacity re-sending what a neighbour already implied.

The obvious fix is to **whiten**: apply a filter whose gain rises with frequency so as to flatten the output spectrum. If the input power spectrum is $S(f)$, a whitening filter has gain

$$|W(f)| \propto \frac{1}{\sqrt{S(f)}},$$

which for $S(f) \sim 1/f^2$ gives $|W(f)| \propto f$ — a high-pass filter. Centre–surround receptive fields are high-pass. So far the story is tidy, and this is the version that gets taught.

## Why the tidy story is incomplete

Whitening amplifies high frequencies. So does noise. At high frequencies the natural signal has very little power, so if there is any appreciable input noise, a whitening filter spends most of its output range amplifying noise.

The correct solution optimises against noise as well as redundancy [@atick1992]. The resulting filter is a product of two terms: a whitening term that rises with frequency, and a noise-suppression (lowpass) term that falls with it. Where the two cross depends on the signal-to-noise ratio:

- **High SNR** (bright light): the whitening term dominates over most of the range. The filter is **bandpass** — a strong, tight inhibitory surround.
- **Low SNR** (dim light): noise dominates before whitening can help. The filter becomes **lowpass** — the surround weakens and broadens, and the system pools rather than differentiates.

So the same principle predicts opposite spatial filters depending on light level.

<x-predict>
<script type="application/json">
{
  "id": "m00.s02.p1",
  "contentRev": 1,
  "prompt": "Before reading on. You are told a retinal ganglion cell should maximise information transmitted about natural scenes subject to noise. Sketch, in words, its spatial frequency response at high light levels. Then: the ambient light drops by four log units, so photon noise now dominates at high spatial frequencies. What happens to your curve, and roughly where do the two curves cross?",
  "placeholder": "Describe both curves and where they cross…",
  "reveal": "At high light the response is bandpass: gain rising with spatial frequency to whiten the $1/f^2$ input, then rolling off at the very top where the optics and receptor aperture cut in. At low light it becomes lowpass: the peak moves toward zero and the surround weakens and spreads.\n\nThe two curves cross at low-to-middling spatial frequency — below the crossing point the low-light curve is *higher* (it is pooling, so it passes low frequencies with more gain), and above it the high-light curve is higher. The crossing is not a free parameter: it sits where the input signal power falls to roughly the noise power, which is what makes this a real prediction rather than a description.\n\nThis was confirmed. Retinal surrounds measurably weaken and broaden at scotopic levels, and the effect was predicted before it was systematically measured [@srinivasan1982; @atick1992]. Direct tests in LGN showed that responses to natural movies are close to temporally white, as whitening requires [@dan1996].",
  "followUp": "Ask yourself what the olfactory version of this prediction would even look like. What plays the role of $S(f)$? We return to exactly this in §3.2."
}
</script>
</x-predict>

## Why this example is the course's benchmark

It is worth being explicit about what makes this a *good* normative result, because it sets the standard against which everything later is judged.

1. **The input ensemble was measured, not assumed.** Natural image spectra are an empirical fact.
2. **The constraint is physical.** Bounded output range, known noise sources.
3. **The prediction is quantitative and risky.** Not "there should be a surround" but "the surround should weaken in a specified way as SNR falls" — a claim that could have been false.
4. **It was confirmed by data collected afterwards.**
5. **The free parameters are few and named.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">The standard</div>
When you meet a normative claim about olfaction later in this course, hold it against these five criteria. Most current proposals fail on the first, and not because the theorists are careless — the natural odour ensemble genuinely has not been characterised the way natural image statistics have.
</x-callout>

## An honest complication

Real retinas decorrelate less than the theory's cleanest form requires, and much of the decorrelation that does occur comes from a steep response nonlinearity rather than from the receptive field's linear surround [@pitkow2012]. Centre–surround structure also falls out of arguments about noise and nonlinearity that never invoke redundancy reduction at all.

This does not sink the theory. It does mean that "the retina whitens" is a claim about a tendency implemented by several mechanisms, only some of which the linear theory captures — and it is a useful inoculation against reading later successes as more complete than they are.

<x-order>
<script type="application/json">
{
  "id": "m00.s02.o1",
  "contentRev": 1,
  "points": 1,
  "partialCredit": true,
  "prompt": "Put the steps of a normative derivation in order. (One of these is the step most often skipped in published work — and skipping it is how a flexible theory passes for a predictive one.)",
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
