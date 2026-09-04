# Portfolio Web

Situs portofolio statis. Konten diedit lewat CMS, bukan lewat kode.

## Stack

- **Astro 7** — output statis, 0 KB JS secara default
- **Content Collections** — konten tervalidasi skema (Zod 4)
- **Decap CMS** — editor berbasis Git di `/admin`
- **astro:assets** (sharp) — optimasi gambar otomatis
- Backend: **tidak ada**. Form kontak nanti pakai layanan eksternal atau satu serverless function.

## Perintah

```bash
npm run dev      # server pengembangan di localhost:4321
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
npm run check    # type check
```

## Mengedit konten

Sumber konten:

| Apa | Di mana | Widget CMS |
|---|---|---|
| Profil, tagline, sosial | `src/data/site.json` | Pengaturan Situs |
| Proyek | `src/content/projects/*.md` | Proyek |
| Gambar sampul | `src/content/projects/images/` | otomatis saat unggah |

Skema di `src/content.config.ts` adalah sumber kebenaran. **Kalau menambah field
di sana, tambahkan juga di `public/admin/config.yml`** — kalau tidak, editor bisa
menyimpan data yang membuat build gagal.

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

## Status

Halaman `src/pages/index.astro` masih **placeholder**. Desain "Portfolio
Maximalist Bento" belum diport — lihat `design/`.
