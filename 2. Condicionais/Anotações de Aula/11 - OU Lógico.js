const temIngresso = false;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

if(temIngresso === true) {
    if(idade>= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
}else {
    console.log("Barrada.");
}

//Quando se trata de variáveis booleanas, pode-se omitir o true ou false. Exemplo:

// if(temIngresso === true) {
    //if(idade>= censura || estaComOsPais)

    //Será transformado em:
//if(temIngresso) {
    //if(idade>= censura || estaComOsPais)