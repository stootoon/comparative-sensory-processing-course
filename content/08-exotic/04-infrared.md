---
id: m08.s04
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

<x-mcq>
<script type="application/json">
{
  "id": "m08.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A wide aperture destroys resolution and admits energy; a narrow one preserves resolution and starves the sensor. The pit organ takes the wide aperture and deconvolves. What makes that the *right* trade here rather than an odd one?",
  "options": [
    {
      "text": "Blur applied by a known, fixed kernel is invertible and therefore loses no information in principle, whereas photons not collected are gone — so the recoverable choice is the one that keeps the energy.",
      "correct": true,
      "feedback": "This is the asymmetry, and it is the whole argument. A convolution with a known kernel is a linear transformation that is in principle invertible; the information is scrambled, not destroyed. Failing to absorb a photon is destruction. Given a slow thermal transducer whose noise floor is set by thermal fluctuation, energy is the binding constraint and blur is the payable one. The deconvolution is not heroic recovery from a bad design — it is the cheap half of a trade made in the right direction."
    },
    {
      "text": "Deconvolution is metabolically cheaper than building better optics, so the animal saves by computing rather than by focusing.",
      "correct": false,
      "feedback": "Correct under the assumption that the two options were both available and the choice was made on cost — and the cost claim is plausible, since neural tissue is reusable and a lens is not. But it misidentifies what is binding. Even with unlimited developmental budget, a narrow aperture would not fix the problem: the sensor would then be photon-starved at the thermal noise floor, and no amount of optical quality recovers a signal that was never absorbed. Cost is real; invertibility is what makes the trade correct."
    },
    {
      "text": "The blur is spatially uniform, so it can be inverted by a single fixed operation applied everywhere.",
      "correct": false,
      "feedback": "Partly correct, and it names a genuine convenience — shift-invariance is what lets the inverse be a single kernel rather than a position-dependent bank of them, and it is one reason a neural implementation is plausible. But uniformity is a fact about *how easy* the inversion is, not about whether inverting is the right thing to do. A spatially varying but known kernel would still be invertible and the trade would still be correct, only more expensive."
    },
    {
      "text": "Infrared wavelengths are too long to be focused sharply at this scale, so the wide aperture is forced by physics rather than chosen.",
      "correct": false,
      "feedback": "Correct under the assumption that the limit is diffraction, which is the right instinct to check and the wrong answer here. Thermal infrared wavelengths are around 10 μm and the pit is millimetres across, so diffraction is not what sets the resolution — the geometric spread from a large aperture over a short path is, by orders of magnitude. The design is a choice within physics, not a corner physics forced it into, which is what makes it evidence about what the animal is optimising."
    }
  ]
}
</script>
</x-mcq>

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

<x-free-response>
<script type="application/json">
{
  "id": "m08.s04.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The deblurring reframing is attractive, and §9.1 warns that attractive reframings are how unfalsifiable stories get in. Hold it to that standard. State what observation would refute the claim that olfactory localisation is inference under a transport model, and say honestly whether that observation is currently obtainable.",
  "modelAnswer": "**What the claim commits to.**\n\nIf localisation is inference under an internal model of transport, then performance depends on the *match* between the animal's model and the actual transport, not merely on signal quality. That is the discriminating commitment, and it separates the account from gradient-following, from infotaxis-style search [@vergassola2007], and from a pure detect-and-cast heuristic — all of which predict that performance depends on how much odour arrives, not on whether the statistics are the ones the animal expects.\n\n**The refuting observation.** Manipulate the flow regime so that the plume's statistics depart from anything the animal has experienced, while holding total odour delivery, contrast, and encounter rate matched. The account predicts degradation, and specifically *mis-directed* errors — the animal should localise confidently and wrongly, in the direction its wrong model implies — rather than a symmetric loss of precision. If performance is unchanged under model mismatch, or degrades only in the way reduced signal would predict, the deblurring account has failed and the animal is running something model-free.\n\nA second, sharper form: if the account is right, prior exposure to a particular flow regime should *improve* localisation in that regime and *impair* it in another, relative to a naive animal. A model-free strategy predicts no such transfer cost. That is a within-animal design and it is the cleaner test.\n\n**Is it obtainable? Partly, and the gap is instructive.**\n\nThe manipulation is feasible — wind tunnels with controllable turbulence exist and plume statistics can be measured and varied [@celani2014; @tootoonian2025]. What is not obtainable is the thing the pit organ has and olfaction does not: **knowledge of the kernel the animal is actually assuming.** For the snake, the point-spread function is fixed by anatomy, so the predicted computation is fully specified and the model is testable in detail. For olfaction, the kernel is stochastic and non-stationary, so the account predicts only that *some* internal model is in use, and any pattern of degradation can be accommodated by proposing that the animal's model differed from the one assumed.\n\n**So the honest verdict is that the reframing is currently a well-posed research programme rather than a testable hypothesis.** It becomes testable exactly when someone specifies the assumed transport model concretely enough that a mismatch can be constructed on purpose — which is a version of the same missing measurement that blocks the coding calculation (§3.11). That is worth stating plainly rather than letting the elegance of the analogy carry it.",
  "rubric": [
    "Identifies model-match, not signal quality, as the account's discriminating commitment",
    "Proposes a manipulation that varies transport statistics while holding odour delivery matched",
    "Specifies the predicted signature — directed error under mismatch, or a transfer cost after prior exposure — rather than mere degradation",
    "Names the disanalogy: the pit's kernel is fixed and known, the plume's is stochastic and unspecified",
    "Concludes that the account is not yet falsifiable in the §0.2 sense and says so without hedging",
    "Bonus: connects the unspecified kernel to the missing chemical ensemble (§3.11)",
    "Bonus: distinguishes the prediction from gradient-following and from infotaxis-style search"
  ]
}
</script>
</x-free-response>
