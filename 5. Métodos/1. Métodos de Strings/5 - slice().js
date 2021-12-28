//O método slice() extrai uma parte de uma string e retorna como uma nova string, sem modificar a strinf original.

//Se o parâmetro "startIndex" for um número negativo, a extração será realizada de trás pra frente. Se o parâmetro for zero, o corte começa do index [0].

//Se o "startIndex" for maior ou igual ao tamanho da string (str.length), uma string vazia será retornada.

const nome = "Otorrinolaringologia"

console.log(nome.slice(2, 5)); //Corte iniciará no index 2 e irá até o 5 (6ª posição).

console.log(nome.slice(5)); //Corte irá ignorar as 5 primeiras posições e começará no index 6.

const localizacao = "salvador-ba";
const estado = localizacao.slice(-2);

console.log(estado);

const cidade = localizacao.slice(0, 8);

console.log(cidade);

