const growcast = document.getElementById('growcast')
const webinar = document.getElementById('webinar')
const uxui = document.getElementById('ux-ui')
const geral = document.getElementById('geral')

function render(a, categ) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].category == categ) {
            a.innerHTML += `
            
    <div class="bg-black p-2 col-8 offset-2 col-md-3 offset-md-0 border border-0">
        <div class="cardZ" onmouseover="addd(${i})">
            <img class='img-fluid' src="${movies[i].img}" alt="Thumbnail">
            <div class="bg-black esconder" id="${i}">

            <p class="infoCard text-white"><a class="text-light pointer" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="modal(${i})" class="pointer"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>${movies[i].title}</a></p>
            </div>
        </div>
    </div>

`
        }
    }
}
function addd(a) {
    let o = (`${a}`);
    let k = document.getElementById(o)
    k.classList.add('classenova')
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