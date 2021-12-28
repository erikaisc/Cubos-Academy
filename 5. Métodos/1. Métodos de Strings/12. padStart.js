//Prrenche uma string, colocando text no início dela(várias vezes, se necessário) até que a string atinja o tamanho length.

//padStart(length, text)

const ultimos4dig = "2345";
const numCartao = ultimos4dig.padStart(19, "**** ");

console.log(numCartao);