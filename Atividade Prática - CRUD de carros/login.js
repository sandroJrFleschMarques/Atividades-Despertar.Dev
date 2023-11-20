const dataCenter = [
    {
        novoUsuario: "teste", novaSenha: "123", mov: [
            {
                id: '61',
                modelo: 'ESCORT',
                marca: 'FORD',
                ano: 1987,
                cor: 'BRANCO',
                preço: 19000
            },
            {
                id: '78',
                modelo: 'FUSCA',
                marca: 'VW',
                ano: 1970,
                cor: 'BEGE',
                preço: 9000
            },
            {
                id: '2',
                modelo: 'PASSAT',
                marca: 'VW',
                ano: 1989,
                cor: 'VERMELHO',
                preço: 29900
            },
            {
                id: '17',
                modelo: 'KADETT',
                marca: 'GM',
                ano: 1993,
                cor: 'PRETO',
                preço: 30000
            },
            {
                id: '27',
                modelo: 'MONZA',
                marca: 'GM',
                ano: 1990,
                cor: 'CINZA',
                preço: 35000
            },
            {
                id: '12',
                modelo: 'GOL',
                marca: 'VW',
                ano: 1995,
                cor: 'PRATA',
                preço: 15000
            },
            {
                id: '76',
                modelo: 'OPALA',
                marca: 'GM',
                ano: 1991,
                cor: 'AZUL',
                preço: 40000
            },
            {
                id: '58',
                modelo: 'CORCEL',
                marca: 'FORD',
                ano: 1977,
                cor: 'AMARELO',
                preço: 11000
            },
            {
                id: '79',
                modelo: 'CHEVETTE',
                marca: 'GM',
                ano: 1980,
                cor: 'VERDE',
                preço: 10000
            },
            {
                id: '41',
                modelo: 'UNO',
                marca: 'FIAT',
                ano: 1998,
                cor: 'BORDÔ',
                preço: 12500
            }
        ]
    }
]
let referencia = 0
const modal = document.querySelector('.modal')
const front = document.querySelector('#front')
let seguir = false
const criarUsuario = () => {
    const novoUsuario = prompt('e-mail')
    const novaSenha = prompt('senha')
    if (novoUsuario && novaSenha) {
        if (!novoUsuario.includes('@')) {
            alert('Digite um e-mail válido "pessoa@email.com"')
            return
        } else if (dataCenter.length == 0) {
            seguir = true
        } else {

            dataCenter.forEach(indice => {
                if (novoUsuario === indice.novoUsuario) {
                    alert('O usuário já existe')
                    throw new Error('O usuário já existe')
                } else {
                    seguir = true
                }
            })
        }
    } else if (!novoUsuario) {
        alert('Digite um e-mail')
        return
    } else {
        alert('Digite uma senha válida')
        return
    }
    if (seguir) {
        const mov = []
        let objeto = {
            novoUsuario,
            novaSenha,
            mov,
        }
        dataCenter.push(objeto)
        console.log(dataCenter);
    }
}
const login = () => {
    let status1;
    const emailValue = document.getElementById('usuario').value
    const senhaValue = document.getElementById('senha').value
    if (dataCenter.length > 0) {
        dataCenter.forEach(indice => {
            if (emailValue == indice.novoUsuario && senhaValue == indice.novaSenha) {
                referencia = dataCenter.indexOf(indice)
                status1 = `<b>${indice.novoUsuario}</b>`
                return
            }
        })
    } else {
        alert('Não há usuários cadastrados')
        return
    }
    if (status1) {
        document.getElementById('user').innerHTML = status1
        modal.style.display = "none"
        opcoes()
    } else {
        alert('Não encontrado')
    }
}
const trocarUsuario = () => {
    modal.style.display = "block"
    front.innerHTML = ''
}

trocarUsuario()
window.addEventListener('keydown', (event) => {
    if (event.which === 13) {
        login()
    }
})