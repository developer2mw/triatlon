<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantFaculty extends Model
{
    use HasFactory;
    
    protected $table = "participant_faculties";

    protected $fillable = ['faculty', 'id_participant'];

    protected $hidden = ['id'];
}
