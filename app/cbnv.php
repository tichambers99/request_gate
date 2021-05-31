<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\bophan;
class cbnv extends Model
{
    protected $table = 'cbnvs';
    public $primaryKey = 'id';

    public function user(){
    	$this->belongTo('App\User', 'id_bophan');
    }
    public function bophan(){
    	return $this->belongsTo('App\bophan');
    }
    protected $hidden = [
        'created_at', 'updated_at',
    ];
}
