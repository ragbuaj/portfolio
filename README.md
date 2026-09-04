# Portfolio Web

Portofolio statis dari desain **Portfolio Maximalist Bento** (Claude Design).
Seluruh isinya diedit lewat CMS, bukan lewat kode.

## Stack

- **Astro 7** — output statis
- **Content Collections** — konten tervalidasi skema Zod 4
- **Decap CMS** — editor berbasis Git di `/admin`
- **astro:assets** (sharp) — optimasi gambar otomatis
- Backend: **tidak ada**

Build saat ini ~53 KB: HTML + satu file CSS + **1,4 KB JavaScript inline**
(hanya untuk tombol dan titik carousel — tidak ada permintaan jaringan tambahan).

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
| Riwayat kerja | `src/content/experience/*.md` | Riwayat Kerja |
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

## Layout bento

Grid 12 kolom, di-tile manual seperti desain aslinya:

(Header berada di luar grid — lihat "Header menempel" di bawah.)

```
8 + 4       hero + portrait
12          ticker
3 + 9       statistik + carousel karya
3 + 9       perkakas + riwayat kerja
8 + 4       ajakan kontak + sosial
12          footer
```

Di bawah 1100px grid jadi 6 kolom (`--span-md`, disetel per komponen supaya
tiap baris tetap genap), di bawah 680px jadi satu kolom.

Selokan grid 18px, bukan 12px seperti desain aslinya: kartunya melempar bayangan
keras sejauh 8–10px ke dalam selokan itu, sehingga pada 12px hanya tersisa 2px
bersih dan bayangan merah kartu kontak menempel ke kartu sosial di sebelahnya.

## Carousel karya

Kartu proyek ada di deret geser, bukan di sel bento terpisah. Yang perlu
diketahui kalau nanti diutak-atik:

- Deretnya berfungsi **tanpa JavaScript** — bisa digeser lewat sentuh,
  trackpad, dan keyboard. Tombol panah dan titik indikator baru muncul setelah
  skrip jalan.
- Lebar slide sengaja tidak habis membagi lebar track, supaya kartu berikutnya
  selalu mengintip sedikit sebagai isyarat bahwa deretnya bisa digeser.
- `scroll-snap-type` **dimatikan saat runtime** kalau seluruh jarak geser lebih
  pendek dari satu slide. Tanpa itu browser tidak menemukan titik snap yang
  terjangkau dan mengunci deret di posisi awal — carousel mati total. Kasus ini
  muncul begitu proyeknya sedikit dan layarnya lebar.
- Animasi masuk kartu dipasang di elemen pembungkus, bukan di kartunya.
  Animasi dengan `fill: both` akan mengunci `transform` dan mematikan efek
  angkat saat hover.
- Field `variant` hanya mengubah warna dan susunan isi kartu; semua slide
  berukuran sama.

## Header menempel

Header sengaja dirender **di luar `.bento`**, bukan sebagai sel grid. Containing
block sebuah elemen sticky yang jadi grid item adalah grid area-nya sendiri —
sebagian browser mengurungnya di situ sehingga headernya tidak pernah benar-benar
menempel. Di luar grid, perilakunya sama di semua browser.

Dua hal yang ikut terpengaruh kalau isinya diubah:

- `--sticky-offset` di `global.css` harus mengikuti tinggi header, karena dipakai
  sebagai `scroll-margin-top` sasaran `#karya`, `#tentang`, dan `#kontak`. Tanpa
  itu, lompatan anchor mendarat di balik header.
- Versi lengkap header memakan 17% layar ponsel. Peran dan status ketersediaan
  disembunyikan di bawah 680px supaya tinggal 12%; keduanya masih tampil di kartu
  kontak.

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
