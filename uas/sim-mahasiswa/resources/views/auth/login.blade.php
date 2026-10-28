@extends('layouts.auth')

@section('title', 'Masuk')

@section('content')
    <h2>Selamat datang kembali</h2>
    <p class="subtitle">Masuk untuk mengelola data mahasiswa.</p>

    {{-- Pesan dari sistem, misalnya setelah reset password berhasil --}}
    @if (session('status'))
        <div class="alert alert-success small border-0 rounded-3 d-flex align-items-center gap-2">
            <i class="bi bi-check-circle-fill"></i> {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('login') }}" data-loading="Memproses...">
        @csrf

        {{-- EMAIL --}}
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <div class="input-icon">
                <i class="bi bi-envelope lead-icon"></i>
                <input type="email" id="email" name="email"
                       class="form-control @error('email') is-invalid @enderror"
                       value="{{ old('email') }}" placeholder="nama@email.com"
                       required autofocus autocomplete="username">
            </div>
            @error('email')
                <div class="invalid-feedback d-block">{{ $message }}</div>
            @enderror
        </div>

        {{-- PASSWORD --}}
        <div class="mb-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <label for="password" class="form-label mb-0">Password</label>
                @if (Route::has('password.request'))
                    <a href="{{ route('password.request') }}" class="auth-link small">Lupa password?</a>
                @endif
            </div>
            <div class="input-icon has-toggle">
                <i class="bi bi-lock lead-icon"></i>
                <input type="password" id="password" name="password"
                       class="form-control @error('password') is-invalid @enderror"
                       placeholder="Masukkan password" required autocomplete="current-password">
                <button type="button" class="toggle-password" data-target="password" aria-label="Tampilkan password">
                    <i class="bi bi-eye"></i>
                </button>
            </div>
            @error('password')
                <div class="invalid-feedback d-block">{{ $message }}</div>
            @enderror
        </div>

        {{-- INGAT SAYA --}}
        <div class="form-check mb-4">
            <input type="checkbox" class="form-check-input" id="remember_me" name="remember">
            <label class="form-check-label small user-select-none" for="remember_me">Ingat saya di perangkat ini</label>
        </div>

        <button type="submit" class="btn btn-auth w-100">
            <i class="bi bi-box-arrow-in-right me-1"></i> Masuk
        </button>
    </form>

    @if (Route::has('register'))
        <div class="divider">atau</div>
        <p class="text-center small mb-0" style="color: var(--auth-muted);">
            Belum punya akun? <a href="{{ route('register') }}" class="auth-link">Daftar sekarang</a>
        </p>
    @endif
@endsection