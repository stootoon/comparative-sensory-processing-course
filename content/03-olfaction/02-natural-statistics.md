---
id: m03.s02
title: The signal and its natural statistics
lede: Vision's ensemble is characterised, stationary, and spatial. Olfaction's is intermittent, non-stationary, and carries its spatial information in the time domain. This section is the centre of the module.
estimatedMinutes: 26
---

§1.2 could open by stating the power spectrum of natural images, because that spectrum is known, measured, and stable. This section cannot do the equivalent, and the reason is not that nobody has tried.

There are two separate ensembles olfaction would need, and they are in very different states.

## Ensemble one: chemical space, and why it resists

To run the efficient-coding programme on odour identity you need the distribution over *what molecules co-occur in natural scenes*. This is largely uncharacterised, for reasons that are structural rather than incidental:

- There is no agreed metric on chemical space. Physicochemical descriptors number in the thousands, and no principled subset predicts perceptual similarity well.
- Sampling natural odour scenes with ground-truth composition requires analytical chemistry on air samples — vastly harder than pointing a calibrated camera at a forest.
- Perceptual similarity is not a smooth function of structural similarity. Molecules differing by one functional group can smell entirely unrelated.

The most promising line reframes the question: rather than seeking structure in chemistry, look at **co-occurrence statistics**. Compounds co-occur because they are produced by shared biochemical pathways, so the natural statistics of odour have a hierarchical structure inherited from metabolism. Odours and human perceptual descriptions can then be mapped into a three-dimensional *hyperbolic* space, whose geometry is the natural one for hierarchical, tree-like relationships [@zhou2018].

That is a genuinely different proposal from anything in vision — not "the space is Euclidean with these axes" but "the space is not Euclidean at all".

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why the missing ensemble is the binding constraint</div>
Every criterion from §0.2 for a mature normative theory can be met for olfaction <em>except the first</em>. There is no measured natural ensemble to optimise against. Until there is, olfactory efficient-coding arguments are constrained to be qualitative, and this is a data problem before it is a theory problem.
</x-callout>

## Ensemble two: plume statistics, which we *do* know

Here the picture is much better, and this is where the module's real content is.

Odour is transported by turbulent flow. That single fact determines nearly everything about the temporal structure of the signal, and turbulence is well characterised [@celani2014].

**The signal is intermittent.** Not a smooth gradient but a sequence of *whiffs* separated by *blanks* — periods of no detectable odour at all. Close to a source, odour is present a large fraction of the time; far away, it may be present a few percent of the time. Intermittency is a strong function of distance.

**Whiff and blank durations follow power laws.** No characteristic timescale, over several decades. The distribution of blank durations is particularly informative about distance.

**Concentration distributions are heavy-tailed.** Mean concentration is a poor summary; the mode is often near zero while rare large excursions dominate the mean. An animal averaging concentration over a long window would discard most of the information.

**There are no useful spatial gradients at the scale of an animal.** This is the crucial negative result. Chemotaxis by gradient ascent — the bacterial strategy — fails at macroscopic scales because turbulent mixing destroys monotonic gradients.

<x-figure src="content/media/turbulent-odor-plume-dns.jpg"
  caption="A turbulent odour plume from direct numerical simulation, with the concentration time series a fixed sensor would see. Note that there is no smooth gradient anywhere — the plume is filamentous, and a sensor experiences it as intermittent whiffs separated by blanks. This is why gradient ascent fails and why the informative structure is temporal."
  credit="Rando M, James M, Verri A, Rosasco L, Seminara A (2025), eLife 13:RP102906, Figure 1. CC BY 4.0."
  source="https://elifesciences.org/articles/102906">
</x-figure>

Locating a source by climbing a concentration gradient is not available, which is why search strategies based on information gain rather than gradient ascent reproduce the casting and zigzagging that real animals do [@vergassola2007].

## Where the spatial information actually lives

If there is no spatial gradient, where is the information about source location?

**In the temporal correlation structure.** Two sensors sampling nearby points, or one sensor sampling two chemicals, see fluctuations that are correlated to a degree that depends on the geometry of the sources. Molecules emitted together travel together and fluctuate together; molecules from separated sources decorrelate.

Recent work quantifies exactly how much spatial information the spectral components of these correlations carry [@tootoonian2025]. Computational fluid dynamics simulations of multi-source plumes in chaotic flow give an analytic handle on the Fisher information about source separation carried by each frequency band, and the result is not the intuitive one:

**High frequencies are more informative than low frequencies when sources are close** relative to the size of the large eddies in the flow.

That inverts the usual expectation. Low-frequency components carry the bulk of the power, so a system optimising for signal strength would weight them. But the *discriminative* information about source separation sits at high frequencies, because those are the components that decorrelate fastest with spatial separation.

<x-figure src="content/03-olfaction/figures/plume-vs-image.js"
  caption="Natural image statistics against plume statistics. Left: image power spectrum, scale-invariant and essentially unchanged by viewing distance. Right: plume temporal spectrum, whiff-duration distribution, and intermittency, all of which change shape with distance from source. Bottom: correlation between two sampling points against their separation. The point of the figure is the asymmetry — vision's spectrum is stationary and carries no distance information, while the plume spectrum's shape IS the distance signal.">
</x-figure>

