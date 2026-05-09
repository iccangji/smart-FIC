import { Wind, HeartPulse, Brain, Activity } from 'lucide-react';
import { School, Users, Factory, Cpu, FlaskConical } from 'lucide-react';
export const learningSections = [
    {
        id: 'polutan',
        tag: 'BAB II',
        title: 'Polusi Udara & Sumber Pencemar',
        body: 'Polusi udara adalah perubahan komposisi atmosfer akibat masuknya bahan yang menimbulkan gangguan kesehatan. WHO menyebutnya "silent killer" — bertanggung jawab atas 7 juta kematian prematur setiap tahun. Di kawasan industri, sumber utamanya berasal dari pembakaran bahan bakar fosil, peleburan logam, dan transportasi berat.',
        image: 'https://images.unsplash.com/photo-1582980752625-10783b273e2d',
        imageAlt: 'Ilustrasi polusi udara kawasan industri',
        reverse: false,
        accent: 'bg-cyan-500',
        tagColor: 'bg-cyan-100 text-cyan-700',
        topics: [
            {
                q: 'Apa itu PM2.5 dan mengapa berbahaya?',
                a: 'PM2.5 adalah partikel sangat halus (<2,5 mikrometer) yang dapat masuk hingga ke paru-paru bahkan ke aliran darah. Paparan jangka panjang dapat memicu gangguan pernapasan, penyakit jantung, dan inflamasi. WHO menetapkan batas aman 15 µg/m³ per 24 jam, namun di kawasan industri konsentrasinya sering melebihi batas tersebut.'
            },
            {
                q: 'Apa itu PM10 dan mengapa berbahaya?',
                a: 'PM10 adalah partikel debu berukuran lebih besar dibanding PM2.5. Partikel ini umumnya berasal dari debu jalan, konstruksi, dan aktivitas industri. Dampaknya meliputi iritasi mata, hidung, tenggorokan, serta memperparah penyakit pernapasan seperti asma.'
            },
            {
                q: 'Apa itu SO₂ (Sulfur Dioksida) dan mengapa berbahaya?',
                a: 'SO₂ adalah gas yang dihasilkan dari pembakaran bahan bakar fosil seperti batu bara di industri dan pembangkit listrik. Gas ini dapat menyebabkan iritasi saluran pernapasan, memperparah asma, dan dalam jangka panjang berdampak pada fungsi paru-paru.'
            },
            {
                q: 'Apa itu NO₂ (Nitrogen Dioksida) dan mengapa berbahaya?',
                a: 'NO₂ berasal dari emisi kendaraan bermotor dan proses pembakaran di industri. Paparan NO₂ dapat menurunkan fungsi paru-paru, meningkatkan risiko infeksi saluran pernapasan, dan berdampak buruk bagi anak-anak.'
            },
            {
                q: 'Apa itu CO (Karbon Monoksida) dan mengapa berbahaya?',
                a: 'CO adalah gas tidak berwarna dan tidak berbau yang dihasilkan dari pembakaran tidak sempurna. Gas ini berbahaya karena dapat mengganggu kemampuan darah dalam membawa oksigen, yang bisa menyebabkan pusing, sesak napas, bahkan keracunan.'
            },
            {
                q: 'Apa sumber polutan utama di kawasan industri?',
                a: 'Sumber utama meliputi pembakaran batu bara (SO₂), kendaraan berat berbahan bakar diesel (NO₂ dan CO), proses industri seperti smelter (PM dan logam berat), serta aktivitas manufaktur. Semua ini berkontribusi terhadap peningkatan berbagai polutan di udara.'
            },
            {
                q: 'Apa standar baku mutu udara di Indonesia?',
                a: 'Berdasarkan Permen LHK No. 14 Tahun 2020 (ISPU): Baik (0–50), Sedang (51–100), Tidak Sehat (101–200), Sangat Tidak Sehat (201–300), dan Berbahaya (>300). Setiap kategori menunjukkan tingkat risiko terhadap kesehatan masyarakat.'
            }
        ]
    },
    {
        id: 'paparan',
        tag: 'BAB III',
        title: 'Paparan Polusi pada Siswa Sekolah',
        body: 'Siswa adalah kelompok paling rentan. Laju pernapasan anak 2–3× lebih tinggi dari dewasa, sistem imun belum matang, dan organ paru masih berkembang hingga usia 8 tahun. Sekolah dalam radius 500–1000 meter dari kawasan industri mencatat paparan PM2.5 jauh di atas ambang batas aman.',
        image: 'https://images.unsplash.com/photo-1761918900844-738b9a6a4744',
        imageAlt: 'Siswa sekolah di dekat kawasan industri',
        reverse: true,
        accent: 'bg-sky-500',
        tagColor: 'bg-sky-100 text-sky-700',
        topics: [
            { q: 'Mengapa anak lebih rentan dari orang dewasa?', a: 'Anak menghirup lebih banyak udara per kilogram berat badan. Alveolus baru terbentuk hingga usia 6–8 tahun, sehingga paparan polutan dapat menyebabkan kerusakan struktural permanen. Sistem imun yang belum matang memperburuk respons inflamatorik.' },
            { q: 'Berapa lama siswa terpapar polutan setiap hari?', a: 'Siswa menghabiskan 8–10 jam di sekolah dengan aktivitas di luar ruangan saat istirahat dan olahraga. Jam-jam tersebut sering bertepatan dengan puncak emisi industri di pagi hari, terutama saat inversi suhu menghambat dispersi polutan.' },
            { q: 'Bagaimana jalur utama polutan masuk ke tubuh anak?', a: 'Jalur inhalasi adalah yang dominan: polutan terhirup masuk bronkus, bronkiolus, hingga alveolus. PM2.5 yang sangat halus bahkan dapat masuk ke aliran darah. Aktivitas fisik meningkatkan volume inhalasi, memperbesar dosis internal polutan.' },
        ],
    },
    {
        id: 'metode',
        tag: 'BAB V – VI',
        title: 'Metode Penilaian Risiko & Probabilitas',
        body: 'Risk Assessment menggabungkan identifikasi bahaya, dosis-respons, estimasi paparan, dan karakterisasi risiko. Pendekatan probabilistik seperti Monte Carlo memberikan distribusi risiko yang lebih realistis dibanding nilai tunggal deterministik — kunci untuk kebijakan berbasis bukti.',
        image: 'https://images.unsplash.com/photo-1702051295797-175587be5133',
        imageAlt: 'Visualisasi analisis Monte Carlo dan distribusi risiko',
        reverse: false,
        accent: 'bg-blue-500',
        tagColor: 'bg-blue-100 text-blue-700',
        topics: [
            { q: 'Apa itu Hazard Quotient (HQ)?', a: 'HQ = CDI / RfD. CDI adalah Chronic Daily Intake (dosis harian kronis), RfD adalah Reference Dose (ambang aman). HQ ≥ 1 menunjukkan risiko kesehatan yang perlu perhatian serius. HQ < 1 berarti risiko masih dalam batas dapat diterima.' },
            { q: 'Apa keunggulan simulasi Monte Carlo?', a: 'Monte Carlo menjalankan ribuan iterasi (10.000–100.000) dengan variasi parameter acak menggunakan distribusi probabilitas (Normal, Lognormal, Weibull). Hasilnya adalah distribusi risiko yang menggambarkan ketidakpastian secara realistis, bukan satu angka statis.' },
            { q: 'Apa itu ELCR dan kapan digunakan?', a: 'Excess Lifetime Cancer Risk (ELCR) = CDI × Slope Factor. Digunakan untuk menilai risiko karsinogenik dari polutan seperti logam berat (Ni, Cr, Pb) di kawasan industri. ELCR > 1×10⁻⁴ dianggap signifikan secara kesehatan masyarakat.' },
        ],
    },
    {
        id: 'sensitivitas',
        tag: 'BAB VII',
        title: 'Analisis Sensitivitas Faktor Risiko',
        body: 'Analisis sensitivitas mengidentifikasi variabel yang paling memengaruhi besarnya risiko kesehatan, sehingga intervensi bisa tepat sasaran dan efisien. Faktor dominan umumnya adalah konsentrasi polutan, berat badan anak, dan durasi paparan harian.',
        image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba',
        imageAlt: 'Diagram tornado analisis sensitivitas faktor risiko',
        reverse: true,
        accent: 'bg-violet-500',
        tagColor: 'bg-violet-100 text-violet-700',
        topics: [
            { q: 'Faktor apa yang paling dominan memengaruhi risiko?', a: 'Urutan faktor dominan: (1) Konsentrasi polutan di udara, (2) Durasi paparan harian, (3) Berat badan anak, (4) Laju inhalasi, (5) Frekuensi paparan tahunan. Dengan mengetahui urutan ini, intervensi dapat difokuskan ke faktor yang paling berdampak.' },
            { q: 'Metode apa yang digunakan dalam analisis sensitivitas?', a: 'Analisis Tornado (visualisasi bar bidirectional), Korelasi Rank Spearman (hubungan parameter–risiko), dan Analisis Varians berbasis simulasi Monte Carlo. Ketiganya saling melengkapi untuk menggambarkan kontribusi relatif setiap variabel.' },
        ],
    },
];

