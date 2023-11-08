// Gerenciar uma biblioteca de livros em JavaScript, permitindo a adição de livros, a remoção de um livro específico e a marcação de livros como lidos.

// Passos do Exercício:

// 1. Definir uma biblioteca de livros:
// - Crie um array vazio chamado "biblioteca" para armazenar os livros.

let biblioteca = []

// 2. Adicionar livros à biblioteca:
// - Crie objetos para representar os livros com informações como título, autor, número de páginas e se foram lidos.
// - Use push() para adicionar esses objetos à "biblioteca".
let cancelador
function tornarVerdadeiro() {
    cancelador = true
}

function adicionarLivro() {
    while (cancelador) {
        let titulo = prompt('Titulo')
        let autor = prompt('Autor')
        let numPag = prompt('Numero de paginas')
        let lido = confirm('O livro foi lido?')
        cancelador = confirm('Gostaria de adicionar mais?')

        let livros = {
            titulo,
            autor,
            numPag,
            lido,
        }
        biblioteca.push(livros)

    }
    alert('Livros adicionados com sucesso, clique no botão "Exibir Livros" para vê-los')

}
// 3. Exibir a biblioteca no console:
// - Utilize um loop for...of para percorrer a "biblioteca" e exibir informações de cada livro no console.
function exibirInfo() {
    document.getElementById('info').innerHTML = ''
    document.getElementById('info').innerHTML += 'Livros cadastrados:<br>'
    for (let livro of biblioteca) {
        document.getElementById('info').innerHTML += livro.titulo + '<br>'
    }
}

// 4. Remover um livro específico:
// - Crie um novo array vazio chamado "novaBiblioteca".
// - Use um loop for...of para percorrer a "biblioteca" e copiar os livros desejados para a "novaBiblioteca".
// - Atribua o valor de "novaBiblioteca" a "biblioteca" para atualizar a lista de livros.

function excluir() {
    let novaBiblioteca = []
    for (let livro of biblioteca) {
        let usuario = confirm(`deseja excluir ${livro.titulo}`)
        if (!usuario) {
            novaBiblioteca.push(livro)
        }
    }
    biblioteca = novaBiblioteca
    alert('Suas opções foram gravadas!')
    exibirInfo()
}

// 5. Marcar um livro como lido:
// - Utilize um loop for...of para percorrer a "biblioteca" e, quando encontrar o livro desejado, atualize a propriedade "lido" para true.
function marcarLidos() {
    document.getElementById('info').innerHTML = ''
    document.getElementById('info').innerHTML += 'Livros Lidos:<br>'
    for (let ler of biblioteca) {
        let usua = confirm(`Deseja marcar ${ler.titulo} como lido?`)
        if (usua) {
            ler.lido = true
            document.getElementById('info').innerHTML += (`O Livro ${ler.titulo} está marcado como lido<br>`)
        } else {
            ler.lido = false
            document.getElementById('info').innerHTML += (`O Livro ${ler.titulo} NÃO está marcado como lido<br>`)
        }

    }
}
// 6. Exibir a biblioteca atualizada no console:
// - Utilize um loop for...of para percorrer a "biblioteca" e exibir informações de cada livro no console após as modificações.
function atualizarBiblioteca() {
    document.getElementById('info').innerHTML = ''
    document.getElementById('info').innerHTML += 'Biblioteca atualizada:<br>'

    for (bibliotecaAtual of biblioteca) {
        if (bibliotecaAtual.lido) {
            document.getElementById('info').innerHTML += (bibliotecaAtual.titulo + " : LIDO" + '<br>')
        } else {
            document.getElementById('info').innerHTML += (bibliotecaAtual.titulo + " : NÃO LIDO" + '<br>')
        }
    }
}





