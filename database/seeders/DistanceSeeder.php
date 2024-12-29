<?php

namespace Database\Seeders;

use App\Models\Distance;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Distance::insert([
                [
                    "distance" => "10 KM",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "5 KM",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "2 KM",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "1200 M",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "CARRERA: 300M, NATACIÓN: 100M, CARRERA: 300M",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "CARRERA: 1KM, NATACIÓN: 200M, CARRERA: 500M",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "CARRERA: 1KM, NATACIÓN: 400M, CARRERA: 1.5KM",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "CARRERA: 2.5KM, NATACIÓN: 600M, CARRERA: 1.5KM",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ],
                [
                    "distance" => "CARRERA: 1KM, NATACIÓN: 200M, CARRERA: 500M",
                    "created_at"=> now()->format("Y-m-d H:i:s"),
                    "updated_at"=> now()->format("Y-m-d H:i:s")
                ]
            ]
        );
    }
}
