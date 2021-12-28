const dadosDoCartao = {
    nome: "Cristina",
    idade: 32,
    produtosConsumidos: [
        {
            nome: "Macarronada",
            precoUnit: 1999,
            quantidadeConsumida: 1
        },

        {
            nome: "Guaraná Antártica",
            precoUnit: 350,
            quantidadeConsumida: 2
        },

        {
            nome: "Petit Gatêau",
            precoUnit: 1500,
            quantidadeConsumida: 1
        }
    ]
};

console.log(dadosDoCartao.nome);
console.log(dadosDoCartao.idade);

dadosDoCartao.idade = 33;

console.log(dadosDoCartao.idade);

console.log(dadosDoCartao.produtosConsumidos[0].nome);

console.log((dadosDoCartao.produtosConsumidos[2].precoUnit) / 100);

console.log(dadosDoCartao.produtosConsumidos[dadosDoCartao.produtosConsumidos.length - 1].precoUnit);
