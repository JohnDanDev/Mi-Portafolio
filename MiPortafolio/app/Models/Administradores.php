<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Administradores as Authenticable;
use Iluminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Administradores extends Authenticable implements JWTSubject
{
    use Notifiable;
    protected $fillable = ['nombre', 'usuario', 'password'];
    protected $hidden = ['password', 'token', 'rememberToken'];

    public function getAuthIdentifierName(){
        return 'usuario';
    }

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }
}
