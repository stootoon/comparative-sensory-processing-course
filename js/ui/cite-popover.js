// Citation popover.
//
// Clicking an inline (Author Year) opens the full reference with a DOI link.
// On a narrow screen it becomes a bottom sheet instead of a floating card,
// because a popover positioned near the tap target on a phone either covers
// the text you were reading or falls off the edge.

import { getEntry, formatEntry } from '../citations.js';

let popover = null;
let backdrop = null;

function ensureElements() {
  if (popover) return;

  backdrop = document.createElement('div');
  backdrop.className = 'x-cite-backdrop';
  backdrop.hidden = true;
  backdrop.addEventListener('click', close);

  popover = document.createElement('div');
  popover.className = 'x-cite-popover';
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', 'Reference details');
  popover.hidden = true;

  document.body.append(backdrop, popover);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function open(key, anchorEl) {
  ensureElements();
  const entry = getEntry(key);
  if (!entry) return;

  popover.innerHTML = `
    <button type="button" class="x-cite-close" aria-label="Close">×</button>
    <div class="x-cite-body">${formatEntry(entry)}</div>
    ${entry.note ? `<div class="x-cite-note">${escapeHtml(entry.note)}</div>` : ''}
    <div class="x-cite-key">${escapeHtml(key)}</div>`;

  popover.querySelector('.x-cite-close').addEventListener('click', close);

  popover.hidden = false;
  backdrop.hidden = false;

  position(anchorEl);
  popover.querySelector('.x-cite-close').focus();
  lastFocus = anchorEl;
}

let lastFocus = null;

function position(anchorEl) {
  // Below 720px the stylesheet pins this as a bottom sheet, so skip
  // measurement entirely — any inline positioning would fight the CSS.
  if (window.matchMedia('(max-width: 720px)').matches) {
    popover.style.removeProperty('top');
    popover.style.removeProperty('left');
    return;
  }

  const rect = anchorEl.getBoundingClientRect();
  const width = Math.min(430, window.innerWidth - 32);
  popover.style.width = `${width}px`;

  let left = rect.left + rect.width / 2 - width / 2;
  left = Math.max(16, Math.min(left, window.innerWidth - width - 16));

  const height = popover.offsetHeight || 160;
  const spaceBelow = window.innerHeight - rect.bottom;
  const top = spaceBelow > height + 20 ? rect.bottom + 8 : rect.top - height - 8;

  popover.style.left = `${left}px`;
  popover.style.top = `${Math.max(12, top)}px`;
}

export function close() {
  if (!popover) return;
  popover.hidden = true;
  backdrop.hidden = true;
  lastFocus?.focus();
  lastFocus = null;
}

/** One delegated listener for the whole document — citations are re-rendered
 *  on every navigation, so per-element listeners would leak. */
export function initCitePopover() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.x-cite[data-cite-key]');
    if (!button) return;
    event.preventDefault();
    open(button.dataset.citeKey, button);
  });
}
