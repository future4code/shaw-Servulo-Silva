// // Nao finalizado





// // Nao finalizado





// // Nao finalizado





// // Blackjack ou 21

// // Inicia mostrando uma mensagem de bem-vindo

// console.log(`Bem-vindo(a) ao jogo de Blackjack`)

// // Pergunta o nome do usuário só para dar um toque mais pessoal
// let nomeUsuario = prompt(`Digite o seu primeiro nome`)

// // Pergunta se quer iniciar uma nova roda

// let querJogar = confirm(`Bem-vindo(a) ao jogo de Blackjack` + `\n`+ 
// `Quer iniciar uma nova rodada?`)

// // Declarando a carta de cada jogador invocando a função compraCarta() que está no arquivo "naoMexa". Dessa forma, a carta sorteada será mostrada aqui. 
// let card1User = comprarCarta()
// let card2User = comprarCarta()
// let card3User = comprarCarta()
// let card4User = comprarCarta()

// let card1Computer = comprarCarta()
// let card2Computer = comprarCarta()
// let card3Computer = comprarCarta()
// let card4Computer = comprarCarta()

// // Declarando o valor da pontuação com a soma dos valores de cada carta
// // comprarCarta.valor retorna o valor/pontuação da carta sorteada

// let pontuacaoUser = card1User.valor + card2User.valor
// let pontuacaoComputer = card1Computer.valor + card2Computer.valor

// // Início da lógica - o código irá sortear 2 cartas para o usuário + 2 cartas para o computador. Após isto, irá somar os valores para cada competidor e avaliar quem ganhou o jogo com base na pontuação. Após isso, deve imprimir no console as cartas e seus valores assim como ganhou o jogo. 

// // Caso queira jogar
// if (querJogar === true){

//    if((card1User.texto == `A` && card2User.texto == `A`) || (card1Computer.texto == `A` && card2Computer.texto == `A`)){
//       let newCard1Used = comprarCarta()
//       let newCard2Used = comprarCarta()
//       let newCard1Computer = comprarCarta()
//       let newCard2Computer = comprarCarta()
//       card1User = newCard1Used
//       card2User = newCard2Used
//       card1Computer = newCard1Computer
//       card2Computer = newCard2Computer

//    } else{

//     // Agora um console.log na tela sobre as cartas e pontuações de cada usuário e o resultado do jogo, informando quem ganhou ou se deu empate.
//     // comprarCarta.texto retorna o numero e naipe da carta sorteada
    
//     let primeirasCartas = confirm(`As suas cartas são ${card1User.texto} ${card2User.texto}. A carta revelada pelo Computador é ${card1Computer.texto}.` + `\n`+ 
//     `Deseja comprar mais uma carta?`)

//       if(primeirasCartas){
//          let primeirasCartas = confirm(`As suas cartas são ${card1User.texto} ${card2User.texto}. A carta revelada pelo Computador é ${card1Computer.texto}.` + `\n`+ 
//     `Deseja comprar mais uma carta?`)

//       }



//     // Lógica do ganhador. Quem tiver o valor maior, ganha. E se os valores forem iguais, o jogo dá empate.

//     if (pontuacaoUser > pontuacaoComputer){
//         console.log(`${nomeUsuario} ganhou!`)
//         console.log(`Boa sorte na próxima, Computador`)
//     } else if (pontuacaoComputer > pontuacaoUser){
//         console.log(`O computador ganhou!`)
//         console.log(`Boa sorte na próxima, ${nomeUsuario}`)
//     } else if (pontuacaoUser === pontuacaoComputer){
//         console.log(`Empate!`)
//     }
//    }
   
// // Caso não queira jogar
// } else{
//     console.log(`O jogo acabou`)
// }






