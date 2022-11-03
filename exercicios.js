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
  let alt = prompt('Digite a altura:')
  let larg = prompt('Digite a largura:') 
  console.log(alt * larg) // retorta area do retangulo
}



// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual:')
  const anoNascimento = prompt('Qual seu ano de nascimento?') 
  console.log(anoAtual - anoNascimento) // retorna idade da pessoa
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura) //calculando imc
  const imcDecimais = imc.toFixed(2) // toFixed para reduzir as casas decimais
  return imcDecimais // retorna calculo com apenas 2 decimais apos a virgula
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual seu nome?')
  const idade = prompt('Qual sua idade?')
  const email = prompt('Qual seu email?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual sua cor favorita 1?')
  const cor2 = prompt('Qual sua cor favorita 2?')
  const cor3 = prompt('Qual sua cor favorita 3?')
  const coresFav = [cor1, cor2, cor3]
  console.log(coresFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase() // colocar a string em maiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length //verificando se possuem o mesmo tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
  return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoItem = array[array.length - 1]
  return ultimoItem //retorno o ultimo numero de um array
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0] // adiciona o primeiro indice em uma variavel
  const ultimoItem = array[array.length - 1] // adicionando o ultimo indice em uma variavel
  array.shift() //removendo o primeiro indice
  array.pop() //removendo o ultimo indice
  array.push(primeiroItem) //adicionando variavel do primeiro indice no final do array
  array.unshift(ultimoItem) // adicionando variavel do ultimo indice no inicio do array
  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase() // converte ambos para letras minusculas e faz a comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:')
  const anoNascimento = prompt('Qual seu ano de nascimento?')
  const anoIdentidade = prompt('Qual o ano de emissao da sua identidade')
  const condicao1 = ((anoAtual - anoNascimento) <= 20) && ((anoAtual - anoIdentidade) >= 5)
  const condicao2 = ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50) && ((anoAtual - anoIdentidade) >= 10)
  const condicao3 = ((anoAtual - anoNascimento) > 50) && ((anoAtual - anoIdentidade) >= 15)
  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano % 400 === 0 // resto da divisao por 400 tem que ser igual a 0
  const cond2 = ano % 4 === 0 && (ano % 400 === ano % 100)// resto da divisao tem que ser igual a 0 e o resto da divisao por 400 tem que ser diferente do resto da divisao por 100
  return cond1 || cond2 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt('Voce tem mais de 18 anos?\nResponda com \"sim\" ou \"nao\"') === "sim"
  const ensinoMedio = prompt('Voce possui ensino medio completo?\nResponda com \"sim\" ou \"nao\"') === "sim"
  const disponibilidade = prompt('Voce possui disponibilidade exclusiva durante os horarios do curso?\nResponda com \"sim\" ou \"nao\"') === "sim"
  console.log(maiorIdade && ensinoMedio && disponibilidade)
}