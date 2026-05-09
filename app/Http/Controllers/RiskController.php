<?php

namespace App\Http\Controllers;

use App\Models\AirQualityPoint;
use App\Services\RiskService;
use Illuminate\Http\Request;
use Inertia\Inertia;
// LEGACY
class RiskController extends Controller
{
    public function calculate(Request $request)
    {
        $params = $request->validate([
            'bw' => 'required|numeric',
            'et' => 'required|numeric',
            'ef' => 'required|numeric',
            'ir' => 'required|numeric',
            // 'time' => 'required|string|in:realtime,5years,10years,15years,20years,25years,30years'
        ]);

        $points = AirQualityPoint::all();
        $rfc = RiskService::rfc();

        $results = $points->map(function ($point) use ($params, $rfc) {

            $hqs = [];

            foreach ($rfc as $key => $val) {
                $C = $point->$key / 1000; // µg → mg

                $intake = RiskService::intake(
                    $C,
                    $params['ir'],
                    $params['et'],
                    $params['ef'],
                    $params['bw'],
                    // $params['time']
                );

                $hqs[] = RiskService::hq($intake, $val);
            }

            $thq = RiskService::thq($hqs);

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
                'thq' => round($thq, 2),
                'timestamp' => now()->timestamp,
            ];
        });

        return Inertia::render('Home', [
            'points' => $results
        ]);
    }
}
