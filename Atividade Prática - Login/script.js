const formLogin = document.querySelector('.form-login')
const formCadastro = document.querySelector('.form-cadastro')

const bloco = document.querySelector('.bloco')
const modal = document.querySelector('.modal')

const telaCadastro = document.querySelector('.telaCadastro')

const nome = document.querySelector('.nome')
const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const erro = document.getElementsByName('erro')

const mail = document.querySelector('#mail')
const pass = document.querySelector('#pass')

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeInput = nome.value
    const emailInput = email.value
    const senhaInput = senha.value

    if(!nomeInput || !emailInput || !senhaInput){
        erro.forEach( error => {
            error.setAttribute('required', 'required')
            error.classList.add('errozao')
        })
    } else {
       
        const enviaCadastro = {
            name: nomeInput,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logomarca_Sicredi.jpg",
            password: senhaInput,
            login: emailInput
        }
        enviandoCadastro(enviaCadastro)
    }
})

telaCadastro.addEventListener('click', (e) =>{
    e.preventDefault()

    bloco.style.display='flex'
})

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = mail.value
    console.log(email);
    const senha = pass.value

    const usuarios = JSON.parse(localStorage.getItem('usuarioLocal'))
    console.log(usuarios);
    if(usuarios.login === email && senha === usuarios.password ){
        alert('O Usuário foi encontrado no LocalStorage!')
        location.href = 'index.html'
    } else {
        alert('VERIFIQUE EMAIL OU SENHA')
    }
})

async function enviandoCadastro(cadastroUsuario) {

    try {
        const response = await api.post('/users', cadastroUsuario)

        if (response.status === 201) {
            localStorage.setItem('usuarioLocal', JSON.stringify(cadastroUsuario))

            alert('Usuário Cadastrado com sucesso!')
            nome.value = ''
            email.value = ''
            senha.value = ''
            bloco.style.display='none'
        }

    } catch (error) {
        console.log(error);
    }

} 

function sair(){
    bloco.style.display='none'
}