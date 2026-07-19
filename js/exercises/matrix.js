// The comparison matrix: modality × property.
//
// This is the workhorse of the whole course. The comparative datasheet is
// filled in progressively across modules, and the completed table is the
// artefact a reader carries away — so it is worth building properly rather
// than as a generic quiz widget.
//
// Rendered as a real <table> with scoped headers, because it IS tabular data
// and screen-reader users need the row/column relationship.
//
// Matching is deliberately forgiving. The point is whether the reader knows
// that the olfactory receptor array is unordered, not whether they typed
// "unordered" rather than "not ordered".

import { Exercise, defineExercise } from './base.js';
import { renderInline } from './inline.js';

function normalise(text) {
  return String(text ?? '')
    .toLowerCase()
    .trim()
    .replace(/[‐-―]/g, '-')   // unicode dashes -> hyphen
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ');
}

export class MatrixExercise extends Exercise {
  static type = 'matrix';

  validate(config) {
    if (!Array.isArray(config.rows) || !Array.isArray(config.columns)) {
      throw new Error('matrix needs rows and columns arrays');
    }
  }

  render(config) {
    this.cellSpec = config.cells ?? {};
    this.points = config.points ?? Object.keys(this.cellSpec).length;

    const key = (row, column) => `${row}|${column}`;

    this.innerHTML = `
      ${config.prompt ? `<div class="x-prompt">${renderInline(config.prompt)}</div>` : ''}
      <div class="x-table-scroll">
        <table class="x-matrix">
          <thead>
            <tr>
              <th scope="col">${renderInline(config.corner ?? '')}</th>
              ${config.columns.map((column) => `<th scope="col">${renderInline(column)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${config.rows
              .map(
                (row) => `
              <tr>
                <th scope="row">${renderInline(row)}</th>
                ${config.columns
                  .map((column) => {
                    const spec = this.cellSpec[key(row, column)];
                    const graded = spec && spec.answer !== undefined;
                    return `<td>
                      <input type="text" class="x-cell"
                        data-key="${key(row, column)}"
                        data-graded="${graded ? 'true' : 'false'}"
                        aria-label="${row}, ${column}"
                        placeholder="${graded ? '' : 'notes'}">
                    </td>`;
                  })
                  .join('')}
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
      <div class="x-actions">
        <button type="button" class="x-btn x-submit">Check table</button>
        <span class="x-hint">Ungraded cells are yours for notes.</span>
      </div>
      <div class="x-verdict" hidden></div>
      ${config.modelAnswerNote ? `<div class="x-matrix-note" hidden><strong>Worth noticing:</strong> ${renderInline(config.modelAnswerNote)}</div>` : ''}`;

    this.cells = [...this.querySelectorAll('.x-cell')];
    this.verdict = this.querySelector('.x-verdict');
    this.note = this.querySelector('.x-matrix-note');

    this.cells.forEach((cell) =>
      cell.addEventListener('input', () => {
        clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => this.commit(), 600);
      })
    );

    this.querySelector('.x-submit').addEventListener('click', () => {
      this.#check();
      this.commit({ countsAsAttempt: true });
    });
  }

  #accepts(spec, value) {
    const candidates = [spec.answer, ...(spec.accept ?? [])].map(normalise);
    const given = normalise(value);
    if (!given) return false;
    // Substring either way: "unordered" should accept "completely unordered",
    // and a spec of "no obligatory relay" should accept "no relay".
    return candidates.some(
      (candidate) => candidate === given || given.includes(candidate) || candidate.includes(given)
    );
  }

  #check() {
    this.checked = true;
    let right = 0;
    let graded = 0;

    for (const cell of this.cells) {
      if (cell.dataset.graded !== 'true') continue;
      graded += 1;
      const spec = this.cellSpec[cell.dataset.key];
      const ok = this.#accepts(spec, cell.value);
      if (ok) right += 1;

      cell.classList.toggle('is-right', ok);
      cell.classList.toggle('is-wrong', !ok);

      const td = cell.closest('td');
      td.querySelector('.x-cell-answer')?.remove();
      if (!ok) {
        const answer = document.createElement('div');
        answer.className = 'x-cell-answer';
        answer.innerHTML = renderInline(spec.answer);
        td.appendChild(answer);
      }
    }

    this.rightCount = right;
    this.gradedCount = graded;

    this.verdict.hidden = false;
    this.verdict.className = `x-verdict ${right === graded ? 'is-correct' : 'is-partial'}`;
    this.verdict.textContent =
      right === graded
        ? `All ${graded} cells correct.`
        : `${right} of ${graded} correct — the expected answer is shown under each miss.`;

    if (this.note) this.note.hidden = false;
    this.announce(`${right} of ${graded} correct`);
  }

  restore(response) {
    if (!response?.cells) return;
    for (const cell of this.cells) {
      const saved = response.cells[cell.dataset.key];
      if (saved !== undefined) cell.value = saved;
    }
    if (response.checked) this.#check();
  }

  reset() {
    this.checked = false;
    this.cells.forEach((cell) => {
      cell.value = '';
      cell.classList.remove('is-right', 'is-wrong');
      cell.closest('td').querySelector('.x-cell-answer')?.remove();
    });
    this.verdict.hidden = true;
    if (this.note) this.note.hidden = true;
  }

  serialize() {
    const cells = {};
    for (const cell of this.cells) cells[cell.dataset.key] = cell.value;

    const graded = this.gradedCount ?? this.cells.filter((c) => c.dataset.graded === 'true').length;
    const perCell = graded > 0 ? this.points / graded : 0;

    return {
      response: { cells, checked: Boolean(this.checked) },
      score: this.checked ? Math.round((this.rightCount ?? 0) * perCell * 100) / 100 : null,
      maxScore: this.points,
      state: this.checked ? 'answered' : 'unanswered',
    };
  }
}

defineExercise('x-matrix', MatrixExercise);
