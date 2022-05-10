

// Exercícios de interpretação de código


  // Exercício 1

  // Deve imprimir todos os objetos da array mostrando seu índex e repetindo as arrays. Porém, ainda nao 
  // entendo quantas vezes fará isso e o pq.

// Exercício 2

// Deve imprimir somente os nomes.

// Exercício 3

// Deve imprimir o nome e apelido das pessoas que nao tem o apelido "Chijo", ou seja, as outras duas pessoas.





// Exercícios de escrita de código

// Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a) apenas os nomes


 let nomePets = []

 nomePets = pets.map((pet) => {
     return pet.nome
 })

 console.log(nomePets)

 // b) apenas salsicha

 let salsichas = []

 salsichas = pets.filter((salsicha) => {
     return salsicha.raca === "Salsicha"
 })

 console.log(salsichas)


 // c)

 let descontos = []

 descontos = pets.filter((desconto) => {
     return desconto.raca === "Poodle"
 })

 descontosNome = descontos.map((desconto)=> {
    //  return desconto.nome
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${desconto.nome}!`

 })
 console.log(descontosNome)



 // Exercício 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 
 // a) apenas o nome dos ítens
 
 let apenasNomes = []

 apenasNomes = produtos.map((apenasNome) => {
     return apenasNome.nome
 })

 console.log(apenasNomes)


 // b)

 let nomePrecos = []

 nomePrecos = produtos.map((nomePreco) => {
     return {
         nome: nomePreco.nome,
         preco: (nomePreco.preco*0.95).toFixed(2)
     }
 })

 console.log(nomePrecos)

 // c) apenas bebidas


let bebidas = produtos.filter((bebida) => {
     return bebida.categoria === "Bebidas"
 })

 console.log(bebidas)


 // d) encontra Ype

 let encontraYpe = produtos.filter((ype) => {
     if (ype.nome.includes("Ypê")){
         return ype.nome
     }
 })

 console.log(encontraYpe)

// e) ype novamente

let apenasYpe = produtos.filter((ype) => {
    if (ype.nome.includes("Ypê")){
        return ype.nome
    }
})

let mostraYpe = apenasYpe.map((ype) => {
    return `Compre ${ype.nome} por ${ype.preco}`
})

console.log(mostraYpe)

