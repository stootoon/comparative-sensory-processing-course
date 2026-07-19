// Inline rendering for text that arrives via exercise JSON rather than
// through the Markdown pipeline: prompts, option labels, feedback, model
// answers, reveal text.
//
// Exercise configs are deliberately shielded from the main content pipeline
// (see content.js) so their JSON reaches the component intact. The cost is
// that maths and citations inside those strings have not been rendered, so
// this module does it — with the same protect-then-parse ordering, since the
// same `$\sigma_i * w_j$` hazard applies here.
//
// Running full Markdown instead would wrap everything in <p> and fight the
// exercise layout, so this is a deliberately small subset.

import { renderCitation } from '../citations.js';

const MATH_OPEN = '';
const MATH_CLOSE = '';
const CITE_OPEN = '';
const CITE_CLOSE = '';

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function katexOrPlain(tex, displayMode) {
  if (!globalThis.katex) return escapeHtml(displayMode ? `$$${tex}$$` : `$${tex}$`);
  try {
    return globalThis.katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      errorColor: 'var(--color-error)',
      strict: false,
      trust: false,
    });
  } catch {
    return `<code>${escapeHtml(tex)}</code>`;
  }
}

/**
 * Render a short string containing maths, citations, `code`, *emphasis*,
 * **strong**, and [links](url). Returns an HTML string.
 */
export function renderInline(text) {
  if (text == null) return '';

  const maths = [];
  const cites = [];
  let working = String(text);

  // Protect maths first — before emphasis can misread `\sigma_i * w_j`.
  working = working.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    maths.push([tex, true]);
    return `${MATH_OPEN}${maths.length - 1}${MATH_CLOSE}`;
  });
  working = working.replace(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g, (_, tex) => {
    maths.push([tex, false]);
    return `${MATH_OPEN}${maths.length - 1}${MATH_CLOSE}`;
  });

  // Then citations, before the link rule can mistake `[@key]` for markup.
  working = working.replace(/\[@([^\]]+)\]/g, (_, group) => {
    const keys = group
      .split(';')
      .map((key) => key.trim().replace(/^@/, ''))
      .filter(Boolean);
    cites.push(keys);
    return `${CITE_OPEN}${cites.length - 1}${CITE_CLOSE}`;
  });

  working = escapeHtml(working);

  // Now the safe subset, innermost first.
  working = working
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/\n\n+/g, '</p><p>');

  working = working.replace(
    new RegExp(`${CITE_OPEN}(\\d+)${CITE_CLOSE}`, 'g'),
    (_, index) => renderCitation(cites[Number(index)], 'exercise')
  );

  working = working.replace(
    new RegExp(`${MATH_OPEN}(\\d+)${MATH_CLOSE}`, 'g'),
    (_, index) => {
      const [tex, displayMode] = maths[Number(index)];
      return katexOrPlain(tex, displayMode);
    }
  );

  return working;
}

/** Same, wrapped in paragraph tags — for multi-paragraph reveal text. */
export function renderBlock(text) {
  const html = renderInline(text);
  return html.startsWith('<p>') ? html : `<p>${html}</p>`;
}
