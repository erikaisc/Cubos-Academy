//Faça um programa que altere uma sring com números separados por ponto para o formato que estamos acostumados no Brasil (com vírgula). Por ex: 97.50 deverá ser transformado em 97,50.

const valorDaCompra = "99.87";

const valorFinal = valorDaCompra.replace(".", ",");

console.log(valorFinal);