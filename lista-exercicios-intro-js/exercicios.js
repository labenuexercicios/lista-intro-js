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
  const largura = prompt('Digite a largura: ')
  const altura = prompt('Digite a altura: ')

  const area = largura*altura

console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual: '))
  const anoNascimento = Number(prompt('Digite o ano de nascimento: '))

  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome: ')
  const idade = Number(prompt('Digite a sua idade: '))
  const email = prompt('Digite o seu e-mail: ')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt('Digite a sua primeira cor: ')
  const segundaCor = prompt('Digite a sua segunda cor: ')
  const terceiraCor = prompt('Digite a sua terceira cor: ')

  const tresCores = [primeiraCor, segundaCor, terceiraCor]
  console.log(tresCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}
retornaStringEmMaiuscula('oi')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosVendidos = custo / valorIngresso
  
  return ingressosVendidos
}
calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}
checaStringsMesmoTamanho('abc', 'def')

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]  

}
retornaPrimeiroElemento([1, 2, 3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}
retornaUltimoElemento([1, 2, 3])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array.length - 1
  const ultimoElemento = array[primeiroElemento]

  array [primeiroElemento] = array [0]
  array [0] = ultimoElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const funcaoUm = string1.toUpperCase() === string2.toUpperCase()

  return funcaoUm

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual: '))
  const anoNascimento = Number(prompt('Digite o ano de nascimento: '))
  const anoEmissaoCarteira = Number(prompt('Digite o ano de emissão da carteira de identidade: '))

  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - anoEmissaoCarteira

  const resultadoBoolean = (idade <= 20 && tempoRG >= 5) || (idade > 20 && idade < 50 && tempoRG >= 10) || (idade > 50 && tempoRG >= 15)

  console.log(resultadoBoolean)

                          
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const porQuatrocentos = (ano % 400)
  const porQuatro = (ano % 4)
  const porCem = (ano % 100)

  const anoBissexto = (porQuatrocentos === 0) || (porQuatro === 0) && (porCem !== 0)

  return anoBissexto


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const perguntaUm = prompt('Você tem mais de 18 anos?')
  const perguntaDois = prompt('Você possui ensino médio completo?')
  const perguntaTres = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  resultado = (perguntaUm + perguntaDois + perguntaTres) === "simsimsim"
  console.log(resultado)
}