// Export and import of progress as a JSON file.
//
// With no accounts and no backend, this file IS the cross-device story, the
// "I cleared my browser data" recovery story, and the way a learner can send
// their results to someone else. Worth doing properly.
//
// Import never silently overwrites: it reports what it found and what would
// change, and the caller confirms before anything is committed.

import { getState, replaceAll, update } from './store.js';
import { EXPORT_FORMAT, EXPORT_FORMAT_VERSION, normalise } from './schema.js';
import { CURRENT_SCHEMA_VERSION } from './schema.js';
import { migrate } from './migrations.js';
import { url } from '../base.js';

let siteVersion = null;

export async function loadSiteVersion() {
  try {
    const response = await fetch(url('version.json'));
    if (response.ok) siteVersion = await response.json();
  } catch { /* version info is nice-to-have, never required */ }
  return siteVersion;
}

export function buildExport() {
  return {
    format: EXPORT_FORMAT,
    formatVersion: EXPORT_FORMAT_VERSION,
    exportedAt: new Date().toISOString(),
    site: siteVersion,
    data: getState(),
  };
}

export function downloadExport() {
  const payload = buildExport();
  const label = (payload.data.learnerLabel || 'anon')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'anon';
  const date = new Date().toISOString().slice(0, 10);

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json',
  });
  const href = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.download = `csp-progress-${label}-${date}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  setTimeout(() => URL.revokeObjectURL(href), 1000);
  return anchor.download;
}

/** Parse and validate an uploaded file, without applying it. */
export function parseImport(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error('That file is not valid JSON.');
  }

  if (payload.format !== EXPORT_FORMAT) {
    throw new Error('That file is not a course progress export.');
  }

  let data = payload.data;
  if (!data || typeof data !== 'object') {
    throw new Error('That export contains no progress data.');
  }

  const version = Number(data.schemaVersion) || 1;
  if (version > CURRENT_SCHEMA_VERSION) {
    throw new Error(
      'That export came from a newer version of the course and cannot be imported here.'
    );
  }
  if (version < CURRENT_SCHEMA_VERSION) {
    data = migrate(data, version, CURRENT_SCHEMA_VERSION);
  }

  return normalise(data);
}

/** Human-readable diff so the reader knows what they are about to do. */
export function summariseImport(incoming) {
  const current = getState();

  const countComplete = (state) =>
    Object.values(state.subsections).filter((entry) => entry.status === 'complete').length;

  return {
    incoming: {
      complete: countComplete(incoming),
      exercises: Object.keys(incoming.exercises).length,
      label: incoming.learnerLabel || '(unnamed)',
      updatedAt: incoming.updatedAt,
    },
    current: {
      complete: countComplete(current),
      exercises: Object.keys(current.exercises).length,
      label: current.learnerLabel || '(unnamed)',
      updatedAt: current.updatedAt,
    },
  };
}

export function applyReplace(incoming) {
  return replaceAll(incoming);
}

/**
 * Merge: union of subsections and exercises, last-write-wins per record.
 * Completion is sticky — if either side finished a subsection, it stays
 * finished. Un-completing someone's work during a merge would be surprising
 * and is never what the reader wants.
 */
export function applyMerge(incoming) {
  return update((draft) => {
    for (const [id, entry] of Object.entries(incoming.subsections)) {
      const existing = draft.subsections[id];
      if (!existing) {
        draft.subsections[id] = entry;
        continue;
      }
      draft.subsections[id] = {
        ...existing,
        status:
          existing.status === 'complete' || entry.status === 'complete'
            ? 'complete'
            : existing.status,
        completedAt: existing.completedAt ?? entry.completedAt,
        firstOpenedAt: existing.firstOpenedAt ?? entry.firstOpenedAt,
        secondsOnPage: Math.max(existing.secondsOnPage ?? 0, entry.secondsOnPage ?? 0),
        maxScrollRatio: Math.max(existing.maxScrollRatio ?? 0, entry.maxScrollRatio ?? 0),
      };
    }

    for (const [id, record] of Object.entries(incoming.exercises)) {
      const existing = draft.exercises[id];
      if (!existing) {
        draft.exercises[id] = record;
        continue;
      }
      const existingTime = Date.parse(existing.updatedAt ?? 0) || 0;
      const incomingTime = Date.parse(record.updatedAt ?? 0) || 0;
      if (incomingTime > existingTime) draft.exercises[id] = record;
    }

    if (!draft.learnerLabel && incoming.learnerLabel) {
      draft.learnerLabel = incoming.learnerLabel;
    }
  });
}
