---
id: m01.s06
title: Routing — the thalamus and what it is for
lede: The LGN barely re-codes its input, yet nothing reaches visual cortex without passing through it. Working out what it is doing is the necessary preparation for asking how olfaction manages without one.
estimatedMinutes: 16
---

Retinal ganglion cell axons terminate in the lateral geniculate nucleus, and LGN neurons project to V1. Almost nothing bypasses this. Yet LGN receptive fields look remarkably like retinal ones — centre–surround, similar sizes, similar dynamics.

**So what is it for?** This is one of the better open questions in systems neuroscience, and this course needs an answer to it more than most, because §3.6 asks what happens when a modality does without.

## What the anatomy says

The striking fact: **only about 5–10% of synapses in LGN come from the retina.** The rest come from cortex, from the thalamic reticular nucleus, and from brainstem modulatory systems. Descending corticothalamic projections outnumber ascending thalamocortical ones by roughly ten to one.

<x-figure src="content/media/lgn-layers-marmoset.jpg"
  caption="The layered LGN. Magnocellular, parvocellular and koniocellular laminae are anatomically distinct and receive from different ganglion cell classes — the parallel streams of §1.8 are already separate here, one synapse before cortex."
  credit="Santana NNM, da Silva MMO, Silva EHA, dos Santos SF, Bezerra LL, Escariao WKM, et al. (PLOS ONE), Fig. 1. CC BY 4.0."
  source="https://commons.wikimedia.org/wiki/File:Morphology_of_marmoset_dorsal_lateral_geniculate_nucleus_(DLG).png">
</x-figure>


A structure receiving ten times more feedback than feedforward input is not a relay in any ordinary sense of the word.

The standard framework distinguishes **drivers** from **modulators**. Retinal input is the driver: it determines what the LGN cell responds to. The vastly more numerous cortical and brainstem inputs are modulators: they determine *whether, when and how strongly* that response is transmitted.

## Candidate functions

**Gain control and attentional gating.** Attending to a location enhances the corresponding LGN response. The thalamus is where cortex adjusts what it receives.

**Burst and tonic modes.** LGN cells fire in two regimes depending on membrane potential. Burst mode is thought to signal that something unexpected has appeared — a high-salience wake-up — while tonic mode transmits with better fidelity. The relay has a state.

**Cross-cortical routing.** Higher-order thalamic nuclei such as pulvinar connect cortical areas to each other *through* thalamus, which may be a mechanism for flexible routing that direct cortico-cortical connections cannot provide.

<x-callout class="x-callout is-key">
<div class="x-callout-title">Decomposing "what thalamus does" — the list §3.6 needs</div>
For the comparison to work, the question must be broken into services rather than treated as one thing:

<strong>1. Driver/modulator segregation</strong> — a place where sensory drive and contextual control meet on separate terms.<br>
<strong>2. Attentional gating</strong> — selective enhancement before cortex.<br>
<strong>3. State-dependent transmission</strong> — burst/tonic, tied to arousal and sleep.<br>
<strong>4. Cross-area routing</strong> — a switchboard between cortical regions.

Now the productive question is not "why does olfaction lack a thalamus?" but <strong>"which of these four does olfaction implement, and where?"</strong>

The answer §3.6 develops: olfaction implements several of them, in the <em>bulb</em>, before cortex rather than between cortical stages. Massive cortical feedback onto granule cells provides gating and gain control at the first synapse. The unusual thing about olfaction may not be that it lacks the functions, but that it places them one stage earlier.
</x-callout>

<x-predict>
<script type="application/json">
{
  "id": "m01.s06.p1",
  "contentRev": 1,
  "prompt": "The LGN receives ten times more descending input from cortex than ascending input from the retina, yet its receptive fields look much like retinal ones. Predict what that combination implies about what the feedback is doing — and note what it rules out.",
  "placeholder": "What is all that feedback for, given the receptive fields barely change?",
  "reveal": "The combination is genuinely constraining, and rules out the most obvious hypothesis.\n\n**Ruled out: the feedback builds the receptive field.** If cortical input were constructing or substantially reshaping LGN tuning, receptive fields would look different from retinal ones. They do not. Whatever the feedback does, it is not re-coding *what* the cell responds to.\n\n**What remains: the feedback controls transmission rather than content.** Gain, timing, and the decision about whether a given signal is passed on at all. Modulators change the volume and the gating, not the tuning.\n\nA useful way to hold it: the retina decides *what* to send; cortex decides, via thalamus, *whether now is a good time to listen and how loudly*. The 10:1 ratio then stops being paradoxical — control can require far more circuitry than the thing controlled, as it does in most engineered systems.\n\n**Carry this to olfaction.** Cortical feedback to the olfactory bulb is also massive, and also targets inhibitory granule cells rather than the projection neurons directly — which is a gain and gating architecture, not a tuning architecture. The structural parallel to thalamic modulation is closer than the textbook framing of \"olfaction has no thalamus\" suggests."
}
</script>
</x-predict>
