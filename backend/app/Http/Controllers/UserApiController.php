<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserApiController extends Controller
{
    //
    public function userRegister(Request $request){
        $validator = Validator::make($request->all(),[
            // 
        ]);
    }
}
