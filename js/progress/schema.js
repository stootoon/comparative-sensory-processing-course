// Shape of the stored progress object, and the rules that keep it stable
// while the course itself keeps changing underneath it.
//
// Four invariants, each of which exists because violating it destroys a
// learner's work:
//
//   1. CONTENT-ADDRESSED, NEVER INDEX-ADDRESSED. Progress keys on stable
//      string ids ("m01.s02.q1"). Reordering or inserting modules must not
//      shift anyone's saved state.
//   2. NEVER DELETE UNKNOWN KEYS. If a subsection is removed, its entry stays
//      as an orphan and is simply not displayed. Restore the subsection and
//      the progress reappears. Garbage collection here is an anti-feature —
//      storage is bytes, lost work is unrecoverable.
//   3. PERCENT COMPLETE IS DERIVED, NEVER STORED. Computed at read time
//      against the current manifest, so adding a module updates everyone's
//      percentage correctly with zero migration.
//   4. TWO INDEPENDENT VERSION AXES. schemaVersion is code-driven (shape
//      changes); contentRev is author-driven and per-exercise. Editing prose
//      has no version at all — rewrite paragraphs freely.

export const STORAGE_KEY = 'csp:progress';
export const PREFS_KEY = 'csp:prefs';
export const BACKUP_PREFIX = 'csp:progress.backup.v';

// Bump ONLY when the stored object's shape changes, and add a migration.
export const CURRENT_SCHEMA_VERSION = 1;

export const EXPORT_FORMAT = 'csp-progress';
export const EXPORT_FORMAT_VERSION = 1;

export const STATUS = {
  UNSEEN: 'unseen',
  IN_PROGRESS: 'in-progress',
  COMPLETE: 'complete',
};

export function emptyProgress() {
  const now = new Date().toISOString();
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    createdAt: now,
    updatedAt: now,
    learnerLabel: '',
    lastLocation: null,
    subsections: {},
    exercises: {},
  };
}

export function emptySubsection() {
  return {
    status: STATUS.UNSEEN,
    firstOpenedAt: null,
    completedAt: null,
    secondsOnPage: 0,
    maxScrollRatio: 0,
  };
}

/**
 * Defensive normalisation on load. A hand-edited or partially-written blob
 * should degrade to "some progress missing", never to a thrown exception
 * that leaves the reader staring at a blank page.
 */
export function normalise(raw) {
  const base = emptyProgress();
  if (!raw || typeof raw !== 'object') return base;

  return {
    ...base,
    ...raw,
    schemaVersion: Number(raw.schemaVersion) || CURRENT_SCHEMA_VERSION,
    learnerLabel: typeof raw.learnerLabel === 'string' ? raw.learnerLabel : '',
    lastLocation:
      raw.lastLocation && typeof raw.lastLocation === 'object' ? raw.lastLocation : null,
    subsections:
      raw.subsections && typeof raw.subsections === 'object' ? raw.subsections : {},
    exercises: raw.exercises && typeof raw.exercises === 'object' ? raw.exercises : {},
  };
}
