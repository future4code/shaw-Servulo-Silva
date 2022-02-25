// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(alt, larg) {
  // implemente sua lógica aqui
  alt = Number(prompt(`Digite a altura`))
  larg = Number(prompt(`Digite a largula`))
  let area = alt * larg

  console.log(area)
  return area
}



// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNasc) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt(`Digite o ano atual`))
  anoNasc = Number(prompt(`Digite o seu ano de nascimento`))
  let idade = anoAtual - anoNasc

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  
  return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt(`Digite seu nome`)
  idade = prompt(`Digite sua idade`)
  email = prompt(`Digite seu email`)

  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  
  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt(`Digite sua cor favorita 1`)
  cor2 = prompt(`Digite sua cor favorita 1`)
  cor3 = prompt(`Digite sua cor favorita 1`)

  let cores = [cor1, cor2, cor3]
  
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const novaStringM = string.toUpperCase()
  
  return novaStringM

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let numIngre = custo / valorIngresso

  return numIngre

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const testeTamanho = string1.length === string2.length

  return testeTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  let ultimo = array[array.length-1]
  

  array[array.length-1] = primeiro
  array[0] = ultimo

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  const testeIgual = string1 === string2

  return testeIgual

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt(`Digite o ano atual`))
  let anoNasc = Number(prompt(`Digite o ano de nascimento`))
  let anoEmit = Number(prompt(`Digite o ano que a carteira foi emitida`))

  let idade = anoAtual - anoNasc
  let tempoCart = anoAtual - anoEmit

  let situacao1 = idade <= 20 && tempoCart >= 5 
  let situacao2 = idade > 20 && idade <= 50 && tempoCart >= 10
  let situacao3 = idade >= 50 && tempoCart >= 15

  if (situacao1 === true) {
   console.log(true)

    } else if(situacao2 === true) {
    console.log(true)

      } else if(situacao3 === true) {
        console.log(true)
    
          }else {
        console.log(false)
  }
}

//}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}