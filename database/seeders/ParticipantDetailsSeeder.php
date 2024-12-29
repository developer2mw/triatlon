<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ParticipantDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("participant_details")->insert([
            "id_participant"=> 1,
            "shirt_size"=>"XL",
            "address"=>"Marcos #104, Col. Benito Juárez, Sta. Cruz Xoxocotlán",
            "responsible"=> "Don Marcos",
            "phone_responsible" => "9514785478",
            "club" => "",
            "id_state" => 20,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
    }
}
