import { STATUS_COLORS } from '@/lib/RiskStandards';

export default function PointDetails({ point, selectedPollutant = 'pm25' }) {
    const pollutantLabels = {
        pm25: { label: 'PM2.5', unit: 'µg/m³', hqKey: 'pm25' },
        pm10: { label: 'PM10', unit: 'µg/m³', hqKey: 'pm10' },
        so2: { label: 'SO₂', unit: 'µg/m³', hqKey: 'so2' },
        no2: { label: 'NO₂', unit: 'µg/m³', hqKey: 'no2' },
        co: { label: 'CO', unit: 'µg/m³', hqKey: 'co' }
    };

    const pollutant = pollutantLabels[selectedPollutant];
    const selectedHQ = point?.average_hqs?.[pollutant.hqKey];

    const getStatusColor = (hq) => {
        if (hq > 2) return STATUS_COLORS.hazardous;
        else if (hq >= 1 && hq <= 2) return STATUS_COLORS.veryUnhealthy;
        else if (hq >= 0.5 && hq < 1) return STATUS_COLORS.unhealthy;
        else if (hq >= 0.1 && hq < 0.5) return STATUS_COLORS.moderate;
        else if (hq < 0.1) return STATUS_COLORS.good;
        else return STATUS_COLORS.good;
    };

    const statusColor = selectedHQ !== undefined ? getStatusColor(selectedHQ) : null;

    return (
        <div className="bg-white w-full">
            {point ? (
                <div className="space-y-3 overflow-y-auto max-h-[400px]">
                    {/* Informasi Lokasi */}
                    <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900 text-sm">📍 Informasi Lokasi</h4>
                        <div className="text-xs text-gray-600 space-y-1 bg-gray-50 p-2 rounded">
                            <p><span className="font-medium">Nama:</span> {point.name}</p>
                            <p><span className="font-medium">Lat:</span> {point.lat}</p>
                            <p><span className="font-medium">Lng:</span> {point.lng}</p>
                            <p><span className="font-medium">Responden:</span> {point.responden_count}</p>
                        </div>
                    </div>

                    {/* Selected Pollutant HQ - Highlighted */}

                    {/* Risk Assessment Based on Selected Pollutant */}
                    {selectedHQ !== undefined && statusColor && (
                        <div className="space-y-1 pt-2 ">
                            <h4 className="font-semibold text-gray-900 text-sm">📈 Penilaian Risiko - {pollutant.label}</h4>
                            <div
                                className="p-2 rounded border-2"
                                style={{
                                    backgroundColor: statusColor.bgColor,
                                    borderColor: statusColor.color
                                }}
                            >
                                <p className="text-md mt-1" style={{ color: statusColor.textColor }}>
                                    <span className="font-medium">HQ:</span>{' '}
                                    <span className="font-bold">{selectedHQ}</span>
                                </p>
                                <p className="text-md mt-1" style={{ color: statusColor.textColor }}>
                                    <span className="font-medium">Status:</span>{' '}
                                    <span className="font-bold">
                                        {statusColor.label}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* All Pollutant HQ Values */}
                    {point.average_hqs && (
                        <div className="space-y-1 pt-2">
                            <h4 className="font-semibold text-gray-900 text-sm">📊 Semua Nilai HQ Polutan</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                {['pm25', 'pm10', 'so2', 'no2', 'co'].map((key) => {
                                    const isSelected = selectedPollutant === key;
                                    const label = pollutantLabels[key].label;
                                    const hqValue = point.average_hqs[key];

                                    return (
                                        <div
                                            key={key}
                                            className={`p-2 rounded border ${isSelected
                                                ? 'bg-blue-100 border-blue-400 border-2'
                                                : 'bg-gray-50 border-gray-200'
                                                }`}
                                        >
                                            <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                                                {label} HQ:
                                            </span>
                                            <span className={`ml-1 font-semibold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                                                {hqValue}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center py-20">
                        <div className="text-gray-400 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-500">
                            Pilih titik pada peta untuk melihat detail kualitas udara
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};