<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaidStatus extends Model
{
    use HasFactory;

    protected $table = "status";

    protected $fillable = ['status'];

    protected $hidden = ['id'];
}
