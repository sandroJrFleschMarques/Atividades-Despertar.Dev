/* 1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável.*/

const age = 31
document.write(`Minha idade é ${age} anos.<br><br>`)

/*2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável*/

const x = 7
const y = 12
let z = x + y
document.write(`O resultado da soma de ${x} e ${y} é ${z}!<br><br>`)

/*3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"*/

const valor = 149.90
const parcelas = 2
const valorDaParcela = valor / parcelas
document.write(`O valor total da compra foi: R$ ${valor.toFixed(2).replace('.', ',')}<br>`)
document.write(`Forma de pagamento: ${parcelas}x de R$ ${valorDaParcela.toFixed(2).replace('.', ',')}<br><br>`)

/*4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda
coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"*/

const min = 120
const seg = min * 60
document.write(`${min} minuto(s) equivale(m) à ${seg} segundos!<br><br>`)

/*5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"*/

const nome = 'Sandro'
const nota1 = 7
const nota2 = 8
const nota3 = 9
const media = (nota1 + nota2 + nota3) / 3
document.write(`O aluno ${nome} ficou com média ${media.toFixed(1).replace('.', ',')}<br><br>`)

/*6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.*/

let a = 10
let b = 20
document.write(`A=${a} B=${b}<br>`)
let c = a
a = b
b = c
document.write(`A=${a} B=${b}<br><br>`)

/*7. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

const totalEleitores = 295
const votosBrancos = 20
const votosNulos = 10
const votosValidos = totalEleitores - (votosBrancos + votosNulos)
const porcBrancos = (votosBrancos / totalEleitores) * 100
const porcNulos = (votosNulos / totalEleitores) * 100
const porcValidos = (votosValidos / totalEleitores) * 100
document.write(`Votos Válidos ${porcValidos.toFixed(2).replace('.', ',')}%, Votos Brancos ${porcBrancos.toFixed(2).replace('.', ',')}%, Votos Nulos ${porcNulos.toFixed(2).replace('.', ',')}%<br><br>`)

/*8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

const valor1 = 5
const valor2 = 4
if (valor1 == valor2) {
    document.write('Números iguais.<br><br>')
}
else if (valor1 > valor2) {
    document.write('Primeiro é maior.<br><br>')
}
else if (valor1 < valor2) {
    document.write('Segundo é maior.<br><br>')
}

/*9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const numeroDeMacas = 12
let valorMaca = 0
if (numeroDeMacas >= 12) {
    valorMaca = numeroDeMacas * 0.25
} else {
    valorMaca = numeroDeMacas * 0.30
}
document.write(`Número de maçãs compradas: ${numeroDeMacas}<br> Valor da compra: R$ ${valorMaca.toFixed(2).replace('.', ',')}<br><br>`)

/*10. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome, a idade e o ano
de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
em 2000”.
OBS: Pegue o ano atual como base*/

const nomeUsuario = 'Sandro'
const idadeUsuario = 31
const anoNasc = 1992
document.write(`Nome: ${nomeUsuario}, Idade: ${idadeUsuario} anos, nasceu em ${anoNasc}<br><br>`)

/*11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;*/

const numero = 1903
if (numero % 2 == 0) {
    document.write(`O número ${numero} é PAR.<br><br>`)
} else {
    document.write(`O número ${numero} é ÍMPAR.<br><br>`)
}
/*12. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

const anoAtual = new Date().getFullYear()
const nasc = 1992
if (anoAtual - nasc >= 16) {
    document.write(`Maior de 16 anos. PODERÁ VOTAR!<br><br>`)
} else {
    document.write(`Menor de 16 anos. NÃO PODERÁ VOTAR!<br><br>`)
}