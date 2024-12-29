<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $table = "estados"; //Nombre de la tabla de la base de datos a la que hace referencia

    protected $fillable = ['codigo', 'nombre', 'orden']; //Las columnas de la tabla a usar

    protected $hidden = ['idestado']; //ocultar el nombre de algunas columnas 

    public function getEstados() 
    {
        return Estado::all(); //Se obtienen todos los registros de la tabla "estados" y devolverlos como una colección de objetos Estado
    }
}
