<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProyectosController;
use App\Http\Controllers\ExperienciasController;

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
Route::delete('/proyectos/{id}',[ProyectosController::class,'destroy']);
Route::post('/proyectos',[ProyectosController::class,'store']);
Route::get('/proyectos',[ProyectosController::class,'index']);
Route::get('/proyectos/{id}',[ProyectosController::class,'show']);
Route::put('/proyectos/{id}', [ProyectosController::class, 'update']);

Route::delete('/experiencias/{id}',[ExperienciasController::class, 'destroy']);
Route::post('/experiencias',[ExperienciasController::class, 'store']);
Route::get('/experiencias',[ExperienciasController::class, 'index']);
Route::get('/experiencias/{id}',[ExperienciasController::class, 'show']);
Route::put('/experiencias/{id}',[ExperienciasController::class, 'update']);

Route::delete('/cursos/{id}',[CursosController::class, 'destroy']);
Route::post('/cursos',[CursosController::class, 'store']);
Route::get('/cursos',[CursosController::class, 'index']);
Route::get('/cursos/{id}',[CursosController::class, 'show']);
Route::put('/cursos/{id}',[CursosController::class, 'update']);