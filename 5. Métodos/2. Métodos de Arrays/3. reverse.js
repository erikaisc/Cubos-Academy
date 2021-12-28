//reverse();
//inverte os itens de um array. Os últimos passarão a ser os primeiros.

const opcoes = ["Eu", "Você", "e", "o Zoboomafu"];
const resultado = opcoes.reverse();
console.log(resultado);

//Importante = O array resultado retorna uma referência ao array opções. Não faz uma cópia do array!

console.log(opcoes);