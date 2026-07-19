// Predict-then-reveal. The flagship type for this course.
//
// The pedagogy is entirely in the commitment: the reader must write down what
// they think BEFORE seeing the answer, because a prediction you have
// committed to is one you notice being wrong. So the reveal button stays
// disabled until the textarea has content, and once revealed it latches —
// re-hiding the answer would let someone quietly pretend they had predicted it.
//
// Scored at maxScore 0 on purpose. There is no right answer to grade; the act
// of predicting is the whole exercise, so it must not affect anyone's score.

import { Exercise, defineExercise } from './base.js';
import { renderInline, renderBlock } from './inline.js';

const MIN_CHARS = 12;

export class Predict extends Exercise {
  static type = 'predict';

  validate(config) {
    if (!config.prompt) throw new Error('predict needs a prompt');
    if (!config.reveal) throw new Error('predict needs reveal text');
  }

  render(config) {
    this.innerHTML = `
      <div class="x-badge">Predict first</div>
      <div class="x-prompt">${renderInline(config.prompt)}</div>
      <textarea class="x-textarea" rows="4"
        placeholder="${config.placeholder ?? 'Commit to a prediction before revealing…'}"
        aria-label="Your prediction"></textarea>
      <div class="x-actions">
        <button type="button" class="x-btn x-reveal" disabled>Reveal</button>
        <span class="x-hint x-reveal-hint">Write your prediction to unlock the answer.</span>
      </div>
      <div class="x-reveal-body" hidden>
        <h4>What actually happens</h4>
        ${renderBlock(config.reveal)}
        ${config.followUp ? `<div class="x-followup"><strong>Then consider:</strong> ${renderInline(config.followUp)}</div>` : ''}
      </div>`;

    this.textarea = this.querySelector('.x-textarea');
    this.revealBtn = this.querySelector('.x-reveal');
    this.revealBody = this.querySelector('.x-reveal-body');
    this.hint = this.querySelector('.x-reveal-hint');

    this.textarea.addEventListener('input', () => {
      const ready = this.textarea.value.trim().length >= MIN_CHARS;
      this.revealBtn.disabled = !ready && !this.revealed;
      this.hint.hidden = ready || this.revealed;
      this.#saveSoon();
    });

    this.revealBtn.addEventListener('click', () => {
      this.#reveal();
      this.commit({ countsAsAttempt: true });
    });
  }

  #saveSoon() {
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this.commit(), 600);
  }

  #reveal() {
    this.revealed = true;
    this.revealBody.hidden = false;
    this.revealBtn.hidden = true;
    this.hint.hidden = true;
    this.dataset.revealed = 'true';
    // Their prediction stays visible and editable-looking but locked, so the
    // comparison between what they said and what is true stays on screen.
    this.textarea.readOnly = true;
    this.announce('Answer revealed');
  }

  restore(response) {
    if (!response) return;
    if (response.text) {
      this.textarea.value = response.text;
      this.revealBtn.disabled = response.text.trim().length < MIN_CHARS;
      this.hint.hidden = !this.revealBtn.disabled;
    }
    if (response.revealed) this.#reveal();
  }

  reset() {
    this.revealed = false;
    delete this.dataset.revealed;
    this.textarea.value = '';
    this.textarea.readOnly = false;
    this.revealBtn.hidden = false;
    this.revealBtn.disabled = true;
    this.revealBody.hidden = true;
    this.hint.hidden = false;
  }

  serialize() {
    return {
      response: {
        text: this.textarea.value,
        revealed: Boolean(this.revealed),
      },
      score: null,
      maxScore: 0,
      state: this.revealed ? 'revealed' : this.textarea.value ? 'answered' : 'unanswered',
    };
  }
}

defineExercise('x-predict', Predict);
