//É uma forma mais simples de escrever o código.

const saldo = 10

if (saldo === 1) {
    console.log(`Você tem ${saldo} real`);
} else {
    console.log(`Você tem ${saldo} reais`);
}

//Para resolver o código acima de forma mais simples:

const saldo = 1
const unidade = (saldo === 1? "real" : "reais")

console.log(`Você tem ${saldo} ${unidade}`);
