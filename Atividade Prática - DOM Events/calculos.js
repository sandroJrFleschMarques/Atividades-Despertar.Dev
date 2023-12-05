/* Desenvolva aqui a rotina */
const value1 = document.getElementById('valor_base')
const value2 = document.getElementById('valor_transporte')
const value3 = document.getElementById('valor_alimentacao')
const value4 = document.getElementById('valor_receita')

function calcular(){
    const soma = (Number(value1.value)+Number(value2.value)+Number(value3.value));
    value4.value=soma
}

const valorAuto = document.getElementById('valor_automovel')
const valorFaltas = document.getElementById('faltas')
const valorDescontos = document.getElementById('valor_descontos')

function descontos(){
    const descontos = (Number(valorAuto.value)+Number(valorFaltas.value))
    valorDescontos.value = descontos 
}

const total = document.getElementById('valor_total')

function calculoTotal(){
    total.value = value4.value - valorDescontos.value
}

const inputs = document.querySelectorAll("input[type=number]");
    inputs.forEach(function (input) {
        input.addEventListener("change", function () {
            calcular(), descontos(), calculoTotal()
        });
    });