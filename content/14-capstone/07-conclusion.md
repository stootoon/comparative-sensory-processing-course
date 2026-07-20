---
id: m14.s07
title: Conclusion — gaps, open questions, and where to read next
lede: What the comparison established, the four structural gaps behind every experiment in §14.6, the questions this course could not answer, and an annotated route into the literature.
estimatedMinutes: 30
---

§14.6 is a work plan. This section is the wider view: what the course actually established, what is missing at the level of the field rather than the experiment, and where to read next.

## What the comparison established

The secure results are **eliminations and reframings** rather than positive mechanistic proposals. That is not a shortfall. It is what comparison is good for — a well-chosen control tells you what a property is *not* sufficient for, and one case is enough to establish it.

**1. Disorder is not sufficient for difficulty.** Taste is unordered and low-dimensional and has a serviceable normative account. Whatever makes olfaction hard, mere absence of a metric on the receptor array is not it — §12.1 works through the audit and lands on a disorder × dimensionality interaction rather than either alone, and the interaction is an inference where the elimination is a fact.

**2. Thalamic bypass does not require antiquity.** Touch and proprioception both route traffic around the thalamus and neither is ancient. The antiquity explanation of olfaction's missing relay loses its generality, though §12.4 is careful that the replacement — deadline pressure — does not survive intact either.

**3. Neither ordering nor low dimensionality is sufficient for a theory to exist.** Nociception has an ordered array and few dimensions and no normative account at all. Whatever explains which modalities acquired theories, the two structural properties most often invoked do not do it on their own.

**4. Intrinsic difficulty and data requirement compound rather than compete.** No metric means no neighbourhood, hence no convolutional prior and no smoothing — so a system without a metric needs *more* measured input statistics to reach the same place, not fewer. The two most-discussed explanations of olfaction's position are usually posed as rivals, and this is the reason they are not.

**What the comparison did not establish** is which explanation of olfaction's position is correct. §0.0 set out four candidates — the unmeasured ensemble, intrinsic difficulty from dimensionality and the missing metric, mixtures not superposing at the receptor, and the field being younger and smaller. Evidence bearing on all four appears throughout the course. None is excluded, several could hold at once, and the sections below are laid out so you can weigh them rather than so they add up.

## The four structural gaps

Every experiment in §14.6 is downstream of one of these. They are gaps in how the field is equipped, not gaps in anyone's reasoning, and none of them is fixed by a single study.

They are presented in no order of importance, and that is deliberate. **Which gap binds depends on which explanation of olfaction's position is right, and that is exactly what is unresolved.** If the unmeasured ensemble is the operative constraint, Gap 1 is everything and the others are downstream. If the problem is that nobody has posed a solvable estimation problem, Gap 2 binds and a database arrives without a question to ask of it. If the field is mainly younger and smaller, Gap 4 is the cheap accelerant and the rest resolve themselves as the field grows. If mixture nonlinearity at the receptor is what breaks the imported machinery, none of the four is the right frame and the forward model described below is. Read the descriptions as four things that are true about how olfaction is equipped, and hold the ranking open.

### Gap 1 — There is no natural odour-scene database

The absence this course returns to most often, and the one whose consequences are easiest to trace.

Vision and audition have measured input ensembles. Natural image statistics and natural sound statistics were characterised — largely by people not thinking about coding theory at all — and only then could anyone derive retinal receptive fields [@atick1992; @srinivasan1982] or cochlear filter shapes [@lewicki2002; @smith2006]. §2.4 sets out the five-step template; steps 2 through 5 are ready for olfaction, and step 1 does not exist.

What would be needed: air samples from ecologically relevant environments, with ground-truth composition by GC-MS, sampled densely enough in time to capture plume dynamics and across enough environments to estimate variability. The obstacle is not conceptual. It is that the instrument is expensive, slow, and cannot be pointed, and that the work is unglamorous relative to its importance.

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="Measured ensemble against theoretical maturity, with olfaction in the bottom-left. The figure reports a correlation; treat it as a picture of the argument, not as evidence for it. Both axes are ordinal scores this course assigned to summarise its own prose, so the coefficient partly measures how consistently the author scored — and ten modalities sharing descent and a research culture are not ten independent draws, so it has no interpretable standard error. Nothing here rests on the number. What is worth looking at is the layout: switch the axes to ordered array against theory and gustation breaks the tidy story (§12.1); highlight nociception, which is ordered and low-dimensional and still has no account. Both are eliminations, and neither needs a correlation.">
</x-figure>

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why this is a coordination problem, not a science problem</div>
No individual lab is incentivised to build it. It would consume years, produce few papers during construction, and its value is almost entirely to <em>other</em> people's theories. This is the classic shape of a public good that does not get built by ordinary incentives.