export const impactSections = [
    {
        icon: Wind,
        color: 'border-red-200 bg-red-50',
        iconBg: 'bg-red-500',
        tag: 'Efek Akut',
        tagColor: 'bg-red-100 text-red-700',
        title: 'Gangguan Pernapasan Jangka Pendek',
        image: 'https://images.unsplash.com/photo-1765621389965-d19f8f711a50',
        items: ['Batuk & mengi', 'Sesak napas saat aktivitas fisik', 'Alergi saluran napas', 'Penurunan fungsi paru (FEV1 & FVC)'],
        faq: [
            { q: 'Seberapa cepat efek akut muncul?', a: 'Gejala seperti batuk, mengi, dan sesak dapat muncul dalam beberapa jam hingga hari setelah paparan konsentrasi polutan yang tinggi, terutama PM2.5 dan SO₂.' },
            { q: 'Apakah efek akut bersifat reversibel?', a: 'Sebagian besar efek akut bersifat reversibel jika paparan dihentikan. Namun paparan berulang dapat menyebabkan kerusakan kumulatif yang pada akhirnya bersifat permanen.' },
        ],
    },
    {
        icon: HeartPulse,
        color: 'border-orange-200 bg-orange-50',
        iconBg: 'bg-orange-500',
        tag: 'Efek Kronis',
        tagColor: 'bg-orange-100 text-orange-700',
        title: 'Penyakit Jangka Panjang',
        image: 'https://images.unsplash.com/photo-1741644044445-20c1bc2d0bd3',
        items: ['Asma kronis & serangan berulang', 'Penurunan kapasitas vital paru (permanen)', 'Penyakit kardiopulmoner', 'PPOK di masa dewasa'],
        faq: [
            { q: 'Mengapa paparan dini sangat berbahaya?', a: 'Alveolus paru anak berkembang hingga usia 6–8 tahun. Paparan polutan pada periode kritis ini dapat menghambat perkembangan struktural dan menyebabkan kerusakan permanen yang memengaruhi kapasitas paru seumur hidup.' },
            { q: 'Apakah ada bukti empiris dampak kronis pada anak?', a: 'Ya. Paparan NO₂ telah dikaitkan dengan peningkatan kejadian asma pada anak (Wang et al., 2019). Studi longitudinal menunjukkan anak yang terpapar PM2.5 tinggi sejak sekolah dasar memiliki kapasitas vital paru lebih rendah saat remaja.' },
        ],
    },
    {
        icon: Brain,
        color: 'border-violet-200 bg-violet-50',
        iconBg: 'bg-violet-500',
        tag: 'Neurokognitif',
        tagColor: 'bg-violet-100 text-violet-700',
        title: 'Dampak pada Otak & Kecerdasan',
        image: 'https://images.unsplash.com/photo-1633442495686-e8b67cffab53',
        items: ['Memori berkembang 13% lebih lambat', 'Gangguan perhatian & konsentrasi', 'Penurunan fungsi kognitif', 'Risiko gangguan neurodevelopmental'],
        faq: [
            { q: 'Studi apa yang membuktikan dampak kognitif?', a: 'Studi Sunyer et al. (2015) di 39 sekolah Barcelona: anak terpapar NO₂ dan PM2.5 lebih tinggi selama 12 bulan mengalami perkembangan memori 13% lebih lambat. Edwards et al. (2020) juga mengaitkan paparan PM2.5 dengan penurunan fungsi kognitif anak.' },
            { q: 'Bagaimana polutan dapat memengaruhi otak?', a: 'PM2.5 ultra-halus dapat menembus sawar darah-otak (blood-brain barrier), menyebabkan neuroinflammasi. NO₂ memicu stres oksidatif yang merusak neuron. Paparan kronis berhubungan dengan atrofi struktur otak yang terkait memori dan perhatian.' },
        ],
    },
    {
        icon: Activity,
        color: 'border-blue-200 bg-blue-50',
        iconBg: 'bg-blue-500',
        tag: 'Akademik',
        tagColor: 'bg-blue-100 text-blue-700',
        title: 'Dampak pada Performa Sekolah',
        image: 'https://images.unsplash.com/photo-1599689868384-59cb2b01bb21',
        items: ['Penurunan nilai ujian & kemampuan belajar', 'Peningkatan absensi sekolah', 'Penurunan produktivitas jangka panjang', 'Gangguan konsentrasi di kelas'],
        faq: [
            { q: 'Seberapa signifikan dampaknya terhadap nilai?', a: 'Studi di berbagai negara menemukan korelasi negatif antara konsentrasi PM2.5 di sekitar sekolah dengan hasil ujian standar siswa. Anak yang tinggal dekat jalan raya ramai atau industri cenderung memiliki nilai matematika dan bahasa lebih rendah.' },
            { q: 'Apakah absensi berdampak jangka panjang?', a: 'Ya. Absensi yang sering akibat keluhan kesehatan menyebabkan ketertinggalan materi yang bersifat kumulatif. Dalam jangka panjang, ini dapat memengaruhi jenjang pendidikan, peluang kerja, dan produktivitas ekonomi anak.' },
        ],
    },
];

