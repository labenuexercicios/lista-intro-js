// // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
function soma(num1, num2) {  
  return num1 + num2
}

// // EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
function calculaAreaRetangulo() {
  const largura = prompt('Digite a largura')
  const altura = prompt('Digite a largura')
  const result = largura * altura
  console.log(result)

}

// // EXERCÍCIO 02
function imprimeIdade() {
  const ano = prompt('Digite uma mensagem!')
  const dataNasc = prompt('Digite uma mensagem!')
  const idade = ano - dataNasc
  console.log(idade)

}

// // EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}

// // EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
    const nome = prompt("Digite seu nome")
    const idade = prompt("Digite seu idade")
    const email = prompt("Digite seu email")
    
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Cor favorita 1")
  const cor2 = prompt("Cor favorita 2")
  const cor3 = prompt("Cor favorita 3")
  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)

}

// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}

// // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
   return custo / valorIngresso 
}

// // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    return string1.length === string2.length
}

// // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    return array[0]

}

// // EXERCÍCIO 10
function retornaUltimoElemento(array) {
    return array[array.length - 1]

}

// // EXERCÍCIO 11
 function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length - 1]  
  array[0] = ultimo
  array[array.length - 1] = primeiro  
  return array
  

 }

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   return string1.toUpperCase() === string2.toUpperCase()

}

// // EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Digite o ano atual: '))
  const anoNascimento = Number(prompt('Digite o ano de nascimento: '))
  const anoEmissaoCarteira = Number(prompt('Digite o ano de emissão da carteira de identidade: '))
  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - anoEmissaoCarteira

  const result = (idade <= 20 && tempoRG >= 5) || (idade > 20 && idade < 50 && tempoRG >= 10) || (idade > 50 && tempoRG >= 15)

  console.log(result)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    const anoBisexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
    return anoBisexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui ensino médio completo?')
  const horario  = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const resultado = idade ==='sim' && escolaridade ==='sim' && horario ==='sim'
  console.log(resultado)

}


