


//Exercícios de interpretação de código




// Exercício 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a) No console serão impressos os seguintes números: 10 e 50

// b) Nada, pois não foi dado nenhum comando para o console.



// Exercício 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) A função irá converter todos os caracteres da string inserida em letras minúsculas 
// e depois irá buscar pela pela palavra "cenoura". 

// b) 
// i. true
// ii. true
// iii. true



// -------------------------------------------------------------------------------



//Exercícios de escrita de código



// Exercício 1

// a)

function apresentacao () {
    let nome = 'Sérvulo'
    let idade = 28
    let cidade = 'Natal'
    let job = 'Professor de Inglês' 

    let apresent = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${job}`)
return apresentacao
}
apresentacaoFinal = apresentacao()


// b)

function apresentacaoB (nome, idade, cidade, job) {
    

    let apresent = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${job}`
return apresent
}

let apresentacaoFinalB = apresentacaoB('Sérvulo', 28, 'Natal', 'Professor de Inglês')
console.log(apresentacaoFinalB)



// Exercício 2

// a)

function somaNumeros (n1, n2) {
    let soma = n1 + n2 

    return soma
}

let somaFinal1 = somaNumeros(1,2)
console.log(`A soma dos números é ${somaFinal1}`)

// b)

function numeroMaior (n1, n2) {
    let maior = (n1 >= n2)

    return maior
}

let maiorFinal = numeroMaior(7,2)
console.log(`O primeiro número é maior que o segundo? ${maiorFinal}`)

// c)

function numeroPar (n1) {
    let par = (n1 % 2 === 0)

    return par
}

let parFinal = numeroPar(8)
console.log(`O número é par? ${parFinal}`)


// d)

function maiusculo (nome) {
    let tamanhoNome = nome.length
    let nomeM = nome.toUpperCase()

    console.log(`O tamanho da string é ${tamanhoNome} e o nome em maiúsculo é ${nomeM}`)

}

maiusculo('sErvUlo')



// Exercício 3


let num1 = Number(prompt('Insira um número'))
let num2 = Number(prompt('Insira um número'))

function soma (n1, n2) {

    let som
    
    som = n1 + n2
    
    return som
    }

function diferenca (n1, n2) {

    let dif 
    
    dif = n1 - n2
    
    return dif
    }

function multiplic (n1, n2) {

    let mult
    
    mult = n1 * n2
    
    return mult
    }

function divisao (n1, n2) {

    let div
    
    div = n1 / n2
    
    return div
    }

    let somaFinal = soma(num1,num2)
    let diferencaFinal = diferenca(num1,num2)
    let multiplicFinal = multiplic(num1, num2)
    let divisaoFinal = divisao(num1, num2)

    console.log(`Números inderidos: ${num1} e ${num2}`)
    console.log(`Soma: ${somaFinal}`)
    console.log(`Diferença: ${diferencaFinal}`)
    console.log(`Multiplicação: ${multiplicFinal}`)
    console.log(`Divisão: ${divisaoFinal}`)
