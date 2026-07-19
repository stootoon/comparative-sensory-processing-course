// Module tree with per-subsection completion state.

import { getModules, routeFor } from '../manifest.js';
import { moduleProgress, overallProgress, isComplete, subsectionStatus } from '../progress/derive.js';
import { onChange } from '../progress/store.js';

let root = null;

export function mountSidebar(container) {
  root = container;
  render();
  onChange(render);
}

function render() {
  if (!root) return;

  const overall = overallProgress();
  const activeId = root.dataset.activeId ?? null;

  root.innerHTML = `
    <div class="x-sidebar-head">
      <a class="x-sidebar-title" href="#/">Comparative<br>Sensory Processing</a>
      <div class="x-sidebar-progress">
        <div class="x-progress-bar" role="progressbar"
             aria-valuenow="${Math.round(overall.fraction * 100)}"
             aria-valuemin="0" aria-valuemax="100"
             aria-label="Course progress">
          <div class="x-progress-fill" style="width:${overall.fraction * 100}%"></div>
        </div>
        <span class="x-progress-text">${overall.completed} of ${overall.total} sections</span>
      </div>
    </div>
    <nav class="x-nav" aria-label="Course contents">
      ${getModules().map((module) => renderModule(module, activeId)).join('')}
    </nav>
    <div class="x-sidebar-foot">
      <a href="#/bibliography">Bibliography</a>
      <a href="#/progress">Your progress</a>
    </div>`;
}

function renderModule(module, activeId) {
  const progress = moduleProgress(module.id);
  const done = progress.total > 0 && progress.completed === progress.total;
  const hasActive = module.subsections.some((sub) => sub.id === activeId);

  return `
    <details class="x-nav-module${done ? ' is-done' : ''}" ${hasActive || module.open ? 'open' : ''}>
      <summary>
        <span class="x-nav-module-title">${module.title}</span>
        <span class="x-nav-count">${progress.completed}/${progress.total}</span>
      </summary>
      <ul class="x-nav-list">
        ${module.subsections
          .map((sub) => {
            const status = subsectionStatus(sub.id);
            const active = sub.id === activeId;
            return `
              <li>
                <a class="x-nav-link${active ? ' is-active' : ''}"
                   href="${routeFor({ moduleSlug: module.slug, slug: sub.slug })}"
                   ${active ? 'aria-current="page"' : ''}>
                  <span class="x-nav-mark x-mark-${status}" aria-hidden="true"></span>
                  <span class="x-nav-label">${sub.sectionNumber ? `<span class="x-nav-num">§${sub.sectionNumber}</span> ` : ''}${sub.title}</span>
                </a>
              </li>`;
          })
          .join('')}
      </ul>
    </details>`;
}

export function setActive(subsectionId) {
  if (!root) return;
  root.dataset.activeId = subsectionId ?? '';
  render();
}

export { isComplete };
