let harryRespostas = ["2", "1", "3"]

function responderFase1Harry(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }

    if (resposta === harryRespostas[fase]) {
        alert("Harry Potter fica surpreso, pensando em como ele pode ter feito isso")
        location.assign("./fase2.html")
    } else {
        alert("poxa, você errou")
        location.assign("../game_over.html")
    }

}

function responderFase2Harry(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }
    if (resposta === harryRespostas[fase]) {
        alert("Hagrid entrega uma carta de Hogwarts para Harry e deixa que ele decida se vai querer ir")
        location.assign("./fase3.html")
    } else {
        alert("poxa, você errou")
        location.assign("../game_over.html")
    }
}

function responderFase3Harry(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }
    if (resposta === harryRespostas[fase]) {
        alert("Harry Potter está descobrindo muitos segredos sobre seu passado e sabe que viverá muitas aventuras pela frente")
        location.assign("../win.html")
    } else {
        alert("poxa, você errou")
        location.assign("../game_over.html")
    }
}