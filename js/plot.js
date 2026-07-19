// A small SVG plotting helper, owned in-repo.
//
// Not D3: ~250 KB, an API that has broken across every major version, and we
// would use maybe 4% of it — which is the ~300 lines below. Not Plotly or
// Chart.js: megabyte-class, opinionated about styling, and they produce charts
// that look like dashboards rather than figures in a neuroscience paper.
//
// Owning this means the figures look consistent, they print, they respond to
// dark mode through CSS custom properties, and the 2031 version of this repo
// can still read the code.
//
// Figure authors write physics; this handles axes, scales, and paths.

const NS = 'http://www.w3.org/2000/svg';

// clipPath ids must be unique per document, since several figures coexist.
let clipCounter = 0;

const el = (name, attrs = {}) => {
  const node = document.createElementNS(NS, name);
  for (const [key, value] of Object.entries(attrs)) {
    if (value != null) node.setAttribute(key, String(value));
  }
  return node;
};

function niceTicks(min, max, target = 5) {
  const span = max - min;
  if (span <= 0 || !Number.isFinite(span)) return [min];

  const rough = span / target;
  const magnitude = 10 ** Math.floor(Math.log10(rough));
  const normalised = rough / magnitude;
  const step =
    (normalised >= 7.5 ? 10 : normalised >= 3.5 ? 5 : normalised >= 1.5 ? 2 : 1) * magnitude;

  const ticks = [];
  for (let value = Math.ceil(min / step) * step; value <= max + step * 1e-9; value += step) {
    ticks.push(Math.round(value / step) * step);
  }
  return ticks;
}

const formatTick = (value) => {
  if (value === 0) return '0';
  const abs = Math.abs(value);
  if (abs >= 1e4 || abs < 1e-3) return value.toExponential(0).replace('e+', 'e');
  return String(Math.round(value * 1000) / 1000);
};

/** Uniformly sample fn over [from, to]; returns [[x, y], ...]. */
export function sample(from, to, count, fn) {
  const points = [];
  for (let i = 0; i < count; i += 1) {
    const x = from + ((to - from) * i) / (count - 1);
    points.push([x, fn(x)]);
  }
  return points;
}

