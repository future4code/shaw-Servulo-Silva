// Exercícios de interpretação de código

// Exercício 1

// let array
// console.log('a. ', array)
// // undefined - variável indefinida


// array = null
// console.log('b. ', array)
// //null - nulo


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //11 - possui 11 elementos


// let i = 0
// console.log('d. ', array[i])
// //3 - o elemento na posição zero


// array[i+1] = 19
// console.log('e. ', array)
// //[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// const valor = array[i+6]
// console.log('f. ', valor)
// //9



// Exercício 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Irá imprimir a seguinte frase:
//SUBI NUM ÔNIBUS EM MIRROCOS - 27




//--------------------------------------------


// Exercícios de escrita de código


// Exercício 1

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)


// //Exercício 2

const comidasFav = ["pizza", "hamburger", "batata", "lasanha", "churrasco"]

console.log(comidasFav)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFav[0])
console.log(comidasFav[1])
console.log(comidasFav[2])
console.log(comidasFav[3])
console.log(comidasFav[4])

const suaFav = prompt("Digite sua comida favorita")

let i = 0
comidasFav[i+1] = suaFav

console.log(comidasFav)



// // Exercício 3

let listaDeTarefas = []

listaDeTarefas = [prompt("Digite a tarefa 1: "), prompt("Digite a tarefa 2: "), prompt("Digite a tarefa 3: ")]

console.log(listaDeTarefas)

let tarefaFeita = prompt("Ditite o índice da tarefa feita")

listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas)





// Desafio




// Exercício 2


// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// //let abacaxi = prompt("Digite a fruta")

// console.log(frutas.findIndex(index, "Abacaxi"))

//console.log(frutas[0, 1, 2, 3, 4].includes(abacaxi) === true)
// console.log(frutas[1].includes(abacaxi))
// console.log(frutas[2].includes(abacaxi))
// console.log(frutas[3].includes(abacaxi))
// console.log(frutas[4].includes(abacaxi))



