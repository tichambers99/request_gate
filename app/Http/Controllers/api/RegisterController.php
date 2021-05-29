<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
class RegisterController extends Controller
{
    //
    public function register(Request $request){
    	//dd('register');
    	$userCreate = User::create([
    		'name' => $request->name,
    		'email' => $request->email,
    		'password'=> bcrypt($request->password)
    	]);
    	return response()->json([
    		'code' => 201,
    		'data' => $userCreate
    	], 201);
    }
}
