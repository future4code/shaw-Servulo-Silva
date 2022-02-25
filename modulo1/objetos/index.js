// Labenumero: 21815328
// Nome: Sérvulo Crisrian de Carvalho Silva



// Exercícios de interpretação de código

// Exercício 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


// a) 1) "Matheus Nachtergaele" /  2) "Virginia Cavendish" /  3) "Globo 14h"


// Exercício 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)
// 1) Juca, 3, SRD
// 2) Juba, 3, SRD
// 3) Jubo, 3, SRD

// b) Isto é a função SPREAD que pode tanto adicionar itens quando modificar os já existentes


// Exercício 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) o primeiro irá retornar false / o segundo irá retornar undefined

// b) isso ocorre pq a propriedade backender está definida dentro do objeto, enquanto altura nao está.





//--------------------------------------------------------





// Exercícios de escrita de código



// Exercício 1

// a)

// Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
// apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e 
// imprime uma mensagem no modelo abaixo: 

const pessoa1 = {
    nome: "Sérvulo", 
    apelidos: ["Vovô", "Cris", "Servulinho"]
 }
 
 function imprimePessoa(pessoa) {
     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)
 }
 
 imprimePessoa(pessoa1)

// b)

const pessoa2 = {
    ...pessoa1,
    apelidos: ["Vovozinho", "Crizin", "Servulindo"]

}

imprimePessoa(pessoa2)





// Exercício 2

const p1 = {
	nome: "Rani", 
    idade: 19, 
	profissao: "Back-end developer"
}
const p2 = {
    nome: "Natã", 
    idade: 20, 
	profissao: "Front-end developer"
}



function recebendoNomes(pessoa) {
  pessoa = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]



  return pessoa
}

console.log(recebendoNomes(p1))
console.log(recebendoNomes(p2))




// Exercício 3

// a)

let carrinho = []

// // b)

let fruta1 =  {
        nome: `banana`,
        disponibilidade: true
    }
let fruta2 = {
        nome: `abacaxi`,
        disponibilidade: true
    }
let fruta3 = {
        nome: `morango`,
        disponibilidade: true
    }

// // c)

function funcaoFruta(fru) {
    carrinho.push(fru)
}
funcaoFruta(fruta1)
funcaoFruta(fruta2)
funcaoFruta(fruta3)


console.log(carrinho)
