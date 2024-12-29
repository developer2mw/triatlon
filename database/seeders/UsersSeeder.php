<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'name' => 'DesarrolloMW',
                'email' => 'desarrollo@mundoweb.com.mx',
                'password' => Hash::make("J/3W%Ge4sAvjnr#u<6{;+8"),
                'type' => 2
            ],
            [
                'name' => 'Alejandro León',
                'email' => 'servicios@mundoweb.com.mx',
                'password' => Hash::make("X8#7xgq?uQP=E.[M~*zGN{"),
                'type' => 2
            ],
            [
                'name' => 'Mario',
                'email' => 'direccion@hbsports.com.mx',
                'password' => Hash::make('A$Jm"~yhQfLkZ9[r)%@GC6'),
                'type' => 2
            ]
        ]);
    }
}
