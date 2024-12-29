<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantDiscounts extends Model
{
    use HasFactory;

    protected $table = "participant_discounts";

    protected $fillable = ['discount', 'id_participant'];

    protected $hidden = ['id'];
} 
