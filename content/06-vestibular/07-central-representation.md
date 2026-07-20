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

<x-predict>
<script type="application/json">
{
  "id": "m06.s07.p1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Before reading on: the measured behavioural weights almost certainly do not match the Bayesian ideal exactly. Suppose you are the referee. Which outcome would you find more convincing evidence that MSTd implements the combination — behaviour that matches the ideal weights precisely, or behaviour that misses the ideal by a reproducible margin? Commit to one and give your reason before continuing.",
  "placeholder": "Which result is the stronger test, and why?",
  "reveal": "**The deviations are the stronger result, and this is not a consolation prize.**\n\nWhat was found is that the animals are *near*-optimal: the weights show modest but reproducible departures from the Bayesian prediction. If that were the whole story it would be a partial success at best. The finding that matters is that **population decoding of MSTd predicts the behavioural weights including the deviations** [@fetsch2011]. The neurons track the shortfall, not merely the ideal.\n\n**Why that is a more stringent test.** A theory predicting only the optimum makes one prediction and either passes or fails it. Worse, near-misses are easy to excuse — add a lapse rate, a decision noise term, a suboptimal prior, and any shortfall is absorbed. A theory whose *implementation* predicts the specific pattern of shortfall is being tested at every point where behaviour departs from ideal, and each of those points could have come out wrong. §0.2's fourth criterion — a risky prediction that could have failed — is satisfied far more stringently by the second result than by the first.\n\n**The methodological rule to carry forward.** Exact optimality is a weaker result than predicted suboptimality, because exactness is compatible with the theory being right for the wrong reasons and with the measurement being insufficiently sensitive. **Take this as the template for what a confirmed normative account looks like**: not a system doing the ideal thing, but a system whose departures from the ideal are themselves predicted by the implementation.\n\nBe suspicious, correspondingly, of any olfactory result reported as exact optimality. It is more likely a sign that the ideal observer was specified loosely enough to accommodate whatever was measured."
}
</script>
</x-predict>

That qualification — near-optimal rather than optimal, with the neurons predicting the shortfall — is the single most transferable thing in this module, and §6.11 scores the whole vestibular account against §0.2 on that basis.

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

<x-mcq>
<script type="application/json">
{
  "id": "m06.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The normative programme succeeds centrally for vestibular and fails centrally for vision and audition. Which diagnosis of that asymmetry is best supported, and what does it recommend for olfaction?",
  "options": [
    {
      "text": "The vestibular objective can be written down — minimum-variance estimate of heading — and nobody can write down with comparable precision what V4 or A1 is estimating. Specifiability, not circuit complexity, sets the wall.",
      "correct": true,
      "feedback": "This is the diagnosis, and its force comes from vestibular being the case that separates the two candidate explanations. Brainstem–cerebellar–parietal circuits are not simple, so complexity cannot be what blocks the others. The recommendation for olfaction follows and is uncomfortable: the binding constraint is more likely the absence of a stated estimation problem than the absence of data, and §3.11 already noted that the candidate objectives — identity, concentration, source location — demand different answers."
    },
    {
      "text": "Vestibular succeeds centrally because its periphery is uninteresting, so all the computation the theory can describe happens to be located centrally.",
      "correct": false,
      "feedback": "Correct under the assumption that the theory tracks wherever the computation is concentrated, and the premise is fair — the peripheral story really is comparatively unremarkable. But this reverses cause and effect. The theory does not succeed centrally because there was nothing peripheral to explain; it succeeds because heading estimation is well-posed. A modality could have a dull periphery and an unstatable central objective, and would then have no successful normative account anywhere."
    },
    {
      "text": "Vestibular succeeds because it estimates a physical variable with ground truth available to the experimenter, whereas 'what V4 estimates' has no measurable ground truth.",
      "correct": false,
      "feedback": "Partly correct, and this is the strongest distractor — measurable ground truth genuinely helps, and it is one reason the vestibular experiment is tractable. But it conflates the experimenter's access with the system's problem. The deeper issue is that nobody has stated *what* V4 should be estimating, and no amount of measurement access would supply that. Ground truth makes a stated objective testable; it does not generate one."
    },
    {
      "text": "Vestibular has fewer channels, so the estimation problem is low-dimensional enough for the optimum to be computed exactly.",
      "correct": false,
      "feedback": "Correct under the assumption that tractability of the optimisation is the bottleneck, which is a real constraint in some efficient-coding calculations — estimating a 1000×1000 covariance is genuinely hard. It is not the constraint here. Cue combination between two sensors is a two-dimensional problem regardless of how many afferents feed it, and the visual side of the same computation involves a very large population. Dimensionality is not what distinguishes the successes from the failures."
    }
  ]
}
</script>
</x-mcq>
