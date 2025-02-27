<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distance extends Model
{
    use HasFactory;

    protected $table = "distance";

    protected $fillable = ['distance', 'id_event'];

    protected $hidden = ['id'];
    
}
