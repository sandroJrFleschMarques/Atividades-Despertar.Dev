const array2 = []
let array3 = []

async function nomeDoEpisodio(last) {
  const site = await axios.get(last)
  const nomedele = site.data.name
  return nomedele
}
async function infoPages() {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  const info = response.data.info.pages
  return info
}

let input = document.getElementById('pesquisa').value

async function infoInput() {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${input}`);
  const infoI = response.data.info.pages
  return infoI
}

let corpo = document.querySelector('#corpo')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let show = document.getElementById('show')

let page = 1

next.addEventListener('click', () => {
  scrollToTop()
  prev.disabled = false
  if (input) {
    infoInput().then((infoI) => {

      if (page < infoI) {
        page++
        show.innerText = `Página ${page}`
        findInput()
        if (page === infoI) {
          next.disabled = true
        }
      }
    })
  } else {
    infoPages().then((info) => {
      if (page < info) {
        page++
        show.innerText = `Página ${page}`
        findCharacterByName()
      }
      if (page == info) {
        next.disabled = true
      }
    })
  }
})

prev.addEventListener('click', () => {
  scrollToTop()
  next.disabled = false
  if (input) {
    page--

    if (page >= 1) {
      show.innerText = `Página ${page}`
      findInput()
      if (page == 1) {
        prev.disabled = true
      }
    }

  } else {

    if (page > 1) {
      page--
      show.innerText = `Página ${page}`
      findCharacterByName()
      if (page == 1) {

        prev.disabled = true
      }
    }
  }
})

function zero(matriz, tipo) {

  for (let elem of matriz) {
    let ultimo = ''
    for (let el of elem.episode) {
      ultimo = el
    }

    nomeDoEpisodio(ultimo).then((nomedele) => {
      front = `<div class="col-6 h-100" id="oi"><p>${elem.id}</p><h2>${elem.name}</h2> <div class="st">${elem.status === 'Alive' ? '<div style="display:inline-block; background-color:green; border-radius:100%; width:8px; height:8px"></div><span> Vivo' : elem.status === 'Dead' ? '<div style="display:inline-block; background-color:red; border-radius:100%; width:8px; height:8px"></div><span> Morto' : '<div style="display:inline-block; background-color:darkgray; border-radius:100%; width:8px; height:8px"></div><span> Desconhecido'} - ${elem.species === 'Human' ? 'Humano</p>' : elem.species + '</p>'}</div> <br><p> <b> Última localização conhecida: </b> <br> ${elem.location.name} <br></p><p><b>Visto a última vez em:</b><br>${nomedele}</br></p></div>`
      card.innerHTML += (front);

    })

    let id = elem.id
    let card = document.createElement('div')
    let img = document.createElement('img')
    if (tipo == 'inp') {
      card.setAttribute('onclick', `modal2(${id})`)
      card.setAttribute('id', id)
    }
    if (tipo == 'def') {
      card.setAttribute('onclick', `modal(${id})`)
    }
    card.setAttribute('class', `cardID`)
    card.setAttribute('title', `Clique para mais informações de ${elem.name}`)
    img.classList.add('col-6')
    img.classList.add('p-0')
    card.classList.add('card')
    card.classList.add('col-sm-12')
    card.classList.add('col-lg-4')
    card.classList.add('col-md-4')
    card.classList.add('row')
    card.classList.add('m-4')
    corpo.appendChild(card)
    img.setAttribute('src', `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`)
    img.setAttribute('style', 'float:left')
    card.appendChild(img)
  }
}

async function findInput() {
  let front = ''
  array3 = []
  corpo.innerText = ''
  input = document.getElementById('pesquisa').value

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}&page=${page}`)
    const t = [...response.data.results]
    zero(t, 'inp')
    document.getElementById('id2').style.backgroundImage = 'url("./FUNDO.jpg")'
    const card = document.querySelectorAll('.card')

    card.forEach(call => {
      array3.push(call)
    })
  } catch (e) {
    inputs.value = ''
    if (front == '') {
      corpo.innerText = (`${input} Não Encontrado!`)
      prev.disabled = true
      next.disabled = true
      document.getElementById('id2').style.backgroundImage = 'none'
      corpo.innerHTML += '<div style="text-align:center"><img style="opacity:0.7; width:70%; height:79vh" src="./rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="img"><div>'
    }
  }
}

async function findCharacterByName() {
  let front = ''
  corpo.innerText = ''
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const array = [...response.data.results]
    zero(array, 'def')

    const card = document.querySelectorAll('.card')

    card.forEach(call => {
      array2.push(call)
    })

  } catch /*(error)*/ {
  }
}
document.getElementById('pesquisa').focus()

const btn = document.getElementById('btn')
const inputs = document.getElementById("input");

function start() {
  page = 1
  findInput()
  show.innerText = `Página ${page}`
  if (page == 1) {
    prev.disabled = true
  }
  infoInput().then((infoI) => {
    if (infoI == 1) {
      prev.disabled = true
      next.disabled = true

    } else if (infoI > 1) {
      next.disabled = false
    }
  })
}
inputs.addEventListener("keydown", function (e) {
  if (e.key === 'Enter') {

    start()
  }
});
btn.addEventListener("click", function () {
  start()
});

findCharacterByName()
if (page == 1) {
  prev.disabled = true
}

async function footer() {
  const personagens = await axios.get(`https://rickandmortyapi.com/api/character`)
  document.getElementById('p').innerText = personagens.data.info.count
  const localizacoes = await axios.get(`https://rickandmortyapi.com/api/location`)
  document.getElementById('l').innerText = localizacoes.data.info.count
  const episodios = await axios.get(`https://rickandmortyapi.com/api/episode`)
  document.getElementById('e').innerText = episodios.data.info.count
  return personagens.data.info.pages
}
footer()

function modal(a) {

  const modal = new bootstrap.Modal('#modal')
  modal.show()
  const divisao = document.getElementById('gde')
  divisao.innerHTML = ""
  const calculo = (a - 1)
  clone = array2[calculo].cloneNode(true)
  clone.removeAttribute('onclick')
  clone.removeAttribute('title')
  clone.classList.remove('cardID')
  clone.classList.add('col-12')
  clone.classList.add('h-100')
  clone.classList.add('clone')
  clone.classList.remove('card')
  clone.classList.remove('m-4')
  clone.classList.remove('col-lg-4')
  clone.classList.remove('col-md-4')
  divisao.appendChild(clone)
}
function modal2(a) {
  const modal = new bootstrap.Modal('#modal')
  modal.show()
  const divisao = document.getElementById('gde')
  divisao.innerHTML = ""
  array3.forEach(element => {
    if (element.id == a) {
      clone = element.cloneNode(true)
      console.log('o clone', clone);
      clone.removeAttribute('onclick')
      clone.removeAttribute('title')
      clone.classList.remove('cardID')
      clone.classList.add('col-12')
      clone.classList.add('h-100')
      clone.classList.add('clone')
      clone.classList.remove('card')
      clone.classList.remove('m-4')
      clone.classList.remove('col-lg-4')
      clone.classList.remove('col-md-4')
      divisao.appendChild(clone)
    }
  });

}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}