It is worth being precise that the natural-image databases were not built this way either — they accumulated, from people collecting images for their own purposes, and were repurposed. That suggests a cheaper route than a dedicated effort: <strong>persuade the people already doing analytical chemistry on environmental air samples to publish raw compositions in a common format.</strong> Atmospheric chemistry, food science, and entomology are all generating this data for their own reasons, and none of it is organised for this use.
</x-callout>

#### Gap 1 is two objects, and the cheaper one is the one the theory needs

§14.5 (Import 28) splits it, and the split matters because the description above — a heroic decade-long effort — fits only one half.

Efficient-coding theory consumes the **unlabelled marginal** over natural odour scenes: compositions, their covariance, their temporal structure, with no annotation of any kind. A working device needs **labelled pairs**: composition alongside a source identity or a percept. Only the second requires annotation, human panels, or any agreement about what odours are perceptually, and that is where nearly all of the cost sits.

So the flagship calculation of §14.6's item 10 is blocked on the smaller object. It is a substantially cheaper thing to build than the field's usual framing of Gap 1 implies, and it could be assembled from data other fields are already generating. The risk is the default trajectory: the labelled version has a product at the end and therefore a funding case, so it is the one that gets built, and it answers none of the questions in this section.

#### The component nobody lists: a receptor forward model

There is a second omission, and it is a prerequisite rather than a refinement. A compositional ensemble cannot be pushed through a receptor array without a model of **composition → receptor activation**, and in olfaction that map is neither linear nor known, because mixtures do not superpose at the receptor [@shen2013].

The colour derivation worked partly because its analogous map is linear and measured [@buchsbaum1983]. The olfactory opponent-axis calculation that §14.1 wants cannot run on an odour-scene database alone, however good the database is — it needs this map as well. The forward model is measurable with existing methods and at a small fraction of the database's cost, and its absence from the field's accounting of what is missing is a small error with a large consequence: a lab could complete Gap 1 as usually described and still be unable to run the calculation it was built for.

### Gap 2 — The objective has not been stated precisely enough to solve

The subtler gap, and Import 15 argues it may be as binding as the first.

The vestibular system's normative success came from a precisely posed estimation problem: given canal and otolith signals with known noise and known head dynamics, estimate tilt and translation. Once posed that way the optimum is derivable and the neural test is obvious.

"Encode odour identity efficiently" is not a problem of that kind. It names no latent variable, no loss, and no noise model. §2.4's exercise reaches the same conclusion from the audition side: Lewicki could optimise for "encode the waveform" because in audition the signal *is* the thing, whereas in olfaction the receptor pattern is not the thing — the animal wants source identity and source location, which are latent causes. **The olfactory problem may not be an efficient-coding problem at all, but an inference problem**, and §0.1 warns that these give different answers.

This gap costs nothing to fix except thought, and where it has been fixed — posing source separation as an estimation problem with a named latent variable — it has produced quantitative results [@tootoonian2025].

### Gap 3 — The standard stimulus cannot reveal the codes being argued about

The methodological gap, and the one most likely to be invisible from inside the field.

Olfactory physiology overwhelmingly presents monomolecular odorants at steady concentration, from a fixed port, on the experimenter's clock. That paradigm holds constant nearly every variable the course's open questions are about:

- **Temporal structure** is absent, so a temporal code has nothing to encode (Import 8).
- **Source location** is fixed, so a location stream cannot be detected however strong it is (§11.4).
- **Plume statistics** are absent, so neurons tuned to intermittency or whiff frequency look unresponsive (Import 13).
- **Sniff timing** is decoupled from delivery, so any phase-referenced code is destroyed by design (Import 9).

This is why the course insists throughout on distinguishing **genuinely absent** from **never looked for**. Several of olfaction's most-discussed absences — no dorsal stream, no map, silent cells — are entirely consistent with a system whose relevant variables have been held constant by construction.

Touch went through exactly this correction. Labelled-line accounts of cutaneous coding came from artificial stimuli designed to isolate channels and weakened considerably once natural textures were used. That took decades, and it arrived only when someone changed the stimulus rather than the analysis.

### Gap 4 — There is no shared benchmark, so models are not comparable

