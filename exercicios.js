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
  const altura = prompt ("Digite um numero:")
  const largura = prompt ("Digite um segundo numero:")
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Digite o ano atual:")
  let anoNascimento = prompt("Digite o ano do seu nascimento:")
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

const imc = peso / (altura*altura)
return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt ("Qual o seu nome?:")
  let idade = prompt ("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor:")
const cor2 = prompt("Digite uma cor:")
const cor3 = prompt("Digite uma cor:")
const coresFavoritas = [cor1 , cor2, cor3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
const nometoUpperCase = string.toUpperCase()
return nometoUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 const quantIngresso = custo / valorIngresso
 return quantIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 const tamanho = string1.length===string2.length
 return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const arrayElem = array
const priElem = arrayElem[0]
return priElem 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 const nome = array
 return nome.pop()
 
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  console.log(array)
  const nb1 = array.shift()
  const nb2 = array.pop()
  console.log(nb1)
  console.log(nb2)

  array.unshift(nb2)
  array.push(nb1)
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
const anoAtual = Number(prompt("Qual o ano atual?"))
const anoNasciment = Number(prompt("Qual o ano do seu nascimento?"))
const anoIdentidade = Number(prompt("Em que ano foi emitida carteira de identidade?"))
const idade = anoAtual - anoNasciment
const validId = anoAtual - anoIdentidade
const resultado = (idade <= 20 && validId >= 5) ||
(idade > 20 && idade <= 50 && validId >=10) ||
(idade > 50 && validId >=15)
console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const ano400 = ano % 400 === 0
const ano4 = ano % 4 === 0 
const anoA = ano % 100 !==0
return ano400 || ano4 && anoA
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Você tem mais de 18 anos? Respostas apenas com sim ou não")
const escolaridade = prompt("Você possui ensino médio completo? Responda com sim ou não")
const disponibilidade = prompt("Você tem disponibilidade durante os horários do curso? Responda com sim ou não.")
const respostas = (idade == "sim") && (escolaridade == "sim") && (disponibilidade == "sim")
console.log(respostas);
}