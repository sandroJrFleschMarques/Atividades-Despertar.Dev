// Exercício 1
// Crie um array chamado numeros contendo 10 números inteiros de sua escolha.
// Escreva um programa que percorra o array e some apenas os números pares.
// Exiba o resultado da soma no console.
let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let somaPar = 0
for (let numero of numeros) {
    if (numero % 2 === 0) {
        somaPar += numero
    }
}
document.write(`Exercício 1: Soma dos numeros pares do array [${numeros}]: ${somaPar}<br><br>`)
// Exercício 2
// Crie um array chamado valores contendo 8 números inteiros de sua escolha.
// Escreva um programa que encontre o maior valor no array.
// Exiba o maior valor no console.
let valores = [1, 2, 99, 4, 5, 6, 7, 8]
let maior = 0
for (let valor of valores) {
    if (valor > maior) {
        maior = valor
    }
}
document.write(`Exercício 2: Maior item do array [${valores}]: ${maior}<br><br>`)
// Exercício 3
// Crie um array chamado primos contendo 10 números inteiros que são primos.
// Escreva um programa que percorra o array e verifique se os números são realmente primos.
// Exiba no console a lista de números primos validados.
let primos = [2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29]
document.write(`Exercício 3: Verificar se os números do array [${primos}] são primos:<br><br>`)
for (let primo of primos) {
    for (i = 2; i < primo; i++) {

        if (primo % i === 0) {
            document.write(`O número ${primo} não é primo<br>`)
            break

        } else {
            document.write(`O número ${primo} é primo<br>`)
            break
        }
    } if (primo === 2) {
        document.write(`O número ${primo} é primo<br>`)
    }
    document.write('<br>')
}

// Exercício 4
// Crie um array chamado intervalo contendo 20 números inteiros de 1 a 20 (inclusive).
// Escreva um programa que calcule a soma dos valores entre o 5º e o 15º elemento do array.
// Exiba a soma no console.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let soma = 0
for (let item of array) {
    if (item >= 5 && item <= 15) {
        soma += item
    }
}
document.write(`Exercício 4: Soma dos valores entre o 5º e o 15º item do array [${array}]: ${soma}<br><br>`)
// Exercício 5
// Crie um array chamado alunos contendo nomes de 10 alunos.
// Escreva um programa que solicita ao usuário um nome de aluno e verifica se esse nome está no array.
// Exiba uma mensagem no console informando se o aluno foi encontrado ou não.
let alunos = ['Marcelo', 'Gian', 'Lívia', 'Bruno Beise', 'Bruno Juwer', 'Pablo', 'Gustavo Cortezia', 'Gustavo Provin', 'Douglas', 'Dionei', 'Jean', 'Nalanda', 'Mirna', 'Felipe', 'Matheus Luna', 'Rodrigo', 'Daniel', 'Julio', 'Bernardo', 'Andrei', 'Alexsandro', 'Cristian', 'Edson', 'João', 'Marco', 'Matheus Schaab', 'Nicolas', 'Carla', 'Sandro']
let entrada = prompt('Exercício 5:\nDigite o nome do GrowDever (Caso tenha outro GrowDever com seu nome digite seu nome e sobrenome):')
let encontrado = false
for (let aluno of alunos) {
    if (aluno === entrada) {
        encontrado = true
        break
    }
}
if (encontrado && entrada === 'Mirna' || entrada === 'Lívia' || entrada === 'Nalanda') {
    alert(`Aluna ${entrada} encontrada!`)
    document.write(`Exercício 5: Você é a aluna ${entrada}`)
} else if (encontrado && entrada === 'Carla') {
    alert(`Professora ${entrada} encontrada`)
    document.write(`Exercício 5: Você é a professora ${entrada}`)
} else if (encontrado && entrada === 'Bruno Beise') {
    alert(`TechHelper ${entrada} encontrado`)
    document.write(`Exercício 5: Você é o TecHelper ${entrada}`)
} else if (encontrado) {
    alert(`Aluno ${entrada} encontrado!`)
    document.write(`Exercício 5: Você é o aluno ${entrada}`)
}
else {
    alert(`Aluno ${entrada} não encontrado.`)
    location.reload()
}