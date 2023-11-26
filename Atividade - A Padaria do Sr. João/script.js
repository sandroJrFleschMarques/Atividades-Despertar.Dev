// let options = Number(prompt("Hi!, what you want to do today?:\n" ))
const delivery = [[{
	milis: 1700927301717,
	data: `aa-mm-dd`,
	pedidoN: 0,
	nome: 'teste',
	quantidade: 100,
	preçoUnitario: 5

}]]

const products = [
	{
		id: 11111,
		nome: 'CAFE MELITA',
		estoque: 500,
		preço: 12
	},
	{
		id: 22222,
		nome: 'LEITE ITALAC',
		estoque: 200,
		preço: 5
	},
	{
		id: 9,
		nome: 'MASSA',
		estoque: 30,
		preço: 5
	}
]

///LISTAR OS PRODUTOS

function productListByPrice() {
	document.getElementById("informations").innerHTML = "<b>Lista de produtos por preço:</b><br>"
	products.sort(function (a, b) {
		return a.preço - b.preço
	})
	let listProducts = ''
	for (let elements of products) {
		for (key in elements) {
			listProducts += `${key}: ${elements[key]} | `
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}

function productListByAbc() {
	document.getElementById("informations").innerHTML = ""
	document.getElementById("informations").innerHTML = "<b>Lista de produtos por ordem alfabética:</b><br>"
	products.sort((a, b) => a.nome.localeCompare(b.nome));

	let listProducts = ''
	for (let elements of products) {
		for (key in elements) {
			listProducts += `${key}: ${elements[key]} |`
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}



///Adicionar um Novo Produto ao Catálogo:
let continuar = true

function registerNewProduct() {
	while (continuar) {
		const id = Date.now()
		const nome = prompt("Informe o nome do produto").toUpperCase()
		const indice = products.findIndex(element => nome == element.nome)
		if (indice === -1 && nome != "") {
			const estoque = prompt("Informe a quantidade do produto").toUpperCase()
			let preço = ''
			do {
				preço = +prompt("Informe o valor do produto em números")
			} while (isNaN(preço))
			continuar = confirm("Deseja adicionar mais um produto?")
			const newProduct = {
				id,
				nome,
				estoque,
				preço
			}
			products.push(newProduct)
		} else if (nome == "") {
			alert('Campo nome vazio')
		} else {
			alert(`Produto ${nome} já existe com id ${products[indice].id}`)
		}
	}
	productListByAbc()
}

//Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0.
function editProduct() {
	const verificarId = prompt("Informe o ID do produto deseja editar")
	const indice = products.findIndex(element => verificarId == element.id)
	if (indice > -1) {
		let novoEstoque = ''
		const novoNome = prompt("Informe o novo nome do produto").toUpperCase()
		do {
			novoEstoque = +prompt("Informe qual o valor atual do estoque (valor maior que 0)")
		} while (novoEstoque < 0)
		const novoPreço = Number(prompt("Informe o novo preço do produto"))
		products[indice].nome = novoNome
		products[indice].estoque = novoEstoque
		products[indice].preço = novoPreço
	} else alert("Produto não encontrado")
	productListByAbc()
}


///Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo.
function removeProduct() {
	const verificarId = prompt("Informe o ID do produto deseja excluir")
	const indice = products.findIndex(element => verificarId == element.id)
	if (indice > -1) {
		products.splice(indice, 1)
	} else alert("Produto não encontrado")
	productListByAbc()
}


//Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de cada um. O sistema deve armazenar um histórico de pedidos. 
let continuar2 = true
let front = ''
let npedido = 1
function deliveryProduct() {
	document.getElementById("informations").innerHTML = "Pedidos: <br>"
	while (continuar2) {
		const verificarNome = prompt("Informe o nome do produto deseja comprar").toUpperCase()
		const indice = products.findIndex(element => verificarNome === element.nome)
		do {
			quantidadeProduto = Number(prompt('Quantidade'))
		} while (quantidadeProduto == 0 || isNaN(quantidadeProduto))
		const data = new Date()
		const milis = Date.now()
		console.log(indice)

		if (indice > -1) {
			if (quantidadeProduto <= products[indice].estoque && products[indice].estoque > 0) {
				console.log(quantidadeProduto, products[indice].estoque);
				console.log(delivery, npedido);
				if (delivery[npedido] === undefined) {
					delivery[npedido] = ([{
						milis,
						data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
						numeroDoPedido: npedido,
						nome: verificarNome,
						quantidade: quantidadeProduto,
						preçoUnitario: products[indice].preço

					}])
				} else {
					delivery[npedido].push({
						data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
						numeroDoPedido: npedido,
						nome: verificarNome,
						quantidade: quantidadeProduto,
						preçoUnitario: products[indice].preço
					})
				}
				products[indice].estoque -= quantidadeProduto

				console.log('estoque atualizado após compra: ' + products[indice].estoque);
				front += delivery[npedido].length === 1 ? `<b>Número do pedido: ${npedido} de ${delivery[npedido][0].data}</b><br> Quantidade: ${quantidadeProduto} Produto: ${products[indice].nome}<br>` : `Quantidade: ${quantidadeProduto} Produto: ${products[indice].nome}<br>`
			} else {
				alert('quantidade indisponível, estoque máximo: ' + products[indice].estoque)
			}
		} else {
			alert('produto não encontrado')
		}
		console.log(delivery)

		continuar2 = confirm("Deseja adicionar mais um produto?")

	}
	npedido++
	document.getElementById("informations").innerHTML = delivery[0][0].nome + '<br>' + front
}
// Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque

function stockSum() {
	let soma = 0
	products.map(d => {
		soma += (d.preço * d.estoque);
	})
	document.getElementById('informations').innerHTML = `A soma em R$ de todo o estoque é ${soma}`
}

// Relatório Diarios: João deve poder fazer um relatório das vendas que aconteceram em um período específico que ele selecionar. Deve conter quantas vendas foram realizadas e qual o faturamento.
function report() {
	let front = ''
	let valorPeriodo = 0
	let pDaVEz = 0
	let qDaVEz = 0
	let valor1 = prompt('Insira desde que data deseja buscar:\nex: 2023-11-24')
	let valor2 = prompt('Insira até que data deseja buscar:\nex: 2023-11-24')
	// também pode usar a string diretamente
	data1 = new Date(`${valor1}T10:00:00`).getTime()
	data2 = new Date(`${valor2}T10:00:00`).getTime()
	const vendas = []
	delivery.forEach(elemento => {
		for (let chave in elemento) {
			console.log(elemento[chave].milis, data1, data2);
			if (elemento[chave].milis > data1 && elemento[chave].milis < data2) {
				vendas.push(elemento)
				for (let element of elemento) {
					for (let key in element) {
						console.log(key);
						front += key === 'milis' ? `` : `${key}: ${element[key]} | `
						if (key === 'preçoUnitario') {
							pDaVEz = element[key]
						}
						if (key === 'quantidade') {
							qDaVEz = element[key]
						}
					}
					front += '<br>'
					valorPeriodo += Number(pDaVEz * qDaVEz)
					console.log(valorPeriodo);
				}
			}
		}
	})
	console.log(vendas);
	document.getElementById('informations').innerHTML = `<b>Relatório dos pedidos no período de ${valor1} e ${valor2}:</b><br>${front}`
	document.getElementById('informations').innerHTML += vendas.length > 0 ? `<b>Entre ${valor1} e ${valor2} ${vendas.length === 1 ? 'foi efetuada ' + vendas.length + ' venda' : 'foram efetuadas ' + vendas.length + ' vendas'}, valor total do período ${valorPeriodo}<b>` : `Nenhum resultado`
}