// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
const mensagem = prompt('Digite uma mensagem!')
console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const lar = prompt("qual é a largura do triangulo?") 
const alt = prompt("qual é a altura do triangulo?")
const area = lar * alt
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = prompt("qual o ano atual?")
const anoNasc = prompt("qual ano vc nasceu?")
const Resultado = anoAtual - anoNasc
console.log(Resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const alt = altura
const pes = peso
const resul = pes / (alt*alt)
return resul
}
calculaIMC(75,1.7)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt("qual seu nome?")
const idade = prompt("qual sua idade?")
const email = prompt("qual seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor = prompt("qual é a sua primeira cor favorita?")
const core = prompt("qual é a sua segunda cor favorita?")
const cors = prompt("qual é a sua terceira cor favorita?")
const resp = [cor, core, cors]
console.log(resp)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
const stri = string.toUpperCase()
console.log(stri)
return stri
}
retornaPrimeiroElemento("")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const ope = custo / valorIngresso
console.log(ope)
return ope
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const comp = string1.length === string2.length
console.log(comp)
return comp
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

const arra = array
console.log(arra[0])
return arra[0]
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const arra = array.pop()
console.log(arra)
return arra
}

//shift() apaga o primeiro item e armazena na const 
//pop() apaga o ultimo item e armazena na const
//dessa forma o paramentro array esta sem o primeiro e ultimo item 
//unshift() add um item na primeira posição e push() add um item na ultima posição
//
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiro = array.shift()
const ultimo = array.pop()
array.unshift(ultimo)
array.push(primeiro)
console.log(array)
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
const verif = string1.toLowerCase() === string2.toLowerCase()
console.log(verif)
return verif
 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

const anoAtual = prompt("qual o ano atual?")
const anoNasc = prompt("qual é o seu ano de nascimento?")
const dataEmi = prompt("qual ano o seu RG foi emitido?")
const idade = anoAtual - anoNasc
const validade = anoAtual - dataEmi
const resultado = (idade <= 20 && validade >= 5 ) || 
                  (idade > 20 && idade <= 50 && validade >=10) ||
                  (idade > 50 && validade >= 15)
console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
const anoM400 = ano % 400 === 0
const anoM4 = ano % 4 === 0
const anoM100 = ano % 100 !== 0 
return anoM400 || anoM4 && anoM100
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const idade = prompt("Você tem mais de 18 anos?")
const ensino = prompt("Você possui ensino médio completo?")
const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
const resultado = (idade == "sim") && (ensino == "sim") && ( horario == "sim")
console.log(resultado)
}