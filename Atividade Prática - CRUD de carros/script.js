let dado = 0
let continuar = true
const cadastrarVeiculo = () => {
    while (continuar) {
        const id = Date.now()
        const modelo = prompt('Digite o modelo').toUpperCase()
        const marca = prompt('marca').toUpperCase()
        const ano = prompt('ano').toUpperCase()
        const cor = prompt('cor').toUpperCase()
        const preço = Number(prompt('preço'))
        continuar = confirm('continuar?')
        const veiculo = {
            id,
            modelo,
            marca,
            ano,
            cor,
            preço
        }
        dataCenter[referencia].mov.push(veiculo)
    }
}
const listarVeiculo = () => {
    document.getElementById('front').innerHTML = ''
    document.getElementById('front').innerHTML = ('LISTAR VEÍCULOS:<br>')
    dataCenter[referencia].mov.sort(function (x, y) {
        return x.preço - y.preço
    })
    dataCenter[referencia].mov.forEach(veic => {
        document.getElementById('front').innerHTML += (`ID: ${veic.id} | Modelo: ${veic.modelo} | Marca: ${veic.marca} | Ano: ${veic.ano} | Cor: ${veic.cor} | Preço: ${veic.preço}<br>`);
    })
}
const filtrarVeiculo = () => {
    document.getElementById('front').innerHTML = ''
    const marca = prompt('Qual a marca que deseja filtrar?').toUpperCase()
    document.getElementById('front').innerHTML += (`VEÍCULOS FILTRADOS POR ${marca}<br>`)
    const filtrado = dataCenter[referencia].mov.filter(veiculo => veiculo.marca === marca)
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
    const indice = dataCenter[referencia].mov.findIndex(veic => id == veic.id)
    if (indice > -1) {
        const novaCor = prompt('Nova cor:').toUpperCase()
        const novoPreço = Number(prompt('Novo preço:'))
        const info = {
            id,
            novaCor,
            novoPreço
        }
        dataCenter[referencia].mov[indice].cor = info.novaCor
        dataCenter[referencia].mov[indice].preço = info.novoPreço
        listarVeiculo()
    } else {
        alert('ID não encontrado')
    }
}
const removerVeiculo = () => {
    const id = prompt('Qual o ID que deseja excluir?')
    const indice = dataCenter[referencia].mov.findIndex(veic => id == veic.id)
    if (indice > -1) {
        dataCenter[referencia].mov.splice(indice, 1)
        listarVeiculo()
    } else {
        alert('ID não encontrado')
    }
}
const opcoes = () => {
    dado = 0
    while (dado != 6) {
        dado = prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem ${dataCenter[referencia].mov.length} ${dataCenter[referencia].mov.length == 1 ? 'carro' : 'carros'} ${dataCenter[referencia].mov.length == 1 ? 'cadastrado' : 'cadastrados'}\nEscolha uma das opções para interagir com o sistema:\n1- Cadastrar\n2- Listar\n3- Filtrar\n4- Atualizar\n5- Excluir\n6- Sair`)
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
// Filtrar Carros por Faixa de Preço: Crie uma função que recebe dois argumentos, preço mínimo e preço máximo, e retorna todos os carros cujo valor está dentro desta faixa.
const extraPreço = () => {
    document.getElementById('front').innerHTML = ''
    const faixa1 = Number(prompt('Qual a faixa de preço que deseja filtrar? VALOR1'))
    const faixa2 = Number(prompt('VALOR2'))
    document.getElementById('front').innerHTML += (`VEÍCULOS FILTRADOS POR VALOR ENTRE ${faixa1} E ${faixa2}<br>`)
    const filtrado = dataCenter[referencia].mov.filter(veiculo => veiculo.preço > faixa1 && veiculo.preço < faixa2)
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
// Encontrar o Carro Mais Caro: Utilize métodos de array para encontrar o carro mais caro do array.
const extraMaior = () => {
    document.getElementById('front').innerHTML = ''
    document.getElementById('front').innerHTML = ('MAIOR VALOR:<br>')
    dataCenter[referencia].mov.sort(function (x, y) {
        return x.preço - y.preço
    })
    const maior = dataCenter[referencia].mov.length - 1
    document.getElementById('front').innerHTML += (`ID: ${dataCenter[referencia].mov[maior].id} | Modelo: ${dataCenter[referencia].mov[maior].modelo} | Marca: ${dataCenter[referencia].mov[maior].marca} | Ano: ${dataCenter[referencia].mov[maior].ano} | Cor: ${dataCenter[referencia].mov[maior].cor} | Preço: ${dataCenter[referencia].mov[maior].preço}<br>`);


}
// Agrupar Carros por Marca: Escreva uma função que agrupe carros por marca e retorne um objeto cujas chaves são os nomes das marcas e os valores são arrays de carros dessa marca.
const extraMarcas = () => {
    let obj = {}
    dataCenter[referencia].mov.map(i => {
        if (obj[i.marca] === undefined) {
            obj[i.marca] = []
        }
        obj[i.marca].push(i.modelo);
    })
    let info = ''
    for (let carro in obj) {
        info += `${carro}: ${obj[carro]} <br>`
    }
    console.log(obj);
    document.getElementById('front').innerHTML = info;
}
// Calcular a Média de Preço dos Carros: Implemente uma função que calcule e retorne a média de preço de todos os carros da lista.
const extraMediaPreço = () => {
    soma = 0
    const carros = dataCenter[referencia].mov.map(vei => {
        soma += vei.preço
    })
    document.getElementById('front').innerHTML = (`A média de preço de todos os carros é ${(soma / carros.length).toFixed(2)}`)
}
// Listar Carros por Ordem Alfabética: Desenvolva uma função que retorne os carros ordenados alfabeticamente por modelo.
const extraOrdemAlfabetica = () => {
    dataCenter[referencia].mov.sort((a, b) => a.modelo.localeCompare(b.modelo));
    let front = "";
    for (let i = 0; i < dataCenter[referencia].mov.length; i++) {
        front += `ID: ${dataCenter[referencia].mov[i].id} | Modelo: ${dataCenter[referencia].mov[i].modelo} | Marca: ${dataCenter[referencia].mov[i].marca} | Ano: ${dataCenter[referencia].mov[i].ano} | Cor: ${dataCenter[referencia].mov[i].cor} | Preço: ${dataCenter[referencia].mov[i].preço}<br>`
    }
    document.getElementById('front').innerHTML = front
}
// Contar Carros por Cor: Elabore uma função que conte quantos carros de cada cor existem na lista e retorne um objeto com esta contagem.
const extraContagemCor = () => {
    let arrayDeCarros = []
    let obj = {}
    for (let carro of dataCenter[referencia].mov) {
        if (!arrayDeCarros.includes(carro.cor)) {
            obj[carro.cor] = []
            arrayDeCarros.push(carro.cor)
        }
        obj[carro.cor].push(carro.modelo)
        console.log(arrayDeCarros);
    }
    let info = ''
    for (let carro in obj) {
        info += `${carro}: ${obj[carro].length} <br>`
    }
    console.log(obj);
    document.getElementById('front').innerHTML = info;
}
// Converter Array para String: Crie uma função que converte o array de carros em uma string formatada, listando os detalhes de cada carro.
// listarVeiculo()

// Buscar Carros por Características Específicas: Implemente uma função que permite buscar carros por múltiplos critérios, como cor, marca, ano, etc. Como se fosse uma barra de pesquisa.
const extraBusca = () => {
    document.getElementById('front').innerHTML = ''
    let filtro = 0
    let n = 0
    let buscaModelo = prompt("Digite uma busca: ").toUpperCase()
    document.getElementById('front').innerHTML += `RESULTADOS DA BUSCA POR "${buscaModelo.toUpperCase()}":<br>`
    filtro = dataCenter[referencia].mov.filter(x => {
        for (let indice in x) {
            if (x[indice] == buscaModelo) {
                n++
                document.getElementById('front').innerHTML += (`ID: ${x.id} | Modelo: ${x.modelo} | Marca: ${x.marca} | Ano: ${x.ano} | Cor: ${x.cor} | Preço: ${x.preço}<br>`);
            }
        }
    })
    document.getElementById('front').innerHTML += `<br>${n} ${n == 1 ? 'resultado encontrado' : 'resultados encontrados'}`
}







