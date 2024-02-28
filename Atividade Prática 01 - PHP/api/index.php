<?php
//Atividade Prática 01 - PHP
//Exercício 1
$med = array();
function media($n1, $n2)
{
    global $med;

    $media = (($n1 + $n2) / 2);
    if ($media >= 6) {
        $aprovado = true;
    } else {
        $aprovado = false;
    }
    array_push($med, array(
        'Media' => $media,
        'Aprovado' => $aprovado
    ));
    var_dump($med);
}
media(9, 4);
//Exercício 2
$parametros = array(
    'nota1' => 8,
    'peso1' => 5,
    'nota2' => 10,
    'peso2' => 2
);

function mediaPeso($parametros)
{
    $resultado = (($parametros['nota1'] * $parametros['peso1'] + $parametros['nota2'] * $parametros['peso2']) / 2);
    echo ("A média ponderada de " . $parametros['nota1'] . " peso " . $parametros['peso1'] . " e " . $parametros['nota2'] . " peso " . $parametros['peso2'] . " é: " . $resultado);
}
mediaPeso($parametros);


//Exercício 3
$listaProdutos = array();

function cadastrarProduto($nome, $preco)
{
    global $listaProdutos;
    array_push($listaProdutos, array(
        'nome' => $nome,
        'preço' => $preco
    ));
}

function listarProdutos()
{
    global $listaProdutos;

    foreach ($listaProdutos as $key => $value) {
        echo "<h3>Nome:" . $value['nome'] . "</h3>";
        echo "<h3>Preço:" . $value['preço'] . "</h3>";
        echo "<hr>";
    }
}
function excluirProduto($nome)
{
    global $listaProdutos;
    foreach ($listaProdutos as $key => $value) {
        if ($value['nome'] == $nome) {
            unset($listaProdutos[$key]);
        }
    }
}

cadastrarProduto("Batata kg", 4.99);
cadastrarProduto("Pepsi-Cola 2L", 6.5);
cadastrarProduto("Arroz Prato Fino", 5.49);

listarProdutos();
excluirProduto('Batata kg');
listarProdutos();
