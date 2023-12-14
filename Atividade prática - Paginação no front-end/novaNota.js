const tit = document.getElementById('titulo')
const descri = document.getElementById('descricao')
const recado = document.getElementById('novoRecado')

const userId = localStorage.getItem('userId')

async function novaNota(K) {
console.log(K);
    try {
        const response = await api.post('/notes/', K)

        if (response.status === 201) {
            console.log(response);
        }

    } catch (error) {
        console.log(error);
    }

} 

recado.addEventListener('submit', (e)=>{
    e.preventDefault()
    const title = tit.value
    const description = descri.value

    const card = {
        title,
        description,
        userId
    }
    console.log(card);
    novaNota(card)
})