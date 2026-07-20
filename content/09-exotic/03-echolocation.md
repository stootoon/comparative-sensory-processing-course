---
id: m09.s03
title: Echolocation — designing the experiment
lede: Bats choose their own stimulus, in real time, according to what they currently need to know. And they build cortical maps of quantities the receptor array never measured — which is the existence proof olfaction's map question requires.
estimatedMinutes: 16
---

An echolocating bat emits a call and listens for the echo. Delay gives range, Doppler shift gives relative velocity, spectral notches give elevation, and interaural differences give azimuth.

<x-figure src="content/media/echolocating-bat-myotis-flight.jpg"
  caption="An echolocating bat taking prey in flight. Everything this animal knows about the moth's position it computed from echoes of sounds it produced itself, in the preceding few hundred milliseconds."
  credit="Dietmar Nill, published in PLoS Computational Biology (2009). CC BY 2.5."
  source="https://commons.wikimedia.org/wiki/File:Myotis_bechsteinii-flying.jpg">
</x-figure>


## The probe is designed, in real time

The bat controls its own stimulus, and adapts it continuously:

- **Call rate rises** as the bat closes on a target, from a few per second during search to two hundred per second in the terminal "feeding buzz".

<x-figure src="content/media/bat-echolocation-spectrogram-buzz.jpg"
  caption="Spectrogram of an approach sequence. Widely spaced FM sweeps during search give way to the terminal buzz as the bat closes — call rate rising with proximity is sampling rate rising with uncertainty about a rapidly changing quantity. This is the pattern §9.3 proposes testing in sniffing."
  credit="Xofc (Wikimedia Commons). CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bat.nav%2Bbuzz.20250704_204120.jpg">
</x-figure>

- **Bandwidth and structure change** with task. Broadband FM sweeps give precise ranging; narrowband CF components give Doppler sensitivity for detecting fluttering prey.
- **Beam direction is aimed**, like gaze, at objects of current interest.
- **Frequency is adjusted** to compensate for Doppler shift, holding the echo in a narrow, highly sensitive frequency band.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Optimal experiment design, and the olfactory question it poses</div>
Increasing call rate as a target approaches is exactly what an information-maximising agent should do: as uncertainty about a rapidly changing quantity grows, sample more often.

<strong>§3.9 asked whether sniff strategy does the same thing.</strong> Sniff frequency does change with task, and rodents sniff faster during active search. But the bat literature makes a stronger and more specific claim — that sampling rate tracks <em>current posterior uncertainty</em>, moment to moment.

<strong>The experiment, borrowed:</strong> manipulate uncertainty independently of task difficulty. In a plume-tracking task, vary the intermittency of the plume — which changes how informative each sniff is — while holding the discrimination and the distance constant. If sniff rate tracks uncertainty, it should rise when the plume is patchier even though the task is nominally identical.

As far as this course is aware, that has not been done, and it is a clean test of whether olfactory sampling is genuinely optimal-experiment-design or merely arousal-driven.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m09.s03.p1",
  "contentRev": 1,
  "prompt": "The bat's cochlea is a frequency analyser. It reports which frequencies are present and when, and nothing else — it has no channel for distance, and no receptor is tuned to range. Before reading on: what would you expect bat auditory cortex to be organised by, and what does your answer commit you to about the origin of cortical maps generally?",
  "placeholder": "Tonotopy? Something else? And where would a map of anything else come from?",
  "reveal": "**The standard expectation, and why it is reasonable.** Cortical maps in vision and touch are inherited from the sensor sheet: retinotopy is the retina's geometry carried forward, somatotopy is the skin's. Audition's tonotopy is the same move applied to a sheet the cochlea creates mechanically. On that reading, a cortex can only be topographic about something the receptor array already lays out in order — so the prediction is tonotopy, and nothing else.\n\n**What is actually there.** Bat auditory cortex contains delay-tuned areas in which neurons respond to a specific interval between the outgoing call and the returning echo, and those neurons are arranged systematically. The map is of *target range*.\n\n**Why that breaks the standard expectation.** Delay is nowhere in the cochlear array. It is computed, by comparing two events the cochlea reported separately, and the map is built on the computed quantity. So the inference 'the sensor array is unordered, therefore no map is possible' is invalid — it confuses the *cheapest* origin of a map with the *only* one.\n\n**What it costs.** The bat does not get this map free from the anatomy the way the retina does. It has to be constructed, which means the ordering has to come from somewhere — coincidence-detection circuitry with graded delay lines, refined by experience. §10.2's specification argument is the price tag: a map you inherit from a sensor sheet is specifiable by a gradient rule, and a map you construct is not.\n\n**The olfactory question this reframes.** Not 'is the receptor array ordered' — it is not, and that is settled — but 'is there a derived variable worth the construction cost?' The candidates have to be continuous, behaviourally graded, and needed locally by downstream computation. Concentration and plume-derived source distance qualify. Chemical identity does not, because it has no metric for the map to be *of*."
}
</script>
</x-predict>

