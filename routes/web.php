<?php

use App\Http\Controllers\Admin\AirQualityPointController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\PollutantMapController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\RiskController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\RespondenController;
use App\Http\Controllers\Admin\NewsDataController;
use App\Http\Controllers\Admin\PollutantQualityDataController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/data-resiko-kesehatan', [MapController::class, 'index'])->name('health-risk-map');
Route::get('/', [PollutantMapController::class, 'index'])->name('pollutant-quality-map');

Route::post('/calculate', [RiskController::class, 'calculate']);
Route::get('/calculate', function () {
    return redirect()->route('home');
});
Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::resource('points', AirQualityPointController::class);
    Route::resource('responden', RespondenController::class);
    Route::resource('pollutant-quality-data', PollutantQualityDataController::class);
    Route::resource('users', UserController::class);
    Route::resource('news', NewsDataController::class)->names('admin.news');
});

// public
Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{slug}', [NewsController::class, 'show'])->name('news.show');

Route::get('/belajar', function () {
    return Inertia::render('Learning/Index');
})->name('learning.index');
Route::get('/dampak', function () {
    return Inertia::render('Impact/Index');
})->name('impact.index');
Route::get('/kebijakan', function () {
    return Inertia::render('Policy/Index');
})->name('policy.index');


require __DIR__ . '/auth.php';
