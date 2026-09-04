# Portfolio Web

Portofolio statis dari desain **Portfolio Maximalist Bento** (Claude Design).
Seluruh isinya diedit lewat CMS, bukan lewat kode.

## Stack

- **Astro 7** — output statis, **0 KB JavaScript** terkirim ke browser
- **Content Collections** — konten tervalidasi skema Zod 4
- **Decap CMS** — editor berbasis Git di `/admin`
- **astro:assets** (sharp) — optimasi gambar otomatis
- Backend: **tidak ada**

Ukuran build saat ini: ~41 KB total (HTML + satu file CSS), tanpa tag `<script>`.

## Perintah

```bash
npm run dev         # server pengembangan di localhost:4321
npm run build       # build produksi ke dist/
npm run preview     # pratinjau hasil build
npm run check       # type check Astro + TypeScript
npm run verify:cms  # pastikan config.yml sejalan dengan skema konten
```

## Mengedit konten

| Apa | Di mana | Di CMS |
|---|---|---|
| Profil, hero, palet, ticker, statistik, perkakas, CTA, sosial, footer | `src/data/site.json` | Pengaturan Situs |
| Proyek | `src/content/projects/*.md` | Proyek |
| Testimoni | `src/content/testimonials/*.md` | Testimoni |
| Gambar sampul | `src/content/projects/images/` | otomatis saat unggah |

Sumber kebenaran skema ada di `src/lib/site.ts` dan `src/content.config.ts`.
Kalau menambah field di sana, tambahkan juga di `public/admin/config.yml` —
`npm run verify:cms` akan gagal kalau keduanya tidak sinkron.

### Menjalankan /admin secara lokal

`local_backend: true` sudah aktif, jadi tidak butuh OAuth untuk uji coba:

```bash
npx decap-server
```

Lalu jalankan `npm run dev` di terminal lain dan buka http://localhost:4321/admin.

### Menyalakan /admin di produksi

1. Push repo ini ke GitHub.
2. Ganti `repo: USERNAME/REPO` di `public/admin/config.yml`.
3. Siapkan GitHub OAuth provider, isi `base_url`-nya di config yang sama.
4. Ganti `site:` di `astro.config.mjs` ke domain final.

## Tentang layout bento

Grid-nya 12 kolom dan di-tile manual, persis seperti desain aslinya:

```
12                    topbar
8 + 4                 hero + portrait
12                    ticker
3 + 5 + 4             statistik + karya + karya
3 + 5 + 4             perkakas + testimoni + karya
8 + 4                 ajakan kontak + sosial
12                    footer
```

Field `span` pada tiap proyek mengendalikan lebarnya. **Usahakan tiap baris
berjumlah 12** supaya grid tetap rapat; kalau tidak pas, kartunya tetap tampil
tapi barisnya menyisakan ruang kosong.

Di bawah 1100px grid jadi 6 kolom (`--span-md`), di bawah 680px jadi satu kolom.

## Yang berbeda dari file desain

Tiga hal sengaja tidak diport apa adanya:

1. **`style-hover`** — atribut ini tidak dikenal `support.js` maupun browser,
   jadi efek hover-nya tidak pernah benar-benar aktif di kanvas. Ditulis ulang
   sebagai CSS `:hover` sungguhan.
2. **`prefers-reduced-motion`** — desainnya menjalankan tujuh animasi tak
   berujung sekaligus tanpa jalan keluar. Sekarang animasi berhenti dan marquee
   bisa di-scroll manual bagi yang mematikan animasi di sistemnya.
3. **Jam di footer** — desain menuliskan "07:41 WIB" secara literal. Situs
   statis tidak bisa menampilkan jam berjalan tanpa JS, dan jam beku hasil build
   lebih menyesatkan daripada tidak ada, jadi hanya kotanya yang ditampilkan.

Ditambahkan karena desainnya tidak mencakupnya: breakpoint responsif, gaya
`:focus-visible` untuk navigasi keyboard, dan metadata SEO/Open Graph.
