# Authoring reference

How to write content for this course. Read [README.md](README.md) first for how
to run it.

---

## The parallel skeleton

Every modality module uses the **same eleven-section skeleton, in the same
order, with the same numbering**, so §4 always means the receptor array whether
the reader is in vision or olfaction. Readers should be able to go across
modules as easily as down one.

| § | Section | Always answers |
|---|---|---|
| 1 | The computational problem | What must be inferred, from what, under what loss, on what deadline — *before* any anatomy |
| 2 | The signal and its natural statistics | Physics of the carrier; measured statistics; dimensionality, metric, timescales |
| 3 | Transduction and physical limits | The sensor as a device: noise floor, bandwidth, dynamic range, latency |
| 4 | The receptor array | Channel count, tuning breadth, ordered or unordered, how it tiles the space |
| 5 | The first circuit | Retina / bulb / cochlear nucleus / dorsal horn. "Circuit", not "relay" |
| 6 | Routing: thalamus and its alternatives | What plays thalamus's *functional* role where there is no relay |
| 7 | The central representation | The first large recurrent plastic area — not "primary cortex" |
| 8 | Parallel streams | Identity / location / value / action divergence |
| 9 | Active sensing and the motor loop | Sampling as optimal experiment design; efference copy |
| 10 | Adaptation, gain control, state | Across timescales, milliseconds to lifetime |
| 11 | Normative synthesis + olfaction hook | Score the theories; state what is unexplained; hand a clue to the capstone |

**No section may be deleted.** Where a structure is absent, the section says so
and explains why. Absences are the most comparatively informative data in the
course — deleting the section destroys that information.

Two renamings are load-bearing. §6 is "routing", not "thalamus", so olfaction's
missing relay becomes a rich positive question rather than a gap. §7 is "the
central representation", not "primary cortex", so proprioception can answer
honestly (cerebellum and forward models) and piriform can be described as what
it is rather than forced into a V1 mould.

Every §11 ends with an explicit paragraph handing a clue to the capstone.
**Write that paragraph while the module is fresh**, not at the end — it turns
the capstone into an editing job rather than a writing job.

---

## Citations

Inline: `[@key]`, or `[@key1; @key2]` for several. Resolved against
`content/references.json`. Renders as a clickable author–year link opening a
popover with the full entry and a DOI link.

Per-section reference lists are generated from the keys actually used. Do not
maintain one by hand.

A reference entry:

```json
"atick1992": {
  "authors": "Atick, J. J. & Redlich, A. N.",
  "year": 1992,
  "title": "What does the retina know about natural scenes?",
  "venue": "Neural Computation 4(2):196–210",
  "doi": "10.1162/neco.1992.4.2.196",
  "note": "Optional. Shown in the popover — use it to say why this matters."
}
```

`doi` or `url` is required; `?dev=1` flags entries missing both. Verify new
entries against PubMed rather than writing them from memory.

Citations work inside exercise JSON too — they are rendered by the exercise
component rather than the main pipeline, but the syntax is identical and the
keys still appear in the section's reference list.

---

## Exercises

All exercises share this shape:

```html
<x-TYPE>
<script type="application/json">
{ "id": "mNN.sNN.xN", "contentRev": 1, ... }
</script>
</x-TYPE>
```

`id` must be globally unique and is the primary key of the whole progress
system — a duplicate means two exercises silently share one saved answer.
Convention: `<subsection-id>.<short>`, e.g. `m03.s05.p1`.

`contentRev` starts at 1. **Bump it when you materially change a question** —
reorder options, change which is correct, rewrite the prompt. The learner then
sees their previous answer greyed with a redo button, and it is excluded from
scoring. Do not bump for typo fixes in feedback text. Editing surrounding prose
needs no bump at all.

### Design rules

These matter more than the syntax.

1. **Predict-then-reveal answers must be derivable** from the normative
   principle, without knowing the paper. If the reader could only get it by
   having read the citation, it is a recall question wearing a disguise.
2. **No distractor is obviously wrong.** Each should be the answer under a
   *different plausible normative assumption*, and its feedback should name that
   assumption. The distractor rationales are the teaching content — which is why
   a correct answer reveals all of them.
3. **Every widget needs a reachable wrong-answer region** the reader can drive
   the system into.
4. **The comparison matrix fills progressively** across the course, not in one
   place.

### `<x-mcq>`

