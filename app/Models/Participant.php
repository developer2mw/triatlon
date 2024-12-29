<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    protected $table = "participant";

    protected $fillable = ['name','email','phone','age','birth_date','gender', 'blood_type'];

    protected $hidden = ['id'];

    public function participantDiscounts()
    {
        return $this->belongsTo(ParticipantDiscounts::class);
    }
}
