function apresentar(pessoa) {

    if (pessoa.idade < 25) {
        console.log(`Olá! sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade < 60) {
        console.log(`Olá! sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
    } else {
        console.log(`Olá! sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    }
}

let jose = {
    nome: "José",
    idade: 32,
    profissao: "professor",
    altura: 1.73
};

apresentar(jose);


let joao = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.40
}

apresentar(joao);