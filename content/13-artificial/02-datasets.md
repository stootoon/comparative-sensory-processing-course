---
id: m13.s02
title: What vision and audition got from their datasets
lede: In both engineered domains the corpus came first, assembled by people who did not know what would exploit it — the same ordering that makes the biological version of the argument persuasive. And trained vision systems converge on early filters that look like early visual cortex, which is a convergence argument rather than a resemblance.
estimatedMinutes: 24
---

Two engineered sensing problems were solved to a standard nobody expected: recognising objects in images, and recognising words in speech. Both had been worked on for decades with hand-designed representations and both were stuck at error rates that kept them out of general use. Both then moved very fast.

The interesting thing for this course is not the architectures. It is what had to exist before the architectures could do anything, and the order in which it appeared.

<x-figure src="content/13-artificial/figures/dataset-first.js"
  caption="The same table twice, in two substrates sharing almost nothing. What raises this above a correlation is the ordering, which is historical record rather than reconstruction: in every successful row the input was characterised first, by people who did not know what would exploit it. Filter to biology and note the row that breaks olfaction's uniform failure — the plume ensemble is measured and is the one place olfactory normative work has traction, a dissociation inside a single modality with anatomy, deadline and animal held fixed. Whether measurement is what produced it, or something correlated with it, is the question §13.4 leaves open.">
</x-figure>

## The ordering, in engineering

**Vision.** A large labelled image corpus — millions of photographs, organised into a category hierarchy, with human-assigned labels — was assembled and released publicly, together with an annual evaluation on a held-out test set. It was built as infrastructure. Its creators could not have known which method would eventually exploit it, because that method's decisive demonstration came afterwards, and the field's expectation at the time of assembly was that hand-designed feature descriptors would continue to dominate. The dataset was not built to confirm a result. It was built, and then a result happened on it.

**Speech.** The pattern is older and, if anything, cleaner. Large transcribed speech corpora were assembled from the 1980s onward under sponsored evaluation programmes whose explicit purpose was comparability: a common training set, a common test set, a common scoring rule, and a public evaluation in which every group's system was scored on the same audio. The corpora grew from carefully read sentences to conversational telephone speech to broadcast material, and each expansion of the corpus preceded rather than followed the progress it enabled. Error rates fell steadily under this regime for decades before any deep network was involved — which is worth noticing, because it means the corpus was buying something independent of the method it was later paired with.

Two features of these histories carry the argument.

**The dataset came first.** This is check 2 from §13.1's list, and it is the check a third-variable explanation cannot reproduce for free. If both dataset and result were downstream of a field maturing, you would expect them roughly contemporaneous, or the dataset assembled afterwards to demonstrate a method that already worked. Instead the dataset precedes by years, is built by different people with different motivations, and its assembly is frequently described at the time as unglamorous relative to method development. That is exactly the description §14.7 gives of what an odour-scene database would be, and exactly the reason it does not exist.

**The dataset came with a scoring rule.** Less discussed and possibly as important. A corpus alone is data; a corpus plus a held-out test set plus an agreed metric is an *adjudication mechanism*. It makes claims comparable, which means bad methods can be eliminated rather than merely disputed. Progress in both domains was substantially the accumulated effect of many groups being able to check whether a change helped, on a common yardstick, without arguing about the stimulus set. §14.7's Gap 4 names the olfactory absence of this, and correctly notes it is downstream of Gap 1 but not identical to it.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A sceptic says the dataset–success correlation in engineering is a third-variable artefact: tractable domains attract both corpora and results, so the corpus is a symptom of tractability rather than a cause. Which feature of the engineering record is the *strongest* answer?",
  "options": [
    {
      "text": "The corpora were assembled years before the methods that exploited them existed, by different people, against a contemporaneous expectation about what would work that turned out to be wrong.",
      "correct": true,
      "feedback": "This is the argument, and its force comes from the conjunction rather than from the ordering alone. A tractability story predicts corpus and result roughly contemporaneous, or the corpus assembled afterwards to demonstrate a method. It has to explain, additionally, why the corpus-builders were not the method-builders and why the field's own bets at the time were mistaken. Note that this is check 2 from §13.1, and it is exactly the check the biological version can only infer rather than document."
    },
    {
      "text": "The corpora came with a held-out test set and an agreed metric, which made bad methods eliminable rather than merely disputable.",
      "correct": false,
      "feedback": "Correct under the assumption that the adjudication mechanism is the operative ingredient, and this course thinks it is genuinely close to as important as the data — §14.7's Gap 4 exists for this reason. But it does not answer the sceptic, because a tractable field is exactly the kind of field that can agree on a metric. The benchmark is as vulnerable to the third-variable story as the corpus is; only the ordering is not."
    },
    {
      "text": "Speech error rates fell steadily under the corpus regime for decades before deep networks arrived.",
      "correct": false,
      "feedback": "Correct under the assumption that the challenge to answer is 'maybe the architecture did all the work' — and against *that* challenge this is the decisive observation, since it shows the corpus bought progress independently of the method it was later paired with. Against the tractability sceptic it is neutral: steady progress is what a tractable problem looks like."
    },
    {
      "text": "The same ordering appears in the biological cases, where natural image statistics were characterised before the retinal derivations [@simoncelli2001; @atick1992].",
      "correct": false,
      "feedback": "Correct under the assumption that a replicated pattern is stronger evidence than a single one. But the whole reason §13 exists is that the biological instances are not independent of each other and the ordering there is reconstructed rather than documented. Citing them to defend the engineering case reverses the direction of support the module is trying to establish."
    }
  ]
}
</script>
</x-mcq>

