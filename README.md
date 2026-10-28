# MyPorto — Portofolio Zaldy Fadhlulrohman

Website portofolio pribadi bergaya **neo-brutalist** yang dibangun dengan **React + Vite**. Menampilkan profil, pendidikan, skill, project, dan formulir kontak dalam satu halaman yang responsif (desktop, tablet, HP) dengan mode terang/gelap.

## Fitur

- **Satu halaman, enam bagian:** Hero, About & Education, Skills, Projects, Contact, Footer
- **Dark mode:** tombol petir di navbar; pilihan tersimpan di browser
- **Galeri project:** tombol *VIEW PROJECT* membuka jendela gambar dengan PREV/NEXT, indikator titik, dan navigasi keyboard
- **Filter** Skills dan Projects berdasarkan kategori
- **Formulir kontak** terhubung ke [Formspree](https://formspree.io), plus tombol *HIRE ME* yang membuka Gmail dengan alamat dan subjek terisi otomatis
- **Animasi** muncul saat scroll dan efek hover interaktif (otomatis nonaktif jika pengguna memilih *reduce motion*)
- **Responsif** dengan menu hamburger di layar kecil

## Teknologi

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | CSS Modules + design token di `index.css` |
| Ikon | react-icons |
| Font | Space Grotesk, JetBrains Mono (Google Fonts) |
| Deploy | Vercel (`vercel.json`) |

## Menjalankan di komputer

Butuh [Node.js](https://nodejs.org) versi 18 atau lebih baru.

```bash
git clone https://github.com/zaldyfdh/MyPorto.git
cd MyPorto
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat versi produksi di folder `dist` |
| `npm run preview` | Mencoba hasil build secara lokal |

## Struktur folder

```
MyPorto/
├── public/
│   └── images/
│       ├── profile.jpg            # foto di Hero
│       └── projects/              # sampul kartu & gambar galeri
├── src/
│   ├── components/                # CSS Modules tiap bagian + SafeImage.jsx
│   ├── data/
│   │   ├── siteData.js            # nama, sosial media, email, menu navbar
│   │   ├── skillsData.js          # daftar skill
│   │   └── projectsData.js        # daftar project & gambar galeri
│   ├── hooks/
│   │   └── useScrollReveal.js     # animasi muncul saat scroll
│   ├── sections/                  # Navbar, Hero, About, Skills, Projects, ProjectModal, Connect, Footer
│   ├── App.jsx
│   ├── index.css                  # design token, tema terang/gelap
│   └── main.jsx
├── index.html
├── vercel.json
└── vite.config.js
```

## Mengubah isi

| Yang ingin diubah | File |
|---|---|
| Nama, link GitHub/LinkedIn/Instagram, email, menu | `src/data/siteData.js` |
| Daftar skill | `src/data/skillsData.js` |
| Project, tag, dan gambar galeri | `src/data/projectsData.js` |
| Teks Hero | `src/sections/Hero.jsx` |
| Teks About & Education | `src/sections/About.jsx` |
| Warna dan tema | `src/index.css` |

### Menambah gambar project

Taruh gambar di `public/images/projects/`, lalu daftarkan di `src/data/projectsData.js`. Batas gambar per project: UI/UX maksimal 3, Web maksimal 4, Design maksimal 5. Format `.webp` disarankan agar ringan.

### Formulir kontak

Ganti `FORM_ENDPOINT` di `src/sections/Connect.jsx` dengan alamat form Formspree milik sendiri:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
```

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di [vercel.com](https://vercel.com), pilih **Add New → Project**, lalu import repo ini.
3. Vercel membaca `vercel.json` otomatis (build `npm run build`, output `dist`). Klik **Deploy**.

## Kontak

- GitHub: [@zaldyfdh](https://github.com/zaldyfdh)
- LinkedIn: [Zaldy Fadhlul](https://www.linkedin.com/in/zaldy-fadhlul-7a8b08446/)
- Instagram: [@zaldyyfdhllr](https://www.instagram.com/zaldyyfdhllr/)

© 2026 Zaldy Fadhlulrohman