const formNewMessage = document.getElementById('form-new-message')
const titleInput = document.getElementById('validationCustom')
const descriptionInput = document.getElementById('validation')

formNewMessage.addEventListener('submit', (event) => {
  event.preventDefault() // impede comportamento padrão submit

  const titleValue = titleInput.value
  const descriptionValue = descriptionInput.value

  const userId = localStorage.getItem('userId')

  if (!userId) {
    alert('Você precisa fazer login para cadastrar um recado.')
  }

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    userId
  }
if (titleValue && descriptionValue){
  createNewMessage(newMessage)
}
})

async function createNewMessage(message) {
  try {
    const response = await api.post('/notes', message)

    if (response.status === 201) {
      alert('Recado cadastrado com sucesso!')

      titleInput.value = ""
      descriptionInput.value = ""

      location.href = "listar-recados.html"
    }
  } catch (error) {
    console.log('Erro ao cadastrar recado', error)
  }
}