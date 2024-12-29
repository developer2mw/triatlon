<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("event_category")->insert([
            'id_category' => 1,
            'id_event' => 3,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("event_category")->insert([
            'id_category' => 2,
            'id_event' => 3,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("event_category")->insert([
            'id_category' => 3,
            'id_event' => 3,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("event_category")->insert([
            'id_category' => 4,
            'id_event' => 1,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("event_category")->insert([
            'id_category' => 5,
            'id_event' => 1,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("event_category")->insert([
            'id_category' => 6,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-d H:m:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 7,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 8,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 9,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 10,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 11,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
        DB::table('event_category')->insert([
            'id_category' => 12,
            'id_event' => 4,
            'created_at' => now()->format("Y-m-d H:i:s"),
            'updated_at'=> now()->format("Y-m-m H:i:s")
        ]);
    }
}
