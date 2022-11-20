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
  const altura = prompt("Digite um valor de altura:")
  const largura  = prompt("Digite um valor de largura:")
console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Digite o ano atual:")
const Nasc = prompt("Digite sua data de nascimento:")
console.log(anoAtual-Nasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui

const NOME = prompt("Digite seu nome:")
const IDADE = Number(prompt("Digite sua idade"))
const EMAIL = prompt("Digite o seu email:")
  
 console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite a sua 1ª cor favorita:")
const cor2 = prompt("DIigite a sua 2ª cor favorita:")
const cor3 = prompt("Digite a sua 3ª cor favorita:")

const coresfav = [cor1, cor2, cor3]
console.log(coresfav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculo = custo / valorIngresso
  return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const quantidade = string1.length===string2.length
return quantidade
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const elementos = array
  const elemento1 = array[0]
  return elemento1

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultElement = array
return ultElement.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const troca = array.shift()
const troca2 = array.pop() 

array.unshift(troca2)
array.push(troca)

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const comparacao = string1.toLowerCase() === string2.toLowerCase()
return comparacao 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const atualAno = Number(prompt("Digite o ano atual:"));
  const dataNasc = Number(prompt("Digite o ano em que você nasceu:"));
  const anoRg = Number(prompt("Digite a data quem que seu RG foi emitido:"));
  
  let renovar; 

  if (atualAno - dataNasc <= 20) renovar = 5;
    else if (atualAno - dataNasc >20 && atualAno - dataNasc <=50) renovar = 10;
    else renovar = 15;
    
console.log(atualAno - anoRg >= renovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const suaIdade = String(prompt("Você tem 18 anos ou mais?"));
  const ensinoMedio = String (prompt("Você possui Ensino médio completo?"));
  const disponibilidade = String(prompt("Você possui disponibilidade exclusiva durante os horários do curso que deseja?"));
  
  console.log(suaIdade ==="sim" && ensinoMedio ==="sim" && disponibilidade==="sim");
}
