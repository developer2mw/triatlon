<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fecha= Carbon::parse('1998-02-01 00:00:00');
        DB::table("participant")->insert([
            "name" => "Sergio Peréz",
            "email"=> "checo11@gmail.com",
            "phone" => "9513272210",
            "age" => 25,
            "birth_date"=> $fecha,
            "gender"=> 'M',
            "blood_type" => "O+",
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("participant")->insert([
            "name" => "Sandra López",
            "email"=> Str::random(10).'@gmail.com',
            "phone" => "9513272210",
            "age" => 35,
            "birth_date"=> $fecha,
            "gender"=> 'F',
            "blood_type" => "O+",
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        DB::table("participant")->insert([
            "name" => "Uriel Torres",
            "email"=> Str::random(10).'@gmail.com',
            "phone" => "9513272210",
            "age" => 29,
            "birth_date"=> $fecha,
            "gender"=> 'M',
            "blood_type" => "O+",
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
    }
}
