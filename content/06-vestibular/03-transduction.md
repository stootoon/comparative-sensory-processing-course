---
id: m06.s03
title: Transduction and physical limits
lede: The same hair cell as the cochlea, in a completely different mechanical package, computing a completely different thing. It is the cleanest demonstration in the course that the accessory structure, not the transducer, defines the computation.
estimatedMinutes: 12
---

## The same transducer

Vestibular hair cells are essentially the same cells as cochlear hair cells: a bundle of stereocilia, tip links, direct mechanical gating, sub-millisecond latency.

<x-figure src="content/media/vestibular-hair-cells-innervation.jpg"
  caption="Vestibular and cochlear hair cells side by side. Note the kinocilium and the graded stereocilia, and the calyx ending enveloping the Type I vestibular cell. The transducer is essentially the same in both systems — what differs is entirely what is built around it, and that difference is what turns one cell type into a frequency analyser, an angular velocity sensor, and a linear accelerometer."
  credit="Masetto S, Spaiardi P, Johnson SL, Figure 2. CC BY 3.0."
  source="https://commons.wikimedia.org/wiki/File:Auditory_and_vestibular_hair_cells_and_their_innervation_in_adult_mammals.png">
</x-figure>


Same protein machinery, same speed, same fundamental operation — deflect the bundle, open channels, depolarise.

<x-callout class="x-callout is-key">
<div class="x-callout-title">One transducer, three computations</div>
This is the module's best comparative point, and it is worth stating starkly.

The <strong>cochlea</strong> packages hair cells along a stiffness gradient and gets a <strong>frequency analyser</strong>.<br>
The <strong>semicircular canals</strong> package them behind a fluid-filled torus and a cupula, and get an <strong>angular velocity sensor</strong> — the fluid's inertia mechanically integrates acceleration.<br>
The <strong>otolith organs</strong> package them under a dense crystal mass, and get a <strong>linear accelerometer</strong>.

Three completely different measurements, from one transducer, differing only in what is built around it.

<strong>The general lesson:</strong> a great deal of what a sensory system computes is determined before any neuron is involved, by the mechanics of the accessory structure. §4.3 made this point with the Pacinian corpuscle; vestibular makes it decisively, because here the transducer is held constant and only the packaging varies.

<strong>And the olfactory consequence:</strong> olfaction has essentially no accessory structure doing useful work (§4.3). Whatever it computes, it computes neurally. This is a systematic asymmetry when comparing circuit complexity across modalities.
</x-callout>

## The canals as mechanical integrators

Each canal is a fluid-filled torus with a gelatinous **cupula** blocking it. Rotate the head and the fluid lags behind by inertia, pushing the cupula and deflecting the hair cells embedded in it.

<x-figure src="content/media/crista-ampullaris-histology.jpg"
  caption="The crista ampullaris in section — the sensory epithelium sitting in the swelling of a semicircular canal, with the cupula extending across the lumen. The mechanical integration that turns angular acceleration into a velocity signal happens here, in the fluid and the gel, before any neuron is involved."
  credit="Jozeppy26. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Semicircular_canal_-_ampulla.png">
</x-figure>


The mechanics matter: the fluid's inertia and the cupula's elasticity combine so that, over the mid-frequency band, cupula deflection is proportional to angular **velocity** rather than acceleration. **The canal integrates, mechanically, for free.**

Three canals per ear, arranged approximately orthogonally, giving a near-complete basis for three-dimensional rotation. Six canals total, in push–pull pairs across the two ears.

## The otoliths

The utricle and saccule each carry a **macula** — an epithelium overlaid with a gel containing dense calcium carbonate crystals, the **otoconia**. When the head accelerates, the mass lags and shears the gel across the hair cells.

<x-figure src="content/media/otolith-organ-nasa.jpg"
  caption="An otolith organ. The dense otoconia sit atop a gelatinous layer over the hair cells; head acceleration makes the mass lag, shearing the gel. This is why the tilt–translation ambiguity is unavoidable — a mass on a spring cannot distinguish gravitational from inertial acceleration, and no better-built sensor could."
  credit="NASA. Public domain."
  source="https://commons.wikimedia.org/wiki/File:Otolith_organ_of_vestibular_system.jpg">
</x-figure>


The utricular macula is roughly horizontal and the saccular roughly vertical, so together they cover linear acceleration in all directions. Hair cell orientations vary systematically across each macula, so direction is coded by which subpopulation is most deflected.

## Regular and irregular afferents

Vestibular afferents fall into two classes: **regular**, with low variability and tonic firing, and **irregular**, with high variability, more phasic responses, and greater sensitivity to high frequencies.

This is the split-early motif once more — the sixth independent instance in this course, after retinal sustained/transient, cochlear cell types, SA/RA/PC in touch, the fly chordotonal organ, and mitral/tufted. And it is the closest to mitral/tufted in character: **two classes differing in variability, dynamics and downstream target, from the same sensory input.**

Whatever explains one may explain the other, and the vestibular version has the advantage of a well-specified computation to be optimal for.
