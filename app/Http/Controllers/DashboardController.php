<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\Prodi;

class DashboardController extends Controller
{
    /**
     * Menampilkan statistik ringkasan dan data terbaru di Dashboard.
     */
    public function index()
    {
        $totalMahasiswa = Mahasiswa::count();
        $totalLakiLaki  = Mahasiswa::where('jenis_kelamin', 'Laki-laki')->count();
        $totalPerempuan = Mahasiswa::where('jenis_kelamin', 'Perempuan')->count();
        $totalProdi     = Prodi::count();

        /*
         | PERSENTASE NAIK / TURUN
         | Membandingkan jumlah sekarang dengan jumlah 30 hari yang lalu
         | (data yang created_at-nya sudah ada sebelum batas tanggal).
         | Cukup 1 query untuk ketiga angka mahasiswa agar dashboard tetap cepat.
         */
        $batas = now()->subDays(30);

        $sebelum = Mahasiswa::where('created_at', '<=', $batas)
            ->selectRaw("
                COUNT(*) AS total,
                SUM(CASE WHEN jenis_kelamin = 'Laki-laki' THEN 1 ELSE 0 END) AS laki,
                SUM(CASE WHEN jenis_kelamin = 'Perempuan' THEN 1 ELSE 0 END) AS perempuan
            ")
            ->first();

        $prodiSebelum = Prodi::where('created_at', '<=', $batas)->count();

        $persen = [
            'total'     => $this->hitungPerubahan($totalMahasiswa, (int) $sebelum->total),
            'laki'      => $this->hitungPerubahan($totalLakiLaki, (int) $sebelum->laki),
            'perempuan' => $this->hitungPerubahan($totalPerempuan, (int) $sebelum->perempuan),
            'prodi'     => $this->hitungPerubahan($totalProdi, $prodiSebelum),
        ];

        // 5 Mahasiswa yang baru ditambahkan
        $mahasiswaTerbaru = Mahasiswa::with('prodi')
            ->latest()
            ->take(5)
            ->get();

        // Rekapitulasi jumlah mahasiswa per Program Studi
        $mahasiswaPerProdi = Prodi::withCount('mahasiswas')
            ->orderByDesc('mahasiswas_count')
            ->get();

        return view('dashboard', compact(
            'totalMahasiswa',
            'totalLakiLaki',
            'totalPerempuan',
            'totalProdi',
            'persen',
            'mahasiswaTerbaru',
            'mahasiswaPerProdi'
        ));
    }

    /**
     * Menyiapkan data badge persentase: teks, warna, dan ikon panah.
     */
    private function hitungPerubahan(int $sekarang, int $sebelumnya): array
    {
        // Belum ada data 30 hari lalu: semua data dianggap pertambahan (+100%)
        $nilai = $sebelumnya === 0
            ? ($sekarang > 0 ? 100.0 : 0.0)
            : round(($sekarang - $sebelumnya) / $sebelumnya * 100, 1);

        if ($nilai > 0) {
            return ['teks' => '+' . $nilai . '%', 'kelas' => 'bg-success bg-opacity-10 text-success', 'ikon' => 'bi-arrow-up-short'];
        }

        if ($nilai < 0) {
            return ['teks' => $nilai . '%', 'kelas' => 'bg-danger bg-opacity-10 text-danger', 'ikon' => 'bi-arrow-down-short'];
        }

        return ['teks' => '0%', 'kelas' => 'bg-secondary bg-opacity-10 text-secondary', 'ikon' => 'bi-dash'];
    }
}