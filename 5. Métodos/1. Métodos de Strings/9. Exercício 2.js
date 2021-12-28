const valorGringo = "1,350,000";

let resultado = valorGringo;
let resultadoAnterior = "";

while (resultado !== resultadoAnterior) {
    resultadoAnterior = resultado;
    resultado = resultado.replace(",", ".");
}

console.log(resultado);
