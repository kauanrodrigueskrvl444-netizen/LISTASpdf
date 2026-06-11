let idade = parseInt(prompt(`Digite sua idade:`));

let ingresso = idade < 12 ? `Infantil`
  : idade <= 17 ? `Adolescente`
  : idade <= 64 ? `Adulto`
  : `Sênior`;

alert(`Tipo de ingresso: ${ingresso}`);