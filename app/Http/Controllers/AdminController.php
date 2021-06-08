<?php

namespace App\Http\Controllers;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function loginPost(Request $request){
        $credentials = $request->only('email','password');
        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->route('admin.dashboard');
            exit;

        }
        else {echo "đăng nhập loi  !";
            exit;

            
        }
        
    }
    public function dashboard(){
        if(Auth::guard('admin')->check ()){
            return view('admin.dashboard');
        }else{
            return redirect('/admin/login');
        }
    }
    public function logout(){
        Auth::guard('admin')->logout ();
           
    }
}
