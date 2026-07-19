---
id: m12.s04
title: Imports from the exotic senses
lede: Four natural experiments, each isolating a variable the familiar senses confound. Two of them solve a problem olfaction is still arguing about, and one converts an ill-posed question into a problem with an existing literature.
estimatedMinutes: 28
---

The exotic senses are in this course because they populate regions of the design space the familiar five leave empty. Each holds constant something the classical modalities vary, and the result is a set of controlled comparisons that no amount of work within vision or olfaction could produce.

Three of the four supply direct imports. The fourth supplies a warning.

## 12.18 From §9.2 — cancellation, with the mechanism known

**Imported:** electrosensory lobes learn a **negative image** of the animal's own electric organ discharge and subtract it, leaving only externally-caused deviations. The mechanism is characterised down to the synapse: anti-Hebbian plasticity at a broad, delayed parallel-fibre input onto principal cells.

**Candidate analogue:** the bulb has that architecture. Granule cells carry broad, delayed cortical and centrifugal feedback onto mitral cells — the same configuration in the same position relative to the principal neuron.

**Why this import is stronger than §12.14's.** The vestibular version establishes that cancellation happens and matters. The electrosensory version supplies the **learning rule and the timecourse**, which converts a qualitative expectation into a quantitative prediction with a number attached.

<x-figure src="content/media/oa-ell-circuit.jpg"
  caption="The circuit the import rests on. Receptor input arrives on one pathway; a broad, delayed input carrying prior activity arrives on another, and anti-Hebbian plasticity between them builds the negative image. Set this beside the bulb — granule cells carrying massive cortical feedback onto mitral cells — and the architectures correspond component for component. Architectural resemblance is not function, which is exactly why the timecourse experiment below is worth running rather than assuming."
  credit="Hofmann V, Chacron MJ (2019). CC BY 4.0."
  source="https://doi.org/10.3389/fnint.2019.00052">
</x-figure>

**The disanalogy:** the electric fish predicts a signal it generates entirely — the discharge is its own, with known timing and amplitude. The olfactory equivalent is a background odour the animal does not generate, so the prediction is of an environmental constant rather than of a self-caused signal. That is closer to the cerebellum-like structures' handling of passive predictable input, which is also documented, so the import survives — but it predicts learning from environmental statistics rather than from efference copy.

**Prediction, with a timescale:** introduce a novel constant background odour and measure how bulbar responses to it evolve.

- **Negative-image learning** predicts the response declines over **minutes**, requires plasticity at the granule–mitral synapse, and — the diagnostic part — produces an **off-response when the background is removed**, because the learned negative image is briefly unopposed.
- **Simple adaptation** predicts decline over **seconds**, no plasticity dependence, and no off-response.

The off-response is the cleanest discriminator, because it is a positive signature rather than a difference in rate, and it is hard to produce by any account other than subtraction of a learned prediction.

<details class="x-deeper">
<summary>Why the off-response is diagnostic — algebra</summary>

Let the input be $s(t)$ and the learned prediction $\hat{s}(t)$, with the principal neuron reporting $r(t) = s(t) - \hat{s}(t)$, rectified.

Under a constant background $s = b$ for $t > 0$, the prediction converges $\hat{s} \to b$ with time constant $\tau_{\text{learn}}$ set by the plasticity rule, and $r \to 0$. So far this is indistinguishable from adaptation, which also drives $r \to 0$.

Now remove the background at $t = T \gg \tau_{\text{learn}}$. The input drops to $s = 0$ while the prediction is still $\hat{s} \approx b$, so

$$r(T^+) = 0 - b = -b$$

which after rectification appears as a suppression below baseline in cells with spontaneous activity, and as an excitatory off-response in the complementary population. The prediction then decays back to zero over $\tau_{\text{learn}}$ again.

