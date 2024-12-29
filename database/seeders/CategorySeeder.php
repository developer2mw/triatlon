<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            "LIBRE", 
            "MASTER", 
            "VETERANOS", 
            "Estudiantes LED", 
            "Maestría LED",
            "Infantil 8 y menores",
            "Infantil (9-12 años)",
            "Infantil (13-15 años)",
            "Juvenil (16 a 17 años)",
            "Libre (18 y mas)",
            "Master 40 y mas",
            "Mi primer acuatlón"
        ];

        foreach ($categories as $category) {
            DB::table("category")->insert([
                "category"=> $category,
                "created_at"=> now()->format("Y-m-d H:i:s"),
                "updated_at"=> now()->format("Y-m-d H:i:s")
            ]);
        }
    }
}
