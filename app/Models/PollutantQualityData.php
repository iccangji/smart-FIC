<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PollutantQualityData extends Model
{
    protected $table = 'pollutant_quality_data';

    protected $fillable = [
        'name',
        'lat',
        'lng',
        'pm25',
        'pm10',
        'so2',
        'co',
        'no2',
        'suhu',
        'kelembaban',
    ];

    protected $casts = [
        'lat' => 'double',
        'lng' => 'double',
        'pm25' => 'double',
        'pm10' => 'double',
        'so2' => 'double',
        'co' => 'double',
        'no2' => 'double',
        'suhu' => 'double',
        'kelembaban' => 'double',
    ];
}