Pure adaptation has no stored $\hat{s}$. Its state variable is a gain or a threshold that relaxes back toward baseline, and removing the input produces no signed error — the response simply returns to spontaneous from below, with no overshoot.

**The signature is therefore an overshoot whose magnitude scales with $b$ and whose decay time matches the acquisition time.** That double match — magnitude scaling with background strength, and symmetric acquisition and release timescales — is very difficult to produce by adaptation, and it is measurable in a single experiment.
</details>

## 12.19 From §9.2 — hyperacuity from slow elements, with the scaling worked out

**Imported:** the jamming avoidance response achieves **sub-microsecond behavioural precision from neurons with millisecond precision**. The mechanism is pooling across a large afferent population, and the analysis has been done properly — including the ceiling imposed by correlated noise, which is the part usually left out.

**Candidate analogue:** olfaction's sensor–signal mismatch. Receptor neurons have time constants of order 100 ms; mice discriminate correlated from anti-correlated odour fluctuations up to 40 Hz [@ackels2021]. That is roughly an order of magnitude of temporal precision that has to come from somewhere.

**Why this is the most reassuring import in the course.** The problem is *solved elsewhere*, with the mechanism known and the scaling analysis published. Olfaction's mismatch is not a paradox requiring an exotic explanation; it is an instance of a class of problem with a known solution. The open question is narrow: does olfaction use the same solution?

**The disanalogy:** electroreceptive pooling operates on a signal whose statistics are stationary and self-generated, so the correlation structure of the noise is knowable. Olfactory pooling operates on receptor neurons whose noise is partly shared — they sample the same turbulent parcel of air — and shared noise is exactly what caps the pooling benefit. The ceiling may bind much sooner in olfaction.

**Prediction, and the two mechanisms come apart cleanly:** does fast-fluctuation discrimination scale with the **number** of converging receptor neurons, or degrade with reduced kinetic **diversity**?

- *Pooling* predicts performance improving as $\sqrt{n}$ with convergence number, up to the correlated-noise ceiling, and no dependence on kinetic heterogeneity.
- *Filterbank* predicts performance depending on the spread of time constants in the population, and relative indifference to $n$ once the fast tail is populated.

Both are manipulable — convergence number via genetic reduction of receptor neuron populations, kinetic diversity via selective expression — and they are not exclusive, so the informative measurement is again the relative contribution.

<x-mcq>
<script type="application/json">
{
  "id": "m12.s04.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Pooling n independent sensors improves temporal precision as √n. Glomerular convergence in mouse is roughly 1000:1. Why does that not immediately settle the question of how olfaction resolves 40 Hz fluctuations?",
  "options": [
    {
      "text": "Because the converging receptor neurons sample the same air and therefore share noise, which caps the pooling benefit well below √n.",
      "correct": true,
      "feedback": "Correct, and this is the term the naive calculation omits. The √n law requires independent noise. Receptor neurons converging on one glomerulus express the same receptor and sample the same turbulent parcel, so a substantial fraction of their fluctuation is common — and common-mode noise does not average away at any n. The electroreception analysis includes this ceiling explicitly, which is exactly why it is the right precedent to import rather than the bare √n scaling."
    },
    {
      "text": "Because √1000 ≈ 32 is not enough to bridge a factor of ten in time constant.",
      "correct": false,
      "feedback": "This is the answer under the assumption that the required improvement exceeds what pooling can deliver — but the arithmetic goes the other way. A factor of ~32 comfortably exceeds the order of magnitude needed, which is precisely why pooling is an attractive hypothesis. The problem is not that the ceiling from n is too low; it is that the effective n is not 1000 once shared noise is counted."
    },
    {
      "text": "Because pooling improves amplitude signal-to-noise but not temporal precision, which is a separate quantity.",
      "correct": false,
      "feedback": "This is the answer under the assumption that the two are independent, and it is a reasonable-sounding distinction that does not hold. For a threshold-crossing or latency readout, temporal precision is directly inherited from amplitude SNR on the rising phase — the jitter is the amplitude noise divided by the slope. Pooling improves the SNR and therefore the timing. The electric fish result is the existence proof that it does."
    },
    {
      "text": "Because the 1000:1 figure is a convergence ratio onto the glomerulus, not onto a single mitral cell.",
      "correct": false,
      "feedback": "This is a genuinely sharp observation and it is true — each mitral cell samples one glomerulus, and the relevant n for a single readout neuron depends on how that glomerular signal is distributed. But it does not answer the question, because the sister mitral cells of one glomerulus can be pooled downstream, restoring the count. The binding constraint is correlated noise, which no amount of downstream pooling recovers from."
    }
  ]
}
</script>
</x-mcq>

