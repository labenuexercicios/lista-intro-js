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
  let n1 = prompt()
  let n2 = prompt()
  console.log(n1*n2)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let ano = prompt()
  let anoNasc = prompt()
  console.log(ano - anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt()
  let idade = prompt()
  let email = prompt()
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor = []
  for(let i = 0; i < 3; i++){
    cor[i] = prompt()
  }
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
  return string1.length == string2.length

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
  let a = array[0]
  let b = array[array.length-1]
  array[array.length-1] = a
  array[0] = b
  
  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let ano = prompt()
  let anoNasc = prompt()
  let emissaoCnh = prompt()
  let idade = ano - anoNasc
  let vencimento = ano - emissaoCnh
  if (idade <= 20 && vencimento >= 5) {
    console.log(true)
  } else if (idade >= 20 && idade <= 50 && vencimento >=10) {
    console.log(true)
  } else if (idade > 50 && vencimento >= 15) {
    console.log(true)
  } else {
    console.log(false)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
    return true
  } else {
    return false
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt()
  let ensino = prompt()
  let disponibilidade = prompt()
  if (idade == "sim" && ensino == "sim" && disponibilidade == "sim") {
    console.log(true)
  } else {
    console.log(false)
  }
}