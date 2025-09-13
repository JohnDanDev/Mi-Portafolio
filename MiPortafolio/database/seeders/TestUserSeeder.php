<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Administradores;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Administradores::updateOrCreate(
            ['usuario' => 'admin'],
            [
                'nombre' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('admin123') 
            ]);
    }
}
