# Comparative Sensory Processing

An interactive, graduate-level course on how sensory systems solve their
computational problems — and on what the comparison between modalities reveals
about olfaction.

**Live site:** https://stootoon.github.io/comparative-sensory-processing-course/

Share that URL. Anyone who opens it can take the course immediately: no account,
no signup, no backend. Each visitor's progress is stored in their own browser.

---

## Status: sampler

This is a **sampler**, not the finished course — two modalities, four sections
each, chosen because they are where vision and olfaction diverge most sharply.

| | Vision | Olfaction |
|---|---|---|
| §1 | The computational problem | The computational problem |
| §2 | Natural image statistics | Plume statistics |
| §4 | The receptor array | The receptor array |
| §5 | The first circuit: retina | The first circuit: bulb |

Plus a Module 0 toolkit covering the normative vocabulary those sections use,
and a capstone teaser carrying each vision→olfaction import to a falsifiable
prediction.

The full course adds audition, somatosensation, gustation, vestibular,
proprioception, the exotic senses, and the synthesis modules. Nothing here is
throwaway — it is the first slice, and the remaining sections drop into the
same structure.

---

## Running it locally

The site is plain static files with no build step, but it **must be served over
HTTP** — browsers block ES modules and `fetch()` on `file://`, so opening
`index.html` by double-clicking will not work.

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

That is the entire toolchain. There is no `npm install`, no bundler, no CI.

Append `?dev=1` to the URL to turn on authoring validation: it checks that every
citation key resolves, every reference has a DOI or URL, exercise ids are
unique, and the manifest is well-formed. Problems are reported in the console.

---

## Editing the course

### Prose

Content lives in `content/<module>/<section>.md` as Markdown. Edit the file,
refresh the browser. Prose edits never affect anyone's saved progress, so
rewrite freely.

Maths is `$inline$` and `$$display$$`, rendered by KaTeX. Citations are
`[@key]` or `[@key1; @key2]`, resolved against `content/references.json`.
Per-section reference lists are generated automatically from the keys actually
used — never maintain one by hand.

### Structure

`content/manifest.json` is the spine. It defines every module and subsection,
their order, their stable ids, and their files. The sidebar, prev/next
navigation, and percent-complete all read from it and nowhere else. Adding a
section means adding one object.

### Exercises

Exercises are custom elements embedded inline in the Markdown, configured by a
nested JSON block. See [AUTHORING.md](AUTHORING.md) for the full reference and
the design rules that keep the questions worth answering.

```html
<x-predict>
<script type="application/json">
{ "id": "m03.s05.p1", "contentRev": 1,
  "prompt": "…", "reveal": "…" }
</script>
</x-predict>
```

### Figures

Static figures are SVG files. Interactive figures are small ES modules
exporting `{ controls, draw }`, backed by the in-repo plotting helper
`js/plot.js`. Figure authors write the physics; axes, scales, and paths are
handled for them. Figures load lazily as they scroll into view.

---

## How progress works

Everything is in `localStorage` under one key. Four rules make it survive the
course growing underneath it:

1. **Content-addressed, never index-addressed.** Progress keys on stable string
   ids, so reordering or inserting modules never shifts anyone's state.
2. **Unknown keys are never deleted.** Removing a section leaves its progress as
   an orphan; restoring the section restores the progress.
3. **Percent complete is derived, never stored.** Adding a module updates
   everyone's percentage correctly with no migration.
4. **Two version axes.** `schemaVersion` is code-driven and migrated;
   `contentRev` is per-exercise and author-driven — bump it when you materially
   change a question, and the learner sees their old answer marked stale with a
   redo option rather than losing it.

Readers can export their progress to a JSON file and import it elsewhere. With
no accounts, that is the cross-device story, the cleared-browser-data recovery
story, and the way someone can send you their results.

---

## Deploying

The repo *is* the site. Push to `main` and GitHub Pages serves it.

Two things that bite exactly once:

- **`.nojekyll`** must stay at the repo root, or Jekyll silently drops
  `_`-prefixed paths.
- **All paths must be relative.** Pages serves under `/<repo-name>/`, not `/`,
  so an absolute `/vendor/...` works on localhost and 404s in production.

`version.json` records the commit and build time, and is embedded in progress
exports — useful when someone sends you a file and you need to know which
version of the course produced it.

---

## Dependencies

Two, both vendored into `vendor/` and pinned by directory name:

- **KaTeX 0.16.11** — maths rendering, with fonts, so it works offline
- **marked 12.0.2** — Markdown parsing

Vendored rather than loaded from a CDN so the course keeps working when a CDN
has an outage, when a reader is on a plane, and in five years.

---

## Citations

Every substantive claim should be traceable. Entries in
`content/references.json` were verified against PubMed rather than written from
memory — authors, year, title, and venue come from the database record.

Two content rules go with that. Quantitative values, experimental findings, and
normative results get a citation. Where the literature is genuinely contested,
cite **both sides** and say so in the prose: teaching a controversy as settled
is worse than omitting it.

Pre-1970 and book-chapter references (Attneave 1954, Barlow 1961) are the ones
most worth double-checking, since database coverage thins there.
