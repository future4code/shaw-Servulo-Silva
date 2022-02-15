// Exercícios de interpretação de código
// 1)

// let a = 10
// let b = 10

// console.log(b)
// // vai retornar o valor b = 10
// b = 5
// console.log(a, b)
// // vai retornar: 10 5



// 2)

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)
// // vai retornar 10 10 10

// 3) 

// let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
// let salarioPorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${horasTrabalhadas/salarioPorDia} por hora`)

// // esse código faz o cálculo do salário de uma
// // pessoa por hora trabalhada.





// Exercícios de escrita de código

// 1)
// a)
let nome

// b)
let idade

// c)
console.log(typeof nome)
console.log(typeof idade)

// d) deu indefinido pq ainda nao foram declaradas as variáveis

// e)
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

// f)
console.log (nome, idade)
// foi impresso o nome e a idade 

// g)
console.log("Olá", nome, "você tem", idade, "anos de idade")


// 2)

let gostaPizza = prompt("Você gosta de Pizza?")
let gostaCoca = prompt("Você gosta de Coca-cola?")
let ehMaconheiro = prompt("Você é Maconheiro?")

console.log("Você gosta de Pizza? -", gostaPizza)
console.log("Você gosta de Coca-cola? -", gostaCoca)
console.log("Você é Maconheiro? -", ehMaconheiro)


// 3)

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c

c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10