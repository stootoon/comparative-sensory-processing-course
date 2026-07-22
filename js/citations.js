// Citations and the bibliography.
//
// Every substantive claim in this course is meant to be traceable to a paper.
// That only stays true if broken citations are impossible to ignore, so an
// unresolvable key renders as a loud inline marker rather than failing quietly.
//
// Authors write [@key] in Markdown; per-section reference lists are generated
// from the keys actually used, never hand-maintained (hand-maintained lists
// drift out of sync with the prose within about two edits).

import { url, DEV, authorError } from './base.js';

/** @type {Map<string, object>} key -> entry */
let entries = new Map();

/** key -> Set of subsection ids that cite it. Powers bibliography backlinks. */
const citedBy = new Map();

/** Keys referenced by content but absent from references.json. */
const missing = new Set();

export async function loadReferences() {
  const response = await fetch(url('content/references.json'));
  if (!response.ok) {
    throw new Error(`references.json failed to load (HTTP ${response.status})`);
  }
  entries = new Map(Object.entries(await response.json()));
  return entries;
}

export const getEntry = (key) => entries.get(key) ?? null;
export const allEntries = () => [...entries.entries()];

// One author in the bibliography's format: a surname, then initials.
// "Yau, K.-W." and "Ryba, N. J. P." both have to count as one.
const AUTHOR = /([A-ZÀ-Þ][A-Za-zÀ-ÿ'’-]+(?:\s+[A-Za-zÀ-ÿ'’-]+)?),\s*(?:[A-ZÀ-Þ]\.\s*-?\s*)+/g;

/**
 * Short form shown inline: "Atick & Redlich 1992", "Baylor et al. 1979".
 *
 * The author COUNT cannot come from splitting on "&": the bibliography writes
 * a nine-author paper as "Ackels, T., Erskine, A., … & Schaefer, A. T.", which
 * has exactly one ampersand and so used to render as "Ackels & Schaefer 2021".
 * That was wrong for 27 of the 55 entries — every paper with three or more
 * authors was silently attributed to two of them. Counting proper
 * surname-plus-initials groups fixes it.
 *
 * The surnames themselves still come from the ampersand split, because that
 * handles particles correctly: "van Hateren, J. H. & van der Schaaf, A."
 * must yield "van Hateren", which a surname regex anchored on a capital
 * letter would truncate to "Hateren".
 */
export function shortForm(entry) {
  const authors = entry.authors || '';
  const surnames = authors
    .split('&')
    .map((part) => part.trim().split(',')[0].trim())
    .filter(Boolean);

  const matched = authors.match(AUTHOR)?.length ?? 0;
  const count = Math.max(matched, surnames.length);

  let names;
  if (surnames.length === 0) names = 'Anon.';
  else if (count === 1) names = surnames[0];
  else if (count === 2) names = `${surnames[0]} & ${surnames[surnames.length - 1]}`;
  else names = `${surnames[0]} et al.`;

  return entry.year ? `${names} ${entry.year}` : names;
}

function escapeAttr(text) {
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Render one [@key] (or [@a; @b]) occurrence to inline HTML. */
export function renderCitation(keys, context = 'content') {
  const parts = keys.map((key) => {
    const entry = entries.get(key);

    if (!entry) {
      missing.add(key);
      authorError(context, `unknown citation key "${key}"`);
      return `<span class="x-cite x-cite-missing" title="No entry for '${escapeAttr(key)}' in references.json">[?${escapeAttr(key)}]</span>`;
    }

    if (!citedBy.has(key)) citedBy.set(key, new Set());
    citedBy.get(key).add(context);

    return `<button type="button" class="x-cite" data-cite-key="${escapeAttr(key)}" aria-label="Reference: ${escapeAttr(shortForm(entry))}">${escapeAttr(shortForm(entry))}</button>`;
  });

  return `<span class="x-cite-group">(${parts.join('; ')})</span>`;
}

/** Link out to a DOI or explicit URL, whichever the entry provides. */
export function entryLink(entry) {
  if (entry.doi) return `https://doi.org/${entry.doi}`;
  return entry.url || null;
}

/** Full formatted reference, used in per-section lists and the bibliography. */
export function formatEntry(entry) {
  const bits = [];
  if (entry.authors) bits.push(escapeAttr(entry.authors));
  if (entry.year) bits.push(`(${entry.year})`);
  if (entry.title) bits.push(`<span class="x-ref-title">${escapeAttr(entry.title)}</span>`);
  if (entry.venue) bits.push(`<em>${escapeAttr(entry.venue)}</em>`);

  const link = entryLink(entry);
  const linkHtml = link
    ? ` <a class="x-ref-link" href="${escapeAttr(link)}" target="_blank" rel="noopener noreferrer">${entry.doi ? 'doi' : 'link'} ↗</a>`
    : '';

  return bits.join(' ') + '.' + linkHtml;
}

/** Build the "References" block appended to each subsection. */
export function buildReferenceList(keys) {
  const resolved = keys.map((key) => [key, entries.get(key)]).filter(([, e]) => e);
  if (resolved.length === 0) return null;

  const section = document.createElement('section');
  section.className = 'x-references';
  section.innerHTML = `
    <h2>References</h2>
    <ol class="x-ref-list">
      ${resolved
        .map(
          ([key, entry]) =>
            `<li id="ref-${escapeAttr(key)}">${formatEntry(entry)}${
              entry.note ? `<span class="x-ref-note">${escapeAttr(entry.note)}</span>` : ''
            }</li>`
        )
        .join('\n')}
    </ol>`;
  return section;
}

/**
 * Validate the citation graph. Only surfaced in ?dev=1 — these are authoring
 * defects, not reader-facing problems.
 */
export function validateCitations() {
  const problems = [];

  for (const key of missing) {
    problems.push(`Cited but not defined: ${key}`);
  }

  for (const [key, entry] of entries) {
    if (!entryLink(entry)) {
      problems.push(`No doi or url: ${key}`);
    }
    if (!citedBy.has(key)) {
      // Only meaningful once everything has been visited, so this is advisory.
      problems.push(`Defined but not yet cited in any visited section: ${key}`);
    }
    for (const field of ['authors', 'year', 'title']) {
      if (!entry[field]) problems.push(`Missing "${field}": ${key}`);
    }
  }

  if (DEV && problems.length) {
    console.group(`[citations] ${problems.length} issue(s)`);
    problems.forEach((problem) => console.warn(problem));
    console.groupEnd();
  }

  return problems;
}

export const getCitedBy = (key) => [...(citedBy.get(key) ?? [])];
