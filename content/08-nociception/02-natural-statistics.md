---
id: m08.s02
title: The signal and its natural statistics
lede: There is no carrier and no spectrum. What can be measured instead is the distribution of injuries an animal actually sustains — and nobody has measured it. This section is about what that absence does and does not license.
estimatedMinutes: 12
---

Every other §2 in this course opens with physics. Light arrives as photons with a measurable spectrum; sound as pressure fluctuations with a measurable modulation spectrum; odours as molecules in a plume with measurable intermittency statistics [@celani2014]. The section then reports what has been measured about natural input, and §1.5, §2.5 and §6.5 use those measurements to derive filters.

**Nociception has no such opening**, and pretending otherwise would be the kind of descriptive-with-a-normative-sentence-attached writing this course is trying to avoid. There is no carrier. Damage is not transmitted through a medium; it happens to you.

So the honest question is: what *is* the ensemble here, and what would it take to measure it?

## Three candidate ensembles, in increasing order of usefulness

**The physical correlates.** You could measure the distribution of temperatures, forces and tissue pH an animal encounters — a genuine physical ensemble, and one that could in principle support an efficient-coding calculation for each transduction channel separately. This is measurable and largely unmeasured. What exists is scattered: skin thermal tolerance curves, mechanical failure thresholds for tissue, the pH range of inflamed tissue. Nobody has assembled them as an ensemble the way natural image databases were assembled.

**The injury ensemble.** The distribution over *events*: what fraction of injuries in a free-living animal are thermal, mechanical, chemical; where on the body; how severe; how they are distributed over a lifetime. This is the ensemble the loss-function argument actually needs, because it is the prior over the latent variable. It is also the one that is hardest to obtain, for an obvious and unfixable reason: **you cannot instrument an animal for the injuries it did not survive**, and those are precisely the events with the largest weight in the cost matrix. The distribution is censored exactly where it matters most.

**The consequence ensemble.** The distribution over *outcomes* given events: how often does an untreated wound become fatal, how much does guarding a limb improve healing, what does a false alarm actually cost. This is what would let you write down the cost matrix of §8.1 with numbers rather than adjectives. Some of it is estimable from veterinary and wildlife mortality data; almost none of it has been assembled for this purpose.

<x-figure src="content/00-toolkit/figures/modality-space.js"
  caption="Set the horizontal axis to 'Is the natural ensemble measured?'. Nociception sits at the far left with olfaction — but for a different reason, and the difference matters more than the shared position. Olfaction's ensemble exists and has not been measured; nociception's does not exist in the form the method requires. Two modalities can fail step one of the efficient-coding template for reasons that call for entirely different repairs.">
</x-figure>


<x-callout class="x-callout is-key">
<div class="x-callout-title">Two ways to fail step one</div>
§1.2's template starts with a measured ensemble of natural stimuli. Two modalities in this course cannot supply it, and conflating them would be a mistake.

<strong>Olfaction's failure is practical.</strong> There is a well-defined physical stimulus — the concentration of each of many volatiles at the nose over time — and a well-defined ensemble that could be measured with enough instruments and enough patience. The fix is engineering and money. §3.2 says so, and §13.1 argues the dataset is the bottleneck.

<strong>Nociception's failure is definitional.</strong> There is no physical variable whose distribution you could measure, because the encoded quantity is a consequence. No instrument measures "potential tissue damage" the way a photometer measures irradiance. The fix is not a better instrument; it is a different question.

<strong>The useful consequence:</strong> nociception should be analysed as a <em>detection problem under a stated cost matrix</em>, not as an <em>encoding problem under a stated ensemble</em>. Signal detection theory, not efficient coding. That reframing is available and cheap, and it is what §8.1's figure does.
</x-callout>

## What can be said about the statistics anyway

Three properties of the input are well enough established to constrain a design, and all three are structural rather than spectral.

**Rarity.** Injuries are rare relative to the sampling rate of the system. A nociceptor sits silent for weeks. Compare a photoreceptor, which is driven continuously, or a hair cell, which is driven whenever there is sound. **A detector for rare events has a different optimal design from an encoder of continuous signals** — you cannot spend your dynamic range on fine discrimination near the mode of a distribution that is a spike at zero. This alone predicts a thresholded, near-binary response rather than a graded one, and it predicts that the interesting variation is in *whether* rather than *how much*.

