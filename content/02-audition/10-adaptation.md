---
id: m02.s10
title: Adaptation, gain control, and state
lede: Audition provides the cleanest single demonstration anywhere that neurons re-tune to the statistics of their current input — efficient coding not as an evolutionary story but as something measurably happening in seconds.
estimatedMinutes: 12
---

## Adaptation to stimulus statistics

Here is the result that makes this section worth its length.

A neuron has a limited dynamic range: its firing rate saturates over perhaps 30–40 dB, while the audible range spans 120 dB. The efficient-coding prescription from §0.1 is that the transfer function should match the *cumulative distribution of inputs actually encountered* — Laughlin's rule.

Laughlin's version was evolutionary: the fly's curve matches the fly's habitat. The auditory version is **dynamic**. Present sounds drawn from a distribution with a particular mean and variance, and inferior colliculus neurons shift and rescale their rate–level functions to match, improving the accuracy of the population code near the most probable levels [@dean2005]. Change the distribution and they re-adjust, within tens of milliseconds to seconds.

<x-figure src="content/00-toolkit/figures/adaptation-timescales.js"
  caption="Where auditory adaptation sits among the others. The level-statistics re-tuning measured by Dean and colleagues is among the fastest 'statistics adaptation' entries anywhere — which is what makes it the paradigm §3.10 proposes transplanting to olfaction.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">Why this matters for olfaction, specifically</div>
§3.2 argued that olfaction's input statistics are <strong>non-stationary</strong> — they change with wind, substrate and time of day — and concluded that a non-stationary modality cannot hard-wire an efficient code and must adapt continuously.

Audition shows that continuous re-tuning to input statistics is a thing nervous systems <em>demonstrably do</em>, on the right timescale, measurably, in a well-characterised structure. So the olfactory proposal is not exotic; it is asking for a mechanism already documented elsewhere.

<strong>It also supplies the experiment.</strong> Dean and colleagues' paradigm — present a controlled stimulus distribution, change it, measure the shift in the rate–level function — transfers directly to olfaction. Present odours drawn from a controlled concentration distribution, switch the distribution, and ask whether mitral cell input–output functions shift the way IC neurons do. If the non-stationarity argument is right, olfactory adaptation should be *faster and larger* than auditory, because the statistics move more.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s10.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The callout predicts that olfactory adaptation should be faster and larger than auditory, because olfactory statistics are non-stationary. Which assumption is the prediction actually resting on?",
  "options": [
    {
      "text": "That the optimal adaptation timescale is set by the rate at which the input statistics change — so the prediction fails if olfactory statistics turn out to vary widely but slowly, however dramatic the variation.",
      "correct": true,
      "feedback": "This is the load-bearing assumption, and stating it exposes what has not been measured. 'Non-stationary' names two separable quantities: how far the distribution moves, and how quickly. The prediction is about rate, and the evidence usually offered — that odour statistics differ with wind, substrate and time of day — is about range. Substrate and time of day are slow. If the fast component turns out to be small, the argument predicts *slower* olfactory adaptation than auditory, which would be a genuine and interesting failure."
    },
    {
      "text": "That mitral cell input–output functions are measurable in the same way IC rate–level functions are.",
      "correct": false,
      "feedback": "Correct under the assumption that the prediction's content includes its testability, and this is a real methodological requirement — the Dean paradigm transfers only if there is a comparable curve to watch shift. But it is a precondition for running the experiment, not a premise the prediction depends on. The prediction would be true or false regardless of whether anyone could measure it."
    },
    {
      "text": "That a modality with non-stationary statistics cannot hard-wire an efficient code.",
      "correct": false,
      "feedback": "Partly correct — this is stated in §3.2 and the prediction does rely on it. But it is downstream of the same volatility premise rather than independent of it, so naming it restates the assumption one level up instead of identifying it. It also establishes only that adaptation must happen, not how fast, and the prediction is quantitative."
    },
    {
      "text": "That the observed adaptation is efficient recoding rather than fatigue or synaptic depression.",
      "correct": false,
      "feedback": "Correct under the assumption that a mechanistic alternative would void the interpretation, and distinguishing the two is exactly why Dean's design is the right one: fatigue predicts a response that shrinks, while efficient recoding predicts a curve that *shifts and rescales* to the new distribution. But that concerns how to interpret any adaptation once measured, not the comparative magnitude claim under examination here."
    }
  ]
}
</script>
</x-mcq>

## Other timescales

- **Peripheral adaptation** at the hair cell and auditory nerve, over milliseconds to seconds, dominated by synaptic depression.
- **Efferent gain control.** The olivocochlear system feeds back onto outer hair cells, turning the cochlear amplifier down. Compare cortical feedback to the olfactory bulb: in both cases a central structure adjusts the gain of the first stage, and in both cases the function is debated.
- **Stimulus-specific adaptation.** Neurons respond less to a repeated sound but recover for a rare one — a novelty signal, and arguably a form of predictive coding, appearing as early as the inferior colliculus.
