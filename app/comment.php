<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    //
    protected $table = "comments";
    protected $fillable = ['id','noidung','id_cbnv','id_request'];
    public $timestamps = false;

    public function cbnv(){
    	return $this->belongTo('App\cbnv','id_cbnv','id');
    }

    public function requestt(){
    	return $this->belongTo('App\requestt','id_request','id');
    }
}
