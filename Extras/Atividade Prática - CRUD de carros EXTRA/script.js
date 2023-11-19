const veiculos = []
let dado = 0
let continuar = true
const cadastrarVeiculo = () => {
    while (continuar) {
        const id = Date.now()
        const modelo = prompt('Digite o modelo')
        const marca = prompt('marca')
        const ano = prompt('ano')
        const cor = prompt('cor')
        const preço = prompt('preço')
        continuar = confirm('continuar?')
        const veiculo = {
            id,
            modelo,
            marca,
            ano,
            cor,
            preço
        }
        veiculos.push(veiculo)
    }
}
const listarVeiculo = () => {
    document.getElementById('front').innerHTML = ''
    document.getElementById('front').innerHTML = ('LISTAR VEÍCULOS:<br>')
    veiculos.sort(function (x, y) {
        return x.preço - y.preço
    })
    veiculos.forEach(veic => {
        document.getElementById('front').innerHTML += (`ID: ${veic.id} | Modelo: ${veic.modelo} | Marca: ${veic.marca} | Ano: ${veic.ano} | Cor: ${veic.cor} | Preço: ${veic.preço}<br>`);
    })

}
const filtrarVeiculo = () => {
    document.getElementById('front').innerHTML = ''
    const marca = prompt('Qual a marca que deseja filtrar?')
    document.getElementById('front').innerHTML += (`VEÍCULOS FILTRADOS POR ${marca.toUpperCase()}<br>`)
    const filtrado = veiculos.filter(veiculo => veiculo.marca === marca)
    let filtrado2 = ''
    filtrado.sort(function (x, y) {
        return x.preço - y.preço
    })
    for (let indice of filtrado) {
        for (let chave in indice) {
            filtrado2 += `${chave}: ${indice[chave]} | `
        }
        filtrado2 += ('\n')
    }
    document.getElementById('front').innerText += (`${filtrado2}`)
}
const atualizarVeiculo = () => {
    const id = prompt('Digite o ID do veículo que quer atualizar:')
    const indice = veiculos.findIndex(veic => id == veic.id)
    if (indice > -1) {
        const novaCor = prompt('Nova cor:')
        const novoPreço = prompt('Novo preço:')
        const info = {
            id,
            novaCor,
            novoPreço
        }
        veiculos[indice].cor = info.novaCor
        veiculos[indice].preço = info.novoPreço
        listarVeiculo()
    } else {
        alert('ID não encontrado')
    }
}
const removerVeiculo = () => {
    const id = prompt('Qual o ID que deseja excluir?')
    const indice = veiculos.findIndex(veic => id == veic.id)
    if (indice > -1) {
        veiculos.splice(indice, 1)
        listarVeiculo()
    } else {
        alert('ID não encontrado')
    }
}
const opcoes = () => {
    dado = 0
    while (dado != 6) {
        dado = prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem ${veiculos.length} ${veiculos.length == 1 ? 'carro' : 'carros'} ${veiculos.length == 1 ? 'cadastrado' : 'cadastrados'}\nEscolha uma das opções para interagir com o sistema:\n1- Cadastrar\n2- Listar\n3- Filtrar\n4- Atualizar\n5- Excluir\n6- Sair`)
        if (dado == 1) {
            continuar = true
            cadastrarVeiculo()
            alert('VeÍculos cadastrados com sucesso! Selecione listar para exibi-los.')
        } else if (dado == 2) {
            listarVeiculo()
            dado = 6
        } else if (dado == 3) {
            filtrarVeiculo()
            dado = 6
        } else if (dado == 4) {
            atualizarVeiculo()
            dado = 6
        } else if (dado == 5) {
            removerVeiculo()
            dado = 6
        }
    }
}
opcoes()