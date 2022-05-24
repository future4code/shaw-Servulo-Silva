// Exercício 1

// a) utilizamos o process.argv

// b) Criar programa nome e idade
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Idade daqui 7 anos
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)



// Exercício 2
// const operacao = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// const calculadora = (num1, num2) =>{
//    if(operacao == "add"){
//       return num1 + num2
//    } else if(operacao == "sub"){
//       return num1 - num2
//    } else if(operacao == "mult"){
//       return num1 * num2
//    } else if(operacao == "div"){
//       return num1 / num2
//    }
// }
// console.log(`Resposta: ${calculadora(num1, num2)}`)

// Exercício 3

const tarefa = process.argv[2]

const tarefas = ['Varrer a casa', 'Estudar JavaScript']

const adicionaTarefa = tarefas.push(`${tarefa}`)

console.log(tarefas)