let nota = parseFloat(prompt(`Digite a nota (0 a 100):`));

let conceito = nota >= 90 ? `A`
  : nota >= 80 ? `B`
  : nota >= 70 ? `C`
  : nota >= 60 ? `D`
  : `F`;

alert(`Conceito: ${conceito}`);