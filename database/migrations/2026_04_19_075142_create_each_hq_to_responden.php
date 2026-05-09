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
        Schema::table('responden', function (Blueprint $table) {
            $table->double('pm25_hq')->after('waktu_thq');
            $table->double('pm10_hq')->after('pm25_hq');
            $table->double('so2_hq')->after('pm10_hq');
            $table->double('co_hq')->after('so2_hq');
            $table->double('no2_hq')->after('co_hq');
            $table->dropColumn('status_thq');
            $table->dropColumn('thq');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('responden', function (Blueprint $table) {
            $table->double('thq')->after('waktu_thq');
            $table->string('status_thq')->after('thq');
            $table->dropColumn('pm25_hq');
            $table->dropColumn('pm10_hq');
            $table->dropColumn('so2_hq');
            $table->dropColumn('co_hq');
            $table->dropColumn('no2_hq');
        });
    }
};
