// The non-subsection pages: home, module overview, bibliography, progress, notes.

import { getManifest, getModules, routeFor, getFlatIndex } from './manifest.js';
import { moduleProgress, overallProgress, exerciseScore, resumeTarget, subsectionStatus } from './progress/derive.js';
import { allEntries, formatEntry, getCitedBy } from './citations.js';
import { findById } from './manifest.js';
import * as highlights from './highlights/store.js';

const escapeHtml = (text) =>
  String(text ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderHome() {
  const manifest = getManifest();
  const overall = overallProgress();
  const resume = resumeTarget();
  const started = overall.completed > 0;

  return `
    <article class="x-home">
      <header class="x-home-hero">
        <p class="x-eyebrow">An interactive course</p>
        <h1>${escapeHtml(manifest.title)}</h1>
        <p class="x-home-lede">${escapeHtml(manifest.description)}</p>
        ${
          resume
            ? `<a class="x-btn x-btn-primary x-btn-large"
                  href="${routeFor(resume.entry)}">
                 ${started ? 'Continue' : 'Start the course'} →
                 <span class="x-btn-sub">${escapeHtml(resume.entry.title)}</span>
               </a>`
            : ''
        }
        ${
          started
            ? `<p class="x-home-progress">${overall.completed} of ${overall.total} sections complete</p>`
            : ''
        }
      </header>

      ${manifest.intro ? `<div class="x-home-intro">${manifest.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</div>` : ''}

      <section class="x-home-modules">
        <h2>Contents</h2>
        <p class="x-home-note">${escapeHtml(manifest.homeNote ?? '')}</p>
        <ol class="x-module-grid">
          ${getModules().map(renderModuleCard).join('')}
        </ol>
      </section>
    </article>`;
}

function renderModuleCard(module) {
  const progress = moduleProgress(module.id);
  const first = module.subsections[0];

  return `
    <li class="x-module-card${progress.completed === progress.total && progress.total ? ' is-done' : ''}">
      <a href="${routeFor({ moduleSlug: module.slug, slug: first.slug })}">
        <div class="x-module-card-head">
          <span class="x-module-number">${escapeHtml(module.label ?? '')}</span>
          <span class="x-module-count">${progress.completed}/${progress.total}</span>
        </div>
        <h3>${escapeHtml(module.title)}</h3>
        <p>${escapeHtml(module.blurb ?? '')}</p>
        <div class="x-progress-bar x-progress-bar-slim">
          <div class="x-progress-fill" style="width:${progress.fraction * 100}%"></div>
        </div>
      </a>
    </li>`;
}

export function renderModuleOverview(moduleSlug) {
  const module = getModules().find((entry) => entry.slug === moduleSlug);
  if (!module) return renderNotFound();

  const progress = moduleProgress(module.id);

  return `
    <article class="x-module-overview">
      <p class="x-eyebrow">${escapeHtml(module.label ?? 'Module')}</p>
      <h1>${escapeHtml(module.title)}</h1>
      <p class="x-lede">${escapeHtml(module.blurb ?? '')}</p>
      <p class="x-module-status">${progress.completed} of ${progress.total} sections complete</p>
      <ol class="x-section-list">
        ${module.subsections
          .map((sub) => {
            const status = subsectionStatus(sub.id);
            return `
            <li>
              <a href="${routeFor({ moduleSlug: module.slug, slug: sub.slug })}">
                <span class="x-nav-mark x-mark-${status}" aria-hidden="true"></span>
                <span>
                  ${sub.sectionNumber ? `<span class="x-nav-num">§${sub.sectionNumber}</span>` : ''}
                  <strong>${escapeHtml(sub.title)}</strong>
                  ${sub.blurb ? `<em>${escapeHtml(sub.blurb)}</em>` : ''}
                </span>
              </a>
            </li>`;
          })
          .join('')}
      </ol>
    </article>`;
}

export function renderBibliography() {
  const entries = allEntries().sort((a, b) => {
    const surname = (entry) => (entry.authors || '').split(',')[0].toLowerCase();
    return surname(a[1]).localeCompare(surname(b[1])) || (a[1].year ?? 0) - (b[1].year ?? 0);
  });

  return `
    <article class="x-bibliography">
      <h1>Bibliography</h1>
      <p class="x-lede">Every source cited in the course, with links out. ${entries.length} entries.</p>
      <ol class="x-ref-list x-ref-list-full">
        ${entries
          .map(([key, entry]) => {
            const citedIn = getCitedBy(key)
              .map((id) => findById(id))
              .filter(Boolean);
            return `
            <li id="bib-${escapeHtml(key)}">
              ${formatEntry(entry)}
              ${entry.note ? `<span class="x-ref-note">${escapeHtml(entry.note)}</span>` : ''}
              ${
                citedIn.length
                  ? `<div class="x-ref-backlinks">Cited in
                       ${citedIn
                         .map((entry2) => `<a href="${routeFor(entry2)}">${escapeHtml(entry2.title)}</a>`)
                         .join(', ')}</div>`
                  : ''
              }
            </li>`;
          })
          .join('')}
      </ol>
    </article>`;
}

export function renderProgressPage() {
  const overall = overallProgress();
  const score = exerciseScore();

  return `
    <article class="x-progress-page">
      <h1>Your progress</h1>
      <p class="x-lede">Stored in this browser only. Nothing is uploaded, and there is no account.</p>

      <div class="x-progress-bar x-progress-bar-large">
        <div class="x-progress-fill" style="width:${overall.fraction * 100}%"></div>
      </div>
      <p>${overall.completed} of ${overall.total} sections complete
         · ${score.answered} exercises answered
         · score ${Math.round(score.earned * 10) / 10} / ${Math.round(score.possible * 10) / 10}
         ${score.stale ? `· ${score.stale} answer(s) excluded because the question changed` : ''}</p>

      <h2>By module</h2>
      <ul class="x-progress-modules">
        ${getModules()
          .map((module) => {
            const progress = moduleProgress(module.id);
            return `
            <li>
              <div class="x-progress-module-head">
                <span>${escapeHtml(module.title)}</span>
                <span>${progress.completed}/${progress.total}</span>
              </div>
              <div class="x-progress-bar x-progress-bar-slim">
                <div class="x-progress-fill" style="width:${progress.fraction * 100}%"></div>
              </div>
            </li>`;
          })
          .join('')}
      </ul>

      <p class="x-progress-hint">Use the settings button in the header to export a copy,
      move your progress to another device, or start over.</p>
    </article>`;
}

export function renderNotesPage() {
  const items = highlights.all();

  if (!items.length) {
    return `
      <article class="x-notes-page">
        <h1>Your notes</h1>
        <p class="x-lede">Nothing highlighted yet.</p>
        <p>Select any passage in a section and choose a colour. Highlights are
        saved in this browser and collected here, with whatever notes you attach
        to them.</p>
      </article>`;
  }

  // Group by module, then by section, in course order rather than by when the
  // reader made them — the point of this page is to read back an argument.
  const order = getFlatIndex().map((e) => e.id);
  const bySection = new Map();
  for (const h of items) {
    if (!bySection.has(h.subsectionId)) bySection.set(h.subsectionId, []);
    bySection.get(h.subsectionId).push(h);
  }
  const sections = [...bySection.keys()].sort(
    (a, b) => order.indexOf(a) - order.indexOf(b)
  );

  const withNotes = items.filter((h) => h.note).length;

  return `
    <article class="x-notes-page">
      <h1>Your notes</h1>
      <p class="x-lede">${items.length} highlight${items.length === 1 ? '' : 's'}
         across ${sections.length} section${sections.length === 1 ? '' : 's'}${
           withNotes ? `, ${withNotes} with a note` : ''}.
         Stored in this browser only, and included when you export your progress.</p>

      ${sections.map((sid) => {
        const entry = findById(sid);
        const list = bySection.get(sid);
        const heading = entry
          ? `<a href="${routeFor(entry)}">${entry.sectionNumber ? `§${entry.sectionNumber} ` : ''}${escapeHtml(entry.title)}</a>`
          : `<span class="x-notes-gone">${escapeHtml(sid)} — this section no longer exists</span>`;
        return `
        <section class="x-notes-section">
          <h2>${heading}</h2>
          <ul class="x-notes-list">
            ${list.map((h) => `
              <li class="x-notes-item x-hl-${escapeHtml(h.colour || 'yellow')}">
                <blockquote>${escapeHtml(h.quote)}</blockquote>
                ${h.note ? `<p class="x-notes-note">${escapeHtml(h.note)}</p>` : ''}
              </li>`).join('')}
          </ul>
        </section>`;
      }).join('')}

      <p class="x-progress-hint">Highlights are anchored to the words themselves,
      not to a position, so they survive edits elsewhere in a section. If a
      highlighted passage is rewritten the highlight stops appearing on the page
      but is kept here, because the note attached to it is yours.</p>
    </article>`;
}

export function renderNotFound() {
  const first = getFlatIndex()[0];
  return `
    <article class="x-notfound">
      <h1>Page not found</h1>
      <p>That link does not match anything in the course.</p>
      ${first ? `<a class="x-btn x-btn-primary" href="${routeFor(first)}">Go to the beginning</a>` : ''}
    </article>`;
}