The quietest gap. Vision has standard datasets and standard tasks, so a new model can be compared against an old one. Olfaction has neither, so results are reported on idiosyncratic odour panels with idiosyncratic behavioural assays, and the field cannot easily tell whether a new account is better than an existing one or merely different.

This is downstream of Gap 1 but not identical to it: even without a natural-scene database, an agreed benchmark set of receptor-response data plus behavioural discrimination results would let competing models be scored against each other. Assembling that requires no new measurements at all, only agreement.

<x-order>
<script type="application/json">
{
  "id": "m14.s07.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 23,
  "prompt": "Rank the four structural gaps by how expensive they are to close, cheapest first. This is deliberately not a ranking by importance — which gap matters most depends on which explanation of olfaction's position is right, and that is unresolved. Cost does not.",
  "items": [
    {
      "id": "a",
      "text": "Gap 1 — no natural odour-scene database with ground-truth composition."
    },
    {
      "id": "b",
      "text": "Gap 2 — the objective has not been stated as a solvable estimation problem."
    },
    {
      "id": "c",
      "text": "Gap 3 — the standard stimulus cannot reveal the codes under dispute."
    },
    {
      "id": "d",
      "text": "Gap 4 — no shared benchmark, so competing models cannot be scored."
    }
  ],
  "correctOrder": [
    "b",
    "d",
    "c",
    "a"
  ],
  "modelAnswerNote": "Cost is orthogonal to importance, which is why it can be ranked when importance cannot.\n\n**Gap 2 — stating the objective — is free.** It costs thought and nothing else. Writing down the latent variable, the loss and the noise model requires no new measurement, and where it has been done for source separation it produced quantitative results immediately.\n\n**Gap 4 — a shared benchmark — costs agreement.** Assembling published receptor-response data and behavioural results into a scored benchmark needs no new experiments at all. It is cheap in resources and expensive in coordination, which is a different kind of hard.\n\n**Gap 3 — changing the standard stimulus — costs apparatus and habit.** A wind tunnel, controlled plume geometry, sniff-triggered delivery. Real money and real rebuilding of protocols, but months rather than years, and several labs already have the pieces.\n\n**Gap 1 — the odour-scene database — costs years.** Analytical chemistry on air samples across many environments, with a receptor forward model to go with it. It cannot be closed by reasoning or by agreement, only by a large and unglamorous measurement effort.\n\n**What this ordering does not tell you is what to do.** If the ensemble explanation is right, the expensive gap is the one that matters and the cheap ones buy little. If the objective explanation is right, the free one is decisive. The honest position is that closing Gap 2 first is the best bet under uncertainty, precisely because it is free — not because the course knows it is the binding constraint."
}
</script>
</x-order>

## Questions the course could not answer

Distinct from §14.6's list, which is a set of costed experiments. These are the deeper questions the comparison sharpened without resolving, and none has an obvious first experiment.

**1. Is olfaction an efficient-coding problem or an inference problem?** The course leans toward inference and does not establish it. The two frameworks give different answers about what the bulb should do — decorrelate versus estimate latent causes — and the discriminating measurement is not obvious, because both predict some form of redundancy reduction as a by-product.

**2. What is the effective dimensionality of natural odour space?** The receptor count is ~1000. The *intrinsic* dimensionality of the natural ensemble is unmeasured, and §12.2 flags proprioception as the standing warning: 20 nominal degrees of freedom, about 3 effective. If odour scenes compress similarly, most of the course's dimensionality arguments would need restating.

**3. Who is the dominant consumer of the olfactory code?** §11.5 and Import 17 argue that the answer determines what the code should look like, and that if it is navigation, the psychophysics literature may be characterising a side effect with great care. This is a question about ecology as much as neuroscience, and it probably has different answers in rodents and primates.

**4. Why do the sampling rhythms all land at 4–12 Hz?** Sniffing, whisking, licking, saccades, the syllable rate of speech. Five behaviours, four modalities, one band. §11.1 gives three candidate explanations — biomechanical resonance, integration-time matching, and a shared central oscillator — which make opposite predictions about how the band should scale with body size. Nobody has run the comparative measurement, and it would be neither expensive nor difficult.

**5. Is there a normative account of adult neurogenesis?** The bulb keeps adding neurons for life, at two synapses from the sensory surface, and no other sensory structure at that depth does. The non-stationarity argument of §3.2 is the best available rationale and remains an argument rather than a result — §6.11 notes it must rest on an unsupervised objective, since olfaction has no equivalent of retinal slip to serve as a teacher.

