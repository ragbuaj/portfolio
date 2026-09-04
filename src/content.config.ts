import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Skema konten. Ini kontrak antara Decap CMS (public/admin/config.yml) dan
 * template Astro: kalau field ditambah di sini, tambahkan juga di config.yml.
 * `npm run verify:cms` akan gagal kalau keduanya tidak sinkron.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Baris kecil di bawah judul, mis. "Nuxt + Postgres · 2025". */
      stack: z.string().optional(),
      year: z.number().int().min(1990).max(2100),
      summary: z.string().optional(),

      /** Label kiri-atas kartu gelap, mis. "Studi kasus 02". */
      kicker: z.string().optional(),
      /** Label kanan-atas kartu gelap, mis. "Internal". */
      badge: z.string().optional(),

      cover: image().optional(),
      coverAlt: z.string().default(''),
      /** Teks di kotak placeholder saat `cover` belum diisi. */
      coverLabel: z.string().default('screenshot — 16:10'),

      /**
       * Tampilan kartu di dalam carousel. Semua kartu berukuran sama;
       * varian hanya mengubah warna dan susunan isinya supaya deretannya
       * tidak monoton.
       */
      variant: z.enum(['showcase', 'feature', 'compact']).default('showcase'),

      url: z.url().optional(),
      repo: z.url().optional(),

      order: z.number().int().default(999),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    /* coerce: tahun polos seperti 2024 dibaca YAML sebagai angka, padahal
       field ini juga harus menerima "Jan 2024". */
    start: z.coerce.string(),
    /** Kosongkan kalau masih berjalan — akan tampil sebagai "sekarang". */
    end: z.coerce.string().default(''),
    /** Isi markdown-nya dipakai sebagai keterangan singkat. */
    order: z.number().int().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
