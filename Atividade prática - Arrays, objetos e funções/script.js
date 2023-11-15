const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];
// 1. Imprima no console a quantidade de pessoas Total.
console.log(data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
const feminino = data.filter(pessoa => pessoa.sexo == 'F')
console.log(feminino.length);

// 3. Imprima no console a soma do salário de todas as pessoas.
let soma = 0
data.forEach(pessoa => {
    soma += pessoa.salario
})
console.log(soma);

// 4. Imprima no console a média do salário de todas as pessoas.
const mediaTotal = soma / data.length
console.log(mediaTotal.toFixed(2));

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
const mediaTotalGenero = (gen => {
    let somaT = 0
    const generoTeste = data.filter(pessoa => pessoa.sexo == gen)
    generoTeste.forEach(teste => {
        somaT += teste.salario
    })
    return (somaT / generoTeste.length).toFixed(2)
})
console.log(mediaTotalGenero('M'))

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Feminino
console.log(mediaTotalGenero('F'));

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
const sup7000 = data.some(pessoa => {
    return pessoa.salario > 7000
})
console.log(sup7000)

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
const posicaoEva = data.findIndex(pessoa => {
    return pessoa.nome == 'Eva Trindade'
})
console.log(posicaoEva)

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
const findSilva = data.filter(pessoa => {
    return pessoa.nome.includes('Silva')
})
console.log(findSilva)

// 10. Imprima os nomes utilizando o MAP
const nomes = data.map(pessoa => {
    console.log(pessoa.nome)
})