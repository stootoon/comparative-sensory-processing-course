# What came from Kandel, and what did not

A cross-check of the course against **Kandel, Koester, Mack & Siegelbaum (eds),
*Principles of Neural Science*, 6th ed. (2021), Part IV: Perception** — chapters
17–29, part edited by Albright and Bruno.

Cited throughout as `[@kandel2021]`; the citing prose names the chapter where it
matters. **112 inline citations across 55 sections.** Baseline before the pass
was commit `2de34bc`.

Chapter 20 (Pain) was deliberately excluded — nociception is a separate deferred
task.

---

## What was NOT taken

**No figures.** Kandel's figures are McGraw Hill's copyright and this course is
published publicly; every image currently in it is CC-BY from an open-access
source. Nothing was extracted or embedded. Figures worth commissioning an
original equivalent of are listed at the bottom.

**No verbatim prose.** Everything is paraphrase in the course's own voice.

**No textbook framing.** Kandel is descriptive; this course is normative and
argues a thesis. The rule applied throughout was that an addition must serve an
argument the course already makes or correct something wrong — a section that
got longer without getting sharper was treated as a regression. Material
deliberately declined includes the >10,000-odorant and perfumer figures
(folklore-grade), human anosmia statistics, the *C. elegans* dauer material, and
the invertebrate anatomy in ch29, which the course covers better than Kandel
does.

**The toolkit (module 0) was left unchanged**, deliberately. Chapter 17 is
descriptive psychophysics — Weber–Fechner, Stevens' power law, receptive-field
basics — plus one paragraph on Barlow redundancy reduction that §0.1 and §0.2
already state more precisely and already cite. Nothing met the bar of an outright
error or a missing concept later modules depend on.

---

## Errors found and fixed

### 1. The 70 ms grip correction is not a spinal reflex — it is transcortical

**The most consequential error, and it had propagated to three files.**

The course said: *"That is a reflex loop, and it means much of touch's processing
must complete without cortical involvement."* Kandel ch19 is explicit that when
RA1 afferents signal micro-slip, grip force is increased by signals from **motor
cortex** — a long-latency transcortical response.

Fixed in `04-somatosensation/01-computational-problem.md` (prose),
`06-routing.md` (an MCQ distractor that asserted a spinal loop), and
`09-active-sensing.md` (prose, an x-order item, and a modelAnswerNote).

The correction **strengthens** the course's argument rather than weakening it: a
full cortical round trip inside 70 ms is a more demanding constraint on pathway
length than a subcortical shortcut, because every synapse is paid for twice.
§4.6's deadline argument is unaffected — it never depended on the grip loop being
the thalamus-skipping route.

### 2. Retinal anatomy

- **Two** synaptic layers between photoreceptor and optic nerve, not three;
  about ten bipolar cell types and some thirty amacrine types, where the course
  said "more than a dozen interneuron classes".
- Cone density in the fovea exceeds peripheral density by **roughly** two orders
  of magnitude, not "more than".

### 3. Decussation

`04-somatosensation/06-routing.md` said "the medial lemniscus crosses and
ascends". The second-order axons cross in the medulla and *form* the lemniscus,
which then ascends uncrossed.

### 4. Sister-cell passage lacked its key number

`03-olfaction/05-first-circuit.md` described sister mitral cells without stating
how many there are. Now: several thousand sensory axons arrive on some **40–50**
mitral and tufted cells per glomerulus in mouse.

---

## Where the check came back clean

Worth recording, because a null result from a careful check is informative.

**Olfaction: no factual errors.** Every quantitative and anatomical claim across
all eleven sections survived — receptor counts, the ~100 ms ORN time constant,
convergence ratios, the cortical target list, piriform's three-layer
non-topographic organisation, mitral/tufted output.

**Gustation: no factual errors.** Five qualities, receptor families and counts,
transduction per quality, cranial nerves and ganglia, the NST → parabrachial →
VPMpc → insula route, cell turnover, taste-bud cell counts. Two near-misses were
left deliberately: the course says taste cells turn over "every 10–14 days" where
Kandel says "days to weeks" (the course is more precise and not contradicted),
and "~25 bitter receptors" against Kandel's 28 T2R genes / "approximately 30" —
§5.3 already reconciles this as roughly 25 functional receptors from a family of
about 30.

**The vomeronasal passage**, added shortly before this pass and previously
unverified, checked out against ch29.

---

## The two claims the course leans on hardest

