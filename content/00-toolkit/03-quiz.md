---
id: m00.s03
title: Module quiz — The Normative Toolkit
lede: Six questions on the three stances, the five criteria, and the SNR reversal. Every distractor is the right answer under a different normative assumption, so read the feedback on the ones you get right too.
estimatedMinutes: 22
---

This quiz tests whether you can *use* the toolkit, not whether you remember it. The toolkit is three sections long and the whole course is eighty-odd; what has to survive the transfer is the habit of asking what the ensemble is, what is being optimised, and what would count as the theory being wrong.

Answer before revealing. The distractor feedback is where most of the teaching is.

<x-mcq>
<script type="application/json">
{
  "id": "m00.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A paper claims that a given cortical area implements an efficient code for its inputs. You want to know whether the claim is falsifiable. Which single question does the most to settle that?",
  "options": [
    {
      "text": "\"What observation, obtainable with your methods, would you accept as showing the code is not efficient?\"",
      "correct": true,
      "feedback": "This is the question, and it is deliberately blunt. §0.1 warns that a sufficiently flexible normative story fits anything after the fact, and §0.2's five criteria exist to stop that. The Atick–Redlich crossover is falsifiable because it says the filter peak sits at the frequency where signal power meets the noise floor and must move by a specified amount when light level drops [@atick1992; @srinivasan1982] — a claim with a sign and a magnitude attached. If no answer to this question exists, nothing else about the paper matters."
    },
    {
      "text": "\"Was the input ensemble measured independently of the neural data?\"",
      "correct": false,
      "feedback": "Correct under the assumption that criterion one carries the falsifiability, and it is nearly right — an assumed ensemble is exactly where olfactory normative claims fail. But a measured ensemble makes the calculation *possible*, not risky. You can compute the optimum from a real ensemble, find it disagrees, adjust the constraint set, and recover agreement. The ensemble is necessary; the advance commitment is what does the falsifying."
    },
    {
      "text": "\"How many free parameters does the model have, and were any of them fitted to the neural data?\"",
      "correct": false,
      "feedback": "Correct under the assumption that parameter counting is the whole of it — criterion five, and a real diagnostic. Laughlin's contrast-response prediction is compelling largely because it has essentially none [@laughlin1981]. But a zero-parameter model can still be unfalsifiable if its author never says what would break it, and a model with parameters can be falsifiable if it commits in advance. Parameters are a proxy for the thing rather than the thing."
    },
    {
      "text": "\"Which of the three stances is being claimed — efficient coding, inference, or task optimality?\"",
      "correct": false,
      "feedback": "Correct under the assumption that the failure is usually equivocation between stances, which §0.1 argues is common and which does mask a lot of vagueness. But pinning down the stance sharpens what is being claimed without yet saying what would refute it. Ask this second: it makes the first question answerable, since the three stances fail in different ways."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m00.s03.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "You find neurons in a modality the course has not covered whose tuning becomes broader and less informative about the stimulus when the animal is doing a task where fine discrimination does not pay. Which stance does this most directly support, and what is the discriminating control?",
  "options": [
    {
      "text": "Task optimality, and the control is to change the task while holding the stimulus distribution fixed.",
      "correct": true,
      "feedback": "Right, and the control is what makes it a claim rather than an observation. §0.1's whole point is that the three stances agree in easy cases and diverge in designed ones. Efficient coding is defined over the input ensemble with no task term, so it predicts nothing when only the task moves. Discarding information that the loss does not reward is the signature of an explicit loss function — the same logic that collapses hundreds of bitter compounds onto one axis in gustation [@chandrashekar2006]."
    },
    {
      "text": "Efficient coding, since broadening tuning under low demand saves spikes and the metabolic constraint is doing the work.",
      "correct": false,
      "feedback": "Correct under the assumption that the constraint term can absorb task effects — and metabolic cost is a legitimate efficient-coding constraint, so this is not a silly reading. It fails on what moved: efficient coding derives the code from the input distribution and a fixed resource budget, and here the input distribution did not change. To rescue it you would have to make the budget itself task-dependent, which quietly imports a loss function and makes the account task optimality wearing a different label."
    },
    {
      "text": "Bayesian inference, since a weaker task demand corresponds to a broader prior and the posterior widens accordingly.",
      "correct": false,
      "feedback": "Correct under the assumption that task difficulty enters as a prior — but it does not, and the conflation is worth watching for. A prior is over causes in the world; task payoff is over actions. Inference does predict widening when *evidence* weakens, which gives you the discriminating experiment: degrade stimulus reliability at fixed task and the inference account predicts broadening plus a bias toward the prior mean, which task optimality does not."
    },
    {
      "text": "None of them — tuning changes with arousal and behavioural state, so this is a state effect rather than a normative one.",
      "correct": false,
      "feedback": "Correct under the assumption that state confounds exhaust the explanation, and as an experimental worry it is entirely reasonable; arousal covaries with task demand and must be controlled. But note the shape of the move: \"it is just state\" is not an alternative theory, it is a reason to distrust the measurement. If the effect survives matched arousal, you still owe an account of why the system is allowed to lose information."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m00.s03.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "Apply the SNR reversal outside vision. A weakly electric fish senses distortions of its own self-generated field; near a small object the induced signal is tiny relative to receptor noise, near a large one it is large. What does §0.2 predict about lateral interactions among electroreceptor afferents in the two cases?",
  "options": [
    {
      "text": "Sharp, differentiating surrounds for large-signal conditions and broad pooling for small-signal ones, with the crossover set by where signal power meets the noise floor.",
      "correct": true,
      "feedback": "This is the transfer, and it works because nothing in the derivation is about light. The two terms are a whitening gain that rises where input power falls, and a Wiener term that collapses where SNR does [@atick1992]. Both are defined for any modality with a correlated input and additive noise. The prediction is regime-dependent, not modality-dependent, which is what makes lesson 2 a lesson rather than a fact about retinas."
    },
    {
      "text": "Sharp surrounds in both cases, because the self-generated carrier is known exactly and so the effective noise is negligible.",
      "correct": false,
      "feedback": "Correct under the assumption that knowing the carrier removes the noise. It removes one *source* of uncertainty — the fish can subtract a learned prediction of its own discharge, which is a real and separate motif — but it does nothing to transduction noise at the receptor, which is what sets the floor for a small induced signal. Cancelling a predictable component and improving SNR on an unpredictable one are different operations."
    },
    {
      "text": "Broad pooling in both cases, because the array is sparse and the physics of the field already smooths across neighbouring receptors.",
      "correct": false,
      "feedback": "Correct under the assumption that input smoothness alone dictates pooling. Smoothness is exactly what makes whitening *worth* doing — a strongly correlated input is a redundant one, and §0.2 step 1 says redundancy is the thing to remove. Input correlation length sets what the surround should look like when SNR is high; it does not decide whether to have one."
    },
    {
      "text": "No prediction follows, because the electrosensory input ensemble has not been measured the way natural image spectra have.",
      "correct": false,
      "feedback": "Correct under a strict reading of criterion one, and the caution is the right instinct — this course spends a lot of it on olfaction. But the qualitative prediction here needs only that the input be correlated and the noise roughly white, which is generic. What the missing ensemble blocks is the *quantitative* version: you cannot say where the crossover sits without measuring the spectrum."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m00.s03.o1",
  "contentRev": 1,
  "points": 1,
  "shuffleSeed": 7,
  "prompt": "Put the steps of a normative derivation in the order they must be carried out. The order is not cosmetic — one arrangement makes the exercise a test and the others make it a story.",
  "items": [
    { "id": "a", "text": "State the input ensemble, measured from the natural environment." },
    { "id": "b", "text": "State the objective being optimised." },
    { "id": "c", "text": "State the constraint: what resource is limited, and how." },
    { "id": "d", "text": "Solve for the optimal code." },
    { "id": "e", "text": "Compare the solution to the measured biology." },
    { "id": "f", "text": "Identify the free parameters and ask how much of the fit they bought." }
  ],
  "correctOrder": ["a", "b", "c", "d", "e", "f"],
  "modelAnswerNote": "The content of the list matters less than the fact that (a) through (c) precede (e).\n\nIf the objective or the constraints are chosen after the biology is on the table, you can nearly always find a combination under which the observed solution is optimal. That is how an optimisation argument stops being falsifiable, and it is the failure mode §0.1 opens with.\n\nStep (f) is the one most often skipped in published work. A model with a free surround strength fitted to the data reproduces any surround and therefore predicts none; the retinal result is compelling because the filter peak is pinned to an independently measured quantity rather than fitted [@atick1992].\n\nCarry the list forward. For olfaction, steps (b) through (f) are ready and step (a) does not exist — which is the single most consequential fact in this course."
}
</script>
</x-order>

<x-mcq>
<script type="application/json">
{
  "id": "m00.s03.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Centre–surround structure also falls out of arguments about noise and about nonlinear response ranges that never mention redundancy, and much of the retina's actual decorrelation comes from a response nonlinearity rather than from the linear surround [@pitkow2012]. What does that do to the evidential status of the efficient-coding account?",
  "options": [
    {
      "text": "It weakens the surround as evidence for efficient coding specifically, while leaving the SNR-dependent *change* in the surround as evidence, because the competing principles do not predict that change.",
      "correct": true,
      "feedback": "This is the right division, and it is worth making explicitly because the two facts are usually reported together. When several distinct principles predict the same structure, that structure discriminates between none of them. What survives is the differential prediction: efficient coding says the surround must weaken and broaden as SNR falls, with the peak tracking the signal–noise crossover, and the alternative accounts are silent about that. Look for the part of a prediction that only one theory makes."
    },
    {
      "text": "It refutes the efficient-coding account, since the mechanism turns out to be a nonlinearity the linear theory does not contain.",
      "correct": false,
      "feedback": "Correct under the assumption that a normative theory is a claim about mechanism. It is not — it says what the system should compute, and is neutral about implementation. That neutrality is a genuine cost, since it makes the theory harder to refute, but it means a mechanistic surprise is not a refutation. What §0.2 flags is subtler: the linear theory got the right qualitative answer partly for the wrong mechanistic reason, so mechanism-level confirmations of it should be discounted."
    },
    {
      "text": "It leaves the account untouched, because convergent predictions from several principles are mutual corroboration.",
      "correct": false,
      "feedback": "Correct under the assumption that agreement among theories is evidence for each. It is the reverse: if principles P, Q and R all predict observation O, then O raises your credence in the disjunction and discriminates among the three not at all. This inversion is common enough in the literature to be worth naming — over-determination reads like strong support and is actually weak support."
    },
    {
      "text": "It shows the retina was the wrong system to build the theory on, and the theory should be judged on cleaner cases like the fly's contrast–response curve [@laughlin1981].",
      "correct": false,
      "feedback": "Correct under the assumption that a theory should be judged on its best case, and the fly result is indeed cleaner — one measured distribution, one measured curve, essentially no free parameters. But a theory is judged on the range it claims, and efficient coding claims the retina. The honest position is to keep both: the fly case shows the principle can make an unhedged prediction, and the retinal caveat shows that a motif's mere existence rarely establishes which principle produced it."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m00.s03.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "Vestibular is the only modality in this course that passes all five of §0.2's criteria, and its normative success is *central* — brainstem and cortex — rather than peripheral [@angelaki2004]. Vision and audition are the reverse. Which reading of that inversion is best supported?",
  "options": [
    {
      "text": "The theory succeeds where the objective can be stated precisely, and \"estimate self-motion with minimum variance\" is statable in a way that \"what V4 computes\" is not — so specifiability, not circuit complexity, sets the wall.",
      "correct": true,
      "feedback": "This is the diagnosis, and it generalises further than it first appears. Vestibular central circuits are not simple, so complexity cannot be the barrier. What vestibular has is a low-dimensional latent variable with a physically meaningful loss, which makes an optimality calculation well-defined. The actionable consequence for olfaction is uncomfortable: the field's instinct is to gather more data, and this suggests the binding constraint may be that nobody has written down what the system is estimating."
    },
    {
      "text": "Vestibular is evolutionarily old and its computations are stereotyped, so central circuits had time to reach an optimum that visual cortex has not.",
      "correct": false,
      "feedback": "Correct under the assumption that optimality is a function of evolutionary time, which is not absurd — but it predicts the wrong pattern. The retina and cochlea are no younger than the vestibular nuclei, and their normative accounts fail centrally rather than peripherally. Antiquity would predict success everywhere in old systems, not a peripheral/central inversion between modalities of similar age."
    },
    {
      "text": "The vestibular ensemble — natural head motion — is much lower-dimensional than natural images, so criterion one is easier to satisfy.",
      "correct": false,
      "feedback": "Correct under the assumption that ensemble tractability is the binding constraint, and it is partly right: ten channels and six degrees of freedom is a far friendlier estimation problem than a 1/f² image spectrum. But vision's ensemble *is* measured, extensively, and its central account still fails. A measured ensemble evidently does not carry you past the point where the objective becomes unstatable."
    },
    {
      "text": "Vestibular is really a Bayesian-inference success rather than an efficient-coding one, so the comparison is between different stances and the inversion is an artefact.",
      "correct": false,
      "feedback": "Partly correct, and the observation is sharp — reliability-weighted cue combination is an inference result, not an efficient-coding one, and §0.1 insists those be kept apart. But it strengthens the point rather than dissolving it. Inference requires a specified latent variable and a specified loss, which is precisely why it can be run centrally: the stance that succeeds is the one whose ingredients are available."
    }
  ]
}
</script>
</x-mcq>

<x-free-response>
<script type="application/json">
{
  "id": "m00.s03.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "You are handed a complete database of natural odour scenes tomorrow: chemical composition, densely sampled in time, across many environments. Using §0.2's five criteria and §0.1's three stances, say what you could then derive and what would still be blocked.",
  "modelAnswer": "**What unblocks immediately.**\n\nCriterion one is the one olfaction fails, and the database supplies it. With a measured ensemble, the constraints already stated — receptor count, shot-noise-limited transduction, a sampling deadline of a couple of hundred milliseconds — become an optimisation you can actually solve. The Lewicki-style calculation becomes available: ensemble of scenes, representation = receptor affinity spectra, constraint = fixed receptor number and noise, prediction = the actual repertoire, compared against measured affinities. That is a real derivation with a real chance of failing, which is the point.\n\nThe cheaper version unblocks too: does receptor abundance track encounter frequency across species with different ecologies? That needs only relative encounter statistics and existing abundance data.\n\n**What is still blocked, and it is the more interesting half.**\n\nThe objective. §0.1 separates three stances, and the database does not choose among them. \"Encode the receptor pattern efficiently\" is an efficient-coding objective, and it is probably the wrong one — the animal does not want the receptor pattern, it wants the latent causes that produced it: which sources, how far, in what direction. That is an **inference** problem, and inference discards information efficient coding preserves. Two calculations from the same database, giving different optimal repertoires.\n\nSo the honest statement is that olfaction may be missing two ingredients rather than one. The ensemble is the visible gap. The unstated objective is the one the vestibular comparison flags, and no amount of analytical chemistry fixes it.\n\n**A prediction worth committing to in advance.** If the objective is identity, the optimal repertoire should tile chemical space by discriminability. If it is source localisation, receptor identity matters far less than temporal fidelity, and the optimum should spend its budget on kinetics rather than on chemical coverage. Those differ enough to be told apart, which makes the choice of stance empirically live rather than philosophical.",
  "rubric": [
    "Identifies criterion one — the measured ensemble — as what the database supplies",
    "Names a concrete derivation that becomes possible, e.g. the receptor repertoire from natural statistics",
    "Recognises that the objective remains unspecified and that the database cannot supply it",
    "Uses §0.1 to argue that efficient coding and inference give different answers here",
    "Bonus: notes that the animal wants latent causes rather than the receptor pattern itself",
    "Bonus: states a differential prediction distinguishing an identity objective from a localisation objective"
  ]
}
</script>
</x-free-response>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
Three sections, and four things that every remaining module is read against.

<strong>The three stances, kept apart</strong> (§0.1) — efficient coding, inference, task optimality. Whenever you meet a normative claim, ask which one it is, then ask what the ensemble, the constraint and the free parameters are.

<strong>The five criteria</strong> (§0.2) — measured ensemble, physical constraint, risky quantitative prediction, confirmation by later data, few named parameters. Only vestibular passes all five; olfaction fails on the first, consistently.

<strong>The SNR reversal</strong> (§0.2) — the same principle predicts opposite structures in different regimes. Any claim of the form "sensory systems do X" should prompt: under what conditions, and what do they do otherwise?

<strong>Over-determination is weak evidence</strong> (§0.2) — when several distinct principles predict the same motif, the motif discriminates among none of them [@pitkow2012]. Look for the part of a prediction that only one theory makes.
</x-callout>
