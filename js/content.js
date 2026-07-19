// Markdown -> HTML pipeline.
//
// The ordering here is load-bearing. Markdown and LaTeX fight over `_` and `*`:
// left alone, `$\sigma_i * w_{ij}$` gets an <em> injected in the middle of the
// equation and the maths silently renders as garbage. Citation keys have the
// same problem (`[@olsen_2010]`).
//
// So we protect first, parse second, restore third:
//
//   1. Extract fenced code, then display maths, then inline maths, then
//      citations — each replaced by an opaque private-use-area placeholder
//      that no Markdown rule can match or split.
//   2. Run marked over what's left, which is now pure prose.
//   3. Restore the placeholders, rendering maths through KaTeX and citations
//      through the bibliography, in the order that keeps nesting correct.
//
// Deliberately NOT a marked extension: those hook into parser internals that
// change across major versions, which is exactly the dependency rot this
// project is built to avoid.

import { marked } from '../vendor/marked-12.0.2/marked.esm.js';
import { parseFrontmatter } from './frontmatter.js';
import { renderCitation } from './citations.js';
import { authorError } from './base.js';

// U+E000..U+F8FF is the Unicode private use area: these codepoints have no
// meaning to Markdown, to KaTeX, or to any sane content author.
const OPEN = '';
const CLOSE = '';

const placeholder = (kind, index) => `${OPEN}${kind}:${index}${CLOSE}`;
const placeholderPattern = (kind) =>
  new RegExp(`${OPEN}${kind}:(\\d+)${CLOSE}`, 'g');

marked.setOptions({ gfm: true, breaks: false });

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderMath(tex, displayMode, context) {
  if (!globalThis.katex) return escapeHtml(displayMode ? `$$${tex}$$` : `$${tex}$`);
  try {
    return globalThis.katex.renderToString(tex, {
      displayMode,
      throwOnError: false,      // a typo shows red inline, never blanks the page
      errorColor: 'var(--color-error)',
      trust: false,
      strict: false,
    });
  } catch (error) {
    authorError(context, `KaTeX failed on "${tex}": ${error.message}`);
    return `<code class="x-math-error">${escapeHtml(tex)}</code>`;
  }
}

/**
 * Convert one Markdown document to HTML.
 *
 * @param {string} raw       Full file contents, frontmatter included.
 * @param {object} options
 * @param {string} options.context  Human label used in authoring errors.
 * @returns {{ data: object, html: string, citedKeys: string[] }}
 */
export function renderMarkdown(raw, { context = 'content' } = {}) {
  const { data, body } = parseFrontmatter(raw);

  const codeBlocks = [];
  const configBlocks = [];
  const displayMath = [];
  const inlineMath = [];
  const citations = [];
  const citedKeys = [];

  let text = body;

  // --- Pass 1: protect ----------------------------------------------------
  // Exercise config blocks FIRST, and this ordering is load-bearing.
  // A <script type="application/json"> config legitimately contains `$maths$`
  // and `[@citations]` inside its prompt and reveal strings. If the maths and
  // citation passes below ran over it, they would replace those spans with
  // rendered HTML *inside the JSON*, and the config would no longer parse.
  // The exercise components render their own inline maths and citations from
  // the raw strings (see exercises/inline.js), so the JSON must reach them
  // completely untouched.
  text = text.replace(
    /<script type="application\/json">[\s\S]*?<\/script>/g,
    (match) => {
      configBlocks.push(match);
      return placeholder('J', configBlocks.length - 1);
    }
  );

  // Fenced code next: a code block may legitimately contain `$` or `[@...]`
  // that must survive verbatim.
  text = text.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, (match) => {
    codeBlocks.push(match);
    return placeholder('C', codeBlocks.length - 1);
  });

  // Display maths before inline, so `$$...$$` is never mistaken for two
  // adjacent empty `$...$` spans.
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    displayMath.push(tex);
    return placeholder('D', displayMath.length - 1);
  });

  // Inline maths. `\$` is an escaped literal dollar and must not open a span.
  text = text.replace(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g, (_, tex) => {
    inlineMath.push(tex);
    return placeholder('M', inlineMath.length - 1);
  });

  // Citations: [@key] or [@key1; @key2]
  text = text.replace(/\[@([^\]]+)\]/g, (_, group) => {
    const keys = group
      .split(';')
      .map((key) => key.trim().replace(/^@/, ''))
      .filter(Boolean);
    citations.push(keys);
    citedKeys.push(...keys);
    return placeholder('R', citations.length - 1);
  });

  // --- Pass 2: parse ------------------------------------------------------
  let html = marked.parse(text);

  // --- Pass 3: restore ----------------------------------------------------
  // Citations first: they produce inline HTML that must not be re-scanned
  // for maths delimiters.
  html = html.replace(placeholderPattern('R'), (_, index) =>
    renderCitation(citations[Number(index)], context)
  );
  html = html.replace(placeholderPattern('M'), (_, index) =>
    renderMath(inlineMath[Number(index)], false, context)
  );
  html = html.replace(placeholderPattern('D'), (_, index) =>
    `<div class="x-math-display">${renderMath(displayMath[Number(index)], true, context)}</div>`
  );
  html = html.replace(placeholderPattern('C'), (_, index) =>
    marked.parse(codeBlocks[Number(index)])
  );
  // Config blocks go back verbatim, exactly as the author wrote them.
  html = html.replace(placeholderPattern('J'), (_, index) => configBlocks[Number(index)]);

  // Citation keys used inside exercise configs still belong in the section's
  // reference list, so scan the protected blocks separately.
  for (const block of configBlocks) {
    for (const match of block.matchAll(/\[@([^\]]+)\]/g)) {
      for (const key of match[1].split(';')) {
        const clean = key.trim().replace(/^@/, '');
        if (clean) citedKeys.push(clean);
      }
    }
  }

  return { data, html, citedKeys: [...new Set(citedKeys)] };
}

/**
 * Give every heading a stable id so the in-page table of contents and
 * deep links (#/module/section#heading) can target them.
 * Ids derive from heading text, so they survive content edits above them.
 */
export function assignHeadingIds(root) {
  const seen = new Map();
  const headings = root.querySelectorAll('h2, h3, h4');

  for (const heading of headings) {
    const base =
      (heading.textContent || '')
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .slice(0, 60) || 'section';

    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    heading.id = count === 0 ? base : `${base}-${count + 1}`;
  }

  return headings;
}
