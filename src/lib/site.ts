import { z } from 'astro/zod';
import raw from '../data/site.json';

/**
 * site.json diedit lewat Decap, jadi divalidasi saat build. Kalau editor
 * menghapus field wajib, build berhenti dengan pesan jelas alih-alih
 * menghasilkan halaman dengan "undefined" di mana-mana.
 */
const siteSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  tagline: z.string(),
  email: z.email(),
  location: z.string(),
  about: z.string(),
  socials: z
    .array(z.object({ label: z.string().min(1), url: z.url() }))
    .default([]),
});

export const site = siteSchema.parse(raw);
export type Site = typeof site;