**Heavy-tailed severity.** Most insults are trivial; a small number are catastrophic. Under a heavy-tailed severity distribution with a convex cost function, the expected cost is dominated by the tail, and the optimal detector is tuned to the tail rather than to the bulk. That is a second, independent route to the same low-threshold prediction as §8.1's asymmetry argument, and the two are worth keeping apart because they could in principle come apart.

**Persistence.** This is the property that makes nociception different from every other modality in the course, and §8.10 is built on it. When a photon arrives, the event is over. When a sound ends, the signal ends. **When tissue is damaged, the damage persists and continues to matter for hours to weeks.** The state being reported has a correlation time enormously longer than the stimulus that announced it.

Every adaptation argument in this course rests on the idea that repeated input is redundant. That idea is a claim about the *signal*, and it holds when the signal's referent is transient. Here the referent persists, and so continued afferent traffic is not redundant — it is confirmation that the problem is unresolved. **Reverse the assumption and you reverse the sign of the optimal gain change.** Hold that thought until §8.10; it is the module's best result.

<x-mcq>
<script type="application/json">
{
  "id": "m08.s02.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Suppose someone assembled the injury ensemble — a large, careful survey of injuries sustained by free-living animals of one species, with type, site and severity. What would that dataset most usefully support, and what would it still not settle?",
  "options": [
    {
      "text": "It would support a prior over injury type and site, which predicts the relative allocation of transduction channels and of innervation density across the body — but it would not settle the cost matrix, because it is censored at exactly the fatal events that dominate the loss.",
      "correct": true,
      "feedback": "Right on both halves. The prior is genuinely useful: a Ganguli–Simoncelli argument [@ganguli2014] says receptor density should track the prior, so an injury survey makes a quantitative prediction about innervation density across body sites that could be checked directly. That is the most tractable normative calculation available in this module. But the censoring is fundamental — an ensemble compiled from surviving animals systematically under-weights the events with the largest cost, and no amount of additional sampling of survivors fixes it. This is a sharper version of the ancestral-ensemble problem §5.11 raises for taste."
    },
    {
      "text": "It would let you run the efficient-coding template properly for the first time, since step one would finally be satisfied.",
      "correct": false,
      "feedback": "Correct under the assumption that any measured distribution over inputs satisfies step one. It does not: efficient coding needs the ensemble of the quantity being *encoded*, and an injury survey is an ensemble of events, not of the variable a nociceptor's output is a function of. You would have a prior for a detection problem, which is useful and is what the correct answer says — but calling it efficient coding imports an objective (maximise transmitted information subject to cost) that nobody has argued applies here."
    },
    {
      "text": "It would settle whether nociceptors are labelled lines or a pattern code, since the ensemble would reveal which insults need distinguishing.",
      "correct": false,
      "feedback": "Correct under the assumption that coding format is determined by the statistics of the input alone. It is not — §5.4 makes exactly this point about taste, and the lesson is that coding format is determined jointly by the input statistics and by what the consumer must do. Two insults that are statistically distinct still need not be distinguished if the correct action is identical for both. The ensemble constrains the answer without determining it."
    },
    {
      "text": "It would let you calculate the optimal threshold of each transduction channel directly, since the threshold is set by where the injury distribution has most of its mass.",
      "correct": false,
      "feedback": "Correct under the assumption that thresholds should be placed where the input density is highest — the standard efficient-coding intuition, and the right one for a continuous encoder. But §8.2 argues the severity distribution is heavy-tailed and the cost function convex, so the expected cost is dominated by the tail rather than the mode. Placing the threshold at the mode would optimise the wrong quantity. This distractor is worth sitting with, because it is the exact place where importing vision's intuitions into nociception goes wrong."
    }
  ]
}
</script>
</x-mcq>

## Non-stationarity, and a comparison with olfaction

The statistics are non-stationary, but in a specific and tractable way.

Olfaction's non-stationarity (§3.2) is about the world: the set of relevant odours changes with season, habitat and diet, so the encoder has to track a moving target. Nociception's is about the body: **the statistics change because the body has been damaged**. A sunburned patch of skin has different input statistics from unburned skin, for days, and the change is caused by the very event the system exists to detect.

