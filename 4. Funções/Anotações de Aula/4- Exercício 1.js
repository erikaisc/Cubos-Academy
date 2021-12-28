const pessoa = {
    nome: "Erika",
    idade: 25,
    altura: 1.64,
    temCNH: false,
    apelidos: ["Irina", "Espirro de Mosca", "Tufo Cafão", "Animal"]
};

let textoCNH;
if (pessoa.temCNH) {
    textoCNH = "tenho CNH";
} else {
    textoCNH = "não tenho CNH";
}

console.log(`Oi! Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos. Minha altura é ${pessoa.altura} e ${textoCNH}.
Meus apelidos são:`);

for (let apelido of pessoa.apelidos) {
    console.log(`-${apelido}`);
}


// - ${pessoa.apelidos[0]} 
// - ${pessoa.apelidos[1]}`);