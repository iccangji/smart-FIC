/**
 * Pollutant Quality Standards (2021 WHO Air Quality Guidelines)
 * Values in µg/m³ (CO in mg/m³)
 */

export const POLLUTANT_STANDARDS = {
    pp: {
        pm25: {
            good: 35,
            moderate: 55,
            unhealthy: 75,      // Mengikuti Benchmark Dose: 55
            veryUnhealthy: 90,
        },
        pm10: {
            good: 50,
            moderate: 75,
            unhealthy: 100,      // Mengikuti Benchmark Dose: 75
            veryUnhealthy: 120,
        },
        so2: {
            good: 100,
            moderate: 150,
            unhealthy: 150,     // Mengikuti Benchmark Dose: 150
            veryUnhealthy: 200,
        },
        no2: {
            good: 100,
            moderate: 200,
            unhealthy: 250,     // Mengikuti Benchmark Dose: 200
            veryUnhealthy: 300,
        },
        co: {
            good: 5000,
            moderate: 10000,
            unhealthy: 15000,   // Mengikuti Benchmark Dose: 10.000
            veryUnhealthy: 20000,
        }
    },
    who: {
        pm25: {
            good: 15,
            moderate: 25,
            unhealthy: 50,
            veryUnhealthy: 75,
        },
        pm10: {
            good: 45,
            moderate: 75,
            unhealthy: 150,
            veryUnhealthy: 200,
        },
        so2: {
            good: 40,
            moderate: 80,
            unhealthy: 125,
            veryUnhealthy: 200,
        },
        no2: {
            good: 10,
            moderate: 25,
            unhealthy: 100,
            veryUnhealthy: 200,
        },
        co: {
            good: 4000,
            moderate: 7000,
            unhealthy: 10000,
            veryUnhealthy: 15000,
        }
    }
};

export const POLLUTANT_LABELS = {
    pm25: { label: 'PM2.5', unit: 'µg/m³' },
    pm10: { label: 'PM10', unit: 'µg/m³' },
    so2: { label: 'SO₂', unit: 'µg/m³' },
    no2: { label: 'NO₂', unit: 'µg/m³' },
    co: { label: 'CO', unit: 'mg/m³' }
};

export const STATUS_COLORS = {
    good: { label: 'Aman', color: '#10b981', bgColor: 'bg-green-500' },
    moderate: { label: 'Sedang', color: '#eab308', bgColor: 'bg-yellow-500' },
    unhealthy: { label: 'Tidak Sehat', color: '#f97316', bgColor: 'bg-orange-500' },
    veryUnhealthy: { label: 'Sangat Tidak Sehat', color: '#ef4444', bgColor: 'bg-red-500' },
    hazardous: { label: 'Berbahaya', color: '#7f1d1d', bgColor: 'bg-red-900' }
};

/**
 * Get pollution status based on pollutant type and value
 */
export function getPollutantStatus(pollutantType, value, standard = 'pp') {
    const standards = POLLUTANT_STANDARDS[standard]?.[pollutantType];
    if (!standards) return 'good';

    if (value <= standards.good) return 'good';
    if (value <= standards.moderate) return 'moderate';
    if (value <= standards.unhealthy) return 'unhealthy';
    if (value <= standards.veryUnhealthy) return 'veryUnhealthy';
    return 'hazardous';
}

/**
 * Get color for marker based on pollutant status
 */
export function getMarkerColor(pollutantType, value, standard = 'pp') {
    const status = getPollutantStatus(pollutantType, value, standard);
    return STATUS_COLORS[status].color;
}

/**
 * Get status info (label and color)
 */
export function getStatusInfo(status) {
    return STATUS_COLORS[status] || STATUS_COLORS.good;
}
