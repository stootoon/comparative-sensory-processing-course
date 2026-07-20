// Anchoring highlights to prose that will be rewritten.
//
// Character offsets would be trivial and wrong: this course's prose is edited
// freely, and the whole progress design exists so that editing does not destroy
// reader state. Highlights get the same guarantee, by the same means — they are
// addressed by content, not by position.
//
// The scheme is the W3C Web Annotation TextQuoteSelector: store the quoted text
// plus a window of context either side, then search for it on load. That
// survives edits anywhere else in the section, and fails only when the
// highlighted sentence itself changes — at which point the highlight is
// ORPHANED, not deleted. Deleting would lose the reader's note.

const CONTEXT = 40;

// Text inside these must never be wrapped. KaTeX output is the dangerous one:
// inserting a <mark> inside rendered maths corrupts the layout, and the reader
// cannot undo it. Exercises own their own DOM and re-render on interaction,
// which would silently drop any wrapper we added.
const EXCLUDED = [
  '.katex', '.katex-display', 'script', 'style', 'code', 'pre',
  'x-figure', 'x-mcq', 'x-predict', 'x-free-response', 'x-order', 'x-matrix',
  '.x-figure-note', '.x-figure-credit', '.x-cite-popover', '.x-references',
].join(',');

function isExcluded(node) {
  const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return !el || el.closest(EXCLUDED) !== null;
}

/**
 * Flatten the highlightable text of a root into one string, keeping a map back
 * to the text nodes it came from. Every offset used elsewhere in this module is
 * an index into `text`.
 */
export function buildTextIndex(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.data) return NodeFilter.FILTER_REJECT;
      return isExcluded(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });
  let text = '';
  const positions = [];
  let node;
  while ((node = walker.nextNode())) {
    positions.push({ node, start: text.length, end: text.length + node.data.length });
    text += node.data;
  }
  return { text, positions };
}

/** Character offset of a (node, offset) DOM point within the flattened text. */
export function charOffsetOf(index, node, offset) {
  const entry = index.positions.find((p) => p.node === node);
  if (!entry) return null;
  return entry.start + offset;
}

/** Normalise whitespace for matching; rendered HTML collapses it unpredictably. */
const norm = (s) => s.replace(/\s+/g, ' ').trim();

/**
 * Capture a selector for a DOM Range.
 * Returns null if the selection is empty or lands entirely in excluded content.
 */
export function describeRange(index, range) {
  const start = charOffsetOf(index, range.startContainer, range.startOffset);
  const end = charOffsetOf(index, range.endContainer, range.endOffset);
  if (start === null || end === null || end <= start) return null;
  const quote = index.text.slice(start, end);
  if (!norm(quote)) return null;
  return {
    quote,
    prefix: index.text.slice(Math.max(0, start - CONTEXT), start),
    suffix: index.text.slice(end, Math.min(index.text.length, end + CONTEXT)),
  };
}

/**
 * Find a stored selector in the current text.
 *
 * Tried in descending order of confidence. A quote that occurs exactly once
 * needs no context at all; context only matters for disambiguating repeats, so
 * requiring it would orphan highlights unnecessarily after nearby edits.
 *
 * Returns {start, end, exact} or null if the quote is gone entirely.
 */
export function locate(index, selector) {
  const { text } = index;
  const { quote, prefix = '', suffix = '' } = selector;
  if (!quote) return null;

  const tryFind = (needle, quoteOffsetInNeedle) => {
    if (!needle) return null;
    const at = text.indexOf(needle);
    if (at === -1) return null;
    // Ambiguous matches are not usable as evidence of the right one.
    if (text.indexOf(needle, at + 1) !== -1) return null;
    const start = at + quoteOffsetInNeedle;
    return { start, end: start + quote.length };
  };

  // 1. Full context — the strongest signal.
  let hit = tryFind(prefix + quote + suffix, prefix.length);
  if (hit) return { ...hit, exact: true };

  // 2. One side of context. Handles an edit on the other side.
  hit = tryFind(quote + suffix, 0);
  if (hit) return { ...hit, exact: true };
  hit = tryFind(prefix + quote, prefix.length);
  if (hit) return { ...hit, exact: true };

  // 3. The quote alone, if unambiguous.
  hit = tryFind(quote, 0);
  if (hit) return { ...hit, exact: true };

  // 4. The quote occurs several times and context did not disambiguate. Take
  //    the occurrence nearest where the context suggests, and mark it inexact
  //    so the UI can say so.
  const first = text.indexOf(quote);
  if (first !== -1) {
    let best = first;
    if (prefix) {
      const tail = prefix.slice(-12);
      const near = text.indexOf(tail);
      if (near !== -1) {
        let cand = text.indexOf(quote, near);
        if (cand !== -1) best = cand;
      }
    }
    return { start: best, end: best + quote.length, exact: false };
  }

  return null; // orphaned
}
