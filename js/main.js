// Application entry point.

import { url, DEV } from './base.js';
import { loadManifest, findSubsection, neighbours, routeFor, getFlatIndex } from './manifest.js';
import { loadReferences, buildReferenceList, validateCitations } from './citations.js';
import { renderMarkdown, assignHeadingIds } from './content.js';
import { startRouter, onRouteChange, navigate } from './router.js';
import * as store from './progress/store.js';
import { isComplete } from './progress/derive.js';
import { loadSiteVersion } from './progress/transfer.js';
import { resetIdRegistry } from './exercises/base.js';
import { mountSidebar, setActive } from './ui/sidebar.js';
import { mountToc, unmountToc } from './ui/toc.js';
import { initCitePopover } from './ui/cite-popover.js';
import { mountSettings, applyStoredTheme } from './ui/settings-panel.js';
import * as highlights from './highlights/store.js';
import { asMarkdown } from './highlights/report.js';
import { initHighlighter, mountHighlighter, unmountHighlighter } from './ui/highlighter.js';
import {
  renderHome, renderModuleOverview, renderBibliography, renderProgressPage, renderNotesPage, renderNotFound,
} from './views.js';
import './exercises/index.js';
import './ui/figure.js';

const contentCache = new Map();

const app = {
  main: null,
  toc: null,
  sidebar: null,
  currentId: null,
  readingTimer: null,
};

async function boot() {
  applyStoredTheme();
  store.load();
  highlights.load();
  initHighlighter();
  store.watchOtherTabs();

  app.main = document.getElementById('main');
  app.toc = document.getElementById('toc');
  app.sidebar = document.getElementById('sidebar');

  try {
    await Promise.all([loadManifest(), loadReferences(), loadSiteVersion()]);
  } catch (error) {
    app.main.innerHTML = `
      <div class="x-fatal">
        <h1>The course failed to load</h1>
        <p>${error.message}</p>
        <p class="x-hint">If you opened this file directly from disk, it needs to be served over
        HTTP instead — see the README. Try <code>python3 -m http.server 8000</code>.</p>
      </div>`;
    return;
  }

  mountSidebar(app.sidebar);
  mountSettings(document.getElementById('settings-btn'));
  initCitePopover();
  wireNav();

  onRouteChange(handleRoute);
  startRouter();

  document.getElementById('app-shell').dataset.ready = 'true';
}

const MOBILE_BREAKPOINT = 880;
const isMobileLayout = () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

function wireNav() {
  const toggle = document.getElementById('nav-toggle');
  const shell = document.getElementById('app-shell');
  if (!toggle || !shell) return;

  // Restore the desktop collapse before first paint so the layout does not
  // flash open and then shut.
  const prefs = store.loadPrefs();
  if (prefs.navCollapsed) shell.dataset.navCollapsed = 'true';

  const syncLabel = () => {
    const hidden = isMobileLayout()
      ? shell.dataset.navOpen !== 'true'
      : shell.dataset.navCollapsed === 'true';
    toggle.setAttribute('aria-expanded', hidden ? 'false' : 'true');
    toggle.setAttribute('aria-label', hidden ? 'Show contents' : 'Hide contents');
    toggle.title = hidden ? 'Show contents' : 'Hide contents';
  };
  syncLabel();

  toggle.addEventListener('click', () => {
    if (isMobileLayout()) {
      // Small screens: the sidebar is an overlay drawer, so this opens and
      // closes it. Collapse state is meaningless here and is left alone.
      shell.dataset.navOpen = shell.dataset.navOpen === 'true' ? 'false' : 'true';
    } else {
      const collapsed = shell.dataset.navCollapsed === 'true';
      shell.dataset.navCollapsed = collapsed ? 'false' : 'true';
      store.savePrefs({ ...store.loadPrefs(), navCollapsed: !collapsed });
    }
    syncLabel();
  });

  // Any navigation closes the drawer — otherwise on a phone you tap a link
  // and the menu stays over the text you just asked for. On desktop the
  // sidebar is not covering anything, so collapse is left as the reader set it.
  app.sidebar.addEventListener('click', (event) => {
    if (event.target.closest('a') && isMobileLayout()) {
      shell.dataset.navOpen = 'false';
      syncLabel();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMobileLayout() && shell.dataset.navOpen === 'true') {
      shell.dataset.navOpen = 'false';
      syncLabel();
    }
  });

  // Crossing the breakpoint changes what the button means.
  window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).addEventListener('change', syncLabel);
}

