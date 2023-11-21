const pratos = [{
    ID: '000001',
    Nome: 'FEIJÃO',
    Descrição: 'ALIMENTO',
    Categoria: 'PRINCIPAL',
    Disponibilidade: 'DISPONÍVEL',
    Preço: 5
},
{
    ID: '000002',
    Nome: 'CAVIAR',
    Descrição: 'NUNCA VI',
    Categoria: 'IMAGINAÇÃO',
    Disponibilidade: 'INDISPONÍVEL',
    Preço: 1000
}]
let continuar = true
const cadastrarPrato = () => {
    while (continuar) {
        const ID = geraStringAleatoria(6)
        const Nome = prompt('Digite o nome do prato').toUpperCase()
        const Descrição = prompt('Descrição').toUpperCase()
        const Categoria = prompt('Categoria (ex. entradas, prato principal, sobremesas)').toUpperCase()
        const disponivel = confirm('Disponibilidade')
        const Disponibilidade = disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL'
        const Preço = Number(prompt('preço'))
        continuar = confirm('continuar?')
        const prato = {
            ID,
            Nome,
            Descrição,
            Categoria,
            Disponibilidade,
            Preço
        }
        pratos.push(prato)
    }
}
const listarPrato = () => {
    document.getElementById('front').innerHTML = ''
    document.getElementById('front').innerHTML = ('LISTAR PRATOS:<br>')
    pratos.sort(function (x, y) {
        return x.preço - y.preço
    })
    let listar = ''
    for (let elementoDaVez of pratos) {
        for (let chave in elementoDaVez) {
            listar += `${chave}: ${elementoDaVez[chave]} | `
        }
        listar += ('<br>')
    }
    document.getElementById('front').innerHTML += listar
}
const buscarPrato = () => {
    document.getElementById('front').innerHTML = ''
    let filtro = 0
    let n = 0
    let buscaPrato = prompt("Digite uma busca: ").toUpperCase()
    document.getElementById('front').innerHTML += `RESULTADOS DA BUSCA POR "${buscaPrato.toUpperCase()}":<br>`
    let listar = ''
    filtro = pratos.filter(elementoDaVez => {
        for (let chave in elementoDaVez) {
            if (elementoDaVez[chave] == buscaPrato) {
                n++
                for (let chave in elementoDaVez) {
                    listar += `${chave}: ${elementoDaVez[chave]} | `
                }
                listar += ('<br>')
            }
        }
    })
    document.getElementById('front').innerHTML += listar
    document.getElementById('front').innerHTML += `<br>${n} ${n == 1 ? 'resultado encontrado' : 'resultados encontrados'}`
}
const atualizarPrato = () => {
    const id = prompt('Digite o ID do prato que quer atualizar:').toUpperCase()
    const indice = pratos.findIndex(prato => id == prato.ID)
    if (indice > -1) {
        const novoNome = prompt('Novo nome:').toUpperCase()
        const novaDescrição = prompt('Nova descrição:').toUpperCase()
        const novaCategoria = prompt('Nova categoria').toUpperCase()
        const disponivel = confirm('O prato está disponível?')
        const novaDisponibilidade = disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL'
        const novoPreço = Number(prompt('Novo preço:'))
        const info = {
            novoNome,
            novaDescrição,
            novaCategoria,
            novaDisponibilidade,
            novoPreço
        }
        pratos[indice].Nome = info.novoNome
        pratos[indice].Categoria = info.novaCategoria
        pratos[indice].Descrição = info.novaDescrição
        pratos[indice].Preço = info.novoPreço
        pratos[indice].Disponibilidade = info.novaDisponibilidade

        listarPrato()
    } else {
        alert('ID não encontrado')
    }
}
const excluirPrato = () => {
    const id = prompt('Qual o ID que deseja excluir?').toUpperCase()
    console.log(id)
    const indice = pratos.findIndex(prato => id == prato.ID)
    if (indice > -1) {
        pratos.splice(indice, 1)
        listarPrato()
    } else {
        alert('ID não encontrado')
    }
}
function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';/*abcdefghijklmnopqrstuvwxyz*/
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}