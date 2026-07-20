---
id: m03.s08
title: Parallel streams
lede: Olfaction's bulbar output diverges to several targets in parallel, and one plausible division — learned identity against innate valence — is well supported. The division nobody can confidently locate is the one the comparison most strongly predicts.
estimatedMinutes: 20
---

Mitral and tufted cells project in parallel to piriform cortex, anterior olfactory nucleus, olfactory tubercle, cortical amygdala and entorhinal cortex. Unlike vision, where streams separate *after* primary cortex, olfaction's divergence happens at the output of the first circuit.

<x-figure src="content/media/oa-drosophila-antennal-lobe-glomeruli.jpg"
  caption="The Drosophila antennal lobe, imaged with a calcium indicator. Roughly fifty glomeruli, individually identifiable across animals — which is why the fly is where the olfactory circuit is best characterised, and why the mushroom-body/lateral-horn dissociation is the clearest evidence for the identity/valence split."
  credit="Mohamed AAM, Retzke T, Das Chakraborty S, Fabian B, Hansson BS, Knaden M, Sachse S (2019). CC BY 4.0."
  source="https://doi.org/10.1038/s41467-019-09069-1">
</x-figure>


## The division that is well supported

**Piriform versus cortical amygdala** looks like a genuine functional split, and it maps onto a division the comparison predicts.

- **Piriform** — learned, experience-dependent, plastic. Identity in the sense of "which odour is this", with associations acquired through experience.
- **Cortical amygdala** — innate valence. Responses to ethologically significant odours (predator cues, conspecific signals) that do not require learning.

The invertebrate parallel is closer and better characterised, which is why the full course leans on it. In *Drosophila*, projection neurons target both the **mushroom body** — random connectivity, plastic, the site of learned associations — and the **lateral horn**, which is stereotyped across individuals and mediates innate responses, with an organisation reflecting behavioural category rather than chemical identity.

<x-figure src="content/media/drosophila-mushroom-body-mbons.jpg"
  caption="Mushroom body output neurons in Drosophila, registered to a standard brain. The mushroom body's compartmental organisation is what makes it the best-characterised associative structure in any olfactory system — and its random Kenyon cell connectivity (§3.4) is the invertebrate demonstration of expansion recoding."
  credit="Aso et al. (2014), eLife, via eLife on Flickr. CC BY 2.0."
  source="https://commons.wikimedia.org/wiki/File:Drosophila_mushroom_body_output_neurons_(16017044898).jpg">
</x-figure>


<x-callout class="x-callout is-invertebrate">
<div class="x-callout-title">A confirmed cross-modality import</div>
§1.1 argued from gustation that a sense whose consumer makes one decision under an asymmetric loss should <em>collapse</em> distinctions, while one serving open-ended uses should preserve them.

Olfaction has both kinds of consumer, so the prediction was that innate-valence pathways should look taste-like and categorical while identity pathways preserve distinctions.

That is roughly what the lateral horn / mushroom body dissociation shows: stereotyped categorical organisation in one, random and distinction-preserving connectivity in the other, from the same input.

<strong>This is the course's clearest example of an import that worked</strong> — a prediction derived from a different modality's loss-function argument, confirmed in a system nobody was thinking about when the argument was made.
</x-callout>

## The split that happens before the receptor: main versus accessory

The piriform / cortical amygdala division splits a stream that has already passed through one shared front end. Most mammals also run a loss-function split that begins earlier than that — earlier than the bulb, earlier than the receptor gene family. The nose contains two chemosensory systems, and they are separate all the way down.

The **main olfactory system** (MOS) is what §3.4 describes: sensory neurons in the main epithelium, roughly 350–400 (human) to 1,000–1,100 (mouse) odorant receptors, cyclic-nucleotide transduction, convergence onto main-bulb glomeruli, and mitral/tufted output to piriform and the other targets listed above.

The **accessory olfactory system** (AOS) begins in the vomeronasal organ, a fluid-filled tube in the nasal septum sampled by active pumping rather than by sniff-driven airflow. Its neurons express two receptor families, **V1R** and **V2R** — over a hundred members each in mouse, unrelated in sequence to the odorant receptors, expressed in separate zones of the organ distinguished by which G protein they use, and converging on **TRPC2** rather than the CNG channel of the main epithelium [@kandel2021]. The two families divide the ligand space by size: V1Rs bind small volatiles in a transmembrane pocket, while V2Rs carry a large N-terminal extracellular domain and detect proteins — a tear pheromone, urinary proteins that provoke aggression, cat- and rat-derived proteins that provoke fear in mice. A third and much smaller family, five formyl peptide receptors related to the immune receptors that detect bacterial products, may report that a conspecific is diseased. Vomeronasal axons bypass the main bulb entirely and terminate in the **accessory olfactory bulb**, whose output goes to the medial and posteromedial cortical amygdala and from there to the hypothalamus — to mating, aggression, and defensive circuitry, and to neuroendocrine output. There is no obligatory cortical stage anywhere in that route.

