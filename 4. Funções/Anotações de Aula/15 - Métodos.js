//Sempre que uma funcionalidade é restrita a um objeto específico, ela pode ser um método. Método é uma função que pertence a um objeto.

// function apresentar(pessoa) {

//     if (pessoa.idade < 25) {
//         console.log(`Olá! sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
//     } else if (pessoa.idade < 60) {
//         console.log(`Olá! sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
//     } else {
//         console.log(`Olá! sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
//     }
// }


let jose = {
    nome: "José",
    idade: 32,
    profissao: "professor",
    altura: 1.73,

    apresentar: function () {
        const faixaEtaria = this.grupoEtario(this.idade);

        console.log(`Olá! sou ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e  ${this.profissao}.`)
    },

    grupoEtario: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade >= 25 || this.idade < 65) {
            return "adulto";
        } else {
            return "idoso";
        }
    }

};

jose.apresentar();
jose.grupoEtario();
