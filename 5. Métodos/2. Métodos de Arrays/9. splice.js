//Altera o conteúdo de uma lista, removendo zero ou mais itens de um array num determinado índice. Opcionalmente, pode-se inserir um ou mais itens no local onde outros foram deletados.

const lista = ["a", "b", "c", "d", "e"]
lista.splice(1, 2, "f");
console.log(lista);