// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("First number: "));
  const largura = Number(prompt("Second number: "));

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const atualYear = Number(prompt("Write the atual year: "));
  const birthYear = Number(prompt("Write your birth year: "));

  console.log(atualYear - birthYear);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Write your name: ");
  const idade = Number(prompt("Write your age: "));
  const email = prompt("Write your email: ");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const color1 = prompt("First color: ");
  const color2 = prompt("Second color: ");
  const color3 = prompt("Third color: ");

  const colorsArray = [color1, color2, color3];
  
  console.log(colorsArray);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift();
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const first = array.shift();
  const last = array.pop();

  array.unshift(last);
  array.push(first);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const atualYear = Number(prompt("Write the atual year: "));
  const birthYear = Number(prompt("Write your birth year: "));
  const rgYear = Number(prompt("Write your RG expeditition year: "));

  let renovationRg;

  if(atualYear - birthYear <= 20) renovationRg = 5;
  else if(atualYear - birthYear > 20 && atualYear - birthYear <= 50) renovationRg = 10;
  else renovationRg = 15;

  console.log(atualYear - rgYear >= renovationRg);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const legalAge = prompt("Tem mais de 18 anos? (sim ou não) ");
  const education = prompt("Tem ensino médio completo? (sim ou não) ");
  const freeTime = prompt("Tem disponibilidade de horários? (sim ou não) ");

  console.log(legalAge === "sim" && education === "sim" && freeTime === "sim");
}