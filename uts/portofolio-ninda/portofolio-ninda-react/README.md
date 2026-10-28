# Portofolio — Ninda Fadillah Heryanuryanti

Website portofolio pribadi yang dibuat **hanya dengan React.js** (dijalankan dengan Vite), tanpa backend dan tanpa database.

- Nama : Ninda Fadillah Heryanuryanti
- NIM  : 202412029
- Prodi: Informatika — STITEK Bontang

## Teknologi

- **React.js 19** — library untuk membangun tampilan berbasis komponen
- **Vite** — alat untuk menjalankan & mem-build proyek React
- **Tailwind CSS** — styling & tampilan responsif
- **Node.js & npm** — menjalankan dan mengelola paket

## Struktur folder

```
portofolio-ninda/
├── index.html              ← halaman HTML utama (wadah <div id="root">)
├── public/images/          ← foto profil & foto Silvy Clean
└── src/
    ├── main.jsx            ← titik awal React
    ├── App.jsx             ← menyusun semua bagian halaman
    ├── index.css           ← warna (pastel blue) & style
    ├── data/portfolio.js   ← SEMUA isi website (pengganti database)
    ├── hooks/              ← useTheme (mode gelap), useReveal (animasi scroll)
    └── components/         ← Navbar, Hero, About, Skills, Projects,
                              Experience, Education, Contact, Footer, ...
```

## Menjalankan

```bash
npm install     # cukup sekali
npm run dev     # browser akan terbuka otomatis di http://localhost:5173
```

Versi final: `npm run build` (hasilnya di folder `dist`), lalu `npm run preview`.

## Mengubah isi

Edit `src/data/portfolio.js`, simpan, dan browser otomatis ter-update.
