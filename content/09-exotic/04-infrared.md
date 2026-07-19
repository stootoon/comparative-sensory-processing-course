---
id: m09.s04
title: Infrared sensing — acuity as deconvolution
lede: An imaging system with terrible optics and usable performance. The pit viper recovers resolution computationally, and reframing olfactory localisation the same way may be the single most generative import in this course.
estimatedMinutes: 14
---

Pit vipers, pythons and boas detect infrared radiation using a **pit organ**: a cavity on the face with a thin membrane suspended across it, densely innervated by trigeminal fibres.

<x-figure src="content/media/rattlesnake-facial-pit-organs.jpg"
  caption="The facial pit of a rattlesnake, between eye and nostril. A cavity a few millimetres across, with a suspended membrane — an imaging device with an aperture far too large for its focal length, which is exactly why its image is so badly blurred."
  credit="Ryansnow (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Heat_Sensing_Pits,_Rattlesnake.jpg">
</x-figure>


## A nociceptive channel repurposed

The transducer is **TRPA1**, an ion channel that elsewhere in vertebrates serves as a chemical irritant and pain receptor. In pit-bearing snakes, TRPA1 orthologues are the most heat-sensitive vertebrate ion channels identified, and radiant heating of the membrane opens them [@gracheva2010].

So the mechanism is thermal, not photochemical: the organ detects infrared by **being warmed by it**.

That has a consequence worth noting. Thermal detection is intrinsically slow and noisy — heating a membrane takes time, and thermal fluctuations are the noise floor. Like olfaction, this is a modality operating with a slow, noisy sensor.

## Terrible optics

The pit is a **pinhole camera with a very large aperture**. That combination is optically about as bad as it gets: a large aperture admits plenty of energy, which the sensitivity requires, but destroys spatial resolution because every point on the membrane is warmed by a wide cone of directions.

<x-figure src="content/media/crotaline-pit-organ-diagram.jpg"
  caption="Internal anatomy of the pit organ: the outer chamber, the suspended membrane, the inner air chamber that thermally isolates it, and the dense trigeminal innervation. The air chamber matters — it makes the membrane a thin, thermally isolated sheet that heats quickly, buying temporal resolution at the cost of nothing optical."
  credit="Serpent nirvana (Wikimedia Commons). Public domain."
  source="https://commons.wikimedia.org/wiki/File:Diagram_of_the_Crotaline_Pit_Organ.jpg">
</x-figure>


The image formed is therefore severely **blurred** — a heavily smeared version of the thermal scene. Direct readout would give resolution far worse than the animal's behaviour demonstrates.

## Recovering resolution computationally

The resolution is that the blur is **known**. The pit's geometry is fixed, so the point-spread function is fixed, and a smeared image formed by a known blur kernel can be **deconvolved**.

Analyses have shown that the blurred thermal image contains enough information to support the behavioural acuity the animals show, and that plausible neural implementations of the deconvolution exist. **The acuity is a computational achievement, not an optical one.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">The reframing this offers olfaction</div>
This is, I think, the most generative import available anywhere in the course, and it is worth stating carefully.

<strong>The pit organ's problem:</strong> a point source in the world produces a broad, smeared pattern on the sensor, via a known blur kernel. Recovering the source means deconvolving.

<strong>Olfactory localisation, restated the same way:</strong> a point source in the world produces a broad, intermittent, smeared pattern of odour, via turbulent transport. <strong>The plume is a blur kernel applied to a point source.</strong> Recovering source location means deblurring under a known transport model.

That reframing does real work:
<ul>
<li>It says localisation is <strong>estimation under a known forward model</strong>, not gradient-following — consistent with §3.2's negative result about gradients.</li>
<li>It says the informative structure is in <strong>the statistics of the smearing</strong>, which is exactly what the plume-correlation work quantifies [@tootoonian2025; @celani2014].</li>
<li>It predicts that performance should depend on how well the animal's internal model matches the actual transport — testable by manipulating flow conditions.</li>
</ul>

<strong>The disanalogy, and it is a real one:</strong> the pit's blur kernel is <em>fixed and deterministic</em>. The plume's is <strong>stochastic and non-stationary</strong> — it varies with wind, and it is different on every realisation. So olfaction cannot deconvolve a known kernel; it must do inference under a distribution over kernels.

That is harder, but it is a well-posed harder problem with a literature — blind deconvolution — rather than an ill-posed one. <strong>Which is the value of the import: it converts "how do animals localise odours" into a question with an existing mathematical framing.</strong>
</x-callout>