## 12.20 From §9.4 — acuity as deconvolution

**Imported:** the pit organ of an infrared-sensing snake is a pinhole camera with a very large aperture, so its optics are catastrophically blurred — far too blurred to support the localisation accuracy the animal demonstrably has. The resolution is that the nervous system **deconvolves**: the blur kernel is fixed and knowable, so acuity is recovered computationally rather than optically [@gracheva2010].

**Candidate analogue, and this is the most conceptually valuable move in the section.** The plume is a blur kernel applied to a point source. Turbulent transport takes a compact source and spreads it in space and time according to statistics that are, at least in principle, characterisable. Localisation is then **deblurring under a transport model**.

**Why this matters more than it first appears.** It converts "where is the source" from an ill-posed question with no obvious formalism into **blind deconvolution**, which is a well-defined problem with a substantial literature, known algorithms, and known conditions for identifiability. That is a large gain in tractability for the cost of a reframing.

**The disanalogy, and it is the one that decides how far the import goes.** The snake's blur kernel is fixed by its own anatomy. The plume's kernel is a random field that changes with wind, distance, and time — so this is *blind* deconvolution with a non-stationary kernel, which is much harder than the snake's problem and sits near the edge of what is identifiable at all.

Whether the problem is well-posed depends on how much structure the kernel has. Turbulent transport is highly structured, which is what makes the reframing worth pursuing rather than merely elegant.

**Prediction:** manipulate flow conditions so that the actual transport statistics differ from those the animal has recently experienced, and localisation should fail **in a direction predictable from the mismatch between the assumed and actual kernels** — not merely get worse. A system deconvolving under a model makes *systematic* errors when the model is wrong; a system using a model-free strategy such as gradient ascent or infotaxis makes *unsystematic* errors. The direction of the bias is the signature, and it distinguishes model-based inference from model-free search in a single experiment.

<x-predict>
<script type="application/json">
{
  "id": "m12.s04.p1",
  "contentRev": 1,
  "prompt": "Infotaxis reproduces the casting and zigzagging real animals do while searching a plume, without any model of transport [@vergassola2007]. The deconvolution framing above proposes something quite different — an internal model of the blur kernel. Both predict successful search. Say how you would distinguish them, and be specific about what each predicts when the flow is manipulated mid-trial.",
  "placeholder": "What manipulation separates model-based from model-free search?",
  "reveal": "**The two are not distinguished by whether search succeeds**, which is why the behavioural literature has not settled this. Both produce casting, both produce zigzagging, and both localise sources. Matching the trajectory statistics of real animals is weak evidence for either.\n\n**The discriminating manipulation is a mid-trial change in flow conditions**, and the two accounts predict different *kinds* of failure.\n\n*Infotaxis is model-free in the relevant sense.* It maintains a posterior over source location and moves to maximise expected information gain. Change the flow and the posterior is updated by subsequent observations; the search degrades gracefully and the errors are **unbiased** — the animal takes longer but does not systematically go to the wrong place.\n\n*Deconvolution under a transport model* assumes a kernel. Change the flow without giving the animal time to re-estimate, and the assumed kernel is now wrong in a specific way, so the inferred source position is wrong in a **specific, predictable direction**. If the true plume is wider than assumed, the source is inferred too close; if the flow has veered, the bearing estimate is displaced by an amount computable from the veer.\n\n**So the measurement is the bias, not the error magnitude.** Run many trials with a controlled step in wind direction or turbulence intensity partway through, and ask whether the resulting localisation errors have a mean displaced in the direction the kernel mismatch predicts, or merely a larger variance.\n\n**Two things worth noting.** First, these are not exclusive — a plausible system does infotaxis-like search using a likelihood that embeds a transport model, in which case you would see both signatures and the model contributes the likelihood rather than a point estimate. Second, the experiment has a built-in control: after enough post-step trials the animal should re-estimate the kernel, so **the bias should decay with a timescale that is itself informative** about how fast transport statistics are tracked. That timescale is the quantity §12.13's deeper box argues is set by the drift rate of the statistics, so the same experiment measures it."
}
</script>
</x-predict>

