
// Exercícios de interpretação de código


// 1)

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// // False


// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// // False


// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// // True


// console.log("d. ", typeof resultado)
// // Boolean - true or false


// 2)

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// O erro é que a soma será uma string que, basicamente
// juntará os números digitados, sem os somar.
// Para o código funcionar como se espera, deve-se fazer
// a conversão de string para Number

// 3)
// Deve-se utilizar o comando Number()

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)




//-------------------------------------------------





// Exercícios de escrita de código


// 1)

//Pergunte a idade
//Perguntar a idade do melhor amigo
//Imprimir mensagem: Sua idade é maior do que a do seu melhor amigo?
//Imprimir diferença de idade

let idade = Number(prompt("Digite sua idade"))
let idadeBestFriend = Number(prompt("Digite a idade do BF"))

console.log("Sua idade é maior que a idade do seu BF?", idade > idadeBestFriend)
console.log("Diferença de idade:", idade - idadeBestFriend)


// 2)

let numeroPar = Number(prompt("Digite um número par"))

console.log(numeroPar % 2)
// Sempre que o número for par, o resto da divisão por 2 será 0
// Se o número for ímpar, o resto da divisão será diferente de 0

// 3)

let idadeFutura = Number(prompt("Digite sua idade em 10 anos"))

console.log("Sua idade em meses: ", idadeFutura * 12)
console.log("Sua idade em dias: ", idadeFutura * 365)
console.log("Sua idade em horas: ", idadeFutura * 365 * 24)

// 4)

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo??", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)

