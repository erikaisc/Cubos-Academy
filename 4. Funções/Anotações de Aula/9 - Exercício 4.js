const comanda = {
    nomeCliente: "Cristina",
    idade: 32,
    produtos: [
        {
            nome: "Macarronada",
            precoUnit: 1999,
            quantidade: 1
        },

        {
            nome: "Guaraná Antártica",
            precoUnit: 350,
            quantidade: 2
        },

        {
            nome: "Petit Gatêau",
            precoUnit: 1500,
            quantidade: 1
        }
    ]
};

let totalAPagar = 0;
for (let item of comanda.produtos) {
    totalAPagar = totalAPagar + (item.quantidade * item.precoUnit);
}

console.log(`Olá, ${comanda.nomeCliente}. Agradecemos por sua compra. O valor para pagamento é R$ ${totalAPagar / 100}.`)