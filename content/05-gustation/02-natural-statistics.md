---
id: m05.s02
title: The signal and its natural statistics
lede: Taste's stimulus space is genuinely low-dimensional — not projected down like colour, but small to begin with. That makes it the one modality where the ensemble question is almost trivial, and the contrast with olfaction instructive.
estimatedMinutes: 11
---

## A small space

Vision's stimulus space is infinite-dimensional and gets projected to three (§1.4). Olfaction's is enormous and stays enormous (§3.4). Taste's is **small at source**.

The behaviourally relevant classes number about five: sweet (caloric sugars), umami (amino acids, hence protein), salty (electrolytes), sour (acids, hence spoilage or unripeness), bitter (a heterogeneous toxin proxy). Some argue for fat and for calcium as additional classes.

Each corresponds to a **nutritional or toxicological category**, not to a chemical family. That is the key structural fact: taste's dimensions are defined by what the compounds *do to the animal*, not by what they are.

<x-figure src="content/media/tongue-foliate-papilla-section.jpg"
  caption="A foliate papilla in section, with taste buds embedded in the trench walls. The anatomy is elaborate; the stimulus space it serves has about five dimensions. Compare the olfactory epithelium, whose anatomy is far simpler and whose stimulus space has hundreds — a reminder that structural complexity does not track computational difficulty."
  credit="Henry Vandyke Carter, Gray's Anatomy (1918), plate 1021. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Gray1021.png">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">Dimensions defined by consequence, not chemistry</div>
This is worth dwelling on, because it is the sharpest version of the §13 question about olfactory coordinates.

The reason taste has an easy ensemble is not that its chemistry is simple — bitter compounds are chemically wildly heterogeneous. It is that <strong>the dimensions were chosen by the consequence</strong>. "Bitter" is not a chemical category; it is the category of things that made ancestors ill.

So when §13 asks whether olfaction has derivable coordinates, there are two quite different hopes on the table:

<strong>The vision-style hope:</strong> coordinates fall out of the statistics of the stimulus itself, as opponent axes do from cone correlations.<br>
<strong>The taste-style hope:</strong> coordinates are defined by behavioural consequence, and would have to be derived from what odours <em>do</em> rather than from what they are.

These are different research programmes. The co-occurrence approach [@zhou2018] is closer to the first; a valence-based organisation would be the second. <strong>They could both be partly right</strong>, with different olfactory pathways organised on different principles — which is precisely what the piriform / cortical-amygdala split suggests (§3.8).
</x-callout>

## The post-ingestive channel

The second ensemble is what happens *after* swallowing. Gut receptors detect nutrients and signal to the brain over minutes, and this channel drives preference learning independently of taste — animals develop preferences for flavours paired with post-ingestive nutrient delivery even when the taste itself is neutral.

This is a **supervised learning signal with a delayed, noisy, but ground-truth teacher**. Taste has something no other modality in this course has: an independent channel that tells it whether its decision was right.

Vision never learns whether it identified an object correctly except through behavioural consequence. Taste gets a direct nutritional report. That asymmetry probably explains why taste can afford to be hard-wired — it has a mechanism for correcting the hard-wiring where it is wrong.

<x-mcq>
<script type="application/json">
{
  "id": "m05.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "§1.2 and §2.2 both begin by measuring a natural stimulus ensemble; §3.2 reports that olfaction's chemical ensemble does not exist. Taste's ensemble question looks trivial. What does the triviality actually consist in?",
  "options": [
    {
      "text": "The dimensions were fixed in advance by behavioural consequence, so the ensemble is a distribution over a handful of pre-defined categories rather than over an unbounded stimulus space.",
      "correct": true,
      "feedback": "Right, and stating it this way makes clear that the triviality is bought rather than given. Vision and audition had to *discover* their coordinates from the statistics of the signal. Taste's coordinates were supplied by evolution from the consequences, so the hard half of the problem — what are the axes — was solved before any measuring began. That is why the callout above treats taste as the exemplar of the second hope for olfactory coordinates, and why the two hopes are different research programmes rather than two routes to one answer."
    },
    {
      "text": "Taste's chemical space really is small — there are far fewer tastants than odorants.",
      "correct": false,
      "feedback": "Correct under the assumption that stimulus-space size tracks the number of relevant molecules. It does not, and the section says so directly: bitter compounds are chemically wildly heterogeneous, and there are hundreds of them. The set of molecules is large; the set of *categories* is small, because the categories were defined by what the compounds do rather than by what they are. Confusing the two is what makes taste look like an easy chemistry problem when it is really a solved coordinates problem."
    },
    {
      "text": "The post-ingestive channel supplies ground truth, so the ensemble can be estimated online rather than measured in advance.",
      "correct": false,
      "feedback": "Partly correct, and it is the right account of something else — how taste corrects its hard-wiring, which the section's last paragraph develops. But a teaching signal tells you whether a decision was right; it does not tell you what the stimulus dimensions are. An animal with a perfect nutritional report and no pre-defined categories would still face the coordinates problem. The teacher fixes the mapping, not the axes."
    },
    {
      "text": "With five channels, the covariance structure can be estimated from a small number of samples, so the measurement is cheap.",
      "correct": false,
      "feedback": "Correct under the assumption that the obstacle in olfaction is sample complexity — the same assumption the vision quiz flags as a soluble practical worry rather than the deep one. Low dimensionality does make estimation cheap, and that is a genuine advantage. But it presupposes you already know which five quantities to compute covariances among, which is exactly what olfaction lacks. Estimation is easy once the coordinates exist."
    }
  ]
}
</script>
</x-mcq>
