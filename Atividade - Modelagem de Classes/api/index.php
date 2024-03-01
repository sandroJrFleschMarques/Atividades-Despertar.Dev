<?php

require('/var/task/user/api/classes.php');
echo "<b>Chegou a hora de aplicar o conhecimento adquirido em nosso encontro.
Lembrando sempre que os exercícios e desafios serão nossos principais
indicadores sobre o conhecimento de vocês, tanto para ajudá-los como
na hora do direcionamento para as vagas.<br><br><hr>

1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.</b><br><br>";
$meuContador = new Contador();

$meuContador->incrementar();
$meuContador->incrementar();
$meuContador->incrementar();
$meuContador->valorContador();
$meuContador->zerar();
$meuContador->valorContador();
$meuContador->incrementar();
$meuContador->valorContador();
echo "<hr>";
echo "<b>2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor</b><br><br>";

$bola = new Bola('azul', '25cm', 'couro');
$bola->mostrarCor();
$bola->trocarCor('preta');
$bola->mostrarCor();
echo "<hr>";

echo "<b>3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.</b><br><br>";
$Cc = new Cc('0101', 'José Maria', '200');
$Cc->alterarNome('Carlos Da Silva');
$Cc->deposito('100');
$Cc->saque('200');
echo "<hr>";

echo "<b>4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico.</b><br><br>";
$calc = new Calculadora();
$calc->somar(7, 2);
$calc->multiplicar(7, 2);
$calc->dividir(7, 2);
$calc->diminuir(7, 2);
print_r($calc->historico);
echo "<hr>";
echo "<b>5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.</b><br><br>";
$posto = new BombaCombustivel('ALCOOL', 100);
$posto->abastecerPorValor(500);
$posto->abastecerPorLitro(98);
echo "<br>";
$posto = new BombaCombustivel('DIESEL', 100);
$posto->abastecerPorValor(400);
$posto->abastecerPorLitro(10);
echo "<br>";
$posto = new BombaCombustivel('GASOLINA', 100);
$posto->abastecerPorValor(100);
$posto->abastecerPorLitro(10);
echo "<hr>";

echo "<b>6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.</b><br><br>";
$meuFusca = new Carro(15); //coloque aqui quanto seu carro faz por litro
$meuFusca->obterGasolina();
$meuFusca->adicionarGasolina(2); //coloque aqui quantos litros quer abastecer
$meuFusca->andar(31); //coloque aqui quantos km quer andar
$meuFusca->obterGasolina();
$meuFusca->adicionarGasolina(10);
$meuFusca->obterGasolina();
$meuFusca->andar(50);

echo"<br><hr><br><a href='https://github.com/sandroJrFleschMarques/Atividades-Despertar.Dev/tree/main/Atividade%20-%20Modelagem%20de%20Classes/api'>Ver no GitHub</a>";
