// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).
const ponderada = 'P'
const aritmetica = 'A'
function mediaAluno2(nota1, nota2, nota3, metodo) {

    if (metodo === 'A')
        return (nota1 + nota2 + nota3) / 3

    if (metodo === 'P')
        return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

    return null
}
alert(`EXERCÍCIO 1: MÉDIA ${ponderada}: ${mediaAluno2(9, 4, 5, ponderada)}`)

// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.
let dado1 = 14
function verificarImpar(numero) {
    return numero % 2 != 0
}
alert(`EXERCÍCIO 2: O NÚMERO ${dado1} É ÍMPAR: ${verificarImpar(dado1)}`)

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.
const dado2 = 7
function verificarPrimo (numero) {
    if (numero<=1) return false
    if (numero===2) return true
    for(let i=2; i<numero; i++){
        if(numero%i===0) return false
    }
    return true
}
alert(`EXERCÍCIO 3: O NÚMERO ${dado2} é primo = ${verificarPrimo(dado2)}`);
// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

// function converterParaTempo(segundos) {
//     const horas = segundos / 3600 | 0;
//     segundos %= 3600;
//     const minutos = segundos / 60 | 0;
//     segundos %= 60;
  
//     return { horas, minutos, segundos };
//   }
 
//   const tempoEmSegundos = 3672; 
  
//   const resultado = converterParaTempo(tempoEmSegundos);
// console.log(`Tempo: ${resultado.horas} horas, ${resultado.minutos} minutos e ${resultado.segundos} segundos.`);

const dado3 = 3672
function timeConverter(sec) {
    const hours = sec / 3600
    sec %= 3600
    const minutes = sec / 60
    sec %= 60
    return `${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(sec)}`
}
alert(`EXERCÍCIO 4: ${dado3} segundos convertido para horas = ${timeConverter(dado3)}`);

// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
const dado4 = 28
function perfect(valor) {
    if (valor <= 1)
        return false;


    let somaDivisores = 1;

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0)
            somaDivisores += i;
    }
    return somaDivisores === valor;
}
alert(`EXERCÍCIO 5: Número ${dado4} é perfeito = ${perfect(dado4)}`);
// 6. Crie uma função chamada acessoAoSite() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// um alerta informando “Bem vindo ao site”.
function acessoAoSite(){
    alert('EXERCÍCIO 6: Bem vindo ao site')
}
acessoAoSite()
// 7. Crie uma função chamada mostrarMensagem() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// uma mensagem no console.log() informando “Acesso à aplicação
// NomeAplicação” e um alerta informando “Bem vindo à aplicação
// NomeAplicação”. Sendo que o nome da aplicação deve ser salvo em
// uma variável para mostrar nas mensagens.
let aplicacao = "Growdev"
function mostrarMensagem() {
    console.log(`Acesso à aplicação ${aplicacao}`);
    alert(`EXERCÍCIO 7: Acesso à aplicação ${aplicacao}`)
}
mostrarMensagem()
// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”
function mostrarDobro(num) {
    alert(`EXERCÍCIO 8: O dobro do numero ${num} é ${num*2}`)
}
mostrarDobro(5)

// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
//     nome), que recebe 4 parâmetros sendo três inteiros e um texto
//     (String). Esta função será chamada ao abrir a página e mostrará um
//     alerta com a média. Exemplo: “João, sua média é 70.” A função
//     também deve mostrar no console.log() as notas recebidas. Exemplo
//     “Nota 1: 60,Nota 2: 70,Nota 3: 80”.
function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`EXERCÍCIO 9: ${nome}, sua media é ${(nota1 + nota2 + nota3) / 3}`);
    console.log(`Nota 1: ${nota1}, Nota 2:${nota2}, Nota 3:${nota3}`);
  }
  calcularMedia(6, 7, 8, "João");