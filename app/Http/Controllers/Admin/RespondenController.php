<?php

namespace App\Http\Controllers\Admin;

use App\Models\Responden;
use App\Models\AirQualityPoint;
use App\Services\RiskService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class RespondenController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of all responden records.
     */
    public function index()
    {
        return Inertia::render('Admin/Responden/Index', [
            'respondens' => Responden::with('airQualityPoint')->latest()->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new responden record.
     */
    public function create()
    {
        return Inertia::render('Admin/Responden/Create', [
            'points' => AirQualityPoint::all()
        ]);
    }

    /**
     * Store a newly created responden record in database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'air_quality_point_id' => 'required|exists:air_quality_points,id',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'berat_badan' => 'required|numeric|min:0',
            'waktu_paparan' => 'required|numeric|min:0',
            'durasi_paparan' => 'required|numeric|min:0',
            'frekuensi_exposure' => 'required|numeric|min:0',
            'laju_inhalasi' => 'required|numeric|min:0'
        ]);

        // Set waktu_thq as default realtime
        $validated['waktu_thq'] = 'realtime';

        // Get point data for calculation
        $point = AirQualityPoint::find($validated['air_quality_point_id']);

        // Calculate THQ
        $allHQ = $this->calculateTHQ($point, $validated);
        $validated['pm25_hq'] = $allHQ['hqs'][0];
        $validated['pm10_hq'] = $allHQ['hqs'][1];
        $validated['so2_hq'] = $allHQ['hqs'][2];
        $validated['co_hq'] = $allHQ['hqs'][3];
        $validated['no2_hq'] = $allHQ['hqs'][4];

        Responden::create($validated);

        return redirect()->route('responden.index')->with('success', 'Responden berhasil ditambahkan.');
    }

    /**
     * Show the form for editing the specified responden record.
     */
    public function edit(Responden $responden)
    {
        return Inertia::render('Admin/Responden/Edit', [
            'responden' => $responden->load('airQualityPoint'),
            'points' => AirQualityPoint::all()
        ]);
    }

    /**
     * Update the specified responden record in database.
     */
    public function update(Request $request, Responden $responden)
    {
        $validated = $request->validate([
            'air_quality_point_id' => 'required|exists:air_quality_points,id',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'berat_badan' => 'required|numeric|min:0',
            'waktu_paparan' => 'required|numeric|min:0',
            'durasi_paparan' => 'required|numeric|min:0',
            'frekuensi_exposure' => 'required|numeric|min:0',
            'laju_inhalasi' => 'required|numeric|min:0'
        ]);

        // Set waktu_thq as default realtime
        $validated['waktu_thq'] = 'realtime';

        // Get point data for calculation
        $point = AirQualityPoint::find($validated['air_quality_point_id']);

        // Calculate THQ
        $allHQ = $this->calculateTHQ($point, $validated);
        $validated['pm25_hq'] = $allHQ['hqs'][0];
        $validated['pm10_hq'] = $allHQ['hqs'][1];
        $validated['so2_hq'] = $allHQ['hqs'][2];
        $validated['co_hq'] = $allHQ['hqs'][3];
        $validated['no2_hq'] = $allHQ['hqs'][4];

        $responden->update($validated);

        return redirect()->route('responden.index')->with('success', 'Responden berhasil diperbarui.');
    }

    /**
     * Delete the specified responden record.
     */
    public function destroy(Responden $responden)
    {
        $responden->delete();
        return redirect()->route('responden.index')->with('success', 'Responden berhasil dihapus.');
    }

    /**
     * Calculate THQ for given point and exposure parameters.
     */
    private function calculateTHQ(AirQualityPoint $point, array $params): array
    {
        // Ensure waktu_thq has a default value if missing
        if (!isset($params['waktu_thq'])) {
            $params['waktu_thq'] = 'realtime';
        }

        $rfc = RiskService::rfc();
        $hqs = [];

        foreach ($rfc as $key => $val) {
            $C = $point->$key;

            $intake = RiskService::intake(
                C: $C,
                IR: $params['laju_inhalasi'],
                ET: $params['waktu_paparan'],
                ED: $params['durasi_paparan'],
                EF: $params['frekuensi_exposure'],
                BW: $params['berat_badan'],
                time: $params['waktu_thq']
            );

            $hqs[] = RiskService::hq($intake, $val);
        }

        return [
            'thq' => RiskService::thq($hqs),
            'hqs' => $hqs
        ];
    }



    private function getStatusTHQ($thq)
    {
        if ($thq >= 2) {
            return 'Sangat Tinggi';
        } elseif ($thq >= 1) {
            return 'Tinggi';
        } elseif ($thq >= 0.5) {
            return 'Sedang';
        } elseif ($thq >= 0.1) {
            return 'Rendah';
        } else {
            return 'Sangat Rendah';
        }
    }
}
