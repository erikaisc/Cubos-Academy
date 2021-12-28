const valorDoProduto = 190;
const quantidadeDeParcelas = 3


if(quantidadeDeParcelas === 1) {
    console.log(`Com seu pagamento a vista, há 10% de desconto. O valor para pagamento é de ${valorDoProduto-(valorDoProduto/10)}`)

} else if (quantidadeDeParcelas > 1 || quantidadeDeParcelas <=6 ) {
    console.log(`O seu pagamento em ${quantidadeDeParcelas} parcelas não gera desconto. O valor das parcelas será de R$ ${(valorDoProduto/quantidadeDeParcelas).toFixed(2)}.`)
}