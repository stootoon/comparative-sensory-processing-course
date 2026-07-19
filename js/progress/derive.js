// Derived progress figures.
//
// Nothing here is stored. Percent complete is computed against the CURRENT
// manifest every time it is asked for, which is what lets new modules appear
// without migrating anyone's saved data — the denominator simply grows.

import { getState, getExercise } from './store.js';
import { getModules, getFlatIndex, findById } from '../manifest.js';
import { STATUS } from './schema.js';

export function subsectionStatus(id) {
  return getState().subsections[id]?.status ?? STATUS.UNSEEN;
}

export const isComplete = (id) => subsectionStatus(id) === STATUS.COMPLETE;

/** Progress for one module: completed / total, plus a 0..1 fraction. */
export function moduleProgress(moduleId) {
  const module = getModules().find((entry) => entry.id === moduleId);
  if (!module) return { completed: 0, total: 0, fraction: 0 };

  const total = module.subsections.length;
  const completed = module.subsections.filter((sub) => isComplete(sub.id)).length;

  return { completed, total, fraction: total === 0 ? 0 : completed / total };
}

/** Whole-course progress. */
export function overallProgress() {
  const all = getFlatIndex();
  const total = all.length;
  const completed = all.filter((entry) => isComplete(entry.id)).length;

  return { completed, total, fraction: total === 0 ? 0 : completed / total };
}

/**
 * Exercise scoring across the course.
 * Stale answers (contentRev mismatch) are excluded from totals — the question
 * changed underneath the learner, so their old score is no longer meaningful,
 * but we still keep the answer itself.
 */
export function exerciseScore() {
  const { exercises } = getState();
  let earned = 0;
  let possible = 0;
  let answered = 0;
  let stale = 0;

  for (const record of Object.values(exercises)) {
    if (record.stale) {
      stale += 1;
      continue;
    }
    if (typeof record.score === 'number') earned += record.score;
    if (typeof record.maxScore === 'number') possible += record.maxScore;
    if (record.state && record.state !== 'unanswered') answered += 1;
  }

  return { earned, possible, answered, stale };
}

/** Exercises belonging to one subsection, by id prefix convention (m01.s02.*). */
export function subsectionExercises(subsectionId) {
  const { exercises } = getState();
  return Object.entries(exercises)
    .filter(([id]) => id.startsWith(`${subsectionId}.`))
    .map(([id, record]) => ({ id, ...record }));
}

/** Where to send someone clicking "continue" — their last spot, or the start. */
export function resumeTarget() {
  const { lastLocation } = getState();
  if (lastLocation?.subsectionId) {
    const entry = findById(lastLocation.subsectionId);
    if (entry) return { entry, anchor: lastLocation.anchor ?? null };
  }

  const firstUnfinished = getFlatIndex().find((entry) => !isComplete(entry.id));
  const target = firstUnfinished ?? getFlatIndex()[0] ?? null;
  return target ? { entry: target, anchor: null } : null;
}