Note what that ligand list is. It is not a chemical class; it is an enumeration of social and predatory contingencies, each with its own fixed answer. A repertoire built that way is a repertoire whose designer knew the questions in advance.

So the two systems face the same physics — same medium, same molecules, same GPCR binding problem, same nasal cavity. What differs is the consumer. The MOS serves open-ended identification, with the meaning of most odours acquired by experience. The AOS serves a short list of decisions made the same way in every animal of the species — approach or attack, mount or reject, freeze or ignore — and delivers its answer to circuits that execute rather than deliberate.

The codes differ accordingly. The MOS is combinatorial: broadly tuned receptors, identity carried by the pattern across the array, downstream connectivity plastic and learned. The AOS is far closer to a labelled line: narrowly tuned receptors, individual vomeronasal neurons responding to one or a small number of ligands at very low concentration, responses that appear in animals with no prior exposure, and a fixed mapping from activated channel to behavioural output.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Why this is the course's cleanest test of Lesson 6</div>
Lesson 6 says <strong>the consumer determines the code</strong>. §5 tests it by comparing gustation with olfaction: one chemosense collapses distinctions and one preserves them, and the difference tracks what the consumer does with the answer.

That comparison has a confound. Gustation and olfaction differ in the consumer <em>and</em> in stimulus dimensionality — five nutritional categories against an unbounded molecular space — so the coding difference has two available explanations and §5.11 has to argue that dimensionality is the operative one.

The MOS/AOS comparison removes the confound. <strong>Both systems sample the same chemistry with the same class of receptor protein in the same nose.</strong> The stimulus space is not held approximately fixed; it is held <em>identically</em> fixed. The only thing that varies is who reads the output and what they must decide. And the code varies with it, in the predicted direction: broad and combinatorial where the answer feeds learning, narrow and near-labelled where the answer feeds a fixed action.

This is the control the gustation argument wanted and could not have.
</x-callout>

<details class="x-deeper">
<summary>Go deeper: four ways the tidy version of this story is wrong<span class="x-deeper-tag">evidence</span></summary>
<div class="x-deeper-body">

The argument above survives all four of these, but only if you state them.

**1. The division of labour is not "pheromones versus odours".** That textbook dichotomy is outdated and should not be repeated. The main system detects several compounds that meet any reasonable definition of a pheromone, and mediates innate responses to predator odours and to some conspecific signals — including responses that survive removal of the vomeronasal organ. The TAAR receptors of §3.4 are the clearest case: a narrowly tuned innate-cue repertoire sitting inside the main epithelium. Conversely, vomeronasal neurons respond to cues that are not pheromonal at all, including heterospecific and predator-derived compounds. The systems overlap in what they detect. What separates them is where the signal goes and what is done with it — a loss-function claim, not a stimulus claim. The argument does not need a clean stimulus partition and would be weaker if it depended on one.

**2. "Labelled line" is an approximation, and stage matters.** §5.4 makes this point about taste, and also warns that stage-matching does not by itself settle the taste dispute — the labelled-line account claims the centre too. The discipline still applies here: a coding claim without a named stage is not yet a claim. Narrow tuning is best supported at the vomeronasal receptor neuron. Accessory-bulb mitral cells integrate across multiple glomeruli, and medial-amygdala responses are more mixed than a strict labelled-line picture predicts. Read the AOS as *shifted far toward the labelled-line end of a continuum*, not as a proven set of private lines from ligand to behaviour.

**3. Humans are not a good instance of this.** The human vomeronasal organ is vestigial or absent in adults, lacks demonstrated sensory neurons and a functional accessory olfactory bulb, and **TRPC2 is a pseudogene in catarrhine primates** — Old World monkeys and apes, including us. The V1R repertoire is largely degraded. Claims about human pheromones are contested and the widely publicised candidate compounds have not survived well-controlled replication. Neither "humans have a working accessory system" nor "humans therefore have no chemical communication" follows; the honest statement is that the *accessory* route is not available in humans, and any residual chemical signalling would have to run through the main system.

**4. Most of the strong evidence is mouse.** Vomeronasal anatomy, repertoire size, and behavioural dependence vary widely across mammals — large in rodents, reduced or absent in bats, cetaceans, and catarrhines — and the AOS has no invertebrate mirror of the kind §3.4 leans on. Treat the contrast as established in mouse and hypothesised elsewhere.

</div>
</details>

<x-figure src="content/00-toolkit/figures/stream-splits.js"
  caption="Filter to 'conflicting loss functions' and read the rows together. The MOS/AOS split is not in the grid — it is a split of the whole system rather than of one system's output — but it belongs to that class, and it is the only entry in it where the two branches face identical stimulus physics.">
</x-figure>


