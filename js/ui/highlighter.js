// Selection toolbar and highlight interaction.
//
// Two entry points for the reader: select text and a toolbar offers to
// highlight it, or click an existing highlight and the same toolbar offers to
// recolour, annotate or remove it.

import * as highlights from '../highlights/store.js';
import { buildTextIndex, describeRange } from '../highlights/anchor.js';
import { applyHighlights, selectionIn } from '../highlights/render.js';

const COLOURS = ['yellow', 'green', 'blue', 'pink'];

let bar = null;
let root = null;
let subsectionId = null;
let openFor = null;      // id of the highlight the toolbar is editing, if any

function ensureBar() {
  if (bar) return bar;
  bar = document.createElement('div');
  bar.className = 'x-hl-bar';
  bar.hidden = true;
  bar.setAttribute('role', 'toolbar');
  bar.setAttribute('aria-label', 'Highlight');
  document.body.appendChild(bar);
  // Keep the toolbar from stealing the selection out from under itself.
  bar.addEventListener('mousedown', (e) => e.preventDefault());
  return bar;
}

function hideBar() {
  if (bar) { bar.hidden = true; bar.innerHTML = ''; }
  openFor = null;
}

function placeBar(rect) {
  const b = ensureBar();
  b.hidden = false;
  const top = window.scrollY + rect.top - b.offsetHeight - 8;
  const left = window.scrollX + rect.left + rect.width / 2 - b.offsetWidth / 2;
  b.style.top = `${Math.max(window.scrollY + 4, top)}px`;
  b.style.left = `${Math.max(4, Math.min(left, window.innerWidth - b.offsetWidth - 4))}px`;
}

function colourButtons(onPick, current) {
  return COLOURS.map((c) => `
    <button type="button" class="x-hl-swatch x-hl-${c}${c === current ? ' is-current' : ''}"
            data-colour="${c}" aria-label="${c}"></button>`).join('');
}

// --- Creating from a selection -------------------------------------------

function onSelection() {
  if (openFor) return;
  const range = selectionIn(root);
  if (!range) { hideBar(); return; }

  const index = buildTextIndex(root);
  const selector = describeRange(index, range);
  if (!selector) { hideBar(); return; }   // maths, an exercise, or empty

  const b = ensureBar();
  b.innerHTML = `
    <span class="x-hl-label">Highlight</span>
    ${colourButtons()}
  `;
  b.hidden = false;
  placeBar(range.getBoundingClientRect());

  b.querySelectorAll('.x-hl-swatch').forEach((btn) => {
    btn.addEventListener('click', () => {
      highlights.add({ subsectionId, ...selector, colour: btn.dataset.colour });
      window.getSelection()?.removeAllRanges();
      hideBar();
      repaint();
    }, { once: true });
  });
}

// --- Editing an existing highlight ---------------------------------------

function onClick(e) {
  const mark = e.target.closest?.('mark.x-hl');
  if (!mark) { if (!bar?.contains(e.target)) hideBar(); return; }

  const id = mark.dataset.highlightId;
  const h = highlights.get(id);
  if (!h) return;
  openFor = id;

  const b = ensureBar();
  b.innerHTML = `
    ${colourButtons(null, h.colour)}
    <button type="button" class="x-hl-action" data-act="note">${h.note ? 'Edit note' : 'Add note'}</button>
    <button type="button" class="x-hl-action x-hl-danger" data-act="remove">Remove</button>
  `;
  b.hidden = false;
  placeBar(mark.getBoundingClientRect());

  b.querySelectorAll('.x-hl-swatch').forEach((btn) => {
    btn.addEventListener('click', () => {
      highlights.setColour(id, btn.dataset.colour);
      hideBar(); repaint();
    });
  });
  b.querySelector('[data-act="remove"]').addEventListener('click', () => {
    highlights.remove(id); hideBar(); repaint();
  });
  b.querySelector('[data-act="note"]').addEventListener('click', () => {
    const next = window.prompt('Note on this highlight:', h.note || '');
    if (next !== null) highlights.setNote(id, next.trim());
    hideBar(); repaint();
  });
}

function repaint() {
  if (!root) return;
  applyHighlights(root, highlights.forSubsection(subsectionId));
}

/**
 * Mount on a section's prose. Safe to call on every navigation — listeners are
 * bound to the document once and read the current root.
 */
export function mountHighlighter(proseEl, id) {
  root = proseEl;
  subsectionId = id;
  hideBar();
  repaint();
}

export function unmountHighlighter() {
  hideBar();
  root = null;
  subsectionId = null;
}

let bound = false;
export function initHighlighter() {
  if (bound) return;
  bound = true;
  document.addEventListener('selectionchange', () => {
    // Debounce to the end of the gesture; selectionchange fires continuously
    // while dragging and the toolbar would flicker.
    clearTimeout(initHighlighter._t);
    initHighlighter._t = setTimeout(() => { if (root) onSelection(); }, 180);
  });
  document.addEventListener('click', (e) => { if (root) onClick(e); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideBar(); });
}
