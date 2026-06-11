let nota = parseFloat(prompt(`Digite a nota (0 a 10):`));

let resultado = nota >= 9 ? `Excelente`
  : nota >= 7 ? `Bom`
  : nota >= 5 ? `Regular`
  : `Insuficiente`;

alert(`Resultado: ${resultado}`);