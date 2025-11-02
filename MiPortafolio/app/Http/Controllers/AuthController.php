<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request){
        $administradores = Administradores::create([
            'nombre' => $request->nombre,
            'usuario' => $request->usuario,
            'password' => Hash::make($request->password)
        ]);
        return response()->json($administradores);
    }

    public function login(Request $request){
        $credentials = $request->only('usuario', 'password');
        if(!$token = JWTAuth::attempt($credentials)){
            return response()->json(['error' => 'Credenciales invalidas'], 401);
        }
        return response()->json(compact('token'));
    }
}