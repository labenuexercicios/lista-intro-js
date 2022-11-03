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
  const altura = Number(prompt("Qual é a altura do retângulo?"))
  const largura = Number(prompt("Qual é a largura do retângulo?"))
  const area = altura*largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNasc = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual-anoNasc

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const cores = [cor1, cor2, cor3]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let last = array.pop()
  let first = array.shift()
  array.push(first)
  array.unshift(last)

  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNasc = Number(prompt("Em que ano você nasceu?"))
  const anoIdent = Number(prompt("Em que ano sua identidade foi emitida?"))
  const idade = anoAtual-anoNasc
  const tempIdent = anoAtual-anoIdent
  const condicaoMenorIgual20 = (idade<=20) && (tempIdent>=5)
  const condicaoEntre20e50 = (idade>=20 && idade<=50) && (tempIdent>=10)
  const condicaoMaior50 = (idade>50) && (tempIdent>=15)

  console.log(condicaoMenorIgual20 || condicaoEntre20e50 || condicaoMaior50)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1 = ano%400 === 0;
  const cond2 = ano%4 === 0 && !(ano%100 === 0 && ano%400 !== 0)

  return cond1 || cond2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você é maior de 18?")
  const eM = prompt("Possui ensino médio completo?")
  const disp = prompt("Possui disponibilidade?")

  console.log((idade == "sim") && (eM == "sim") && (disp == "sim"))


}