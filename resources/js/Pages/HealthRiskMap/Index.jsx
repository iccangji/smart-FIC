// resources/js/Pages/Map.jsx

import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import MapView from '@/Components/MapView';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import PointDetails from '@/Components/PointDetails';
import MapLegend from '@/Components/Legend';
import { Activity, AlertCircle } from 'lucide-react';
import { POLLUTANT_LABELS } from '@/lib/pollutantStandards';
import RiskChart from '@/Components/RiskChart';
import RiskRankingTable from '@/Components/RiskRankingTable';
import PollutantInfoCard from '@/Components/PollutantInfoCard';
import HQCardInfo from '@/Components/HQCardInfo';

export default function Home({ points }) {
    const [selectedPointId, setSelectedPointId] = useState(-1);
    const [selectedPollutant, setSelectedPollutant] = useState('pm25');

    const handleMarkerClick = (pointId) => {
        setSelectedPointId(pointId);
    };

    const pollutantOptions = [
        { value: 'pm25', label: POLLUTANT_LABELS.pm25.label },
        { value: 'pm10', label: POLLUTANT_LABELS.pm10.label },
        { value: 'so2', label: POLLUTANT_LABELS.so2.label },
        { value: 'no2', label: POLLUTANT_LABELS.no2.label },
        { value: 'co', label: POLLUTANT_LABELS.co.label }
    ];

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                            <Activity className="w-8 h-8 text-blue-600" />
                            Peta Analisis Risiko Kesehatan
                        </h2>
                        <p className="text-gray-600 mt-1">Pantau kualitas udara dan tingkat risiko kesehatan di berbagai lokasi</p>
                    </div>
                </div>
            }
        >
            <Head><title>Peta Resiko Kesehatan</title></Head>
            <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-screen md:h-[600px]">
                    <div className="bg-white overflow-hidden shadow-md rounded-xl p-6 text-gray-900 md:col-span-3 flex flex-col border border-gray-200">

                        <div className="font-bold text-lg mb-4 text-gray-800">📍 Peta Risiko Kesehatan</div>
                        {/* Pollutant Selector */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">🔍 Pilih Parameter Polutan:</label>
                            <select
                                value={selectedPollutant}
                                onChange={(e) => setSelectedPollutant(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {pollutantOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <MapView
                                points={points}
                                onMarkerClick={handleMarkerClick}
                                selectedPollutant={selectedPollutant}
                                selectedPoint={points.find((point) => point.id === selectedPointId)}
                            />
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <MapLegend />
                        </div>
                    </div>
                    <div className="flex flex-col md:col-span-2 h-full">
                        <div className="bg-white overflow-hidden shadow-md rounded-xl p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200">
                            <div className="font-bold text-lg mb-4 text-gray-800">ℹ️ Detail Lokasi</div>

                            <div className="flex-1 overflow-y-auto">
                                <PointDetails
                                    point={points.find((point) => point.id === selectedPointId)}
                                    selectedPollutant={selectedPollutant}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                    <RiskChart points={points} />
                    <RiskRankingTable points={points} selectedPollutant={selectedPollutant} onSelect={(pointId) => {
                        setSelectedPointId(pointId);
                    }} />
                </div>
                <PollutantInfoCard selectedPollutant={selectedPollutant} />
                <HQCardInfo />
            </div>
        </MainLayout>
    );
}
