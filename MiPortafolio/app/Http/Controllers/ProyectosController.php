<?php

namespace App\Http\Controllers;

use App\Models\Proyectos;
use Illuminate\Http\Request;

class ProyectosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Proyectos::all();
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'link' => 'nullable|string',
        ]);

        $proyecto =Proyectos::create($request->all());

        return response()->json($proyecto,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Proyectos $proyectos)
    {
        return response()->json($proyectos);
    }

    /**
     * Show the form for editing the specified resource.
     */
   

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Proyectos $proyectos)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'link' => 'nullable|string',
        ]);

        $proyectos->update($request->all());
        return response()->json($proyectos);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proyectos $proyectos)
    {
        $proyectos->delete();
        return response()->json(null,204);
    }
}
