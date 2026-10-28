# Portofolio — Yovitha Gracia Tavares

- Nama: Yovitha Gracia Tavares
- NIM : 202412044
- Prodi: Informatika — STITEK Bontang

Website portofolio pribadi satu halaman dengan nama brand **GRACIA**, dibangun dengan **React + Vite** dan **Tailwind CSS**. Tampilannya bertema gelap (navy) dengan aksen biru elektrik.

## Isi Halaman

- **Navbar** — logo GRACIA, menu navigasi, dan tombol *Let's Talk*
- **Hero** — perkenalan, foto profil, dan tautan media sosial
- **Client Banner** — deretan logo klien
- **About Me** — profil singkat
- **Projects** — daftar project
- **Services** — layanan yang ditawarkan
- **Contact** — informasi kontak
- **Footer**

Semua isi teks diatur dari satu file: `src/data/portfolioData.js`, jadi konten bisa diganti tanpa mengubah komponen.

## Teknologi

| Komponen | Teknologi |
|----------|-----------|
| Library UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Ikon | lucide-react |
| Linter | Oxlint |

## Struktur Folder

```
portofolio-yovitha/
├── index.html
├── public/                  ← foto profil dan favicon
└── src/
    ├── main.jsx             ← titik awal React
    ├── App.jsx              ← menyusun semua bagian halaman
    ├── App.css, index.css
    ├── data/portfolioData.js ← semua isi website
    └── components/          ← Navbar, Hero, ClientBanner, About, Projects,
                               Services, Contact, Footer
```

## Cara Menjalankan

Butuh **Node.js 20.19 atau lebih baru**.

```bash
cd uts/portofolio-yovitha
npm install
npm run dev        # buka http://localhost:5173
```

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat versi produksi di folder `dist/` |
| `npm run preview` | Melihat hasil build |
| `npm run lint` | Memeriksa kode dengan Oxlint |

Repo asal: [yovgrace/uts-portofolio](https://github.com/yovgrace/uts-portofolio)
