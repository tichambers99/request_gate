<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\cbnv;
use App\requestt;

class requestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $re = requestt::all(); 
        // return $re;
        
        $req = DB::table('cbnv')
            ->join('requests','requests.id_author','=','cbnv.id')
            ->join('bophan','bophan.id','=','cbnv.id_bophan')
//            ->select('request.id','cbnv.id_bophan','bophan.name','request.title','request.description','request.id_author','request.due','request.category')
            ->select('requests.*','cbnv.id_bophan','cbnv.name')
            ->get();
            
        return response()->json($req);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return requestt::create($request->all());
 
        $item = new requestt([
          'id' => $request->get('id'),
          'title' => $request->get('title'),
          'status' => $request->get('status'),
          'id_author' => $request->get('id_author'),
          'due' => $request->get('due'),
          'category' => $request->get('category'),
          'is_checked' => $request->get('is_checked'),
          'description' => $request->get('description')
        ]);
        $item->save();
        return response()->json([$item,'Successfully added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $item = requestt::find($id);
        // return response()->json($item);

        $req = DB::table('cbnv')
            ->join('requests','requests.id_author','=','cbnv.id')
            ->join('bophan','bophan.id','=','cbnv.id_bophan')
            ->select('requests.*','cbnv.id_bophan','cbnv.name')
            ->where('requests.id','=',$id)
            ->get();
            
        return response()->json($req);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $post->update($request->all());
        // return $post;

        $item = requestt::find($id);
        $item->title = $request->get('title');
        $item->status = $request->get('status');
        $item->id_author = $request->get('id_author');
        $item->due = $request->get('due');
        $item->category = $request->get('category');
        $item->is_checked = $request->get('is_checked');
        $item->description = $request->get('description');

        $item->save();

        return response()->json([$item, 'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = requestt::find($id);
        $item->delete();

        return response()->json('Successfully Deleted');
    }
}
