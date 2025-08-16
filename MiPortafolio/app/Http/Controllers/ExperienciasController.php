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
        $experiencias = Experiencias::find($id);
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'lugar' => 'required|string|max:255',
            'detalle' => 'required|string|max:255'
        ]);

        $experiencias->update($validated);

        return response()->json(['message' => 'Experiencia actualizada', 'experiencias' =>$experiencias]);
    }

    public function destroy($id){
        $experiencias = Experiencias::find($id);
        $experiencias -> delete();
        return response()->json(['message' => 'Experiencia Eliminada']);
    }
}
