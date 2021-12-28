//O método slice() extrai uma parte de uma string e retorna como uma nova string, sem modificar a strinf original.

//Se o parâmetro "startIndex" for um número negativo, a extração será realizada de trás pra frente. Se o parâmetro for zero, o corte começa do index [0].

//Se o "startIndex" for maior ou igual ao tamanho da string (str.length), uma string vazia será retornada.

const localizacao = "SP-SP";
const estado = localizacao.slice(-2);

console.log(estado);

const endIndex = localizacao.indexOf("-");
let cidade = localizacao.slice(0, endIndex);

console.log(cidade);

if (estado === cidade) {
    console.log("Verifique o nome da cidade e tente novamente")
}




