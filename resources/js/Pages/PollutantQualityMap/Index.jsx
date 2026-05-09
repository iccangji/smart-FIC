import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import PollutantMapView from '@/Components/PollutantMapView';
import PollutantLegend from '@/Components/PollutantLegend';
import PollutantDetails from '@/Components/PollutantDetails';
import PollutantChart from '@/Components/PollutantChart';
import PollutantRankingTable from '@/Components/PollutantRankingTable';
import PollutantInfoCard from '@/Components/PollutantInfoCard';
import { POLLUTANT_LABELS } from '@/lib/pollutantStandards';
import { Wind } from 'lucide-react';

export default function PollutantQualityMap({ points }) {

    const [selectedPollutant, setSelectedPollutant] = useState('pm25');
    const [selectedPointId, setSelectedPointId] = useState(-1);
    const [selectedStandard, setSelectedStandard] = useState('pp');

    const pollutantOptions = [
        { value: 'pm25', label: POLLUTANT_LABELS.pm25.label },
        { value: 'pm10', label: POLLUTANT_LABELS.pm10.label },
        { value: 'so2', label: POLLUTANT_LABELS.so2.label },
        { value: 'no2', label: POLLUTANT_LABELS.no2.label },
        { value: 'co', label: POLLUTANT_LABELS.co.label }
    ];

    const handleMarkerClick = (pointId) => {
        setSelectedPointId(pointId);
    };

    return (
        <MainLayout
            header={
                <div>
                    <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                        <Wind className="w-8 h-8 text-green-600" />
                        Peta Data Kualitas Udara
                    </h2>
                    <p className="text-gray-600 mt-1">Analisis konsentrasi polutan dan parameter kualitas udara di berbagai lokasi</p>
                </div>
            }
        >
            <Head><title>Data Kualitas Udara</title></Head>
            <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-screen md:h-[620px]">
                    {/* Map Section */}
                    <div className="bg-white overflow-hidden shadow-md rounded-xl p-6 text-gray-900 md:col-span-3 flex flex-col border border-gray-200">
                        <div className="font-bold text-lg mb-4 text-gray-800">📍 Peta Polutan</div>
                        {/* Dropdown Standard */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🔍 Pilih Standar:
                            </label>
                            <select
                                value={selectedStandard}
                                onChange={(e) => setSelectedStandard(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500"
                            >
                                <option value="pp">PP 22 Tahun 2021 (Indonesia)</option>
                                <option value="who">WHO Air Quality Guidelines</option>
                            </select>
                        </div>
                        {/* Pollutant Selector */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">🔍 Pilih Parameter Polutan:</label>
                            <select
                                value={selectedPollutant}
                                onChange={(e) => {
                                    setSelectedPollutant(e.target.value);
                                    setSelectedPointId(-1);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                {pollutantOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Map */}
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <PollutantMapView
                                points={points}
                                selectedPollutant={selectedPollutant}
                                onMarkerClick={handleMarkerClick}
                                selectedPoint={points.find((point) => point.id === selectedPointId)}
                                selectedStandard={selectedStandard}
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col md:col-span-2 h-full gap-4">
                        {/* Pollutant Details */}
                        <div className="bg-white overflow-hidden shadow-md rounded-xl p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200">
                            <div className="font-bold text-lg mb-4 text-gray-800">ℹ️ Detail Lokasi</div>
                            <div className="flex-1 overflow-y-auto">
                                <PollutantDetails
                                    point={points.find((point) => point.id === selectedPointId)}
                                    selectedPollutant={selectedPollutant}
                                    selectedStandard={selectedStandard}
                                />
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="bg-white overflow-y-auto shadow-md rounded-xl p-6 text-gray-900 border border-gray-200 max-h-[240px]">
                            <PollutantLegend selectedPollutant={selectedPollutant} selectedStandard={selectedStandard} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                    <PollutantChart
                        points={points}
                        selectedPollutant={selectedPollutant}
                        selectedStandard={selectedStandard}
                    />

                    <PollutantRankingTable
                        points={points}
                        selectedPollutant={selectedPollutant}
                        onSelect={
                            (pointId) => {
                                setSelectedPointId(pointId);
                            }
                        }
                        selectedStandard={selectedStandard}
                    />
                </div>
                <PollutantInfoCard selectedPollutant={selectedPollutant} />
            </div>
        </MainLayout>
    );
}
