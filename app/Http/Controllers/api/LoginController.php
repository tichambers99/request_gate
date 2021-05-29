<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\SessionUser;
use App\User;
use App\cbnv;

class LoginController extends Controller
{
    public function login(Request $request){
    	$dataCheckLogin = [
    		'email' => $request->email,
    		'password' => $request->password
    	];
    	//xac thuc user
    	if(auth()->attempt($dataCheckLogin)){
    		$checkTokenExit = SessionUser::where('user_id', auth()->id())->first();
			if(empty($checkTokenExit)){
				$userSession = $request->user();
                $role = cbnv::where('id',auth()->id())->first()->role;
			}else{
				$userSession = $checkTokenExit;
			}
			return response()-> json([
				'code' => 200,
				'data' => $userSession,
                'role' => $role
			], 200);
    	}else{
    		return response()->json([
    			'code'=> 401,
    			'message'=>'Username or password uncorrect!'
    		], 200);
    	}
    }
    public function userSession(Request $request)
    {
        return response()->json($request->userSession());
    }
}
