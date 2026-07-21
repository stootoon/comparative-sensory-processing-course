// Drives every <x-order> in the course to its correct answer through the UI.
import { chromium } from 'playwright-core';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '/Users/sinatootoonian/git/comparative-sensory-processing-course';
const BASE = 'http://localhost:8127';

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

// section id -> route, from the manifest (the only definition of structure)
const manifest = JSON.parse(readFileSync(join(ROOT, 'content/manifest.json'), 'utf8'));
const route = new Map();
for (const m of manifest.modules)
  for (const s of m.subsections) route.set(s.id, `#/${m.slug}/${s.slug}`);

const cases = [];
for (const file of walk(join(ROOT, 'content'))) {
  const src = readFileSync(file, 'utf8');
  const sec = /^---\n[\s\S]*?\bid:\s*(\S+)/m.exec(src)?.[1];
  for (const m of src.matchAll(
    /<x-order>\s*<script type="application\/json">([\s\S]*?)<\/script>/g
  )) {
    const cfg = JSON.parse(m[1]);
    const items = cfg.items.map((it, i) =>
      typeof it === 'string' ? { id: String(i), text: it } : it
    );
    const byId = new Map(items.map((it) => [it.id, it.text]));
    const correct = cfg.correctOrder ? cfg.correctOrder.map((id) => byId.get(id)) : items.map((i) => i.text);
    cases.push({ file: file.replace(ROOT + '/', ''), sec, id: cfg.id, correct, route: route.get(sec) });
  }
}

const norm = (s) => s.replace(/\s+/g, ' ').trim();

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
await ctx.route('**/content/**', (r) => r.continue()); // no caching surprises
const page = await ctx.newPage();
const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(e.message));

let pass = 0;
const fails = [];

for (const c of cases) {
  const fail = (msg) => fails.push(`${c.id} (${c.file}): ${msg}`);
  if (!c.route) { fail('no route in manifest'); continue; }

  await page.goto(`${BASE}/${c.route}`, { waitUntil: 'domcontentloaded' });
  const list = page.locator('x-order .x-order-list').first();
  try {
    await list.waitFor({ timeout: 15000 });
    await page.waitForFunction(
      () => document.querySelectorAll('x-order .x-order-item').length > 0,
      null,
      { timeout: 15000 }
    );
  } catch { fail('exercise never rendered'); continue; }

  const texts = async () =>
    (await page.locator('x-order .x-order-text').allTextContents()).map(norm);

  let shown = await texts();
  if (shown.some((t) => t.includes('[object Object]'))) { fail('renders [object Object]'); continue; }
  if (shown.length !== c.correct.length) { fail(`shows ${shown.length} items, authored ${c.correct.length}`); continue; }

  const want = c.correct.map(norm);
  const missing = want.filter((t) => !shown.includes(t));
  if (missing.length) { fail(`item text not displayed: ${missing[0].slice(0, 60)}`); continue; }
  if (shown.every((t, i) => t === want[i])) { fail('starts already solved — not scrambled'); continue; }

  // Selection sort through the up buttons, the way a reader would.
  for (let p = 0; p < want.length; p += 1) {
    shown = await texts();
    let q = shown.indexOf(want[p]);
    while (q > p) {
      await page.locator('x-order .x-order-item').nth(q).locator('[data-move="up"]').click();
      q -= 1;
      await page.waitForFunction(
        ([pos, txt]) =>
          (document.querySelectorAll('x-order .x-order-text')[pos]?.textContent || '')
            .replace(/\s+/g, ' ').trim() === txt,
        [q, want[p]],
        { timeout: 5000 }
      ).catch(() => {});
    }
  }

  shown = await texts();
  if (!shown.every((t, i) => t === want[i])) { fail('could not reach the correct order via the buttons'); continue; }

  await page.locator('x-order .x-submit').first().click();
  const verdict = norm(await page.locator('x-order .x-verdict').first().textContent());
  if (!/^Correct order/.test(verdict)) { fail(`graded wrong when correct: "${verdict.slice(0, 80)}"`); continue; }

  const noteShown = await page.locator('x-order .x-reveal-body').first().isVisible().catch(() => false);

  // Reload and confirm the solved order survives.
  // Query BEFORE the hash, or the browser treats this as a same-page fragment
  // change and never reloads — which would make this assertion test memory.
  await page.goto(`${BASE}/?r=${Date.now()}${c.route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelectorAll('x-order .x-order-item').length > 0, null, { timeout: 15000 });
  const after = await texts();
  if (!after.every((t, i) => t === want[i])) { fail('answer did not survive reload'); continue; }

  pass += 1;
  process.stdout.write(`  ok  ${c.id.padEnd(14)} ${String(want.length).padStart(2)} items  note=${noteShown ? 'shown' : 'none'}\n`);
}

console.log(`\n${pass}/${cases.length} passed`);
if (fails.length) { console.log('\nFAILURES'); fails.forEach((f) => console.log('  ' + f)); }
if (pageErrors.length) console.log('\nPAGE ERRORS\n  ' + [...new Set(pageErrors)].join('\n  '));
await browser.close();
process.exit(fails.length ? 1 : 0);
