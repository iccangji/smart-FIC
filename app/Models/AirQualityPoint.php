<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AirQualityPoint extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lat',
        'lng',
        'pm25',
        'pm10',
        'so2',
        'co',
        'no2',
        'thq_default',
        'status_default'
    ];

    /**
     * Get all responden records for this air quality point.
     */
    public function respondens(): HasMany
    {
        return $this->hasMany(Responden::class);
    }
}
