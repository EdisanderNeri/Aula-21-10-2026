// function digaOla () {
//     return "ola mundo"
// }
//  console.log (digaOla)

//  let mensagem = digaOla() 
// alert (mensagem)



//  function pular () {
//     return "\n"
//  }
//  console.log (`${digaOla} ${pular()} como? ${pular()} podemos adminstirar nosso dinheiro de melhor forma? `)
// function multiply(a, b) {
//   return a * b;
// }

// let n1 = Number(prompt("digite o primeiro numero"))
// let n2 = Number(prompt("digite o Segundo numero"))

// let resultado = multiply(n1, n2) 

// console.log(resultado.toLocaleString(`pt-BR`))


// function espaco () {
//     return "   "
// }

// console.log (`porque nessa${espaco()}vida todos somos refens do governo?`)

function verificarPar (numero) {
    if (numero % 2 === 0) {
        return("Numero e par")
    }
    else {
        return("Numero e impar")
    }     
}
let numero = Number(prompt("Digite um numero pra saber se e pa ou impar"))

let resultado = verificarPar(numero)
alert (`O seu número é: ${ resultado }`)

// let numero = prompt("Digite o número do funcionário:");
// let valorSalario = parseFloat(prompt("Digite o salário:"));

// let salarioEmReais = valorSalario.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
// });

// alert(`Funcionário nº ${numero} ganha ${salarioEmReais}`);
