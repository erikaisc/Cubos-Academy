const palavra = "supercalifragilisticexpialidocious";
let quantidade = 0;

for(let letra of palavra) {
    if(letra === "a"){
        quantidade++;
    }
}
    if(quantidade === 0){
        console.log("Não há letras 'a' na sua palavra");
    } else if(quantidade === 1) {
        console.log("Há uma letra 'a' na sua palavra");
} else{
    console.log(`A quantidade de letras "a" na sua palavra é ${quantidade}`);
}