<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Responden;
use App\Models\AirQualityPoint;
use App\Services\RiskService;

class RespondenSeeder extends Seeder
{
    public function run(): void
    {
        $points = AirQualityPoint::all();

        if ($points->isEmpty()) {
            $this->command->info('No air quality points found. Please run AirQualityPointSeeder first.');
            return;
        }

        // Load JSON
        $json = file_get_contents(database_path('data/sampel_resiko.json'));
        $json = '[' . $json . ']'; // penting!

        $data = json_decode($json, true);

        if (!$data) {
            dd($data);
            $this->command->error('JSON tidak valid');
            return;
        }

        DB::table('responden')->truncate();

        $rfc = RiskService::rfc();
        $pointIndex = 0;
        $totalPoints = $points->count();

        foreach ($data as $i => $item) {

            // Ambil point secara berurutan (looping)
            $respondenNumber = (int) $item['Respoden'];

            $point = $points[($respondenNumber - 1) % $totalPoints];

            // Mapping dari JSON
            $IR = $item['Inhalation Rate (IR)'];
            $EF = $item['Exposure Frequncy (EF)'];
            $tE = $item['Lama Pajanan (tE)'];
            $ED = $item['Duration Time  (ED)'];
            $BW = $item['Body Weight (BW)'];

            // Hitung HQ per polutan
            $hqs = [];
            foreach (['pm25', 'pm10', 'so2', 'co', 'no2'] as $pollutant) {

                $C = $point->{$pollutant};

                $intake = RiskService::intake(
                    C: $C,
                    IR: $IR,
                    ET: $tE,
                    EF: $EF,
                    BW: $BW,
                    ED: $ED
                );

                $hq = RiskService::hq($intake, $rfc[$pollutant]);
                $hqs[] = $hq;
            };

            Responden::create([
                'air_quality_point_id' => $point->id,
                'lat' => $point->lat,
                'lng' => $point->lng,

                // Parameter exposure
                'berat_badan' => $BW,
                'waktu_paparan' => $tE,
                'durasi_paparan' => $ED,
                'frekuensi_exposure' => $EF,
                'laju_inhalasi' => $IR,

                'waktu_thq' => 'realtime',

                // HQ per polutan
                'pm25_hq' => round($hqs[0] / 1000, 4),
                'pm10_hq' => round($hqs[1] / 1000, 4),
                'so2_hq'  => round($hqs[2] / 1000, 4),
                'co_hq'   => round($hqs[3] / 1000, 4),
                'no2_hq'  => round($hqs[4] / 1000, 4),
            ]);
        }

        $this->command->info("Seeder berhasil insert " . count($data) . " responden.");
    }
}
