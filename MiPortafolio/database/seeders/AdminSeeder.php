<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Administradores;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Administradores::create([
            'nombre' => 'Admin',
            'usuario' => 'admin',
            'password' => Hash::make('12345'),
            'token' => Hash::make('12345')
        ]);
    }
}
