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

      /** Label kecil di pojok kartu, mis. "Internal". */
      badge: z.string().optional(),

      cover: image().optional(),
      coverAlt: z.string().default(''),

      /**
       * Warna kartu saat proyeknya belum punya gambar sampul. Susunan isinya
       * ditentukan oleh ada-tidaknya `cover`, bukan oleh field ini.
       *
       * Teks mengikuti warna latar demi keterbacaan: latar gelap memakai teks
       * krem (rasio 16,9:1), latar berwarna memakai teks tinta (6,7-13,2:1).
       * Teks krem di atas latar berwarna hanya 2,2-2,5:1 dan tidak dipakai.
       */
      tone: z.enum(['ink', 'accent', 'accent2', 'accent3']).default('ink'),

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
