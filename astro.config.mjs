// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ganti ke domain final sebelum deploy — dipakai untuk sitemap & canonical URL.
  site: 'https://example.com',
  output: 'static',
  image: {
    // Decap menulis gambar ke public/uploads, jadi biarkan lewat tanpa diproses.
    responsiveStyles: true,
  },
});
