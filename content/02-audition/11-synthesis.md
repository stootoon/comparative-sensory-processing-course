---
id: m02.s11
title: Normative synthesis and the olfaction hook
lede: Audition delivered the second great derivation of a receptor array from natural statistics. It also shows the theory failing at the same depth vision's does — and the pair of failures says something useful about what to expect from olfaction.
estimatedMinutes: 14
---

## Scoring the theories

**What worked.** The filterbank derivation [@lewicki2002; @smith2006] is the second-strongest normative result in sensory neuroscience, and it satisfies four of the five criteria from §0.2: measured ensemble, physical constraint, quantitative prediction, confirmed against independent data. It has few free parameters.

**What worked dynamically.** Adaptation to sound-level statistics [@dean2005] converts efficient coding from an evolutionary claim into an observable process.

**What did not work.** No comparable account of A1. STRFs explain a modest fraction of variance and change with task. The normative programme degrades with depth, exactly as it does in vision.

**What is contested.** ITD coding — place map or two channels — turned out not to be a disagreement about mechanism but about which animal, and the normative resolution (§2.5) is one of the most satisfying results in the course.

## The comparative datasheet

<x-figure src="content/00-toolkit/figures/datasheet.js"
  caption="The datasheet across all eight modalities. Audition matches vision on ensemble, stationarity and ordering, and differs sharply on dimensionality and tuning — which is what makes it the control condition that turns a two-way contrast into a trend.">
</x-figure>


| Property | Vision | Audition | Olfaction |
|---|---|---|---|
| Array ordering | ordered | ordered | **unordered** |
| Dimensionality | 2 spatial + 3 spectral | 1 (frequency) | ~400–1000, no metric |
| Tuning breadth | very broad (spectral) | narrow | broad |
| Ensemble measured | yes | yes | **no** |
| Statistics stationary | yes | yes | **no** |
| Sensor vs signal speed | comparable | sensor much faster | **sensor slower** |
| Mixture problem | occlusion (not additive) | additive, 1-D carrier | additive-ish, high-D, nonlinear |
| Grouping cues | many | harmonicity, onset, modulation, space | **temporal correlation only** |
| Synapses to cortex | 4 | 5+ | **2** |
| Obligatory relay | LGN | IC and MGB | none |

Read down the olfaction column: every bold entry is a place where olfaction is the odd one out among three, not two. That is the difference a third modality makes — it turns "olfaction differs from vision" into "olfaction differs from both modalities that have working theories, in the same direction, on the same properties."

<x-matrix>
<script type="application/json">
{
  "id": "m02.s11.mx1",
  "contentRev": 1,
  "points": 4,
  "corner": "Property",
  "prompt": "Cover the table above and reproduce audition's column. It is the control condition for the whole course, so it is worth being able to state without looking.",
  "rows": [
    "Array dimensionality",
    "Tuning breadth",
    "Obligatory relay",
    "Strongest normative result"
  ],
  "columns": ["Audition"],
  "cells": {
    "Array dimensionality|Audition": { "answer": "1 (frequency)", "accept": ["1","one","frequency","1 (frequency)","one dimension","1d","one-dimensional"] },
    "Tuning breadth|Audition": { "answer": "narrow", "accept": ["narrow","narrowly tuned","sharp","sharply tuned","very narrow"] },
    "Obligatory relay|Audition": { "answer": "IC and MGB", "accept": ["ic","ic and mgb","inferior colliculus","inferior colliculus and mgb","mgb","inferior colliculus and medial geniculate","yes"] },
    "Strongest normative result|Audition": { "answer": "cochlear filterbank derived from natural sounds", "accept": ["filterbank","filter bank","cochlear filters from natural sounds","lewicki","efficient coding of natural sounds","filterbank derivation"] }
  },
  "modelAnswerNote": "Two of these rows are the reason audition is worth a module of its own rather than a paragraph.\n\n**Dimensionality and tuning together are the clean test of the tuning-breadth theory.** The theory says an optimal code tiles the stimulus space, so the number of channels and their width should be set by the dimensionality of what is being encoded. Vision has three spectral channels so broad they overlap almost completely; audition has ~3,500 channels so narrow they barely do. Those are opposite designs, and the theory predicts both from one number — the dimensionality of the space each is tiling. A one-dimensional space can be tiled densely by narrow filters at modest cost; a space tiled at that resolution in three dimensions would need thousands of pigments. This is why audition is not merely a second example but a *control*: it varies the input variable and the prediction tracks it.\n\n**The relay row turns a two-way contrast into a trend.** Vision has one obligatory relay, audition has two or more, olfaction has none. With two modalities you can only say olfaction differs from vision; with three you have a direction, and the direction is what §2.6's depth hypothesis has to explain."
}
</script>
</x-matrix>

<x-callout class="x-callout is-key">
<div class="x-callout-title">The olfaction hook</div>
Three things audition hands forward.

<strong>1. The filterbank calculation is the template.</strong> §2.4 set out its five steps. Steps 2–5 are ready for olfaction; step 1 — the measured ensemble — does not exist. But §2.4's prediction exercise raised a subtler problem: Lewicki could optimise for "encode the waveform" because in audition the signal <em>is</em> the thing. In olfaction the receptor pattern is not the thing; the animal wants latent causes. <strong>The olfactory version may not be an efficient-coding problem at all, but an inference problem</strong> — and §0.1 warned those give different answers.

<strong>2. Temporal correlation is olfaction's harmonicity.</strong> Audition solves demixing with lawful relations between components of one source. Chemistry offers no lawful relation, so the only cue left is that molecules from one source travel together and fluctuate together. Same slot in the same inference, different physics filling it.

<strong>3. The what/where split now has two independent instances.</strong> Vision could be explained away by its spatial receptor array. Audition has no spatial dimension in its array and splits anyway. That makes the split a consequence of the computational problem — and predicts olfaction should have one too.
</x-callout>