export function createPlot(root, options = {}) {
  const {
    width = 640,
    height = 360,
    margin = { top: 16, right: 18, bottom: 46, left: 62 },
    x = {},
    y = {},
    title = null,
  } = options;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xLog = x.scale === 'log';
  const yLog = y.scale === 'log';

  const [x0, x1] = x.domain ?? [0, 1];
  const [y0, y1] = y.domain ?? [0, 1];

  const tx = (value) => {
    const a = xLog ? Math.log10(value) : value;
    const lo = xLog ? Math.log10(x0) : x0;
    const hi = xLog ? Math.log10(x1) : x1;
    return margin.left + ((a - lo) / (hi - lo)) * innerWidth;
  };
  const ty = (value) => {
    const a = yLog ? Math.log10(value) : value;
    const lo = yLog ? Math.log10(y0) : y0;
    const hi = yLog ? Math.log10(y1) : y1;
    return margin.top + innerHeight - ((a - lo) / (hi - lo)) * innerHeight;
  };

  const svg = el('svg', {
    viewBox: `0 0 ${width} ${height}`,
    class: 'x-plot',
    preserveAspectRatio: 'xMidYMid meet',
    role: 'img',
  });
  if (title) {
    const titleNode = el('title');
    titleNode.textContent = title;
    svg.appendChild(titleNode);
  }

  // Data is clipped to the plotting rectangle. Without this, any curve that
  // runs off the top or bottom of the domain keeps drawing across the axis
  // labels and the legend — which happens routinely once a figure has sliders
  // and the reader pushes a parameter to an extreme.
  const clipId = `x-plot-clip-${(clipCounter += 1)}`;
  const defs = el('defs');
  const clipPath = el('clipPath', { id: clipId });
  clipPath.appendChild(
    el('rect', {
      x: margin.left,
      y: margin.top,
      width: innerWidth,
      height: innerHeight,
    })
  );
  defs.appendChild(clipPath);

  const gridLayer = el('g', { class: 'x-plot-grid' });
  const dataLayer = el('g', { class: 'x-plot-data', 'clip-path': `url(#${clipId})` });
  const axisLayer = el('g', { class: 'x-plot-axes' });
  const annotationLayer = el('g', {
    class: 'x-plot-annotations',
    'clip-path': `url(#${clipId})`,
  });
  svg.append(defs, gridLayer, dataLayer, axisLayer, annotationLayer);

  // --- axes ---------------------------------------------------------------
  const xTicks = xLog
    ? logTicks(x0, x1)
    : (x.ticks ?? niceTicks(x0, x1, x.tickCount ?? 6));
  const yTicks = yLog
    ? logTicks(y0, y1)
    : (y.ticks ?? niceTicks(y0, y1, y.tickCount ?? 5));

  for (const tick of xTicks) {
    if (tick < Math.min(x0, x1) || tick > Math.max(x0, x1)) continue;
    const px = tx(tick);
    gridLayer.appendChild(
      el('line', { x1: px, x2: px, y1: margin.top, y2: margin.top + innerHeight })
    );
    const label = el('text', {
      x: px,
      y: margin.top + innerHeight + 18,
      'text-anchor': 'middle',
      class: 'x-plot-tick',
    });
    label.textContent = x.tickFormat ? x.tickFormat(tick) : formatTick(tick);
    axisLayer.appendChild(label);
  }

  for (const tick of yTicks) {
    if (tick < Math.min(y0, y1) || tick > Math.max(y0, y1)) continue;
    const py = ty(tick);
    gridLayer.appendChild(
      el('line', { x1: margin.left, x2: margin.left + innerWidth, y1: py, y2: py })
    );
    const label = el('text', {
      x: margin.left - 9,
      y: py + 4,
      'text-anchor': 'end',
      class: 'x-plot-tick',
    });
    label.textContent = y.tickFormat ? y.tickFormat(tick) : formatTick(tick);
    axisLayer.appendChild(label);
  }

  axisLayer.appendChild(
    el('line', {
      class: 'x-plot-axis',
      x1: margin.left,
      x2: margin.left + innerWidth,
      y1: margin.top + innerHeight,
      y2: margin.top + innerHeight,
    })
  );
  axisLayer.appendChild(
    el('line', {
      class: 'x-plot-axis',
      x1: margin.left,
      x2: margin.left,
      y1: margin.top,
      y2: margin.top + innerHeight,
    })
  );

  if (x.label) {
    const label = el('text', {
      x: margin.left + innerWidth / 2,
      y: height - 8,
      'text-anchor': 'middle',
      class: 'x-plot-label',
    });
    label.textContent = x.label;
    axisLayer.appendChild(label);
  }
  if (y.label) {
    const label = el('text', {
      x: 14,
      y: margin.top + innerHeight / 2,
      'text-anchor': 'middle',
      class: 'x-plot-label',
      transform: `rotate(-90 14 ${margin.top + innerHeight / 2})`,
    });
    label.textContent = y.label;
    axisLayer.appendChild(label);
  }

  root.appendChild(svg);

  // --- drawing API --------------------------------------------------------
  const api = {
    svg,
    tx,
    ty,
    width,
    height,
    innerWidth,
    innerHeight,
    margin,

    line(points, { className = 'series-1', dashed = false, width: strokeWidth } = {}) {
      const usable = points.filter(
        ([px, py]) => Number.isFinite(px) && Number.isFinite(py)
      );
      if (usable.length < 2) return null;

      const d = usable
        .map(([px, py], index) => `${index === 0 ? 'M' : 'L'}${tx(px).toFixed(2)},${ty(py).toFixed(2)}`)
        .join(' ');

      const path = el('path', {
        d,
        class: `x-plot-line ${className}${dashed ? ' is-dashed' : ''}`,
        'stroke-width': strokeWidth,
        fill: 'none',
      });
      dataLayer.appendChild(path);
      return path;
    },

    area(points, { className = 'series-1', baseline } = {}) {
      const usable = points.filter(([px, py]) => Number.isFinite(px) && Number.isFinite(py));
      if (usable.length < 2) return null;

      const floor = baseline ?? Math.min(y0, y1);
      const d = [
        `M${tx(usable[0][0]).toFixed(2)},${ty(floor).toFixed(2)}`,
        ...usable.map(([px, py]) => `L${tx(px).toFixed(2)},${ty(py).toFixed(2)}`),
        `L${tx(usable[usable.length - 1][0]).toFixed(2)},${ty(floor).toFixed(2)}`,
        'Z',
      ].join(' ');

      const path = el('path', { d, class: `x-plot-area ${className}` });
      dataLayer.appendChild(path);
      return path;
    },

    points(list, { className = 'series-1', radius = 3.5 } = {}) {
      for (const [px, py] of list) {
        if (!Number.isFinite(px) || !Number.isFinite(py)) continue;
        dataLayer.appendChild(
          el('circle', { cx: tx(px), cy: ty(py), r: radius, class: `x-plot-dot ${className}` })
        );
      }
    },

    bars(list, { className = 'series-1', barWidth = 6 } = {}) {
      const floor = ty(Math.min(y0, y1));
      for (const [px, py] of list) {
        if (!Number.isFinite(py)) continue;
        const top = ty(py);
        dataLayer.appendChild(
          el('rect', {
            x: tx(px) - barWidth / 2,
            y: Math.min(top, floor),
            width: barWidth,
            height: Math.abs(floor - top),
            class: `x-plot-bar ${className}`,
          })
        );
      }
    },

    vline(value, { className = 'marker', label = null, dashed = true } = {}) {
      const px = tx(value);
      annotationLayer.appendChild(
        el('line', {
          x1: px,
          x2: px,
          y1: margin.top,
          y2: margin.top + innerHeight,
          class: `x-plot-marker ${className}${dashed ? ' is-dashed' : ''}`,
        })
      );
      if (label) {
        // Flip the label to the left of the line when the line sits near the
        // right edge, or it runs off the viewBox and gets clipped.
        const nearRightEdge = px > margin.left + innerWidth * 0.72;
        const text = el('text', {
          x: nearRightEdge ? px - 5 : px + 5,
          y: margin.top + 13,
          'text-anchor': nearRightEdge ? 'end' : 'start',
          class: 'x-plot-annotation',
        });
        text.textContent = label;
        annotationLayer.appendChild(text);
      }
    },

    hline(value, { className = 'marker', label = null, dashed = true } = {}) {
      const py = ty(value);
      annotationLayer.appendChild(
        el('line', {
          x1: margin.left,
          x2: margin.left + innerWidth,
          y1: py,
          y2: py,
          class: `x-plot-marker ${className}${dashed ? ' is-dashed' : ''}`,
        })
      );
      if (label) {
        const text = el('text', { x: margin.left + 6, y: py - 6, class: 'x-plot-annotation' });
        text.textContent = label;
        annotationLayer.appendChild(text);
      }
    },

    annotate(px, py, text, { anchor = 'start', className = '' } = {}) {
      const node = el('text', {
        x: tx(px),
        y: ty(py),
        'text-anchor': anchor,
        class: `x-plot-annotation ${className}`,
      });
      node.textContent = text;
      annotationLayer.appendChild(node);
      return node;
    },

    /**
     * Legends render as an HTML row BELOW the plot, not inside it.
     *
     * An in-plot legend has to be positioned somewhere, and whichever corner
     * you pick, some parameter setting eventually drives a curve through it.
     * Putting it outside removes the collision problem by construction, and it
     * reflows on narrow screens for free.
     */
    legend(items) {
      const row = document.createElement('div');
      row.className = 'x-plot-legend-row';
      for (const item of items) {
        const entry = document.createElement('span');
        entry.className = 'x-plot-legend-item';
        entry.innerHTML =
          `<span class="x-plot-legend-swatch ${item.className ?? 'series-1'}"${
            item.dashed ? ' data-dashed="true"' : ''
          }></span>${item.label}`;
        row.appendChild(entry);
      }
      root.appendChild(row);
      return row;
    },
  };

  return api;
}

