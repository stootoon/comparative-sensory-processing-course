// Multiple choice with per-option feedback.
//
// The design rule for this course: no distractor is obviously wrong. Each is
// the answer under a DIFFERENT plausible normative assumption, and its
// feedback names that assumption. That makes the distractor rationales the
// real teaching content — which is why we reveal ALL of them once the reader
// answers correctly, not just the one they picked.

import { Exercise, defineExercise } from './base.js';
import { renderInline } from './inline.js';

export class MCQ extends Exercise {
  static type = 'mcq';

  validate(config) {
    if (!Array.isArray(config.options) || config.options.length < 2) {
      throw new Error('mcq needs at least two options');
    }
    if (!config.options.some((option) => option.correct)) {
      throw new Error('mcq has no option marked correct');
    }
  }

  render(config) {
    this.multi = Boolean(config.multi);
    this.points = config.points ?? 1;

    const inputType = this.multi ? 'checkbox' : 'radio';
    const name = `mcq-${config.id}`;

    this.innerHTML = `
      <div class="x-prompt">${renderInline(config.prompt)}</div>
      ${this.multi ? '<p class="x-hint">Select all that apply.</p>' : ''}
      <ul class="x-options" role="list">
        ${config.options
          .map(
            (option, index) => `
          <li class="x-option" data-index="${index}">
            <label>
              <input type="${inputType}" name="${name}" value="${index}">
              <span class="x-option-text">${renderInline(option.text)}</span>
            </label>
            <div class="x-option-feedback" hidden>${renderInline(option.feedback ?? '')}</div>
          </li>`
          )
          .join('')}
      </ul>
      <div class="x-actions">
        <button type="button" class="x-btn x-submit">Check answer</button>
      </div>
      <div class="x-verdict" hidden></div>`;

    this.inputs = [...this.querySelectorAll('input')];
    this.submitBtn = this.querySelector('.x-submit');
    this.verdict = this.querySelector('.x-verdict');

    this.submitBtn.addEventListener('click', () => this.check());
    this.inputs.forEach((input) =>
      input.addEventListener('change', () => {
        this.submitBtn.disabled = this.#selected().length === 0;
      })
    );
    this.submitBtn.disabled = true;
  }

  #selected() {
    return this.inputs.filter((input) => input.checked).map((input) => Number(input.value));
  }

  #isCorrect(selected) {
    const correct = this.config.options
      .map((option, index) => (option.correct ? index : -1))
      .filter((index) => index >= 0);
    if (selected.length !== correct.length) return false;
    return correct.every((index) => selected.includes(index));
  }

  check() {
    const selected = this.#selected();
    if (selected.length === 0) return;
    this.#reveal(selected, true);
    this.commit({ countsAsAttempt: true });
  }

  #reveal(selected, announce) {
    const correct = this.#isCorrect(selected);
    this.selected = selected;
    this.answered = true;

    this.querySelectorAll('.x-option').forEach((li, index) => {
      const option = this.config.options[index];
      const chosen = selected.includes(index);

      li.classList.toggle('is-chosen', chosen);
      li.classList.toggle('is-correct', Boolean(option.correct));
      li.classList.toggle('is-wrong', chosen && !option.correct);

      // Show the chosen option's feedback always; show every option's
      // feedback once they've got it right, because the distractor
      // rationales are the point.
      const feedback = li.querySelector('.x-option-feedback');
      feedback.hidden = !(chosen || correct);
    });

    this.inputs.forEach((input) => { input.disabled = true; });
    this.submitBtn.hidden = true;

    this.verdict.hidden = false;
    this.verdict.className = `x-verdict ${correct ? 'is-correct' : 'is-wrong'}`;
    this.verdict.textContent = correct
      ? 'Correct.'
      : 'Not quite — read the feedback on your choice, then look at the correct option.';

    if (announce) this.announce(correct ? 'Correct' : 'Incorrect');
  }

  restore(response) {
    if (!response || !Array.isArray(response.selected)) return;
    response.selected.forEach((index) => {
      const input = this.inputs[index];
      if (input) input.checked = true;
    });
    this.#reveal(response.selected, false);
  }

  reset() {
    this.answered = false;
    this.selected = [];
    this.inputs.forEach((input) => { input.checked = false; input.disabled = false; });
    this.submitBtn.hidden = false;
    this.submitBtn.disabled = true;
    this.verdict.hidden = true;
    this.querySelectorAll('.x-option').forEach((li) => {
      li.classList.remove('is-chosen', 'is-correct', 'is-wrong');
      li.querySelector('.x-option-feedback').hidden = true;
    });
  }

  serialize() {
    const correct = this.#isCorrect(this.selected ?? []);
    return {
      response: { selected: this.selected ?? [] },
      score: correct ? this.points : 0,
      maxScore: this.points,
      state: this.answered ? 'answered' : 'unanswered',
    };
  }
}

defineExercise('x-mcq', MCQ);
