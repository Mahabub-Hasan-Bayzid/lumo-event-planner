<?php

use Illuminate\Support\Facades\Route;


// Catch-all for React app (MUST BE LAST)
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
