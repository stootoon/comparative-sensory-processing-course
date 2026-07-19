---
id: m05.s03
title: Transduction and physical limits
lede: Five taste qualities, four transduction mechanisms, and one receptor family expanded twenty-five-fold for a single perceptual axis. The molecular biology is where the loss-function argument becomes concrete.
estimatedMinutes: 12
---

## Four mechanisms for five qualities

- **Sweet** — a single receptor, the T1R2+T1R3 heterodimer. One narrow detector for a well-defined category.

<x-figure src="content/media/taste-cell-types-receptors.png"
  caption="Taste cell types and their transduction machinery. Type II cells carry the T1R and T2R GPCRs for sweet, umami and bitter; Type III handle sour; salt uses ENaC. Note that two of the five qualities bypass GPCRs entirely and detect the relevant ion directly — there is no need to recognise a shape when the thing you care about IS the ion."
  credit="Sagearbor. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Taste_cells_-_Type_I_II_III_Receptors_grey.png">
</x-figure>

- **Umami** — T1R1+T1R3, another dimer, detecting L-glutamate and some other amino acids.
- **Bitter** — the **T2R family, roughly 25 receptors in humans**, collectively responding to hundreds of structurally unrelated compounds.

<x-figure src="content/media/taste-transduction-cascade.jpg"
  caption="The taste transduction cascade in a Type II cell: receptor → gustducin → PLCβ2 → IP3 → calcium release → TRPM5 → CALHM channels for neurotransmitter release. Sweet, umami and bitter all share this downstream machinery and differ only in the receptor — which is precisely why twenty-five bitter receptors can converge on one perceptual axis without any additional wiring."
  credit="von Molitor E, Riedel K, Krohn M, Hafner M, Rudolf R, Cesetti T (2021), Frontiers in Human Neuroscience 15:667709, Figure 1. CC BY."
  source="https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2021.667709/full">
</x-figure>

- **Sour** — OTOP1, a proton channel, detecting acidity directly.
- **Salty** — ENaC, a sodium channel, detecting Na⁺ directly.

Note that two of the five bypass GPCRs entirely and detect the relevant ion directly. Sour and salty are about the ionic composition of the food, and there is no need for a receptor protein to recognise a shape when the thing you care about *is* the ion.

## The asymmetry that makes the argument

Put the numbers side by side:

**Sweet: one receptor.** Sugars are a small, chemically stable, well-defined class. A specific detector suffices, and specificity is affordable because the target does not change.

**Bitter: twenty-five receptors, all expressed in the same cells, all converging on one perceptual axis.**

<x-callout class="x-callout is-key">
<div class="x-callout-title">Twenty-five receptors, one axis</div>
This is the fact worth pausing on. Evolution built twenty-five distinct bitter receptors — and then <strong>threw away the distinctions between them</strong> by expressing them in a common cell type feeding a single aversive channel.

An animal with twenty-five separately-read-out bitter receptors could distinguish twenty-five classes of toxin. It does not. Why?

Because <strong>the distinction is worthless</strong>. Knowing <em>which</em> poison is present does not change the decision, which is "do not swallow". Preserving the distinction would cost neurons and learning capacity for no behavioural gain.

The receptor diversity exists to achieve <em>coverage</em> of an open-ended toxin space. The convergence exists because coverage is all that is wanted. Breadth is allocated by the loss function; the collapse is allocated by the loss function too.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m05.s03.p1",
  "contentRev": 1,
  "prompt": "Humans have ~25 bitter receptors expressed together in one cell type feeding a single aversive axis, and ~400 olfactory receptors each in its own neuron feeding a combinatorial code. Both detect small molecules with GPCRs. Explain the architectural divergence from the TASK, not the chemistry — then predict which olfactory pathway should look taste-like.",
  "placeholder": "What differs in the task?",
  "reveal": "**Two features of the task do the work.**\n\n**The loss function.** Taste faces one decision under gross asymmetry: reject on suspicion. Under that loss, distinctions among toxins are worthless — the action is the same — so collapsing them costs nothing and saves neurons. Olfaction serves open-ended uses (identify food, kin, predators, territory, mates), so a distinction discarded is unavailable to every future use.\n\n**The boundedness of the category.** Toxins are an open-ended, evolving set, which favours broad OR-gate coverage. Sugars are a bounded stable set, which is why sweet gets one narrow receptor rather than twenty-five. Notice that the two taste qualities differ from each other in the same direction and for the same reason — this is not just taste-versus-smell.\n\n**Prediction:** olfaction should look taste-like wherever it serves an innate categorical decision, and smell-like wherever it serves open-ended identification. So **innate-valence pathways should show categorical collapse while identity pathways preserve distinctions**.\n\nThat is roughly what is seen. In *Drosophila*, the lateral horn is stereotyped across individuals and organised by behavioural category, while the mushroom body receives random connectivity and preserves distinctions for learned associations. In mammals, cortical amygdala handles innate valence while piriform handles learned identity.\n\n**This is the course's clearest confirmed import** — a prediction derived from gustation's loss-function argument, holding in a system nobody was thinking about when the argument was made."
}
</script>
</x-predict>
