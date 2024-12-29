<?php

namespace Database\Seeders;

use App\Models\EventDistance;
use Illuminate\Database\Seeder;

class EventDistanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventDistance::insert([
            [
                'id_distance' => 1,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 2,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 3,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 4,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 2,
                'id_event' => 1,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 5,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 6,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 7,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 8,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_distance' => 9,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ]
        ]
        );
    }
}
