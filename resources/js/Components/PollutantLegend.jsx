import { STATUS_COLORS, POLLUTANT_STANDARDS, POLLUTANT_LABELS } from '@/lib/pollutantStandards';

export default function PollutantLegend({ selectedPollutant, selectedStandard }) {
    const standards = POLLUTANT_STANDARDS[selectedStandard]?.[selectedPollutant];
    const label = POLLUTANT_LABELS[selectedPollutant];
    return (
        <div className="bg-white p-0">
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">📊 Keterangan Status {label?.label}</h4>
            <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: STATUS_COLORS.good.color }}></div>
                    <span className="text-gray-700">Baik: 0 - {standards.good} {label?.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: STATUS_COLORS.moderate.color }}></div>
                    <span className="text-gray-700">Sedang: {standards.good + 1} - {standards.moderate} {label?.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: STATUS_COLORS.unhealthy.color }}></div>
                    <span className="text-gray-700">Tidak Sehat: {standards.moderate + 1} - {standards.unhealthy} {label?.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: STATUS_COLORS.veryUnhealthy.color }}></div>
                    <span className="text-gray-700">Sangat Tidak Sehat: {standards.unhealthy + 1} - {standards.veryUnhealthy} {label?.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: STATUS_COLORS.hazardous.color }}></div>
                    <span className="text-gray-700">Berbahaya: &gt; {standards.veryUnhealthy} {label?.unit}</span>
                </div>
            </div>
        </div>
    );
}
