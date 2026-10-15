<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') | SIM Mahasiswa</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">

    {{-- Ikuti tema terang/gelap yang dipilih di dashboard --}}
    <script>
        document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme') || 'light');
    </script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        :root {
            --auth-bg: #f5f7fb;
            --auth-surface: #ffffff;
            --auth-text: #0f172a;
            --auth-muted: #64748b;
            --auth-border: #e2e8f0;
            --auth-input: #f8fafc;
            --auth-primary: #0d47a1;
            --auth-primary-hover: #1565c0;
        }
        [data-bs-theme="dark"] {
            --auth-bg: #0f172a;
            --auth-surface: #0f172a;
            --auth-text: #f1f5f9;
            --auth-muted: #94a3b8;
            --auth-border: #334155;
            --auth-input: #1e293b;
            --auth-primary: #3b82f6;
            --auth-primary-hover: #60a5fa;
        }

        * { box-sizing: border-box; }
        body {
            margin: 0;
            min-height: 100vh;
            background: var(--auth-bg);
            color: var(--auth-text);
            font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .auth-wrapper { display: flex; min-height: 100vh; }

        /* ============ PANEL KIRI (BRANDING) ============ */
        .auth-brand {
            position: relative;
            flex: 0 0 46%;
            padding: 48px 56px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background: linear-gradient(150deg, #0a3a86 0%, #0d47a1 45%, #1976d2 100%);
        }
        /* Pola titik halus + lingkaran dekoratif */
        .auth-brand::before {
            content: "";
            position: absolute; inset: 0;
            background-image: radial-gradient(rgba(255, 255, 255, .12) 1px, transparent 1px);
            background-size: 22px 22px;
            pointer-events: none;
        }
        .auth-brand .circle {
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, .15);
            pointer-events: none;
        }
        .auth-brand .circle-1 { width: 420px; height: 420px; right: -160px; top: -140px; }
        .auth-brand .circle-2 { width: 300px; height: 300px; right: -90px; top: -70px; background: rgba(255, 255, 255, .04); }
        .auth-brand .circle-3 { width: 260px; height: 260px; left: -120px; bottom: -110px; background: rgba(255, 255, 255, .05); }
        .auth-brand > * { position: relative; }

        .brand-logo { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 20px; }
        .brand-logo .icon {
            width: 44px; height: 44px; border-radius: 12px;
            background: rgba(255, 255, 255, .16);
            display: flex; align-items: center; justify-content: center; font-size: 22px;
        }

        .brand-headline { max-width: 440px; }
        .brand-headline h1 { font-size: 34px; font-weight: 800; line-height: 1.2; margin-bottom: 14px; }
        .brand-headline p { color: rgba(255, 255, 255, .78); font-size: 15px; line-height: 1.6; margin-bottom: 32px; }

        .feature { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 18px; }
        .feature .icon {
            flex-shrink: 0;
            width: 40px; height: 40px; border-radius: 10px;
            background: rgba(255, 255, 255, .14);
            display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .feature strong { display: block; font-size: 15px; }
        .feature span { color: rgba(255, 255, 255, .72); font-size: 13px; }

        .brand-footer { display: flex; align-items: center; gap: 12px; font-size: 13px; color: rgba(255, 255, 255, .72); }
        .brand-footer img {
            width: 40px; height: 40px; object-fit: contain;
            background: #fff; border-radius: 50%; padding: 3px;
        }

        /* ============ PANEL KANAN (FORM) ============ */
        .auth-main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            background: var(--auth-surface);
        }
        .auth-form { width: 100%; max-width: 420px; }

        .auth-form .mobile-logo { display: none; }
        .auth-form h2 { font-weight: 800; font-size: 28px; margin-bottom: 6px; }
        .auth-form .subtitle { color: var(--auth-muted); margin-bottom: 28px; }

        .form-label { font-weight: 600; font-size: 14px; color: var(--auth-text); }

        .input-icon { position: relative; }
        .input-icon > i.lead-icon {
            position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
            color: var(--auth-muted); font-size: 17px; pointer-events: none;
        }
        .input-icon .form-control { padding-left: 42px; }
        .input-icon .toggle-password {
            position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
            border: 0; background: transparent; color: var(--auth-muted);
            padding: 6px 8px; font-size: 17px; cursor: pointer;
        }
        .input-icon .toggle-password:hover { color: var(--auth-primary); }
        .input-icon.has-toggle .form-control { padding-right: 44px; }
        .input-icon .form-control.is-invalid { background-image: none; } /* ikon error bawaan bentrok dengan tombol mata */

        .form-control {
            padding: 12px 16px;
            border-radius: 10px;
            background-color: var(--auth-input);
            border: 1px solid var(--auth-border);
            color: var(--auth-text);
        }
        .form-control:focus {
            background-color: var(--auth-surface);
            border-color: var(--auth-primary);
            box-shadow: 0 0 0 4px rgba(13, 71, 161, .12);
            color: var(--auth-text);
        }
        .form-control::placeholder { color: #94a3b8; }

        .btn-auth {
            background: var(--auth-primary);
            border: 0;
            color: #fff;
            padding: 12px;
            border-radius: 10px;
            font-weight: 600;
            letter-spacing: .3px;
            transition: background .2s ease, transform .1s ease;
        }
        .btn-auth:hover, .btn-auth:focus { background: var(--auth-primary-hover); color: #fff; }
        .btn-auth:active { transform: scale(.99); }

        .auth-link { color: var(--auth-primary); text-decoration: none; font-weight: 600; }
        .auth-link:hover { text-decoration: underline; }

        .divider { display: flex; align-items: center; gap: 12px; color: var(--auth-muted); font-size: 13px; margin: 24px 0; }
        .divider::before, .divider::after { content: ""; flex: 1; height: 1px; background: var(--auth-border); }

        .auth-copy { color: var(--auth-muted); font-size: 12px; text-align: center; margin-top: 32px; }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 991.98px) {
            .auth-brand { display: none; }
            .auth-main { background: var(--auth-bg); }
            .auth-form {
                background: var(--auth-surface);
                padding: 32px 24px;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(15, 23, 42, .08);
            }
            [data-bs-theme="dark"] .auth-form { background: #1e293b; }
            .auth-form .mobile-logo {
                display: flex; align-items: center; gap: 10px;
                font-weight: 700; font-size: 18px; margin-bottom: 24px;
            }
            .auth-form .mobile-logo .icon {
                width: 40px; height: 40px; border-radius: 10px; color: #fff; font-size: 20px;
                background: linear-gradient(135deg, #0d47a1, #42a5f5);
                display: flex; align-items: center; justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="auth-wrapper">

        {{-- ================= PANEL KIRI ================= --}}
        <aside class="auth-brand">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>

            <div class="brand-logo">
                <span class="icon"><i class="bi bi-mortarboard-fill"></i></span>
                SIM Mahasiswa
            </div>

            <div class="brand-headline">
                <h1>Kelola data akademik dengan lebih rapi.</h1>
                <p>Sistem Informasi Data Mahasiswa untuk mencatat, mencari, dan melaporkan data mahasiswa serta program studi dalam satu tempat.</p>

                <div class="feature">
                    <span class="icon"><i class="bi bi-people-fill"></i></span>
                    <div>
                        <strong>Data mahasiswa terpusat</strong>
                        <span>Tambah, cari, dan filter data per program studi.</span>
                    </div>
                </div>
                <div class="feature">
                    <span class="icon"><i class="bi bi-bar-chart-fill"></i></span>
                    <div>
                        <strong>Statistik langsung di dashboard</strong>
                        <span>Grafik per prodi dan jenis kelamin yang selalu terbaru.</span>
                    </div>
                </div>
                <div class="feature">
                    <span class="icon"><i class="bi bi-file-earmark-pdf-fill"></i></span>
                    <div>
                        <strong>Laporan siap cetak</strong>
                        <span>Unduh daftar mahasiswa dalam format PDF berkop resmi.</span>
                    </div>
                </div>
            </div>

            <div class="brand-footer">
                <img src="{{ asset('stitek.png') }}" alt="Logo kampus" onerror="this.remove()">
                <span>Sekolah Tinggi Teknologi Bontang<br>&copy; {{ date('Y') }} SIM Mahasiswa</span>
            </div>
        </aside>

        {{-- ================= PANEL KANAN ================= --}}
        <main class="auth-main">
            <div class="auth-form">
                <div class="mobile-logo">
                    <span class="icon"><i class="bi bi-mortarboard-fill"></i></span>
                    SIM Mahasiswa
                </div>

                @yield('content')

                <div class="auth-copy">&copy; {{ date('Y') }} SIM Mahasiswa &middot; Sistem Informasi Data Mahasiswa</div>
            </div>
        </main>
    </div>

    <script>
        // Tombol lihat / sembunyikan password (dipakai semua halaman auth)
        document.querySelectorAll('.toggle-password').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const input = document.getElementById(this.dataset.target);
                const tampil = input.type === 'password';
                input.type = tampil ? 'text' : 'password';
                this.querySelector('i').className = tampil ? 'bi bi-eye-slash' : 'bi bi-eye';
                this.setAttribute('aria-label', tampil ? 'Sembunyikan password' : 'Tampilkan password');
            });
        });

        // Cegah klik ganda saat form dikirim
        document.querySelectorAll('form[data-loading]').forEach(function (form) {
            form.addEventListener('submit', function () {
                const btn = form.querySelector('button[type="submit"]');
                if (!btn) return;
                btn.disabled = true;
                btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>' + form.dataset.loading;
            });
        });
    </script>
    @stack('scripts')
</body>
</html>