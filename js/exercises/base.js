// Shared base for every exercise type.
//
// Exercises are autonomous custom elements: a browser standard, so no
// framework to rot, they self-register, and a content author writes
// <x-mcq> inline in Markdown with no glue code.
//
// NO SHADOW DOM, deliberately. Prose styles, KaTeX styles, and the print
// stylesheet all need to reach inside an exercise. Style isolation would be a
// liability here, not a feature. Classes are namespaced `x-` instead.
//
// Config lives in a nested <script type="application/json"> rather than in
// attributes, because per-option feedback is multi-line prose and
// attribute-escaping it would be unusable for an author.

import { getExercise, setExercise, clearExercise } from '../progress/store.js';
import { DEV, authorError } from '../base.js';
import { renderInline } from './inline.js';

const seenIds = new Set();

export class Exercise extends HTMLElement {
  static type = 'exercise';

  connectedCallback() {
    if (this._initialised) return;
    this._initialised = true;

    const config = this.#readConfig();
    if (!config) return;

    this.config = config;
    this.contentRev = config.contentRev ?? 1;

    if (seenIds.has(config.id)) {
      // Two exercises sharing an id silently share one saved answer, which
      // looks like a progress bug and is miserable to track down.
      authorError(config.id, 'duplicate exercise id — answers will collide');
      if (DEV) this.#renderError(`Duplicate exercise id: ${config.id}`);
    }
    seenIds.add(config.id);

    try {
      this.validate?.(config);
    } catch (error) {
      authorError(config.id, error.message);
      if (DEV) return this.#renderError(error.message);
    }

    this.classList.add('x-exercise', `x-exercise-${this.constructor.type}`);
    this.setAttribute('role', 'group');
    if (config.prompt) this.setAttribute('aria-label', 'Exercise');

    this.render(config);
    this.#restoreSaved();
  }

  #readConfig() {
    const script = this.querySelector(':scope > script[type="application/json"]');
    if (!script) {
      authorError(this.tagName.toLowerCase(), 'missing <script type="application/json"> config');
      if (DEV) this.#renderError('Missing config block');
      return null;
    }
    try {
      const config = JSON.parse(script.textContent);
      if (!config.id) throw new Error('config has no "id"');
      return config;
    } catch (error) {
      authorError(this.tagName.toLowerCase(), `bad config JSON: ${error.message}`);
      if (DEV) this.#renderError(`Bad config JSON: ${error.message}`);
      return null;
    }
  }

  #renderError(message) {
    this.innerHTML = `<div class="x-exercise-error"><strong>Authoring error</strong><br>${message}</div>`;
  }

  #restoreSaved() {
    const record = getExercise(this.config.id);
    if (!record) {
      this.restore(null, null);
      return;
    }

    if ((record.contentRev ?? 1) !== this.contentRev) {
      // The question changed under them. Keep the answer, show it as stale,
      // exclude it from scoring, and offer a redo. Never delete it.
      this.markStale(record);
      return;
    }

    this.restore(record.response ?? null, record);
  }

  markStale(record) {
    this.dataset.stale = 'true';
    this.restore(record.response ?? null, record);

    const banner = document.createElement('div');
    banner.className = 'x-stale-banner';
    banner.innerHTML =
      '<span>This question was revised after you answered it, so your previous answer no longer counts toward your score.</span>';

    const redo = document.createElement('button');
    redo.type = 'button';
    redo.className = 'x-btn x-btn-small';
    redo.textContent = 'Answer again';
    redo.addEventListener('click', () => {
      clearExercise(this.config.id);
      delete this.dataset.stale;
      banner.remove();
      this.reset?.();
      this.restore(null, null);
    });

    banner.appendChild(redo);
    this.prepend(banner);

    setExercise(this.config.id, { ...record, stale: true });
  }

  /**
   * Persist current answer. Subclasses call this on any user change.
   * `countsAsAttempt` distinguishes a real submission from incidental state
   * (e.g. typing in a textarea) so the attempt counter stays meaningful.
   */
  commit({ countsAsAttempt = false } = {}) {
    const payload = this.serialize();
    const record = setExercise(this.config.id, {
      type: this.constructor.type,
      contentRev: this.contentRev,
      stale: false,
      countsAsAttempt,
      ...payload,
    });

    this.dataset.state = payload.state ?? 'answered';
    this.dispatchEvent(
      new CustomEvent('x-exercise-change', {
        bubbles: true,
        detail: { id: this.config.id, record },
      })
    );
    return record;
  }

  /** Live region so feedback is announced to screen readers, not just shown. */
  ensureLiveRegion() {
    if (!this._live) {
      this._live = document.createElement('div');
      this._live.className = 'x-sr-only';
      this._live.setAttribute('aria-live', 'polite');
      this.appendChild(this._live);
    }
    return this._live;
  }

  announce(message) {
    this.ensureLiveRegion().textContent = message;
  }

  /** Prompt markup, with inline maths and emphasis rendered. */
  promptHtml(text) {
    return renderInline(text);
  }

  // --- Subclass contract ---------------------------------------------------
  render(_config) { throw new Error('render() not implemented'); }
  restore(_response, _record) {}
  serialize() { return { response: null, score: null, maxScore: 0, state: 'unanswered' }; }
}

export function defineExercise(tag, cls) {
  if (!customElements.get(tag)) customElements.define(tag, cls);
}

export const resetIdRegistry = () => seenIds.clear();
