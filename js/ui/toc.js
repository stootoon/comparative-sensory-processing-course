// In-page heading rail with scroll-spy.
//
// Sections here run long, so the reader needs to know where they are inside
// one. Scroll-spy updates the URL fragment via replaceState, never pushState —
// otherwise the back button walks through every heading the reader scrolled
// past, which makes leaving a page nearly impossible.

import { setAnchor } from '../router.js';

let observer = null;

export function mountToc(container, headings) {
  observer?.disconnect();

  const usable = [...headings].filter((h) => h.tagName === 'H2' || h.tagName === 'H3');

  if (usable.length < 2) {
    container.innerHTML = '';
    container.hidden = true;
    return;
  }
  container.hidden = false;

  container.innerHTML = `
    <div class="x-toc-title">On this page</div>
    <ul class="x-toc-list">
      ${usable
        .map(
          (heading) => `
        <li class="x-toc-item x-toc-${heading.tagName.toLowerCase()}">
          <a href="#${heading.id}" data-target="${heading.id}">${heading.textContent}</a>
        </li>`
        )
        .join('')}
    </ul>`;

  // Intercept clicks so we scroll smoothly and keep the route intact — a bare
  // href="#id" would replace the whole hash and destroy the current route.
  container.querySelectorAll('a[data-target]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setAnchor(link.dataset.target);
    })
  );

  const links = new Map(
    [...container.querySelectorAll('a[data-target]')].map((a) => [a.dataset.target, a])
  );

  const visible = new Set();

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }

      // Highlight the topmost heading currently on screen.
      const current = usable.find((heading) => visible.has(heading.id));
      for (const [id, link] of links) {
        link.classList.toggle('is-active', id === current?.id);
      }
      if (current) setAnchor(current.id);
    },
    { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
  );

  usable.forEach((heading) => observer.observe(heading));
}

export function unmountToc() {
  observer?.disconnect();
  observer = null;
}
