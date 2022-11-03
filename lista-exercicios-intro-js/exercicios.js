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
  const altura = prompt('Defina uma altura')
  const largura = prompt('Agora defina uma largura')

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite em que ano estamos')
  const anoNascimento = prompt('Agora digite o ano em que você nasceu')

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  const idade = Number(prompt('Agora sua idade'))
  const email = prompt('Por último, seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Sua cor favorita?')
  const cor2 = prompt('Sua segunda cor favorita?')
  const cor3 = prompt('E sua terceira cor favorita?')

  console.log([cor1, cor2, cor3])
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

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const first = array.shift()
  const last = array.pop()

  array.push(first)
  array.unshift(last)

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
  const anoAtual = prompt('Em que ano estamos?')
  const anoNascimento = prompt('Em que ano você nasceu?')
  const emissaoIdentidade = prompt('Em que ano sua carteira foi emitida?')
  const idade = anoAtual - anoNascimento
  const tempoRg = anoAtual - emissaoIdentidade
  const condicaoMenorIgual20 = (idade <= 20) && (tempoRg >= 5)
  const condicaoEntre20e50 = (idade >= 20 && idade <= 50) && (tempoRg >= 10)
  const condicaoMaior50 = (idade > 50) && (tempoRg >= 15)

  console.log(condicaoMenorIgual20 || condicaoEntre20e50 || condicaoMaior50)



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano % 400 === 0;
  const cond2 = ano % 4 === 0 && !(ano % 100 === 0 && ano % 400 !== 0)

  return cond1 || cond2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 const idade = prompt("Você é maior de 18?")
 const ensinoMedio = prompt("Possui ensino médio?")
 const disponibilidade = prompt("Possui disponibilidade?")

 console.log((idade === "sim") && (ensinoMedio === "sim") && (disponibilidade === "sim"))

}