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
            "Infantil (5-6 años)",
            "Infantil (7-8 años)",
            "Infantil (9-10 años)",
            "Infantil (11-12 años)",
            "Super Sprint Inf (13-15 años)",
            "Super Sprint Juv (16-17 años)",
            "Libre (18-39 años)",
            "Master (40-49 años)",
            "Veteranos (50 y más)",
            "Relevos",
            "Novatos (18 y más)"
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
