import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Skema konten. Ini kontrak antara Decap CMS (public/admin/config.yml) dan
 * template Astro: kalau field ditambah di sini, tambahkan juga di config.yml.
 *
 * Catatan layout: grid bento-nya 12 kolom dan di-tile manual di desain asli
 * (3+5+4 dan 3+5+4). `span` memberi editor kendali itu — usahakan tiap baris
 * berjumlah 12 supaya grid tetap rapat. Kalau tidak pas, kartu tetap tampil,
 * hanya barisnya jadi kurang padat.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Baris kecil di bawah judul, mis. "Next.js + Postgres · 2025". */
      stack: z.string().optional(),
      year: z.number().int().min(1990).max(2100),
      summary: z.string().optional(),

      /** Label kiri-atas kartu gelap, mis. "Studi kasus 02". */
      kicker: z.string().optional(),
      /** Label kanan-atas kartu gelap, mis. "Realtime". */
      badge: z.string().optional(),

      cover: image().optional(),
      coverAlt: z.string().default(''),
      /** Teks di kotak placeholder saat `cover` belum diisi. */
      coverLabel: z.string().default('screenshot — 16:10'),

      /**
       * Bentuk kartu di grid:
       * - showcase : gambar di atas, judul di bawah (kartu terang)
       * - feature  : kartu gelap, teks besar, tanpa gambar
       * - compact  : gambar penuh dengan judul menimpa
       */
      variant: z.enum(['showcase', 'feature', 'compact']).default('showcase'),
      span: z.number().int().min(3).max(12).default(4),

      url: z.url().optional(),
      repo: z.url().optional(),

      order: z.number().int().default(999),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    /** Isi markdown-nya dipakai sebagai kutipan. */
    order: z.number().int().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, testimonials };
