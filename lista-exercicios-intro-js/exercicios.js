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
  const altura = prompt(`digite a altura do retangulo.`)
  const largura = prompt(`digite a largura do retangulo.`) 

  console.log(altura * largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anascimento = prompt(`Digite seu ano de nascimento.`)
  const aatual = prompt(`Em que ano estamos?`)
  
  console.log(anascimento - aatual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt(`Digite seu nome`)
  const idade = prompt(`Digite sua idade`)
  const email = prompt(`Digite seu email`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`Digite uma de suas cores favoritas`)
  const cor2 = prompt(`Digite outra de suas cores favoritas`)
  const cor3 = prompt(`Digite outra cor`)
  const cores = [cor1 , cor2 , cor3]
  console.log(cores)

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
  return (string1.length == string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, from, to) {
  // implemente sua lógica aqui
  let primeiro = array.shift()
  let ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
     return string1.toUpperCase([0] , [3]) === string2.toUpperCase([0] , [3])

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt(`Em que ano estamos?`)
  const anoNascimento = prompt(`Em que ano você nasceu?`)
  const emissaoRg = prompt(`Em que ano seu Rg foi emitido?`)
  const idade = anoAtual - anoNascimento
  const tempoDeEmissao = anoAtual - emissaoRg
  
  const validadeMenor20Anos = idade <= 20 && tempoDeEmissao >= 5
  const validade20E50Anos = idade > 20 && idade <= 50 &&tempoDeEmissao >= 10
  const validade50E60Anos = idade > 50 && idade <= 60 &&tempoDeEmissao >= 15
  
  const renovacaoDoRg = validadeMenor20Anos || validade20E50Anos || validade50E60Anos

  console.log(renovacaoDoRg)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto = ano % 4 === 0 && ano % 100 !== 0 || (ano % 400 === 0)

 return bissexto 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Voce tem mais de 18 anos?")
  const medio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")


  console.log(idade === "sim" && medio ==="sim" && disponibilidade === "sim")

}