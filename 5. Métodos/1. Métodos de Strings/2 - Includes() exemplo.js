//O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.

//Sintaxe: str.includes(searchString[,position]) -> Os colchetes são opcionais.

const frase = "Eu já vou para casa";

console.log(frase.includes("casa")); //Case sensitive, retornará true.
console.log(frase.includes("casa", 16)); // a partir da posição 16.