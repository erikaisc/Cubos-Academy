const temIngresso = false;
const censura = 16;
const idade = 15;

//Ter ingresso e ter idade maior ou igual a censura

if (temIngresso === true) {
    if(idade>= censura){
    console.log("Pode entrar no cinema.");
} else {
    console.log("Barrada");
} 
} else {
    console.log("Barrada por falta de ingresso.")
}