// The notes page is rendered as a string, so its controls are bound after the
// fact. Re-rendering on change keeps the list honest when a report is removed.
function wireNotesPage() {
  const page = app.main.querySelector('.x-notes-page');
  if (!page) return;

  page.querySelector('.x-copy-reports')?.addEventListener('click', async (e) => {
    const md = asMarkdown(highlights.reports());
    try {
      await navigator.clipboard.writeText(md);
      e.target.textContent = 'Copied';
    } catch {
      // Clipboard is blocked in some contexts; fall back to a selectable box
      // rather than failing silently.
      const ta = document.createElement('textarea');
      ta.className = 'x-reports-fallback';
      ta.value = md;
      ta.rows = 12;
      e.target.replaceWith(ta);
      ta.select();
    }
  });

  page.addEventListener('click', (e) => {
    const btn = e.target.closest('.x-drop-report');
    if (!btn) return;
    const id = btn.closest('[data-report-id]')?.dataset.reportId;
    if (!id) return;
    highlights.remove(id);
    show(renderNotesPage());
    wireNotesPage();
  });
}

async function handleRoute(route) {
  stopReadingTimer();
  unmountToc();

  switch (route.name) {
    case 'home':
      show(renderHome());
      setActive(null);
      break;
    case 'module':
      show(renderModuleOverview(route.moduleSlug));
      setActive(null);
      break;
    case 'bibliography':
      show(renderBibliography());
      setActive(null);
      break;
    case 'progress':
      unmountHighlighter();
      show(renderProgressPage());
      setActive(null);
      break;
    case 'notes':
      unmountHighlighter();
      show(renderNotesPage());
      wireNotesPage();
      setActive(null);
      break;
    case 'subsection':
      await showSubsection(route);
      break;
    default:
      show(renderNotFound());
  }

  if (DEV) validateCitations();
}

function show(html) {
  app.main.innerHTML = html;
  app.toc.hidden = true;
  window.scrollTo({ top: 0 });
  focusMain();
}

