// Turning a reader's marked-up passage into a filed issue.
//
// The constraint that shapes this: there is no backend, so nothing can be
// submitted from the page. What we can do is compose a pre-filled GitHub issue
// URL and let the reader post it under their own account.
//
// So collection and filing are deliberately separate. A reader working through
// forty hours of material will find many small things, and stopping to file
// each one breaks reading. Reports are captured locally, offline, in one click;
// filing happens later, in a batch, and only if they want to.

import { getManifest, findById } from '../manifest.js';

// GitHub truncates very long URLs and browsers differ on the limit. Quotes get
// clipped rather than risking a link that silently fails to open.
const MAX_QUOTE = 600;

const clip = (s, n) => (s && s.length > n ? s.slice(0, n) + '…' : s ?? '');

function repoUrl() {
  return getManifest()?.repository ?? null;
}

/** Where this report lives, as a shareable deep link. */
export function permalink(report) {
  const entry = findById(report.subsectionId);
  const base = location.href.split('#')[0];
  return entry ? `${base}#/${entry.moduleSlug}/${entry.slug}` : base;
}

export function issueTitle(report) {
  const entry = findById(report.subsectionId);
  const where = entry
    ? `${entry.sectionNumber ? `§${entry.sectionNumber} ` : ''}${entry.title}`
    : report.subsectionId;
  const gist = (report.note || '').split('\n')[0].trim();
  return `[${where}] ${clip(gist, 80) || 'Reader report'}`;
}

export function issueBody(report) {
  const entry = findById(report.subsectionId);
  const lines = [];
  lines.push(report.note || '_(no description given)_');
  lines.push('');
  lines.push('---');
  lines.push('');
  if (report.quote) {
    lines.push('**Passage**');
    lines.push('');
    lines.push('> ' + clip(report.quote, MAX_QUOTE).replace(/\n/g, '\n> '));
    lines.push('');
  }
  lines.push(`**Section** ${entry ? `${entry.sectionNumber ? `§${entry.sectionNumber} — ` : ''}${entry.title}` : report.subsectionId}`);
  lines.push(`**Link** ${permalink(report)}`);
  lines.push(`**Reported** ${report.createdAt?.slice(0, 10) ?? ''}`);
  lines.push('');
  lines.push('<sub>Filed from the course reader.</sub>');
  return lines.join('\n');
}

/**
 * Pre-filled "new issue" URL, or null if the manifest records no repository —
 * in which case the UI offers copy-to-clipboard instead of a dead link.
 */
export function issueUrl(report) {
  const repo = repoUrl();
  if (!repo) return null;
  const q = new URLSearchParams({
    title: issueTitle(report),
    body: issueBody(report),
  });
  return `${repo.replace(/\/$/, '')}/issues/new?${q}`;
}

/** All reports as one markdown document, for filing in bulk or emailing. */
export function asMarkdown(reports) {
  const out = ['# Reader reports', '', `${reports.length} item${reports.length === 1 ? '' : 's'}.`, ''];
  for (const r of reports) {
    const entry = findById(r.subsectionId);
    out.push(`## ${entry ? `${entry.sectionNumber ? `§${entry.sectionNumber} ` : ''}${entry.title}` : r.subsectionId}`);
    out.push('');
    if (r.quote) out.push('> ' + clip(r.quote, MAX_QUOTE).replace(/\n/g, '\n> '), '');
    out.push(r.note || '_(no description given)_');
    out.push('');
    out.push(permalink(r));
    out.push('');
  }
  return out.join('\n');
}

export const hasRepository = () => Boolean(repoUrl());
