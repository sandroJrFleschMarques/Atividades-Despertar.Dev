//   1. Criar um array e percorrê-lo utilizando o loop for
// a Crie um array com o nome "nomes" e adicione 4 nomes de pessoas que você conhece
// b Utilize o loop for para percorrer o array e exibir os nomes na tela

let nomes = ['Jesus', 'Maria', 'José', 'João']
document.write('Exercício 1: Exibir os nomes do array [' + nomes + ']:<br>')
for (let i = 0; i < nomes.length; i++) {
    document.write(nomes[i] + '<br>')
}
document.write('<br>')


// 2. Criar um array e percorrê-lo utilizando o loop for of
// a Crie um array com o nome "numeros" e adicione 5 números de sua escolha
// b Utilize o loop for of para percorrer o array e exibir a soma dos números na tela
let numeros = [10, 20, 30, 40, 50]
let soma = 0
for (let numero of numeros) {
    soma += numero
}
document.write('Exercício 2: Soma dos números [' + numeros + '] = ' + soma + '<br><br>')


// 3. Utilizar os métodos push, pop, unshift e shift para manipular um array
// a Crie um array com o nome "frutas" e adicione 3 tipos de frutas de sua escolha
// b Utilize o método push para adicionar uma fruta no final do array
// c Utilize o método pop para remover a última fruta do array
// d Utilize o método unshift para adicionar uma fruta no início do array
// e Utilize o método shift para remover a primeira fruta do array
// f Exiba o array resultante na tela

let frutas = ['Bergamota', 'Laranja', 'Uva']
document.write('Exercício 3: Array inicial: [' + frutas + ']<br>')
frutas.push('Limão')
document.write('Adicionando o ' + frutas[frutas.length - 1] + ' no final do array: [' + frutas + ']<br>')
document.write('Removendo o ' + frutas[frutas.length - 1])
frutas.pop()
document.write(' do final do array: [' + frutas + ']<br>')
frutas.unshift('Abacaxi')
document.write('Adicionando o ' + frutas[0] + ' no início do array: [' + frutas + ']<br>')
document.write('Removendo o ' + frutas[0])
frutas.shift()
document.write(' do início do array: [' + frutas + ']<br>')
