@extends('layouts.auth')

@section('title', 'Daftar')

@section('content')
    <h2>Buat akun baru</h2>
    <p class="subtitle">Isi data di bawah untuk mulai memakai SIM Mahasiswa.</p>

    <form method="POST" action="{{ route('register') }}" data-loading="Membuat akun...">
        @csrf

        {{-- NAMA --}}
        <div class="mb-3">
            <label for="name" class="form-label">Nama Lengkap</label>
            <div class="input-icon">
                <i class="bi bi-person lead-icon"></i>
                <input type="text" id="name" name="name"
                       class="form-control @error('name') is-invalid @enderror"
                       value="{{ old('name') }}" placeholder="Masukkan nama lengkap"
                       required autofocus autocomplete="name">
            </div>
            @error('name')
                <div class="invalid-feedback d-block">{{ $message }}</div>
            @enderror
        </div>

        {{-- EMAIL --}}
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <div class="input-icon">
                <i class="bi bi-envelope lead-icon"></i>
                <input type="email" id="email" name="email"
                       class="form-control @error('email') is-invalid @enderror"
                       value="{{ old('email') }}" placeholder="nama@email.com"
                       required autocomplete="username">
            </div>
            @error('email')
                <div class="invalid-feedback d-block">{{ $message }}</div>
            @enderror
        </div>

        {{-- PASSWORD --}}
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-icon has-toggle">
                <i class="bi bi-lock lead-icon"></i>
                <input type="password" id="password" name="password"
                       class="form-control @error('password') is-invalid @enderror"
                       placeholder="Minimal 8 karakter" minlength="8" required autocomplete="new-password">
                <button type="button" class="toggle-password" data-target="password" aria-label="Tampilkan password">
                    <i class="bi bi-eye"></i>
                </button>
            </div>

            {{-- Indikator kekuatan password --}}
            <div class="progress mt-2" style="height: 5px;" role="progressbar" aria-label="Kekuatan password">
                <div id="strengthBar" class="progress-bar" style="width: 0%;"></div>
            </div>
            <small id="strengthText" style="color: var(--auth-muted);">Gunakan kombinasi huruf besar, angka, dan simbol.</small>

            @error('password')
                <div class="invalid-feedback d-block">{{ $message }}</div>
            @enderror
        </div>

        {{-- KONFIRMASI PASSWORD --}}
        <div class="mb-4">
            <label for="password_confirmation" class="form-label">Konfirmasi Password</label>
            <div class="input-icon has-toggle">
                <i class="bi bi-shield-lock lead-icon"></i>
                <input type="password" id="password_confirmation" name="password_confirmation"
                       class="form-control" placeholder="Ulangi password" minlength="8"
                       required autocomplete="new-password">
                <button type="button" class="toggle-password" data-target="password_confirmation" aria-label="Tampilkan password">
                    <i class="bi bi-eye"></i>
                </button>
            </div>
            <small id="matchText" class="d-none"></small>
        </div>

        <button type="submit" class="btn btn-auth w-100">
            <i class="bi bi-person-plus me-1"></i> Daftar
        </button>
    </form>

    <div class="divider">atau</div>
    <p class="text-center small mb-0" style="color: var(--auth-muted);">
        Sudah punya akun? <a href="{{ route('login') }}" class="auth-link">Masuk di sini</a>
    </p>
@endsection

@push('scripts')
<script>
    const pass = document.getElementById('password');
    const konfirmasi = document.getElementById('password_confirmation');
    const bar = document.getElementById('strengthBar');
    const teks = document.getElementById('strengthText');
    const cocok = document.getElementById('matchText');

    // Hitung kekuatan password sederhana (0–4)
    pass.addEventListener('input', function () {
        const v = this.value;
        let skor = 0;
        if (v.length >= 8) skor++;
        if (/[A-Z]/.test(v) && /[a-z]/.test(v)) skor++;
        if (/\d/.test(v)) skor++;
        if (/[^A-Za-z0-9]/.test(v)) skor++;

        const level = [
            { w: 0,   cls: '',           label: 'Gunakan kombinasi huruf besar, angka, dan simbol.' },
            { w: 25,  cls: 'bg-danger',  label: 'Lemah' },
            { w: 50,  cls: 'bg-warning', label: 'Cukup' },
            { w: 75,  cls: 'bg-info',    label: 'Baik' },
            { w: 100, cls: 'bg-success', label: 'Kuat' },
        ][v.length ? Math.max(skor, 1) : 0];

        bar.style.width = level.w + '%';
        bar.className = 'progress-bar ' + level.cls;
        teks.textContent = v.length ? 'Kekuatan password: ' + level.label : level.label;
        cekCocok();
    });

    // Cek konfirmasi password langsung saat mengetik
    function cekCocok() {
        if (!konfirmasi.value) {
            cocok.classList.add('d-none');
            konfirmasi.setCustomValidity('');
            return;
        }
        const sama = konfirmasi.value === pass.value;
        cocok.classList.remove('d-none');
        cocok.className = 'small ' + (sama ? 'text-success' : 'text-danger');
        cocok.innerHTML = sama
            ? '<i class="bi bi-check-circle-fill me-1"></i>Password cocok'
            : '<i class="bi bi-x-circle-fill me-1"></i>Password tidak sama';
        konfirmasi.setCustomValidity(sama ? '' : 'Konfirmasi password tidak sama.');
    }
    konfirmasi.addEventListener('input', cekCocok);
</script>
@endpush