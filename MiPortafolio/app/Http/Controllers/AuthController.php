<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $credential = $request->only('usuario','password');
        if(!$token = Auth::guard('api')->attemp($credential)){
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'token' => $token,
            'user' => Auth::guard('api')->usuario()
        ]);
    }

    public function logout(){
        Auth::guard('api')->logout();
        return response()->json(['message' => 'Logged out Successfully']);
    }
}