/**
 * Menjaga public/admin/config.yml tetap sejalan dengan skema konten.
 *
 * Kalau field ditambah di src/lib/site.ts atau src/content.config.ts tapi lupa
 * ditambahkan ke config.yml, editor akan menyimpan data yang tidak lengkap dan
 * build baru gagal setelah perubahan itu ter-commit. Skrip ini memindahkan
 * kegagalan tersebut ke sini, sebelum apa pun dikirim.
 *
 * Jalankan: npm run verify:cms
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const read = (p) => readFileSync(p, 'utf8');
const problems = [];

const config = parse(read('public/admin/config.yml'));
const site = JSON.parse(read('src/data/site.json'));

const collections = Object.fromEntries(config.collections.map((c) => [c.name, c]));
const names = (fields) => new Set(fields.map((f) => f.name));
const diff = (a, b) => [...a].filter((x) => !b.has(x)).sort();

// --- site.json <-> koleksi "Pengaturan Situs" ---
const profile = collections.site.files[0];
const cmsTop = names(profile.fields);
const jsonTop = new Set(Object.keys(site));

for (const key of diff(jsonTop, cmsTop)) {
  problems.push(`site.json punya "${key}" tapi config.yml tidak — field itu tidak bisa diedit lewat /admin.`);
}
for (const key of diff(cmsTop, jsonTop)) {
  problems.push(`config.yml punya "${key}" tapi site.json tidak — menyimpannya akan menambah key liar.`);
}

for (const field of profile.fields) {
  if (field.widget !== 'object') continue;
  const cms = names(field.fields);
  const data = new Set(Object.keys(site[field.name] ?? {}));
  for (const key of diff(data, cms)) problems.push(`site.${field.name}.${key} tidak ada di config.yml`);
  for (const key of diff(cms, data)) problems.push(`config.yml site.${field.name}.${key} tidak ada di site.json`);
}

// --- frontmatter yang ada <-> definisi koleksi ---
const frontmatter = (path) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(read(path));
  return match ? (parse(match[1]) ?? {}) : {};
};

for (const [name, dir] of [
  ['projects', 'src/content/projects'],
  ['testimonials', 'src/content/testimonials'],
]) {
  const collection = collections[name];
  const known = names(collection.fields);
  known.delete('body'); // body = isi markdown, bukan frontmatter

  const selects = collection.fields.filter((f) => f.widget === 'select');

  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const path = join(dir, file);
    const data = frontmatter(path);

    for (const key of diff(new Set(Object.keys(data)), known)) {
      problems.push(`${path}: field "${key}" tidak dikenal config.yml`);
    }

    for (const field of selects) {
      const value = data[field.name];
      if (value === undefined) continue;
      const options = field.options.map((o) => (typeof o === 'object' ? o.value : o));
      if (!options.includes(value)) {
        problems.push(`${path}: ${field.name}="${value}" bukan salah satu opsi ${JSON.stringify(options)}`);
      }
    }
  }
}

if (problems.length > 0) {
  console.error('config.yml tidak sejalan dengan skema konten:\n');
  for (const p of problems) console.error(`  - ${p}`);
  console.error('');
  process.exit(1);
}

console.log('verify:cms — config.yml, site.json, dan frontmatter konsisten.');
