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
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Qual a altura do retângulo?")
  const largura = prompt("Qual a largura do retângulo?")
  const calculo = altura * largura
  console.log(calculo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const imc = peso / (altura * altura)
 console.log(imc)
 return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual o seu nome ?")
const idade = Number(prompt("Qual a sua idade?"))
const email = prompt("Qual o seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua 1° cor favorita?")
  const cor2 = prompt("Qual a 2° cor favorita")
  const cor3 = prompt("Qual a sua 3° cor favorita?")
const favoritas = [cor1, cor2, cor3]
console.log(favoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const nova = string.toUpperCase()
  console.log(nova)
  return nova

}
retornaStringEmMaiuscula("")


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const precisaVender = custo / valorIngresso
  console.log(precisaVender)
  return precisaVender

}
calculaIngressosEspetaculo()
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógisca aqui

  const tamanho = string1.length === string2.length
  console.log(tamanho)
  return tamanho
  }


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const num = array
console.log(num[0])
return num[0]
}
retornaPrimeiroElemento()
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  console.log(array)
  return array.pop()

}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
console.log(array)
const primeiro = array.shift()
const ultimo = array.pop()
console.log(primeiro)
console.log(ultimo)

array.unshift(ultimo)
array.push(primeiro)
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascim = Number(prompt("Em qual ano você nasceu"))
  const anoId = Number(prompt("Qual a emissão do seu Rg?"))
  const idade = anoAtual - anoNascim
  const validId = anoAtual - anoId
  const resultado = (idade <= 20 &&  validId >= 5 ) ||
                    (idade > 20 && idade <= 50 && validId >=10) ||
                    (idade > 50 && validId >=15 )
console.log(resultado)
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const mult400 = ano % 400 === 0
const mult4 = ano % 4 === 0
const multN = ano % 100 !== 0
return mult400 || mult4 && multN
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Você tem mais de 18 anos? OBS: Responda com Sim ou Não")
const escolaridade = prompt("Você possui ensino médio completo? OBS: responda com Sim ou Não")
const disponivel =  prompt("Você possui disponibilidade exclusiva durante os horários do curso? OBS: Responda com Sim ou Não")
const respostas = (idade == "sim") && (escolaridade == "sim") && (disponivel == "sim")
console.log(respostas)

}