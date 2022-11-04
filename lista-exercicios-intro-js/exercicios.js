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
  const altura = prompt()
  const largura = prompt()
  const area = altura*largura
  console.log(area)
  }
//calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt()
  const anoNasc = prompt()
  const idade = anoAtual - anoNasc
  console.log(idade)
}
//imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}
//calculaIMC(prompt(), prompt())

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Quantos anos você tem?")
  const eMail = prompt("Qual é o seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${eMail}.`)
}
//imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Quais as suas 3 cores favoritas?")
  const cor2 = prompt()
  const cor3 = prompt()
  const cores = [cor1, cor2, cor3]
  console.log(cores)
}
//imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const upper = string.toUpperCase()
  return upper
}
//retornaStringEmMaiuscula("Olá!")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}
//calculaIngressosEspetaculo(prompt("Custo total do espetáculo:"), prompt("Valor do ingresso:"))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
//checaStringsMesmoTamanho(prompt(), prompt())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
//retornaPrimeiroElemento(prompt(), prompt(), prompt())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const last = array[array.length-1]
  return last
}
//retornaUltimoElemento(prompt(), prompt(), prompt())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const first = array[0]
  const last = array[array.length - 1]
  array[0] = last
  array[array.length -1] = first
  return array
}
//trocaPrimeiroEUltimo(prompt(), prompt(), prompt(), prompt())

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string1New = string1.toLowerCase()
  const string2New = string2.toLowerCase()
  return string1New === string2New
}
//checaIgualdadeDesconsiderandoCase(prompt(), prompt())

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Ano atual")
  const anoNasc = prompt("Ano de nascimento")
  const emissao = prompt("Ano de emissão")

  const idade = anoAtual - anoNasc
  const tempEmiss = anoAtual - emissao

  const menos20 = idade <= 20
  const de20a50 = idade > 20 && idade <= 50
  const mais50 = idade > 50

  const renova20 = menos20 && tempEmiss >= 5
  const renova20a50 = de20a50 && tempEmiss >= 10
  const renova50 = mais50 && tempEmiss >=15
  const resultado = renova20 || renova20a50 || renova50
  console.log(resultado)
  }
//checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  const bissex = cond1 || cond2

  console.log(ano, cond1, cond2, bissex)

  return bissex
}
//checaAnoBissexto(prompt())

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt()
  const ensino = prompt()
  const disp = prompt()
 
  const maior = idade === "sim"
  const medCompl = ensino === "sim"
  const temDisp = disp === "sim"
  
  const podeLabenu = maior && medCompl && temDisp
  console.log(podeLabenu)  
}