<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\cbnv;

class bophan extends Model
{
    protected $table = 'bophan';
    public $primaryKey = 'id';
    public function cbnvs(){
    	return $this->hasMany('App\cbnv');
    }
    protected $hidden = [
        'created_at', 'updated_at',
    ];
}