That is a closed loop between the state of the sensor's substrate and the statistics it faces, and it has no clean analogue elsewhere in the course. The nearest is proprioception's body-schema update after tool use (§7.10), and even there the change is voluntary and reversible. Here the non-stationarity is imposed by the signal itself.

The design consequence is that the system needs a **state variable**, not just a filter. A sensor tracking stationary statistics can be characterised by a fixed transfer function plus a slow gain. A sensor whose statistics are set by a damage state it is itself reporting needs to represent that state, and to set its gain from it. Peripheral and central sensitization are exactly that mechanism (§8.10), and they are the reason nociception's §10 is the most interesting section in the module rather than the most routine one.

<x-free-response>
<script type="application/json">
{
  "id": "m08.s02.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "This course's method is to state the objective, measure the ensemble, derive, compare. Nociception cannot supply the ensemble in the required form. Write the strongest case that the method should therefore be abandoned for this modality — and then the strongest rebuttal.",
  "modelAnswer": "**The case for abandoning it.**\n\nThe course's five criteria (§0.2) demand a measured ensemble and a risky advance prediction. Nociception can supply neither. The encoded variable has no physical definition, so no distribution over it can be measured; the closest proxy, the injury ensemble, is censored at the events that carry most of the loss and has not been assembled anyway. Without an ensemble, the objective can be chosen after seeing the biology, which is precisely the failure mode §1.12 identifies as turning optimisation arguments into unfalsifiable stories.\n\nWorse, the cost matrix is not measured either. Saying 'misses are catastrophic and false alarms are cheap' is qualitatively obvious and quantitatively empty — and every design consequence in §8.1 was derived from the *sign* of the asymmetry, not its magnitude. A theory that only uses the sign of a parameter makes very few predictions and can absorb almost any observation. On this reading nociception belongs with the descriptive chapters, and the normative language is decoration.\n\n**The rebuttal.**\n\nThe argument proves too much, and it misidentifies which method is being used.\n\nFirst, it assumes the only normative framework available is efficient coding. It is not. Signal detection theory takes a cost matrix and a likelihood ratio and returns an optimal criterion, and it needs no ensemble of the encoded variable — only the two class-conditional distributions of the evidence. Those are measurable: you can measure how nociceptor firing is distributed under damaging and non-damaging stimuli. The framework is available, cheap, and rarely applied to this system.\n\nSecond, the sign-only complaint understates what was derived. From the sign of the asymmetry plus the structure of the latent variable, §8.1 derives polymodality, an OR combination rule, low thresholds, and — via §8.2's persistence argument — the *sign reversal of adaptation*. That last one is a genuinely risky prediction: every other modality in this course adapts downward, so a framework predicting upward here could have been wrong and was not. Risky predictions are what §0.2 asks for, and this is one.\n\nThird, comparison is doing work even without numbers. The within-modality contrast of §8.4 — cutaneous against visceral, spatial precision varying by two orders of magnitude with the loss function roughly fixed — is a controlled comparison of exactly the kind the course values, and it does not require a measured ensemble.\n\n**The honest position.**\n\nThe method is not abandoned; it is *substituted*. Nociception is a detection problem, not an encoding problem, and the course should say so rather than forcing the efficient-coding template onto a modality it does not fit. What is genuinely lost is quantitative precision: no filter is derived, no tuning curve predicted from measured statistics, and §8.11 has to score the module accordingly. What is gained is a demonstration that the normative programme has more than one instrument in it — which is worth knowing before the capstone, where olfaction's step-one failure has too often been treated as the end of the discussion rather than a reason to change tools.",
  "rubric": [
    "States the case for abandonment in terms of the missing ensemble AND the unmeasured cost matrix, not just the first",
    "Notes that deriving consequences from the sign of a parameter alone yields weak predictions",
    "Rebuts by distinguishing efficient coding from signal detection theory, and notes SDT needs class-conditional evidence distributions rather than a stimulus ensemble",
    "Identifies the adaptation sign reversal as a genuinely risky prediction that could have failed",
    "Concludes that the method is substituted rather than abandoned, and concedes the loss of quantitative precision",
    "Bonus: draws the lesson back to olfaction — step-one failure is a reason to change instrument, not to stop"
  ]
}
</script>
</x-free-response>
