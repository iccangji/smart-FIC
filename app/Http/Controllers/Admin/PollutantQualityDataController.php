<?php

namespace App\Http\Controllers\Admin;

use App\Models\PollutantQualityData;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class PollutantQualityDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pollutants = PollutantQualityData::paginate(10);

        return Inertia::render('Admin/Pollutant/Index', [
            'pollutants' => $pollutants
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Pollutant/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:pollutant_quality_data',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'pm25' => 'nullable|numeric',
            'pm10' => 'nullable|numeric',
            'so2' => 'nullable|numeric',
            'co' => 'nullable|numeric',
            'no2' => 'nullable|numeric',
            'suhu' => 'nullable|numeric',
            'kelembaban' => 'nullable|numeric',
        ]);

        PollutantQualityData::create($validated);

        return redirect()->route('pollutant-quality-data.index')
            ->with('success', 'Data polutan berhasil ditambahkan');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PollutantQualityData $pollutantQualityDatum)
    {
        return Inertia::render('Admin/Pollutant/Edit', [
            'data' => $pollutantQualityDatum
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PollutantQualityData $pollutantQualityDatum)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:pollutant_quality_data,name,' . $pollutantQualityDatum->id,
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'pm25' => 'nullable|numeric',
            'pm10' => 'nullable|numeric',
            'so2' => 'nullable|numeric',
            'co' => 'nullable|numeric',
            'no2' => 'nullable|numeric',
            'suhu' => 'nullable|numeric',
            'kelembaban' => 'nullable|numeric',
        ]);

        $pollutantQualityDatum->update($validated);

        return redirect()->route('pollutant-quality-data.index')
            ->with('success', 'Data polutan berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PollutantQualityData $pollutantQualityDatum)
    {
        $pollutantQualityDatum->delete();

        return redirect()->route('pollutant-quality-data.index')
            ->with('success', 'Data polutan berhasil dihapus');
    }
}
