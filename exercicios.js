// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
soma(1, 2)
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
  const areaAltura = prompt(`qual a altura?`)
  const areaLargura = prompt(`qual a largura?`)
  const areaRetangulo = areaAltura * areaLargura
  console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt(`Qual é o ano atual?`)
  const anoNascimento = prompt(`Qual seu ano de nascimento?`)
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt(`qual seu nome?`)
  const idadeUsuario = prompt(`qual sua idade?`)
  const emailUsuario = prompt(`qual seu email?`)
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("diga uma cor")
  const cor2 = prompt("diga outra cor")
  const cor3 = prompt("diga outra cor")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()

}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const primeiro = string1
  const segundo = string2
  const teste = segundo.length == primeiro.length 
  return teste
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array1 = array
  return array1[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const array1 = array
  array1.reverse()
  return array1[0]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array.shift()
  const ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const primeiro = string1.toLowerCase()
  const segundo = string2.toLowerCase()
  const verificacao = primeiro == segundo
  return verificacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("qual o ano atual?")
  const anoNascimento = prompt("qual o ano do seu nascimento?")
  const anoId = prompt("qual o ano que a sua identidade foi emitida?")
  const idade = anoAtual - anoNascimento
  const idadeId = anoAtual - anoId
  let renovacao1 = idade <= 20 && idadeId >= 5 
  let renovacao2 = idade > 20 && idade <= 50 && idadeId >= 10
  let renovacao3 = idade > 50 && idadeId >= 15
  console.log(renovacao1 || renovacao2 || renovacao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoVar1 = ano % 400 == 0
  const anoVar2 = ano % 4 == 0 && ano % 100 != 0
  return anoVar1 || anoVar2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade18 = prompt(`oi?`) == `sim`
  const ensinoMedio = prompt(`tudo bem?`) == `sim`
  const disponibilidade = prompt(`lulala?`) == `sim`
  console.log(idade18 && ensinoMedio && disponibilidade)

}