**What this predicts.** Receptor tuning breadth should track the branching factor of the decision that receptor's output feeds. Concretely: measure dose–response breadth for V1R/V2R and for main-epithelium ORs against a *shared* ligand panel, controlling concentration range and expression system, and the vomeronasal distributions should be narrower. Two outcomes falsify it. If breadth matches on a common panel, the coding difference is not at the receptor and must be manufactured downstream, which relocates the argument. And if AOS breadth is narrow only for ligands the experimenters pre-classified as pheromonal, the result is circular.

The comparative version is stronger and needs no new physiology: across mammals, the ratio of V1R/V2R repertoire size to functional OR repertoire size should track how stereotyped versus learned that species' social behaviour is. That is a claim about existing genome data and existing ethology, and it has not been checked.

## The division nobody can locate

§3.1 argued that identity and location are computationally distinct problems in olfaction — more dissimilar than in vision or audition. §1.8 and §2.8 established that two independent modalities, with entirely different receptor geometries, both split identity from location.

So where is olfaction's dorsal stream?

Candidates exist but none is established:

- **Anterior olfactory nucleus**, which is bilaterally connected and well placed to compare the two nostrils — the one structure whose anatomy suits a localisation role.
- **Tufted cells specifically**, which respond earlier and more reliably at low concentration and project differently from mitral cells. If any cell class is the "where" channel, this is the candidate.
- **Entorhinal cortex and the hippocampal route**, given odour-guided navigation.
- **Olfactory tubercle**, usually associated with value, but ventral striatal and well placed for action selection.

<x-callout class="x-callout is-key">
<div class="x-callout-title">The prediction, sharpened</div>
Two independent instances support the claim that identity and location require separate representations because their invariance requirements conflict. Olfaction faces a version of the same conflict.

<strong>What to look for:</strong> a population whose responses are informative about source *geometry* — distance, bearing — while being relatively uninformative about chemical identity. Per §3.2, the variables carrying that information are plume statistics: intermittency, whiff frequency, bilateral correlation. So the signature is neurons tuned to <em>temporal statistics of concentration</em> rather than to which molecule is present.

<strong>Why it may have been missed:</strong> standard protocols deliver well-controlled odour pulses at fixed concentration, which present almost no plume statistics. A neuron tuned to intermittency would look unresponsive or uninteresting under exactly the stimuli most experiments use. This connects directly to §3.4's suggestion that the bulb's real receptive field may be temporal rather than chemical.
</x-callout>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s08.q2",
  "contentRev": 1,
  "points": 1,
  "prompt": "The main and accessory olfactory systems sit in the same nose, sample the same chemistry, and use GPCRs in both cases — yet the main system's receptors are broadly tuned and combinatorial while the vomeronasal receptors are narrow and close to labelled lines. What best explains the opposite designs?",
  "options": [
    {
      "text": "The two systems serve consumers whose decisions have different branching factors: open-ended identification rewards overlapping broad tuning, while a short fixed list of innate actions rewards dedicated high-sensitivity channels with a trivial readout.",
      "correct": true,
      "feedback": "Correct, and note what makes this the course's cleanest instance of Lesson 6. Every other test of 'the consumer determines the code' varies the consumer and the stimulus space together — gustation against olfaction varies both, which is why §5.11 has to argue that dimensionality rather than disorder is the operative variable. Here the physics is held identical and only the consumer moves. The code moves with it."
    },
    {
      "text": "The vomeronasal system detects pheromones and the main system detects general odours, and pheromones are a small chemically defined set, so narrow receptors suffice.",
      "correct": false,
      "feedback": "Correct under the assumption that the split is a stimulus partition — the classic textbook version, and it is outdated. The main system detects several bona fide pheromones and mediates innate responses to predator and conspecific cues, and vomeronasal neurons respond to non-pheromonal compounds including heterospecific ones. If this were the explanation, the argument would collapse with the dichotomy. It does not, because the operative difference is where the signal is delivered and what is done with it, not what the signal is."
    },
    {
      "text": "The vomeronasal organ samples by active pumping at very low flow, so signal-to-noise is poor and narrow high-affinity receptors are needed to detect anything at all.",
      "correct": false,
      "feedback": "Correct under the assumption that tuning breadth is set by a sensitivity constraint rather than by task structure — and the sensitivity premise is real: vomeronasal neurons do respond at strikingly low concentrations. But sensitivity and breadth are separable. You can build a broadly tuned high-affinity receptor, and the main system contains some. This explains why AOS receptors are sensitive without explaining why they are narrow."
    },
    {
      "text": "V1R and V2R are a different gene family from the ORs, so their binding pockets simply cannot achieve the promiscuous binding that broad tuning requires.",
      "correct": false,
      "feedback": "Correct under the assumption that the design is constrained by what the protein can be made to do — the same buildability argument that fails for opsins in §3.4.q1. It has the causation backwards. Receptor repertoires expand, contract and retune readily on evolutionary timescales; V2Rs in particular are related to receptors that bind large peptides. Treating narrow tuning as a structural accident also predicts nothing, whereas the consumer argument predicts which way breadth should go in a species whose social behaviour is more learned than stereotyped."
    }
  ]
}
</script>
</x-mcq>
