#!/usr/bin/env node
// Static checks over the content tree. No browser, no server — run it after
// editing content and before pushing:
//
//     node tools/check-content.mjs
//
// Every check here exists because the corresponding mistake shipped at least
// once and was invisible on the page. `?dev=1` catches problems that surface at
// runtime; these are the ones that render as plausible-looking output.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];
const fail = (file, message) => problems.push(`${file}: ${message}`);

const walk = (dir, ext) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path, ext) : path.endsWith(ext) ? [path] : [];
  });

const rel = (path) => path.replace(`${ROOT}/`, '');
const markdown = walk(join(ROOT, 'content'), '.md');
const figures = walk(join(ROOT, 'content'), '.js');
const refs = JSON.parse(readFileSync(join(ROOT, 'content/references.json'), 'utf8'));

// --- citations ------------------------------------------------------------
const cited = new Set();
for (const file of markdown) {
  for (const m of readFileSync(file, 'utf8').matchAll(/\[@([^\]]+)\]/g)) {
    for (const key of m[1].split(';')) {
      const k = key.trim().replace(/^@/, '');
      cited.add(k);
      if (!refs[k]) fail(rel(file), `cites unknown reference "${k}"`);
    }
  }
}
for (const [key, entry] of Object.entries(refs)) {
  if (!cited.has(key)) fail('content/references.json', `"${key}" is never cited`);
  if (!entry.doi && !entry.url) fail('content/references.json', `"${key}" has no DOI or URL`);
}

// Figure modules append their notes as raw HTML and never pass through the
// citation pipeline, so a [@key] in one renders literally on the page. This
// shipped in three figures and was visible to readers.
for (const file of figures) {
  if (/\[@[^\]]+\]/.test(readFileSync(file, 'utf8'))) {
    fail(rel(file), 'contains [@key]; figure notes are not citation-processed — write the author and year out');
  }
}

// --- exercises ------------------------------------------------------------
const ids = new Map();
for (const file of markdown) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(/<(x-[a-z-]+)>\s*<script type="application\/json">([\s\S]*?)<\/script>/g)) {
    let config;
    try {
      config = JSON.parse(m[2]);
    } catch (error) {
      fail(rel(file), `unparseable exercise config: ${error.message}`);
      continue;
    }
    if (!config.id) {
      fail(rel(file), `${m[1]} has no id`);
      continue;
    }
    // Exercise ids are the progress store's primary keys; a duplicate silently
    // makes two exercises share one saved answer.
    if (ids.has(config.id)) fail(rel(file), `duplicate exercise id "${config.id}" (also in ${ids.get(config.id)})`);
    ids.set(config.id, rel(file));

    // Anything the component feeds to the inline renderer must be a string.
    // Objects stringify to "[object Object]", which is valid DOM and therefore
    // invisible to a render sweep — it shipped in 25 of 29 x-order exercises.
    if (m[1] === 'x-order') {
      const items = config.items ?? [];
      items.forEach((item, i) => {
        if (typeof item !== 'string' && typeof item?.text !== 'string') {
          fail(rel(file), `${config.id} item ${i} has no text`);
        }
      });
      if (config.correctOrder) {
        const keys = items.map((item, i) => (typeof item === 'string' ? String(i) : item.id));
        if (config.correctOrder.length !== keys.length || config.correctOrder.some((k) => !keys.includes(k))) {
          fail(rel(file), `${config.id} correctOrder is not a permutation of the item ids`);
        }
      }
    }
    if (m[1] === 'x-mcq') {
      (config.options ?? []).forEach((option, i) => {
        if (typeof option?.text !== 'string') fail(rel(file), `${config.id} option ${i} has no text`);
      });
    }
  }
}

// --- assets and structure -------------------------------------------------
for (const file of markdown) {
  for (const m of readFileSync(file, 'utf8').matchAll(/src="(content\/[^"]+)"/g)) {
    if (!existsSync(join(ROOT, m[1]))) fail(rel(file), `missing asset ${m[1]}`);
  }
}

const manifest = JSON.parse(readFileSync(join(ROOT, 'content/manifest.json'), 'utf8'));
const known = new Set();
for (const module of manifest.modules) {
  for (const sub of module.subsections) {
    if (known.has(sub.id)) fail('content/manifest.json', `duplicate subsection id "${sub.id}"`);
    known.add(sub.id);
    // `file` is relative to the module's own `dir`, not to content/.
    if (sub.file && !existsSync(join(ROOT, 'content', module.dir, sub.file))) {
      fail('content/manifest.json', `"${sub.id}" points at missing file ${module.dir}/${sub.file}`);
    }
  }
}

// Only these two callout classes have CSS; any other renders unstyled.
for (const file of markdown) {
  for (const m of readFileSync(file, 'utf8').matchAll(/<x-callout class="([^"]*)"/g)) {
    const extra = m[1].split(/\s+/).filter((c) => c && c !== 'x-callout' && c !== 'is-key' && c !== 'is-invertebrate');
    if (extra.length) fail(rel(file), `callout class "${extra.join(' ')}" has no CSS`);
  }
}

// --- report ---------------------------------------------------------------
console.log(
  `${markdown.length} sections, ${figures.length} figure modules, ` +
  `${ids.size} exercises, ${Object.keys(refs).length} references`
);
if (problems.length === 0) {
  console.log('no problems found');
  process.exit(0);
}
console.log(`\n${problems.length} problem(s):`);
for (const p of problems) console.log('  ' + p);
process.exit(1);
