<?php
abstract class Ingresso
{
    public $valorEmReais;

    public function __construct($valor = 70)
    {
        $this->valorEmReais = $valor;
    }

    abstract public function imprimeValor();
}

class Normal extends Ingresso
{
    public function imprimeValor()
    {
        echo "VALOR NORMAL DO INGRESSO: " . $this->valorEmReais . "<br>";
    }
}

class VIP extends Ingresso
{
    private $acrescimo = 50;

    // public function __construct($valorEmReais, $acrescimo)
    // {
    //     $this->acrescimo = $acrescimo;

    //     parent::__construct($valorEmReais);
    // }

    public function imprimeValor()
    {
        $valorVip = $this->valorEmReais + $this->valorEmReais * ($this->acrescimo / 100);
        echo "VALOR DO INGRESSO VIP: " . $valorVip . "<br>";
    }
}

class Camarote extends Ingresso
{
    public function imprimeValor()
    {
        echo "VALOR DO INGRESSO CAMAROTE: " . $this->valorEmReais * 3 . "<br><br>";
    }
}

class Imovel
{
    public $endereco;
    public $preco;

    public function __construct($endereco, $preco)
    {
        $this->endereco = $endereco;
        $this->preco = $preco;
    }
}
class Novo extends Imovel
{
    public $adicional;

    public function __construct($endereco, $preco, $adicional)
    {
        $this->adicional = $adicional;
        parent::__construct($endereco, $preco);
    }
    public function exibir()
    {
        echo "ENDEREÇO: " . $this->endereco . "<br>";
        echo "PREÇO: " . $this->preco . "<br>";
        echo "ADICIONAL: " . $this->adicional . "<br>";
        echo "Preço com adicional: " . $this->preco + $this->adicional . "<br><br>";
    }
}
class Velho extends Imovel
{
    public $desconto;

    public function __construct($endereco, $preco, $desconto)
    {
        $this->desconto = $desconto;
        parent::__construct($endereco, $preco);
    }
    public function exibir()
    {
        echo "ENDEREÇO: " . $this->endereco . "<br>";
        echo "PRECO: " . $this->preco . "<br>";
        echo "DESCONTO: " . $this->desconto . "<br>";
        echo "Preço com desconto: " . $this->preco - $this->desconto . "<br><br>";
    }
}

class Animal
{
    public $animalQuadrupede = 4;
}
class Cachorro extends Animal
{
    public $som = 'Latir';

    public function exibir()
    {
        echo "CACHORRO: <br>";
        echo "NUMERO DE PATAS: " . $this->animalQuadrupede . "<br>";
        echo "COMPORTAMENTO: " . $this->som . "<br><br>";
    }
}
class Cavalo extends Animal
{
    public $som = 'Relinchar';

    public function exibir()
    {
        echo "CAVALO: <br>";
        echo "NUMERO DE PATAS: " . $this->animalQuadrupede . "<br>";
        echo "COMPORTAMENTO: " . $this->som . "<br><br>";
    }
}
class Gato extends Animal
{
    public $som = 'Miar';

    public function exibir()
    {
        echo "GATO: <br>";
        echo "NUMERO DE PATAS: " . $this->animalQuadrupede . "<br>";
        echo "COMPORTAMENTO: " . $this->som . "<br><br>";
    }
}