```json
{
  "id": "m01.s02.q1", "contentRev": 1, "points": 1,
  "prompt": "Why does sparse coding recover oriented filters when decorrelation does not?",
  "multi": false,
  "options": [
    { "text": "…", "correct": true, "feedback": "Why this is right." },
    { "text": "…", "feedback": "Names the assumption under which this would be right." }
  ]
}
```

### `<x-predict>`

The flagship type. The reveal button stays locked until the reader writes
something, and latches open once revealed.

```json
{
  "id": "m00.s02.p1", "contentRev": 1,
  "prompt": "Before reading on — sketch …",
  "placeholder": "Optional textarea hint",
  "reveal": "What actually happens. Supports $maths$ and [@citations].",
  "followUp": "Optional further provocation."
}
```

Scored `maxScore: 0` deliberately. There is no right answer to grade; the
commitment is the exercise, so it must not affect anyone's score.

### `<x-free-response>`

```json
{
  "id": "m03.s02.f1", "contentRev": 1, "points": 1,
  "prompt": "…",
  "modelAnswer": "…",
  "rubric": ["What a complete answer covers", "…"]
}
```

Self-assessed (missed / partly / got it → 0 / 0.5 / 1). The rubric exists to
make self-assessment honest — without it people mark themselves correct for
having written something adjacent.

### `<x-order>`

```json
{
  "id": "m00.s02.o1", "contentRev": 1, "points": 1, "partialCredit": true,
  "prompt": "Put these in order.",
  "items": ["First", "Second", "Third"]
}
```

Author `items` in the **correct** order; the component shuffles and persists the
shuffle seed. Up/down buttons are the primary interface; dragging is a bonus,
since HTML5 drag fails on touch and for keyboard users.

### `<x-matrix>`

The comparative datasheet workhorse.

```json
{
  "id": "m03.s04.mx1", "contentRev": 1, "points": 6,
  "corner": "Property",
  "prompt": "…",
  "rows": ["Array ordering", "Metric structure"],
  "columns": ["Vision", "Olfaction", "Your notes"],
  "cells": {
    "Array ordering|Olfaction": { "answer": "unordered", "accept": ["not ordered", "disordered"] }
  },
  "modelAnswerNote": "Shown after checking — use it for the point the table makes."
}
```

Cell keys are `"row|column"`. A cell with no entry in `cells` is an ungraded
notes field. Matching is deliberately forgiving (case, whitespace, punctuation,
and substrings both ways) — the point is whether the reader knows the array is
unordered, not whether they typed the exact word.

---

## Figures

```html
<x-figure src="content/01-vision/figures/tuning-breadth.js"
  caption="What the reader should take from it.">
</x-figure>
```

Static `.svg`, `.png`, `.jpg`, and `.webp` are shown directly. A `.js` src is
loaded as a module exporting:

```js
export const controls = [
  { id: 'dim', label: 'Dimensionality D', min: 1, max: 8, step: 1, value: 1,
    format: (v) => `${v}` },
  { id: 'mode', label: 'Show', type: 'select', value: 'a',
    options: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }] },
];

export function draw(root, values, { createPlot, sample }) {
  const plot = createPlot(root, {
    width: 660, height: 350,
    x: { domain: [0.01, 1], scale: 'log', label: '…' },
    y: { domain: [0, 1], label: '…' },
  });
  plot.line(sample(0, 1, 200, (x) => f(x)), { className: 'series-1' });
  plot.vline(0.5, { label: 'marker' });
  plot.legend([{ label: 'series', className: 'series-1' }]);
}
```

`draw` is called on every control change and must rebuild from scratch — the
host clears the container first.

Plot API: `line`, `area`, `points`, `bars`, `vline`, `hline`, `annotate`,
`legend`. Series colours are `series-1` … `series-5`, theme-aware in light and
dark. Data is clipped to the plot rectangle, so curves running off the domain
will not draw over the axes.

Appending a `<p class="x-figure-note">` from inside `draw` gives live
commentary that updates with the sliders — use it to say what the *current*
parameter values mean, not just what the figure is.

---

## Checklist before committing

- [ ] `python3 -m http.server 8000`, open with `?dev=1`, console clean
- [ ] Every new citation key resolves and has a DOI or URL
- [ ] Exercise ids unique and prefixed with their subsection
- [ ] `contentRev` bumped on any materially changed question
- [ ] Equations render; no stray `$` eaten by Markdown
- [ ] Widgets have a reachable wrong-answer region
- [ ] Checked at a 390px viewport — no horizontal page scroll
- [ ] New subsections added to `content/manifest.json`
