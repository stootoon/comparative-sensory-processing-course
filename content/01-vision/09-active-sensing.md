---
id: m01.s09
title: Active sensing and the motor loop
lede: The eye moves three times a second and never stops moving even during fixation. Both facts are computational, and the second one whitens the temporal input spectrum in the same way the retinal surround whitens the spatial one.
estimatedMinutes: 14
---

Vision is not passive. The high-resolution fovea covers about two degrees, so seeing a scene requires bringing parts of it to that patch, repeatedly — roughly three saccades per second, for a lifetime.

## Saccades as sampling policy

Each saccade is a decision about where to sample next, and fixations are not distributed uniformly. Gaze goes to informative regions, and where those are depends on the current task: the same scene is scanned differently depending on the question being asked.

This is **optimal experiment design** — choose the measurement that most reduces uncertainty about what you care about. The same framing covers sniff strategy in odour search, whisking, and echolocation call design, and §12 asks whether sniffing adapts to posterior uncertainty the way bat call rate does.

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

## Corollary discharge

Every saccade sweeps the image violently across the retina, yet the world does not appear to move. The system predicts the sensory consequences of its own movement and discounts them: perception is suppressed around saccade onset, and some neurons remap their receptive fields to the *post-saccadic* location before the eye has moved.

This is the same motif as vestibular cancellation of self-generated head motion, auditory suppression during vocalisation, and the electrosensory negative image. **Subtract the predicted consequences of your own action.** A neuron that has succeeded goes quiet — and the recurring warning applies: silence is a result, not an absence of response.
