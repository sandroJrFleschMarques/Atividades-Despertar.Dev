function digitName(){
    const dado = prompt('Digite seu nome')
    document.querySelector('#text1').innerText=`E aí ${dado}! Você está deixando o seu site dinâmico.`
}
let inc=0
function incrementar(){
inc++
document.querySelector('#contador').innerText=`O contador está com ${inc} cliques`
}
function zerarContador(){
    inc=0
    document.querySelector('#contador').innerHTML=''
}