import { getPollutantStatus, getStatusInfo, POLLUTANT_LABELS } from '@/lib/pollutantStandards';

export default function PollutantDetails({ point, selectedPollutant, selectedStandard }) {
    if (!point) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="text-gray-400 mb-2">
                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-500">
                        Klik titik pada peta untuk melihat detail polutan
                    </p>
                </div>
            </div>
        );
    }

    const pollutantValue = point[selectedPollutant];
    const status = getPollutantStatus(selectedPollutant, pollutantValue, selectedStandard);
    const statusInfo = getStatusInfo(status);
    const label = POLLUTANT_LABELS[selectedPollutant];

    return (
        <div className="space-y-4 h-40">
            {/* Location Info */}
            <div className="space-y-1">
                <h4 className="font-semibold text-gray-900 text-sm">Informasi Lokasi</h4>
                <div className="text-xs text-gray-600 space-y-1">
                    <p><span className="font-medium">Nama:</span> {point.name}</p>
                    <p><span className="font-medium">Lat:</span> {point.lat}</p>
                    <p><span className="font-medium">Lng:</span> {point.lng}</p>
                </div>
            </div>

            {/* Current Pollutant Status */}
            <div className={`p-3 rounded-lg border-l-4 space-y-2`} style={{ borderColor: statusInfo.color, backgroundColor: `${statusInfo.color}15` }}>
                <h4 className="font-semibold text-gray-900 text-sm">Status {label?.label}</h4>
                <div className="space-y-1 text-xs">
                    <p>
                        <span className="font-medium">Nilai:</span>{' '}
                        <span className="font-bold" style={{ color: statusInfo.color }}>
                            {pollutantValue} {label?.unit}
                        </span>
                    </p>
                    <p>
                        <span className="font-medium">Kategori:</span>{' '}
                        <span className="font-bold" style={{ color: statusInfo.color }}>
                            {statusInfo.label}
                        </span>
                    </p>
                </div>
            </div>

            {/* All Pollutants */}
            <div className="space-y-1">
                <h4 className="font-semibold text-gray-900 text-sm">Semua Polutan</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    {['pm25', 'pm10', 'so2', 'no2', 'co'].map(pollutant => {
                        const value = point[pollutant];
                        const pollStatus = getPollutantStatus(pollutant, value, selectedStandard);
                        const pollStatusInfo = getStatusInfo(pollStatus);
                        const pollLabel = POLLUTANT_LABELS[pollutant];

                        return (
                            <div key={pollutant} className="bg-gray-50 p-2 rounded border-l-4" style={{ borderColor: pollStatusInfo.color }}>
                                <p className="font-medium text-gray-700">{pollLabel?.label}</p>
                                <p className="font-bold" style={{ color: pollStatusInfo.color }}>
                                    {value} {pollLabel?.unit}
                                </p>
                                <p className="text-gray-600 text-xs">{pollStatusInfo.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