## 12.21 From §9.5 — the warning

Magnetoreception is the low-dimensional extreme: a sense with essentially one or two behaviourally relevant variables, and — after decades of work — no agreed transduction mechanism.

**The import is not a technique but a caution**, and it is aimed squarely at the temptation the rest of this capstone creates.

Magnetoreception has had no shortage of normative reasoning. The task is clear, the physics is constrained, the candidate mechanisms are enumerable, and the optimal strategies are derivable. None of that produced the answer, because the bottleneck was never the theory. It was that nobody could identify the receptor.

**What this warns against.** This capstone lists a great many experiments that follow from normative arguments, and the arguments are good. But every one of them presupposes that the relevant biology has been identified — that the cells being recorded are the cells doing the computation. Olfaction's periphery is well characterised, so this is a mild worry at the bulb. It is a much larger worry for the structures §12.16 and §3.8 point at, because **a dorsal stream that has not been found may not have been found because it is not there, or because nobody has recorded in the right place.** Those two are not distinguishable by any amount of theorising.

The honest position is that the comparative method is very good at generating sharp questions and has no special power to locate the tissue that answers them.

<x-callout class="x-callout is-key">
<div class="x-callout-title">What the exotic senses were for</div>
Each held constant something the familiar five vary, which is what made them worth a module.

<strong>Electroreception</strong> holds the stimulus constant and self-generated, which is what makes cancellation measurable — the prediction is exactly known, so the residual is exactly interpretable. In every other modality the predicted component has to be estimated, and the estimate contaminates the measurement.

<strong>Echolocation</strong> holds the receptor array fixed while the mapped variable is <em>derived</em> — bats build orderly cortical maps of echo delay, a computed quantity the array never measures. That is the existence proof licensing §12.2's search for an olfactory map of a derived variable, and without it the search would be unmotivated.

<strong>Infrared</strong> holds acuity high while optics are terrible, isolating computation from sensor quality, and supplies the deconvolution framing.

<strong>Magnetoreception</strong> holds the task simple while the mechanism stays unknown, isolating the theory bottleneck from the biology bottleneck — and demonstrating that solving the first does not solve the second.

Not a curiosity cabinet. Four controls that the classical modalities cannot supply, because in the classical modalities these variables are confounded.
</x-callout>

## What the exotic senses changed

Two of the four supplied solutions to problems olfaction is still arguing about, with mechanisms and timescales attached rather than in outline. The cancellation experiment and the pooling-versus-filterbank experiment are both directly runnable, and both came from a fish.

The infrared import did something different and arguably more valuable: it reframed source localisation as blind deconvolution, which moves it from a problem with no formalism to a problem with a literature. Reframings of that kind are rare and are the highest-leverage thing a comparative course can produce.

And magnetoreception supplied the counterweight the rest of the capstone needs. Sharp questions are not the same as answers, and a field can have excellent normative theory and remain stuck for thirty years on a question about tissue.
