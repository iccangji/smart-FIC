import { POLLUTANT_INFO } from '@/lib/pollutantInfo';

export default function PollutantInfoCard({ selectedPollutant }) {
    const info = POLLUTANT_INFO[selectedPollutant];

    if (!info) return null;

    return (
        <div className="bg-white mt-6 p-6 rounded-xl shadow border border-gray-200">
            <h3 className="font-bold text-lg mb-4 text-gray-800">
                📘 Informasi Polutan
            </h3>

            <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {info.title}
            </h4>

            <p className="text-gray-600 mb-4">
                {info.description}
            </p>

            <div className="grid md:grid-cols-3 gap-4">

                {/* Sumber */}
                <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Sumber</h5>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {info.sources.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>

                {/* Dampak */}
                <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Dampak</h5>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {info.impacts.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                </div>

                {/* Rekomendasi */}
                <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Rekomendasi</h5>
                    <p className="text-sm text-gray-600">
                        {info.recommendation}
                    </p>
                </div>

            </div>
        </div>
    );
}