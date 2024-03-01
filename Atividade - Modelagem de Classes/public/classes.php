<?php

class Contador
{
    public $contador;

    public function zerar()
    {
        $this->contador = 0;
        echo "Acabei de zerar o contador, Resultado: " . $this->contador . "<br>";
    }
    public function incrementar()
    {
        $this->contador++;
        echo "Acabei de incrementar 1, Resultado agora é: " . $this->contador . "<br>";
    }
    public function valorContador()
    {
        echo "Consultando contador, contador é: " . $this->contador . "<br>";
    }
}

class Bola
{
    public $cor;
    public $circunferencia;
    public $material;

    public function __construct($cor, $circunferencia, $material)
    {
        $this->cor = $cor;
        $this->circunferencia = $circunferencia;
        $this->material = $material;
    }
    public function trocarCor($novaCor)
    {
        $this->cor = $novaCor;
        echo "Você trocou a cor da bola para: " . $this->cor . "<br>";
    }
    public function mostrarCor()
    {
        echo "Cor da Bola: " . $this->cor . "<br>";
    }
}

class Cc
{
    public $numero;
    public $nome;
    public $saldo;

    public function __construct($numero, $nome, $saldo)
    {
        $this->numero = $numero;
        $this->nome = $nome;
        $this->saldo = $saldo;
    }
    public function alterarNome($novoNome)
    {
        $this->nome = $novoNome;
        echo "Alterei o nome, seu nome agora é: " . $this->nome . "<br>";
    }
    public function deposito($valor)
    {
        $this->saldo += $valor;
        echo "Fiz um depósito, seu saldo agora é: " . $this->saldo . "<br>";
    }
    public function saque($valor)
    {
        if ($valor <= $this->saldo) {
            $this->saldo -= $valor;
            echo "Fiz um saque, seu saldo agora é: " . $this->saldo . "<br>";
        } else {
            echo "Saldo insuficiente <br>";
        }
    }
}
class Calculadora
{
    public $historico = [];

    public function addHist($op)
    {

        $this->historico[] = $op;
    }

    public function somar($a, $b)
    {
        $op = "Soma: " . $a + $b . "<br>";
        echo $op;
        $this->addHist($op);
    }
    public function multiplicar($a, $b)
    {
        $op = "Multiplicação: " . $a * $b . "<br>";
        echo $op;
        $this->addHist($op);
    }
    public function dividir($a, $b)
    {
        $op = "Divisão: " . $a / $b . "<br>";
        echo $op;
        $this->addHist($op);
    }
    public function diminuir($a, $b)
    {
        $op = "Subtração: " . $a - $b . "<br>";
        echo $op;
        $this->addHist($op);
    }
}

class BombaCombustivel
{
    public $tipo;
    public $vl;
    public $qtde;

    public function __construct($tipoCombustivel, $quantidadeCombustivel)
    {
        $this->tipo = $tipoCombustivel;
        if ($this->tipo == 'GASOLINA') {
            $this->alterarValor(4);
        } elseif ($this->tipo == 'ALCOOL') {
            $this->alterarValor(3);
        } elseif ($this->tipo == 'DIESEL') {
            $this->alterarValor(5);
        }

        $this->qtde = $quantidadeCombustivel;
    }
    public function abastecerPorValor($valorCliente)
    {

        $litrosParaAbastecer = $valorCliente / $this->vl;
        echo "Cliente desejou abastecer R$ " . $valorCliente . " de " . $this->tipo;
        if ($this->qtde >= $litrosParaAbastecer) {
            echo ". Abastecendo " . $litrosParaAbastecer . " Litros<br>";
            $this->qtde -= $litrosParaAbastecer;
        } else {
            echo ". Quantidade indisponível<br>";
        }
    }
    public function abastecerPorLitro($litrosCliente)
    {

        $valorParaAbastecer = $litrosCliente * $this->vl;
        echo "Cliente desejou abastecer " . $litrosCliente . " litros de " . $this->tipo;
        if ($this->qtde >= $litrosCliente) {
            echo ". Abastecendo R$ " . $valorParaAbastecer . "<br>";
            $this->qtde -= $litrosCliente;
        } else {
            echo ". Quantidade indisponível<br>";
        }
    }
    public function alterarValor($novoValor)
    {
        $this->vl = $novoValor;
    }
    public function alterarCombustivel($novoComb)
    {
        $this->tipo = $novoComb;
    }
    public function alterarQuantidadeCombustivel($novaQtde)
    {
        $this->qtde = $novaQtde;
    }
}

class Carro
{
    public $consumo;
    public $comb;

    public function __construct($consumo, $comb = 0)
    {
        $this->consumo = $consumo;
        $this->comb = $comb;
    }
    public function andar($km)
    {
        $autonomia = $this->comb * $this->consumo;
        if ($autonomia >= $km) {
            $this->comb -= $km / $this->consumo;
            $this->comb = number_format($this->comb, 2);
            echo "Você rodou " . $km . " km. Seu tanque agora está com " . $this->comb . " litros.<br>";
        } else {
            echo "Tanque insuficiente para rodar " . $km . " km. Sua autonomia é de apenas " . $autonomia . " km.<br>";
        }
    }
    public function obterGasolina()
    {
        echo $this->comb . " litros diponíveis no tanque.<br>";
    }
    public function adicionarGasolina($litros)
    {
        $this->comb += $litros;
        echo "Você abasteceu " . $litros . " litros! Seu tanque agora está com " . $this->comb . " litros.<br>";
    }
}
