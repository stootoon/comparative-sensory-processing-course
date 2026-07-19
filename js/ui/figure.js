// <x-figure> — static SVG or interactive, lazily loaded.
//
// Figures are lazy via IntersectionObserver. A finished course has ~100
// interactive figures; evaluating every module's figure code upfront would
// make the first paint slow for no benefit, since a reader sees maybe three
// of them per session.
//
// An interactive figure is an ES module exporting { controls, draw }. The
// author writes the physics; plot.js handles axes and paths, and this handles
// loading, control wiring, and redraw.

import { url, authorError } from '../base.js';
import { createPlot, createControls, sample } from '../plot.js';
import { createDiagram } from '../diagram.js';

class FigureElement extends HTMLElement {
  connectedCallback() {
    if (this._initialised) return;
    this._initialised = true;

    this.src = this.getAttribute('src');
    this.caption = this.getAttribute('caption');
    this.classList.add('x-figure');

    this.canvasHost = document.createElement('div');
    this.canvasHost.className = 'x-figure-body';
    this.appendChild(this.canvasHost);

    if (this.caption) {
      const caption = document.createElement('figcaption');
      caption.className = 'x-figure-caption';
      caption.textContent = this.caption;
      this.appendChild(caption);
    }

    // Attribution travels with the image, not in a file nobody opens.
    // Reused images carry a licence obligation; rendering the credit next to
    // the figure is both the correct thing to do and the only way it stays
    // attached when someone screenshots a section.
    const credit = this.getAttribute('credit');
    if (credit) {
      const line = document.createElement('p');
      line.className = 'x-figure-credit';
      const source = this.getAttribute('source');
      line.textContent = credit;
      if (source) {
        line.append(' ');
        const link = document.createElement('a');
        link.href = source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'source ↗';
        line.appendChild(link);
      }
      this.appendChild(line);
    }

    this.canvasHost.innerHTML = '<div class="x-figure-loading">Loading figure…</div>';

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          this.#load();
        }
      },
      { rootMargin: '400px 0px' }   // start loading just before it scrolls in
    );
    observer.observe(this);
  }

  async #load() {
    if (!this.src) {
      this.canvasHost.innerHTML = '<div class="x-figure-error">No src</div>';
      return;
    }

    // Static SVG or raster: just show it. Anything not matching here is
    // treated as an ES module, so a missing extension in this list produces
    // a confusing "expected a JavaScript module, got image/gif" error.
    if (/\.(svg|png|jpe?g|gif|webp|avif)$/i.test(this.src)) {
      const img = document.createElement('img');
      img.src = url(this.src);
      img.alt = this.getAttribute('alt') ?? this.caption ?? '';
      img.loading = 'lazy';
      this.canvasHost.replaceChildren(img);
      return;
    }

    try {
      const module = await import(url(this.src));
      this.#mount(module);
    } catch (error) {
      authorError(this.src, `figure module failed: ${error.message}`);
      this.canvasHost.innerHTML = `<div class="x-figure-error">Figure failed to load: ${error.message}</div>`;
    }
  }

  #mount(module) {
    if (typeof module.draw !== 'function') {
      this.canvasHost.innerHTML =
        '<div class="x-figure-error">Figure module exports no draw()</div>';
      return;
    }

    this.canvasHost.replaceChildren();

    const plotHost = document.createElement('div');
    plotHost.className = 'x-figure-plot';

    const controlHost = document.createElement('div');
    controlHost.className = 'x-figure-controls';

    // Controls above the plot: on a phone the plot is tall, and controls
    // below it would sit off-screen while you are trying to see their effect.
    this.canvasHost.append(controlHost, plotHost);

    const redraw = (values) => {
      plotHost.replaceChildren();
      try {
        module.draw(plotHost, values, { createPlot, sample, createDiagram });
      } catch (error) {
        authorError(this.src, `draw() threw: ${error.message}`);
        plotHost.innerHTML = `<div class="x-figure-error">${error.message}</div>`;
      }
    };

    const values = Array.isArray(module.controls) && module.controls.length
      ? createControls(controlHost, module.controls, redraw)
      : {};

    redraw(values);
  }
}

if (!customElements.get('x-figure')) {
  customElements.define('x-figure', FigureElement);
}
