const temIngresso = true;
const censura = 16;
const idade = 16;

if (temIngresso === true && idade>=censura) {
    console.log("Pode entrar no cinema.");
} else if (temIngresso === false && idade>=censura) {
    console.log("Ingressos esgotados.");
} else if (temIngresso === false && idade<censura) {
    console.log("Os ingressos estão esgotados e sua idade não é suficiente.")
} else if (temIngresso === true && idade<censura) {
    console.log("Você não tem idade suficiente.")
}