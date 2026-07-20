---
id: m12.s07
title: Module quiz — Artificial Sensing
lede: Eight questions on an argument that is deliberately weaker than it first appears. Several ask you to attack the module's own thesis, which is the skill it was written to develop.
estimatedMinutes: 26
---

This module made an argument and then spent a section trying to break it. The quiz continues that. Most of the questions have a defensible answer other than the intended one, and the distractor feedback says which assumption would make each of them right.

Answer before revealing. The next module is the capstone, and several of these are the capstone's questions arriving early.

<x-mcq>
<script type="application/json">
{
  "id": "m12.s07.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Machine olfaction has stalled for four decades. Which conclusion does that licence, and which is the one this module actually uses?",
  "options": [
    {
      "text": "That whatever is missing is not one of biology's constraints — because an electronic nose has no metabolism, no evolutionary history, no development and no behavioural deadline, and stalls anyway.",
      "correct": true,
      "feedback": "This is the clean rung and it is the one §12.1 builds on. It is a subtraction rather than a positive claim: it removes every explanation of olfaction's theoretical backwardness that appeals to receptor kinetics, the missing map, adult neurogenesis, the absent relay, or the 200 ms deadline from being *sufficient*. That is exactly the form of the eliminations §13.6 argues the comparative method is best at, obtained from a control no animal could supply."
    },
    {
      "text": "That the odour identification problem is intractable, since serious effort has been applied without success.",
      "correct": false,
      "feedback": "Correct under the assumption that engineering failure is evidence about solvability. It is not — this is absence of evidence, and the history of artificial intelligence is substantially a history of confident impossibility claims about tasks subsequently done. §12.1 rates this rung at zero and any argument of this shape should be discarded on sight."
    },
    {
      "text": "That biological olfaction must use a mechanism no engineered system has tried, since biology succeeds where engineering fails.",
      "correct": false,
      "feedback": "Correct under the assumption that biology has succeeded, which quietly smuggles in the conclusion. Animals do smell well, so there is something to this — but the comparison being drawn in this module is between *theoretical accounts*, not between an animal and a device, and the module's point is that the theory is stuck in both substrates. Inferring a specific unknown mechanism from a performance gap is the weakest kind of argument from absence."
    },
    {
      "text": "That the sensor hardware must be the binding constraint, since that is the most obvious difference from a camera.",
      "correct": false,
      "feedback": "Correct under the assumption that the most salient difference is the operative one, and §12.4 treats this as the strongest rival rather than as a mistake. What it cannot do is explain the biological half of the asymmetry: animals have excellent chemical sensors and olfactory theory lagged anyway. A story that covers one of the two gaps is doing half the work of one that covers both."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m12.s07.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Which observation in this module does the most to separate the dataset account from its rivals, and why?",
  "options": [
    {
      "text": "That within olfaction, the sub-problem whose ensemble was measured — plumes — has both normative traction and working machines, while the sub-problem whose ensemble was not measured has neither.",
      "correct": true,
      "feedback": "This is the module's best evidence, and its virtue is that it is a within-subject comparison. The animal, the receptors, the chemistry, the sensor hardware, and the commercial pull are all constant across the split; only the measured/unmeasured status varies. Sensor hardware, commercial pull, and intrinsic difficulty all predict olfaction failing uniformly, and none of them predicts the split. It also arrives from literatures assembled for unrelated reasons, which is criterion 4 of §0.2 doing real work."
    },
    {
      "text": "That machine vision's corpus was assembled years before the method that exploited it, by people who did not know what would exploit it.",
      "correct": false,
      "feedback": "Correct under the assumption that ordering is the discriminating evidence, and it is genuinely important — it is what a third-variable 'both track tractability' story has the most trouble with, and it is better documented in engineering than in biology. But it establishes the ordering within a *successful* domain and says nothing about why the unsuccessful one failed. The within-olfaction split does both at once."
    },
    {
      "text": "That electronic noses have full access to every classifier and optimiser the successful domains used, and stall anyway.",
      "correct": false,
      "feedback": "Correct under the assumption that locating the stall is what discriminates, and this is genuinely strong — it is the risky check §12.1 stated in advance and §12.3 confirmed. But 'the stall is at the input' is compatible with the input being unobtainable for hardware reasons, which is exactly the rival it needs to beat. It localises without adjudicating."
    },
    {
      "text": "That trained vision networks develop early filters resembling those in early visual cortex.",
      "correct": false,
      "feedback": "Correct under the assumption that convergence is the module's key evidence, and it is a good convergence argument — two systems sharing only the task and the input arriving at the same representation. But it concerns the successful modality only, and it supports the claim that input statistics determine the code rather than the claim that a missing dataset explains olfaction. Different proposition, adjacent."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m12.s07.q3",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague explains machine olfaction's failure by saying odour space is roughly 1000-dimensional and that is simply too many dimensions to learn. What is wrong with this, and what should replace it?",
  "options": [
    {
      "text": "Raw dimensionality is not the barrier — images have far more dimensions and yield. What odour lacks is a metric on the input, so no architectural prior like convolution is available and the relational structure must be learned from data instead.",
      "correct": true,
      "feedback": "Right on both halves. A megapixel image is ~10⁶-dimensional and machine learning handles it, because the metric on the pixel array licenses weight sharing and local receptive fields, which cut the sample complexity enormously. Odour supplies no 'nearby receptor' and no translation to be invariant to, so the prior has to be learned. Note the consequence §12.6 draws: this makes the missing-dataset and intrinsic-difficulty accounts *compound* rather than compete, since the absent prior raises the data requirement."
    },
    {
      "text": "Nothing is wrong — dimensionality is the course's central explanation of olfaction's difficulty, and §11.2 develops it at length.",
      "correct": false,
      "feedback": "Correct under a reading the course itself flags as over-leaned-on. The modality-space figure is blunt about it: dimensionality against theory maturity gives a weaker correlation than the disorder axis it is usually contrasted with. §11.1 lands on a disorder × dimensionality interaction rather than either alone, and this module supplies the mechanism for the interaction — disorder removes the prior, and high dimensionality makes the absence of the prior expensive."
    },
    {
      "text": "The problem is that odour space has no agreed dimensionality at all, so the number 1000 is not meaningful.",
      "correct": false,
      "feedback": "Correct under the assumption that the receptor count does not define the space, and it is a fair pedantic point — receptor count is nominal dimensionality, and §13.6 lists the *intrinsic* dimensionality of the natural ensemble as an open question, with proprioception as the warning that the two can differ by an order of magnitude. But it is a correction to the number rather than a diagnosis of the difficulty."
    },
    {
      "text": "Dimensionality is irrelevant because the real problem is that mixtures do not superpose at the sensor.",
      "correct": false,
      "feedback": "Correct under the assumption that non-additivity is the whole story, and it is a real obstacle — §12.5 argues it is why the opponent-axis calculation cannot simply be ported, since cone responses to mixed wavelengths add and receptor responses to mixed odorants do not. But 'irrelevant' overstates: dimensionality matters through its interaction with the missing prior. Two obstacles, not one."
    }
  ]
}
</script>
</x-mcq>

<x-mcq>
<script type="application/json">
{
  "id": "m12.s07.q4",
  "contentRev": 1,
  "points": 1,
  "prompt": "Sensor drift and cross-sensitivity are always named together as the electronic nose's problems. Why is that pairing more than a list?",
  "options": [
    {
      "text": "Each is survivable alone and they are jointly fatal: drift alone can be normalised away if each sensor reports one analyte, and cross-sensitivity alone is harmless if the mixing weights are fixed. Together there is no invariant left to normalise against.",
      "correct": true,
      "feedback": "This is the structure, and the figure in §12.3 is built to make it manipulable — turn cross-sensitivity down and drift becomes a nuisance, turn it up and normalisation has nothing to key on. The practical consequence is the one that matters for this course: no sensor response has a device-independent meaning, so no corpus transfers, so the data cannot be pooled. That is a reason a shared odour dataset is hard which has nothing to do with anyone's willingness to collect one."
    },
    {
      "text": "Because cross-sensitivity was a design mistake that drift then compounded — selective sensors would have avoided both.",
      "correct": false,
      "feedback": "Correct under the assumption that selectivity was available, and it was not. One sensor per analyte does not scale past a few dozen compounds and fails completely on anything unanticipated. §12.3 makes the point that biology and engineering converged on the broadly tuned array independently and for a good reason — this is the module's one clean positive convergence, and reading it as a mistake inverts it."
    },
    {
      "text": "Because both are consequences of chemical sensors being cheap, and better-funded hardware would remove both.",
      "correct": false,
      "feedback": "Correct under the assumption that this is an engineering-effort problem, and money would certainly help. But drift-free chemical sensing has resisted decades of materials work, and §12.5 argues the productive ask is a *characterised* drift model plus a transfer standard rather than drift-free hardware — the cheap fix is an agreement about a reference object, not a breakthrough in materials."
    },
    {
      "text": "Because both are absent in biology, which is why animals succeed where devices fail.",
      "correct": false,
      "feedback": "Correct on cross-sensitivity being handled and wrong on it being absent — olfactory receptors are famously broadly tuned, which is the whole point of combinatorial coding. Biology has the same cross-sensitivity by design and manages drift through continuous receptor turnover and, arguably, adult neurogenesis. The interesting question is not why devices have these problems but why they are not fatal in animals."
    }
  ]
}
</script>
</x-mcq>

<x-order>
<script type="application/json">
{
  "id": "m12.s07.o1",
  "contentRev": 1,
  "points": 1,
  "partialCredit": true,
  "shuffleSeed": 31,
  "prompt": "Rank these five ways of isolating the dataset account by value for money — best ratio of discriminating power to cost, first. §12.4 lists them; the question is whether you can reconstruct the ordering from the arguments.",
  "items": [
    { "id": "a", "text": "Train a learner on exact GC-MS compositions with source labels, at small scale — bypassing sensors and superposition entirely." },
    { "id": "b", "text": "Push the within-olfaction plume/chemical dissociation systematically across sub-problems in both substrates." },
    { "id": "c", "text": "Search for the off-diagonal cells: a sensing domain with excellent standardised hardware and strong demand but no labelled corpus." },
    { "id": "d", "text": "Build a compositional corpus on today's imperfect hardware, using a transfer standard so it pools across labs." },
    { "id": "e", "text": "Deliver a stable, standardised, device-independent chemical sensor array with no new corpus, and see whether the field moves." }
  ],
  "correctOrder": ["b", "c", "a", "d", "e"],
  "modelAnswerNote": "The ordering is about cost as much as power, and two of the top three cost almost nothing.\n\n**(b) first.** It is free, it uses literatures that already exist, and it is the only test that holds hardware, chemistry, dimensionality and commercial pull constant while varying the thing under dispute. No rival in §12.4 predicts the split it examines. Free plus discriminating is unbeatable.\n\n**(c) second.** Also nearly free — it is a literature search — and it addresses the module's own worst failure, which is that criterion 1 is not met: the sample of engineered domains was chosen with the conclusion known, and only the diagonal cells were examined. Finding a domain with good hardware, strong pull and no corpus would test the dataset account against both leading rivals at once.\n\n**(a) third.** Cheap, affordable now, and close to decisive between the dataset account and intrinsic difficulty — if a learner cannot recover source identity from *exact* composition, neither corpora nor sensors are the story. It ranks below (b) and (c) only because it needs new measurements, however few.\n\n**(d) fourth.** The real experiment, and expensive. It is what would actually settle the matter against the hardware rival, and it is a multi-year effort even in its cheap unlabelled form.\n\n**(e) last.** Most expensive, and the least under anyone's control — drift-free standardised chemical sensing has resisted decades of materials work. It is being run slowly by instrumentation improvement whether anyone chooses it or not.\n\nA reasonable person could put (a) first on the grounds that decisiveness should beat cost. The indefensible answer is (e) first."
}
</script>
</x-order>

<x-matrix>
<script type="application/json">
{
  "id": "m12.s07.mx1",
  "contentRev": 1,
  "points": 6,
  "corner": "Property",
  "prompt": "Fill in the machine olfaction column, then compare it against olfaction's biological column from §3.11. The point of the exercise is which rows agree across the two and which cannot, because that is the module's argument in one table.",
  "rows": [
    "Agreed input format",
    "Data transfers between devices",
    "Unlabelled input ensemble characterised",
    "Shared benchmark and metric",
    "Metric on the input, hence an architectural prior",
    "Where the field stalls"
  ],
  "columns": ["Machine vision", "Machine olfaction", "Your notes"],
  "cells": {
    "Agreed input format|Machine vision": { "answer": "pixel array", "accept": ["pixels", "image", "pixel", "array of intensities"] },
    "Agreed input format|Machine olfaction": { "answer": "none", "accept": ["no", "none agreed", "four incompatible candidates", "not agreed", "no standard"] },
    "Data transfers between devices|Machine olfaction": { "answer": "no", "accept": ["no", "does not transfer", "not transferable", "drift"] },
    "Unlabelled input ensemble characterised|Machine olfaction": { "answer": "no for chemistry, yes for plumes", "accept": ["no", "chemical no plume yes", "not chemically", "plume yes", "partly"] },
    "Shared benchmark and metric|Machine olfaction": { "answer": "no", "accept": ["no", "none", "absent"] },
    "Metric on the input, hence an architectural prior|Machine olfaction": { "answer": "no", "accept": ["no", "none", "no convolution", "no prior"] },
    "Where the field stalls|Machine olfaction": { "answer": "the input representation", "accept": ["input", "representation", "the input", "front end", "not the classifier"] }
  },
  "modelAnswerNote": "Read the filled table against olfaction's biological datasheet row and sort the entries into two piles.\n\n**Rows that agree across substrates:** no agreed representation, no characterised chemical ensemble, no metric, mixtures that do not superpose, and a stall located at the input rather than downstream. These are properties of the *problem*, and they show up wherever the problem does.\n\n**Rows that cannot agree:** everything specifically biological — receptor kinetics, the sampling deadline, the missing thalamic relay, adult neurogenesis, the metabolic budget. The artefact simply does not have them, and it stalls anyway.\n\nThat pattern is the module's argument compressed: the properties shared across substrates are candidates for the cause, and the properties present in only one substrate are eliminated from being the whole cause. Note the one row that refuses to be uniform even within a single column — the chemical/plume split on ensemble characterisation — which is the strongest evidence in the module and the thing §13 should press hardest."
}
</script>
</x-matrix>

<x-free-response>
<script type="application/json">
{
  "id": "m12.s07.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A colleague reads this module and says: \"You have shown nothing. Chemical sensors are terrible and cameras are excellent, and there is a hundred times more money in vision. That explains everything you have described, with no appeal to datasets at all.\" Write the reply. Concede what should be conceded, then say what your colleague's account cannot do — and finish with the one measurement that would settle it.",
  "modelAnswer": "**What to concede, and it should be conceded fully rather than grudgingly.**\n\nBoth halves are true and either is sufficient to explain the *engineering* gap on its own. Chemical sensors drift, cross-react, poison, and respond to humidity and temperature; §12.3's sharpest version of the point is that this makes an odour corpus not merely expensive but *not a redistributable object*, since a sensor response means nothing outside the device that produced it and the stimulus cannot be stored or replayed. And effort really has differed by orders of magnitude for decades. A reply that disputes either is not being honest.\n\n**What the account cannot do.**\n\nIt is silent on biology. Animals have superb chemical sensors — sensitive, fast enough to be interesting, not drift-limited over behavioural timescales — and academic olfactory neuroscience is not a small or poorly funded field. Yet olfactory *theory* lagged vision and audition in exactly the same direction. So the colleague's account needs one story for the engineering gap and a completely separate one for the theory gap, where the dataset account covers both with a single cause. That is parsimony rather than proof, but it is a real advantage and it is the one §12.4 rests on.\n\n**And it makes a prediction that fails.** Both hardware and commercial pull are constant across the plume/chemical split within olfaction. Plume statistics were characterised, and that sub-problem has both normative traction and working machines; chemical statistics were not, and that sub-problem has neither. Same sensors, same money, same animal, opposite outcomes. Neither rival predicts this; the dataset account predicts it exactly.\n\n**Where the colleague is more right than the module admits.** These are not competing hypotheses, they are a loop — unstable sensors prevent a transferable corpus, which prevents a benchmark, which prevents adjudication, which prevents success, which prevents pull, which prevents anyone funding sensors. Asking which one is 'the' cause may be malformed. The useful question is where the loop is cheapest to break, and the answer to that is an agreement about a transfer standard and a publication format rather than a discovery.\n\n**The measurement that would settle it.** Train a learner on exact GC-MS compositions with source labels, bypassing sensors and superposition entirely. If source identity cannot be recovered from exact composition, the difficulty is intrinsic and neither datasets nor sensors are the story. If it can be, the whole gap sits between the air and the sensor — which vindicates the colleague on engineering and leaves the theoretical gap needing the dataset explanation anyway. Both outcomes are informative, it is affordable now, and nobody appears to be running it.",
  "rubric": [
    "Concedes that either rival is sufficient for the engineering gap alone",
    "Identifies that both rivals are silent on the biological theory gap, and that the dataset account covers both with one cause",
    "Uses the within-olfaction plume/chemical control as the discriminating evidence, noting what is held constant",
    "Names a specific measurement that would separate the accounts",
    "Bonus: recognises the explanations form a loop rather than a set of competitors, so 'which is the cause' may be malformed",
    "Bonus: notes that commercial pull is partly endogenous, since pull is thin because the technology does not work"
  ]
}
</script>
</x-free-response>

<x-mcq>
<script type="application/json">
{
  "id": "m12.s07.q5",
  "contentRev": 1,
  "points": 1,
  "prompt": "§12.5 argues that Gap 1 is really two objects. Which version should a theorist who wants a normative account of olfactory coding ask for, and why is the answer encouraging?",
  "options": [
    {
      "text": "An unlabelled corpus of scene compositions from real environments — because efficient-coding derivations consume the marginal input distribution, so no annotation, no panel and no agreement about perception is required.",
      "correct": true,
      "feedback": "And the encouraging part is the cost. The labelling is where nearly all the expense sits, and the theory does not need it — exactly as a natural image database is a collection of photographs rather than a collection of judgements. §13.6 describes Gap 1 as a heroic decade-long effort, which fits the device version; the theory version is a smaller object that could be bootstrapped from compositional data atmospheric chemistry, food science and entomology are already generating for their own reasons. §12.5 adds one component the field's accounting omits: a receptor forward model, without which the ensemble cannot be pushed through the array."
    },
    {
      "text": "A corpus of odour samples with human perceptual ratings, since perceptual similarity is what any theory of odour coding must ultimately predict.",
      "correct": false,
      "feedback": "Correct under the assumption that the explanandum is perception, which is a defensible position and the one most existing odour datasets embody. But it is the expensive object, it is limited to stimuli a panel can be presented with — in practice single molecules at fixed concentration, which is §13.6's Gap 3 — and it presupposes the answer to what the code is for. §11.5 and §13.6 both argue the dominant consumer may be navigation, in which case perceptual ratings characterise a side effect."
    },
    {
      "text": "A corpus of receptor activation vectors measured across natural scenes, since that is the actual input to the first circuit.",
      "correct": false,
      "feedback": "Correct under the assumption that the receptor array is where the ensemble should be defined, and it is what the calculation ultimately needs. The problem is that it is not directly measurable at scale — you cannot record a thousand receptor types in a freely behaving animal in a forest. The practical route is composition plus a forward model, which decomposes the impossible measurement into an obtainable one and a characterisable one."
    },
    {
      "text": "Whichever is cheaper, since the two are interconvertible given enough compute.",
      "correct": false,
      "feedback": "Correct under the assumption that labels can be inferred from composition, which is precisely the mapping nobody has and the thing the labelled corpus exists to supply. The direction that *is* available is the other one — labelled pairs contain the unlabelled marginal for free, which is why §12.5's recommendation is a publication-policy point: if a labelled corpus is built, publish the compositional ensemble separately as a first-class object rather than burying it in a training pipeline."
    }
  ]
}
</script>
</x-mcq>

<x-callout class="x-callout is-key">
<div class="x-callout-title">What to carry into the next module</div>
The next module is the capstone, and this one arrives at it with an argument the capstone should test rather than adopt.

<strong>An elimination, and it is the module's most durable product.</strong> The asymmetry between olfaction and the other classical modalities is not specifically biological — it reproduces in systems with no metabolism, no evolution, no development and no anatomy. Every account of olfaction's theoretical backwardness that appeals to those constraints is thereby subtracted from being sufficient. §13.6 should read this alongside the taste and spinocerebellar eliminations, because it has the same logical form and a wider reach.

<strong>A confirmation of Gap 1 from outside, and a correction to it.</strong> The engineering evidence supports Gap 1 being the binding constraint, and it also corrects the accounting twice: Gap 1 is two objects of very different cost, and it has a component — the receptor forward model — that the field's statement of it omits.

<strong>An objection the capstone must answer.</strong> Datasets buy engineering success and theoretical understanding separately. A large corpus could produce a working artificial nose that answers not one question in §13.6, and vision is the cautionary case, since its normative theory came from a different dataset than its recognition performance did. "Build the database" is not automatically a purchase of understanding, and the research agenda should say which good it is buying.

<strong>And a warning about the method.</strong> §12.6 scores this module against the five criteria and it fails criterion one — the sample of engineered domains was chosen by the author with the conclusion known, and only the confirming cells were examined. That is the same failure the module attributes to olfactory theory. §13.6's closing note argues the comparative method over-produces plausible questions and under-weights what has no analogue; this module is an instance of both the method's strength and its characteristic vice, and should be read with that in view.
</x-callout>
