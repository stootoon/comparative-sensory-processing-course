---
id: m03.s03
title: Transduction and physical limits
lede: The sensor is slower than the signal. That single fact is close to unique among the classical senses, and most of what is strange about early olfactory processing follows from it.
estimatedMinutes: 16
---

## Binding as a stochastic process

An odorant receptor is a G-protein-coupled receptor. Detection begins with a molecule binding, which triggers a cascade — the olfactory-specific G protein **Gα-olf**, **adenylyl cyclase III**, cAMP, and a cyclic-nucleotide-gated channel passing Ca²⁺ and Na⁺ — and a depolarisation, which spreads passively to the soma where spikes are generated [@kandel2021]. The odorant-binding pocket is formed by the transmembrane domains, and it is precisely those domains that are most variable in sequence across the family: the receptors differ from one another chiefly in the part that touches the ligand.

The first stage is stochastic in a way photon absorption is not, and the difference matters. A photon either arrives or does not. A molecule **binds, unbinds, and may rebind**, with rates set by affinity and concentration. What the receptor reports is a time-averaged occupancy, and occupancy is a noisy estimate of concentration.

At threshold, a receptor neuron may register only a handful of binding events per sniff. Binding is Poisson, so with an expected count $k$ the fractional error is $1/\sqrt{k}$ — with $k \approx 10$, roughly 30% before any downstream noise. **This is the shot-noise limit that glomerular convergence exists to beat** (§3.5).

<x-figure src="content/media/drosophila-antenna-sensilla-map.jpg"
  caption="The Drosophila antenna, with sensillum types mapped across its surface and the receptor neurons each contains. Note the arrangement: sensillum types are distributed in a rough spatial pattern, but which receptor a neuron expresses is what determines where it projects — the same identity-not-position principle as the mammalian epithelium."
  credit="Lin C-C, Potter CJ (2015), PLOS ONE 10(10):e0139675, Figure 5. CC BY 4.0."
  source="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0139675">
</x-figure>


## The speed problem

Here is the fact this module keeps returning to.

The olfactory receptor neuron response to a concentration step has a time constant of roughly **100 milliseconds**. The cascade has several stages, each contributing delay, and the mucus layer adds diffusion time before a molecule reaches the receptor at all.

<x-figure src="content/media/osn-glomerular-convergence.jpg"
  caption="Receptor neurons converging onto glomeruli. Thousands of same-receptor neurons pooling onto one target is the architecture that beats molecular shot noise — and, per §3.3, may be doing temporal rather than amplitude work: pooling n noisy timers sharpens timing as √n, which is how a ~100 ms sensor can contribute to resolving 40 Hz structure."
  credit="Noodle brain (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Olfactory_Sensory_Neurons_innervating_Olfactory_Glomeruli.jpg">
</x-figure>


Natural plumes carry structure to **tens of hertz** (§3.2). Mice discriminate correlated from anti-correlated fluctuations up to 40 Hz [@ackels2021].

The sensor is roughly an order of magnitude too slow for the signal it must resolve.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Nothing else in this course is in this position</div>
<strong>Audition:</strong> hair cell transduction in microseconds, gated directly by tip-link tension with no cascade. Faster than any behaviourally relevant timescale (§2.3).<br>
<strong>Vision:</strong> phototransduction in tens of milliseconds — slow, but most scenes are slower.<br>
<strong>Touch:</strong> Pacinian afferents follow vibration to hundreds of hertz.<br>
<strong>Olfaction:</strong> ~100 ms sensor, ~40 Hz signal.

Audition solves timing problems by having a fast transducer. Olfaction cannot, so <strong>the temporal precision has to be manufactured by the population</strong>. That is a strong constraint on any account of the bulb, and it reframes convergence: the ~1000:1 ratio may be doing temporal work rather than, or as well as, amplitude work.

The precedent exists elsewhere. Electric fish achieve sub-microsecond behavioural precision from neurons with millisecond precision, by pooling. Same problem, solved, in a different modality.
</x-callout>

<details class="x-deeper">
<summary>Go deeper: two ways a slow population can be fast<span class="x-deeper-tag">algebra</span></summary>
<div class="x-deeper-body">

**Pooling.** For $n$ sensors each with independent timing jitter $\sigma_t$, the pooled estimate of event time has jitter $\sigma_t/\sqrt{n}$. With $n \approx 1000$ and $\sigma_t \approx 100$ ms, the bound is ~3 ms — comfortably enough for 40 Hz.

The catch is the independence assumption (§3.5). Receptor neurons of one type sample the *same air*, so plume-driven fluctuations are perfectly shared and cannot be averaged away. Only the independent part — binding stochasticity, transduction noise, spike jitter — is reduced. The √1000 figure is an upper bound.

**Kinetic heterogeneity.** If receptor neurons differ in their time constants, the population is a filterbank rather than a single slow filter. The fast tail retains high-frequency information even though the mean is slow. This requires no independence assumption at all, but it does require diversity — and it predicts that the *fast* subpopulation carries most of the temporal information.

**They are distinguishable.** Pooling predicts performance scaling with the number of converging neurons; a filterbank predicts degradation when kinetic diversity is reduced but relative insensitivity to number. These come apart experimentally, and the experiment has not been done.

</div>
</details>

