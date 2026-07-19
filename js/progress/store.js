// Progress persistence.
//
// One localStorage key holds everything; prefs live in a separate key so a
// bug in theme handling can never corrupt someone's course progress.
//
// Storage can fail for reasons that have nothing to do with us — Safari's
// private mode throws QuotaExceededError on every setItem, and some embedded
// contexts deny localStorage entirely. None of that is allowed to break the
// page: we fall back to an in-memory store and tell the reader once.

import {
  STORAGE_KEY,
  PREFS_KEY,
  BACKUP_PREFIX,
  CURRENT_SCHEMA_VERSION,
  STATUS,
  emptyProgress,
  emptySubsection,
  normalise,
} from './schema.js';
import { migrate } from './migrations.js';

const WRITE_DEBOUNCE_MS = 400;

let state = emptyProgress();
let storageAvailable = true;
let readOnly = false;          // set when stored data is from a NEWER schema
let writeTimer = null;
let dirty = false;             // true only when there are unsaved mutations
let hasPersisted = false;      // have we ever successfully written this session?

const changeListeners = new Set();
const noticeListeners = new Set();

export const onChange = (fn) => {
  changeListeners.add(fn);
  return () => changeListeners.delete(fn);
};

export const onNotice = (fn) => {
  noticeListeners.add(fn);
  return () => noticeListeners.delete(fn);
};

const notify = () => changeListeners.forEach((fn) => fn(state));

function notice(message, kind = 'warn') {
  noticeListeners.forEach((fn) => fn({ message, kind }));
}

// --- Load -----------------------------------------------------------------

export function load() {
  let raw = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    storageAvailable = false;
    notice(
      'This browser is blocking local storage, so your progress will not be saved between visits. Everything else works normally.',
      'warn'
    );
    state = emptyProgress();
    return state;
  }

  if (!raw) {
    state = emptyProgress();
    return state;
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Corrupt blob. Keep the original bytes so nothing is unrecoverable.
    try {
      localStorage.setItem(`${BACKUP_PREFIX}corrupt`, raw);
    } catch { /* nothing more we can do */ }
    notice('Saved progress could not be read and has been reset. A backup copy was kept.', 'error');
    state = emptyProgress();
    return state;
  }

  const storedVersion = Number(parsed.schemaVersion) || 1;

  if (storedVersion > CURRENT_SCHEMA_VERSION) {
    // Newer deploy wrote this. Downgrading would silently drop whatever the
    // newer schema added, so we show it read-only instead.
    readOnly = true;
    notice(
      'Your saved progress was created by a newer version of this course. It is being shown read-only so nothing is lost — reload once the site updates.',
      'warn'
    );
    state = normalise(parsed);
    return state;
  }

  if (storedVersion < CURRENT_SCHEMA_VERSION) {
    try {
      localStorage.setItem(`${BACKUP_PREFIX}${storedVersion}`, raw);
    } catch { /* backup is best-effort */ }
    try {
      parsed = migrate(parsed, storedVersion, CURRENT_SCHEMA_VERSION);
    } catch (error) {
      notice(`Could not upgrade saved progress: ${error.message}`, 'error');
      state = normalise(parsed);
      return state;
    }
  }

  state = normalise(parsed);
  hasPersisted = true;
  return state;
}

// --- Write ----------------------------------------------------------------

