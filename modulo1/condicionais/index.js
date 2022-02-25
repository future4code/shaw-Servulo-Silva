// Labnumero: 21815328
// Nome: Sérvulo Cristian de Carvalho Silva

// Exercícios de interpretação de código

// Exercício 1

// a) Está testando se o número é par ou ímpar
// b) Números pares
// c) Números ímpares


// Excercício 2

// a) Para mostrar ao consumidor o valor da fruta que ele deseja comprar
// b) O preço da fruta Maçã é R$ 2.25
// c) Iria imprimir que o preço da Pêra é R$ 5 pq nao foi finalizado o case, entao entrou no default.


// Exercício 3

// a) A primeira linha pede para u usuário entrar com um número
// b) para numero = 10, a mensagem será "Esse número passou no teste". Para -10, "Essa mensagem é secreta".
// c) Haverá um erro no ultimo console.log pq ele está tentando acessar uma variável local (que foi decladada dentro do if). Provavelmente, undefined. 




// --------------------------------------------------------------------









// Exercícios de escrita de código

// Exercício 1

let idade = Number(prompt(`Digite sua idade`))

if (idade >= 18){
    console.log(`Você pode dirigir`)
} else{
    console.log(`Você não pode dirigir`)
}





// Exercício 2

let turno = prompt(`Digite o turno que você estuda`)

if (turno === `M`){
    console.log(`Bom dia!`)
} else if (turno === `V`){
    console.log(`Boa tarde!`)
} else if (turno === 'N'){
    console.log(`Boa noite!`)
}





// Exercício 3

let turnoSwitch = prompt(`Digite o turno que você estuda`)

switch(turnoSwitch){
    case "M":
        console.log(`Bom dia!`)
        break;
    case "V":
        console.log(`Boa tarde!`)
        break;
    case "N":
        console.log(`Boa noite!`)
        break;

}





// Exercício 4

let genero = prompt(`Digite o gênero do filme`)
let valor = Number(prompt(`Digite o valor do ingresso`))


function vamosAssistir (gen, val) {
    if (gen === `fantasia` && val < 15){
    console.log(`Bom filme!`)
} else {
    console.log(`Escolha outro filme :(`)

}
}

vamosAssistir(genero, valor)







// -------------------------------------------------------






// Desafio


// Exercício 1

let generoD = prompt(`Digite o gênero do filme`)
let valorD = Number(prompt(`Digite o valor do ingresso`))


function vamosAssistir (gen, val) {
    if (gen === `fantasia` && val < 15){
    let lanche = prompt(`Qual lanche voce quer comprar?`)    
    console.log(`Bom filme! E aproveite o seu ${lanche}`)
} else {
    console.log(`Escolha outro filme :(`)

}
}

vamosAssistir(generoD, valorD)


// Exercício 2


let dados = {
    nome: prompt(`Digite seu nome`),
    tipoJogo: prompt(`Digite o tipo do jogo`),
    etapa: prompt(`Digite a etapa do jogo`),
    categoria: Number(prompt(`Digite a categoria`)),
    quantidade: Number(prompt(`Digite a quantidade de ingressos`))
}
dolar = 4.10

function compra (dados) {

    if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 1) {
        let valor = 1320
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 2){
        let valor = 880
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 3){
        let valor = 550
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 4){
        let valor = 220
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 1){
        let valor = 660
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 2){
        let valor = 440
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 3){
        let valor = 330
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 4){
        let valor = 170
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 1){
        let valor = 1980
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 2){
        let valor = 1320
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 3){
        let valor = 880
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `DO` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 4){
        let valor = 330
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 1) {
        let valor = 1320/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 2){
        let valor = 880/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 3){
        let valor = 550/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `SF` && dados.categoria === 4){
        let valor = 220/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Semifinal`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 1){
        let valor = 660/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 2){
        let valor = 440/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 3){
        let valor = 330/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `DT` && dados.categoria === 4){
        let valor = 170/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Decisão do 3º lugar`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 1){
        let valor = 1980/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 2){
        let valor = 1320/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 3){
        let valor = 880/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    } else if (dados.tipoJogo.toUpperCase() === `IN` && dados.etapa.toUpperCase() === `FI` && dados.categoria === 4){
        let valor = 330/dolar
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${dados.nome}`)
        console.log(`Tipo de jogo: Nacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${dados.categoria}`)
        console.log(`Quantidade de ingressos: ${dados.quantidade} ingressos`)
        console.log(`---Valores---`)
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ `, valor*dados.quantidade)
    }


}

compra(dados)