<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaidType extends Model
{
    use HasFactory;

    protected $table = "paid_type";

    protected $fillable = ['status'];

    protected $hidden = ['id'];
    
}