function logTicks(min, max) {
  const ticks = [];
  const lo = Math.floor(Math.log10(min));
  const hi = Math.ceil(Math.log10(max));
  for (let power = lo; power <= hi; power += 1) ticks.push(10 ** power);
  return ticks;
}

/** Build the slider row that drives a figure. Returns a values object. */
export function createControls(root, specs, onChange) {
  const values = {};
  const panel = document.createElement('div');
  panel.className = 'x-controls';

  for (const spec of specs) {
    values[spec.id] = spec.value;

    const row = document.createElement('label');
    row.className = 'x-control';

    const name = document.createElement('span');
    name.className = 'x-control-label';
    name.textContent = spec.label;

    const readout = document.createElement('output');
    readout.className = 'x-control-value';
    readout.textContent = spec.format ? spec.format(spec.value) : spec.value;

    if (spec.type === 'select') {
      const select = document.createElement('select');
      select.className = 'x-control-select';
      for (const option of spec.options) {
        const node = document.createElement('option');
        node.value = option.value;
        node.textContent = option.label;
        if (option.value === spec.value) node.selected = true;
        select.appendChild(node);
      }
      select.addEventListener('change', () => {
        values[spec.id] = select.value;
        readout.textContent = '';
        onChange(values);
      });
      row.append(name, select);
    } else {
      const input = document.createElement('input');
      input.type = 'range';
      input.className = 'x-control-slider';
      input.min = spec.min;
      input.max = spec.max;
      input.step = spec.step ?? 0.1;
      input.value = spec.value;
      input.addEventListener('input', () => {
        values[spec.id] = Number(input.value);
        readout.textContent = spec.format
          ? spec.format(values[spec.id])
          : values[spec.id];
        onChange(values);
      });
      row.append(name, input, readout);
    }

    panel.appendChild(row);
  }

  root.appendChild(panel);
  return values;
}
