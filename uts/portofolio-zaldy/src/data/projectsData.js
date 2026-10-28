// Gambar proyek: taruh file di public/images/projects/
// `cover` = foto di kartu. `baked: true` → label kategori & tahun sudah ada di dalam gambar,
//           jadi label HTML tidak ditampilkan lagi.
// `images` = gambar yang tampil di jendela "VIEW PROJECT".
//   - UI/UX : sampai 3 gambar
//   - Web   : sampai 4 gambar
//   - Design: sampai 5 gambar
//   File yang belum ada otomatis dilewati, jadi aman kalau jumlahnya belum penuh.
export const projectFilters = ['ALL', 'UI/UX DESIGN', 'WEB', 'DESIGN'];

export const projectsData = [
  {
    id: 'dsqra',
    category: 'UI/UX DESIGN',
    badgeBg: '#ffe600',
    badgeColor: '#000',
    year: '2026',
    titleLines: ['D-SQRA', 'DISTRINDO SMART QR ATTENDANCE'],
    description:
      'A project to develop an attendance website to streamline the employee attendance process at PT. Distirndo Pratama Sejahtera.',
    tags: ['Figma'],
    images: [
      '/images/projects/dsqra-1.webp',
      '/images/projects/dsqra-2.webp',
      '/images/projects/dsqra-3.webp',
    ],
    cover: { src: '/images/projects/cover-uiux.png', bg: '#6b7280', baked: true },
  },
  {
    id: 'sim-mahasiswa',
    category: 'WEB',
    badgeBg: '#fbbc09',
    badgeColor: '#000',
    year: '2026',
    titleLines: ['SIM MAHASISWA', 'Sistem Informasi Data Mahasiswa'],
    description:
      'An academic website development project designed to streamline the management of student and study program data.',
    tags: ['Laravel', 'Supabase', 'Vite', 'Tailwind'],
    images: [
      '/images/projects/sim-1.webp',
      '/images/projects/sim-2.webp',
      '/images/projects/sim-3.webp',
      '/images/projects/sim-4.webp',
    ],
    cover: { src: '/images/projects/cover-web.png', bg: '#ffffff', baked: true },
  },
  {
    id: 'design-canva-affinity',
    category: 'DESIGN',
    badgeBg: '#f1511b',
    badgeColor: '#000',
    badgeLabel: 'design',
    year: '2026',
    titleLines: ['DESIGN WITH', 'CANVA & AFFINITY'],
    description:
      'designing visual assets and digital interfaces, utilizing Affinity for design details and Canva to refine the designs',
    tags: ['Affinity', 'Canva'],
    images: [
      '/images/projects/design-1.webp',
      '/images/projects/design-2.webp',
      '/images/projects/design-3.webp',
      '/images/projects/design-4.webp',
      '/images/projects/design-5.webp',
    ],
    cover: { src: '/images/projects/cover-design.png', bg: '#ffffff' },
  },
];