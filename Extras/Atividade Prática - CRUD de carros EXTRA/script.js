const veiculos = [
    {
        id: '61',
        modelo: 'quantum',
        marca: 'vw',
        ano: 2021,
        cor: 'white',
        preço: 35000
    },
    {
        id: '78',
        modelo: 'passat',
        marca: 'vw',
        ano: 2022,
        cor: 'white',
        preço: 20000
    },
    {
        id: '2',
        modelo: 'gol',
        marca: 'vw',
        ano: 2022,
        cor: 'blue',
        preço: 35000
    },
    {
        id: '17',
        modelo: 'monza',
        marca: 'gm',
        ano: 2022,
        cor: 'black',
        preço: 30000
    },
    {
        id: '27',
        modelo: 'vectra',
        marca: 'gm',
        ano: 2021,
        cor: 'red',
        preço: 35000
    },
    {
        id: '12',
        modelo: 'fusca',
        marca: 'vw',
        ano: 2021,
        cor: 'black',
        preço: 30000
    },
    {
        id: '76',
        modelo: 'corsa',
        marca: 'gm',
        ano: 2021,
        cor: 'blue',
        preço: 25000
    },
    {
        id: '58',
        modelo: 'escort',
        marca: 'ford',
        ano: 2020,
        cor: 'red',
        preço: 30000
    },
    {
        id: '79',
        modelo: 'ka',
        marca: 'ford',
        ano: 2020,
        cor: 'white',
        preço: 20000
    },
    {
        id: '41',
        modelo: 'uno',
        marca: 'fiat',
        ano: 2022,
        cor: 'black',
        preço: 25000
    }
]
let dado = 0
let continuar = true
const cadastrarVeiculo = () => {
    while (continuar) {
        const id = Date.now()
        const modelo = prompt('Digite o modelo').toLowerCase()
        const marca = prompt('marca').toLowerCase()
        const ano = prompt('ano').toLowerCase()
        const cor = prompt('cor').toLowerCase()
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


// Filtrar Carros por Faixa de Preço: Crie uma função que recebe dois argumentos, preço mínimo e preço máximo, e retorna todos os carros cujo valor está dentro desta faixa.
const extraPreço = () => {
    document.getElementById('front').innerHTML = ''
    const faixa1 = Number(prompt('Qual a faixa de preço que deseja filtrar? VALOR1'))
    const faixa2 = Number(prompt('VALOR2'))
    document.getElementById('front').innerHTML += (`VEÍCULOS FILTRADOS POR VALOR ENTRE ${faixa1} E ${faixa2}<br>`)
    const filtrado = veiculos.filter(veiculo => veiculo.preço > faixa1 && veiculo.preço < faixa2)
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
    veiculos.sort(function (x, y) {
        return x.preço - y.preço
    })
    const maior = veiculos.length - 1
    document.getElementById('front').innerHTML += (`ID: ${veiculos[maior].id} | Modelo: ${veiculos[maior].modelo} | Marca: ${veiculos[maior].marca} | Ano: ${veiculos[maior].ano} | Cor: ${veiculos[maior].cor} | Preço: ${veiculos[maior].preço}<br>`);


}
// Agrupar Carros por Marca: Escreva uma função que agrupe carros por marca e retorne um objeto cujas chaves são os nomes das marcas e os valores são arrays de carros dessa marca.
const extraMarcas = () => {
    let arrayDeCarros = []
    let obj = {}
    for (let carro of veiculos) {
        if (!arrayDeCarros.includes(carro.marca)) {
            obj[carro.marca] = []
        }
    }
    for (let carro of veiculos) {
        obj[carro.marca].push(carro.modelo)
    }
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
    const carros = veiculos.map(vei => {
        soma += vei.preço
    })
    document.getElementById('front').innerHTML = (`A média de preço de todos os carros é ${(soma / carros.length).toFixed(2)}`)


}
// Listar Carros por Ordem Alfabética: Desenvolva uma função que retorne os carros ordenados alfabeticamente por modelo.
const extraOrdemAlfabetica = () => {
    veiculos.sort((a, b) => a.modelo.localeCompare(b.modelo));
    let front = "";
    for (let i = 0; i < veiculos.length; i++) {
        front += `ID: ${veiculos[i].id} | Modelo: ${veiculos[i].modelo} | Marca: ${veiculos[i].marca} | Ano: ${veiculos[i].ano} | Cor: ${veiculos[i].cor} | Preço: ${veiculos[i].preço}<br>`
    }
    document.getElementById('front').innerHTML = front
}
// Contar Carros por Cor: Elabore uma função que conte quantos carros de cada cor existem na lista e retorne um objeto com esta contagem.
const extraContagemCor = () => {
    let arrayDeCarros = []
    let obj = {}
    for (let carro of veiculos) {
        if (!arrayDeCarros.includes(carro.cor)) {
            obj[carro.cor] = []
        }
    }
    for (let carro of veiculos) {
        obj[carro.cor].push(carro.modelo)
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
    let buscaModelo = prompt("Digite uma busca: ").toLowerCase()
    document.getElementById('front').innerHTML += `RESULTADOS DA BUSCA POR "${buscaModelo.toUpperCase()}":<br>`
    filtro = veiculos.filter(x => {
        for (let indice in x) {
            if (x[indice] == buscaModelo) {
                n++
                document.getElementById('front').innerHTML += (`ID: ${x.id} | Modelo: ${x.modelo} | Marca: ${x.marca} | Ano: ${x.ano} | Cor: ${x.cor} | Preço: ${x.preço}<br>`);
            }
        }

    })
    document.getElementById('front').innerHTML += `<br>${n} ${n == 1 ? 'resultado encontrado' : 'resultados encontrados'}`

}









