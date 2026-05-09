export const POLLUTANT_INFO = {
    pm25: {
        title: "PM2.5 (Partikel Halus)",
        description: "Partikel sangat kecil (<2.5 µm) yang dapat masuk hingga ke paru-paru dan aliran darah.",
        sources: [
            "Emisi kendaraan bermotor",
            "Aktivitas industri",
            "Pembakaran terbuka"
        ],
        impacts: [
            "Gangguan pernapasan",
            "Penyakit jantung",
            "Risiko kematian dini"
        ],
        recommendation: "Gunakan masker dan hindari aktivitas luar saat konsentrasi tinggi."
    },
    pm10: {
        title: "PM10 (Partikel Kasar)",
        description: "Partikel debu berukuran lebih besar yang umumnya berasal dari lingkungan sekitar.",
        sources: [
            "Debu jalanan",
            "Konstruksi",
            "Aktivitas industri"
        ],
        impacts: [
            "Iritasi mata dan tenggorokan",
            "Batuk dan alergi"
        ],
        recommendation: "Kurangi aktivitas luar dan gunakan pelindung pernapasan."
    },
    so2: {
        title: "SO₂ (Sulfur Dioksida)",
        description: "Gas beracun yang dihasilkan dari pembakaran bahan bakar fosil.",
        sources: [
            "Pembangkit listrik",
            "Industri berat",
            "Pembakaran batu bara"
        ],
        impacts: [
            "Iritasi saluran napas",
            "Memperparah asma"
        ],
        recommendation: "Perlu pengendalian emisi industri dan pemantauan ketat."
    },
    no2: {
        title: "NO₂ (Nitrogen Dioksida)",
        description: "Gas yang berasal dari emisi kendaraan dan pembakaran bahan bakar.",
        sources: [
            "Kendaraan bermotor",
            "Transportasi",
            "Industri"
        ],
        impacts: [
            "Penurunan fungsi paru-paru",
            "Infeksi saluran pernapasan"
        ],
        recommendation: "Kurangi paparan lalu lintas padat."
    },
    co: {
        title: "CO (Karbon Monoksida)",
        description: "Gas tidak berwarna dan tidak berbau yang sangat berbahaya.",
        sources: [
            "Pembakaran tidak sempurna",
            "Kendaraan",
            "Mesin berbahan bakar"
        ],
        impacts: [
            "Keracunan",
            "Gangguan oksigen dalam darah"
        ],
        recommendation: "Pastikan ventilasi baik dan hindari area tertutup dengan emisi."
    }
};