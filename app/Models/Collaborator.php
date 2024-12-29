<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collaborator extends Model
{
    use HasFactory;

    protected $table = "collaborator";

    protected $fillable = ['id_participant', 'collaborator'];

    protected $hidden = ['id'];

}
