<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notificacion extends Model
{
    protected $table = "notifications";

    protected $fillable = ['user', 'activity', 'date_time', 'competitor'];

    protected $hidden = ['id'];
}
