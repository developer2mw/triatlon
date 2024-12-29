<?php

namespace Database\Seeders;

use App\Models\EventCategoryDistance;
use Illuminate\Database\Seeder;

class EventCategoryDistanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventCategoryDistance::insert([
            [
                'id_category' => 1,
                'id_distance' => 1,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 2,
                'id_distance' => 2,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 3,
                'id_distance' => 3,
                'id_event' => 3,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ], 
            [
                'id_category' => 4,
                'id_distance' => 4,
                'id_event' => 1,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 5,
                'id_distance' => 4,
                'id_event' => 1,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 6,
                'id_distance' => 5,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 7,
                'id_distance' => 6,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 8,
                'id_distance' => 7,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 9,
                'id_distance' => 8,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 10,
                'id_distance' => 8,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 11,
                'id_distance' => 8,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ],
            [
                'id_category' => 12,
                'id_distance' => 9,
                'id_event' => 4,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ]
        ]);
    }
}