## Maps of computed variables

Now the result that matters most for §13.

Bat auditory cortex contains areas where neurons are tuned to specific **echo delays** — the time between call and echo, which corresponds to target range. These delay-tuned neurons are arranged systematically, forming an orderly map of range.

<x-figure src="content/media/bat-auditory-cortex-map.jpg"
  caption="Functional subdivisions of mustached bat auditory cortex, including the delay-tuned FM-FM area where echo delay — and therefore target range — is mapped systematically. Range is nowhere in the cochlear array; the map is built on a computed quantity. This is the existence proof §14 needs."
  credit="Goran tek-en, after Kaldari. CC BY-SA 4.0."
  source="https://commons.wikimedia.org/wiki/File:Bat_Auditory_Cortex.svg">
</x-figure>


**Range is not a variable the cochlea measures.** The receptor array reports frequency. Delay is computed by comparing call and echo, and the map is built on the computed quantity.

<x-callout class="x-callout is-key">
<div class="x-callout-title">A map can exist for something the sensor never measured</div>
This is the existence proof Import 2 needs, and it changes the olfactory map question.

The usual argument is: olfaction's receptor array is unordered, so there is nothing to be topographic about, so no map. The bat shows the inference is invalid. <strong>Maps can be constructed for derived variables.</strong>

So the right olfactory question is not "is the receptor array ordered" — it is not — but <strong>"is there a derived variable worth mapping?"</strong>

§6.4's criterion helps: a map pays off when downstream computation needs <em>local interactions among similar values</em>. §2.5's ITD lesson adds another: there must be enough usable range for tiling to be worthwhile.

Applying both, the best olfactory candidates are continuous scalar quantities with a wide behaviourally relevant range — <strong>concentration</strong> and <strong>plume-derived source distance</strong> — and not chemical identity, which has neither a metric nor a notion of locality. And the map should be downstream of the bulb, whose organisation is fixed by receptor identity.
</x-callout>

## Clutter and jamming

Two further problems with olfactory counterparts. **Clutter**: echoes from vegetation swamp the target echo, a scene-segmentation problem in the time domain. And **jamming**: bats flying in groups must attribute echoes to their own calls, which they partly solve by shifting call frequency — the same solution as the electric fish's jamming avoidance, arrived at independently.

<x-mcq>
<script type="application/json">
{
  "id": "m09.s03.q1",
  "contentRev": 1,
  "points": 1,
  "prompt": "Take the bat existence proof seriously and go looking for an olfactory map of a derived variable. Which candidate best satisfies both §6.4's criterion (a map pays when downstream computation needs local interactions among similar values) and §2.5's ITD lesson (there must be enough usable range to make tiling worthwhile)?",
  "options": [
    {
      "text": "Estimated distance to the odour source, derived from plume intermittency statistics, mapped somewhere downstream of the bulb.",
      "correct": true,
      "feedback": "This is the best candidate on both criteria. It is a continuous scalar with a wide behaviourally relevant range, so tiling has something to tile; and the computations that would use it — comparing the current estimate against neighbouring hypotheses, integrating across sniffs — are exactly the local interactions among similar values that make a map pay. It also has to be downstream, because the bulb's geography is already committed to receptor identity. Whether such a map exists is open; the point is that the question is now well-posed rather than ruled out."
    },
    {
      "text": "Chemical identity, mapped by similarity in a learned odour space rather than by receptor identity.",
      "correct": false,
      "feedback": "Correct under the assumption that a *learned* metric is as good as a physical one for the purposes of mapping — which is a serious position, and Import 12's coordinates-from-consequence proposal is exactly it. But note what it concedes: the map is then a map of the consequences, not of the chemistry, and its dimensionality is set by the behaviour rather than by the stimulus. Until somebody says what the learned axes are and shows that downstream computation needs locality along them, this is a hypothesis about the answer rather than a candidate meeting the criterion."
    },
    {
      "text": "Concentration, mapped in the bulb across glomeruli.",
      "correct": false,
      "feedback": "Partly correct. Concentration passes §2.5's range test easily — it spans orders of magnitude and is behaviourally graded — and this course lists it alongside source distance as a legitimate candidate. What fails is the *location*: the bulb's spatial layout is fixed by receptor identity, so there is no free geography left to lay concentration out along. A map has to be built where the axes are not already spent, which is why the answer specifies downstream."
    },
    {
      "text": "Sniff phase, mapped in the bulb, since bulbar responses are strongly phase-locked to respiration.",
      "correct": false,
      "feedback": "Correct under the assumption that any variable neurons are systematically tuned to is a candidate for mapping, and the tuning is real. But sniff phase fails the second criterion in the same way ITD fails it in small heads: the usable range is one respiratory cycle and the animal already has the phase from its own motor command, so there is little uncertainty to resolve and almost nothing for a map to buy. Tuning is not the same as needing a map — §2.5 is the case where a variable is genuinely encoded and a topographic layout is still not worth building."
    }
  ]
}
</script>
</x-mcq>
