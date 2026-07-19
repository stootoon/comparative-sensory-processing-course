---
id: m06.s07
title: The central representation — distributed and multisensory
lede: Vestibular's central representation is the best neural demonstration of Bayesian cue combination anywhere. It is also where "the central representation" stops being a single place.
estimatedMinutes: 12
---

There is no vestibular V1. The nearest thing to a central representation is a set of parietal and insular areas where vestibular, visual and somatosensory self-motion signals converge.

## Optimal cue combination in MSTd

Area **MSTd** in macaque contains neurons responsive to both visual optic flow and vestibular self-motion, and it supports the cleanest neural demonstration of Bayesian cue integration available.

The setup: train an animal to judge heading direction from visual optic flow alone, vestibular motion alone, or both together. Bayesian theory predicts that combined-cue performance should exceed either single cue, with the two weighted by their **reliabilities** — and that changing the reliability of one cue (by degrading the visual stimulus) should shift the weights accordingly.

Both predictions hold, behaviourally and in the neurons: MSTd responses to combined cues reflect reliability-weighted combination, and the weighting shifts when reliability is manipulated [@fetsch2011].

**With one qualification that is worth more than the headline.** The animals are *near*-optimal rather than optimal — the measured weights show modest but reproducible deviations from the Bayesian prediction. What makes the result compelling is not that the deviations are absent but that **population decoding of MSTd predicted the behavioural weights including the deviations** [@fetsch2011]. The neurons track the shortfall, not just the ideal.

That is a better outcome for the normative programme than exact optimality would have been, and the reason is methodological. A theory that predicts only the optimum has one prediction and passes or fails it. A theory whose neural implementation predicts the *specific way* behaviour falls short of the optimum is being tested at many more points, and §0.2's fourth criterion — a risky prediction that could have failed — is satisfied far more stringently. **Take this as the template for what a confirmed normative account actually looks like**: not a system doing the ideal thing, but a system whose departures from the ideal are themselves predicted by the implementation.

<x-figure src="content/06-vestibular/figures/cue-combination.js"
  caption="Reliability-weighted combination. The combined estimate is narrower than either cue alone, and dragging visual reliability down slides it toward the vestibular estimate — by the predicted amount, in behaviour and in MSTd. Then add conflict: at large disagreement the right answer is to segregate rather than average, which is causal inference rather than cue combination.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">What a fully worked normative account looks like</div>
This is worth holding up against §0.2's five criteria, because it passes all of them and almost nothing else in the course does.

<strong>Ensemble:</strong> natural head motion, measured (§6.2).<br>
<strong>Constraint:</strong> two noisy sensors with measurable reliabilities.<br>
<strong>Objective:</strong> minimum-variance estimate of heading — stated precisely, no ambiguity about what is being optimised.<br>
<strong>Prediction:</strong> quantitative and risky — combined thresholds should follow a specific formula, and weights should shift by a specific amount when reliability changes.<br>
<strong>Confirmed:</strong> yes, behaviourally and neurally.

<strong>Vestibular is where the normative programme has come closest to complete success</strong>, and it did so at the <em>central</em> level rather than the periphery — the opposite of vision and audition, whose successes are peripheral and whose central accounts fail.

The reason is instructive: the vestibular problem is <strong>well-posed</strong>. There is a known physical variable to estimate, known sensor noise, and a known forward model. Vision and audition lack that at the central level because nobody can say precisely what V4 or A1 is estimating. <strong>The obstacle beyond primary cortex may be that we cannot state the objective, not that the systems are complicated.</strong>

That is a genuinely useful diagnosis for olfaction — and it says the priority is not better recordings but a precise statement of what the olfactory system is trying to estimate.
</x-callout>
