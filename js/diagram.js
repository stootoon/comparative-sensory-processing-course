// A small helper for hand-built circuit diagrams.
//
// Anatomy figures are drawn in code rather than shipped as static SVG files
// for three reasons: they inherit the theme (an .svg exported from Illustrator
// is stuck with whatever colours it was drawn in, and looks wrong in dark
// mode), they can be annotated interactively, and they stay editable by
// someone who can read JavaScript but does not own a drawing program.
//
// The vocabulary is deliberately neuroscience-shaped — soma, dendrite, axon,
// synapse, layer — so a figure module reads like a description of the circuit
// rather than a list of drawing commands.

const NS = 'http://www.w3.org/2000/svg';

const el = (name, attrs = {}) => {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) {
    if (v != null) node.setAttribute(k, String(v));
  }
  return node;
};

export function createDiagram(root, { width = 660, height = 420, title = null } = {}) {
  const svg = el('svg', {
    viewBox: `0 0 ${width} ${height}`,
    class: 'x-diagram',
    preserveAspectRatio: 'xMidYMid meet',
    role: 'img',
  });
  if (title) {
    const t = el('title');
    t.textContent = title;
    svg.appendChild(t);
  }

  // Layer order matters: bands behind, then connections, then cells, then
  // labels and callouts on top so nothing is ever obscured by a dendrite.
  const bands = el('g', { class: 'dg-bands' });
  const links = el('g', { class: 'dg-links' });
  const cells = el('g', { class: 'dg-cells' });
  const labels = el('g', { class: 'dg-labels' });
  const notes = el('g', { class: 'dg-notes' });
  svg.append(bands, links, cells, labels, notes);
  root.appendChild(svg);

  const api = {
    svg,
    width,
    height,

    /**
     * A horizontal anatomical layer, e.g. "outer plexiform layer".
     * `extent` bounds how far right the band runs, so the annotation column
     * on the right stays visually separate from the anatomy on the left.
     */
    layer(y, h, label, { className = '', labelSide = 'left', extent = width } = {}) {
      bands.appendChild(
        el('rect', { x: 0, y, width: extent, height: h, class: `dg-layer ${className}` })
      );
      if (label) {
        const t = el('text', {
          x: labelSide === 'left' ? 8 : extent - 8,
          y: y + 13,
          'text-anchor': labelSide === 'left' ? 'start' : 'end',
          class: 'dg-layer-label',
        });
        t.textContent = label;
        labels.appendChild(t);
      }
    },

    /** A neuron: soma plus optional dendritic spread and axon. */
    cell(x, y, {
      r = 9,
      className = '',
      label = null,
      labelDx = 0,
      labelDy = -15,
      dendrites = null,   // { width, height, up: true }
      axon = null,        // { to: y2, terminal: true }
    } = {}) {
      if (dendrites) {
        const { width: dw = 40, height: dh = 22, up = true } = dendrites;
        const dir = up ? -1 : 1;
        const d = `M${x - dw / 2},${y + dir * dh} Q${x},${y + dir * dh * 0.3} ${x},${y}
                   M${x + dw / 2},${y + dir * dh} Q${x},${y + dir * dh * 0.3} ${x},${y}
                   M${x},${y + dir * dh * 1.05} L${x},${y}`;
        cells.appendChild(el('path', { d, class: `dg-dendrite ${className}` }));
      }

      if (axon) {
        const { to, terminal = true } = axon;
        cells.appendChild(
          el('line', { x1: x, y1: y, x2: x, y2: to, class: `dg-axon ${className}` })
        );
        if (terminal) {
          cells.appendChild(
            el('circle', { cx: x, cy: to, r: 3.2, class: `dg-terminal ${className}` })
          );
        }
      }

      cells.appendChild(el('circle', { cx: x, cy: y, r, class: `dg-soma ${className}` }));

      if (label) {
        const t = el('text', {
          x: x + labelDx,
          y: y + labelDy,
          'text-anchor': 'middle',
          class: `dg-cell-label ${className}`,
        });
        t.textContent = label;
        labels.appendChild(t);
      }
      return { x, y };
    },

    /** A connection between two points. Sign controls the terminal glyph. */
    connect(from, to, { sign = 'excite', className = '', curve = 0 } = {}) {
      const d = curve
        ? `M${from.x},${from.y} Q${(from.x + to.x) / 2 + curve},${(from.y + to.y) / 2} ${to.x},${to.y}`
        : `M${from.x},${from.y} L${to.x},${to.y}`;
      links.appendChild(
        el('path', { d, class: `dg-link dg-${sign} ${className}`, fill: 'none' })
      );

      // Excitatory connections end in an arrowhead, inhibitory in a bar —
      // the convention every reader of this literature already knows.
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      if (sign === 'inhibit') {
        const bar = 5;
        links.appendChild(
          el('line', {
            x1: to.x - bar * Math.sin(angle), y1: to.y + bar * Math.cos(angle),
            x2: to.x + bar * Math.sin(angle), y2: to.y - bar * Math.cos(angle),
            class: `dg-terminal-bar ${className}`,
          })
        );
      } else {
        const s = 5;
        links.appendChild(
          el('path', {
            d: `M${to.x},${to.y} L${to.x - s * Math.cos(angle - 0.45)},${to.y - s * Math.sin(angle - 0.45)} L${to.x - s * Math.cos(angle + 0.45)},${to.y - s * Math.sin(angle + 0.45)} Z`,
            class: `dg-arrowhead ${className}`,
          })
        );
      }
    },

    /** A glomerulus, or any other blob-shaped neuropil structure. */
    blob(x, y, r, { label = null, className = '' } = {}) {
      cells.appendChild(el('circle', { cx: x, cy: y, r, class: `dg-blob ${className}` }));
      if (label) {
        const t = el('text', {
          x, y: y + 3.5, 'text-anchor': 'middle', class: `dg-blob-label ${className}`,
        });
        t.textContent = label;
        labels.appendChild(t);
      }
      return { x, y };
    },

    text(x, y, content, { anchor = 'middle', className = '' } = {}) {
      const t = el('text', { x, y, 'text-anchor': anchor, class: `dg-text ${className}` });
      t.textContent = content;
      labels.appendChild(t);
      return t;
    },

    /**
     * A computational annotation: the whole point of these diagrams.
     * Anatomy on the left, what it computes called out on the right.
     */
    note(x, y, lines, { anchor = 'start', className = '' } = {}) {
      const arr = Array.isArray(lines) ? lines : [lines];
      arr.forEach((line, i) => {
        const t = el('text', {
          x, y: y + i * 13,
          'text-anchor': anchor,
          class: `dg-note ${className}${i === 0 ? ' is-head' : ''}`,
        });
        t.textContent = line;
        notes.appendChild(t);
      });
    },

    bracket(x, y1, y2, label, { side = 'right', className = '' } = {}) {
      const w = side === 'right' ? 7 : -7;
      notes.appendChild(
        el('path', {
          d: `M${x},${y1} L${x + w},${y1} L${x + w},${y2} L${x},${y2}`,
          class: `dg-bracket ${className}`, fill: 'none',
        })
      );
      const t = el('text', {
        x: x + w * 1.9, y: (y1 + y2) / 2 + 4,
        'text-anchor': side === 'right' ? 'start' : 'end',
        class: `dg-bracket-label ${className}`,
      });
      t.textContent = label;
      notes.appendChild(t);
    },
  };

  return api;
}
