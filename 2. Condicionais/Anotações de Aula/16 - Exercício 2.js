const valorDoProduto = 190;
const quantidadeDeParcelas = 14

if(quantidadeDeParcelas === 1) {
    console.log(`Com seu pagamento a vista, há 10% de desconto. O valor para pagamento é de ${valorDoProduto-(valorDoProduto/10)}`)

} else if (quantidadeDeParcelas <= 1 || quantidadeDeParcelas <=6 ) {
    console.log(`O seu pagamento em ${quantidadeDeParcelas} parcelas não gera desconto. O valor das parcelas será de R$ ${(valorDoProduto/quantidadeDeParcelas).toFixed(2)} sem juros.`);

} else if (quantidadeDeParcelas >= 7) {    
    const compraComJuros = valorDoProduto*((1+0.01)**quantidadeDeParcelas);
    const valorDaParcela = compraComJuros/quantidadeDeParcelas;

    console.log(`O seu pagamento em ${quantidadeDeParcelas} parcelas gera um acréscimo de juros de 1% a.m. Sendo assim, o valor das suas parcelas será de R$ ${valorDaParcela.toFixed(2)} e o total da sua compra será ${compraComJuros.toFixed(2)}.`) 

}

//Verificar porque não dá certo com >12 parcelas.