<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fecha1= Carbon::parse('2023-10-15 00:00:00');
        DB::table("event")->insert([
            'event'=> 'Atletica LED UABJO 2023',
            'place'=> 'Facultad de Cultura Física y Deporte de la UABJO.',
            'start'=> 'Pista de tartan de la Facultad de Cultura Física y Deporte de la UABJO',
            'goal'=> 'Pista de tartan de la Facultad de Cultura Física y Deporte de la UABJO',
            'hour'=> '08:00 a.m.',
            'limit'=> '500',
            'date'=> $fecha1,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        $fecha2= Carbon::parse('2023-10-27 00:00:00');
        DB::table("event")->insert([
            'event'=> 'Carrera Atlética Catrines y Catrinas Cuzcatlán',
            'place'=> 'San José del Progreso',
            // 'start'=> 'Pista de tartan de la Facultad de Cultura Física y Deporte de la UABJO',
            // 'goal'=> 'Pista de tartan de la Facultad de Cultura Física y Deporte de la UABJO',
            'hour'=> '08:00 a.m.',
            'limit'=> '200',
            'date'=> $fecha2,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        $fecha3= Carbon::parse('2023-10-29 00:00:00');
        DB::table("event")->insert([
            'event'=> 'Día de Muertos',
            'place'=> 'Santa Cruz Xoxocotlán.',
            'start'=> 'Parque Central de Santa Cruz Xoxocotlán.',
            'goal'=> 'Parque Central de Santa Cruz Xoxocotlán.',
            'hour'=> '5:30 pm infantiles y 6:30 pm 5 y 10k',
            'limit'=> '200',
            'date'=> $fecha3,
            "created_at"=> now()->format("Y-m-d H:i:s"),
            "updated_at"=> now()->format("Y-m-d H:i:s")
        ]);
        $fecha4 = Carbon::parse('2024-02-04 00:00:00');
        DB::table('event')->insert([
            'event' => 'Acuatlon 5ta Edición',
            'place' => 'Carretera Internacional al Tule, San Francisco Tutla, Oax. (Club Deportivo Oaxaca)',
            'start' => 'Deportivo Oaxaca',
            'goal' => 'Deportivo Oaxaca',
            'hour' => '07:00 a.m',
            'limit' => '150',
            'date' => $fecha4,
            'created_at' => now()->format('Y-m-d H:i:s'),
            'updated_at' => now()->format('Y-m-d H:i:s') 
        ]);
    }
}
