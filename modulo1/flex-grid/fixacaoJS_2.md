```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let i = 0
  let total = 0
  while(i < arrayDeNumeros.length){
    if(numeroEscolhido == arrayDeNumeros[i]){
      total = total + 1
    } else{
      
    }
    i = i + 1
  }
  
    if (total>0){
        return `O número ${numeroEscolhido} aparece ${total}x`
}else{
  return "Número não encontrado"
}
}