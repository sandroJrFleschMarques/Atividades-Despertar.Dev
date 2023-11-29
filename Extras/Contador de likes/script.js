let titulo = document.createElement('h1')
titulo.innerText = 'Contador de likes'

let presenca = document.createElement('div')
presenca.classList.add('presenca-container')

let contador = document.createElement('p')
contador.classList.add('contador')
contador.innerText='0'

let btn = document.createElement('button')
btn.classList.add('btn')
btn.innerText='Deixe o Like'
btn.setAttribute('onclick','likes()')

let msg = document.createElement('p')

let corpo = document.getElementById('App')
corpo.appendChild(titulo)
corpo.appendChild(presenca)
presenca.appendChild(contador)
presenca.appendChild(btn)
let soma=0
function likes(){
    soma++
    contador.innerText=soma
    if(soma==10){
        msg.innerText='Postagem popular!'
        msg.classList.add('green')
        corpo.appendChild(msg)
    }else if(soma==20){
        msg.innerText='Postagem SUPER POPULAR !!'
        msg.classList.remove('green')
        msg.classList.add('red')
    }else if(soma==21){
        location.reload()
    }
}



