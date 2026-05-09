export default function HQCardInfo() {
    return (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-6">
            <h3 className="font-bold text-lg text-blue-800 mb-3">
                🧠 Apa itu Hazard Quotient (HQ)?
            </h3>

            <p className="text-sm text-blue-700 mb-3 leading-relaxed">
                Hazard Quotient (HQ) adalah cara sederhana untuk mengetahui apakah paparan polusi udara di suatu lokasi
                masih aman atau sudah berisiko bagi kesehatan. Nilai ini membandingkan jumlah polutan yang masuk ke tubuh
                dengan batas aman yang direkomendasikan.
            </p>

            <div className="bg-white p-4 rounded border text-sm text-center mb-3">
                <span className="font-semibold">HQ = Intake (Dosis paparan harían) / References Dose</span>
            </div>

            <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                <li><strong>HQ &lt; 1</strong> → Masih dalam batas aman</li>
                <li><strong>HQ ≥ 1</strong> → Perlu perhatian karena berpotensi berdampak pada kesehatan</li>
            </ul>

            <p className="text-xs text-blue-600 mt-3">
                * Semakin tinggi nilai HQ, semakin besar potensi risiko kesehatan jika terpapar dalam jangka panjang.
            </p>
        </div>
    );
}