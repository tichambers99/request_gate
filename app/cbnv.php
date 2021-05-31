<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\bophan;
class cbnv extends Model
{
    //
    protected $table = 'cbnvs';
    public $primaryKey = 'id';
    public function user(){
    	return $this->belongsTo('App\User', 'id_bophan');
    }
    public function bophan(){
    	return $this->belongsTo('App\bophan', 'id_bophan');
    }
}
