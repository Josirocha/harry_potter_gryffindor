let ronRespostas = ["1", "3", "2"]

function responderFase1Ron(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }

    if (resposta === ronRespostas[fase]) {
        alert("Parabéns, você acertou")
        location.assign("./fase2.html")
    } else {
        alert("poxa, você errou")
        location.assign("../game_over.html")
    }

}

function responderFase2Ron(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }
    if (resposta === ronRespostas[fase]) {
        alert("ebaa! você acertou")
        location.assign("./fase3.html")
    } else {
        alert("poxa, parece que você não entende muito da saga Harry Potter")
        location.assign("../game_over.html")
    }
}

function responderFase3Ron(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }
    if (resposta === ronRespostas[fase]) {
        alert("Temos um fã de Harry potter por aqui")
        location.assign("../win.html")
    } else {
        alert("poxa, você errou")
        location.assign("../game_over.html")
    }
}