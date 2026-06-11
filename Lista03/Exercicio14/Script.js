let temperatura = parseFloat(prompt(`Digite a temperatura em °C:`));

let resultado = temperatura < 15 ? `Frio`
  : temperatura <= 25 ? `Agradável`
  : `Quente`;

alert(`Clima: ${resultado}`);