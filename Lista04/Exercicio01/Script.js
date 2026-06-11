let quantidade = parseInt(prompt(`Digite a quantidade de maçãs:`));

let precoUnitario = quantidade >= 12 ? 1.00 : 1.30;

let total = quantidade * precoUnitario;

alert(`Total da compra: R$ ${total.toFixed(2)}`);