// Exercício 1

// a) utilizamos o process.argv

// b) Criar programa nome e idade
const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Idade daqui 7 anos
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)

