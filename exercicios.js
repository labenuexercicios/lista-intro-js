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

    const altura = Number(prompt('Informe a altura do retângulo'))
    const largura = Number(prompt('Informe a largura do retângulo'))

    const area = altura * largura

    console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {

    const anoAtual = Number(prompt('Informe o ano atual'))
    const anoDeNascimento = Number(prompt('Em que ano você nasceu?'))

    const idade = anoAtual - anoDeNascimento

    console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

    const IMC = peso / (altura * altura)

    return IMC
}

calculaIMC(85, 1.8)
calculaIMC(70, 1.65)


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt('Informe seu nome')
    const idade = prompt('informe sua idade')
    const email = prompt('informe seu email')

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    const cor1 = prompt('Sua primeira cor favorita é?')
    const cor2 = prompt('Sua segunda cor favorita é?')
    const cor3 = prompt('Sua terceira cor favorita é?')

    const listaDeCoresFavoritas = [cor1, cor2, cor3]

    console.log(listaDeCoresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
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
    return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    const ultimaPosicao = array.length - 1
    return array[ultimaPosicao]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const copiaArray = array.slice()
    const ultimaPosicao = array.length - 1

    copiaArray[0] = array[ultimaPosicao]
    copiaArray[ultimaPosicao] = array[0]

    return copiaArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui

    return string1.toLowerCase() == string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

    const anoAtual = Number(prompt("Informe o ano atual"))
    const anoDeNascimento = Number(prompt("Informe o ano em que você nasceu"))
    const anoEmissaoCarteira = Number(prompt("informe o ano da emissão do RG"))

    const idadeUsuario = anoAtual - anoDeNascimento
    const idadeCarteira = anoAtual - anoEmissaoCarteira

    const avaliador = (idadeUsuario <= 20 && idadeCarteira >= 5) || ((20 <= idadeUsuario && idadeUsuario <= 50) && idadeCarteira >= 10) || (idadeUsuario > 50 && idadeCarteira >= 15)
    console.log(avaliador)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

    const avaliador = (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) || (ano % 4 === 0 && ano % 100 != 0)
    return avaliador
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    const maiorDeIdade = prompt("Você tem mais de 18 anos?")
    const ensinoMedio = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

    maiorDeIdade.toLocaleLowerCase()
    ensinoMedio.toLocaleLowerCase()
    disponibilidade.toLocaleLowerCase()
    const avaliador = (maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")

    console.log(avaliador)

}