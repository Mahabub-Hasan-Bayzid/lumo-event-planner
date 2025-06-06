<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\WeatherController;

Route::apiResource('events', EventController::class);
Route::get('/weather', [WeatherController::class, 'getWeather']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
