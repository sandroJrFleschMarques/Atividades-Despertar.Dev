// 1. Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maiores que
// 8.000 utilizando o filter
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00];
const maior7500 = salarios.findIndex(function (salario) {
    return salario > 7500
})
const novaLista = salarios.filter(function (salario) {
    return salario > 8000
})
document.write(`EXERCÍCIO 1:<br> a. ${maior7500}<br>b. ${novaLista}<br><br>`)

// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
rainbow.splice(2, 1)
document.write(`EXERCÍCIO 2:<br>a.[${rainbow}]<br>`)
rainbow.splice(2, 0, 'Amarelo', 'Verde')
document.write(`b.[${rainbow}]<br>`)
rainbow.splice(5, 0, 'Roxo')
document.write(`c.[${rainbow}]<br><br>`)

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000
document.write(`EXERCÍCIO 3: "Usando Filter"<br>`)
alert('Digite os dados para o Exercício 3: "Usando Filter"\nNome-Idade-Trabalhando-Salário')
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
const desempregados = pessoas.filter(function (pessoa) {
    return pessoa.trabalhando === false
})
const menor2500 = pessoas.filter(function (pessoa) {
    return pessoa.salario < 2500
})
const maior2500 = pessoas.filter(function (pessoa) {
    return pessoa.salario > 2500
})
if (desempregados.length > 0) { for (let des of desempregados) { p1 += `Nome: ${des.nome}, Idade: ${des.idade}<br>` } front1 = p1 }
if (menor2500.length > 0) { for (let menor of menor2500) { p2 += `Nome: ${menor.nome}, Idade: ${menor.idade}, Salário: ${menor.salario}<br>` } front2 = p2 }
if (maior2500.length > 0) { for (let maior of maior2500) { p3 += `Nome: ${maior.nome}, Idade: ${maior.idade}, Salário: ${maior.salario}<br>` } front3 = p3 }

document.write('Pessoas desempregadas:<br>' + front1 + '<br>')
document.write('Pessoas empregadas com salários menores que R$ 2500,00:<br>' + front2 + '<br>')
document.write('Pessoas empregadas com salários maiores que R$ 2500,00:<br>' + front3 + '<br>')
