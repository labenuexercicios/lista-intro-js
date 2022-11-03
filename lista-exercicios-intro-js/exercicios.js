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
  const altura = prompt("Informe a altura do retangulo")
  const largura = prompt("Informe a largura do retangulo")

  console.log(altura * largura)
  
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Informe o ano atual")
  const anoNasc = prompt("Informe o ano de nascimento")
  console.log(anoAtual-anoNasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Nome")
  const idade = prompt("Idade")
  const email = prompt("Email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
   const arrayCores = []
   arrayCores[0] = prompt("Primeira cor")
   arrayCores[1] = prompt("Segunda cor")
   arrayCores[2] = prompt("Terceira cor")
   
   console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let str = string.toUpperCase()

  return(str)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const resultado = custo / valorIngresso

  return resultado
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return(array[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array[array.length - 1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElem = array[0]
  const ultimoElem = array[array.length - 1]
  let x 
  x = array[0]
  array[0] = ultimoElem
  array[array.length - 1] = x

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
  const anoAtual = prompt("Insira o ano atual")
  const anoNasc = prompt("Insira seu ano de nascimento")
  const anoCart = prompt("Ano de emissão da carteira")
  const idade = anoAtual - anoNasc
  const tempoCart = anoAtual - anoCart


  const ateVinte = idade <= 20 && tempoCart >= 5
  const vinteAcinqueta = idade > 20 && idade <= 50 && tempoCart >= 10
  const acimaCinquenta = idade > 50 && tempoCart >= 15
  
  const resultado = (ateVinte || vinteAcinqueta || acimaCinquenta)
  console.log(resultado)
 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const ver1 = ano % 400 === 0
  const ver2 = ano % 4 === 0 
  const ver3 = ano % 100 !== 0

  const resultado = (ver1 || ver2 && ver3)
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você é maior de 18 anos?")
  const grauEsc = prompt("Você possui ensino médio completo?")
  const disp = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const maiorIdade = idade === "sim"
  const escolaridade = grauEsc === "sim"
  const disponibilidade = disp === "sim"

  const resultado = maiorIdade && escolaridade && disponibilidade
  console.log(resultado)

}