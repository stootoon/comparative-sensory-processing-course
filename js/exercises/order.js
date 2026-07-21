// Drag-to-order sequencing.
//
// Two decisions worth explaining:
//
// 1. THE SHUFFLE SEED IS PERSISTED. Without it, restoring a saved answer
//    repaints a fresh random scramble and the stored index list describes a
//    layout that no longer exists — the answer becomes meaningless. So the
//    seed is part of the response.
//
// 2. UP/DOWN BUTTONS ARE THE REAL INTERFACE; dragging is a bonus. HTML5
//    drag-and-drop does not work on touch at all and is close to unusable
//    with a keyboard, so building on it alone would make this exercise type
//    inaccessible to a large fraction of readers.

import { Exercise, defineExercise } from './base.js';
import { renderInline, renderBlock } from './inline.js';

// Items come in two authored forms. The original was a bare array of strings,
// correct order implied by the array order. Most of the course uses the richer
// form — `{id, text}` objects plus a `correctOrder` of ids — because it lets an
// author list the items in a neutral order rather than writing the answer down
// the page. Both are supported; everything downstream works on the reduced
// shape this returns.
function normalise(config) {
  const items = config.items.map((item, index) =>
    typeof item === 'string' ? { id: String(index), text: item } : item
  );

  // `correct` is the sequence of item indices in the order they should end up.
  // With no `correctOrder` the authored order is the answer.
  let correct = items.map((_, index) => index);
  if (Array.isArray(config.correctOrder)) {
    const indexById = new Map(items.map((item, index) => [item.id, index]));
    correct = config.correctOrder.map((id) => indexById.get(id));
  }

  return { items, correct };
}

/** Small deterministic PRNG so a stored seed reproduces its shuffle exactly. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Scramble the correct sequence into the layout the reader first sees. */
function shuffled(correct, seed) {
  const order = [...correct];
  const random = mulberry32(seed);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // A scramble that happens to be the right answer teaches nothing.
  if (order.every((value, index) => value === correct[index]) && order.length > 1) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

/**
 * Kendall tau distance, normalised to 0..1, for partial credit. Scores the
 * displayed sequence against `correct` by comparing ranks, so it does not
 * assume the answer is the identity permutation.
 */
function kendallSimilarity(order, correct) {
  const n = order.length;
  if (n < 2) return 1;
  const rankOf = new Map(correct.map((item, position) => [item, position]));
  const ranks = order.map((item) => rankOf.get(item));
  let concordant = 0;
  let total = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      total += 1;
      if (ranks[i] < ranks[j]) concordant += 1;
    }
  }
  return concordant / total;
}

export class OrderExercise extends Exercise {
  static type = 'order';

  // These checks exist because every failure they catch used to render as
  // plausible-looking output — an item with no `text` painted the string
  // "[object Object]", and a `correctOrder` naming an id that does not exist
  // silently marked the exercise ungradeable. Both are authoring slips that
  // must fail loudly.
  validate(config) {
    if (!Array.isArray(config.items) || config.items.length < 3) {
      throw new Error('order needs at least three items');
    }

    const items = config.items;
    const bad = items.findIndex(
      (item) => typeof item !== 'string' && typeof item?.text !== 'string'
    );
    if (bad !== -1) throw new Error(`order item ${bad} has no text`);

    if (config.correctOrder !== undefined) {
      const ids = items.map((item, index) => (typeof item === 'string' ? String(index) : item.id));
      if (new Set(ids).size !== ids.length) throw new Error('order item ids are not unique');
      if (!Array.isArray(config.correctOrder) || config.correctOrder.length !== ids.length) {
        throw new Error('correctOrder must list every item exactly once');
      }
      const missing = config.correctOrder.find((id) => !ids.includes(id));
      if (missing !== undefined) throw new Error(`correctOrder names unknown item "${missing}"`);
    }
  }

  render(config) {
    this.points = config.points ?? 1;
    this.partialCredit = config.partialCredit !== false;

    const { items, correct } = normalise(config);
    this.items = items;
    this.correct = correct;

    // An authored seed keeps the starting scramble the same for every reader,
    // so the exercise can be discussed by position.
    this.seed = config.shuffleSeed ?? Math.floor(Math.random() * 1e9);
    this.order = shuffled(this.correct, this.seed);

    this.innerHTML = `
      <div class="x-prompt">${renderInline(config.prompt)}</div>
      <ol class="x-order-list"></ol>
      <div class="x-actions">
        <button type="button" class="x-btn x-submit">Check order</button>
      </div>
      <div class="x-verdict" hidden></div>
      ${
        config.modelAnswerNote
          ? `<div class="x-reveal-body" hidden>
               <h4>Why this order</h4>
               ${renderBlock(config.modelAnswerNote)}
             </div>`
          : ''
      }`;

    this.list = this.querySelector('.x-order-list');
    this.verdict = this.querySelector('.x-verdict');
    this.note = this.querySelector('.x-reveal-body');
    this.querySelector('.x-submit').addEventListener('click', () => {
      this.#check();
      this.commit({ countsAsAttempt: true });
    });

    this.#paint();
  }

