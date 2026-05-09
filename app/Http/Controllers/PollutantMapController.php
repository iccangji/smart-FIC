<?php

namespace App\Http\Controllers;

use App\Models\PollutantQualityData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PollutantMapController extends Controller
{
    /**
     * Display pollutant data map
     */
    public function index()
    {
        // Get all pollutant quality data
        $points = PollutantQualityData::all()->map(function ($point) {
            return [
                'id' => $point->id,
                'name' => $point->name,
                'lat' => $point->lat,
                'lng' => $point->lng,
                'pm25' => $point->pm25,
                'pm10' => $point->pm10,
                'so2' => $point->so2,
                'co' => $point->co,
                'no2' => $point->no2,
                'suhu' => $point->suhu,
                'kelembaban' => $point->kelembaban,
            ];
        });

        return Inertia::render('PollutantQualityMap/Index', [
            'points' => $points
        ]);
    }
}
