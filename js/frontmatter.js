// A deliberately tiny YAML-subset parser for content frontmatter.
//
// We support exactly what the course needs: `key: value` pairs at the top
// level, with optional quoting, plus inline `[a, b, c]` lists. Anything more
// (nesting, multi-line strings, anchors) is a signal that the data belongs in
// manifest.json or references.json instead of in a content file's header.
//
// Using a real YAML library here would add a dependency whose whole feature
// surface we would then have to keep working for the next decade.

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function coerce(raw) {
  const value = raw.trim();
  if (value === '') return '';
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;

  // Inline list: [a, b, c]
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1).trim();
    if (inner === '') return [];
    return inner.split(',').map((item) => coerce(item));
  }

  // Quoted string — return verbatim, no coercion.
  const quoted = /^(['"])([\s\S]*)\1$/.exec(value);
  if (quoted) return quoted[2];

  // Unquoted number.
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);

  return value;
}

/**
 * Split a document into its frontmatter object and remaining body.
 * A document with no frontmatter yields `{ data: {}, body: <whole doc> }`.
 */
export function parseFrontmatter(text) {
  const match = FRONTMATTER_RE.exec(text);
  if (!match) return { data: {}, body: text };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;

    const colon = trimmed.indexOf(':');
    if (colon === -1) continue;

    const key = trimmed.slice(0, colon).trim();
    if (key) data[key] = coerce(trimmed.slice(colon + 1));
  }

  return { data, body: text.slice(match[0].length) };
}
