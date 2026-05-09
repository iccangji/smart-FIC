<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Responden extends Model
{
    use HasFactory;

    protected $table = 'responden';

    protected $fillable = [
        'air_quality_point_id',
        'lat',
        'lng',
        'berat_badan',
        'waktu_paparan',
        'durasi_paparan',
        'frekuensi_exposure',
        'laju_inhalasi',
        'waktu_thq',
        'pm25_hq',
        'pm10_hq',
        'so2_hq',
        'co_hq',
        'no2_hq',
    ];

    protected $casts = [
        'berat_badan' => 'double',
        'waktu_paparan' => 'double',
        'durasi_paparan' => 'double',
        'frekuensi_exposure' => 'double',
        'laju_inhalasi' => 'double',
        'pm25_hq' => 'double',
        'pm10_hq'  => 'double',
        'so2_hq' => 'double',
        'co_hq' => 'double',
        'no2_hq' => 'double',
        'lat' => 'double',
        'lng' => 'double',
    ];

    /**
     * Get the air quality point associated with this responden record.
     */
    public function airQualityPoint(): BelongsTo
    {
        return $this->belongsTo(AirQualityPoint::class);
    }
}
