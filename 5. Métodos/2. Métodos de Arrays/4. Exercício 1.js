function invertendoMeuTexto(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let resultadoFinal = "";

    for (let letra of arrayDeLetras) {
        resultadoFinal += letra;
    }
    console.log(resultadoFinal)
}

invertendoMeuTexto("Cubos Academy");