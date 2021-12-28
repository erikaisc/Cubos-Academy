function grupoEtario(idade) {
    if (idade < 25) {
        return "jovem";
    } else if (idade >= 25 || idade < 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}

function apresentar(pessoa, idade) {
    const faixaEtaria = grupoEtario(pessoa.idade)

    console.log(`Olá! sou ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e  ${pessoa.profissao}.`)
}


let erika = {
    nome: "Erika",
    idade: 6,
    profissao: "estudante",
    altura: 1.20
};

apresentar(erika);


