// Highlight persistence.
//
// A separate localStorage key from progress, for the same reason prefs are
// separate: a bug in highlight anchoring must not be able to corrupt someone's
// answers. The two stores never touch each other.
//
// Storage can fail for reasons unrelated to us (Safari private mode throws on
// every setItem). As with progress, we fall back to in-memory and keep working.

const STORAGE_KEY = 'csp:highlights';
const CURRENT_VERSION = 1;
const WRITE_DEBOUNCE_MS = 400;

let state = empty();
let storageAvailable = true;
let writeTimer = null;
let dirty = false;

const listeners = new Set();

export const onChange = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const notify = () => listeners.forEach((fn) => fn(state));

function empty() {
  return { version: CURRENT_VERSION, highlights: {} };
}

// Ids are random rather than content-derived: the same sentence can carry two
// highlights, and a content-derived id would collide.
function newId() {
  return 'h' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function load() {
  let raw = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    storageAvailable = false;
    state = empty();
    return;
  }
  if (!raw) {
    state = empty();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    state = {
      version: parsed.version ?? CURRENT_VERSION,
      highlights: parsed.highlights && typeof parsed.highlights === 'object' ? parsed.highlights : {},
    };
  } catch {
    // Corrupt payload. Keep the raw string in a backup slot rather than
    // silently discarding what might be recoverable by hand.
    try { localStorage.setItem(STORAGE_KEY + ':corrupt', raw); } catch { /* ignore */ }
    state = empty();
  }
}

function scheduleWrite() {
  dirty = true;
  if (!storageAvailable) return;
  clearTimeout(writeTimer);
  writeTimer = setTimeout(flush, WRITE_DEBOUNCE_MS);
}

export function flush() {
  if (!dirty || !storageAvailable) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    dirty = false;
  } catch {
    storageAvailable = false;
  }
}

// --- Reads ----------------------------------------------------------------

export const all = () => Object.values(state.highlights);

export const forSubsection = (subsectionId) =>
  all().filter((h) => h.subsectionId === subsectionId);

export const get = (id) => state.highlights[id] ?? null;

export const count = () => all().length;

// Reports are highlights the reader flagged as a problem rather than kept for
// themselves. Same anchoring, same persistence, same export — only the intent
// and the styling differ.
export const reports = () => all().filter((h) => h.kind === 'report');
export const notes = () => all().filter((h) => h.kind !== 'report');

export function getState() {
  return JSON.parse(JSON.stringify(state));
}

// --- Writes ---------------------------------------------------------------

export function add({ subsectionId, quote, prefix, suffix, colour = 'yellow', note = '', kind = 'note' }) {
  const id = newId();
  state.highlights[id] = {
    id,
    subsectionId,
    quote,
    prefix,
    suffix,
    colour,
    note,
    kind,                       // 'note' | 'report'
    createdAt: new Date().toISOString(),
  };
  scheduleWrite();
  notify();
  return state.highlights[id];
}

export function remove(id) {
  if (!state.highlights[id]) return;
  delete state.highlights[id];
  scheduleWrite();
  notify();
}

export function setNote(id, note) {
  const h = state.highlights[id];
  if (!h) return;
  h.note = note;
  scheduleWrite();
  notify();
}

export function setColour(id, colour) {
  const h = state.highlights[id];
  if (!h) return;
  h.colour = colour;
  scheduleWrite();
  notify();
}

// --- Transfer -------------------------------------------------------------
//
// Highlights ride along in the progress export envelope. Without this the
// cross-device story silently loses them, which is worse than not having the
// feature: the reader would believe they were backed up.

export function replaceAll(incoming) {
  if (!incoming || typeof incoming !== 'object') return;
  state = {
    version: incoming.version ?? CURRENT_VERSION,
    highlights: incoming.highlights && typeof incoming.highlights === 'object'
      ? incoming.highlights : {},
  };
  scheduleWrite();
  notify();
}

export function mergeAll(incoming) {
  if (!incoming?.highlights) return;
  // Union by id. Ids are random, so a collision means the same highlight
  // arriving twice and either copy will do.
  for (const [id, h] of Object.entries(incoming.highlights)) {
    if (!state.highlights[id]) state.highlights[id] = h;
  }
  scheduleWrite();
  notify();
}

export function clear() {
  state = empty();
  scheduleWrite();
  notify();
}

// Flush on the way out, so a highlight made seconds before closing survives.
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', flush);
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) { load(); notify(); }
  });
}
