<?php

namespace App\Http\Controllers\Admin;

use App\Models\AirQualityPoint;
use App\Services\RiskService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AirQualityPointController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Inertia::render('Admin/Points/Index', [
            'points' => AirQualityPoint::paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Points/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'pm25' => 'required|numeric|min:0',
            'pm10' => 'required|numeric|min:0',
            'so2' => 'required|numeric|min:0',
            'co' => 'required|numeric|min:0',
            'no2' => 'required|numeric|min:0',
        ]);

        AirQualityPoint::create($request->all());

        return redirect('/admin/points')->with('success', 'Point created successfully.');
    }

    public function show(AirQualityPoint $point)
    {
        return Inertia::render('Admin/Points/Show', [
            'point' => $point
        ]);
    }

    public function edit(AirQualityPoint $point)
    {
        return Inertia::render('Admin/Points/Edit', [
            'point' => $point
        ]);
    }

    public function update(Request $request, AirQualityPoint $point)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'pm25' => 'required|numeric|min:0',
            'pm10' => 'required|numeric|min:0',
            'so2' => 'required|numeric|min:0',
            'co' => 'required|numeric|min:0',
            'no2' => 'required|numeric|min:0',
        ]);

        $point->update($request->all());

        // hitung ulang THQ
        $params = RiskService::defaultParams();
        $rfc = RiskService::rfc();
        $hqs = [];

        foreach ($rfc as $key => $val) {
            $C = $point->$key;
            $intake = RiskService::intake(
                $C,
                $params['ir'],
                $params['et'],
                $params['ef'],
                $params['ed'],
                $params['bw']
            );
            $hqs[] = RiskService::hq($intake, $val);
        }

        $thq = RiskService::thq($hqs);

        $point->update([
            'thq_default' => $thq,
            'status_default' => $thq >= 1 ? 'Berisiko' : 'Aman'
        ]);

        return redirect('/admin/points')->with('success', 'Point updated successfully.');
    }

    public function destroy(AirQualityPoint $point)
    {
        $point->delete();
        return redirect('/admin/points')->with('success', 'Point deleted successfully.');
    }
}
