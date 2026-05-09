<?php

namespace Database\Seeders;

use App\Models\AirQualityPoint;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirQualityPointSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'name' => 'SD Negeri 1 Porara',
                'lat' => -3.895200,
                'lng' => 122.420406,
                'pm25' => 0.039,
                'pm10' => 0.057,
                'so2' => 0.098,
                'co' => 4.220,
                'no2' => 0.115
            ],
            [
                'name' => 'SD Negeri 2 Porara',
                'lat' => -3.863039,
                'lng' => 122.433025,
                'pm25' => 0.038,
                'pm10' => 0.057,
                'so2' => 0.098,
                'co' => 4.167,
                'no2' => 0.113
            ],
            [
                'name' => 'SD Negeri Paku Jaya',
                'lat' => -3.899381,
                'lng' => 122.375167,
                'pm25' => 0.033,
                'pm10' => 0.051,
                'so2' => 0.0825,
                'co' => 3.5,
                'no2' => 0.093
            ],
            [
                'name' => 'SMP Negeri 2 Bondoala',
                'lat' => -3.943047,
                'lng' => 122.425839,
                'pm25' => 0.035,
                'pm10' => 0.054,
                'so2' => 0.089,
                'co' => 3.8,
                'no2' => 0.099
            ],
            [
                'name' => 'SMP Satu Atap 2 Bondoala',
                'lat' => -3.835103,
                'lng' => 122.478819,
                'pm25' => 0.04,
                'pm10' => 0.058,
                'so2' => 0.1,
                'co' => 4.288,
                'no2' => 0.115
            ],
        ];
        DB::table('air_quality_points')->truncate();
        foreach ($data as $item) {
            AirQualityPoint::create($item);
        }
    }
}
