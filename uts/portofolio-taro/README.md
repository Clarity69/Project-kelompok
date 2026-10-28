# Taro — Portfolio (Bone & Ink)

Portfolio React + Vite dengan design system **Bone & Ink**: serif bone di atas hitam pekat, label uppercase, garis 1px tanpa shadow, dan satu aksen vermilion. Hero menampilkan kanji 太郎 sebagai **halftone/dither** di `<canvas>` (`KanjiArt.jsx`), dan potret di About memakai efek yang sama.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di dist/ (siap Vercel)
```

## Struktur folder

```
public/
  favicon.svg
  projects/            # screenshot proyek (.webp)
src/
  assets/portrait.webp # potret di About (grayscale) — ganti dengan fotomu sendiri
  components/          # CSS Modules per section (*.module.css)
  context/             # ThemeContext, ThemeProvider, useTheme (Ink / Bone)
  data/
    siteData.js        # profil + daftar section (navbar dibuat dari sini)
    projectsData.js    # proyek unggulan, proyek lain, repo yang disembunyikan
    skillsData.js      # grup stack
  hooks/useGithubRepos.js  # data repo live dari GitHub API (+ cache 15 menit)
  sections/            # Navbar, Hero, Projects, About, Skills, Connect, Footer
                       # + komponen kecil: DitherImage, KanjiArt, ImageFrame, SectionHeader, SpecList, Icons
  App.jsx  main.jsx  index.css
```

## Urutan halaman

`Hero` → `01 Work` (showroom + repo GitHub) → `02 About` → `03 Stack` → `04 Contact` (panel bone) → footer sederhana. Tidak ada FAQ.

Navbar dibuat dari `sections` di `src/data/siteData.js`, jadi kalau kamu menambah / menghapus section, cukup ubah daftar itu (dan `id` section-nya).

## Efek dither (`src/sections/DitherImage.jsx`)

- Area terang → bulatan halftone (ukuran sesuai kecerahan); area gelap → pola Bayer 4×4.
- Warna titik mengikuti token `--ink`, jadi ikut berubah saat ganti tema.
- Intro "dicetak" dari atas ke bawah; kursor membesarkan titik seperti lensa. Keduanya mati kalau `prefers-reduced-motion`.
- Props penting: `cell` (jarak titik), `zoom`, `focus`, `levels`, `gamma`, `fade`.

Foto terbaik: subjek terang di latar hitam polos (seperti foto saat ini).

