function calcularQuadrado(numero) {
  return numero * numero;
}

document.getElementById(`btn`).addEventListener(`click`, function() {
  let numero = parseFloat(prompt(`Digite um número:`));
  let resultado = calcularQuadrado(numero);
  alert(`O quadrado de ${numero} é: ${resultado}`);
});