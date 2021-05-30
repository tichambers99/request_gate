<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    //
    protected $table = "comment";

    public function cbnv(){
    	return $this->belongTo('App\cbnv','id_cbnv','id');
    }

    public function request(){
    	return $this->belongTo('App\request','id_request','id');
    }
}
