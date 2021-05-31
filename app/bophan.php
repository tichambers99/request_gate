<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\cbnv;
class bophan extends Model
{
    //
    protected $table = 'bophan';
    public $primaryKey = 'id';
    public function cbnv(){
    	return $this->hasMany('App\cbnv');
    }
}
