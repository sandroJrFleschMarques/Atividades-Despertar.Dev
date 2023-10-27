let i = 0
window.addEventListener('keydown', (event) => {

    let sel = document.getElementsByClassName('item')
    if (event.which === 40 && i < (sel.length - 1)) {
        if (sel[i].className === 'item selected') {
            sel[i].classList.remove('selected')
            sel[i + 1].classList.add('selected')
        }
        i++
    }
    if (event.which === 38 && i > 0) {
        if (sel[i].className === 'item selected') {
            sel[i].classList.remove('selected')
            sel[i - 1].classList.add('selected')
        }
        i--
    }
    if (event.which === 13) {
        let ent = document.querySelector('.selected').click()
        window.location.href = ent.this.href
    }
    if (event.which === 113) {
        window.history.back()
    }
});








