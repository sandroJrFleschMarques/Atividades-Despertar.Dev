let front = ''
let input = ''

async function local(){
  const loc = []
  let i=0
  try{
  do{
  const site = await axios.get(`https://rickandmortyapi.com/api/location/${i}`)
  if(site.data.url){
  loc.push(site.data.name)
  }
i++
}while(`https://rickandmortyapi.com/api/location/${i}`)
  }catch(e){
    console.log(`Exibindo ${i - 1} páginas encontradas`)
  }
  console.log(loc);
}
local()



async function nome(last) {
  const site = await axios.get(last)
  const nomedele = site.data.name
  return nomedele
}
const footer = []
async function findCharacterByName() {
  let obj = {
    p: [],
    l: [],
    e: []
  }

  let front = ''
  let corpo = document.querySelector('#corpo')

  corpo.innerText = ''

  let page = 1

  try {
    do {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

      const array = [...response.data.results]
      



      input = document.getElementById('pesquisa').value



      for (let elem of array) {
        

        function zero() {
          let ultimo = ''
          for (let el of elem.episode) {
            ultimo = el
          }

          nome(ultimo).then((nomedele) => {
            front = `<div id="oi"><p>${elem.id}</p><h2>${elem.name}</h2> <div>${elem.status === 'Alive' ? '<div style="display:inline-block; background-color:green; border-radius:100%; width:8px; height:8px"></div><span> Vivo' : elem.status === 'Dead' ? '<div style="display:inline-block; background-color:red; border-radius:100%; width:8px; height:8px"></div><span> Morto' : '<div style="display:inline-block; background-color:darkgray; border-radius:100%; width:8px; height:8px"></div><span> Desconhecido'} - ${elem.species === 'Human' ? 'Humano</p>' : elem.species + '</p>'}</div> <br><p> <b> Última localização conhecida: </b> <br> ${elem.location.name} <br></p><b>Visto a última vez em:</b> ${nomedele}</p></div>`
            card.innerHTML += (front);

            obj.p.push(elem)
            if (!obj.l.includes(elem.location.url)) {
              obj.l.push(elem.location.url)
            }
            if (!obj.e.includes(nomedele)) {
              obj.e.push(nomedele)
            }



            document.getElementById('p').innerText = obj.p.length
            document.getElementById('l').innerText = obj.l.length
            document.getElementById('e').innerText = obj.e.length

          })

          let id = elem.id
          let card = document.createElement('div')
          let img = document.createElement('img')
          card.classList.add('card')
          corpo.appendChild(card)
          img.setAttribute('src', `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`)
          img.setAttribute('style', 'float:left')
          card.appendChild(img)

        }

        if (input) {

          if (elem.name.toUpperCase().includes(input.toUpperCase())) {
            zero()
          }
        } else {
          zero()
        }

      }
      page++

    } while (`https://rickandmortyapi.com/api/character?page=${page}`)

  } catch /*(error)*/ {
    inputs.value = ''
    console.log(`Exibindo ${page - 1} páginas encontradas`)
    if (front == '') {
      function zerar(x) {
        document.getElementById(x).innerText = 0
      }
      zerar('p'), zerar('l'), zerar('e')
      corpo.innerText = (`${input} Não Encontrado!`)
    }

  }
  corpo.innerHTML += '<div style="text-align:center"><img style="opacity:0.7; width:55vw; height:79vh" src="./rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="img"><div>'
  console.log(obj);
  console.log(location.length);
}

const inputs = document.getElementById("pesquisa");
inputs.focus()

inputs.addEventListener("keydown", function (e) {
  if (e.key === 'Enter') {
    findCharacterByName()
  }
});

findCharacterByName()



