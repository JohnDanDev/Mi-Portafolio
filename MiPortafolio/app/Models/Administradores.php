<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Administradores extends Authenticatable
{
    use Notifiable;

    protected $table = 'administradores';
    protected $fillable = ['nombre', 'usuario', 'password'];
    protected $hidden = ['password', 'token', 'rememberToken'];
}