## The parallel with natural-scene statistics

The biological version of the same ordering is the course's opening story, and it is worth laying the two side by side because the resemblance is not superficial.

Natural image statistics were characterised — the 1/f² power spectrum, the non-Gaussian marginals of bandpass filter outputs, the specific correlational structure of natural scenes — largely by people not working on neural coding [@simoncelli2001]. Only then could anyone derive the retinal filter and its SNR-dependent crossover [@srinivasan1982; @atick1992], the opponent colour axes from natural cone responses [@buchsbaum1983; @ruderman1998], or oriented receptive fields from a sparseness objective [@olshausen1996]. The analogous audition history is the same shape: an ensemble of natural sounds characterised first, a filterbank derived from it afterwards, and the derived filterbank compared against cochlear tuning that had been measured independently [@lewicki2002; @smith2006].

In both modalities, in both substrates, the sequence is: **characterise the input, then derive or train, then evaluate against something measured independently.** Four instances, two of them engineered and two biological, and the two pairs share almost none of their causes.

<details class="x-deeper">
<summary>Two different datasets, doing two different jobs — and the course conflates them at its peril</summary>

The parallel above is real but it papers over a distinction that §13.4 and §13.5 both need.

Efficient-coding theory needs the **marginal** distribution of the input, $p(x)$. That is what natural image statistics are: an unlabelled characterisation of what the world delivers. From $p(x)$, plus a channel constraint and an objective, you derive a representation. No labels are involved anywhere, and none are wanted — the whole point of the framework is that the code can be derived without knowing what the organism will do with it.

Supervised engineering needs the **joint**, or really the conditional $p(y \mid x)$ — inputs paired with the answers a human would give. That is what a labelled image corpus is. It is a fundamentally different object, and it is expensive in a completely different way: $p(x)$ costs collection, $p(y\mid x)$ costs annotation.

So the sentence "vision had a dataset and olfaction does not" is doing double duty, and the two readings are not interchangeable:

- **The theory reading.** Vision had a measured $p(x)$, which made efficient-coding derivations possible. Olfaction has no measured $p(x)$ over chemical composition, which is why the analogous derivation cannot be run. This is §14.7's Gap 1 exactly.
- **The engineering reading.** Vision had a large $p(y\mid x)$ sample, which made supervised learning possible. Olfaction has no comparable labelled set.

These come apart, and the direction they come apart in is the uncomfortable one for candidate (a). **A large labelled corpus buys engineering success without necessarily buying any normative theory.** A network trained on a large odour dataset could plausibly identify odours well while yielding nothing that answers a single question in §14.7 — no derived coordinates, no account of receptor tuning breadth, no statement of what the bulb is computing. Conversely, a measured $p(x)$ with no labels at all would be exactly what the theory needs and would not by itself produce a working device.

The reason to keep them together anyway, and it is a real reason rather than a rescue: **collecting the input is the shared prerequisite.** Both readings require going out into the world and recording what actually arrives at the sensor, in a common format, at scale. That is the step olfaction has not taken, and it is the step both goods are downstream of. But it should now be clear that taking it guarantees neither good, and §13.5 has to specify which one it is trying to buy.
</details>

## The convergence result, and why it is more than a resemblance

Trained image-recognition networks develop, in their earliest layers and without anyone specifying it, filters that are oriented, spatially localised, and band-limited — the qualitative description of V1 simple cell receptive fields, and the same qualitative description that falls out of optimising a sparseness objective against natural images [@olshausen1996]. Further in, representations become progressively more invariant to position and appearance while preserving category, which is the ventral-stream description (§1.8), and representations from successive layers turn out to predict responses in successive visual areas better than the hand-designed models that preceded them.

The audition version is less celebrated and structurally similar: systems permitted to learn their own front end from raw waveforms, rather than being handed a fixed spectrogram, tend to arrive at bandpass filterbanks with roughly logarithmic spacing and bandwidths that widen with centre frequency — which is the object Lewicki derived from natural sound statistics [@lewicki2002] and, before that, the object the cochlea already was.

The temptation is to read these as "the network is like a brain", which is worth nothing. The reading that is worth something is the differential one from §13.1.