<x-mcq>
<script type="application/json">
{
  "id": "m03.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "A student proposes to test the pooling account directly: record simultaneously from many same-receptor ORNs while an animal samples a real turbulent plume, pool their spike times, and check whether the precision of the pooled event-time estimate improves as √n. What will this experiment actually measure?",
  "options": [
    {
      "text": "Only the improvement available from the independent noise sources, because same-receptor neurons sample the same air and the plume-driven component of their variability is shared.",
      "correct": true,
      "feedback": "Right, and the consequence is that √n scaling will saturate at an n set by the ratio of independent to shared variance. Pooling averages away binding stochasticity, transduction noise and spike jitter. It cannot average away the fact that the concentration waveform itself fluctuated — every neuron of that type saw the same waveform. The experiment is still worth doing; it just measures the independent fraction rather than the bound."
    },
    {
      "text": "The full √n improvement, since binding events at separate neurons are independent Poisson draws.",
      "correct": false,
      "feedback": "Correct under the assumption that all the variability originates at the binding step — which would hold if the stimulus were a constant concentration, and is exactly how the bound in the box above is derived. A turbulent plume violates it. The assumption quietly converts a stimulus-driven fluctuation into measurement noise, which is the single most common error in reading pooling arguments."
    },
    {
      "text": "Kinetic heterogeneity rather than pooling, since same-receptor neurons differ in their time constants.",
      "correct": false,
      "feedback": "Partly correct, under the assumption that kinetic diversity exists *within* a receptor type as well as between types. If it does, the design confounds the two mechanisms rather than isolating either, and that is a real objection to the experiment. But the diversity that the filterbank account needs is diversity across the population as a whole, and the design's deeper problem — shared plume noise — would remain even in a kinetically homogeneous population."
    },
    {
      "text": "Nothing useful, because the ~100 ms cascade time constant bounds ORN timing precision no matter how many neurons are pooled.",
      "correct": false,
      "feedback": "Correct under the assumption that a filter's time constant bounds the precision of estimates derived from its output. It does not. A slow, noisy filter still permits an unbiased estimate of event time whose variance falls with the number of samples — this is why electric fish achieve sub-microsecond behavioural precision from millisecond neurons, the precedent the callout above cites. Conflating a time constant with an estimator's precision would rule out that result too."
    }
  ]
}
</script>
</x-mcq>

## Adaptation at the receptor

ORNs adapt strongly through calcium feedback onto the CNG channel, shifting sensitivity toward the recent concentration range. This is Weber-like and serves the same function as light adaptation: keep a limited output range positioned over the current input distribution.

But note the tension it creates, which is specific to olfaction. Adaptation that removes a sustained background is exactly what you want for detecting a new odour against an old one. It is exactly what you do *not* want if the informative signal is the temporal fluctuation itself — because a high-pass filter applied to an intermittent signal discards the intermittency statistics that §3.2 identified as carrying the spatial information.

How the system resolves that is open, and it is a good example of a conflict that only becomes visible once you take the plume statistics seriously. It is worth adding that the *recovery* half is open in a more basic way: adaptation is attributed in part to modulation of the CNG channel, but the mechanism by which sensitivity is restored so rapidly when the odorant is withdrawn is not established [@kandel2021]. For a system whose signal is a train of whiffs and blanks, de-adaptation kinetics matter at least as much as adaptation kinetics, and they are the less understood half.

<x-free-response>
<script type="application/json">
{
  "id": "m03.s03.f1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Glomerular convergence has been justified twice in this section: to beat molecular shot noise, and to manufacture temporal precision a slow sensor cannot supply. These are different arguments that happen to predict the same anatomy. Give one measurement on which they make different predictions, and say what makes the comparison hard.",
  "modelAnswer": "**Where they come apart.**\n\nThe two arguments make convergence a function of different variables.\n\nThe **shot-noise** argument makes convergence ratio a function of the expected binding count at behavioural threshold. It should therefore be largest for receptors whose relevant ligands occur at low concentration or bind with low affinity, and it should be indifferent to how fast the animal needs to resolve fluctuations. Under this account, convergence is set by the *amplitude* regime.\n\nThe **timing** argument makes convergence a function of the temporal bandwidth the receptor's ligands must support. It should be largest for receptors carrying ligands whose fluctuation structure matters — plume-tracking cues — and it should be indifferent to absolute sensitivity. Under this account, convergence is set by the *frequency* regime.\n\n**The measurement.** Rank receptor types by convergence ratio, which is measurable from glomerular innervation counts, and ask which of the two orderings it tracks: threshold concentration, or the temporal precision required for behaviours that depend on those ligands. The two predictions come apart most sharply for a high-affinity ligand used in fast plume tracking, where shot noise predicts low convergence and timing predicts high.\n\n**Why it is hard.**\n\nThree reasons, in increasing order of seriousness.\n\nFirst, the two variables are correlated in nature: the ligands that matter for tracking are often the ones present at trace concentration, so the orderings largely agree and the informative cases are rare.\n\nSecond, convergence ratio varies with receptor abundance, and abundance is itself under selection for reasons — encounter frequency — that neither argument controls. The §3.11 question about whether abundance tracks encounter frequency has to be answered before this one is interpretable.\n\nThird, and most seriously, **the arguments are not exclusive.** Convergence could be doing both jobs, in which case no ordering is diagnostic and the honest design is a within-animal manipulation rather than a cross-receptor correlation. This is the same over-determination problem §1.5 flagged for centre–surround: when several principles predict one structure, the structure is weak evidence for any of them.",
  "rubric": [
    "Identifies that the two accounts make convergence a function of different variables — amplitude regime versus temporal bandwidth",
    "Proposes a concrete comparison across receptor types with measurable convergence ratios",
    "Names the informative case where the two predictions disagree",
    "Notes that the two variables are correlated in nature, so most cases are uninformative",
    "Bonus: recognises the accounts are not exclusive, making the structure weak evidence for either",
    "Bonus: connects to the over-determination problem raised for centre–surround in §1.5"
  ]
}
</script>
</x-free-response>