**6. What is the olfactory bulb's granule cell layer actually computing?** Decorrelation, normalisation, negative-image subtraction, and coordinate transformation are all on the table, they are not exclusive, and the course reaches no verdict. Import 18's timecourse experiment discriminates one pair of them, which is a start rather than an answer.

## Where to read next

Full bibliographic details for everything cited are on the **Bibliography** page; this is a route through it rather than a substitute for it. Entries marked ★ are the ones to read first in each area.

### The normative framework itself

Start with the foundational statements rather than the reviews. Attneave [@attneave1954] and Barlow [@barlow1961] pose the redundancy-reduction idea; they are short and remain clearer than most modern restatements. Simoncelli and Olshausen [@simoncelli2001] ★ is the best single review of natural-scene statistics and neural representation, and is the right entry point if you read only one thing here. For the machinery, Dayan and Abbott's *Theoretical Neuroscience* is the standard text.

### Efficient coding where it worked

Laughlin [@laughlin1981] ★ is the cleanest demonstration in the literature: measure the contrast distribution, predict the response curve, compare. Read it before anything else in this section. Srinivasan et al. [@srinivasan1982] introduce predictive coding at the retina; Atick and Redlich [@atick1992] ★ derive the whitening-to-lowpass crossover; Dan et al. [@dan1996] confirm it in LGN. Olshausen and Field [@olshausen1996] is the sparse-coding result. For colour, Buchsbaum and Gottschalk [@buchsbaum1983] and Ruderman et al. [@ruderman1998] give the opponent-axis derivation that §14.1 wants an olfactory analogue of.

For audition, Lewicki [@lewicki2002] ★ and Smith and Lewicki [@smith2006] are the filterbank derivations, and are the direct template for the olfactory calculation nobody can yet run.

### Olfaction — structure and coding

Buck and Axel [@buckaxel1991] for the receptor family, Malnic et al. [@malnic1999] ★ for the combinatorial code. Uchida and Mainen [@uchida2003] ★ establishes the single-sniff deadline that constrains every proposed olfactory computation. Friedrich and Laurent [@friedrich2001] on decorrelation over time in the bulb; Bolding and Franks [@bolding2018] on concentration invariance being computed in cortex by recurrence; Haberly [@haberly2001] on piriform as an associative network rather than a V1 analogue — read that one before importing any visual-cortex intuition.

For invertebrate work, which is where the normative accounts are most complete: Olsen et al. [@olsen2010] ★ on divisive normalisation, Bhandawat et al. [@bhandawat2007] on antennal-lobe transformation, Caron et al. [@caron2013] on random convergence, and Litwin-Kumar et al. [@litwinkumar2017] ★ on the optimal connection degree. This cluster is the strongest set of results in olfactory theory, and it is worth reading as a group.

### Plumes and the temporal problem

This is where the course argues the tractable work is, and the literature is smaller and more approachable than the chemical-identity literature.

Celani et al. [@celani2014] ★ characterises odour landscapes in turbulence and is the entry point. Vergassola et al. [@vergassola2007] ★ is infotaxis — search without gradients, and one of the genuinely elegant papers in the field. Ackels et al. [@ackels2021] ★ demonstrates 40 Hz correlation discrimination and is the empirical anchor for the sensor–signal mismatch argument. Tootoonian et al. [@tootoonian2025] quantifies the spectral information about source separation.

### Odour space and its geometry

Zhou et al. [@zhou2018] propose hyperbolic geometry for odour space; Koulakov and Rinberg [@koulakov2011] and Krishnamurthy et al. [@krishnamurthy2022] approach the representation problem from different directions. This is the most contested area in the course and the reading should be done adversarially — the proposals disagree, and §14.1 suggests the comparison that would separate two of them.

### The other modalities, for import

For each, one entry point that carries the argument this course borrows.

**Touch:** Johnson [@johnson2001] ★ on the afferent classes, Saal and Bensmaia [@saal2014] on submodality interplay — the source of Import 8's correction that a map does not imply a spatial code.
**Vestibular:** Angelaki et al. [@angelaki2004] ★ and Cullen [@cullen2012] ★. If you read two papers from outside olfaction, make them these — they are the clearest worked example of neurons implementing a specified estimator, and Fetsch et al. [@fetsch2011] is the direct neural test of reliability weighting.
**Proprioception:** Bosco and Poppele [@bosco2001] ★ for the recoding into limb variables, and [@bosco2003] for the honest treatment of how much of it is neural versus biomechanical. Wolpert et al. [@wolpert1995] for forward models.
**Taste:** Chandrashekar et al. [@chandrashekar2006] ★ — the receptor-swap experiments that settled a coding dispute, and the model Import 11 wants an olfactory version of.
**Audition, spatial:** Carr and Konishi [@carr1990] and McAlpine et al. [@mcalpine2001] together, in that order — the dispute and its resolution, which §14.8 turns into a general lesson about the range that matters being the range encountered.

