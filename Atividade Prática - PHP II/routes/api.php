<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;

// CADASTRAR PRODUTOS
Route::post('/produtos', function (Request $request) {

    if (!$request->has(['id', 'nome', 'valor'])) { // VALIDAÇÃO DE CAMPOS
        return response()->json(['error' => "Campos incompletos"]);
    }

    $produtos = json_decode(Cache::get('produtos'));
    $produto = $request->json()->all();
    $produtos[] = $produto;
    Cache::put('produtos', json_encode($produtos));
    return response()->json(['success' => true, 'data' => "Produto adicionado com sucesso!"]);
});

// LISTAR PRODUTOS
Route::get('/produtos', function () {

    $produtos = Cache::get('produtos');
    return response()->json(['produtos' => json_decode($produtos)]);
});

// LISTAR PRODUTO SELECIONADO PELO ID
Route::get('/produtos/{id}', function ($id) {
    $produtos = json_decode(Cache::get('produtos'));

    foreach ($produtos as $produto) {

        if ($produto->id == $id) {
            return response()->json(['produto' => $produto]);
        }
    }

    return response()->json(['error' => 'produto não encontrado!']);
});

// EXCLUIR PRODUTOS
Route::delete('/produtos', function () {

    Cache::forget('produtos');
    return response()->json(['success' => 'produtos excluidos!']);
});

// EXCLUIR PRODUTO SELECIONADO PELO ID
Route::delete('/produtos/{id}', function ($id) {

    $produtos = json_decode(Cache::get('produtos'));

    foreach ($produtos as $key => $produto) {

        if ($produto->id == $id) {
            array_splice($produtos, $key, 1);
            Cache::put('produtos', json_encode($produtos));
            return response()->json(['success' => true, 'msg' => "Produto removido com sucesso!"]);
        }
    }

    return response()->json(['success' => false, 'msg' => "Produto não encontrado!"]);
});
