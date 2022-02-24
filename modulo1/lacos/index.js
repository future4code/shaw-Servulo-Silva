// Exercícios de interpretação de código

// Exercício 1

// Retorna o valor 10 pq faz a soma dos números antes de 5. 0 + 1 + 2 + 3 + 4 = 10

//Ecercício 2


// a) Vai imprimir todos os números maiores que 18: 19, 21, 23, 25, 27, 30.

// b) No momento eu não tenho esta resposta, mas irei procurá-la.



// Exercício 3

// Eu acredito que irá 4 linhas com asteriscos, começando com 1 asterisco até 4. Porém, nao compreendi bem o código.








// Exercícios de escrita de código



// Exercício 1

// let bichinhos = Number(prompt(`Quantos bichinhos você tem?`))
// let nome = []

// if (bichinhos === 0){
//     console.log(`Que pena! Você pode adotar um pet!`)

// } else{
//     let i = 0
//     while (i < bichinhos){
//         nome[i] = prompt(`Digite o nome`)
//         i++
//     }
// }

// console.log(nome)




// Exercício 2

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(`Letra a)`)
// a)

for(cada of array){
    console.log(cada)
}

// b)
console.log(`Letra b)`)

for(cada of array){
    console.log(cada / 10)
}

// c)
console.log(`Letra c)`)
let i = 0
let par = []
let a = 0

while(i < array.length){
if (array[i] % 2 === 0){
    par[a] = array[i]
    a++
    
}
i++

}
console.log(par)

// d)
console.log(`Letra d)`)
let b = 0
while(b < array.length){
    console.log(`O elemento do índex ${b} é ${array[b]}`)
    b++
}

// e)
console.log(`Letra e)`)
let c = 0
let d = 0
let maiorNum = 0

function maior (array){
    while(c < array.length){
        if(array[c] > maiorNum){
            maiorNum = array[c]
        }
        c++
    }
    return maiorNum
}

let menorNum = maior(array)

function menor (array){
    while(d < array.length){
        if(array[d] < menorNum){
            menorNum = array[d]
        }
        d++
    }
    return menorNum
}


console.log(`O maior número é ${maior(array)} e o menor é ${menor(array)}`)







// Desafio

let numSecreto = Number(prompt(`Digite um número`))
console.log(`Vamos jogar!`)
let s = 0
let chute = [Number(prompt(`Digite seu chute`))]
let tentativas = 0


while(chute[s] != numSecreto){
    
    if(chute[s] < numSecreto){
        console.log(`O número chutado foi ${chute[s]}`)
        console.log(`Errrrrrrrou, é maior`)
        
    } else if(chute[s] > numSecreto){
        console.log(`O número chutado foi ${chute[s]}`)
        console.log(`Errrrrrrrou, é menor`)

    }
    s = s + 1
    tentativas = s
    chute[s] = [Number(prompt(`Digite seu próximo chute`))]   
}

    console.log(`O número chutado foi ${chute[chute.length - 1]}`)
    console.log(`Acertou!!`)
    console.log(`O número de tentaticas foi: ${tentativas+1}`)




    





