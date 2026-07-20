---
id: m09.s03
title: The receptor repertoire as an evolving object
lede: The course has treated the receptor array as a design. It is also a gene family with its own dynamics — duplicating, drifting and dying on a timescale that has nothing to do with what the animal needs to smell.
estimatedMinutes: 17
---

## What kind of object the repertoire is

Every module so far has asked the same question about the receptor array: how many channels, how broadly tuned, how do they tile the space. Those are design questions, and they presuppose that the array is a design.

For vision the presupposition is nearly safe. Three cone opsins, spectrally placed, and the placement has a defensible normative account [@buchsbaum1983; @ruderman1998]. Small numbers can be designed. For audition it is safer still, since the tiling is imposed by cochlear mechanics rather than by a gene family at all.

For olfaction the presupposition is not safe, and the reason is structural. The odorant receptors are the largest gene family in most mammalian genomes — around a thousand loci in mouse, arrayed in clusters scattered across the chromosomes [@buckaxel1991]. Families that large do not sit still. They evolve by **birth-and-death**: tandem duplication creates new copies, copies accumulate mutations, some acquire altered binding properties and are retained, and many acquire disabling mutations and become pseudogenes. The family composition at any moment is a snapshot of that process running.

<x-figure src="content/09-devo-evo/figures/repertoire-sizes.js"
  caption="Three orders of magnitude across animals that all have to find food by smell — and the grey markers, the dead genes, are not small. Switch to the fraction view: in several species pseudogenes outnumber functional receptors. A repertoire that is a third to a half debris is not obviously a designed set, which is exactly why 'the repertoire is sized for the coding problem' has to be treated as a hypothesis rather than a premise.">
</x-figure>

Three facts follow, and each one bears on a claim the course has made elsewhere.

**Repertoire size varies enormously and only loosely with ecology.** Elephants carry nearly two thousand functional OR genes, mice and rats around a thousand, humans around four hundred, dolphins roughly ten. The extremes are interpretable — cetaceans lost the air-borne chemical problem entirely and the family collapsed — but the middle is not. The elephant's repertoire is more than twice the dog's, and no one argues elephants are twice as olfactory as dogs.

**Pseudogenisation is pervasive and unevenly distributed.** About half of the human OR family is nonfunctional. Cow and horse carry more pseudogenes than working genes while retaining large working repertoires. Even mouse, the canonical high-performing nose, carries a couple of hundred dead loci. Whatever process sets repertoire composition, it leaves a great deal of wreckage in place.

**The rate of turnover is fast relative to speciation.** Lineage-specific expansions and contractions mean that closely related species can differ substantially in which receptor subfamilies they carry. Receptor repertoires are among the fastest-evolving parts of a mammalian genome.

<details class="x-deeper">
<summary>Birth-and-death versus concerted evolution, and why the distinction matters here</summary>

Two models of multigene family evolution. Under **concerted evolution**, gene conversion and unequal crossing-over homogenise family members, so all copies remain similar and the family behaves like a single evolving unit — the ribosomal RNA genes are the classic case. Under **birth-and-death**, new members arise by duplication and evolve independently, some persisting for long periods and some dying, so the family contains a mixture of ancient and recent lineages and a substantial fraction of pseudogenes.

The OR family is firmly birth-and-death. The diagnostic is exactly the one visible in the figure: large numbers of pseudogenes, and phylogenies in which orthologues across species are sometimes more similar than paralogues within a species.

Why this matters for coding arguments. Under concerted evolution you could plausibly treat the family as being tuned as a unit, and a normative account of its composition would be well-posed. Under birth-and-death, the family's composition at any moment reflects a stochastic process — duplication rate, deletion rate, fixation probability — whose parameters have no obvious relationship to the odour ensemble at all. A neutral or near-neutral birth-and-death model with plausible rates can generate repertoire size distributions of roughly the observed shape without any reference to what the animal is trying to detect.

That is not proof of neutrality. It is proof that a neutral model is not excluded by the data, which is the weaker claim the capstone actually needs.

</details>

## What this does to the abundance question

Here is where the section earns its place, because there is a capstone prediction that becomes uninterpretable without it.