export const pillars = [
    {
        icon: School,
        color: { bg: 'bg-blue-500', tag: 'bg-blue-100 text-blue-700', border: 'border-blue-200', accent: 'border-blue-400', section: 'bg-white' },
        tag: 'BAB VIII.1',
        title: 'Kebijakan Berbasis Sekolah',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1332',
        imageAlt: 'Intervensi berbasis sekolah untuk kualitas udara',
        summary: 'Sekolah sebagai garis terdepan perlindungan siswa. Jadwal adaptif, teknologi filtrasi udara, dan edukasi adalah kunci intervensi yang efektif dan cost-effective.',
        actions: [
            { label: 'Penjadwalan Aktivitas Outdoor Adaptif', desc: 'Geser jam olahraga dan istirahat ke siang hari saat PM2.5 lebih rendah; hindari pagi hari saat inversi suhu tinggi.' },
            { label: 'Air Purifier HEPA di Ruang Kelas', desc: 'Filter HEPA dapat menurunkan konsentrasi PM2.5 indoor hingga 80%, meningkatkan kualitas udara belajar.' },
            { label: 'Green Buffer Zone di Perimeter Sekolah', desc: 'Penanaman pohon peneduh sebagai barrier alami yang menyerap polutan dan partikel debu.' },
            { label: 'SOP & Edukasi Kesehatan Udara', desc: 'Pelatihan guru dan siswa tentang gejala paparan, penggunaan masker N95, dan prosedur darurat ISPU tidak sehat.' },
            { label: 'Sensor IoT Real-time di Area Sekolah', desc: 'Monitoring PM2.5 harian dengan notifikasi otomatis kepada pihak sekolah saat ambang batas terlampaui.' },
        ],
        faq: [
            { q: 'Mengapa sekolah perlu sensor IoT sendiri?', a: 'Stasiun pemantauan pemerintah sering berjarak jauh dari sekolah. Sensor IoT lokal memberikan data hyperlocal yang akurat untuk pengambilan keputusan cepat, seperti menutup jendela atau memindahkan aktivitas ke dalam ruangan.' },
            { q: 'Seberapa efektif green buffer zone?', a: 'Studi menunjukkan barrier pohon dapat mengurangi konsentrasi PM10 di area downwind hingga 25–50%, tergantung jenis tanaman, kerapatan, dan ketinggian. Jenis efektif termasuk Angsana, Mahoni, dan Trembesi.' },
        ],
    },
    {
        icon: Users,
        color: { bg: 'bg-emerald-500', tag: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200', accent: 'border-emerald-400', section: 'bg-gray-50' },
        tag: 'BAB VIII.2',
        title: 'Kebijakan Berbasis Komunitas',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
        imageAlt: 'Intervensi berbasis komunitas untuk kualitas udara',
        summary: 'Pemberdayaan masyarakat sekitar kawasan industri untuk memantau, melaporkan, dan merespons polusi udara secara mandiri dan berkelanjutan.',
        actions: [
            { label: 'Kelompok Pemantau Udara Komunitas', desc: 'Warga terlatih mengoperasikan sensor IoT portabel, mencatat data harian, dan melaporkan anomali ke dinas lingkungan.' },
            { label: 'Program Penghijauan Permukiman', desc: 'Tanam pohon penyerap SO₂ dan PM di kawasan permukiman sekitar industri: Angsana, Mahoni, Ketapang.' },
            { label: 'Sistem Peringatan Dini via Aplikasi', desc: 'Distribusi data ISPU harian kepada orang tua siswa dengan panduan tindakan berdasarkan level risiko.' },
            { label: 'Kampanye Hak Udara Bersih', desc: 'Penyuluhan rutin tentang hak-hak warga terhadap kualitas udara, cara melaporkan pelanggaran emisi, dan pola hidup adaptif.' },
        ],
        faq: [
            { q: 'Bagaimana mendorong partisipasi komunitas?', a: 'Melibatkan tokoh masyarakat, kader posyandu, dan guru sebagai agen perubahan. Program pelatihan sederhana tentang penggunaan sensor low-cost dan interpretasi data ISPU terbukti meningkatkan partisipasi secara signifikan.' },
            { q: 'Apakah data komunitas akurat?', a: 'Sensor komunitas berbiaya rendah memiliki akurasi lebih rendah dari alat referensi, tetapi cukup untuk mendeteksi tren dan pola anomali. Data komunitas paling berguna saat dikalibrasi terhadap stasiun referensi terdekat.' },
        ],
    },
    {
        icon: Cpu,
        color: { bg: 'bg-violet-500', tag: 'bg-violet-100 text-violet-700', border: 'border-violet-200', accent: 'border-violet-400', section: 'bg-white' },
        tag: 'BAB VIII.3',
        title: 'Teknologi Pemantauan Modern',
        image: 'https://images.unsplash.com/flagged/photo-1574848487348-533aaf72833e?q=80&w=1170&auto=format&fit=crop',
        imageAlt: 'Teknologi IoT dan pemantauan satelit kualitas udara',
        summary: 'IoT, citra satelit, dan model dispersi atmosfer menghadirkan pemantauan polusi yang komprehensif, akurat, dan dapat diakses oleh berbagai pemangku kepentingan.',
        actions: [
            { label: 'Jaringan Sensor IoT Komunitas', desc: 'Sensor murah terhubung internet untuk monitoring real-time di sekitar kawasan industri dan sekolah.' },
            { label: 'Integrasi Data Citra Satelit', desc: 'Sentinel-5P, MODIS untuk pemetaan distribusi spasial PM2.5 secara berkala di seluruh kawasan.' },
            { label: 'Model Dispersi Atmosfer (AERMOD/CALPUFF)', desc: 'Prediksi penyebaran polutan berdasarkan data meteorologi dan karakteristik emisi industri.' },
            { label: 'Land Use Regression (LUR)', desc: 'Model statistik yang menghubungkan tata guna lahan dengan konsentrasi polutan untuk pemetaan risiko spasial.' },
        ],
        faq: [
            { q: 'Apa kelebihan model dispersi dibanding sensor saja?', a: 'Model dispersi dapat memprediksi konsentrasi polutan di lokasi yang tidak memiliki sensor, memproyeksikan dampak skenario masa depan, dan membantu merancang buffer zone yang optimal. Kombinasi sensor + model dispersi memberikan gambaran spasial paling komprehensif.' },
            { q: 'Seberapa akurat data satelit untuk PM2.5?', a: 'Satelit seperti Sentinel-5P tidak mengukur PM2.5 secara langsung, tetapi mengukur AOD (Aerosol Optical Depth) yang dikonversi menggunakan model statistik. Akurasi meningkat saat dikombinasikan dengan data sensor permukaan melalui data fusion.' },
        ],
    },
    {
        icon: Factory,
        color: { bg: 'bg-orange-500', tag: 'bg-orange-100 text-orange-700', border: 'border-orange-200', accent: 'border-orange-400', section: 'bg-gray-50' },
        tag: 'BAB VIII.4',
        title: 'Pengendalian Emisi Industri',
        image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589',
        imageAlt: 'Kebijakan pengendalian emisi kawasan industri',
        summary: 'Regulasi emisi yang ketat, buffer zone wajib, dan transparansi data adalah tiga pilar pengendalian polusi dari sumber industri yang paling efektif.',
        actions: [
            { label: 'Buffer Zone Wajib 1–3 km', desc: 'Kewajiban jarak minimal antara kawasan industri dengan permukiman dan sekolah, sesuai kapasitas emisi industri.' },
            { label: 'CEMS — Continuous Emission Monitoring', desc: 'Alat pengukur emisi real-time di cerobong industri dengan pelaporan otomatis ke regulator dan publik.' },
            { label: 'Pengetatan Standar Emisi Berbasis WHO', desc: 'Penyesuaian baku mutu emisi mengacu standar WHO terbaru, dengan sanksi progresif bagi pelanggar.' },
            { label: 'Insentif Teknologi Ramah Lingkungan', desc: 'Insentif pajak dan percepatan perizinan bagi industri yang mengadopsi filter emisi dan energi terbarukan.' },
            { label: 'Platform Transparansi Data Emisi', desc: 'Portal publik real-time memungkinkan masyarakat memantau data emisi industri untuk mendorong akuntabilitas.' },
        ],
        faq: [
            { q: 'Mengapa buffer zone penting?', a: 'Konsentrasi polutan menurun signifikan seiring jarak dari sumber emisi. Sekolah dalam radius 500–1000 m dari industri terpapar 2–3× lebih tinggi dibanding sekolah >3 km. Buffer zone adalah perlindungan struktural yang paling efektif dan permanen.' },
            { q: 'Apa itu CEMS dan bagaimana cara kerjanya?', a: 'Continuous Emission Monitoring System adalah alat analitik gas otomatis yang dipasang permanen di cerobong industri. CEMS mengukur konsentrasi polutan (SO₂, NOₓ, PM) secara real-time dan mentransmisikan data ke server regulator untuk pemantauan dan penegakan hukum.' },
        ],
    },
    {
        icon: FlaskConical,
        color: { bg: 'bg-rose-500', tag: 'bg-rose-100 text-rose-700', border: 'border-rose-200', accent: 'border-rose-400', section: 'bg-white' },
        tag: 'BAB VIII.5',
        title: 'Rekomendasi Penelitian Lanjutan',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
        imageAlt: 'Agenda riset kesehatan lingkungan dan polusi udara',
        summary: 'Riset berbasis bukti adalah fondasi kebijakan yang efektif. Lima agenda riset prioritas ini akan memperkuat dasar ilmiah perlindungan kesehatan siswa di kawasan industri.',
        actions: [
            { label: 'Studi Longitudinal Kohort Siswa', desc: 'Riset jangka panjang untuk memahami dampak paparan polutan sejak dini terhadap kesehatan hingga dewasa.' },
            { label: 'Analisis Probabilistik Monte Carlo', desc: 'Kajian risiko menggunakan simulasi Monte Carlo untuk distribusi probabilitas risiko yang lebih realistis dan evidence-based.' },
            { label: 'Analisis Sensitivitas Faktor Risiko', desc: 'Identifikasi faktor dominan (berat badan, lama paparan, konsentrasi) untuk intervensi yang paling cost-effective.' },
            { label: 'Pemetaan GIS Risiko Sekolah', desc: 'Pemetaan berbasis GIS seluruh sekolah dalam radius risiko tinggi dari kawasan industri di Indonesia.' },
        ],
        faq: [
            { q: 'Mengapa studi longitudinal lebih penting dari cross-sectional?', a: 'Studi potong lintang hanya menangkap satu titik waktu dan tidak bisa membuktikan kausalitas. Studi longitudinal mengikuti kohort anak dari waktu ke waktu, memungkinkan pengukuran akumulasi dampak paparan sejak dini hingga dewasa secara kausal.' },
            { q: 'Apa kontribusi analisis sensitivitas untuk kebijakan?', a: 'Analisis sensitivitas mengidentifikasi variabel yang paling memengaruhi hasil risiko. Jika berat badan adalah faktor dominan, intervensi nutrisi relevan. Jika durasi paparan dominan, kebijakan penjadwalan sekolah lebih efektif. Ini memastikan anggaran intervensi diarahkan ke faktor yang paling berdampak.' },
        ],
    },
];