import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Skema konten. Ini kontrak antara Decap CMS (public/admin/config.yml) dan
 * template Astro: kalau field ditambah di sini, tambahkan juga di config.yml.
 * Build akan gagal dengan pesan jelas kalau ada entri yang tidak sesuai skema —
 * itu disengaja, supaya salah ketik di CMS ketahuan sebelum naik ke produksi.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int().min(1990).max(2100),
      role: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      url: z.url().optional(),
      repo: z.url().optional(),
      // Menentukan urutan di grid; angka kecil tampil lebih dulu.
      order: z.number().int().default(999),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
