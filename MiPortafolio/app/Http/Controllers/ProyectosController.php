<?php

namespace App\Http\Controllers;

use App\Models\Proyectos;
use Illuminate\Http\Request;

class ProyectosController extends Controller
{
    
    public function index()
    {
        return Proyectos::all();
    }

    
    public function store(Request $request)
    {
        return Proyectos::create($request->all());
    }

    
    public function show($id)
    {
        $proyectos = Proyectos::find($id);

        return response()->json($proyectos);
    }

  
    public function update(Request $request, $id)
    {
        $proyectos = Proyectos::find($id);
        $validated = $request->validate([
        'nombre' => 'required|string|max:255',
        'descripcion' => 'nullable|string',
        'link' => 'nullable|string'
        ]);

        $proyectos->update($validated);

        return response()->json(['message' => 'Proyecto actualizado', 'proyectos' => $proyectos]);
    }

   
    public function destroy($id)
    {
        $proyectos = Proyectos::find($id);

        $proyectos->delete();

        return response()->json(['message' => 'Proyecto eliminado correctamente']);
    }
}
