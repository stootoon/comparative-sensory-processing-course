// Free response with a model answer and honest self-assessment.
//
// Used for questions where there is no single correct answer — "give the three
// strongest hypotheses for why olfaction has no thalamic relay and say which
// you'd bet on". Auto-grading those is impossible and faking it would be worse
// than not grading at all.
//
// The rubric bullets shown alongside the model answer exist to make
// self-assessment honest: without them people mark themselves correct for
// having written something adjacent to the right idea.

import { Exercise, defineExercise } from './base.js';
import { renderInline, renderBlock } from './inline.js';

const LEVELS = [
  { key: 'missed', label: 'Missed it', factor: 0 },
  { key: 'partial', label: 'Partly there', factor: 0.5 },
  { key: 'got-it', label: 'Got it', factor: 1 },
];

export class FreeResponse extends Exercise {
  static type = 'free-response';

  validate(config) {
    if (!config.prompt) throw new Error('free-response needs a prompt');
    if (!config.modelAnswer) throw new Error('free-response needs a modelAnswer');
  }

  render(config) {
    this.points = config.points ?? 1;

    this.innerHTML = `
      <div class="x-badge">Write your answer</div>
      <div class="x-prompt">${renderInline(config.prompt)}</div>
      <textarea class="x-textarea" rows="7"
        placeholder="Take your time — this one rewards a real attempt."
        aria-label="Your answer"></textarea>
      <div class="x-actions">
        <button type="button" class="x-btn x-reveal" disabled>Show model answer</button>
      </div>
      <div class="x-reveal-body" hidden>
        <h4>Model answer</h4>
        ${renderBlock(config.modelAnswer)}
        ${
          Array.isArray(config.rubric) && config.rubric.length
            ? `<div class="x-rubric">
                 <h5>A complete answer covers</h5>
                 <ul>${config.rubric.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>
               </div>`
            : ''
        }
        <fieldset class="x-selfassess">
          <legend>How did yours compare?</legend>
          ${LEVELS.map(
            (level) =>
              `<button type="button" class="x-btn x-btn-small x-level" data-level="${level.key}">${level.label}</button>`
          ).join('')}
        </fieldset>
      </div>`;

    this.textarea = this.querySelector('.x-textarea');
    this.revealBtn = this.querySelector('.x-reveal');
    this.revealBody = this.querySelector('.x-reveal-body');

    this.textarea.addEventListener('input', () => {
      this.revealBtn.disabled = this.textarea.value.trim().length < 20 && !this.revealed;
      clearTimeout(this._saveTimer);
      this._saveTimer = setTimeout(() => this.commit(), 600);
    });

    this.revealBtn.addEventListener('click', () => {
      this.#reveal();
      this.commit({ countsAsAttempt: true });
    });

    this.querySelectorAll('.x-level').forEach((button) =>
      button.addEventListener('click', () => {
        this.#setLevel(button.dataset.level);
        this.commit();
      })
    );
  }

  #reveal() {
    this.revealed = true;
    this.revealBody.hidden = false;
    this.revealBtn.hidden = true;
    this.textarea.readOnly = true;
    this.dataset.revealed = 'true';
    this.announce('Model answer shown');
  }

  #setLevel(key) {
    this.level = key;
    this.querySelectorAll('.x-level').forEach((button) =>
      button.classList.toggle('is-selected', button.dataset.level === key)
    );
  }

  restore(response) {
    if (!response) return;
    if (response.text) {
      this.textarea.value = response.text;
      this.revealBtn.disabled = false;
    }
    if (response.revealed) this.#reveal();
    if (response.selfAssessment) this.#setLevel(response.selfAssessment);
  }

  reset() {
    this.revealed = false;
    this.level = undefined;
    delete this.dataset.revealed;
    this.textarea.value = '';
    this.textarea.readOnly = false;
    this.revealBtn.hidden = false;
    this.revealBtn.disabled = true;
    this.revealBody.hidden = true;
    this.querySelectorAll('.x-level').forEach((b) => b.classList.remove('is-selected'));
  }

  serialize() {
    const level = LEVELS.find((entry) => entry.key === this.level);
    return {
      response: {
        text: this.textarea.value,
        revealed: Boolean(this.revealed),
        selfAssessment: this.level ?? null,
      },
      score: level ? level.factor * this.points : null,
      maxScore: this.points,
      state: this.level ? 'self-assessed' : this.revealed ? 'revealed' : 'unanswered',
    };
  }
}

defineExercise('x-free-response', FreeResponse);
