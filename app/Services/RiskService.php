<?php
// app/Services/RiskService.php

namespace App\Services;

class RiskService
{
    public static function intake($C, $IR, $ET, $EF, $BW, $ED, $time = 'realtime')
    {
        $time = match ($time) {
            '5years' => 5,
            '10years' => 10,
            '15years' => 15,
            '20years' => 20,
            '25years' => 25,
            '30years' => 30,
            default => 1
        };
        $AT = $ED * 365; // convert ke hari
        return ($C * $IR * $ET * $EF * $time) / ($BW * $AT);
    }

    public static function hq($intake, $rfc)
    {
        return $intake / $rfc;
    }

    public static function thq($hqs)
    {
        return array_sum($hqs);
    }

    public static function defaultParams()
    {
        return [
            'ir' => 20,
            'et' => 24,
            'ef' => 350,
            'ed' => 30,
            'bw' => 60
        ];
    }

    public static function rfc()
    {
        return [
            'pm25' => 0.015,
            'pm10' => 0.045,
            'so2' => 0.026,
            'co' => 1.207,
            'no2' => 0.02
        ];
    }
}
