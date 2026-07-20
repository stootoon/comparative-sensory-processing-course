---
id: m01.s10
title: Adaptation, gain control, and state
lede: The visual system spans ten log units of intensity with neurons that have two. Every mechanism that makes this possible is a form of the same move — rescale to recent statistics — operating at a different timescale.
estimatedMinutes: 12
---

## Light adaptation

Ambient light varies over about ten log units between starlight and noon. A ganglion cell's firing rate spans usefully over about two [@kandel2021]. The gap is closed by adaptation: the system continuously rescales so that its limited range covers the *current* distribution.

The decomposition of those ten log units is what makes the design intelligible, and it is §1.1's ill-posed equation restated as an engineering brief. Of the total variation in retinal illuminance, roughly **nine orders of magnitude are contributed by the illuminant** $L$ — mostly because the planet rotates — while surface reflectance $R$, the quantity that characterises objects and is therefore the thing worth measuring, varies over only about **one order of magnitude** within a typical scene [@kandel2021].

So the nuisance variable outweighs the signal by eight orders of magnitude. An ideal gain control that divided out the illuminant exactly would leave the ganglion cell encoding a tenfold range with two decades of firing rate to spend on it — comfortable, with resolution to spare. Adaptation is not a workaround for a limitation of neurons. **It is the operation that converts an unsolvable representational problem into an easy one, and it does so by throwing away almost everything.**

That framing also explains a piece of anatomy that is otherwise arbitrary. The gain changes have to happen in graded potentials, before spikes are generated, because a two-decade firing range cannot survive a ten-decade input — which may be the reason this circuitry sits in the eye rather than at the far end of the optic nerve [@kandel2021]. The bottleneck determines where the computation must live.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Adaptation timescales across every modality in the course. Filter to Vision and note the three-decade span from photoreceptor calcium feedback to the rod–cone handover — no single mechanism covers the range, so several are stacked. Then switch to the volatility view for the prediction this section ends on.">
</x-figure>


Mechanisms stack across timescales — the pupil (fast, and worth only about one log unit of the ten [@kandel2021]), photoreceptor gain via calcium feedback in the transduction cascade, synaptic depression, network-level gain in bipolar and ganglion circuits, and the rod-to-cone handover across the widest range. The pupil figure is worth noticing: the mechanism everyone names first contributes a tenth of the required range, and the other nine log units are neural.

The result is that visual neurons encode **contrast** rather than absolute intensity, which is the right variable: contrast is a property of surfaces, while absolute intensity mostly reflects illumination the animal does not care about.

## Contrast and pattern adaptation

Beyond mean luminance, the system adapts to **variance**. After exposure to high-contrast stimuli, gain drops; after low contrast, it rises. This is Laughlin's argument (§0.1) applied to the second moment rather than the first, and it is the same computation the auditory midbrain performs on sound level [@dean2005].

Adaptation is also **selective** — to orientation, spatial frequency, direction of motion, and higher-order properties like faces. Selective adaptation is what makes aftereffects work, and each one is evidence that some population was coding that property.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Adaptation timescale should track statistical volatility</div>
A system adapting to input statistics faces an estimation problem: how much history to use. Average over too long and you track a stale distribution; too short and you chase noise. The optimal window depends on how fast the statistics actually change.

This makes a comparative prediction that the full course tests:

<strong>Vision</strong> — natural image statistics are highly stationary (§1.2), so adaptation can be relatively slow and the hard-wired code is mostly right.<br>
<strong>Audition</strong> — sound-level statistics change as you move between environments; adaptation is measured in tens of milliseconds to seconds [@dean2005].<br>
<strong>Olfaction</strong> — plume and odour-scene statistics are <em>non-stationary</em> (§3.2), changing with wind, substrate and time of day.

<strong>Prediction: olfactory adaptation should be faster and proportionally larger than visual.</strong> Cortical odour adaptation is indeed strikingly rapid. Whether it is quantitatively what the volatility argument predicts is, as far as this course is aware, untested — and it is a cheap experiment.
</x-callout>

