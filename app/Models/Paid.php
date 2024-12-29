<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paid extends Model
{
    use HasFactory;

    protected $table = 'paid';

    protected $fillable = ['id_participant','id_paid_type','id_status','reference'];

    protected $hidden = ['id'];
    
}
