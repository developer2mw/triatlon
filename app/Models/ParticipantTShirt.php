<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantTShirt extends Model
{
    use HasFactory;

    protected $table = "participant_t_shirt";

    protected $fillable = ['t_shirt', 'id_participant'];

    protected $hidden = ['id'];
}
