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
        Schema::create('air_quality_points', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('lat');
            $table->double('lng');
            $table->double('pm25');
            $table->double('pm10');
            $table->double('so2');
            $table->double('co');
            $table->double('no2');
            $table->double('suhu')->nullable();
            $table->double('kelembaban')->nullable();
            $table->double('thq_default')->nullable();
            $table->string('status_default')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
