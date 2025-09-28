<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
   /* public function register(Request $request){
        $request ->validate([
            'nombre' => 'required|string|max:255',
            'usuario' => 'required|string|max:255',
            'password' => 'required|string|min:6|confirmed'
         ]);

         $administrador = Administrador::create([
            'nombre' => $request->nombre,
            'usuario' => $request->usuario,
            'password' => Hash::make($request->password)
         ]);

         $token = $administrador->createToken('api_token')->plainTextToken;
         return response()->json(['administrador' => $administrador, 'token' => $token],201);
         
    }*/

    public function login(Request $request){
        
        $data = $request->validate([
            'usuario' => 'required',
            'password' => 'required'
        ]);

        $admin = Administradores::where('usuario', $data['usuario'])->first();
        
        if(!admin || !Hash::check($data['password'], $admin->password)){
            return response()->json(['message' => 'Credenciales invalidas'], 401);
        }

        $token = $admin->createToken('api_token')->plainTextToken;

        return response()->json(['admin' => $admin, 'token' => $token]);
    }

    public function logout(){
        $request->administrador()->currentAccessToken()->delete();
        return response()->json(['message' => 'Sesion cerrada']);

     }

}