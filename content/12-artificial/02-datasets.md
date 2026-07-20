---
id: m12.s02
title: What vision and audition got from their datasets
lede: In both engineered domains the corpus came first, assembled by people who did not know what would exploit it — the same ordering that makes the biological version of the argument persuasive. And trained vision systems converge on early filters that look like early visual cortex, which is a convergence argument rather than a resemblance.
estimatedMinutes: 24
---

Two engineered sensing problems were solved to a standard nobody expected: recognising objects in images, and recognising words in speech. Both had been worked on for decades with hand-designed representations and both were stuck at error rates that kept them out of general use. Both then moved very fast.

The interesting thing for this course is not the architectures. It is what had to exist before the architectures could do anything, and the order in which it appeared.

<x-figure src="content/12-artificial/figures/dataset-first.js"
  caption="The same table twice, in two substrates sharing almost nothing. What raises this above a correlation is the ordering, which is historical record rather than reconstruction: in every successful row the input was characterised first, by people who did not know what would exploit it. Filter to biology and note the row that breaks olfaction's uniform failure — the plume ensemble is measured and is the one place olfactory normative work has traction, which is the course's claim reproducing itself inside a single modality with anatomy, deadline and animal held fixed.">
</x-figure>

## The ordering, in engineering

**Vision.** A large labelled image corpus — millions of photographs, organised into a category hierarchy, with human-assigned labels — was assembled and released publicly, together with an annual evaluation on a held-out test set. It was built as infrastructure. Its creators could not have known which method would eventually exploit it, because that method's decisive demonstration came afterwards, and the field's expectation at the time of assembly was that hand-designed feature descriptors would continue to dominate. The dataset was not built to confirm a result. It was built, and then a result happened on it.

**Speech.** The pattern is older and, if anything, cleaner. Large transcribed speech corpora were assembled from the 1980s onward under sponsored evaluation programmes whose explicit purpose was comparability: a common training set, a common test set, a common scoring rule, and a public evaluation in which every group's system was scored on the same audio. The corpora grew from carefully read sentences to conversational telephone speech to broadcast material, and each expansion of the corpus preceded rather than followed the progress it enabled. Error rates fell steadily under this regime for decades before any deep network was involved — which is worth noticing, because it means the corpus was buying something independent of the method it was later paired with.

Two features of these histories carry the argument.

**The dataset came first.** This is check 2 from §12.1's list, and it is the check a third-variable explanation cannot reproduce for free. If both dataset and result were downstream of a field maturing, you would expect them roughly contemporaneous, or the dataset assembled afterwards to demonstrate a method that already worked. Instead the dataset precedes by years, is built by different people with different motivations, and its assembly is frequently described at the time as unglamorous relative to method development. That is exactly the description §13.6 gives of what an odour-scene database would be, and exactly the reason it does not exist.

**The dataset came with a scoring rule.** Less discussed and possibly as important. A corpus alone is data; a corpus plus a held-out test set plus an agreed metric is an *adjudication mechanism*. It makes claims comparable, which means bad methods can be eliminated rather than merely disputed. Progress in both domains was substantially the accumulated effect of many groups being able to check whether a change helped, on a common yardstick, without arguing about the stimulus set. §13.6's Gap 4 names the olfactory absence of this, and correctly notes it is downstream of Gap 1 but not identical to it.

## The parallel with natural-scene statistics

The biological version of the same ordering is the course's opening story, and it is worth laying the two side by side because the resemblance is not superficial.

Natural image statistics were characterised — the 1/f² power spectrum, the non-Gaussian marginals of bandpass filter outputs, the specific correlational structure of natural scenes — largely by people not working on neural coding [@simoncelli2001]. Only then could anyone derive the retinal filter and its SNR-dependent crossover [@srinivasan1982; @atick1992], the opponent colour axes from natural cone responses [@buchsbaum1983; @ruderman1998], or oriented receptive fields from a sparseness objective [@olshausen1996]. The analogous audition history is the same shape: an ensemble of natural sounds characterised first, a filterbank derived from it afterwards, and the derived filterbank compared against cochlear tuning that had been measured independently [@lewicki2002; @smith2006].

In both modalities, in both substrates, the sequence is: **characterise the input, then derive or train, then evaluate against something measured independently.** Four instances, two of them engineered and two biological, and the two pairs share almost none of their causes.

<details class="x-deeper">
<summary>Two different datasets, doing two different jobs — and the course conflates them at its peril</summary>

The parallel above is real but it papers over a distinction that §12.4 and §12.5 both need.

Efficient-coding theory needs the **marginal** distribution of the input, $p(x)$. That is what natural image statistics are: an unlabelled characterisation of what the world delivers. From $p(x)$, plus a channel constraint and an objective, you derive a representation. No labels are involved anywhere, and none are wanted — the whole point of the framework is that the code can be derived without knowing what the organism will do with it.

