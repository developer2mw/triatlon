<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategory extends Model
{
    use HasFactory;

    protected $table = "event_category";

    protected $fillable = ['id_category','id_event'];

    protected $hidden = ['id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
