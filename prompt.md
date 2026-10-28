# Master AI Prompt: React.js + Tailwind CSS Portfolio Template

Gunakan prompt di bawah ini ke AI AI Code Generator (seperti Claude, ChatGPT, v0.dev, atau Bolt.new) untuk menghasilkan website React + Tailwind CSS yang presisi dengan gambar referensi.

---

### 📋 COPY PROMPT DI BAWAH INI:

```text
Tolong buatkan satu file komponen React.js (menggunakan Tailwind CSS) untuk landing page portofolio personal yang layout dan desain visualnya semirip mungkin dengan gambar referensi.

### 🎨 PERSYARATAN DESAIN & VISUAL (Sesuai Gambar):
1. Skema Warna:
   - Background Utama: Dark Blue/Navy Deep (`#0A1128` atau `#070C1E`).
   - Warna Utama / Aksen: Bright Electric Blue (`#2563EB` atau `#3B82F6`).
   - Warna Kartu & Kontainer: Dark Slate Blue (`#101935` / `#162244`).
   - Teks: White (`#FFFFFF`) untuk Judul/Heading dan Light Gray/Muted Blue (`#94A3B8`) untuk Paragraf.
2. Tipografi & Gaya:
   - Font Modern Sans-serif.
   - Heading menggunakan huruf kapital berbobot tebal (Bold/Extrabold).
   - Efek Elemen Grafis:
     - Garis melingkar (concentric circles/waves motif) di belakang foto hero dan foto 'About Me'.
     - Bola/Sphere 3D melayang halus di latar belakang Hero.
     - Badge/Tag kecil di atas heading (misal: "TAHIRA", "ABOUT US", "MY WORK", "SERVICES") dengan warna biru terang dan latar transparan/soft.
3. Struktur Halaman (Berdasarkan Gambar):
   - **Navbar**: Logo di kiri ("T. TAHIRA"), Menu Navigasi di tengah ("HOME", "ABOUT ME", "PROJECTS", "SERVICES", "CONTACT"), dan Tombol CTA "LET'S TALK" (Pill shape/rounded full) di kanan.
   - **Hero Section**:
     - Kiri: Tag nama, Heading besar ("HAY! I'M TAHIRA. I'M A DESIGNER"), Deskripsi singkat, Tombol "GET IN TOUCH" dengan ikon panah, dan Ikon Media Sosial (Facebook, Dribbble, LinkedIn, dsb.) dalam lingkaran biru.
     - Kanan: Foto profil dengan latar motif garis melingkar dan elemen bola 3D.
   - **Client Logo Banner**: Strip horizontal berisi 5 logo brand/klien (menggunakan icon/placeholder Logoipsum).
   - **About Me Section**:
     - Kiri: Foto profil berbingkai rounded-xl dengan latar garis melingkar.
     - Kanan: Tag "ABOUT US", Heading ("I AM AVAILABLE FOR UI UX DESIGN PROJECT"), Paragraf deskripsi, Grid Statistik (3 Box: e.g., "280+ Google Review", "15+ Years Experience", "49+ Award Winning"), dan Tombol "GET IN TOUCH".
   - **Recent Project Section**:
     - Header: Tag "MY WORK", Heading "RECENT PROJECT".
     - Grid Cards (3 Kolom): Setiap kartu memiliki preview gambar project, judul (contoh: "Website Design"), sub-deskripsi/kategori, dan tombol/ikon panah melingkar biru di sudut bawah. Lengkap dengan pagination dots di bawahnya.
   - **Services Section**:
     - Tag "SERVICES", Heading "DESIGN SERVICES I AM PROVIDING", diikuti kartu-kartu layanan.

---

### ⚙️ PERSYARATAN STRUKTUR KODE (Must-Have):
1. **Data-Driven / Flexible Data Object**:
   - Seluruh teks, gambar, menu, link sosial media, data statistik, dan daftar proyek HARUS disimpan dalam objek data JSON/JS terpisah di bagian atas file (misal: `const portfolioData = { ... }`).
   - Kode komponen harus mengolah data tersebut dengan fungsi `.map()`, sehingga pengguna mudah mengubah/menambah isi konten tanpa merusak struktur layout HTML/JSX.
2. **Icons & Assets**:
   - Gunakan pustaka `lucide-react` untuk ikon (ArrowRight, Facebook, Dribbble, Linkedin, dsb).
   - Gunakan URL Unsplash placeholder berkualitas tinggi untuk foto profil dan preview project.
3. **Responsive Design**:
   - Responsive penuh dari layar Mobile hingga Desktop besar (menggunakan breakpoint `md:`, `lg:` Tailwind).
```

---

## 💡 Cara Menggunakan Data Object Hasil Prompt

Setelah AI menghasilkan kodenya, kamu cukup mengedit struktur objek data `portfolioData` di paling atas file React kamu seperti berikut:

```javascript
const portfolioData = {
  hero: {
    name: "NAMA KAMU",
    role: "WEB DEVELOPER / DESIGNER",
    description: "Deskripsi singkat mengenai keahlian dan kepribadianmu...",
    heroImage: "https://url-foto-kamu.com/foto.jpg",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/..." },
      { name: "GitHub", url: "https://github.com/..." }
    ]
  },
  stats: [
    { label: "Google Review", value: "280+" },
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce App",
      category: "React & Tailwind",
      image: "https://url-gambar-project.com/p1.jpg",
      link: "#"
    },
    // Tambah project baru tinggal tambah objek di sini!
  ]
};
```