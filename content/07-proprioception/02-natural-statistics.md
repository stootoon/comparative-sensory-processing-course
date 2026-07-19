---
id: m07.s02
title: The signal and its natural statistics
lede: Natural postures occupy a small fraction of the space the joints allow. That low intrinsic dimensionality is what makes the coordinate transformation tractable — and it is the property olfaction most conspicuously lacks.
estimatedMinutes: 11
---

## Synergies and low-dimensional movement

The human arm has seven degrees of freedom; the hand has more than twenty. But natural movements do not explore that space uniformly.

Analyses of natural hand postures consistently find that a small number of components — often two or three — account for most of the variance. Grasping a mug and grasping an apple are far more similar than random points in joint space. Movement lives on a **low-dimensional manifold** embedded in a high-dimensional space.

The reasons are structural: anatomical coupling between digits, muscles spanning multiple joints, and the fact that behaviourally useful postures are a small subset of mechanically possible ones.

<x-callout class="x-callout is-key">
<div class="x-callout-title">High-dimensional space, low-dimensional ensemble</div>
This is the distinction §1.4 introduced for colour and it recurs here in its clearest form.

<strong>Vision:</strong> spectral space is infinite-dimensional; the natural ensemble is near-3-D. So three channels suffice, and metamerism costs almost nothing.<br>
<strong>Proprioception:</strong> joint space is ~20-D; the natural ensemble is ~3-D. So a low-dimensional recoding loses little.<br>
<strong>Olfaction:</strong> chemical space is high-dimensional and <strong>the natural ensemble appears to be too</strong>.

That last point is the crux, and it is worth being careful about because it is an empirical claim that has not been settled. If natural odour scenes turned out to occupy a low-dimensional manifold — as the co-occurrence work hints they might [@zhou2018] — then olfaction would be in the same position as vision and proprioception, and a low-dimensional recoding would be available.

<strong>The measurement that would settle it is the same one §12 keeps asking for.</strong> The intrinsic dimensionality of natural odour scenes is the single most consequential unmeasured number in olfaction.
</x-callout>

## Statistics of the load

Proprioception must also handle external forces, and these are less well behaved: objects have unpredictable weights, surfaces unpredictable friction. Unlike body configuration, the environment's mechanical properties are not low-dimensional and not stationary.

Which is why the forward model must be **learned per object** (§4.9) rather than hard-wired. The body's dynamics are stable; the world's are not, and the split in what gets hard-wired versus learned follows that division exactly.
