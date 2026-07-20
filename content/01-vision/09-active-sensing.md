---
id: m01.s09
title: Active sensing and the motor loop
lede: The eye moves three times a second and never stops moving even during fixation. Both facts are computational, and the second one whitens the temporal input spectrum in the same way the retinal surround whitens the spatial one.
estimatedMinutes: 14
---

Vision is not passive. The high-resolution fovea covers about two degrees, so seeing a scene requires bringing parts of it to that patch, repeatedly — roughly three saccades per second, for a lifetime.

## Saccades as sampling policy

Each saccade is a decision about where to sample next, and fixations are not distributed uniformly. Gaze goes to informative regions, and where those are depends on the current task: the same scene is scanned differently depending on the question being asked.

<x-figure src="content/media/yarbus-scanpaths-task.jpg"
  caption="Yarbus's classic demonstration. The same painting, viewed by the same observer under seven different instructions — free viewing, estimate the family's wealth, guess their ages, and so on. The scanpaths differ completely. Sampling is not driven by the image; it is driven by the question, which is optimal experiment design in its most direct behavioural form."
  credit="After Yarbus, A. L. (1967), Eye Movements and Vision, Plenum Press. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Yarbus_The_Visitor.jpg">
</x-figure>


This is **optimal experiment design** — choose the measurement that most reduces uncertainty about what you care about. The same framing covers sniff strategy in odour search, whisking, and echolocation call design, and §14 asks whether sniffing adapts to posterior uncertainty the way bat call rate does.

<x-mcq>
<script type="application/json">
{
  "id": "m01.s09.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Yarbus's scanpaths change completely with the instruction. Read as optimal experiment design, what does that observation specifically commit you to?",
  "options": [
    {
      "text": "That the sampling policy is conditioned on a posterior over task-relevant variables, so the most informative next measurement is a function of the question and not of the image alone.",
      "correct": true,
      "feedback": "This is the commitment, and it is stronger than it sounds. Expected information gain is defined relative to a quantity you want to know about; change the quantity and the ranking over candidate fixations changes even though the image is identical. That is precisely what the seven scanpaths show, and it is why the framing transfers to sniff strategy and echolocation call design — all three are policies over measurements, not responses to stimuli."
    },
    {
      "text": "That gaze is attracted to regions of high image salience, since salience is where the information is.",
      "correct": false,
      "feedback": "Correct under a bottom-up saliency model, which does predict fixations above chance and is a reasonable default. But such a model is a function of the image alone, so it predicts the *same* scanpath under all seven instructions. Yarbus is the standard demonstration that this cannot be the whole story — the observation is the falsification of this option, not evidence for it."
    },
    {
      "text": "That the system minimises the number of fixations needed to answer the question.",
      "correct": false,
      "feedback": "Correct under the assumption that the cost being traded against information is the count of measurements. Optimal experiment design does trade information against cost, but observers make far more fixations than a count-minimiser would, and — more to the point — nothing in the Yarbus data measures fixation counts against a bound. The data speak to where gaze goes, not to how economically."
    },
    {
      "text": "That fixation targets can only be selected after the fovea has sampled them, since a region's informativeness cannot be known before it is seen in detail.",
      "correct": false,
      "feedback": "Correct under the assumption that informativeness requires foveal resolution, and if that were true the whole framework would be circular. It is not: peripheral vision supplies a coarse, low-resolution estimate that is sufficient to *rank* candidate targets by expected gain without resolving them. The periphery's job is target selection, which is what makes the problem well-posed rather than question-begging."
    }
  ]
}
</script>
</x-mcq>

## Fixational drift, and a lovely result

Even during fixation the eye never holds still: small drifts and microsaccades keep the image in constant motion.

That looks like a defect. It is closer to a feature, and the reason connects directly to §1.2.

Natural images have a $1/f^2$ spatial power spectrum. Moving the image across the retina at roughly constant velocity converts spatial frequency into temporal frequency, and the resulting **temporal** input spectrum is approximately flat over the relevant range. Fixational drift whitens the input in time.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Two whitening mechanisms, one principle</div>
§1.5 described the retinal surround whitening the input in <em>space</em> by subtracting a local prediction — a neural computation, paid for in circuitry.

Fixational drift whitens the input in <em>time</em>, and costs nothing but eye muscles that were there anyway. Movement is doing the work the surround does, in the other domain.

<strong>The general lesson:</strong> some of what looks like neural computation is achieved by the animal moving its sensor. Ask, for any modality, which transformations are bought with movement rather than neurons — and note that olfaction's sniff is the least studied instance in this course.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m01.s09.p1",
  "contentRev": 1,
  "prompt": "Fixational drift buys a whitening operation with muscles that were there anyway, and the retina would otherwise have to pay for it in circuitry. Apply the same audit to the sniff. What transformation could the sniff be buying for free, and what would you measure to find out?",
  "placeholder": "Name a transformation, say what it would cost neurally, and give the measurement.",
  "reveal": "There are at least three candidates, and they are not mutually exclusive.\n\n**A clock.** Drift converts a spatial spectrum into a temporal one at a rate set by the eye. Sniffing imposes a periodic modulation on receptor input at 2–10 Hz, which supplies a phase reference against which latencies become meaningful. A latency code needs a $t=0$; the sniff provides one, and it is free. Sniff-locked activity is ubiquitous in the bulb [@wachowiak2011], and the open question is whether downstream circuits actually use the phase or merely inherit it.\n\n**Gain control at the sensor.** Flow rate sets how many molecules cross the epithelium per unit time. Modulating flow is therefore a mechanical gain control, achieved with the same muscles used for breathing — the direct analogue of the pupil, and considerably cheaper than the neural gain control it would replace.\n\n**Temporal contrast enhancement.** A periodic sampling of a slowly varying concentration converts a near-DC signal into a modulated one, which is easier to transmit through channels that adapt. This is the closest structural analogue to the drift result: movement doing the high-pass filtering that would otherwise cost circuitry.\n\n**The measurement.** The discriminating experiment is to decouple flow from the motor command — clamp airflow while the animal sniffs, or impose flow while it does not — and ask which downstream features survive. Anything that tracks imposed flow is bought by the physics; anything that tracks the motor command is being computed, and is therefore in the corollary-discharge business instead.\n\nThat sniffing is the least-studied instance of active sensing in this course is a statement about the literature, not about the phenomenon."
}
</script>
</x-predict>

## Corollary discharge

Every saccade sweeps the image violently across the retina, yet the world does not appear to move. The system predicts the sensory consequences of its own movement and discounts them: perception is suppressed around saccade onset, and some neurons remap their receptive fields to the *post-saccadic* location before the eye has moved.

This is the same motif as vestibular cancellation of self-generated head motion, auditory suppression during vocalisation, and the electrosensory negative image. **Subtract the predicted consequences of your own action.** A neuron that has succeeded goes quiet — and the recurring warning applies: silence is a result, not an absence of response.
