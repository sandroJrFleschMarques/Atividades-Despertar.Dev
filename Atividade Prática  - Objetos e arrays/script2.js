// 1. Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.
const produto = {
    valor: 90,
    descrição: 'mouse'
}
document.write(`Exercício 1:<br>`)
for (let chave in produto) {
    document.write(`${chave}: ${produto[chave]}<br>`)
}
document.write('<br>')

// 2. Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.
const notebook = {
    processador: 'i7',
    memória: '16gb',
    preço: 5000,
    hd: '1tb',
    ssd: '256gb'
}
document.write(`Exercício 2:<br>`)
for (let prop in notebook) {
    document.write(`${prop}: ${notebook[prop]}<br>`)
}
document.write('<br>')

// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.
document.write(`Exercício 3:<br>`)
const alunos = [
    {
        nome: 'Sandro',
        notas: [
            7,
            8
        ]
    },
    {
        nome: 'João',
        notas: [
            10,
            9
        ]
    },
]
for (const aluno of alunos) {
    for (const nome in aluno) {
        document.write(`${nome}: ${aluno[nome]}<br>`)
    }
    document.write('<br>')
}
for (const aluno of alunos) {
    let soma = 0;
    for (const nota of aluno.notas) {
        soma += nota;
    }
    const media = soma / aluno.notas.length
    document.write(`A média do aluno ${aluno.nome} é: ${media}<br>`);
}
let soma2 = 0
let numeroDeItens = 0
for (const somas of alunos) {
    for (const s of somas.notas) {
        numeroDeItens++
        soma2 += s
        mediaT = soma2 / numeroDeItens
    }
}
document.write(`A média de todos os alunos é: ${mediaT}<br><br>`);

// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.
document.write(`Exercício 4:<br>`)
alert('Digite os dados para o Exercício 5:\nNome-Idade-Trabalhando-Salário')
const pessoas = []
let continuar = true
while (continuar) {
    let salario = 0
    const nome = prompt('Nome')
    const idade = Number(prompt('Idade'))
    let trabalhando = confirm('Trabalhando?')

    if (trabalhando) {
        salario = Number(prompt('Salário'))
        const pessoa = {
            nome,
            idade,
            trabalhando,
            salario
        }
        pessoas.push(pessoa)
    } else {
        const pessoa = {
            nome,
            idade,
            trabalhando
        }
        pessoas.push(pessoa)
    }
    continuar = confirm('Adicionar mais pessoas?')
}
let front1 = 'Nenhum<br>'
let front2 = 'Nenhum<br>'
let front3 = 'Nenhum<br>'
let p1 = ''
let p2 = ''
let p3 = ''

for (let pes of pessoas) {
    if (!pes.trabalhando) {
        p1 += (`Nome: ${pes.nome}, Idade: ${pes.idade}<br>`)
        front1 = p1
    }
    if (pes.trabalhando && pes.salario < 2500) {
        p2 += (`Nome: ${pes.nome}, Idade: ${pes.idade}, Salário: ${pes.salario}<br>`)
        front2 = p2
    }
    if (pes.trabalhando && pes.salario > 2500) {
        p3 += (`Nome: ${pes.nome}, Idade: ${pes.idade}, Salário: ${pes.salario}<br>`)
        front3 = p3
    }
}
document.write('Pessoas desempregadas:<br>' + front1 + '<br>')
document.write('Pessoas empregadas com salários menores que R$ 2500,00:<br>' + front2 + '<br>')
document.write('Pessoas empregadas com salários maiores que R$ 2500,00:<br>' + front3 + '<br>')





