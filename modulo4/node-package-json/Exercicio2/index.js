// Exercício 2
const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const calculadora = (num1, num2) =>{
   if(operacao == "add"){
      return num1 + num2
   } else if(operacao == "sub"){
      return num1 - num2
   } else if(operacao == "mult"){
      return num1 * num2
   } else if(operacao == "div"){
      return num1 / num2
   }
}
console.log(`Resposta: ${calculadora(num1, num2)}`)
