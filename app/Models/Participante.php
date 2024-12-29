<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participante extends Model
{
    protected $table = "datos_participante";

    protected $fillable = ['sexo', 'edad', 'estado_civil', 'domicilio','estado', 'padecimiento_enfermedad',
    'padecimiento_alergia', 'nombre_responsable_incidencia', 'telefono_responsable', 'talla_playera',
    'playera_color', 'club', 'hijos', 'nCorredor', 'idorden', 'tevento', 'nacimiento', 'tiempo_personal'];

    protected $hidden = ['iddato'];

    public function getParticipantes() 
    {
        return Participante::all();
    }

    public function getParticipanteById($idparticipante) 
    {
        return Participante::where('idparticipante', '=',$idparticipante)
        ->firstOrFail();
    }

    public function totalCategoria($evento,$talla_playera, $sexo)
    {
        if($sexo == '' && $talla_playera != '') {
            return Participante::select('count(*) AS RESULT')
            ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
            ->where('evento', '=', $evento)
            ->where('estatus', '=', 'Confirmado')
            ->where('talla_playera', '=', $talla_playera)
            ->count();
        }
        else if($sexo != '' && $talla_playera != '') {
            return Participante::select('count(*) AS RESULT')
            ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
            ->where('evento', '=', $evento)
            ->where('estatus', '=', 'Confirmado')
            ->where('sexo', '=', $sexo)
            ->where('talla_playera', '=', $talla_playera)
            ->count();
        }
        else {
            return Participante::select('count(*) AS RESULT')
            ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
            ->where('evento', '=', $evento)
            ->where('estatus', '=', 'Confirmado')
            ->count();
        }
    }

    public function getParticipantesCategoria($evento, $sexo, $category) 
    {
        return Participante::select('count(idparticipante) as Total')
        ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
        ->where('sexo', '=', $sexo)
        ->where('categoria', '=', $category)
        ->where('playera_color', '=', 'B')
        ->where('evento', '=', $evento)
        ->count();
    }
}