The prediction is natural and appealing. If the olfactory system allocates coding resources efficiently, then receptors should be over-represented in proportion to how often, and how informatively, their ligands are encountered. This is the olfactory version of a very well-supported idea: cortical magnification in vision allocates more tissue to the fovea; the cochlea allocates more of its length to behaviourally important frequency ranges; innervation density in touch tracks acuity demand [@johnson2001]. Efficient allocation of receptors to a non-uniform input distribution is one of the field's most reliable patterns [@ganguli2014].

So: measure how many sensory neurons express each receptor, measure how often each receptor's preferred ligands occur in the animal's natural chemical environment, and correlate.

Suppose the correlation comes out null. What have you learned?

**Without §9.3, almost nothing.** A null is consistent with the animal not doing efficient allocation, with your ligand assignment being wrong, with your encounter-frequency measurement being wrong, with the relevant statistic being something other than frequency, and with the allocation happening downstream rather than at the periphery. That is a disappointing result, not an informative one, and disappointing nulls do not get published or believed.

**With §9.3, the null has a named alternative with its own predictions.** The alternative is that receptor abundance is set by genomic and developmental dynamics rather than by coding demand:

- **Genomic position.** Receptor genes sit in clusters, and choice probability depends on the regulatory landscape — enhancer proximity, chromatin accessibility, cluster size. A receptor in a large cluster near a strong enhancer may be chosen more often than one in an isolated locus, for reasons that have nothing to do with its ligands.
- **Family structure.** Subfamilies that expanded recently have many similar members, each individually chosen at some rate. Total representation of a *ligand class* may then track duplication history rather than encounter frequency.
- **Feedback dynamics.** The one-receptor-per-neuron lockout mechanism (§9.2) includes feedback that can favour some choices over others, and the resulting distribution is a property of the selection mechanism, not of the world.

Now the null is informative, because the alternative makes different predictions and they are testable.

**Test one: does abundance track cluster membership?** If abundance is genomically driven, receptors in the same cluster should have correlated abundances after controlling for ligand similarity. If it is ecologically driven, they should not — cluster membership is a fact about chromosome geography, and there is no reason for co-located receptors to have co-occurring ligands. This is a purely computational analysis on existing sequencing and expression data. As far as I know it has not been done cleanly and it is the single cheapest experiment in this module.

**Test two: does abundance change with the environment, within a lifetime or across generations?** Coding-optimality accounts predict yes — an animal reared with a restricted odour environment should shift allocation. Genomic accounts predict no, or only through the neurogenesis route (§9.5). This experiment has been attempted in various forms with mixed results, which is itself informative: the effects are small.

**Test three: the comparative version.** Take species pairs that differ in ecology but not much in phylogeny, and species pairs that differ in phylogeny but not much in ecology. Ask which pairing predicts repertoire composition. §9.1 identified this as the general discriminator between optimality and contingency, and the OR family is the best dataset in biology for running it, because there are hundreds of sequenced genomes and the family is large enough to give statistical power.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why the alternative has to be articulated before the experiment</div>
This is a methodological point that generalises well past olfaction.

A null result is only informative against a stated alternative. "Receptor abundance does not track encounter frequency" is a fact; "receptor abundance tracks genomic architecture rather than encounter frequency" is a finding. The difference is not in the data — it is in whether somebody wrote down the second hypothesis before looking.

<strong>The capstone's Import 11 should be designed to distinguish two hypotheses, not to test one.</strong> Concretely: measure abundance, measure encounter frequency, <em>and</em> extract cluster membership and subfamily size from the genome. Then the analysis is a model comparison, and every outcome is interpretable, including the one where both predictors contribute.
</x-callout>

## The falsifiability audit

Where does the birth-and-death account itself stand against §0.2?

**It is not an optimality account and should not be graded as one.** It is a mechanistic account of a process, and its virtue is that its parameters — duplication rate, pseudogenisation rate — are estimable from sequence data independently of anything about odours. That independence is what makes it a genuine alternative rather than a rhetorical one.

**It is falsifiable in the comparative form.** If repertoire composition tracked ecology tightly after controlling for phylogeny, the neutral birth-and-death account would be inadequate. The available data show a real but loose relationship, which is why both accounts stay alive.