<x-order>
<script type="application/json">
{
  "id": "m01.s10.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 21,
  "prompt": "Reconstruct the volatility argument as a chain of steps. Each one is doing work, and the chain is what makes the comparative prediction a prediction rather than an observation.",
  "items": [
    { "id": "a", "text": "Observe that the system rescales its limited range to the recent input distribution." },
    { "id": "b", "text": "Recognise that rescaling requires estimating that distribution from a finite window of history." },
    { "id": "c", "text": "Identify the trade: a long window tracks a stale distribution, a short one chases noise." },
    { "id": "d", "text": "Conclude that the optimal window length is set by how fast the statistics actually change." },
    { "id": "e", "text": "Measure the volatility of each modality's natural statistics and read off the predicted adaptation rates." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e"],
  "modelAnswerNote": "Step (b) is the one people skip, and skipping it is what turns the argument into a story. Without it, 'adapt faster when the world changes faster' is a slogan; with it, adaptation is an estimator and the window is a parameter with an optimum.\n\nStep (e) is where the risk lives. The volatilities have to be measured independently of the neural data, or the argument becomes the accommodation failure §0.2 warns about — and note that this is the same criterion that separates the retinal crossover result from a post-hoc account.\n\nFor olfaction, (e) is exactly what is missing. The claim that odour statistics are non-stationary is well supported qualitatively, but nobody has put a number on the volatility that could be compared against a measured adaptation rate. That is what makes the prediction cheap to state and, so far, untested."
}
</script>
</x-order>

## State and attention

Gain is modulated by arousal, locomotion, and attention through neuromodulatory systems and through the corticothalamic loop of §1.6. Attending to a location increases gain for stimuli there, as early as LGN.

The functional interpretation is that these are all **priors and precision-weights entering a gain control**, which is the framing that makes them comparable to centrifugal modulation of the olfactory bulb — a structure that receives more feedback than feedforward input, and where the same interpretive options are open.

<x-mcq>
<script type="application/json">
{
  "id": "m01.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague argues that contrast adaptation is straightforwardly the same computation as light adaptation, applied one moment up. What is the strongest reason a comparative account should keep them distinct?",
  "options": [
    {
      "text": "The two moments carry different information about the world: mean luminance mostly reports the illuminant, which the animal does not care about, while contrast is a property of surfaces. A system can sensibly discard one and preserve the other.",
      "correct": true,
      "feedback": "This is the reason that survives into other modalities. Rescaling is the same operation formally, but what rescaling *costs you* depends on whether the moment being normalised away carried anything. Discarding mean luminance loses almost nothing; discarding contrast would lose the signal. When you import an adaptation result into a new modality, the question to ask is not 'does it rescale?' but 'what does the normalised-away quantity mean there?' — and for odour concentration the answer is unsettled, since concentration is partly about identity of the source and partly about distance to it."
    },
    {
      "text": "Light adaptation happens in the photoreceptor and contrast adaptation in the network, so they are mechanistically different.",
      "correct": false,
      "feedback": "Correct under the assumption that mechanistic locus individuates computations. This section argues the opposite case explicitly: one computation — rescale to recent statistics — is implemented by a stack of mechanisms at pupil, receptor, synapse, and network, spanning three decades of timescale. If locus individuated computations, light adaptation would already be five different things."
    },
    {
      "text": "Contrast adaptation is selective — to orientation, spatial frequency, direction — and light adaptation is not.",
      "correct": false,
      "feedback": "Partly correct, and a real asymmetry. But the selectivity belongs to *pattern* adaptation specifically; contrast gain control in its non-selective form is as global as light adaptation, and the auditory version [@dean2005] is a pure level-statistics effect with no feature selectivity at all. This attributes to the moment what actually belongs to the feature dimension."
    },
    {
      "text": "Only the first moment needs adapting, since the dynamic-range argument constrains the operating point rather than the spread.",
      "correct": false,
      "feedback": "Correct under the assumption that a limited firing range binds only on where the curve is centred. But a correctly centred curve is still spent badly if the input variance is mismatched to its slope — half the range unused, or most of the inputs saturating. That is Laughlin's argument [@laughlin1981] applied to the second moment, and it is why the constraint binds on both."
    }
  ]
}
</script>
</x-mcq>
