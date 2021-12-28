//O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String. Quando fromIndex é específicado, a pesquisa é realizada de trás para frente. 

//Retorna -1 se o valor não for encontrado.

const palavra = "paralelepidedo";

console.log(palavra.lastIndexOf("e"));

console.log(palavra.lastIndexOf("e", 10)); //busca de trás pra frente, a partir da 10ª posição.

