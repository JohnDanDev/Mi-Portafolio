<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\models\Cursos;

class CursosController extends Controller
{
    public function index(){
        return Cursos::all();
    }

    public function store(Request $request){
        return Cursos::create($request->all());
    }

    public function show($id){
        $experiencias = Cursos::find($id);
        return response()->json($cursos);
    }

    public function update(Request $request, $id){
        $cursos = Cursos::find($id);
        $validated = $request->validate([
            'id_curso' => 'required|string|max:255',
            'nombre' => 'required|string|',
            'lugar' => 'required|string',
            'detalle' => 'required|string',
            'url_img' => 'required|string|nullable',
        ]);

        $experiencias->update($validated);

        return response()->json(['message' => 'Curso actualizado', 'cursos' =>$cursos]);
    }

    public function destroy($id){
        $cursos = Cursos::find($id);
        $cursos -> delete();
        return response()->json(['message' => 'Curso Eliminado']);
    }
}
