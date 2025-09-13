<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'usuario' => ['required', 'string'],
            'password' => ['required', 'string']
        ]);

        if(!$token = Auth::guard('api')->attempt($data)){
            throw ValidationException::withMessages([
                'usuario' => ['Crdenciales invalidas']
            ]);
        }

        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard('api')->factory()->getTTL()*60,
            'user' => Auth::guard('api')->user()
        ]);
    }

    public function me(){
        return response()->json(Auth::guard('api')->user());
    }

    public function logout(){
        Auth::guard('api')->logout();
        return response()->json(['message' => 'Sesion cerrada']);
    }

    public function refresh(){
        return response()->json([
            'token' => Auth::guard('api')->refresh(),
            'token_type' => 'bearer',
            'expires_in' => Auth::guard('api')->factory()->getTTL() * 60
        ]);
    }
}