let temperatura = parseFloat(prompt(`Digite a temperatura em °C:`));

let resultado = temperatura < 0 ? `Muito Frio`
  : temperatura <= 20 ? `Frio`
  : temperatura <= 30 ? `Agradável`
  : `Calor`;

alert(`Clima: ${resultado}`);