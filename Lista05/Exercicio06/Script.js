function converterDolarParaReal(dolar) {
  return dolar * 5.65;
}

document.getElementById(`btn`).addEventListener(`click`, function() {
  let dolar = parseFloat(prompt(`Digite o valor em dólares:`));
  let real = converterDolarParaReal(dolar);
  document.getElementById(`resultado`).innerText = `R$ ${real.toFixed(2)}`;
});