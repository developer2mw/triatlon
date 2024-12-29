<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states=[
            "Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Coahuila","Colima","CDMX","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco",
            "México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala",
            "Veracruz","Yucatán","Zacatecas"];
        foreach($states as $state){
            DB::table("state")->insert([
                "state"=> $state
            ]);
        }    
    }
}
