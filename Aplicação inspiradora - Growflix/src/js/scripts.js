const growcast = document.getElementById('growcast')
const webinar = document.getElementById('webinar')
const uxui = document.getElementById('ux-ui')
const geral = document.getElementById('geral')

function render(categDom, categData) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].category == categData) {
            categDom.innerHTML += `
            
    <div class="bg-black p-2 col-12 col-md-3 offset-md-0 border border-0">
        <div class="cardZ" onmouseover="adicionarClasse(${i})" onclick="modal(${i})">
            <img class='img-fluid' src="${movies[i].img}" alt="Thumbnail">
            <div class="bg-black esconder" id="${i}">
            <p class="infoCard text-white"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>${movies[i].title}</p>
            </div>
        </div>
    </div>

`
        }
    }
}
function adicionarClasse(parametro) {
    let parametroString = (`${parametro}`);
    let elementoCapturado = document.getElementById(parametroString)
    elementoCapturado.classList.add('hoverInfo')
}

render(growcast, 'growcast')
render(webinar, 'webinar')
render(uxui, 'ux-ui')
render(geral, 'geral')

function modal(i) {
    const modal = new bootstrap.Modal('#modal')
    modal.show()
    let inject = document.getElementById('inject')
    inject.innerHTML = `<iframe id="myVideo" width="560" height="315" src="${movies[i].link}" title="${movies[i].title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function stopVid() {
    let vid = document.getElementById("myVideo");
    vid.setAttribute('src', vid.getAttribute('src'));
}

let colocarSvg = document.querySelectorAll('.injectSvg')
colocarSvg.forEach(elementoAreceberSvg => elementoAreceberSvg.innerHTML+=` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path></svg>`)

