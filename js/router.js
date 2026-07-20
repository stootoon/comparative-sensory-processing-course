// Hash-based router.
//
// Hash routing rather than the History API because GitHub Pages serves no
// rewrite rules: a History-API deep link 404s on hard refresh, and the
// 404.html workaround produces a redirect flash and breaks in obscure ways.
//
// The second reason is that in-page anchors live in the fragment anyway. One
// router owning both the route and the heading anchor keeps them coherent
// instead of fighting each other:
//
//   #/vision/receptor-array#tuning-breadth
//    \_______ route _______/ \__ anchor __/

const listeners = new Set();

export function parseHash(hash = location.hash) {
  const raw = hash.replace(/^#/, '');
  if (!raw || raw === '/') return { name: 'home', anchor: null };

  const [routePart, anchor = null] = raw.split('#');
  const segments = routePart.split('/').filter(Boolean);

  if (segments.length === 0) return { name: 'home', anchor };
  if (segments[0] === 'bibliography') return { name: 'bibliography', anchor };
  if (segments[0] === 'progress') return { name: 'progress', anchor };
  if (segments[0] === 'notes') return { name: 'notes', anchor };
  if (segments.length === 1) return { name: 'module', moduleSlug: segments[0], anchor };

  return {
    name: 'subsection',
    moduleSlug: segments[0],
    subsectionSlug: segments[1],
    anchor,
  };
}

export const onRouteChange = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

function emit() {
  const route = parseHash();
  for (const listener of listeners) listener(route);
}

export function startRouter() {
  window.addEventListener('hashchange', emit);
  emit();
}

export function navigate(hash, { replace = false } = {}) {
  const target = hash.startsWith('#') ? hash : `#${hash}`;
  if (location.hash === target) return;
  if (replace) {
    history.replaceState(null, '', target);
    emit();
  } else {
    location.hash = target;
  }
}

/**
 * Update the anchor portion without adding a history entry.
 * Scroll-spy calls this continuously as the reader moves down a section, so
 * it must never push — otherwise the back button walks through every heading.
 */
export function setAnchor(anchor) {
  const route = parseHash();
  if (route.name !== 'subsection') return;
  const base = `#/${route.moduleSlug}/${route.subsectionSlug}`;
  const next = anchor ? `${base}#${anchor}` : base;
  if (location.hash !== next) history.replaceState(null, '', next);
}
