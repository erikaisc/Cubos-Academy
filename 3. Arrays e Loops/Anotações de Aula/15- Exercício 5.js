const listaDeNomes = ["Ana","Maria","Antônio","Júnior","João","Marta","André","Carla","Vitor"];

let encontrado = false;
for(let i = 0; i < listaDeNomes.length; i++) {
    const item = listaDeNomes[i];

    if(item==="João") {
        console.log(`João está no índice ${i}`);
        encontrado=true;
        break;
    }
} 
if(!encontrado) {
    console.log("Não Encontrado");
}