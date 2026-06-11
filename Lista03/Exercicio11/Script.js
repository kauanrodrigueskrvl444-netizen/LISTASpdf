let valorCompra = parseFloat(prompt(`Digite o valor total da compra:`));
let codigoDesconto = prompt(`Digite o código de desconto:`);

let valorFinal = codigoDesconto === `DESC10`
  ? valorCompra * 0.90
  : valorCompra;

alert(`Valor final: R$ ${valorFinal.toFixed(2)}`);