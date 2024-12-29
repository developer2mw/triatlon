<?php

namespace Database\Seeders;

use App\Models\PaidType;
use Illuminate\Database\Seeder;

class PaidTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaidType::insert([
            [
                'status' => 'Efectivo en HBSports',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ],
            [
                'status' => 'Deposito Bancario',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ],
            [
                'status' => 'Gratis',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ],
            [
                'status' => 'OxxoPay',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ],
            [
                'status' => 'Tarjeta de Crédito',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ],
            [
                'status' => 'Ninguno',
                'created_at'=> now()->format("Y-m-d H:i:s"),
            ]
        ]);
    }
}
