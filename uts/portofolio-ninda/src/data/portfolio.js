// Semua isi website ada di file ini (tanpa database & tanpa backend).
// Ubah teks di sini, simpan, lalu browser akan otomatis ter-update.

const portfolio = {
    "profile": {
        "name": "Ninda Fadillah Heryanuryanti",
        "nickname": "Ninda",
        "nim": "202412029",
        "role": "Mahasiswa Informatika · Web Developer",
        "roles": [
            "Web Developer",
            "Frontend Developer",
            "React.js Learner",
            "UI/UX Explorer"
        ],
        "tagline": "Membangun aplikasi web yang rapi, berguna, dan mudah dipakai.",
        "birth": "3 Desember 2005",
        "location": "Bontang, Kalimantan Timur",
        "email": "xolveyndaa@gmail.com",
        "phone": "+62 838-7960-1216",
        "photo": "/images/foto-ninda.jpeg",
        "cv": null,
        "available": true,
        "about": [
            "Halo! Saya Ninda, mahasiswa Program Studi Informatika di STITEK Bontang yang senang membangun aplikasi web — mulai dari merancang kebutuhan sistem, menulis kode, sampai memastikan kualitasnya.",
            "Saat ini saya fokus mendalami React.js dan Laravel, serta mempelajari rekayasa kebutuhan perangkat lunak (SRS), desain pengalaman pengguna, dan jaminan kualitas perangkat lunak.",
            "Di luar kuliah, saya menjabat sebagai Direktur Silvy Clean yang bergerak di bidang jasa kebersihan, sekaligus Direktur CV Silvy Clean Sukses Indo yang menjadi supplier barang untuk kegiatan pelatihan di BPVP Samarinda. Memimpin usaha melatih saya dalam manajemen, ketelitian, dan tanggung jawab."
        ],
        "stats": [
            {
                "value": "3",
                "label": "Proyek Utama"
            },
            {
                "value": "2",
                "label": "Usaha Dipimpin"
            },
            {
                "value": "2024",
                "label": "Menjabat Direktur"
            },
            {
                "value": "K3",
                "label": "Sertifikasi BNSP"
            }
        ],
        "intro": "Mahasiswa Informatika yang juga memimpin usaha jasa kebersihan. Saya membangun aplikasi web yang rapi, berguna, dan mudah dipakai."
    },
    "socials": [
        {
            "name": "GitHub",
            "icon": "github",
            "url": "https://github.com/xolveyndaa-blip"
        },
        {
            "name": "Instagram",
            "icon": "instagram",
            "url": "https://instagram.com/nndaafh"
        },
        {
            "name": "Email",
            "icon": "mail",
            "url": "mailto:xolveyndaa@gmail.com"
        }
    ],
    "skills": [
        {
            "category": "Backend",
            "items": [
                {
                    "name": "PHP"
                },
                {
                    "name": "Laravel"
                },
                {
                    "name": "REST API"
                },
                {
                    "name": "PostgreSQL / Supabase"
                },
                {
                    "name": "MySQL"
                }
            ]
        },
        {
            "category": "Frontend",
            "items": [
                {
                    "name": "HTML & CSS"
                },
                {
                    "name": "JavaScript"
                },
                {
                    "name": "React.js"
                },
                {
                    "name": "Tailwind CSS"
                }
            ]
        },
        {
            "category": "Tools & Lainnya",
            "items": [
                {
                    "name": "Git & GitHub"
                },
                {
                    "name": "Laragon / VS Code"
                },
                {
                    "name": "Figma"
                },
                {
                    "name": "Analisis Kebutuhan (SRS)"
                }
            ]
        }
    ],
    "projects": [
        {
            "slug": "sim-mahasiswa",
            "title": "SIM-MAHASISWA",
            "category": "Web App",
            "year": "2026",
            "summary": "Sistem Informasi Manajemen Mahasiswa berbasis Laravel dengan database PostgreSQL di Supabase.",
            "description": "Proyek kelompok (5 orang) membangun sistem informasi untuk mengelola data mahasiswa. Saya terlibat sebagai anggota tim yang ikut mengembangkan fitur aplikasi. Aplikasi dikembangkan mengikuti modul perkuliahan dan dijalankan di Laragon.",
            "role": "Anggota Tim Developer",
            "tech": [
                "Laravel",
                "PHP",
                "Supabase",
                "PostgreSQL",
                "Laragon"
            ],
            "features": [
                "CRUD data mahasiswa",
                "Koneksi database cloud Supabase",
                "Kolaborasi tim 5 orang"
            ],
            "color": "from-[#8b6f5c] to-[#c8b09a]",
            "repo": null,
            "demo": null
        },
        {
            "slug": "portofolio-laravel-react",
            "title": "Website Portofolio",
            "category": "Web App",
            "year": "2026",
            "summary": "Website ini sendiri, dibangun dengan React.js dan Vite tanpa backend maupun database.",
            "description": "Seluruh data portofolio disimpan di satu file JavaScript lalu ditampilkan secara dinamis oleh komponen-komponen React. Tampilan dibuat responsif dengan Tailwind CSS dan dilengkapi mode gelap/terang.",
            "role": "Frontend Developer",
            "tech": [
                "React.js",
                "Vite",
                "Tailwind CSS",
                "JavaScript"
            ],
            "features": [
                "Data dari file JavaScript (tanpa database)",
                "Mode gelap / terang",
                "Filter proyek",
                "Form kontak terhubung ke email"
            ],
            "color": "from-[#6f5a4d] to-[#b59c87]",
            "repo": null,
            "demo": null
        },
        {
            "slug": "srs-d-rent",
            "title": "SRS Aplikasi D-RENT",
            "category": "Analisis Sistem",
            "year": "2026",
            "summary": "Dokumen Software Requirements Specification untuk aplikasi rental mobil D-RENT.",
            "description": "Menyusun spesifikasi kebutuhan perangkat lunak untuk aplikasi penyewaan mobil, termasuk ruang lingkup, kebutuhan fungsional dan non-fungsional, serta definisi dan singkatan yang dipakai di dalam dokumen.",
            "role": "System Analyst",
            "tech": [
                "SRS",
                "IEEE 830",
                "Use Case"
            ],
            "features": [
                "Kebutuhan fungsional & non-fungsional",
                "Definisi dan singkatan",
                "Ruang lingkup sistem"
            ],
            "color": "from-[#a3866f] to-[#ddc9b3]",
            "repo": null,
            "demo": null
        }
    ],
    "experiences": [
        {
            "title": "Direktur",
            "place": "Silvy Clean, Bontang",
            "period": "2024 — Sekarang",
            "description": "Memimpin usaha yang bergerak di bidang jasa kebersihan, mulai dari mengelola operasional dan mengatur tim kebersihan, hingga menjaga kepuasan dan hubungan baik dengan pelanggan.",
            "type": "Usaha",
            "photos": [
                "/images/silvy-clean.jpeg"
            ],
            "highlights": [
                "Jasa kebersihan",
                "Manajemen tim",
                "Pelayanan pelanggan"
            ]
        },
        {
            "title": "Direktur",
            "place": "CV Silvy Clean Sukses Indo, Bontang",
            "period": "2024 — Sekarang",
            "description": "Memimpin perusahaan yang menjadi supplier barang untuk kegiatan pelatihan di BPVP (Balai Pelatihan Vokasi dan Produktivitas) Samarinda, termasuk menangani proses pengadaan, penyusunan dokumen, dan pengiriman barang.",
            "type": "Usaha",
            "photos": [],
            "highlights": [
                "Pengadaan barang",
                "Supplier BPVP Samarinda",
                "Administrasi dokumen"
            ]
        }
    ],
    "education": [
        {
            "school": "Sekolah Tinggi Teknologi Bontang (STITEK Bontang)",
            "major": "S1 Informatika",
            "period": "2024 — Sekarang",
            "description": "Mata kuliah yang relevan: Pemrograman Web, Desain Pengalaman Pengguna, Jaminan Kualitas Perangkat Lunak, Keamanan Data dan Informasi, Metodologi Penelitian Informatika."
        },
        {
            "school": "SMA Negeri 1 Bontang",
            "major": "Jurusan IPA",
            "period": "2021 — 2024",
            "description": "Menyelesaikan pendidikan menengah atas di jurusan Ilmu Pengetahuan Alam."
        }
    ],
    "certificates": [
        {
            "title": "K3 Umum",
            "issuer": "BNSP",
            "year": "",
            "url": null
        }
    ]
};

export default portfolio;
