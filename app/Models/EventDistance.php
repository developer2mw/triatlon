<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventDistance extends Model
{
    use HasFactory;

    protected $table = "event_distances";

    protected $fillable = ['id_distance', 'id_event'];

    protected $hidden = ['id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function distance()
    {
        return $this->belongsTo(Distance::class);
    }
}

