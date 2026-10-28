# Project Kelompok — Informatika STITEK Bontang

Kumpulan seluruh project kelompok selama perkuliahan, dikelola dalam satu repository GitHub:

- **UTS** — portofolio pribadi tiap anggota (website React + Vite)
- **UAS** — **SIM Mahasiswa**, sistem informasi data mahasiswa berbasis Laravel

Setiap project ada di foldernya sendiri dan bisa dijalankan terpisah. Riwayat commit dari repository asal tiap anggota ikut disimpan, jadi kontribusi masing-masing tetap terlihat di `git log`.

---

## Anggota Kelompok

| No | Nama | NIM | Project UTS |
|----|------|-----|-------------|
| 1 | Taro | 202412023 | [`uts/portofolio-taro`](uts/portofolio-taro) |
| 2 | Firman | 202412012 | [`uts/portofolio-firman`](uts/portofolio-firman) |
| 3 | Zaldy | 202412040 | [`uts/portofolio-zaldy`](uts/portofolio-zaldy) |
| 4 | Ninda | 202412029 | [`uts/portofolio-ninda`](uts/portofolio-ninda) |
| 5 | Yovitha | 202412044 | [`uts/portofolio-yovitha`](uts/portofolio-yovitha) — menyusul |

Project UAS dikerjakan bersama oleh seluruh anggota: [`uas/sim-mahasiswa`](uas/sim-mahasiswa).

---

## Struktur Repository

```
.
├── README.md                  ← dokumen ini
├── uts/                       ← Ujian Tengah Semester: portofolio pribadi
│   ├── portofolio-taro/       ← React + Vite, desain "Bone & Ink" + efek dither
│   ├── portofolio-zaldy/      ← React + Vite, desain neo-brutalist
│   ├── portofolio-ninda/      ← React + Vite + Tailwind CSS
│   ├── portofolio-firman/     ← React + Vite, tema hijau-cokelat
│   └── portofolio-yovitha/    ← menyusul
└── uas/                       ← Ujian Akhir Semester
    └── sim-mahasiswa/         ← Laravel + Supabase (PostgreSQL)
```

Setiap folder project punya `README.md` sendiri dengan penjelasan lebih lengkap.

---

## Daftar Project

| Folder | Project | Deskripsi | Teknologi | Repo asal |
|--------|---------|-----------|-----------|-----------|
| `uts/portofolio-taro` | Portofolio Taro | Website portofolio bergaya editorial gelap dengan kanji halftone/dither, showroom project, dan data repo live dari GitHub API | React 19, Vite 7, CSS Modules, Canvas API | [Clarity69/Porto-dither](https://github.com/Clarity69/Porto-dither) |
| `uts/portofolio-zaldy` | MyPorto | Portofolio neo-brutalist satu halaman dengan dark mode, filter skill/project, dan form kontak | React 19, Vite 7, CSS Modules, react-icons, Formspree | [zaldyfdh/MyPorto](https://github.com/zaldyfdh/MyPorto) |
| `uts/portofolio-firman` | Portofolio Firman | Portofolio satu halaman bertema hijau-cokelat dengan mode gelap/terang, menampilkan project, skill, dan kontak | React 19, Vite 8, react-icons, Oxlint | [Firman-16/Portofolio-Firman](https://github.com/Firman-16/Portofolio-Firman) |
| `uts/portofolio-ninda` | Portofolio Ninda | Portofolio pribadi tanpa backend, tema pastel blue dengan mode gelap | React 19, Vite, Tailwind CSS 4 | [xolveyndaa-blip/Portofolio-Ninda-FH](https://github.com/xolveyndaa-blip/Portofolio-Ninda-FH) |
| `uas/sim-mahasiswa` | SIM Mahasiswa | Login, dashboard dengan grafik, CRUD data mahasiswa (pencarian & filter), data prodi, profil | Laravel 13, PHP 8.3+, Supabase PostgreSQL, Laravel Breeze, Bootstrap 5.3, Chart.js | [Clarity69/SIM-MAHASISWA](https://github.com/Clarity69/SIM-MAHASISWA) |

---

## Teknologi yang Digunakan

- **Frontend:** React 19, Vite, CSS Modules, Tailwind CSS
- **Backend:** Laravel 13 (PHP 8.3+), Eloquent ORM, Laravel Breeze
- **Database:** Supabase (PostgreSQL)
- **Tampilan & grafik:** Bootstrap 5.3, Chart.js
- **Tools:** Git & GitHub, Node.js & npm, Composer
- **Deploy:** Netlify, Vercel

---

## Cara Menjalankan

### 1. Clone repository

```bash
git clone <link-repo-ini>
cd <nama-repo>
```

### 2. Project UTS (portofolio React)

Butuh **Node.js 20 atau lebih baru**. Contoh untuk portofolio Taro (folder lain caranya sama):

```bash
cd uts/portofolio-taro
npm install
npm run dev        # buka http://localhost:5173
```

Untuk membuat versi produksi: `npm run build` (hasilnya di folder `dist/`).

### 3. Project UAS (SIM Mahasiswa)

Butuh **PHP 8.3+, Composer, Node.js**, dan project **Supabase**.

```bash
cd uas/sim-mahasiswa
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Isi koneksi database Supabase di `.env` (Supabase → **Connect** → **Session pooler**), lalu:

```bash
php artisan migrate --seed
npm run build
php artisan serve  # buka http://127.0.0.1:8000
```

Langkah lengkap ada di [`uas/sim-mahasiswa/README.md`](uas/sim-mahasiswa/README.md).

---

## Alur Kerja Git Kelompok

1. **Clone** repository ini, lalu buat perubahan di folder project masing-masing.
2. **Commit** dengan pesan yang jelas, misalnya `git commit -m "Tambah section kontak di portofolio Ninda"`.
3. **Pull** dulu sebelum push supaya tidak bentrok dengan perubahan anggota lain: `git pull --rebase`.
4. **Push** ke GitHub: `git push`.

File `.env`, `node_modules/`, `vendor/`, dan `dist/` tidak diunggah (sudah diatur di `.gitignore` tiap project).
