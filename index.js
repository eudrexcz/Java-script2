let nome = prompt("Digite o seu nome: ")

let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))

let media = (nota1 + nota2+ nota3) / 3;

// let lado = Number(prompt('Digite o lado do quadrado em metros: '))

// let area_quadrado = lado ** 2;

// console.log(`A área do quadrado é: ${area_quadrado.toFixed(2)} metros.`);

// let numero1 = Number(prompt('Digite um número: '))
// let numero2 = Number(prompt('Digite mais um número: '))

// if (numero1 > numero2) {
//     console.log(`O número 1 ${numero1} é maior que o número 2 ${numero2}`);
// } else if (numero2 > numero1) {
//     console.log(`O número 2 ${numero2} é maior que o número 1 ${numero1}`);
// } else {
//     console.log('Os dois números são iguais!')
// }

if (media >= 8) {
    console.log(`Olá, ${nome}! Sua média é: ${media} e você está Aprovado! `);
} else if (media >= 4) {
    console.log(`Olá, ${nome}! Sua média é: ${media} e você está de Recuperação!`);
} else {
    console.log(`Olá, ${nome}! Sua média é: ${media} e você está Reprovado`);
}