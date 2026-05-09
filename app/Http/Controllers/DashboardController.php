<?php

namespace App\Http\Controllers;

use App\Models\Responden;
use App\Models\AirQualityPoint;
use App\Models\News;
use App\Models\PollutantQualityData;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'responden_count' => Responden::count(),
            'air_quality_points_count' => AirQualityPoint::count(),
            'pollutant_data_count' => PollutantQualityData::count(),
            'users_count' => User::count(),
            'news_count' => News::count(),
            'recent_responden' => Responden::with('airQualityPoint')
                ->orderBy('created_at', 'desc')
                ->limit(3)
                ->get()
                ->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'location' => $item->airQualityPoint->name ?? 'N/A',
                        'created_at' => $item->created_at,
                    ];
                }),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats
        ]);
    }
}
