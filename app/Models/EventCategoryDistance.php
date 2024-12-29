<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategoryDistance extends Model
{
    use HasFactory;

    protected $table = "event_category_distances";

    protected $fillable = ['id_category','id_distance','id_event'];

    protected $hidden = ['id'];
}
