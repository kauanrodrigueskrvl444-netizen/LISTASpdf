let valorCompra = parseFloat(prompt(`Digite o valor da compra:`));

let valorFinal = valorCompra > 100
  ? valorCompra * 0.90
  : valorCompra;

alert(`Valor final: R$ ${valorFinal.toFixed(2)}`);