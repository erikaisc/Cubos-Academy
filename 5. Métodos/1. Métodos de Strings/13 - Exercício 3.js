function imprimirData(dia, mes, ano) {
    const diaString = `${dia}`.padStart(2, "0");  //Métodos de STRINGS. Necessário mudar o tipo de var antes.
    const mesString = `${mes}`.padStart(2, "0");

    console.log(`${diaString}/${mesString}/${ano}`);

}

imprimirData(1, 4, 1996)