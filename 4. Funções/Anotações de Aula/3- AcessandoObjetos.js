//Acessando objetos com notação de colchetes.

const pessoa = {
    nome: "Erika",
    idade: 25,
    altura: 1.64,
    temCNH: false,
    apelidos: ["Irina", "Ka"]
};

console.log(`Oi! Meu nome é ${pessoa["nome"]} e eu tenho ${pessoa["idade"]} anos. Minha altura é ${pessoa["altura"]}m. `)