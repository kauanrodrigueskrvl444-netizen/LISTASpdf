let n1 = parseFloat(prompt(`Digite o primeiro número:`));
let n2 = parseFloat(prompt(`Digite o segundo número:`));
let n3 = parseFloat(prompt(`Digite o terceiro número:`));

let maior = n1 > n2 && n1 > n3 ? n1
  : n2 > n1 && n2 > n3 ? n2
  : n3;

alert(`O maior número é: ${maior}`);