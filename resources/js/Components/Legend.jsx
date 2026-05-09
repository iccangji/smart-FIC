import { STATUS_COLORS } from '@/lib/RiskStandards';

export default function MapLegend() {
    const statusColors = STATUS_COLORS;
    return (
        <div className="flex flex-wrap items-center gap-4 mt-4 transition-all duration-300 ease-in-out">
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: statusColors.hazardous.color }}></div>
                <p className="text-sm text-gray-700">{statusColors.hazardous.label}</p>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: statusColors.veryUnhealthy.color }}></div>
                <p className="text-sm text-gray-700">{statusColors.veryUnhealthy.label}</p>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: statusColors.unhealthy.color }}></div>
                <p className="text-sm text-gray-700">{statusColors.unhealthy.label}</p>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: statusColors.moderate.color }}></div>
                <p className="text-sm text-gray-700">{statusColors.moderate.label}</p>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: statusColors.good.color }}></div>
                <p className="text-sm text-gray-700">{statusColors.good.label}</p>
            </div>
        </div>
    );
};
