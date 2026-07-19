---
id: m06.s04
title: The receptor array
lede: Ten sensors total. Ordered, metric, and orthogonal — a near-perfect basis for the variable being measured. Vestibular is the low-dimensional, well-conditioned extreme of the course's main axis.
estimatedMinutes: 12
---

## Ten channels

Three semicircular canals and two otolith organs per ear: **ten sensors in total**, against the retina's $10^8$ and the cochlea's 3,500.

The array is **ordered** and **metric** in an unusual sense — not spatially, but *geometrically*. Each canal is oriented along a particular axis in head coordinates, and the three canals on one side are approximately mutually orthogonal.

<x-figure src="content/media/vestib-semicircular-canal-planes.jpg"
  caption="The three semicircular canals in their planes within the head, with the ampulla and afferent responses. The near-orthogonality is the point: three canals form a basis for three-dimensional rotation, so ten sensors resolve the variable completely. Compare olfaction's ~1,000 broad overlapping channels for a space with no known basis at all."
  credit="Wiboonsaksakul KP, Leavitt Brown OME, Cullen KE (2024), eLife 13:e99516, Figure 1. CC BY 4.0."
  source="https://elifesciences.org/articles/99516">
</x-figure>


That orthogonality is the point. **The array is a basis for the space it measures.** Angular velocity is a three-dimensional vector; three orthogonal canals resolve it completely. Linear acceleration is a three-dimensional vector; the two maculae with their varied hair-cell orientations span it.

<x-callout class="x-callout is-key">
<div class="x-callout-title">When the receptor array is a basis</div>
This is the extreme case that anchors one end of the course's dimensionality axis, and it clarifies what the other modalities are doing.

<strong>Vestibular:</strong> the stimulus is a 3-D vector with known physics. Three orthogonal sensors resolve it exactly. No redundancy needed, no combinatorics, no learning. The array is <em>designed for the variable</em>.<br>
<strong>Audition:</strong> the stimulus is 1-D but unbounded in structure. ~3,500 narrow channels tile it.<br>
<strong>Vision:</strong> 2-D spatial, sampled densely; 3-D spectral, sampled with three broad channels.<br>
<strong>Olfaction:</strong> the stimulus space has no known dimension, no basis, and no agreed metric. ~1,000 broad channels, disordered.

Read down that list and the pattern is that <strong>the array's structure mirrors what is known about the stimulus space</strong>. Vestibular knows exactly what it is measuring, so it uses the minimum sufficient basis. Olfaction does not know, so it uses many broad overlapping channels — which is the right strategy under ignorance, and is exactly what a compressed-sensing or random-projection argument recommends.

<strong>Olfaction's disorder may be a rational response to not knowing the coordinates</strong>, rather than a failure to find them.
</x-callout>

## Push–pull

The canals work in **coplanar pairs across the two heads**: the left horizontal canal pairs with the right horizontal canal, and rotation that excites one inhibits the other.

Push–pull doubles sensitivity and, more importantly, cancels common-mode signals — temperature changes, systemic noise — that affect both sides equally. It is the same trick as differential amplification.

Note that olfaction has a bilateral arrangement too, and it is one candidate for the location stream (§3.8). But the olfactory version cannot be push–pull in the vestibular sense, because the two nostrils are not measuring opposite signs of the same variable — they are sampling nearly the same air a few millimetres apart. The comparison sharpens what bilateral olfactory comparison could and could not achieve.
