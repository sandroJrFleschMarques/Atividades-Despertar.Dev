<?php
require('./classes.php');

echo "<b>1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.</b><br>";
$ing = new Normal();
$ing->imprimeValor();

$vip = new VIP(); //TRECHO COMENTADO SERVIA P/ colocar o valor do ingresso e o valor da porcentagem do acréscimo
$vip->imprimeValor();

$cam = new Camarote();
$cam->imprimeValor();

echo "<hr><b>2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.</b><br>";
$novo = new Novo('br-116', 100000, 20000);
$novo->exibir();

$novo = new Velho('br-116', 100000, 20000);
$novo->exibir();

echo "<hr><b>3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.</b><br>";
$cao = new Cachorro();
$cao->exibir();

$cavalo = new Cavalo();
$cavalo->exibir();

$cat = new Gato();
$cat->exibir();
