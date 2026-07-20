---
id: m02.s12
title: Module quiz — Audition
lede: Seven questions on what audition established and what it hands forward. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 26
---

This quiz tests whether you can *use* the module, not whether you remember it. Audition is the control condition of the whole course — ordered like vision, mixture-bound like olfaction — so several questions ask you to work out which of vision's results survive the change of modality and which were spatial all along.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m02.s12.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Barn owls build a Jeffress place map of interaural time difference [@carr1990]; gerbils and humans at low frequency appear to use two broad hemispheric channels [@mcalpine2001]. §2.5 treats this as a normative result rather than a controversy. What is the load-bearing step of that resolution?",
  "options": [
    {
      "text": "The optimal code depends on the range of the variable the animal actually encounters, and the owl's physiological ITD range spans many cycles of its operating frequencies while the gerbil's is a small fraction of one.",
      "correct": true,
      "feedback": "This is the step, and its generality is why the result belongs in a comparative course rather than an auditory review. There is nothing to tile when the whole encountered range is a fraction of a cycle, so the optimum places maximum tuning slope where discrimination matters rather than distributing peaks across the range. Head size and operating frequency are measured independently of the neural data, which makes this a derivation rather than a redescription."
    },
    {
      "text": "The owl needs greater absolute localisation accuracy than the gerbil, and a place map supports finer resolution than a two-channel comparison.",
      "correct": false,
      "feedback": "Correct under the assumption that place codes are intrinsically more precise than rate or ratio codes. They are not, in general — two channels read out by their difference can be extremely precise where the slopes are steep, which is exactly why the mammalian arrangement works. Behavioural need also cannot be the explanation on its own, because it does not say why the *same* need should produce different architectures; the range argument does."
    },
    {
      "text": "The owl's coincidence detectors receive genuine axonal delay lines and mammals lack the anatomical substrate for them, so the difference is a constraint on implementation.",
      "correct": false,
      "feedback": "Correct under the assumption that the difference is mechanistic, which was the field's reading for years and is not unreasonable — the delay-line anatomy really is present in nucleus laminaris and not in the mammalian medial superior olive. But it converts the finding into an accident of hardware, and misses that the mammalian arrangement is what you would *choose* given its problem. Explaining a difference by an absent substrate stops the question one step too early."
    },
    {
      "text": "Low-frequency sounds cannot support phase-locking precise enough for a place map, so mammals are forced into a coarser scheme.",
      "correct": false,
      "feedback": "Correct under the assumption that phase-locking fidelity is the binding constraint — and it is a real constraint, though it cuts the other way: phase-locking is *better* at low frequencies, which is why low-frequency ITDs are usable at all. The limitation is geometric rather than temporal. A small head simply does not generate large ITDs, however precisely they are measured."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s12.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "\"Olfaction's mixture problem is audition's, transposed: many sources sum at the sensor, so the demixing machinery should transfer.\" Which clause fails hardest?",
  "options": [
    {
      "text": "\"Sum at the sensor\" — olfactory receptors bind competitively, so a mixture's activation is not the sum of its components' activations [@shen2013], and the superposition assumption that auditory scene analysis is built on does not hold at the first stage.",
      "correct": true,
      "feedback": "This is the hardest failure, and it is at the very first step. Sound pressure adds exactly; that exactness is what licenses treating the problem as linear unmixing and lets grouping cues operate on well-defined components. Receptor activation is a saturating, competitive function of a mixture, so the components are not recoverable by any linear operation on the response. Any olfactory demixing account has to model the binding nonlinearity before it can borrow anything from audition."
    },
    {
      "text": "\"Many sources\" — olfaction mixes in a ~1000-dimensional space, so components mostly land on different receptors and high dimensionality does the demixing for free.",
      "correct": false,
      "feedback": "Partly correct, and §2.1 makes exactly this point: audition has the worst case, maximum collision in a shared one-dimensional carrier, while dimensionality spares olfaction most collisions. But it is a reason the olfactory problem is *easier* than audition's along that axis, not a clause of the argument that fails. Note also that it degrades as mixtures grow, since broadly tuned receptors mean overlap is common in practice."
    },
    {
      "text": "\"The demixing machinery should transfer\" — audition's grouping cues are harmonicity, common onset and common modulation, and chemistry supplies no lawful relation among the molecules of one source.",
      "correct": false,
      "feedback": "Correct, and this is the deepest *conceptual* difference — harmonicity works because a vibrating source is physically obliged to produce integer-related partials, and no such obligation binds the volatiles of a rose. But it is not a failure of the machinery so much as a vacancy in it: the slot is real and something else fills it. §2.11 names the filler as temporal correlation, molecules from one source travelling and fluctuating together. Choose this if you want the most interesting answer; the receptor nonlinearity is the one that breaks the argument earliest."
    },
    {
      "text": "\"Transposed\" — audition's mixture is resolved in time and olfaction's would have to be resolved in space, and the bulb has no spatial metric to resolve it in.",
      "correct": false,
      "feedback": "Correct under the assumption that demixing must happen along the array. It need not, and assuming it does is a vision habit. The candidate olfactory cue is temporal, not spatial, and operates across glomeruli whose arrangement is irrelevant — correlation between two channels needs no notion of distance between them. Worth noticing, because the absence of a metric blocks fewer motifs than people expect."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s12.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "Suppose someone shows that mice can use sub-sniff correlations between odorant fluctuations to decide whether two odorants came from one source or two [@ackels2021]. Which claim does this most directly license, and which does it not?",
  "options": [
    {
      "text": "It licenses temporal correlation as occupying harmonicity's slot — a grouping cue that binds components of one source — but not the claim that the underlying circuit resembles audition's, since the physics filling the slot is different.",
      "correct": true,
      "feedback": "This is the right split, and keeping the two apart is most of the transfer skill this course is after. What the comparison identifies is a *role in an inference*: something must tell the animal which components co-occur non-accidentally. Audition fills the role with a lawful relation among partials, olfaction with a statistical relation induced by transport. Same slot, different physics, and no reason the mechanism should look alike — which is exactly why the analogy is useful rather than merely pretty."
    },
    {
      "text": "It licenses the stronger claim, since a shared computational problem with a shared cue type ought to produce convergent circuits — as coincidence detection appears independently in owl brainstem and elsewhere.",
      "correct": false,
      "feedback": "Correct under the assumption that computational convergence implies mechanistic convergence, and there are cases where it holds. But §2.5's own comparison is the counterexample: owl and gerbil face the same computational problem and implement it differently because their encountered ranges differ. Correlation over hundreds of milliseconds in a slow, noisy sensor is a different engineering problem from microsecond coincidence detection, and should be expected to look different."
    },
    {
      "text": "It licenses neither, because harmonicity is a deterministic relation and temporal correlation is merely statistical, so the two cannot occupy the same slot.",
      "correct": false,
      "feedback": "Correct under the assumption that grouping cues must be lawful to count. But audition's own cues are not all deterministic — common onset and common amplitude modulation are statistical regularities of natural sources, not physical necessities, and they carry much of the work in real scenes [@mcdermott2011]. Requiring lawfulness would strip audition of most of its cues too."
    },
    {
      "text": "It licenses the claim that the bulb performs scene analysis, since a cue used behaviourally must be extracted at the first circuit.",
      "correct": false,
      "feedback": "Correct under the assumption that the locus of extraction follows from the fact of use, which is the inference this course keeps flagging. Behaviour tells you the information survives to the decision; it does not say where it was computed. The bulb is the natural candidate on timing grounds, but piriform receives input within two synapses and the demonstration is equally compatible with extraction there. §3.11 lists finding the locus as an open question rather than a settled one."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s12.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Lewicki optimised a code for an ensemble of natural sounds and recovered the bandwidth scaling of real auditory nerve filters [@lewicki2002; @smith2006]. §2.4 asks what would have to be true to run the olfactory version. Beyond the missing chemical database, what is the subtler obstacle?",
  "options": [
    {
      "text": "In audition the signal is the thing to be encoded, so \"encode the waveform\" is a defensible objective. In olfaction the receptor pattern is not the thing — the animal wants latent causes — so the olfactory calculation may be an inference problem rather than an efficient-coding one.",
      "correct": true,
      "feedback": "This is the obstacle, and it is easy to miss because step 1's absence is so conspicuous. §0.1 warned that the stances give different answers, and here is the case that cashes the warning: efficient coding preserves the input, inference discards whatever is irrelevant to the cause. The optimal repertoire under \"represent the receptor pattern faithfully\" is not the optimal repertoire under \"identify the source\". Some of the field's stall may be from posing the wrong kind of problem, which no amount of extra data fixes."
    },
    {
      "text": "The receptor affinity matrix — the map from molecules to activations — is known only in fragments, so there is no forward model to optimise through.",
      "correct": false,
      "feedback": "Correct under the assumption that the forward model is the binding constraint, and it is a genuine item on §2.4's list: partial affinity data exist for *Drosophila* and for some mouse receptors and not much else. But it is the same kind of gap as the database — an unglamorous measurement problem, soluble by effort. The objective problem is not soluble by effort, because no one is sure what to measure."
    },
    {
      "text": "Sound is one-dimensional and odour is ~1000-dimensional, so the optimisation is intractable at olfactory scale.",
      "correct": false,
      "feedback": "Correct under the assumption that dimensionality is what limits the calculation, which was a fair worry when these methods were new. It is much weaker now — high-dimensional sparse coding and dimensionality-reduction methods handle problems of this size routinely, and §3.5's invertebrate results are exactly such calculations run through [@litwinkumar2017]. Scale is an engineering cost, not a conceptual barrier."
    },
    {
      "text": "Auditory filters have a ground truth to compare against and olfactory receptor tuning does not, so step 5 has nothing to check the optimum against.",
      "correct": false,
      "feedback": "Partly correct — comparison data are thinner in olfaction, and this is item 5 on §2.4's list. But receptor deorphanisation has produced real response profiles [@malnic1999; @bhandawat2007], enough to test a predicted repertoire statistically even if not receptor by receptor. Grade the obstacles by what effort would remove: this one yields to it, and the objective problem does not."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m02.s12.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Retina compresses and decorrelates; cochlear nucleus expands and decomposes into timing, level, spectrum and onset streams; the bulb converges ~1000:1. What does the set of three establish?",
  "options": [
    {
      "text": "That there is no universal first-circuit operation — each does what its input statistics and its bottleneck demand — so an olfactory proposal must be argued from olfaction's bottleneck rather than from what retinas do.",
      "correct": true,
      "feedback": "Right, and the negative form is the useful one. The retinal case is so canonical that \"the first circuit decorrelates\" reads as a general principle, and audition falsifies it directly: the cochlear nucleus has no compression bottleneck to fight and instead splits a signal carrying several incompatible demands. Convergence in the bulb is well established; what it is *for* — SNR, temporal precision, decorrelation — remains open precisely because it cannot be read off from the other two."
    },
    {
      "text": "That first circuits split into parallel channels whenever one channel cannot optimise sensitivity, precision and dynamic range at once — the same motif as retinal sustained/transient, SA/RA/PC afferents, and mitral/tufted cells.",
      "correct": false,
      "feedback": "Partly correct, and split-early is one of the course's seven lessons, so this is not a trap. But it generalises the auditory case at the expense of the contrast. The retina's dominant first-circuit operation is compression against an optic-nerve bottleneck, and calling that \"splitting\" loses what makes the three-way comparison informative. Splitting is a real recurring motif; it is not the answer to \"what do first circuits do\"."
    },
    {
      "text": "That convergence ratio is set by receptor noise: high convergence where transduction is noisy, low where it is clean.",
      "correct": false,
      "feedback": "Correct under the assumption that SNR alone sets convergence, and the numbers are suggestive — hair cells are exquisitely sensitive and converge ~1:1, olfactory receptor neurons are shot-noise-limited and converge ~1000:1. But the fovea's near-1:1 midget pathway and the rod pathway's hundreds-to-one sit in the *same* retina, which shows convergence tracks local SNR and task, not modality. And §3.3 argues bulbar convergence may be about recovering temporal precision from slow sensors rather than about amplitude SNR at all."
    },
    {
      "text": "That the first circuit's operation is dictated by the dimensionality of the receptor array: low-dimensional inputs get decomposed, high-dimensional ones get pooled.",
      "correct": false,
      "feedback": "Correct under the assumption that array dimensionality is the controlling variable, and the three cases happen to line up with it — which is exactly why it is worth resisting. Three points and several covarying properties support many such rules. The bottleneck account is preferable because each case names an independently measurable pressure: optic nerve capacity, incompatible temporal demands, receptor noise."
    }
  ]
}
</script>
</x-mcq>

<x-matrix>
<script type="application/json">
{
  "id": "m02.s12.mx1",
  "contentRev": 1,
  "points": 5,
  "corner": "Property",
  "prompt": "Fill in audition's column, then check it against §2.11. Audition is the control condition, so the point is to know exactly where it sides with vision and where it does not.",
  "rows": [
    "Array ordering",
    "Array dimensionality",
    "Tuning breadth",
    "Mixture problem",
    "Obligatory relay"
  ],
  "columns": ["Audition"],
  "cells": {
    "Array ordering|Audition": { "answer": "ordered, metric", "accept": ["ordered","tonotopic","tonotopy","ordered and metric","metric","yes"] },
    "Array dimensionality|Audition": { "answer": "1 (frequency)", "accept": ["1","one","1d","one-dimensional","frequency","1 frequency"] },
    "Tuning breadth|Audition": { "answer": "narrow", "accept": ["narrow","sharp","narrowly tuned","very narrow"] },
    "Mixture problem|Audition": { "answer": "additive, 1-D carrier", "accept": ["additive","superposition","linear","additive 1d","sums exactly","additive in a 1-d carrier"] },
    "Obligatory relay|Audition": { "answer": "IC and MGB", "accept": ["ic","mgb","ic and mgb","inferior colliculus","inferior colliculus and mgb","yes"] }
  },
  "modelAnswerNote": "The column is worth holding in mind because audition breaks the covariation that a two-way vision/olfaction comparison leaves confounded.\n\nOrdered and metric like vision. Narrowly tuned and one-dimensional like neither. Additively mixed like olfaction and unlike vision, whose scenes occlude rather than sum. And with the strictest relay bottleneck of the three, against olfaction's none.\n\nSo when someone argues that olfaction's difficulties follow from being unordered, audition is where you test it: it shares ordering with vision and shares the mixture problem with olfaction, and it has a working normative theory. That points the blame at dimensionality and the missing ensemble rather than at disorder — which §5 sharpens further, since gustation is unordered too and has none of the trouble."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m02.s12.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vision splits into what and where, and it is tempting to explain that away as an inheritance from its spatial receptor array. Audition has no spatial dimension in its array and splits anyway. Say what that pair of facts establishes, then design the olfactory test it implies — including the result that would refute the prediction.",
  "modelAnswer": "**What the pair establishes.**\n\nOne instance of a what/where split is uninformative about its cause, because vision's array already carries location: retinotopy hands the where-stream its variable for free, so the split could be an artefact of the sensor rather than a solution to a problem. Audition removes that explanation. The cochlea samples frequency, and location is *computed* from interaural differences of a few hundred microseconds — nothing about the array supplies it. The split appears anyway.\n\nTwo independent instances with only one sharing the spatial-array property makes the split a consequence of **the computational problem**: identity requires invariance to location, level and context, while localisation requires exactly the timing and level cues that identity must discard. One representation cannot be invariant to a variable and precise about it simultaneously. That is a statement about the task, and it predicts a split in any modality facing both demands.\n\nOlfaction faces both — which source, and where is it — so it should have one.\n\n**The test.**\n\nRecord in the bulb and in olfactory cortical targets while an animal tracks a real plume, and crucially present stimuli with realistic *plume statistics* rather than steady monomolecular pulses. Then ask whether some population is tuned to intermittency, whiff frequency, whiff duration and bilateral concentration correlation while being relatively indifferent to chemical identity, and whether another is the reverse. Mitral and tufted cells, with their different latencies and thresholds, are the obvious candidate populations to look at first.\n\n**What refutes it.** If, under stimuli that genuinely carry plume statistics, every recorded cell's response is predicted as well by identity-and-concentration alone as by a model including the temporal-statistic regressors — no population whose identity tuning is weak and whose plume-statistic tuning is strong — then the prediction fails. That is a real risk of failure, which is what makes it worth running.\n\n**The methodological point underneath it.** The standard protocol is a monomolecular odorant at steady concentration, which presents no plume statistics at all. A where-stream tuned to temporal structure would be invisible to essentially the entire existing literature, so its absence from that literature is not evidence against it. Design the stimulus before concluding from the null.",
  "rubric": [
    "Explains why one instance is uninformative: vision's array supplies location for free",
    "Notes that audition computes location rather than inheriting it, removing that explanation",
    "Concludes that the split follows from the computational problem — invariance versus precision about the same variable",
    "Derives the prediction that olfaction should have a what/where split",
    "Proposes a test using stimuli with realistic plume statistics, not steady monomolecular pulses",
    "States a genuine refuting outcome rather than only a confirming one",
    "Bonus: notes that standard protocols would render such a stream invisible, so the existing null is uninformative"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Audition is the control condition, and four of its results are load-bearing for olfaction.

<strong>The five-step template, and where it breaks</strong> (§2.4) — ensemble, representation, constraint, solve, compare. Steps 2 through 5 are ready for olfaction and step 1 does not exist. But the subtler break is step 2: audition could optimise for the waveform because the signal is the thing, and olfaction's animal wants latent causes.

<strong>Temporal correlation is olfaction's harmonicity</strong> (§2.1, §2.11) — the mixture problem needs some relation binding components of one source. Chemistry supplies no lawful one, so what remains is that molecules from one source travel and fluctuate together. Same slot, different physics.

<strong>The optimal code depends on the range encountered, not the range possible</strong> (§2.5) — owl and gerbil are not disagreeing about mechanism. Before asking whether the bulb maps anything, ask what range of that variable the animal meets and whether there is room in it for a map to be worth building.

<strong>Two independent what/where splits</strong> (§2.8) — vision's could be blamed on its spatial array; audition's cannot. That makes the split a consequence of the problem, and predicts a stream in olfaction that nobody has convincingly located.
</x-callout>
