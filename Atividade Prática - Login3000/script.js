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
            password: senhaInput,
            email: emailInput
        }
        enviandoCadastro(enviaCadastro)
    }
})

telaCadastro.addEventListener('click', (e) =>{
    e.preventDefault()

    bloco.style.display='flex'
})



async function enviandoCadastro(cadastroUsuario) {

    try {
        const response = await api.post('/users/signup', cadastroUsuario)

        if (response.status === 201) {
            alert('ok')
        }

    } catch (error) {
        console.log(error);
    }

} 
async function login(K) {

    try {
        const response = await api.post('/users/login', K)

        if (response.status === 200) {
            console.log(response);
        }

    } catch (error) {
        console.log(error);
    }

} 

function sair(){
    bloco.style.display='none'
}

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()


    const emailInput = mail.value
    const senhaInput = pass.value

       
        const K = {
            password: senhaInput,
            email: emailInput
        }
        login(K)
    }
)
