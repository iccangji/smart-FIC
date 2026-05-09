import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const COLORS = {
    pm25: '#ef4444',
    pm10: '#f97316',
    so2: '#eab308',
    co: '#3b82f6',
    no2: '#8b5cf6'
};

export default function RiskChart({ points, selectedPollutant }) {

    const labels = points.map(p => p.name);

    const pollutants = ['pm25', 'pm10', 'so2', 'co', 'no2'];

    const datasets = pollutants.map(pol => ({
        label: pol.toUpperCase(),
        data: points.map(p => p.average_hqs?.[pol] || 0),
        backgroundColor: COLORS[pol] + '80',
        borderColor: COLORS[pol],
        borderWidth: 2
    }));

    const data = { labels, datasets };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6 bg-white overflow-hidden shadow-md p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200 md:col-span-3">
            <h3 className="font-bold mb-4">📊 Distribusi HQ per Polutan</h3>
            <Bar data={data} options={{ responsive: true }} />
        </div>
    );
}