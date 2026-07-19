---
id: m00.s01
title: Three normative stances
lede: Efficient coding, Bayesian inference, and task optimality are routinely conflated. They make different predictions, and telling them apart is the skill this whole course depends on.
estimatedMinutes: 15
---

A normative theory says what a system *should* do, given what it is for. The appeal is obvious: rather than cataloguing what neurons happen to do, you derive it. The danger is equally obvious, and it is the reason this module exists before any biology. A sufficiently flexible normative story can be fitted to almost any observation after the fact, and the efficient-coding literature contains a fair amount of exactly that.

The defence is precision about which claim is being made. There are three distinct stances, and they are not interchangeable.

## Efficient coding

**Claim:** the system maximises information transmitted about the input, subject to a resource constraint.

The input ensemble is the natural stimulus distribution. The constraint is some cost — number of neurons, spikes, synapses, metabolic energy. The prediction is a code: receptive fields, tuning curves, nonlinearities.

This is the oldest of the three, going back to the observation that natural stimuli are massively redundant and that a sensible system would not waste capacity re-transmitting what it could have predicted [@attneave1954; @barlow1961]. Its first quantitative success was Laughlin's demonstration that the contrast–response function of a fly's large monopolar cell matches the cumulative distribution of contrasts in its natural environment [@laughlin1981] — precisely the transformation that equalises the output distribution and so maximises transmitted information.

Notice what efficient coding does *not* mention: any task, any behaviour, any loss function. It is about faithfully representing the input, full stop.

## Bayesian inference

**Claim:** the system represents a posterior distribution over the causes of its input.

Here the input is not the thing to be represented — it is evidence about something else. There is a generative model $p(\text{stimulus} \mid \text{cause})$ and a prior $p(\text{cause})$, and the system computes or approximates

$$p(\text{cause} \mid \text{stimulus}) \propto p(\text{stimulus} \mid \text{cause})\,p(\text{cause}).$$

The predictions are quite different in character: cue combination weighted by reliability, biases toward the prior when evidence is weak, and characteristic failures when the generative model is wrong.

The distinction from efficient coding matters. An efficient code is judged on how much it preserves; an inference is judged on how well it recovers a hidden variable, and a good inference will often *discard* information that is irrelevant to the cause it cares about.

## Task optimality

**Claim:** the system minimises a behavioural loss.

Now a loss function appears explicitly, and it need not be symmetric. If mistaking a poison for food is fatal and mistaking food for poison merely costs a meal, the optimal decision boundary is nowhere near the point of equal evidence. Gustation is the clearest case in the course, and its architecture looks nothing like olfaction's despite both being chemical senses detecting small molecules with G-protein-coupled receptors.

Task optimality predicts categorical structure where the task is categorical, and preserved metric detail where downstream uses are open-ended.

## Why the distinction is not academic

These three converge in easy cases and diverge in exactly the cases that are interesting.

<x-mcq>
<script type="application/json">
{
  "id": "m00.s01.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A neuron's contrast–response curve shifts rightward when the mean luminance rises, keeping its slope on a log axis. Which stance most directly predicts this, and why?",
  "options": [
    {
      "text": "Efficient coding — the curve tracks the input distribution so that the output distribution stays uniform.",
      "correct": true,
      "feedback": "Correct. This is Laughlin's argument: matching the transfer function to the cumulative distribution of the input equalises the output and maximises transmitted information. No task and no hidden cause is invoked — only the input statistics and a bounded output range."
    },
    {
      "text": "Bayesian inference — the shift is the prior over luminance being applied to the likelihood.",
      "feedback": "This is the answer if you assume the neuron is estimating a hidden cause and the mean luminance acts as a prior. It is a coherent story, but it predicts something extra that is not observed here: a bias in the estimate toward the prior mean, and a dependence on evidence reliability. Pure rescaling to the input range needs no posterior at all."
    },
    {
      "text": "Task optimality — the animal's behavioural loss changes with ambient light.",
      "feedback": "This would be the answer if the shift tracked what the animal was doing rather than what the input statistics were. The discriminating test is to change the stimulus distribution while holding the task fixed: efficient coding predicts the curve moves, task optimality predicts it does not."
    },
    {
      "text": "All three make the same prediction here, so the observation cannot distinguish them.",
      "feedback": "Tempting, and it is true that the three often agree. But they do not agree here: only efficient coding predicts the shift from input statistics alone. The others require additional assumptions that also carry additional, testable, and in this case absent consequences."
    }
  ]
}
</script>
</x-mcq>

The habit worth forming: whenever you meet a normative claim in this course or in a paper, ask what the ensemble is, what the constraint is, what is being optimised, and **what the free parameters are**. That last one is where the overclaiming happens. A theory with enough free parameters to fit any receptive field has not predicted the receptive field.

## A note on where this course is going

Vision and audition support genuine derivations: you can start from measured natural statistics and end at something quantitatively close to the biology. Olfaction currently cannot, and the reason is not lack of effort. It is that the olfactory equivalent of "the power spectrum of natural images" is not yet established, and without a characterised input ensemble the efficient-coding programme has nothing to optimise against.

Holding that thought is the whole point of the comparison.
