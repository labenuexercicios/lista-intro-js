// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((itemAnterior, intemPosterior) => itemAnterior - intemPosterior)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const resultado =[]
    for ( let numero of array){
    if(numero %2===0)
        resultado.push(numero)
  }
  return resultado
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((numero)=>{
        return numero % 2 === 0 
     })

    const resultado = numerosPares.map((numero)=> {
        return numero * numero
    })
    return resultado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
  const maiorNumero = arrayOrdenado[arrayOrdenado.length -1]
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero, maiorDivisivelPorMenor, diferenca 
    if(num1 > num2){
    maiorNumero = num1
    maiorDivisivelPorMenor = num1 % num2 === 0
    diferenca= num1 - num2
   }else{
    maiorNumero = num2
    maiorDivisivelPorMenor = num2 % num1 === 0
    diferenca= num2 - num1
   }
   const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
   }
   return objeto
   
    /*const obj = {}
    let menorNumero
    if(num1 > num2) {
        obj.maiorNumero = num1
        menorNumero = num2
    }else {
        obj.maiorNumero = num2
        menorNumero = num1
    }
    obj.maiorDivisivelPorMenor = obj.maiorNumero % menorNumero === 0
    obj.diferenca = obj.maiorNumero - menorNumero
    return obj 
    */
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const resultado = []
    for(let i = 0; resultado.length < n; i+=2){
        resultado.push(i)
    }
    return resultado
   
   /* let numerosPares = []
   for (let i = 0; numerosPares.length < n; i++){
    if(i%2===0){
        numerosPares.push(i)
    }
   }
   return numerosPares
   */
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
   }else if ( ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return "Isósceles"
   }else {
    return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let newArray =[]
   array.sort((a, b)=> a - b)
   newArray.push(array.at(-2))
   newArray.push(array[1])
   return newArray
    
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let textoAtores = ""
   for (i in filme.atores){
    textoAtores += `${filme.atores[i]},`
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${textoAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const newObject = {...pessoa}
    newObject.nome = "ANÔNIMO"
    return newObject
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter((elemento)=> elemento.idade > 14 && elemento.idade < 60 && elemento.altura >= 1.5)
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((elemento)=> elemento.idade <=14 || elemento.idade >= 60 || elemento.altura < 1.5)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < array.length; i++){
        const retornaContasComSaldoAtualizado = array[i].compras.reduce((soma, valor) => soma = valor
        )
        array[i].saldoTotal -=retornaContasComSaldoAtualizado
        array[i].compras = []
    }
    return array
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function(a,b){
        x = a.nome
        y = b.nome
        return x == y? 0 : x > y? 1 : -1})
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   return consultas.sort((a,b)=> {
    console.log(new Date(a.dataDaConsulta.split("/").reverse()))
    x = new Date(a.dataDaConsulta.split("/").reverse()).getTime()
    y = new Date(b.dataDaConsulta.split("/").reverse()).getTime()
    return x - y

   })
}