function flush() {
  writeTimer = null;
  if (!storageAvailable || readOnly || !dirty) return;
  try {
    // If we have written before and the key is now gone, the reader cleared
    // their site data while this tab was open. Writing the in-memory copy back
    // would resurrect exactly the data they just deleted — and because idle
    // scroll telemetry keeps marking the state dirty, it would come back even
    // if they never touched an exercise again. Honour the clear instead.
    if (hasPersisted && localStorage.getItem(STORAGE_KEY) === null) {
      state = emptyProgress();
      hasPersisted = false;
      dirty = false;
      notify();
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    hasPersisted = true;
    dirty = false;
  } catch {
    storageAvailable = false;
    notice(
      'Ran out of space for saving progress. Your work in this session is intact but will not persist.',
      'error'
    );
  }
}

function scheduleWrite() {
  dirty = true;
  if (writeTimer !== null) clearTimeout(writeTimer);
  writeTimer = setTimeout(flush, WRITE_DEBOUNCE_MS);
}

/** All mutation goes through here: read-modify-write on the whole object. */
export function update(mutator) {
  mutator(state);
  state.updatedAt = new Date().toISOString();
  scheduleWrite();
  notify();
  return state;
}

/**
 * Force an immediate write of any pending mutation.
 *
 * The `dirty` guard in flush() matters here and is not just an optimisation.
 * Without it, a reader who clears their site data while the tab is open would
 * have the in-memory copy written straight back on unload, resurrecting the
 * progress they just deleted. Clearing your data should mean it stays cleared,
 * so with nothing pending we write nothing.
 */
export function flushNow() {
  if (writeTimer !== null) clearTimeout(writeTimer);
  flush();
}

// --- Accessors ------------------------------------------------------------

export const getState = () => state;
export const isReadOnly = () => readOnly;
export const isStorageAvailable = () => storageAvailable;

export function getSubsection(id) {
  return state.subsections[id] ?? null;
}

export function ensureSubsection(id) {
  if (!state.subsections[id]) {
    update((draft) => {
      draft.subsections[id] = emptySubsection();
    });
  }
  return state.subsections[id];
}

export function markOpened(id) {
  update((draft) => {
    const entry = draft.subsections[id] ?? emptySubsection();
    if (!entry.firstOpenedAt) entry.firstOpenedAt = new Date().toISOString();
    if (entry.status === STATUS.UNSEEN) entry.status = STATUS.IN_PROGRESS;
    draft.subsections[id] = entry;
  });
}

export function setComplete(id, complete = true) {
  update((draft) => {
    const entry = draft.subsections[id] ?? emptySubsection();
    entry.status = complete ? STATUS.COMPLETE : STATUS.IN_PROGRESS;
    entry.completedAt = complete ? new Date().toISOString() : null;
    draft.subsections[id] = entry;
  });
}

export function recordReading(id, { seconds = 0, scrollRatio = 0 } = {}) {
  update((draft) => {
    const entry = draft.subsections[id] ?? emptySubsection();
    entry.secondsOnPage += seconds;
    entry.maxScrollRatio = Math.max(entry.maxScrollRatio, scrollRatio);
    draft.subsections[id] = entry;
  });
}

export function setLastLocation(location) {
  update((draft) => {
    draft.lastLocation = { ...location, at: new Date().toISOString() };
  });
}

export function setLearnerLabel(label) {
  update((draft) => {
    draft.learnerLabel = String(label ?? '').slice(0, 120);
  });
}

// --- Exercises ------------------------------------------------------------
// The store deliberately knows nothing about what an exercise IS. It holds an
// opaque `response` blob plus normalised score/maxScore/state. That is the
// whole decoupling: adding a sixth exercise type later needs zero changes
// here, in the sidebar, or in the migration chain.

export const getExercise = (id) => state.exercises[id] ?? null;

export function setExercise(id, record) {
  update((draft) => {
    const previous = draft.exercises[id];
    draft.exercises[id] = {
      ...previous,
      ...record,
      attempts: (previous?.attempts ?? 0) + (record.countsAsAttempt ? 1 : 0),
      updatedAt: new Date().toISOString(),
    };
    delete draft.exercises[id].countsAsAttempt;
  });
  return state.exercises[id];
}

export function clearExercise(id) {
  update((draft) => {
    delete draft.exercises[id];
  });
}

/** Wholesale replacement, used by import. */
export function replaceAll(next) {
  state = normalise(next);
  readOnly = false;
  hasPersisted = false;   // deliberate import, not an external clear
  dirty = true;
  flushNow();
  notify();
  return state;
}

export function resetAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) localStorage.setItem(`${BACKUP_PREFIX}reset`, raw);
  } catch { /* best-effort */ }
  state = emptyProgress();
  hasPersisted = false;   // deliberate wipe, not an external clear
  dirty = true;
  flushNow();
  notify();
  return state;
}

// --- Prefs ----------------------------------------------------------------

export function loadPrefs() {
  try {
    return JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
  } catch {
    return {};
  }
}

export function savePrefs(prefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch { /* prefs are not worth surfacing an error for */ }
}

// --- Cross-tab ------------------------------------------------------------

export function watchOtherTabs() {
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    try {
      state = normalise(JSON.parse(event.newValue));
      dirty = false;
      notify();
    } catch { /* ignore an unparseable write from another tab */ }
  });
}

window.addEventListener('beforeunload', flushNow);