Consider what the two systems share. They share the input distribution — natural images, or natural sounds. They share the task, at least loosely: extract from that input something that supports categorisation and generalises. They share the constraint that the representation be built from a limited number of units with limited connectivity.

Now consider what they do not share. The network has no metabolic cost per spike, no membrane time constants, no developmental programme, no evolutionary history, no requirement to work while being built, no noise floor set by photon statistics, no need for its units to be alive. Its optimisation is gradient descent on a supervised loss over a fixed corpus; the brain's is whatever combination of evolution, development and experience-dependent plasticity produced it, which is not gradient descent on a supervised loss over a fixed corpus.

When two systems that share the input and the task, and share essentially nothing else, converge on the same early representation, the conclusion is not that either is like the other. It is that **the representation is forced by the input statistics and the task**, because there is nothing else left to force it. This is the logic §9.1 uses on the exotic senses — a natural experiment where the same computational problem is solved in a lineage sharing little else — with the sharing driven further down than any pair of animals can drive it.

The caveat from §13.1's box applies and should be kept in view: convolutional architectures inherited local receptive fields and weight sharing from an explicitly biological ancestry, so the resemblance is not entirely convergent. The bounded version of the claim is that the *architectural prior* was inherited and is far too weak to determine tuning, while the *tuning* — orientation, bandwidth, the spatial-frequency distribution — was discovered by optimisation against image statistics and matches. That narrower claim is the one that survives, and it is enough.

<x-mcq>
<script type="application/json">
{
  "id": "m13.s02.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "Trained networks develop oriented, localised, band-limited early filters, and audio front ends trained from raw waveforms arrive at roughly logarithmic filterbanks [@lewicki2002]. What does the convergence license, given that convolutional architectures were themselves borrowed from visual neuroscience?",
  "options": [
    {
      "text": "That the *tuning* — orientation, bandwidth, spatial-frequency distribution — is forced by the input statistics and the task, since the inherited architectural prior is far too weak to determine it.",
      "correct": true,
      "feedback": "This is the bounded claim, and the bound is the point. The designer supplied locality and weight sharing; nobody supplied orientation selectivity or the particular bandwidths, and those are what match. The differential argument therefore leaks at the architectural level and holds at the level of what optimisation discovers — narrower than the claim usually made, and enough. Compare [@olshausen1996], where a sparseness objective on natural images recovers the same filters with no biological architecture at all."
    },
    {
      "text": "That the network is a model of early visual cortex, since its layers predict responses in successive visual areas better than the hand-designed models did.",
      "correct": false,
      "feedback": "Correct under the assumption that predictive accuracy on neural data establishes mechanistic correspondence — the standard justification for encoding-model work, and a real result. But §13.1 rates algorithmic inference from artefacts thin and implementational inference empty. 'The network is like a brain' is worth nothing on its own; the differential reading is worth something, and they are different claims."
    },
    {
      "text": "Nothing, because the resemblance was designed in.",
      "correct": false,
      "feedback": "Correct under the assumption that any inheritance destroys a convergence argument, which is the right instinct applied too bluntly. The leak is bounded and can be located: priors inherited, tuning not. Discarding the whole argument because part of it leaks throws away the one clean positive convergence result the module has."
    },
    {
      "text": "That gradient descent on a supervised loss is a reasonable model of how the visual system was shaped.",
      "correct": false,
      "feedback": "Correct under the assumption that shared outcomes imply shared optimisation procedures. They do not — that is the whole content of the differential argument, which works precisely *because* the two systems arrived at the same place by procedures with nothing in common. Brains are not doing gradient descent on a labelled corpus, and the convergence is interesting for that reason rather than in spite of it."
    }
  ]
}
</script>
</x-mcq>

## What this predicts for a modality with no dataset

Put the two threads together and candidate (a) makes a sharp prediction.

If input statistics are what determine the representation, and if characterising them is the prerequisite for both the derivation and the training, then a modality whose input statistics nobody has characterised should show **both** failures — no normative theory, and no working engineered system — and it should show them for the same reason, and the failure should sit at the input representation rather than downstream of it.

That is a strong prediction in the sense that matters — it is conjunctive and it specifies a location. It would be embarrassed by a modality with a mature theory and no dataset, by one with a working machine and no dataset, or by an engineered failure that turned out to be a failure of classifiers rather than of representations.

What it is not is a *discriminating* prediction, and this is the part to hold on to. Candidate (b) — no metric, hence no architectural prior, hence a far larger sample requirement — predicts a stall at the input representation as well, by a different route. Candidate (c) — non-superposition — predicts that the calculations which break are the ones that assumed linearity, and the input representation is exactly where those live. Candidate (e) — a smaller, younger, thinner-funded field — predicts a stall wherever the effort was not applied, and effort in engineering goes first to the input. Three of the four candidates converge on the same prediction, which means confirming it moves all of them together.

Olfaction is the case to look at, and §13.3 goes and looks. What it finds constrains the list; it does not shorten it to one.
