<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantDetails extends Model
{
    use HasFactory;

    protected $table = "participant_details";

    protected $fillable = ['id_participant','affliction','allergy','drugs','shirt_size','address',
    'responsible','phone_responsible','club','id_state'];

    protected $hidden = ['id'];
}
