// Resolve the site root once, from this module's own URL.
// GitHub Pages serves the site under /<repo-name>/, never at /, so every
// asset path in the app must be relative to this and never absolute.
// js/base.js -> site root is one level up.
export const BASE = new URL('../', import.meta.url).href;

/** Resolve a site-relative path (e.g. "content/manifest.json") to a full URL. */
export function url(path) {
  return new URL(String(path).replace(/^\.?\//, ''), BASE).href;
}

/** True when the page was loaded with ?dev=1 — enables authoring validation. */
export const DEV = new URLSearchParams(location.search).get('dev') === '1';

/** Log an authoring problem. Loud in dev, quiet-but-present otherwise. */
export function authorError(where, message) {
  const text = `[authoring] ${where}: ${message}`;
  if (DEV) console.error(text);
  else console.warn(text);
  return text;
}
