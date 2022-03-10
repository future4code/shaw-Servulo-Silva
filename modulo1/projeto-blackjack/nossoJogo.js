

// Blackjack ou 21

// Inicia mostrando uma mensagem de bem-vindo

console.log(`Bem-vindo(a) ao jogo de Blackjack`)

// Pergunta o nome do usuário só para dar um toque mais pessoal
let nomeUsuario = prompt(`Digite o seu primeiro nome`)

// Pergunta se quer iniciar uma nova roda


// Declarando a carta de cada jogador invocando a função compraCarta() que está no arquivo "naoMexa". Dessa forma, a carta sorteada será mostrada aqui. 
let card1Player = comprarCarta()
let card2Player = comprarCarta()
let card1Computer = comprarCarta()
let card2Computer = comprarCarta()

// Início da lógica - o código irá sortear 2 cartas para o usuário + 2 cartas para o computador. Após isto, irá somar os valores para cada competidor e avaliar quem ganhou o jogo com base na pontuação. Após isso, deve imprimir no console as cartas e seus valores assim como ganhou o jogo. 

// Caso queira jogar
if (confirm(`Bem-vindo(a) ao jogo de Blackjack` + `\n`+ 
`Quer iniciar uma nova rodada?`)){

    // Declarando o valor da pontuação com a soma dos valores de cada carta
    // comprarCarta.valor retorna o valor/pontuação da carta sorteada

    let pontuacaoUser = card1Player.valor + card2Player.valor
    let pontuacaoComputer = card1Computer.valor + card2Computer.valor


    // Agora um console.log na tela sobre as cartas e pontuações de cada usuário e o resultado do jogo, informando quem ganhou ou se deu empate.
    // comprarCarta.texto retorna o numero e naipe da carta sorteada
    
    console.log(`As cartas e a pontuação do Usuário - Cartas: ${card1Player.texto} ${card2Player.texto} - Pontuação ${pontuacaoUser}`)
    console.log(`As cartas e a pontuação do Computador - Cartas: ${card1Computer.texto} ${card2Computer.texto} - Pontuação ${pontuacaoComputer}`)


    // Lógica do ganhador. Quem tiver o valor maior, ganha. E se os valores forem iguais, o jogo dá empate.

    if (pontuacaoUser > pontuacaoComputer){
        console.log(`${nomeUsuario} ganhou!`)
        console.log(`Você é fraco, Computador. Te falta ódio.`)
    } else if (pontuacaoComputer > pontuacaoUser){
        console.log(`O computador ganhou!`)
        console.log(`Boa sorte na próxima, ${nomeUsuario}`)
    } else if (pontuacaoUser === pontuacaoComputer){
        console.log(`Empate!`)
    }

// Caso não queira jogar
} else{
    console.log(`O jogo acabou`)
}