function focusMain() {
  // Move focus to the heading so keyboard and screen-reader users land in the
  // new content rather than back at the top of the page chrome.
  const heading = app.main.querySelector('h1');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

async function showSubsection(route) {
  const entry = findSubsection(route.moduleSlug, route.subsectionSlug);
  if (!entry) {
    show(renderNotFound());
    return;
  }

  app.main.innerHTML = '<div class="x-loading">Loading…</div>';

  let source = contentCache.get(entry.path);
  if (!source) {
    try {
      const response = await fetch(url(`content/${entry.path}`));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      source = await response.text();
      contentCache.set(entry.path, source);
    } catch (error) {
      app.main.innerHTML = `
        <div class="x-fatal">
          <h1>Could not load this section</h1>
          <p><code>content/${entry.path}</code> — ${error.message}</p>
        </div>`;
      return;
    }
  }

  // The id-uniqueness check is per-page. Without this reset, revisiting a
  // section would re-register its exercise ids and report them as collisions.
  resetIdRegistry();

  const { data, html, citedKeys } = renderMarkdown(source, { context: entry.id });

  app.main.innerHTML = `
    <article class="x-subsection" data-subsection-id="${entry.id}">
      <header class="x-subsection-head">
        <p class="x-eyebrow">
          <a href="#/${entry.moduleSlug}">${entry.moduleTitle}</a>
          ${entry.sectionNumber ? `<span class="x-sep">·</span> §${entry.sectionNumber}` : ''}
        </p>
        <h1>${data.title ?? entry.title}</h1>
        ${data.lede ? `<p class="x-lede">${data.lede}</p>` : ''}
        ${data.estimatedMinutes ? `<p class="x-meta">About ${data.estimatedMinutes} minutes</p>` : ''}
      </header>
      <div class="x-prose">${html}</div>
    </article>`;

  const article = app.main.querySelector('.x-subsection');

  const references = buildReferenceList(citedKeys);
  if (references) article.appendChild(references);

  article.appendChild(buildFooter(entry));

  const prose = app.main.querySelector('.x-prose');
  // After headings, so the ids exist, and after the article is fully assembled:
  // highlights are anchored to text, and re-anchoring needs the final DOM.
  mountHighlighter(prose, entry.id);

  const headings = assignHeadingIds(prose);
  mountToc(app.toc, headings);

  setActive(entry.id);
  app.currentId = entry.id;
  store.markOpened(entry.id);
  startReadingTimer(entry.id);

  window.scrollTo({ top: 0 });

  if (route.anchor) {
    // Wait a frame so lazily-mounted exercises and figures have laid out;
    // scrolling before that lands in the wrong place.
    requestAnimationFrame(() => {
      document.getElementById(route.anchor)?.scrollIntoView({ block: 'start' });
    });
  } else {
    focusMain();
  }

  store.setLastLocation({ subsectionId: entry.id, anchor: route.anchor ?? null });
}

function buildFooter(entry) {
  const { prev, next } = neighbours(entry.id);
  const done = isComplete(entry.id);

  const footer = document.createElement('footer');
  footer.className = 'x-subsection-foot';
  footer.innerHTML = `
    <div class="x-complete-row">
      <label class="x-complete">
        <input type="checkbox" ${done ? 'checked' : ''}>
        <span>Mark this section complete</span>
      </label>
      <span class="x-hl-hint">Select any text to highlight it</span>
    </div>
    <nav class="x-pager" aria-label="Section navigation">
      ${
        prev
          ? `<a class="x-pager-link is-prev" href="${routeFor(prev)}">
               <span class="x-pager-dir">← Previous</span>
               <span class="x-pager-title">${prev.title}</span></a>`
          : '<span></span>'
      }
      ${
        next
          ? `<a class="x-pager-link is-next" href="${routeFor(next)}">
               <span class="x-pager-dir">Next →</span>
               <span class="x-pager-title">${next.title}</span></a>`
          : '<span></span>'
      }
    </nav>`;

  const checkbox = footer.querySelector('input');
  checkbox.addEventListener('change', () => {
    store.setComplete(entry.id, checkbox.checked);
    // Advancing on completion keeps the reader moving without hunting for
    // the next link, but only when they are finishing — never on un-marking.
    if (checkbox.checked && next) {
      setTimeout(() => navigate(routeFor(next)), 350);
    }
  });

  return footer;
}

// --- Reading telemetry ----------------------------------------------------
// Coarse on purpose: 15-second ticks and a max-scroll watermark, used only to
// drive the "you've read this" heuristic. Nothing leaves the browser.

function startReadingTimer(id) {
  let seconds = 0;
  app.readingTimer = setInterval(() => {
    if (document.hidden) return;
    seconds += 15;
    store.recordReading(id, { seconds: 15, scrollRatio: scrollRatio() });
    if (seconds >= 60) {
      clearInterval(app.readingTimer);
      app.readingTimer = null;
    }
  }, 15000);
}

function stopReadingTimer() {
  if (app.readingTimer) {
    clearInterval(app.readingTimer);
    app.readingTimer = null;
  }
  if (app.currentId) {
    store.recordReading(app.currentId, { seconds: 0, scrollRatio: scrollRatio() });
  }
}

function scrollRatio() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  if (height <= 0) return 1;
  return Math.min(1, Math.max(0, window.scrollY / height));
}

window.addEventListener('scroll', () => {
  if (!app.currentId) return;
  clearTimeout(app._scrollTimer);
  app._scrollTimer = setTimeout(() => {
    store.recordReading(app.currentId, { seconds: 0, scrollRatio: scrollRatio() });
  }, 500);
}, { passive: true });

boot();
