const conteinerForm = document.querySelector('.form-login')

const nome = document.querySelector('.nome')
const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const erro = document.getElementsByName('erro')

conteinerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeInput = nome.value
    const emailInput = email.value
    const senhaInput = senha.value

    if(!nomeInput || !emailInput || !senhaInput){
        erro.forEach( error => {
            error.setAttribute('required', 'required')
            error.classList.add('errozao2')
        })
    } else {
        const enviaCadastro = {
            name: nomeInput,
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/34.jpg",
            password: senhaInput,
            login: emailInput
        }
        enviandoCadastro(enviaCadastro)
    }
})

async function enviandoCadastro(cadastroUsuario) {

    try {
        const response = await axios.post('https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/users', cadastroUsuario)

        if (response.status === 201) {
            alert('Usuário Cadastrado com sucesso!')
            nome.value = ''
            nome.email = ''
            nome.senha = ''

            location.href = "index.html"
        }


    } catch (error) {
        console.log(error);
    }

} 