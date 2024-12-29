<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reto extends Model
{
    protected $table = "reto";

    protected $fillable = ["telefono", "nombre", "email", "registro", "categoria","descuento",
     "estatus", "tipo", "evento", "tipo_pago", "sede", "numero", "distancia", "distancia5",
    "status_tarjeta", "referencia_oxxo", "status_oxxo", "pais", "ruta", "montana", "paquete",
    "numMontana", "numRuta"];

    protected $hidden = ['id'];

    public function getReto() 
    {
        return Reto::all();
    }

    public function getRetoById($id) 
    {
        return Reto::find($id);
    }
    
    public function getRetoAndOther($id) {
        
        $querys = Reto::select('id', 'status_tarjeta', 'tipo_pago', 'referencia_oxxo','evento','descuento',
         'numero','paquete', 'categoria', 'nombre', 'email', 'telefono', 'distancia', 'ruta', 'montana', 'sexo')
        ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
        ->where('reto.id', '=', $id)
        ->get();

        return $querys;
    }

    public function updateRetoByIdOxxo($id, $referencia, $status) {
        $update = Reto::where('id', $id)->update([
            'referencia_oxxo' => $referencia,
            'status_oxxo' => $status
        ]);
        if(!$update) {
            return false;
        }
        return true;
    }

    public function updateRetoByIdCard($id, $tipo, $status, $folio) {
        $update = Reto::where('id', $id)->update([
            'tipo_pago' => $tipo,
            'status_tarjeta' => $status,
            'estatus' => 'Confirmado',
            'numero' => $folio
        ]);
        if(!$update) {
            return false;
        }
        return true;
    }

    public function getAllParticipantNumbers($event)
    {
        return Reto::select('reto.numero')
        ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
        ->where('reto.estatus', '=', 'Confirmado')
        ->where('reto.evento', '=', $event)
        ->where('reto.numero', '>', 0)
        ->orderBy('reto.numero', 'ASC')
        ->get()
        ->toArray();
    }

    public function lastElement($event) {
        return Reto::select('max(reto.numero) AS numero')
        ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
        ->where('reto.estatus', '=', 'Confirmado')
        ->where('reto.evento', '=', $event)
        ->max('reto.numero');
    }

    public static function icontrolTotal($evento) 
    {
        return Reto::select('*')
        ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
        ->where('evento', '=', $evento)
        ->get();
    }

    public function getStatus($estatus, $evento) 
    {   
        if($estatus == '') {
            return Reto::select('count(*) AS STATUS')
                ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
                ->where('evento', '=', $evento)
                ->where(function($query) {
                    $query->whereNull('estatus')
                    ->orWhere('estatus', '=', 'Pendiente');
                })
                ->count();
        } else {
            return Reto::select('count(*) AS STATUS')
                ->join('datos_participante', 'datos_participante.idparticipante', '=', 'reto.id')
                ->where('estatus', '=', $estatus)
                ->where('evento', '=', $evento)
                ->count();
        }
        
    }
}