**Spinocerebellar bypass — supported.** Chapter 18 lists the dorsolateral tract
as a third ascending somatosensory pathway alongside DCML and spinothalamic, and
states that dorsal-horn circuits receiving low-threshold mechanoreceptor input
project directly to the cerebellum. A genuine third route, not a collateral. This
matters because §4.6, §3.6, §10.5 and §13.2 all use it as evidence against the
"olfaction lacks a relay because it is ancient" explanation.

**Map plus millisecond timing — strongly supported, and sharpened.** Kandel adds
two things the course was missing. The two codes divide by *spatial scale*: SA1
carries features coarse enough to indent the skin, while textures too fine to
indent it are carried by RA1/RA2 firing in phase with scan-induced vibration — so
the temporal code reaches what the spatial one cannot, rather than duplicating
it. And the temporal code is progressively converted to a rate code with depth
(afferents and area 3b phase-lock, area 1 weaker, S-II codes frequency by rate).
That yields a reframing now added to the module's olfaction hook: **asking
whether olfaction uses a timing code without specifying recording depth is a
malformed question.** Auditory cortex shows the same transition, making two
independent instances.

---

## One place the course and Kandel genuinely disagree

**`03-olfaction/06-routing.md`.** The course claims the piriform → mediodorsal
thalamus → orbitofrontal loop is late, non-obligatory, and carries value and
decision rather than sensory content. Kandel's reading is that these frontal
pathways *are* the substrate of odour discrimination — orbitofrontal lesions
abolish it, and some OFC neurons are multimodal.

These are not straightforwardly compatible: a genuinely post-decisional route
should not lesion into a discrimination deficit.

**The course's claim was kept**, the tension surfaced explicitly in the text, the
direct piriform → frontal projection that bypasses thalamus was added, and the
course's reconciliation is now stated as a proposal with a falsifiable
prediction — piriform ensembles should still separate odours under OFC silencing;
if they do not, the course is wrong.

**This is the item most worth author review.** It is a place where the course may
be being interesting rather than wrong, and it is the only load-bearing
disagreement with the textbook in the module.

---

## Flagged for a future pass

**The synapse-count convention.** Kandel says S1 is "at least three synapses
beyond touch receptors"; the course says four, counting the Merkel-cell-to-
afferent synapse to match vision's photoreceptor-based count. Both are
defensible and the number was left alone — but the convention only works for the
Merkel channel. RA1 and Pacinian afferents transduce at the terminal with no
receptor-cell synapse, so touch is strictly three synapses for three of its four
classes. Changing it would touch §7.6, §10.5, §11.4 and the §13.8 exam.

**Unverifiable against Kandel.** Chapter 29 gives no figure for olfactory
transduction cascade gain, so §3.3's shot-noise treatment has no textbook
counterpart. It stands unverified rather than verified.

---

## Kandel figures worth commissioning an original equivalent of

None of these were extracted. They are listed so an equivalent can be drawn.

| Figure | Shows | Would serve |
|---|---|---|
| 19–7 | Braille dots scanned across a fingertip, all four afferent classes recorded simultaneously — SA1 renders a sharp spatial image, RA1 a blurred one, RA2 fires hard while carrying no spatial information | §4.4 and the module's olfaction hook. The single best image opportunity in the course; there is no equivalent. |
| 19–9B | Area 3b vs area 1 rasters to a 20 Hz stimulus | The new temporal-to-rate-conversion argument |
| 19–22 | Nine-patient lesion bar graphs | §4.8's what/where double dissociation |
| 29–6 | Bulb interneurons: reciprocal dendrodendritic arrangement of periglomerular and granule cells | §3.5, and §3.6's feedback-targeting-inhibition argument |
| 29–8 | Bulb → six cortical areas, then the split into direct frontal and indirect thalamic routes | §3.6 and the disagreement recorded above |
| 29–17 | Gustatory pathway with ganglion-level detail | §5.6; cleaner than the current `flavor-three-pathways.jpg` |
| 29–8 + 29–17 side by side | Olfactory and gustatory pathways at the same scale | Would make the thalamus contrast visual rather than verbal — the best figure opportunity in module 5 |

---

## Citations by module

| Module | Citations | Sections touched |
|---|---|---|
| 01 Vision | 17 | 6 |
| 02 Audition | 24 | 10 |
| 03 Olfaction | 15 | 10 |
| 04 Somatosensation | 21 | 11 |
| 05 Gustation | 16 | 11 |
| 06 Vestibular | 19 | 7 |
| **Total** | **112** | **55** |
