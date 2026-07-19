// The course spine.
//
// manifest.json is the single definition of course structure: ordering,
// stable ids, titles, file paths. The sidebar, prev/next navigation, and
// percent-complete all read from here and nowhere else.
//
// It is hand-editable on purpose. Adding a subsection means adding one object.

import { url, DEV } from './base.js';

let manifest = null;
let flatIndex = [];

export async function loadManifest() {
  const response = await fetch(url('content/manifest.json'));
  if (!response.ok) {
    throw new Error(`manifest.json failed to load (HTTP ${response.status})`);
  }
  manifest = await response.json();

  // Flatten to a linear reading order once; prev/next and progress both
  // need it and neither should re-walk the tree.
  flatIndex = [];
  for (const module of manifest.modules) {
    for (const subsection of module.subsections) {
      flatIndex.push({
        ...subsection,
        moduleId: module.id,
        moduleSlug: module.slug,
        moduleTitle: module.title,
        path: `${module.dir}/${subsection.file}`,
      });
    }
  }

  if (DEV) validateManifest();
  return manifest;
}

function validateManifest() {
  const problems = [];
  const ids = new Set();
  const routes = new Set();

  for (const module of manifest.modules) {
    if (!module.id || !module.slug || !module.dir) {
      problems.push(`Module missing id/slug/dir: ${JSON.stringify(module.title)}`);
    }
    for (const subsection of module.subsections) {
      if (ids.has(subsection.id)) problems.push(`Duplicate subsection id: ${subsection.id}`);
      ids.add(subsection.id);

      const route = `${module.slug}/${subsection.slug}`;
      if (routes.has(route)) problems.push(`Duplicate route: ${route}`);
      routes.add(route);

      if (!subsection.file) problems.push(`No file for subsection: ${subsection.id}`);
    }
  }

  if (problems.length) {
    console.group(`[manifest] ${problems.length} issue(s)`);
    problems.forEach((problem) => console.error(problem));
    console.groupEnd();
  }
  return problems;
}

export const getManifest = () => manifest;
export const getModules = () => manifest?.modules ?? [];
export const getFlatIndex = () => flatIndex;

/** All subsection ids, in reading order — the denominator for progress. */
export const allSubsectionIds = () => flatIndex.map((entry) => entry.id);

export function findSubsection(moduleSlug, subsectionSlug) {
  return (
    flatIndex.find(
      (entry) => entry.moduleSlug === moduleSlug && entry.slug === subsectionSlug
    ) ?? null
  );
}

export const findById = (id) => flatIndex.find((entry) => entry.id === id) ?? null;

/** Neighbours in reading order, for the prev/next footer. */
export function neighbours(id) {
  const index = flatIndex.findIndex((entry) => entry.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? flatIndex[index - 1] : null,
    next: index < flatIndex.length - 1 ? flatIndex[index + 1] : null,
  };
}

export const routeFor = (entry) => `#/${entry.moduleSlug}/${entry.slug}`;
