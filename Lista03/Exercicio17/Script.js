let temperatura = parseFloat(prompt(`Digite a temperatura:`));
let unidade = prompt(`Digite a unidade (C ou F):`);

let resultado = unidade === `C`
  ? `${((temperatura * 9/5) + 32).toFixed(1)}°F`
  : `${((temperatura - 32) * 5/9).toFixed(1)}°C`;

alert(`Resultado: ${resultado}`);