### If you want to start work tomorrow

The three cheapest entry points, all requiring no new apparatus:

1. **The receptor-abundance analysis** (§14.6, item 2) — existing data, existing methods, a built-in comparative control.
2. **The geometry comparison** (§14.6, item 10) — fit hyperbolic and Euclidean models to published co-occurrence data and compare held-out likelihood. Purely computational.
3. **The sniff-triggered versus passive experiment** (§14.6, item 1) — the best cost-to-information ratio in the course, and both outcomes reframe an existing literature.

<x-free-response>
<script type="application/json">
{
  "id": "m14.s07.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You have finished the course. Write the paragraph you would send to a colleague who works on olfaction and has not taken it — what the comparative method gave you that working within olfaction would not have, and what you now think they are getting wrong. Be specific enough to be argued with.",
  "modelAnswer": "There is no single correct answer, but a good one is concrete about mechanism rather than enthusiastic about breadth.\n\nA strong version might run: *the most useful thing was the eliminations, not the analogies.* Working within olfaction you can notice that the receptor array is unordered and that the field is stuck, and it is very natural to connect them. Taste breaks that connection — unordered, low-dimensional, and not stuck — and no amount of work inside olfaction produces that control. Similarly, the antiquity explanation of the missing thalamic relay is entirely plausible until you notice that touch and proprioception bypass thalamus too and are not ancient. Both corrections come from outside and neither is available from within.\n\nOn what the field may be getting wrong, the defensible candidates are ones the course supplies evidence for without settling: that the standard stimulus paradigm cannot detect the codes the field is arguing about, so several confident claims of absence are unsupported; that the measured temporal ensemble is under-exploited while the unmeasured chemical one absorbs most of the theoretical effort — though whether that is a misallocation depends on why olfaction lacks a theory, which is open; and that the objective has never been stated precisely enough to be solved, which no amount of additional data fixes. A colleague is entitled to answer that the field is simply younger and smaller and needs no diagnosis, and the paragraph is better if it says what would distinguish that from the alternatives.\n\nA weaker answer lists analogies without saying what they predict. The course's own standard is that an import which stops at \"these are similar\" has done no work, and that applies to this paragraph too.\n\nThe strongest answers will also say where the comparative method misled — for instance that it systematically under-weights the properties with no analogue elsewhere, which in olfaction means the mixture problem and the sheer dimensionality. Notice that Tier 1 of the agenda contains no experiment addressing either.",
  "rubric": [
    "Identifies at least one specific claim that only the comparison could establish",
    "Prefers the eliminations (taste, spinocerebellar bypass) over loose analogies",
    "Names a concrete belief the field may hold wrongly, with the reason",
    "States something the comparative method itself is bad at",
    "Treats the explanations of olfaction's position as competing candidates and says what would separate them, rather than asserting one",
    "Bonus: notices that the mixture problem is absent from the top of the agenda"
  ]
}
</script>
</x-free-response>

## A closing note on the method

This course made a wager, stated in §0.0: that the clues to understanding olfaction are hidden in how the other modalities work.

The wager paid, but not in the way the framing suggests. What the comparison produced was not a set of mechanisms imported into olfaction. It was a set of **controls** — cases where a property olfaction has appears without the consequence olfaction suffers, which is what lets you say that the property is not the cause. Taste for disorder, touch and proprioception for the missing relay, electroreception for the slow sensor, audition for the what/where split in an array with no spatial dimension at all.

That is a more modest product than "here is the theory of smell", and a more reliable one. §14.6's free-response makes the case that the method systematically over-produces plausible-looking questions and under-weights the properties with no analogue anywhere — and that case is correct, and it is the reason the eliminations are worth more than the predictions.

**The specific claim the course ends on:** olfaction's open questions can be stated sharply enough to design experiments against, and the sharpening came from outside olfaction. Every item in §14.6 traces to a cell in the datasheet where olfaction differs from a modality that has an answer.

The difference, not the similarity, is what generated the question.
