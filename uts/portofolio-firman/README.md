# Portofolio — Firman

- Nama: Firman
- NIM : 202412012
- Prodi: Informatika — STITEK Bontang

Website portofolio pribadi satu halaman yang dibangun dengan **React + Vite**. Bertema hijau-cokelat dengan latar gradasi dan tombol untuk beralih antara mode gelap dan terang.

## Isi Halaman

- **Navbar** — logo, menu navigasi, dan tombol ganti tema
- **Hero** — perkenalan singkat dan foto profil
- **About Me** — profil dan layanan (*My Services*)
- **Latest Projects** — Portofolio, Sistem Informasi Mahasiswa, dan Aplikasi D-RENT
- **My Skills** — daftar kemampuan
- **Contact Me** — informasi kontak

## Teknologi

| Komponen | Teknologi |
|----------|-----------|
| Library UI | React 19 |
| Build tool | Vite 8 |
| Ikon | react-icons |
| Styling | CSS + inline style berbasis tema |
| Linter | Oxlint |

## Struktur Folder

```
portofolio-firman/
├── index.html
├── public/              ← foto profil dan screenshot project
└── src/
    ├── main.jsx         ← titik awal React
    ├── App.jsx          ← menyusun semua bagian + state mode gelap/terang
    ├── App.css, index.css
    └── components/      ← Navbar, Hero, About, Projects, Skills, Contact, Footer
```

## Cara Menjalankan

Butuh **Node.js 20.19 atau lebih baru**.

```bash
cd uts/portofolio-firman
npm install
npm run dev        # buka http://localhost:5173
```

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat versi produksi di folder `dist/` |
| `npm run preview` | Melihat hasil build |
| `npm run lint` | Memeriksa kode dengan Oxlint |

Repo asal: [Firman-16/Portofolio-Firman](https://github.com/Firman-16/Portofolio-Firman)