<x-predict>
<script type="application/json">
{
  "id": "m03.s02.p1",
  "contentRev": 1,
  "prompt": "An olfactory receptor neuron's response to a concentration step has a time constant of roughly 100 ms. Natural plumes contain structure up to tens of hertz. Predict whether a mouse should be able to discriminate two odour sources on the basis of whether their fluctuations are correlated or anti-correlated at 40 Hz — and justify quantitatively before reading on.",
  "placeholder": "Can it be done, and if so how?",
  "reveal": "It can. Mice discriminate correlated from anti-correlated odour fluctuations at frequencies up to 40 Hz, and this correlation information is present in the activity of mitral and tufted cells [@ackels2021]. Ten-millisecond odour pulse patterns produce distinct responses in receptor neurons — an order of magnitude faster than the single-neuron time constant naively allows.\n\nThere are two distinct population mechanisms that could recover this, and they are worth separating because they predict different things.\n\n**Kinetic heterogeneity.** Receptor neurons are not identical. A population with a spread of time constants acts as a filterbank, and fast components of the population retain high-frequency information even though the average is slow.\n\n**Pooling.** Averaging $n$ noisy sensors improves temporal precision as $\\sqrt{n}$. With thousands of receptor neurons converging per glomerulus, a population can resolve timing far finer than any member. This is precisely the mechanism behind hyperacuity in the electric fish jamming avoidance response, where behavioural sensitivity to sub-microsecond phase differences is built from neurons with millisecond precision — a solved precedent in another modality for exactly this problem.\n\n**The discriminating measurement:** does performance scale with the *number* of converging receptor neurons (pooling) or degrade when kinetic *diversity* is reduced (filterbank)? These come apart, and the experiment is doable."
}
</script>
</x-predict>

## Non-stationarity, and a normative argument for neurogenesis

§1.2 flagged that natural image statistics are strikingly stationary — the $1/f^2$ spectrum holds nearly everywhere — and that stationarity is what makes hard-wiring an efficient code viable.

Odour statistics are not stationary. Plume structure depends on wind speed, turbulence intensity, substrate, humidity, temperature, and time of day. The set of odorants present depends utterly on where the animal is. Both the chemical ensemble and the temporal statistics shift on timescales of minutes to seasons.

The non-stationarity runs deeper than weather, and there is a good argument that it is intrinsic to the modality. Photons, pressure waves and skin indentation are physical quantities with fixed properties; the statistics of light have not changed in the lifetime of any lineage. Odorants are *manufactured by other organisms*, which evolve — and evolve far faster than the physics of the other senses. The consequence is visible in the receptor genes themselves: odorant receptor families have diverged so rapidly that mammals, insects and nematodes use three families of independent evolutionary origin, with insect receptors sharing essentially nothing with mammalian ones beyond having transmembrane domains, and repertoire sizes ranging from ~60 in *Drosophila* to ~350 in leaf-cutter ants to ~1,700 predicted chemoreceptor genes in *C. elegans* [@kandel2021]. No other sensory transducer family behaves like this, because no other sense has a stimulus set that is itself under selection.

The normative consequence is direct: **a modality whose input statistics are non-stationary cannot hard-wire an efficient code.** It must estimate its input statistics continuously and re-tune. And if the ensemble is non-stationary on evolutionary as well as behavioural timescales, that pressure applies to the receptor repertoire as well as to the circuit — which is a prediction about gene families, not neurons, and it is met.

This may be the best available normative rationale for two otherwise puzzling features of the olfactory bulb: its extreme plasticity, and adult neurogenesis — the continuous addition of new granule cells throughout life, in a structure two synapses from the sensory surface. If the decorrelating transformation must track a moving target, then machinery for continuously rebuilding that transformation stops looking like a developmental oddity and starts looking like a requirement.

<x-figure src="content/media/mouse-bulb-20x.jpg"
  caption="Newly generated neurons (green) in the adult mouse olfactory bulb, against a neuronal marker (red). The bulb keeps adding neurons for the animal's whole life — something no other sensory structure at this depth does, and which looks gratuitous until you ask what it would take to keep an efficient code matched to statistics that will not hold still."
  credit="Jason Snyder, 2010. CC BY 2.0, reproduced unmodified apart from downscaling."
  source="https://commons.wikimedia.org/wiki/File:Mouse_olfactory_bulb_@_20x_(4864327869).jpg">
</x-figure>


<x-free-response>
<script type="application/json">
{
  "id": "m03.s02.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision's efficient-coding programme succeeded because natural image statistics were characterised first. Sketch what a comparable characterisation of natural odour statistics would require: what would you measure, how, and what would you do with it? Then state the single largest obstacle.",
  "modelAnswer": "A serious characterisation needs two things that do not currently exist together.\n\n**A natural odour-scene database.** Air samples from ecologically relevant environments, analysed by GC-MS for ground-truth chemical composition, sampled densely enough in time to capture plume dynamics and across enough environments to estimate variability. This is the direct analogue of the natural-image databases, and it is far harder: the sensor is expensive, slow, and cannot be pointed.\n\n**A receptor response model.** Even with composition, you need to know what the receptor array does with it — the affinity matrix mapping molecules to receptor activations. Partial versions exist for Drosophila and for subsets of mouse receptors, but coverage is thin and the mapping is nonlinear because of competitive binding and antagonism.\n\nWith both, the programme becomes: compute receptor-activation vectors across natural scenes, look at their covariance and higher-order structure, and derive the optimal code — the affinity spectra, the decorrelating transformation, the expected dimensionality of the central representation. Then check against biology.\n\n**The largest obstacle is the database.** Theory is not the bottleneck; the measured ensemble is. It is worth noticing that this is a tractable, if laborious, empirical problem rather than a conceptual impasse.",
  "rubric": [
    "Names the need for ground-truth chemical composition of natural scenes, not odorant panels",
    "Recognises that a receptor response model is separately required",
    "Notes the nonlinearity of mixture responses at the receptor as a complication",
    "Identifies the missing ensemble — not the theory — as the binding constraint",
    "Bonus: notes that non-stationarity means one ensemble may not suffice"
  ]
}
</script>
</x-free-response>
