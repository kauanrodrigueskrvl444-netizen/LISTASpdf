let numero = parseFloat(prompt(`Digite um número:`));

let resultado = numero > 0 ? `Positivo`
  : numero < 0 ? `Negativo`
  : `Zero`;

alert(`Resultado: ${resultado}`);