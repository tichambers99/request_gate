<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class requestt extends Model
{
    //
    protected $table = "request";
    protected $fillable = ['id','title','category','status','due','description','is_checked','id_author'];
    public $timestamps = false;

    public function cbnv(){
    	return $this->belongTo('App\cbnv','id_author','id');
    }

    public function comment(){
    	return $this->hasMany('App\comment','id_request','id');
    }
}