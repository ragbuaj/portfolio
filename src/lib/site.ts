import { z } from 'astro/zod';
import raw from '../data/site.json';

/**
 * site.json diedit lewat Decap, jadi divalidasi saat build. Kalau editor
 * menghapus field wajib, build berhenti dengan pesan jelas alih-alih
 * menghasilkan halaman berisi "undefined".
 */
const oklch = z.string().regex(/^oklch\(/, 'Harus berupa warna oklch(...)');

const siteSchema = z.object({
  name: z.string().min(1),
  initial: z.string().min(1).max(2),
  role: z.string().min(1),
  location: z.string().min(1),
  email: z.email(),

  theme: z.object({
    accent: oklch,
    accent2: oklch,
    accent3: oklch,
    tickerSpeed: z.number().min(6).max(45),
  }),

  hero: z.object({
    eyebrowLeft: z.string(),
    eyebrowRight: z.string(),
    // Tiga baris judul; gaya tiap baris mengikuti desain aslinya.
    headline: z
      .array(
        z.object({
          text: z.string().min(1),
          style: z.enum(['plain', 'highlight', 'outline']),
        }),
      )
      .min(1)
      .max(4),
    intro: z.string(),
    ctaLabel: z.string(),
  }),

  availability: z.object({
    status: z.string(),
    badge: z.string(),
    portraitLabel: z.string(),
  }),

  ticker: z.array(z.string().min(1)).min(2),

  stat: z.object({
    label: z.string(),
    value: z.string(),
    unit: z.string(),
    description: z.string(),
  }),

  tools: z.array(z.string().min(1)).min(2),

  cta: z.object({
    heading: z.string(),
    notes: z.array(z.string().min(1)).min(1),
  }),

  socials: z
    .array(
      z.object({
        label: z.string().min(1),
        // Kosongkan kalau tidak ada angka yang benar-benar mau ditampilkan.
        metric: z.string().default(''),
        url: z.url(),
        accent: z.enum(['accent', 'accent2', 'accent3']),
      }),
    )
    .default([]),

  nowPlaying: z.object({ label: z.string(), value: z.string() }),

  footer: z.object({ locale: z.string() }),
});

export const site = siteSchema.parse(raw);
export type Site = typeof site;
