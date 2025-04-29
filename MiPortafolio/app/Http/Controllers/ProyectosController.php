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
        return Proyectos::findOrFail($id);
    }

  
    public function update(Request $request, $id)
    {

        $proyectos = Proyecto::findOrFail($id);
        $proyectos->update($request->all());
        return $proyectos;
    }

   
    public function destroy($id)
    {
        Proyectos::destroy($id);
        return response()->json(null, 204);
        
    }
}
