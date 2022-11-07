// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
  
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Olá mundo!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
/* Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um 
retângulo e imprime no console a área do retângulo. */

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("digite a altura")
  const largura = prompt("digite a largura")
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
/* Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e 
imprima no console sua idade. */

function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual")
  const anoNascimento = prompt("digite seu ano de nascimento")
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
/* Escreva uma função que recebe o peso em kg e a altura em metros 
de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea). */

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
/* Escreva uma função que pede ao usuário seu nome, sua idade e 
seu email (nessa ordem), e imprime no console uma mensagem como a seguinte: */
/* *****Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.***** */

function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Alice")
  const idade = prompt(28)
  const email = prompt("alice@gmail.com")
  //const infoUsuario 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
/* Escreva uma função que pergunta ao usuário suas três cores 
favoritas e imprime no console um array que contenha essas três cores. */

function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const arrayCor1 = prompt("digite uma cor favorita")
  const arrayCor2 = prompt("digite uma segunda cor favorita")
  const arrayCor3 = prompt("digite uma terceira cor favorita")
  const arrayCorFav = [arrayCor1, arrayCor2, arrayCor3] 

  console.log(arrayCorFav)
  /* console.log(segundaCor)
  console.log(terceiraCor) */

}
  

// EXERCÍCIO 06
//Escreva uma função que recebe uma string e retorna ela em letra maiúscula.

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   return string.toUpperCase()

}

// EXERCÍCIO 07
/* Escreva uma função que recebe o custo de um espetáculo de teatro 
e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) 
e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo. */

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08 
/* Escreva uma função que recebe duas strings e retorna um booleano 
(true ou false) indicando se elas possuem o mesmo tamanho. */

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 //
  return array[0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const first = array.shift();
  const last = array.pop();

  array.unshift(last);
  array.push(first);

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
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNasc = Number(prompt("Digite seu ano de nascimento"))
  const anoEmissaoRG = Number(prompt("Digite o ano de emissão do seu RG"))

  const idade = anoAtual - anoNasc
  const renovacaoRG = anoAtual - anoEmissaoRG

  const resolucao = (idade <= 20 && renovacaoRG >= 5) ||
  ((20 <= idade && idade <= 50) && renovacaoRG >= 10) ||
  (idade > 50 && renovacaoRG >= 15)

  console.log(resolucao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos? (sim ou não)")
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? (sim ou não)")
  const dispHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou não)")

  maiorDeIdade.toLowerCase()
  ensinoMedioCompleto.toLowerCase()
  dispHorario.toLowerCase()

  const resolucao = (maiorDeIdade === "sim" && ensinoMedioCompleto === "sim" && dispHorario === "sim")

  console.log(resolucao)

}