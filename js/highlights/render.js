// Painting highlights onto rendered prose.
//
// The fiddly part of the whole feature. A selection that crosses a <strong> or
// a paragraph boundary is a Range spanning several text nodes, so a highlight
// is not one <mark> but one per text node it touches. They share a
// data-highlight-id so the UI can treat them as a unit.

import { buildTextIndex, locate } from './anchor.js';

const MARK = 'x-hl';

/** Remove all highlight marks, restoring the original text nodes. */
export function clearMarks(root) {
  const marks = root.querySelectorAll(`mark.${MARK}`);
  for (const mark of marks) {
    const parent = mark.parentNode;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
  }
  // Merge the text nodes we just split, so a later index is not fragmented and
  // repeated apply/clear cycles cannot degrade the DOM.
  root.normalize();
}

/**
 * Wrap [start,end) of the flattened text in <mark>s.
 *
 * Each text node is touched at most once, so splitting one cannot invalidate
 * the offsets recorded for any other — which is why this can walk forwards.
 */
function wrapRange(index, start, end, attrs) {
  const made = [];
  for (const pos of index.positions) {
    if (pos.end <= start || pos.start >= end) continue;

    const from = Math.max(start, pos.start) - pos.start;
    const to = Math.min(end, pos.end) - pos.start;
    if (to <= from) continue;

    let node = pos.node;
    // splitText returns the remainder; take the middle piece.
    if (from > 0) node = node.splitText(from);
    if (to - from < node.data.length) node.splitText(to - from);

    const mark = document.createElement('mark');
    mark.className = `${MARK} ${MARK}-${attrs.colour || 'yellow'}`;
    mark.dataset.highlightId = attrs.id;
    if (attrs.note) mark.dataset.hasNote = 'true';
    if (attrs.inexact) mark.dataset.inexact = 'true';
    node.parentNode.replaceChild(mark, node);
    mark.appendChild(node);
    made.push(mark);
  }
  return made;
}

/**
 * Apply every highlight belonging to this section.
 *
 * Returns a report so the caller can tell the reader what happened rather than
 * failing silently: highlights whose text no longer exists are orphaned, and
 * that is worth surfacing in the Notes view.
 */
export function applyHighlights(root, highlights) {
  clearMarks(root);
  const applied = [];
  const orphaned = [];
  const inexact = [];

  // Longest first. A short highlight nested inside a long one would otherwise
  // split the node the long one still expects to be whole.
  const ordered = [...highlights].sort((a, b) => (b.quote?.length ?? 0) - (a.quote?.length ?? 0));

  for (const h of ordered) {
    // Rebuild the index each time: the previous wrap changed the node layout.
    const index = buildTextIndex(root);
    const hit = locate(index, h);
    if (!hit) { orphaned.push(h); continue; }

    // Never paint over an existing highlight — overlapping <mark>s nest badly
    // and the visual result is unreadable. First one wins; the rest are still
    // listed in Notes.
    const clash = root.querySelectorAll(`mark.${MARK}`).length > 0 && overlapsExisting(index, hit);
    if (clash) { applied.push(h); continue; }

    const made = wrapRange(index, hit.start, hit.end, {
      id: h.id, colour: h.colour, note: h.note, inexact: !hit.exact,
    });
    if (made.length) {
      applied.push(h);
      if (!hit.exact) inexact.push(h);
    } else {
      orphaned.push(h);
    }
  }
  return { applied, orphaned, inexact };
}

function overlapsExisting(index, hit) {
  for (const pos of index.positions) {
    if (pos.end <= hit.start || pos.start >= hit.end) continue;
    if (pos.node.parentElement?.closest(`mark.${MARK}`)) return true;
  }
  return false;
}

/**
 * Describe the current selection, or null if it is unusable —
 * collapsed, or landing in maths, an exercise, or a figure caption.
 */
export function selectionIn(root) {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  if (!root.contains(range.commonAncestorContainer)) return null;
  return range;
}
