let listaDeRespostas = [
    ["2", "3", "1"], //harry
    ["3", "1", "1"], // hermione
    ["2", "1", "3"] //Ron
]
let listaDeAlertasPositivos = [
    [
        "Harry Potter fica surpreso, pensando em como ele pode ter feito isso",
        "Hagrid entrega uma carta de Hogwarts para Harry e deixa que ele decida se vai querer ir",
        "Harry Potter está descobrindo muitos segredos sobre seu passado e sabe que viverá muitas aventuras pela frente"
    ], //harry
    [
        "Parabéns, você acertou",
        "Sim, queria que fosse o Harry Potter, mas o Ron e a Hermione também são fofos juntos",
        "Temos um fã de Harry potter por aqui"
    ], // hermione
    [
        "Aceitavel esse medo do Ron",
        "Que grande família",
        "Tadinho do Ron"
    ] //ron
]

function indicePersonagem(personagem) {
    if (personagem === "harry") {
        return 0
    }
    if (personagem === "hermione") {
        return 1
    }
    if (personagem === "ron") {
        return 2
    }
}

function responder(fase, personagem) {
    let resposta = prompt("digite a resposta certa")

    // valida se a resposta for 1, 2 ou 3
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }

    if (resposta == listaDeRespostas[indicePersonagem(personagem)][fase]) {
        alert(listaDeAlertasPositivos[indicePersonagem(personagem)][fase])
        if (fase == 2) {
            location.assign("../win.html")
        } else {
            location.assign(`./fase${fase + 1}.html`)
        }
    } else {
        alert("poxa, você errou, você tem mais uma chance")
        resposta = prompt("digite a resposta certa")
        if (resposta == listaDeRespostas[indicePersonagem(personagem)][fase]) {
            alert(listaDeAlertasPositivos[indicePersonagem(personagem)][fase])
            if (fase == 2) {
                location.assign("../win.html")
            } else {
                location.assign(`./fase${fase + 1}.html`)
            }
        } else {
            alert("poxa, você errou novamente, acabaram suas chances")
            location.assign("../game_over.html")
        }
    }
}