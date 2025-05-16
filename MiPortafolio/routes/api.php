<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProyectosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


//Route::apiResource('proyectos',ProyectosController::class);
Route::delete('/proyecto/{id}',[ProyectosController::class,'destroy']);
Route::post('/proyectos',[ProyectosController::class,'store']);
Route::get('/proyectos',[ProyectosController::class,'index']);
Route::get('/proyectos/{id}',[ProyectosController::class,'show']);
Route::put('/proyectos/{id}', [ProyectosController::class, 'update']);