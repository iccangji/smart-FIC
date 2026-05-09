import { STATUS_COLORS } from '@/lib/RiskStandards';
export default function RiskRankingTable({ points, selectedPollutant, onSelect }) {

    const sorted = [...points].sort(
        (a, b) => (b.average_hqs?.[selectedPollutant] || 0) - (a.average_hqs?.[selectedPollutant] || 0)
    );

    const statusColors = STATUS_COLORS;
    const getBadge = (val) => {
        if (val > 2) return statusColors.hazardous.color;
        else if (val >= 1 && val <= 2) return statusColors.veryUnhealthy.color;
        else if (val >= 0.5 && val < 1) return statusColors.unhealthy.color;
        else if (val >= 0.1 && val < 0.5) return statusColors.moderate.color;
        else if (val < 0.1) return statusColors.good.color;
        else return '#105fb9';
    };

    const getStatusDescription = (val) => {
        if (val > 2) return 'Sangat Tinggi';
        else if (val >= 1 && val <= 2) return 'Tinggi';
        else if (val >= 0.5 && val < 1) return 'Sedang';
        else if (val >= 0.1 && val < 0.5) return 'Rendah';
        else if (val < 0.1) return 'Sangat Rendah';
        else return 'Tidak Diketahui';
    };

    return (
        <div className="bg-white p-6 rounded-xl mt-6 shadow-md mt-6 bg-white overflow-hidden shadow-md p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200 md:col-span-2">
            <h3 className="font-bold mb-4">
                📋 Peringkat Risiko ({selectedPollutant.toUpperCase()})
            </h3>

            <table className="w-full text-sm">
                <thead>
                    <tr className="text-center border-b border-gray-200">
                        <th className="py-2">#</th>
                        <th>Lokasi</th>
                        <th>HQ</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((p, i) => {
                        const val = p.average_hqs?.[selectedPollutant] || 0;

                        return (
                            <tr
                                key={p.id}
                                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                onClick={() => onSelect(p.id)}
                            >
                                <td className="py-2 font-semibold">{i + 1}</td>
                                <td>{p.name}</td>
                                <td>
                                    <span className={`mx-2 px-2 py-1 rounded text-xs font-bold flex justify-center`} style={{ backgroundColor: getBadge(val) + '80' }}>
                                        {val}
                                    </span>
                                </td>
                                <td className="text-center">{getStatusDescription(val)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}