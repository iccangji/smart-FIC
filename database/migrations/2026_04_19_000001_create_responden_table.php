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
        Schema::create('responden', function (Blueprint $table) {
            $table->id();
            $table->foreignId('air_quality_point_id')->constrained('air_quality_points')->onDelete('cascade');
            $table->double('lat');
            $table->double('lng');
            $table->double('berat_badan');
            $table->double('durasi_exposure');
            $table->double('frekuensi_exposure');
            $table->double('laju_inhalasi');
            $table->string('waktu_thq')->default('realtime');
            $table->double('thq')->nullable();
            $table->string('status_thq')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('responden');
    }
};