  #paint() {
    this.list.innerHTML = this.order
      .map(
        (itemIndex, position) => `
      <li class="x-order-item" data-position="${position}" draggable="true">
        <span class="x-order-handle" aria-hidden="true">⠿</span>
        <span class="x-order-text">${renderInline(this.items[itemIndex].text)}</span>
        <span class="x-order-controls">
          <button type="button" class="x-btn x-btn-icon" data-move="up"
            aria-label="Move up" ${position === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="x-btn x-btn-icon" data-move="down"
            aria-label="Move down" ${position === this.order.length - 1 ? 'disabled' : ''}>↓</button>
        </span>
      </li>`
      )
      .join('');

    this.list.querySelectorAll('[data-move]').forEach((button) =>
      button.addEventListener('click', (event) => {
        const li = event.target.closest('.x-order-item');
        const from = Number(li.dataset.position);
        const to = button.dataset.move === 'up' ? from - 1 : from + 1;
        this.#move(from, to);
      })
    );

    this.#wireDragging();
  }

  #wireDragging() {
    let dragFrom = null;

    this.list.querySelectorAll('.x-order-item').forEach((li) => {
      li.addEventListener('dragstart', (event) => {
        dragFrom = Number(li.dataset.position);
        li.classList.add('is-dragging');
        event.dataTransfer.effectAllowed = 'move';
      });
      li.addEventListener('dragend', () => li.classList.remove('is-dragging'));
      li.addEventListener('dragover', (event) => {
        event.preventDefault();
        li.classList.add('is-dropzone');
      });
      li.addEventListener('dragleave', () => li.classList.remove('is-dropzone'));
      li.addEventListener('drop', (event) => {
        event.preventDefault();
        li.classList.remove('is-dropzone');
        if (dragFrom !== null) this.#move(dragFrom, Number(li.dataset.position));
        dragFrom = null;
      });
    });
  }

  #move(from, to) {
    if (to < 0 || to >= this.order.length) return;
    const [item] = this.order.splice(from, 1);
    this.order.splice(to, 0, item);
    this.#paint();
    this.commit();

    // Keep keyboard focus on the item the reader just moved, or every
    // keystroke bounces focus back to the top of the list.
    const moved = this.list.querySelector(`[data-position="${to}"]`);
    moved?.querySelector(`[data-move="${to > from ? 'down' : 'up'}"]`)?.focus();
  }

  #check() {
    this.checked = true;
    const perfect = this.#isPerfect();
    const similarity = kendallSimilarity(this.order, this.correct);

    this.list.querySelectorAll('.x-order-item').forEach((li, position) => {
      const right = this.order[position] === this.correct[position];
      li.classList.toggle('is-right', right);
      li.classList.toggle('is-wrong', !right);
    });

    if (this.note) this.note.hidden = false;

    this.verdict.hidden = false;
    this.verdict.className = `x-verdict ${perfect ? 'is-correct' : 'is-wrong'}`;
    this.verdict.textContent = perfect
      ? 'Correct order.'
      : this.partialCredit
        ? `${Math.round(similarity * 100)}% of pairs are in the right relative order. Items in green are in their correct position.`
        : 'Not the right order yet. Items in green are correctly placed.';

    this.announce(perfect ? 'Correct order' : 'Not yet correct');
  }

  #isPerfect() {
    return this.order.every((value, index) => value === this.correct[index]);
  }

  restore(response) {
    if (!response || !Array.isArray(response.order)) return;
    // A saved order from a since-edited item list describes a layout that no
    // longer exists. Drop it rather than paint a scrambled half-answer.
    const stale =
      response.order.length !== this.items.length ||
      new Set(response.order).size !== this.items.length ||
      response.order.some((index) => !Number.isInteger(index) || !this.items[index]);
    if (stale) return;

    this.seed = response.seed ?? this.seed;
    this.order = response.order;
    this.#paint();
    if (response.checked) this.#check();
  }

  reset() {
    this.checked = false;
    this.seed = this.config.shuffleSeed ?? Math.floor(Math.random() * 1e9);
    this.order = shuffled(this.correct, this.seed);
    this.verdict.hidden = true;
    if (this.note) this.note.hidden = true;
    this.#paint();
  }

  serialize() {
    const perfect = this.#isPerfect();
    const similarity = kendallSimilarity(this.order, this.correct);
    const score = perfect
      ? this.points
      : this.partialCredit
        ? Math.round(similarity * this.points * 100) / 100
        : 0;

    return {
      response: { order: [...this.order], seed: this.seed, checked: Boolean(this.checked) },
      score: this.checked ? score : null,
      maxScore: this.points,
      state: this.checked ? 'answered' : 'unanswered',
    };
  }
}

defineExercise('x-order', OrderExercise);
