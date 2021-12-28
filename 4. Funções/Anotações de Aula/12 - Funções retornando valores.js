function verificaMaioridade(nome, idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let ehMaiorDeIdade = verificaMaioridade("Erika", 17)

console.log(ehMaiorDeIdade)