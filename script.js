$(document).on('keydown', function (e) {

    // ATRIBUINDO O KEY CODE PARA AS VARIAVEIS PARA MELHOR LEGIBILIDADE

    let up = 38;
    let down = 40;
    let enter = 13;
    let f2 = 113;

    // VARIAVEIS AUXILIARES PARA NAVEGACAO
    let index = 1;
    let proximo = 1;

    // VERIFICA SE A TECLA QUE ESTÁ SENDO DISPARADA É ALGUMA TECLA QUE QUEREMOS TRABALHAR EM CIMA
    if (e.keyCode === up || e.keyCode === down || e.keyCode === enter || e.keyCode === f2) {

        // PERCORRE TODAS AS DIVS DA CLASSE ITEM PARA SETAR O INDICE DA PROXIMA
        $.each($('.item'), function () {
            $(document).keypress(function (e) {

            });
            if ($(this).hasClass('selected')) {
                switch (e.keyCode) {
                    case up:
                        proximo = index - 1
                        break;
                    case down:
                        proximo += index
                        break;
                    case enter:
                        $('.item').click();
                        window.location.href = this.href
                        break;
                    case f2:
                        window.history.back();
                        break;

                }
            }
            index++;
        });

        index = 1;
        // VERIFICA SE O RETORNO É MAIOR QUE O NUMERO TOTAL DE DIVS E RETORNA FALSO PARA A NAVEGACAO NÃO SAIR DE DAS DIVS
        if (proximo > $('.item').length) {
            return false;
            // VERIFICA SE O RETORNO É MENOR QUE 1 E RETORNA FALSO PARA A NAVEGAÇÃO NÃO SAIR DAS DIVS
        } else if (proximo < 1) {
            return false;
        }
        // PERCORRE TODAS AS DIVS ITEMS PARA ATRIBUIR A CLASSE SELECTED NA DIV QUE O CURSOR DEVE IR SETADO NA VARIAVEL PROXIMO
        $.each($('.item'), function () {
            $(this).removeClass('selected');
            if (index === proximo) {
                $(this).addClass('selected');
            }
            index++;
        })
    }

});