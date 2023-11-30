const card = document.querySelectorAll('.card')
const titulo = document.querySelectorAll('.titulo-card')
const descricao = document.querySelectorAll('.descricao-card')
const botaoEditar = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')

card.forEach(call => {
    call.style.backgroundColor = '#dd7108'
})
console.log(titulo);
titulo.forEach(call => {
    call.innerText = 'Meu Card'
    call.style.color = '#2b385b'

})
descricao.forEach(call => {
    call.innerText = 'Descrição modificada pelo JavaScript'
    call.style.color = 'white'
    call.style.margin = '4em 0'
    call.style.fontSize = '0.9em'
})
botaoEditar.forEach(call => {
    call.style.backgroundColor = 'green'
    call.classList.add('tamanho-botao')
    call.setAttribute('onclick', 'editarCard()')
})
botaoApagar.forEach(call => {
    call.style.backgroundColor = 'red'
    call.classList.add('tamanho-botao')
    call.setAttribute('onclick', 'apagarCard()')
})
function editarCard() {
    alert('Clicou em Editar!')
}
function apagarCard() {
    const boo = confirm('Tem certeza da exclusão do card?')
    if (boo) {
        alert('Confirmado!')
    } else {
        alert('Cancelou!')
    }
}




