// Settings: theme, learner name, export/import/reset.
//
// Import deliberately never applies silently. It shows what is in the file
// against what is already here and makes the reader choose — replacing
// someone's progress by accident is unrecoverable without this step.

import {
  getState, setLearnerLabel, resetAll, loadPrefs, savePrefs, onNotice,
  isStorageAvailable,
} from '../progress/store.js';
import {
  downloadExport, parseImport, summariseImport, applyReplace, applyMerge,
} from '../progress/transfer.js';
import { overallProgress, exerciseScore } from '../progress/derive.js';

let panel = null;

export function applyStoredTheme() {
  const { theme } = loadPrefs();
  if (theme) document.documentElement.dataset.theme = theme;
  return theme ?? 'auto';
}

export function mountSettings(button) {
  button.addEventListener('click', toggle);
  onNotice(showNotice);

  // Navigating away must dismiss the panel. Otherwise following a link from
  // inside settings leaves a dialog sitting over the content you asked for,
  // and on mobile it covers the whole page.
  window.addEventListener('hashchange', close);
}

function toggle() {
  if (panel) return close();
  open();
}

export function close() {
  panel?.remove();
  panel = null;
  document.removeEventListener('keydown', onKeydown);
}

function onKeydown(event) {
  if (event.key === 'Escape') close();
}

function open() {
  const state = getState();
  const overall = overallProgress();
  const score = exerciseScore();
  const theme = document.documentElement.dataset.theme ?? 'auto';

  panel = document.createElement('div');
  panel.className = 'x-settings';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Settings and progress');
  panel.innerHTML = `
    <div class="x-settings-inner">
      <div class="x-settings-head">
        <h2>Your progress</h2>
        <button type="button" class="x-btn x-btn-icon x-settings-close" aria-label="Close">×</button>
      </div>

      <dl class="x-stats">
        <div><dt>Sections complete</dt><dd>${overall.completed} / ${overall.total}</dd></div>
        <div><dt>Exercises answered</dt><dd>${score.answered}</dd></div>
        <div><dt>Score</dt><dd>${round(score.earned)} / ${round(score.possible)}</dd></div>
      </dl>

      ${isStorageAvailable() ? '' : `
        <p class="x-settings-warning">This browser is blocking local storage, so nothing here will
        persist after you close the tab. Export your progress if you want to keep it.</p>`}

      <label class="x-field">
        <span>Your name <em>(optional — only used to label exports)</em></span>
        <input type="text" class="x-name-input" value="${escapeAttr(state.learnerLabel)}"
               placeholder="e.g. Sina" maxlength="120">
      </label>

      <fieldset class="x-field">
        <legend>Theme</legend>
        <div class="x-theme-options">
          ${['auto', 'light', 'dark']
            .map(
              (option) => `
            <button type="button" class="x-btn x-btn-small x-theme${theme === option ? ' is-selected' : ''}"
                    data-theme="${option}">${option}</button>`
            )
            .join('')}
        </div>
      </fieldset>

      <div class="x-settings-actions">
        <button type="button" class="x-btn x-export">Export progress</button>
        <button type="button" class="x-btn x-import">Import progress…</button>
        <input type="file" class="x-file" accept="application/json,.json" hidden>
        <button type="button" class="x-btn x-btn-danger x-reset">Reset everything</button>
      </div>

      <div class="x-settings-result" hidden></div>

      <p class="x-settings-note">
        Progress is stored only in this browser — nothing is uploaded anywhere and there is no
        account. Use export to move between devices or to keep a backup.
      </p>
    </div>`;

  document.body.appendChild(panel);
  document.addEventListener('keydown', onKeydown);

  const result = panel.querySelector('.x-settings-result');
  const fileInput = panel.querySelector('.x-file');

  panel.querySelector('.x-settings-close').addEventListener('click', close);
  panel.addEventListener('click', (event) => {
    if (event.target === panel) close();
  });

  panel.querySelector('.x-name-input').addEventListener('change', (event) => {
    setLearnerLabel(event.target.value);
  });

  panel.querySelectorAll('.x-theme').forEach((button) =>
    button.addEventListener('click', () => {
      const value = button.dataset.theme;
      if (value === 'auto') delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = value;
      savePrefs({ ...loadPrefs(), theme: value });
      panel.querySelectorAll('.x-theme').forEach((b) =>
        b.classList.toggle('is-selected', b === button)
      );
    })
  );

  panel.querySelector('.x-export').addEventListener('click', () => {
    const name = downloadExport();
    show(result, `Downloaded <code>${name}</code>.`, 'ok');
  });

  panel.querySelector('.x-import').addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const incoming = parseImport(await file.text());
      showImportChoice(result, incoming);
    } catch (error) {
      show(result, error.message, 'error');
    }
    fileInput.value = '';
  });

  panel.querySelector('.x-reset').addEventListener('click', () => {
    const confirmBtn = panel.querySelector('.x-reset');
    if (confirmBtn.dataset.armed !== 'true') {
      confirmBtn.dataset.armed = 'true';
      confirmBtn.textContent = 'Really reset? Click again';
      setTimeout(() => {
        confirmBtn.dataset.armed = 'false';
        confirmBtn.textContent = 'Reset everything';
      }, 4000);
      return;
    }
    resetAll();
    close();
  });
}

function showImportChoice(result, incoming) {
  const summary = summariseImport(incoming);

  result.hidden = false;
  result.className = 'x-settings-result';
  result.innerHTML = `
    <p><strong>That file contains</strong> ${summary.incoming.complete} completed sections and
    ${summary.incoming.exercises} answered exercises (${escapeAttr(summary.incoming.label)}).</p>
    <p><strong>You currently have</strong> ${summary.current.complete} completed sections and
    ${summary.current.exercises} answered exercises.</p>
    <div class="x-settings-actions">
      <button type="button" class="x-btn x-do-merge">Merge them</button>
      <button type="button" class="x-btn x-btn-danger x-do-replace">Replace mine</button>
      <button type="button" class="x-btn x-btn-quiet x-do-cancel">Cancel</button>
    </div>`;

  result.querySelector('.x-do-merge').addEventListener('click', () => {
    applyMerge(incoming);
    show(result, 'Merged. Completed sections from both are kept.', 'ok');
  });
  result.querySelector('.x-do-replace').addEventListener('click', () => {
    applyReplace(incoming);
    show(result, 'Replaced with the imported progress.', 'ok');
  });
  result.querySelector('.x-do-cancel').addEventListener('click', () => {
    result.hidden = true;
  });
}

function show(node, html, kind) {
  node.hidden = false;
  node.className = `x-settings-result is-${kind}`;
  node.innerHTML = `<p>${html}</p>`;
}

function showNotice({ message, kind }) {
  const banner = document.createElement('div');
  banner.className = `x-banner is-${kind}`;
  banner.innerHTML = `<span>${message}</span>`;

  const dismiss = document.createElement('button');
  dismiss.type = 'button';
  dismiss.className = 'x-btn x-btn-icon';
  dismiss.setAttribute('aria-label', 'Dismiss');
  dismiss.textContent = '×';
  dismiss.addEventListener('click', () => banner.remove());

  banner.appendChild(dismiss);
  document.body.appendChild(banner);
}

const round = (value) => Math.round(value * 10) / 10;
const escapeAttr = (text) =>
  String(text ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
