import { POLLUTANT_LABELS, getPollutantStatus, STATUS_COLORS } from '@/lib/pollutantStandards';

export default function PollutantRankingTable({ points, selectedPollutant, onSelect, selectedStandard }) {

    const sorted = [...points].sort((a, b) => b[selectedPollutant] - a[selectedPollutant]);
    const getBadgeStyle = (value) => {
        const status = getPollutantStatus(selectedPollutant, value, selectedStandard);
        return {
            bg: STATUS_COLORS[status].color + '80',
        };
    };
    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6 bg-white overflow-hidden shadow-md p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200 md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-gray-800">
                📋 Peringkat Lokasi ({POLLUTANT_LABELS[selectedPollutant].label})
            </h3>

            <div className="overflow-x-auto" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="py-2">#</th>
                            <th>Lokasi</th>
                            <th>Nilai</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((p, i) => (
                            <tr
                                key={p.id}
                                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                onClick={() => onSelect(p.id)}
                            >
                                <td className="py-2 font-semibold">{i + 1}</td>
                                <td>{p.name}</td>
                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${getBadgeStyle(p[selectedPollutant]).text}`}
                                        style={{ backgroundColor: getBadgeStyle(p[selectedPollutant]).bg }}
                                    >
                                        {p[selectedPollutant]}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}