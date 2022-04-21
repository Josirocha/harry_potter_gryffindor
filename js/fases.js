let harryRespostas = ["2", "1", "3"]










function responder(fase) {
    let resposta = prompt("digite a resposta certa")
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }

    if (resposta === harryRespostas[fase]) {
        location.assign("./fase2.html")
    } else {
        location.assign("../game_over.html")
    }

}