const messagesContainer = document.querySelector('.messages-list')

const prevPage = document.getElementById('prevPage')
const nextPage = document.getElementById('nextPage')
const add = document.getElementById('add')
add.addEventListener('click', () => {
  const modal = new bootstrap.Modal('#modal')
        modal.show()
})
// Variáveis globais
let currentPage = 1
let totalPages = 1

async function fetchMessages(page) {
  try {
    currentPage = page //necessario para paginacao
    const userId = localStorage.getItem('userId')

    if (!userId) {
      alert("Você precisa fazer login para visualizar os recados.")

      return
    }

    const params = {
      page,
      perPage: 3
    }

    const response = await api.get(`/notes/${userId}`, { params })
    const messages = response.data.userMessages

    console.log(messages)

    totalPages = response.data.totalPages

    messagesContainer.innerHTML = ''

    messages.forEach(message => {
      const messageCard = document.createElement('div')
      messageCard.classList.add('card')
      messageCard.classList.add('m-2')

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
          <i class="fas fa-solid fa-trash text-danger" data-id=${message.id}></i>
          <i class="fas fa-regular fa-edit text-success" data-id=${message.id}></i>
        </div>
      `

      messagesContainer.appendChild(messageCard)

      const deleteIcon = messageCard.querySelector('.fa-trash')

      deleteIcon.addEventListener('click', () => {
        const messageId = deleteIcon.getAttribute('data-id')

        deleteMessage(messageId)
      })

      const editIcon = messageCard.querySelector('.fa-edit')
      editIcon.addEventListener('click', () => {
        const messageId = editIcon.getAttribute('data-id')
        const modal = new bootstrap.Modal('#modal2')
        modal.show()
        console.log(messageId);

        const formEditMessage = document.getElementById('form-edit-message')
const titleInput = document.getElementById('validationCustomUsername')
const descriptionInput = document.getElementById('validationCustom03')


async function populateEditForm(messageId) {
  try {
    const response = await api.get(`/notes/list/${messageId}`)
    const message = response.data

    titleInput.value = message.title
    descriptionInput.value = message.description

  } catch (error) {
    console.log('Erro ao buscar recado', error)
  }
  console.log('populate invocada');
}

        populateEditForm(messageId)
        
formEditMessage.addEventListener('submit', (event) => {
  // event.preventDefault()

  const titleValue = titleInput.value
  const descriptionValue = descriptionInput.value

  const editMessage = {
    title: titleValue,
    description: descriptionValue
  }
  if (titleValue && descriptionValue) {
    updateMessage(messageId, editMessage)
  }

})
async function updateMessage(messageId, editMessage) {
  try {
    const response = await api.put(`/notes/${messageId}`, editMessage)

    if (response.status === 200) {
      alert('Recado atualizado com sucesso!')
    }

    location.href = "listar-recados.html"
  } catch (error) {
    console.log('Erro ao atualizar recado.')
  }
}

      })
    });

    if (messages.length === 0) {
      const h3 = document.createElement('h3')
      h3.textContent = 'Nenhum recado cadastrado.'
      messagesContainer.appendChild(h3)
    }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
  // const pageNumbersContainer = document.getElementById("pageNumbers")

  // pageNumbersContainer.innerHTML = "" // Limpa os números de página antes de adicionar novos

  // for (let contador = 1; contador <= totalPages; contador++) {
  //   console.log(totalPages);

  //   const pageNumber = document.createElement("button")
  //   pageNumber.textContent = contador
  //   pageNumber.classList.add("pageNumber")

  //   if (contador === currentPage) {
  //     pageNumber.classList.add("active")
  //   }

  //   pageNumber.addEventListener("click", () => {
  //     currentPage = contador
  //     fetchMessages(currentPage)
  //   });
  //   if (contador === currentPage - 1 || contador === currentPage || contador === currentPage + 1) {
  //     pageNumbersContainer.appendChild(pageNumber)
  //   }

  // }


  pageNumbers.innerHTML=""
    for(let contador = 1; contador <= totalPages; contador++){

      if (contador === currentPage - 1 || contador === currentPage || contador === currentPage + 1) {
        pageNumbers.innerHTML += `<button class="border border-0 me-1 ms-1 p-2 bg-success rounded-3 text-light" onclick=fetchMessages(${contador}) >${contador}</button>`   // fez um botão para cada pagina
      }
    
   }
  
}

fetchMessages(currentPage)

// function navigateToEditPage(messageId) {
//   location.href = `editar-recado.html?id=${messageId}`
// }

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    fetchMessages(currentPage)
  }
})

nextPage.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchMessages(currentPage)
  }
})

// async function fetchMessagesFirst(){
//   await fetchMessages(currentPage)

//   const pageNumbers = document.getElementById('pageNumbers')
//   for(let contador = 1; contador <= totalPages; contador++){

//      pageNumbers.innerHTML += `<button onclick=fetchMessages(${contador}) >${contador}</button>`
//   }
// }
// fetchMessagesFirst()


