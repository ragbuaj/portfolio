// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dipakai untuk canonical URL dan tag Open Graph. Harus cocok dengan domain
  // yang benar-benar melayani situsnya.
  site: 'https://ragilbuaj.web.id',
  output: 'static',
  image: {
    // Decap menulis gambar ke public/uploads, jadi biarkan lewat tanpa diproses.
    responsiveStyles: true,
  },
});
