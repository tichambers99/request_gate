<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class request extends Model
{
    //
    protected $table = "request";

    public function cbnv(){
    	return $this->belongTo('App\cbnv','id_author','id');
    }

    public function comment(){
    	return $this->hasMany('App\request','id_request','id');
    }
}
