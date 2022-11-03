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
  const altura = prompt("qual a aultura?")
  const largura = prompt("qual a largura")
  const areaRetangulo = altura * largura

  console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("qual o ano atual?")
  const anoNascimento = prompt("em que ano vc nasceu")
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura ** 2)
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("digite seu nomw:")
  const idade = prompt("digite sua idade:")
  const email = prompt("digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("qual a sua cor favorita?")
  const cor2 = prompt("qual a sua segunda cor favorita?")
  const cor3 = prompt("qual a sua terceira cor favorita")

  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
retornaStringEmMaiuscula("oi")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

calculaIngressosEspetaculo(5000)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1 >= string2

}
checaStringsMesmoTamanho("rafa", "duda")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}
retornaPrimeiroElemento("jaca", "mamão", "acerola")

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}
retornaUltimoElemento("carambola", "margarida", "jabutecaba")

//EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroNome = array.shift()
  let segundoNome = array.pop()
  array.push(primeiroNome)
  array.unshift(segundoNome)

  return array
}

trocaPrimeiroEUltimo("casa", "arvore", "panela")

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

checaIgualdadeDesconsiderandoCase("Numb", "numb")
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const diaDeHoje = prompt("data atual")
  const nascimento = prompt("data de nascimento")
  const emissao = prompt("data de emissão do seu RG")
  const idade = diaDeHoje - nascimento
  const carteira = diaDeHoje - emissao
  const renovar = idade <= 20 && carteira >= 5 || idade >= 20 && idade <= 50 && carteira >= 10 || idade >= 50 && carteira >= 15


  console.log(renovar)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBisexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
  return anoBisexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const IdadeAluno = prompt("você tem mais de 18 anos?")
  const escolaridade = prompt("você possui ensino médio completo")
  const horario = prompt("você possui disponibilidade de estudadar durante o horario do curso?")

  const resposta = IdadeAluno === "sim" && escolaridade === "sim" && horario === "sim"

  console.log(resposta)

}

