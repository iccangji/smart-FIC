<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pollutant_quality_data', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->double('lat')->nullable();
            $table->double('lng')->nullable();
            $table->double('pm25')->nullable();
            $table->double('pm10')->nullable();
            $table->double('so2')->nullable();
            $table->double('co')->nullable();
            $table->double('no2')->nullable();
            $table->double('suhu')->nullable();
            $table->double('kelembaban')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pollutant_quality_data');
    }
};
