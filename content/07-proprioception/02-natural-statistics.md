---
id: m07.s02
title: The signal and its natural statistics
lede: Natural postures occupy a small fraction of the space the joints allow. That low intrinsic dimensionality is what makes the coordinate transformation tractable — and it is the property olfaction most conspicuously lacks.
estimatedMinutes: 11
---

## Synergies and low-dimensional movement

The human arm has seven degrees of freedom; the hand has more than twenty. But natural movements do not explore that space uniformly.

Analyses of natural hand postures consistently find that a small number of components — often two or three — account for most of the variance. Grasping a mug and grasping an apple are far more similar than random points in joint space. Movement lives on a **low-dimensional manifold** embedded in a high-dimensional space.

<x-figure src="content/07-proprioception/figures/posture-manifold.js"
  caption="Natural postures on a low-dimensional manifold. Twenty degrees of freedom, and three components capture most of the variance — which is what makes the coordinate transformation of §7.5 tractable. Vision's spectral space compresses the same way. Whether natural odour scenes do is unmeasured, and it is the most consequential unknown number in olfaction.">
</x-figure>


The reasons are structural: anatomical coupling between digits, muscles spanning multiple joints, and the fact that behaviourally useful postures are a small subset of mechanically possible ones.

<x-callout class="x-callout is-key">
<div class="x-callout-title">High-dimensional space, low-dimensional ensemble</div>
This is the distinction §1.4 introduced for colour and it recurs here in its clearest form.

<strong>Vision:</strong> spectral space is infinite-dimensional; the natural ensemble is near-3-D. So three channels suffice, and metamerism costs almost nothing.<br>
<strong>Proprioception:</strong> joint space is ~20-D; the natural ensemble is ~3-D. So a low-dimensional recoding loses little.<br>
<strong>Olfaction:</strong> chemical space is high-dimensional and <strong>the natural ensemble appears to be too</strong>.

That last point is the crux, and it is worth being careful about because it is an empirical claim that has not been settled. If natural odour scenes turned out to occupy a low-dimensional manifold — as the co-occurrence work hints they might [@zhou2018] — then olfaction would be in the same position as vision and proprioception, and a low-dimensional recoding would be available.

<strong>The measurement that would settle it is the same one §13 keeps asking for.</strong> The intrinsic dimensionality of natural odour scenes is the single most consequential unmeasured number in olfaction.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m07.s02.p1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Suppose someone measures the intrinsic dimensionality of natural odour scenes and it comes back low — three or four components accounting for most of the variance across receptor activations in natural environments. Commit to what follows before reading on: which specific olfactory puzzles would that result dissolve, and which would it leave completely untouched?",
  "placeholder": "What does a low number buy, and what does it not buy?",
  "reveal": "**What it would dissolve.**\n\nThe dimensionality mismatch. A ~1,000-channel array reporting on a ~3-D ensemble is the same situation as three cone types on an infinite-dimensional spectral space, or twenty joint degrees of freedom on a 3-D postural manifold. A low-dimensional recoding would then cost almost nothing, and the bulb's massive convergence would have an obvious job: project onto the manifold and discard the rest.\n\nIt would also unblock the efficient-coding programme's first step. A measured, low-dimensional ensemble is exactly what §2.4 says olfaction is missing, and the retinal calculation could be attempted with the same machinery — although §1.12 flags the obstacle that receptor responses to mixtures are not linear [@shen2013], so the PCA move is not straightforwardly available even with the data in hand.\n\n**What it would leave completely untouched.**\n\nThe *metric* question. Low dimensionality is a statement about the ensemble's shape in receptor-activation space; it says nothing about whether distances in that space mean anything perceptually or behaviourally. You can have a tidy 3-D manifold whose coordinates correspond to nothing the animal cares about.\n\nThe *objective* question, which §6.11 argues is the real bottleneck. Knowing the ensemble is low-dimensional does not tell you what the system is trying to estimate. Vestibular's normative success came from a precisely stated estimation problem, not from a small ensemble.\n\nAnd the *confound*. Concentration, distance and transport history remain entangled regardless of how few dimensions the scene occupies (§3.1).\n\n**So the number is worth measuring — §7.2 calls it the single most consequential unmeasured quantity in olfaction — but it is one ingredient of several.** The co-occurrence work hints the answer might be low [@zhou2018]; nobody has settled it. If you predicted that a low number would resolve less than it appears to, that is the right instinct."
}
</script>
</x-predict>

## Statistics of the load

Proprioception must also handle external forces, and these are less well behaved: objects have unpredictable weights, surfaces unpredictable friction. Unlike body configuration, the environment's mechanical properties are not low-dimensional and not stationary.

Which is why the forward model must be **learned per object** (§4.9) rather than hard-wired. The body's dynamics are stable; the world's are not, and the split in what gets hard-wired versus learned follows that division exactly.
