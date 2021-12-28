const nomesDePaises = ["Brasil","Rússia","Índia","China","África do Sul"];
    console.log(nomesDePaises);

    nomesDePaises.pop();
    console.log(nomesDePaises);

    nomesDePaises.unshift("Canadá");
    console.log(nomesDePaises);

    nomesDePaises.shift();
    console.log(nomesDePaises);

    const ultimoPais = nomesDePaises[nomesDePaises.length - 1]

    console.log(ultimoPais);
    console.log(nomesDePaises[1]);
    console.log(nomesDePaises[2]);