**The version that is not falsifiable is the adaptive one, as usually told.** "This species has a large repertoire because it relies heavily on olfaction" is a statement that can absorb any observation, because reliance on olfaction is scored impressionistically and usually after the repertoire is known. The figure above deliberately includes such a score so that its crudeness is visible. A falsifiable version needs the ecological variable measured independently and quantitatively — encounter rates, behavioural dependence, discrimination demands — and that measurement is, once again, the same missing chemical ensemble that blocks everything else in olfaction (§3.11).

That connection is worth pausing on. The missing ensemble is usually described as blocking the efficient-coding calculation. It also blocks the evolutionary one, for the same reason: without knowing what odours an animal actually encounters, you cannot say whether its repertoire is well matched to them. **The two central open problems in olfactory theory — the coding problem and the evolutionary problem — are blocked by the same missing measurement.** That is a stronger argument for making the measurement than either problem supplies alone.

## What the repertoire is for, if not for allocation

A closing observation that runs the other way, because the section should not leave the impression that nothing normative can be said.

There is one thing about repertoire *size* that looks robustly design-like: the relationship between the number of receptors and the achievable discrimination in a high-dimensional chemical space. With broadly tuned receptors, a mixture is represented by a pattern across the whole array, and the number of distinguishable patterns grows with the number of receptors in a way that matters at exactly the scale olfaction operates [@malnic1999]. This is the argument that a few hundred to a thousand broad receptors is a sensible number, and it does not depend on the fine composition of the family at all.

That is the right level for a normative claim here. **Order of magnitude, yes; composition, probably not.** The size of the repertoire admits a coding argument. Which receptors are in it, and in what proportion, may be substantially a matter of genomic history. Being clear about which of these two claims one is making would improve a lot of writing in the field, and it is the distinction the capstone needs to keep straight.

<x-mcq>
<script type="application/json">
{
  "id": "m09.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "The section argues that birth-and-death dynamics make an otherwise disappointing null result informative. What exactly is it about the birth-and-death account that does that work?",
  "options": [
    {
      "text": "Its parameters — duplication rate, pseudogenisation rate, cluster structure — are estimable from sequence data independently of anything about odours, so it predicts abundance without reference to the ensemble the coding account needs.",
      "correct": true,
      "feedback": "That independence is the whole point. A rival hypothesis is only useful if it can be scored on evidence the incumbent does not already own; otherwise the comparison is rhetorical. Because cluster membership and subfamily size come out of a genome rather than out of an odour survey, the abundance experiment becomes a model comparison with three predictors and every outcome interpretable — including the mixed one where both contribute. Contrast the adaptive story, which is scored impressionistically and usually after the repertoire is known."
    },
    {
      "text": "It is a mechanistic account of a process rather than an optimality claim, and mechanistic accounts are more parsimonious.",
      "correct": false,
      "feedback": "Correct under the assumption that being mechanistic is itself an epistemic virtue — a common view, and one §0.1 declines. The section does insist the account is mechanistic rather than normative, but for a different reason: so that nobody grades it against §0.2's criteria and marks it down for making no optimality prediction. Being mechanistic does not make a hypothesis informative. Being independently measurable does."
    },
    {
      "text": "It shows that a neutral model can generate the observed distribution of repertoire sizes, so the adaptive account is excluded.",
      "correct": false,
      "feedback": "Correct under the assumption that generating the data is sufficient to establish a model — and the generative claim is accurate, since a near-neutral birth-and-death process with plausible rates does produce roughly the right shape. But the section is explicit that this is *not* proof of neutrality; it is proof that neutrality is not excluded, which is the weaker claim the capstone actually needs. Overstating it here would be the same post-hoc move in the opposite direction."
    },
    {
      "text": "It explains why repertoire size varies by two orders of magnitude across species that all navigate by smell.",
      "correct": false,
      "feedback": "Partly correct, and the variation is real: elephants near two thousand functional loci, dolphins around ten. But explaining variance is not what makes the null informative — the adaptive account also explains variance, and rather too easily, which is the complaint against it. What converts a null into a finding is that the alternative was written down first and makes *different* testable predictions, such as abundance correlating with cluster membership after controlling for ligand similarity."
    }
  ]
}
</script>
</x-mcq>
