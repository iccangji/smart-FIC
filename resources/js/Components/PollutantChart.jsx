import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
    getPollutantStatus,
    getStatusInfo,
    POLLUTANT_LABELS
} from '@/lib/pollutantStandards';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function PollutantChart({ points, selectedPollutant, selectedStandard }) {

    const sorted = [...points].sort((a, b) => b[selectedPollutant] - a[selectedPollutant]);

    const backgroundColors = sorted.map(p => {
        const status = getPollutantStatus(selectedPollutant, p[selectedPollutant], selectedStandard);
        return getStatusInfo(status).color + '80'; // transparansi
    });

    const borderColors = sorted.map(p => {
        const status = getPollutantStatus(selectedPollutant, p[selectedPollutant], selectedStandard);
        return getStatusInfo(status).color;
    });

    const data = {
        labels: sorted.map(p => p.name),
        datasets: [
            {
                label: POLLUTANT_LABELS[selectedPollutant].label,
                data: sorted.map(p => p[selectedPollutant]),
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 2,
                borderRadius: 6,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const value = context.raw;
                        const status = getPollutantStatus(selectedPollutant, value, selectedStandard);
                        const statusInfo = getStatusInfo(status);

                        return `${value} (${statusInfo.label})`;
                    }
                }
            },
            title: {
                display: true,
                text: `Distribusi ${POLLUTANT_LABELS[selectedPollutant].label}`
            }
        }
    };
    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6 bg-white overflow-hidden shadow-md p-6 text-gray-900 overflow-y-auto flex flex-col flex-1 border border-gray-200 md:col-span-3">
            <h3 className="font-bold text-lg mb-4 text-gray-800">📊 Distribusi {POLLUTANT_LABELS[selectedPollutant].label}</h3>
            <Bar data={data} options={options} />
        </div>
    );
}