Supervised engineering needs the **joint**, or really the conditional $p(y \mid x)$ — inputs paired with the answers a human would give. That is what a labelled image corpus is. It is a fundamentally different object, and it is expensive in a completely different way: $p(x)$ costs collection, $p(y\mid x)$ costs annotation.

So the sentence "vision had a dataset and olfaction does not" is doing double duty, and the two readings are not interchangeable:

- **The theory reading.** Vision had a measured $p(x)$, which made efficient-coding derivations possible. Olfaction has no measured $p(x)$ over chemical composition, which is why the analogous derivation cannot be run. This is §13.6's Gap 1 exactly.
- **The engineering reading.** Vision had a large $p(y\mid x)$ sample, which made supervised learning possible. Olfaction has no comparable labelled set.

These come apart, and the direction they come apart in is the uncomfortable one for this course. **A large labelled corpus buys engineering success without necessarily buying any normative theory.** A network trained on a large odour dataset could plausibly identify odours well while yielding nothing that answers a single question in §13.6 — no derived coordinates, no account of receptor tuning breadth, no statement of what the bulb is computing. Conversely, a measured $p(x)$ with no labels at all would be exactly what the theory needs and would not by itself produce a working device.

The reason to keep them together anyway, and it is a real reason rather than a rescue: **collecting the input is the shared prerequisite.** Both readings require going out into the world and recording what actually arrives at the sensor, in a common format, at scale. That is the step olfaction has not taken, and it is the step both goods are downstream of. But it should now be clear that taking it guarantees neither good, and §12.5 has to specify which one it is trying to buy.
</details>

## The convergence result, and why it is more than a resemblance

Trained image-recognition networks develop, in their earliest layers and without anyone specifying it, filters that are oriented, spatially localised, and band-limited — the qualitative description of V1 simple cell receptive fields, and the same qualitative description that falls out of optimising a sparseness objective against natural images [@olshausen1996]. Further in, representations become progressively more invariant to position and appearance while preserving category, which is the ventral-stream description (§1.8), and representations from successive layers turn out to predict responses in successive visual areas better than the hand-designed models that preceded them.

The audition version is less celebrated and structurally similar: systems permitted to learn their own front end from raw waveforms, rather than being handed a fixed spectrogram, tend to arrive at bandpass filterbanks with roughly logarithmic spacing and bandwidths that widen with centre frequency — which is the object Lewicki derived from natural sound statistics [@lewicki2002] and, before that, the object the cochlea already was.

The temptation is to read these as "the network is like a brain", which is worth nothing. The reading that is worth something is the differential one from §12.1.

Consider what the two systems share. They share the input distribution — natural images, or natural sounds. They share the task, at least loosely: extract from that input something that supports categorisation and generalises. They share the constraint that the representation be built from a limited number of units with limited connectivity.

Now consider what they do not share. The network has no metabolic cost per spike, no membrane time constants, no developmental programme, no evolutionary history, no requirement to work while being built, no noise floor set by photon statistics, no need for its units to be alive. Its optimisation is gradient descent on a supervised loss over a fixed corpus; the brain's is whatever combination of evolution, development and experience-dependent plasticity produced it, which is not gradient descent on a supervised loss over a fixed corpus.

When two systems that share the input and the task, and share essentially nothing else, converge on the same early representation, the conclusion is not that either is like the other. It is that **the representation is forced by the input statistics and the task**, because there is nothing else left to force it. This is the logic §8.1 uses on the exotic senses — a natural experiment where the same computational problem is solved in a lineage sharing little else — with the sharing driven further down than any pair of animals can drive it.

The caveat from §12.1's box applies and should be kept in view: convolutional architectures inherited local receptive fields and weight sharing from an explicitly biological ancestry, so the resemblance is not entirely convergent. The bounded version of the claim is that the *architectural prior* was inherited and is far too weak to determine tuning, while the *tuning* — orientation, bandwidth, the spatial-frequency distribution — was discovered by optimisation against image statistics and matches. That narrower claim is the one that survives, and it is enough.

## What this predicts for a modality with no dataset

Put the two threads together and the prediction is sharp.

If input statistics are what determine the representation, and if characterising them is the prerequisite for both the derivation and the training, then a modality whose input statistics nobody has characterised should show **both** failures — no normative theory, and no working engineered system — and it should show them for the same reason, and the failure should sit at the input representation rather than downstream of it.

That is a strong prediction because it is conjunctive and because it specifies a location. It would be embarrassed by a modality with a mature theory and no dataset, by one with a working machine and no dataset, or by an engineered failure that turned out to be a failure of classifiers rather than of representations.

Olfaction is the test case, and §12.3 goes and looks.
