$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function mostraErro() {
    $("#erro").toggle();
    setTimeout(function () {
        $("#erro").toggle();
    }, 5500);
}

function mostraSpinner() {
    $("#spinner").toggle();
}


function fraseAleatoria() {
    mostraSpinner();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(mostraErro).always(mostraSpinner);
}


function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}


function buscaFrase() {
    mostraSpinner();
    var fraseId = $("#frase-id").val();
    var dados = {
        id: fraseId //Criando o objeto que guarda o id;
    };

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(mostraErro).always(mostraSpinner);
}

function trocaFrase(data) {

    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}