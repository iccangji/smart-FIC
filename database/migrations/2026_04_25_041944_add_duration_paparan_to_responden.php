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
            $table->double('durasi_paparan')->after('durasi_exposure')->default(0);
            $table->renameColumn('durasi_exposure', 'waktu_paparan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('responden', function (Blueprint $table) {
            $table->dropColumn('durasi_paparan');
            $table->renameColumn('waktu_paparan', 'durasi_exposure');
        });
    }
};
