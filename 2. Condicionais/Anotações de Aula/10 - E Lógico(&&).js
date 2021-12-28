const temIngresso = true;
const censura = 16;
const idade = 17;

//tem ingresso e idade maior ou igual a censura.

if (temIngresso === true && idade>= censura){ //&& só retorna true se as duas condições foram verdadeiras.
    console.log("Entrada Liberada");
} else {
    console.log("Barrada.");
}