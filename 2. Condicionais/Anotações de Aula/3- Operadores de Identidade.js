const ehIdentico = 18 === 18; //(Comparando o valor e tipo da variável)
console.log(ehIdentico);

const ehIdentico2 = "18"=== 18; //(String + Number)
console.log(ehIdentico2);

const naoEhIdentico = "18"!== 18; //!== equivale a "diferente de" (strict equality)
console.log(naoEhIdentico); 