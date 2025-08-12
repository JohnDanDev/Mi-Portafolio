<?php

namespace App\Http\Controllers;

use App\Models\Experiencias;
use Illuminate\Http\Request;

class ExperienciasController extends Controller
{
    public function index(){
        return Experiencias::all();
    }

    public function store(Request $request){
        return Experiencias::create($request->all());
    }

    public function show($id){
        $experiencias = Experiencias::find($id);
        return response()->json($experiencias);
    }

    public function update(Request $request, $id){
        
    }
}
