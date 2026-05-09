<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('news')->truncate();

        $user = DB::table('users')->first();

        $data = [
            [
                'title' => 'Polusi Udara Ancam Kesehatan Anak di Sekitar Kawasan Industri',
                'excerpt' => 'Paparan polutan tinggi meningkatkan risiko gangguan pernapasan pada anak-anak sekolah.',
                'content' => '
                <p>Anak-anak merupakan kelompok paling rentan terhadap dampak polusi udara. Sistem pernapasan yang masih berkembang membuat mereka lebih mudah terpapar partikel berbahaya seperti PM2.5.</p>

                <p>Di kawasan industri, konsentrasi polutan sering kali melebihi ambang batas aman. Hal ini berdampak langsung pada meningkatnya kasus batuk kronis, asma, dan infeksi saluran pernapasan akut (ISPA).</p>

                <p>Lingkungan sekolah yang seharusnya menjadi tempat belajar yang aman justru berpotensi menjadi titik paparan tinggi jika berada dekat sumber emisi.</p>

                <p>Perlindungan terhadap anak-anak harus menjadi prioritas melalui pemantauan kualitas udara dan kebijakan zonasi yang lebih ketat.</p>
                ',
                'thumbnail' => '/news/image.png',
            ],
            [
                'title' => 'Krisis Udara Bersih: Warga Terpapar Tanpa Perlindungan Memadai',
                'excerpt' => 'Kurangnya pengawasan emisi membuat masyarakat terus terpapar polusi berbahaya.',
                'content' => '
                <p>Banyak masyarakat yang hidup di sekitar kawasan industri tanpa perlindungan memadai terhadap polusi udara. Mereka terpapar setiap hari tanpa menyadari dampak jangka panjangnya.</p>

                <p>Kurangnya transparansi data kualitas udara membuat masyarakat sulit mengambil tindakan preventif.</p>

                <p>Padahal, akses terhadap informasi lingkungan adalah hak dasar yang harus dipenuhi oleh pemerintah dan pelaku industri.</p>

                <p>Tanpa intervensi nyata, krisis ini berpotensi memperburuk kualitas hidup generasi mendatang.</p>
                ',
                'thumbnail' => '/news/berita1.jpg',
            ],
            [
                'title' => 'Emisi Industri Masih Jadi Penyumbang Utama Polusi Udara',
                'excerpt' => 'Aktivitas industri berat meningkatkan konsentrasi PM2.5 dan SO₂ di udara.',
                'content' => '
                <p>Sektor industri masih menjadi salah satu penyumbang terbesar polusi udara, khususnya di wilayah dengan aktivitas produksi tinggi.</p>

                <p>Proses pembakaran bahan bakar fosil menghasilkan berbagai polutan seperti SO₂ dan partikel halus yang berbahaya bagi kesehatan.</p>

                <p>Tanpa teknologi pengendalian emisi yang memadai, polutan ini akan terus dilepaskan ke atmosfer.</p>

                <p>Diperlukan regulasi yang lebih ketat serta penerapan teknologi ramah lingkungan untuk mengurangi dampak ini.</p>
                ',
                'thumbnail' => '/news/berita2.jpg',
            ],
            [
                'title' => 'Dampak Polusi Udara Tidak Terlihat Tapi Mematikan',
                'excerpt' => 'Efek jangka panjang polusi udara dapat merusak organ vital manusia.',
                'content' => '
                <p>Polusi udara sering kali tidak terlihat secara kasat mata, namun dampaknya sangat serius bagi kesehatan manusia.</p>

                <p>Paparan jangka panjang dapat menyebabkan gangguan jantung, stroke, hingga kanker paru-paru.</p>

                <p>Karena efeknya tidak langsung terasa, banyak orang yang mengabaikan bahaya ini.</p>

                <p>Edukasi publik menjadi kunci untuk meningkatkan kesadaran terhadap risiko yang tersembunyi ini.</p>
                ',
                'thumbnail' => '/news/berita3.jpg',
            ],
            [
                'title' => 'Udara Bersih Adalah Hak, Bukan Privilege',
                'excerpt' => 'Masyarakat berhak mendapatkan lingkungan yang sehat dan bebas polusi.',
                'content' => '
                <p>Udara bersih merupakan hak dasar setiap manusia, bukan sekadar fasilitas tambahan.</p>

                <p>Namun kenyataannya, tidak semua masyarakat memiliki akses terhadap kualitas udara yang baik.</p>

                <p>Ketimpangan ini sering terjadi di wilayah dengan aktivitas industri tinggi.</p>

                <p>Perlu adanya komitmen bersama untuk memastikan lingkungan yang sehat bagi semua.</p>
                ',
                'thumbnail' => '/news/berita4.jpg',
            ],
            [
                'title' => 'Kualitas Udara Buruk Picu Lonjakan Penyakit Pernapasan',
                'excerpt' => 'Data menunjukkan peningkatan kasus ISPA di wilayah dengan polusi tinggi.',
                'content' => '
                <p>Peningkatan polusi udara berbanding lurus dengan lonjakan kasus penyakit pernapasan.</p>

                <p>Rumah sakit di beberapa wilayah melaporkan peningkatan pasien dengan gejala ISPA dan asma.</p>

                <p>Kondisi ini menunjukkan bahwa kualitas udara memiliki dampak langsung terhadap kesehatan masyarakat.</p>

                <p>Upaya pencegahan harus dilakukan melalui pemantauan dan pengendalian sumber polusi.</p>
                ',
                'thumbnail' => '/news/berita5.jpg',
            ],
            [
                'title' => 'Paparan NO₂ dan CO Tinggi Ditemukan di Sekitar Sekolah',
                'excerpt' => 'Lingkungan pendidikan tidak luput dari ancaman polusi udara.',
                'content' => '
                <p>Beberapa hasil pemantauan menunjukkan tingginya konsentrasi NO₂ dan CO di sekitar lingkungan sekolah.</p>

                <p>Polutan ini umumnya berasal dari kendaraan bermotor dan aktivitas industri di sekitar area tersebut.</p>

                <p>Jika dibiarkan, kondisi ini dapat mengganggu proses belajar dan kesehatan siswa.</p>

                <p>Diperlukan upaya mitigasi seperti pembatasan kendaraan dan penghijauan lingkungan sekolah.</p>
                ',
                'thumbnail' => '/news/berita6.jpg',
            ],
            [
                'title' => 'Perlu Aksi Nyata untuk Mengurangi Polusi Udara',
                'excerpt' => 'Kolaborasi pemerintah, industri, dan masyarakat sangat dibutuhkan.',
                'content' => '
                <p>Pengurangan polusi udara tidak dapat dilakukan oleh satu pihak saja.</p>

                <p>Dibutuhkan kolaborasi antara pemerintah, pelaku industri, dan masyarakat untuk menciptakan solusi yang efektif.</p>

                <p>Langkah seperti penggunaan energi bersih, transportasi ramah lingkungan, dan pengawasan emisi harus diperkuat.</p>

                <p>Dengan aksi bersama, kualitas udara dapat diperbaiki untuk masa depan yang lebih sehat.</p>
                ',
                'thumbnail' => '/news/berita7.jpg',
            ],
        ];

        foreach ($data as $item) {

            $slug = Str::slug($item['title']);
            $count = News::where('slug', 'LIKE', "{$slug}%")->count();
            if ($count > 0) {
                $slug .= '-' . ($count + 1);
            }

            News::create([
                'title' => $item['title'],
                'slug' => $slug,
                'excerpt' => $item['excerpt'],
                'thumbnail' => $item['thumbnail'],
                'content' => $item['content'],
                'status' => 'published',
                'published_at' => Carbon::now()->subDays(rand(1, 10)),
                'author_id' => $user->id ?? 1,
            ]);
        }
    }
}
