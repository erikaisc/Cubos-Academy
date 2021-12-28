//Transforma uma string num array de strings menores, separando-a em todos os lugares onde encontrar o argumento text.

const nomeCompleto = "Erika Irina de Sousa Cunha"
const array = nomeCompleto.split(" ");
const nomeDoMeio = array[1];

console.log(nomeDoMeio);

const textao = "Eu gosto. Eu vou pra praia. Pode parar tudo eu vou pra praia"

const frases = textao.split(".");
console.log(frases);

let novoArray = [];
for (let frase of frases) {
    novoArray.push(frase.trim())
}

console.log(novoArray);