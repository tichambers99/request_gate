<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register', 'api\RegisterController@register');
Route::post('login', 'api\LoginController@login');
Route::post('resetpassword', 'api\ResetPasswordController@sendMail');
Route::put('resetpassword/{token}', 'api\ResetPasswordController@reset');

Route::apiResource('requests', 'api\requestController');
Route::apiResource('comment', 'api\commentController');