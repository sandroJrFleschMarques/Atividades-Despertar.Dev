// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write('Exercício 1: Os elementos pares do array: [' + elementos + '] são: ')
for (let elemento of elementos) {
    if (elemento % 2 === 0) {
        document.write(elemento + ' ')
    }
}
document.write('<br><br>')

// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

let elementos2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let soma = 0
for (let elemento of elementos2) {
    soma += elemento
}
document.write(`Exercício 2: A soma dos elementos do array: [${elementos}] é: ${soma} <br><br>`)
// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
let soma2 = []
let somas = 0
for (let i = 1; soma2.length < 4; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            somas += j
        }
    }
    if (i === somas) {
        soma2.push(i)
    }
    somas = 0
}
document.write(`Exercício 3: Os primeiros ${soma2.length} números perfeitos são: ${soma2} <br><br>`)

// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.
let matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let dado = 5
let front = ''
for (let numer of matriz) {
    if (numer === dado) {
        front = (`O número ${dado} foi encontrado na lista [${matriz}]`)
        break
    } else {
        front = (`O número ${dado} não foi encontrado na lista [${matriz}]`)
    }
}
document.write(`Exercício 4: ${front} <br><br>`)

// 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson
let dados = ''
let lista = []
let lista2 = []
alert('Digite 5 nomes para o Exercício 5')
for (i = 1; i <= 5; i++) {
    dados = prompt(`Digite o ${i}º nome:`)
    lista.push(dados)
}
console.log(lista)
for (let item of lista) {
    lista2.unshift(item)
}
document.write(`Exercício 5: Lista: [${lista}], Lista Inversa: [${lista2}]`)
