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
  const altura = prompt("digite a altura")
  const largura = prompt("digite a largura")

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("digite ano atual")
const anoNascimento = prompt("digite ano de nascimento")
console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, IDADE, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("digite seu nome")
  IDADE = prompt ("digite sua idade")
  email = prompt("digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${IDADE} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt(`digite cor 1`)
  cor2 = prompt(`digite cor 2`)
  cor3 = prompt(`digite cor 3`)
  const cor = [cor1,cor2,cor3]
  console.log(cor)
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
  return array.shift()
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const itemUm = array.shift()
  const itemDois = array.pop()
  array.unshift(itemDois)
  array.push(itemUm)
  return array
  }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  // toUpperCase para deixar tudo maiusculo
  //toLowerCase para deixar tudo minusculo
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number (prompt(`qual ano atual?`))
  const anoNasci = Number (prompt(`qual seu ano de nascimento?`))
  const dataEmissao = Number (prompt(`qual data de emissão da sua RG?`))
const idade = anoAtual - anoNasci 
const tempoCart = anoAtual - dataEmissao
const cincoAnos = idade <= 20 && tempoCart >= 5
const dezAnos = idade <= 50 && idade > 20 && tempoCart >= 10
const quinzeAnos = idade >= 50 && tempoCart >= 15

console.log(cincoAnos || dezAnos || quinzeAnos)

  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade =prompt(`Você tem mais de 18 anos?`)
  const medio =prompt(`Você possui ensino médio completo?`)
  const horario =prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
  console.log(idade===`sim`&&medio===`sim`&&horario===`sim`)
}
