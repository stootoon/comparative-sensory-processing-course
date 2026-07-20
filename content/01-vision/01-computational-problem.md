---
id: m01.s01
title: The computational problem
lede: What must a visual system infer, from what, under what loss, and on what deadline? Answering this before any anatomy is what keeps the theory from becoming rationalisation.
estimatedMinutes: 14
---

Light arrives at a two-dimensional array of photoreceptors. The world that produced it is three-dimensional, and the image at each point confounds surface reflectance, illumination, surface orientation, and distance. The system must recover properties of that world — what is there, where it is, what it is made of, whether it is moving toward you.

## The problem is ill-posed

This is the standard framing, and it is worth stating precisely rather than as a slogan. Consider a single photoreceptor reporting an intensity $I$. That intensity is, to a first approximation,

$$I = R \cdot L \cdot \cos\theta,$$

where $R$ is surface reflectance, $L$ is illumination, and $\theta$ is the angle between surface normal and light source. One measurement, three unknowns. A dark surface brightly lit and a light surface dimly lit are, at that receptor, identical.

Inversion is therefore impossible without additional constraints. Those constraints come from the statistics of the world: illumination varies smoothly over space while reflectance has sharp edges; surfaces are mostly locally planar; light usually comes from above. Vision works because the world is not arbitrary, and §1.2 is about exactly which regularities it exploits.

<x-figure src="content/01-vision/figures/ill-posed.js"
  caption="One measurement, three unknowns. Move reflectance and illumination in opposite directions and the receptor reading barely changes — a dark surface brightly lit and a light surface dimly lit are, at this receptor, identical. Compare §3.1, where the same shape of problem has five unknowns and no straight lines to help recover the geometry.">
</x-figure>


This is the first place a naive efficient-coding framing needs care. Efficient coding says *represent the input faithfully*. But the input is not what the animal cares about — the causes behind it are. A system that perfectly transmitted retinal intensities while discarding the information needed to separate reflectance from illumination would be an excellent codec and a useless visual system.

## What is actually being estimated

It helps to be concrete about the estimation targets, because they have different structure and, as later modules show, different modalities specialise in different ones.

- **Identity** — what object is this? Requires invariance to position, scale, pose, and illumination. A categorisation problem in a space whose natural coordinates are unclear.
- **Location and layout** — where is it, in three dimensions? Requires depth from stereo, motion parallax, and pictorial cues.
- **Material** — what is it made of? Gloss, translucency, roughness.
- **Motion** — what is moving, how fast, and is any of it me?

<x-callout class="x-callout is-key">
<div class="x-callout-title">Hold on to this split</div>
Identity and location are computationally different problems, and vision devotes largely separate machinery to them. When we reach §3.1 we will ask whether olfaction faces the same split — and find that it does, more sharply than vision, but with almost no agreement about where the second stream lives.
</x-callout>

## The loss function, and why vision's is unusually symmetric

Vision's loss is close to symmetric and open-ended. Misjudging a distance by 10% is roughly as costly whichever direction you err, and the same visual representation serves navigation, foraging, social behaviour, and tool use.

This matters more than it sounds. **A sense whose output feeds many unrelated downstream uses cannot afford to collapse distinctions**, because a distinction discarded for one purpose may be exactly what another needs. Vision therefore preserves metric structure: it tells you not just that two things differ but by how much and in what direction.

Compare gustation, whose loss is wildly asymmetric — a false negative on a toxin is fatal, a false positive on a nutrient costs a meal — and which correspondingly collapses hundreds of bitter compounds onto one axis. Same molecular machinery, opposite design, because the task differs.

Where olfaction sits on this axis is genuinely open, and is one of the more interesting questions the comparison raises.

## The deadline

Behaviourally relevant vision operates on the scale of a saccade: roughly 250–350 ms between fixations — about three per second — with useful object categorisation available within about 150 ms of stimulus onset. The system cannot afford lengthy iterative inference; whatever it computes, it computes largely in a feedforward sweep with recurrence refining rather than establishing the answer.

Deadlines recur throughout the course as a design constraint that is too often left out of normative accounts. A theory that predicts the optimal estimator without asking whether it can be computed in time is not yet a theory of the biology.

<x-predict>
<script type="application/json">
{
  "id": "m01.s01.p1",
  "contentRev": 1,
  "prompt": "Vision preserves metric structure — it reports not just that two greys differ but by how much. Predict what feature of the *task* forces this, and then name a sensory system that faces the opposite pressure and should therefore collapse distinctions. Justify from the loss function, not from the biology.",
  "placeholder": "What is it about the task that requires metric structure?",
  "reveal": "The forcing feature is that the output has many unrelated consumers and the set of future uses is open-ended. Any distinction the system discards is unavailable to every downstream process forever, so when you cannot enumerate the uses in advance, preserving metric detail is the safe policy.\n\nThe opposite pressure arises when there is essentially one decision with a known, asymmetric loss. Gustation is the clean case: the decision is ingest-or-reject, the loss is grossly asymmetric, and the space of toxins is open-ended and unlearnable in advance. Under those conditions broad, collapsed detection is *better* than fine discrimination, because it generalises to poisons the animal has never met. Roughly twenty-five bitter receptor types converge onto a single perceptual axis, and that is a design decision rather than a chemical limitation.\n\nThe question this sets up for later: which olfactory distinctions are worthless in the same way, and does the system collapse them? The prediction is that innate-valence pathways should look taste-like and categorical, while identity pathways preserve distinctions — which is close to what the Drosophila lateral horn versus mushroom body dissociation shows."
}
</script>
</x-predict>

## Where this leaves us

The visual system's problem is to invert an ill-posed mapping, fast, preserving metric detail, using the statistical regularities of natural scenes as the constraint that makes inversion possible.

Everything in the next three sections is about how it exploits those regularities. §1.2 characterises them; §1.4 asks how the receptor array is arranged to sample them; §1.5 asks what the first circuit does with the result.
