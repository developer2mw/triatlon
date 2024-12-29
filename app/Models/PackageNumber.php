<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageNumber extends Model
{
    use HasFactory;

    protected $table = "package_number";

    protected $fillable = ['number','id_participant','id_package','id_event_category'];

    protected $hidden = ['id'];
    
}
