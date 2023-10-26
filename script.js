let i = -1
window.addEventListener('keydown', (event) => {

    let sel = document.getElementsByClassName('item')
    let proximo = 0
    function tecla() {
        i += 1
    }
    let selL = sel.length
    if (event.which === 40 && i < selL - 2) {
        tecla()
        if (sel[i].className === 'item selected') {
            sel[i].classList.remove('selected')
            proximo = i + 1
            let sel2 = sel[proximo]
            sel2.classList.add('selected')
        }
    }
    function tecla2() {
        i -= 1
    }
    if (event.which === 38 && i > -1) {

        if (sel[i + 1].className === 'item selected') {
            sel[i + 1].classList.remove('selected')
            proximo = i
            let sel2 = sel[proximo]
            sel2.classList.add('selected')
        }
        tecla2()
    }
    if (event.which === 13) {
        let ent = document.querySelector('.selected').click()
        window.location.href = ent.this.href

    }
    if (event.which === 113) {
        window.history.back()
    }
});








