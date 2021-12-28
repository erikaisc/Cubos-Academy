const nomes = ["José","Pedro","João","Joana","André"];
    console.log(nomes);

    nomes[0] = "Andréia"; //É possível mudar um item do array, mesmo sendo const. Só não é possível reatribuir valor da variável nomes. Por exemplo, colocar "nomes=..."

    const x = 3;
    nomes[1] = "Andréia"; 
    nomes[2] = "Andréia"; 
    nomes[x] = "Andréia"; 


    console.log(nomes);