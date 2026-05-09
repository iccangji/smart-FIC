<?php

namespace App\Http\Controllers;

use App\Models\AirQualityPoint;
use App\Models\Responden;
use App\Services\RiskService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapController extends Controller
{
    public function index()
    {
        // Get all responden records grouped by location
        $respondensByPoint = Responden::with('airQualityPoint')
            ->get()
            ->groupBy('air_quality_point_id');

        // Transform into grouped data with averages
        $groupedRespondens = $respondensByPoint->map(function ($respondens, $pointId) {
            if ($respondens->isEmpty()) {
                return null;
            }

            $point = $respondens->first()->airQualityPoint;

            // Calculate average HQ for each pollutant
            $avgPm25Hq = $respondens->avg('pm25_hq');
            $avgPm10Hq = $respondens->avg('pm10_hq');
            $avgSo2Hq = $respondens->avg('so2_hq');
            $avgCoHq = $respondens->avg('co_hq');
            $avgNo2Hq = $respondens->avg('no2_hq');

            // Calculate total THQ from average HQs
            $totalThq = $avgPm25Hq + $avgPm10Hq + $avgSo2Hq + $avgCoHq + $avgNo2Hq;

            return [
                'id' => $pointId,
                'name' => $point->name,
                'lat' => $point->lat,
                'lng' => $point->lng,
                'responden_count' => $respondens->count(),
                'average_hqs' => [
                    'pm25' => round($avgPm25Hq, 3),
                    'pm10' => round($avgPm10Hq, 3),
                    'so2' => round($avgSo2Hq, 3),
                    'co' => round($avgCoHq, 3),
                    'no2' => round($avgNo2Hq, 3),
                ],
                'pm25' => round($point->pm25, 3),
                'pm10' => round($point->pm10, 3),
                'so2' => round($point->so2, 3),
                'co' => round($point->co, 3),
                'no2' => round($point->no2, 3),
                'status' => $totalThq >= 1 ? 'Berisiko' : 'Aman'
            ];
        })->filter()->values();

        return Inertia::render('HealthRiskMap/Index', [
            'points' => $groupedRespondens
        ]);
    }
}
