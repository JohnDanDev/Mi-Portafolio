<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if(!$token = auth('admin')->attempt($credemtials)){
            return response()->json(['error'=>'Credenciales invalidas'], 401);
        }

        return response()->json([
            'token' => $token,
            'admin' => auth('admin')->user()
        ]);
    }

    public function logout(){
        auth('admin')->logout();
        return response()->json(['message' => 'Sesion cerrada']);
    }

    public function me(){
        return response()->json(auth('admin')->user());
    }
}