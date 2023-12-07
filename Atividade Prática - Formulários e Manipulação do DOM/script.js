document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('nome: ' + e.target.nome.value);
    console.log('endereço: ' + endereço.value);
    console.log('cidade: ' + cidade.value);
    console.log('estado: ' + estado.value);
    console.log('cargo: ' + document.querySelector("input[name='job']:checked").value)

const areas = []
const checkbox = document.getElementsByName('interesses')
checkbox.forEach(check => {
    if(check.checked){
        areas.push(check.id)
    }
})
console.log('interesses: ' + areas);
console.log(campo.value?'mini-curriculo: '+ campo.value:'mini-curriculo: mandou vazio!');

})

// const checkInteresses = document.querySelectorAll('input[name="interesse"]:checked')
//     if (checkInteresses.length === 0) {
//         alert('Marque ao menos uma área de interesse!')
//         return
        
//     }