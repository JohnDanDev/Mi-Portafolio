<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experiencias extends Model
{
    use HasFactory;
    protected $fillable = ['titulo', 'lugar', 'detalle', 'periodoInicio', 'periodoFinal'];
}
